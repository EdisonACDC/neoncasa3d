import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseScan, MAX_SCAN_BYTES } from './lidar.ts';
const room = () => ({name:'Sala',floorY:-1.2,height:2.7,points:[[10,20],[14,20],[14,23],[10,23]],objects:[{id:'sofa-1',category:'sofa',x:12,z:22,bottom:0,width:2,depth:.8,height:.9,rotation:90}],openings:[{kind:'door',x:12,z:20,sill:0,width:.9,height:2.1}]});
const file = () => ({format:'neoncasa3d-scan',version:1,units:'m',coordinates:'arkit-xz',name:'Piano terra',rooms:[room()]});
let serial=0; const parse=(v:unknown)=>parseScan(JSON.stringify(v),()=>`scan-${++serial}`);
test('metres, common coordinates, furniture rotation, opening offsets and no entity auto-bind',()=>{
 const {floor}=parse(file());assert.deepEqual(floor.rooms[0]!.points,[[-2,-1.5],[2,-1.5],[2,1.5],[-2,1.5]]);
 assert.equal(floor.furniture[0]!.x,0);assert.equal(floor.furniture[0]!.z,.5);assert.equal(floor.furniture[0]!.rotation,90);assert.equal(floor.furniture[0]!.entity,'none');assert.equal(floor.rooms[0]!.area_id,null);assert.equal(floor.openings[0]!.edge,0);assert.equal(floor.openings[0]!.offset,2);assert.equal(floor.openings[0]!.cover,'none');assert.equal(floor.height,2.7);
});
test('concave room geometry is preserved, not replaced by a rectangle',()=>{const d=file();d.rooms[0]!.points=[[0,0],[4,0],[4,2],[2,2],[2,4],[0,4]];d.rooms[0]!.openings=[];const r=parse(d);assert.equal(r.floor.rooms[0]!.points.length,6)});
test('adjacent rooms retain alignment and detected object ids are deduplicated',()=>{const d=file();const b=room();b.points=b.points.map(([x,z])=>[x!+4,z!]);b.openings=[];d.rooms.push(b);const f=parse(d).floor;assert.equal(f.rooms[0]!.points[1]![0],f.rooms[1]!.points[0]![0]);assert.equal(f.furniture.length,1)});
test('reject mixed floors rather than silently flatten a house',()=>{const d=file();const b=room();b.floorY=1.5;d.rooms.push(b);assert.throws(()=>parse(d),/livelli diversi/)});
test('reject wrong format, wrong units, unknown version, incomplete JSON and oversized files',()=>{
 assert.throws(()=>parse({...file(),units:'cm'}),/formato/);assert.throws(()=>parse({...file(),version:2}),/formato/);assert.throws(()=>parse({floors:[]}),/formato/);assert.throws(()=>parseScan('{',()=>''),/JSON/);assert.throws(()=>parseScan(' '.repeat(MAX_SCAN_BYTES+1),()=>''),/grande/);
});
test('reject non-finite and malformed coordinates, self-crossing outlines and zero dimensions',()=>{
 const a=file();a.rooms[0]!.points=[[0,0],[4,4],[0,4],[4,0]];assert.throws(()=>parse(a),/incrocia/);
 const b=file();b.rooms[0]!.objects[0]!.width=0;assert.throws(()=>parse(b),/Misura/);
 const c=file();c.rooms[0]!.points[0]![0]=Infinity;assert.throws(()=>parse(c),/Misura/);
 const d=file();d.rooms[0]!.points=[[0,0],[4,0],[4,0],[0,3]];assert.throws(()=>parse(d),/duplicati|incrocia/);
});
test('unsupported furniture and openings far from walls produce a warning, never invented geometry',()=>{const d=file();d.rooms[0]!.objects[0]!.category='unknown';d.rooms[0]!.openings[0]!.z=21.5;const r=parse(d);assert.equal(r.floor.furniture.length,0);assert.equal(r.floor.openings.length,0);assert.match(r.warnings[0]!,/2 elementi/)});
test('repeated imports get independent ids; input is not mutated',()=>{const d=file(),saved=JSON.stringify(d),a=parse(d),b=parse(d);assert.notEqual(a.floor.id,b.floor.id);assert.notEqual(a.floor.rooms[0]!.id,b.floor.rooms[0]!.id);assert.equal(JSON.stringify(d),saved)});
