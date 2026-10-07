var ye=globalThis,$e=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),li=new WeakMap,Kt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if($e&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=li.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&li.set(e,t))}return t}toString(){return this.cssText}},ci=r=>new Kt(typeof r=="string"?r:r+"",void 0,Ge),lt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Kt(e,r,Ge)},di=(r,t)=>{if($e)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=ye.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},Xe=$e?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ci(e)})(r):r;var{is:Ss,defineProperty:Ms,getOwnPropertyDescriptor:zs,getOwnPropertyNames:Is,getOwnPropertySymbols:Es,getPrototypeOf:As}=Object,xe=globalThis,ui=xe.trustedTypes,Fs=ui?ui.emptyScript:"",Ps=xe.reactiveElementPolyfillSupport,qt=(r,t)=>r,Ye={toAttribute(r,t){switch(t){case Boolean:r=r?Fs:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},pi=(r,t)=>!Ss(r,t),hi={attribute:!0,type:String,converter:Ye,reflect:!1,useDefault:!1,hasChanged:pi};Symbol.metadata??=Symbol("metadata"),xe.litPropertyMetadata??=new WeakMap;var pt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=hi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Ms(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:o}=zs(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hi}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;let t=As(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){let e=this.properties,n=[...Is(e),...Es(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Xe(i))}else t!==void 0&&e.push(Xe(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return di(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Ye).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ye;this._$Em=i;let a=s.fromAttribute(e,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){if(t!==void 0){let s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??pi)(o,e)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[qt("elementProperties")]=new Map,pt[qt("finalized")]=new Map,Ps?.({ReactiveElement:pt}),(xe.reactiveElementVersions??=[]).push("2.1.2");var on=globalThis,mi=r=>r,we=on.trustedTypes,fi=we?we.createPolicy("lit-html",{createHTML:r=>r}):void 0,$i="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,xi="?"+bt,Rs=`<${xi}>`,kt=document,Xt=()=>kt.createComment(""),Yt=r=>r===null||typeof r!="object"&&typeof r!="function",sn=Array.isArray,Os=r=>sn(r)||typeof r?.[Symbol.iterator]=="function",Qe=`[ 	
\f\r]`,Gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gi=/-->/g,_i=/>/g,xt=RegExp(`>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bi=/'/g,vi=/"/g,wi=/^(?:script|style|textarea|title)$/i,rn=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),b=rn(1),A=rn(2),Yr=rn(3),St=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),yi=new WeakMap,wt=kt.createTreeWalker(kt,129);function ki(r,t){if(!sn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fi!==void 0?fi.createHTML(t):t}var Ls=(r,t)=>{let e=r.length-1,n=[],i,o=t===2?"<svg>":t===3?"<math>":"",s=Gt;for(let a=0;a<e;a++){let l=r[a],c,d,u=-1,f=0;for(;f<l.length&&(s.lastIndex=f,d=s.exec(l),d!==null);)f=s.lastIndex,s===Gt?d[1]==="!--"?s=gi:d[1]!==void 0?s=_i:d[2]!==void 0?(wi.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=xt):d[3]!==void 0&&(s=xt):s===xt?d[0]===">"?(s=i??Gt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?xt:d[3]==='"'?vi:bi):s===vi||s===bi?s=xt:s===gi||s===_i?s=Gt:(s=xt,i=void 0);let g=s===xt&&r[a+1].startsWith("/>")?" ":"";o+=s===Gt?l+Rs:u>=0?(n.push(c),l.slice(0,u)+$i+l.slice(u)+bt+g):l+bt+(u===-2?a:g)}return[ki(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Qt=class r{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0,a=t.length-1,l=this.parts,[c,d]=Ls(t,e);if(this.el=r.createElement(c,n),wt.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=wt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith($i)){let f=d[s++],g=i.getAttribute(u).split(bt),_=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:_[2],strings:g,ctor:_[1]==="."?Ze:_[1]==="?"?tn:_[1]==="@"?en:Rt}),i.removeAttribute(u)}else u.startsWith(bt)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(wi.test(i.tagName)){let u=i.textContent.split(bt),f=u.length-1;if(f>0){i.textContent=we?we.emptyScript:"";for(let g=0;g<f;g++)i.append(u[g],Xt()),wt.nextNode(),l.push({type:2,index:++o});i.append(u[f],Xt())}}}else if(i.nodeType===8)if(i.data===xi)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(bt,u+1))!==-1;)l.push({type:7,index:o}),u+=bt.length-1}o++}}static createElement(t,e){let n=kt.createElement("template");return n.innerHTML=t,n}};function Pt(r,t,e=r,n){if(t===St)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,o=Yt(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Pt(r,i._$AS(r,t.values),i,n)),t}var Je=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??kt).importNode(e,!0);wt.currentNode=i;let o=wt.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Jt(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new nn(o,this,t)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=wt.nextNode(),s++)}return wt.currentNode=kt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Jt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Pt(this,t,e),Yt(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==St&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Os(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&Yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(kt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Qt.createElement(ki(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new Je(i,this),s=o.u(this.options);o.p(e),this.T(s),this._$AH=o}}_$AC(t){let e=yi.get(t.strings);return e===void 0&&yi.set(t.strings,e=new Qt(t)),e}k(t){sn(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let o of t)i===e.length?e.push(n=new r(this.O(Xt()),this.O(Xt()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=mi(t).nextSibling;mi(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,i){let o=this.strings,s=!1;if(o===void 0)t=Pt(this,t,e,0),s=!Yt(t)||t!==this._$AH&&t!==St,s&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Pt(this,a[n+l],e,l),c===St&&(c=this._$AH[l]),s||=!Yt(c)||c!==this._$AH[l],c===$?t=$:t!==$&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ze=class extends Rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},tn=class extends Rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},en=class extends Rt{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Pt(this,t,e,0)??$)===St)return;let n=this._$AH,i=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==$&&(n===$||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Pt(this,t)}};var Cs=on.litHtmlPolyfillSupport;Cs?.(Qt,Jt),(on.litHtmlVersions??=[]).push("3.3.3");var Si=(r,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let o=e?.renderBefore??null;n._$litPart$=i=new Jt(t.insertBefore(Xt(),o),o,void 0,e??{})}return i._$AI(r),i};var an=globalThis,st=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Si(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return St}};st._$litElement$=!0,st.finalized=!0,an.litElementHydrateSupport?.({LitElement:st});var Ts=an.litElementPolyfillSupport;Ts?.({LitElement:st});(an.litElementVersions??=[]).push("4.2.2");async function ln(r,t){return(await r.callWS({type:"neoncasa3d/image/get",image_id:t})).data}async function ke(r,t,e){await r.callWS({type:"neoncasa3d/image/set",image_id:t,data:e})}async function Mi(r){return(await r.callWS({type:"neoncasa3d/history/list"})).snapshots}async function zi(r){await r.callWS({type:"neoncasa3d/history/snapshot"})}async function Ii(r,t){return(await r.callWS({type:"neoncasa3d/history/restore",snapshot_id:t})).revision}async function Ei(r,t){return r.callWS({type:"neoncasa3d/packs/import",pack:t})}async function Ai(r,t){await r.callWS({type:"neoncasa3d/packs/remove",pack_id:t})}var Vs="neoncasa3d.seenOffers";function Fi(r){try{localStorage.setItem(Vs,JSON.stringify(r.map(t=>t.id)))}catch{}}var Pi="neoncasa3d.seenUpdates";function Ri(r){let t=[];try{t=JSON.parse(localStorage.getItem(Pi)??"[]")}catch{}return r.filter(e=>!t.includes(`${e.id}@${e.release}`))}function Oi(r){try{localStorage.setItem(Pi,JSON.stringify(r.map(t=>`${t.id}@${t.release}`)))}catch{}}function Li(r,t){return t?`${r}${r.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(t.code)}`:r}function cn(r){return r.callWS({type:"neoncasa3d/license/get"})}function dn(r,t){return r.callWS({type:"neoncasa3d/license/activate",key:t})}function Ci(r){return r.callWS({type:"neoncasa3d/license/remove"})}function Ti(r){return r.callWS({type:"neoncasa3d/license/refresh"})}function Vi(r){return r.callWS({type:"neoncasa3d/backup/export"})}function Hi(r,t,e){return r.callWS({type:"neoncasa3d/backup/import",building:t,packs:e})}function Di(r,t){return r.callWS({type:"neoncasa3d/packs/install",pack_id:t})}var Wi=[],un=new Map,Hs=0;function Ni(r){Wi=r,un=new Map(r.flatMap(t=>t.items.map(e=>[Zt(t.id,e.id),e]))),Hs++}function Bi(){return Wi}function Zt(r,t){return`pack:${r}:${t}`}function hn(r){return r.startsWith("pack:")}var Ds={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ui(r){return it(r)?.parts.find(t=>t.screen)}function it(r){if(!hn(r))return;let t=un.get(r);if(t)return t;let[,e,...n]=r.split(":"),i=Ds[e];return i?un.get(`pack:${i}:${n.join(":")}`):void 0}function te(r){return ct[r]??it(r)?.size??[.6,.6,.8]}function pn(r){return Gi.has(r)||!!it(r)?.electric}function Ot(r,t){let e=t.split("-")[0];return r.name[e]??r.name.en??Object.values(r.name)[0]??r.id}function mn(r,t){let e=it(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return ji;if(t.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return qi(r,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,r.height-t.h);default:return e?0:Ki(t)}}var Xi=["always","no_power","never"],Yi=["gable","hip","pent","flat"],fn={field:null,size:1,right:0,up:0};function gn(r,t,e){return r?t?!!e.lock_plan:!!r.locked:!1}var Qi=["rain","snow","fog","clouds","lightning","sky"],_n=["rain","snow","clouds","lightning","sky"],Ji=["lawn","terrace","path","driveway","pool","bed","hedge","fence"],Ws={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Ns(r){return r.elevation>.3?0:-.2}function Zi(r,t,e){let n=(r.outdoor??[]).find(i=>i.type!=="hedge"&&i.type!=="fence"&&i.type!=="pool"&&T([t,e],i.points));return Ns(r)+(n?Ws[n.type]:0)}var Bs={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},to=["wood","oak","tiles","carpet","stone","concrete"],eo={type:"none",pitch:35,overhang:.4},Us={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...eo}};function Se(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var js=2.75;function bn(r,t){if(t!=null&&Number.isFinite(t))return Math.round(t*js*100)/100;let e=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function no(r,t,e){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let c=o+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function io(r,t,e,n){let i=r.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[a,l]=t,c=r.x-a*(r.w/2)*o+l*(r.d/2)*s,d=r.z-a*(r.w/2)*s-l*(r.d/2)*o,u=e[0]-c,f=e[1]-d,g=y=>Math.max(.1,Math.round(y/n)*n),_=g((u*o+f*s)*a),h=g((-u*s+f*o)*l),v=y=>Math.round(y*1e3)/1e3;return{x:v(c+a*(_/2)*o-l*(h/2)*s),z:v(d+a*(_/2)*s+l*(h/2)*o),w:v(_),d:v(h)}}var oo=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],so={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Mt=["meter","inverter","home_battery","wallbox","grid_point"],ro=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ji=1.75;function vn(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:it(r.type)?.mount!=="ceiling"}function mt(r){return ro.has(r)||!!it(r)?.light}var Ks=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function yn(r,t,e,n=0){let i=rt(r.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((i.x0+n+o/e*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/t*(l+.5))*1e3)/1e3];T(d,r.points)&&a.push(d)}return a}function Lt(r,t,e){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(r[0]+i*t),n(r[1]+o*t)]}function Ki(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function qi(r,t,e){let n=0;for(let i of r.furniture)!(Ks.has(i.type)||it(i.type)?.surface)||!T([t,e],Mn(i))||(n=Math.max(n,i.h));return n}var Gi=new Set([...ro,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),ct={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var $n=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],xn=["standard","bars"];function wn(r,t){return r.type==="door"?r.style&&$n.includes(r.style)?r.style:t?"front":"interior":r.style&&xn.includes(r.style)?r.style:"standard"}function kn(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var Me={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function Sn(r){if(r.type==="garage")return"garage";let t=r.leaves===2;return r.type==="door"?!t&&r.style&&kn(r.style)?"front":t?"door_double":"door":r.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function ze(r){r.energy={...Bs,...r.energy??{}},r.presence=r.presence??[],r.settings={...Us,...r.settings,roof:{...eo,...r.settings?.roof??{}}};for(let t of r.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(n=>({...n,panel:n.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light."));if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let o=n[i.mount??"ceiling"],[s,a,l]=ct[o];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light."))}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function N(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function tt(r){let t=0;for(let e=0;e<r.length;e++){let[n,i]=r[e],[o,s]=r[(e+1)%r.length];t+=n*s-o*i}return t/2}function Ct(r){return Math.abs(tt(r))}function dt(r){let t=tt(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let e=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function Ie(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[i,o]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function rt(r){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[o,s]of r)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:t,z0:e,x1:n,z1:i}}function Mn(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*e-a*n,r.z+s*n+a*e])}function T(r,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[o,s]=t[n],[a,l]=t[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(e=!e)}return e}var ao={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var qs="neoncasa3d-scan",In=8*1024*1024,et=r=>{throw new Error(r)},Ee=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:et("Struttura della scansione non valida."),ee=(r,t)=>Array.isArray(r)&&r.length<=t?r:et("Elenco mancante o troppo grande."),Q=(r,t=-100,e=100)=>typeof r=="number"&&Number.isFinite(r)&&r>=t&&r<=e?r:et("Misura non valida o fuori dai limiti."),zn=(r,t)=>typeof r=="string"&&r.trim()?r.trim().slice(0,60):t,Ae=r=>Math.round(r*1e3)/1e3,Gs=r=>{let t=ee(r,2);return t.length!==2&&et("Punto non valido."),[Q(t[0]),Q(t[1])]},Fe=(r,t,e)=>(t[0]-r[0])*(e[1]-r[1])-(t[1]-r[1])*(e[0]-r[0]);function Xs(r){let t=ee(r,200).map(Gs);t.length>3&&Math.hypot(t[0][0]-t.at(-1)[0],t[0][1]-t.at(-1)[1])<.001&&t.pop(),t.length<3&&et("La stanza non ha un perimetro valido.");let e=0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length];Math.hypot(o[0]-i[0],o[1]-i[1])<.02&&et("Perimetro con punti duplicati o lati troppo corti."),e+=i[0]*o[1]-o[0]*i[1];for(let s=n+2;s<t.length;s++){if(n===0&&s===t.length-1)continue;let a=t[s],l=t[(s+1)%t.length];Fe(i,o,a)*Fe(i,o,l)<=0&&Fe(a,l,i)*Fe(a,l,o)<=0&&Math.max(Math.min(i[0],o[0]),Math.min(a[0],l[0]))<=Math.min(Math.max(i[0],o[0]),Math.max(a[0],l[0]))&&Math.max(Math.min(i[1],o[1]),Math.min(a[1],l[1]))<=Math.min(Math.max(i[1],o[1]),Math.max(a[1],l[1]))&&et("Il perimetro della stanza si incrocia.")}}return Math.abs(e)<.5&&et("Stanza troppo piccola o perimetro incompleto."),t}var lo={bed:"bed",sofa:"sofa",chair:"chair",table:"table",storage:"tall_cabinet",refrigerator:"fridge",stove:"stove",oven:"stove",dishwasher:"dishwasher",washerDryer:"washer",sink:"washbasin",toilet:"wc",bathtub:"bathtub",television:"tv_board",stairs:"stairs"};function co(r,t){new TextEncoder().encode(r).length>In&&et("File troppo grande (massimo 8 MB).");let e;try{e=JSON.parse(r)}catch{return et("Il file non contiene JSON valido.")}let n=Ee(e);(n.format!==qs||n.version!==1||n.units!=="m"||n.coordinates!=="arkit-xz")&&et("Serve un file JSON di NeonCasa Scanner, formato versione 1. USDZ e scansioni di altre app non sono ancora supportati.");let i=ee(n.rooms,50);i.length||et("La scansione non contiene stanze.");let o=Se(t(),zn(n.name,"Piano scansionato"),0),s=[],a,l=0,c=new Set;i.forEach((y,p)=>{let m=Ee(y),x=Xs(m.points),w=Q(m.floorY),S=Q(m.height,.5,10);a??=w,Math.abs(w-a)>.3&&et("La scansione contiene livelli diversi: esporta un piano alla volta."),o.height=Math.max(p?o.height:0,S);let I=t();o.rooms.push({id:I,name:zn(m.name,`Stanza ${p+1}`),area_id:null,points:x,floor_material:"wood",wall_heights:x.map(()=>S)});for(let E of ee(m.objects,500)){let F=Ee(E),k=typeof F.category=="string"?F.category:"",z=Object.hasOwn(lo,k)?lo[k]:void 0;if(!z){l++;continue}if(typeof F.id=="string"&&c.has(F.id))continue;let R=Q(F.x),L=Q(F.z),P=Q(F.bottom,-.3,10),O=Q(F.width,.02,30),D=Q(F.depth,.02,30),H=Q(F.height,.02,10),V=Q(F.rotation,-360,360);typeof F.id=="string"&&c.add(F.id),o.furniture.push({id:t(),type:z,x:R,z:L,w:O,d:D,h:H,rotation:V,variant:null,name:typeof F.name=="string"?zn(F.name,k):null,mount_y:Math.max(0,P),entity:"none",power:"none"}),o.furniture.length>1e3&&et("Troppi mobili nella scansione (massimo 1000).")}for(let E of ee(m.openings,300)){let F=Ee(E),k=[Q(F.x),Q(F.z)],z=Q(F.width,.05,30),R=Q(F.height,.05,10),L=Q(F.sill,-.3,10);if(!["door","window","opening"].includes(String(F.kind))){l++;continue}let P={edge:0,distance:1/0,offset:0,length:0};if(x.forEach((O,D)=>{let H=x[(D+1)%x.length],V=H[0]-O[0],U=H[1]-O[1],C=Math.hypot(V,U),W=((k[0]-O[0])*V+(k[1]-O[1])*U)/C,Y=Math.max(0,Math.min(C,W)),nt=Math.hypot(k[0]-O[0]-V*Y/C,k[1]-O[1]-U*Y/C);nt<P.distance&&(P={edge:D,distance:nt,offset:W,length:C})}),P.distance>.35||P.offset-z/2<-.05||P.offset+z/2>P.length+.05||L+R>S+.15){l++;continue}o.openings.push({id:t(),room_id:I,edge:P.edge,offset:Math.max(Math.min(z,P.length)/2,Math.min(P.length-Math.min(z,P.length)/2,P.offset)),width:Math.min(z,P.length),type:F.kind==="window"?"window":"door",style:F.kind==="opening"?"passage":null,sill:Math.max(0,L),height:R,hinge:"left",leaves:1,swing:"in",cover:"none",contact:"none",tilt:"none",contact2:null}),o.openings.length>1e3&&et("Troppe aperture nella scansione.")}});let d=o.rooms.flatMap(y=>y.points),u=Math.min(...d.map(y=>y[0])),f=Math.max(...d.map(y=>y[0])),g=Math.min(...d.map(y=>y[1])),_=Math.max(...d.map(y=>y[1])),h=(u+f)/2,v=(g+_)/2;for(let y of o.rooms)y.points=y.points.map(p=>[Ae(p[0]-h),Ae(p[1]-v)]);for(let y of o.furniture)y.x=Ae(y.x-h),y.z=Ae(y.z-v);return l&&s.push(`${l} elementi non riconosciuti o non collocabili sono stati esclusi.`),s.push("Controlla misure, orientamento dei mobili e porte. Le scansioni possono contenere errori; luci e sensori vanno collegati manualmente."),{floor:o,warnings:s}}var uo="neoncasa3d";function Ys(r){let t=structuredClone(r);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function ho(r,t){return{format:uo,version:1,exported_at:new Date().toISOString(),building:t?Ys(r):structuredClone(r)}}function po(r){let t;try{t=JSON.parse(r)}catch{throw new Error("not_json")}let e=t,n=e?.format===uo?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return ze(n)}function mo(r){let t=new Set;for(let e of r.floors){e.background?.image_id&&t.add(e.background.image_id);for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function En(r,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var Qs={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Js=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Zs=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),tr=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Pe=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],vo=new Set(["light","switch","fan"]);function yo(r){return r.slice(0,r.indexOf("."))}function B(r){return Qs[yo(r)]??null}function ie(r){return r!==null&&r!=="scene"&&r!=="script"}function Re(r,t){let e=r.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&r.devices?.[e.device_id]?.area_id||null:null}function fo(r,t){let e=B(t);if(!e)return!1;let n=r.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=r.states[t];if(!i)return!1;let o=i.attributes.device_class;return e==="sensor"?o?Js.has(o):Zs.has(String(i.attributes.unit_of_measurement??"")):e==="binary"?!!o&&tr.has(o):!0}var er=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function go(r,t){if(B(t)!=="sensor")return!1;let e=r.entities?.[t];if(e?.hidden||e?.entity_category)return!1;let n=r.states[t];return!n||!n.attributes.unit_of_measurement||er.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||So(n)}var An=null;function oe(r){let t=An;if(t&&t.entities===r.entities&&t.devices===r.devices&&(t.states===r.states||(t.states=r.states,Object.keys(r.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],o=new Map;for(let s of Object.keys(r.entities??{})){let a=r.entities[s],l=a.device_id;l&&Cn(r,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(o.get(l)??o.set(l,new Set).get(l)).add(yo(s));let c=fo(r,s),d=Re(r,s);if(!d){(c||go(r,s))&&ie(B(s))&&i.push(s);continue}c&&(e.get(d)??e.set(d,[]).get(d)).push(s)}if(r.entities)for(let s of Object.keys(r.states))r.entities[s]||(fo(r,s)||go(r,s))&&ie(B(s))&&i.push(s);i.sort((s,a)=>Pe.indexOf(B(s))-Pe.indexOf(B(a))||J(r,s).localeCompare(J(r,a)));for(let[s,a]of e){let l=r.areas?.[s]?.name;a.sort((c,d)=>{let u=Pe.indexOf(B(c)),f=Pe.indexOf(B(d));return u-f||J(r,c,l).localeCompare(J(r,d,l))})}return An={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:e,power:n,unassigned:i,domains:o},An}function zt(r,t){return!t||!r.entities?[]:oe(r).areas.get(t)??[]}function $o(r,t){return r.entities?[...oe(r).areas].filter(([e])=>e!==t).map(([e,n])=>({areaId:e,name:r.areas?.[e]?.name??e,ids:n.filter(i=>ie(B(i)))})).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function xo(r){return r.entities?oe(r).unassigned:[]}var Fn={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},nr=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),ir=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Pn(r,t){let e=r.entities?.[t]?.device_id,n=e?oe(r).domains.get(e):void 0;return n&&[...n].some(i=>nr.has(i))?!1:!ir.test(`${t} ${r.states[t]?.attributes.friendly_name??""}`)}function wo(r,t,e,n){let i=e.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=Fn[n],s=(u,f)=>T([u,f],e.points),a=t?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(a.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...zt(r,e.area_id).filter(u=>!c.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&r.states[u]?.attributes.device_class===o&&Pn(r,u))}function ko(r,t){return r.entities?oe(r).power.get(t)??[]:[]}function J(r,t,e){let i=r.states[t]?.attributes.friendly_name??r.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let o=i.slice(e.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function So(r){return!r||r.state==="unavailable"||r.state==="unknown"}function Mo(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function Rn(r,t,e=null){if(r==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function or(r,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length],s=o[0]-i[0],a=o[1]-i[1],l=s*s+a*a||1,c=Math.min(1,Math.max(0,((r[0]-i[0])*s+(r[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-i[0]-s*c,r[1]-i[1]-a*c))}return e}function zo(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,i=n.map(p=>p[0]),o=n.map(p=>p[1]),s=Math.min(...i),a=Math.min(...o),l=Math.max(...i),c=Math.max(...o),d=Math.min(l-s,c-a),u=Math.max(.1,Math.min(.25,d/8)),f=Math.min(.35,d/5),g=dt(n),_=[];for(let p=s+u/2;p<l;p+=u)for(let m=a+u/2;m<c;m+=u){let x=[p,m];if(!T(x,n))continue;let w=or(x,n);w<f||_.push({p:x,wall:w})}_.length||_.push({p:g,wall:0});let h=[...e],v=[],y=Math.min(.7,d/4);for(let p of t){let m=B(p)==="light",x=_[0].p,w=-1/0;for(let{p:I,wall:E}of _){let F=h.length?Math.min(...h.map(R=>Math.hypot(I[0]-R[0],I[1]-R[1]))):3,k=Math.hypot(I[0]-g[0],I[1]-g[1]),z=Math.min(F,3)*2;k<y&&!m&&(z-=10),z-=m?k*.35:E*1.2,z>w+1e-9&&(w=z,x=I)}let S=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];h.push(S),v.push({entity_id:p,x:S[0],z:S[1],y:null,mount:null})}return v}var sr=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),rr=new Set(["garage","gate"]),ar=new Set(["window","opening"]);function ne(r,t,e=!1){let n=new Map;return t.length&&r.forEach((i,o)=>{let s=e&&t.length===1?t[0]:t[o];s&&n.set(i.id,s)}),n}function Io(r,t){let e=new Map;for(let n of t)for(let i of n.rooms){let o=n.openings.filter(p=>p.room_id===i.id).sort((p,m)=>p.edge-m.edge||p.offset-m.offset);if(!o.length)continue;let s=zt(r,i.area_id),a=p=>r.states[p]?.attributes.device_class,l=s.filter(p=>B(p)==="cover"&&sr.has(a(p))),c=o.filter(p=>p.type==="window"),d=o.filter(p=>p.type==="door"),u=o.filter(p=>p.type==="garage"),f=ne(c,l,!0),g=ne(c,s.filter(p=>B(p)==="binary"&&ar.has(a(p)))),_=ne(d,s.filter(p=>B(p)==="binary"&&a(p)==="door")),h=ne(u,s.filter(p=>B(p)==="cover"&&rr.has(a(p)??""))),v=ne(u,s.filter(p=>B(p)==="binary"&&a(p)==="garage_door")),y=(p,m)=>p==="none"?null:p??m??null;for(let p of o){let m=p.type==="window"?f:p.type==="garage"?h:null,x=p.type==="window"?g:p.type==="garage"?v:_;e.set(p.id,{cover:y(p.cover,m?.get(p.id)),contact:p.sensor==="handle"&&p.contact==null?null:y(p.contact,x.get(p.id)),tilt:p.tilt==="none"?null:p.tilt,contact2:p.leaves===2&&p.contact2&&p.contact2!=="none"?p.contact2:null,tilt2:p.leaves===2&&p.tilt2&&p.tilt2!=="none"?p.tilt2:null,position:p.position&&p.position!=="none"?p.position:null,positionInverted:!!p.position_inverted})}}return e}var lr=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function On(r){if(!r||So(r))return null;let t=r.attributes.window_state;for(let e of[typeof t=="string"?t:null,r.state]){if(!e)continue;let n=lr.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function Ln(r,t){let e=new Map,n=[];for(let s of t){let a=r.entities?.[s]?.device_id??`entity:${s}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=e.get(s),l=a.find(c=>!r.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),o=new Map(t.map((s,a)=>[s,a]));return i.sort((s,a)=>o.get(s.primary)-o.get(a.primary))}function cr(r,t){return Ln(r,t).map(e=>e.primary)}var dr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ur=new Set(["tv_board","tv_wall"]);function Eo(r,t){let e=r.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Oe(r){return ur.has(r)||!!Ui(r)}function Ao(r){return Oe(r)||r==="desk"||r==="fridge_smart"}var _o={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Cn(r,t){return t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="power"}function hr(r,t){if(Cn(r,t))return t;let e=r.entities?.[t]?.device_id;return e?ko(r,e).find(n=>n!==t)??null:null}function Tn(r,t){let e=new Map;for(let n of t){let i=new Set(n.furniture.flatMap(o=>[o.entity,o.power]).filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in _o,a=s?_o[o.type]:dr[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(g=>g.points.length>=3&&T([o.x,o.z],g.points)),c=l?cr(r,zt(r,l.area_id)):[],d=g=>`${g} ${J(r,g)}`,u=o.entity==="none"?null:o.entity??null;if(o.entity==null){let g=c.filter(_=>!i.has(_));if(s){let _=g.filter(h=>B(h)==="light");u=_.find(h=>a.test(d(h)))??_[0]??null}else if(o.type==="robot_vacuum"){let _=l?.area_id??null;u=Object.keys(r.entities??{}).find(h=>h.startsWith("vacuum.")&&!i.has(h)&&Re(r,h)===_)??null}else if(o.type==="radiator"){let _=g.filter(h=>B(h)==="climate");u=_.find(h=>a.test(d(h)))??_[0]??null}else if(Oe(o.type)){let _=g.filter(h=>B(h)==="media");u=_.find(h=>r.states[h]?.attributes.device_class==="tv")??_.find(h=>a?.test(d(h)))??_[0]??null}else a&&(u=g.find(_=>["switch","media","fan"].includes(B(_)??"")&&a.test(d(_)))??null);u&&i.add(u)}let f=o.power==="none"?null:o.power??null;o.power==null&&(f=u?hr(r,u):null,!f&&a&&l&&!s&&(f=zt(r,l.area_id).find(_=>Cn(r,_)&&!i.has(_)&&a.test(d(_)))??null),f&&i.add(f)),(u||f)&&e.set(o.id,{entity:u,power:f})}}return e}var bo=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Fo(r,t,e){if(e==="none")return null;if(e)return e;let n=t?r.entities?.[t]?.device_id:null;if(!n||!r.entities)return null;for(let i of Object.values(r.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(bo.test(i.translation_key??"")||bo.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var q=(r,t,e,n,i="")=>A`<rect class=${i} x=${Math.min(r,e)} y=${Math.min(t,n)} width=${Math.abs(e-r)} height=${Math.abs(n-t)} />`,K=(r,t,e,n,i="")=>A`<line class=${i} x1=${r} y1=${t} x2=${e} y2=${n} />`,X=(r,t,e,n="")=>A`<circle class=${n} cx=${r} cy=${t} r=${e} />`,Vn=(r,t,e,n,i="")=>A`<ellipse class=${i} cx=${r} cy=${t} rx=${e} ry=${n} />`;function Hn(r,t,e){let n=[];for(let i=1;i<e;i++){let o=-r/2+r/e*i;n.push(K(o,t/2,o,t/2-Math.min(.12,t*.3)))}return n}function Po(r,t,e,n){let i=Math.min(.24,t*.28),o=n?Math.min(.2,r*.12):0,s=[q(-r/2,-t/2,r/2,-t/2+i,"nc3d-sym-fill")];n&&s.push(q(-r/2,-t/2,-r/2+o,t/2,"nc3d-sym-fill"),q(r/2-o,-t/2,r/2,t/2,"nc3d-sym-fill"));let a=r-2*o;for(let l=1;l<e;l++){let c=-r/2+o+a/e*l;s.push(K(c,-t/2+i,c,t/2-.02))}return s}function Ro(r,t,e){switch(r){case"sofa":return Po(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return Po(t,e,1,!0);case"bench":return[q(-t/2,-e/2,t/2,-e/2+.08,"nc3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[q(-t/2,-e/2,t/2,-e/2+.08,"nc3d-sym-fill"),q(-t/2,-e/2,-t/2+.08,e/2,"nc3d-sym-fill"),K(-t/2+n,-e/2+n,t/2,-e/2+n),K(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[q(-t/2,-e/2,t/2,-e/2+.06,"nc3d-sym-fill")];case"office_chair":return[X(0,.03,Math.min(t,e)*.36),q(-t*.35,-e/2+.02,t*.35,-e/2+.1,"nc3d-sym-fill")];case"bar_stool":case"table_round":return[X(0,0,Math.min(t,e)*.42)];case"stool":return[q(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[q(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return r==="desk"&&n.push(K(-.3,-e/2+.1,.3,-e/2+.1,"nc3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,o=[q(-t/2,-e/2,t/2,-e/2+.07,"nc3d-sym-fill"),K(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)o.push(q(-t/2+.13+i*s,-e/2+.12,-t/2+.07+i*(s+1),-e/2+.12+Math.min(.4,e*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Hn(t,e,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[q(-t/2,-e/2,t/2,-e/2+.03,"nc3d-sym-fill"),...Hn(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[K(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[K(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"nc3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[X(-t*.22,-e*.2,n),X(t*.22,-e*.2,n*.8),X(-t*.22,e*.2,n*.8),X(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[q(-n/2,-e/2+.1,n/2,e/2-.08),X(0,-e/2+.06,.025,"nc3d-sym-fill")]}case"dishwasher":return[K(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"nc3d-sym-strong")];case"washer":case"dryer":return[X(0,.05,Math.min(t,e)*.3),K(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[q(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),X(-t/2+.14,0,.03,"nc3d-sym-fill")];case"shower":return[K(-t/2,-e/2,t/2,e/2),K(t/2,-e/2,-t/2,e/2),X(0,0,.04)];case"wc":return[q(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"nc3d-sym-fill"),Vn(0,e*.1,t*.36,e*.3)];case"washbasin":return[Vn(0,.03,t*.34,e*.3)];case"tv_board":return[K(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"nc3d-sym-strong"),...Hn(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[K(-t/2,0,t/2,0,"nc3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[X(0,0,Math.min(t,e)*.45,"nc3d-sym-fill"),X(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[X(0,0,Math.min(t,e)*.5,"nc3d-sym-fill"),X(0,0,Math.min(t,e)*1.6)];case"parking":return[q(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),K(-t*.15,e/2-.5,0,e/2-.22,"nc3d-sym-strong"),K(0,e/2-.22,t*.15,e/2-.5,"nc3d-sym-strong")];case"robot_vacuum":return[q(-t*.45,-e/2,t*.45,-e/2+e*.3,"nc3d-sym-fill"),X(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let o=1;o<i;o++)n.push(K(-t/2+t/i*o,-e/2,-t/2+t/i*o,e/2));return n}case"lamp_panel":return[q(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"nc3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[X(0,0,n*.9,"nc3d-sym-fill"),X(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(K(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[q(-t/2,-e/2,t/2,-e/2+.03,"nc3d-sym-fill"),Vn(0,.01,t*.4,e*.4)];case"led_strip":return[K(-t/2,0,t/2,0,"nc3d-sym-strong")];case"plant":return[X(0,0,Math.min(t,e)*.46),X(0,0,Math.min(t,e)*.25)];case"rug":return[q(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let o=1;o<n;o++)i.push(K(-t/2,e/2-e/n*o,t/2,e/2-e/n*o));return i.push(K(0,e/2-.1,0,-e/2+.25,"nc3d-sym-strong"),K(-.15,-e/2+.45,0,-e/2+.25,"nc3d-sym-strong"),K(.15,-e/2+.45,0,-e/2+.25,"nc3d-sym-strong")),i}default:{let n=it(r);return n?pr(n,t,e):$}}}function pr(r,t,e){return r.symbol?.length?r.symbol.map(n=>n.shape==="rect"?q((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e,n.fill?"nc3d-sym-fill":""):n.shape==="circle"?X(n.x*t,n.z*e,n.r*Math.min(t,e)):K(n.x1*t,n.z1*e,n.x2*t,n.z2*e)):r.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?X(n.x*t,n.z*e,Math.min(n.w*t,n.d*e)/2):q((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e))}var mr=.05,fr=.2,gr=.12;function _r(r){let t=[];return r.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let o=tt(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],u=Math.hypot(c,d);if(u<.05)continue;let f=[c/u,d/u],g=o?[f[1],-f[0]]:[-f[1],f[0]];(f[1]<-1e-9||Math.abs(f[1])<=1e-9&&f[0]<0)&&(f=[-f[0],-f[1]]);let _=[-f[1],f[0]],h=a[0]*f[0]+a[1]*f[1],v=l[0]*f[0]+l[1]*f[1];t.push({room:n,index:s,dir:f,normal:_,offset:a[0]*_[0]+a[1]*_[1],outside:g[0]*_[0]+g[1]*_[1]>0?1:-1,t0:Math.min(h,v),t1:Math.max(h,v)})}}),t}function Oo(r,t=.6){let e=_r(r),n=e.map((d,u)=>u),i=d=>n[d]===d?d:n[d]=i(n[d]),o=[];for(let d=0;d<e.length;d++)for(let u=d+1;u<e.length;u++){let f=e[d],g=e[u];if(f.room===g.room||Math.abs(f.dir[0]*g.dir[1]-f.dir[1]*g.dir[0])>mr||f.outside===g.outside)continue;let _=(g.offset-f.offset)*f.outside;_>t||_<-gr||Math.abs(_)<1e-4||Math.min(f.t1,g.t1)-Math.max(f.t0,g.t0)<fr||(o.push(Math.round(_*1e3)/1e3),n[i(d)]=i(u))}if(!o.length)return{rooms:r.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:o};let s=new Map;e.forEach((d,u)=>{let f=i(u);if(f===u&&!e.some((_,h)=>h!==u&&i(h)===u))return;let g=s.get(f)??[];g.push(u),s.set(f,g)});let a=r.map(d=>d.points.map(()=>new Map));for(let[d,u]of s){let f=u.reduce((g,_)=>g+e[_].offset,0)/u.length;for(let g of u){let _=e[g],h=f-_.offset,v=[_.normal[0]*h,_.normal[1]*h],y=r[_.room].points.length;a[_.room][_.index].set(d,v),a[_.room][(_.index+1)%y].set(d,v)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:r.map((d,u)=>({...d,points:d.points.map((f,g)=>{let _=f[0],h=f[1];for(let[v,y]of a[u][g].values())_+=v,h+=y;return[l(_),l(h)]})})),gaps:o}}function Lo(r){let t=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}var br=.25,Co=r=>Math.round(r*1e3)/1e3;function Dn(r,t,e,n,i){let o=r.rooms.find(s=>s.points.length>=3&&T([t,e],s.points));return!o||T([n,i],o.points)?[n,i]:T([n,e],o.points)?[n,e]:T([t,i],o.points)?[t,i]:[t,e]}function Le(r,t,e,n=br){let i=r.rooms.find(c=>c.points.length>=3&&T([t.x,t.z],c.points));if(!i)return null;let o=i.points,s=tt(o)>=0?1:-1,a=e/2,l=null;for(let c=0;c<o.length;c++){let d=o[c],u=o[(c+1)%o.length],f=Math.hypot(u[0]-d[0],u[1]-d[1]);if(f<.3)continue;let g=[(u[0]-d[0])/f,(u[1]-d[1])/f],_=[-g[1]*s,g[0]*s],h=(t.x-d[0])*g[0]+(t.z-d[1])*g[1];if(h<0||h>f)continue;let y=r.rooms.some(E=>E.id!==i.id&&E.points.some((F,k)=>{let z=E.points[(k+1)%E.points.length],R=Math.abs((F[0]-d[0])*_[0]+(F[1]-d[1])*_[1]),L=Math.abs((z[0]-d[0])*_[0]+(z[1]-d[1])*_[1]);return R<.02&&L<.02}))?a:0,p=(t.x-d[0])*_[0]+(t.z-d[1])*_[1]-y,m=Math.atan2(-_[0],_[1])*180/Math.PI,x=E=>Math.abs((t.rotation-E+540)%360-180),S=[{rotation:m,extent:t.d/2},{rotation:m+90,extent:t.w/2},{rotation:m-90,extent:t.w/2}].reduce((E,F)=>x(F.rotation)<x(E.rotation)?F:E);if(x(S.rotation)>50)continue;let I=p-S.extent;Math.abs(I)>n||l&&Math.abs(I)>=Math.abs(l.gap)||(l={x:Co(t.x-_[0]*I),z:Co(t.z-_[1]*I),rotation:(Math.round(S.rotation)%360+360)%360,gap:I})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function vr(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((r[0]-t[0])*n+(r[1]-t[1])*i)/o)):0;return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-i*s)}function To(r,t,e=.03){return r.every(n=>T(n,t)||t.some((i,o)=>vr(n,i,t[(o+1)%t.length])<=e))}function Vo(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}var Wn=["camera_cockpit","weather","screens","energy_pro"],yr=["fridge_smart"];var Ho=r=>(r??navigator.language).toLowerCase().startsWith("de");function se(r){return Ho(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var $r={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function re(r,t){let e=Ho(r),n=e?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=t?$r[t]:void 0,o=i?e?i.de:i.en:"",[s,a]=o.split("#");return`${n}${s}?lang=${e?"de":"en"}${a?`#${a}`:""}`}function Nn(r=Bi()){let t=new Set;for(let e of r)for(let n of e.features??[])(Wn.includes(n)||yr.includes(n))&&t.add(n);return t}function ae(r,t){return Nn(t).has(r)}var Z=(r,t)=>[r[0]-t[0],r[1]-t[1]],It=(r,t)=>[r[0]+t[0],r[1]+t[1]],vt=(r,t)=>[r[0]*t,r[1]*t],ce=(r,t)=>r[0]*t[0]+r[1]*t[1],le=(r,t)=>r[0]*t[1]-r[1]*t[0],Ce=r=>Math.hypot(r[0],r[1]),ft=r=>{let t=Ce(r)||1;return[r[0]/t,r[1]/t]},Do=r=>[-r[1],r[0]],Wo=r=>[r[1],-r[0]];function gt(r,t,e=[]){let n=t.eps??.005,i=[],o=e.filter(p=>Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1])>.05),s=[],a=p=>{for(let m=0;m<s.length;m++)if(Math.abs(s[m][0]-p[0])<=n&&Math.abs(s[m][1]-p[1])<=n)return m;return s.push([p[0],p[1]]),s.length-1},l=[];for(let p of r){let m=p.points;if(m.length<3||Math.abs(tt(m))<1e-6)continue;let x=tt(m)>0,w=m.map(a);for(let S=0;S<m.length;S++){let I=w[S],E=w[(S+1)%m.length];I!==E&&l.push(x?{u:I,v:E,room:p.id,edge:S,forward:!0}:{u:E,v:I,room:p.id,edge:S,forward:!1})}}let c=o.map(p=>[a(p.a),a(p.b)]),d=[];for(let p of l){let m=s[p.u],x=s[p.v],w=Z(x,m),S=Ce(w),I=vt(w,1/S),E=[];for(let k=0;k<s.length;k++){if(k===p.u||k===p.v)continue;let z=Z(s[k],m),R=ce(z,I);R<=n||R>=S-n||Math.abs(le(I,z))<=n&&E.push({t:R,id:k})}E.sort((k,z)=>k.t-z.t);let F=[{t:0,id:p.u},...E,{t:S,id:p.v}];for(let k=0;k+1<F.length;k++){let z=F[k],R=F[k+1],L=p.forward?z.t:S-R.t,P=p.forward?R.t:S-z.t;d.push({u:z.id,v:R.id,room:p.room,edge:p.edge,t0:L,t1:P})}}let u=new Map;for(let p of d){let m=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,x=u.get(m);x||u.set(m,x=[]),x.push(p)}let f=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),g=p=>{let m=p.map(x=>r.find(w=>w.id===x.room)?.wall_heights?.[x.edge]).filter(x=>typeof x=="number"&&x>0);return m.length?Math.min(...m):void 0},_=p=>p.some(m=>r.find(x=>x.id===m.room)?.wall_heights?.[m.edge]===0),h=[];for(let p of u.values()){let m=p[0],x=p.find(w=>w!==m&&w.u===m.v&&w.v===m.u&&w.room!==m.room);for(let w of p)w!==m&&w!==x&&w.room!==m.room&&i.push(`overlap:${m.room}:${w.room}`);_(x?[m,x]:[m])||(x?h.push({a:m.u,b:m.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:m.room,roomRight:x.room,sources:[f(m),f(x)],height:g([m,x])}):h.push({a:m.u,b:m.v,left:0,right:t.exterior,exterior:!0,roomLeft:m.room,roomRight:null,sources:[f(m)],height:g([m])}))}o.forEach((p,m)=>{let[x,w]=c[m];if(x===w)return;let S=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],I=r.find(k=>k.points.length>=3&&T(S,k.points))?.id??null,E=(p.thickness??t.interior)/2,F=typeof p.height=="number"&&p.height>0?p.height:void 0;h.push({free:p.id,a:x,b:w,left:E,right:E,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:F})}),h=wr(h,s);let v=Sr(h,s);return{walls:h.map((p,m)=>{let x=s[p.a],w=s[p.b],S=v.get(`${m}:a`),I=v.get(`${m}:b`),E=Mr([S.right,I.left,w,I.right,S.left,x],1e-6);return{id:xr(x,w),a:[x[0],x[1]],b:[w[0],w[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:E,...p.free?{free:p.free}:{},...p.height!==void 0?{height:p.height}:{}}}),warnings:[...new Set(i)]}}function xr(r,t){let e=o=>Math.round(o*100),[n,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function No(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function wr(r,t){let e=r.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((o,s)=>{for(let a of[o.a,o.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(s)}});for(let[o,s]of i){if(s.length!==2)continue;let a=e[s[0]],l=e[s[1]];if(a.b!==o&&(a=No(a)),l.a!==o&&(l=No(l)),a.a===l.b)continue;let c=ft(Z(t[a.b],t[a.a])),d=ft(Z(t[l.b],t[l.a]));if(Math.abs(le(c,d))>1e-6||ce(c,d)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let u={...a,b:l.b,sources:kr(a.sources,l.sources)},f=e.filter((g,_)=>_!==s[0]&&_!==s[1]);f.push(u),e.length=0,e.push(...f),n=!0;break}}return e}function kr(r,t){let e=r.map(n=>({...n}));for(let n of t){let i=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Sr(r,t){let e=new Map;r.forEach((i,o)=>{let s=ft(Z(t[i.b],t[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:vt(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,o]of e){let s=t[i];o.sort((c,d)=>c.angle-d.angle);let a=c=>({left:It(s,vt(Do(c.d),c.left)),right:It(s,vt(Wo(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let d=o[c],u=o[(c+1)%o.length],f=It(s,vt(Do(d.d),d.left)),g=It(s,vt(Wo(u.d),u.right)),_=le(d.d,u.d);if(Math.abs(_)<1e-4)continue;let h=le(Z(g,f),u.d)/_,v=It(f,vt(d.d,h));Ce(Z(v,s))>l||(n.get(d.key).left=v,n.get(u.key).right=v)}}return n}function Mr(r,t){let e=r.filter((i,o)=>Ce(Z(i,r[(o+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let o=e[(i+e.length-1)%e.length],s=e[i],a=e[(i+1)%e.length],l=Z(s,o),c=Z(a,s);if(Math.abs(le(ft(l),ft(c)))<1e-7&&ce(l,c)>0){e=e.filter((d,u)=>u!==i),n=!0;break}}}return e}function Tt(r,t,e){let n=r.points[t],i=r.points[(t+1)%r.points.length],o=ft(Z(i,n));return It(n,vt(o,e))}function Vt(r,t,e){if(r.wall){let i=e.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ft(Z(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,It(i.a,[-o[1],o[0]])]},edge:0}}let n=t.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}function Bn(r,t,e){if(!t.wall)return zr(r,e.room,e.edge,t.offset);let n=r.find(o=>o.free===t.wall);if(!n)return null;let i=Tt(e.room,0,t.offset);return{wall:n,s:ce(Z(i,n.a),ft(Z(n.b,n.a)))}}function zr(r,t,e,n){for(let i of r){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Tt(t,e,n);return{wall:i,s:ce(Z(s,i.a),ft(Z(i.b,i.a)))}}return null}var Bo=Math.PI/180;function Ht(r){let t=Math.min(r.x0,r.x1),e=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),i=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:t,u1:e,w:i-n,at:(o,s)=>[o,r.flip?i-s:n+s]}:{u0:n,u1:i,w:e-t,at:(o,s)=>[r.flip?e-s:t+s,o]}}function de(r){let t=Ht(r).w,e=r.eave_a,n=r.eave_b,i=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*Bo),o=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*Bo);if(r.shape==="flat")return{vr:t/2,rh:e,y:()=>e};if(r.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};let s=i+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(i+o))):t/2,a=e+s*i;return{vr:s,rh:a,y:l=>l<=s?e+l*i:n+(t-l)*o}}function Uo(r,t,e){let n=Ht(t),i=r.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(d=>i.some(u=>T(d,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function jo(r,t,e,n,i){let o=[(t+n)/2,(e+i)/2],s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&T(o,l.points))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function Te(r){return de(r).rh}function Ko(r,t=e=>`roof_${e+1}`){let e=r.settings.roof?.pitch??35,n=r.settings.wall_exterior,i=r.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),o=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(m=>m.points.length>=3),d=[...new Set(c.flatMap(m=>m.points.map(x=>a(x[0]))))].sort((m,x)=>m-x),u=[...new Set(c.flatMap(m=>m.points.map(x=>a(x[1]))))].sort((m,x)=>m-x),f=d.length-1,g=u.length-1,_=(m,x)=>m.some(w=>T(x,w.points)),h=[];for(let m=0;m<g;m++){h.push([]);for(let x=0;x<f;x++){let w=[(d[x]+d[x+1])/2,(u[m]+u[m+1])/2];h[m].push(_(c,w)&&!_(s,w))}}let v=h.map(m=>m.map(()=>!1)),y=(m,x)=>h[x][m]&&!v[x][m],p=l.elevation+l.height;for(let m=0;m<g;m++)for(let x=0;x<f;x++){if(!y(x,m))continue;let w=x;for(;w+1<f&&y(w+1,m);)w++;let S=m;for(;S+1<g&&Array.from({length:w-x+1},(z,R)=>y(x+R,S+1)).every(Boolean);)S++;for(let z=m;z<=S;z++)for(let R=x;R<=w;R++)v[z][R]=!0;let I=d[x]-n,E=d[w+1]+n,F=u[m]-n,k=u[S+1]+n;Math.min(E-I,k-F)<.8||o.push({id:t(o.length),x0:a(I),z0:a(F),x1:a(E),z1:a(k),shape:"gable",axis:E-I>=k-F?"x":"z",eave_a:a(p),eave_b:a(p),pitch_a:e,pitch_b:e,base:a(p),overhang:null})}s.push(...c)}return o}var Dt=Math.PI/180,Go=1.13,Un=1.72,ut=.025,Et=.07,Xo=.25;function ht(r,t){let e=[];for(let n of r.floors){if(t&&n.id!==t)continue;let{walls:i}=gt(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior||o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,d=-s/l,u=[o.a[0]+c*o.right,n.elevation,o.a[1]+d*o.right],f=Math.min(n.height,o.height??n.height);e.push({key:`wall:${n.id}:${o.id}`,section:null,side:"top",flat:!1,o:u,eu:[s/l,0,a/l],es:[0,1,0],n:[c,0,d],lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[c,d],wall:{floorId:n.id}})}}return e}var yt="ground";function Ir(r){return[...r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??r.floors[0]??null}function Yo(r,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],o=Ir(r),s=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Zi(o,s,a)):t.base??0;return{key:yt,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function ot(r,t,e=G(r)){return t.face===yt?Yo(r,t):t.face.startsWith("wall:")?ht(r,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Qo(r,t,e){let n=ht(r,e),i=r.settings.north??0,o=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>o(c)-o(l))[0];if(!s)return null;let a={...Nt(s,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+ut)/(Un+ut))),a.u=Math.round((s.lu-(a.cols*Un+(a.cols-1)*ut))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-Go-.3)*100)/100,a}function Kn(r,t){let e=r.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(o=>o[0]))+3:0,i=e.length?Math.min(...e.map(o=>o[1])):0;return{id:t,face:yt,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function qn(r){return r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function G(r){let t=r.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(p=>Er(p,Uo(r,p,p.overhang??t.overhang)));let e=qn(r);if(!e)return[];let n=e.rooms.flatMap(p=>p.points.map(m=>m[0])),i=e.rooms.flatMap(p=>p.points.map(m=>m[1])),o=r.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...i)-o,c=Math.max(...i)+o,d=e.elevation+e.height;if(t.type==="flat")return[Jo("main",null,s,l,a,c,d+Xo)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,g=(f?c-l:a-s)/2,_=g*Math.tan(t.pitch*Dt),h=(p,m,x)=>f?[p,d+x,(l+c)/2+m]:[(s+a)/2+m,d+x,p],[v,y]=f?[s,a]:[l,c];return[-1,1].map(p=>De(`main:${p<0?"a":"b"}`,null,p<0?"a":"b",h(v,p*g,0),h(y,p*g,0),h(v,0,_),t.pitch,()=>[0,y-v]))}function Er(r,t){let e=Ht(r),n=de(r),i=(h,v,y)=>{let[p,m]=e.at(h,v);return[p,y,m]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(r.shape==="flat"){let h=e.at(a,-o),v=e.at(l,e.w+s);return[Jo(r.id,r.id,Math.min(h[0],v[0]),Math.min(h[1],v[1]),Math.max(h[0],v[0]),Math.max(h[1],v[1]),r.eave_a+Xo)]}if(r.shape==="pent")return[De(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,e.w+s,n.y(e.w+s)),r.pitch_a,()=>[0,c])];let d=r.shape==="hip",u=d?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=d?e.u0+u-a:0,g=d?l-(e.u1-u):0,_=[];if(n.vr>.3){let h=Math.hypot(n.vr+o,n.rh-n.y(-o));_.push(De(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,n.vr,n.rh),r.pitch_a,v=>[f*(v/h),c-g*(v/h)]))}if(e.w-n.vr>.3){let h=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));_.push(De(`${r.id}:b`,r.id,"b",i(l,e.w+s,n.y(e.w+s)),i(a,e.w+s,n.y(e.w+s)),i(l,n.vr,n.rh),r.pitch_b,v=>[g*(v/h),c-f*(v/h)]))}return _}function De(r,t,e,n,i,o,s,a){let l=He(Ve(i,n)),c=He(Ve(o,n)),d=He(Ar(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=He([-c[0],0,-c[2]]);return{key:r,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:jn(Ve(i,n)),ls:jn(Ve(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function Jo(r,t,e,n,i,o,s){let a=i-e>=o-n,l=a?i-e:o-n,c=a?o-n:i-e;return{key:`${r}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ue(r){let t=r.module_w||Go,e=r.module_h||Un;return r.portrait===!1?[e,t]:[t,e]}function We(r){return r.layout?.length?r.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Gn(r,t){return r.flat?Math.min(45,Math.max(0,t.tilt??15))*Dt:r.wall?Math.min(90,Math.max(0,t.tilt??0))*Dt:0}function Wt(r,t){let[e,n]=ue(t),i=We(t),o=Math.max(1,...i),a=(i.length-1)*Xn(r,t)+n*Math.cos(Gn(r,t));return[o*e+(o-1)*ut,a]}function Xn(r,t){let[,e]=ue(t),n=Gn(r,t);return r.wall?e*Math.cos(n)+ut:r.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+ut}function _t(r,t,e=!1){let[n,i]=ue(t),o=[],s=Gn(r,t),a=i*Math.cos(s),l=Xn(r,t),c=We(t),d=Math.max(1,...c),u=new Set(t.skip??[]),f=(_,h,v)=>[r.o[0]+r.eu[0]*_+r.es[0]*h+r.n[0]*v,r.o[1]+r.eu[1]*_+r.es[1]*h+r.n[1]*v,r.o[2]+r.eu[2]*_+r.es[2]*h+r.n[2]*v],g=(_,h)=>{if(r.unbounded)return!0;if(h<-1e-6||h>r.ls+1e-6)return!1;let[v,y]=r.span(h);return _>=v-1e-6&&_<=y+1e-6};return c.forEach((_,h)=>{let v=t.align==="right"?d-_:t.align==="center"?(d-_)/2:0;for(let y=0;y<_;y++){let p=`${h}:${y}`,m=u.has(p);if(m&&!e)continue;let x=t.u+(y+v)*(n+ut),w=t.v+h*l,S=x+n,I=w+(r.flat||r.wall?a:i);if(![[x,w],[S,w],[S,I],[x,I]].every(([L,P])=>g(L,P)))continue;if(r.wall&&s>.001){let L=Et+i*Math.sin(s),[P,O]=t.flip?[L,Et]:[Et,L],D=[f(x,w,P),f(S,w,P),f(S,I,O),f(x,I,O)],H=t.flip?w:I,V=[x+.05,S-.05].map(U=>[f(U,H,0),f(U,H,L)]);o.push({corners:D,posts:V,cell:p,skipped:m});continue}if(!r.flat){o.push({corners:[f(x,w,Et),f(S,w,Et),f(S,I,Et),f(x,I,Et)],posts:[],cell:p,skipped:m});continue}let E=.15,F=E+i*Math.sin(s),[k,z]=t.flip?[I,w]:[w,I],R=[f(x,k,E),f(S,k,E),f(S,z,F),f(x,z,F)];o.push({corners:R,posts:[x+.05,S-.05].flatMap(L=>[[f(L,k,0),f(L,k,E)],[f(L,z,0),f(L,z,F)]]),cell:p,skipped:m})}}),o}function Ne(r,t){let e=[r.eu[0],r.eu[2]],n=[r.es[0],r.es[2]],i=[t[0]-r.o[0],t[1]-r.o[2]],o=e[0]*n[1]-e[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,a=(e[0]*i[1]-e[1]*i[0])/o;if(a<0||a>r.ls)return null;let[l,c]=r.span(a);return s>=l&&s<=c?{u:s,s:a}:null}function Zo(r,t){let e=null;for(let n of r){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=Ne(n,t);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!e||o>e.y)&&(e={face:n,...i,y:o})}return e?{face:e.face,u:e.u,s:e.s}:null}function he(r,t){if(r.unbounded)return{u:t.u,v:t.v};let[e,n]=Wt(r,t),i=o=>Math.floor(o*100+1e-6)/100;return{u:i(Math.min(Math.max(0,t.u),Math.max(0,r.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,r.ls-n)))}}function Nt(r,t){let e={id:t,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=ue(e),i=.4,o=Xn(r,e),[s,a]=r.span(r.ls/2);for(e.cols=Math.max(1,Math.floor((a-s-2*i+ut)/(n+ut))),e.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*i)/o)));e.cols>1&&_t(r,{...e,u:qo(r,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=qo(r,e),e.v=i,e}function qo(r,t){let[e]=ue(t),n=t.cols*e+(t.cols-1)*ut;return Math.round((r.lu-n)/2*100)/100}function Yn(r,t){let e=(Math.atan2(r.facing[0],-r.facing[1])/Dt-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Be(r,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Dt-t+720)%360,o=Math.cos((i-180)*Dt);return n.lu*n.ls*(1.2+o)};return[...r].sort((n,i)=>e(i)-e(n))[0]??null}function Ve(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function jn(r){return Math.hypot(r[0],r[1],r[2])}function He(r){let t=jn(r)||1;return[r[0]/t,r[1]/t,r[2]/t]}function Ar(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}var ts=.78,es=1.18;function Bt(r){return{id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||ts,module_h:r.h||es}}function ns(r,t){let e=_t(r,Bt(t))[0];if(!e)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Qn(r,t){let e=ts,n=es,[i,o]=r.span(r.ls/2);return{id:t,face:r.key,u:Math.round((i+o-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(r.ls-n,r.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function pe(r,t,e){let n=Yo(r,t),[i,o]=Wt(n,t),s=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+o/2),a=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+o/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=s*c[0]+a*c[1]-i/2,f=s*d[0]+a*d[1]-o/2,g=_=>Math.round(_*100)/100;return{u:g(u),v:g(f),rotation:(Math.round(e)%360+360)%360}}function me(r,t){let[e,n]=Wt(r,t);return[r.o[0]+r.eu[0]*(t.u+e/2)+r.es[0]*(t.v+n/2),r.o[2]+r.eu[2]*(t.u+e/2)+r.es[2]*(t.v+n/2)]}function Jn(r,t,e){let n=e[0]*r.n[0]+e[1]*r.n[1]+e[2]*r.n[2];if(Math.abs(n)<1e-6)return null;let i=((r.o[0]-t[0])*r.n[0]+(r.o[1]-t[1])*r.n[1]+(r.o[2]-t[2])*r.n[2])/n;if(i<=0)return null;let o=[t[0]+e[0]*i-r.o[0],t[1]+e[1]*i-r.o[1],t[2]+e[2]*i-r.o[2]],s=o[0]*r.eu[0]+o[1]*r.eu[1]+o[2]*r.eu[2],a=o[0]*r.es[0]+o[1]*r.es[1]+o[2]*r.es[2];return{t:i,u:s,s:a}}function is(r,t,e){if(r.unbounded)return!0;if(e<0||e>r.ls)return!1;let[n,i]=r.span(e);return t>=n&&t<=i}function os(r,t,e,n){for(let i of _t(r,t)){let o=i.corners.map(d=>{let u=[d[0]-r.o[0],d[1]-r.o[1],d[2]-r.o[2]];return[u[0]*r.eu[0]+u[1]*r.eu[1]+u[2]*r.eu[2],u[0]*r.es[0]+u[1]*r.es[1]+u[2]*r.es[2]]}),[s,a]=[Math.min(...o.map(d=>d[0])),Math.max(...o.map(d=>d[0]))],[l,c]=[Math.min(...o.map(d=>d[1])),Math.max(...o.map(d=>d[1]))];if(e>=s-.05&&e<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var at=.03,ss=r=>r&&r!=="none"?r:null;function ds(r,t=e=>ss(e.power)){let e={grid:null,solar:[],battery:[],soc:[]};for(let n of r.floors)for(let i of n.furniture){let o=t(i);if(i.type==="meter")e.grid??=o;else if(i.type==="inverter"&&o&&!e.solar.includes(o))e.solar.push(o);else if(i.type==="home_battery"){o&&!e.battery.includes(o)&&e.battery.push(o);let s=ss(i.soc);s&&!e.soc.includes(s)&&e.soc.push(s)}}return e}function ti(r){for(let t of r.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return r.energy.meter}function Ue(r,t,e="power"){if(!t)return null;let n=r.entities?.[t]?.device_id;if(!n)return null;let i=Object.keys(r.states).filter(a=>a.startsWith("sensor.")&&r.entities?.[a]?.device_id===n&&r.states[a]?.attributes.device_class===e);if(i.length<=1)return i[0]??null;let o=i.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(a=>s&&a.includes(s))??o[0]??i[0]}function us(r,t){let e={};for(let n of t.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,o=Ue(r,i);o&&!e.grid&&(e.grid=o)}else if(n.type==="solar"){let i=Ue(r,n.stat_energy_from);i&&!e.solar&&(e.solar=i)}else if(n.type==="battery"){let i=Ue(r,n.stat_energy_from??n.stat_energy_to);i&&!e.battery&&(e.battery=i);let o=Ue(r,n.stat_energy_from??n.stat_energy_to,"battery");o&&!e.battery_soc&&(e.battery_soc=o)}return e}var Fr=.07;function Ut(r,t){return r.pos.push(t),r.adj.push([]),r.pos.length-1}function $t(r,t,e){let n=Math.hypot(r.pos[t][0]-r.pos[e][0],r.pos[t][1]-r.pos[e][1]);r.adj[t].push({to:e,w:n}),r.adj[e].push({to:t,w:n})}function Pr(r,t){let e=r.length,n=r.map((i,o)=>{let s=r[(o+1)%e],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*t[o],i[1]+u*t[o]],d:[a/c,l/c],n:[d,u]}});return r.map((i,o)=>{let s=n[(o-1+e)%e],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[o],i[1]+a.n[1]*t[o]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Rr(r){return tt(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function ei(r,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=gt(r.rooms,{exterior:t,interior:e},r.walls??[]);for(let o of r.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=Rr(o),l=s.length,c=s.map((f,g)=>{let _=a?(l-2-g+l)%l:g,h=i.some(v=>!v.exterior&&v.sources.some(y=>y.room_id===o.id&&y.edge===_));return Fr+(h?e/2:0)}),d=Pr(s,c).map(f=>Ut(n,f)),u=d.map((f,g)=>[f,d[(g+1)%l]]);for(let[f,g]of u)$t(n,f,g);n.rings.set(o.id,u)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=At(n,o.roomLeft,s),l=At(n,o.roomRight,s);a!==null&&l!==null&&$t(n,a,l)}return n}function At(r,t,e){let n=r.rings.get(t);if(!n)return null;let i=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,f=Math.min(1,Math.max(0,((e[0]-a[0])*c+(e[1]-a[1])*d)/u)),g=[a[0]+c*f,a[1]+d*f],_=Math.hypot(e[0]-g[0],e[1]-g[1]);(!i||_<i.d)&&(i={seg:s,q:g,d:_})}if(!i)return null;let o=Ut(r,i.q);return $t(r,o,i.seg[0]),$t(r,o,i.seg[1]),o}function ge(r,t){let e=r.rooms.filter(o=>o.points.length>=3),n=e.find(o=>T(t,o.points));if(n)return n;let i=null;for(let o of e)for(let s of o.points){let a=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||a<i.d)&&(i={room:o,d:a})}return i?.room??null}function hs(r,t){let e=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(e[t]=0;;){let o=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(o<0||e[s]<e[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:a}of r.adj[o])e[o]+a<e[s]-1e-9&&(e[s]=e[o]+a,n[s]=o)}return{dist:e,prev:n}}function rs(r,t){return r.every(e=>t[e].kind==="battery")?"battery":r.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var as=new WeakMap;function Or(r,t){let e=ti(r),n=r.floors.find(d=>d.id===e.floor_id),i=[],{wall_exterior:o,wall_interior:s}=r.settings,a=new Map,l=new Map;t.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=r.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,f=l.get(d.id),g=rs(f,t);i.push({floorId:n.id,a:[e.x,at,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:f,kind:g});let _=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[e.x,u?-.2:d.height,e.z],b:[e.x,at,e.z],dist:_,members:f,kind:g}),a.set(d.id,_+.25)}for(let d of c){let u=ei(d,o,s),f=ge(d,[e.x,e.z]);if(!f)continue;let g=Ut(u,[e.x,e.z]),_=At(u,f.id,[e.x,e.z]);if(_===null)continue;$t(u,g,_);let h=[];for(let x of l.get(d.id)){let w=t[x],S=ge(d,[w.x,w.z]);if(!S)continue;let I=Ut(u,[w.x,w.z]),E=At(u,S.id,[w.x,w.z]);E!==null&&($t(u,I,E),h.push({node:I,member:x}))}let{dist:v,prev:y}=hs(u,g),p=new Map;for(let x of h)if(Number.isFinite(v[x.node]))for(let w=x.node;y[w]>=0;w=y[w]){let S=y[w],I=`${S}>${w}`,E=p.get(I)??{a:S,b:w,members:[]};E.members.push(x.member),p.set(I,E)}let m=a.get(d.id)??0;for(let{a:x,b:w,members:S}of p.values()){let I=u.pos[x],E=u.pos[w],F=rs(S,t);i.push({floorId:d.id,a:[I[0],at,I[1]],b:[E[0],at,E[1]],dist:m+v[x],members:S,kind:F})}}return i}function ps({building:r,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:o}){let s=ti(r);if(!s)return[];let a=r.floors.find(k=>k.id===s.floor_id);if(!a)return[];let l=k=>o?.get(k),c=Zn(r,"inverter"),d=Zn(r,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=k=>{let z=null;for(let R of c)R.floorId===k.floorId&&(!z||Math.hypot(R.x-k.x,R.z-k.z)<Math.hypot(z.x-k.x,z.z-k.z))&&(z=R);return z},f=k=>l(k.id)??(d.length===1?e.battery??0:0),g=new Map;for(let k of d){let z=u(k);z&&g.set(k.id,z)}let _=t.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of d)!g.has(k.id)&&e.battery!==null&&_.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(f(k))});let h=`${s.floor_id}:${s.x},${s.z}|${_.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,v=as.get(r);v||as.set(r,v=new Map);let y=v.get(h);y||(y=Or(r,_),v.clear(),v.set(h,y));let p=y.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((z,R)=>z+_[R].power,0),kind:k.kind})),m=e.grid!==null?ni(r):null,x=r.settings.roof.cables??[],w=k=>x.find(z=>z.id===k),S=(k,z)=>k.map(R=>({...R,key:z}));if(m){let k=e.grid>=0,z=w("grid"),R=z?je(r,z,[m.end[0],a.elevation+at,m.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[[m.end[0],at,m.end[1]],[m.wall[0],at,m.wall[1]],[s.x,at,s.z]],L=z?fe(r,k?R:[...R].reverse(),Math.abs(e.grid),k?"grid":"export",a):fs(a.id,k?R:[...R].reverse(),Math.abs(e.grid),k?"grid":"export",0);p.push(...S(L,"grid"))}if(e.battery!==null&&e.battery>0)for(let k of p)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let I=r.settings.roof.solar??[],E=r.settings.roof.strings??[],F=new Map;if(i&&I.length){let k=[...G(r),...ht(r)];for(let z of I){let R=i.get(z.id)??0,L=z.string?E.find(C=>C.id===z.string)?.inverter:null,P=L?c.find(C=>C.id===L)??null:null;if(!P&&c.length){let C=ot(r,z,k),W=C?me(C,z):[z.u,z.v];P=c.reduce((Y,nt)=>!Y||Math.hypot(nt.x-W[0],nt.z-W[1])<Math.hypot(Y.x-W[0],Y.z-W[1])?nt:Y,null)}P&&F.set(P.id,(F.get(P.id)??0)+R);let O=P??{floorId:s.floor_id,x:s.x,z:s.z},D=P?1.1+P.h:1.5,H=w(`solar:${z.id}`),V=H?Lr(r,z):null,U=r.floors.find(C=>C.id===O.floorId);H&&V&&U?p.push(...S(fe(r,je(r,H,V,[O.x,U.elevation+D,O.z]),R,"solar",U),`solar:${z.id}`)):p.push(...S(Tr(r,z,R,O,D),`solar:${z.id}`))}}else e.solar!==null&&!c.length&&p.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,at,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let k of c){let z=1.1+k.h,R=d.filter(O=>g.get(O.id)===k),L=l(k.id);if(L===void 0){L=F.get(k.id)??(c.length===1?e.solar??0:0);for(let O of R)L+=f(O)}let P=r.floors.find(O=>O.id===k.floorId);if(e.solar!==null||e.battery!==null){let O=w(`inv:${k.id}`),D=O&&P?fe(r,je(r,O,[k.x,P.elevation+z,k.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,L),"inverter",P):cs(r,k,z,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,L),"inverter",0);p.push(...S(D,`inv:${k.id}`))}for(let O of R){let D=f(O);if(e.battery===null&&l(O.id)===void 0)continue;let H=O.variant==="wall"?.5+O.h:.9,V=w(`bat:${O.id}`),U=V&&P?fe(r,je(r,V,[k.x,P.elevation+z-.1,k.z],[O.x,P.elevation+H,O.z]),Math.abs(D),"battery",P):cs(r,k,z-.1,O,H,Math.abs(D),"battery",0);p.push(...S(D<=0?U:U.map(C=>({...C,a:C.b,b:C.a})).reverse(),`bat:${O.id}`))}}return p}function ni(r){let t=ti(r),e=t?r.floors.find(g=>g.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=r.settings,{walls:o}=gt(e.rooms,{exterior:n,interior:i},e.walls??[]),s=Zn(r,"grid_point")[0],a=o.filter(g=>g.exterior);if(s){let g=null;for(let h of a){let v=h.b[0]-h.a[0],y=h.b[1]-h.a[1],p=s.x-t.x,m=s.z-t.z,x=p*y-m*v;if(Math.abs(x)<1e-9)continue;let w=((h.a[0]-t.x)*y-(h.a[1]-t.z)*v)/x,S=((h.a[0]-t.x)*m-(h.a[1]-t.z)*p)/x;if(w<=0||w>1||S<0||S>1||g&&w>=g.t)continue;let I=Math.hypot(v,y)||1;g={q:[t.x+p*w,t.z+m*w],out:[y/I,-v/I],t:w}}let _=g?[g.q[0]+g.out[0]*(n/2+.05),g.q[1]+g.out[1]*(n/2+.05)]:[t.x,t.z];return{floorId:e.id,wall:_,end:[s.x,s.z]}}let l=null;for(let g of a){let _=g.b[0]-g.a[0],h=g.b[1]-g.a[1],v=_*_+h*h||1,y=Math.min(1,Math.max(0,((t.x-g.a[0])*_+(t.z-g.a[1])*h)/v)),p=[g.a[0]+_*y,g.a[1]+h*y],m=Math.hypot(t.x-p[0],t.z-p[1]),x=Math.sqrt(v);(!l||m<l.d)&&(l={q:p,out:[h/x,-_/x],d:m})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let g of r.floors)for(let _ of g.outdoor??[]){let h=_.points.length;for(let v=0;v<h;v++){let y=_.points[v],p=_.points[(v+1)%h],m=p[0]-y[0],x=p[1]-y[1],w=d[0]*x-d[1]*m;if(Math.abs(w)<1e-9)continue;let S=((y[0]-c[0])*x-(y[1]-c[1])*m)/w,I=((y[0]-c[0])*d[1]-(y[1]-c[1])*d[0])/w;S>0&&I>=0&&I<=1&&(u=Math.max(u,Math.min(15,S)))}}let f=u>n+1?u:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*f,c[1]+d[1]*f]}}function Zn(r,t){let e=[];for(let n of r.floors)for(let i of n.furniture)i.type===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var ls=new WeakMap;function ms(r,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,o=ls.get(r);o||ls.set(r,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,c=ei(t,a,l),d=[e,n],u=ge(t,e),f=ge(t,n);if(u&&f){let g=Ut(c,e),_=At(c,u.id,e),h=Ut(c,n),v=At(c,f.id,n);if(_!==null&&v!==null){$t(c,g,_),$t(c,h,v);let{dist:y,prev:p}=hs(c,g);if(Number.isFinite(y[h])){d.length=0;for(let m=h;m>=0;m=p[m])d.unshift(c.pos[m])}}}return o.set(i,d),d}function cs(r,t,e,n,i,o,s,a){let l=r.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=ms(r,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(u=>[u[0],at,u[1]]),[n.x,i,n.z]];return fs(l.id,d,o,s,a)}function fs(r,t,e,n,i){let o=[];for(let s=0;s+1<t.length;s++){let a=t[s],l=t[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(o.push({floorId:r,a,b:l,dist:i,power:e,kind:n}),i+=c)}return o}function je(r,t,e,n){let o=(r.floors.find(s=>s.id===t.floor_id)?.elevation??0)+Math.max(at,t.height);return[e,...t.points.map(s=>[s[0],o,s[1]]),n]}function Lr(r,t){let e=ot(r,t,[...G(r),...ht(r)]);if(!e)return null;let[n,i]=Wt(e,t),o=t.u+n/2,s=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*o+e.es[0]*s,e.o[1]+e.eu[1]*o+e.es[1]*s,e.o[2]+e.eu[2]*o+e.es[2]*s]}function Cr(r,t,e){let{wall_exterior:n,wall_interior:i}=r.settings,o=ei(t,n,i),s=ge(t,e),a=s?At(o,s.id,e):null;return a===null?e:o.pos[a]}function fe(r,t,e,n,i){let o=[...r.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let u of o)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],u=t[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let g=[];if(Math.abs(u[1]-d[1])>.01){let _=Math.min(d[1],u[1]),h=Math.max(d[1],u[1]);for(let v of o)v.elevation>_+.01&&v.elevation<h-.01&&g.push(v.elevation);u[1]<d[1]&&g.reverse()}for(let _ of[...g,u[1]]){let h=(_-d[1])/(u[1]-d[1]||1),v=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*h,_,d[2]+(u[2]-d[2])*h]:u,y=s((d[1]+v[1])/2),p=Math.hypot(v[0]-d[0],v[1]-d[1],v[2]-d[2]);p>1e-4&&a.push({floorId:y.id,a:[d[0],d[1]-y.elevation,d[2]],b:[v[0],v[1]-y.elevation,v[2]],dist:l,power:e,kind:n}),l+=p,d=v}}return a}function Tr(r,t,e,n,i){let o=[...G(r),...ht(r)],s=ot(r,t,o),a=r.floors.find(v=>v.id===n.floorId);if(!s||!a)return[];let[l,c]=Wt(s,t),d=(v,y)=>[s.o[0]+s.eu[0]*v+s.es[0]*y,s.o[1]+s.eu[1]*v+s.es[1]*y,s.o[2]+s.eu[2]*v+s.es[2]*y],u=t.u+l/2,f=a.elevation+at,g=[],_;if(s.unbounded){let v=d(u,t.v+c/2);_=[v[0],f,v[2]],g.push(_)}else if(s.wall){let v=d(u,t.v);_=[v[0],f,v[2]],g.push(v,_)}else{let v=d(u,t.v),y=qn(r)??a,p=Math.max(a.elevation+.5,Math.min(v[1]-.25,y.elevation+y.height-.12));_=[v[0],p,v[2]],g.push(v)}let h=Cr(r,a,[_[0],_[2]]);g.push([h[0],_[1],h[1]]),Math.abs(_[1]-f)>.05&&g.push([h[0],f,h[1]]);for(let v of ms(r,a,h,[n.x,n.z]).slice(1))g.push([v[0],f,v[1]]);return g.push([n.x,a.elevation+i,n.z]),fe(r,g,e,"solar",a)}var _s=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Vr={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Hr={back:0,right:90,front:180,left:270};function bs(r,t,e){let n=rt(r.points),i=n.x1-n.x0,o=n.z1-n.z0,s=Vr[t],a=[],l=(d,u,f,g,_)=>{let[h,v,y]=_??ct[d];a.push({id:e(),type:d,x:gs(u),z:gs(f),rotation:g,w:h,d:v,h:y,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let u=d.items.map(v=>({type:v.type,size:v.size??ct[v.type]})),f=d.wall==="back"||d.wall==="front"?i:o,g=[],_=0;for(let v of u){if(_+v.size[0]>f-.1)break;g.push(v),_+=v.size[0]}let h=d.align==="start"?.05:d.align==="end"?f-_-.05:(f-_)/2;for(let v of g){let[y,p]=v.size,m=h+y/2,x=p/2+c;d.wall==="back"?l(v.type,n.x0+m,n.z0+x,0,v.size):d.wall==="front"?l(v.type,n.x1-m,n.z1-x,180,v.size):d.wall==="right"?l(v.type,n.x1-x,n.z0+m,90,v.size):l(v.type,n.x0+x,n.z1-m,Hr.left,v.size),h+=y}}for(let d of s.free){let[u,f]=d.size??ct[d.type],g=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*d.at[0])),_=Math.min(n.z1-f/2-.05,Math.max(n.z0+f/2+.05,n.z0+o*d.at[1]));l(d.type,g,_,d.rotation,d.size)}return a}var gs=r=>Math.round(r*1e3)/1e3;var Dr={view:"3D",editor:"Disegna casa",all_floors:"Tutti i piani",no_building:"Non hai ancora disegnato la casa.",no_building_admin:"Non hai ancora disegnato la casa. Apri \xABDisegna casa\xBB e aggiungi il primo piano.",open_editor:"Apri editor",loading:"Caricamento \u2026",load_error:"Caricamento non riuscito",saving:"Salvataggio \u2026",saved:"Salvato",save_error:"Salvataggio non riuscito",save_failed_detail:"Salvataggio non riuscito: {error}. Le modifiche rimangono in questo browser.",needs_restart:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora {version}. Riavvia Home Assistant: fino ad allora il salvataggio potrebbe non riuscire.",needs_restart_old:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora quella precedente. Riavvia Home Assistant per poter salvare.",draft_found:"Trovate modifiche non salvate del {time}.",draft_restore:"Ripristina e salva",draft_discard:"Scarta",walls_auto:"Muri interi",walls_cut:"Muri tagliati",reset_view:"Panoramica",back:"Indietro",floor:"Piano",floors:"Piani",add_floor:"Aggiungi piano",floor_from_ha:"Piani di Home Assistant:",floor_empty:"Piano vuoto",level:"Livello {n}",ha_floor:"Piano in Home Assistant",no_ha_floor:"\u2013 nessuno \u2013",area_rooms:"Crea {n} stanze dalle aree di HA",area_rooms_hint:"Crea una stanza di 4 \xD7 3 m per ogni area del piano. Spostala nella posizione corretta e modifica gli angoli.",floor_name:"Nome",elevation:"Quota dal suolo (m)",height:"Altezza soffitto (m)",cut_height:"Altezza taglio (m)",delete_floor:"Elimina piano",delete_floor_confirm:"Eliminare il piano \xAB{name}\xBB con tutte le sue stanze?",move_up:"Sposta su",move_down:"Sposta gi\xF9",default_floor:"Piano terra",new_floor:"Piano {n}",tool_select:"Seleziona",tool_rect:"Rettangolo",tool_polygon:"Forma libera",undo:"Annulla",redo:"Ripeti",fit:"Mostra tutto",room:"Stanza",rooms:"Stanze",room_name:"Nome",area:"Area",no_area:"Nessuna area",material:"Pavimento",x:"X (m)",z:"Y (m)",width:"Larghezza (m)",depth:"Profondit\xE0 (m)",points:"Angoli",delete_point:"Elimina angolo",duplicate:"Duplica",delete:"Elimina",new_room:"Stanza {n}",settings:"Impostazioni",pendant_shape:"Forma",pendant_shade:"Paralume",pendant_globe:"Sfera",pendant_cone:"Cono",pendant_drum:"Cilindro",pkg_open:"Arreda \u2026",pkg_hint:"I mobili si dispongono lungo le pareti; le lampade si collegano alle luci dell'area. Puoi poi modificare ogni elemento. Ctrl+Z annulla tutto.",pkg_done:"Posizionati {n} elementi. Ctrl+Z annulla.",pkg_kitchen_row:"Cucina lineare",pkg_kitchen_row_desc:"Cucina sulla parete posteriore con frigorifero, forno, lavello, lavastoviglie, piano cottura, pensile e tavolo con lampada a sospensione",pkg_kitchen_l:"Cucina a L",pkg_kitchen_l_desc:"Cucina lungo le pareti posteriore e sinistra, isola con sgabelli",pkg_bath:"Bagno",pkg_bath_desc:"Lavabo, WC, vasca, lavatrice e faretto",pkg_bedroom:"Camera da letto",pkg_bedroom_desc:"Letto matrimoniale con due comodini, armadio, cassettiera e plafoniera",pkg_living:"Soggiorno",pkg_living_desc:"Mobile TV, divano, tavolino, tappeto, poltrona, scaffale, piantana e pianta",pkg_dining:"Sala da pranzo",pkg_dining_desc:"Tavolo con quattro sedie, credenza e lampada a sospensione",pkg_office:"Ufficio",pkg_office_desc:"Scrivania con sedia da ufficio, due scaffali e plafoniera",pkg_kids:"Cameretta",pkg_kids_desc:"Letto singolo, scrivania, scaffale e tappeto",pkg_hall:"Ingresso",pkg_hall_desc:"Appendiabiti e due faretti",spots_place:"Posiziona faretti",spots_type:"Lampada",spots_cols:"Colonne (sinistra\u2013destra)",spots_rows:"Righe (davanti\u2013dietro)",spots_add:"Posiziona {n} lampade",spots_placed:"Posizionate {n} lampade.",spots_hint:"Tutte le lampade seguono la luce scelta, per esempio faretti su un unico dimmer. Puoi poi spostarle o collegarle ad altre luci.",cancel:"Annulla",backup:"Backup",backup_history:"Punti di ripristino",backup_none:"Nessun punto disponibile. Durante le modifiche viene conservato al massimo un punto ogni 10 minuti.",backup_summary:"{rooms} stanze, {furniture} elementi",backup_restore:"Ripristina",backup_restore_confirm:"Ripristinare lo stato del {time}? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_restored:"Ripristinato.",backup_file:"File",backup_export:"Esporta",backup_export_share:"Condividi come modello",backup_export_share_hint:"Senza aree, dispositivi, sensori e immagini, per condividerlo con altri.",backup_import:"Importa \u2026",backup_import_confirm:"Sostituire l'intera pianta con il file? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_import_error:"Il file non \xE8 una pianta NeonCasa 3D ({error}).",backup_imported:"Importato.",backup_hint:"Le immagini di sfondo non sono incluse nel file.",backup_full:"Backup completo",backup_full_export:"Salva tutto (pianta, immagini e pacchetti)",backup_full_import:"Ripristina un backup completo \u2026",backup_full_hint:"Un unico file con pianta, sfondi, immagini degli schermi e pacchetti installati. Al ripristino i pacchetti vengono verificati nuovamente; la chiave di licenza non \xE8 inclusa.",backup_full_confirm:"Sostituire pianta, immagini e pacchetti con il backup? Lo stato attuale rimarr\xE0 come punto di ripristino.",backup_full_not_backup:"Questo non \xE8 un backup completo di NeonCasa 3D.",backup_full_restored:"Backup ripristinato: {packs} pacchetti, {pictures} immagini.",backup_full_skipped:"Ignorati (non verificabili o legati a un'altra installazione): {packs}.",export_name_full:"completo",device_confirm:"Chiedi conferma prima di azionare",device_confirm_hint:"Il tocco nella vista 3D, il menu rapido e il pannello stanza chiedono conferma. Il doppio tocco sulla stanza esclude questo dispositivo.",cover_confirm_hint:"Apertura, chiusura e posizione richiedono conferma. Scorrere sull'indicatore ruota la vista senza muovere la tapparella. L'arresto non richiede conferma.",confirm_switch:"Azionare davvero {name}?",split_handle_hint:"Trascina per regolare la larghezza della pianta e della vista 3D",wall_exterior:"Spessore muro esterno (m)",wall_interior:"Spessore muro interno (m)",grid:"Griglia (m)",background:"Modello (immagine della piantina)",background_upload:"Scegli immagine \u2026",background_width:"Larghezza nella pianta (m)",background_opacity:"Opacit\xE0",background_remove:"Rimuovi modello",hint_select:"Seleziona una stanza \xB7 trascina gli angoli \xB7 \xAB+\xBB aggiunge un angolo \xB7 frecce per spostare \xB7 Canc elimina \xB7 Ctrl+Z annulla",hint_rect:"Trascina per disegnare un rettangolo",hint_polygon:"Posiziona gli angoli \xB7 clicca sul primo o premi Invio per chiudere \xB7 Esc annulla",hint_empty:"Aggiungi prima un piano.",area_m2:"{a} m\xB2",overlap_warning:"Le stanze si sovrappongono: i muri in quel punto sono incompleti.",read_only:"Solo gli amministratori possono modificare la pianta.",mat_wood:"Legno",mat_oak:"Rovere",mat_tiles:"Piastrelle",mat_carpet:"Moquette",mat_stone:"Pietra",mat_concrete:"Cemento",card_name:"NeonCasa 3D",card_description:"La tua casa in 3D, in italiano.",stats:"{calls} chiamate grafiche \xB7 {tris} triangoli",stats_fps:"{fps} fps (fotogramma pi\xF9 lento: {ms} ms)",stats_idle:"A riposo (0 fps)",stats_busy_camera:"inquadratura",stats_busy_floors:"piani",stats_busy_openings:"porte/finestre",stats_busy_flash:"lampeggio",stats_busy_roof:"tetto",stats_busy_flow:"flusso energetico",stats_busy_effect:"effetto colore",stats_busy_robot:"robot",stats_busy_orbit:"rotazione vista",stats_busy_tint:"colore stanza",stats_low:"qualit\xE0 tablet, rapporto pixel {r}",stats_full:"qualit\xE0 completa, rapporto pixel {r}",floors_apart:"Separati",floors_stacked:"Sovrapposti",floor_rooms_one:"1 stanza",floor_rooms:"{n} stanze",quality:"Qualit\xE0",quality_auto:"Automatica",quality_low:"Tablet",quality_high:"Alta",state_on:"Acceso",state_off:"Spento",state_open:"Aperto",state_closed:"Chiuso",state_opening:"Apertura",state_closing:"Chiusura",state_playing:"In riproduzione",state_paused:"In pausa",state_idle:"Inattivo",state_locked:"Bloccato",state_unlocked:"Sbloccato",state_detected:"Rilevato",state_clear:"Nessun rilevamento",state_unavailable:"Non disponibile",state_heat:"Riscaldamento",state_cool:"Raffrescamento",state_auto:"Automatico",state_heat_cool:"Caldo/freddo",state_dry:"Deumidificazione",state_fan_only:"Ventilazione",devices:"Dispositivi",devices_none_area:"Collega la stanza a un'area per visualizzare qui i suoi dispositivi.",devices_none:"L'area non contiene dispositivi adatti.",devices_place_all_n:"Posiziona tutti i {n} dispositivi \u2026",devices_place_all_confirm:"Posizionare {n} dispositivi nella stanza? Ctrl+Z o \xABAnnulla\xBB li rimuove tutti in un solo passaggio.",devices_src_area:"Questa area",devices_src_other:"Altre aree",devices_src_none:"Senza area",devices_place:"Posiziona",devices_remove:"Rimuovi",devices_hint:"I dispositivi posizionati appaiono in 3D. Trascinali nella pianta per spostarli.",panel_lights:"Luci",panel_covers:"Tapparelle",panel_climate:"Riscaldamento",panel_media:"Multimedia",panel_switches:"Interruttori",panel_sensors:"Sensori",panel_scenes:"Scene e script",panel_cameras:"Telecamere",camera_live:"Apri diretta",through_camera:"Guarda dalla telecamera",through_blend:"Sovrapposizione",through_back:"Torna alla vista",camera_mount:"Montaggio",camera_mount_wall:"Parete (segue la rotazione)",camera_mount_ceiling:"Soffitto (dome, tutto intorno)",camera_fov:"Campo visivo (\xB0)",camera_reach:"Portata (m)",camera_fov_short:"Angolo \xB0",camera_reach_short:"Portata m",camera_tilt:"Inclinazione verso il basso (\xB0)",camera_tilt_short:"Inclinazione \xB0",camera_aim_hint:"Il settore nella pianta indica dove guarda la telecamera. Trascina la maniglia sulla punta per ruotarla e regolare la portata.",state_recording:"Registrazione",state_streaming:"Trasmissione",panel_all_off:"Spegni tutto",panel_no_area:"La stanza non \xE8 collegata a un'area. Puoi collegarla nell'editor.",panel_empty:"Nessun dispositivo della stanza \xE8 nella pianta. Posizionalo nell'editor o aggiungilo al pannello stanza con \u2606.",close:"Chiudi",brightness:"Luminosit\xE0",color_temp:"Temperatura colore",color:"Colore",position:"Posizione",cover_open:"Apri",cover_stop:"Arresta",cover_close:"Chiudi",target_temp:"Desiderata",current_temp:"Attuale",temp_down:"Pi\xF9 freddo",temp_up:"Pi\xF9 caldo",volume:"Volume",play_pause:"Riproduci/pausa",previous:"Precedente",next:"Successivo",run:"Esegui",details:"Dettagli",hold_hint:"Tocco per azionare \xB7 pressione prolungata per i dettagli",tool_opening:"Porte e finestre",tool_furniture:"Arredamento",qm_off:"Spento",find:"Cerca",find_placeholder:"Dov'\xE8 \u2026? Dispositivo o stanza",find_none:"Nessun risultato",swipe_off:"Spento",panel_pin:"Mostra nel pannello stanza",panel_unpin:"Nascondi dal pannello stanza",devices_panel_hint:"Il pannello mostra i dispositivi della pianta. \u2606 aggiunge un dispositivo al pannello senza posizionarlo.",card_section_view:"Vista",card_size:"Dimensioni",card_size_fixed:"Altezza fissa",card_size_fill:"Riempi lo schermo",card_fill_hint:"Funziona meglio in una vista dashboard di tipo \xABPannello (scheda singola)\xBB: la scheda occupa tutto lo spazio.",card_controls:"Controlli nella scheda",card_floor_thumbs:"Miniature dei piani",card_floor_thumbs_hint:"Piccole immagini dei piani a lato: toccane una per cambiare piano",card_floor_thumbs_hint_start:"La scheda si apre sul piano scelto; le immagini laterali permettono di passare agli altri",card_room_names:"Mostra nomi stanze",card_section_kiosk:"Tablet a parete (chiosco)",card_section_features:"Funzioni",card_weather_plan:"come impostato nella pianta",card_pro_hint:"La traccia del movimento e il meteo sono extra Pro: senza il relativo extra questi comandi non hanno effetto.",card_idle_return:"Torna alla vista iniziale dopo",card_idle_off:"Mai",card_idle_min:"{n} min senza interazioni",card_idle_hint:"Dopo l'attesa la scheda chiude la stanza e torna alla vista iniziale.",card_night:"Oscuramento notturno",card_night_off:"Disattivato",card_night_sun:"In base al sole",card_night_time:"Fascia oraria",card_night_range:"Fascia oraria (es. 22:00-06:00)",card_idle_orbit:"Rotazione vista come salvaschermo",card_idle_orbit_hint:"Dopo il ritorno la vista ruota lentamente finch\xE9 qualcuno tocca il tablet",card_alerts:"Mostra avvisi",card_alerts_hint:"Fumo, gas, CO, acqua, allarme e finestre aperte sotto la pioggia: la stanza lampeggia e compare un avviso in alto",card_alert_jump:"Vai alla stanza di un nuovo avviso",card_alert_jump_hint:"La vista passa automaticamente al piano e alla stanza dell'avviso",card_scenes:"Pulsanti scene nella stanza",card_scenes_hint:"Scene e script dell'area sotto la vista 3D quando \xE8 selezionata una stanza",card_motion_trail:"Traccia del movimento",card_motion_trail_hint:"Movimenti rilevati negli ultimi 30 minuti, con orari (sensori di movimento, presenza e telecamere)",trail_short:"Traccia",weather_short:"Meteo",weather_entity:"Entit\xE0 meteo",weather_effects:"Effetti meteo in 3D",rain_warning:"Attenzione: finestra aperta mentre piove",weather_effect_rain:"Pioggia",weather_effect_snow:"Neve",weather_effect_fog:"Nebbia (ingrigisce la scena)",weather_effect_clouds:"Le nuvole oscurano cielo e sole",weather_effect_lightning:"Fulmini durante i temporali",weather_effect_sky:"Sole e luna nel cielo",weather_entity_hint:"L'entit\xE0 meteo fornisce pioggia, neve, nebbia e nuvole. La selezione automatica usa la prima disponibile.",weather_hint:"Meteo esterno: pioggia, neve, nebbia e nuvole dall'entit\xE0 meteo; sole e luna da sun.sun",card_weather:"Meteo esterno",card_weather_hint:"Pioggia, neve, nebbia e nuvole dalla prima entit\xE0 meteo; weather_entity permette di cambiarla. Con qualit\xE0 tablet vengono mostrate solo le nuvole.",trail_hint:"Traccia dei movimenti rilevati negli ultimi 30 minuti, con orari",alerts:"Avvisi",alert_smoke:"Fumo: {name}",alert_gas:"Gas: {name}",alert_co:"Monossido di carbonio: {name}",alert_water:"Acqua: {name}",alert_alarm:"Allarme scattato",alert_alarm_pending:"Allarme in attesa",alert_window_rain:"Finestra aperta sotto la pioggia: {name}",room_names_short:"Nomi stanze",floor_stack_short_dim:"Attenuati",floor_stack_short_stacked:"Sovrapposti",floor_stack_short_single:"Singolo",size_short_w:"L",size_short_d:"P",size_short_h:"H",import_error_not_json:"Il file non \xE8 in formato JSON.",import_error_not_plan:"Il file non \xE8 una pianta NeonCasa 3D.",export_name_template:"modello",export_name_backup:"backup",card_floor_stack:"Piani sottostanti",floor_stack_dim:"Attenuati",floor_stack_stacked:"Sovrapposti (casa fino a qui)",floor_stack_single:"Nascosti (solo questo piano)",card_control_walls:"Muri interi/tagliati",card_control_floors:"Separa piani",card_control_temperature:"Temperatura",card_control_humidity:"Umidit\xE0",card_control_co2:"CO\u2082",card_controls_hint:"Comandi per muri, separazione piani, temperatura, umidit\xE0 e CO\u2082",card_fullscreen_button:"Pulsante schermo intero",card_fullscreen_button_hint:"Nasconde la dashboard intorno alla scheda, ad esempio su un tablet a parete",fullscreen:"Schermo intero",fullscreen_exit:"Esci da schermo intero",card_section_show:"Mostra",card_floor:"Piano",card_floor_house:"Casa intera (tocca un piano per aprirlo)",card_height:"Altezza (pixel)",card_walls:"Muri",card_quality_hint:"\xABTablet\xBB \xE8 l'impostazione pi\xF9 leggera, ideale per tablet Fire e tablet a parete.",card_flows_switch:"Comando nella scheda",card_flows_on:"Sempre attivo",card_flows_off:"Sempre disattivato",card_energy:"Mostra valori energetici in alto",card_room_panel:"Dettagli stanza al tocco",card_room_panel_hint:"Luci, tapparelle e telecamere della stanza in un pannello laterale",card_explode:"Separa i piani nella vista casa",card_stats:"Prestazioni (fotogrammi al secondo)",card_stats_hint:"Per verificare la fluidit\xE0 della scheda sul dispositivo",packs:"Pacchetti di arredamento",packs_hint:"Si possono importare solo pacchetti firmati dall'editore.",lib_badge_light:"Lampada: collegabile a una luce e azionabile in 3D",lib_badge_electric:"Elettrico: collegabile a un'entit\xE0 e a un sensore di potenza (comandi, immagini e consumi)",lib_badge_hint:"Gli elementi con simbolo si collegano alle entit\xE0: lampade azionabili, schermi con immagini ed elettrodomestici con consumi.",pack_error_wrong_instance:"Pacchetto firmato per un'altra installazione Home Assistant. L'account del negozio pu\xF2 fornirlo per questa installazione.",license_title:"Collegamento al negozio",license_instance:"ID installazione",license_copy:"Copia",license_copied:"ID copiato",license_activate:"Attiva",license_activated:"Collegato: i tuoi pacchetti sono elencati sotto.",license_active:"Collegato come {name} (chiave {key})",license_checked:"Ultimo controllo: {time}",license_refresh:"Controlla ora",license_refreshed:"Controllo completato.",license_remove:"Scollega",license_remove_confirm:"Scollegare il negozio? I pacchetti installati rimangono, ma gli aggiornamenti automatici si interrompono.",license_installed:"installato \xB7 v{release}",license_update_available:"disponibile aggiornamento alla v{release}",license_not_installed:"non ancora installato",license_install:"Installa",license_update:"Aggiorna",license_none:"Nessun pacchetto nell'account.",license_hint:"La chiave di licenza si trova nell'ordine e nell'account su mastershort.de. Inseriscila per vedere i pacchetti acquistati, firmati per questa installazione e aggiornati automaticamente una volta al giorno. I pacchetti installati funzionano anche senza collegamento.",license_shop:"Altri pacchetti nel negozio",license_error_invalid_key:"Chiave non riconosciuta dal negozio. Il formato \xE8 NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"La chiave \xE8 gi\xE0 associata al numero massimo di installazioni consentite.",license_error_shop_unreachable:"Negozio momentaneamente non raggiungibile. I pacchetti installati continuano a funzionare.",license_error_not_owned:"Questo pacchetto non \xE8 presente nell'account.",license_error_no_key:"Inserisci prima la chiave di licenza.",license_error_wrong_instance:"Il negozio ha firmato il pacchetto per un'altra installazione.",license_error_other:"Operazione non riuscita: {detail}",pack_import:"Importa pacchetti di arredamento \u2026",pack_imported:"Importato \xAB{name}\xBB di {publisher}: {n} elementi",packs_imported_n:"Importati {n} pacchetti su {total}",pack_by:"di {publisher} \xB7 {n} elementi",pack_features:"di {publisher} \xB7 abilita {n} funzioni Pro",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Pannello telecamere: vista dalla telecamera e traccia del movimento",pro_name_camera_cockpit:"Pannello telecamere",pro_name_weather:"Meteo esterno",pro_name_screens:"Schermi dal vivo",pro_name_energy_pro:"Energia Pro",ext_tab:"Estensioni",offers_title:"Novit\xE0 nel negozio",offers_new:"NOVIT\xC0",offers_loyalty:"Sconto fedelt\xE0: {percent} % su ogni ulteriore pacchetto ed extra Pro",offers_kind_pack:"Pacchetto arredamento",offers_kind_pro:"Extra Pro",offers_kind_bundle:"Raccolta",offers_dot:"Novit\xE0 nel negozio",pack_updated:"{name} aggiornato alla versione {release}.",pack_updated_added:"{name} aggiornato alla versione {release}: {n} nuovi elementi. Guarda il catalogo!",ext_title:"Estensioni",ext_intro:"Pacchetti arredamento ed extra Pro dell'autore di NeonCasa 3D. Installa gli acquisti con la chiave di licenza: si aggiornano automaticamente e funzionano anche senza collegamento.",ext_shop:"Apri negozio",ext_pro:"Extra Pro",ext_active:"attivo",ext_get:"Vedi nel negozio",ext_open:"Apri estensioni",manual:"Manuale",manual_more:"Scopri di pi\xF9",ext_teaser_title:"Altri mobili e funzioni Pro",ext_teaser_text:"Pacchetti arredamento, collegamento al negozio ed extra Pro si trovano in \xABEstensioni\xBB in alto.",pro_feature_weather:"Meteo esterno: pioggia, neve, nuvole, sole e luna",pro_feature_screens:"Schermi dal vivo: colore dell'app e immagini multimediali, regole immagini e immagini delle telecamere sugli schermi",pro_feature_energy_pro:"Energia Pro: linee di flusso di energia nella casa, moduli solari vivi, ologramma di vetro con il bilancio energetico; gas, acqua e calore seguiranno come aggiornamenti",pro_locked:"Funzione disponibile come extra Pro. Dopo l'acquisto appare in Estensioni \u203A Collegamento al negozio, da cui puoi installarla.",pro_shop:"Vai al negozio",pack_licensed:"Licenza intestata a {name}",pack_remove:"Rimuovi",pack_remove_confirm:"Rimuovere \xAB{name}\xBB? I suoi mobili rimarranno nella pianta come semplici blocchi.",pack_missing_item:"Mobile di un pacchetto rimosso",pack_error_bad_signature:"Il pacchetto \xE8 stato modificato o la firma non \xE8 valida.",pack_error_unknown_publisher:"Il pacchetto non proviene da un editore riconosciuto.",pack_error_unsigned:"Il pacchetto non \xE8 firmato.",pack_error_not_a_pack:"Il file non \xE8 un pacchetto di arredamento.",pack_error_invalid_content:"Il pacchetto contiene elementi non validi: {detail}",pack_error_too_large:"Il file \xE8 troppo grande.",pack_error_other:"Importazione non riuscita: {detail}",back_to_room:"Torna a {room}",back_to_floor:"Torna al piano",hint_furniture:"Seleziona una stanza e scegli un elemento a destra \xB7 trascina gli elementi e ridimensionali dagli angoli",furniture_into:"I nuovi elementi vengono inseriti al centro di \xAB{room}\xBB.",furniture_pick_room:"Consiglio: seleziona prima una stanza per inserire i nuovi elementi al centro.",flows:"Flusso energetico",flows_hint:"Mostra o nasconde le linee luminose dal contatore alle utenze",holo_title:"Solare ed energia",holo_live:"live",holo_pv_now:"FV ora",holo_today:"Oggi",holo_peak:"Picco",holo_battery:"Batteria",holo_grid:"Rete",holo_house:"Casa",holo_wallbox:"Wallbox",holo_autarky:"Autosufficienza",furn_name:"Nome (facoltativo)",cables_title:"Cavi (Energia Pro)",cables_hint:"Tratteggiato: il cavo trova da solo la sua strada. Afferralo nel piano o sceglilo qui e premi \xABPosa a mano\xBB: allora corre a linea continua per i tuoi punti all'altezza impostata, es. lungo la facciata esterna o sotto il soffitto, e pi\xF9 cavi possono correre affiancati.",cable_laid:"posato a mano",cable_lay:"Posa a mano",cable_auto:"Di nuovo automatico",cable_height:"Altezza dal pavimento (m)",cable_points_hint:"Trascina i punti nel piano. Un clic sul cavo aggiunge un punto, un doppio clic su un punto lo toglie.",cable_other_floor:"Questo cavo \xE8 posato al piano {floor}: passa l\xEC per trascinarne i punti.",holo_settings:"Ologramma (Energia Pro)",holo_settings_hint:"L'ologramma \xE8 agganciato a un campo solare e mantiene la sua dimensione nel mondo: si rimpicciolisce allontanando la vista. Scegli qui il campo, la dimensione e lo spostamento.",holo_field:"Sul campo solare",holo_field_auto:"Automatico (campo pi\xF9 grande)",holo_size:"Dimensione (1 = normale)",holo_right:"Spostamento laterale (m, + = destra)",holo_up:"Spostamento verso l'alto (m, verso il colmo)",flow_on:"attivo",flow_off:"disattivato",hint_opening:"Clicca su un muro per inserire una porta o finestra; scegli il tipo a destra",preset_door:"Porta",preset_door_double:"Porta a due ante",preset_window:"Finestra",preset_window_double:"Finestra a due ante",preset_terrace:"Portafinestra",preset_terrace_double:"Portafinestra a due ante",preset_garage:"Portone garage",preset_front:"Porta d'ingresso",opening_style:"Stile",style_auto:"Automatico ({style})",style_interior:"Porta interna",style_front:"Porta d'ingresso",style_front_glass:"Porta d'ingresso vetrata",style_sidelight:"Porta d'ingresso con vetro laterale",style_sidelights:"Porta d'ingresso con due vetri laterali",style_glass:"Porta in vetro",style_sliding:"Porta scorrevole",style_passage:"Passaggio (senza porta)",style_standard:"Standard",style_bars:"Con traversini",flip_hinge:"Scambia lato cerniere",flip_main_leaf:"Scambia anta principale",flip_hinge_hint:"Sposta le cerniere sull'altro lato",flip_swing:"Inverti verso di apertura",flip_swing_hint:"La porta si apre verso la stanza oppure verso l'esterno",main_leaf:"Anta principale (vista dalla stanza)",contact_main:"Contatto anta principale",contact_second:"Contatto seconda anta",tool_outdoor:"Esterni",tool_measure:"Disegna con misure",hint_measure:"Clicca sul punto iniziale, poi inserisci a destra lunghezze e direzioni dei muri",measure:"Stanza con misure",measure_start:"Clicca sul punto iniziale nella pianta, ad esempio un angolo della stanza.",measure_from:"Partenza: {x} / {z} m. Clicca per spostarla.",measure_length:"Lunghezza muro successivo (m)",measure_close:"Chiudi stanza",measure_undo:"Rimuovi ultimo muro",measure_gap:"Distanza dal punto iniziale: {gap} m (unita alla chiusura)",measure_hint:"Inserisci una lunghezza e premi una freccia. Se usi misure interne, applica poi \xABChiudi spazi\xBB.",rect_by_size:"Rettangolo con dimensioni",rect_add:"Aggiungi rettangolo",dir_up:"Su",dir_down:"Gi\xF9",dir_left:"Sinistra",dir_right:"Destra",hint_outdoor:"Trascina per disegnare un'area esterna (prato, terrazza, piscina \u2026)",outdoor:"Area esterna",outdoor_type:"Tipo",outdoor_hint:"Le luci esterne illuminano tutte le aree esterne e la facciata.",out_lawn:"Prato",out_terrace:"Terrazza",out_path:"Sentiero",out_driveway:"Vialetto carrabile",out_pool:"Piscina",out_bed:"Aiuola",out_hedge:"Siepe",out_fence:"Recinzione",north:"Nord (\xB0 in senso orario dall'alto)",north_hint:"Il nord serve a calcolare la luce del sole attraverso le finestre.",roof:"Tetto",roof_none:"Nessun tetto",roof_flat:"Tetto piano",roof_gable:"Tetto a due falde",roof_custom:"Sezioni del tetto (personalizzate)",roof_sections:"Sezioni del tetto",roof_sections_hint:"Ogni sezione copre un rettangolo della casa con forma, colmo, quota di gronda e pendenza propri. Trascina per disegnarla; clicca per selezionarla, trascinala per spostarla e usa gli angoli per ridimensionarla.",roof_sections_start:"Crea sezioni dalle stanze",roof_sections_regen:"Ricrea dalle stanze",roof_sections_off:"Torna al tetto unico",roof_regen_confirm:"Sostituire tutte le sezioni del tetto con una nuova proposta basata sulle stanze?",roof_section:"Sezione tetto",roof_section_hint:"Le quote partono dal suolo. Un lato con gronda pi\xF9 bassa scende maggiormente. I tetti a una falda salgono dal primo lato.",roof_shape_gable:"Due falde",roof_shape_hip:"Padiglione",roof_shape_pent:"Una falda",roof_shape_flat:"Piano",roof_axis_x:"Colmo \u2194",roof_axis_z:"Colmo \u2195",roof_eave:"Quota gronda (m)",roof_pitch_short:"Pendenza (\xB0)",roof_height:"Altezza (m)",roof_base:"Sommit\xE0 muri (m)",roof_ridge_height:"Altezza colmo",roof_side_top:"superiore",roof_side_bottom:"inferiore",roof_side_left:"sinistra",roof_side_right:"destra",roof_swap:"Scambia lati",roof_open:"Tettoia (pilastri al posto dei muri)",roof_open_short:"Tettoia",roof_open_hint:"Per terrazze e posti auto coperti: pilastri e travi sostengono il tetto lasciando la vista aperta. Dove incontra il muro della casa, la tettoia si appoggia al muro.",roof_swap_hint:"Scambia gronda e pendenza dei due lati; un tetto a una falda sale nell'altro verso.",roof_pitch:"Pendenza tetto (\xB0)",roof_overhang:"Sporgenza tetto (m)",roof_ridge:"Colmo",roof_ridge_long:"Lungo il lato maggiore",roof_ridge_short:"Lungo il lato minore (es. casa a schiera)",device:"Dispositivo",lamp_mount:"Lampada",lamp_ceiling:"Plafoniera",lamp_floor:"Piantana",lamp_table:"Lampada da tavolo",lamp_wall:"Applique",marker_height:"Altezza indicatore (m)",height_auto:"Altezza automatica",device_centre:"Al centro della stanza",lights_spread:"Distribuisci uniformemente le luci a soffitto",devices_search:"Cerca dispositivi \u2026",devices_more:"Altri {n}",devices_less:"Meno",panel_more:"Altri dispositivi dell'area ({n})",panel_less:"Mostra meno",gaps_close:"Chiudi spazi",gaps_hint:"Unisce stanze distanti fino a 60 cm lungo un muro condiviso. Lo spazio diventa lo spessore del muro interno.",gaps_none:"Nessuno spazio tra le stanze trovato.",gaps_closed:"Chiusi {n} spazi.",gaps_closed_wall:"Chiusi {n} spazi. Spessore muro interno: {t} m.",fps:"FPS",fps_title:"Prestazioni (fotogrammi al secondo)",hint_garage:"Clicca su un muro per aggiungere un portone garage",opening_garage:"Portone garage",garage_hint:"Il portone segue l'entit\xE0 del garage (posizione o aperto/chiuso) o il contatto porta dell'area.",door_hint:"Con un contatto porta l'anta segue l'apertura; senza sensore rimane socchiusa.",hint_door:"Clicca su un muro per aggiungere una porta",hint_window:"Clicca su un muro per aggiungere una finestra",opening_door:"Porta",opening_window:"Finestra",opening_type:"Tipo",opening_position:"Centro dall'angolo (m)",sill:"Altezza davanzale (m)",opening_height:"Altezza (m)",hinge:"Cerniere (vista dalla stanza)",hinge_left:"Sinistra",hinge_right:"Destra",cover_entity:"Tapparella",cover_position_entity:"Sensore posizione (dal vivo)",cover_position_invert:"Sensore invertito (0 = aperto)",contact_entity:"Contatto",sensor_kind:"Tipo sensore",sensor_kind_contact:"Contatto finestra (aperto/chiuso)",sensor_kind_handle:"Sensore maniglia (aperto/ribalta/chiuso)",sensor_kind_contact_tilt:"Contatto + sensore ribalta",handle_entity:"Sensore maniglia",handle_main:"Sensore maniglia anta principale",leaf_main:"Anta principale",leaf_second:"Seconda anta",tilt_entity:"Sensore ribalta",entity_auto:"Automatico ({name})",entity_auto_none:"Automatico (nessuno trovato)",entity_none:"Nessuno",entity_search:"Scrivi per cercare \u2026",opening_hint:"Scegli contatto finestra (aperto/chiuso), sensore maniglia (aperto/ribalta/chiuso) o contatto con sensore ribalta separato. La scelta automatica usa tapparelle e contatti dell'area. Il sensore posizione comunica la posizione della tapparella mentre si muove (0\u2013100 % o 0\u20131, aperto = valore alto) per animarla in 3D.",furniture:"Arredamento",furniture_add:"Aggiungi mobile",furniture_search:"Cerca arredamento \u2026",furniture_type:"Elemento",rotation:"Rotazione (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altezza (m)",furn_sofa:"Divano",furn_armchair:"Poltrona",furn_table:"Tavolo",furn_chair:"Sedia",furn_bed:"Letto",furn_nightstand:"Comodino",furn_wardrobe:"Armadio",furn_shelf:"Scaffale",furn_kitchen:"Base cucina",furn_worktop:"Piano di lavoro",furn_fridge:"Frigorifero",furn_fridge_smart:"Frigorifero smart a due porte",furn_door_left:"Sensore porta sinistra (congelatore)",furn_door_right:"Sensore porta destra (frigorifero)",fridge_hint:"Quando il sensore segnala apertura, la porta si apre in 3D. Lo schermo sulla porta destra mostra immagini secondo le regole, come una TV, mentre la porta \xE8 chiusa.",furn_stove:"Piano cottura",furn_sink:"Lavello",furn_bathtub:"Vasca",furn_shower:"Doccia",furn_wc:"WC",furn_washbasin:"Lavabo",furn_desk:"Scrivania",furn_tv_board:"Mobile TV",furn_plant:"Pianta",furn_rug:"Tappeto",furn_stairs:"Scale",furn_stairwell:"Apertura nel solaio",stairwell_hint:"Apertura in questo piano, per esempio sopra le scale o un soppalco. Deve stare dentro una stanza; pi\xF9 aperture possono sovrapporsi per formare una L. Le scale del piano inferiore che raggiungono questo piano creano l'apertura automaticamente.",tool_hole:"Apertura solaio",tool_roof:"Tetto",tool_energy:"Energia",tool_wall:"Muro",hint_wall:"Trascina per disegnare un muro divisorio \xB7 Maiusc lo mantiene dritto \xB7 Alt disattiva l'aggancio",free_wall:"Muro",wall_length:"Lunghezza (m)",wall_thickness:"Spessore muro (m)",wall_height:"Altezza (m)",wall_height_full:"Altezza intera della stanza",wall_none:"Nessuna parete",wall_none_hint:"Togli del tutto questa parete: per planimetrie aperte le cui stanze sono un unico spazio ma separate in Home Assistant.",wall_heights:"Altezze muri",wall_n:"Muro {a}\u2013{b}",wall_exterior_short:"muro esterno",room_wall_hint:"Un'altezza ridotta crea un parapetto o un bancone. Per muri condivisi vale l'altezza minore. Porte e finestre terminano all'altezza del muro.",free_wall_hint:"Muro indipendente, per esempio un divisorio. L'incontro con un muro della stanza viene raccordato. Trascina le estremit\xE0 per modificarle o la linea per spostare tutto il muro.",stairwell_outside:"L'apertura supera il confine della stanza e non viene ritagliata. Spostala completamente dentro una stanza o riducila.",hint_hole:"Trascina per disegnare un'apertura nel solaio (scale, soppalco)",hint_roof:"Trascina per disegnare una sezione del tetto \xB7 clicca per selezionare \xB7 trascina per spostare \xB7 angoli per ridimensionare",hint_energy:"Seleziona e trascina un campo fotovoltaico, anche su un'altra falda \xB7 aggiungi campi con + Campo fotovoltaico a destra",furn_parking:"Posto auto",furn_group_vehicles:"Parcheggio",parking_entity:"Sensore \xABauto presente\xBB",parking_vehicle:"Veicolo",parking_vehicle_none:"Nessuno",parking_no_pack:"Nessun pacchetto veicoli importato. I veicoli provengono dal pacchetto \xABVehicles\xBB (Arredamento \u2192 Importa pacchetti).",parking_scale:"Dimensione (%)",parking_type_entity:"Sensore tipo veicolo (facoltativo)",parking_types:"Stato \u2192 veicolo",parking_type_state:"Stato (es. furgone)",parking_add_type:"+ Associazione",parking_hint:"Senza sensore il veicolo \xE8 sempre presente. Con un sensore appare con gli stati \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensore tipo veicolo seleziona il modello associato allo stato, anche se contenuto nel testo; altrimenti viene mostrato il modello predefinito.",parking_too_tall:"Il veicolo ({car} m) \xE8 pi\xF9 alto della stanza ({room} m).",furn_lamp_ceiling:"Plafoniera",furn_lamp_downlight:"Faretto da incasso",furn_lamp_spot:"Faretto a superficie",furn_lamp_panel:"Pannello LED",furn_lamp_uplight:"Piantana a luce indiretta",furn_lamp_bollard:"Paletto luminoso",furn_lamp_garden:"Faretto da giardino",furn_radiator:"Radiatore",furn_robot_vacuum:"Robot aspirapolvere",furn_entity_vacuum:"Robot aspirapolvere",furn_robot_room:"Stanza attuale (sensore)",robot_hint:"Durante la pulizia il robot percorre traiettorie simulate nella stanza indicata dal sensore \xABstanza attuale\xBB, abbinata per nome, oppure nella stanza della base. Home Assistant normalmente non conosce la posizione esatta. Al ritorno il robot rientra alla base.",furn_lamp_pendant:"Lampada a sospensione",furn_lamp_floor:"Piantana",furn_lamp_table:"Lampada da tavolo",furn_lamp_wall:"Applique",furn_led_strip:"Striscia LED",furn_group_lights:"Luci",furn_entity_light:"Luce o interruttore",furn_entity_climate:"Riscaldamento (termostato)",lamp_hint:"Tocca la lampada in 3D per azionarla; tieni premuto per il menu rapido. Funzionano anche gli interruttori, ad esempio un rel\xE8. Le lampade da tavolo si appoggiano sul mobile sottostante.",lamp_hint_pendant:"Altezza = distanza sotto il soffitto. Tocca in 3D per azionare; tieni premuto per i dettagli.",theme:"Aspetto",theme_neon:"Neon",theme_blueprint:"Disegno tecnico",theme_day:"Giorno",furnish:"Arreda",split_3d:"3D affiancato",mount_height:"Altezza dal pavimento (m)",side_open:"Apri pannello laterale",side_close:"Chiudi",side_details:"Dettagli della selezione",side_pin:"Fissa",side_pinned:"Fissato",side_pin_hint:"Se fissato, il pannello rimane aperto; altrimenti si chiude accanto al 3D quando non \xE8 selezionato nulla",split_3d_hint:"Vista 3D in tempo reale accanto alla pianta: trascina e ruota mobili e dispositivi, con annullamento e salvataggio nella pianta",size_w:"Larghezza (m)",size_d:"Profondit\xE0 (m)",size_h:"Altezza (m)",furnish_hint:"Trascina mobili, lampade e dispositivi \xB7 i mobili si agganciano ai muri \xB7 seleziona per ruotare e regolare altezza e montaggio",done:"Fatto",heatmap:"Mappa dei valori",heat_off:"Normale",heat_short_temperature:"Temp.",heat_short_humidity:"Umidit\xE0",heat_short_co2:"CO\u2082",heat_temperature:"Temperatura",heat_humidity:"Umidit\xE0",heat_co2:"CO\u2082",heat_none_found:"Nessun sensore adatto nelle aree delle stanze.",markers:"Indicatori",markers_none:"Nessuno",markers_important:"Importanti",markers_all:"Tutti",furn_stool:"Sgabello",furn_coffee_table:"Tavolino",furn_tv_wall:"TV a parete",furn_sideboard:"Credenza",furn_table_round:"Tavolo rotondo",furn_bench:"Panca",furn_corner_bench:"Panca angolare",furn_bar_stool:"Sgabello da bar",furn_kitchen_wall:"Pensile",furn_kitchen_tall:"Colonna forno",furn_island:"Isola cucina",furn_dishwasher:"Lavastoviglie",furn_bunk_bed:"Letto a castello",furn_dresser:"Cassettiera",furn_washer:"Lavatrice",furn_dryer:"Asciugatrice",furn_office_chair:"Sedia da ufficio",furn_tall_cabinet:"Mobile alto",furn_coat_rack:"Appendiabiti",furn_group_living:"Soggiorno",furn_group_dining:"Sala da pranzo",furn_group_energy:"Energia e fotovoltaico",energy_devices:"Dispositivi",solar_pro_title:"Fotovoltaico ed Energia Pro",solar_pro_soon:"prossimamente",solar_pro_1:"Moduli che si animano al sole e si illuminano in base alla produzione",solar_pro_2:"Linee dei flussi energetici nella casa: provenienza e destinazione dell'energia",solar_pro_3:"Ologramma trasparente con potenza, curva giornaliera, produzione e autosufficienza",solar_pro_4:"Valori delle stringhe, batteria, wallbox e rete a colpo d'occhio",solar_pro_free:"Tutto ci\xF2 che configuri qui (campi, stringhe, dispositivi e sensori) rimane gratuito e viene utilizzato direttamente dall'extra Pro.",wallbox_charging:"in carica",wallbox_plugged:"collegata",furn_soc:"Stato di carica (%)",furn_wallbox_status:"Stato (in carica, collegata)",energy_only_note:"\u26A1 Energia: qui puoi spostare solo campi fotovoltaici e dispositivi energetici. Stanze e mobili sono bloccati.",roof_only_note:"\u{1F3E0} Tetto: qui puoi spostare solo sezioni del tetto e lucernari. Stanze e mobili sono bloccati.",energy_devices_hint:"Aggiungi inverter, batterie domestiche e wallbox sul piano selezionato. Puoi spostarli nella pianta. Il sensore di potenza mostra i watt; ogni stringa pu\xF2 essere associata a un inverter.",solar_fields:"Campi fotovoltaici",solar_hint:"Posiziona i moduli sul tetto: seguono la pendenza della falda; sui tetti piani sono montati su supporti. Trascina un campo per spostarlo.",solar_no_roof:"Serve un tetto: piano o a due falde nelle Impostazioni, oppure sezioni nello strumento Tetto.",solar_face_gone:"falda mancante",solar_summary:"{n} moduli \xB7 {kwp} kWp",solar_add:"Campo fotovoltaico",solar_field:"Campo fotovoltaico",solar_face:"Falda del tetto",solar_rows:"Righe",solar_cols:"Moduli per riga",solar_portrait:"Verticale",solar_landscape:"Orizzontale",solar_u:"Distanza dal bordo (m)",solar_v:"Distanza dalla gronda (m)",solar_tilt:"Inclinazione supporti (\xB0)",solar_flip:"Inclina nell'altro verso",solar_partial:"sulla falda entrano solo {n} moduli su {total}",solar_form_hint:"I moduli oltre il bordo della falda vengono esclusi. \xABRiempi falda\xBB ne inserisce il massimo possibile. Il calcolo dei kWp considera 400 W per modulo.",solar_fit:"Riempi falda",roof_windows:"Lucernari",roof_window:"Lucernario",roof_windows_hint:"I lucernari seguono la falda, con tapparella e contatti come le finestre. Trascinali nella pianta, anche su un'altra falda.",roof_window_tilt:"Contatto ribalta",roof_window_hint:"L'anta aperta ruota verso l'esterno con cerniere in alto; in ribalta si apre leggermente. La tapparella scende dall'alto sul vetro.",solar_ground:"Indipendente (giardino, tetto garage \u2026)",solar_add_ground:"Indipendente",solar_base:"Quota superficie (m, 0 = suolo)",solar_add_wall:"Su un muro",solar_wall:"Muro",solar_v_wall:"Altezza dal pavimento (m)",solar_tilt_wall:"Inclinazione dal muro (\xB0, 90 = pensilina)",solar_flip_wall:"Distanzia la parte inferiore anzich\xE9 quella superiore",solar_rotation:"Rotazione (\xB0)",solar_name:"Nome",solar_name_hint:"es. stringa 1 sud",solar_module_w:"Larghezza modulo (m)",solar_module_h:"Altezza modulo (m)",solar_string:"Stringa",solar_strings:"Stringhe",solar_string_none:"Nessuna stringa",solar_string_new:"Nuova stringa",solar_string_n:"Stringa {n}",solar_string_name:"Nome stringa",solar_string_entity:"Potenza FV della stringa",solar_string_inverter:"Inverter",solar_string_inverter_none:"Nessun inverter selezionato",solar_string_inverter_missing:"Nessun inverter nella pianta: aggiungilo sotto, in Dispositivi",solar_string_hint:"I campi della stessa stringa sono associati anche su tetti diversi. Sensore e inverter si riferiscono all'intera stringa.",solar_string_sum:"{fields} campi \xB7 {n} moduli \xB7 {kwp} kWp",solar_face_size:"Falda {w} \xD7 {h} m (lungo la gronda \xD7 lungo la pendenza)",solar_cols_hint:"Un numero per righe uguali oppure un elenco, ad esempio \xAB4, 4, 3\xBB, partendo dalla gronda.",solar_align_left:"Sinistra",solar_align_center:"Centro",solar_align_right:"Destra",solar_look_black:"Nero integrale",solar_look_blue:"Blu",solar_pick:"Attiva/disattiva singoli moduli",solar_pick_all:"Riattiva tutti",solar_pick_hint:"Clicca un modulo nella pianta per rimuoverlo o reinserirlo. Quelli rimossi sono tratteggiati.",solar_entity:"Potenza FV di questo campo (es. della sua stringa)",solar_main:"Tetto principale",solar_section:"Sezione {n}",solar_flat:"tetto piano",compass_n:"nord",compass_ne:"nord-est",compass_e:"est",compass_se:"sud-est",compass_s:"sud",compass_sw:"sud-ovest",compass_w:"ovest",compass_nw:"nord-ovest",furn_meter:"Contatore elettrico",furn_grid_point:"Allacciamento alla rete",grid_point_hint:"Qui finisce il cavo della rete: al punto di consegna del gestore, es. in fondo all'ingresso auto. Spostabile nel piano; senza allacciamento il cavo finisce al bordo delle aree esterne.",furn_model:"Modello",inverter_std:"Standard (apparecchio a parete con display)",inverter_slim:"Stretto e alto (striscia luminosa)",inverter_hybrid:"Ibrido (quadrante rotondo, ventole)",battery_std:"Torre (moduli impilati)",battery_wall:"Batteria a parete (piatta, appesa)",battery_cube:"Compatta (batteria da balcone)",furn_inverter:"Inverter fotovoltaico",furn_home_battery:"Batteria domestica",furn_wallbox:"Wallbox",furn_group_kitchen:"Cucina",furn_group_sleeping:"Camera da letto",furn_group_bath:"Bagno e lavanderia",furn_group_work:"Lavoro e altro",furn_entity:"Dispositivo (interruttore, presa \u2026)",furn_entity_tv:"TV (lettore multimediale o presa smart)",fix:"Blocca",unfix:"Sblocca",fix_hint:"Bloccato: evita spostamenti accidentali (tasto L, clic destro o pressione prolungata)",fixed_drag_hint:"\u{1F512} Bloccato: sbloccalo prima di spostarlo (lucchetto nel pannello, clic destro o tasto L)",fixed_delete_confirm:"Questo elemento \xE8 bloccato. Eliminarlo comunque?",lock_plan:"\u{1F512} Pianta",lock_plan_hint:"Blocca stanze, muri, porte, finestre e aree esterne per evitare spostamenti accidentali. Mobili e dispositivi rimangono liberi.",start_view:"Vista iniziale",start_view_hint:"La vista 3D, la card e il chiosco aprono la casa con questa vista, es. dal lato giardino. Ruota e zooma la casa nella vista 3D a destra finch\xE9 va bene, poi memorizzala.",start_view_set:"Memorizza la vista 3D attuale come iniziale",start_view_reset:"Predefinita",start_view_saved:"\xC8 salvata una vista iniziale personalizzata.",ctx_rotate:"Ruota di 90\xB0",devices_placed_in:"in {room}",devices_narrow:"Altri {n}: restringi la ricerca",climate:"Clima della stanza",climate_temperature:"Temperatura",climate_humidity:"Umidit\xE0",climate_co2:"CO\u2082",climate_hint:"Sensori usati nella mappa dei valori e nel pannello stanza. \xABAutomatico\xBB usa quelli dell'area e quelli posizionati nella stanza, escludendo le temperature dei dispositivi (stampante 3D, pompa di calore, mandata \u2026).",plan_locked:"Pianta bloccata",plan_lock:"Blocca pianta",plan_unlock:"Sblocca pianta",opening_mark:"Evidenzia in 3D",opening_mark_open:"Quando aperto",opening_mark_closed:"Quando chiuso (es. WC)",opening_mark_hint:"La porta o finestra evidenziata emette una luce calda. \xABQuando chiuso\xBB richiede un contatto; senza sensore non viene evidenziata.",marker_show:"Indicatore in 3D",marker_show_hint:"Automatico segue la scelta Nessuno / Importanti / Tutti. Mostra sempre e Nascondi prevalgono, tranne quando \xE8 selezionato Nessuno.",marker_show_auto:"Automatico",marker_show_always:"Mostra sempre",marker_show_no_power:"Senza watt",marker_show_never:"Nascondi",furn_power:"Sensore potenza (W)",furn_links_hint:"Con un sensore di potenza l'elemento mostra i watt e un collegamento energetico.",screen_pictures:"Immagini in base allo stato",screen_pictures_hint:"Confronta lo stato o un attributo dell'entit\xE0, ad esempio app_name della TV. Un valore corrisponde se \xE8 uguale o contenuto nel testo; \xAB*\xBB significa sempre. Vale la prima regola corrispondente. Le immagini vengono ridotte a 512 px. Puoi usare anche un URL o una telecamera, aggiornata ogni 5 secondi quando visibile. Senza corrispondenze viene mostrato il lettore multimediale.",picture_state:"\xE8 o contiene \u2026 (es. netflix)",picture_state_of:"Stato",picture_attribute:"Confronta stato o attributo",picture_pick:"Scegli immagine \u2026",picture_change:"Cambia immagine \u2026",picture_url:"oppure URL immagine",picture_add_value:"+ Valore",picture_reuse:"Usa un'immagine salvata",picture_camera:"oppure una telecamera (immagine dal vivo) \u2026",picture_camera_none:"Nessuna telecamera",screen_bg:"Sfondo dietro l'immagine",screen_bg_black:"Scuro",screen_bg_white:"Bianco",picture_add_entity:"+ Altra entit\xE0",picture_current:"ora: {value}",picture_matches:"\u2713 corrisponde: questa immagine \xE8 visibile",furn_links_hint_tv:"Lo schermo si illumina quando la TV \xE8 accesa, con il colore dell'app (Netflix, YouTube \u2026). L'etichetta mostra app o titolo.",stairs_hint:"La scala sale verso il retro, allontanandosi dal bordo anteriore segnato, e apre il solaio del piano superiore.",floor_lights:"Luci accese: {n}",floor_open:"{n} aperti",floor_persons:"{n} persone",energy_consumption:"Consumo",energy_grid_import:"Prelievo dalla rete",energy_grid_export:"Immissione in rete",energy_solar:"Fotovoltaico",energy_battery:"Batteria",energy_tariff:"Tariffa",energy:"Energia",energy_meter:"Contatore",energy_grid:"Rete (W, + = prelievo)",energy_solar_sensor:"Produzione fotovoltaica (W)",energy_battery_sensor:"Potenza batteria (W, + = scarica)",energy_battery_soc:"Carica batteria (%)",energy_tariff_sensor:"Tariffa (es. \u20AC/kWh)",energy_invert:"Inverti segno",energy_hint:"Le utenze sono dispositivi posizionati con un sensore di potenza in W, proprio o dello stesso dispositivo.",energy_balance:"Bilancio energetico",energy_balance_hint:"Rete, solare e batteria vengono dai dispositivi nel piano: contatore, inverter e batteria domestica. Qui puoi scegliere altri sensori, invertire i segni e impostare il consumo della casa.",energy_consumption_sensor:"Consumo della casa (W, altrimenti dal bilancio)",energy_import_prefs:"Prendi dal dashboard Energia",energy_import_done:"{n} sensori acquisiti: controlla i segni.",energy_import_none:"Nessun sensore di potenza (W) adatto trovato nel dashboard Energia: scegli a mano.",energy_import_failed:"Il dashboard Energia di Home Assistant non \xE8 configurato.",tool_meter:"Contatore",hint_meter:"Clicca sulla posizione del contatore",presence:"Presenza",presence_hint:"Sensore stanza per persona (es. ESPresense, Bermuda): lo stato indica il nome della stanza o dell'area.",presence_sensor:"Sensore stanza",no_persons:"Non ci sono persone in Home Assistant."};function Ft(r,t,e={}){let n=Dr[t]??t;for(let[i,o]of Object.entries(e))n=n.replaceAll(`{${i}}`,String(o));return n}function j(r,t,e=2){return t.toLocaleString(r?.language??"it-IT",{maximumFractionDigits:e})}var Wr={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function _e(r){return Wr[r]}var jt=lt`
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
`,Ke=lt`
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
`;var ii=40,oi=class extends st{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>a.includes(l))},i=this.fixed.filter(s=>!t||n(s)),o=t?this.options.filter(n):this.options;return[...i,...o.slice(0,ii)]}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return b`<div class="wrap">
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
      ${this._open?b`<ul class="list" role="listbox">
            ${e.length?$:b`<li class="empty">–</li>`}
            ${e.map((n,i)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:$}
              </li>`)}
            ${this._query&&this.options.length>ii&&e.length>=ii?b`<li class="empty">…</li>`:$}
          </ul>`:$}
    </div>`}static styles=[jt,lt`
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
    `]};customElements.get("nc3d-entity-picker")||customElements.define("nc3d-entity-picker",oi);var Nr=new URL(import.meta.url),Br=new URL("./neoncasa3d-3d.js?v=8e14db62ecf4",Nr).href,vs;function ys(){return vs??=import(Br),vs}function be(r,t){if(!hn(t))return Ft(r,`furn_${t}`);let e=it(t);return e?Ot(e,"it"):Ft(r,"pack_missing_item")}var si=class extends st{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(t,e){return Ft(this.hass,t,e)}render(){let t=Nn(this.packs??[]);return b`<div class="nc3d-ext">
      <header class="nc3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nc3d-sub">${this.t("ext_intro")}</p>
        <div class="nc3d-ext-actions">
          <a class="nc3d-btn nc3d-primary" href=${se(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="nc3d-btn" href=${re(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderOffers()} ${this.renderShop()}
      <section class="nc3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nc3d-ext-pro">
          ${Wn.map(e=>b`<div class="nc3d-ext-feature ${t.has(e)?"nc3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="nc3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="nc3d-ext-links">
                ${t.has(e)?b`<span class="nc3d-ext-state">${this.t("ext_active")}</span>`:b`<a class="nc3d-ext-link" href=${se(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="nc3d-ext-link" href=${re(this.hass?.language,e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await cn(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(t,e,n){this._licenseBusy=t,this._licenseMsg=null;try{this._license=await e(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:o,message:s}=i??{},a=`license_error_${o}`,l=this.t(a);this._licenseMsg={ok:!1,text:l===a?this.t("license_error_other",{detail:s??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(t){if(!this.hass)return;let e=this.hass;await this.shopCall(t.id,async()=>{let n=await Di(e,t.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),cn(e)})}renderUpdates(){let t=this._license;return t?.active?(this.freshUpdates||(this.freshUpdates=Ri(t.updates??[]),Oi(t.updates??[])),this.freshUpdates.length?b`<section class="nc3d-ext-card nc3d-updates">
      ${this.freshUpdates.map(e=>b`<p>✨ ${e.added>0?this.t("pack_updated_added",{name:e.name,release:e.release,n:e.added}):this.t("pack_updated",{name:e.name,release:e.release})}</p>`)}
    </section>`:$):$}renderOffers(){let t=this._license;if(!t?.active)return $;let e=[...t.offers??[]].sort((i,o)=>Number(o.new)-Number(i.new)),n=t.loyalty??null;return!e.length&&!n?$:(Fi(e),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),b`<section class="nc3d-ext-card nc3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?b`<div class="nc3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="nc3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:$}
      <div class="nc3d-offer-grid">
        ${e.map(i=>b`<a class="nc3d-offer" href=${Li(i.url,n)} target="_blank" rel="noopener">
            ${i.image?b`<img src=${i.image} alt="" loading="lazy" />`:b`<div class="nc3d-offer-ph">✦</div>`}
            <div class="nc3d-offer-body">
              <b>${i.name}</b>
              ${i.new?b`<span class="nc3d-offer-new">${this.t("offers_new")}</span>`:$}
              <span class="nc3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?b`<span class="nc3d-sub">${i.teaser}</span>`:$}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let t=this._license;if(!this.isAdmin||!this.hass)return $;if(!t)return this.loadLicense(),$;let e=this.hass,n=this._licenseBusy,i=t.checked_at?new Date(t.checked_at*1e3).toLocaleString(e.language):null;return b`<div class="nc3d-shop nc3d-ext-card">
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
      ${t.active?b`<div class="nc3d-shop-row">
              <span>${this.t("license_active",{name:t.licensee??"",key:t.key_hint??""})}</span>
              ${i?b`<span class="nc3d-sub">${this.t("license_checked",{time:i})}</span>`:$}
              <button class="nc3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>Ti(e),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="nc3d-btn nc3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>Ci(e))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${t.error?b`<p class="nc3d-sub nc3d-pack-error">${this.t(`license_error_${t.error}`)}</p>`:$}
            ${t.packs.length?t.packs.map(o=>{let s=o.installed===null?"install":o.installed<o.release?"update":"installed";return b`<div class="nc3d-pack">
                    <div>
                      <b>${o.name}</b>
                      <span class="nc3d-sub">${s==="installed"?this.t("license_installed",{release:o.release}):s==="update"?this.t("license_update_available",{release:o.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${s==="installed"?$:b`<button class="nc3d-btn nc3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(o)}>
                          ${n===o.id?"\u2026":this.t(s==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):b`<p class="nc3d-sub">${this.t("license_none")}</p>`}`:b`<div class="nc3d-shop-row">
            <input
              type="text"
              class="nc3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${o=>this._licenseKey=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>dn(e,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="nc3d-btn nc3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>dn(e,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?b`<p class="nc3d-sub ${this._licenseMsg.ok?"nc3d-notice":"nc3d-pack-error"}">${this._licenseMsg.text}</p>`:$}
      <p class="nc3d-sub">${this.t("license_hint")} <a href=${t.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let t=this.packs??[];return b`<section class="nc3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>b`<div class="nc3d-pack">
          <div>
            <b>${e.name}</b>
            <span class="nc3d-sub">${e.features?.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?b`<span class="nc3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:$}
          </div>
          <button class="nc3d-btn nc3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="nc3d-btn nc3d-primary nc3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?b`<p class="nc3d-sub ${this._packMsg.ok?"nc3d-notice":"nc3d-pack-error"}">${this._packMsg.text}</p>`:$}
      <p class="nc3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],o=[];for(let a of n)try{let l=await Ei(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},u=`pack_error_${c}`,f=this.t(u,{detail:d??String(l)});o.push(`${a.name}: ${f===u?this.t("pack_error_other",{detail:d??String(l)}):f}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:t.name}))||(await Ai(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[jt,Ke,lt`
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
    `]};customElements.get("nc3d-extensions")||customElements.define("nc3d-extensions",si);var $s=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","outvertex","solarmove","solarturn","cablept"]),xs=100,qe=10,M=r=>Math.round(r*1e3)/1e3,ws={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},ri=class extends st{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neoncasa3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._floorMenu=!1,this._openingPreset="door";let t=!1;try{t=localStorage.getItem("neoncasa3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neoncasa3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neoncasa3d.sidePinned")!=="0"}catch{}this._sidePinned=e,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return Ft(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("packs")&&Ni(this.packs??[]),t.has("_doc")&&this._split&&this.queue3d(),t.has("_split")&&this._split&&(this._doc3d=this._doc),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".nc3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neoncasa3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neoncasa3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){let{id:e,x:n,z:i}=t.detail,o=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(f=>f.id===e);if(!l)continue;let[c,d]=Dn(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let u=Le(a,l,o);u&&Object.assign(l,u)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(o=>{for(let s of o.floors){let a=s.placements.find(d=>d.entity_id===e);if(!a)continue;let[l,c]=Dn(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return $;let t=this.furnitureItem,e=this.device;if(t){let n=vn(t),i=(o,s,a=.05)=>b`<label class="nc3d-3d-size" title=${this.t(`size_${o}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(t[o]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[o]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return b`<div class="nc3d-3d-bar">
        <span>${be(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?b`<label class="nc3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((t.mount_y??mn(this.floor,t))*100)/100)}
                @change=${o=>{let s=parseFloat(o.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:$}
        <button class="nc3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nc3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let n=B(e.entity_id),i=n==="light",o=n?Rn(n,this.floor?.height??2.5,i?e.mount??"ceiling":null):1;return b`<div class="nc3d-3d-bar">
        <span>${J(this.hass,e.entity_id)}</span>
        ${i?b`<select class="nc3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>b`<option value=${s} ?selected=${s===(e.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:$}
        <label class="nc3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((e.y??o)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="nc3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nc3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return $}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t?.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=G(e),i=null,o=(a,l,c,d,u=!1)=>{if(!c||u)return;let f=Jn(c,t.o,t.d);!f||!os(c,d,f.u,f.s)||i&&i.t<=f.t||(i={id:a,win:l,t:f.t,du:f.u-d.u,ds:f.s-d.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])o(a.id,!1,ot(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,Bt(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?n.settings.roof.windows?.find(g=>g.id===e.id):void 0,o=e.win?i?Bt(i):void 0:n.settings.roof.solar?.find(g=>g.id===e.id);if(!o)return;let s=ot(n,o),a=s?.unbounded?[s]:e.win?G(n):[...G(n),...ht(n)],l=null;for(let g of a){let _=Jn(g,t.o,t.d);_&&is(g,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:g,..._})}if(!l)return;let c=l.face,d=.05,u=g=>M(Math.round(g/d)*d),f=he(c,{...o,face:c.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:c.flat?o.tilt??15:o.tilt});e.moved=!0,this.change(g=>{if(e.win){let h=g.settings.roof.windows?.find(v=>v.id===e.id);h&&Object.assign(h,{face:c.key,...f});return}let _=g.settings.roof.solar?.find(h=>h.id===e.id);_&&Object.assign(_,{face:c.key,...f},c.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="nc3d-editor-3d">
      ${this.houseTool?$:b`<div class="nc3d-seg nc3d-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?Mt:this._tool==="roof"?[]:null}
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
    </div>`}updated(){this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nc3d-view3d")?.resetView(),250));let t=this.floor?.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),this.furnitureItem?.pictures)for(let e of this.storedPictures())!this._images[e]&&!this.loadingImages.has(e)&&this.loadImage(e)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>xs&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(t(i,o),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:o}=this._view;return[(t-i)/n,(e-o)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?rt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,o=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s}}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:i,ox:o,oy:s}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-o)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=qe/this._view.scale,o=this.floor?.rooms??[],s=[];for(let _ of o)_.points.forEach((h,v)=>{e&&_.id===e.roomId&&(e.index===void 0||e.index===v)||s.push(h)});let a=null,l=i;for(let _ of s){let h=Math.hypot(_[0]-t[0],_[1]-t[1]);h<l&&(l=h,a=_)}if(a)return this._guides={point:a},[a[0],a[1]];for(let _ of o)if(!(e&&_.id===e.roomId))for(let h=0;h<_.points.length;h++){let v=_.points[h],y=_.points[(h+1)%_.points.length],p=y[0]-v[0],m=y[1]-v[1],x=p*p+m*m;if(x<1e-9)continue;let w=((t[0]-v[0])*p+(t[1]-v[1])*m)/x;if(w<=0||w>=1)continue;let S=[v[0]+w*p,v[1]+w*m],I=Math.hypot(S[0]-t[0],S[1]-t[1]),E=this._doc.settings.grid;Math.abs(m)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/E)*E,Math.min(v[0],y[0])),Math.max(v[0],y[0]))),Math.abs(p)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/E)*E,Math.min(v[1],y[1])),Math.max(v[1],y[1]))),I<l&&(l=I,a=S)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let c=this._doc.settings.grid,d=[M(Math.round(t[0]/c)*c),M(Math.round(t[1]/c)*c)],u=i,f=i,g={};for(let _ of s)Math.abs(_[0]-t[0])<u&&(u=Math.abs(_[0]-t[0]),d[0]=_[0],g.x=_[0]),Math.abs(_[1]-t[1])<f&&(f=Math.abs(_[1]-t[1]),d[1]=_[1],g.z=_[1]);return this._guides=g,d}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&$s.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=t.target;if(this._tool==="wall"){let m=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:m,end:m};return}if(this._tool==="roof"||this._tool==="energy"){let m=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),x=o.closest("[data-roof]")?.getAttribute("data-roof"),w=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(w){this._solarId=null,this.selectItem("furniture",w),this.drag=this.isAdmin?{kind:"furniture",id:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let k=o.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),z=P=>!!this._doc.settings.roof.cables?.find(O=>O.id===P)?.locked;if(k&&this.isAdmin&&!z(k.slice(0,k.lastIndexOf(":")))){let P=k.lastIndexOf(":"),O=k.slice(0,P),D=Number(k.slice(P+1));if(t.detail>=2){this.change(H=>{let V=H.settings.roof.cables?.find(U=>U.id===O);V&&V.points.length>1&&V.points.splice(D,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:O,index:D,base:this._doc,moved:!1};return}let R=o.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(R&&this.isAdmin&&!z(R)){let P=Number(o.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),O=this._doc;this.change(D=>{let H=D.settings.roof.cables?.find(V=>V.id===R);H&&H.points.splice(P,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:R,index:P,base:O,moved:!0};return}let L=o.closest("[data-cable]")?.getAttribute("data-cable");if(L){if(this._cableId=L,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(P=>P.id===L)){let P=this._doc;this.layCable(L);let O=this._doc.settings.roof.cables?.find(H=>H.id===L),D=this.cableSegments().filter(H=>H.key===L);if(O&&D.length){let H=[[D[0].a[0],D[0].a[2]],...O.points,[D[D.length-1].b[0],D[D.length-1].b[2]]],V=0,U=1/0;for(let C=0;C+1<H.length;C++){let W=jr(i,H[C],H[C+1]);W<U&&(U=W,V=C)}this.change(C=>{let W=C.settings.roof.cables?.find(Y=>Y.id===L);W&&W.points.splice(V,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:L,index:V,base:P,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let S=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,I=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(I&&this.isAdmin){this.drag={kind:"solarturn",id:I,base:this._doc,moved:!1};return}if(S){let k=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&S===this._solarId&&k&&this.isAdmin){this.toggleSolarCell(k),this.drag={kind:"pan",last:n};return}S!==this._solarId&&(this._solarPick=!1),this._solarId=S,this._roofId=null;let z=this._doc.settings.roof.solar?.find(O=>O.id===S),R=z?ot(this._doc,z)??void 0:void 0,L=R?this.faceHit(R,i):null,P=z&&L?{du:L.u-z.u,ds:Number.isNaN(L.s)?0:L.s-z.v}:null;this.drag=this.isAdmin&&!z?.locked?{kind:"solarmove",id:S,start:i,startScreen:n,base:this._doc,moved:!1,grab:P}:{kind:"pan",last:n};return}let E=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(E){this._roofWinId=E,this._roofId=null;let k=this._doc.settings.roof.windows?.find(P=>P.id===E),z=k?G(this._doc).find(P=>P.key===k.face):void 0,R=z?Ne(z,i):null,L=k&&R?{du:R.u-k.u,ds:R.s-k.v}:null;this.drag=this.isAdmin&&!k?.locked?{kind:"solarmove",id:E,start:i,startScreen:n,base:this._doc,moved:!1,grab:L,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let F=this._tool==="energy"?o.closest(".nc3d-energy-item")?.getAttribute("data-furniture"):null;if(F){this._solarId=null,this.selectItem("furniture",F),this.drag=this.isAdmin?{kind:"furniture",id:F,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(m&&this.isAdmin){let[k,z,R]=m.split(":");this.drag={kind:"roofcorner",id:k,corner:[z==="1"?1:0,R==="1"?1:0],base:this._doc,moved:!1}}else if(x){let k=this.roofFixed(this._doc.settings.roof.sections?.find(z=>z.id===x));k&&this._roofId===x&&(this._fixedHint=!0),this._roofId=x,this.drag=this.isAdmin&&!k?{kind:"roofmove",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let k=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:k,end:k,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let m=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:m,end:m,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let s=o.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=o.closest("[data-opening]");if(a){let m=a.getAttribute("data-opening");this.selectItem("opening",m),this.drag=this.isAdmin?{kind:"opening",id:m,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=o.closest("[data-resize]");if(l&&this.isAdmin){let[m,x,w]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:m,corner:[x==="1"?1:-1,w==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=o.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=o.closest("[data-furniture]");if(u&&!o.closest("[data-vertex], [data-mid]")){let m=u.getAttribute("data-furniture");this.selectItem("furniture",m),this.drag=this.isAdmin?{kind:"furniture",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let f=o.closest("[data-vertex]"),g=o.closest("[data-mid]");if(f&&this.room&&this.isAdmin){this._vertex=Number(f.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(g&&this.room&&this.isAdmin){let m=Number(g.getAttribute("data-mid")),x=this.room.points,w=x[m],S=x[(m+1)%x.length],I=[M((w[0]+S[0])/2),M((w[1]+S[1])/2)],E=this._doc,F=this.room.id;this.change((k,z)=>{let R=z.rooms.find(P=>P.id===F);R.points.splice(m+1,0,I),R.wall_heights&&R.wall_heights.splice(m+1,0,R.wall_heights[m]??null);let L=Math.hypot(I[0]-w[0],I[1]-w[1]);for(let P of z.openings)P.room_id!==F||P.wall||(P.edge>m?P.edge+=1:P.edge===m&&P.offset>L&&(P.edge=m+1,P.offset=M(P.offset-L)))},E,!1),this._vertex=m+1,this.drag={kind:"vertex",roomId:F,index:m+1,base:E,moved:!0};return}let _=o.closest("[data-wall-end]");if(_&&this.isAdmin){let[m,x]=_.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:m,end:x,start:i,startScreen:n,base:this._doc,moved:!1};return}let h=o.closest("[data-free-wall]");if(h){let m=h.getAttribute("data-free-wall");this.selectItem("wall",m),this.drag=this.isAdmin?{kind:"wallmove",id:m,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let v=o.closest("[data-out-vertex]");if(v&&this.isAdmin){let[m,x]=v.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:m,index:Number(x),base:this._doc,moved:!1};return}let y=o.closest("[data-outdoor]");if(y&&!o.closest("[data-room]")&&!this.roomAt(i)){let m=y.getAttribute("data-outdoor");this.selectItem("outdoor",m),this.drag=this.isAdmin?{kind:"outdoor",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let p=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(p){p!==this._roomId&&(this._vertex=null),this.selectItem("room",p),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:p,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){if(this.pressStart){let o=this.localPoint(t);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,t.altKey);t.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!o)return;let s;if(i.end){let a=this.snap(n,void 0,t.altKey);s=i.end==="a"?{a,b:o.b}:{a:o.a,b:a}}else{let a=t.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;s={a:[M(o.a[0]+l),M(o.a[1]+c)],b:[M(o.b[0]+l),M(o.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),s),i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!o)return;let s=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>T([c.x,c.z],o.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(f=>f.id===i.roomId);u.points=o.points.map(([f,g])=>[M(f+s[0]),M(g+s[1])]),d.placements=a.placements.map(f=>l.has(f.entity_id)?{...f,x:M(f.x+s[0]),z:M(f.z+s[1])}:f)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=t.altKey?.01:this._doc.settings.grid,s=M(Math.round((n[0]-i.start[0])/o)*o),a=M(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===i.id);d&&Object.assign(d,{x0:M(l.x0+s),x1:M(l.x1+s),z0:M(l.z0+a),z1:M(l.z1+a)})},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(f=>f.id===i.id),s=o?ot(i.base,o):null;if(!o||!s)return;let[a,l]=me(s,o),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=t.altKey?1:15;c=Math.round(c/d)*d;let u=pe(i.base,o,c);this.change(f=>{let g=f.settings.roof.solar?.find(_=>_.id===i.id);g&&Object.assign(g,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(v=>v.id===i.id):void 0,s=i.win?o?Bt(o):void 0:i.base.settings.roof.solar?.find(v=>v.id===i.id),a=i.win?G(i.base):[...G(i.base),...this._floorId?ht(i.base,this._floorId):[]],l=s?ot(i.base,s,a):null;if(!s||!l)return;let c=t.altKey?.01:.05,d=v=>M(Math.round(v/c)*c),u=l.unbounded?null:Zo(a,n),f=l,g,_;if(u&&i.grab)f=u.face,g=d(u.u-i.grab.du),_=Number.isNaN(u.s)?u.face.key===s.face?s.v:Math.max(0,u.face.ls-1.5):d(u.s-i.grab.ds);else{let v=n[0]-i.start[0],y=n[1]-i.start[1],p=[l.es[0],l.es[2]],m=p[0]*p[0]+p[1]*p[1]||1;g=d(s.u+v*l.eu[0]+y*l.eu[2]),_=d(s.v+(v*p[0]+y*p[1])/m)}let h=he(f,{...s,face:f.key,u:g,v:_,tilt:f.flat?s.tilt??15:s.tilt});this.change(v=>{if(i.win){let p=v.settings.roof.windows?.find(m=>m.id===i.id);p&&Object.assign(p,{face:f.key,...h});return}let y=v.settings.roof.solar?.find(p=>p.id===i.id);y&&Object.assign(y,{face:f.key,...h},f.flat&&y.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,t.altKey),s=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!s)return;let a=Ie(s.points);this.change((l,c)=>{let d=c.outdoor.find(_=>_.id===i.id);if(!d)return;let u=s.points.map(_=>[..._]),f=i.index,g=s.points[f];u[f]=[M(o[0]),M(o[1])],a&&s.points.forEach((_,h)=>{h!==f&&(Math.abs(_[0]-g[0])<1e-6&&(u[h][0]=M(o[0])),Math.abs(_[1]-g[1])<1e-6&&(u[h][1]=M(o[1])))}),d.points=u},i.base,!1);break}case"cablept":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change(s=>{let a=s.settings.roof.cables?.find(l=>l.id===i.id);a&&a.points[i.index]&&(a.points[i.index]=[M(o[0]),M(o[1])])},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=M(o[0]):a.x0=M(o[0]),i.corner[1]?a.z1=M(o[1]):a.z0=M(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId),s=o?.openings.find(c=>c.id===i.id),a=s&&o?Vt(s,o.rooms,o.walls??[]):null;if(!s||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,s.width,t.altKey);this.change((c,d)=>Object.assign(d.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!o)return;let s=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((o.x+n[0]-i.start[0])/s)*s),l=M(Math.round((o.z+n[1]-i.start[1])/s)*s),c=o.rotation,d=t.altKey?null:this.snapToWall({...o,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((u,f)=>Object.assign(f.furniture.find(g=>g.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!o)return;let s=t.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(u=>u.id===i.id).points=o.points.map(([u,f])=>[M(u+a),M(f+l)]),i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!o)return;let s=io(o,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=t.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=t.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{rotation:s,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((o.x+n[0]-i.start[0])/s)*s),l=M(Math.round((o.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(t){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&$s.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"freewall":{Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])>=.2&&this.addFreeWall(e.start,e.end),this._guides={};break}case"wallmove":e.moved&&this.pushHistory(e.base),this._guides={};break;case"rect":{let[i,o]=e.start,[s,a]=e.end;if(Math.abs(s-i)>=.2&&Math.abs(a-o)>=.2){let l=[Math.min(i,s),Math.min(o,a)],c=[Math.max(i,s),Math.max(o,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];e.outdoor?this.addOutdoor(d):e.hole?this.addHole(l,c):e.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(e.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"cablept":e.moved&&this.pushHistory(e.base);break;case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>xs&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,o=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=qe/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let c of l.points)for(let d of t.points){let u=Math.hypot(d[0]+e[0]-c[0],d[1]+e[1]-c[1]);u<a&&(a=u,o=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return o}roomAt(t){return(this.floor?.rooms??[]).filter(i=>T(t,i.points)).sort((i,o)=>Ct(i.points)-Ct(o.points))[0]?.id??null}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-e[0],s-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Ct(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=Lt(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,Lt(t,e,"right"),Lt(Lt(t,e,"right"),n,"down"),Lt(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>j(this.hass,a,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${e?b`<p class="nc3d-sub">${this.t("measure_from",{x:s(e[0]),z:s(e[1])})}</p>
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
                ${o.map(([a,l])=>b`<button class="nc3d-btn nc3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?b`<ol class="nc3d-measure-list">
                  ${t.slice(1).map((a,l)=>b`<li>${s(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))} m</li>`)}
                </ol>`:$}
            <div class="nc3d-actions">
              <button class="nc3d-btn nc3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="nc3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?b`<p class="nc3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:$}`:b`<p class="nc3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="nc3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="nc3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="nc3d-btn nc3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="nc3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:N("wall"),a:[M(t[0]),M(t[1])],b:[M(e[0]),M(e[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(t=>t.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return A`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[o,s]=this.toScreen(e.b),a=e.id===this._wallId;return A`<g data-free-wall=${e.id} class=${`nc3d-free-wall${a?" nc3d-free-wall-sel":""}`}>
        <line class="nc3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="nc3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!gn(e,!0,this._doc.settings)?A`<g class="nc3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="nc3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="nc3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${o} cy=${s} r="16" class="nc3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:$}`})}</g>`}renderFreeWallForm(t){let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=o=>{let a=Math.max(.1,o)/(n||1);this.updateFreeWall({b:[M(t.a[0]+(t.b[0]-t.a[0])*a),M(t.a[1]+(t.b[1]-t.a[1])*a)]})};return b`<section>
      <div class="nc3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="nc3d-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,o=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,o))}),.01,.02)}
        ${this.num(this.t("wall_height"),t.height??this.floor?.height??2.5,o=>this.updateFreeWall({height:o>=(this.floor?.height??2.5)-.005?null:Math.max(.05,o)}),.05,.05)}
      </div>
      ${e?b`<div class="nc3d-actions">
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:$}
      <p class="nc3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:N("hole"),type:"stairwell",x:M((t[0]+e[0])/2),z:M((t[1]+e[1])/2),w:M(e[0]-t[0]),d:M(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(t){if(!this.floor)return;let e={id:N("outdoor"),type:"lawn",points:t.map(([n,i])=>[M(n),M(i)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===e),t))}deleteOutdoor(){let t=this._outdoorId;!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t)||(this.change((e,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:N("outdoor"),points:t.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=N("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,a])=>[M(s),M(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(ws,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[o,s]=ws[t.key];this.nudge(o*i,s*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let o=s=>[M(s[0]+t),M(s[1]+e)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(a=>a.entity_id===s))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=o([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=o([c.x,c.z]))})}else if(this._openingId){let s=this.opening,a=s?Vt(s,n.rooms,n.walls??[]):null;if(!s||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=(t*(c[0]-l[0])+e*(c[1]-l[1]))/d;if(Math.abs(u)<1e-9)return!0;let f=Math.min(s.width,d)/2;this.updateOpening({offset:M(Math.min(d-f,Math.max(f,s.offset+u)))})}else if(this._wallId){let s=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[o(c.a),o(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(o))})}else if(this._roomId){let s=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>T([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,u)=>{let f=u.rooms.find(g=>g.id===s);if(a!==null&&a<f.points.length){f.points[a]=o(f.points[a]);return}f.points=f.points.map(o);for(let g of u.placements)c.has(g.entity_id)&&([g.x,g.z]=o([g.x,g.z]))})}else return!1;return!0}get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}unplacedAreas(t){if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===t.ha_floor&&!e.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(t=null){let e=this._doc.floors,n=N("floor"),i=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),o={...Se(n,i,bn(e,t?.level)),ha_floor:t?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(a<0?s.floors.length:a,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=no(t,e,()=>N("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(o=>o.id===t);n.rooms=n.rooms.filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.room_id!==t||o.wall),i&&(n.placements=n.placements.filter(o=>!T([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=N("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,s])=>[M(o+.5),M(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?$:b`<div class="nc3d-seg nc3d-dev-source">
      ${t.map(e=>b`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(t=>t.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=Ko(n,()=>N("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=jo(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),o=n===null,s=M(n??i+2.4),a=o?6:this._doc.settings.roof.pitch||35,l={id:N("roof"),x0:M(t[0]),z0:M(t[1]),x1:M(e[0]),z1:M(e[1]),shape:o?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===e);i&&Object.assign(i,t)})}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:N("roof"),x0:M(t.x0+1),x1:M(t.x1+1),z0:M(t.z0+1),z1:M(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return A`<g class="nc3d-roof-layer">${e.map((n,i)=>{let o=n.id===this._roofId,s=Ht(n),a=de(n),l=[s.at(s.u0,0),s.at(s.u1,0),s.at(s.u1,s.w),s.at(s.u0,s.w)].map(_=>this.toScreen(_)),c=(_,h)=>{let[v,y]=this.toScreen(_),[p,m]=this.toScreen(h);return A`<line x1=${v} y1=${y} x2=${p} y2=${m} />`},d;if(n.shape==="hip"){let _=Math.min((s.u1-s.u0)/2,Math.min(a.vr,s.w-a.vr)||s.w/2),h=s.at(s.u0+_,a.vr),v=s.at(s.u1-_,a.vr);d=A`${c(h,v)}${c(s.at(s.u0,0),h)}${c(s.at(s.u0,s.w),h)}${c(s.at(s.u1,0),v)}${c(s.at(s.u1,s.w),v)}`}else n.shape==="gable"?d=c(s.at(s.u0,a.vr),s.at(s.u1,a.vr)):n.shape==="pent"&&(d=c(s.at(s.u0,s.w),s.at(s.u1,s.w)));let[u,f]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),g=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${j(this.hass,Te(n),1)} m`;return A`<g data-roof=${n.id} class=${`nc3d-roof-sec${o?" nc3d-roof-sel":""}`}>
          <polygon points=${l.map(_=>_.join(",")).join(" ")} />
          <g class="nc3d-roof-ridge">${d}</g>
          <text x=${u} y=${f-14}>${g}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)?[[0,0],[1,0],[1,1],[0,1]].map(([_,h])=>{let[v,y]=this.toScreen([_?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),h?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return A`<g class="nc3d-vertex" data-roof-corner=${`${n.id}:${_}:${h}`}><circle cx=${v} cy=${y} r="16" class="nc3d-hit" /><circle cx=${v} cy=${y} r="6" /></g>`}):$}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Ne(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return $;let e=G(this._doc);return A`<g class="nc3d-solar-layer">${t.map(n=>{let i=ot(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return $;let o=n.id===this._solarId,s=$;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=me(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(..._t(i,n,!0).flatMap(h=>h.corners.map(v=>Math.hypot(v[0]-a,v[2]-l))))*.5,[u,f]=this.toScreen([a,l]),[g,_]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);s=A`<g class="nc3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${f} x2=${g} y2=${_} />
          <circle cx=${g} cy=${_} r="16" class="nc3d-hit" />
          <circle cx=${g} cy=${_} r="8" />
          <path d="M${g-4} ${_-1}a4 4 0 1 1 2 3.5" />
        </g>`}return A`<g data-solar=${n.id} class=${`nc3d-solar${o?" nc3d-solar-sel":""}${o&&this._solarPick?" nc3d-solar-pick":""}`}>${_t(i,n,o).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[a.corners[0],a.corners[1]].flatMap((d,u)=>{let f=[d[0],d[2]],g=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return u===0?[f,g]:[g,f]}):a.corners.map(d=>[d[0],d[2]]);return A`<polygon data-cell=${a.cell} class=${a.skipped?"nc3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return $;let e=new Map(G(this._doc).map(n=>[n.key,n]));return A`<g class="nc3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),o=i?ns(i,n):null;return o?A`<g data-roofwin=${n.id} class=${`nc3d-roofwin${n.id===this._roofWinId?" nc3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:$})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=G(this._doc).filter(i=>!i.flat),e=Be(t,this._doc.settings.north??0)??G(this._doc)[0];if(!e)return;let n=Qn(e,N("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===e);if(!i)return;Object.assign(i,t);let o=G(n).find(s=>s.key===i.face);o&&Object.assign(i,he(o,Bt(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(G(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="nc3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="nc3d-room-list">
            ${t.map((n,i)=>{let o=e.get(n.face);return b`<div class="nc3d-row">
                <button class="nc3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="nc3d-actions"><button class="nc3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=G(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>l.startsWith("binary_sensor.")||l.startsWith("sensor."));return b`<button class="nc3d-btn nc3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="nc3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${e?b`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:$}
        </div>
        <div class="nc3d-form">
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...Qn(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),t.u,l=>i({u:M(l)}),.05)}
          ${this.num(this.t("solar_v"),t.v,l=>i({v:M(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
        </div>
        <p class="nc3d-sub">${this.t("roof_window_hint")}</p>
        ${e?b`<div class="nc3d-actions"><button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:$}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(o=>[o.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=ps({building:t,consumers:[],summary:n,fieldPower:e}).filter(o=>o.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=a=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(o==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(d=>d.id===s);return`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${e(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let o of this.cableSegments().filter(s=>s.key===t))for(let s of[o.a,o.b]){let a=[M(s[0]),M(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&e.push(a)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!ae("energy_pro"))return $;let t=this.cableSegments();if(!t.length)return $;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(t.map(s=>s.key))];return A`<g class="nc3d-cable-layer">${o.map(s=>{let a=n.find(v=>v.id===s),l=`nc3d-cable nc3d-cable-${s.split(":")[0]}${a?" nc3d-cable-laid":""}${s===i?" nc3d-cable-sel":""}`,c=t.filter(v=>v.key===s),d=e.filter(v=>v.key===s).map(v=>{let y=this.toScreen([v.a[0],v.a[2]]),p=this.toScreen([v.b[0],v.b[2]]);return A`<line x1=${y[0]} y1=${y[1]} x2=${p[0]} y2=${p[1]} />`});if(!(a&&s===i&&a.floor_id===this._floorId&&!a.locked))return d.length?A`<g class=${l} data-cable=${s}><g class="nc3d-cable-hit">${d}</g>${d}</g>`:$;let u=c[0],f=c[c.length-1],g=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(v=>this.toScreen(v)),this.toScreen([f.b[0],f.b[2]])],_=g.slice(0,-1).map((v,y)=>A`<line class="nc3d-cable-piece" data-cable-line=${s} data-cable-seg=${y} x1=${v[0]} y1=${v[1]} x2=${g[y+1][0]} y2=${g[y+1][1]} />`),h=a.points.map((v,y)=>{let p=this.toScreen(v);return A`<g class="nc3d-vertex" data-cable-pt=${`${s}:${y}`}><circle cx=${p[0]} cy=${p[1]} r="16" class="nc3d-hit" /><circle cx=${p[0]} cy=${p[1]} r="6" /></g>`});return A`<g class=${l} data-cable=${s}>${d}${_}${h}</g>`})}</g>`}renderCableSettings(){let t=this.cableKeys();if(!t.length)return $;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(o=>o.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="nc3d-sub">${this.t("cables_hint")}</p>
      <div class="nc3d-room-list">
        ${t.map(o=>b`<div class="nc3d-row">
            <button
              class="nc3d-dev-name ${o===this._cableId?"nc3d-sel":""}"
              @click=${()=>{this._cableId=o===this._cableId?null:o;let s=n.find(a=>a.id===o);this._cableId&&s&&this._doc.floors.some(a=>a.id===s.floor_id)&&(this._floorId=s.floor_id)}}
            >
              <span>${this.cableLabel(o)}${n.some(s=>s.id===o)?b` <em class="nc3d-sub">· ${this.t("cable_laid")}</em>`:$}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="nc3d-actions">
              ${i?b`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(o=>{let s=o.settings.roof.cables?.find(a=>a.id===i.id);s&&(s.locked=!s.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="nc3d-btn" ?disabled=${!e} @click=${()=>this.change(o=>o.settings.roof.cables=(o.settings.roof.cables??[]).filter(s=>s.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="nc3d-btn nc3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?b`<div class="nc3d-form">
                    ${this.num(this.t("cable_height"),i.height,o=>this.change(s=>{let a=s.settings.roof.cables?.find(l=>l.id===i.id);a&&(a.height=Math.min(30,Math.max(0,M(o))))}),.05,0)}
                  </div>
                  <p class="nc3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(o=>o.id===i.floor_id)?.name??""})}</p>`:$}`:$}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return $;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};return A`<g class="nc3d-energy-markers">${t.furniture.filter(n=>Mt.includes(n.type)).map(n=>{let[i,o]=this.toScreen([n.x,n.z]),s=n.id===this._furnitureId;return A`<g data-energy-device=${n.id} class=${`nc3d-energy-marker${s?" nc3d-energy-marker-sel":""}`}>
          <circle cx=${i} cy=${o} r="17" />
          <text x=${i} y=${o+6} class="nc3d-energy-icon">${e[n.type]??"\u26A1"}</text>
          ${s?A`<text x=${i} y=${o+32} class="nc3d-energy-name">${this.t(`furn_${n.type}`)}</text>`:$}
          <title>${this.t(`furn_${n.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===yt)return this.t("solar_ground");if(t.wall){let i=this._doc.floors.find(o=>o.id===t.wall.floorId);return`${this.t("solar_wall")} ${i?.name??""} \xB7 ${this.t(`compass_${Yn(t,this._doc.settings.north??0)}`)} \xB7 ${j(this.hass,t.lu,1)} m`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(i=>i.id===t.section)+1}):this.t("solar_main");return t.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${Yn(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let t=G(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Be(t.filter(s=>!e.has(s.key)),n)??Be(t,n);if(!i)return;let o=Nt(i,N("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(t){this._solarId=t,this._roofId=null;let e=this._doc.settings.roof.solar?.find(n=>n.id===t);e?.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let t=this._floorId??this._doc.floors[0]?.id,e=t?Qo(this._doc,N("pv"),t):null;e&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=Kn(this._doc,N("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===e);if(!i)return;Object.assign(i,t);let o=ot(n,i);o&&Object.assign(i,he(o,i))})}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(a=>a.id===e);if(!o)return;if(t==="new"){let a=i.strings??[],l={id:N("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:o.entity??null,inverter:null};i.strings=[...a,l],o.string=l.id}else o.string=t;let s=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>s.has(a.id))})}updateSolarString(t){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let o=i.settings.roof.strings?.find(s=>s.id===n);o&&Object.assign(o,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==t);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=G(this._doc),n=new Map(t.map(o=>[o.id,ot(this._doc,o,e)])),i=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="nc3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="nc3d-room-list">
            ${t.map((o,s)=>{let a=n.get(o.id),l=a?_t(a,o).length:0;return b`<div class="nc3d-row">
                <button
                  class="nc3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:j(this.hass,l*.4,1)})}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="nc3d-actions">
        <button class="nc3d-btn nc3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="nc3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="nc3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="nc3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=t.filter(l=>l.string===o.id),a=s.reduce((l,c)=>l+(n.get(c.id)?_t(n.get(c.id),c).length:0),0);return b`<p class="nc3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:a,kwp:j(this.hass,a*.4,1)})}</p>`})}`:$}
    </section>`}renderSolarForm(t){let e=this.isAdmin,n=G(this._doc),i=ht(this._doc),o=ot(this._doc,t,n),s=t.face===yt,a=o?_t(o,t).length:0,l=We(t),c=l.reduce((g,_)=>g+_,0)-(t.skip?.length??0),d=this.entityOptions(g=>g.startsWith("sensor.")&&this.hass?.states[g]?.attributes.device_class==="power"),u=g=>this.updateSolar(g),f=(this._doc.settings.roof.solar??[]).findIndex(g=>g.id===t.id)+1;return b`<button class="nc3d-btn nc3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="nc3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${f}`}</h3>
          ${e?b`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:$}
        </div>
        <div class="nc3d-form">
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${g=>u({name:g.target.value.trim()||null})}
          /></label>
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${g=>{let _=g.target.value,h={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h};_===yt&&u({...Kn(this._doc,t.id),...h});let v=n.find(p=>p.key===_);v&&u({...Nt(v,t.id),...h,rotation:null,flip:!1});let y=i.find(p=>p.key===_);y&&u({...Nt(y,t.id),...h,rows:1,rotation:null,flip:!1})}}
            >
              ${o?$:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(g=>b`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
              <option value=${yt} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(g=>b`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,g=>{let _=Math.max(1,Math.min(40,Math.round(g)));u(t.layout?.length?{layout:Array.from({length:_},(h,v)=>t.layout[v]??t.layout[t.layout.length-1]),rows:_}:{rows:_})},1,1)}
          <label class="nc3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${t.layout?.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${g=>{let _=g.target.value.split(/[,;\s]+/).map(h=>parseInt(h,10)).filter(h=>Number.isFinite(h)&&h>=0);_.length&&(_.length===1?u({cols:Math.max(1,Math.min(60,_[0])),layout:null,skip:null}):u({layout:_.slice(0,40).map(h=>Math.min(60,h)),rows:Math.min(40,_.length),cols:Math.max(1,..._),skip:null}))}}
          /></label>
        </div>
        <p class="nc3d-sub">
          ${o&&!o.unbounded?b`${this.t("solar_face_size",{w:j(this.hass,o.lu,1),h:j(this.hass,o.ls,1)})} · `:$}${this.t("solar_cols_hint")}
        </p>
        ${t.layout?.length&&new Set(t.layout).size>1?b`<div class="nc3d-seg nc3d-dev-source">
              ${["left","center","right"].map(g=>b`<button aria-pressed=${(t.align??"left")===g} ?disabled=${!e} @click=${()=>u({align:g})}>${this.t(`solar_align_${g}`)}</button>`)}
            </div>`:$}
        <div class="nc3d-seg nc3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="nc3d-seg nc3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="nc3d-form">
          ${this.num(this.t("solar_module_w"),t.module_w??1.13,g=>u({module_w:Math.max(.3,Math.min(3,M(g)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),t.module_h??1.72,g=>u({module_h:Math.max(.3,Math.min(3,M(g)))}),.01,.3)}
        </div>
        <div class="nc3d-actions">
          <button class="nc3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${t.skip?.length?b`<button class="nc3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:$}
        </div>
        ${this._solarPick?b`<p class="nc3d-sub">${this.t("solar_pick_hint")}</p>`:$}
        <div class="nc3d-form">
          ${s?b`${this.num(this.t("solar_base"),t.base??0,g=>u({base:g>.001?Math.min(60,M(g)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,g=>u(pe(this._doc,t,g)),5)}
                <div class="nc3d-actions">
                  <button class="nc3d-chip" ?disabled=${!e} @click=${()=>u(pe(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="nc3d-chip" ?disabled=${!e} @click=${()=>u(pe(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.num(this.t("solar_u"),t.u,g=>u({u:M(g)}),.05)} ${this.num(this.t(o?.wall?"solar_v_wall":"solar_v"),t.v,g=>u({v:M(g)}),.05)}`}
          ${o?.wall?b`${this.num(this.t("solar_tilt_wall"),t.tilt??0,g=>u({tilt:Math.max(0,Math.min(90,Math.round(g)))}),5,0)}
                <label class="nc3d-check nc3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>u({flip:g.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:$}
          ${o?.flat?b`${this.num(this.t("solar_tilt"),t.tilt??15,g=>u({tilt:Math.max(0,Math.min(45,Math.round(g)))}),1,0)}
                <label class="nc3d-check nc3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>u({flip:g.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:$}
        </div>
        <p class="nc3d-sub">
          ${this.t("solar_summary",{n:a,kwp:j(this.hass,a*.4,1)})}${a<c?b` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:$}
        </p>
        <h4 class="nc3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="nc3d-form">
          <label class="nc3d-field nc3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${g=>{let _=g.target.value;this.setSolarString(_===""?null:_)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(g=>b`<option value=${g.id} ?selected=${g.id===t.string}>${g.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let g=this._doc.settings.roof.strings?.find(h=>h.id===t.string);if(!g)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,h=>u({entity:h==="none"?null:h}));let _=this._doc.floors.flatMap(h=>h.furniture.filter(v=>v.type==="inverter").map((v,y)=>({id:v.id,label:`${this.t("furn_inverter")} ${y+1} \xB7 ${h.name}`})));return b`<label class="nc3d-field nc3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${g.name} @change=${h=>this.updateSolarString({name:h.target.value.trim()||g.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),g.entity??null,void 0,d,h=>this.updateSolarString({entity:h==="none"?null:h}))}
              <label class="nc3d-field nc3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${h=>this.updateSolarString({inverter:h.target.value||null})}>
                  <option value="" ?selected=${!g.inverter}>${this.t(_.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${_.map(h=>b`<option value=${h.id} ?selected=${h.id===g.inverter}>${h.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="nc3d-sub">${this.t("solar_string_hint")}</p>
        <p class="nc3d-sub">${this.t("solar_form_hint")}</p>
        ${e?b`<div class="nc3d-actions">
              <button class="nc3d-btn" ?disabled=${!o} @click=${()=>o&&u({...Nt(o,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}renderRoofPanel(){let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?t.windows?.find(s=>s.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=t.type==="custom"?t.sections??[]:[];return b`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="nc3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?b`<div class="nc3d-actions"><button class="nc3d-btn nc3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:b`<div class="nc3d-room-list">
              ${o.map((s,a)=>b`<div class="nc3d-row">
                  <button class="nc3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${a+1} · ${this.t(`roof_shape_${s.shape}`)} · ${j(this.hass,Math.abs(s.x1-s.x0),1)} × ${j(this.hass,Math.abs(s.z1-s.z0),1)} m · ${this.t("roof_ridge_height")} ${j(this.hass,Te(s),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="nc3d-actions">
              <button class="nc3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="nc3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let t=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&Mt.includes(i.type)):void 0;if(e)return b`<button class="nc3d-btn nc3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=ae("energy_pro");return b`${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():$}${n?this.renderHologramSettings():$}${this.renderSolarProTeaser()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[];if(!t.length)return $;let e=this.isAdmin,n=this._doc.settings.roof.hologram??fn,i=s=>this.change(a=>a.settings.roof.hologram={...a.settings.roof.hologram??fn,...s}),o=(s,a)=>s.name||`${this.t("solar_field")} ${a+1}`;return b`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="nc3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("holo_field")}
          <select ?disabled=${!e} @change=${s=>i({field:s.target.value||null})}>
            <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
            ${t.map((s,a)=>b`<option value=${s.id} ?selected=${s.id===n.field}>${o(s,a)}</option>`)}
          </select>
        </label>
        ${this.num(this.t("holo_size"),n.size,s=>i({size:Math.min(3,Math.max(.3,M(s)))}),.1,.3)}
        ${this.num(this.t("holo_right"),n.right,s=>i({right:Math.min(30,Math.max(-30,M(s)))}),.25)}
        ${this.num(this.t("holo_up"),n.up,s=>i({up:Math.min(30,Math.max(-30,M(s)))}),.25)}
      </div>
    </section>`}renderSolarProTeaser(){let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return b`<section class="nc3d-teaser">
      <div class="nc3d-teaser-head"><b>☀ ${this.t("solar_pro_title")}</b><span class="nc3d-teaser-soon">${this.t("solar_pro_soon")}</span></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="nc3d-sub">${this.t("solar_pro_free")}</p>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let p=ni(this._doc),[m,x,w]=te(t),[S,I]=p?p.end:this.toWorld(this._size.w/2,this._size.h/2),E={id:N("furniture"),type:t,x:M(S),z:M(I),rotation:0,w:m,d:x,h:w,variant:null};this.change((F,k)=>k.furniture.push(E)),this.selectItem("furniture",E.id),this.showPoint(E.x,E.z);return}let n=p=>`${p.name} ${p.area_id&&this.hass?.areas?.[p.area_id]?.name||""} ${p.area_id??""}`.toLowerCase(),i=e.rooms.filter(p=>p.points.length>=3),o=p=>i.find(m=>p.test(n(m))),s=i.find(p=>e.furniture.some(m=>m.type==="parking"&&T([m.x,m.z],p.points))),a=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=o(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?a:t==="meter"?l??c??a:l??a)??this.room??i.sort((p,m)=>Math.abs(tt(m.points))-Math.abs(tt(p.points)))[0],[u,f,g]=te(t),[_,h]=d?dt(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[p,m]=dt(d.points),x=null,w=new Set(e.openings.filter(E=>E.room_id===d.id).map(E=>E.edge)),S=d.points.some((E,F)=>!w.has(F));d.points.forEach((E,F)=>{if(S&&w.has(F))return;let k=d.points[(F+1)%d.points.length],z=Math.hypot(k[0]-E[0],k[1]-E[1]);if(x&&z<=x.l)return;let R=(E[0]+k[0])/2,L=(E[1]+k[1])/2,P=-(k[1]-E[1])/z,O=(k[0]-E[0])/z;(p-R)*P+(m-L)*O<0&&([P,O]=[-P,-O]),x={mx:R,mz:L,nx:P,nz:O,l:z}});let I=x;I&&([_,h]=[I.mx+I.nx*(f/2+.25),I.mz+I.nz*(f/2+.25)])}let v={id:N("furniture"),type:t,x:M(_),z:M(h),rotation:0,w:u,d:f,h:g,variant:null},y=d?Le({...e,furniture:[...e.furniture,v]},v,this._doc.settings.wall_interior):null;y&&Object.assign(v,{x:M(y.x),z:M(y.z),rotation:y.rotation}),this.change((p,m)=>m.furniture.push(v)),this.selectItem("furniture",v.id),this.showPoint(v.x,v.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>Mt.includes(i.type)).map(i=>({fl:n,m:i})));return b`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="nc3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?b`<div class="nc3d-room-list">
            ${e.map(({fl:n,m:i})=>b`<div class="nc3d-row">
                <button
                  class="nc3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:$}
      <div class="nc3d-actions">
        ${Mt.map(n=>b`<button
            class="nc3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=f=>this.updateRoofSection(f),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=t.flip?[i[1],i[0]]:i,a=t.shape==="flat",l=t.shape==="pent",c=f=>f.findIndex(g=>g.id===t.id)+1,d=(f,g,_,h=.05,v=0)=>this.num(f,g,y=>_(Math.max(v,M(y))),h,v),u=!!this._doc.settings.lock_plan;return b`<button class="nc3d-btn nc3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="nc3d-h3row">
          <h3>${this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?u?b`<button class="nc3d-btn nc3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="nc3d-btn nc3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:$}
        </div>
        <div class="nc3d-seg nc3d-dev-source">
          ${Yi.map(f=>b`<button aria-pressed=${t.shape===f} ?disabled=${!e} @click=${()=>n({shape:f})}>${this.t(`roof_shape_${f}`)}</button>`)}
        </div>
        ${a?$:b`<div class="nc3d-seg nc3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="nc3d-check nc3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${f=>n({open:f.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="nc3d-form">
          ${a?d(this.t("roof_height"),t.eave_a,f=>n({eave_a:f,eave_b:f})):b`${d(`${this.t("roof_eave")} ${l?"":o}`,t.eave_a,f=>n({eave_a:f}))}
              ${l?$:d(`${this.t("roof_eave")} ${s}`,t.eave_b,f=>n({eave_b:f}))}
              ${d(`${this.t("roof_pitch_short")} ${l?"":o}`,t.pitch_a,f=>n({pitch_a:Math.min(75,f)}),1,0)}
              ${l?$:d(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,f=>n({pitch_b:Math.min(75,f)}),1,0)}`}
          ${d(this.t("roof_base"),t.base,f=>n({base:f}))}
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,f=>n({overhang:Math.min(2,f)}),.05,0)}
        </div>
        <p class="nc3d-sub">${this.t("roof_ridge_height")}: ${j(this.hass,Te(t),2)} m · ${this.t("roof_section_hint")}</p>
        ${e?b`<div class="nc3d-actions">
              ${a?$:b`<button class="nc3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              <button class="nc3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return gn(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);this.change((i,o)=>{let s=this.fixItem(o,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(t=>t.settings.lock_plan=!t.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(t.target,this.localPoint(t)))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),i=_=>t.closest(`[${_}]`)?.getAttribute(_)??null,o=null,s=i("data-device"),a=i("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),u=i("data-room")??this.roomAt(n);if(s?o=["device",s]:a?o=["opening",a]:l?o=["furniture",l]:c?o=["wall",c]:d&&!u?o=["outdoor",d]:u&&(o=["room",u]),!o){this._ctx=null;return}let[f,g]=o;this.selectItem(f,g),(f==="opening"||f==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:e[0],y:e[1],kind:f,id:g}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return $;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".nc3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(t.y,(n?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return b`<div class="nc3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?b`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:$}
      ${t.kind==="furniture"?b`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>`:$}
      <button class="nc3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return $;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?b`<button class="nc3d-btn nc3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:$;let n=this.isFixedItem(t,e);return b`<button class="nc3d-btn nc3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,o){let s=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,d=o?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return M(Math.min(l-u,Math.max(u,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let h of n.walls??[]){let v=Vt({room_id:"",edge:0,wall:h.id},n.rooms,n.walls??[]);if(!v)continue;let[y,p]=this.toScreen(h.a),[m,x]=this.toScreen(h.b),w=(m-y)**2+(x-p)**2||1,S=Math.min(1,Math.max(0,((e[0]-y)*(m-y)+(e[1]-p)*(x-p))/w)),I=Math.hypot(e[0]-y-(m-y)*S,e[1]-p-(x-p)*S),E=[(h.a[0]+h.b[0])/2,(h.a[1]+h.b[1])/2],F=n.rooms.find(k=>k.points.length>=3&&T(E,k.points));I<qe*2.2&&(!i||I-1<i.d)&&(i={room:v.room,edge:0,d:I-1,wall:h.id,roomId:F?.id??h.id})}for(let h of n.rooms)for(let v=0;v<h.points.length;v++){let[y,p]=this.toScreen(h.points[v]),[m,x]=this.toScreen(h.points[(v+1)%h.points.length]),w=(m-y)**2+(x-p)**2||1,S=Math.min(1,Math.max(0,((e[0]-y)*(m-y)+(e[1]-p)*(x-p))/w)),I=Math.hypot(e[0]-y-(m-y)*S,e[1]-p-(x-p)*S),E=I-(h.id===this._roomId?.5:0);I<qe*2.2&&(!i||E<i.d)&&(i={room:h,edge:v,d:E})}if(!i)return!1;let{room:o,edge:s,wall:a}=i,l=o.points[s],c=o.points[(s+1)%o.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=Me[t],f=u.type,g=M(Math.min(u.width,Math.max(.3,d-.1))),_={id:N("opening"),room_id:i.roomId??o.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...e),g,!1),width:g,type:f,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((h,v)=>v.openings.push(_)),this._tool="select",this.selectItem("opening",_.id),!0}setOpeningPreset(t,e){let n=Me[e];this._openingPreset=e;let i=Sn(t)===e,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,o]=te(t),s=this._doc.floors.filter(f=>f.elevation>e.elevation).sort((f,g)=>f.elevation-g.elevation)[0],a=t==="stairs"?M(s?s.elevation-e.elevation:e.height+.25):o,l=this.room,[c,d]=l?dt(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:N("furniture"),type:t,x:M(c),z:M(d),rotation:0,w:n,d:i,h:a,variant:null};this.change((f,g)=>g.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(t){return this.floor?Le(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===e),t))}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||!this.confirmFixedDelete("furniture",t)||(this.change((e,n)=>n.furniture=n.furniture.filter(i=>i.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:N("furniture"),x:M(t.x+.3),z:M(t.z+.3)};this.change((n,i)=>i.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,o)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(mt(l.type)&&l.entity&&n.has(l.entity)));let s=[...o.placements.map(a=>[a.x,a.z]),...o.furniture.filter(a=>mt(a.type)).map(a=>[a.x,a.z])];for(let a of zo(e,t,s)){if(!a.entity_id.startsWith("light.")){o.placements.push(a);continue}let[l,c,d]=ct.lamp_ceiling;o.furniture.push({id:N("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(s=>s.id===e);if(!t||!n)return;let[i,o]=dt(n.points);this.updateDevice({x:M(i),z:M(o)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>B(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&T([u.x,u.z],t.points));if(n.length<2)return;let i=rt(t.points),o=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/a),c=n.map((u,f)=>{let g=Math.floor(f/a),_=g===l-1?n.length-a*(l-1):a,h=f-g*a;return[M(i.x0+o/_*(h+.5)),M(i.z0+s/l*(g+.5))]}),d=n.map(u=>u.entity_id);this.change((u,f)=>{d.forEach((g,_)=>Object.assign(f.placements.find(h=>h.entity_id===g),{x:c[_][0],z:c[_][1]}))})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=Oo(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Lo(n);this.change((o,s)=>{s.rooms=e,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:j(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(mt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((o,s)=>{let a=s.rooms.find(l=>l.id===e.id);a.points.splice(t,1),a.wall_heights&&a.wall_heights.splice(t,1),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==i).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=rt(n.points),{x0:o,z0:s,x1:a,z1:l}=i;t==="x"&&([o,a]=[e,e+(a-o)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(a=o+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[M(o),M(s)],[M(a),M(s)],[M(a),M(l)],[M(o),M(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[t][e]=M(n),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await ln(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=N("img");await ke(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let c=this.floor?.rooms.length?rt(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,M(c.x1-c.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?gt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return b`
      ${this.renderPreview()}
      <div class="nc3d-editor ${this.narrow?"nc3d-narrow":""}">
        <div class="nc3d-main">
          <div class="nc3d-toolbar">
            <div class="nc3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(n=>b`<button
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
              ${this.isAdmin?b`<details class="nc3d-lidar"><summary>Scansione LiDAR</summary><div class="nc3d-lidar-help">
                <b>Importa da NeonCasa Scanner</b>
                <p>Scansiona le stanze con l’app iPhone, esporta il file JSON in File, poi selezionalo qui. Serve il formato NeonCasa Scanner; i file USDZ e quelli di altre app non sono ancora supportati.</p>
                <p>Lo scanner iOS è un prototipo da compilare e firmare con Xcode: HACS non installa l’app sul telefono. La pagina web non può attivare il LiDAR.</p>
                <p>Importa un piano alla volta. Stanze e mobili riconosciuti diventano modificabili; controlla le misure e associa le entità manualmente.</p>
                <label class="nc3d-btn nc3d-upload">Importa scansione JSON<input aria-label="Importa scansione LiDAR" type="file" accept=".json,application/json" @change=${this.importLidar} /></label>
              </div></details>`:$}
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?b`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:$}
            </div>
            ${e?.warnings.length?b`<span class="nc3d-warn">${this.t("overlap_warning")}</span>`:$}
          </div>
          <div class="nc3d-stage-pair ${this._split?"nc3d-split":""}" style=${this._split&&!this.narrow?`--nc3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nc3d-canvas-wrap">
            ${this.houseTool?b`<div class="nc3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:$}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):$}
              ${t?this.renderOutdoor(t):$} ${t?this.renderRooms(t):$} ${t?this.renderFurniture(t):$}
              ${t?this.renderFreeWalls(t):$}
              ${t&&e?this.renderOpenings(t,e.walls):$} ${t?this.renderMeter(t):$}
              ${t&&this._tool==="select"?this.renderDevices(t):$}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):$}
              ${t?this.renderOutdoorHandles(t):$}
              ${this._tool==="roof"?A`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?A`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:$} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="nc3d-hint ${this._fixedHint?"nc3d-hint-fixed":""}">${t?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="nc3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:$}
          ${this._split?this.render3d():$}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return $;let[i,o]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale;return A`<image href=${n.url} x=${i} y=${o} width=${s} height=${s*n.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],u=(_,h)=>{for(let v=Math.ceil(s/_)*_;v<=l;v+=_){let y=this.toScreen([v,0])[0];d.push(A`<line class=${h} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let v=Math.ceil(a/_)*_;v<=c;v+=_){let y=this.toScreen([0,v])[1];d.push(A`<line class=${h} x1="0" y1=${y} x2=${e} y2=${y} />`)}};i<o&&u(i,"nc3d-grid-minor"),u(o,"nc3d-grid-major");let[f,g]=this.toScreen([0,0]);return d.push(A`<circle class="nc3d-origin" cx=${f} cy=${g} r="3" />`),A`<g pointer-events="none">${d}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?A`<g pointer-events="none">${e.rooms.map(n=>A`<polygon class="nc3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:$}renderWalls(t){let e=this.floor?.height??2.5;return A`<g pointer-events="none">${t.map(n=>{let i=n.height!==void 0&&n.height<e-.01,o=`nc3d-wall${n.exterior?" nc3d-wall-ext":""}${i?" nc3d-wall-low":""}`;return A`<polygon class=${o} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}setEdgeHeight(t,e,n){let i=this.floor;if(!i||!this.isAdmin)return;let s=gt(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(a=>a.sources.some(l=>l.room_id===t.id&&l.edge===e)).flatMap(a=>a.sources);s.some(a=>a.room_id===t.id&&a.edge===e)||s.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((a,l)=>{for(let c of s){let d=l.rooms.find(f=>f.id===c.room_id);if(!d)continue;let u=(d.wall_heights??[]).slice(0,d.points.length);for(;u.length<d.points.length;)u.push(null);u[c.edge]=n,d.wall_heights=u.every(f=>f===null)?void 0:u}})}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length;return b`<div class="nc3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.map((i,o)=>{let s=t.points[(o+1)%n],a=Math.hypot(s[0]-i[0],s[1]-i[1]),l=t.wall_heights?.[o]??null,c=()=>this._edgeHi=o,d=()=>this._edgeHi=null;return b`<div
          class="nc3d-edge-height${o===this._edgeHi?" nc3d-edge-on":""}${l!==null?" nc3d-edge-low":""}"
          @mouseenter=${c}
          @mouseleave=${d}
          @focusin=${c}
          @focusout=${d}
        >
          <span><b>${this.t("wall_n",{a:o+1,b:(o+1)%n+1})}</b><br /><span class="nc3d-muted">${j(this.hass,a,2)} m</span></span>
          ${l===0?b`<span class="nc3d-muted">${this.t("wall_none")}</span>`:this.num(this.t("wall_height"),l??e,u=>this.setEdgeHeight(t,o,u>=e-.005?null:Math.max(.05,u)),.05,.05)}
          ${this.isAdmin&&l!==null?b`<button class="nc3d-btn" title=${this.t("wall_height_full")} @click=${()=>this.setEdgeHeight(t,o,null)}>↥</button>`:$}
          ${this.isAdmin&&l!==0?b`<button class="nc3d-btn" title=${this.t("wall_none_hint")} @click=${()=>this.setEdgeHeight(t,o,0)}>${this.t("wall_none")}</button>`:$}
        </div>`})}
      <p class="nc3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;return!e||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?$:A`${e.points.map((n,i)=>{let[o,s]=this.toScreen(n);return A`<g class="nc3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="nc3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return A`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(dt(e.points)),s=rt(e.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return A`<g data-outdoor=${e.id} class=${`nc3d-out nc3d-out-${e.type}${e.id===this._outdoorId?" nc3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?A`<text x=${i} y=${o+4}>${this.t(`out_${e.type}`)}</text>`:$}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=Ie(t.points),i=rt(t.points),o=(s,a)=>{let{x0:l,z0:c,x1:d,z1:u}=i;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,u]=[a,a+(u-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([f,g])=>[M(f),M(g)])})};return b`<section>
      <div class="nc3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Ji.map(s=>b`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?b`${this.num(this.t("x"),i.x0,s=>o("x",s))} ${this.num(this.t("z"),i.z0,s=>o("z",s))}
            ${this.num(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:$}
      </div>
      <p class="nc3d-sub">${this.t("outdoor_hint")}</p>
      ${e?b`<div class="nc3d-actions">
            <button class="nc3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:$}
    </section>`}renderRooms(t){return A`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return A`<polygon data-room=${e.id} class=${e.id===this._roomId?"nc3d-room nc3d-room-sel":"nc3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(dt(e.points));return A`<text class="nc3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="nc3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:j(this.hass,Ct(e.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return $;let[n,i]=this.toScreen(t.points[e]),[o,s]=this.toScreen(t.points[(e+1)%t.points.length]);return A`<line class="nc3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return $;let[n,i]=this.toScreen([e.x,e.z]);return A`<g class="nc3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return A`<g>${t.furniture.map(n=>{let i=n.id===this._furnitureId,[o,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/e),[d,u]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[f,g]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),_=mt(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return A`<g data-furniture=${n.id} class=${`nc3d-furn${i?" nc3d-furn-sel":""}${_?" nc3d-furn-lit":""}${Mt.includes(n.type)?" nc3d-energy-item":""}`}>
        <g transform="translate(${o} ${s}) rotate(${n.rotation}) scale(${e})">
          <rect class="nc3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="nc3d-furn-sym">${Ro(n.type,n.w,n.d)}</g>
          <line class="nc3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?A`<text x=${o} y=${s+4}>${be(this.hass,n.type)}</text>`:$}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,v])=>{let[y,p]=this.toScreen([n.x+h*n.w*Math.cos(l)/2-v*n.d*Math.sin(l)/2,n.z+h*n.w*Math.sin(l)/2+v*n.d*Math.cos(l)/2]);return A`<g class="nc3d-resize" data-resize=${`${n.id}:${h}:${v}`}>
              <circle cx=${y} cy=${p} r="14" class="nc3d-hit" />
              <rect x=${y-5} y=${p-5} width="10" height="10" rx="2" />
            </g>`}):$}
      ${i?(()=>{let[h,v]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/e),n.z-Math.cos(l)*(n.d/2+18/e)]);return A`<text class="nc3d-dim" x=${h} y=${v+4}>${j(this.hass,n.w,2)} × ${j(this.hass,n.d,2)} m</text>`})():$}
      ${i&&n.locked?A`<text class="nc3d-lock" x=${d} y=${u+5}>🔒</text>`:$}
      ${i&&this.isAdmin&&!n.locked?A`<g class="nc3d-rotate" data-rotate=${n.id}>
            <line x1=${f} y1=${g} x2=${d} y2=${u} />
            <circle cx=${d} cy=${u} r="16" class="nc3d-hit" />
            <circle cx=${d} cy=${u} r="8" />
            <path d="M${d-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}`})}</g>`}renderOpenings(t,e){return A`<g>${t.openings.map(n=>{let i=Vt(n,t.rooms,t.walls??[]);if(!i)return $;let{room:o,edge:s}=i,a=Bn(e,n,i),l=Tt(o,s,n.offset-n.width/2),c=Tt(o,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),f=tt(o.points)>=0?1:-1,g=[-u*f,d*f],_=[.06,.06];a&&(_=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let h=(S,I)=>this.toScreen([S[0]+g[0]*I,S[1]+g[1]*I]),v=[h(l,_[0]+.01),h(c,_[0]+.01),h(c,-_[1]-.01),h(l,-_[1]-.01)],y=n.id===this._openingId,p=wn(n,a?.wall.exterior??!1),m=n.type==="door"&&kn(p),x=`nc3d-open nc3d-open-${n.type}${m?" nc3d-open-front":""}${y?" nc3d-open-sel":""}`,w;if(n.type==="garage"){let S=h(l,_[0]-.04),I=h(c,_[0]-.04),E=h(l,_[0]+Math.min(2,n.height)),F=h(c,_[0]+Math.min(2,n.height));w=A`<line x1=${S[0]} y1=${S[1]} x2=${I[0]} y2=${I[1]} />
          <path class="nc3d-open-track" d="M${S[0]} ${S[1]}L${E[0]} ${E[1]}M${I[0]} ${I[1]}L${F[0]} ${F[1]}" />`}else if(n.type==="door"){let S=n.swing==="out",I=S?-_[1]:_[0],E=n.hinge==="left"==f>0,F=n.leaves===2,k=l,z=c,R=[];if(p==="sidelight"||p==="sidelights"){let V=p==="sidelights",U=Math.min(1.05,Math.max(.6,n.width-.04-(V?.6:.3))),C=(n.width-.04-U)/(V?2:1),W=nt=>Tt(o,s,n.offset-n.width/2+nt),Y=V||!E?.02+C:.02;k=W(Y),z=W(Y+U),R=V?[[l,W(.02+C)],[W(n.width-.02-C),c]]:E?[[W(n.width-.02-C),c]]:[[l,W(.02+C)]]}let L=[(k[0]+z[0])/2,(k[1]+z[1])/2],P=(F?.5:1)*Math.hypot(z[0]-k[0],z[1]-k[1]),O=(_[0]-_[1])/2,D=R.map(([V,U])=>{let C=h(V,O+.035),W=h(U,O+.035),Y=h(V,O-.035),nt=h(U,O-.035);return A`<line class="nc3d-open-pane" x1=${C[0]} y1=${C[1]} x2=${W[0]} y2=${W[1]} /><line class="nc3d-open-pane" x1=${Y[0]} y1=${Y[1]} x2=${nt[0]} y2=${nt[1]} />`}),H=(V,U)=>{let[C,W]=h(V,I),[Y,nt]=h(U,I),ve=h(V,I+(S?-P:P)),ai=P*this._view.scale,ks=(ve[0]-C)*(nt-W)-(ve[1]-W)*(Y-C);return A`<path d="M${C} ${W}L${ve[0]} ${ve[1]}A${ai} ${ai} 0 0 ${ks>0?1:0} ${Y} ${nt}" />`};w=A`${D}${p==="passage"?A`<line class="nc3d-open-passage" x1=${h(l,O)[0]} y1=${h(l,O)[1]} x2=${h(c,O)[0]} y2=${h(c,O)[1]} />`:p==="sliding"?A`<line x1=${h(k,I)[0]} y1=${h(k,I)[1]} x2=${h(z,I)[0]} y2=${h(z,I)[1]} />`:F?A`${H(k,L)}${H(z,L)}`:H(E?k:z,E?z:k)}`}else{let S=(_[0]-_[1])/2,I=h(l,S+.035),E=h(c,S+.035),F=h(l,S-.035),k=h(c,S-.035),z=[(l[0]+c[0])/2,(l[1]+c[1])/2],R=h(z,_[0]),L=h(z,-_[1]);w=A`<line x1=${I[0]} y1=${I[1]} x2=${E[0]} y2=${E[1]} /><line x1=${F[0]} y1=${F[1]} x2=${k[0]} y2=${k[1]} />${n.leaves===2?A`<line x1=${R[0]} y1=${R[1]} x2=${L[0]} y2=${L[1]} />`:$}`}return A`<g data-opening=${n.id} class=${x}>
        <polygon class="nc3d-open-gap" points=${v.map(S=>S.join(",")).join(" ")} />
        ${w}
      </g>`})}</g>`}renderDevices(t){return A`<g>${t.placements.map(e=>{let n=B(e.entity_id);if(!n)return $;let[i,o]=this.toScreen([e.x,e.z]),s=this.hass?.states[e.entity_id]?.state==="on",a=e.entity_id===this._deviceId,l=`nc3d-device${s?" nc3d-device-on":""}${a?" nc3d-device-sel":""}`;return A`${n==="camera"?this.renderCameraWedge(e,a):$}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${J(this.hass,e.entity_id)}</title>
        <circle r="18" class="nc3d-hit" /><circle r="12" />
        <path d=${_e(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?A`<text class="nc3d-lock" x=${i+16} y=${o-12}>🔒</text>`:$}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),o=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,a=(m,x)=>this.toScreen([t.x-Math.sin(s+m)*x,t.z+Math.cos(s+m)*x]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(i,359.9)*Math.PI/180/2,[u,f]=a(-d,o),[g,_]=a(d,o),h=o*this._view.scale,v=i>=360?"":`M${l} ${c}L${u} ${f}A${h} ${h} 0 ${d>Math.PI/2?1:0} 1 ${g} ${_}Z`,[y,p]=a(0,o);return A`<g class="nc3d-wedge ${e?"nc3d-wedge-sel":""}">
      ${i>=360?A`<circle cx=${l} cy=${c} r=${h} />`:A`<path d=${v} />`}
      ${e&&this.isAdmin&&!t.locked?A`<g class="nc3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${y} y2=${p} />
            <circle cx=${y} cy=${p} r="16" class="nc3d-hit" />
            <circle cx=${y} cy=${p} r="8" />
            <path d="M${y-4} ${p-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((s,a)=>{let l=e[(a+1)%n],[c,d]=this.toScreen(s),[u,f]=this.toScreen(l),g=Math.hypot(l[0]-s[0],l[1]-s[1]),_=(c+u)/2,h=(d+f)/2,[v,y]=this.toScreen(dt(e)),p=-(f-d),m=u-c,x=Math.hypot(p,m)||1;p/=x,m/=x,p*(_-v)+m*(h-y)<0&&(p=-p,m=-m);let w=Math.hypot(u-c,f-d);return A`
        ${w>50?A`<text class="nc3d-dim" x=${_+p*16} y=${h+m*16+4}>${j(this.hass,g,2)} m</text>`:$}
        ${w>36?A`<g data-mid=${a} class="nc3d-mid"><circle cx=${_} cy=${h} r="14" class="nc3d-hit" /><circle cx=${_} cy=${h} r="6" /><path d="M${_-3} ${h}h6M${_} ${h-3}v6" /></g>`:$}
      `}),o=e.map((s,a)=>{let[l,c]=this.toScreen(s);return A`<g data-vertex=${a} class=${a===this._vertex?"nc3d-vertex nc3d-vertex-sel":"nc3d-vertex"}><circle cx=${l} cy=${c} r="16" class="nc3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="nc3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return A`<g>${i}${o}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="freewall"){let[n,i]=this.toScreen(t.start),[o,s]=this.toScreen(t.end),a=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return A`<g pointer-events="none">
        <line class="nc3d-draft nc3d-draft-wall" x1=${n} y1=${i} x2=${o} y2=${s} />
        <text class="nc3d-dim" x=${(n+o)/2} y=${(i+s)/2-10}>${j(this.hass,a,2)} m</text>
      </g>`}if(t?.kind==="rect"){let[n,i]=this.toScreen(t.start),[o,s]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return A`<g pointer-events="none">
        <rect class="nc3d-draft" x=${Math.min(n,o)} y=${Math.min(i,s)} width=${Math.abs(o-n)} height=${Math.abs(s-i)} />
        <text class="nc3d-dim" x=${(n+o)/2} y=${Math.min(i,s)-8}>${j(this.hass,a,2)} × ${j(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return $;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return A`<g pointer-events="none">
      ${e.length>1?A`<polyline class="nc3d-draft" points=${e.map(n=>n.join(",")).join(" ")} />`:$}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let o=this.toScreen(this._draft[i]),s=this.toScreen(n);return A`<text class="nc3d-dim" x=${(o[0]+s[0])/2} y=${(o[1]+s[1])/2-6}>${j(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):$}
      ${this._draft.map((n,i)=>{let[o,s]=this.toScreen(n);return A`<circle class=${i===0&&this._draft.length>=3?"nc3d-draft-pt nc3d-draft-first":"nc3d-draft-pt"} cx=${o} cy=${s} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?A`<circle class="nc3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:$}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return A`<g pointer-events="none">
      ${t.x!==void 0?A`<line class="nc3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:$}
      ${t.z!==void 0?A`<line class="nc3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:$}
      ${t.point?A`<circle class="nc3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:$}
    </g>`}num(t,e,n,i=.01,o){return b`<label class="nc3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??$}
        .value=${String(M(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neoncasa3d.sidePinned",t?"1":"0")}catch{}}renderAside(t){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?b`<aside class="nc3d-side nc3d-side-strip"></aside>
      <aside class="nc3d-side nc3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:b`<aside class="nc3d-side nc3d-side-strip">
        <button class="nc3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?b`<button class="nc3d-strip-btn nc3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:$}
        <button class="nc3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nc3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:b`<aside class="nc3d-side">${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){return!this._split||this.narrow?$:b`<div class="nc3d-pin-row">
      ${t?b`<button class="nc3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:$}
      <button class="nc3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&t&&i)return b`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):$} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?b`<button class="nc3d-btn nc3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?b`<button class="nc3d-btn nc3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:b`
      ${i?$:b`<p class="nc3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="nc3d-floor-list">
          ${[...e].reverse().map(a=>b`<button
              class="nc3d-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?b`<button
                class="nc3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:$}
        </div>
        ${i&&this._floorMenu?b`<div class="nc3d-floor-menu">
              <p class="nc3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>b`<button class="nc3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?b` <span class="nc3d-sub">· ${this.t("level",{n:a.level})}</span>`:$}
                </button>`)}
              <button class="nc3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:$}
        ${t?b`<div class="nc3d-form">
              <label class="nc3d-field nc3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,a=>this.updateFloor({elevation:a}))}
              ${this.num(this.t("height"),t.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?b`<label class="nc3d-field nc3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===t.ha_floor||!e.some(l=>l.ha_floor===a.floor_id)).map(a=>b`<option value=${a.floor_id} ?selected=${a.floor_id===t.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:$}
              ${i&&this.unplacedAreas(t).length?b`<div class="nc3d-actions nc3d-wide">
                    <button class="nc3d-btn nc3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:$}
              ${i?b`<div class="nc3d-actions nc3d-wide">
                    <button class="nc3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="nc3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="nc3d-actions nc3d-wide">
                    <button class="nc3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?b`<p class="nc3d-sub nc3d-wide nc3d-notice">${this._notice}</p>`:$}`:$}
            </div>`:$}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):$}
      ${i?this.renderStartView():$}
      ${i&&!1?this.renderPresenceSettings():$}
      ${t&&i?this.renderBackgroundForm(t):$} ${i?this.renderSettings():$}
      ${i?this.renderBackup():$}
    `}renderRoomList(t){return t.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="nc3d-room-list">
        ${t.rooms.map(e=>b`<button class="nc3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="nc3d-muted">${this.t("area_m2",{a:j(this.hass,Ct(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:$}renderRoomForm(t,e){let n=this.isAdmin,i=Ie(t.points),o=rt(t.points);return b`<section>
      <div class="nc3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="nc3d-field nc3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(s=>b`<option value=${s.area_id} ?selected=${s.area_id===t.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="nc3d-field nc3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${to.map(s=>b`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?b`${this.num(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.num(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.num(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.num(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:$}
      </div>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)}
      <details class="nc3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,a)=>b`<div class="nc3d-point ${a===this._vertex?"nc3d-point-sel":""}">
            <span class="nc3d-muted">${a+1}</span>
            ${this.num(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?b`<button class="nc3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:$}
          </div>`)}
      </details>
      ${n?b`<div class="nc3d-actions">
            <button class="nc3d-btn nc3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="nc3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="nc3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:$}
      ${this._spots?this.renderSpotForm(t):$}
      ${this._packages?b`<div class="nc3d-packages">
            ${_s.map(s=>b`<button class="nc3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="nc3d-sub">${this.t("pkg_hint")}</p>
          </div>`:$}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=bs(t,e,()=>N("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=rt(t.points),n=this.hass?zt(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,o]=ct[e.type],s=yn(t,e.rows,e.cols).map(([a,l])=>({id:N("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=yn(t,e.rows,e.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...e,...s};return b`<div class="nc3d-form nc3d-spot-form">
      <label class="nc3d-field nc3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>b`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,s=>o({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,s=>o({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,s=>o({entity:s==="none"?null:s}))}
      <div class="nc3d-actions nc3d-wide">
        <button class="nc3d-btn nc3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="nc3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="nc3d-sub nc3d-wide">${this.t("spots_hint")}</p>
    </div>`}markerSelect(t,e){return b`<label class="nc3d-field nc3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Xi.map(n=>b`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){let e=n=>{let i=this.hass?.entities?.[n],o=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return o?this.hass?.areas?.[o]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${J(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(t,e,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:J(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="nc3d-field nc3d-wide"
      >${t}
      <nc3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),o(c.detail.value==="__auto"?null:c.detail.value)}}
      ></nc3d-entity-picker></label
    >`}openingIsExterior(t){let e=this.floor,n=e?Vt(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=gt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return Bn(i.walls,t,n)?.wall.exterior??!1}renderStyleSelect(t){let e=t.type==="door"?$n:xn,n=wn({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return b`<label class="nc3d-field nc3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(o=>b`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",o=h=>{if(!this.hass)return null;let v=structuredClone(this._doc.floors);for(let y of v)for(let p of y.openings)p.id===t.id&&(p[h]=null);return Io(this.hass,v).get(t.id)?.[h]??null},s=h=>this.hass?.states[h]?.attributes.device_class,a=this.entityOptions(h=>h.startsWith("cover.")),l=this.entityOptions(h=>/^(sensor|number|input_number)\./.test(h)&&Number.isFinite(Number(this.hass?.states[h]?.state))),c=this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(h)??"")||h.startsWith("sensor.")&&On(this.hass?.states[h])!==null),d=this.entityOptions(h=>{let v=this.hass?.states[h];return h.startsWith("binary_sensor.")?typeof v?.attributes.window_state=="string":h.startsWith("sensor.")&&(On(v)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${h} ${J(this.hass,h)}`))}),u=this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(h)??"")),f=h=>{let v=h===1,y=v?t.tilt:t.tilt2??null,p=v?t.contact:t.contact2,m=(v?t.sensor:t.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),x=w=>this.updateOpening(v?{contact:w}:{contact2:w==="none"?null:w});return b`<label class="nc3d-field nc3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${w=>{let S=w.target.value,I=S==="contact_tilt"?{}:v?{tilt:null}:{tilt2:null};this.updateOpening({...v?{sensor:S}:{sensor2:S},...I})}}
          >
            ${["contact","handle","contact_tilt"].map(w=>b`<option value=${w} ?selected=${w===m}>${this.t(`sensor_kind_${w}`)}</option>`)}
          </select></label
        >
        ${m==="handle"?this.entitySelect(this.t("handle_entity"),p,void 0,d,w=>x(w==="none"?v?"none":null:w)):this.entitySelect(this.t("contact_entity"),p,v?o("contact"):void 0,u,x)}
        ${m==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,c,w=>this.updateOpening(v?{tilt:w==="none"?null:w}:{tilt2:w==="none"?null:w})):$}`},g=Sn(t),_=t.type==="door";return b`<section>
      <div class="nc3d-h3row"><h3>${this.t(`preset_${g}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?b`<div class="nc3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Me).map(h=>b`<button class="nc3d-chip" aria-pressed=${h===g} @click=${()=>this.setOpeningPreset(t,h)}>${this.t(`preset_${h}`)}</button>`)}
          </div>`:$}
      ${e&&!i?b`<div class="nc3d-actions">
            <button class="nc3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${_?b`<button class="nc3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:$}
          </div>`:$}
      <div class="nc3d-form">
        ${this.num(this.t("width"),t.width,h=>this.updateOpening({width:Math.max(.3,h)}),.01,.3)}
        ${this.num(this.t("opening_position"),t.offset,h=>this.updateOpening({offset:Math.max(0,h)}),.01,0)}
        ${n?this.num(this.t("sill"),t.sill,h=>this.updateOpening({sill:Math.max(0,h)}),.01,0):$}
        ${this.num(this.t("opening_height"),t.height,h=>this.updateOpening({height:Math.max(.3,h)}),.01,.3)}
        ${i?$:this.renderStyleSelect(t)}
        <label class="nc3d-field nc3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${h=>this.updateOpening({mark:h.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?$:b`<label class="nc3d-field nc3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${h=>this.updateOpening({hinge:h.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),t.cover,o("cover"),a,h=>this.updateOpening({cover:h})):$}
        ${(n||i)&&t.cover!=="none"?b`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,h=>this.updateOpening({position:h==="none"?null:h}))}
              ${t.position?b`<label class="nc3d-check nc3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${h=>this.updateOpening({position_inverted:h.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:$}
              <label class="nc3d-check nc3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${h=>this.updateOpening({confirm:h.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:$}
        ${n?b`${t.leaves===2?b`<h4 class="nc3d-lib-head nc3d-wide">${this.t("leaf_main")}</h4>`:$}
              ${f(1)} ${t.leaves===2?b`<h4 class="nc3d-lib-head nc3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:$}`:b`${this.entitySelect(this.t(t.leaves===2?"contact_main":"contact_entity"),t.contact,o("contact"),c,h=>this.updateOpening({contact:h}))}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,h=>this.updateOpening({contact2:h==="none"?null:h})):$}`}
      </div>
      <p class="nc3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?b`<div class="nc3d-actions"><button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:$}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return b`<section>
      <div class="nc3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      <div class="nc3d-form">
        <label class="nc3d-field nc3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        <label class="nc3d-field nc3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${oo.map(n=>b`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>b`<optgroup label=${n.name}>
                ${n.items.map(i=>{let o=Zt(n.id,i.id);return b`<option value=${o} ?selected=${o===t.type}>${Ot(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?b`<option value=${t.type} selected>${be(this.hass,t.type)}</option>`:$}
          </select></label
        >
        ${this.num(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${vn(t)&&this.floor?b`${this.num(this.t("mount_height"),t.mount_y??mn(this.floor,t),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${t.mount_y!=null?b`<button class="nc3d-btn nc3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:$}`:$}
      </div>
      ${t.type==="stairs"?b`<p class="nc3d-sub">${this.t("stairs_hint")}</p>`:$}
      ${t.type==="stairwell"?b`<p class="nc3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&To(Mn(t),n.points))?b`<p class="nc3d-sub nc3d-pack-error">${this.t("stairwell_outside")}</p>`:$}`:$}
      ${t.type==="inverter"||t.type==="home_battery"?b`<div class="nc3d-form">
            <label class="nc3d-field nc3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>b`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${t.type==="lamp_pendant"?b`<div class="nc3d-form">
            <label class="nc3d-field nc3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>b`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${pn(t.type)?this.renderFurnitureLinks(t):$} ${t.type==="parking"?this.renderParkingForm(t):$}
      ${e?b`<div class="nc3d-actions">
            <button class="nc3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="nc3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="nc3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="nc3d-btn nc3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:$}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=us(this.hass,t),n=this._doc.energy,i=Object.fromEntries(Object.entries(e).filter(([s])=>n[s]==null)),o=Object.keys(i).length;o&&this.setEnergy(i),this._energyNote=o?this.t("energy_import_done",{n:o}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(c,d)=>this.hass?.states[c]?.attributes[d],i=this.entityOptions(c=>c.startsWith("sensor.")&&n(c,"device_class")==="power"),o=this.entityOptions(c=>c.startsWith("sensor.")&&n(c,"device_class")==="battery"),s=this.entityOptions(c=>c.startsWith("sensor.")&&(n(c,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(c,"unit_of_measurement")??""))),a=c=>d=>this.setEnergy({[c]:d==="none"?null:d}),l=ds(this._doc);return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="nc3d-sub">${this.t("energy_balance_hint")}</p>
      <div class="nc3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,l.grid,i,a("grid"))}
        <label class="nc3d-check nc3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${c=>this.setEnergy({grid_invert:c.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,l.solar[0]??null,i,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,l.battery[0]??null,i,a("battery"))}
        <label class="nc3d-check nc3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${c=>this.setEnergy({battery_invert:c.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,l.soc[0]??null,o,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,a("tariff"))}
      </div>
      <div class="nc3d-actions">
        <button class="nc3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?b`<p class="nc3d-sub">${this._energyNote}</p>`:$}
      <p class="nc3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderStartView(){let t=this._doc.settings.start_view??null,e=()=>{let i=this.renderRoot.querySelector("nc3d-view3d")?.currentView();i&&this.change(o=>o.settings.start_view={theta:M(i.theta),phi:M(i.phi),radius:M(i.radius)})};return b`<details class="nc3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="nc3d-sub">${this.t("start_view_hint")}</p>
      <div class="nc3d-actions">
        <button class="nc3d-btn nc3d-primary" @click=${e}>${this.t("start_view_set")}</button>
        ${t?b`<button class="nc3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:$}
      </div>
      ${t?b`<p class="nc3d-sub">${this.t("start_view_saved")}</p>`:$}
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let o=i.slice(7),s=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(o)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>a(l.id)),...s.filter(l=>!a(l.id))]},n=(i,o)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(a=>a.person!==i),o&&o!=="none"&&s.presence.push({person:i,sensor:o}),this.setDoc(s)};return b`<details class="nc3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="nc3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${J(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(o=>o.person===i)?.sensor??null,void 0,e(i),o=>n(i,o))):b`<p class="nc3d-sub nc3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="nc3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(t){if(!this.hass)return $;let e=this.hass,n=c=>{let d=structuredClone(this._doc.floors);for(let u of d)for(let f of u.furniture)f.id===t.id&&(f[c]=null);return Tn(e,d).get(t.id)?.[c]??null},i=Oe(t.type),o=mt(t.type),s=this.entityOptions(c=>o?/^(light|switch|input_boolean)\./.test(c):i?/^(media_player|switch|input_boolean|light)\./.test(c):t.type==="radiator"?c.startsWith("climate."):t.type==="robot_vacuum"?c.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate)\./.test(c)||Mo(e.states[c])),a=this.entityOptions(c=>c.startsWith("sensor.")&&e.states[c]?.attributes.device_class==="power"),l=t.type==="fridge_smart"?this.entityOptions(c=>c.startsWith("binary_sensor.")):[];return b`<div class="nc3d-form nc3d-links">
        ${t.type==="grid_point"?b`<p class="nc3d-sub nc3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(o?"furn_entity_light":i?"furn_entity_tv":t.type==="radiator"?"furn_entity_climate":t.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),t.entity??null,n("entity"),s,c=>this.updateFurniture({entity:c}))}
        ${o||t.type==="grid_point"?$:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,n("power"),a,c=>this.updateFurniture({power:c}))}
      </div>
      ${t.type==="home_battery"?b`<div class="nc3d-form nc3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(c=>c.startsWith("sensor.")&&(e.states[c]?.attributes.device_class==="battery"||e.states[c]?.attributes.unit_of_measurement==="%")),c=>this.updateFurniture({soc:c==="none"?null:c}))}
          </div>`:$}
      ${t.type==="wallbox"?b`<div class="nc3d-form nc3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(c=>c.startsWith("binary_sensor.")||c.startsWith("sensor.")),c=>this.updateFurniture({status:c==="none"?null:c}))}
          </div>`:$}
      ${!o||t.entity?b`<label class="nc3d-check nc3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="nc3d-form">${this.markerSelect(t.marker??null,c=>this.updateFurniture({marker:c}))}</div>`:$}
      ${t.type==="robot_vacuum"?b`<div class="nc3d-form nc3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,Fo(e,Tn(e,this._doc.floors).get(t.id)?.entity??null,null),this.entityOptions(c=>c.startsWith("sensor.")),c=>this.updateFurniture({room_sensor:c}))}
          </div>`:$}
      ${t.type==="fridge_smart"?b`<div class="nc3d-form nc3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,l,c=>this.updateFurniture({door_left:c}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,l,c=>this.updateFurniture({door_right:c}))}
            </div>
            <p class="nc3d-sub">${this.t("fridge_hint")}</p>`:$}
      ${Ao(t.type)?this.renderPictureRules(t):$}
      <p class="nc3d-sub">${this.t(o?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":t.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){let e=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(y=>y.items.filter(p=>p.vehicle).map(p=>({id:Zt(y.id,p.id),label:`${Ot(p,n)} \xB7 ${y.name}`}))),o=this.entityOptions(y=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(y)),s=this.entityOptions(y=>/^(sensor|input_select|select|input_text)\./.test(y)),a=t.type_entity?this.hass?.states[t.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],c=t.types??[],d=y=>this.updateFurniture({types:y}),u=(y,p)=>b`<select ?disabled=${!e} @change=${m=>p(m.target.value||null)}>
        <option value="" ?selected=${!y}>${this.t("parking_vehicle_none")}</option>
        ${i.map(m=>b`<option value=${m.id} ?selected=${m.id===y}>${m.label}</option>`)}
      </select>`,f=this.floor,g=f?.rooms.find(y=>y.points.length>=3&&T([t.x,t.z],y.points)),_=t.vehicle?it(t.vehicle):void 0,h=_?_.size[2]*(t.scale??1):0,v=!!g&&!!f&&h>f.height+1e-6;return b`<div class="nc3d-form nc3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,o,y=>this.updateFurniture({entity:y==="none"?null:y}))}
        <label class="nc3d-field nc3d-wide">${this.t("parking_vehicle")} ${u(t.vehicle??null,y=>this.updateFurniture({vehicle:y}))}</label>
        ${i.length?$:b`<p class="nc3d-sub nc3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),y=>this.updateFurniture({scale:Math.min(150,Math.max(30,y))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,y=>this.updateFurniture({type_entity:y==="none"?null:y}))}
        ${t.type_entity?b`<div class="nc3d-wide">
              <div class="nc3d-sub">${this.t("parking_types")}</div>
              ${c.map((y,p)=>b`<div class="nc3d-parking-row">
                  <input
                    type="text"
                    list="nc3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${y.state}
                    ?disabled=${!e}
                    @change=${m=>d(c.map((x,w)=>w===p?{...x,state:m.target.value}:x))}
                  />
                  ${u(y.vehicle,m=>d(c.map((x,w)=>w===p?{...x,vehicle:m??""}:x)))}
                  <button class="nc3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>d(c.filter((m,x)=>x!==p))}>✕</button>
                </div>`)}
              <datalist id="nc3d-parking-states">${l.map(y=>b`<option value=${y}></option>`)}</datalist>
              ${e?b`<button class="nc3d-btn" @click=${()=>d([...c,{state:l[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:$}
            </div>`:$}
      </div>
      ${v?b`<p class="nc3d-sub nc3d-warn">${this.t("parking_too_tall",{car:j(this.hass,h,2),room:j(this.hass,f.height,2)})}</p>`:$}
      <p class="nc3d-sub">${this.t("parking_hint")}</p>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neoncasa3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,i){let o=i?n.filter(a=>a.label.toLowerCase().includes(i)):n;if(i&&!o.length)return $;let s=i?!0:this._libOpen.has(t);return b`<button class="nc3d-lib-head nc3d-lib-toggle" aria-expanded=${s} @click=${()=>this.toggleLibrary(t)}>
        <span class="nc3d-lib-caret">${s?"\u25BE":"\u25B8"}</span>${e} <span class="nc3d-lib-count">${o.length}</span>
      </button>
      ${s?b`<div class="nc3d-library">${o.map(a=>this.libraryButton(a.type,a.label))}</div>`:$}`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!ae("screens"))return b`<div class="nc3d-wide">
        <div class="nc3d-sub">${this.t("screen_pictures")}</div>
        <p class="nc3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${se(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${re(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=y=>this.updateFurniture({pictures:y}),o=this.entityOptions(()=>!0),s=y=>["string","number","boolean"].includes(typeof y),a=y=>Object.entries(this.hass?.states[y]?.attributes??{}).filter(([p,m])=>s(m)&&p!=="friendly_name"&&p!=="icon").map(([p])=>p),l=(y,p)=>{let m=this.hass?.states[y];return m?String((p?m.attributes[p]:m.state)??""):""},c=(y,p)=>{let m=this.hass?.states[y],x=!p&&Array.isArray(m?.attributes.options)?m.attributes.options:[];return x.length?x:[l(y,p)]},d=y=>`${y.entity}\0${y.attribute??""}`,u=[];n.forEach((y,p)=>{let m=u.find(x=>d(x)===d(y));m?m.rows.push(p):u.push({entity:y.entity,attribute:y.attribute??null,rows:[p]})});let f=(y,p)=>i(n.map((m,x)=>y.rows.includes(x)?{...m,...p}:m)),g=(y,p)=>i(n.map((m,x)=>x===y?{...m,...p}:m)),_=this.storedPictures(),h=this.entityOptions(y=>y.startsWith("camera.")),v=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return b`<div class="nc3d-wide">
      <div class="nc3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="nc3d-field nc3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:$}
      ${u.map(y=>b`<div class="nc3d-picture-group">
          <nc3d-entity-picker
            .options=${o}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${p=>{p.stopPropagation(),f(y,{entity:p.detail.value})}}
          ></nc3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${p=>{let m=p.target.value||null,x=l(y.entity,m);i(n.map((w,S)=>y.rows.includes(S)?{...w,attribute:m,state:y.rows[0]===S?x:w.state}:w))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(p=>b`<option value=${p} ?selected=${p===y.attribute}>${p}</option>`)}
          </select>
          <span class="nc3d-sub nc3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(p=>{let m=n[p],x=!!this.hass&&Eo(this.hass,m);return b`<div class="nc3d-picture-row ${x?"nc3d-rule-hit":""}">
              <input
                type="text"
                list="nc3d-picture-states-${p}"
                placeholder=${this.t("picture_state")}
                .value=${m.state}
                ?disabled=${!e}
                @change=${w=>g(p,{state:w.target.value})}
              />
              <datalist id="nc3d-picture-states-${p}"><option value="*"></option>${c(y.entity,y.attribute).map(w=>b`<option value=${w}></option>`)}</datalist>
              ${this._images[m.image]?b`<img class="nc3d-picture-thumb" src=${this._images[m.image].url} alt="" /> `:$}
              ${v(m)&&this.hass?.states[v(m)]?.attributes.entity_picture?b`<img class="nc3d-picture-thumb" src=${String(this.hass.states[v(m)].attributes.entity_picture)} alt="" />`:$}
              <label class="nc3d-btn nc3d-picture-pick">
                ${m.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${w=>{this.uploadPicture(w,t,p)}} />
              </label>
              ${_.filter(w=>w!==m.image).length?b`<div class="nc3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${_.filter(w=>w!==m.image&&this._images[w]).map(w=>b`<button class="nc3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>g(p,{image:w})}><img src=${this._images[w].url} alt="" /></button>`)}
                  </div>`:$}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(m.image)?m.image:""}
                ?disabled=${!e}
                @change=${w=>{let S=w.target.value.trim();S&&g(p,{image:S})}}
              />
              ${h.length?b`<nc3d-entity-picker
                    class="nc3d-picture-camera"
                    .options=${h}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${v(m)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${w=>{w.stopPropagation(),w.detail.value!=="none"?g(p,{image:`camera:${w.detail.value}`}):v(m)&&g(p,{image:""})}}
                  ></nc3d-entity-picker>`:$}
              <span class="nc3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="nc3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((w,S)=>S!==p))}>✕</button>
            </div>`})}
          ${e?b`<button class="nc3d-btn" @click=${()=>i([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:$}
        </div>`)}
      ${e?b`<button class="nc3d-btn" @click=${()=>i([...n,{entity:o[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:$}
      <p class="nc3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){let i=t.target,o=i.files?.[0];if(i.value="",!o)return;let s=await createImageBitmap(o),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),d=N("pic");await ke(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let u=this.furnitureItem?.id===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((f,g)=>g===n?{...f,image:d}:f)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return b`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="nc3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      <input
        class="nc3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
      />
      ${Object.entries(so).map(([i,o])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...o,...i==="kitchen"&&ae("fridge_smart")?["fridge_smart"]:[]].map(s=>({type:s,label:this.t(`furn_${s}`)})),e))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,i.name,i.items.map(o=>({type:Zt(i.id,o.id),label:Ot(o,n)})),e))}
    </section>
    <div class="nc3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="nc3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="nc3d-btn nc3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=o=>{this.showPreview(t,o.currentTarget)},i=mt(t)?"light":pn(t)?"switch":null;return b`<button
      class="nc3d-btn ${i?"nc3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):e}
      @click=${()=>this.addFurniture(t)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${e}
      ${i?b`<svg class="nc3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${_e(i)} />
          </svg>`:$}
    </button>`}async showPreview(t,e){let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let o=await ys(),[s,a,l]=te(t),c=o.furniturePreview({type:t,w:s,d:a,h:l,variant:null,lamp:ao[t]??null},180,this.packs??[]);this._preview?.type===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?b`<div class="nc3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?b`<img src=${t.url} alt="" />`:b`<span class="nc3d-preview-wait"></span>`}
      <b>${be(this.hass,t.type)}</b>
    </div>`:$}renderDeviceForm(t){let e=this.isAdmin,n=B(t.entity_id),i=n==="light",o=t.mount??"ceiling",s=n?Rn(n,this.floor?.height??2.5,i?o:null):1;return b`<section>
      <div class="nc3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="nc3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?_e(n):""} />
        </svg>
        ${J(this.hass,t.entity_id)}
      </p>
      <div class="nc3d-form">
        ${i?b`<label class="nc3d-field nc3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>b`<option value=${a} ?selected=${a===o}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?b`<label class="nc3d-field nc3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:$}
        ${this.num(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),t.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?b`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <p class="nc3d-sub nc3d-wide">${this.t("camera_aim_hint")}</p>`:$}
        ${n&&vo.has(n)?b`<label class="nc3d-check nc3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:$}
        ${this.markerSelect(t.marker??null,a=>this.updateDevice({marker:a}))}
      </div>
      ${e?b`<div class="nc3d-actions">
            <button class="nc3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?b`<button class="nc3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:$}
            <button
              class="nc3d-btn nc3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:$}
    </section>`}renderDeviceList(t){let e=this.isAdmin,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,o=n?zt(n,t.area_id).filter(m=>ie(B(m))):[],s=new Set([...this.floor?.placements.filter(m=>T([m.x,m.z],t.points)).map(m=>m.entity_id)??[],...this.floor?.furniture.filter(m=>mt(m.type)&&m.entity&&T([m.x,m.z],t.points)).map(m=>m.entity)??[]]),a=n?Ln(n,o):[],l=a.map(m=>m.primary).filter(m=>!s.has(m)),c=this._deviceQuery.trim().toLowerCase(),d=m=>!c||J(n,m,i).toLowerCase().includes(c)||m.includes(c),u=this.floor?.placements.filter(m=>B(m.entity_id)==="light"&&(m.mount??"ceiling")==="ceiling"&&T([m.x,m.z],t.points)).length,f=new Set(t.panel??[]),g=new Map;for(let m of this._doc.floors)for(let x of[...m.placements.map(w=>[w.entity_id,w.x,w.z]),...m.furniture.filter(w=>mt(w.type)&&w.entity).map(w=>[w.entity,w.x,w.z])]){let w=m.rooms.find(S=>T([x[1],x[2]],S.points));w&&w.id!==t.id&&g.set(x[0],w.name)}let _=(m,x=!1,w=i)=>{let S=s.has(m),I=S?void 0:g.get(m);return b`<div class="nc3d-row nc3d-dev-row ${x?"nc3d-dev-extra":""}">
        <button class="nc3d-dev-name ${S?"":"nc3d-muted"}" ?disabled=${!S} @click=${()=>this.selectItem("device",m)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${_e(B(m))} />
          </svg>
          <span>${J(n,m,w)}${I?b`<small class="nc3d-muted"> · ${this.t("devices_placed_in",{room:I})}</small>`:$}</span>
        </button>
        ${e&&!S?b`<button
              class="nc3d-pin ${f.has(m)?"nc3d-pin-on":""}"
              aria-pressed=${f.has(m)}
              title=${this.t(f.has(m)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:f.has(m)?[...f].filter(E=>E!==m):[...f,m]})}
            >
              ${f.has(m)?"\u2605":"\u2606"}
            </button>`:$}
        ${e?S?b`<button class="nc3d-link" @click=${()=>this.removeDevice(m)}>${this.t("devices_remove")}</button>`:b`<button class="nc3d-link" @click=${()=>this.placeDevices([m])}>${this.t("devices_place")}</button>`:$}
      </div>`},h=e?this._devSource:"area",v=m=>{this._devSource=m,this._deviceQuery=""},y=b`<input
      class="nc3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${m=>this._deviceQuery=m.target.value}
    />`,p=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="nc3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?b`<div class="nc3d-seg nc3d-dev-source">
            <button aria-pressed=${h==="area"} @click=${()=>v("area")}>${this.t("devices_src_area")}${o.length?` (${a.length})`:""}</button>
            <button aria-pressed=${h==="other"} @click=${()=>v("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${h==="none"} @click=${()=>v("none")}>${this.t("devices_src_none")}</button>
          </div>`:$}
      ${h!=="area"?b`${y}${this.renderDeviceExtras(t,_,h)}`:t.area_id?o.length?b`${e&&(u??0)>=2?b`<button class="nc3d-btn nc3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:$}
              ${o.length>8?y:$}
              <div class="nc3d-room-list">
                ${a.map(m=>{let x=m.others.filter(d),w=this._expanded.has(m.primary)||!!c&&x.length>0;return!d(m.primary)&&!x.length?$:b`${_(m.primary)}
                  ${m.others.length?b`<button
                        class="nc3d-more"
                        @click=${()=>{let S=new Set(this._expanded);S.has(m.primary)?S.delete(m.primary):S.add(m.primary),this._expanded=S}}
                      >
                        ${w?this.t("devices_less"):this.t("devices_more",{n:m.others.length})}
                      </button>`:$}
                  ${w?(c?x:m.others).map(S=>_(S,!0)):$}`})}
              </div>
              ${e&&l.length>1?b`<button class="nc3d-link nc3d-place-all" @click=${p}>${this.t("devices_place_all_n",{n:l.length})}</button>`:$}
              <p class="nc3d-sub">${this.t("devices_hint")}</p>`:b`<p class="nc3d-sub">${this.t("devices_none")}</p>`:b`<p class="nc3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return $;let o=50,s=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!s||`${J(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(s),l=d=>d>0?b`<p class="nc3d-sub">${this.t("devices_narrow",{n:d})}</p>`:$;if(n==="other"){let d=0,u=0,f=$o(i,t.area_id).map(g=>{let _=g.ids.filter(v=>a(v,g.name)),h=_.slice(0,Math.max(0,o-d));return d+=h.length,u+=_.length-h.length,h.length?b`<div class="nc3d-dev-area">${g.name}</div>${h.map(v=>e(v,!1,g.name))}`:$});return d?b`<div class="nc3d-room-list">${f}</div>${l(u)}`:b`<p class="nc3d-sub">${this.t("devices_none")}</p>`}let c=xo(i).filter(d=>a(d));return c.length?b`<div class="nc3d-room-list">${c.slice(0,o).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,o))}`:b`<p class="nc3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return $;let n=(s,a)=>{let l={...t.climate??{},[s]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!t.climate&&Object.values(t.climate).some(s=>s!=null),o=(s,a)=>{let l=Fn[s],c=wo(e,this.floor??null,{...t,climate:null},s),d=this.entityOptions(u=>u.startsWith("sensor.")&&e.states[u]?.attributes.device_class===l).map(u=>({...u,rank:(Re(e,u.id)===t.area_id?0:1)+(Pn(e,u.id)?0:2)})).sort((u,f)=>u.rank-f.rank).map(({id:u,label:f})=>({id:u,label:f}));return this.entitySelect(a,t.climate?.[s]??null,c[0]??null,d,u=>n(s,u))};return b`<details class="nc3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="nc3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="nc3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return b`<details class="nc3d-section">
      <summary>${this.t("background")}</summary>
      <div class="nc3d-form">
        <label class="nc3d-btn nc3d-wide nc3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?b`${this.num(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
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
              <button class="nc3d-btn nc3d-danger nc3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:$}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Mi(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await Ii(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await Vi(this.hass),e={};for(let i of mo(t.building))try{e[i]=await ln(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);En(`neoncasa3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String(t?.message??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neoncasa3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let o=await Hi(this.hass,i.building,i.packs??[]),s=0;for(let[l,c]of Object.entries(i.images??{}))try{await ke(this.hass,l,c),s++}catch{}this.setDoc(ze(o.building)),this._floorId=o.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=o.skipped.length?` ${this.t("backup_full_skipped",{packs:o.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:o.packs,pictures:s})+a}catch(o){let{code:s,message:a}=o??{};alert(this.t("backup_import_error",{error:a??s??String(o)}))}finally{this._backupBusy=!1}}}async importLidar(t){let e=t.target,n=e.files?.[0];if(e.value="",!(!n||!this.hass?.user?.is_admin))try{if(n.size>In)throw new Error("File troppo grande: massimo 8 MB.");let i=co(await n.text(),()=>crypto.randomUUID());if(this._doc.floors.length>=20)throw new Error("Hai gi\xE0 raggiunto il limite di 20 piani.");let o=i.floor;if(!confirm(`Importare \xAB${o.name}\xBB come NUOVO piano?
${o.rooms.length} stanze, ${o.furniture.length} mobili, ${o.openings.length} porte/finestre/passaggi.

${i.warnings.join(`
`)}

I piani esistenti restano invariati. Puoi annullare l\u2019importazione con Annulla.`)||!this.hass?.user?.is_admin)return;let s=structuredClone(this._doc);o.elevation=bn(s.floors,void 0),s.floors.push(o),this.setDoc(s),this._floorId=o.id,this._tool="select",this.selectItem("room",null),this.fit(),this._notice="Scansione importata. Controlla il piano, le misure e collega i dispositivi. Se \xE8 un piano separato, puoi modificarne la quota."}catch(i){alert(`Scansione non importata: ${i.message}`)}}exportPlan(t){let e=new Date().toISOString().slice(0,10);En(`neoncasa3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(ho(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=po(await n.text())}catch(o){let s=o.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await zi(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
      class="nc3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="nc3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?b`<p class="nc3d-sub">${this.t("loading")}</p>`:this._history.length?b`<div class="nc3d-room-list">
              ${this._history.map(t=>b`<div class="nc3d-row nc3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="nc3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="nc3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:b`<p class="nc3d-sub">${this.t("backup_none")}</p>`}
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
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return b`<details class="nc3d-section">
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
            ${["none","flat","gable","custom"].map(n=>b`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?b`<label class="nc3d-field nc3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:$}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):$}
        ${t.roof.type!=="none"?this.num(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):$}
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Vo(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):$}
        <div class="nc3d-sub nc3d-wide">${this.t("weather_effects")}</div>
        ${Qi.map(n=>{let i=t.weather_effects??_n;return b`<label class="nc3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let s=o.target.checked;e({weather_effects:s?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="nc3d-check nc3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
      </div>
      <p class="nc3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[jt,Ke,lt`
      .nc3d-lidar { position: relative; padding: 8px; }
      .nc3d-lidar summary { cursor: pointer; }
      .nc3d-lidar-help { position: absolute; top: 100%; left: 0; width: min(28rem, 80vw); max-height: 65vh; overflow: auto; padding: 16px; z-index: 30; background: #131e32; color: #edf3ff; border: 1px solid #34516e; border-radius: 12px; white-space: normal; }
      .nc3d-lidar-help p { font-size: 13px; line-height: 1.5; }

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
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .nc3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .nc3d-cable-bat line {
        stroke: #5dffb0;
      }
      .nc3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .nc3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .nc3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .nc3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .nc3d-cable-sel .nc3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .nc3d-cable .nc3d-vertex circle {
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
    `]};customElements.get("nc3d-editor")||customElements.define("nc3d-editor",ri);function jr(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((r[0]-t[0])*n+(r[1]-t[1])*i)/o));return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-i*s)}export{ri as Fp3dEditor};
