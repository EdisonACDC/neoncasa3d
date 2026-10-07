/** Import the documented, metre-based NeonCasa Scanner format. No code, URLs or HA entities are imported. */
import { newFloor, type Floor, type Vec2 } from './model.ts';
export const SCAN_FORMAT = 'neoncasa3d-scan';
export const MAX_SCAN_BYTES = 8 * 1024 * 1024;
type RecordValue = Record<string, unknown>;
const invalid = (message: string): never => { throw new Error(message); };
const record = (v: unknown): RecordValue => v && typeof v === 'object' && !Array.isArray(v) ? v as RecordValue : invalid('Struttura della scansione non valida.');
const list = (v: unknown, max: number): unknown[] => Array.isArray(v) && v.length <= max ? v : invalid('Elenco mancante o troppo grande.');
const number = (v: unknown, min = -100, max = 100): number => typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max ? v : invalid('Misura non valida o fuori dai limiti.');
const name = (v: unknown, fallback: string): string => typeof v === 'string' && v.trim() ? v.trim().slice(0, 60) : fallback;
const round = (v: number) => Math.round(v * 1000) / 1000;
const point = (v: unknown): Vec2 => { const p = list(v, 2); if (p.length !== 2) invalid('Punto non valido.'); return [number(p[0]), number(p[1])]; };
const cross = (a: Vec2, b: Vec2, c: Vec2) => (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
function polygon(v: unknown): Vec2[] {
  const p = list(v, 200).map(point);
  if (p.length > 3 && Math.hypot(p[0]![0]-p.at(-1)![0],p[0]![1]-p.at(-1)![1]) < .001) p.pop();
  if (p.length < 3) invalid('La stanza non ha un perimetro valido.');
  let area = 0;
  for (let i=0;i<p.length;i++) {
    const a=p[i]!,b=p[(i+1)%p.length]!;
    if (Math.hypot(b[0]-a[0],b[1]-a[1]) < .02) invalid('Perimetro con punti duplicati o lati troppo corti.');
    area += a[0]*b[1]-b[0]*a[1];
    for (let j=i+2;j<p.length;j++) {
      if (i===0 && j===p.length-1) continue;
      const c=p[j]!,d=p[(j+1)%p.length]!;
      if (cross(a,b,c)*cross(a,b,d)<=0 && cross(c,d,a)*cross(c,d,b)<=0 && Math.max(Math.min(a[0],b[0]),Math.min(c[0],d[0]))<=Math.min(Math.max(a[0],b[0]),Math.max(c[0],d[0])) && Math.max(Math.min(a[1],b[1]),Math.min(c[1],d[1]))<=Math.min(Math.max(a[1],b[1]),Math.max(c[1],d[1]))) invalid('Il perimetro della stanza si incrocia.');
    }
  }
  if (Math.abs(area)<.5) invalid('Stanza troppo piccola o perimetro incompleto.');
  return p;
}
const CATEGORIES: Record<string, string> = {
  bed:'bed',sofa:'sofa',chair:'chair',table:'table',storage:'tall_cabinet',refrigerator:'fridge',stove:'stove',oven:'stove',dishwasher:'dishwasher',washerDryer:'washer',sink:'washbasin',toilet:'wc',bathtub:'bathtub',television:'tv_board',stairs:'stairs'
};
export interface ScanPreview { floor: Floor; warnings: string[]; }
/** All rooms must be from one continuous RoomPlan session and one physical floor. */
export function parseScan(text: string, id: () => string): ScanPreview {
  if (new TextEncoder().encode(text).length > MAX_SCAN_BYTES) invalid('File troppo grande (massimo 8 MB).');
  let raw: unknown; try { raw=JSON.parse(text); } catch { return invalid('Il file non contiene JSON valido.'); }
  const data=record(raw);
  if (data.format!==SCAN_FORMAT || data.version!==1 || data.units!=='m' || data.coordinates!=='arkit-xz') invalid('Serve un file JSON di NeonCasa Scanner, formato versione 1. USDZ e scansioni di altre app non sono ancora supportati.');
  const rooms=list(data.rooms, 50); if (!rooms.length) invalid('La scansione non contiene stanze.');
  const floor=newFloor(id(), name(data.name,'Piano scansionato'),0), warnings:string[]=[];
  let baseY: number | undefined; let skipped=0; const objectIds=new Set<string>();
  rooms.forEach((value,index)=>{
    const room=record(value),points=polygon(room.points),y=number(room.floorY),height=number(room.height,.5,10);
    baseY ??= y; if (Math.abs(y-baseY)>.3) invalid('La scansione contiene livelli diversi: esporta un piano alla volta.');
    floor.height=Math.max(index?floor.height:0,height);
    const rid=id(); floor.rooms.push({id:rid,name:name(room.name,`Stanza ${index+1}`),area_id:null,points,floor_material:'wood',wall_heights:points.map(()=>height)});
    for (const value of list(room.objects, 500)) {
      const obj=record(value),category=typeof obj.category==='string'?obj.category:'',type=Object.hasOwn(CATEGORIES,category)?CATEGORIES[category]:undefined;
      if (!type) {skipped++;continue;}
      if (typeof obj.id==='string' && objectIds.has(obj.id)) continue;
      const x=number(obj.x),z=number(obj.z),bottom=number(obj.bottom,-.3,10),w=number(obj.width,.02,30),d=number(obj.depth,.02,30),h=number(obj.height,.02,10),rotation=number(obj.rotation,-360,360);
      if (typeof obj.id==='string') objectIds.add(obj.id);
      floor.furniture.push({id:id(),type,x,z,w,d,h,rotation,variant:null,name:typeof obj.name==='string' ? name(obj.name,category) : null,mount_y:Math.max(0,bottom),entity:'none',power:'none'});
      if (floor.furniture.length>1000) invalid('Troppi mobili nella scansione (massimo 1000).');
    }
    for (const value of list(room.openings, 300)) {
      const o=record(value),p:Vec2=[number(o.x),number(o.z)],w=number(o.width,.05,30),h=number(o.height,.05,10),sill=number(o.sill,-.3,10);
      if (!['door','window','opening'].includes(String(o.kind))) {skipped++;continue;}
      let best={edge:0,distance:Infinity,offset:0,length:0};
      points.forEach((a,i)=>{const b=points[(i+1)%points.length]!,dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),off=((p[0]-a[0])*dx+(p[1]-a[1])*dz)/len,t=Math.max(0,Math.min(len,off));const distance=Math.hypot(p[0]-a[0]-dx*t/len,p[1]-a[1]-dz*t/len);if(distance<best.distance)best={edge:i,distance,offset:off,length:len};});
      if(best.distance>.35 || best.offset-w/2<-.05 || best.offset+w/2>best.length+.05 || sill+h>height+.15) {skipped++;continue;}
      floor.openings.push({id:id(),room_id:rid,edge:best.edge,offset:Math.max(Math.min(w,best.length)/2,Math.min(best.length-Math.min(w,best.length)/2,best.offset)),width:Math.min(w,best.length),type:o.kind==='window'?'window':'door',style:o.kind==='opening'?'passage':null,sill:Math.max(0,sill),height:h,hinge:'left',leaves:1,swing:'in',cover:'none',contact:'none',tilt:'none',contact2:null});
      if(floor.openings.length>1000) invalid('Troppe aperture nella scansione.');
    }
  });
  // One common translation preserves the arrangement and rotation of every room and object.
  const points=floor.rooms.flatMap(r=>r.points),minX=Math.min(...points.map(p=>p[0])),maxX=Math.max(...points.map(p=>p[0])),minZ=Math.min(...points.map(p=>p[1])),maxZ=Math.max(...points.map(p=>p[1]));
  const dx=(minX+maxX)/2,dz=(minZ+maxZ)/2;
  for(const r of floor.rooms)r.points=r.points.map(p=>[round(p[0]-dx),round(p[1]-dz)]);
  for(const f of floor.furniture){f.x=round(f.x-dx);f.z=round(f.z-dz);}
  if(skipped)warnings.push(`${skipped} elementi non riconosciuti o non collocabili sono stati esclusi.`);
  warnings.push('Controlla misure, orientamento dei mobili e porte. Le scansioni possono contenere errori; luci e sensori vanno collegati manualmente.');
  return {floor,warnings};
}
