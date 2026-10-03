var re=globalThis,ae=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol(),Vn=new WeakMap,Vt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ae&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Vn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Vn.set(e,t))}return t}toString(){return this.cssText}},Hn=r=>new Vt(typeof r=="string"?r:r+"",void 0,Ae),tt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new Vt(e,r,Ae)},Dn=(r,t)=>{if(ae)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=re.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},Fe=ae?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Hn(e)})(r):r;var{is:Ns,defineProperty:Bs,getOwnPropertyDescriptor:Us,getOwnPropertyNames:js,getOwnPropertySymbols:Ks,getPrototypeOf:qs}=Object,le=globalThis,Wn=le.trustedTypes,Gs=Wn?Wn.emptyScript:"",Xs=le.reactiveElementPolyfillSupport,Ht=(r,t)=>r,Pe={toAttribute(r,t){switch(t){case Boolean:r=r?Gs:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Bn=(r,t)=>!Ns(r,t),Nn={attribute:!0,type:String,converter:Pe,reflect:!1,useDefault:!1,hasChanged:Bn};Symbol.metadata??=Symbol("metadata"),le.litPropertyMetadata??=new WeakMap;var ot=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Nn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Bs(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=Us(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nn}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;let t=qs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){let e=this.properties,n=[...js(e),...Ks(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Fe(i))}else t!==void 0&&e.push(Fe(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Pe).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Pe;this._$Em=i;let a=o.fromAttribute(e,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let o=this.constructor;if(i===!1&&(s=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??Bn)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ot.elementStyles=[],ot.shadowRootOptions={mode:"open"},ot[Ht("elementProperties")]=new Map,ot[Ht("finalized")]=new Map,Xs?.({ReactiveElement:ot}),(le.reactiveElementVersions??=[]).push("2.1.2");var He=globalThis,Un=r=>r,ce=He.trustedTypes,jn=ce?ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,Qn="$lit$",dt=`lit$${Math.random().toFixed(9).slice(2)}$`,Jn="?"+dt,Ys=`<${Jn}>`,gt=document,Wt=()=>gt.createComment(""),Nt=r=>r===null||typeof r!="object"&&typeof r!="function",De=Array.isArray,Qs=r=>De(r)||typeof r?.[Symbol.iterator]=="function",Re=`[ 	
\f\r]`,Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kn=/-->/g,qn=/>/g,mt=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gn=/'/g,Xn=/"/g,Zn=/^(?:script|style|textarea|title)$/i,We=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=We(1),z=We(2),rr=We(3),_t=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Yn=new WeakMap,ft=gt.createTreeWalker(gt,129);function ti(r,t){if(!De(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return jn!==void 0?jn.createHTML(t):t}var Js=(r,t)=>{let e=r.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",o=Dt;for(let a=0;a<e;a++){let l=r[a],c,d,u=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===Dt?d[1]==="!--"?o=Kn:d[1]!==void 0?o=qn:d[2]!==void 0?(Zn.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=mt):d[3]!==void 0&&(o=mt):o===mt?d[0]===">"?(o=i??Dt,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?mt:d[3]==='"'?Xn:Gn):o===Xn||o===Gn?o=mt:o===Kn||o===qn?o=Dt:(o=mt,i=void 0);let v=o===mt&&r[a+1].startsWith("/>")?" ":"";s+=o===Dt?l+Ys:u>=0?(n.push(c),l.slice(0,u)+Qn+l.slice(u)+dt+v):l+dt+(u===-2?a:v)}return[ti(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Bt=class r{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,o=0,a=t.length-1,l=this.parts,[c,d]=Js(t,e);if(this.el=r.createElement(c,n),ft.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=ft.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Qn)){let p=d[o++],v=i.getAttribute(u).split(dt),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:_[2],strings:v,ctor:_[1]==="."?Le:_[1]==="?"?Te:_[1]==="@"?Ce:St}),i.removeAttribute(u)}else u.startsWith(dt)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(Zn.test(i.tagName)){let u=i.textContent.split(dt),p=u.length-1;if(p>0){i.textContent=ce?ce.emptyScript:"";for(let v=0;v<p;v++)i.append(u[v],Wt()),ft.nextNode(),l.push({type:2,index:++s});i.append(u[p],Wt())}}}else if(i.nodeType===8)if(i.data===Jn)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(dt,u+1))!==-1;)l.push({type:7,index:s}),u+=dt.length-1}s++}}static createElement(t,e){let n=gt.createElement("template");return n.innerHTML=t,n}};function kt(r,t,e=r,n){if(t===_t)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=Nt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=kt(r,i._$AS(r,t.values),i,n)),t}var Oe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??gt).importNode(e,!0);ft.currentNode=i;let s=ft.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Ut(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Ve(s,this,t)),this._$AV.push(c),l=n[++a]}o!==l?.index&&(s=ft.nextNode(),o++)}return ft.currentNode=gt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Ut=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=kt(this,t,e),Nt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==_t&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&Nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Bt.createElement(ti(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new Oe(i,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=Yn.get(t.strings);return e===void 0&&Yn.set(t.strings,e=new Bt(t)),e}k(t){De(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new r(this.O(Wt()),this.O(Wt()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Un(t).nextSibling;Un(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},St=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,i){let s=this.strings,o=!1;if(s===void 0)t=kt(this,t,e,0),o=!Nt(t)||t!==this._$AH&&t!==_t,o&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=kt(this,a[n+l],e,l),c===_t&&(c=this._$AH[l]),o||=!Nt(c)||c!==this._$AH[l],c===y?t=y:t!==y&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Le=class extends St{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Te=class extends St{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Ce=class extends St{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=kt(this,t,e,0)??y)===_t)return;let n=this._$AH,i=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ve=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){kt(this,t)}};var Zs=He.litHtmlPolyfillSupport;Zs?.(Bt,Ut),(He.litHtmlVersions??=[]).push("3.3.3");var ei=(r,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new Ut(t.insertBefore(Wt(),s),s,void 0,e??{})}return i._$AI(r),i};var Ne=globalThis,Q=class extends ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ei(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _t}};Q._$litElement$=!0,Q.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:Q});var to=Ne.litElementPolyfillSupport;to?.({LitElement:Q});(Ne.litElementVersions??=[]).push("4.2.2");async function Be(r,t){return(await r.callWS({type:"neoncasa3d/image/get",image_id:t})).data}async function de(r,t,e){await r.callWS({type:"neoncasa3d/image/set",image_id:t,data:e})}async function ni(r){return(await r.callWS({type:"neoncasa3d/history/list"})).snapshots}async function ii(r){await r.callWS({type:"neoncasa3d/history/snapshot"})}async function si(r,t){return(await r.callWS({type:"neoncasa3d/history/restore",snapshot_id:t})).revision}async function oi(r,t){return r.callWS({type:"neoncasa3d/packs/import",pack:t})}async function ri(r,t){await r.callWS({type:"neoncasa3d/packs/remove",pack_id:t})}var eo="neoncasa3d.seenOffers";function ai(r){try{localStorage.setItem(eo,JSON.stringify(r.map(t=>t.id)))}catch{}}var li="neoncasa3d.seenUpdates";function ci(r){let t=[];try{t=JSON.parse(localStorage.getItem(li)??"[]")}catch{}return r.filter(e=>!t.includes(`${e.id}@${e.release}`))}function di(r){try{localStorage.setItem(li,JSON.stringify(r.map(t=>`${t.id}@${t.release}`)))}catch{}}function ui(r,t){return t?`${r}${r.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(t.code)}`:r}function Ue(r){return r.callWS({type:"neoncasa3d/license/get"})}function je(r,t){return r.callWS({type:"neoncasa3d/license/activate",key:t})}function hi(r){return r.callWS({type:"neoncasa3d/license/remove"})}function pi(r){return r.callWS({type:"neoncasa3d/license/refresh"})}function mi(r){return r.callWS({type:"neoncasa3d/backup/export"})}function fi(r,t,e){return r.callWS({type:"neoncasa3d/backup/import",building:t,packs:e})}function gi(r,t){return r.callWS({type:"neoncasa3d/packs/install",pack_id:t})}var _i=[],Ke=new Map,no=0;function bi(r){_i=r,Ke=new Map(r.flatMap(t=>t.items.map(e=>[jt(t.id,e.id),e]))),no++}function vi(){return _i}function jt(r,t){return`pack:${r}:${t}`}function qe(r){return r.startsWith("pack:")}var io={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function yi(r){return j(r)?.parts.find(t=>t.screen)}function j(r){if(!qe(r))return;let t=Ke.get(r);if(t)return t;let[,e,...n]=r.split(":"),i=io[e];return i?Ke.get(`pack:${i}:${n.join(":")}`):void 0}function ue(r){return et[r]??j(r)?.size??[.6,.6,.8]}function Ge(r){return ki.has(r)||!!j(r)?.electric}function Mt(r,t){let e=t.split("-")[0];return r.name[e]??r.name.en??Object.values(r.name)[0]??r.id}function Xe(r,t){let e=j(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return $i;if(t.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return wi(r,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,r.height-t.h);default:return e?0:xi(t)}}var Si=["always","no_power","never"],Mi=["gable","hip","pent","flat"];function Ye(r,t,e){return r?t?!!e.lock_plan:!!r.locked:!1}var zi=["rain","snow","fog","clouds","lightning","sky"],Qe=["rain","snow","clouds","lightning","sky"],Ii=["lawn","terrace","path","driveway","pool","bed","hedge","fence"],so={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function oo(r){return r.elevation>.3?0:-.2}function Ei(r,t,e){let n=(r.outdoor??[]).find(i=>i.type!=="hedge"&&i.type!=="fence"&&i.type!=="pool"&&O([t,e],i.points));return oo(r)+(n?so[n.type]:0)}var ro={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},Ai=["wood","oak","tiles","carpet","stone","concrete"],Fi={type:"none",pitch:35,overhang:.4},ao={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Fi}};function Pi(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var lo=2.75;function Ri(r,t){if(t!=null&&Number.isFinite(t))return Math.round(t*lo*100)/100;let e=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function Oi(r,t,e){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),s=n.length?Math.ceil(Math.max(...n))+1:0,o=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let c=s+l%3*4.5,d=o+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function Li(r,t,e,n){let i=r.rotation*Math.PI/180,s=Math.cos(i),o=Math.sin(i),[a,l]=t,c=r.x-a*(r.w/2)*s+l*(r.d/2)*o,d=r.z-a*(r.w/2)*o-l*(r.d/2)*s,u=e[0]-c,p=e[1]-d,v=b=>Math.max(.1,Math.round(b/n)*n),_=v((u*s+p*o)*a),h=v((-u*o+p*s)*l),$=b=>Math.round(b*1e3)/1e3;return{x:$(c+a*(_/2)*s-l*(h/2)*o),z:$(d+a*(_/2)*o+l*(h/2)*s),w:$(_),d:$(h)}}var Ti=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","parking","fridge_smart","stairwell"],Ci={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},bt=["inverter","home_battery","wallbox"],Vi=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),$i=1.75;function Je(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:j(r.type)?.mount!=="ceiling"}function rt(r){return Vi.has(r)||!!j(r)?.light}var co=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ze(r,t,e,n=0){let i=J(r.points),s=i.x1-i.x0-2*n,o=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((i.x0+n+s/e*(c+.5))*1e3)/1e3,Math.round((i.z0+n+o/t*(l+.5))*1e3)/1e3];O(d,r.points)&&a.push(d)}return a}function zt(r,t,e){let n=o=>Math.round(o*1e3)/1e3,[i,s]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(r[0]+i*t),n(r[1]+s*t)]}function xi(r){switch(r.type){case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;default:return 0}}function wi(r,t,e){let n=0;for(let i of r.furniture)!(co.has(i.type)||j(i.type)?.surface)||!O([t,e],rn(i))||(n=Math.max(n,i.h));return n}var ki=new Set([...Vi,"radiator","robot_vacuum","inverter","home_battery","wallbox","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),et={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var tn=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],en=["standard","bars"];function nn(r,t){return r.type==="door"?r.style&&tn.includes(r.style)?r.style:t?"front":"interior":r.style&&en.includes(r.style)?r.style:"standard"}function sn(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var he={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function on(r){if(r.type==="garage")return"garage";let t=r.leaves===2;return r.type==="door"?!t&&r.style&&sn(r.style)?"front":t?"door_double":"door":r.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function pe(r){r.energy={...ro,...r.energy??{}},r.presence=r.presence??[],r.settings={...ao,...r.settings,roof:{...Fi,...r.settings?.roof??{}}};for(let t of r.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(n=>({...n,panel:n.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light."));if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let s=n[i.mount??"ceiling"],[o,a,l]=et[s];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:o,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light."))}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function V(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function G(r){let t=0;for(let e=0;e<r.length;e++){let[n,i]=r[e],[s,o]=r[(e+1)%r.length];t+=n*o-s*i}return t/2}function It(r){return Math.abs(G(r))}function nt(r){let t=G(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((s,o)=>s+o[0],0)/i,r.reduce((s,o)=>s+o[1],0)/i]}let e=0,n=0;for(let i=0;i<r.length;i++){let[s,o]=r[i],[a,l]=r[(i+1)%r.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function me(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[i,s]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function J(r){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[s,o]of r)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),i=Math.max(i,o);return{x0:t,z0:e,x1:n,z1:i}}function rn(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=r.w/2,s=r.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([o,a])=>[r.x+o*e-a*n,r.z+o*n+a*e])}function O(r,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[s,o]=t[n],[a,l]=t[i];o>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-o)/(l-o)+s&&(e=!e)}return e}var Hi={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Di="neoncasa3d";function uo(r){let t=structuredClone(r);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Wi(r,t){return{format:Di,version:1,exported_at:new Date().toISOString(),building:t?uo(r):structuredClone(r)}}function Ni(r){let t;try{t=JSON.parse(r)}catch{throw new Error("not_json")}let e=t,n=e?.format===Di?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return pe(n)}function Bi(r){let t=new Set;for(let e of r.floors){e.background?.image_id&&t.add(e.background.image_id);for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function an(r,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var ho={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},po=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),mo=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),fo=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),fe=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Gi=new Set(["light","switch","fan"]);function Xi(r){return r.slice(0,r.indexOf("."))}function C(r){return ho[Xi(r)]??null}function qt(r){return r!==null&&r!=="scene"&&r!=="script"}function ge(r,t){let e=r.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&r.devices?.[e.device_id]?.area_id||null:null}function Ui(r,t){let e=C(t);if(!e)return!1;let n=r.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=r.states[t];if(!i)return!1;let s=i.attributes.device_class;return e==="sensor"?s?po.has(s):mo.has(String(i.attributes.unit_of_measurement??"")):e==="binary"?!!s&&fo.has(s):!0}var go=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ji(r,t){if(C(t)!=="sensor")return!1;let e=r.entities?.[t];if(e?.hidden||e?.entity_category)return!1;let n=r.states[t];return!n||!n.attributes.unit_of_measurement||go.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Zi(n)}var ln=null;function Gt(r){let t=ln;if(t&&t.entities===r.entities&&t.devices===r.devices&&(t.states===r.states||(t.states=r.states,Object.keys(r.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],s=new Map;for(let o of Object.keys(r.entities??{})){let a=r.entities[o],l=a.device_id;l&&mn(r,o)&&(n.get(l)??n.set(l,[]).get(l)).push(o),l&&!a.hidden&&!a.entity_category&&(s.get(l)??s.set(l,new Set).get(l)).add(Xi(o));let c=Ui(r,o),d=ge(r,o);if(!d){(c||ji(r,o))&&qt(C(o))&&i.push(o);continue}c&&(e.get(d)??e.set(d,[]).get(d)).push(o)}if(r.entities)for(let o of Object.keys(r.states))r.entities[o]||(Ui(r,o)||ji(r,o))&&qt(C(o))&&i.push(o);i.sort((o,a)=>fe.indexOf(C(o))-fe.indexOf(C(a))||B(r,o).localeCompare(B(r,a)));for(let[o,a]of e){let l=r.areas?.[o]?.name;a.sort((c,d)=>{let u=fe.indexOf(C(c)),p=fe.indexOf(C(d));return u-p||B(r,c,l).localeCompare(B(r,d,l))})}return ln={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:e,power:n,unassigned:i,domains:s},ln}function vt(r,t){return!t||!r.entities?[]:Gt(r).areas.get(t)??[]}function Yi(r,t){return r.entities?[...Gt(r).areas].filter(([e])=>e!==t).map(([e,n])=>({areaId:e,name:r.areas?.[e]?.name??e,ids:n.filter(i=>qt(C(i)))})).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function Qi(r){return r.entities?Gt(r).unassigned:[]}var cn={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},_o=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),bo=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function dn(r,t){let e=r.entities?.[t]?.device_id,n=e?Gt(r).domains.get(e):void 0;return n&&[...n].some(i=>_o.has(i))?!1:!bo.test(`${t} ${r.states[t]?.attributes.friendly_name??""}`)}function Ji(r,t,e,n){let i=e.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let s=cn[n],o=(u,p)=>O([u,p],e.points),a=t?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>o(u.x,u.z)).map(u=>u.entity_id),c=new Set(a.filter(u=>!o(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...vt(r,e.area_id).filter(u=>!c.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&r.states[u]?.attributes.device_class===s&&dn(r,u))}function vo(r,t){return r.entities?Gt(r).power.get(t)??[]:[]}function B(r,t,e){let i=r.states[t]?.attributes.friendly_name??r.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let s=i.slice(e.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function Zi(r){return!r||r.state==="unavailable"||r.state==="unknown"}function ts(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function un(r,t,e=null){if(r==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function yo(r,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],s=t[(n+1)%t.length],o=s[0]-i[0],a=s[1]-i[1],l=o*o+a*a||1,c=Math.min(1,Math.max(0,((r[0]-i[0])*o+(r[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-i[0]-o*c,r[1]-i[1]-a*c))}return e}function es(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,i=n.map(g=>g[0]),s=n.map(g=>g[1]),o=Math.min(...i),a=Math.min(...s),l=Math.max(...i),c=Math.max(...s),d=Math.min(l-o,c-a),u=Math.max(.1,Math.min(.25,d/8)),p=Math.min(.35,d/5),v=nt(n),_=[];for(let g=o+u/2;g<l;g+=u)for(let m=a+u/2;m<c;m+=u){let x=[g,m];if(!O(x,n))continue;let w=yo(x,n);w<p||_.push({p:x,wall:w})}_.length||_.push({p:v,wall:0});let h=[...e],$=[],b=Math.min(.7,d/4);for(let g of t){let m=C(g)==="light",x=_[0].p,w=-1/0;for(let{p:M,wall:E}of _){let F=h.length?Math.min(...h.map(P=>Math.hypot(M[0]-P[0],M[1]-P[1]))):3,I=Math.hypot(M[0]-v[0],M[1]-v[1]),A=Math.min(F,3)*2;I<b&&!m&&(A-=10),A-=m?I*.35:E*1.2,A>w+1e-9&&(w=A,x=M)}let k=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];h.push(k),$.push({entity_id:g,x:k[0],z:k[1],y:null,mount:null})}return $}var $o=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),xo=new Set(["garage","gate"]),wo=new Set(["window","opening"]);function Kt(r,t,e=!1){let n=new Map;return t.length&&r.forEach((i,s)=>{let o=e&&t.length===1?t[0]:t[s];o&&n.set(i.id,o)}),n}function ns(r,t){let e=new Map;for(let n of t)for(let i of n.rooms){let s=n.openings.filter(g=>g.room_id===i.id).sort((g,m)=>g.edge-m.edge||g.offset-m.offset);if(!s.length)continue;let o=vt(r,i.area_id),a=g=>r.states[g]?.attributes.device_class,l=o.filter(g=>C(g)==="cover"&&$o.has(a(g))),c=s.filter(g=>g.type==="window"),d=s.filter(g=>g.type==="door"),u=s.filter(g=>g.type==="garage"),p=Kt(c,l,!0),v=Kt(c,o.filter(g=>C(g)==="binary"&&wo.has(a(g)))),_=Kt(d,o.filter(g=>C(g)==="binary"&&a(g)==="door")),h=Kt(u,o.filter(g=>C(g)==="cover"&&xo.has(a(g)??""))),$=Kt(u,o.filter(g=>C(g)==="binary"&&a(g)==="garage_door")),b=(g,m)=>g==="none"?null:g??m??null;for(let g of s){let m=g.type==="window"?p:g.type==="garage"?h:null,x=g.type==="window"?v:g.type==="garage"?$:_;e.set(g.id,{cover:b(g.cover,m?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:b(g.contact,x.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:g.leaves===2&&g.contact2&&g.contact2!=="none"?g.contact2:null,tilt2:g.leaves===2&&g.tilt2&&g.tilt2!=="none"?g.tilt2:null,position:g.position&&g.position!=="none"?g.position:null,positionInverted:!!g.position_inverted})}}return e}var ko=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function hn(r){if(!r||Zi(r))return null;let t=r.attributes.window_state;for(let e of[typeof t=="string"?t:null,r.state]){if(!e)continue;let n=ko.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function pn(r,t){let e=new Map,n=[];for(let o of t){let a=r.entities?.[o]?.device_id??`entity:${o}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(o)}let i=n.map(o=>{let a=e.get(o),l=a.find(c=>!r.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),s=new Map(t.map((o,a)=>[o,a]));return i.sort((o,a)=>s.get(o.primary)-s.get(a.primary))}function So(r,t){return pn(r,t).map(e=>e.primary)}var Mo={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},zo=new Set(["tv_board","tv_wall"]);function is(r,t){let e=r.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),s=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===s||s.length>=3&&i.includes(s)}function _e(r){return zo.has(r)||!!yi(r)}function ss(r){return _e(r)||r==="desk"||r==="fridge_smart"}var Ki={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function mn(r,t){return t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="power"}function Io(r,t){if(mn(r,t))return t;let e=r.entities?.[t]?.device_id;return e?vo(r,e).find(n=>n!==t)??null:null}function fn(r,t){let e=new Map;for(let n of t){let i=new Set(n.furniture.flatMap(s=>[s.entity,s.power]).filter(s=>!!s&&s!=="none"));for(let s of n.furniture){let o=s.type in Ki,a=o?Ki[s.type]:Mo[s.type];if(!a&&s.entity==null&&s.power==null)continue;let l=n.rooms.find(v=>v.points.length>=3&&O([s.x,s.z],v.points)),c=l?So(r,vt(r,l.area_id)):[],d=v=>`${v} ${B(r,v)}`,u=s.entity==="none"?null:s.entity??null;if(s.entity==null){let v=c.filter(_=>!i.has(_));if(o){let _=v.filter(h=>C(h)==="light");u=_.find(h=>a.test(d(h)))??_[0]??null}else if(s.type==="robot_vacuum"){let _=l?.area_id??null;u=Object.keys(r.entities??{}).find(h=>h.startsWith("vacuum.")&&!i.has(h)&&ge(r,h)===_)??null}else if(s.type==="radiator"){let _=v.filter(h=>C(h)==="climate");u=_.find(h=>a.test(d(h)))??_[0]??null}else if(_e(s.type)){let _=v.filter(h=>C(h)==="media");u=_.find(h=>r.states[h]?.attributes.device_class==="tv")??_.find(h=>a?.test(d(h)))??_[0]??null}else a&&(u=v.find(_=>["switch","media","fan"].includes(C(_)??"")&&a.test(d(_)))??null);u&&i.add(u)}let p=s.power==="none"?null:s.power??null;s.power==null&&(p=u?Io(r,u):null,!p&&a&&l&&!o&&(p=vt(r,l.area_id).find(_=>mn(r,_)&&!i.has(_)&&a.test(d(_)))??null),p&&i.add(p)),(u||p)&&e.set(s.id,{entity:u,power:p})}}return e}var qi=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function os(r,t,e){if(e==="none")return null;if(e)return e;let n=t?r.entities?.[t]?.device_id:null;if(!n||!r.entities)return null;for(let i of Object.values(r.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(qi.test(i.translation_key??"")||qi.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var D=(r,t,e,n,i="")=>z`<rect class=${i} x=${Math.min(r,e)} y=${Math.min(t,n)} width=${Math.abs(e-r)} height=${Math.abs(n-t)} />`,H=(r,t,e,n,i="")=>z`<line class=${i} x1=${r} y1=${t} x2=${e} y2=${n} />`,W=(r,t,e,n="")=>z`<circle class=${n} cx=${r} cy=${t} r=${e} />`,gn=(r,t,e,n,i="")=>z`<ellipse class=${i} cx=${r} cy=${t} rx=${e} ry=${n} />`;function _n(r,t,e){let n=[];for(let i=1;i<e;i++){let s=-r/2+r/e*i;n.push(H(s,t/2,s,t/2-Math.min(.12,t*.3)))}return n}function rs(r,t,e,n){let i=Math.min(.24,t*.28),s=n?Math.min(.2,r*.12):0,o=[D(-r/2,-t/2,r/2,-t/2+i,"nc3d-sym-fill")];n&&o.push(D(-r/2,-t/2,-r/2+s,t/2,"nc3d-sym-fill"),D(r/2-s,-t/2,r/2,t/2,"nc3d-sym-fill"));let a=r-2*s;for(let l=1;l<e;l++){let c=-r/2+s+a/e*l;o.push(H(c,-t/2+i,c,t/2-.02))}return o}function as(r,t,e){switch(r){case"sofa":return rs(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return rs(t,e,1,!0);case"bench":return[D(-t/2,-e/2,t/2,-e/2+.08,"nc3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[D(-t/2,-e/2,t/2,-e/2+.08,"nc3d-sym-fill"),D(-t/2,-e/2,-t/2+.08,e/2,"nc3d-sym-fill"),H(-t/2+n,-e/2+n,t/2,-e/2+n),H(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[D(-t/2,-e/2,t/2,-e/2+.06,"nc3d-sym-fill")];case"office_chair":return[W(0,.03,Math.min(t,e)*.36),D(-t*.35,-e/2+.02,t*.35,-e/2+.1,"nc3d-sym-fill")];case"bar_stool":case"table_round":return[W(0,0,Math.min(t,e)*.42)];case"stool":return[D(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[D(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return r==="desk"&&n.push(H(-.3,-e/2+.1,.3,-e/2+.1,"nc3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,s=[D(-t/2,-e/2,t/2,-e/2+.07,"nc3d-sym-fill"),H(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let o=0;o<n;o++)s.push(D(-t/2+.13+i*o,-e/2+.12,-t/2+.07+i*(o+1),-e/2+.12+Math.min(.4,e*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return _n(t,e,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[D(-t/2,-e/2,t/2,-e/2+.03,"nc3d-sym-fill"),..._n(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[H(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[H(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"nc3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[W(-t*.22,-e*.2,n),W(t*.22,-e*.2,n*.8),W(-t*.22,e*.2,n*.8),W(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[D(-n/2,-e/2+.1,n/2,e/2-.08),W(0,-e/2+.06,.025,"nc3d-sym-fill")]}case"dishwasher":return[H(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"nc3d-sym-strong")];case"washer":case"dryer":return[W(0,.05,Math.min(t,e)*.3),H(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[D(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),W(-t/2+.14,0,.03,"nc3d-sym-fill")];case"shower":return[H(-t/2,-e/2,t/2,e/2),H(t/2,-e/2,-t/2,e/2),W(0,0,.04)];case"wc":return[D(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"nc3d-sym-fill"),gn(0,e*.1,t*.36,e*.3)];case"washbasin":return[gn(0,.03,t*.34,e*.3)];case"tv_board":return[H(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"nc3d-sym-strong"),..._n(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[H(-t/2,0,t/2,0,"nc3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[W(0,0,Math.min(t,e)*.45,"nc3d-sym-fill"),W(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[W(0,0,Math.min(t,e)*.5,"nc3d-sym-fill"),W(0,0,Math.min(t,e)*1.6)];case"parking":return[D(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),H(-t*.15,e/2-.5,0,e/2-.22,"nc3d-sym-strong"),H(0,e/2-.22,t*.15,e/2-.5,"nc3d-sym-strong")];case"robot_vacuum":return[D(-t*.45,-e/2,t*.45,-e/2+e*.3,"nc3d-sym-fill"),W(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let s=1;s<i;s++)n.push(H(-t/2+t/i*s,-e/2,-t/2+t/i*s,e/2));return n}case"lamp_panel":return[D(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"nc3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[W(0,0,n*.9,"nc3d-sym-fill"),W(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let s=0;s<8;s++){let o=s/8*Math.PI*2;i.push(H(Math.cos(o)*n*1.05,Math.sin(o)*n*1.05,Math.cos(o)*n*1.35,Math.sin(o)*n*1.35))}return i}case"lamp_wall":return[D(-t/2,-e/2,t/2,-e/2+.03,"nc3d-sym-fill"),gn(0,.01,t*.4,e*.4)];case"led_strip":return[H(-t/2,0,t/2,0,"nc3d-sym-strong")];case"plant":return[W(0,0,Math.min(t,e)*.46),W(0,0,Math.min(t,e)*.25)];case"rug":return[D(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let s=1;s<n;s++)i.push(H(-t/2,e/2-e/n*s,t/2,e/2-e/n*s));return i.push(H(0,e/2-.1,0,-e/2+.25,"nc3d-sym-strong"),H(-.15,-e/2+.45,0,-e/2+.25,"nc3d-sym-strong"),H(.15,-e/2+.45,0,-e/2+.25,"nc3d-sym-strong")),i}default:{let n=j(r);return n?Eo(n,t,e):y}}}function Eo(r,t,e){return r.symbol?.length?r.symbol.map(n=>n.shape==="rect"?D((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e,n.fill?"nc3d-sym-fill":""):n.shape==="circle"?W(n.x*t,n.z*e,n.r*Math.min(t,e)):H(n.x1*t,n.z1*e,n.x2*t,n.z2*e)):r.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?W(n.x*t,n.z*e,Math.min(n.w*t,n.d*e)/2):D((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e))}var Ao=.05,Fo=.2,Po=.12;function Ro(r){let t=[];return r.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let s=G(i)>=0;for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],u=Math.hypot(c,d);if(u<.05)continue;let p=[c/u,d/u],v=s?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let _=[-p[1],p[0]],h=a[0]*p[0]+a[1]*p[1],$=l[0]*p[0]+l[1]*p[1];t.push({room:n,index:o,dir:p,normal:_,offset:a[0]*_[0]+a[1]*_[1],outside:v[0]*_[0]+v[1]*_[1]>0?1:-1,t0:Math.min(h,$),t1:Math.max(h,$)})}}),t}function ls(r,t=.6){let e=Ro(r),n=e.map((d,u)=>u),i=d=>n[d]===d?d:n[d]=i(n[d]),s=[];for(let d=0;d<e.length;d++)for(let u=d+1;u<e.length;u++){let p=e[d],v=e[u];if(p.room===v.room||Math.abs(p.dir[0]*v.dir[1]-p.dir[1]*v.dir[0])>Ao||p.outside===v.outside)continue;let _=(v.offset-p.offset)*p.outside;_>t||_<-Po||Math.abs(_)<1e-4||Math.min(p.t1,v.t1)-Math.max(p.t0,v.t0)<Fo||(s.push(Math.round(_*1e3)/1e3),n[i(d)]=i(u))}if(!s.length)return{rooms:r.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:s};let o=new Map;e.forEach((d,u)=>{let p=i(u);if(p===u&&!e.some((_,h)=>h!==u&&i(h)===u))return;let v=o.get(p)??[];v.push(u),o.set(p,v)});let a=r.map(d=>d.points.map(()=>new Map));for(let[d,u]of o){let p=u.reduce((v,_)=>v+e[_].offset,0)/u.length;for(let v of u){let _=e[v],h=p-_.offset,$=[_.normal[0]*h,_.normal[1]*h],b=r[_.room].points.length;a[_.room][_.index].set(d,$),a[_.room][(_.index+1)%b].set(d,$)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:r.map((d,u)=>({...d,points:d.points.map((p,v)=>{let _=p[0],h=p[1];for(let[$,b]of a[u][v].values())_+=$,h+=b;return[l(_),l(h)]})})),gaps:s}}function cs(r){let t=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}var Oo=.25,ds=r=>Math.round(r*1e3)/1e3;function bn(r,t,e,n,i){let s=r.rooms.find(o=>o.points.length>=3&&O([t,e],o.points));return!s||O([n,i],s.points)?[n,i]:O([n,e],s.points)?[n,e]:O([t,i],s.points)?[t,i]:[t,e]}function be(r,t,e,n=Oo){let i=r.rooms.find(c=>c.points.length>=3&&O([t.x,t.z],c.points));if(!i)return null;let s=i.points,o=G(s)>=0?1:-1,a=e/2,l=null;for(let c=0;c<s.length;c++){let d=s[c],u=s[(c+1)%s.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let v=[(u[0]-d[0])/p,(u[1]-d[1])/p],_=[-v[1]*o,v[0]*o],h=(t.x-d[0])*v[0]+(t.z-d[1])*v[1];if(h<0||h>p)continue;let b=r.rooms.some(E=>E.id!==i.id&&E.points.some((F,I)=>{let A=E.points[(I+1)%E.points.length],P=Math.abs((F[0]-d[0])*_[0]+(F[1]-d[1])*_[1]),R=Math.abs((A[0]-d[0])*_[0]+(A[1]-d[1])*_[1]);return P<.02&&R<.02}))?a:0,g=(t.x-d[0])*_[0]+(t.z-d[1])*_[1]-b,m=Math.atan2(-_[0],_[1])*180/Math.PI,x=E=>Math.abs((t.rotation-E+540)%360-180),k=[{rotation:m,extent:t.d/2},{rotation:m+90,extent:t.w/2},{rotation:m-90,extent:t.w/2}].reduce((E,F)=>x(F.rotation)<x(E.rotation)?F:E);if(x(k.rotation)>50)continue;let M=g-k.extent;Math.abs(M)>n||l&&Math.abs(M)>=Math.abs(l.gap)||(l={x:ds(t.x-_[0]*M),z:ds(t.z-_[1]*M),rotation:(Math.round(k.rotation)%360+360)%360,gap:M})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Lo(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],s=n*n+i*i,o=s?Math.max(0,Math.min(1,((r[0]-t[0])*n+(r[1]-t[1])*i)/s)):0;return Math.hypot(r[0]-t[0]-n*o,r[1]-t[1]-i*o)}function us(r,t,e=.03){return r.every(n=>O(n,t)||t.some((i,s)=>Lo(n,i,t[(s+1)%t.length])<=e))}function hs(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}var vn=["camera_cockpit","weather","screens"],To=["fridge_smart"];var ps=r=>(r??navigator.language).toLowerCase().startsWith("de");function Xt(r){return ps(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Co={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Yt(r,t){let e=ps(r),n=e?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=t?Co[t]:void 0,s=i?e?i.de:i.en:"",[o,a]=s.split("#");return`${n}${o}?lang=${e?"de":"en"}${a?`#${a}`:""}`}function yn(r=vi()){let t=new Set;for(let e of r)for(let n of e.features??[])(vn.includes(n)||To.includes(n))&&t.add(n);return t}function $n(r,t){return yn(t).has(r)}var ms=Math.PI/180;function Et(r){let t=Math.min(r.x0,r.x1),e=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),i=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:t,u1:e,w:i-n,at:(s,o)=>[s,r.flip?i-o:n+o]}:{u0:n,u1:i,w:e-t,at:(s,o)=>[r.flip?e-o:t+o,s]}}function Qt(r){let t=Et(r).w,e=r.eave_a,n=r.eave_b,i=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*ms),s=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*ms);if(r.shape==="flat")return{vr:t/2,rh:e,y:()=>e};if(r.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};let o=i+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(i+s))):t/2,a=e+o*i;return{vr:o,rh:a,y:l=>l<=o?e+l*i:n+(t-l)*s}}function fs(r,t,e){let n=Et(t),i=r.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(d=>i.some(u=>O(d,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function gs(r,t,e,n,i){let s=[(t+n)/2,(e+i)/2],o=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&O(s,l.points))).map(a=>a.elevation+a.height);return o.length?Math.max(...o):null}function ve(r){return Qt(r).rh}function _s(r,t=e=>`roof_${e+1}`){let e=r.settings.roof?.pitch??35,n=r.settings.wall_exterior,i=r.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),s=[],o=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(m=>m.points.length>=3),d=[...new Set(c.flatMap(m=>m.points.map(x=>a(x[0]))))].sort((m,x)=>m-x),u=[...new Set(c.flatMap(m=>m.points.map(x=>a(x[1]))))].sort((m,x)=>m-x),p=d.length-1,v=u.length-1,_=(m,x)=>m.some(w=>O(x,w.points)),h=[];for(let m=0;m<v;m++){h.push([]);for(let x=0;x<p;x++){let w=[(d[x]+d[x+1])/2,(u[m]+u[m+1])/2];h[m].push(_(c,w)&&!_(o,w))}}let $=h.map(m=>m.map(()=>!1)),b=(m,x)=>h[x][m]&&!$[x][m],g=l.elevation+l.height;for(let m=0;m<v;m++)for(let x=0;x<p;x++){if(!b(x,m))continue;let w=x;for(;w+1<p&&b(w+1,m);)w++;let k=m;for(;k+1<v&&Array.from({length:w-x+1},(A,P)=>b(x+P,k+1)).every(Boolean);)k++;for(let A=m;A<=k;A++)for(let P=x;P<=w;P++)$[A][P]=!0;let M=d[x]-n,E=d[w+1]+n,F=u[m]-n,I=u[k+1]+n;Math.min(E-M,I-F)<.8||s.push({id:t(s.length),x0:a(M),z0:a(F),x1:a(E),z1:a(I),shape:"gable",axis:E-M>=I-F?"x":"z",eave_a:a(g),eave_b:a(g),pitch_a:e,pitch_b:e,base:a(g),overhang:null})}o.push(...c)}return s}var U=(r,t)=>[r[0]-t[0],r[1]-t[1]],yt=(r,t)=>[r[0]+t[0],r[1]+t[1]],ut=(r,t)=>[r[0]*t,r[1]*t],Zt=(r,t)=>r[0]*t[0]+r[1]*t[1],Jt=(r,t)=>r[0]*t[1]-r[1]*t[0],ye=r=>Math.hypot(r[0],r[1]),at=r=>{let t=ye(r)||1;return[r[0]/t,r[1]/t]},bs=r=>[-r[1],r[0]],vs=r=>[r[1],-r[0]];function At(r,t,e=[]){let n=t.eps??.005,i=[],s=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let g=0;g<o.length;g++)if(Math.abs(o[g][0]-b[0])<=n&&Math.abs(o[g][1]-b[1])<=n)return g;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of r){let g=b.points;if(g.length<3||Math.abs(G(g))<1e-6)continue;let m=G(g)>0,x=g.map(a);for(let w=0;w<g.length;w++){let k=x[w],M=x[(w+1)%g.length];k!==M&&l.push(m?{u:k,v:M,room:b.id,edge:w,forward:!0}:{u:M,v:k,room:b.id,edge:w,forward:!1})}}let c=s.map(b=>[a(b.a),a(b.b)]),d=[];for(let b of l){let g=o[b.u],m=o[b.v],x=U(m,g),w=ye(x),k=ut(x,1/w),M=[];for(let F=0;F<o.length;F++){if(F===b.u||F===b.v)continue;let I=U(o[F],g),A=Zt(I,k);A<=n||A>=w-n||Math.abs(Jt(k,I))<=n&&M.push({t:A,id:F})}M.sort((F,I)=>F.t-I.t);let E=[{t:0,id:b.u},...M,{t:w,id:b.v}];for(let F=0;F+1<E.length;F++){let I=E[F],A=E[F+1],P=b.forward?I.t:w-A.t,R=b.forward?A.t:w-I.t;d.push({u:I.id,v:A.id,room:b.room,edge:b.edge,t0:P,t1:R})}}let u=new Map;for(let b of d){let g=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,m=u.get(g);m||u.set(g,m=[]),m.push(b)}let p=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),v=b=>{let g=b.map(m=>r.find(x=>x.id===m.room)?.wall_heights?.[m.edge]).filter(m=>typeof m=="number"&&m>0);return g.length?Math.min(...g):void 0},_=[];for(let b of u.values()){let g=b[0],m=b.find(x=>x!==g&&x.u===g.v&&x.v===g.u&&x.room!==g.room);for(let x of b)x!==g&&x!==m&&x.room!==g.room&&i.push(`overlap:${g.room}:${x.room}`);m?_.push({a:g.u,b:g.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:g.room,roomRight:m.room,sources:[p(g),p(m)],height:v([g,m])}):_.push({a:g.u,b:g.v,left:0,right:t.exterior,exterior:!0,roomLeft:g.room,roomRight:null,sources:[p(g)],height:v([g])})}s.forEach((b,g)=>{let[m,x]=c[g];if(m===x)return;let w=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],k=r.find(F=>F.points.length>=3&&O(w,F.points))?.id??null,M=(b.thickness??t.interior)/2,E=typeof b.height=="number"&&b.height>0?b.height:void 0;_.push({free:b.id,a:m,b:x,left:M,right:M,exterior:!1,roomLeft:k,roomRight:k,sources:[],height:E})}),_=Ho(_,o);let h=Wo(_,o);return{walls:_.map((b,g)=>{let m=o[b.a],x=o[b.b],w=h.get(`${g}:a`),k=h.get(`${g}:b`),M=No([w.right,k.left,x,k.right,w.left,m],1e-6);return{id:Vo(m,x),a:[m[0],m[1]],b:[x[0],x[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:M,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(i)]}}function Vo(r,t){let e=s=>Math.round(s*100),[n,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function ys(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Ho(r,t){let e=r.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((s,o)=>{for(let a of[s.a,s.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(o)}});for(let[s,o]of i){if(o.length!==2)continue;let a=e[o[0]],l=e[o[1]];if(a.b!==s&&(a=ys(a)),l.a!==s&&(l=ys(l)),a.a===l.b)continue;let c=at(U(t[a.b],t[a.a])),d=at(U(t[l.b],t[l.a]));if(Math.abs(Jt(c,d))>1e-6||Zt(c,d)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let u={...a,b:l.b,sources:Do(a.sources,l.sources)},p=e.filter((v,_)=>_!==o[0]&&_!==o[1]);p.push(u),e.length=0,e.push(...p),n=!0;break}}return e}function Do(r,t){let e=r.map(n=>({...n}));for(let n of t){let i=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Wo(r,t){let e=new Map;r.forEach((i,s)=>{let o=at(U(t[i.b],t[i.a])),a=[[i.a,{key:`${s}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${s}:b`,d:ut(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,s]of e){let o=t[i];s.sort((c,d)=>c.angle-d.angle);let a=c=>({left:yt(o,ut(bs(c.d),c.left)),right:yt(o,ut(vs(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let d=s[c],u=s[(c+1)%s.length],p=yt(o,ut(bs(d.d),d.left)),v=yt(o,ut(vs(u.d),u.right)),_=Jt(d.d,u.d);if(Math.abs(_)<1e-4)continue;let h=Jt(U(v,p),u.d)/_,$=yt(p,ut(d.d,h));ye(U($,o))>l||(n.get(d.key).left=$,n.get(u.key).right=$)}}return n}function No(r,t){let e=r.filter((i,s)=>ye(U(i,r[(s+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],o=e[i],a=e[(i+1)%e.length],l=U(o,s),c=U(a,o);if(Math.abs(Jt(at(l),at(c)))<1e-7&&Zt(l,c)>0){e=e.filter((d,u)=>u!==i),n=!0;break}}}return e}function Ft(r,t,e){let n=r.points[t],i=r.points[(t+1)%r.points.length],s=at(U(i,n));return yt(n,ut(s,e))}function Pt(r,t,e){if(r.wall){let i=e.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let s=at(U(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,yt(i.a,[-s[1],s[0]])]},edge:0}}let n=t.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}function xn(r,t,e){if(!t.wall)return Bo(r,e.room,e.edge,t.offset);let n=r.find(s=>s.free===t.wall);if(!n)return null;let i=Ft(e.room,0,t.offset);return{wall:n,s:Zt(U(i,n.a),at(U(n.b,n.a)))}}function Bo(r,t,e,n){for(let i of r){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Ft(t,e,n);return{wall:i,s:Zt(U(o,i.a),at(U(i.b,i.a)))}}return null}var Rt=Math.PI/180,xs=1.13,wn=1.72,it=.025,$t=.07,ws=.25;function Ot(r,t){let e=[];for(let n of r.floors){if(t&&n.id!==t)continue;let{walls:i}=At(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let s of i){if(!s.exterior||s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,d=-o/l,u=[s.a[0]+c*s.right,n.elevation,s.a[1]+d*s.right],p=Math.min(n.height,s.height??n.height);e.push({key:`wall:${n.id}:${s.id}`,section:null,side:"top",flat:!1,o:u,eu:[o/l,0,a/l],es:[0,1,0],n:[c,0,d],lu:l,ls:p,pitch:90,span:()=>[0,l],facing:[c,d],wall:{floorId:n.id}})}}return e}var ht="ground";function Uo(r){return[...r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??r.floors[0]??null}function ks(r,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],s=Uo(r),o=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Ei(s,o,a)):t.base??0;return{key:ht,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function st(r,t,e=N(r)){return t.face===ht?ks(r,t):t.face.startsWith("wall:")?Ot(r,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Ss(r,t,e){let n=Ot(r,e),i=r.settings.north??0,s=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},o=[...n].sort((l,c)=>s(c)-s(l))[0];if(!o)return null;let a={...Lt(o,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((o.lu-.8+it)/(wn+it))),a.u=Math.round((o.lu-(a.cols*wn+(a.cols-1)*it))/2*100)/100,a.v=Math.round(Math.max(0,o.ls-xs-.3)*100)/100,a}function Sn(r,t){let e=r.floors.flatMap(s=>s.rooms.flatMap(o=>o.points)),n=e.length?Math.max(...e.map(s=>s[0]))+3:0,i=e.length?Math.min(...e.map(s=>s[1])):0;return{id:t,face:ht,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function jo(r){return r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function N(r){let t=r.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(g=>Ko(g,fs(r,g,g.overhang??t.overhang)));let e=jo(r);if(!e)return[];let n=e.rooms.flatMap(g=>g.points.map(m=>m[0])),i=e.rooms.flatMap(g=>g.points.map(m=>m[1])),s=r.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...i)-s,c=Math.max(...i)+s,d=e.elevation+e.height;if(t.type==="flat")return[Ms("main",null,o,l,a,c,d+ws)];let u=a-o>=c-l,p=t.ridge==="short"?!u:u,v=(p?c-l:a-o)/2,_=v*Math.tan(t.pitch*Rt),h=(g,m,x)=>p?[g,d+x,(l+c)/2+m]:[(o+a)/2+m,d+x,g],[$,b]=p?[o,a]:[l,c];return[-1,1].map(g=>we(`main:${g<0?"a":"b"}`,null,g<0?"a":"b",h($,g*v,0),h(b,g*v,0),h($,0,_),t.pitch,()=>[0,b-$]))}function Ko(r,t){let e=Et(r),n=Qt(r),i=(h,$,b)=>{let[g,m]=e.at(h,$);return[g,b,m]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(r.shape==="flat"){let h=e.at(a,-s),$=e.at(l,e.w+o);return[Ms(r.id,r.id,Math.min(h[0],$[0]),Math.min(h[1],$[1]),Math.max(h[0],$[0]),Math.max(h[1],$[1]),r.eave_a+ws)]}if(r.shape==="pent")return[we(`${r.id}:a`,r.id,"a",i(a,-s,n.y(-s)),i(l,-s,n.y(-s)),i(a,e.w+o,n.y(e.w+o)),r.pitch_a,()=>[0,c])];let d=r.shape==="hip",u=d?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,p=d?e.u0+u-a:0,v=d?l-(e.u1-u):0,_=[];if(n.vr>.3){let h=Math.hypot(n.vr+s,n.rh-n.y(-s));_.push(we(`${r.id}:a`,r.id,"a",i(a,-s,n.y(-s)),i(l,-s,n.y(-s)),i(a,n.vr,n.rh),r.pitch_a,$=>[p*($/h),c-v*($/h)]))}if(e.w-n.vr>.3){let h=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));_.push(we(`${r.id}:b`,r.id,"b",i(l,e.w+o,n.y(e.w+o)),i(a,e.w+o,n.y(e.w+o)),i(l,n.vr,n.rh),r.pitch_b,$=>[v*($/h),c-p*($/h)]))}return _}function we(r,t,e,n,i,s,o,a){let l=xe($e(i,n)),c=xe($e(s,n)),d=xe(qo(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=xe([-c[0],0,-c[2]]);return{key:r,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:kn($e(i,n)),ls:kn($e(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Ms(r,t,e,n,i,s,o){let a=i-e>=s-n,l=a?i-e:s-n,c=a?s-n:i-e;return{key:`${r}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function te(r){let t=r.module_w||xs,e=r.module_h||wn;return r.portrait===!1?[e,t]:[t,e]}function ke(r){return r.layout?.length?r.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Mn(r,t){return r.flat?Math.min(45,Math.max(0,t.tilt??15))*Rt:r.wall?Math.min(90,Math.max(0,t.tilt??0))*Rt:0}function zn(r,t){let[e,n]=te(t),i=ke(t),s=Math.max(1,...i),a=(i.length-1)*In(r,t)+n*Math.cos(Mn(r,t));return[s*e+(s-1)*it,a]}function In(r,t){let[,e]=te(t),n=Mn(r,t);return r.wall?e*Math.cos(n)+it:r.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+it}function lt(r,t,e=!1){let[n,i]=te(t),s=[],o=Mn(r,t),a=i*Math.cos(o),l=In(r,t),c=ke(t),d=Math.max(1,...c),u=new Set(t.skip??[]),p=(_,h,$)=>[r.o[0]+r.eu[0]*_+r.es[0]*h+r.n[0]*$,r.o[1]+r.eu[1]*_+r.es[1]*h+r.n[1]*$,r.o[2]+r.eu[2]*_+r.es[2]*h+r.n[2]*$],v=(_,h)=>{if(r.unbounded)return!0;if(h<-1e-6||h>r.ls+1e-6)return!1;let[$,b]=r.span(h);return _>=$-1e-6&&_<=b+1e-6};return c.forEach((_,h)=>{let $=t.align==="right"?d-_:t.align==="center"?(d-_)/2:0;for(let b=0;b<_;b++){let g=`${h}:${b}`,m=u.has(g);if(m&&!e)continue;let x=t.u+(b+$)*(n+it),w=t.v+h*l,k=x+n,M=w+(r.flat||r.wall?a:i);if(![[x,w],[k,w],[k,M],[x,M]].every(([R,L])=>v(R,L)))continue;if(r.wall&&o>.001){let R=$t+i*Math.sin(o),[L,K]=t.flip?[R,$t]:[$t,R],Ee=[p(x,w,L),p(k,w,L),p(k,M,K),p(x,M,K)],wt=t.flip?w:M,X=[x+.05,k-.05].map(Z=>[p(Z,wt,0),p(Z,wt,R)]);s.push({corners:Ee,posts:X,cell:g,skipped:m});continue}if(!r.flat){s.push({corners:[p(x,w,$t),p(k,w,$t),p(k,M,$t),p(x,M,$t)],posts:[],cell:g,skipped:m});continue}let E=.15,F=E+i*Math.sin(o),[I,A]=t.flip?[M,w]:[w,M],P=[p(x,I,E),p(k,I,E),p(k,A,F),p(x,A,F)];s.push({corners:P,posts:[x+.05,k-.05].flatMap(R=>[[p(R,I,0),p(R,I,E)],[p(R,A,0),p(R,A,F)]]),cell:g,skipped:m})}}),s}function Se(r,t){let e=[r.eu[0],r.eu[2]],n=[r.es[0],r.es[2]],i=[t[0]-r.o[0],t[1]-r.o[2]],s=e[0]*n[1]-e[1]*n[0];if(Math.abs(s)<1e-9)return null;let o=(i[0]*n[1]-i[1]*n[0])/s,a=(e[0]*i[1]-e[1]*i[0])/s;if(a<0||a>r.ls)return null;let[l,c]=r.span(a);return o>=l&&o<=c?{u:o,s:a}:null}function zs(r,t){let e=null;for(let n of r){if(n.wall){let o=[t[0]-n.o[0],t[1]-n.o[2]],a=o[0]*n.eu[0]+o[1]*n.eu[2],l=o[0]*n.n[0]+o[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=Se(n,t);if(!i)continue;let s=n.o[1]+n.es[1]*i.s;(!e||s>e.y)&&(e={face:n,...i,y:s})}return e?{face:e.face,u:e.u,s:e.s}:null}function ee(r,t){if(r.unbounded)return{u:t.u,v:t.v};let[e,n]=zn(r,t),i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,t.u),Math.max(0,r.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,r.ls-n)))}}function Lt(r,t){let e={id:t,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=te(e),i=.4,s=In(r,e),[o,a]=r.span(r.ls/2);for(e.cols=Math.max(1,Math.floor((a-o-2*i+it)/(n+it))),e.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*i)/s)));e.cols>1&&lt(r,{...e,u:$s(r,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=$s(r,e),e.v=i,e}function $s(r,t){let[e]=te(t),n=t.cols*e+(t.cols-1)*it;return Math.round((r.lu-n)/2*100)/100}function En(r,t){let e=(Math.atan2(r.facing[0],-r.facing[1])/Rt-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Me(r,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Rt-t+720)%360,s=Math.cos((i-180)*Rt);return n.lu*n.ls*(1.2+s)};return[...r].sort((n,i)=>e(i)-e(n))[0]??null}function $e(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function kn(r){return Math.hypot(r[0],r[1],r[2])}function xe(r){let t=kn(r)||1;return[r[0]/t,r[1]/t,r[2]/t]}function qo(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}var Is=.78,Es=1.18;function Tt(r){return{id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||Is,module_h:r.h||Es}}function As(r,t){let e=lt(r,Tt(t))[0];if(!e)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function An(r,t){let e=Is,n=Es,[i,s]=r.span(r.ls/2);return{id:t,face:r.key,u:Math.round((i+s-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(r.ls-n,r.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function ne(r,t,e){let n=ks(r,t),[i,s]=zn(n,t),o=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+s/2),a=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+s/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=o*c[0]+a*c[1]-i/2,p=o*d[0]+a*d[1]-s/2,v=_=>Math.round(_*100)/100;return{u:v(u),v:v(p),rotation:(Math.round(e)%360+360)%360}}function Fn(r,t){let[e,n]=zn(r,t);return[r.o[0]+r.eu[0]*(t.u+e/2)+r.es[0]*(t.v+n/2),r.o[2]+r.eu[2]*(t.u+e/2)+r.es[2]*(t.v+n/2)]}function Pn(r,t,e){let n=e[0]*r.n[0]+e[1]*r.n[1]+e[2]*r.n[2];if(Math.abs(n)<1e-6)return null;let i=((r.o[0]-t[0])*r.n[0]+(r.o[1]-t[1])*r.n[1]+(r.o[2]-t[2])*r.n[2])/n;if(i<=0)return null;let s=[t[0]+e[0]*i-r.o[0],t[1]+e[1]*i-r.o[1],t[2]+e[2]*i-r.o[2]],o=s[0]*r.eu[0]+s[1]*r.eu[1]+s[2]*r.eu[2],a=s[0]*r.es[0]+s[1]*r.es[1]+s[2]*r.es[2];return{t:i,u:o,s:a}}function Fs(r,t,e){if(r.unbounded)return!0;if(e<0||e>r.ls)return!1;let[n,i]=r.span(e);return t>=n&&t<=i}function Ps(r,t,e,n){for(let i of lt(r,t)){let s=i.corners.map(d=>{let u=[d[0]-r.o[0],d[1]-r.o[1],d[2]-r.o[2]];return[u[0]*r.eu[0]+u[1]*r.eu[1]+u[2]*r.eu[2],u[0]*r.es[0]+u[1]*r.es[1]+u[2]*r.es[2]]}),[o,a]=[Math.min(...s.map(d=>d[0])),Math.max(...s.map(d=>d[0]))],[l,c]=[Math.min(...s.map(d=>d[1])),Math.max(...s.map(d=>d[1]))];if(e>=o-.05&&e<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var Os=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Go={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Xo={back:0,right:90,front:180,left:270};function Ls(r,t,e){let n=J(r.points),i=n.x1-n.x0,s=n.z1-n.z0,o=Go[t],a=[],l=(d,u,p,v,_)=>{let[h,$,b]=_??et[d];a.push({id:e(),type:d,x:Rs(u),z:Rs(p),rotation:v,w:h,d:$,h:b,variant:null,entity:null,power:null})},c=.02;for(let d of o.rows){let u=d.items.map($=>({type:$.type,size:$.size??et[$.type]})),p=d.wall==="back"||d.wall==="front"?i:s,v=[],_=0;for(let $ of u){if(_+$.size[0]>p-.1)break;v.push($),_+=$.size[0]}let h=d.align==="start"?.05:d.align==="end"?p-_-.05:(p-_)/2;for(let $ of v){let[b,g]=$.size,m=h+b/2,x=g/2+c;d.wall==="back"?l($.type,n.x0+m,n.z0+x,0,$.size):d.wall==="front"?l($.type,n.x1-m,n.z1-x,180,$.size):d.wall==="right"?l($.type,n.x1-x,n.z0+m,90,$.size):l($.type,n.x0+x,n.z1-m,Xo.left,$.size),h+=b}}for(let d of o.free){let[u,p]=d.size??et[d.type],v=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*d.at[0])),_=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+s*d.at[1]));l(d.type,v,_,d.rotation,d.size)}return a}var Rs=r=>Math.round(r*1e3)/1e3;var Yo={view:"3D",editor:"Disegna casa",all_floors:"Tutti i piani",no_building:"Non hai ancora disegnato la casa.",no_building_admin:"Non hai ancora disegnato la casa. Apri \xABDisegna casa\xBB e aggiungi il primo piano.",open_editor:"Apri editor",loading:"Caricamento \u2026",load_error:"Caricamento non riuscito",saving:"Salvataggio \u2026",saved:"Salvato",save_error:"Salvataggio non riuscito",save_failed_detail:"Salvataggio non riuscito: {error}. Le modifiche rimangono in questo browser.",needs_restart:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora {version}. Riavvia Home Assistant: fino ad allora il salvataggio potrebbe non riuscire.",needs_restart_old:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora quella precedente. Riavvia Home Assistant per poter salvare.",draft_found:"Trovate modifiche non salvate del {time}.",draft_restore:"Ripristina e salva",draft_discard:"Scarta",walls_auto:"Muri interi",walls_cut:"Muri tagliati",reset_view:"Panoramica",back:"Indietro",floor:"Piano",floors:"Piani",add_floor:"Aggiungi piano",floor_from_ha:"Piani di Home Assistant:",floor_empty:"Piano vuoto",level:"Livello {n}",ha_floor:"Piano in Home Assistant",no_ha_floor:"\u2013 nessuno \u2013",area_rooms:"Crea {n} stanze dalle aree di HA",area_rooms_hint:"Crea una stanza di 4 \xD7 3 m per ogni area del piano. Spostala nella posizione corretta e modifica gli angoli.",floor_name:"Nome",elevation:"Quota dal suolo (m)",height:"Altezza soffitto (m)",cut_height:"Altezza taglio (m)",delete_floor:"Elimina piano",delete_floor_confirm:"Eliminare il piano \xAB{name}\xBB con tutte le sue stanze?",move_up:"Sposta su",move_down:"Sposta gi\xF9",default_floor:"Piano terra",new_floor:"Piano {n}",tool_select:"Seleziona",tool_rect:"Rettangolo",tool_polygon:"Forma libera",undo:"Annulla",redo:"Ripeti",fit:"Mostra tutto",room:"Stanza",rooms:"Stanze",room_name:"Nome",area:"Area",no_area:"Nessuna area",material:"Pavimento",x:"X (m)",z:"Y (m)",width:"Larghezza (m)",depth:"Profondit\xE0 (m)",points:"Angoli",delete_point:"Elimina angolo",duplicate:"Duplica",delete:"Elimina",new_room:"Stanza {n}",settings:"Impostazioni",pendant_shape:"Forma",pendant_shade:"Paralume",pendant_globe:"Sfera",pendant_cone:"Cono",pendant_drum:"Cilindro",pkg_open:"Arreda \u2026",pkg_hint:"I mobili si dispongono lungo le pareti; le lampade si collegano alle luci dell'area. Puoi poi modificare ogni elemento. Ctrl+Z annulla tutto.",pkg_done:"Posizionati {n} elementi. Ctrl+Z annulla.",pkg_kitchen_row:"Cucina lineare",pkg_kitchen_row_desc:"Cucina sulla parete posteriore con frigorifero, forno, lavello, lavastoviglie, piano cottura, pensile e tavolo con lampada a sospensione",pkg_kitchen_l:"Cucina a L",pkg_kitchen_l_desc:"Cucina lungo le pareti posteriore e sinistra, isola con sgabelli",pkg_bath:"Bagno",pkg_bath_desc:"Lavabo, WC, vasca, lavatrice e faretto",pkg_bedroom:"Camera da letto",pkg_bedroom_desc:"Letto matrimoniale con due comodini, armadio, cassettiera e plafoniera",pkg_living:"Soggiorno",pkg_living_desc:"Mobile TV, divano, tavolino, tappeto, poltrona, scaffale, piantana e pianta",pkg_dining:"Sala da pranzo",pkg_dining_desc:"Tavolo con quattro sedie, credenza e lampada a sospensione",pkg_office:"Ufficio",pkg_office_desc:"Scrivania con sedia da ufficio, due scaffali e plafoniera",pkg_kids:"Cameretta",pkg_kids_desc:"Letto singolo, scrivania, scaffale e tappeto",pkg_hall:"Ingresso",pkg_hall_desc:"Appendiabiti e due faretti",spots_place:"Posiziona faretti",spots_type:"Lampada",spots_cols:"Colonne (sinistra\u2013destra)",spots_rows:"Righe (davanti\u2013dietro)",spots_add:"Posiziona {n} lampade",spots_placed:"Posizionate {n} lampade.",spots_hint:"Tutte le lampade seguono la luce scelta, per esempio faretti su un unico dimmer. Puoi poi spostarle o collegarle ad altre luci.",cancel:"Annulla",backup:"Backup",backup_history:"Punti di ripristino",backup_none:"Nessun punto disponibile. Durante le modifiche viene conservato al massimo un punto ogni 10 minuti.",backup_summary:"{rooms} stanze, {furniture} elementi",backup_restore:"Ripristina",backup_restore_confirm:"Ripristinare lo stato del {time}? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_restored:"Ripristinato.",backup_file:"File",backup_export:"Esporta",backup_export_share:"Condividi come modello",backup_export_share_hint:"Senza aree, dispositivi, sensori e immagini, per condividerlo con altri.",backup_import:"Importa \u2026",backup_import_confirm:"Sostituire l'intera pianta con il file? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_import_error:"Il file non \xE8 una pianta NeonCasa 3D ({error}).",backup_imported:"Importato.",backup_hint:"Le immagini di sfondo non sono incluse nel file.",backup_full:"Backup completo",backup_full_export:"Salva tutto (pianta, immagini e pacchetti)",backup_full_import:"Ripristina un backup completo \u2026",backup_full_hint:"Un unico file con pianta, sfondi, immagini degli schermi e pacchetti installati. Al ripristino i pacchetti vengono verificati nuovamente; la chiave di licenza non \xE8 inclusa.",backup_full_confirm:"Sostituire pianta, immagini e pacchetti con il backup? Lo stato attuale rimarr\xE0 come punto di ripristino.",backup_full_not_backup:"Questo non \xE8 un backup completo di NeonCasa 3D.",backup_full_restored:"Backup ripristinato: {packs} pacchetti, {pictures} immagini.",backup_full_skipped:"Ignorati (non verificabili o legati a un'altra installazione): {packs}.",export_name_full:"completo",device_confirm:"Chiedi conferma prima di azionare",device_confirm_hint:"Il tocco nella vista 3D, il menu rapido e il pannello stanza chiedono conferma. Il doppio tocco sulla stanza esclude questo dispositivo.",cover_confirm_hint:"Apertura, chiusura e posizione richiedono conferma. Scorrere sull'indicatore ruota la vista senza muovere la tapparella. L'arresto non richiede conferma.",confirm_switch:"Azionare davvero {name}?",split_handle_hint:"Trascina per regolare la larghezza della pianta e della vista 3D",wall_exterior:"Spessore muro esterno (m)",wall_interior:"Spessore muro interno (m)",grid:"Griglia (m)",background:"Modello (immagine della piantina)",background_upload:"Scegli immagine \u2026",background_width:"Larghezza nella pianta (m)",background_opacity:"Opacit\xE0",background_remove:"Rimuovi modello",hint_select:"Seleziona una stanza \xB7 trascina gli angoli \xB7 \xAB+\xBB aggiunge un angolo \xB7 frecce per spostare \xB7 Canc elimina \xB7 Ctrl+Z annulla",hint_rect:"Trascina per disegnare un rettangolo",hint_polygon:"Posiziona gli angoli \xB7 clicca sul primo o premi Invio per chiudere \xB7 Esc annulla",hint_empty:"Aggiungi prima un piano.",area_m2:"{a} m\xB2",overlap_warning:"Le stanze si sovrappongono: i muri in quel punto sono incompleti.",read_only:"Solo gli amministratori possono modificare la pianta.",mat_wood:"Legno",mat_oak:"Rovere",mat_tiles:"Piastrelle",mat_carpet:"Moquette",mat_stone:"Pietra",mat_concrete:"Cemento",card_name:"NeonCasa 3D",card_description:"La tua casa in 3D, in italiano.",stats:"{calls} chiamate grafiche \xB7 {tris} triangoli",stats_fps:"{fps} fps (fotogramma pi\xF9 lento: {ms} ms)",stats_idle:"A riposo (0 fps)",stats_busy_camera:"inquadratura",stats_busy_floors:"piani",stats_busy_openings:"porte/finestre",stats_busy_flash:"lampeggio",stats_busy_roof:"tetto",stats_busy_flow:"flusso energetico",stats_busy_effect:"effetto colore",stats_busy_robot:"robot",stats_busy_orbit:"rotazione vista",stats_busy_tint:"colore stanza",stats_low:"qualit\xE0 tablet, rapporto pixel {r}",stats_full:"qualit\xE0 completa, rapporto pixel {r}",floors_apart:"Separati",floors_stacked:"Sovrapposti",floor_rooms_one:"1 stanza",floor_rooms:"{n} stanze",quality:"Qualit\xE0",quality_auto:"Automatica",quality_low:"Tablet",quality_high:"Alta",state_on:"Acceso",state_off:"Spento",state_open:"Aperto",state_closed:"Chiuso",state_opening:"Apertura",state_closing:"Chiusura",state_playing:"In riproduzione",state_paused:"In pausa",state_idle:"Inattivo",state_locked:"Bloccato",state_unlocked:"Sbloccato",state_detected:"Rilevato",state_clear:"Nessun rilevamento",state_unavailable:"Non disponibile",state_heat:"Riscaldamento",state_cool:"Raffrescamento",state_auto:"Automatico",state_heat_cool:"Caldo/freddo",state_dry:"Deumidificazione",state_fan_only:"Ventilazione",devices:"Dispositivi",devices_none_area:"Collega la stanza a un'area per visualizzare qui i suoi dispositivi.",devices_none:"L'area non contiene dispositivi adatti.",devices_place_all_n:"Posiziona tutti i {n} dispositivi \u2026",devices_place_all_confirm:"Posizionare {n} dispositivi nella stanza? Ctrl+Z o \xABAnnulla\xBB li rimuove tutti in un solo passaggio.",devices_src_area:"Questa area",devices_src_other:"Altre aree",devices_src_none:"Senza area",devices_place:"Posiziona",devices_remove:"Rimuovi",devices_hint:"I dispositivi posizionati appaiono in 3D. Trascinali nella pianta per spostarli.",panel_lights:"Luci",panel_covers:"Tapparelle",panel_climate:"Riscaldamento",panel_media:"Multimedia",panel_switches:"Interruttori",panel_sensors:"Sensori",panel_scenes:"Scene e script",panel_cameras:"Telecamere",camera_live:"Apri diretta",through_camera:"Guarda dalla telecamera",through_blend:"Sovrapposizione",through_back:"Torna alla vista",camera_mount:"Montaggio",camera_mount_wall:"Parete (segue la rotazione)",camera_mount_ceiling:"Soffitto (dome, tutto intorno)",camera_fov:"Campo visivo (\xB0)",camera_reach:"Portata (m)",camera_fov_short:"Angolo \xB0",camera_reach_short:"Portata m",camera_tilt:"Inclinazione verso il basso (\xB0)",camera_tilt_short:"Inclinazione \xB0",camera_aim_hint:"Il settore nella pianta indica dove guarda la telecamera. Trascina la maniglia sulla punta per ruotarla e regolare la portata.",state_recording:"Registrazione",state_streaming:"Trasmissione",panel_all_off:"Spegni tutto",panel_no_area:"La stanza non \xE8 collegata a un'area. Puoi collegarla nell'editor.",panel_empty:"Nessun dispositivo della stanza \xE8 nella pianta. Posizionalo nell'editor o aggiungilo al pannello stanza con \u2606.",close:"Chiudi",brightness:"Luminosit\xE0",color_temp:"Temperatura colore",color:"Colore",position:"Posizione",cover_open:"Apri",cover_stop:"Arresta",cover_close:"Chiudi",target_temp:"Desiderata",current_temp:"Attuale",temp_down:"Pi\xF9 freddo",temp_up:"Pi\xF9 caldo",volume:"Volume",play_pause:"Riproduci/pausa",previous:"Precedente",next:"Successivo",run:"Esegui",details:"Dettagli",hold_hint:"Tocco per azionare \xB7 pressione prolungata per i dettagli",tool_opening:"Porte e finestre",tool_furniture:"Arredamento",qm_off:"Spento",find:"Cerca",find_placeholder:"Dov'\xE8 \u2026? Dispositivo o stanza",find_none:"Nessun risultato",swipe_off:"Spento",panel_pin:"Mostra nel pannello stanza",panel_unpin:"Nascondi dal pannello stanza",devices_panel_hint:"Il pannello mostra i dispositivi della pianta. \u2606 aggiunge un dispositivo al pannello senza posizionarlo.",card_section_view:"Vista",card_size:"Dimensioni",card_size_fixed:"Altezza fissa",card_size_fill:"Riempi lo schermo",card_fill_hint:"Funziona meglio in una vista dashboard di tipo \xABPannello (scheda singola)\xBB: la scheda occupa tutto lo spazio.",card_controls:"Controlli nella scheda",card_floor_thumbs:"Miniature dei piani",card_floor_thumbs_hint:"Piccole immagini dei piani a lato: toccane una per cambiare piano",card_floor_thumbs_hint_start:"La scheda si apre sul piano scelto; le immagini laterali permettono di passare agli altri",card_room_names:"Mostra nomi stanze",card_section_kiosk:"Tablet a parete (chiosco)",card_section_features:"Funzioni",card_weather_plan:"come impostato nella pianta",card_pro_hint:"La traccia del movimento e il meteo sono extra Pro: senza il relativo extra questi comandi non hanno effetto.",card_idle_return:"Torna alla vista iniziale dopo",card_idle_off:"Mai",card_idle_min:"{n} min senza interazioni",card_idle_hint:"Dopo l'attesa la scheda chiude la stanza e torna alla vista iniziale.",card_night:"Oscuramento notturno",card_night_off:"Disattivato",card_night_sun:"In base al sole",card_night_time:"Fascia oraria",card_night_range:"Fascia oraria (es. 22:00-06:00)",card_idle_orbit:"Rotazione vista come salvaschermo",card_idle_orbit_hint:"Dopo il ritorno la vista ruota lentamente finch\xE9 qualcuno tocca il tablet",card_alerts:"Mostra avvisi",card_alerts_hint:"Fumo, gas, CO, acqua, allarme e finestre aperte sotto la pioggia: la stanza lampeggia e compare un avviso in alto",card_alert_jump:"Vai alla stanza di un nuovo avviso",card_alert_jump_hint:"La vista passa automaticamente al piano e alla stanza dell'avviso",card_scenes:"Pulsanti scene nella stanza",card_scenes_hint:"Scene e script dell'area sotto la vista 3D quando \xE8 selezionata una stanza",card_motion_trail:"Traccia del movimento",card_motion_trail_hint:"Movimenti rilevati negli ultimi 30 minuti, con orari (sensori di movimento, presenza e telecamere)",trail_short:"Traccia",weather_short:"Meteo",weather_entity:"Entit\xE0 meteo",weather_effects:"Effetti meteo in 3D",rain_warning:"Attenzione: finestra aperta mentre piove",weather_effect_rain:"Pioggia",weather_effect_snow:"Neve",weather_effect_fog:"Nebbia (ingrigisce la scena)",weather_effect_clouds:"Le nuvole oscurano cielo e sole",weather_effect_lightning:"Fulmini durante i temporali",weather_effect_sky:"Sole e luna nel cielo",weather_entity_hint:"L'entit\xE0 meteo fornisce pioggia, neve, nebbia e nuvole. La selezione automatica usa la prima disponibile.",weather_hint:"Meteo esterno: pioggia, neve, nebbia e nuvole dall'entit\xE0 meteo; sole e luna da sun.sun",card_weather:"Meteo esterno",card_weather_hint:"Pioggia, neve, nebbia e nuvole dalla prima entit\xE0 meteo; weather_entity permette di cambiarla. Con qualit\xE0 tablet vengono mostrate solo le nuvole.",trail_hint:"Traccia dei movimenti rilevati negli ultimi 30 minuti, con orari",alerts:"Avvisi",alert_smoke:"Fumo: {name}",alert_gas:"Gas: {name}",alert_co:"Monossido di carbonio: {name}",alert_water:"Acqua: {name}",alert_alarm:"Allarme scattato",alert_alarm_pending:"Allarme in attesa",alert_window_rain:"Finestra aperta sotto la pioggia: {name}",room_names_short:"Nomi stanze",floor_stack_short_dim:"Attenuati",floor_stack_short_stacked:"Sovrapposti",floor_stack_short_single:"Singolo",size_short_w:"L",size_short_d:"P",size_short_h:"H",import_error_not_json:"Il file non \xE8 in formato JSON.",import_error_not_plan:"Il file non \xE8 una pianta NeonCasa 3D.",export_name_template:"modello",export_name_backup:"backup",card_floor_stack:"Piani sottostanti",floor_stack_dim:"Attenuati",floor_stack_stacked:"Sovrapposti (casa fino a qui)",floor_stack_single:"Nascosti (solo questo piano)",card_control_walls:"Muri interi/tagliati",card_control_floors:"Separa piani",card_control_temperature:"Temperatura",card_control_humidity:"Umidit\xE0",card_control_co2:"CO\u2082",card_controls_hint:"Comandi per muri, separazione piani, temperatura, umidit\xE0 e CO\u2082",card_fullscreen_button:"Pulsante schermo intero",card_fullscreen_button_hint:"Nasconde la dashboard intorno alla scheda, ad esempio su un tablet a parete",fullscreen:"Schermo intero",fullscreen_exit:"Esci da schermo intero",card_section_show:"Mostra",card_floor:"Piano",card_floor_house:"Casa intera (tocca un piano per aprirlo)",card_height:"Altezza (pixel)",card_walls:"Muri",card_quality_hint:"\xABTablet\xBB \xE8 l'impostazione pi\xF9 leggera, ideale per tablet Fire e tablet a parete.",card_flows_switch:"Comando nella scheda",card_flows_on:"Sempre attivo",card_flows_off:"Sempre disattivato",card_energy:"Mostra valori energetici in alto",card_room_panel:"Dettagli stanza al tocco",card_room_panel_hint:"Luci, tapparelle e telecamere della stanza in un pannello laterale",card_explode:"Separa i piani nella vista casa",card_stats:"Prestazioni (fotogrammi al secondo)",card_stats_hint:"Per verificare la fluidit\xE0 della scheda sul dispositivo",packs:"Pacchetti di arredamento",packs_hint:"Si possono importare solo pacchetti firmati dall'editore.",lib_badge_light:"Lampada: collegabile a una luce e azionabile in 3D",lib_badge_electric:"Elettrico: collegabile a un'entit\xE0 e a un sensore di potenza (comandi, immagini e consumi)",lib_badge_hint:"Gli elementi con simbolo si collegano alle entit\xE0: lampade azionabili, schermi con immagini ed elettrodomestici con consumi.",pack_error_wrong_instance:"Pacchetto firmato per un'altra installazione Home Assistant. L'account del negozio pu\xF2 fornirlo per questa installazione.",license_title:"Collegamento al negozio",license_instance:"ID installazione",license_copy:"Copia",license_copied:"ID copiato",license_activate:"Attiva",license_activated:"Collegato: i tuoi pacchetti sono elencati sotto.",license_active:"Collegato come {name} (chiave {key})",license_checked:"Ultimo controllo: {time}",license_refresh:"Controlla ora",license_refreshed:"Controllo completato.",license_remove:"Scollega",license_remove_confirm:"Scollegare il negozio? I pacchetti installati rimangono, ma gli aggiornamenti automatici si interrompono.",license_installed:"installato \xB7 v{release}",license_update_available:"disponibile aggiornamento alla v{release}",license_not_installed:"non ancora installato",license_install:"Installa",license_update:"Aggiorna",license_none:"Nessun pacchetto nell'account.",license_hint:"La chiave di licenza si trova nell'ordine e nell'account su mastershort.de. Inseriscila per vedere i pacchetti acquistati, firmati per questa installazione e aggiornati automaticamente una volta al giorno. I pacchetti installati funzionano anche senza collegamento.",license_shop:"Altri pacchetti nel negozio",license_error_invalid_key:"Chiave non riconosciuta dal negozio. Il formato \xE8 NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"La chiave \xE8 gi\xE0 associata al numero massimo di installazioni consentite.",license_error_shop_unreachable:"Negozio momentaneamente non raggiungibile. I pacchetti installati continuano a funzionare.",license_error_not_owned:"Questo pacchetto non \xE8 presente nell'account.",license_error_no_key:"Inserisci prima la chiave di licenza.",license_error_wrong_instance:"Il negozio ha firmato il pacchetto per un'altra installazione.",license_error_other:"Operazione non riuscita: {detail}",pack_import:"Importa pacchetti di arredamento \u2026",pack_imported:"Importato \xAB{name}\xBB di {publisher}: {n} elementi",packs_imported_n:"Importati {n} pacchetti su {total}",pack_by:"di {publisher} \xB7 {n} elementi",pack_features:"di {publisher} \xB7 abilita {n} funzioni Pro",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Pannello telecamere: vista dalla telecamera e traccia del movimento",pro_name_camera_cockpit:"Pannello telecamere",pro_name_weather:"Meteo esterno",pro_name_screens:"Schermi dal vivo",ext_tab:"Estensioni",offers_title:"Novit\xE0 nel negozio",offers_new:"NOVIT\xC0",offers_loyalty:"Sconto fedelt\xE0: {percent} % su ogni ulteriore pacchetto ed extra Pro",offers_kind_pack:"Pacchetto arredamento",offers_kind_pro:"Extra Pro",offers_kind_bundle:"Raccolta",offers_dot:"Novit\xE0 nel negozio",pack_updated:"{name} aggiornato alla versione {release}.",pack_updated_added:"{name} aggiornato alla versione {release}: {n} nuovi elementi. Guarda il catalogo!",ext_title:"Estensioni",ext_intro:"Pacchetti arredamento ed extra Pro dell'autore di NeonPlan 3D. Installa gli acquisti con la chiave di licenza: si aggiornano automaticamente e funzionano anche senza collegamento.",ext_shop:"Apri negozio",ext_pro:"Extra Pro",ext_active:"attivo",ext_get:"Vedi nel negozio",ext_open:"Apri estensioni",manual:"Manuale",manual_more:"Scopri di pi\xF9",ext_teaser_title:"Altri mobili e funzioni Pro",ext_teaser_text:"Pacchetti arredamento, collegamento al negozio ed extra Pro si trovano in \xABEstensioni\xBB in alto.",pro_feature_weather:"Meteo esterno: pioggia, neve, nuvole, sole e luna",pro_feature_screens:"Schermi dal vivo: colore dell'app e immagini multimediali, regole immagini e immagini delle telecamere sugli schermi",pro_locked:"Funzione disponibile come extra Pro. Dopo l'acquisto appare in Estensioni \u203A Collegamento al negozio, da cui puoi installarla.",pro_shop:"Vai al negozio",pack_licensed:"Licenza intestata a {name}",pack_remove:"Rimuovi",pack_remove_confirm:"Rimuovere \xAB{name}\xBB? I suoi mobili rimarranno nella pianta come semplici blocchi.",pack_missing_item:"Mobile di un pacchetto rimosso",pack_error_bad_signature:"Il pacchetto \xE8 stato modificato o la firma non \xE8 valida.",pack_error_unknown_publisher:"Il pacchetto non proviene da un editore riconosciuto.",pack_error_unsigned:"Il pacchetto non \xE8 firmato.",pack_error_not_a_pack:"Il file non \xE8 un pacchetto di arredamento.",pack_error_invalid_content:"Il pacchetto contiene elementi non validi: {detail}",pack_error_too_large:"Il file \xE8 troppo grande.",pack_error_other:"Importazione non riuscita: {detail}",back_to_room:"Torna a {room}",back_to_floor:"Torna al piano",hint_furniture:"Seleziona una stanza e scegli un elemento a destra \xB7 trascina gli elementi e ridimensionali dagli angoli",furniture_into:"I nuovi elementi vengono inseriti al centro di \xAB{room}\xBB.",furniture_pick_room:"Consiglio: seleziona prima una stanza per inserire i nuovi elementi al centro.",flows:"Flusso energetico",flows_hint:"Mostra o nasconde le linee luminose dal contatore alle utenze",flow_on:"attivo",flow_off:"disattivato",hint_opening:"Clicca su un muro per inserire una porta o finestra; scegli il tipo a destra",preset_door:"Porta",preset_door_double:"Porta a due ante",preset_window:"Finestra",preset_window_double:"Finestra a due ante",preset_terrace:"Portafinestra",preset_terrace_double:"Portafinestra a due ante",preset_garage:"Portone garage",preset_front:"Porta d'ingresso",opening_style:"Stile",style_auto:"Automatico ({style})",style_interior:"Porta interna",style_front:"Porta d'ingresso",style_front_glass:"Porta d'ingresso vetrata",style_sidelight:"Porta d'ingresso con vetro laterale",style_sidelights:"Porta d'ingresso con due vetri laterali",style_glass:"Porta in vetro",style_sliding:"Porta scorrevole",style_passage:"Passaggio (senza porta)",style_standard:"Standard",style_bars:"Con traversini",flip_hinge:"Scambia lato cerniere",flip_main_leaf:"Scambia anta principale",flip_hinge_hint:"Sposta le cerniere sull'altro lato",flip_swing:"Inverti verso di apertura",flip_swing_hint:"La porta si apre verso la stanza oppure verso l'esterno",main_leaf:"Anta principale (vista dalla stanza)",contact_main:"Contatto anta principale",contact_second:"Contatto seconda anta",tool_outdoor:"Esterni",tool_measure:"Disegna con misure",hint_measure:"Clicca sul punto iniziale, poi inserisci a destra lunghezze e direzioni dei muri",measure:"Stanza con misure",measure_start:"Clicca sul punto iniziale nella pianta, ad esempio un angolo della stanza.",measure_from:"Partenza: {x} / {z} m. Clicca per spostarla.",measure_length:"Lunghezza muro successivo (m)",measure_close:"Chiudi stanza",measure_undo:"Rimuovi ultimo muro",measure_gap:"Distanza dal punto iniziale: {gap} m (unita alla chiusura)",measure_hint:"Inserisci una lunghezza e premi una freccia. Se usi misure interne, applica poi \xABChiudi spazi\xBB.",rect_by_size:"Rettangolo con dimensioni",rect_add:"Aggiungi rettangolo",dir_up:"Su",dir_down:"Gi\xF9",dir_left:"Sinistra",dir_right:"Destra",hint_outdoor:"Trascina per disegnare un'area esterna (prato, terrazza, piscina \u2026)",outdoor:"Area esterna",outdoor_type:"Tipo",outdoor_hint:"Le luci esterne illuminano tutte le aree esterne e la facciata.",out_lawn:"Prato",out_terrace:"Terrazza",out_path:"Sentiero",out_driveway:"Vialetto carrabile",out_pool:"Piscina",out_bed:"Aiuola",out_hedge:"Siepe",out_fence:"Recinzione",north:"Nord (\xB0 in senso orario dall'alto)",north_hint:"Il nord serve a calcolare la luce del sole attraverso le finestre.",roof:"Tetto",roof_none:"Nessun tetto",roof_flat:"Tetto piano",roof_gable:"Tetto a due falde",roof_custom:"Sezioni del tetto (personalizzate)",roof_sections:"Sezioni del tetto",roof_sections_hint:"Ogni sezione copre un rettangolo della casa con forma, colmo, quota di gronda e pendenza propri. Trascina per disegnarla; clicca per selezionarla, trascinala per spostarla e usa gli angoli per ridimensionarla.",roof_sections_start:"Crea sezioni dalle stanze",roof_sections_regen:"Ricrea dalle stanze",roof_sections_off:"Torna al tetto unico",roof_regen_confirm:"Sostituire tutte le sezioni del tetto con una nuova proposta basata sulle stanze?",roof_section:"Sezione tetto",roof_section_hint:"Le quote partono dal suolo. Un lato con gronda pi\xF9 bassa scende maggiormente. I tetti a una falda salgono dal primo lato.",roof_shape_gable:"Due falde",roof_shape_hip:"Padiglione",roof_shape_pent:"Una falda",roof_shape_flat:"Piano",roof_axis_x:"Colmo \u2194",roof_axis_z:"Colmo \u2195",roof_eave:"Quota gronda (m)",roof_pitch_short:"Pendenza (\xB0)",roof_height:"Altezza (m)",roof_base:"Sommit\xE0 muri (m)",roof_ridge_height:"Altezza colmo",roof_side_top:"superiore",roof_side_bottom:"inferiore",roof_side_left:"sinistra",roof_side_right:"destra",roof_swap:"Scambia lati",roof_open:"Tettoia (pilastri al posto dei muri)",roof_open_short:"Tettoia",roof_open_hint:"Per terrazze e posti auto coperti: pilastri e travi sostengono il tetto lasciando la vista aperta. Dove incontra il muro della casa, la tettoia si appoggia al muro.",roof_swap_hint:"Scambia gronda e pendenza dei due lati; un tetto a una falda sale nell'altro verso.",roof_pitch:"Pendenza tetto (\xB0)",roof_overhang:"Sporgenza tetto (m)",roof_ridge:"Colmo",roof_ridge_long:"Lungo il lato maggiore",roof_ridge_short:"Lungo il lato minore (es. casa a schiera)",device:"Dispositivo",lamp_mount:"Lampada",lamp_ceiling:"Plafoniera",lamp_floor:"Piantana",lamp_table:"Lampada da tavolo",lamp_wall:"Applique",marker_height:"Altezza indicatore (m)",height_auto:"Altezza automatica",device_centre:"Al centro della stanza",lights_spread:"Distribuisci uniformemente le luci a soffitto",devices_search:"Cerca dispositivi \u2026",devices_more:"Altri {n}",devices_less:"Meno",panel_more:"Altri dispositivi dell'area ({n})",panel_less:"Mostra meno",gaps_close:"Chiudi spazi",gaps_hint:"Unisce stanze distanti fino a 60 cm lungo un muro condiviso. Lo spazio diventa lo spessore del muro interno.",gaps_none:"Nessuno spazio tra le stanze trovato.",gaps_closed:"Chiusi {n} spazi.",gaps_closed_wall:"Chiusi {n} spazi. Spessore muro interno: {t} m.",fps:"FPS",fps_title:"Prestazioni (fotogrammi al secondo)",hint_garage:"Clicca su un muro per aggiungere un portone garage",opening_garage:"Portone garage",garage_hint:"Il portone segue l'entit\xE0 del garage (posizione o aperto/chiuso) o il contatto porta dell'area.",door_hint:"Con un contatto porta l'anta segue l'apertura; senza sensore rimane socchiusa.",hint_door:"Clicca su un muro per aggiungere una porta",hint_window:"Clicca su un muro per aggiungere una finestra",opening_door:"Porta",opening_window:"Finestra",opening_type:"Tipo",opening_position:"Centro dall'angolo (m)",sill:"Altezza davanzale (m)",opening_height:"Altezza (m)",hinge:"Cerniere (vista dalla stanza)",hinge_left:"Sinistra",hinge_right:"Destra",cover_entity:"Tapparella",cover_position_entity:"Sensore posizione (dal vivo)",cover_position_invert:"Sensore invertito (0 = aperto)",contact_entity:"Contatto",sensor_kind:"Tipo sensore",sensor_kind_contact:"Contatto finestra (aperto/chiuso)",sensor_kind_handle:"Sensore maniglia (aperto/ribalta/chiuso)",sensor_kind_contact_tilt:"Contatto + sensore ribalta",handle_entity:"Sensore maniglia",handle_main:"Sensore maniglia anta principale",leaf_main:"Anta principale",leaf_second:"Seconda anta",tilt_entity:"Sensore ribalta",entity_auto:"Automatico ({name})",entity_auto_none:"Automatico (nessuno trovato)",entity_none:"Nessuno",entity_search:"Scrivi per cercare \u2026",opening_hint:"Scegli contatto finestra (aperto/chiuso), sensore maniglia (aperto/ribalta/chiuso) o contatto con sensore ribalta separato. La scelta automatica usa tapparelle e contatti dell'area. Il sensore posizione comunica la posizione della tapparella mentre si muove (0\u2013100 % o 0\u20131, aperto = valore alto) per animarla in 3D.",furniture:"Arredamento",furniture_add:"Aggiungi mobile",furniture_search:"Cerca arredamento \u2026",furniture_type:"Elemento",rotation:"Rotazione (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altezza (m)",furn_sofa:"Divano",furn_armchair:"Poltrona",furn_table:"Tavolo",furn_chair:"Sedia",furn_bed:"Letto",furn_nightstand:"Comodino",furn_wardrobe:"Armadio",furn_shelf:"Scaffale",furn_kitchen:"Base cucina",furn_worktop:"Piano di lavoro",furn_fridge:"Frigorifero",furn_fridge_smart:"Frigorifero smart a due porte",furn_door_left:"Sensore porta sinistra (congelatore)",furn_door_right:"Sensore porta destra (frigorifero)",fridge_hint:"Quando il sensore segnala apertura, la porta si apre in 3D. Lo schermo sulla porta destra mostra immagini secondo le regole, come una TV, mentre la porta \xE8 chiusa.",furn_stove:"Piano cottura",furn_sink:"Lavello",furn_bathtub:"Vasca",furn_shower:"Doccia",furn_wc:"WC",furn_washbasin:"Lavabo",furn_desk:"Scrivania",furn_tv_board:"Mobile TV",furn_plant:"Pianta",furn_rug:"Tappeto",furn_stairs:"Scale",furn_stairwell:"Apertura nel solaio",stairwell_hint:"Apertura in questo piano, per esempio sopra le scale o un soppalco. Deve stare dentro una stanza; pi\xF9 aperture possono sovrapporsi per formare una L. Le scale del piano inferiore che raggiungono questo piano creano l'apertura automaticamente.",tool_hole:"Apertura solaio",tool_roof:"Tetto",tool_energy:"Energia",tool_wall:"Muro",hint_wall:"Trascina per disegnare un muro divisorio \xB7 Maiusc lo mantiene dritto \xB7 Alt disattiva l'aggancio",free_wall:"Muro",wall_length:"Lunghezza (m)",wall_thickness:"Spessore muro (m)",wall_height:"Altezza (m)",wall_height_full:"Altezza intera della stanza",wall_heights:"Altezze muri",wall_n:"Muro {a}\u2013{b}",wall_exterior_short:"muro esterno",room_wall_hint:"Un'altezza ridotta crea un parapetto o un bancone. Per muri condivisi vale l'altezza minore. Porte e finestre terminano all'altezza del muro.",free_wall_hint:"Muro indipendente, per esempio un divisorio. L'incontro con un muro della stanza viene raccordato. Trascina le estremit\xE0 per modificarle o la linea per spostare tutto il muro.",stairwell_outside:"L'apertura supera il confine della stanza e non viene ritagliata. Spostala completamente dentro una stanza o riducila.",hint_hole:"Trascina per disegnare un'apertura nel solaio (scale, soppalco)",hint_roof:"Trascina per disegnare una sezione del tetto \xB7 clicca per selezionare \xB7 trascina per spostare \xB7 angoli per ridimensionare",hint_energy:"Seleziona e trascina un campo fotovoltaico, anche su un'altra falda \xB7 aggiungi campi con + Campo fotovoltaico a destra",furn_parking:"Posto auto",furn_group_vehicles:"Parcheggio",parking_entity:"Sensore \xABauto presente\xBB",parking_vehicle:"Veicolo",parking_vehicle_none:"Nessuno",parking_no_pack:"Nessun pacchetto veicoli importato. I veicoli provengono dal pacchetto \xABVehicles\xBB (Arredamento \u2192 Importa pacchetti).",parking_scale:"Dimensione (%)",parking_type_entity:"Sensore tipo veicolo (facoltativo)",parking_types:"Stato \u2192 veicolo",parking_type_state:"Stato (es. furgone)",parking_add_type:"+ Associazione",parking_hint:"Senza sensore il veicolo \xE8 sempre presente. Con un sensore appare con gli stati \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensore tipo veicolo seleziona il modello associato allo stato, anche se contenuto nel testo; altrimenti viene mostrato il modello predefinito.",parking_too_tall:"Il veicolo ({car} m) \xE8 pi\xF9 alto della stanza ({room} m).",furn_lamp_ceiling:"Plafoniera",furn_lamp_downlight:"Faretto da incasso",furn_lamp_spot:"Faretto a superficie",furn_lamp_panel:"Pannello LED",furn_lamp_uplight:"Piantana a luce indiretta",furn_lamp_bollard:"Paletto luminoso",furn_lamp_garden:"Faretto da giardino",furn_radiator:"Radiatore",furn_robot_vacuum:"Robot aspirapolvere",furn_entity_vacuum:"Robot aspirapolvere",furn_robot_room:"Stanza attuale (sensore)",robot_hint:"Durante la pulizia il robot percorre traiettorie simulate nella stanza indicata dal sensore \xABstanza attuale\xBB, abbinata per nome, oppure nella stanza della base. Home Assistant normalmente non conosce la posizione esatta. Al ritorno il robot rientra alla base.",furn_lamp_pendant:"Lampada a sospensione",furn_lamp_floor:"Piantana",furn_lamp_table:"Lampada da tavolo",furn_lamp_wall:"Applique",furn_led_strip:"Striscia LED",furn_group_lights:"Luci",furn_entity_light:"Luce o interruttore",furn_entity_climate:"Riscaldamento (termostato)",lamp_hint:"Tocca la lampada in 3D per azionarla; tieni premuto per il menu rapido. Funzionano anche gli interruttori, ad esempio un rel\xE8. Le lampade da tavolo si appoggiano sul mobile sottostante.",lamp_hint_pendant:"Altezza = distanza sotto il soffitto. Tocca in 3D per azionare; tieni premuto per i dettagli.",theme:"Aspetto",theme_neon:"Neon",theme_blueprint:"Disegno tecnico",theme_day:"Giorno",furnish:"Arreda",split_3d:"3D affiancato",mount_height:"Altezza dal pavimento (m)",side_open:"Apri pannello laterale",side_close:"Chiudi",side_details:"Dettagli della selezione",side_pin:"Fissa",side_pinned:"Fissato",side_pin_hint:"Se fissato, il pannello rimane aperto; altrimenti si chiude accanto al 3D quando non \xE8 selezionato nulla",split_3d_hint:"Vista 3D in tempo reale accanto alla pianta: trascina e ruota mobili e dispositivi, con annullamento e salvataggio nella pianta",size_w:"Larghezza (m)",size_d:"Profondit\xE0 (m)",size_h:"Altezza (m)",furnish_hint:"Trascina mobili, lampade e dispositivi \xB7 i mobili si agganciano ai muri \xB7 seleziona per ruotare e regolare altezza e montaggio",done:"Fatto",heatmap:"Mappa dei valori",heat_off:"Normale",heat_short_temperature:"Temp.",heat_short_humidity:"Umidit\xE0",heat_short_co2:"CO\u2082",heat_temperature:"Temperatura",heat_humidity:"Umidit\xE0",heat_co2:"CO\u2082",heat_none_found:"Nessun sensore adatto nelle aree delle stanze.",markers:"Indicatori",markers_none:"Nessuno",markers_important:"Importanti",markers_all:"Tutti",furn_stool:"Sgabello",furn_coffee_table:"Tavolino",furn_tv_wall:"TV a parete",furn_sideboard:"Credenza",furn_table_round:"Tavolo rotondo",furn_bench:"Panca",furn_corner_bench:"Panca angolare",furn_bar_stool:"Sgabello da bar",furn_kitchen_wall:"Pensile",furn_kitchen_tall:"Colonna forno",furn_island:"Isola cucina",furn_dishwasher:"Lavastoviglie",furn_bunk_bed:"Letto a castello",furn_dresser:"Cassettiera",furn_washer:"Lavatrice",furn_dryer:"Asciugatrice",furn_office_chair:"Sedia da ufficio",furn_tall_cabinet:"Mobile alto",furn_coat_rack:"Appendiabiti",furn_group_living:"Soggiorno",furn_group_dining:"Sala da pranzo",furn_group_energy:"Energia e fotovoltaico",energy_devices:"Dispositivi",solar_pro_title:"Fotovoltaico ed Energia Pro",solar_pro_soon:"prossimamente",solar_pro_1:"Moduli che si animano al sole e si illuminano in base alla produzione",solar_pro_2:"Linee dei flussi energetici nella casa: provenienza e destinazione dell'energia",solar_pro_3:"Ologramma trasparente con potenza, curva giornaliera, produzione e autosufficienza",solar_pro_4:"Valori delle stringhe, batteria, wallbox e rete a colpo d'occhio",solar_pro_free:"Tutto ci\xF2 che configuri qui (campi, stringhe, dispositivi e sensori) rimane gratuito e viene utilizzato direttamente dall'extra Pro.",wallbox_charging:"in carica",wallbox_plugged:"collegata",furn_soc:"Stato di carica (%)",furn_wallbox_status:"Stato (in carica, collegata)",energy_only_note:"\u26A1 Energia: qui puoi spostare solo campi fotovoltaici e dispositivi energetici. Stanze e mobili sono bloccati.",roof_only_note:"\u{1F3E0} Tetto: qui puoi spostare solo sezioni del tetto e lucernari. Stanze e mobili sono bloccati.",energy_devices_hint:"Aggiungi inverter, batterie domestiche e wallbox sul piano selezionato. Puoi spostarli nella pianta. Il sensore di potenza mostra i watt; ogni stringa pu\xF2 essere associata a un inverter.",solar_fields:"Campi fotovoltaici",solar_hint:"Posiziona i moduli sul tetto: seguono la pendenza della falda; sui tetti piani sono montati su supporti. Trascina un campo per spostarlo.",solar_no_roof:"Serve un tetto: piano o a due falde nelle Impostazioni, oppure sezioni nello strumento Tetto.",solar_face_gone:"falda mancante",solar_summary:"{n} moduli \xB7 {kwp} kWp",solar_add:"Campo fotovoltaico",solar_field:"Campo fotovoltaico",solar_face:"Falda del tetto",solar_rows:"Righe",solar_cols:"Moduli per riga",solar_portrait:"Verticale",solar_landscape:"Orizzontale",solar_u:"Distanza dal bordo (m)",solar_v:"Distanza dalla gronda (m)",solar_tilt:"Inclinazione supporti (\xB0)",solar_flip:"Inclina nell'altro verso",solar_partial:"sulla falda entrano solo {n} moduli su {total}",solar_form_hint:"I moduli oltre il bordo della falda vengono esclusi. \xABRiempi falda\xBB ne inserisce il massimo possibile. Il calcolo dei kWp considera 400 W per modulo.",solar_fit:"Riempi falda",roof_windows:"Lucernari",roof_window:"Lucernario",roof_windows_hint:"I lucernari seguono la falda, con tapparella e contatti come le finestre. Trascinali nella pianta, anche su un'altra falda.",roof_window_tilt:"Contatto ribalta",roof_window_hint:"L'anta aperta ruota verso l'esterno con cerniere in alto; in ribalta si apre leggermente. La tapparella scende dall'alto sul vetro.",solar_ground:"Indipendente (giardino, tetto garage \u2026)",solar_add_ground:"Indipendente",solar_base:"Quota superficie (m, 0 = suolo)",solar_add_wall:"Su un muro",solar_wall:"Muro",solar_v_wall:"Altezza dal pavimento (m)",solar_tilt_wall:"Inclinazione dal muro (\xB0, 90 = pensilina)",solar_flip_wall:"Distanzia la parte inferiore anzich\xE9 quella superiore",solar_rotation:"Rotazione (\xB0)",solar_name:"Nome",solar_name_hint:"es. stringa 1 sud",solar_module_w:"Larghezza modulo (m)",solar_module_h:"Altezza modulo (m)",solar_string:"Stringa",solar_strings:"Stringhe",solar_string_none:"Nessuna stringa",solar_string_new:"Nuova stringa",solar_string_n:"Stringa {n}",solar_string_name:"Nome stringa",solar_string_entity:"Potenza FV della stringa",solar_string_inverter:"Inverter",solar_string_inverter_none:"Nessun inverter selezionato",solar_string_inverter_missing:"Nessun inverter nella pianta: aggiungilo sotto, in Dispositivi",solar_string_hint:"I campi della stessa stringa sono associati anche su tetti diversi. Sensore e inverter si riferiscono all'intera stringa.",solar_string_sum:"{fields} campi \xB7 {n} moduli \xB7 {kwp} kWp",solar_face_size:"Falda {w} \xD7 {h} m (lungo la gronda \xD7 lungo la pendenza)",solar_cols_hint:"Un numero per righe uguali oppure un elenco, ad esempio \xAB4, 4, 3\xBB, partendo dalla gronda.",solar_align_left:"Sinistra",solar_align_center:"Centro",solar_align_right:"Destra",solar_look_black:"Nero integrale",solar_look_blue:"Blu",solar_pick:"Attiva/disattiva singoli moduli",solar_pick_all:"Riattiva tutti",solar_pick_hint:"Clicca un modulo nella pianta per rimuoverlo o reinserirlo. Quelli rimossi sono tratteggiati.",solar_entity:"Potenza FV di questo campo (es. della sua stringa)",solar_main:"Tetto principale",solar_section:"Sezione {n}",solar_flat:"tetto piano",compass_n:"nord",compass_ne:"nord-est",compass_e:"est",compass_se:"sud-est",compass_s:"sud",compass_sw:"sud-ovest",compass_w:"ovest",compass_nw:"nord-ovest",furn_inverter:"Inverter fotovoltaico",furn_home_battery:"Batteria domestica",furn_wallbox:"Wallbox",furn_group_kitchen:"Cucina",furn_group_sleeping:"Camera da letto",furn_group_bath:"Bagno e lavanderia",furn_group_work:"Lavoro e altro",furn_entity:"Dispositivo (interruttore, presa \u2026)",furn_entity_tv:"TV (lettore multimediale o presa smart)",fix:"Blocca",unfix:"Sblocca",fix_hint:"Bloccato: evita spostamenti accidentali (tasto L, clic destro o pressione prolungata)",fixed_drag_hint:"\u{1F512} Bloccato: sbloccalo prima di spostarlo (lucchetto nel pannello, clic destro o tasto L)",fixed_delete_confirm:"Questo elemento \xE8 bloccato. Eliminarlo comunque?",lock_plan:"\u{1F512} Pianta",lock_plan_hint:"Blocca stanze, muri, porte, finestre e aree esterne per evitare spostamenti accidentali. Mobili e dispositivi rimangono liberi.",ctx_rotate:"Ruota di 90\xB0",devices_placed_in:"in {room}",devices_narrow:"Altri {n}: restringi la ricerca",climate:"Clima della stanza",climate_temperature:"Temperatura",climate_humidity:"Umidit\xE0",climate_co2:"CO\u2082",climate_hint:"Sensori usati nella mappa dei valori e nel pannello stanza. \xABAutomatico\xBB usa quelli dell'area e quelli posizionati nella stanza, escludendo le temperature dei dispositivi (stampante 3D, pompa di calore, mandata \u2026).",plan_locked:"Pianta bloccata",plan_lock:"Blocca pianta",plan_unlock:"Sblocca pianta",opening_mark:"Evidenzia in 3D",opening_mark_open:"Quando aperto",opening_mark_closed:"Quando chiuso (es. WC)",opening_mark_hint:"La porta o finestra evidenziata emette una luce calda. \xABQuando chiuso\xBB richiede un contatto; senza sensore non viene evidenziata.",marker_show:"Indicatore in 3D",marker_show_hint:"Automatico segue la scelta Nessuno / Importanti / Tutti. Mostra sempre e Nascondi prevalgono, tranne quando \xE8 selezionato Nessuno.",marker_show_auto:"Automatico",marker_show_always:"Mostra sempre",marker_show_no_power:"Senza watt",marker_show_never:"Nascondi",furn_power:"Sensore potenza (W)",furn_links_hint:"Con un sensore di potenza l'elemento mostra i watt e un collegamento energetico.",screen_pictures:"Immagini in base allo stato",screen_pictures_hint:"Confronta lo stato o un attributo dell'entit\xE0, ad esempio app_name della TV. Un valore corrisponde se \xE8 uguale o contenuto nel testo; \xAB*\xBB significa sempre. Vale la prima regola corrispondente. Le immagini vengono ridotte a 512 px. Puoi usare anche un URL o una telecamera, aggiornata ogni 5 secondi quando visibile. Senza corrispondenze viene mostrato il lettore multimediale.",picture_state:"\xE8 o contiene \u2026 (es. netflix)",picture_state_of:"Stato",picture_attribute:"Confronta stato o attributo",picture_pick:"Scegli immagine \u2026",picture_change:"Cambia immagine \u2026",picture_url:"oppure URL immagine",picture_add_value:"+ Valore",picture_reuse:"Usa un'immagine salvata",picture_camera:"oppure una telecamera (immagine dal vivo) \u2026",picture_camera_none:"Nessuna telecamera",screen_bg:"Sfondo dietro l'immagine",screen_bg_black:"Scuro",screen_bg_white:"Bianco",picture_add_entity:"+ Altra entit\xE0",picture_current:"ora: {value}",picture_matches:"\u2713 corrisponde: questa immagine \xE8 visibile",furn_links_hint_tv:"Lo schermo si illumina quando la TV \xE8 accesa, con il colore dell'app (Netflix, YouTube \u2026). L'etichetta mostra app o titolo.",stairs_hint:"La scala sale verso il retro, allontanandosi dal bordo anteriore segnato, e apre il solaio del piano superiore.",floor_lights:"Luci accese: {n}",floor_open:"{n} aperti",floor_persons:"{n} persone",energy_consumption:"Consumo",energy_grid_import:"Prelievo dalla rete",energy_grid_export:"Immissione in rete",energy_solar:"Fotovoltaico",energy_battery:"Batteria",energy_tariff:"Tariffa",energy:"Energia",energy_meter:"Contatore",energy_meter_set:"Posiziona contatore",energy_meter_remove:"Rimuovi contatore",energy_meter_hint:"Clicca nella pianta sulla posizione del contatore o dell'allaccio di casa.",energy_grid:"Rete (W, + = prelievo)",energy_solar_sensor:"Produzione fotovoltaica (W)",energy_battery_sensor:"Potenza batteria (W, + = scarica)",energy_battery_soc:"Carica batteria (%)",energy_tariff_sensor:"Tariffa (es. \u20AC/kWh)",energy_invert:"Inverti segno",energy_hint:"Le utenze sono dispositivi posizionati con un sensore di potenza in W, proprio o dello stesso dispositivo.",tool_meter:"Contatore",hint_meter:"Clicca sulla posizione del contatore",presence:"Presenza",presence_hint:"Sensore stanza per persona (es. ESPresense, Bermuda): lo stato indica il nome della stanza o dell'area.",presence_sensor:"Sensore stanza",no_persons:"Non ci sono persone in Home Assistant."};function xt(r,t,e={}){let n=Yo[t]??t;for(let[i,s]of Object.entries(e))n=n.replaceAll(`{${i}}`,String(s));return n}function T(r,t,e=2){return t.toLocaleString(r?.language??"it-IT",{maximumFractionDigits:e})}var Qo={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function ie(r){return Qo[r]}var Ct=tt`
  :host {
    --nc3d-bg: #070b14;
    --nc3d-bg2: #0d1424;
    --nc3d-chrome: rgba(14, 21, 38, 0.86);
    --nc3d-chrome-solid: #0f1729;
    --nc3d-line: rgba(120, 170, 255, 0.16);
    --nc3d-text: #e6eefc;
    --nc3d-muted: #8a9bb8;
    --nc3d-accent: #37e0ff;
    --nc3d-accent-text: #041018;
    --nc3d-soft: #5b7cff;
    --nc3d-warm: #ffb547;
    --nc3d-danger: #ff6b8b;
    --nc3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --nc3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --nc3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--nc3d-font);
    color: var(--nc3d-text);
  }
`,ze=tt`
  .nc3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--nc3d-chrome);
    box-shadow: var(--nc3d-shadow);
  }
  .nc3d-seg button,
  .nc3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--nc3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .nc3d-seg button[aria-pressed="true"],
  .nc3d-chip[aria-pressed="true"] {
    background: var(--nc3d-accent);
    color: var(--nc3d-accent-text);
  }
  .nc3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .nc3d-chip {
    background: var(--nc3d-chrome);
    color: var(--nc3d-text);
    box-shadow: var(--nc3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--nc3d-accent);
    outline-offset: 2px;
  }
  .nc3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--nc3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--nc3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .nc3d-btn:hover {
    border-color: var(--nc3d-accent);
  }
  .nc3d-btn.nc3d-danger {
    color: var(--nc3d-danger);
  }
  .nc3d-btn.nc3d-primary {
    background: var(--nc3d-accent);
    color: var(--nc3d-accent-text);
    border-color: transparent;
  }
  .nc3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nc3d-muted);
  }
  .nc3d-field input,
  .nc3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--nc3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--nc3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .nc3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--nc3d-accent);
  }
  .nc3d-field select option {
    background: var(--nc3d-chrome-solid);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .nc3d-seg button,
    .nc3d-chip,
    .nc3d-btn {
      min-height: 40px;
    }
  }
`;var Rn=40,On=class extends Q{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=o=>{let a=`${o.label} ${o.id}`.toLowerCase();return e.every(l=>a.includes(l))},i=this.fixed.filter(o=>!t||n(o)),s=t?this.options.filter(n):this.options;return[...i,...s.slice(0,Rn)]}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return f`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${t?t.label:this.placeholder}
        .value=${this._open?this._query:t?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?f`<ul class="list" role="listbox">
            ${e.length?y:f`<li class="empty">–</li>`}
            ${e.map((n,i)=>f`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${s=>s.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?f`<small>${n.id}</small>`:y}
              </li>`)}
            ${this._query&&this.options.length>Rn&&e.length>=Rn?f`<li class="empty">…</li>`:y}
          </ul>`:y}
    </div>`}static styles=[Ct,tt`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--nc3d-text);
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--nc3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--nc3d-muted);
      }
      input:focus {
        outline: 2px solid var(--nc3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-line);
        border-radius: 10px;
        box-shadow: var(--nc3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--nc3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--nc3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--nc3d-accent);
      }
      li.empty {
        color: var(--nc3d-muted);
        cursor: default;
      }
    `]};customElements.get("nc3d-entity-picker")||customElements.define("nc3d-entity-picker",On);var Jo=new URL(import.meta.url),Zo=new URL("./neoncasa3d-3d.js?v=2198586f6c09",Jo).href,Ts;function Cs(){return Ts??=import(Zo),Ts}function se(r,t){if(!qe(t))return xt(r,`furn_${t}`);let e=j(t);return e?Mt(e,"it"):xt(r,"pack_missing_item")}var Ln=class extends Q{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(t,e){return xt(this.hass,t,e)}render(){let t=yn(this.packs??[]);return f`<div class="nc3d-ext">
      <header class="nc3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nc3d-sub">${this.t("ext_intro")}</p>
        <div class="nc3d-ext-actions">
          <a class="nc3d-btn nc3d-primary" href=${Xt(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="nc3d-btn" href=${Yt(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderOffers()} ${this.renderShop()}
      <section class="nc3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nc3d-ext-pro">
          ${vn.map(e=>f`<div class="nc3d-ext-feature ${t.has(e)?"nc3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="nc3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="nc3d-ext-links">
                ${t.has(e)?f`<span class="nc3d-ext-state">${this.t("ext_active")}</span>`:f`<a class="nc3d-ext-link" href=${Xt(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="nc3d-ext-link" href=${Yt(this.hass?.language,e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await Ue(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(t,e,n){this._licenseBusy=t,this._licenseMsg=null;try{this._license=await e(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:s,message:o}=i??{},a=`license_error_${s}`,l=this.t(a);this._licenseMsg={ok:!1,text:l===a?this.t("license_error_other",{detail:o??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(t){if(!this.hass)return;let e=this.hass;await this.shopCall(t.id,async()=>{let n=await gi(e,t.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),Ue(e)})}renderUpdates(){let t=this._license;return t?.active?(this.freshUpdates||(this.freshUpdates=ci(t.updates??[]),di(t.updates??[])),this.freshUpdates.length?f`<section class="nc3d-ext-card nc3d-updates">
      ${this.freshUpdates.map(e=>f`<p>✨ ${e.added>0?this.t("pack_updated_added",{name:e.name,release:e.release,n:e.added}):this.t("pack_updated",{name:e.name,release:e.release})}</p>`)}
    </section>`:y):y}renderOffers(){let t=this._license;if(!t?.active)return y;let e=[...t.offers??[]].sort((i,s)=>Number(s.new)-Number(i.new)),n=t.loyalty??null;return!e.length&&!n?y:(ai(e),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),f`<section class="nc3d-ext-card nc3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?f`<div class="nc3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="nc3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:y}
      <div class="nc3d-offer-grid">
        ${e.map(i=>f`<a class="nc3d-offer" href=${ui(i.url,n)} target="_blank" rel="noopener">
            ${i.image?f`<img src=${i.image} alt="" loading="lazy" />`:f`<div class="nc3d-offer-ph">✦</div>`}
            <div class="nc3d-offer-body">
              <b>${i.name}</b>
              ${i.new?f`<span class="nc3d-offer-new">${this.t("offers_new")}</span>`:y}
              <span class="nc3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?f`<span class="nc3d-sub">${i.teaser}</span>`:y}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let t=this._license;if(!this.isAdmin||!this.hass)return y;if(!t)return this.loadLicense(),y;let e=this.hass,n=this._licenseBusy,i=t.checked_at?new Date(t.checked_at*1e3).toLocaleString(e.language):null;return f`<div class="nc3d-shop nc3d-ext-card">
      <h3>${this.t("license_title")}</h3>
      <div class="nc3d-shop-row">
        <span>${this.t("license_instance")}</span>
        <code>${t.instance}</code>
        <button
          class="nc3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(t.instance),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
      </div>
      ${t.active?f`<div class="nc3d-shop-row">
              <span>${this.t("license_active",{name:t.licensee??"",key:t.key_hint??""})}</span>
              ${i?f`<span class="nc3d-sub">${this.t("license_checked",{time:i})}</span>`:y}
              <button class="nc3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>pi(e),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="nc3d-btn nc3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>hi(e))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${t.error?f`<p class="nc3d-sub nc3d-pack-error">${this.t(`license_error_${t.error}`)}</p>`:y}
            ${t.packs.length?t.packs.map(s=>{let o=s.installed===null?"install":s.installed<s.release?"update":"installed";return f`<div class="nc3d-pack">
                    <div>
                      <b>${s.name}</b>
                      <span class="nc3d-sub">${o==="installed"?this.t("license_installed",{release:s.release}):o==="update"?this.t("license_update_available",{release:s.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${o==="installed"?y:f`<button class="nc3d-btn nc3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(s)}>
                          ${n===s.id?"\u2026":this.t(o==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):f`<p class="nc3d-sub">${this.t("license_none")}</p>`}`:f`<div class="nc3d-shop-row">
            <input
              type="text"
              class="nc3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${s=>this._licenseKey=s.target.value}
              @keydown=${s=>{s.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>je(e,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="nc3d-btn nc3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>je(e,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?f`<p class="nc3d-sub ${this._licenseMsg.ok?"nc3d-notice":"nc3d-pack-error"}">${this._licenseMsg.text}</p>`:y}
      <p class="nc3d-sub">${this.t("license_hint")} <a href=${t.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let t=this.packs??[];return f`<section class="nc3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>f`<div class="nc3d-pack">
          <div>
            <b>${e.name}</b>
            <span class="nc3d-sub">${e.features?.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?f`<span class="nc3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:y}
          </div>
          <button class="nc3d-btn nc3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="nc3d-btn nc3d-primary nc3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?f`<p class="nc3d-sub ${this._packMsg.ok?"nc3d-notice":"nc3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="nc3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],s=[];for(let a of n)try{let l=await oi(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},u=`pack_error_${c}`,p=this.t(u,{detail:d??String(l)});s.push(`${a.name}: ${p===u?this.t("pack_error_other",{detail:d??String(l)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let o=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:s.length===0,text:[...o,...i,...s].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:t.name}))||(await ri(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Ct,ze,tt`
      .nc3d-updates {
        border-color: color-mix(in srgb, var(--nc3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--nc3d-accent) 8%, transparent);
      }
      .nc3d-updates p {
        margin: 4px 0;
      }
      .nc3d-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .nc3d-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .nc3d-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .nc3d-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--nc3d-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--nc3d-accent) 4%, transparent);
      }
      .nc3d-offer:hover {
        border-color: var(--nc3d-accent);
      }
      .nc3d-offer img,
      .nc3d-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .nc3d-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--nc3d-accent);
      }
      .nc3d-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .nc3d-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .nc3d-offer-kind {
        color: var(--nc3d-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .nc3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .nc3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .nc3d-ext-head a {
        text-decoration: none;
      }
      .nc3d-ext-actions,
      .nc3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .nc3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .nc3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--nc3d-line);
        border-radius: 14px;
        background: var(--nc3d-chrome);
      }
      .nc3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--nc3d-soft);
      }
      .nc3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .nc3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--nc3d-line);
        border-radius: 12px;
      }
      .nc3d-ext-on {
        border-color: var(--nc3d-accent);
      }
      .nc3d-ext-state {
        color: var(--nc3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .nc3d-ext-link {
        color: var(--nc3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .nc3d-sub {
        color: var(--nc3d-soft);
        font-size: 13px;
      }
      .nc3d-notice {
        color: var(--nc3d-accent);
      }
      .nc3d-shop {
        margin: 10px 0;
        padding: 10px 12px;
        border: 1px solid var(--nc3d-line);
        border-radius: 12px;
      }
      .nc3d-shop-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      .nc3d-shop code {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--nc3d-chrome-solid);
        font-size: 13px;
        letter-spacing: 0.08em;
        user-select: all;
      }
      .nc3d-shop-key {
        flex: 1;
        min-width: 180px;
        font-family: ui-monospace, monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .nc3d-shop a {
        color: var(--nc3d-accent);
      }
      .nc3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--nc3d-line);
      }
      .nc3d-pack div {
        display: grid;
        gap: 2px;
      }
      .nc3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .nc3d-pack-error {
        color: var(--nc3d-danger);
      }
    `]};customElements.get("nc3d-extensions")||customElements.define("nc3d-extensions",Ln);var Vs=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","outvertex","solarmove","solarturn"]),Hs=100,Ie=10,S=r=>Math.round(r*1e3)/1e3,Ds={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Tn=class extends Q{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neoncasa3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._floorMenu=!1,this._openingPreset="door";let t=!1;try{t=localStorage.getItem("neoncasa3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neoncasa3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neoncasa3d.sidePinned")!=="0"}catch{}this._sidePinned=e,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return xt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("packs")&&bi(this.packs??[]),t.has("_doc")&&this._split&&this.queue3d(),t.has("_split")&&this._split&&(this._doc3d=this._doc),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".nc3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),s=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},o=()=>{n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",o),n.removeEventListener("pointercancel",o);try{localStorage.setItem("neoncasa3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",s),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neoncasa3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){let{id:e,x:n,z:i}=t.detail,s=this._doc.settings.wall_interior;this.change(o=>{for(let a of o.floors){let l=a.furniture.find(p=>p.id===e);if(!l)continue;let[c,d]=bn(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let u=be(a,l,s);u&&Object.assign(l,u)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(s=>{for(let o of s.floors){let a=o.placements.find(d=>d.entity_id===e);if(!a)continue;let[l,c]=bn(o,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return y;let t=this.furnitureItem,e=this.device;if(t){let n=Je(t),i=(s,o,a=.05)=>f`<label class="nc3d-3d-size" title=${this.t(`size_${s}`)}
        >${o}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(t[s]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return f`<div class="nc3d-3d-bar">
        <span>${se(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?f`<label class="nc3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((t.mount_y??Xe(this.floor,t))*100)/100)}
                @change=${s=>{let o=parseFloat(s.target.value.replace(",","."));Number.isFinite(o)&&o>=0&&this.updateFurniture({mount_y:Math.round(o*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="nc3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nc3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let n=C(e.entity_id),i=n==="light",s=n?un(n,this.floor?.height??2.5,i?e.mount??"ceiling":null):1;return f`<div class="nc3d-3d-bar">
        <span>${B(this.hass,e.entity_id)}</span>
        ${i?f`<select class="nc3d-3d-select" title=${this.t("lamp_mount")} @change=${o=>this.updateDevice({mount:o.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(o=>f`<option value=${o} ?selected=${o===(e.mount??"ceiling")}>${this.t(`lamp_${o}`)}</option>`)}
            </select>`:y}
        <label class="nc3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((e.y??s)*100)/100)}
            @change=${o=>{let a=parseFloat(o.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="nc3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nc3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t?.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=N(e),i=null,s=(a,l,c,d,u=!1)=>{if(!c||u)return;let p=Pn(c,t.o,t.d);!p||!Ps(c,d,p.u,p.s)||i&&i.t<=p.t||(i={id:a,win:l,t:p.t,du:p.u-d.u,ds:p.s-d.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])s(a.id,!1,st(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])s(a.id,!0,n.find(l=>l.key===a.face)??null,Tt(a),!!a.locked);if(!i)return!1;let o=i;return this.grab3d={id:o.id,win:o.win,du:o.du,ds:o.ds,base:e,moved:!1},o.win?this._roofWinId=o.id:this.selectSolar(o.id),!0}grab3dMove(t){let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?n.settings.roof.windows?.find(v=>v.id===e.id):void 0,s=e.win?i?Tt(i):void 0:n.settings.roof.solar?.find(v=>v.id===e.id);if(!s)return;let o=st(n,s),a=o?.unbounded?[o]:e.win?N(n):[...N(n),...Ot(n)],l=null;for(let v of a){let _=Pn(v,t.o,t.d);_&&Fs(v,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:v,..._})}if(!l)return;let c=l.face,d=.05,u=v=>S(Math.round(v/d)*d),p=ee(c,{...s,face:c.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:c.flat?s.tilt??15:s.tilt});e.moved=!0,this.change(v=>{if(e.win){let h=v.settings.roof.windows?.find($=>$.id===e.id);h&&Object.assign(h,{face:c.key,...p});return}let _=v.settings.roof.solar?.find(h=>h.id===e.id);_&&Object.assign(_,{face:c.key,...p},c.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return f`<div class="nc3d-editor-3d">
      ${this.houseTool?y:f`<div class="nc3d-seg nc3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <nc3d-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?bt:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${t=>{t.detail.id?this.selectFrom3d("furniture",t.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${t=>{t.detail.id?this.selectFrom3d("device",t.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),this._sideOpen=!1}}
        @room-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),t.detail.roomId?this.selectFrom3d("room",t.detail.roomId):this._sideOpen=!1}}
      ></nc3d-view3d>
    </div>`}updated(){this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nc3d-view3d")?.resetView(),250));let t=this.floor?.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),this.furnitureItem?.pictures)for(let e of this.storedPictures())!this._images[e]&&!this.loadingImages.has(e)&&this.loadImage(e)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Hs&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),s=i.floors.find(o=>o.id===this._floorId);!s&&this._floorId||(t(i,s),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:s}=this._view;return[(t-i)/n,(e-s)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?J(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,s=e.z1-e.z0+2*n,o=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:o,ox:this._size.w/2-(e.x0+e.x1)/2*o,oy:this._size.h/2-(e.z0+e.z1)/2*o}}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:i,ox:s,oy:o}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-s)*l,oy:n-(n-o)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=Ie/this._view.scale,s=this.floor?.rooms??[],o=[];for(let _ of s)_.points.forEach((h,$)=>{e&&_.id===e.roomId&&(e.index===void 0||e.index===$)||o.push(h)});let a=null,l=i;for(let _ of o){let h=Math.hypot(_[0]-t[0],_[1]-t[1]);h<l&&(l=h,a=_)}if(a)return this._guides={point:a},[a[0],a[1]];for(let _ of s)if(!(e&&_.id===e.roomId))for(let h=0;h<_.points.length;h++){let $=_.points[h],b=_.points[(h+1)%_.points.length],g=b[0]-$[0],m=b[1]-$[1],x=g*g+m*m;if(x<1e-9)continue;let w=((t[0]-$[0])*g+(t[1]-$[1])*m)/x;if(w<=0||w>=1)continue;let k=[$[0]+w*g,$[1]+w*m],M=Math.hypot(k[0]-t[0],k[1]-t[1]),E=this._doc.settings.grid;Math.abs(m)<1e-9&&(k[0]=Math.min(Math.max(Math.round(k[0]/E)*E,Math.min($[0],b[0])),Math.max($[0],b[0]))),Math.abs(g)<1e-9&&(k[1]=Math.min(Math.max(Math.round(k[1]/E)*E,Math.min($[1],b[1])),Math.max($[1],b[1]))),M<l&&(l=M,a=k)}if(a)return this._guides={point:a},[S(a[0]),S(a[1])];let c=this._doc.settings.grid,d=[S(Math.round(t[0]/c)*c),S(Math.round(t[1]/c)*c)],u=i,p=i,v={};for(let _ of o)Math.abs(_[0]-t[0])<u&&(u=Math.abs(_[0]-t[0]),d[0]=_[0],v.x=_[0]),Math.abs(_[1]-t[1])<p&&(p=Math.abs(_[1]-t[1]),d[1]=_[1],v.z=_[1]);return this._guides=v,d}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Vs.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=t.target;if(this._tool==="wall"){let m=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:m,end:m};return}if(this._tool==="roof"||this._tool==="energy"){let m=s.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),x=s.closest("[data-roof]")?.getAttribute("data-roof"),w=this._tool==="energy"?s.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(w){this._solarId=null,this.selectItem("furniture",w),this.drag=this.isAdmin?{kind:"furniture",id:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let k=this._tool==="energy"?s.closest("[data-solar]")?.getAttribute("data-solar"):null,M=this._tool==="energy"?s.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(M&&this.isAdmin){this.drag={kind:"solarturn",id:M,base:this._doc,moved:!1};return}if(k){let I=s.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&k===this._solarId&&I&&this.isAdmin){this.toggleSolarCell(I),this.drag={kind:"pan",last:n};return}k!==this._solarId&&(this._solarPick=!1),this._solarId=k,this._roofId=null;let A=this._doc.settings.roof.solar?.find(K=>K.id===k),P=A?st(this._doc,A)??void 0:void 0,R=P?this.faceHit(P,i):null,L=A&&R?{du:R.u-A.u,ds:Number.isNaN(R.s)?0:R.s-A.v}:null;this.drag=this.isAdmin&&!A?.locked?{kind:"solarmove",id:k,start:i,startScreen:n,base:this._doc,moved:!1,grab:L}:{kind:"pan",last:n};return}let E=this._tool==="roof"?s.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(E){this._roofWinId=E,this._roofId=null;let I=this._doc.settings.roof.windows?.find(L=>L.id===E),A=I?N(this._doc).find(L=>L.key===I.face):void 0,P=A?Se(A,i):null,R=I&&P?{du:P.u-I.u,ds:P.s-I.v}:null;this.drag=this.isAdmin&&!I?.locked?{kind:"solarmove",id:E,start:i,startScreen:n,base:this._doc,moved:!1,grab:R,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let F=this._tool==="energy"?s.closest(".nc3d-energy-item")?.getAttribute("data-furniture"):null;if(F){this._solarId=null,this.selectItem("furniture",F),this.drag=this.isAdmin?{kind:"furniture",id:F,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(m&&this.isAdmin){let[I,A,P]=m.split(":");this.drag={kind:"roofcorner",id:I,corner:[A==="1"?1:0,P==="1"?1:0],base:this._doc,moved:!1}}else if(x){let I=this.roofFixed(this._doc.settings.roof.sections?.find(A=>A.id===x));I&&this._roofId===x&&(this._fixedHint=!0),this._roofId=x,this.drag=this.isAdmin&&!I?{kind:"roofmove",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let I=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:I,end:I,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let m=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:m,end:m,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let m=this._doc.settings.grid,[x,w]=i.map(k=>S(Math.round(k/m)*m));this.setEnergy({meter:{floor_id:this._floorId,x,z:w}})}this._tool="select";return}let o=s.closest("[data-device]");if(o&&this.isAdmin){this.drag={kind:"device",entityId:o.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=s.closest("[data-opening]");if(a){let m=a.getAttribute("data-opening");this.selectItem("opening",m),this.drag=this.isAdmin?{kind:"opening",id:m,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=s.closest("[data-resize]");if(l&&this.isAdmin){let[m,x,w]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:m,corner:[x==="1"?1:-1,w==="1"?1:-1],base:this._doc,moved:!1};return}let c=s.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=s.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=s.closest("[data-furniture]");if(u&&!s.closest("[data-vertex], [data-mid]")){let m=u.getAttribute("data-furniture");this.selectItem("furniture",m),this.drag=this.isAdmin?{kind:"furniture",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let p=s.closest("[data-vertex]"),v=s.closest("[data-mid]");if(p&&this.room&&this.isAdmin){this._vertex=Number(p.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(v&&this.room&&this.isAdmin){let m=Number(v.getAttribute("data-mid")),x=this.room.points,w=x[m],k=x[(m+1)%x.length],M=[S((w[0]+k[0])/2),S((w[1]+k[1])/2)],E=this._doc,F=this.room.id;this.change((I,A)=>{let P=A.rooms.find(L=>L.id===F);P.points.splice(m+1,0,M),P.wall_heights&&P.wall_heights.splice(m+1,0,P.wall_heights[m]??null);let R=Math.hypot(M[0]-w[0],M[1]-w[1]);for(let L of A.openings)L.room_id!==F||L.wall||(L.edge>m?L.edge+=1:L.edge===m&&L.offset>R&&(L.edge=m+1,L.offset=S(L.offset-R)))},E,!1),this._vertex=m+1,this.drag={kind:"vertex",roomId:F,index:m+1,base:E,moved:!0};return}let _=s.closest("[data-wall-end]");if(_&&this.isAdmin){let[m,x]=_.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:m,end:x,start:i,startScreen:n,base:this._doc,moved:!1};return}let h=s.closest("[data-free-wall]");if(h){let m=h.getAttribute("data-free-wall");this.selectItem("wall",m),this.drag=this.isAdmin?{kind:"wallmove",id:m,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let $=s.closest("[data-out-vertex]");if($&&this.isAdmin){let[m,x]=$.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:m,index:Number(x),base:this._doc,moved:!1};return}let b=s.closest("[data-outdoor]");if(b&&!s.closest("[data-room]")&&!this.roomAt(i)){let m=b.getAttribute("data-outdoor");this.selectItem("outdoor",m),this.drag=this.isAdmin?{kind:"outdoor",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(g){g!==this._roomId&&(this._vertex=null),this.selectItem("room",g),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:g,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){if(this.pressStart){let s=this.localPoint(t);Math.hypot(s[0]-this.pressStart[0],s[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let s=this.snap(n,void 0,t.altKey);t.shiftKey&&(s=Math.abs(s[0]-i.start[0])>Math.abs(s[1]-i.start[1])?[s[0],i.start[1]]:[i.start[0],s[1]]),i.end=s,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!s)return;let o;if(i.end){let a=this.snap(n,void 0,t.altKey);o=i.end==="a"?{a,b:s.b}:{a:s.a,b:a}}else{let a=t.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;o={a:[S(s.a[0]+l),S(s.a[1]+c)],b:[S(s.b[0]+l),S(s.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),o),i.base,!1);break}case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((o,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!s)return;let o=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>O([c.x,c.z],s.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(p=>p.id===i.roomId);u.points=s.points.map(([p,v])=>[S(p+o[0]),S(v+o[1])]),d.placements=a.placements.map(p=>l.has(p.entity_id)?{...p,x:S(p.x+o[0]),z:S(p.z+o[1])}:p)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=t.altKey?.01:this._doc.settings.grid,o=S(Math.round((n[0]-i.start[0])/s)*s),a=S(Math.round((n[1]-i.start[1])/s)*s),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===i.id);d&&Object.assign(d,{x0:S(l.x0+o),x1:S(l.x1+o),z0:S(l.z0+a),z1:S(l.z1+a)})},i.base,!1);break}case"solarturn":{i.moved=!0;let s=i.base.settings.roof.solar?.find(p=>p.id===i.id),o=s?st(i.base,s):null;if(!s||!o)return;let[a,l]=Fn(o,s),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=t.altKey?1:15;c=Math.round(c/d)*d;let u=ne(i.base,s,c);this.change(p=>{let v=p.settings.roof.solar?.find(_=>_.id===i.id);v&&Object.assign(v,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.win?i.base.settings.roof.windows?.find($=>$.id===i.id):void 0,o=i.win?s?Tt(s):void 0:i.base.settings.roof.solar?.find($=>$.id===i.id),a=i.win?N(i.base):[...N(i.base),...this._floorId?Ot(i.base,this._floorId):[]],l=o?st(i.base,o,a):null;if(!o||!l)return;let c=t.altKey?.01:.05,d=$=>S(Math.round($/c)*c),u=l.unbounded?null:zs(a,n),p=l,v,_;if(u&&i.grab)p=u.face,v=d(u.u-i.grab.du),_=Number.isNaN(u.s)?u.face.key===o.face?o.v:Math.max(0,u.face.ls-1.5):d(u.s-i.grab.ds);else{let $=n[0]-i.start[0],b=n[1]-i.start[1],g=[l.es[0],l.es[2]],m=g[0]*g[0]+g[1]*g[1]||1;v=d(o.u+$*l.eu[0]+b*l.eu[2]),_=d(o.v+($*g[0]+b*g[1])/m)}let h=ee(p,{...o,face:p.key,u:v,v:_,tilt:p.flat?o.tilt??15:o.tilt});this.change($=>{if(i.win){let g=$.settings.roof.windows?.find(m=>m.id===i.id);g&&Object.assign(g,{face:p.key,...h});return}let b=$.settings.roof.solar?.find(g=>g.id===i.id);b&&Object.assign(b,{face:p.key,...h},p.flat&&b.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let s=this.snap(n,void 0,t.altKey),o=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!o)return;let a=me(o.points);this.change((l,c)=>{let d=c.outdoor.find(_=>_.id===i.id);if(!d)return;let u=o.points.map(_=>[..._]),p=i.index,v=o.points[p];u[p]=[S(s[0]),S(s[1])],a&&o.points.forEach((_,h)=>{h!==p&&(Math.abs(_[0]-v[0])<1e-6&&(u[h][0]=S(s[0])),Math.abs(_[1]-v[1])<1e-6&&(u[h][1]=S(s[1])))}),d.points=u},i.base,!1);break}case"roofcorner":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(o=>{let a=o.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=S(s[0]):a.x0=S(s[0]),i.corner[1]?a.z1=S(s[1]):a.z0=S(s[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId),o=s?.openings.find(c=>c.id===i.id),a=o&&s?Pt(o,s.rooms,s.walls??[]):null;if(!o||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,o.width,t.altKey);this.change((c,d)=>Object.assign(d.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=S(Math.round((s.x+n[0]-i.start[0])/o)*o),l=S(Math.round((s.z+n[1]-i.start[1])/o)*o),c=s.rotation,d=t.altKey?null:this.snapToWall({...s,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((u,p)=>Object.assign(p.furniture.find(v=>v.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/o)*o,l=Math.round((n[1]-i.start[1])/o)*o;this.change((c,d)=>d.outdoor.find(u=>u.id===i.id).points=s.points.map(([u,p])=>[S(u+a),S(p+l)]),i.base,!1);break}case"resize":{i.moved=!0;let s=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!s)return;let o=Li(s,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),o),i.base,!1);break}case"rotate":{i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!s)return;let o=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=t.altKey?1:15;o=(Math.round(o/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:o}),i.base,!1);break}case"aim":{i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let o=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=t.altKey?1:5;o=(Math.round(o/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-s.x,n[1]-s.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{rotation:o,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=S(Math.round((s.x+n[0]-i.start[0])/o)*o),l=S(Math.round((s.z+n[1]-i.start[1])/o)*o);this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(t){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&Vs.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"freewall":{Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])>=.2&&this.addFreeWall(e.start,e.end),this._guides={};break}case"wallmove":e.moved&&this.pushHistory(e.base),this._guides={};break;case"rect":{let[i,s]=e.start,[o,a]=e.end;if(Math.abs(o-i)>=.2&&Math.abs(a-s)>=.2){let l=[Math.min(i,o),Math.min(s,a)],c=[Math.max(i,o),Math.max(s,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];e.outdoor?this.addOutdoor(d):e.hole?this.addHole(l,c):e.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(e.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":e.moved&&this.pushHistory(e.base);break;case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Hs&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=Ie/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let c of l.points)for(let d of t.points){let u=Math.hypot(d[0]+e[0]-c[0],d[1]+e[1]-c[1]);u<a&&(a=u,s=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>O(t,i.points)).sort((i,s)=>It(i.points)-It(s.points))[0]?.id??null}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[s,o]=this.toScreen(n[0]);if(Math.hypot(s-e[0],o-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&It(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=zt(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,zt(t,e,"right"),zt(zt(t,e,"right"),n,"down"),zt(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,s=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],o=a=>T(this.hass,a,2);return f`<section>
      <h3>${this.t("measure")}</h3>
      ${e?f`<p class="nc3d-sub">${this.t("measure_from",{x:o(e[0]),z:o(e[1])})}</p>
            <div class="nc3d-form">
              <label class="nc3d-field nc3d-wide"
                >${this.t("measure_length")}
                <input
                  class="nc3d-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${a=>this._measureLen=parseFloat(a.target.value.replace(",","."))||0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="nc3d-arrows nc3d-wide">
                ${s.map(([a,l])=>f`<button class="nc3d-btn nc3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?f`<ol class="nc3d-measure-list">
                  ${t.slice(1).map((a,l)=>f`<li>${o(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))} m</li>`)}
                </ol>`:y}
            <div class="nc3d-actions">
              <button class="nc3d-btn nc3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="nc3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?f`<p class="nc3d-sub">${this.t("measure_gap",{gap:o(i)})}</p>`:y}`:f`<p class="nc3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="nc3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="nc3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="nc3d-btn nc3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="nc3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:V("wall"),a:[S(t[0]),S(t[1])],b:[S(e[0]),S(e[1])],thickness:null};this.change((i,s)=>s.walls=[...s.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(t=>t.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(s=>s.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return z`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[s,o]=this.toScreen(e.b),a=e.id===this._wallId;return z`<g data-free-wall=${e.id} class=${`nc3d-free-wall${a?" nc3d-free-wall-sel":""}`}>
        <line class="nc3d-hit" x1=${n} y1=${i} x2=${s} y2=${o} />
        <line class="nc3d-free-wall-line" x1=${n} y1=${i} x2=${s} y2=${o} />
      </g>
      ${a&&this.isAdmin&&!Ye(e,!0,this._doc.settings)?z`<g class="nc3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="nc3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="nc3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${s} cy=${o} r="16" class="nc3d-hit" /><circle cx=${s} cy=${o} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(t){let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=s=>{let a=Math.max(.1,s)/(n||1);this.updateFreeWall({b:[S(t.a[0]+(t.b[0]-t.a[0])*a),S(t.a[1]+(t.b[1]-t.a[1])*a)]})};return f`<section>
      <div class="nc3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="nc3d-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,s=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,s))}),.01,.02)}
        ${this.num(this.t("wall_height"),t.height??this.floor?.height??2.5,s=>this.updateFreeWall({height:s>=(this.floor?.height??2.5)-.005?null:Math.max(.05,s)}),.05,.05)}
      </div>
      ${e?f`<div class="nc3d-actions">
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="nc3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:V("hole"),type:"stairwell",x:S((t[0]+e[0])/2),z:S((t[1]+e[1])/2),w:S(e[0]-t[0]),d:S(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,s)=>s.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(t){if(!this.floor)return;let e={id:V("outdoor"),type:"lawn",points:t.map(([n,i])=>[S(n),S(i)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(s=>s.id===e),t))}deleteOutdoor(){let t=this._outdoorId;!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t)||(this.change((e,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:V("outdoor"),points:t.points.map(([n,i])=>[S(n+.5),S(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=V("room"),n=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([o,a])=>[S(o),S(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(Ds,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[s,o]=Ds[t.key];this.nudge(s*i,o*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let s=o=>[S(o[0]+t),S(o[1]+e)];if(this._deviceId){let o=this._deviceId;if(!n.placements.some(a=>a.entity_id===o))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===o);[c.x,c.z]=s([c.x,c.z])})}else if(this._furnitureId){let o=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===o);c&&([c.x,c.z]=s([c.x,c.z]))})}else if(this._openingId){let o=this.opening,a=o?Pt(o,n.rooms,n.walls??[]):null;if(!o||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=(t*(c[0]-l[0])+e*(c[1]-l[1]))/d;if(Math.abs(u)<1e-9)return!0;let p=Math.min(o.width,d)/2;this.updateOpening({offset:S(Math.min(d-p,Math.max(p,o.offset+u)))})}else if(this._wallId){let o=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===o);c&&([c.a,c.b]=[s(c.a),s(c.b)])})}else if(this._outdoorId){let o=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===o);c&&(c.points=c.points.map(s))})}else if(this._roomId){let o=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===o);if(!l)return!1;let c=new Set(n.placements.filter(d=>O([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,u)=>{let p=u.rooms.find(v=>v.id===o);if(a!==null&&a<p.points.length){p.points[a]=s(p.points[a]);return}p.points=p.points.map(s);for(let v of u.placements)c.has(v.entity_id)&&([v.x,v.z]=s([v.x,v.z]))})}else return!1;return!0}get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}unplacedAreas(t){if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===t.ha_floor&&!e.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(t=null){let e=this._doc.floors,n=V("floor"),i=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),s={...Pi(n,i,Ri(e,t?.level)),ha_floor:t?.floor_id??null},o=structuredClone(this._doc),a=o.floors.findIndex(l=>l.elevation>s.elevation);o.floors.splice(a<0?o.floors.length:a,0,s),this.setDoc(o),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=Oi(t,e,()=>V("room"));this.change((i,s)=>s.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(s=>s.id===t);n.rooms=n.rooms.filter(s=>s.id!==t),n.openings=n.openings.filter(s=>s.room_id!==t||s.wall),i&&(n.placements=n.placements.filter(s=>!O([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=V("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([s,o])=>[S(s+.5),S(o+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?y:f`<div class="nc3d-seg nc3d-dev-source">
      ${t.map(e=>f`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(t=>t.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=_s(n,()=>V("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=gs(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),s=n===null,o=S(n??i+2.4),a=s?6:this._doc.settings.roof.pitch||35,l={id:V("roof"),x0:S(t[0]),z0:S(t[1]),x1:S(e[0]),z1:S(e[1]),shape:s?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:o,eave_b:o,pitch_a:a,pitch_b:a,base:o,overhang:s?.15:null,...s?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections?.find(s=>s.id===e);i&&Object.assign(i,t)})}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:V("roof"),x0:S(t.x0+1),x1:S(t.x1+1),z0:S(t.z0+1),z1:S(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return z`<g class="nc3d-roof-layer">${e.map((n,i)=>{let s=n.id===this._roofId,o=Et(n),a=Qt(n),l=[o.at(o.u0,0),o.at(o.u1,0),o.at(o.u1,o.w),o.at(o.u0,o.w)].map(_=>this.toScreen(_)),c=(_,h)=>{let[$,b]=this.toScreen(_),[g,m]=this.toScreen(h);return z`<line x1=${$} y1=${b} x2=${g} y2=${m} />`},d;if(n.shape==="hip"){let _=Math.min((o.u1-o.u0)/2,Math.min(a.vr,o.w-a.vr)||o.w/2),h=o.at(o.u0+_,a.vr),$=o.at(o.u1-_,a.vr);d=z`${c(h,$)}${c(o.at(o.u0,0),h)}${c(o.at(o.u0,o.w),h)}${c(o.at(o.u1,0),$)}${c(o.at(o.u1,o.w),$)}`}else n.shape==="gable"?d=c(o.at(o.u0,a.vr),o.at(o.u1,a.vr)):n.shape==="pent"&&(d=c(o.at(o.u0,o.w),o.at(o.u1,o.w)));let[u,p]=this.toScreen(o.at((o.u0+o.u1)/2,o.w/2)),v=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${T(this.hass,ve(n),1)} m`;return z`<g data-roof=${n.id} class=${`nc3d-roof-sec${s?" nc3d-roof-sel":""}`}>
          <polygon points=${l.map(_=>_.join(",")).join(" ")} />
          <g class="nc3d-roof-ridge">${d}</g>
          <text x=${u} y=${p-14}>${v}</text>
        </g>
        ${s&&this.isAdmin&&!this.roofFixed(n)?[[0,0],[1,0],[1,1],[0,1]].map(([_,h])=>{let[$,b]=this.toScreen([_?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),h?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return z`<g class="nc3d-vertex" data-roof-corner=${`${n.id}:${_}:${h}`}><circle cx=${$} cy=${b} r="16" class="nc3d-hit" /><circle cx=${$} cy=${b} r="6" /></g>`}):y}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Se(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return y;let e=N(this._doc);return z`<g class="nc3d-solar-layer">${t.map(n=>{let i=st(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let s=n.id===this._solarId,o=y;if(s&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=Fn(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...lt(i,n,!0).flatMap(h=>h.corners.map($=>Math.hypot($[0]-a,$[2]-l))))*.5,[u,p]=this.toScreen([a,l]),[v,_]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);o=z`<g class="nc3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${p} x2=${v} y2=${_} />
          <circle cx=${v} cy=${_} r="16" class="nc3d-hit" />
          <circle cx=${v} cy=${_} r="8" />
          <path d="M${v-4} ${_-1}a4 4 0 1 1 2 3.5" />
        </g>`}return z`<g data-solar=${n.id} class=${`nc3d-solar${s?" nc3d-solar-sel":""}${s&&this._solarPick?" nc3d-solar-pick":""}`}>${lt(i,n,s).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[a.corners[0],a.corners[1]].flatMap((d,u)=>{let p=[d[0],d[2]],v=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return u===0?[p,v]:[v,p]}):a.corners.map(d=>[d[0],d[2]]);return z`<polygon data-cell=${a.cell} class=${a.skipped?"nc3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${o}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return y;let e=new Map(N(this._doc).map(n=>[n.key,n]));return z`<g class="nc3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),s=i?As(i,n):null;return s?z`<g data-roofwin=${n.id} class=${`nc3d-roofwin${n.id===this._roofWinId?" nc3d-roofwin-sel":""}`}><polygon points=${s.map(o=>this.toScreen([o[0],o[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=N(this._doc).filter(i=>!i.flat),e=Me(t,this._doc.settings.north??0)??N(this._doc)[0];if(!e)return;let n=An(e,V("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(o=>o.id===e);if(!i)return;Object.assign(i,t);let s=N(n).find(o=>o.key===i.face);s&&Object.assign(i,ee(s,Tt(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(N(this._doc).map(n=>[n.key,n]));return f`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="nc3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?f`<div class="nc3d-room-list">
            ${t.map((n,i)=>{let s=e.get(n.face);return f`<div class="nc3d-row">
                <button class="nc3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${s?this.faceLabel(s):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="nc3d-actions"><button class="nc3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=N(this._doc),i=l=>this.updateRoofWindow(l),s=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,o=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>l.startsWith("binary_sensor.")||l.startsWith("sensor."));return f`<button class="nc3d-btn nc3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="nc3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${s}</h3>
          ${e?f`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="nc3d-form">
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...An(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt})}}>
              ${n.map(l=>f`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,S(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,S(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),t.u,l=>i({u:S(l)}),.05)}
          ${this.num(this.t("solar_v"),t.v,l=>i({v:S(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,o,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
        </div>
        <p class="nc3d-sub">${this.t("roof_window_hint")}</p>
        ${e?f`<div class="nc3d-actions"><button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return y;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}"};return z`<g class="nc3d-energy-markers">${t.furniture.filter(n=>bt.includes(n.type)).map(n=>{let[i,s]=this.toScreen([n.x,n.z]),o=n.id===this._furnitureId;return z`<g data-energy-device=${n.id} class=${`nc3d-energy-marker${o?" nc3d-energy-marker-sel":""}`}>
          <circle cx=${i} cy=${s} r="17" />
          <text x=${i} y=${s+6} class="nc3d-energy-icon">${e[n.type]??"\u26A1"}</text>
          ${o?z`<text x=${i} y=${s+32} class="nc3d-energy-name">${this.t(`furn_${n.type}`)}</text>`:y}
          <title>${this.t(`furn_${n.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===ht)return this.t("solar_ground");if(t.wall){let i=this._doc.floors.find(s=>s.id===t.wall.floorId);return`${this.t("solar_wall")} ${i?.name??""} \xB7 ${this.t(`compass_${En(t,this._doc.settings.north??0)}`)} \xB7 ${T(this.hass,t.lu,1)} m`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(i=>i.id===t.section)+1}):this.t("solar_main");return t.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${En(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let t=N(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(o=>o.face)),n=this._doc.settings.north??0,i=Me(t.filter(o=>!e.has(o.key)),n)??Me(t,n);if(!i)return;let s=Lt(i,V("pv"));this.change(o=>o.settings.roof.solar=[...o.settings.roof.solar??[],s]),this._solarId=s.id,this._roofId=null}selectSolar(t){this._solarId=t,this._roofId=null;let e=this._doc.settings.roof.solar?.find(n=>n.id===t);e?.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let t=this._floorId??this._doc.floors[0]?.id,e=t?Ss(this._doc,V("pv"),t):null;e&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=Sn(this._doc,V("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===e);if(!i)return;Object.assign(i,t);let s=st(n,i);s&&Object.assign(i,ee(s,i))})}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof,s=i.solar?.find(a=>a.id===e);if(!s)return;if(t==="new"){let a=i.strings??[],l={id:V("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:s.entity??null,inverter:null};i.strings=[...a,l],s.string=l.id}else s.string=t;let o=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>o.has(a.id))})}updateSolarString(t){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let s=i.settings.roof.strings?.find(o=>o.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(s=>s.id!==t);let i=new Set(n.solar.map(s=>s.string).filter(Boolean));n.strings=(n.strings??[]).filter(s=>i.has(s.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=N(this._doc),n=new Map(t.map(s=>[s.id,st(this._doc,s,e)])),i=this.isAdmin;return f`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="nc3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?f`<div class="nc3d-room-list">
            ${t.map((s,o)=>{let a=n.get(s.id),l=a?lt(a,s).length:0;return f`<div class="nc3d-row">
                <button
                  class="nc3d-dev-name"
                  @click=${()=>this.selectSolar(s.id)}
                >
                  <span>${s.name||`${this.t("solar_field")} ${o+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:T(this.hass,l*.4,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="nc3d-actions">
        <button class="nc3d-btn nc3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="nc3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="nc3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?f`<h4 class="nc3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(s=>{let o=t.filter(l=>l.string===s.id),a=o.reduce((l,c)=>l+(n.get(c.id)?lt(n.get(c.id),c).length:0),0);return f`<p class="nc3d-sub">🔗 <b>${s.name}</b> · ${this.t("solar_string_sum",{fields:o.length,n:a,kwp:T(this.hass,a*.4,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(t){let e=this.isAdmin,n=N(this._doc),i=Ot(this._doc),s=st(this._doc,t,n),o=t.face===ht,a=s?lt(s,t).length:0,l=ke(t),c=l.reduce((v,_)=>v+_,0)-(t.skip?.length??0),d=this.entityOptions(v=>v.startsWith("sensor.")&&this.hass?.states[v]?.attributes.device_class==="power"),u=v=>this.updateSolar(v),p=(this._doc.settings.roof.solar??[]).findIndex(v=>v.id===t.id)+1;return f`<button class="nc3d-btn nc3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="nc3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${p}`}</h3>
          ${e?f`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="nc3d-form">
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${v=>u({name:v.target.value.trim()||null})}
          /></label>
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${v=>{let _=v.target.value,h={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h};_===ht&&u({...Sn(this._doc,t.id),...h});let $=n.find(g=>g.key===_);$&&u({...Lt($,t.id),...h,rotation:null,flip:!1});let b=i.find(g=>g.key===_);b&&u({...Lt(b,t.id),...h,rows:1,rotation:null,flip:!1})}}
            >
              ${s?y:f`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(v=>f`<option value=${v.key} ?selected=${v.key===t.face}>${this.faceLabel(v)}</option>`)}
              <option value=${ht} ?selected=${o}>${this.t("solar_ground")}</option>
              ${i.map(v=>f`<option value=${v.key} ?selected=${v.key===t.face}>${this.faceLabel(v)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,v=>{let _=Math.max(1,Math.min(40,Math.round(v)));u(t.layout?.length?{layout:Array.from({length:_},(h,$)=>t.layout[$]??t.layout[t.layout.length-1]),rows:_}:{rows:_})},1,1)}
          <label class="nc3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${t.layout?.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${v=>{let _=v.target.value.split(/[,;\s]+/).map(h=>parseInt(h,10)).filter(h=>Number.isFinite(h)&&h>=0);_.length&&(_.length===1?u({cols:Math.max(1,Math.min(60,_[0])),layout:null,skip:null}):u({layout:_.slice(0,40).map(h=>Math.min(60,h)),rows:Math.min(40,_.length),cols:Math.max(1,..._),skip:null}))}}
          /></label>
        </div>
        <p class="nc3d-sub">
          ${s&&!s.unbounded?f`${this.t("solar_face_size",{w:T(this.hass,s.lu,1),h:T(this.hass,s.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${t.layout?.length&&new Set(t.layout).size>1?f`<div class="nc3d-seg nc3d-dev-source">
              ${["left","center","right"].map(v=>f`<button aria-pressed=${(t.align??"left")===v} ?disabled=${!e} @click=${()=>u({align:v})}>${this.t(`solar_align_${v}`)}</button>`)}
            </div>`:y}
        <div class="nc3d-seg nc3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="nc3d-seg nc3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="nc3d-form">
          ${this.num(this.t("solar_module_w"),t.module_w??1.13,v=>u({module_w:Math.max(.3,Math.min(3,S(v)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),t.module_h??1.72,v=>u({module_h:Math.max(.3,Math.min(3,S(v)))}),.01,.3)}
        </div>
        <div class="nc3d-actions">
          <button class="nc3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${t.skip?.length?f`<button class="nc3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?f`<p class="nc3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="nc3d-form">
          ${o?f`${this.num(this.t("solar_base"),t.base??0,v=>u({base:v>.001?Math.min(60,S(v)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,v=>u(ne(this._doc,t,v)),5)}
                <div class="nc3d-actions">
                  <button class="nc3d-chip" ?disabled=${!e} @click=${()=>u(ne(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="nc3d-chip" ?disabled=${!e} @click=${()=>u(ne(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:f`${this.num(this.t("solar_u"),t.u,v=>u({u:S(v)}),.05)} ${this.num(this.t(s?.wall?"solar_v_wall":"solar_v"),t.v,v=>u({v:S(v)}),.05)}`}
          ${s?.wall?f`${this.num(this.t("solar_tilt_wall"),t.tilt??0,v=>u({tilt:Math.max(0,Math.min(90,Math.round(v)))}),5,0)}
                <label class="nc3d-check nc3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${v=>u({flip:v.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${s?.flat?f`${this.num(this.t("solar_tilt"),t.tilt??15,v=>u({tilt:Math.max(0,Math.min(45,Math.round(v)))}),1,0)}
                <label class="nc3d-check nc3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${v=>u({flip:v.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="nc3d-sub">
          ${this.t("solar_summary",{n:a,kwp:T(this.hass,a*.4,1)})}${a<c?f` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:y}
        </p>
        <h4 class="nc3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="nc3d-form">
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${v=>{let _=v.target.value;this.setSolarString(_===""?null:_)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(v=>f`<option value=${v.id} ?selected=${v.id===t.string}>${v.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let v=this._doc.settings.roof.strings?.find(h=>h.id===t.string);if(!v)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,h=>u({entity:h==="none"?null:h}));let _=this._doc.floors.flatMap(h=>h.furniture.filter($=>$.type==="inverter").map(($,b)=>({id:$.id,label:`${this.t("furn_inverter")} ${b+1} \xB7 ${h.name}`})));return f`<label class="nc3d-field nc3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${v.name} @change=${h=>this.updateSolarString({name:h.target.value.trim()||v.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),v.entity??null,void 0,d,h=>this.updateSolarString({entity:h==="none"?null:h}))}
              <label class="nc3d-field nc3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${h=>this.updateSolarString({inverter:h.target.value||null})}>
                  <option value="" ?selected=${!v.inverter}>${this.t(_.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${_.map(h=>f`<option value=${h.id} ?selected=${h.id===v.inverter}>${h.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="nc3d-sub">${this.t("solar_string_hint")}</p>
        <p class="nc3d-sub">${this.t("solar_form_hint")}</p>
        ${e?f`<div class="nc3d-actions">
              <button class="nc3d-btn" ?disabled=${!s} @click=${()=>s&&u({...Lt(s,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?t.windows?.find(o=>o.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let s=t.type==="custom"?t.sections??[]:[];return f`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="nc3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?f`<div class="nc3d-actions"><button class="nc3d-btn nc3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:f`<div class="nc3d-room-list">
              ${s.map((o,a)=>f`<div class="nc3d-row">
                  <button class="nc3d-dev-name" @click=${()=>this._roofId=o.id}>
                    <span>${a+1} · ${this.t(`roof_shape_${o.shape}`)} · ${T(this.hass,Math.abs(o.x1-o.x0),1)} × ${T(this.hass,Math.abs(o.z1-o.z0),1)} m · ${this.t("roof_ridge_height")} ${T(this.hass,ve(o),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="nc3d-actions">
              <button class="nc3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="nc3d-btn" ?disabled=${!e} @click=${()=>this.change(o=>o.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let t=this._solarId?this._doc.settings.roof.solar?.find(n=>n.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?this.floor?.furniture.find(n=>n.id===this._furnitureId&&bt.includes(n.type)):void 0;return e?f`<button class="nc3d-btn nc3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`:f`${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderSolarProTeaser()}`}renderSolarProTeaser(){let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return f`<section class="nc3d-teaser">
      <div class="nc3d-teaser-head"><b>☀ ${this.t("solar_pro_title")}</b><span class="nc3d-teaser-soon">${this.t("solar_pro_soon")}</span></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="nc3d-sub">${this.t("solar_pro_free")}</p>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;let n=b=>`${b.name} ${b.area_id&&this.hass?.areas?.[b.area_id]?.name||""} ${b.area_id??""}`.toLowerCase(),i=e.rooms.filter(b=>b.points.length>=3),s=b=>i.find(g=>b.test(n(g))),o=i.find(b=>e.furniture.some(g=>g.type==="parking"&&O([g.x,g.z],b.points))),a=s(/garage|carport/)??o,l=s(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=(t==="wallbox"?a:l??a)??this.room??i.sort((b,g)=>Math.abs(G(g.points))-Math.abs(G(b.points)))[0],[d,u,p]=ue(t),[v,_]=c?nt(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[b,g]=nt(c.points),m=null,x=new Set(e.openings.filter(M=>M.room_id===c.id).map(M=>M.edge)),w=c.points.some((M,E)=>!x.has(E));c.points.forEach((M,E)=>{if(w&&x.has(E))return;let F=c.points[(E+1)%c.points.length],I=Math.hypot(F[0]-M[0],F[1]-M[1]);if(m&&I<=m.l)return;let A=(M[0]+F[0])/2,P=(M[1]+F[1])/2,R=-(F[1]-M[1])/I,L=(F[0]-M[0])/I;(b-A)*R+(g-P)*L<0&&([R,L]=[-R,-L]),m={mx:A,mz:P,nx:R,nz:L,l:I}});let k=m;k&&([v,_]=[k.mx+k.nx*(u/2+.25),k.mz+k.nz*(u/2+.25)])}let h={id:V("furniture"),type:t,x:S(v),z:S(_),rotation:0,w:d,d:u,h:p,variant:null},$=c?be({...e,furniture:[...e.furniture,h]},h,this._doc.settings.wall_interior):null;$&&Object.assign(h,{x:S($.x),z:S($.z),rotation:$.rotation}),this.change((b,g)=>g.furniture.push(h)),this.selectItem("furniture",h.id),this.showPoint(h.x,h.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>bt.includes(i.type)).map(i=>({fl:n,m:i})));return f`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="nc3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?f`<div class="nc3d-room-list">
            ${e.map(({fl:n,m:i})=>f`<div class="nc3d-row">
                <button
                  class="nc3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:y}
      <div class="nc3d-actions">
        ${bt.map(n=>f`<button
            class="nc3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=p=>this.updateRoofSection(p),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[s,o]=t.flip?[i[1],i[0]]:i,a=t.shape==="flat",l=t.shape==="pent",c=p=>p.findIndex(v=>v.id===t.id)+1,d=(p,v,_,h=.05,$=0)=>this.num(p,v,b=>_(Math.max($,S(b))),h,$),u=!!this._doc.settings.lock_plan;return f`<button class="nc3d-btn nc3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="nc3d-h3row">
          <h3>${this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?u?f`<button class="nc3d-btn nc3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:f`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <div class="nc3d-seg nc3d-dev-source">
          ${Mi.map(p=>f`<button aria-pressed=${t.shape===p} ?disabled=${!e} @click=${()=>n({shape:p})}>${this.t(`roof_shape_${p}`)}</button>`)}
        </div>
        ${a?y:f`<div class="nc3d-seg nc3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="nc3d-check nc3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${p=>n({open:p.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="nc3d-form">
          ${a?d(this.t("roof_height"),t.eave_a,p=>n({eave_a:p,eave_b:p})):f`${d(`${this.t("roof_eave")} ${l?"":s}`,t.eave_a,p=>n({eave_a:p}))}
              ${l?y:d(`${this.t("roof_eave")} ${o}`,t.eave_b,p=>n({eave_b:p}))}
              ${d(`${this.t("roof_pitch_short")} ${l?"":s}`,t.pitch_a,p=>n({pitch_a:Math.min(75,p)}),1,0)}
              ${l?y:d(`${this.t("roof_pitch_short")} ${o}`,t.pitch_b,p=>n({pitch_b:Math.min(75,p)}),1,0)}`}
          ${d(this.t("roof_base"),t.base,p=>n({base:p}))}
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,p=>n({overhang:Math.min(2,p)}),.05,0)}
        </div>
        <p class="nc3d-sub">${this.t("roof_ridge_height")}: ${T(this.hass,ve(t),2)} m · ${this.t("roof_section_hint")}</p>
        ${e?f`<div class="nc3d-actions">
              ${a?y:f`<button class="nc3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              <button class="nc3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return Ye(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);this.change((i,s)=>{let o=this.fixItem(s,t,e);o&&(o.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(t=>t.settings.lock_plan=!t.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(t.target,this.localPoint(t)))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),i=_=>t.closest(`[${_}]`)?.getAttribute(_)??null,s=null,o=i("data-device"),a=i("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),u=i("data-room")??this.roomAt(n);if(o?s=["device",o]:a?s=["opening",a]:l?s=["furniture",l]:c?s=["wall",c]:d&&!u?s=["outdoor",d]:u&&(s=["room",u]),!s){this._ctx=null;return}let[p,v]=s;this.selectItem(p,v),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:e[0],y:e[1],kind:p,id:v}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return y;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".nc3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,(n?.clientWidth??800)-190)),s=Math.max(4,Math.min(t.y,(n?.clientHeight??600)-190)),o=a=>()=>{this._ctx=null,a()};return f`<div class="nc3d-ctx" style=${`left:${i}px;top:${s}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?f`<button title=${this.t("fix_hint")} @click=${o(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:f`<button title=${this.t("lock_plan_hint")} @click=${o(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?f`<button @click=${o(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${t.kind==="furniture"?f`<button @click=${o(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${o(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>`:y}
      <button class="nc3d-ctx-danger" @click=${o(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return y;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?f`<button class="nc3d-btn nc3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(t,e);return f`<button class="nc3d-btn nc3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,s){let o=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-o[0],a[1]-o[1])||1,c=((n[0]-o[0])*(a[0]-o[0])+(n[1]-o[1])*(a[1]-o[1]))/l,d=s?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return S(Math.min(l-u,Math.max(u,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let h of n.walls??[]){let $=Pt({room_id:"",edge:0,wall:h.id},n.rooms,n.walls??[]);if(!$)continue;let[b,g]=this.toScreen(h.a),[m,x]=this.toScreen(h.b),w=(m-b)**2+(x-g)**2||1,k=Math.min(1,Math.max(0,((e[0]-b)*(m-b)+(e[1]-g)*(x-g))/w)),M=Math.hypot(e[0]-b-(m-b)*k,e[1]-g-(x-g)*k),E=[(h.a[0]+h.b[0])/2,(h.a[1]+h.b[1])/2],F=n.rooms.find(I=>I.points.length>=3&&O(E,I.points));M<Ie*2.2&&(!i||M-1<i.d)&&(i={room:$.room,edge:0,d:M-1,wall:h.id,roomId:F?.id??h.id})}for(let h of n.rooms)for(let $=0;$<h.points.length;$++){let[b,g]=this.toScreen(h.points[$]),[m,x]=this.toScreen(h.points[($+1)%h.points.length]),w=(m-b)**2+(x-g)**2||1,k=Math.min(1,Math.max(0,((e[0]-b)*(m-b)+(e[1]-g)*(x-g))/w)),M=Math.hypot(e[0]-b-(m-b)*k,e[1]-g-(x-g)*k),E=M-(h.id===this._roomId?.5:0);M<Ie*2.2&&(!i||E<i.d)&&(i={room:h,edge:$,d:E})}if(!i)return!1;let{room:s,edge:o,wall:a}=i,l=s.points[o],c=s.points[(o+1)%s.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=he[t],p=u.type,v=S(Math.min(u.width,Math.max(.3,d-.1))),_={id:V("opening"),room_id:i.roomId??s.id,edge:o,...a?{wall:a}:{},offset:this.offsetOnEdge(s,o,this.toWorld(...e),v,!1),width:v,type:p,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((h,$)=>$.openings.push(_)),this._tool="select",this.selectItem("opening",_.id),!0}setOpeningPreset(t,e){let n=he[e];this._openingPreset=e;let i=on(t)===e,s="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:s,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(s=>s.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,s]=ue(t),o=this._doc.floors.filter(p=>p.elevation>e.elevation).sort((p,v)=>p.elevation-v.elevation)[0],a=t==="stairs"?S(o?o.elevation-e.elevation:e.height+.25):s,l=this.room,[c,d]=l?nt(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:V("furniture"),type:t,x:S(c),z:S(d),rotation:0,w:n,d:i,h:a,variant:null};this.change((p,v)=>v.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(t){return this.floor?be(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(s=>s.id===e),t))}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||!this.confirmFixedDelete("furniture",t)||(this.change((e,n)=>n.furniture=n.furniture.filter(i=>i.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:V("furniture"),x:S(t.x+.3),z:S(t.z+.3)};this.change((n,i)=>i.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,s)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(rt(l.type)&&l.entity&&n.has(l.entity)));let o=[...s.placements.map(a=>[a.x,a.z]),...s.furniture.filter(a=>rt(a.type)).map(a=>[a.x,a.z])];for(let a of es(e,t,o)){if(!a.entity_id.startsWith("light.")){s.placements.push(a);continue}let[l,c,d]=et.lamp_ceiling;s.furniture.push({id:V("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(s=>s.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(o=>o.id===e);if(!t||!n)return;let[i,s]=nt(n.points);this.updateDevice({x:S(i),z:S(s)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>C(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&O([u.x,u.z],t.points));if(n.length<2)return;let i=J(t.points),s=i.x1-i.x0,o=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,o)))),l=Math.ceil(n.length/a),c=n.map((u,p)=>{let v=Math.floor(p/a),_=v===l-1?n.length-a*(l-1):a,h=p-v*a;return[S(i.x0+s/_*(h+.5)),S(i.z0+o/l*(v+.5))]}),d=n.map(u=>u.entity_id);this.change((u,p)=>{d.forEach((v,_)=>Object.assign(p.placements.find(h=>h.entity_id===v),{x:c[_][0],z:c[_][1]}))})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=ls(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=cs(n);this.change((s,o)=>{o.rooms=e,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:T(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(rt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((s,o)=>{let a=o.rooms.find(l=>l.id===e.id);a.points.splice(t,1),a.wall_heights&&a.wall_heights.splice(t,1),o.openings=o.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==i).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=J(n.points),{x0:s,z0:o,x1:a,z1:l}=i;t==="x"&&([s,a]=[e,e+(a-s)]),t==="z"&&([o,l]=[e,e+(l-o)]),t==="w"&&e>.05&&(a=s+e),t==="d"&&e>.05&&(l=o+e),this.updateRoom({points:[[S(s),S(o)],[S(a),S(o)],[S(a),S(l)],[S(s),S(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(o=>[...o]);s[t][e]=S(n),this.updateRoom({points:s})}async loadImage(t){this.loadingImages.add(t);try{let e=await Be(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),s=Math.min(1,2048/Math.max(i.width,i.height)),o=document.createElement("canvas");o.width=Math.round(i.width*s),o.height=Math.round(i.height*s),o.getContext("2d").drawImage(i,0,0,o.width,o.height);let a=o.toDataURL("image/jpeg",.85),l=V("img");await de(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:o.height/o.width}};let c=this.floor?.rooms.length?J(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,S(c.x1-c.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?At(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return f`
      ${this.renderPreview()}
      <div class="nc3d-editor ${this.narrow?"nc3d-narrow":""}">
        <div class="nc3d-main">
          <div class="nc3d-toolbar">
            <div class="nc3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(n=>f`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!t||!this.isAdmin&&n!=="select"}
                  @click=${()=>{this._tool=n,this._draft=[],this._cursor=null,this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="nc3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?f`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:y}
            </div>
            ${e?.warnings.length?f`<span class="nc3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="nc3d-stage-pair ${this._split?"nc3d-split":""}" style=${this._split&&!this.narrow?`--nc3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nc3d-canvas-wrap">
            ${this.houseTool?f`<div class="nc3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
            <svg
              class="nc3d-plan nc3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):y}
              ${t?this.renderOutdoor(t):y} ${t?this.renderRooms(t):y} ${t?this.renderFurniture(t):y}
              ${t?this.renderFreeWalls(t):y}
              ${t&&e?this.renderOpenings(t,e.walls):y} ${t?this.renderMeter(t):y}
              ${t&&this._tool==="select"?this.renderDevices(t):y}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):y}
              ${t?this.renderOutdoorHandles(t):y}
              ${this._tool==="roof"?z`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?z`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderEnergyMarkers()}`:y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="nc3d-hint ${this._fixedHint?"nc3d-hint-fixed":""}">${t?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?f`<div class="nc3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return y;let[i,s]=this.toScreen([e.x,e.z]),o=e.width*this._view.scale;return z`<image href=${n.url} x=${i} y=${s} width=${o} height=${o*n.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[o,a]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],u=(_,h)=>{for(let $=Math.ceil(o/_)*_;$<=l;$+=_){let b=this.toScreen([$,0])[0];d.push(z`<line class=${h} x1=${b} y1="0" x2=${b} y2=${n} />`)}for(let $=Math.ceil(a/_)*_;$<=c;$+=_){let b=this.toScreen([0,$])[1];d.push(z`<line class=${h} x1="0" y1=${b} x2=${e} y2=${b} />`)}};i<s&&u(i,"nc3d-grid-minor"),u(s,"nc3d-grid-major");let[p,v]=this.toScreen([0,0]);return d.push(z`<circle class="nc3d-origin" cx=${p} cy=${v} r="3" />`),z`<g pointer-events="none">${d}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?z`<g pointer-events="none">${e.rooms.map(n=>z`<polygon class="nc3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:y}renderWalls(t){let e=this.floor?.height??2.5;return z`<g pointer-events="none">${t.map(n=>{let i=n.height!==void 0&&n.height<e-.01,s=`nc3d-wall${n.exterior?" nc3d-wall-ext":""}${i?" nc3d-wall-low":""}`;return z`<polygon class=${s} points=${n.footprint.map(o=>this.toScreen(o).join(",")).join(" ")} />`})}</g>`}setEdgeHeight(t,e,n){let i=this.floor;if(!i||!this.isAdmin)return;let o=At(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(a=>a.sources.some(l=>l.room_id===t.id&&l.edge===e)).flatMap(a=>a.sources);o.some(a=>a.room_id===t.id&&a.edge===e)||o.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((a,l)=>{for(let c of o){let d=l.rooms.find(p=>p.id===c.room_id);if(!d)continue;let u=(d.wall_heights??[]).slice(0,d.points.length);for(;u.length<d.points.length;)u.push(null);u[c.edge]=n,d.wall_heights=u.every(p=>p===null)?void 0:u}})}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length;return f`<div class="nc3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.map((i,s)=>{let o=t.points[(s+1)%n],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=t.wall_heights?.[s]??null,c=()=>this._edgeHi=s,d=()=>this._edgeHi=null;return f`<div
          class="nc3d-edge-height${s===this._edgeHi?" nc3d-edge-on":""}${l!==null?" nc3d-edge-low":""}"
          @mouseenter=${c}
          @mouseleave=${d}
          @focusin=${c}
          @focusout=${d}
        >
          <span><b>${this.t("wall_n",{a:s+1,b:(s+1)%n+1})}</b><br /><span class="nc3d-muted">${T(this.hass,a,2)} m</span></span>
          ${this.num(this.t("wall_height"),l??e,u=>this.setEdgeHeight(t,s,u>=e-.005?null:Math.max(.05,u)),.05,.05)}
          ${this.isAdmin&&l!==null?f`<button class="nc3d-btn" title=${this.t("wall_height_full")} @click=${()=>this.setEdgeHeight(t,s,null)}>↥</button>`:y}
        </div>`})}
      <p class="nc3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;return!e||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?y:z`${e.points.map((n,i)=>{let[s,o]=this.toScreen(n);return z`<g class="nc3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${s} cy=${o} r="16" class="nc3d-hit" /><circle cx=${s} cy=${o} r="6" /></g>`})}`}renderOutdoor(t){return z`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,s]=this.toScreen(nt(e.points)),o=J(e.points),a=Math.min(o.x1-o.x0,o.z1-o.z0)*this._view.scale>40;return z`<g data-outdoor=${e.id} class=${`nc3d-out nc3d-out-${e.type}${e.id===this._outdoorId?" nc3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?z`<text x=${i} y=${s+4}>${this.t(`out_${e.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=me(t.points),i=J(t.points),s=(o,a)=>{let{x0:l,z0:c,x1:d,z1:u}=i;o==="x"&&([l,d]=[a,a+(d-l)]),o==="z"&&([c,u]=[a,a+(u-c)]),o==="w"&&(d=l+Math.max(.1,a)),o==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([p,v])=>[S(p),S(v)])})};return f`<section>
      <div class="nc3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${o=>this.updateOutdoor({type:o.target.value})}>
            ${Ii.map(o=>f`<option value=${o} ?selected=${o===t.type}>${this.t(`out_${o}`)}</option>`)}
          </select></label
        >
        ${n?f`${this.num(this.t("x"),i.x0,o=>s("x",o))} ${this.num(this.t("z"),i.z0,o=>s("z",o))}
            ${this.num(this.t("width"),i.x1-i.x0,o=>s("w",o),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,o=>s("d",o),.01,.1)}`:y}
      </div>
      <p class="nc3d-sub">${this.t("outdoor_hint")}</p>
      ${e?f`<div class="nc3d-actions">
            <button class="nc3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}renderRooms(t){return z`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return z`<polygon data-room=${e.id} class=${e.id===this._roomId?"nc3d-room nc3d-room-sel":"nc3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(nt(e.points));return z`<text class="nc3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="nc3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:T(this.hass,It(e.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return y;let[n,i]=this.toScreen(t.points[e]),[s,o]=this.toScreen(t.points[(e+1)%t.points.length]);return z`<line class="nc3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${s} y2=${o} />`}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return y;let[n,i]=this.toScreen([e.x,e.z]);return z`<g class="nc3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return z`<g>${t.furniture.map(n=>{let i=n.id===this._furnitureId,[s,o]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/e),[d,u]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[p,v]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),_=rt(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return z`<g data-furniture=${n.id} class=${`nc3d-furn${i?" nc3d-furn-sel":""}${_?" nc3d-furn-lit":""}${bt.includes(n.type)?" nc3d-energy-item":""}`}>
        <g transform="translate(${s} ${o}) rotate(${n.rotation}) scale(${e})">
          <rect class="nc3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="nc3d-furn-sym">${as(n.type,n.w,n.d)}</g>
          <line class="nc3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?z`<text x=${s} y=${o+4}>${se(this.hass,n.type)}</text>`:y}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,$])=>{let[b,g]=this.toScreen([n.x+h*n.w*Math.cos(l)/2-$*n.d*Math.sin(l)/2,n.z+h*n.w*Math.sin(l)/2+$*n.d*Math.cos(l)/2]);return z`<g class="nc3d-resize" data-resize=${`${n.id}:${h}:${$}`}>
              <circle cx=${b} cy=${g} r="14" class="nc3d-hit" />
              <rect x=${b-5} y=${g-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${i?(()=>{let[h,$]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/e),n.z-Math.cos(l)*(n.d/2+18/e)]);return z`<text class="nc3d-dim" x=${h} y=${$+4}>${T(this.hass,n.w,2)} × ${T(this.hass,n.d,2)} m</text>`})():y}
      ${i&&n.locked?z`<text class="nc3d-lock" x=${d} y=${u+5}>🔒</text>`:y}
      ${i&&this.isAdmin&&!n.locked?z`<g class="nc3d-rotate" data-rotate=${n.id}>
            <line x1=${p} y1=${v} x2=${d} y2=${u} />
            <circle cx=${d} cy=${u} r="16" class="nc3d-hit" />
            <circle cx=${d} cy=${u} r="8" />
            <path d="M${d-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderOpenings(t,e){return z`<g>${t.openings.map(n=>{let i=Pt(n,t.rooms,t.walls??[]);if(!i)return y;let{room:s,edge:o}=i,a=xn(e,n,i),l=Ft(s,o,n.offset-n.width/2),c=Ft(s,o,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),p=G(s.points)>=0?1:-1,v=[-u*p,d*p],_=[.06,.06];a&&(_=a.wall.free||a.wall.roomLeft===s.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let h=(k,M)=>this.toScreen([k[0]+v[0]*M,k[1]+v[1]*M]),$=[h(l,_[0]+.01),h(c,_[0]+.01),h(c,-_[1]-.01),h(l,-_[1]-.01)],b=n.id===this._openingId,g=nn(n,a?.wall.exterior??!1),m=n.type==="door"&&sn(g),x=`nc3d-open nc3d-open-${n.type}${m?" nc3d-open-front":""}${b?" nc3d-open-sel":""}`,w;if(n.type==="garage"){let k=h(l,_[0]-.04),M=h(c,_[0]-.04),E=h(l,_[0]+Math.min(2,n.height)),F=h(c,_[0]+Math.min(2,n.height));w=z`<line x1=${k[0]} y1=${k[1]} x2=${M[0]} y2=${M[1]} />
          <path class="nc3d-open-track" d="M${k[0]} ${k[1]}L${E[0]} ${E[1]}M${M[0]} ${M[1]}L${F[0]} ${F[1]}" />`}else if(n.type==="door"){let k=n.swing==="out",M=k?-_[1]:_[0],E=n.hinge==="left"==p>0,F=n.leaves===2,I=l,A=c,P=[];if(g==="sidelight"||g==="sidelights"){let X=g==="sidelights",Z=Math.min(1.05,Math.max(.6,n.width-.04-(X?.6:.3))),Y=(n.width-.04-Z)/(X?2:1),q=pt=>Ft(s,o,n.offset-n.width/2+pt),ct=X||!E?.02+Y:.02;I=q(ct),A=q(ct+Z),P=X?[[l,q(.02+Y)],[q(n.width-.02-Y),c]]:E?[[q(n.width-.02-Y),c]]:[[l,q(.02+Y)]]}let R=[(I[0]+A[0])/2,(I[1]+A[1])/2],L=(F?.5:1)*Math.hypot(A[0]-I[0],A[1]-I[1]),K=(_[0]-_[1])/2,Ee=P.map(([X,Z])=>{let Y=h(X,K+.035),q=h(Z,K+.035),ct=h(X,K-.035),pt=h(Z,K-.035);return z`<line class="nc3d-open-pane" x1=${Y[0]} y1=${Y[1]} x2=${q[0]} y2=${q[1]} /><line class="nc3d-open-pane" x1=${ct[0]} y1=${ct[1]} x2=${pt[0]} y2=${pt[1]} />`}),wt=(X,Z)=>{let[Y,q]=h(X,M),[ct,pt]=h(Z,M),oe=h(X,M+(k?-L:L)),Cn=L*this._view.scale,Ws=(oe[0]-Y)*(pt-q)-(oe[1]-q)*(ct-Y);return z`<path d="M${Y} ${q}L${oe[0]} ${oe[1]}A${Cn} ${Cn} 0 0 ${Ws>0?1:0} ${ct} ${pt}" />`};w=z`${Ee}${g==="passage"?z`<line class="nc3d-open-passage" x1=${h(l,K)[0]} y1=${h(l,K)[1]} x2=${h(c,K)[0]} y2=${h(c,K)[1]} />`:g==="sliding"?z`<line x1=${h(I,M)[0]} y1=${h(I,M)[1]} x2=${h(A,M)[0]} y2=${h(A,M)[1]} />`:F?z`${wt(I,R)}${wt(A,R)}`:wt(E?I:A,E?A:I)}`}else{let k=(_[0]-_[1])/2,M=h(l,k+.035),E=h(c,k+.035),F=h(l,k-.035),I=h(c,k-.035),A=[(l[0]+c[0])/2,(l[1]+c[1])/2],P=h(A,_[0]),R=h(A,-_[1]);w=z`<line x1=${M[0]} y1=${M[1]} x2=${E[0]} y2=${E[1]} /><line x1=${F[0]} y1=${F[1]} x2=${I[0]} y2=${I[1]} />${n.leaves===2?z`<line x1=${P[0]} y1=${P[1]} x2=${R[0]} y2=${R[1]} />`:y}`}return z`<g data-opening=${n.id} class=${x}>
        <polygon class="nc3d-open-gap" points=${$.map(k=>k.join(",")).join(" ")} />
        ${w}
      </g>`})}</g>`}renderDevices(t){return z`<g>${t.placements.map(e=>{let n=C(e.entity_id);if(!n)return y;let[i,s]=this.toScreen([e.x,e.z]),o=this.hass?.states[e.entity_id]?.state==="on",a=e.entity_id===this._deviceId,l=`nc3d-device${o?" nc3d-device-on":""}${a?" nc3d-device-sel":""}`;return z`${n==="camera"?this.renderCameraWedge(e,a):y}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${s})">
        <title>${B(this.hass,e.entity_id)}</title>
        <circle r="18" class="nc3d-hit" /><circle r="12" />
        <path d=${ie(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?z`<text class="nc3d-lock" x=${i+16} y=${s-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),s=t.reach??(n?3:4.5),o=(t.rotation??0)*Math.PI/180,a=(m,x)=>this.toScreen([t.x-Math.sin(o+m)*x,t.z+Math.cos(o+m)*x]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(i,359.9)*Math.PI/180/2,[u,p]=a(-d,s),[v,_]=a(d,s),h=s*this._view.scale,$=i>=360?"":`M${l} ${c}L${u} ${p}A${h} ${h} 0 ${d>Math.PI/2?1:0} 1 ${v} ${_}Z`,[b,g]=a(0,s);return z`<g class="nc3d-wedge ${e?"nc3d-wedge-sel":""}">
      ${i>=360?z`<circle cx=${l} cy=${c} r=${h} />`:z`<path d=${$} />`}
      ${e&&this.isAdmin&&!t.locked?z`<g class="nc3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${b} y2=${g} />
            <circle cx=${b} cy=${g} r="16" class="nc3d-hit" />
            <circle cx=${b} cy=${g} r="8" />
            <path d="M${b-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((o,a)=>{let l=e[(a+1)%n],[c,d]=this.toScreen(o),[u,p]=this.toScreen(l),v=Math.hypot(l[0]-o[0],l[1]-o[1]),_=(c+u)/2,h=(d+p)/2,[$,b]=this.toScreen(nt(e)),g=-(p-d),m=u-c,x=Math.hypot(g,m)||1;g/=x,m/=x,g*(_-$)+m*(h-b)<0&&(g=-g,m=-m);let w=Math.hypot(u-c,p-d);return z`
        ${w>50?z`<text class="nc3d-dim" x=${_+g*16} y=${h+m*16+4}>${T(this.hass,v,2)} m</text>`:y}
        ${w>36?z`<g data-mid=${a} class="nc3d-mid"><circle cx=${_} cy=${h} r="14" class="nc3d-hit" /><circle cx=${_} cy=${h} r="6" /><path d="M${_-3} ${h}h6M${_} ${h-3}v6" /></g>`:y}
      `}),s=e.map((o,a)=>{let[l,c]=this.toScreen(o);return z`<g data-vertex=${a} class=${a===this._vertex?"nc3d-vertex nc3d-vertex-sel":"nc3d-vertex"}><circle cx=${l} cy=${c} r="16" class="nc3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="nc3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return z`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="freewall"){let[n,i]=this.toScreen(t.start),[s,o]=this.toScreen(t.end),a=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return z`<g pointer-events="none">
        <line class="nc3d-draft nc3d-draft-wall" x1=${n} y1=${i} x2=${s} y2=${o} />
        <text class="nc3d-dim" x=${(n+s)/2} y=${(i+o)/2-10}>${T(this.hass,a,2)} m</text>
      </g>`}if(t?.kind==="rect"){let[n,i]=this.toScreen(t.start),[s,o]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return z`<g pointer-events="none">
        <rect class="nc3d-draft" x=${Math.min(n,s)} y=${Math.min(i,o)} width=${Math.abs(s-n)} height=${Math.abs(o-i)} />
        <text class="nc3d-dim" x=${(n+s)/2} y=${Math.min(i,o)-8}>${T(this.hass,a,2)} × ${T(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return y;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return z`<g pointer-events="none">
      ${e.length>1?z`<polyline class="nc3d-draft" points=${e.map(n=>n.join(",")).join(" ")} />`:y}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let s=this.toScreen(this._draft[i]),o=this.toScreen(n);return z`<text class="nc3d-dim" x=${(s[0]+o[0])/2} y=${(s[1]+o[1])/2-6}>${T(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):y}
      ${this._draft.map((n,i)=>{let[s,o]=this.toScreen(n);return z`<circle class=${i===0&&this._draft.length>=3?"nc3d-draft-pt nc3d-draft-first":"nc3d-draft-pt"} cx=${s} cy=${o} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?z`<circle class="nc3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return z`<g pointer-events="none">
      ${t.x!==void 0?z`<line class="nc3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:y}
      ${t.z!==void 0?z`<line class="nc3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:y}
      ${t.point?z`<circle class="nc3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:y}
    </g>`}num(t,e,n,i=.01,s){return f`<label class="nc3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??y}
        .value=${String(S(e))}
        ?disabled=${!this.isAdmin}
        @change=${o=>{let a=parseFloat(o.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neoncasa3d.sidePinned",t?"1":"0")}catch{}}renderAside(t){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?f`<aside class="nc3d-side nc3d-side-strip"></aside>
      <aside class="nc3d-side nc3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:f`<aside class="nc3d-side nc3d-side-strip">
        <button class="nc3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?f`<button class="nc3d-strip-btn nc3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:y}
        <button class="nc3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nc3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:f`<aside class="nc3d-side">${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){return!this._split||this.narrow?y:f`<div class="nc3d-pin-row">
      ${t?f`<button class="nc3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:y}
      <button class="nc3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&t&&i)return f`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let o=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return o?f`<button class="nc3d-btn nc3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?f`<button class="nc3d-btn nc3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:f`
      ${i?y:f`<p class="nc3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="nc3d-floor-list">
          ${[...e].reverse().map(a=>f`<button
              class="nc3d-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?f`<button
                class="nc3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:y}
        </div>
        ${i&&this._floorMenu?f`<div class="nc3d-floor-menu">
              <p class="nc3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>f`<button class="nc3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?f` <span class="nc3d-sub">· ${this.t("level",{n:a.level})}</span>`:y}
                </button>`)}
              <button class="nc3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:y}
        ${t?f`<div class="nc3d-form">
              <label class="nc3d-field nc3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,a=>this.updateFloor({elevation:a}))}
              ${this.num(this.t("height"),t.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?f`<label class="nc3d-field nc3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===t.ha_floor||!e.some(l=>l.ha_floor===a.floor_id)).map(a=>f`<option value=${a.floor_id} ?selected=${a.floor_id===t.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(t).length?f`<div class="nc3d-actions nc3d-wide">
                    <button class="nc3d-btn nc3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:y}
              ${i?f`<div class="nc3d-actions nc3d-wide">
                    <button class="nc3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="nc3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="nc3d-actions nc3d-wide">
                    <button class="nc3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?f`<p class="nc3d-sub nc3d-wide nc3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?f`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):y}
      ${i&&!1?this.renderEnergySettings():y}
      ${i&&!1?this.renderPresenceSettings():y}
      ${t&&i?this.renderBackgroundForm(t):y} ${i?this.renderSettings():y}
      ${i?this.renderBackup():y}
    `}renderRoomList(t){return t.rooms.length?f`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="nc3d-room-list">
        ${t.rooms.map(e=>f`<button class="nc3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="nc3d-muted">${this.t("area_m2",{a:T(this.hass,It(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:y}renderRoomForm(t,e){let n=this.isAdmin,i=me(t.points),s=J(t.points);return f`<section>
      <div class="nc3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${o=>this.updateRoom({name:o.target.value})}
        /></label>
        <label class="nc3d-field nc3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${o=>this.setArea(o.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(o=>f`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
          </select></label
        >
        <label class="nc3d-field nc3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${o=>this.updateRoom({floor_material:o.target.value})}>
            ${Ai.map(o=>f`<option value=${o} ?selected=${o===t.floor_material}>${this.t(`mat_${o}`)}</option>`)}
          </select></label
        >
        ${i?f`${this.num(this.t("x"),s.x0,o=>this.setRect("x",o))} ${this.num(this.t("z"),s.z0,o=>this.setRect("z",o))}
            ${this.num(this.t("width"),s.x1-s.x0,o=>this.setRect("w",o),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,o=>this.setRect("d",o),.01,.05)}`:y}
      </div>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)}
      <details class="nc3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((o,a)=>f`<div class="nc3d-point ${a===this._vertex?"nc3d-point-sel":""}">
            <span class="nc3d-muted">${a+1}</span>
            ${this.num(this.t("x"),o[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),o[1],l=>this.setPoint(a,1,l))}
            ${n?f`<button class="nc3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?f`<div class="nc3d-actions">
            <button class="nc3d-btn nc3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="nc3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="nc3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this._spots?this.renderSpotForm(t):y}
      ${this._packages?f`<div class="nc3d-packages">
            ${Os.map(o=>f`<button class="nc3d-btn" @click=${()=>this.applyPackage(t,o)}>
                <b>${this.t(`pkg_${o}`)}</b><span>${this.t(`pkg_${o}_desc`)}</span>
              </button>`)}
            <p class="nc3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=Ls(t,e,()=>V("furniture"));this.change((i,s)=>s.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=J(t.points),n=this.hass?vt(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,s]=et[e.type],o=Ze(t,e.rows,e.cols).map(([a,l])=>({id:V("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:s,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...o)),this._spots=null,this._notice=this.t("spots_placed",{n:o.length})}renderSpotForm(t){let e=this._spots,n=Ze(t,e.rows,e.cols).length,i=this.entityOptions(o=>/^(light|switch|input_boolean)\./.test(o)),s=o=>this._spots={...e,...o};return f`<div class="nc3d-form nc3d-spot-form">
      <label class="nc3d-field nc3d-wide"
        >${this.t("spots_type")}
        <select @change=${o=>s({type:o.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(o=>f`<option value=${o} ?selected=${o===e.type}>${this.t(`furn_${o}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,o=>s({cols:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,o=>s({rows:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,o=>s({entity:o==="none"?null:o}))}
      <div class="nc3d-actions nc3d-wide">
        <button class="nc3d-btn nc3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="nc3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="nc3d-sub nc3d-wide">${this.t("spots_hint")}</p>
    </div>`}markerSelect(t,e){return f`<label class="nc3d-field nc3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Si.map(n=>f`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){let e=n=>{let i=this.hass?.entities?.[n],s=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return s?this.hass?.areas?.[s]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${B(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(t,e,n,i,s){let o=n===void 0?null:n?this.t("entity_auto",{name:B(this.hass,n)}):this.t("entity_auto_none"),a=[...o!==null?[{id:"__auto",label:o}]:[],{id:"none",label:this.t("entity_none")}];return f`<label class="nc3d-field nc3d-wide"
      >${t}
      <nc3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${e===null?o!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),s(c.detail.value==="__auto"?null:c.detail.value)}}
      ></nc3d-entity-picker></label
    >`}openingIsExterior(t){let e=this.floor,n=e?Pt(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=At(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return xn(i.walls,t,n)?.wall.exterior??!1}renderStyleSelect(t){let e=t.type==="door"?tn:en,n=nn({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return f`<label class="nc3d-field nc3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${s=>this.updateOpening({style:s.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(s=>f`<option value=${s} ?selected=${s===i}>${this.t(`style_${s}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",s=h=>{if(!this.hass)return null;let $=structuredClone(this._doc.floors);for(let b of $)for(let g of b.openings)g.id===t.id&&(g[h]=null);return ns(this.hass,$).get(t.id)?.[h]??null},o=h=>this.hass?.states[h]?.attributes.device_class,a=this.entityOptions(h=>h.startsWith("cover.")),l=this.entityOptions(h=>/^(sensor|number|input_number)\./.test(h)&&Number.isFinite(Number(this.hass?.states[h]?.state))),c=this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(o(h)??"")||h.startsWith("sensor.")&&hn(this.hass?.states[h])!==null),d=this.entityOptions(h=>{let $=this.hass?.states[h];return h.startsWith("binary_sensor.")?typeof $?.attributes.window_state=="string":h.startsWith("sensor.")&&(hn($)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${h} ${B(this.hass,h)}`))}),u=this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(o(h)??"")),p=h=>{let $=h===1,b=$?t.tilt:t.tilt2??null,g=$?t.contact:t.contact2,m=($?t.sensor:t.sensor2)??(b&&b!=="none"?"contact_tilt":"contact"),x=w=>this.updateOpening($?{contact:w}:{contact2:w==="none"?null:w});return f`<label class="nc3d-field nc3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${w=>{let k=w.target.value,M=k==="contact_tilt"?{}:$?{tilt:null}:{tilt2:null};this.updateOpening({...$?{sensor:k}:{sensor2:k},...M})}}
          >
            ${["contact","handle","contact_tilt"].map(w=>f`<option value=${w} ?selected=${w===m}>${this.t(`sensor_kind_${w}`)}</option>`)}
          </select></label
        >
        ${m==="handle"?this.entitySelect(this.t("handle_entity"),g,void 0,d,w=>x(w==="none"?$?"none":null:w)):this.entitySelect(this.t("contact_entity"),g,$?s("contact"):void 0,u,x)}
        ${m==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),b,void 0,c,w=>this.updateOpening($?{tilt:w==="none"?null:w}:{tilt2:w==="none"?null:w})):y}`},v=on(t),_=t.type==="door";return f`<section>
      <div class="nc3d-h3row"><h3>${this.t(`preset_${v}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?f`<div class="nc3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(he).map(h=>f`<button class="nc3d-chip" aria-pressed=${h===v} @click=${()=>this.setOpeningPreset(t,h)}>${this.t(`preset_${h}`)}</button>`)}
          </div>`:y}
      ${e&&!i?f`<div class="nc3d-actions">
            <button class="nc3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${_?f`<button class="nc3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="nc3d-form">
        ${this.num(this.t("width"),t.width,h=>this.updateOpening({width:Math.max(.3,h)}),.01,.3)}
        ${this.num(this.t("opening_position"),t.offset,h=>this.updateOpening({offset:Math.max(0,h)}),.01,0)}
        ${n?this.num(this.t("sill"),t.sill,h=>this.updateOpening({sill:Math.max(0,h)}),.01,0):y}
        ${this.num(this.t("opening_height"),t.height,h=>this.updateOpening({height:Math.max(.3,h)}),.01,.3)}
        ${i?y:this.renderStyleSelect(t)}
        <label class="nc3d-field nc3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${h=>this.updateOpening({mark:h.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:f`<label class="nc3d-field nc3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${h=>this.updateOpening({hinge:h.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),t.cover,s("cover"),a,h=>this.updateOpening({cover:h})):y}
        ${(n||i)&&t.cover!=="none"?f`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,h=>this.updateOpening({position:h==="none"?null:h}))}
              ${t.position?f`<label class="nc3d-check nc3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${h=>this.updateOpening({position_inverted:h.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="nc3d-check nc3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${h=>this.updateOpening({confirm:h.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?f`${t.leaves===2?f`<h4 class="nc3d-lib-head nc3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${p(1)} ${t.leaves===2?f`<h4 class="nc3d-lib-head nc3d-wide">${this.t("leaf_second")}</h4>${p(2)}`:y}`:f`${this.entitySelect(this.t(t.leaves===2?"contact_main":"contact_entity"),t.contact,s("contact"),c,h=>this.updateOpening({contact:h}))}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,h=>this.updateOpening({contact2:h==="none"?null:h})):y}`}
      </div>
      <p class="nc3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?f`<div class="nc3d-actions"><button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return f`<section>
      <div class="nc3d-h3row"><h3>${this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${Ti.map(n=>f`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>f`<optgroup label=${n.name}>
                ${n.items.map(i=>{let s=jt(n.id,i.id);return f`<option value=${s} ?selected=${s===t.type}>${Mt(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?f`<option value=${t.type} selected>${se(this.hass,t.type)}</option>`:y}
          </select></label
        >
        ${this.num(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Je(t)&&this.floor?f`${this.num(this.t("mount_height"),t.mount_y??Xe(this.floor,t),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${t.mount_y!=null?f`<button class="nc3d-btn nc3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${t.type==="stairs"?f`<p class="nc3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${t.type==="stairwell"?f`<p class="nc3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&us(rn(t),n.points))?f`<p class="nc3d-sub nc3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${t.type==="lamp_pendant"?f`<div class="nc3d-form">
            <label class="nc3d-field nc3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>f`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${Ge(t.type)?this.renderFurnitureLinks(t):y} ${t.type==="parking"?this.renderParkingForm(t):y}
      ${e?f`<div class="nc3d-actions">
            <button class="nc3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="nc3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="nc3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}renderEnergySettings(){let t=this._doc.energy,e=(l,c)=>this.hass?.states[l]?.attributes[c],n=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="battery"),s=this.entityOptions(l=>l.startsWith("sensor.")&&(e(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(e(l,"unit_of_measurement")??""))),o=l=>c=>this.setEnergy({[l]:c==="none"?null:c}),a=t.meter?this._doc.floors.find(l=>l.id===t.meter.floor_id)?.name:null;return f`<details class="nc3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="nc3d-form">
        <div class="nc3d-actions nc3d-wide">
          <button class="nc3d-btn ${this._tool==="meter"?"nc3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${t.meter?f`<button class="nc3d-btn nc3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:y}
        </div>
        <p class="nc3d-sub nc3d-wide">
          ${t.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${T(this.hass,t.meter.x,2)} / ${T(this.hass,t.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),t.grid,void 0,n,o("grid"))}
        <label class="nc3d-check nc3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,void 0,n,o("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,void 0,n,o("battery"))}
        <label class="nc3d-check nc3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,void 0,i,o("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,o("tariff"))}
      </div>
      <p class="nc3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),o=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...o.filter(l=>a(l.id)),...o.filter(l=>!a(l.id))]},n=(i,s)=>{let o=structuredClone(this._doc);o.presence=o.presence.filter(a=>a.person!==i),s&&s!=="none"&&o.presence.push({person:i,sensor:s}),this.setDoc(o)};return f`<details class="nc3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="nc3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${B(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,e(i),s=>n(i,s))):f`<p class="nc3d-sub nc3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="nc3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(t){if(!this.hass)return y;let e=this.hass,n=c=>{let d=structuredClone(this._doc.floors);for(let u of d)for(let p of u.furniture)p.id===t.id&&(p[c]=null);return fn(e,d).get(t.id)?.[c]??null},i=_e(t.type),s=rt(t.type),o=this.entityOptions(c=>s?/^(light|switch|input_boolean)\./.test(c):i?/^(media_player|switch|input_boolean|light)\./.test(c):t.type==="radiator"?c.startsWith("climate."):t.type==="robot_vacuum"?c.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate)\./.test(c)||ts(e.states[c])),a=this.entityOptions(c=>c.startsWith("sensor.")&&e.states[c]?.attributes.device_class==="power"),l=t.type==="fridge_smart"?this.entityOptions(c=>c.startsWith("binary_sensor.")):[];return f`<div class="nc3d-form nc3d-links">
        ${this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":t.type==="radiator"?"furn_entity_climate":t.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),t.entity??null,n("entity"),o,c=>this.updateFurniture({entity:c}))}
        ${s?y:this.entitySelect(this.t("furn_power"),t.power??null,n("power"),a,c=>this.updateFurniture({power:c}))}
      </div>
      ${t.type==="home_battery"?f`<div class="nc3d-form nc3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(c=>c.startsWith("sensor.")&&(e.states[c]?.attributes.device_class==="battery"||e.states[c]?.attributes.unit_of_measurement==="%")),c=>this.updateFurniture({soc:c==="none"?null:c}))}
          </div>`:y}
      ${t.type==="wallbox"?f`<div class="nc3d-form nc3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(c=>c.startsWith("binary_sensor.")||c.startsWith("sensor.")),c=>this.updateFurniture({status:c==="none"?null:c}))}
          </div>`:y}
      ${!s||t.entity?f`<label class="nc3d-check nc3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="nc3d-form">${this.markerSelect(t.marker??null,c=>this.updateFurniture({marker:c}))}</div>`:y}
      ${t.type==="robot_vacuum"?f`<div class="nc3d-form nc3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,os(e,fn(e,this._doc.floors).get(t.id)?.entity??null,null),this.entityOptions(c=>c.startsWith("sensor.")),c=>this.updateFurniture({room_sensor:c}))}
          </div>`:y}
      ${t.type==="fridge_smart"?f`<div class="nc3d-form nc3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,l,c=>this.updateFurniture({door_left:c}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,l,c=>this.updateFurniture({door_right:c}))}
            </div>
            <p class="nc3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${ss(t.type)?this.renderPictureRules(t):y}
      <p class="nc3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":t.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){let e=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(b=>b.items.filter(g=>g.vehicle).map(g=>({id:jt(b.id,g.id),label:`${Mt(g,n)} \xB7 ${b.name}`}))),s=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)),o=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),a=t.type_entity?this.hass?.states[t.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],c=t.types??[],d=b=>this.updateFurniture({types:b}),u=(b,g)=>f`<select ?disabled=${!e} @change=${m=>g(m.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${i.map(m=>f`<option value=${m.id} ?selected=${m.id===b}>${m.label}</option>`)}
      </select>`,p=this.floor,v=p?.rooms.find(b=>b.points.length>=3&&O([t.x,t.z],b.points)),_=t.vehicle?j(t.vehicle):void 0,h=_?_.size[2]*(t.scale??1):0,$=!!v&&!!p&&h>p.height+1e-6;return f`<div class="nc3d-form nc3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,s,b=>this.updateFurniture({entity:b==="none"?null:b}))}
        <label class="nc3d-field nc3d-wide">${this.t("parking_vehicle")} ${u(t.vehicle??null,b=>this.updateFurniture({vehicle:b}))}</label>
        ${i.length?y:f`<p class="nc3d-sub nc3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),b=>this.updateFurniture({scale:Math.min(150,Math.max(30,b))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,o,b=>this.updateFurniture({type_entity:b==="none"?null:b}))}
        ${t.type_entity?f`<div class="nc3d-wide">
              <div class="nc3d-sub">${this.t("parking_types")}</div>
              ${c.map((b,g)=>f`<div class="nc3d-parking-row">
                  <input
                    type="text"
                    list="nc3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${b.state}
                    ?disabled=${!e}
                    @change=${m=>d(c.map((x,w)=>w===g?{...x,state:m.target.value}:x))}
                  />
                  ${u(b.vehicle,m=>d(c.map((x,w)=>w===g?{...x,vehicle:m??""}:x)))}
                  <button class="nc3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>d(c.filter((m,x)=>x!==g))}>✕</button>
                </div>`)}
              <datalist id="nc3d-parking-states">${l.map(b=>f`<option value=${b}></option>`)}</datalist>
              ${e?f`<button class="nc3d-btn" @click=${()=>d([...c,{state:l[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${$?f`<p class="nc3d-sub nc3d-warn">${this.t("parking_too_tall",{car:T(this.hass,h,2),room:T(this.hass,p.height,2)})}</p>`:y}
      <p class="nc3d-sub">${this.t("parking_hint")}</p>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neoncasa3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,i){let s=i?n.filter(a=>a.label.toLowerCase().includes(i)):n;if(i&&!s.length)return y;let o=i?!0:this._libOpen.has(t);return f`<button class="nc3d-lib-head nc3d-lib-toggle" aria-expanded=${o} @click=${()=>this.toggleLibrary(t)}>
        <span class="nc3d-lib-caret">${o?"\u25BE":"\u25B8"}</span>${e} <span class="nc3d-lib-count">${s.length}</span>
      </button>
      ${o?f`<div class="nc3d-library">${s.map(a=>this.libraryButton(a.type,a.label))}</div>`:y}`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!$n("screens"))return f`<div class="nc3d-wide">
        <div class="nc3d-sub">${this.t("screen_pictures")}</div>
        <p class="nc3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${Xt(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Yt(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=b=>this.updateFurniture({pictures:b}),s=this.entityOptions(()=>!0),o=b=>["string","number","boolean"].includes(typeof b),a=b=>Object.entries(this.hass?.states[b]?.attributes??{}).filter(([g,m])=>o(m)&&g!=="friendly_name"&&g!=="icon").map(([g])=>g),l=(b,g)=>{let m=this.hass?.states[b];return m?String((g?m.attributes[g]:m.state)??""):""},c=(b,g)=>{let m=this.hass?.states[b],x=!g&&Array.isArray(m?.attributes.options)?m.attributes.options:[];return x.length?x:[l(b,g)]},d=b=>`${b.entity}\0${b.attribute??""}`,u=[];n.forEach((b,g)=>{let m=u.find(x=>d(x)===d(b));m?m.rows.push(g):u.push({entity:b.entity,attribute:b.attribute??null,rows:[g]})});let p=(b,g)=>i(n.map((m,x)=>b.rows.includes(x)?{...m,...g}:m)),v=(b,g)=>i(n.map((m,x)=>x===b?{...m,...g}:m)),_=this.storedPictures(),h=this.entityOptions(b=>b.startsWith("camera.")),$=b=>b.image.startsWith("camera:")?b.image.slice(7):null;return f`<div class="nc3d-wide">
      <div class="nc3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?f`<label class="nc3d-field nc3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${b=>this.updateFurniture({screen_bg:b.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${u.map(b=>f`<div class="nc3d-picture-group">
          <nc3d-entity-picker
            .options=${s}
            .value=${b.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${g=>{g.stopPropagation(),p(b,{entity:g.detail.value})}}
          ></nc3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${g=>{let m=g.target.value||null,x=l(b.entity,m);i(n.map((w,k)=>b.rows.includes(k)?{...w,attribute:m,state:b.rows[0]===k?x:w.state}:w))}}
          >
            <option value="" ?selected=${!b.attribute}>${this.t("picture_state_of")}</option>
            ${a(b.entity).map(g=>f`<option value=${g} ?selected=${g===b.attribute}>${g}</option>`)}
          </select>
          <span class="nc3d-sub nc3d-rule-now">${this.t("picture_current",{value:l(b.entity,b.attribute)||"\u2013"})}</span>
          ${b.rows.map(g=>{let m=n[g],x=!!this.hass&&is(this.hass,m);return f`<div class="nc3d-picture-row ${x?"nc3d-rule-hit":""}">
              <input
                type="text"
                list="nc3d-picture-states-${g}"
                placeholder=${this.t("picture_state")}
                .value=${m.state}
                ?disabled=${!e}
                @change=${w=>v(g,{state:w.target.value})}
              />
              <datalist id="nc3d-picture-states-${g}"><option value="*"></option>${c(b.entity,b.attribute).map(w=>f`<option value=${w}></option>`)}</datalist>
              ${this._images[m.image]?f`<img class="nc3d-picture-thumb" src=${this._images[m.image].url} alt="" /> `:y}
              ${$(m)&&this.hass?.states[$(m)]?.attributes.entity_picture?f`<img class="nc3d-picture-thumb" src=${String(this.hass.states[$(m)].attributes.entity_picture)} alt="" />`:y}
              <label class="nc3d-btn nc3d-picture-pick">
                ${m.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${w=>{this.uploadPicture(w,t,g)}} />
              </label>
              ${_.filter(w=>w!==m.image).length?f`<div class="nc3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${_.filter(w=>w!==m.image&&this._images[w]).map(w=>f`<button class="nc3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>v(g,{image:w})}><img src=${this._images[w].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(m.image)?m.image:""}
                ?disabled=${!e}
                @change=${w=>{let k=w.target.value.trim();k&&v(g,{image:k})}}
              />
              ${h.length?f`<nc3d-entity-picker
                    class="nc3d-picture-camera"
                    .options=${h}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${$(m)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${w=>{w.stopPropagation(),w.detail.value!=="none"?v(g,{image:`camera:${w.detail.value}`}):$(m)&&v(g,{image:""})}}
                  ></nc3d-entity-picker>`:y}
              <span class="nc3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="nc3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((w,k)=>k!==g))}>✕</button>
            </div>`})}
          ${e?f`<button class="nc3d-btn" @click=${()=>i([...n,{entity:b.entity,attribute:b.attribute,state:l(b.entity,b.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${e?f`<button class="nc3d-btn" @click=${()=>i([...n,{entity:s[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="nc3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){let i=t.target,s=i.files?.[0];if(i.value="",!s)return;let o=await createImageBitmap(s),a=Math.min(1,512/Math.max(o.width,o.height)),l=document.createElement("canvas");l.width=Math.round(o.width*a),l.height=Math.round(o.height*a),l.getContext("2d").drawImage(o,0,0,l.width,l.height);let c=l.toDataURL(s.type==="image/png"?"image/png":"image/jpeg",.85),d=V("pic");await de(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let u=this.furnitureItem?.id===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((p,v)=>v===n?{...p,image:d}:p)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return f`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="nc3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      <input
        class="nc3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
      />
      ${Object.entries(Ci).map(([i,s])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...s,...i==="kitchen"&&$n("fridge_smart")?["fridge_smart"]:[]].map(o=>({type:o,label:this.t(`furn_${o}`)})),e))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,i.name,i.items.map(s=>({type:jt(i.id,s.id),label:Mt(s,n)})),e))}
    </section>
    <div class="nc3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="nc3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="nc3d-btn nc3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=s=>{this.showPreview(t,s.currentTarget)},i=rt(t)?"light":Ge(t)?"switch":null;return f`<button
      class="nc3d-btn ${i?"nc3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):e}
      @click=${()=>this.addFurniture(t)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${e}
      ${i?f`<svg class="nc3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${ie(i)} />
          </svg>`:y}
    </button>`}async showPreview(t,e){let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let s=await Cs(),[o,a,l]=ue(t),c=s.furniturePreview({type:t,w:o,d:a,h:l,variant:null,lamp:Hi[t]??null},180,this.packs??[]);this._preview?.type===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?f`<div class="nc3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?f`<img src=${t.url} alt="" />`:f`<span class="nc3d-preview-wait"></span>`}
      <b>${se(this.hass,t.type)}</b>
    </div>`:y}renderDeviceForm(t){let e=this.isAdmin,n=C(t.entity_id),i=n==="light",s=t.mount??"ceiling",o=n?un(n,this.floor?.height??2.5,i?s:null):1;return f`<section>
      <div class="nc3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="nc3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?ie(n):""} />
        </svg>
        ${B(this.hass,t.entity_id)}
      </p>
      <div class="nc3d-form">
        ${i?f`<label class="nc3d-field nc3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>f`<option value=${a} ?selected=${a===s}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?f`<label class="nc3d-field nc3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.num(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),t.y??o,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?f`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <p class="nc3d-sub nc3d-wide">${this.t("camera_aim_hint")}</p>`:y}
        ${n&&Gi.has(n)?f`<label class="nc3d-check nc3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${this.markerSelect(t.marker??null,a=>this.updateDevice({marker:a}))}
      </div>
      ${e?f`<div class="nc3d-actions">
            <button class="nc3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?f`<button class="nc3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            <button
              class="nc3d-btn nc3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(t){let e=this.isAdmin,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,s=n?vt(n,t.area_id).filter(m=>qt(C(m))):[],o=new Set([...this.floor?.placements.filter(m=>O([m.x,m.z],t.points)).map(m=>m.entity_id)??[],...this.floor?.furniture.filter(m=>rt(m.type)&&m.entity&&O([m.x,m.z],t.points)).map(m=>m.entity)??[]]),a=n?pn(n,s):[],l=a.map(m=>m.primary).filter(m=>!o.has(m)),c=this._deviceQuery.trim().toLowerCase(),d=m=>!c||B(n,m,i).toLowerCase().includes(c)||m.includes(c),u=this.floor?.placements.filter(m=>C(m.entity_id)==="light"&&(m.mount??"ceiling")==="ceiling"&&O([m.x,m.z],t.points)).length,p=new Set(t.panel??[]),v=new Map;for(let m of this._doc.floors)for(let x of[...m.placements.map(w=>[w.entity_id,w.x,w.z]),...m.furniture.filter(w=>rt(w.type)&&w.entity).map(w=>[w.entity,w.x,w.z])]){let w=m.rooms.find(k=>O([x[1],x[2]],k.points));w&&w.id!==t.id&&v.set(x[0],w.name)}let _=(m,x=!1,w=i)=>{let k=o.has(m),M=k?void 0:v.get(m);return f`<div class="nc3d-row nc3d-dev-row ${x?"nc3d-dev-extra":""}">
        <button class="nc3d-dev-name ${k?"":"nc3d-muted"}" ?disabled=${!k} @click=${()=>this.selectItem("device",m)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${ie(C(m))} />
          </svg>
          <span>${B(n,m,w)}${M?f`<small class="nc3d-muted"> · ${this.t("devices_placed_in",{room:M})}</small>`:y}</span>
        </button>
        ${e&&!k?f`<button
              class="nc3d-pin ${p.has(m)?"nc3d-pin-on":""}"
              aria-pressed=${p.has(m)}
              title=${this.t(p.has(m)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has(m)?[...p].filter(E=>E!==m):[...p,m]})}
            >
              ${p.has(m)?"\u2605":"\u2606"}
            </button>`:y}
        ${e?k?f`<button class="nc3d-link" @click=${()=>this.removeDevice(m)}>${this.t("devices_remove")}</button>`:f`<button class="nc3d-link" @click=${()=>this.placeDevices([m])}>${this.t("devices_place")}</button>`:y}
      </div>`},h=e?this._devSource:"area",$=m=>{this._devSource=m,this._deviceQuery=""},b=f`<input
      class="nc3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${m=>this._deviceQuery=m.target.value}
    />`,g=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return f`<section>
      <h3>${this.t("devices")}</h3>
      <p class="nc3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?f`<div class="nc3d-seg nc3d-dev-source">
            <button aria-pressed=${h==="area"} @click=${()=>$("area")}>${this.t("devices_src_area")}${s.length?` (${a.length})`:""}</button>
            <button aria-pressed=${h==="other"} @click=${()=>$("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${h==="none"} @click=${()=>$("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${h!=="area"?f`${b}${this.renderDeviceExtras(t,_,h)}`:t.area_id?s.length?f`${e&&(u??0)>=2?f`<button class="nc3d-btn nc3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:y}
              ${s.length>8?b:y}
              <div class="nc3d-room-list">
                ${a.map(m=>{let x=m.others.filter(d),w=this._expanded.has(m.primary)||!!c&&x.length>0;return!d(m.primary)&&!x.length?y:f`${_(m.primary)}
                  ${m.others.length?f`<button
                        class="nc3d-more"
                        @click=${()=>{let k=new Set(this._expanded);k.has(m.primary)?k.delete(m.primary):k.add(m.primary),this._expanded=k}}
                      >
                        ${w?this.t("devices_less"):this.t("devices_more",{n:m.others.length})}
                      </button>`:y}
                  ${w?(c?x:m.others).map(k=>_(k,!0)):y}`})}
              </div>
              ${e&&l.length>1?f`<button class="nc3d-link nc3d-place-all" @click=${g}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
              <p class="nc3d-sub">${this.t("devices_hint")}</p>`:f`<p class="nc3d-sub">${this.t("devices_none")}</p>`:f`<p class="nc3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return y;let s=50,o=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!o||`${B(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(o),l=d=>d>0?f`<p class="nc3d-sub">${this.t("devices_narrow",{n:d})}</p>`:y;if(n==="other"){let d=0,u=0,p=Yi(i,t.area_id).map(v=>{let _=v.ids.filter($=>a($,v.name)),h=_.slice(0,Math.max(0,s-d));return d+=h.length,u+=_.length-h.length,h.length?f`<div class="nc3d-dev-area">${v.name}</div>${h.map($=>e($,!1,v.name))}`:y});return d?f`<div class="nc3d-room-list">${p}</div>${l(u)}`:f`<p class="nc3d-sub">${this.t("devices_none")}</p>`}let c=Qi(i).filter(d=>a(d));return c.length?f`<div class="nc3d-room-list">${c.slice(0,s).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,s))}`:f`<p class="nc3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return y;let n=(o,a)=>{let l={...t.climate??{},[o]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!t.climate&&Object.values(t.climate).some(o=>o!=null),s=(o,a)=>{let l=cn[o],c=Ji(e,this.floor??null,{...t,climate:null},o),d=this.entityOptions(u=>u.startsWith("sensor.")&&e.states[u]?.attributes.device_class===l).map(u=>({...u,rank:(ge(e,u.id)===t.area_id?0:1)+(dn(e,u.id)?0:2)})).sort((u,p)=>u.rank-p.rank).map(({id:u,label:p})=>({id:u,label:p}));return this.entitySelect(a,t.climate?.[o]??null,c[0]??null,d,u=>n(o,u))};return f`<details class="nc3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="nc3d-form">
        ${s("temperature",this.t("climate_temperature"))} ${s("humidity",this.t("climate_humidity"))} ${s("co2",this.t("climate_co2"))}
      </div>
      <p class="nc3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return f`<details class="nc3d-section">
      <summary>${this.t("background")}</summary>
      <div class="nc3d-form">
        <label class="nc3d-btn nc3d-wide nc3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?f`${this.num(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.num(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.num(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              <label class="nc3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${n=>this.updateFloor({background:{...e,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="nc3d-btn nc3d-danger nc3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:y}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await ni(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await si(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await mi(this.hass),e={};for(let i of Bi(t.building))try{e[i]=await Be(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);an(`neoncasa3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String(t?.message??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neoncasa3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let s=await fi(this.hass,i.building,i.packs??[]),o=0;for(let[l,c]of Object.entries(i.images??{}))try{await de(this.hass,l,c),o++}catch{}this.setDoc(pe(s.building)),this._floorId=s.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=s.skipped.length?` ${this.t("backup_full_skipped",{packs:s.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:s.packs,pictures:o})+a}catch(s){let{code:o,message:a}=s??{};alert(this.t("backup_import_error",{error:a??o??String(s)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);an(`neoncasa3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(Wi(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=Ni(await n.text())}catch(s){let o=s.message;alert(o==="not_json"?this.t("import_error_not_json"):o==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:o}));return}confirm(this.t("backup_import_confirm"))&&(await ii(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return f`<details
      class="nc3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="nc3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?f`<p class="nc3d-sub">${this.t("loading")}</p>`:this._history.length?f`<div class="nc3d-room-list">
              ${this._history.map(t=>f`<div class="nc3d-row nc3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="nc3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="nc3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:f`<p class="nc3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="nc3d-lib-head">${this.t("backup_file")}</h4>
      <div class="nc3d-actions">
        <button class="nc3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="nc3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="nc3d-btn nc3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="nc3d-sub">${this.t("backup_hint")}</p>
      <h4 class="nc3d-lib-head">${this.t("backup_full")}</h4>
      <div class="nc3d-actions">
        <button class="nc3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="nc3d-btn nc3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="nc3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return f`<details class="nc3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="nc3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),t.north,n=>e({north:(Math.round(n)%360+360)%360}),1)}
        <label class="nc3d-field nc3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>f`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?f`<label class="nc3d-field nc3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:y}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${t.roof.type!=="none"?this.num(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,hs(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):y}
        <div class="nc3d-sub nc3d-wide">${this.t("weather_effects")}</div>
        ${zi.map(n=>{let i=t.weather_effects??Qe;return f`<label class="nc3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${s=>{let o=s.target.checked;e({weather_effects:o?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="nc3d-check nc3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
      </div>
      <p class="nc3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Ct,ze,tt`
      :host {
        display: block;
        height: 100%;
      }
      .nc3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .nc3d-editor:has(> .nc3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .nc3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .nc3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--nc3d-line);
        border-radius: 12px;
        background: var(--nc3d-chrome);
        color: var(--nc3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .nc3d-strip-hot {
        border-color: var(--nc3d-accent);
        color: var(--nc3d-accent);
      }
      .nc3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        z-index: 6;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .nc3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .nc3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--nc3d-muted);
        font-size: 12px;
      }
      .nc3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--nc3d-text);
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-line);
        border-radius: 8px;
      }
      .nc3d-3d-select {
        font: inherit;
        color: var(--nc3d-text);
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .nc3d-editor.nc3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .nc3d-main {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 0;
        min-width: 0;
      }
      .nc3d-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .nc3d-warn {
        color: var(--nc3d-warm);
        font-size: 12.5px;
      }
      .nc3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--nc3d-line);
        border-radius: 10px;
      }
      .nc3d-picture-group > select {
        min-width: 0;
      }
      .nc3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--nc3d-line) 40%, transparent);
      }
      .nc3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .nc3d-picture-row > .nc3d-sub,
      .nc3d-picture-row > .nc3d-picture-camera {
        grid-column: 1 / -1;
      }
      .nc3d-picture-row.nc3d-rule-hit {
        outline: 1px solid var(--nc3d-accent);
      }
      .nc3d-rule-now {
        grid-column: 1 / -1;
      }
      .nc3d-rule-hit {
        color: var(--nc3d-accent);
      }
      .nc3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .nc3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--nc3d-line);
        border-radius: 6px;
        background: var(--nc3d-chrome-solid);
        cursor: pointer;
      }
      .nc3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .nc3d-picture-reuse-btn:hover {
        border-color: var(--nc3d-accent);
      }
      .nc3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .nc3d-picture-pick {
        justify-self: start;
      }
      .nc3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .nc3d-parking-row input,
      .nc3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .nc3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .nc3d-stage-pair > .nc3d-canvas-wrap {
        flex: 1 1 var(--nc3d-split, 55%);
        min-width: 0;
      }
      .nc3d-split > .nc3d-canvas-wrap {
        flex: 0 0 var(--nc3d-split, 55%);
      }
      .nc3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--nc3d-line);
        touch-action: none;
      }
      .nc3d-split-handle:hover {
        background: var(--nc3d-accent);
      }
      .nc3d-editor-3d {
        position: relative;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--nc3d-line);
        container-type: size;
        container-name: nc3d;
      }
      .nc3d-editor-3d nc3d-view3d {
        display: block;
        height: 100%;
      }
      .nc3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .nc3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--nc3d-chrome);
        box-shadow: var(--nc3d-shadow);
        font-size: 13px;
      }
      .nc3d-danger-chip {
        color: var(--nc3d-danger, #ff6b7a);
      }
      .nc3d-narrow .nc3d-stage-pair.nc3d-split {
        flex-direction: column;
      }
      .nc3d-narrow .nc3d-split > .nc3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .nc3d-narrow .nc3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--nc3d-line);
      }
      .nc3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--nc3d-bg2), var(--nc3d-bg) 75%);
      }
      svg.nc3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.nc3d-tool-rect,
      svg.nc3d-tool-polygon {
        cursor: crosshair;
      }
      .nc3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .nc3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .nc3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .nc3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .nc3d-wall {
        fill: #1b2a47;
      }
      .nc3d-wall-ext {
        fill: #22345a;
      }
      .nc3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .nc3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .nc3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--nc3d-accent);
        stroke-width: 2.5;
      }
      .nc3d-room-name {
        fill: var(--nc3d-text);
        font: 600 13px var(--nc3d-title-font);
        text-anchor: middle;
      }
      .nc3d-room-area {
        fill: var(--nc3d-muted);
        font: 500 11.5px var(--nc3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .nc3d-dim {
        fill: var(--nc3d-accent);
        font: 600 11.5px var(--nc3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--nc3d-bg);
        stroke-width: 3px;
      }
      .nc3d-vertex circle:not(.nc3d-hit) {
        fill: var(--nc3d-bg);
        stroke: var(--nc3d-accent);
        stroke-width: 2;
      }
      .nc3d-vertex-sel circle:not(.nc3d-hit) {
        fill: var(--nc3d-accent);
      }
      .nc3d-vertex,
      .nc3d-mid {
        cursor: grab;
      }
      .nc3d-hit {
        fill: transparent;
      }
      .nc3d-mid circle:not(.nc3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--nc3d-soft);
      }
      .nc3d-mid path {
        stroke: var(--nc3d-text);
        stroke-width: 1.5;
      }
      .nc3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--nc3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.nc3d-draft {
        fill: none;
      }
      .nc3d-draft-pt {
        fill: var(--nc3d-warm);
      }
      .nc3d-draft-first {
        fill: transparent;
        stroke: var(--nc3d-warm);
        stroke-width: 2;
      }
      .nc3d-cursor {
        fill: var(--nc3d-warm);
      }
      .nc3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .nc3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .nc3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--nc3d-muted);
        pointer-events: none;
      }
      .nc3d-side {
        border-left: 1px solid var(--nc3d-line);
        background: var(--nc3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .nc3d-narrow .nc3d-side {
        border-left: none;
        border-top: 1px solid var(--nc3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--nc3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .nc3d-floor-list,
      .nc3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nc3d-floor-list .nc3d-chip {
        box-shadow: none;
        border: 1px solid var(--nc3d-line);
      }
      .nc3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .nc3d-wide {
        grid-column: 1 / -1;
      }
      .nc3d-room-list {
        display: grid;
        gap: 2px;
      }
      .nc3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--nc3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--nc3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .nc3d-row:hover {
        color: var(--nc3d-accent);
      }
      .nc3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--nc3d-muted);
      }
      .nc3d-check input {
        accent-color: var(--nc3d-accent);
      }
      .nc3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .nc3d-meter path {
        fill: #ffc633;
      }
      .nc3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .nc3d-packages .nc3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .nc3d-packages .nc3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--nc3d-muted);
      }
      .nc3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .nc3d-arrows .nc3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .nc3d-arrow-up {
        grid-area: up;
      }
      .nc3d-arrow-left {
        grid-area: left;
      }
      .nc3d-arrow-right {
        grid-area: right;
      }
      .nc3d-arrow-down {
        grid-area: down;
      }
      .nc3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--nc3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .nc3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .nc3d-library .nc3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      .nc3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .nc3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .nc3d-furn-sym .nc3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .nc3d-furn-sym .nc3d-sym-strong {
        stroke: var(--nc3d-accent);
        stroke-width: 2;
      }
      .nc3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .nc3d-out-lawn polygon,
      .nc3d-out-bed polygon,
      .nc3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .nc3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--nc3d-accent);
      }
      .nc3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .nc3d-free-wall {
        cursor: grab;
      }
      .nc3d-vertex-no {
        fill: var(--nc3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      .nc3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--nc3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--nc3d-accent) 6%, transparent);
      }
      .nc3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--nc3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .nc3d-edge-height {
        display: grid;
        grid-template-columns: 1fr 1fr 40px;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .nc3d-edge-on {
        background: color-mix(in srgb, var(--nc3d-accent) 14%, transparent);
      }
      .nc3d-edge-low b {
        color: var(--nc3d-accent);
      }
      .nc3d-wall-low {
        opacity: 0.55;
      }
      .nc3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .nc3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .nc3d-place-all {
        margin: 10px 0 0;
      }
      .nc3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .nc3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--nc3d-accent) 14%, transparent);
        stroke: var(--nc3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .nc3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .nc3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .nc3d-tool-energy .nc3d-roof-layer {
        opacity: 0.45;
      }
      .nc3d-tool-energy .nc3d-energy-item {
        pointer-events: auto;
      }
      .nc3d-energy-marker {
        cursor: move;
      }
      .nc3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .nc3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .nc3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .nc3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--nc3d-accent) 40%, transparent);
      }
      .nc3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .nc3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .nc3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .nc3d-energy-marker-sel circle {
        stroke: var(--nc3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--nc3d-accent) 25%, #0b1426);
      }
      .nc3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .nc3d-energy-icon {
        font-size: 17px;
      }
      .nc3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .nc3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .nc3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .nc3d-solar polygon.nc3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .nc3d-solar-pick polygon {
        cursor: pointer;
      }
      .nc3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .nc3d-roof-sel .nc3d-roof-ridge line {
        stroke: var(--nc3d-accent);
      }
      .nc3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .nc3d-tool-energy .nc3d-room,
      .nc3d-tool-energy [data-furniture],
      .nc3d-tool-energy [data-device],
      .nc3d-tool-energy [data-opening],
      .nc3d-tool-energy [data-free-wall],
      .nc3d-tool-energy [data-outdoor],
      .nc3d-tool-energy .nc3d-roof-layer,
      .nc3d-tool-roof .nc3d-room,
      .nc3d-tool-roof [data-furniture],
      .nc3d-tool-roof [data-device],
      .nc3d-tool-roof [data-opening],
      .nc3d-tool-roof [data-free-wall],
      .nc3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .nc3d-dev-area {
        margin: 10px 0 2px;
        color: var(--nc3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .nc3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .nc3d-h3row h3 {
        margin-bottom: 0;
      }
      .nc3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .nc3d-fix[aria-pressed="true"] {
        border-color: var(--nc3d-accent);
        color: var(--nc3d-accent);
      }
      .nc3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .nc3d-hint-fixed {
        color: var(--nc3d-accent);
      }
      .nc3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--nc3d-line);
        border-radius: 10px;
        background: var(--nc3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .nc3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .nc3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--nc3d-accent) 16%, transparent);
      }
      .nc3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .nc3d-ctx-danger {
        color: var(--nc3d-danger, #ff6b7a) !important;
      }
      .nc3d-edge-hi {
        stroke: var(--nc3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--nc3d-accent));
      }
      .nc3d-free-wall .nc3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .nc3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .nc3d-free-wall-sel .nc3d-free-wall-line {
        stroke: var(--nc3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .nc3d-draft-wall {
        stroke-width: 4;
      }
      .nc3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .nc3d-out-sel polygon {
        stroke: var(--nc3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .nc3d-out text {
        fill: var(--nc3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .nc3d-furn-lit .nc3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--nc3d-warm);
      }
      .nc3d-rotate {
        cursor: grab;
      }
      .nc3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--nc3d-shadow), 0 0 0 1px var(--nc3d-line);
        text-align: center;
        pointer-events: none;
        animation: nc3d-pop 120ms ease-out;
      }
      @keyframes nc3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .nc3d-preview img,
      .nc3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .nc3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .nc3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .nc3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .nc3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--nc3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .nc3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--nc3d-muted);
        cursor: pointer;
      }
      .nc3d-pin-on {
        color: var(--nc3d-warm);
      }
      .nc3d-back {
        margin-bottom: 12px;
      }
      .nc3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .nc3d-resize {
        cursor: nwse-resize;
      }
      .nc3d-resize rect {
        fill: var(--nc3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .nc3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .nc3d-floor-menu .nc3d-btn {
        text-align: left;
      }
      .nc3d-rotate line {
        stroke: var(--nc3d-accent);
        stroke-dasharray: 3 3;
      }
      .nc3d-rotate circle:not(.nc3d-hit) {
        fill: #0b1222;
        stroke: var(--nc3d-accent);
        stroke-width: 2;
      }
      .nc3d-rotate path {
        fill: none;
        stroke: var(--nc3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .nc3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .nc3d-lib-toggle:hover {
        color: var(--nc3d-text);
      }
      .nc3d-lib-caret {
        width: 12px;
        color: var(--nc3d-accent);
      }
      .nc3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .nc3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--nc3d-muted);
      }
      .nc3d-furn-front {
        stroke: var(--nc3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .nc3d-furn text {
        fill: var(--nc3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .nc3d-furn-sel .nc3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--nc3d-accent);
        stroke-width: 2;
      }
      .nc3d-open {
        cursor: grab;
      }
      .nc3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .nc3d-open path,
      .nc3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .nc3d-open-door path {
        stroke: var(--nc3d-warm);
        stroke-dasharray: 3 3;
      }
      .nc3d-open-front path,
      .nc3d-open-door line {
        stroke: var(--nc3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .nc3d-open-door line.nc3d-open-pane {
        stroke: var(--nc3d-accent);
        stroke-width: 2;
      }
      .nc3d-open-garage line {
        stroke: var(--nc3d-warm);
        stroke-width: 3;
      }
      .nc3d-open-track {
        stroke: var(--nc3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .nc3d-open-window line {
        stroke: var(--nc3d-accent);
        stroke-width: 2;
      }
      .nc3d-open-sel .nc3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .nc3d-open-sel path,
      .nc3d-open-sel line {
        stroke-width: 2.4;
      }
      .nc3d-search {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--nc3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--nc3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .nc3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--nc3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .nc3d-more:hover {
        color: var(--nc3d-accent);
      }
      .nc3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .nc3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .nc3d-notice {
        color: var(--nc3d-accent);
      }
      .nc3d-device-sel circle:not(.nc3d-hit) {
        stroke: var(--nc3d-accent);
        stroke-width: 3;
      }
      .nc3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .nc3d-dev-row:hover {
        color: var(--nc3d-text);
      }
      .nc3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .nc3d-dev-name:disabled {
        cursor: default;
      }
      .nc3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nc3d-dev-name svg {
        flex: none;
      }
      .nc3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--nc3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .nc3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .nc3d-device {
        cursor: grab;
      }
      .nc3d-wedge path,
      .nc3d-wedge circle:not(.nc3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .nc3d-wedge-sel path,
      .nc3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--nc3d-accent);
      }
      .nc3d-wedge .nc3d-rotate circle {
        pointer-events: auto;
      }
      .nc3d-device circle:not(.nc3d-hit) {
        fill: #111a2e;
        stroke: var(--nc3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .nc3d-device path {
        fill: none;
        stroke: var(--nc3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .nc3d-device-on circle:not(.nc3d-hit) {
        fill: var(--nc3d-warm);
        stroke: var(--nc3d-warm);
      }
      .nc3d-device-on path {
        stroke: #2a1a00;
      }
      .nc3d-muted {
        color: var(--nc3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .nc3d-points {
        margin: 12px 0;
      }
      .nc3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .nc3d-point-sel .nc3d-muted {
        color: var(--nc3d-accent);
      }
      .nc3d-point .nc3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .nc3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .nc3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .nc3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--nc3d-muted);
      }
      .nc3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--nc3d-warm);
      }
    `]};customElements.get("nc3d-editor")||customElements.define("nc3d-editor",Tn);export{Tn as Fp3dEditor};
