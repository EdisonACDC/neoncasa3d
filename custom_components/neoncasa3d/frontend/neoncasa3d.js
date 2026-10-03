Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=i=>i===void 0?i:JSON.parse(JSON.stringify(i)));var an=new URL(import.meta.url),on=an.searchParams.get("v"),rn=i=>new URL(`./fonts/${i}${on?`?v=${on}`:""}`,an).href,sn="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function ln(){if(typeof document>"u"||document.getElementById("nc3d-fonts"))return;let i=document.createElement("style");i.id="nc3d-fonts",i.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${rn("figtree.woff2")}) format("woff2");unicode-range:${sn}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${rn("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${sn}}`,document.head.append(i)}var Ue=globalThis,We=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),cn=new WeakMap,$e=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(We&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=cn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&cn.set(t,e))}return e}toString(){return this.cssText}},dn=i=>new $e(typeof i=="string"?i:i+"",void 0,ut),U=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new $e(t,i,ut)},un=(i,e)=>{if(We)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Ue.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},pt=We?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return dn(t)})(i):i;var{is:bo,defineProperty:vo,getOwnPropertyDescriptor:yo,getOwnPropertyNames:wo,getOwnPropertySymbols:xo,getPrototypeOf:ko}=Object,Be=globalThis,pn=Be.trustedTypes,$o=pn?pn.emptyScript:"",So=Be.reactiveElementPolyfillSupport,Se=(i,e)=>i,ht={toAttribute(i,e){switch(e){case Boolean:i=i?$o:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},mn=(i,e)=>!bo(i,e),hn={attribute:!0,type:String,converter:ht,reflect:!1,useDefault:!1,hasChanged:mn};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;var Y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=hn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&vo(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:r}=yo(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hn}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;let e=ko(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){let t=this.properties,n=[...wo(t),...xo(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(pt(o))}else e!==void 0&&t.push(pt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return un(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:ht).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let r=n.getPropertyOptions(o),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ht;this._$Em=o;let a=s.fromAttribute(t,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,r){if(e!==void 0){let s=this.constructor;if(o===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??mn)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,r]of n){let{wrapped:s}=r,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Se("elementProperties")]=new Map,Y[Se("finalized")]=new Map,So?.({ReactiveElement:Y}),(Be.reactiveElementVersions??=[]).push("2.1.2");var yt=globalThis,fn=i=>i,je=yt.trustedTypes,gn=je?je.createPolicy("lit-html",{createHTML:i=>i}):void 0,xn="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,kn="?"+X,Mo=`<${kn}>`,ae=document,ze=()=>ae.createComment(""),Ee=i=>i===null||typeof i!="object"&&typeof i!="function",wt=Array.isArray,zo=i=>wt(i)||typeof i?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_n=/-->/g,bn=/>/g,re=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vn=/'/g,yn=/"/g,$n=/^(?:script|style|textarea|title)$/i,xt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=xt(1),ts=xt(2),ns=xt(3),le=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),wn=new WeakMap,se=ae.createTreeWalker(ae,129);function Sn(i,e){if(!wt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return gn!==void 0?gn.createHTML(e):e}var Eo=(i,e)=>{let t=i.length-1,n=[],o,r=e===2?"<svg>":e===3?"<math>":"",s=Me;for(let a=0;a<t;a++){let l=i[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===Me?d[1]==="!--"?s=_n:d[1]!==void 0?s=bn:d[2]!==void 0?($n.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=re):d[3]!==void 0&&(s=re):s===re?d[0]===">"?(s=o??Me,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?re:d[3]==='"'?yn:vn):s===yn||s===vn?s=re:s===_n||s===bn?s=Me:(s=re,o=void 0);let f=s===re&&i[a+1].startsWith("/>")?" ":"";r+=s===Me?l+Mo:u>=0?(n.push(c),l.slice(0,u)+xn+l.slice(u)+X+f):l+X+(u===-2?a:f)}return[Sn(i,r+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ae=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=Eo(e,t);if(this.el=i.createElement(c,n),se.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=se.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(xn)){let p=d[s++],f=o.getAttribute(u).split(X),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?gt:g[1]==="?"?_t:g[1]==="@"?bt:me}),o.removeAttribute(u)}else u.startsWith(X)&&(l.push({type:6,index:r}),o.removeAttribute(u));if($n.test(o.tagName)){let u=o.textContent.split(X),p=u.length-1;if(p>0){o.textContent=je?je.emptyScript:"";for(let f=0;f<p;f++)o.append(u[f],ze()),se.nextNode(),l.push({type:2,index:++r});o.append(u[p],ze())}}}else if(o.nodeType===8)if(o.data===kn)l.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(X,u+1))!==-1;)l.push({type:7,index:r}),u+=X.length-1}r++}}static createElement(e,t){let n=ae.createElement("template");return n.innerHTML=e,n}};function he(i,e,t=i,n){if(e===le)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,r=Ee(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=he(i,o._$AS(i,e.values),o,n)),e}var ft=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??ae).importNode(t,!0);se.currentNode=o;let r=se.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ie(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new vt(r,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=se.nextNode(),s++)}return se.currentNode=ae,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ie=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=he(this,e,t),Ee(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(ae.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Sn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let r=new ft(o,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=wn.get(e.strings);return t===void 0&&wn.set(e.strings,t=new Ae(e)),t}k(e){wt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let r of e)o===t.length?t.push(n=new i(this.O(ze()),this.O(ze()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=fn(e).nextSibling;fn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,o){let r=this.strings,s=!1;if(r===void 0)e=he(this,e,t,0),s=!Ee(e)||e!==this._$AH&&e!==le,s&&(this._$AH=e);else{let a=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=he(this,a[n+l],t,l),c===le&&(c=this._$AH[l]),s||=!Ee(c)||c!==this._$AH[l],c===v?e=v:e!==v&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},gt=class extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},_t=class extends me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},bt=class extends me{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=he(this,e,t,0)??v)===le)return;let n=this._$AH,o=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==v&&(n===v||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},vt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}};var Ao=yt.litHtmlPolyfillSupport;Ao?.(Ae,Ie),(yt.litHtmlVersions??=[]).push("3.3.3");var Mn=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let r=t?.renderBefore??null;n._$litPart$=o=new Ie(e.insertBefore(ze(),r),r,void 0,t??{})}return o._$AI(i),o};var kt=globalThis,D=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return le}};D._$litElement$=!0,D.finalized=!0,kt.litElementHydrateSupport?.({LitElement:D});var Io=kt.litElementPolyfillSupport;Io?.({LitElement:D});(kt.litElementVersions??=[]).push("4.2.2");async function zn(i){return i.callWS({type:"neoncasa3d/building/get"})}async function En(i,e){return(await i.callWS({type:"neoncasa3d/building/save",building:e})).revision}function An(i,e){return i.connection.subscribeMessage(t=>e(t.revision),{type:"neoncasa3d/building/subscribe"})}async function In(i,e){return(await i.callWS({type:"neoncasa3d/image/get",image_id:e})).data}async function Tn(i){return(await i.callWS({type:"neoncasa3d/packs/list"})).packs}var To="neoncasa3d.seenOffers";function Cn(i){let e=[];try{e=JSON.parse(localStorage.getItem(To)??"[]")}catch{}return i.filter(t=>!e.includes(t.id))}var Co="neoncasa3d.seenUpdates";function Rn(i){let e=[];try{e=JSON.parse(localStorage.getItem(Co)??"[]")}catch{}return i.filter(t=>!e.includes(`${t.id}@${t.release}`))}function Pn(i){return i.callWS({type:"neoncasa3d/license/get"})}var Fn=[],$t=new Map,Ln=0;function Hn(i){Fn=i,$t=new Map(i.flatMap(e=>e.items.map(t=>[Ro(e.id,t.id),t]))),Ln++}function Te(){return Fn}function Ke(){return Ln}function Ro(i,e){return`pack:${i}:${e}`}function St(i){return i.startsWith("pack:")}var Po={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function On(i){return B(i)?.parts.find(e=>e.screen)}function B(i){if(!St(i))return;let e=$t.get(i);if(e)return e;let[,t,...n]=i.split(":"),o=Po[t];return o?$t.get(`pack:${o}:${n.join(":")}`):void 0}function Dn(i,e){let t=e.split("-")[0];return i.name[t]??i.name.en??Object.values(i.name)[0]??i.id}function fe(i,e){let t=B(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Nn;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Ge(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return t?0:Vn(e)}}var Un=["rain","snow","clouds","lightning","sky"];var Lo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Ho(i){return i.elevation>.3?0:-.2}function Wn(i,e,t){let n=(i.outdoor??[]).find(o=>o.type!=="hedge"&&o.type!=="fence"&&o.type!=="pool"&&R([e,t],o.points));return Ho(i)+(n?Lo[n.type]:0)}var Oo={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null};var Bn={type:"none",pitch:35,overhang:.4},Do={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Bn}};var jn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Nn=1.75;function Kn(i){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(i.type)?!1:B(i.type)?.mount!=="ceiling"}function Mt(i){return jn.has(i)||!!B(i)?.light}var No=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Vn(i){switch(i.type){case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;default:return 0}}function Ge(i,e,t){let n=0;for(let o of i.furniture)!(No.has(o.type)||B(o.type)?.surface)||!R([e,t],Ye(o))||(n=Math.max(n,o.h));return n}var Fo=new Set([...jn,"radiator","robot_vacuum","inverter","home_battery","wallbox","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),qn={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function zt(i){i.energy={...Oo,...i.energy??{}},i.presence=i.presence??[],i.settings={...Do,...i.settings,roof:{...Bn,...i.settings?.roof??{}}};for(let e of i.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let r=n[o.mount??"ceiling"],[s,a,l]=qn[r];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return i}function J(i){let e=0;for(let t=0;t<i.length;t++){let[n,o]=i[t],[r,s]=i[(t+1)%i.length];e+=n*s-r*o}return e/2}function ce(i){let e=J(i);if(Math.abs(e)<1e-9){let o=i.length||1;return[i.reduce((r,s)=>r+s[0],0)/o,i.reduce((r,s)=>r+s[1],0)/o]}let t=0,n=0;for(let o=0;o<i.length;o++){let[r,s]=i[o],[a,l]=i[(o+1)%i.length],c=r*l-a*s;t+=(r+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Ye(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),o=i.w/2,r=i.d/2;return[[-o,-r],[o,-r],[o,r],[-o,r]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function R(i,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[r,s]=e[n],[a,l]=e[o];s>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-s)/(l-s)+r&&(t=!t)}return t}var Gn={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Vo=700,At="neoncasa3d.unsaved",Yn="1.0.0",Xn="neoncasa3d.legacy.unsaved";function qo(){try{let i=localStorage.getItem(At)??localStorage.getItem(Xn);return i?JSON.parse(i):null}catch{return null}}function Et(i){try{i?localStorage.setItem(At,JSON.stringify(i)):(localStorage.removeItem(At),localStorage.removeItem(Xn))}catch{}}var ge=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Vo),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Yn!=="dev"&&this.backendVersion!==Yn}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(zt(e.building))}discardDraft(){this.draft=null,Et(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await En(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Et(null)}catch(t){this.saveState="error",this.saveError=Qn(t),Et({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await An(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Tn(this.hass)}catch{this.packs=[]}Hn(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await zn(this.hass);this.building=zt(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=qo()),this.revision=e.revision,this.error=null}catch(e){this.error=Qn(e)}this.host.requestUpdate()}}};function Qn(i){return i&&typeof i=="object"&&"message"in i?String(i.message):String(i)}var Jn;function It(){let i=new URL("./neoncasa3d-editor.js?v=24a986269eda",new URL(import.meta.url)).href;return Jn??=import(i),Jn}var Uo={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Wo=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Bo=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),jo=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Qe=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ri=new Set(["light","switch","fan"]);function si(i){return i.slice(0,i.indexOf("."))}function $(i){return Uo[si(i)]??null}function Zn(i){return i!==null&&i!=="scene"&&i!=="script"}function ai(i,e){let t=i.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&i.devices?.[t.device_id]?.area_id||null:null}function ei(i,e){let t=$(e);if(!t)return!1;let n=i.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let o=i.states[e];if(!o)return!1;let r=o.attributes.device_class;return t==="sensor"?r?Wo.has(r):Bo.has(String(o.attributes.unit_of_measurement??"")):t==="binary"?!!r&&jo.has(r):!0}var Ko=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ti(i,e){if($(e)!=="sensor")return!1;let t=i.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=i.states[e];return!n||!n.attributes.unit_of_measurement||Ko.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||F(n)}var Tt=null;function Ct(i){let e=Tt;if(e&&e.entities===i.entities&&e.devices===i.devices&&(e.states===i.states||(e.states=i.states,Object.keys(i.states).length===e.stateCount)))return e;let t=new Map,n=new Map,o=[],r=new Map;for(let s of Object.keys(i.entities??{})){let a=i.entities[s],l=a.device_id;l&&Nt(i,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(r.get(l)??r.set(l,new Set).get(l)).add(si(s));let c=ei(i,s),d=ai(i,s);if(!d){(c||ti(i,s))&&Zn($(s))&&o.push(s);continue}c&&(t.get(d)??t.set(d,[]).get(d)).push(s)}if(i.entities)for(let s of Object.keys(i.states))i.entities[s]||(ei(i,s)||ti(i,s))&&Zn($(s))&&o.push(s);o.sort((s,a)=>Qe.indexOf($(s))-Qe.indexOf($(a))||P(i,s).localeCompare(P(i,a)));for(let[s,a]of t){let l=i.areas?.[s]?.name;a.sort((c,d)=>{let u=Qe.indexOf($(c)),p=Qe.indexOf($(d));return u-p||P(i,c,l).localeCompare(P(i,d,l))})}return Tt={entities:i.entities,devices:i.devices,states:i.states,stateCount:Object.keys(i.states).length,areas:t,power:n,unassigned:o,domains:r},Tt}function H(i,e){return!e||!i.entities?[]:Ct(i).areas.get(e)??[]}var Go={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Yo=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Qo=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Xo(i,e){let t=i.entities?.[e]?.device_id,n=t?Ct(i).domains.get(t):void 0;return n&&[...n].some(o=>Yo.has(o))?!1:!Qo.test(`${e} ${i.states[e]?.attributes.friendly_name??""}`)}function Rt(i,e,t,n){let o=t.climate?.[n];if(o==="none")return[];if(o)return i.states[o]?[o]:[];let r=Go[n],s=(u,p)=>R([u,p],t.points),a=e?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(a.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...H(i,t.area_id).filter(u=>!c.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&i.states[u]?.attributes.device_class===r&&Xo(i,u))}function Q(i){return i.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Jo(i,e){return e==="\xB0F"?(i-32)*5/9:e==="K"?i-273.15:i}function Re(i,e){return Q(i)==="\xB0F"?e*9/5+32:e}function Xe(i,e,t,n){let o=Rt(i,e,t,n).map(r=>{let s=Number(i.states[r]?.state);return n==="temperature"?Jo(s,i.states[r]?.attributes.unit_of_measurement):s}).filter(r=>Number.isFinite(r));return o.length?o.reduce((r,s)=>r+s,0)/o.length:null}function Pt(i,e){return i.entities?Ct(i).power.get(e)??[]:[]}function P(i,e,t){let o=i.states[e]?.attributes.friendly_name??i.entities?.[e]?.name??e;if(t&&o.length>t.length+1&&o.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=o.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return o}function F(i){return!i||i.state==="unavailable"||i.state==="unknown"}var Zo=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Ft(i){return!!i&&i.entity_id.startsWith("sensor.")&&i.attributes.device_class==="enum"}function de(i){if(!i)return!1;switch($(i.entity_id)){case"light":case"switch":case"fan":case"binary":return i.state==="on";case"cover":return i.state==="open"||i.state==="opening";case"climate":return i.attributes.hvac_action==="heating"||i.attributes.hvac_action==="cooling";case"media":return i.state==="playing";case"lock":return i.state==="unlocked"||i.state==="open";case"sensor":return Ft(i)&&Zo.has(String(i.state).toLowerCase());default:return!1}}function Pe(i){if(!i||i.state!=="on")return null;let e=i.attributes,t=typeof e.brightness=="number"?Math.max(.08,e.brightness/255):1,n=e.rgb_color,o;return n&&e.color_mode!=="color_temp"&&e.color_mode!=="brightness"&&e.color_mode!=="onoff"?o=[n[0]/255,n[1]/255,n[2]/255]:typeof e.color_temp_kelvin=="number"?o=er(e.color_temp_kelvin):o=[1,.71,.28],{color:o,level:t}}function er(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function _e(i,e,t=null){if(i==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(i==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(i){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var tr=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),nr=new Set(["garage","gate"]),ir=new Set(["window","opening"]);function Ce(i,e,t=!1){let n=new Map;return e.length&&i.forEach((o,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(o.id,s)}),n}function Je(i,e){let t=new Map;for(let n of e)for(let o of n.rooms){let r=n.openings.filter(h=>h.room_id===o.id).sort((h,x)=>h.edge-x.edge||h.offset-x.offset);if(!r.length)continue;let s=H(i,o.area_id),a=h=>i.states[h]?.attributes.device_class,l=s.filter(h=>$(h)==="cover"&&tr.has(a(h))),c=r.filter(h=>h.type==="window"),d=r.filter(h=>h.type==="door"),u=r.filter(h=>h.type==="garage"),p=Ce(c,l,!0),f=Ce(c,s.filter(h=>$(h)==="binary"&&ir.has(a(h)))),g=Ce(d,s.filter(h=>$(h)==="binary"&&a(h)==="door")),b=Ce(u,s.filter(h=>$(h)==="cover"&&nr.has(a(h)??""))),k=Ce(u,s.filter(h=>$(h)==="binary"&&a(h)==="garage_door")),_=(h,x)=>h==="none"?null:h??x??null;for(let h of r){let x=h.type==="window"?p:h.type==="garage"?b:null,y=h.type==="window"?f:h.type==="garage"?k:g;t.set(h.id,{cover:_(h.cover,x?.get(h.id)),contact:h.sensor==="handle"&&h.contact==null?null:_(h.contact,y.get(h.id)),tilt:h.tilt==="none"?null:h.tilt,contact2:h.leaves===2&&h.contact2&&h.contact2!=="none"?h.contact2:null,tilt2:h.leaves===2&&h.tilt2&&h.tilt2!=="none"?h.tilt2:null,position:h.position&&h.position!=="none"?h.position:null,positionInverted:!!h.position_inverted})}}return t}var or=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function rr(i){if(!i||F(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=or.find(([o])=>o.test(t.trim()));if(n)return n[1]}return null}var sr=.5;function Z(i,e,t="window"){let n=f=>!!f&&i.states[f]?.state==="on",o=f=>!!f&&!!i.states[f]&&!F(i.states[f]),r=f=>f?rr(i.states[f]):null,s=n(e.tilt2)||r(e.tilt2)==="tilted"||r(e.contact2)==="tilted",a=r(e.contact2)==="open"&&!s?1:0;if(t==="door"){let f=r(e.contact);return{open:f===null?sr:f==="closed"?0:1,open2:r(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:f!==null}}let l=n(e.tilt)||r(e.tilt)==="tilted"||r(e.contact)==="tilted",c=r(e.contact)==="open"&&!l?1:0,d=null,u=e.cover?i.states[e.cover]:void 0,p=ar(i,e.position);if(p!==null)d=e.positionInverted?p:1-p;else if(u&&!F(u)){let f=u.attributes.current_position;typeof f=="number"?d=1-Math.min(100,Math.max(0,f))/100:d=u.state==="closed"?1:u.state==="opening"||u.state==="closing"?.5:0}else e.cover&&(d=0);if(t==="garage"){let f=d!==null||o(e.contact);return d===null&&(d=o(e.contact)&&n(e.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:d,sensed:f}}return{open:c,open2:a,tilt:l?1:0,tilt2:s?1:0,cover:d,sensed:o(e.contact)||o(e.tilt)}}function ar(i,e){let t=e?i.states[e]:void 0;if(!t||F(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let o=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,o?n/100:n))}function Lt(i,e){let t=new Map,n=[];for(let s of e){let a=i.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let o=n.map(s=>{let a=t.get(s),l=a.find(c=>!i.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return o.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function Ht(i,e){return Lt(i,e).map(t=>t.primary)}var lr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},cr=new Set(["tv_board","tv_wall"]);function li(i,e){let t=i.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let o=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||o===r||r.length>=3&&o.includes(r)}function ci(i){return cr.has(i)||!!On(i)}function Ot(i){return ci(i)||i==="desk"||i==="fridge_smart"}function be(i,e){let t=new Set,n=ve(i,e),o=e.some(r=>r.openings.some(s=>s.confirm))?Je(i,e):null;for(let r of e){for(let s of r.placements)s.confirm&&t.add(s.entity_id);for(let s of r.openings){let a=s.confirm?o?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of r.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function Dt(i,e){let t=o=>{if(!o||o==="none")return!1;let r=i.states[o]?.state;return r==="on"||r==="open"},n=new Map;for(let o of e)for(let r of o.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var ni={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Nt(i,e){return e.startsWith("sensor.")&&i.states[e]?.attributes.device_class==="power"}function dr(i,e){if(Nt(i,e))return e;let t=i.entities?.[e]?.device_id;return t?Pt(i,t).find(n=>n!==e)??null:null}function ve(i,e){let t=new Map;for(let n of e){let o=new Set(n.furniture.flatMap(r=>[r.entity,r.power]).filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in ni,a=s?ni[r.type]:lr[r.type];if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&R([r.x,r.z],f.points)),c=l?Ht(i,H(i,l.area_id)):[],d=f=>`${f} ${P(i,f)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let f=c.filter(g=>!o.has(g));if(s){let g=f.filter(b=>$(b)==="light");u=g.find(b=>a.test(d(b)))??g[0]??null}else if(r.type==="robot_vacuum"){let g=l?.area_id??null;u=Object.keys(i.entities??{}).find(b=>b.startsWith("vacuum.")&&!o.has(b)&&ai(i,b)===g)??null}else if(r.type==="radiator"){let g=f.filter(b=>$(b)==="climate");u=g.find(b=>a.test(d(b)))??g[0]??null}else if(ci(r.type)){let g=f.filter(b=>$(b)==="media");u=g.find(b=>i.states[b]?.attributes.device_class==="tv")??g.find(b=>a?.test(d(b)))??g[0]??null}else a&&(u=f.find(g=>["switch","media","fan"].includes($(g)??"")&&a.test(d(g)))??null);u&&o.add(u)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=u?dr(i,u):null,!p&&a&&l&&!s&&(p=H(i,l.area_id).find(g=>Nt(i,g)&&!o.has(g)&&a.test(d(g)))??null),p&&o.add(p)),(u||p)&&t.set(r.id,{entity:u,power:p})}}return t}function di(i){if(!i||i.state==="off"||i.state==="standby"||F(i))return null;let e=i.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function ui(i,e,t){let n=(c,d)=>R([c,d],t.points),o=ve(i,[e]),r=Je(i,[e]),s=[...e.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[o.get(c.id)?.entity,o.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let d=r.get(c.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]].filter(c=>!!c&&!!i.states[c]),a=[...new Set(s)],l=new Set(a);return{shown:a,more:H(i,t.area_id).filter(c=>!l.has(c))}}var ii=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Vt(i,e,t){if(t==="none")return null;if(t)return t;let n=e?i.entities?.[e]?.device_id:null;if(!n||!i.entities)return null;for(let o of Object.values(i.entities))if(!(o.device_id!==n||!o.entity_id.startsWith("sensor."))&&(ii.test(o.translation_key??"")||ii.test(o.entity_id.split(".")[1])))return o.entity_id;return null}function oi(i){return i.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function pi(i,e,t,n){let o=n?i.states[n]?.state:t?i.states[t]?.attributes.current_room:void 0;if(typeof o!="string"||!o||o==="unknown"||o==="unavailable")return null;let r=oi(o);if(!r)return null;let s=a=>[a.name,a.area_id??"",a.area_id&&i.areas?.[a.area_id]?.name||""].map(oi).filter(Boolean);return e.find(a=>s(a).includes(r))??e.find(a=>s(a).some(l=>l.length>=3&&(l.includes(r)||r.includes(l))))??null}var ur={view:"3D",editor:"Disegna casa",all_floors:"Tutti i piani",no_building:"Non hai ancora disegnato la casa.",no_building_admin:"Non hai ancora disegnato la casa. Apri \xABDisegna casa\xBB e aggiungi il primo piano.",open_editor:"Apri editor",loading:"Caricamento \u2026",load_error:"Caricamento non riuscito",saving:"Salvataggio \u2026",saved:"Salvato",save_error:"Salvataggio non riuscito",save_failed_detail:"Salvataggio non riuscito: {error}. Le modifiche rimangono in questo browser.",needs_restart:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora {version}. Riavvia Home Assistant: fino ad allora il salvataggio potrebbe non riuscire.",needs_restart_old:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora quella precedente. Riavvia Home Assistant per poter salvare.",draft_found:"Trovate modifiche non salvate del {time}.",draft_restore:"Ripristina e salva",draft_discard:"Scarta",walls_auto:"Muri interi",walls_cut:"Muri tagliati",reset_view:"Panoramica",back:"Indietro",floor:"Piano",floors:"Piani",add_floor:"Aggiungi piano",floor_from_ha:"Piani di Home Assistant:",floor_empty:"Piano vuoto",level:"Livello {n}",ha_floor:"Piano in Home Assistant",no_ha_floor:"\u2013 nessuno \u2013",area_rooms:"Crea {n} stanze dalle aree di HA",area_rooms_hint:"Crea una stanza di 4 \xD7 3 m per ogni area del piano. Spostala nella posizione corretta e modifica gli angoli.",floor_name:"Nome",elevation:"Quota dal suolo (m)",height:"Altezza soffitto (m)",cut_height:"Altezza taglio (m)",delete_floor:"Elimina piano",delete_floor_confirm:"Eliminare il piano \xAB{name}\xBB con tutte le sue stanze?",move_up:"Sposta su",move_down:"Sposta gi\xF9",default_floor:"Piano terra",new_floor:"Piano {n}",tool_select:"Seleziona",tool_rect:"Rettangolo",tool_polygon:"Forma libera",undo:"Annulla",redo:"Ripeti",fit:"Mostra tutto",room:"Stanza",rooms:"Stanze",room_name:"Nome",area:"Area",no_area:"Nessuna area",material:"Pavimento",x:"X (m)",z:"Y (m)",width:"Larghezza (m)",depth:"Profondit\xE0 (m)",points:"Angoli",delete_point:"Elimina angolo",duplicate:"Duplica",delete:"Elimina",new_room:"Stanza {n}",settings:"Impostazioni",pendant_shape:"Forma",pendant_shade:"Paralume",pendant_globe:"Sfera",pendant_cone:"Cono",pendant_drum:"Cilindro",pkg_open:"Arreda \u2026",pkg_hint:"I mobili si dispongono lungo le pareti; le lampade si collegano alle luci dell'area. Puoi poi modificare ogni elemento. Ctrl+Z annulla tutto.",pkg_done:"Posizionati {n} elementi. Ctrl+Z annulla.",pkg_kitchen_row:"Cucina lineare",pkg_kitchen_row_desc:"Cucina sulla parete posteriore con frigorifero, forno, lavello, lavastoviglie, piano cottura, pensile e tavolo con lampada a sospensione",pkg_kitchen_l:"Cucina a L",pkg_kitchen_l_desc:"Cucina lungo le pareti posteriore e sinistra, isola con sgabelli",pkg_bath:"Bagno",pkg_bath_desc:"Lavabo, WC, vasca, lavatrice e faretto",pkg_bedroom:"Camera da letto",pkg_bedroom_desc:"Letto matrimoniale con due comodini, armadio, cassettiera e plafoniera",pkg_living:"Soggiorno",pkg_living_desc:"Mobile TV, divano, tavolino, tappeto, poltrona, scaffale, piantana e pianta",pkg_dining:"Sala da pranzo",pkg_dining_desc:"Tavolo con quattro sedie, credenza e lampada a sospensione",pkg_office:"Ufficio",pkg_office_desc:"Scrivania con sedia da ufficio, due scaffali e plafoniera",pkg_kids:"Cameretta",pkg_kids_desc:"Letto singolo, scrivania, scaffale e tappeto",pkg_hall:"Ingresso",pkg_hall_desc:"Appendiabiti e due faretti",spots_place:"Posiziona faretti",spots_type:"Lampada",spots_cols:"Colonne (sinistra\u2013destra)",spots_rows:"Righe (davanti\u2013dietro)",spots_add:"Posiziona {n} lampade",spots_placed:"Posizionate {n} lampade.",spots_hint:"Tutte le lampade seguono la luce scelta, per esempio faretti su un unico dimmer. Puoi poi spostarle o collegarle ad altre luci.",cancel:"Annulla",backup:"Backup",backup_history:"Punti di ripristino",backup_none:"Nessun punto disponibile. Durante le modifiche viene conservato al massimo un punto ogni 10 minuti.",backup_summary:"{rooms} stanze, {furniture} elementi",backup_restore:"Ripristina",backup_restore_confirm:"Ripristinare lo stato del {time}? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_restored:"Ripristinato.",backup_file:"File",backup_export:"Esporta",backup_export_share:"Condividi come modello",backup_export_share_hint:"Senza aree, dispositivi, sensori e immagini, per condividerlo con altri.",backup_import:"Importa \u2026",backup_import_confirm:"Sostituire l'intera pianta con il file? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_import_error:"Il file non \xE8 una pianta NeonCasa 3D ({error}).",backup_imported:"Importato.",backup_hint:"Le immagini di sfondo non sono incluse nel file.",backup_full:"Backup completo",backup_full_export:"Salva tutto (pianta, immagini e pacchetti)",backup_full_import:"Ripristina un backup completo \u2026",backup_full_hint:"Un unico file con pianta, sfondi, immagini degli schermi e pacchetti installati. Al ripristino i pacchetti vengono verificati nuovamente; la chiave di licenza non \xE8 inclusa.",backup_full_confirm:"Sostituire pianta, immagini e pacchetti con il backup? Lo stato attuale rimarr\xE0 come punto di ripristino.",backup_full_not_backup:"Questo non \xE8 un backup completo di NeonCasa 3D.",backup_full_restored:"Backup ripristinato: {packs} pacchetti, {pictures} immagini.",backup_full_skipped:"Ignorati (non verificabili o legati a un'altra installazione): {packs}.",export_name_full:"completo",device_confirm:"Chiedi conferma prima di azionare",device_confirm_hint:"Il tocco nella vista 3D, il menu rapido e il pannello stanza chiedono conferma. Il doppio tocco sulla stanza esclude questo dispositivo.",cover_confirm_hint:"Apertura, chiusura e posizione richiedono conferma. Scorrere sull'indicatore ruota la vista senza muovere la tapparella. L'arresto non richiede conferma.",confirm_switch:"Azionare davvero {name}?",split_handle_hint:"Trascina per regolare la larghezza della pianta e della vista 3D",wall_exterior:"Spessore muro esterno (m)",wall_interior:"Spessore muro interno (m)",grid:"Griglia (m)",background:"Modello (immagine della piantina)",background_upload:"Scegli immagine \u2026",background_width:"Larghezza nella pianta (m)",background_opacity:"Opacit\xE0",background_remove:"Rimuovi modello",hint_select:"Seleziona una stanza \xB7 trascina gli angoli \xB7 \xAB+\xBB aggiunge un angolo \xB7 frecce per spostare \xB7 Canc elimina \xB7 Ctrl+Z annulla",hint_rect:"Trascina per disegnare un rettangolo",hint_polygon:"Posiziona gli angoli \xB7 clicca sul primo o premi Invio per chiudere \xB7 Esc annulla",hint_empty:"Aggiungi prima un piano.",area_m2:"{a} m\xB2",overlap_warning:"Le stanze si sovrappongono: i muri in quel punto sono incompleti.",read_only:"Solo gli amministratori possono modificare la pianta.",mat_wood:"Legno",mat_oak:"Rovere",mat_tiles:"Piastrelle",mat_carpet:"Moquette",mat_stone:"Pietra",mat_concrete:"Cemento",card_name:"NeonCasa 3D",card_description:"La tua casa in 3D, in italiano.",stats:"{calls} chiamate grafiche \xB7 {tris} triangoli",stats_fps:"{fps} fps (fotogramma pi\xF9 lento: {ms} ms)",stats_idle:"A riposo (0 fps)",stats_busy_camera:"inquadratura",stats_busy_floors:"piani",stats_busy_openings:"porte/finestre",stats_busy_flash:"lampeggio",stats_busy_roof:"tetto",stats_busy_flow:"flusso energetico",stats_busy_effect:"effetto colore",stats_busy_robot:"robot",stats_busy_orbit:"rotazione vista",stats_busy_tint:"colore stanza",stats_low:"qualit\xE0 tablet, rapporto pixel {r}",stats_full:"qualit\xE0 completa, rapporto pixel {r}",floors_apart:"Separati",floors_stacked:"Sovrapposti",floor_rooms_one:"1 stanza",floor_rooms:"{n} stanze",quality:"Qualit\xE0",quality_auto:"Automatica",quality_low:"Tablet",quality_high:"Alta",state_on:"Acceso",state_off:"Spento",state_open:"Aperto",state_closed:"Chiuso",state_opening:"Apertura",state_closing:"Chiusura",state_playing:"In riproduzione",state_paused:"In pausa",state_idle:"Inattivo",state_locked:"Bloccato",state_unlocked:"Sbloccato",state_detected:"Rilevato",state_clear:"Nessun rilevamento",state_unavailable:"Non disponibile",state_heat:"Riscaldamento",state_cool:"Raffrescamento",state_auto:"Automatico",state_heat_cool:"Caldo/freddo",state_dry:"Deumidificazione",state_fan_only:"Ventilazione",devices:"Dispositivi",devices_none_area:"Collega la stanza a un'area per visualizzare qui i suoi dispositivi.",devices_none:"L'area non contiene dispositivi adatti.",devices_place_all_n:"Posiziona tutti i {n} dispositivi \u2026",devices_place_all_confirm:"Posizionare {n} dispositivi nella stanza? Ctrl+Z o \xABAnnulla\xBB li rimuove tutti in un solo passaggio.",devices_src_area:"Questa area",devices_src_other:"Altre aree",devices_src_none:"Senza area",devices_place:"Posiziona",devices_remove:"Rimuovi",devices_hint:"I dispositivi posizionati appaiono in 3D. Trascinali nella pianta per spostarli.",panel_lights:"Luci",panel_covers:"Tapparelle",panel_climate:"Riscaldamento",panel_media:"Multimedia",panel_switches:"Interruttori",panel_sensors:"Sensori",panel_scenes:"Scene e script",panel_cameras:"Telecamere",camera_live:"Apri diretta",through_camera:"Guarda dalla telecamera",through_blend:"Sovrapposizione",through_back:"Torna alla vista",camera_mount:"Montaggio",camera_mount_wall:"Parete (segue la rotazione)",camera_mount_ceiling:"Soffitto (dome, tutto intorno)",camera_fov:"Campo visivo (\xB0)",camera_reach:"Portata (m)",camera_fov_short:"Angolo \xB0",camera_reach_short:"Portata m",camera_tilt:"Inclinazione verso il basso (\xB0)",camera_tilt_short:"Inclinazione \xB0",camera_aim_hint:"Il settore nella pianta indica dove guarda la telecamera. Trascina la maniglia sulla punta per ruotarla e regolare la portata.",state_recording:"Registrazione",state_streaming:"Trasmissione",panel_all_off:"Spegni tutto",panel_no_area:"La stanza non \xE8 collegata a un'area. Puoi collegarla nell'editor.",panel_empty:"Nessun dispositivo della stanza \xE8 nella pianta. Posizionalo nell'editor o aggiungilo al pannello stanza con \u2606.",close:"Chiudi",brightness:"Luminosit\xE0",color_temp:"Temperatura colore",color:"Colore",position:"Posizione",cover_open:"Apri",cover_stop:"Arresta",cover_close:"Chiudi",target_temp:"Desiderata",current_temp:"Attuale",temp_down:"Pi\xF9 freddo",temp_up:"Pi\xF9 caldo",volume:"Volume",play_pause:"Riproduci/pausa",previous:"Precedente",next:"Successivo",run:"Esegui",details:"Dettagli",hold_hint:"Tocco per azionare \xB7 pressione prolungata per i dettagli",tool_opening:"Porte e finestre",tool_furniture:"Arredamento",qm_off:"Spento",find:"Cerca",find_placeholder:"Dov'\xE8 \u2026? Dispositivo o stanza",find_none:"Nessun risultato",swipe_off:"Spento",panel_pin:"Mostra nel pannello stanza",panel_unpin:"Nascondi dal pannello stanza",devices_panel_hint:"Il pannello mostra i dispositivi della pianta. \u2606 aggiunge un dispositivo al pannello senza posizionarlo.",card_section_view:"Vista",card_size:"Dimensioni",card_size_fixed:"Altezza fissa",card_size_fill:"Riempi lo schermo",card_fill_hint:"Funziona meglio in una vista dashboard di tipo \xABPannello (scheda singola)\xBB: la scheda occupa tutto lo spazio.",card_controls:"Controlli nella scheda",card_floor_thumbs:"Miniature dei piani",card_floor_thumbs_hint:"Piccole immagini dei piani a lato: toccane una per cambiare piano",card_floor_thumbs_hint_start:"La scheda si apre sul piano scelto; le immagini laterali permettono di passare agli altri",card_room_names:"Mostra nomi stanze",card_section_kiosk:"Tablet a parete (chiosco)",card_section_features:"Funzioni",card_weather_plan:"come impostato nella pianta",card_pro_hint:"La traccia del movimento e il meteo sono extra Pro: senza il relativo extra questi comandi non hanno effetto.",card_idle_return:"Torna alla vista iniziale dopo",card_idle_off:"Mai",card_idle_min:"{n} min senza interazioni",card_idle_hint:"Dopo l'attesa la scheda chiude la stanza e torna alla vista iniziale.",card_night:"Oscuramento notturno",card_night_off:"Disattivato",card_night_sun:"In base al sole",card_night_time:"Fascia oraria",card_night_range:"Fascia oraria (es. 22:00-06:00)",card_idle_orbit:"Rotazione vista come salvaschermo",card_idle_orbit_hint:"Dopo il ritorno la vista ruota lentamente finch\xE9 qualcuno tocca il tablet",card_alerts:"Mostra avvisi",card_alerts_hint:"Fumo, gas, CO, acqua, allarme e finestre aperte sotto la pioggia: la stanza lampeggia e compare un avviso in alto",card_alert_jump:"Vai alla stanza di un nuovo avviso",card_alert_jump_hint:"La vista passa automaticamente al piano e alla stanza dell'avviso",card_scenes:"Pulsanti scene nella stanza",card_scenes_hint:"Scene e script dell'area sotto la vista 3D quando \xE8 selezionata una stanza",card_motion_trail:"Traccia del movimento",card_motion_trail_hint:"Movimenti rilevati negli ultimi 30 minuti, con orari (sensori di movimento, presenza e telecamere)",trail_short:"Traccia",weather_short:"Meteo",weather_entity:"Entit\xE0 meteo",weather_effects:"Effetti meteo in 3D",rain_warning:"Attenzione: finestra aperta mentre piove",weather_effect_rain:"Pioggia",weather_effect_snow:"Neve",weather_effect_fog:"Nebbia (ingrigisce la scena)",weather_effect_clouds:"Le nuvole oscurano cielo e sole",weather_effect_lightning:"Fulmini durante i temporali",weather_effect_sky:"Sole e luna nel cielo",weather_entity_hint:"L'entit\xE0 meteo fornisce pioggia, neve, nebbia e nuvole. La selezione automatica usa la prima disponibile.",weather_hint:"Meteo esterno: pioggia, neve, nebbia e nuvole dall'entit\xE0 meteo; sole e luna da sun.sun",card_weather:"Meteo esterno",card_weather_hint:"Pioggia, neve, nebbia e nuvole dalla prima entit\xE0 meteo; weather_entity permette di cambiarla. Con qualit\xE0 tablet vengono mostrate solo le nuvole.",trail_hint:"Traccia dei movimenti rilevati negli ultimi 30 minuti, con orari",alerts:"Avvisi",alert_smoke:"Fumo: {name}",alert_gas:"Gas: {name}",alert_co:"Monossido di carbonio: {name}",alert_water:"Acqua: {name}",alert_alarm:"Allarme scattato",alert_alarm_pending:"Allarme in attesa",alert_window_rain:"Finestra aperta sotto la pioggia: {name}",room_names_short:"Nomi stanze",floor_stack_short_dim:"Attenuati",floor_stack_short_stacked:"Sovrapposti",floor_stack_short_single:"Singolo",size_short_w:"L",size_short_d:"P",size_short_h:"H",import_error_not_json:"Il file non \xE8 in formato JSON.",import_error_not_plan:"Il file non \xE8 una pianta NeonCasa 3D.",export_name_template:"modello",export_name_backup:"backup",card_floor_stack:"Piani sottostanti",floor_stack_dim:"Attenuati",floor_stack_stacked:"Sovrapposti (casa fino a qui)",floor_stack_single:"Nascosti (solo questo piano)",card_control_walls:"Muri interi/tagliati",card_control_floors:"Separa piani",card_control_temperature:"Temperatura",card_control_humidity:"Umidit\xE0",card_control_co2:"CO\u2082",card_controls_hint:"Comandi per muri, separazione piani, temperatura, umidit\xE0 e CO\u2082",card_fullscreen_button:"Pulsante schermo intero",card_fullscreen_button_hint:"Nasconde la dashboard intorno alla scheda, ad esempio su un tablet a parete",fullscreen:"Schermo intero",fullscreen_exit:"Esci da schermo intero",card_section_show:"Mostra",card_floor:"Piano",card_floor_house:"Casa intera (tocca un piano per aprirlo)",card_height:"Altezza (pixel)",card_walls:"Muri",card_quality_hint:"\xABTablet\xBB \xE8 l'impostazione pi\xF9 leggera, ideale per tablet Fire e tablet a parete.",card_flows_switch:"Comando nella scheda",card_flows_on:"Sempre attivo",card_flows_off:"Sempre disattivato",card_energy:"Mostra valori energetici in alto",card_room_panel:"Dettagli stanza al tocco",card_room_panel_hint:"Luci, tapparelle e telecamere della stanza in un pannello laterale",card_explode:"Separa i piani nella vista casa",card_stats:"Prestazioni (fotogrammi al secondo)",card_stats_hint:"Per verificare la fluidit\xE0 della scheda sul dispositivo",packs:"Pacchetti di arredamento",packs_hint:"Si possono importare solo pacchetti firmati dall'editore.",lib_badge_light:"Lampada: collegabile a una luce e azionabile in 3D",lib_badge_electric:"Elettrico: collegabile a un'entit\xE0 e a un sensore di potenza (comandi, immagini e consumi)",lib_badge_hint:"Gli elementi con simbolo si collegano alle entit\xE0: lampade azionabili, schermi con immagini ed elettrodomestici con consumi.",pack_error_wrong_instance:"Pacchetto firmato per un'altra installazione Home Assistant. L'account del negozio pu\xF2 fornirlo per questa installazione.",license_title:"Collegamento al negozio",license_instance:"ID installazione",license_copy:"Copia",license_copied:"ID copiato",license_activate:"Attiva",license_activated:"Collegato: i tuoi pacchetti sono elencati sotto.",license_active:"Collegato come {name} (chiave {key})",license_checked:"Ultimo controllo: {time}",license_refresh:"Controlla ora",license_refreshed:"Controllo completato.",license_remove:"Scollega",license_remove_confirm:"Scollegare il negozio? I pacchetti installati rimangono, ma gli aggiornamenti automatici si interrompono.",license_installed:"installato \xB7 v{release}",license_update_available:"disponibile aggiornamento alla v{release}",license_not_installed:"non ancora installato",license_install:"Installa",license_update:"Aggiorna",license_none:"Nessun pacchetto nell'account.",license_hint:"La chiave di licenza si trova nell'ordine e nell'account su mastershort.de. Inseriscila per vedere i pacchetti acquistati, firmati per questa installazione e aggiornati automaticamente una volta al giorno. I pacchetti installati funzionano anche senza collegamento.",license_shop:"Altri pacchetti nel negozio",license_error_invalid_key:"Chiave non riconosciuta dal negozio. Il formato \xE8 NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"La chiave \xE8 gi\xE0 associata al numero massimo di installazioni consentite.",license_error_shop_unreachable:"Negozio momentaneamente non raggiungibile. I pacchetti installati continuano a funzionare.",license_error_not_owned:"Questo pacchetto non \xE8 presente nell'account.",license_error_no_key:"Inserisci prima la chiave di licenza.",license_error_wrong_instance:"Il negozio ha firmato il pacchetto per un'altra installazione.",license_error_other:"Operazione non riuscita: {detail}",pack_import:"Importa pacchetti di arredamento \u2026",pack_imported:"Importato \xAB{name}\xBB di {publisher}: {n} elementi",packs_imported_n:"Importati {n} pacchetti su {total}",pack_by:"di {publisher} \xB7 {n} elementi",pack_features:"di {publisher} \xB7 abilita {n} funzioni Pro",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Pannello telecamere: vista dalla telecamera e traccia del movimento",pro_name_camera_cockpit:"Pannello telecamere",pro_name_weather:"Meteo esterno",pro_name_screens:"Schermi dal vivo",ext_tab:"Estensioni",offers_title:"Novit\xE0 nel negozio",offers_new:"NOVIT\xC0",offers_loyalty:"Sconto fedelt\xE0: {percent} % su ogni ulteriore pacchetto ed extra Pro",offers_kind_pack:"Pacchetto arredamento",offers_kind_pro:"Extra Pro",offers_kind_bundle:"Raccolta",offers_dot:"Novit\xE0 nel negozio",pack_updated:"{name} aggiornato alla versione {release}.",pack_updated_added:"{name} aggiornato alla versione {release}: {n} nuovi elementi. Guarda il catalogo!",ext_title:"Estensioni",ext_intro:"Pacchetti arredamento ed extra Pro dell'autore di NeonPlan 3D. Installa gli acquisti con la chiave di licenza: si aggiornano automaticamente e funzionano anche senza collegamento.",ext_shop:"Apri negozio",ext_pro:"Extra Pro",ext_active:"attivo",ext_get:"Vedi nel negozio",ext_open:"Apri estensioni",manual:"Manuale",manual_more:"Scopri di pi\xF9",ext_teaser_title:"Altri mobili e funzioni Pro",ext_teaser_text:"Pacchetti arredamento, collegamento al negozio ed extra Pro si trovano in \xABEstensioni\xBB in alto.",pro_feature_weather:"Meteo esterno: pioggia, neve, nuvole, sole e luna",pro_feature_screens:"Schermi dal vivo: colore dell'app e immagini multimediali, regole immagini e immagini delle telecamere sugli schermi",pro_locked:"Funzione disponibile come extra Pro. Dopo l'acquisto appare in Estensioni \u203A Collegamento al negozio, da cui puoi installarla.",pro_shop:"Vai al negozio",pack_licensed:"Licenza intestata a {name}",pack_remove:"Rimuovi",pack_remove_confirm:"Rimuovere \xAB{name}\xBB? I suoi mobili rimarranno nella pianta come semplici blocchi.",pack_missing_item:"Mobile di un pacchetto rimosso",pack_error_bad_signature:"Il pacchetto \xE8 stato modificato o la firma non \xE8 valida.",pack_error_unknown_publisher:"Il pacchetto non proviene da un editore riconosciuto.",pack_error_unsigned:"Il pacchetto non \xE8 firmato.",pack_error_not_a_pack:"Il file non \xE8 un pacchetto di arredamento.",pack_error_invalid_content:"Il pacchetto contiene elementi non validi: {detail}",pack_error_too_large:"Il file \xE8 troppo grande.",pack_error_other:"Importazione non riuscita: {detail}",back_to_room:"Torna a {room}",back_to_floor:"Torna al piano",hint_furniture:"Seleziona una stanza e scegli un elemento a destra \xB7 trascina gli elementi e ridimensionali dagli angoli",furniture_into:"I nuovi elementi vengono inseriti al centro di \xAB{room}\xBB.",furniture_pick_room:"Consiglio: seleziona prima una stanza per inserire i nuovi elementi al centro.",flows:"Flusso energetico",flows_hint:"Mostra o nasconde le linee luminose dal contatore alle utenze",flow_on:"attivo",flow_off:"disattivato",hint_opening:"Clicca su un muro per inserire una porta o finestra; scegli il tipo a destra",preset_door:"Porta",preset_door_double:"Porta a due ante",preset_window:"Finestra",preset_window_double:"Finestra a due ante",preset_terrace:"Portafinestra",preset_terrace_double:"Portafinestra a due ante",preset_garage:"Portone garage",preset_front:"Porta d'ingresso",opening_style:"Stile",style_auto:"Automatico ({style})",style_interior:"Porta interna",style_front:"Porta d'ingresso",style_front_glass:"Porta d'ingresso vetrata",style_sidelight:"Porta d'ingresso con vetro laterale",style_sidelights:"Porta d'ingresso con due vetri laterali",style_glass:"Porta in vetro",style_sliding:"Porta scorrevole",style_passage:"Passaggio (senza porta)",style_standard:"Standard",style_bars:"Con traversini",flip_hinge:"Scambia lato cerniere",flip_main_leaf:"Scambia anta principale",flip_hinge_hint:"Sposta le cerniere sull'altro lato",flip_swing:"Inverti verso di apertura",flip_swing_hint:"La porta si apre verso la stanza oppure verso l'esterno",main_leaf:"Anta principale (vista dalla stanza)",contact_main:"Contatto anta principale",contact_second:"Contatto seconda anta",tool_outdoor:"Esterni",tool_measure:"Disegna con misure",hint_measure:"Clicca sul punto iniziale, poi inserisci a destra lunghezze e direzioni dei muri",measure:"Stanza con misure",measure_start:"Clicca sul punto iniziale nella pianta, ad esempio un angolo della stanza.",measure_from:"Partenza: {x} / {z} m. Clicca per spostarla.",measure_length:"Lunghezza muro successivo (m)",measure_close:"Chiudi stanza",measure_undo:"Rimuovi ultimo muro",measure_gap:"Distanza dal punto iniziale: {gap} m (unita alla chiusura)",measure_hint:"Inserisci una lunghezza e premi una freccia. Se usi misure interne, applica poi \xABChiudi spazi\xBB.",rect_by_size:"Rettangolo con dimensioni",rect_add:"Aggiungi rettangolo",dir_up:"Su",dir_down:"Gi\xF9",dir_left:"Sinistra",dir_right:"Destra",hint_outdoor:"Trascina per disegnare un'area esterna (prato, terrazza, piscina \u2026)",outdoor:"Area esterna",outdoor_type:"Tipo",outdoor_hint:"Le luci esterne illuminano tutte le aree esterne e la facciata.",out_lawn:"Prato",out_terrace:"Terrazza",out_path:"Sentiero",out_driveway:"Vialetto carrabile",out_pool:"Piscina",out_bed:"Aiuola",out_hedge:"Siepe",out_fence:"Recinzione",north:"Nord (\xB0 in senso orario dall'alto)",north_hint:"Il nord serve a calcolare la luce del sole attraverso le finestre.",roof:"Tetto",roof_none:"Nessun tetto",roof_flat:"Tetto piano",roof_gable:"Tetto a due falde",roof_custom:"Sezioni del tetto (personalizzate)",roof_sections:"Sezioni del tetto",roof_sections_hint:"Ogni sezione copre un rettangolo della casa con forma, colmo, quota di gronda e pendenza propri. Trascina per disegnarla; clicca per selezionarla, trascinala per spostarla e usa gli angoli per ridimensionarla.",roof_sections_start:"Crea sezioni dalle stanze",roof_sections_regen:"Ricrea dalle stanze",roof_sections_off:"Torna al tetto unico",roof_regen_confirm:"Sostituire tutte le sezioni del tetto con una nuova proposta basata sulle stanze?",roof_section:"Sezione tetto",roof_section_hint:"Le quote partono dal suolo. Un lato con gronda pi\xF9 bassa scende maggiormente. I tetti a una falda salgono dal primo lato.",roof_shape_gable:"Due falde",roof_shape_hip:"Padiglione",roof_shape_pent:"Una falda",roof_shape_flat:"Piano",roof_axis_x:"Colmo \u2194",roof_axis_z:"Colmo \u2195",roof_eave:"Quota gronda (m)",roof_pitch_short:"Pendenza (\xB0)",roof_height:"Altezza (m)",roof_base:"Sommit\xE0 muri (m)",roof_ridge_height:"Altezza colmo",roof_side_top:"superiore",roof_side_bottom:"inferiore",roof_side_left:"sinistra",roof_side_right:"destra",roof_swap:"Scambia lati",roof_open:"Tettoia (pilastri al posto dei muri)",roof_open_short:"Tettoia",roof_open_hint:"Per terrazze e posti auto coperti: pilastri e travi sostengono il tetto lasciando la vista aperta. Dove incontra il muro della casa, la tettoia si appoggia al muro.",roof_swap_hint:"Scambia gronda e pendenza dei due lati; un tetto a una falda sale nell'altro verso.",roof_pitch:"Pendenza tetto (\xB0)",roof_overhang:"Sporgenza tetto (m)",roof_ridge:"Colmo",roof_ridge_long:"Lungo il lato maggiore",roof_ridge_short:"Lungo il lato minore (es. casa a schiera)",device:"Dispositivo",lamp_mount:"Lampada",lamp_ceiling:"Plafoniera",lamp_floor:"Piantana",lamp_table:"Lampada da tavolo",lamp_wall:"Applique",marker_height:"Altezza indicatore (m)",height_auto:"Altezza automatica",device_centre:"Al centro della stanza",lights_spread:"Distribuisci uniformemente le luci a soffitto",devices_search:"Cerca dispositivi \u2026",devices_more:"Altri {n}",devices_less:"Meno",panel_more:"Altri dispositivi dell'area ({n})",panel_less:"Mostra meno",gaps_close:"Chiudi spazi",gaps_hint:"Unisce stanze distanti fino a 60 cm lungo un muro condiviso. Lo spazio diventa lo spessore del muro interno.",gaps_none:"Nessuno spazio tra le stanze trovato.",gaps_closed:"Chiusi {n} spazi.",gaps_closed_wall:"Chiusi {n} spazi. Spessore muro interno: {t} m.",fps:"FPS",fps_title:"Prestazioni (fotogrammi al secondo)",hint_garage:"Clicca su un muro per aggiungere un portone garage",opening_garage:"Portone garage",garage_hint:"Il portone segue l'entit\xE0 del garage (posizione o aperto/chiuso) o il contatto porta dell'area.",door_hint:"Con un contatto porta l'anta segue l'apertura; senza sensore rimane socchiusa.",hint_door:"Clicca su un muro per aggiungere una porta",hint_window:"Clicca su un muro per aggiungere una finestra",opening_door:"Porta",opening_window:"Finestra",opening_type:"Tipo",opening_position:"Centro dall'angolo (m)",sill:"Altezza davanzale (m)",opening_height:"Altezza (m)",hinge:"Cerniere (vista dalla stanza)",hinge_left:"Sinistra",hinge_right:"Destra",cover_entity:"Tapparella",cover_position_entity:"Sensore posizione (dal vivo)",cover_position_invert:"Sensore invertito (0 = aperto)",contact_entity:"Contatto",sensor_kind:"Tipo sensore",sensor_kind_contact:"Contatto finestra (aperto/chiuso)",sensor_kind_handle:"Sensore maniglia (aperto/ribalta/chiuso)",sensor_kind_contact_tilt:"Contatto + sensore ribalta",handle_entity:"Sensore maniglia",handle_main:"Sensore maniglia anta principale",leaf_main:"Anta principale",leaf_second:"Seconda anta",tilt_entity:"Sensore ribalta",entity_auto:"Automatico ({name})",entity_auto_none:"Automatico (nessuno trovato)",entity_none:"Nessuno",entity_search:"Scrivi per cercare \u2026",opening_hint:"Scegli contatto finestra (aperto/chiuso), sensore maniglia (aperto/ribalta/chiuso) o contatto con sensore ribalta separato. La scelta automatica usa tapparelle e contatti dell'area. Il sensore posizione comunica la posizione della tapparella mentre si muove (0\u2013100 % o 0\u20131, aperto = valore alto) per animarla in 3D.",furniture:"Arredamento",furniture_add:"Aggiungi mobile",furniture_search:"Cerca arredamento \u2026",furniture_type:"Elemento",rotation:"Rotazione (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altezza (m)",furn_sofa:"Divano",furn_armchair:"Poltrona",furn_table:"Tavolo",furn_chair:"Sedia",furn_bed:"Letto",furn_nightstand:"Comodino",furn_wardrobe:"Armadio",furn_shelf:"Scaffale",furn_kitchen:"Base cucina",furn_worktop:"Piano di lavoro",furn_fridge:"Frigorifero",furn_fridge_smart:"Frigorifero smart a due porte",furn_door_left:"Sensore porta sinistra (congelatore)",furn_door_right:"Sensore porta destra (frigorifero)",fridge_hint:"Quando il sensore segnala apertura, la porta si apre in 3D. Lo schermo sulla porta destra mostra immagini secondo le regole, come una TV, mentre la porta \xE8 chiusa.",furn_stove:"Piano cottura",furn_sink:"Lavello",furn_bathtub:"Vasca",furn_shower:"Doccia",furn_wc:"WC",furn_washbasin:"Lavabo",furn_desk:"Scrivania",furn_tv_board:"Mobile TV",furn_plant:"Pianta",furn_rug:"Tappeto",furn_stairs:"Scale",furn_stairwell:"Apertura nel solaio",stairwell_hint:"Apertura in questo piano, per esempio sopra le scale o un soppalco. Deve stare dentro una stanza; pi\xF9 aperture possono sovrapporsi per formare una L. Le scale del piano inferiore che raggiungono questo piano creano l'apertura automaticamente.",tool_hole:"Apertura solaio",tool_roof:"Tetto",tool_energy:"Energia",tool_wall:"Muro",hint_wall:"Trascina per disegnare un muro divisorio \xB7 Maiusc lo mantiene dritto \xB7 Alt disattiva l'aggancio",free_wall:"Muro",wall_length:"Lunghezza (m)",wall_thickness:"Spessore muro (m)",wall_height:"Altezza (m)",wall_height_full:"Altezza intera della stanza",wall_heights:"Altezze muri",wall_n:"Muro {a}\u2013{b}",wall_exterior_short:"muro esterno",room_wall_hint:"Un'altezza ridotta crea un parapetto o un bancone. Per muri condivisi vale l'altezza minore. Porte e finestre terminano all'altezza del muro.",free_wall_hint:"Muro indipendente, per esempio un divisorio. L'incontro con un muro della stanza viene raccordato. Trascina le estremit\xE0 per modificarle o la linea per spostare tutto il muro.",stairwell_outside:"L'apertura supera il confine della stanza e non viene ritagliata. Spostala completamente dentro una stanza o riducila.",hint_hole:"Trascina per disegnare un'apertura nel solaio (scale, soppalco)",hint_roof:"Trascina per disegnare una sezione del tetto \xB7 clicca per selezionare \xB7 trascina per spostare \xB7 angoli per ridimensionare",hint_energy:"Seleziona e trascina un campo fotovoltaico, anche su un'altra falda \xB7 aggiungi campi con + Campo fotovoltaico a destra",furn_parking:"Posto auto",furn_group_vehicles:"Parcheggio",parking_entity:"Sensore \xABauto presente\xBB",parking_vehicle:"Veicolo",parking_vehicle_none:"Nessuno",parking_no_pack:"Nessun pacchetto veicoli importato. I veicoli provengono dal pacchetto \xABVehicles\xBB (Arredamento \u2192 Importa pacchetti).",parking_scale:"Dimensione (%)",parking_type_entity:"Sensore tipo veicolo (facoltativo)",parking_types:"Stato \u2192 veicolo",parking_type_state:"Stato (es. furgone)",parking_add_type:"+ Associazione",parking_hint:"Senza sensore il veicolo \xE8 sempre presente. Con un sensore appare con gli stati \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensore tipo veicolo seleziona il modello associato allo stato, anche se contenuto nel testo; altrimenti viene mostrato il modello predefinito.",parking_too_tall:"Il veicolo ({car} m) \xE8 pi\xF9 alto della stanza ({room} m).",furn_lamp_ceiling:"Plafoniera",furn_lamp_downlight:"Faretto da incasso",furn_lamp_spot:"Faretto a superficie",furn_lamp_panel:"Pannello LED",furn_lamp_uplight:"Piantana a luce indiretta",furn_lamp_bollard:"Paletto luminoso",furn_lamp_garden:"Faretto da giardino",furn_radiator:"Radiatore",furn_robot_vacuum:"Robot aspirapolvere",furn_entity_vacuum:"Robot aspirapolvere",furn_robot_room:"Stanza attuale (sensore)",robot_hint:"Durante la pulizia il robot percorre traiettorie simulate nella stanza indicata dal sensore \xABstanza attuale\xBB, abbinata per nome, oppure nella stanza della base. Home Assistant normalmente non conosce la posizione esatta. Al ritorno il robot rientra alla base.",furn_lamp_pendant:"Lampada a sospensione",furn_lamp_floor:"Piantana",furn_lamp_table:"Lampada da tavolo",furn_lamp_wall:"Applique",furn_led_strip:"Striscia LED",furn_group_lights:"Luci",furn_entity_light:"Luce o interruttore",furn_entity_climate:"Riscaldamento (termostato)",lamp_hint:"Tocca la lampada in 3D per azionarla; tieni premuto per il menu rapido. Funzionano anche gli interruttori, ad esempio un rel\xE8. Le lampade da tavolo si appoggiano sul mobile sottostante.",lamp_hint_pendant:"Altezza = distanza sotto il soffitto. Tocca in 3D per azionare; tieni premuto per i dettagli.",theme:"Aspetto",theme_neon:"Neon",theme_blueprint:"Disegno tecnico",theme_day:"Giorno",furnish:"Arreda",split_3d:"3D affiancato",mount_height:"Altezza dal pavimento (m)",side_open:"Apri pannello laterale",side_close:"Chiudi",side_details:"Dettagli della selezione",side_pin:"Fissa",side_pinned:"Fissato",side_pin_hint:"Se fissato, il pannello rimane aperto; altrimenti si chiude accanto al 3D quando non \xE8 selezionato nulla",split_3d_hint:"Vista 3D in tempo reale accanto alla pianta: trascina e ruota mobili e dispositivi, con annullamento e salvataggio nella pianta",size_w:"Larghezza (m)",size_d:"Profondit\xE0 (m)",size_h:"Altezza (m)",furnish_hint:"Trascina mobili, lampade e dispositivi \xB7 i mobili si agganciano ai muri \xB7 seleziona per ruotare e regolare altezza e montaggio",done:"Fatto",heatmap:"Mappa dei valori",heat_off:"Normale",heat_short_temperature:"Temp.",heat_short_humidity:"Umidit\xE0",heat_short_co2:"CO\u2082",heat_temperature:"Temperatura",heat_humidity:"Umidit\xE0",heat_co2:"CO\u2082",heat_none_found:"Nessun sensore adatto nelle aree delle stanze.",markers:"Indicatori",markers_none:"Nessuno",markers_important:"Importanti",markers_all:"Tutti",furn_stool:"Sgabello",furn_coffee_table:"Tavolino",furn_tv_wall:"TV a parete",furn_sideboard:"Credenza",furn_table_round:"Tavolo rotondo",furn_bench:"Panca",furn_corner_bench:"Panca angolare",furn_bar_stool:"Sgabello da bar",furn_kitchen_wall:"Pensile",furn_kitchen_tall:"Colonna forno",furn_island:"Isola cucina",furn_dishwasher:"Lavastoviglie",furn_bunk_bed:"Letto a castello",furn_dresser:"Cassettiera",furn_washer:"Lavatrice",furn_dryer:"Asciugatrice",furn_office_chair:"Sedia da ufficio",furn_tall_cabinet:"Mobile alto",furn_coat_rack:"Appendiabiti",furn_group_living:"Soggiorno",furn_group_dining:"Sala da pranzo",furn_group_energy:"Energia e fotovoltaico",energy_devices:"Dispositivi",solar_pro_title:"Fotovoltaico ed Energia Pro",solar_pro_soon:"prossimamente",solar_pro_1:"Moduli che si animano al sole e si illuminano in base alla produzione",solar_pro_2:"Linee dei flussi energetici nella casa: provenienza e destinazione dell'energia",solar_pro_3:"Ologramma trasparente con potenza, curva giornaliera, produzione e autosufficienza",solar_pro_4:"Valori delle stringhe, batteria, wallbox e rete a colpo d'occhio",solar_pro_free:"Tutto ci\xF2 che configuri qui (campi, stringhe, dispositivi e sensori) rimane gratuito e viene utilizzato direttamente dall'extra Pro.",wallbox_charging:"in carica",wallbox_plugged:"collegata",furn_soc:"Stato di carica (%)",furn_wallbox_status:"Stato (in carica, collegata)",energy_only_note:"\u26A1 Energia: qui puoi spostare solo campi fotovoltaici e dispositivi energetici. Stanze e mobili sono bloccati.",roof_only_note:"\u{1F3E0} Tetto: qui puoi spostare solo sezioni del tetto e lucernari. Stanze e mobili sono bloccati.",energy_devices_hint:"Aggiungi inverter, batterie domestiche e wallbox sul piano selezionato. Puoi spostarli nella pianta. Il sensore di potenza mostra i watt; ogni stringa pu\xF2 essere associata a un inverter.",solar_fields:"Campi fotovoltaici",solar_hint:"Posiziona i moduli sul tetto: seguono la pendenza della falda; sui tetti piani sono montati su supporti. Trascina un campo per spostarlo.",solar_no_roof:"Serve un tetto: piano o a due falde nelle Impostazioni, oppure sezioni nello strumento Tetto.",solar_face_gone:"falda mancante",solar_summary:"{n} moduli \xB7 {kwp} kWp",solar_add:"Campo fotovoltaico",solar_field:"Campo fotovoltaico",solar_face:"Falda del tetto",solar_rows:"Righe",solar_cols:"Moduli per riga",solar_portrait:"Verticale",solar_landscape:"Orizzontale",solar_u:"Distanza dal bordo (m)",solar_v:"Distanza dalla gronda (m)",solar_tilt:"Inclinazione supporti (\xB0)",solar_flip:"Inclina nell'altro verso",solar_partial:"sulla falda entrano solo {n} moduli su {total}",solar_form_hint:"I moduli oltre il bordo della falda vengono esclusi. \xABRiempi falda\xBB ne inserisce il massimo possibile. Il calcolo dei kWp considera 400 W per modulo.",solar_fit:"Riempi falda",roof_windows:"Lucernari",roof_window:"Lucernario",roof_windows_hint:"I lucernari seguono la falda, con tapparella e contatti come le finestre. Trascinali nella pianta, anche su un'altra falda.",roof_window_tilt:"Contatto ribalta",roof_window_hint:"L'anta aperta ruota verso l'esterno con cerniere in alto; in ribalta si apre leggermente. La tapparella scende dall'alto sul vetro.",solar_ground:"Indipendente (giardino, tetto garage \u2026)",solar_add_ground:"Indipendente",solar_base:"Quota superficie (m, 0 = suolo)",solar_add_wall:"Su un muro",solar_wall:"Muro",solar_v_wall:"Altezza dal pavimento (m)",solar_tilt_wall:"Inclinazione dal muro (\xB0, 90 = pensilina)",solar_flip_wall:"Distanzia la parte inferiore anzich\xE9 quella superiore",solar_rotation:"Rotazione (\xB0)",solar_name:"Nome",solar_name_hint:"es. stringa 1 sud",solar_module_w:"Larghezza modulo (m)",solar_module_h:"Altezza modulo (m)",solar_string:"Stringa",solar_strings:"Stringhe",solar_string_none:"Nessuna stringa",solar_string_new:"Nuova stringa",solar_string_n:"Stringa {n}",solar_string_name:"Nome stringa",solar_string_entity:"Potenza FV della stringa",solar_string_inverter:"Inverter",solar_string_inverter_none:"Nessun inverter selezionato",solar_string_inverter_missing:"Nessun inverter nella pianta: aggiungilo sotto, in Dispositivi",solar_string_hint:"I campi della stessa stringa sono associati anche su tetti diversi. Sensore e inverter si riferiscono all'intera stringa.",solar_string_sum:"{fields} campi \xB7 {n} moduli \xB7 {kwp} kWp",solar_face_size:"Falda {w} \xD7 {h} m (lungo la gronda \xD7 lungo la pendenza)",solar_cols_hint:"Un numero per righe uguali oppure un elenco, ad esempio \xAB4, 4, 3\xBB, partendo dalla gronda.",solar_align_left:"Sinistra",solar_align_center:"Centro",solar_align_right:"Destra",solar_look_black:"Nero integrale",solar_look_blue:"Blu",solar_pick:"Attiva/disattiva singoli moduli",solar_pick_all:"Riattiva tutti",solar_pick_hint:"Clicca un modulo nella pianta per rimuoverlo o reinserirlo. Quelli rimossi sono tratteggiati.",solar_entity:"Potenza FV di questo campo (es. della sua stringa)",solar_main:"Tetto principale",solar_section:"Sezione {n}",solar_flat:"tetto piano",compass_n:"nord",compass_ne:"nord-est",compass_e:"est",compass_se:"sud-est",compass_s:"sud",compass_sw:"sud-ovest",compass_w:"ovest",compass_nw:"nord-ovest",furn_inverter:"Inverter fotovoltaico",furn_home_battery:"Batteria domestica",furn_wallbox:"Wallbox",furn_group_kitchen:"Cucina",furn_group_sleeping:"Camera da letto",furn_group_bath:"Bagno e lavanderia",furn_group_work:"Lavoro e altro",furn_entity:"Dispositivo (interruttore, presa \u2026)",furn_entity_tv:"TV (lettore multimediale o presa smart)",fix:"Blocca",unfix:"Sblocca",fix_hint:"Bloccato: evita spostamenti accidentali (tasto L, clic destro o pressione prolungata)",fixed_drag_hint:"\u{1F512} Bloccato: sbloccalo prima di spostarlo (lucchetto nel pannello, clic destro o tasto L)",fixed_delete_confirm:"Questo elemento \xE8 bloccato. Eliminarlo comunque?",lock_plan:"\u{1F512} Pianta",lock_plan_hint:"Blocca stanze, muri, porte, finestre e aree esterne per evitare spostamenti accidentali. Mobili e dispositivi rimangono liberi.",ctx_rotate:"Ruota di 90\xB0",devices_placed_in:"in {room}",devices_narrow:"Altri {n}: restringi la ricerca",climate:"Clima della stanza",climate_temperature:"Temperatura",climate_humidity:"Umidit\xE0",climate_co2:"CO\u2082",climate_hint:"Sensori usati nella mappa dei valori e nel pannello stanza. \xABAutomatico\xBB usa quelli dell'area e quelli posizionati nella stanza, escludendo le temperature dei dispositivi (stampante 3D, pompa di calore, mandata \u2026).",plan_locked:"Pianta bloccata",plan_lock:"Blocca pianta",plan_unlock:"Sblocca pianta",opening_mark:"Evidenzia in 3D",opening_mark_open:"Quando aperto",opening_mark_closed:"Quando chiuso (es. WC)",opening_mark_hint:"La porta o finestra evidenziata emette una luce calda. \xABQuando chiuso\xBB richiede un contatto; senza sensore non viene evidenziata.",marker_show:"Indicatore in 3D",marker_show_hint:"Automatico segue la scelta Nessuno / Importanti / Tutti. Mostra sempre e Nascondi prevalgono, tranne quando \xE8 selezionato Nessuno.",marker_show_auto:"Automatico",marker_show_always:"Mostra sempre",marker_show_no_power:"Senza watt",marker_show_never:"Nascondi",furn_power:"Sensore potenza (W)",furn_links_hint:"Con un sensore di potenza l'elemento mostra i watt e un collegamento energetico.",screen_pictures:"Immagini in base allo stato",screen_pictures_hint:"Confronta lo stato o un attributo dell'entit\xE0, ad esempio app_name della TV. Un valore corrisponde se \xE8 uguale o contenuto nel testo; \xAB*\xBB significa sempre. Vale la prima regola corrispondente. Le immagini vengono ridotte a 512 px. Puoi usare anche un URL o una telecamera, aggiornata ogni 5 secondi quando visibile. Senza corrispondenze viene mostrato il lettore multimediale.",picture_state:"\xE8 o contiene \u2026 (es. netflix)",picture_state_of:"Stato",picture_attribute:"Confronta stato o attributo",picture_pick:"Scegli immagine \u2026",picture_change:"Cambia immagine \u2026",picture_url:"oppure URL immagine",picture_add_value:"+ Valore",picture_reuse:"Usa un'immagine salvata",picture_camera:"oppure una telecamera (immagine dal vivo) \u2026",picture_camera_none:"Nessuna telecamera",screen_bg:"Sfondo dietro l'immagine",screen_bg_black:"Scuro",screen_bg_white:"Bianco",picture_add_entity:"+ Altra entit\xE0",picture_current:"ora: {value}",picture_matches:"\u2713 corrisponde: questa immagine \xE8 visibile",furn_links_hint_tv:"Lo schermo si illumina quando la TV \xE8 accesa, con il colore dell'app (Netflix, YouTube \u2026). L'etichetta mostra app o titolo.",stairs_hint:"La scala sale verso il retro, allontanandosi dal bordo anteriore segnato, e apre il solaio del piano superiore.",floor_lights:"Luci accese: {n}",floor_open:"{n} aperti",floor_persons:"{n} persone",energy_consumption:"Consumo",energy_grid_import:"Prelievo dalla rete",energy_grid_export:"Immissione in rete",energy_solar:"Fotovoltaico",energy_battery:"Batteria",energy_tariff:"Tariffa",energy:"Energia",energy_meter:"Contatore",energy_meter_set:"Posiziona contatore",energy_meter_remove:"Rimuovi contatore",energy_meter_hint:"Clicca nella pianta sulla posizione del contatore o dell'allaccio di casa.",energy_grid:"Rete (W, + = prelievo)",energy_solar_sensor:"Produzione fotovoltaica (W)",energy_battery_sensor:"Potenza batteria (W, + = scarica)",energy_battery_soc:"Carica batteria (%)",energy_tariff_sensor:"Tariffa (es. \u20AC/kWh)",energy_invert:"Inverti segno",energy_hint:"Le utenze sono dispositivi posizionati con un sensore di potenza in W, proprio o dello stesso dispositivo.",tool_meter:"Contatore",hint_meter:"Clicca sulla posizione del contatore",presence:"Presenza",presence_hint:"Sensore stanza per persona (es. ESPresense, Bermuda): lo stato indica il nome della stanza o dell'area.",presence_sensor:"Sensore stanza",no_persons:"Non ci sono persone in Home Assistant."};function S(i,e,t={}){let n=ur[e]??e;for(let[o,r]of Object.entries(t))n=n.replaceAll(`{${o}}`,String(r));return n}function V(i,e,t=2){return e.toLocaleString(i?.language??"it-IT",{maximumFractionDigits:t})}var pr=["camera_cockpit","weather","screens"],hr=["fridge_smart"];var hi=i=>(i??navigator.language).toLowerCase().startsWith("de");function mi(i){return hi(i)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var mr={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function fi(i,e){let t=hi(i),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",o=e?mr[e]:void 0,r=o?t?o.de:o.en:"",[s,a]=r.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function fr(i=Te()){let e=new Set;for(let t of i)for(let n of t.features??[])(pr.includes(n)||hr.includes(n))&&e.add(n);return e}function W(i,e){return fr(e).has(i)}var gi={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Ze(i){return gi[i]}function Fe(i){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${gi[i]}"/></svg>`}var ee=(i,e)=>S(i,e);function O(i,e){if(!e||F(e))return ee(i,"state_unavailable");let t=e.attributes;switch($(e.entity_id)){case"light":return e.state!=="on"?ee(i,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:ee(i,"state_on");case"switch":case"fan":return ee(i,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:et(i,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${V(i,t.current_temperature,1)} ${i?Q(i):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${ee(i,"state_off")}`:ee(i,"state_off"):n??et(i,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",o=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return n&&o?o:et(i,e.state)}case"lock":case"camera":return et(i,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?ee(i,e.state==="on"?"state_open":"state_closed"):ee(i,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),o=t.unit_of_measurement??"",r=i?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${V(i,n,r)}${o?` ${o}`:""}`:e.state}default:return""}}function et(i,e){let t=`state_${e}`,n=S(i,t);return n===t?e:n}function _i(i,e){let t=[];for(let n of e.floors)for(let o of n.placements){let r=$(o.entity_id),s=i.states[o.entity_id];if(!r||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&R([o.x,o.z],c.points))??null,l=a?.area_id?i.areas?.[a.area_id]?.name:void 0;t.push({id:o.entity_id,floorId:n.id,roomId:a?.id??null,x:o.x,z:o.z,y:o.y??_e(r,n.height,o.mount??null),lamp:r==="light"?o.mount??"ceiling":null,model:r==="camera"?o.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:r==="camera"?gr(i,o.entity_id):void 0,fov:o.fov??void 0,reach:o.reach??void 0,tilt:o.tilt??void 0,rotation:o.rotation??0,icon:Fe(r),name:P(i,o.entity_id,l),text:O(i,s),active:de(s),unavailable:F(s),glow:r==="light"?Pe(s):null,show:o.marker??void 0,fixed:!!o.locked})}return t}function gr(i,e){return Le(i,e).some(t=>i.states[t]?.state==="on")}function Le(i,e){let t=i.entities?.[e]?.device_id;return t?Object.values(i.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(i.states[n]?.attributes.device_class))):[]}function bi(i){return i.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function te(i,e){i.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function vi(i,e){let t=e.slice(0,e.indexOf("."));return i.callService(t,"toggle",{entity_id:e})}var j=U`
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
`,ne=U`
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
`;var _r=4,br=3e3,vr=8,yr=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ye=i=>m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Ze(i)} />
  </svg>`,tt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},qt=i=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${i} /></svg>`,Ut=class extends D{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},br)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return S(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return P(this.hass,e,this.areaName)}nameButton(e){return m`<button class="nc3d-rp-name" title=${this.t("details")} @click=${()=>te(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return m`<button
      class="nc3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${F(e)}
      @click=${o}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return v;let t=H(this.hass,e.area_id),n=this.memo,{shown:o,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?ui(this.hass,this.floor,e):{shown:t,more:[]}},s=Lt(this.hass,r).map(y=>y.primary),a=s.length,l=this._showAll?[...o,...s]:o,c=y=>l.filter(M=>y.includes($(M))).map(M=>this.hass.states[M]),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),f=c(["media"]),g=c(["switch","fan","lock"]),b=c(["sensor","binary"]),k=c(["camera"]);this.hasCameras=k.length>0;let _=c(["scene","script"]),h=this.facts(p),x=d.filter(y=>y.state==="on");return m`<section class="nc3d-rp" aria-label=${e.name}>
      <header class="nc3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${h.length?m`<p class="nc3d-rp-facts">${h.join(" \xB7 ")}</p>`:v}
        </div>
        <button class="nc3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nc3d-rp-body">
        ${e.area_id?l.length?v:m`<p class="nc3d-rp-note">${this.t("panel_empty")}</p>`:m`<p class="nc3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(y=>this.lightRow(y)),x.length?m`<button class="nc3d-btn nc3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:x.map(y=>y.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:v):v}
        ${u.length?this.section("panel_covers",u.map(y=>this.coverRow(y))):v}
        ${p.length?this.section("panel_climate",p.map(y=>this.climateRow(y))):v}
        ${f.length?this.section("panel_media",f.map(y=>this.mediaRow(y))):v}
        ${g.length?this.section("panel_switches",g.map(y=>this.switchRow(y))):v}
        ${k.length?this.section("panel_cameras",k.map(y=>this.cameraTile(y))):v}
        ${b.length?this.section("panel_sensors",b.map(y=>this.sensorRow(y))):v}
        ${_.length?this.section("panel_scenes",[m`<div class="nc3d-rp-scenes">
                  ${_.map(y=>m`<button
                      class="nc3d-btn"
                      ?disabled=${F(y)}
                      @click=${()=>this.call($(y.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:y.entity_id})}
                    >
                      ${this.name(y.entity_id)}
                    </button>`)}
                </div>`]):v}
        ${a?m`<button class="nc3d-btn nc3d-rp-small nc3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:v}
      </div>
    </section>`}facts(e){let t=[],n=this.room,o=(l,c)=>{let d=Xe(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${V(this.hass,Re(this.hass,d),1)} ${Q(this.hass)}`;let u=Rt(this.hass,this.floor,n,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${V(this.hass,d,1)} ${p}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?t.push(s):r&&n.climate?.temperature!=="none"&&t.push(`${V(this.hass,r.attributes.current_temperature,1)} ${Q(this.hass)}`);let a=o("humidity","%");return a&&t.push(a),t}section(e,t,n=v){return m`<div class="nc3d-rp-sec">
      <div class="nc3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",o=t.supported_color_modes??[],r=o.some(p=>p!=="onoff"),s=o.includes("color_temp"),a=o.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return m`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${n?"nc3d-rp-on":""}">${ye("light")}</span>
      ${this.nameButton(u)}
      <span class="nc3d-rp-state">${O(this.hass,e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&r?m`<label class="nc3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:v}
      ${n&&s?m`<label class="nc3d-rp-slider nc3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:v}
      ${n&&a?m`<div class="nc3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${yr.map(p=>m`<button
                class="nc3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:v}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,o=e.entity_id,r=F(e);return m`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon">${ye("cover")}</span>
      ${this.nameButton(o)}
      <span class="nc3d-rp-state">${O(this.hass,e)}</span>
      <div class="nc3d-rp-buttons">
        <button class="nc3d-btn nc3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${n&vr?m`<button class="nc3d-btn nc3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:v}
        <button class="nc3d-btn nc3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${n&_r&&typeof t.current_position=="number"?m`<label class="nc3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:v}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return m`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${t.hvac_action==="heating"?"nc3d-rp-on":""}">${ye("climate")}</span>
      ${this.nameButton(n)}
      <span class="nc3d-rp-state">${O(this.hass,e)}</span>
      ${o!==null?m`<div class="nc3d-rp-stepper nc3d-rp-wide">
            <button class="nc3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${V(this.hass,o,1)} ${Q(this.hass)}</span>
            <button class="nc3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+r)}>+</button>
          </div>`:v}
      ${l.length>1?m`<div class="nc3d-rp-chips">
            ${l.map(d=>m`<button
                class="nc3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:v}
    </div>`}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,o=F(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return m`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${e.state==="playing"?"nc3d-rp-on":""}">${ye("media")}</span>
      ${this.nameButton(n)}
      <span class="nc3d-rp-state">${this.stateLabel(e.state)}</span>
      ${r?m`<p class="nc3d-rp-media nc3d-rp-wide">${r}</p>`:v}
      <div class="nc3d-rp-buttons nc3d-rp-wide">
        <button class="nc3d-btn nc3d-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${qt(tt.previous)}
        </button>
        <button class="nc3d-btn nc3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${F(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${qt(e.state==="playing"?tt.pause:tt.play)}
        </button>
        <button class="nc3d-btn nc3d-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${qt(tt.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?m`<label class="nc3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:v}
    </div>`}switchRow(e){let t=e.entity_id,n=$(t),o=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return m`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${r?"nc3d-rp-on":""}">${ye(n)}</span>
      ${this.nameButton(t)}
      <span class="nc3d-rp-state">${O(this.hass,e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!F(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}nc3d=${this._tick}`:null,o=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return m`<div class="nc3d-rp-camera-wrap">
      <button class="nc3d-rp-camera" title=${this.t("camera_live")} @click=${()=>te(this,e.entity_id)}>
        ${n?m`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:m`<span class="nc3d-rp-note">${O(this.hass,e)}</span>`}
        <span class="nc3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${o?m`<button
            class="nc3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${W("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:v}
    </div>`}sensorRow(e){let t=$(e.entity_id),n=t==="binary"&&e.state==="on";return m`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${n?"nc3d-rp-on":""}">${ye(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nc3d-rp-state">${O(this.hass,e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[j,ne,U`
      :host {
        display: block;
      }
      .nc3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-line);
        border-radius: 18px;
        box-shadow: var(--nc3d-shadow);
        overflow: hidden;
      }
      .nc3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--nc3d-line);
      }
      .nc3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--nc3d-title-font);
        letter-spacing: -0.01em;
      }
      .nc3d-rp-facts {
        margin: 2px 0 0;
        color: var(--nc3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .nc3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .nc3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .nc3d-rp-small {
          min-height: 36px;
        }
      }
      .nc3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--nc3d-text);
        cursor: pointer;
      }
      .nc3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .nc3d-rp-note {
        color: var(--nc3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .nc3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--nc3d-muted);
      }
      .nc3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--nc3d-line);
      }
      .nc3d-rp-row:last-child {
        border-bottom: none;
      }
      .nc3d-rp-row > :nth-child(n + 5),
      .nc3d-rp-row > .nc3d-rp-wide {
        grid-column: 2 / -1;
      }
      .nc3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--nc3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .nc3d-rp-on {
        color: #2a1a00;
        background: var(--nc3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .nc3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--nc3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .nc3d-rp-state {
        font-size: 12.5px;
        color: var(--nc3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nc3d-rp-row > .nc3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .nc3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .nc3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .nc3d-switch[aria-checked="true"] {
        background: var(--nc3d-warm);
      }
      .nc3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .nc3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .nc3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--nc3d-muted);
      }
      .nc3d-rp-slider input {
        width: 100%;
        accent-color: var(--nc3d-accent);
      }
      .nc3d-rp-ct input {
        accent-color: var(--nc3d-warm);
      }
      .nc3d-rp-swatches,
      .nc3d-rp-buttons,
      .nc3d-rp-chips,
      .nc3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nc3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .nc3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--nc3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .nc3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .nc3d-rp-camera-wrap {
        position: relative;
      }
      .nc3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--nc3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--nc3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .nc3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--nc3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .nc3d-rp-more {
        justify-self: start;
      }
      .nc3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .nc3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .nc3d-rp-stepper small {
        color: var(--nc3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .nc3d-rp-stepper .nc3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .nc3d-rp-chips .nc3d-chip {
        box-shadow: none;
        border: 1px solid var(--nc3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .nc3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--nc3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--nc3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("nc3d-room-panel")||customElements.define("nc3d-room-panel",Ut);var wr={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function He(i,e){return e&&i.states[e]?e:Object.keys(i.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function yi(i,e){let t=e?i.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=wr[t.state];if(!n)return null;let o=t.attributes,r=n.cloud??0;typeof o.cloud_coverage=="number"&&(r=Math.min(1,Math.max(0,o.cloud_coverage/100)));let s=n.wind??0;if(typeof o.wind_speed=="number"){let a=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:t.entity_id,condition:t.state,rain:n.rain??0,snow:n.snow??0,fog:n.fog??0,cloud:r,wind:s,lightning:!!n.lightning}}function wi(i,e){let t=new Set(e??Un);return{...i,rain:t.has("rain")?i.rain:0,snow:t.has("snow")?i.snow:0,fog:t.has("fog")?i.fog:0,cloud:t.has("clouds")?i.cloud:0,lightning:t.has("lightning")&&i.lightning,sky:t.has("sky")}}var xr=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),xi={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function ki(i,e,t){let n=[];for(let s of e.floors)for(let a of s.rooms){let l=H(i,a.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!xi[String(i.states[c]?.attributes.device_class)]);l.length&&n.push({floorId:s.id,roomId:a.id,sensors:l})}let o=Object.keys(i.states),r=e.settings.rain_warning===!1?null:He(i,t??e.settings.weather_entity);return{rooms:n,alarms:o.filter(s=>s.startsWith("alarm_control_panel.")),weather:r}}function $i(i){return[...i.rooms.flatMap(e=>e.sensors),...i.alarms,...i.weather?[i.weather]:[]]}function Si(i,e,t,n){let o=[];for(let s of t.rooms)for(let a of s.sensors){let l=i.states[a];l?.state==="on"&&o.push({kind:xi[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!t.weather&&xr.has(i.states[t.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let c=Z(i,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||o.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of t.alarms){let a=i.states[s]?.state;a==="triggered"?o.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&o.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return o}function Mi(i){switch(i){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function Wt(i,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,o=i?P(i,t.entity):t.entity,r=S(i,`alert_${t.kind}`,{name:o});return n?`${n.name} \xB7 ${r}`:r}var K=(i,e)=>[i[0]-e[0],i[1]-e[1]],Oe=(i,e)=>[i[0]+e[0],i[1]+e[1]],ue=(i,e)=>[i[0]*e,i[1]*e],Bt=(i,e)=>i[0]*e[0]+i[1]*e[1],De=(i,e)=>i[0]*e[1]-i[1]*e[0],nt=i=>Math.hypot(i[0],i[1]),Ne=i=>{let e=nt(i)||1;return[i[0]/e,i[1]/e]},zi=i=>[-i[1],i[0]],Ei=i=>[i[1],-i[0]];function jt(i,e,t=[]){let n=e.eps??.005,o=[],r=t.filter(_=>Math.hypot(_.b[0]-_.a[0],_.b[1]-_.a[1])>.05),s=[],a=_=>{for(let h=0;h<s.length;h++)if(Math.abs(s[h][0]-_[0])<=n&&Math.abs(s[h][1]-_[1])<=n)return h;return s.push([_[0],_[1]]),s.length-1},l=[];for(let _ of i){let h=_.points;if(h.length<3||Math.abs(J(h))<1e-6)continue;let x=J(h)>0,y=h.map(a);for(let M=0;M<h.length;M++){let I=y[M],E=y[(M+1)%h.length];I!==E&&l.push(x?{u:I,v:E,room:_.id,edge:M,forward:!0}:{u:E,v:I,room:_.id,edge:M,forward:!1})}}let c=r.map(_=>[a(_.a),a(_.b)]),d=[];for(let _ of l){let h=s[_.u],x=s[_.v],y=K(x,h),M=nt(y),I=ue(y,1/M),E=[];for(let C=0;C<s.length;C++){if(C===_.u||C===_.v)continue;let w=K(s[C],h),z=Bt(w,I);z<=n||z>=M-n||Math.abs(De(I,w))<=n&&E.push({t:z,id:C})}E.sort((C,w)=>C.t-w.t);let T=[{t:0,id:_.u},...E,{t:M,id:_.v}];for(let C=0;C+1<T.length;C++){let w=T[C],z=T[C+1],q=_.forward?w.t:M-z.t,G=_.forward?z.t:M-w.t;d.push({u:w.id,v:z.id,room:_.room,edge:_.edge,t0:q,t1:G})}}let u=new Map;for(let _ of d){let h=_.u<_.v?`${_.u}-${_.v}`:`${_.v}-${_.u}`,x=u.get(h);x||u.set(h,x=[]),x.push(_)}let p=_=>({room_id:_.room,edge:_.edge,t0:_.t0,t1:_.t1}),f=_=>{let h=_.map(x=>i.find(y=>y.id===x.room)?.wall_heights?.[x.edge]).filter(x=>typeof x=="number"&&x>0);return h.length?Math.min(...h):void 0},g=[];for(let _ of u.values()){let h=_[0],x=_.find(y=>y!==h&&y.u===h.v&&y.v===h.u&&y.room!==h.room);for(let y of _)y!==h&&y!==x&&y.room!==h.room&&o.push(`overlap:${h.room}:${y.room}`);x?g.push({a:h.u,b:h.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:h.room,roomRight:x.room,sources:[p(h),p(x)],height:f([h,x])}):g.push({a:h.u,b:h.v,left:0,right:e.exterior,exterior:!0,roomLeft:h.room,roomRight:null,sources:[p(h)],height:f([h])})}r.forEach((_,h)=>{let[x,y]=c[h];if(x===y)return;let M=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],I=i.find(C=>C.points.length>=3&&R(M,C.points))?.id??null,E=(_.thickness??e.interior)/2,T=typeof _.height=="number"&&_.height>0?_.height:void 0;g.push({free:_.id,a:x,b:y,left:E,right:E,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:T})}),g=$r(g,s);let b=Mr(g,s);return{walls:g.map((_,h)=>{let x=s[_.a],y=s[_.b],M=b.get(`${h}:a`),I=b.get(`${h}:b`),E=zr([M.right,I.left,y,I.right,M.left,x],1e-6);return{id:kr(x,y),a:[x[0],x[1]],b:[y[0],y[1]],left:_.left,right:_.right,exterior:_.exterior,roomLeft:_.roomLeft,roomRight:_.roomRight,sources:_.sources,footprint:E,..._.free?{free:_.free}:{},..._.height!==void 0?{height:_.height}:{}}}),warnings:[...new Set(o)]}}function kr(i,e){let t=r=>Math.round(r*100),[n,o]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(o[0])}_${t(o[1])}`}function Ai(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function $r(i,e){let t=i.slice(),n=!0;for(;n;){n=!1;let o=new Map;t.forEach((r,s)=>{for(let a of[r.a,r.b]){let l=o.get(a);l||o.set(a,l=[]),l.push(s)}});for(let[r,s]of o){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==r&&(a=Ai(a)),l.a!==r&&(l=Ai(l)),a.a===l.b)continue;let c=Ne(K(e[a.b],e[a.a])),d=Ne(K(e[l.b],e[l.a]));if(Math.abs(De(c,d))>1e-6||Bt(c,d)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let u={...a,b:l.b,sources:Sr(a.sources,l.sources)},p=t.filter((f,g)=>g!==s[0]&&g!==s[1]);p.push(u),t.length=0,t.push(...p),n=!0;break}}return t}function Sr(i,e){let t=i.map(n=>({...n}));for(let n of e){let o=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):t.push({...n})}return t}function Mr(i,e){let t=new Map;i.forEach((o,r)=>{let s=Ne(K(e[o.b],e[o.a])),a=[[o.a,{key:`${r}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${r}:b`,d:ue(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,r]of t){let s=e[o];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:Oe(s,ue(zi(c.d),c.left)),right:Oe(s,ue(Ei(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=Oe(s,ue(zi(d.d),d.left)),f=Oe(s,ue(Ei(u.d),u.right)),g=De(d.d,u.d);if(Math.abs(g)<1e-4)continue;let b=De(K(f,p),u.d)/g,k=Oe(p,ue(d.d,b));nt(K(k,s))>l||(n.get(d.key).left=k,n.get(u.key).right=k)}}return n}function zr(i,e){let t=i.filter((o,r)=>nt(K(o,i[(r+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let o=0;o<t.length;o++){let r=t[(o+t.length-1)%t.length],s=t[o],a=t[(o+1)%t.length],l=K(s,r),c=K(a,s);if(Math.abs(De(Ne(l),Ne(c)))<1e-7&&Bt(l,c)>0){t=t.filter((d,u)=>u!==o),n=!0;break}}}return t}var pe=.03,Er=.07;function we(i,e=!1){if(!i)return null;let t=Number(i.state);if(!Number.isFinite(t))return null;let n=String(i.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function Ar(i,e){return e.startsWith("sensor.")&&i.states[e]?.attributes.device_class==="power"}function Kt(i,e){if(Ar(i,e))return e;let t=i.entities?.[e]?.device_id;return t?Pt(i,t).find(n=>n!==e)??null:null}function Ci(i,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),o=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=Kt(i,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),o.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,we(i.states[l])??0)}))}return o}function Ri(i,e,t){let n=e.energy,o=n.grid?we(i.states[n.grid],n.grid_invert):null,r=n.solar?we(i.states[n.solar]):null,s=n.battery?we(i.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(i.states[n.battery_soc]?.state):NaN,l=n.tariff?i.states[n.tariff]:void 0,c=Number(l?.state),d=null;return o!==null||r!==null||s!==null?d=Math.max(0,(o??0)+Math.max(0,r??0)+(s??0)):t.length&&(d=t.reduce((u,p)=>u+p.power,0)),{grid:o,solar:r===null?null:Math.max(0,r),battery:s,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(c)?{value:c,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:d}}function it(i,e){return i.pos.push(e),i.adj.push([]),i.pos.length-1}function xe(i,e,t){let n=Math.hypot(i.pos[e][0]-i.pos[t][0],i.pos[e][1]-i.pos[t][1]);i.adj[e].push({to:t,w:n}),i.adj[t].push({to:e,w:n})}function Ir(i,e){let t=i.length,n=i.map((o,r)=>{let s=i[(r+1)%t],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[o[0]+d*e[r],o[1]+u*e[r]],d:[a/c,l/c],n:[d,u]}});return i.map((o,r)=>{let s=n[(r-1+t)%t],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[o[0]+a.n[0]*e[r],o[1]+a.n[1]*e[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Tr(i){return J(i.points)>=0?{pts:i.points,flipped:!1}:{pts:[...i.points].reverse(),flipped:!0}}function Cr(i,e,t){let n={pos:[],adj:[],rings:new Map},{walls:o}=jt(i.rooms,{exterior:e,interior:t},i.walls??[]);for(let r of i.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=Tr(r),l=s.length,c=s.map((p,f)=>{let g=a?(l-2-f+l)%l:f,b=o.some(k=>!k.exterior&&k.sources.some(_=>_.room_id===r.id&&_.edge===g));return Er+(b?t/2:0)}),d=Ir(s,c).map(p=>it(n,p)),u=d.map((p,f)=>[p,d[(f+1)%l]]);for(let[p,f]of u)xe(n,p,f);n.rings.set(r.id,u)}for(let r of o){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=ot(n,r.roomLeft,s),l=ot(n,r.roomRight,s);a!==null&&l!==null&&xe(n,a,l)}return n}function ot(i,e,t){let n=i.rings.get(e);if(!n)return null;let o=null;for(let s of n){let a=i.pos[s[0]],l=i.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),f=[a[0]+c*p,a[1]+d*p],g=Math.hypot(t[0]-f[0],t[1]-f[1]);(!o||g<o.d)&&(o={seg:s,q:f,d:g})}if(!o)return null;let r=it(i,o.q);return xe(i,r,o.seg[0]),xe(i,r,o.seg[1]),r}function Ii(i,e){let t=i.rooms.filter(r=>r.points.length>=3),n=t.find(r=>R(e,r.points));if(n)return n;let o=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!o||a<o.d)&&(o={room:r,d:a})}return o?.room??null}function Rr(i,e){let t=i.pos.map(()=>1/0),n=i.pos.map(()=>-1),o=i.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!o[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;o[r]=!0;for(let{to:s,w:a}of i.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,n[s]=r)}return{dist:t,prev:n}}var Ti=new WeakMap;function Pr(i,e){let t=i.energy.meter,n=i.floors.find(d=>d.id===t.floor_id),o=[],{wall_exterior:r,wall_interior:s}=i.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=i.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),f=p.every(b=>e[b].kind==="battery")?"battery":"consumer";o.push({floorId:n.id,a:[t.x,pe,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:f});let g=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,pe,t.z],dist:g,members:p,kind:f}),a.set(d.id,g+.25)}for(let d of c){let u=Cr(d,r,s),p=Ii(d,[t.x,t.z]);if(!p)continue;let f=it(u,[t.x,t.z]),g=ot(u,p.id,[t.x,t.z]);if(g===null)continue;xe(u,f,g);let b=[];for(let y of l.get(d.id)){let M=e[y],I=Ii(d,[M.x,M.z]);if(!I)continue;let E=it(u,[M.x,M.z]),T=ot(u,I.id,[M.x,M.z]);T!==null&&(xe(u,E,T),b.push({node:E,member:y}))}let{dist:k,prev:_}=Rr(u,f),h=new Map;for(let y of b)if(Number.isFinite(k[y.node]))for(let M=y.node;_[M]>=0;M=_[M]){let I=_[M],E=`${I}>${M}`,T=h.get(E)??{a:I,b:M,members:[]};T.members.push(y.member),h.set(E,T)}let x=a.get(d.id)??0;for(let{a:y,b:M,members:I}of h.values()){let E=u.pos[y],T=u.pos[M],C=I.every(w=>e[w].kind==="battery")?"battery":"consumer";o.push({floorId:d.id,a:[E[0],pe,E[1]],b:[T[0],pe,T[1]],dist:x+k[y],members:I,kind:C})}}return o}function Pi({building:i,consumers:e,summary:t,battery:n}){let o=i.energy.meter;if(!o)return[];let r=i.floors.find(f=>f.id===o.floor_id);if(!r)return[];let{wall_exterior:s,wall_interior:a}=i.settings,l=e.map(f=>({floorId:f.floorId,x:f.x,z:f.z,kind:"consumer",power:f.power}));n&&t.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(t.battery)});let c=`${o.floor_id}:${o.x},${o.z}|${l.map(f=>`${f.floorId}:${f.x},${f.z}:${f.kind}`).join(";")}`,d=Ti.get(i);d||Ti.set(i,d=new Map);let u=d.get(c);u||(u=Pr(i,l),d.clear(),d.set(c,u));let p=u.map(f=>({floorId:f.floorId,a:f.a,b:f.b,dist:f.dist,power:f.members.reduce((g,b)=>g+l[b].power,0),kind:f.kind}));if(t.grid!==null){let{walls:f}=jt(r.rooms,{exterior:s,interior:a},r.walls??[]),g=null;for(let b of f){if(!b.exterior)continue;let k=b.b[0]-b.a[0],_=b.b[1]-b.a[1],h=k*k+_*_||1,x=Math.min(1,Math.max(0,((o.x-b.a[0])*k+(o.z-b.a[1])*_)/h)),y=[b.a[0]+k*x,b.a[1]+_*x],M=Math.hypot(o.x-y[0],o.z-y[1]),I=Math.sqrt(h);(!g||M<g.d)&&(g={q:y,out:[_/I,-k/I],d:M})}if(g){let b=[g.q[0]+g.out[0]*(s+1.4),pe,g.q[1]+g.out[1]*(s+1.4)],k=[o.x,pe,o.z],_=t.grid>=0;p.push({floorId:r.id,a:_?b:k,b:_?k:b,dist:0,power:Math.abs(t.grid),kind:_?"grid":"export"})}}if(t.solar!==null&&p.push({floorId:r.id,a:[o.x+.08,r.height+.6,o.z+.08],b:[o.x+.08,pe,o.z+.08],dist:0,power:t.solar,kind:"solar"}),t.battery!==null&&t.battery>0)for(let f of p)f.kind==="battery"&&([f.a,f.b]=[f.b,f.a]);return p}function Fi(i,e){let t=[.22,.88,1],n=[1,.78,.2],o=[.35,1,.55];if(i==="grid")return t;if(i==="export"||i==="solar")return n;if(i==="battery")return o;let r=[[Math.max(0,e.grid??0),t],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),n],[Math.max(0,e.battery??0),o]],[s]=r.reduce((a,l)=>l[0]>a[0]?l:a);return s>0?r.find(a=>a[0]===s)[1]:t}var Gt=["neon","blueprint","day"],Ve={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var rt={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Li(i,e){let t=rt[i].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[o,r]=t[n],[s,a]=t[n-1];if(e<=o){let l=(e-s)/(o-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function Hi(i,e,t){let n=new Map;for(let o of e.floors)for(let r of o.rooms){let s=Xe(i,o,r,t);s!==null&&n.set(r.id,s)}return n}function Oi(i){let e=rt[i].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([o,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((o-t)/(n-t)*100)}%`).join(", ")})`}function qe(i,e){if(!St(e))return S(i,`furn_${e}`);let t=B(e);return t?Dn(t,"it"):S(i,"pack_missing_item")}var Fr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function st(i){return i&&i!=="none"?i:null}function Lr(i,e){if(e.type!=="parking")return null;let t=st(e.entity);if(t){let r=i.states[t];if(!r||!Fr.has(r.state.toLowerCase()))return null}let n=e.vehicle??null,o=st(e.type_entity);if(o&&e.types?.length){let r=(i.states[o]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&B(n)?n:null}function Yt(i,e){let t=new Map;for(let n of e.floors)for(let o of n.furniture){let r=Lr(i,o);r&&t.set(o.id,r)}return t}function Di(i){return i.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[st(t.entity),st(t.type_entity)])).filter(e=>!!e)}var at=1800*1e3,Hr=new Set(["motion","occupancy","presence"]);function Ni(i,e){return e.startsWith("binary_sensor.")&&Hr.has(String(i.states[e]?.attributes.device_class))}function lt(i,e){let t=[],n=new Set,o=(r,s,a,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(Ni(i,s.entity_id))o(s.entity_id,r.id,s.x,s.z);else if($(s.entity_id)==="camera")for(let a of Le(i,s.entity_id))o(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=ce(s.points);for(let c of H(i,s.area_id))Ni(i,c)&&o(c,r.id,a,l)}return t}function Vi(i,e,t,n=at){let o=t-n,r=[];for(let[s,a]of Object.entries(i)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=o&&d<=t&&r.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=o&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function qi(i,e,t,n=at){let o=new Map(i.map(s=>[s.entity,s])),r=[];for(let s of e){let a=o.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return r.slice(-40)}function Ui(i,e){return new Date(e).toLocaleTimeString(i.language,{hour:"2-digit",minute:"2-digit"})}var Wi='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var ct=i=>i.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Bi(i,e){let t=[],n=ve(i,e.floors),o=e.floors.length>1;for(let r of e.floors){let s=(d,u)=>r.rooms.find(p=>p.points.length>=3&&R([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,o?r.name:null].filter(Boolean).join(" \xB7 ");for(let d of r.rooms){if(d.points.length<3)continue;let[u,p]=ce(d.points);t.push({kind:"room",name:d.name,where:o?r.name:"",floorId:r.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,f)=>{l.has(d)||!i.states[d]||(l.add(d),t.push({kind:"device",name:P(i,d),where:a(u,p),floorId:r.id,roomId:s(u,p)?.id??null,entity:d,icon:$(d),x:u,z:p,y:f}))};for(let d of r.placements)c(d.entity_id,d.x,d.z,d.y??_e($(d.entity_id)??"sensor",r.height,d.mount));for(let d of r.furniture){let u=n.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(r.height-.3,Math.max(.5,d.h)))}}return t}function ji(i,e,t=8){let n=ct(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let o=i.filter(a=>{let l=ct(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),r=ct(e.trim()),s=a=>(ct(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return o.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Or=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Dr=[2200,2700,3200,4e3,5e3,6500],Nr=["hs","rgb","rgbw","rgbww","xy"],Vr=4;function Xt(i){let e=i.attributes.supported_color_modes??[],t=e.some(n=>Nr.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Jt(i){return((i.attributes.supported_features??0)&Vr)!==0&&typeof i.attributes.current_position=="number"}var Qt=class extends D{static properties={hass:{attribute:!1},entity:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{$(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}nc3d=${this._tick}`:null;return m`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?m`<img src=${n} alt=${P(this.hass,this.entity)} />`:m`<span class="qm-note">${O(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return S(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:P(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){te(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,o)=>{let r=o/t*Math.PI*2-Math.PI/2;return m`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=Xt(e),n=e.state==="on",o=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?Or.map(s=>m`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Dr.map(s=>m`<button class="qm-swatch" style="background:${qr(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return m`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?m`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:v}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",o=Jt(e),r=(c,d,u,p=!1)=>m`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${d} @click=${u}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(c=>r(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(c=>r(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],r("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return m`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:O(this.hass,e)}</b>
        </button>
      </div>
      ${o?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:v}`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return m`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${O(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return v;let t=$(this.entity),n=F(e)?m`<p class="qm-note">${O(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):this.renderToggle(e);return m`<div class="qm" role="dialog" aria-label=${P(this.hass,this.entity)}>
      <div class="qm-title">${P(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[j,U`
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--nc3d-chrome);
        box-shadow: var(--nc3d-shadow), 0 0 0 1px var(--nc3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--nc3d-line);
        animation: none;
        color: var(--nc3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--nc3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--nc3d-bg2, #16223a);
        color: var(--nc3d-muted);
        box-shadow: inset 0 0 0 2px var(--nc3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--nc3d-title-font);
        color: var(--nc3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--nc3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--nc3d-line);
        background: var(--nc3d-bg2, #16223a);
        color: var(--nc3d-text);
        font: 700 12px var(--nc3d-title-font);
      }
      .qm-slot-on {
        background: var(--nc3d-accent);
        color: var(--nc3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--nc3d-accent);
        color: var(--nc3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--nc3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--nc3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--nc3d-muted);
      }
    `]};function qr(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=(n,o)=>Math.round(n+(o-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("nc3d-quick-menu")||customElements.define("nc3d-quick-menu",Qt);var Ur=new URL(import.meta.url),Wr=new URL("./neoncasa3d-3d.js?v=2198586f6c09",Ur).href,Ki;function Gi(){return Ki??=import(Wr),Ki}var Yi=i=>i.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Br(i,e,t){let n=Yi(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let o of e.floors)for(let r of o.rooms)if([r.name,r.area_id??"",r.area_id?i.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(Yi).includes(n))return{floorId:o.id,room:r};return null}function jr(i){let e=i.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Qi(i,e){let t=[],n=new Map;for(let o of e.presence){let r=i.states[o.person];if(!r||!o.sensor||r.state!=="home"&&r.state!=="on")continue;let s=i.states[o.sensor];if(!s)continue;let a=Br(i,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=ce(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,f=r.attributes.friendly_name??o.person;t.push({id:o.person,name:f,initials:jr(f),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return t}function Xi(i,e,t,n){let o=new Map,r=s=>!!s&&i.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Ht(i,H(i,c.area_id)))$(d)==="light"&&a.add(d);for(let c of s.placements)$(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(Z(i,d,"garage").cover??1)<.95;if(c.type==="door")return r(d.contact)||r(d.contact2??null);let u=Z(i,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;o.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>i.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return o}function Ji(i,e){let t=[e.rooms===1?S(i,"floor_rooms_one"):S(i,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(S(i,"floor_lights",{n:e.lightsOn})),e.open&&t.push(S(i,"floor_open",{n:e.open})),e.persons&&t.push(S(i,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Zt=class extends D{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_find:{state:!0},_thumbs:{state:!0},floorThumbs:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._through=null,this._blend=.6,this._find=null,this._thumbs=[],this.floorThumbs=!0,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1;try{this._flows=localStorage.getItem("neoncasa3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,clearInterval(this.trailTimer),this.trailTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nc3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Gi();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".nc3d-stage");this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,o)=>this.fire("room-tap",{floorId:n,roomId:o}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?S(this.hass,"floor_rooms_one"):S(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,o,r)=>this.onDeviceTap(n,o,r),onDeviceHold:(n,o,r)=>this.onDeviceHold(n,o,r),onRoomDoubleTap:(n,o)=>this.onRoomDoubleTap(n,o),onDeviceSwipe:(n,o,r,s,a)=>this.onDeviceSwipe(n,o,r,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,o,r)=>this.fire("furniture-move",{id:n,x:o,z:r}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,o,r)=>this.fire("device-move",{id:n,x:o,z:r}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this._low=this.viewer.low,this.viewer.setPacks([...Te()]),this.shownPacks=Ke(),this.building&&this.viewer.setBuilding(this.building),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Ke()&&(this.shownPacks=Ke(),t.setPacks([...Te()]),this.hass&&this.building&&t.setParked(Yt(this.hass,this.building))),e.has("building")&&this.building&&t.setBuilding(this.building),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(o=>e.has(o));(n||e.has("hass"))&&this.syncDevices(n),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("explode")&&t.setExplode(this.explode),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let o=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==o.entities){this.openingLinks=Je(o,n.floors),this.furnitureLinks=ve(o,n.floors),this.linkedRegistry=o.entities,this.findIndex=null;let w=[...this.openingLinks.values()].flatMap(A=>[A.cover,A.contact,A.tilt,A.contact2??null,A.tilt2??null,A.position??null]),z=bi(n),q=z.filter(A=>$(A)==="camera").flatMap(A=>Le(o,A)),G=z.map(A=>Kt(o,A)),ke=n.energy,oo=n.presence.flatMap(A=>[A.person,A.sensor]),ro=n.floors.flatMap(A=>A.rooms.flatMap(N=>H(o,N.area_id).filter(oe=>$(oe)==="light"))),so=[...this.furnitureLinks.values()].flatMap(A=>[A.entity,A.power]),ao=n.floors.flatMap(A=>A.furniture.flatMap(N=>[N.door_left??null,N.door_right??null,N.soc??null,N.status??null])),lo=(n.settings.roof?.windows??[]).flatMap(A=>[A.cover,A.contact,A.tilt]).filter(A=>!!A&&A!=="none"),co=n.floors.flatMap(A=>A.furniture.filter(N=>N.type==="robot_vacuum").map(N=>Vt(o,this.furnitureLinks.get(N.id)?.entity??null,N.room_sensor))),uo=n.floors.flatMap(A=>A.furniture.flatMap(N=>(N.pictures??[]).flatMap(oe=>[oe.entity,...oe.image.startsWith("camera:")?[oe.image.slice(7)]:[]]))),po=this.heatMode==="none"?[]:n.floors.flatMap(A=>A.rooms.flatMap(N=>H(o,N.area_id).filter(oe=>oe.startsWith("sensor."))));this.alertSrc=this.alerts?ki(o,n,this.weatherEntityId):null;let ho=this.alertSrc?$i(this.alertSrc):[],mo=Di(n.floors),fo=lt(o,n).map(A=>A.entity),go=He(o,this.weatherEntityId??n.settings.weather_entity),_o=[...z,...q,...w,...G,...so,...ao,...co,...lo,...uo,ke.grid,ke.solar,ke.battery,ke.battery_soc,ke.tariff,...oo,...ro,...po,...ho,...mo,...fo,go,"sun.sun"];this.watched=[...new Set(_o.filter(A=>!!A))],e=!0}if(!(e||this.watched.some(w=>this.shownStates.get(w)!==o.states[w])))return;this.shownStates=new Map(this.watched.map(w=>[w,o.states[w]]));let s=Ci(o,n),a=_i(o,n),l=this.furnitureMarkers(o,n,new Set(a.map(w=>w.id)),new Set(s.map(w=>w.powerEntity)));s.push(...l.consumers);let c=Ri(o,n,s),d=new Map(s.filter(w=>w.id!==w.powerEntity).map(w=>[w.id,w.power]));this.confirmSet=be(o,n.floors);let u=this.trail?this.trailNow(o,n):[];t.setDevices([...[...a,...l.markers].map(w=>{let z=w.show==="no_power"||"energyDevice"in w&&w.energyDevice?null:d.get(w.id)??null,q={...w,power:z,powerText:z===null?void 0:ie(o,z),effect:this.dimmed?!1:w.effect};return{...q,pin:this.showPin(q)}}),...u.map((w,z)=>({id:`trail:${z}`,floorId:w.floorId,roomId:null,x:w.x,z:w.z,y:.3+.4*u.slice(0,z).filter(q=>q.entity===w.entity).length,icon:Wi,name:P(o,w.entity),text:Ui(o,w.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),t.setTrail(u),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens),t.setFridgeDoors(Dt(o,n.floors)),t.setRobots(this.robotInfos(o,n));let p=new Map;for(let w of n.settings.roof?.windows??[]){let z=G=>G&&G!=="none"?G:null,q=Z(o,{cover:z(w.cover),contact:z(w.contact),tilt:z(w.tilt)},"window");p.set(w.id,{open:q.open,tilt:q.tilt,cover:q.cover??0})}t.setRoofWindows(p),t.setParked(Yt(o,n));let f=new Map(n.floors.flatMap(w=>w.openings.map(z=>[z.id,z.type]))),g=new Map([...this.openingLinks].map(([w,z])=>[w,Z(o,z,f.get(w))]));t.setOpeningStates(g),this.setAlerts(this.alertSrc?Si(o,n,this.alertSrc,this.openingLinks):[]);let b=[...a,...l.markers].map(w=>`${w.id}:${w.glow?`${w.glow.level.toFixed(1)}/${w.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...g].map(([w,z])=>`${w}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(b!==this.thumbSig){let w=this.thumbSig==="";this.thumbSig=b,w||this.scheduleThumbs(1500)}let k=n.energy.battery?n.floors.flatMap(w=>w.placements.filter(z=>z.entity_id===n.energy.battery).map(z=>({floorId:w.id,x:z.x,z:z.z})))[0]:null;t.setFlows(!!1||!(this.flows??this._flows)||this.dimmed?[]:Pi({building:n,consumers:s,summary:c,battery:k??null}).map(w=>({floorId:w.floorId,a:w.a,b:w.b,dist:w.dist,power:w.power,color:Fi(w.kind,c)})));let _=[];t.setPersons(_);let h=Xi(o,n,this.openingLinks,_);t.setFloorInfo(new Map([...h].map(([w,z])=>[w,Ji(o,z)])));let x=o.states["sun.sun"]?.attributes,y=typeof x?.elevation=="number"?x.elevation:null;t.setSun(y!==null&&typeof x?.azimuth=="number"?{elevation:y,azimuth:x.azimuth}:null);let M=this.weather&&!this.dimmed&&W("weather")?yi(o,He(o,this.weatherEntityId??n.settings.weather_entity)):null,I=M?wi(M,n.settings.weather_effects):null;this.cloud=I?.cloud??0,this._sky=(y===null?0:Math.min(1,Math.max(0,(y+4)/16)))*(1-.45*this.cloud);let E=I?I.sky:(n.settings.weather_effects??["sky"]).includes("sky");t.setWeather(this.weather&&!this.dimmed&&W("weather")?{...I??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:E}:null),this.watchLightning(!!I?.lightning),this.applyTint();let C=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(C)!==JSON.stringify(this._energy)&&(this._energy=C)}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),n=e.filter((o,r)=>!this.seenAlerts.has(t[r]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,o=this.hass,r=n?.floors.find(d=>d.id===e),s=r?.rooms.find(d=>d.id===t);if(!n||!o||!r||!s)return;let a=new Set(H(o,s.area_id).filter(d=>$(d)==="light"));for(let d of r.placements)$(d.entity_id)==="light"&&R([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of r.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Mt(d.type)&&R([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>o.states[d]?.state==="on");o.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let o=null;if(this.heatMode!=="none"){let s=this.heatMode,a=Hi(n,t,s);this.heatValues=a,o=new Map([...a].map(([l,c])=>[l,Li(s,c)]))}if(this._alerts.length){o??=new Map;let s=.55+.45*Math.sin(performance.now()/160);for(let a of this._alerts){let l=Mi(a.kind).map(c=>c*s);if(a.roomId)o.set(a.roomId,l);else for(let c of t.floors)for(let d of c.rooms)o.set(d.id,l)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let r=o?[...o].map(([s,a])=>`${s}:${a.map(l=>l.toFixed(2)).join(",")}`).join(";"):"";r!==this.tintSig&&(this.tintSig=r,e.setRoomTint(o))}furnitureMarkers(e,t,n,o){let r=[],s=[],a=new Map,l=new Map;for(let u of t.floors)for(let p of u.furniture){let f=this.furnitureLinks.get(p.id);if(Mt(p.type)){r.push(this.lampMarker(e,u,p,f?.entity??null));continue}let g=p.type==="home_battery"?p.soc:p.type==="wallbox"?p.status:null,b=g&&g!=="none"?g:null,k=f??(b?{entity:null,power:null}:void 0);if(!k)continue;let _=p.type==="home_battery"?b??k.entity??k.power:k.entity??k.power??b;l.set(p.id,_);let h=k.entity?e.states[k.entity]:void 0,x=k.power?we(e.states[k.power]):null;k.power&&x!==null&&!o.has(k.power)&&(o.add(k.power),s.push({id:_,powerEntity:k.power,floorId:u.id,x:p.x,z:p.z,power:Math.max(0,x)}));let y=(x??0)>10||h?.state==="on"||h?.state==="running"||Ft(h)&&de(h);if(p.type==="radiator"&&h&&$(h.entity_id)==="climate"){let E=h.attributes;if(E.hvac_action==="heating"){let T=typeof E.temperature=="number"&&typeof E.current_temperature=="number"?E.temperature-E.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,T))})}}else(p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&y&&a.set(p.id,{color:[.3,.85,1],level:.8});if(h&&Ot(p.type)){let E=W("screens"),T=$(h.entity_id)==="light"?Pe(h):null,C=E&&$(h.entity_id)==="media"?di(h):T?T.color:de(h)||h.state==="playing"?[.22,.88,1]:null,w=E&&$(h.entity_id)==="media"?h.attributes.entity_picture??null:null;C&&a.set(p.id,{color:C,level:h.state==="playing"?1:.6,picture:w})}if(n.has(_))continue;n.add(_);let M=k.entity?$(k.entity):null,I=u.rooms.find(E=>E.points.length>=3&&R([p.x,p.z],E.points));r.push({id:_,floorId:u.id,roomId:I?.id??null,x:p.x,z:p.z,y:Gr(p)+fe(u,p),icon:Fe(M??"switch"),name:k.entity?P(e,k.entity):qe(e,p.type),text:p.type==="home_battery"?this.batteryText(e,b,x):p.type==="wallbox"?this.wallboxText(e,b,x):h?O(e,h):x!==null?ie(e,Math.max(0,x)):"",active:h?de(h):(x??0)>5,unavailable:h?F(h):!1,glow:null,furnitureId:p.id,energyDevice:p.type==="inverter"||p.type==="home_battery"||p.type==="wallbox",show:p.marker??void 0,fromFurniture:!0})}this.cameraScreens=0;let c=Dt(e,t.floors),d=W("screens");for(let u of t.floors)for(let p of u.furniture){if(!d||!p.pictures?.length||!Ot(p.type)||p.type==="fridge_smart"&&c.get(p.id)?.right)continue;let f=p.pictures.find(k=>li(e,k));if(!f)continue;let g=this.pictureUrl(f.image),b=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];g&&a.set(p.id,{color:b,level:1,picture:g,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through),{markers:r,consumers:s,screens:a,targets:l}}trailNow(e,t){let n=Date.now(),o=lt(e,t),r=o.map(s=>{let a=e.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return qi(o,Vi(this.trailRows,r,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!W("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!W("camera_cockpit")){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let o=lt(t,n).map(r=>r.entity);if(o.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-at).toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),this._through&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||F(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}nc3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),In(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(n.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||fe(e,o)>.12)return!1;let r=B(o.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:R([o.x,o.z],t)||Ye(o).some(s=>R(s,t))}).map(o=>Ye(o))}robotInfos(e,t){let n=[];for(let o of t.floors)for(let r of o.furniture){if(r.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=r.rotation*Math.PI/180,d=r.d*.14,u=[r.x-Math.sin(c)*d,r.z+Math.cos(c)*d],p=o.rooms.filter(k=>k.points.length>=3),g=(l==="cleaning"?pi(e,p,s,Vt(e,s,r.room_sensor)):null)??p.find(k=>R(u,k.points)),b=l==="cleaning"&&g?this.robotObstacles(o,g.points):[];n.push({id:r.id,floorId:o.id,rest:u,restHeading:-c,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:b})}return n}batteryText(e,t,n){let o=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(o)&&r.push(`${V(e,o,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${ie(e,Math.abs(n))}`),r.join(" \xB7 ")}wallboxText(e,t,n){let o=t?e.states[t]:void 0,r=String(o?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(r),a=o?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=s?S(e,"wallbox_charging"):a?S(e,"wallbox_plugged"):o&&!F(o)&&!o.entity_id.startsWith("binary_sensor.")?O(e,o):"",c=n!==null&&n>50?ie(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,o){let r=o?e.states[o]:void 0,s=B(n.type),a=Gn[n.type]??s?.light??"floor",l=n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?fe(t,n):a==="table"?Ge(t,n.x,n.z):a==="bollard"||a==="garden"?Wn(t,n.x,n.z):0,c=t.rooms.find(p=>p.points.length>=3&&R([n.x,n.z],p.points)),d=t.height,u=s?s.mount==="ceiling"?Math.max(.5,l-.15):l+n.h+.2:{ceiling:d-.3,downlight:d-.25,spot:d-.35,panel:d-.25,pendant:Math.max(.6,d-n.h-.25),floor:l+n.h+.25,uplight:l+n.h+.25,table:l+n.h+.2,wall:l+n.h+.2,strip:Math.max(.3,l-.2),bollard:l+n.h+.25,garden:l+n.h+.25}[a];return{id:o??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:u,icon:Fe("light"),name:o?P(e,o):qe(e,n.type),text:r?O(e,r):"",active:r?de(r):!1,unavailable:r?F(r):!1,glow:r?Pe(r):null,lamp:a,rotation:n.rotation,size:[n.w,n.d,n.h],base:l,pickable:!!o,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?l:l+n.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(r.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=$(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let o=n.cover??n.contact??n.tilt;o&&e.set(t,o)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return v;let e=new Map(this.building.floors.map(n=>[n.id,n.name])),t=[...this._thumbs].sort((n,o)=>(this.building.floors.find(r=>r.id===o.floorId)?.elevation??0)-(this.building.floors.find(r=>r.id===n.floorId)?.elevation??0));return m`<nav class="nc3d-thumbs ${this.narrowThumbs?"nc3d-thumbs-small":""}" aria-label=${S(this.hass,"floors")}>
      <button class="nc3d-thumb nc3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${S(this.hass,"all_floors")}</span>
      </button>
      ${t.map(n=>m`<button class="nc3d-thumb" aria-pressed=${this.floorId===n.floorId} @click=${()=>this.fire("floor-tap",{floorId:n.floorId})}>
          <img src=${n.url} alt="" />
          <span>${e.get(n.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let o=$(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"||o==="camera"?this._menu={entity:e,x:t,y:n}:te(this,e)}onDeviceSwipe(e,t,n,o,r){let s=this.hass?.states[e];if(t==="start"){if(!s||F(s)||this.confirmSet.has(e))return!1;let l=$(e);if(l==="light"&&Xt(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:o,y:r},!0}if(l==="cover"&&Jt(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:o,y:r},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return v;let t=this._alerts.slice(0,3);return m`<div class="nc3d-alert-banner" role="alert">
      ${t.map(n=>m`<button class="nc3d-alert nc3d-alert-${n.kind}" title=${Wt(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Wt(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?m`<span class="nc3d-alert-more">+${this._alerts.length-3}</span>`:v}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return v;let t=e.floors.flatMap(r=>r.rooms).find(r=>r.id===this.roomId),n=t?H(this.hass,t.area_id).filter(r=>$(r)==="scene"||$(r)==="script").slice(0,6):[];if(!n.length)return v;let o=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return m`<div class="nc3d-scenes">
      ${n.map(r=>m`<button class="nc3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${P(this.hass,r,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return v;if(this._find===null)return m`<button class="nc3d-find-btn" title=${S(this.hass,"find")} aria-label=${S(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=ji(this.findIndex??=Bi(this.hass,e),this._find);return m`<div class="nc3d-find">
      <input
        type="search"
        placeholder=${S(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="nc3d-find-close" aria-label=${S(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?m`<div class="nc3d-find-list">
            ${t.length?t.map(n=>m`<button @click=${()=>this.goTo(n)}>
                    <span class="nc3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Ze(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?m`<small>${n.where}</small>`:v}</span>
                  </button>`):m`<p>${S(this.hass,"find_none")}</p>`}
          </div>`:v}
    </div>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return v;let t=e.kind==="light"&&e.value<=0;return m`<div class="nc3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${P(this.hass,e.entity)}</span>
      <b>${t?S(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n)return;if(!W("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let o=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!o)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let r=this.floorId===o?0:300;r&&(this.throughFloor=o,this.fire("floor-tap",{floorId:o})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back))}renderProHint(){return!this._proHint||!this.hass?v:m`<div class="nc3d-pro" role="dialog">
      <b>${S(this.hass,"pro_title")}</b>
      <span>${S(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="nc3d-sub">${S(this.hass,"pro_locked")}</span>
      <div>
        <a class="nc3d-chip nc3d-chip-on" href=${mi(this.hass.language)} target="_blank" rel="noopener">${S(this.hass,"pro_shop")}</a>
        <a class="nc3d-chip" href=${fi(this.hass.language,this._proHint)} target="_blank" rel="noopener">${S(this.hass,"manual_more")}</a>
        <button class="nc3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${S(this.hass,"ext_tab")}</button>
        <button class="nc3d-chip" @click=${()=>this._proHint=null}>${S(this.hass,"close")}</button>
      </div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return v;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,o=n&&!F(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}nc3d=${this.cameraTick}`:null;return m`<div class="nc3d-through" style="--nc3d-blend:${this._blend}">
      ${o?m`<img class="nc3d-through-img" src=${o} alt="" />`:v}
      <div class="nc3d-through-bar">
        <span class="nc3d-through-name">${P(this.hass,e.entity)}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${S(this.hass,"through_blend")}
          @input=${r=>this._blend=Number(r.target.value)/100}
        />
        <button class="nc3d-chip" @click=${()=>this.endThrough()}>${S(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return v;let t=this.renderRoot.querySelector(".nc3d-stage"),n=t?.clientWidth??800,o=t?.clientHeight??600,r=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return m`<div class="nc3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nc3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${W("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></nc3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:"))return;let o=$(e);if(o==="cover"||o==="camera"){this._menu={entity:e,x:t,y:n};return}if(o&&ri.has(o)){if(this.confirmSet.has(e)&&!confirm(S(this.hass,"confirm_switch",{name:P(this.hass,e)})))return;vi(this.hass,e)}else te(this,e)}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neoncasa3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!!1||!e||this.roomId||!this.showEnergy)return v;let t=o=>S(this.hass,o),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ie(this.hass,e.consumption)}),e.grid!==null){let o=e.grid<0;n.push({cls:o?"export":"grid",label:t(o?"energy_grid_export":"energy_grid_import"),value:ie(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ie(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?ie(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:o.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${V(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),m`<div class="nc3d-energy" aria-live="off">
      ${n.map(o=>m`<div class="nc3d-energy-item nc3d-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?v:m`<button class="nc3d-energy-item nc3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none")return v;let e=rt[this.heatMode],t=this.heatMode==="temperature",n=t?Re(this.hass,e.stops[0][0]):e.stops[0][0],o=t?Re(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?Q(this.hass):e.unit,s=a=>S(this.hass,a);return m`<div class="nc3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="nc3d-legend-bar" style="background:${Oi(this.heatMode)}"></span>
      <span class="nc3d-legend-range"><span>${V(this.hass,n,0)} ${r}</span><span>${V(this.hass,o,0)} ${r}</span></span>
      ${this.heatValues.size?v:m`<span class="nc3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Ve[this.theme]??Ve.neon,t=this._sky;return e.night[0].map((n,o)=>Math.round(n+(e.day[0][o]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(r,s)=>`rgb(${r.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Ve[this.theme]??Ve.neon,o=`--nc3d-sky:${t(n.night[0],n.day[0])};--nc3d-ground:${t(n.night[1],n.day[1])}`;return m`<div
      class="nc3d-stage ${this.roomLabels?"":"nc3d-no-room-names"} ${this._low?"nc3d-low":""} ${this.panelOpen?"nc3d-panel-open":""} ${this._alerts.length?"nc3d-has-alerts":""} ${this._through?"nc3d-through-on":""} ${this._flash?"nc3d-flash":""}"
      style=${o}
    >
      ${this._error?m`<p class="nc3d-error">${this._error}</p>`:v} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.renderAlerts()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderProHint()} ${this.renderMenu()}
      ${this.showStats&&this._stats?m`<span class="nc3d-stats"
            ><b>${this._stats.fps?S(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):S(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?m`(${this._stats.busy.map(r=>S(this.hass,`stats_busy_${r}`)).join(", ")})`:v} ·
            ${S(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${S(this.hass,this._stats.low?"stats_low":"stats_full",{r:V(this.hass,this._stats.pixelRatio,2)})}</span
          >`:v}
    </div>`}static styles=[j,ne,U`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .nc3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .nc3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--nc3d-chrome-solid);
        color: var(--nc3d-text);
        font: 600 13.5px var(--nc3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: nc3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .nc3d-alert-water,
      .nc3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .nc3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .nc3d-alert-more {
        align-self: center;
        color: var(--nc3d-muted);
        font-size: 13px;
      }
      @keyframes nc3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .nc3d-has-alerts .nc3d-energy {
        top: 58px;
      }
      .nc3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--nc3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .nc3d-scenes .nc3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .nc3d-alert,
        .nc3d-dev-found {
          animation: none;
        }
      }
      .nc3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: nc3d;
        background: radial-gradient(ellipse at 50% 35%, var(--nc3d-sky, var(--nc3d-bg2)), var(--nc3d-ground, var(--nc3d-bg)) 72%);
        transition: background 2s ease;
      }
      .nc3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .nc3d-canvas:active {
        cursor: grabbing;
      }
      .nc3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .nc3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--nc3d-title-font);
        color: var(--nc3d-text);
        background: var(--nc3d-chrome);
        border: 1px solid var(--nc3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--nc3d-shadow);
      }
      .nc3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--nc3d-accent);
        color: var(--nc3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .nc3d-pin-floor b {
        font: 700 15px var(--nc3d-title-font);
        letter-spacing: -0.01em;
      }
      .nc3d-pin-floor span {
        font: 500 12px var(--nc3d-font);
        opacity: 0.78;
      }
      .nc3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--nc3d-line);
        background: var(--nc3d-chrome);
        color: var(--nc3d-muted);
        font: 600 12px var(--nc3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .nc3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .nc3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .nc3d-dev[data-entity^="trail:"] .nc3d-dev-icon {
        color: #37e0ff;
      }
      .nc3d-dev[data-entity^="trail:"] .nc3d-dev-text {
        display: inline;
      }
      .nc3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--nc3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nc3d-dev-watt:empty {
        display: none;
      }
      .nc3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .nc3d-dev-on .nc3d-dev-watt {
        color: #2a1a00;
      }
      .nc3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--nc3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .nc3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .nc3d-person[hidden] {
        display: none;
      }
      .nc3d-no-room-names .nc3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .nc3d-stage.nc3d-low {
        transition: none;
      }
      .nc3d-low .nc3d-pin,
      .nc3d-low .nc3d-dev,
      .nc3d-low .nc3d-dev-on,
      .nc3d-low .nc3d-energy-item,
      .nc3d-low .nc3d-find input,
      .nc3d-low .nc3d-find-list,
      .nc3d-low .nc3d-find-btn,
      .nc3d-low .nc3d-swipe,
      .nc3d-low .nc3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .nc3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .nc3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--nc3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--nc3d-chrome) 70%, transparent);
        color: var(--nc3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--nc3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .nc3d-thumb:hover,
      .nc3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .nc3d-thumb[aria-pressed="true"] {
        border-color: var(--nc3d-accent);
        box-shadow: var(--nc3d-shadow), 0 0 0 1px var(--nc3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .nc3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .nc3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .nc3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .nc3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .nc3d-thumbs-small .nc3d-thumb {
        width: 104px;
      }
      .nc3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nc3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nc3d-chrome);
        color: var(--nc3d-text);
        box-shadow: var(--nc3d-shadow);
        cursor: pointer;
      }
      .nc3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nc3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .nc3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--nc3d-line);
        border-radius: 14px;
        background: var(--nc3d-chrome);
        color: var(--nc3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--nc3d-shadow);
        backdrop-filter: blur(8px);
      }
      .nc3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nc3d-muted);
        cursor: pointer;
      }
      .nc3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--nc3d-chrome);
        box-shadow: var(--nc3d-shadow);
        backdrop-filter: blur(8px);
      }
      .nc3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nc3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .nc3d-find-list button:hover,
      .nc3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .nc3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .nc3d-find-list small,
      .nc3d-find-list p {
        color: var(--nc3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .nc3d-find-list p {
        padding: 8px 10px;
      }
      .nc3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .nc3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .nc3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--nc3d-chrome);
        box-shadow: var(--nc3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .nc3d-swipe span {
        font-size: 12px;
        color: var(--nc3d-muted);
      }
      .nc3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--nc3d-title-font);
      }
      .nc3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .nc3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--nc3d-warm);
      }
      .nc3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .nc3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      .nc3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 320px;
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .nc3d-pro div {
        display: flex;
        gap: 8px;
      }
      .nc3d-pro a {
        text-decoration: none;
      }
      .nc3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .nc3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--nc3d-blend);
      }
      .nc3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--nc3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nc3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--nc3d-line);
        pointer-events: auto;
      }
      .nc3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      .nc3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--nc3d-accent);
      }
      .nc3d-through-on :is(.nc3d-pin, .nc3d-dev, .nc3d-energy, .nc3d-legend, .nc3d-thumbs, .nc3d-scenes, .nc3d-find-btn, .nc3d-stats) {
        display: none;
      }
      nc3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .nc3d-dev-found {
        animation: nc3d-found 0.6s ease-in-out 4;
      }
      @keyframes nc3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--nc3d-accent));
        }
      }
      .nc3d-legend {
        position: absolute;
        left: 12px;
        bottom: calc(60px + var(--nc3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--nc3d-chrome);
        box-shadow: var(--nc3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .nc3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .nc3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--nc3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .nc3d-legend-none {
        color: var(--nc3d-warm);
      }
      .nc3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .nc3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--nc3d-chrome);
        border-left: 3px solid var(--nc3d-line);
        box-shadow: var(--nc3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .nc3d-energy-item span {
        font-size: 11px;
        color: var(--nc3d-muted);
      }
      .nc3d-energy-item b {
        font: 700 15px var(--nc3d-title-font);
      }
      .nc3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .nc3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .nc3d-energy-export,
      .nc3d-energy-solar {
        border-left-color: #ffc633;
      }
      .nc3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .nc3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--nc3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .nc3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--nc3d-accent);
      }
      .nc3d-flow-toggle span {
        display: none;
      }
      .nc3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .nc3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .nc3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container nc3d (max-width: 900px) {
        .nc3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .nc3d-legend {
          bottom: auto;
          top: 62px;
        }
        .nc3d-has-alerts .nc3d-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container nc3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nc3d-panel-open :is(.nc3d-find-btn, .nc3d-find, .nc3d-thumbs, .nc3d-legend, .nc3d-stats, .nc3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .nc3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .nc3d-dev {
          padding: 6px;
        }
        .nc3d-pin {
          padding: 8px 12px;
        }
      }
      .nc3d-dev-full .nc3d-dev-text {
        display: inline;
      }
      .nc3d-dev-sel {
        outline: 2px solid var(--nc3d-accent);
        outline-offset: 2px;
      }
      .nc3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--nc3d-glow, var(--nc3d-warm));
        box-shadow: 0 0 16px var(--nc3d-glow, var(--nc3d-warm));
      }
      .nc3d-dev-on .nc3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .nc3d-dev-on .nc3d-dev-text {
        color: #2a1a00;
      }
      .nc3d-dev-na {
        opacity: 0.45;
      }
      .nc3d-dev-dim {
        opacity: 0.35;
      }
      .nc3d-dev[hidden],
      .nc3d-pin[hidden] {
        display: none;
      }
      .nc3d-pin-active {
        background: var(--nc3d-accent);
        color: var(--nc3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .nc3d-stats b {
        color: var(--nc3d-accent);
        font-weight: 700;
      }
      .nc3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--nc3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--nc3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--nc3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .nc3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--nc3d-danger);
      }
    `]};customElements.get("nc3d-view3d")||customElements.define("nc3d-view3d",Zt);function ie(i,e){return Math.abs(e)>=1e3?`${V(i,e/1e3,1)} kW`:`${Math.round(e)} W`}function Gr(i){return i.type==="tv_board"?i.h+.9:i.type==="tv_wall"||i.type==="kitchen_wall"?i.h+.25:i.h+.35}var Yr=.25,eo=i=>Math.round(i*1e3)/1e3;function en(i,e,t,n,o){let r=i.rooms.find(s=>s.points.length>=3&&R([e,t],s.points));return!r||R([n,o],r.points)?[n,o]:R([n,t],r.points)?[n,t]:R([e,o],r.points)?[e,o]:[e,t]}function to(i,e,t,n=Yr){let o=i.rooms.find(c=>c.points.length>=3&&R([e.x,e.z],c.points));if(!o)return null;let r=o.points,s=J(r)>=0?1:-1,a=t/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let f=[(u[0]-d[0])/p,(u[1]-d[1])/p],g=[-f[1]*s,f[0]*s],b=(e.x-d[0])*f[0]+(e.z-d[1])*f[1];if(b<0||b>p)continue;let _=i.rooms.some(T=>T.id!==o.id&&T.points.some((C,w)=>{let z=T.points[(w+1)%T.points.length],q=Math.abs((C[0]-d[0])*g[0]+(C[1]-d[1])*g[1]),G=Math.abs((z[0]-d[0])*g[0]+(z[1]-d[1])*g[1]);return q<.02&&G<.02}))?a:0,h=(e.x-d[0])*g[0]+(e.z-d[1])*g[1]-_,x=Math.atan2(-g[0],g[1])*180/Math.PI,y=T=>Math.abs((e.rotation-T+540)%360-180),I=[{rotation:x,extent:e.d/2},{rotation:x+90,extent:e.w/2},{rotation:x-90,extent:e.w/2}].reduce((T,C)=>y(C.rotation)<y(T.rotation)?C:T);if(y(I.rotation)>50)continue;let E=h-I.extent;Math.abs(E)>n||l&&Math.abs(E)>=Math.abs(l.gap)||(l={x:eo(e.x-g[0]*E),z:eo(e.z-g[1]*E),rotation:(Math.round(I.rotation)%360+360)%360,gap:E})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var L={get(i){try{return localStorage.getItem(`neoncasa3d.${i}`)}catch{return null}},set(i,e){try{localStorage.setItem(`neoncasa3d.${i}`,e)}catch{}}},tn=class extends D{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new ge(this);constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("nc3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=L.get("explode")!=="0";let e=L.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=L.get("stats")==="1"||new URLSearchParams(location.search).has("nc3d_stats");let t=L.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=L.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let o=L.get("theme");this._theme=o&&Gt.includes(o)?o:"neon",this._furnish=!1,this._selFurniture=null,this._selDevice=null;let r=L.get("floor_stack");this._floorStack=r==="stacked"||r==="single"?r:"dim",this._roomNames=L.get("room_names")!=="0",this._trail=L.get("trail")==="1",this._weather=L.get("weather")!=="0"}t(e,t){return S(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass);let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setExplode(e){this._explode=e,L.set("explode",e?"1":"0")}setQuality(e){this._quality=e,L.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let r of o.floors){let s=r.furniture.find(a=>a.id===e);s&&t(s,r)}this.data.edit(o)}editDevice(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let r of o.floors){let s=r.placements.find(a=>a.entity_id===e);s&&t(s,r)}this.data.edit(o)}moveDevice(e){let{id:t,x:n,z:o}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=en(s,r.x,r.z,n,o);Object.assign(r,{x:a,z:l})})}turnStep(){return $(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.placements=o.placements.filter(r=>r.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),o=n?.placements.find(u=>u.entity_id===e);if(!n||!o)return v;let r=$(e),s=r==="light",a=r==="camera",l=o.mount==="ceiling",c=r?_e(r,n.height,s||a?o.mount??(a?"wall":"ceiling"):null):1,d=(u,p,f,g,b,k)=>m`<label class="nc3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${g}
          max=${b}
          .value=${String(Math.round(p*100)/100)}
          @change=${_=>{let h=parseFloat(_.target.value.replace(",","."));Number.isFinite(h)&&k(Math.min(b,Math.max(g,h)))}}
        />
      </label>`;return m`${s?m`<select class="nc3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>m`<option value=${u} ?selected=${u===(o.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:v}
      ${a?m`<select class="nc3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),o.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${d(this.t("camera_reach_short"),o.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${d(this.t("camera_tilt_short"),o.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:v}
      <label class="nc3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((o.y??c)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,f=>f.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${o.y!==null?m`<button class="nc3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:v}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?qe(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:o}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=en(a,s.x,s.z,n,o);Object.assign(s,{x:l,z:c});let d=to(a,s,r);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(r=>r.furniture).find(r=>r.id===e);if(!t)return v;let n=(r,s)=>m`<label class="nc3d-size" title=${this.t(`size_${r}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(t[r]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[r]=Math.round(l*1e3)/1e3)}}
    /></label>`,o=this.data.building?.floors.find(r=>r.furniture.some(s=>s.id===e));return m`${n("w",this.t("size_short_w"))}${n("d",this.t("size_short_d"))}${n("h",this.t("size_short_h"))}
    ${o&&Kn(t)?m`<label class="nc3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((t.mount_y??fe(o,t))*100)/100)}
              @change=${r=>{let s=parseFloat(r.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?m`<button class="nc3d-chip" @click=${()=>this.editFurniture(e,r=>r.mount_y=null)}>${this.t("height_auto")}</button>`:v}`:v}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.furniture=o.furniture.filter(r=>r.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("nc3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,Pn(this.hass).then(e=>this._newOffers=e.active?Cn(e.offers??[]).length+Rn(e.updates??[]).length:0).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){this.checkOffers();let e=this.data.building,t=this.data.saveState;return m`
      <div class="nc3d-app">
        <header class="nc3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonCasa 3D</h1>
          ${this.isAdmin?m`<div class="nc3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="nc3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?m`<span class="nc3d-dot" aria-label=${this.t("offers_dot")}></span>`:v}
                </button>
              </div>`:v}
          <span class="nc3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?m`<div class="nc3d-seg nc3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>m`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="nc3d-seg nc3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Gt.map(n=>m`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,L.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="nc3d-seg nc3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>m`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,L.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="nc3d-seg nc3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,L.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:v}
          ${this._mode==="editor"&&t!=="idle"?m`<span class="nc3d-save nc3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:v}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!e?m`<p class="nc3d-message">${this.t("load_error")}: ${this.data.error}</p>`:v}
        ${!e&&!this.data.error?m`<p class="nc3d-message">${this.t("loading")}</p>`:v}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):v}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(m`<div class="nc3d-notice nc3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(m`<div class="nc3d-notice nc3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(m`<div class="nc3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="nc3d-btn nc3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="nc3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?m`<div class="nc3d-notices">${t}</div>`:v}renderExtensions(){return this._editorReady?m`<nc3d-extensions
      class="nc3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></nc3d-extensions>`:(It().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),m`<div class="nc3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?m`<nc3d-editor
      class="nc3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></nc3d-editor>`:(It().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),m`<div class="nc3d-empty"><p>${this.t("loading")}</p></div>`)}renderView(e){if(!e.floors.length||!e.floors.some(o=>o.rooms.length))return m`<div class="nc3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?m`<button class="nc3d-btn nc3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:v}
      </div>`;let t=e.floors.find(o=>o.id===this._floorId),n=t?[t]:e.floors;return m`
      <nav class="nc3d-nav">
        ${e.floors.length>1?m`<button class="nc3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(o=>m`<button
                  class="nc3d-chip"
                  aria-pressed=${o.id===this._floorId}
                  @click=${()=>{this._floorId=o.id,this._roomId=null}}
                >
                  ${o.name}
                </button>`)}
              <span class="nc3d-sep"></span>`:v}
        ${n.flatMap(o=>o.rooms.map(r=>m`<button
              class="nc3d-chip nc3d-room-chip"
              aria-pressed=${r.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=o.id),this._roomId=r.id===this._roomId?null:r.id}}
            >
              ${r.name}
            </button>`))}
      </nav>
      <div class="nc3d-stage-wrap ${this._roomId?"nc3d-room-open":""}">
        <nc3d-view3d
          class="nc3d-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${o=>{this._floorId=o.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></nc3d-view3d>
        ${this._roomId?m`<nc3d-room-panel
              class="nc3d-room-panel"
              @camera-look=${o=>this.view3d()?.lookThrough(o.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              .floor=${e.floors.find(o=>o.rooms.some(r=>r.id===this._roomId))??null}
              .confirmEntities=${be(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></nc3d-room-panel>`:v}
        <div class="nc3d-overlay">
          <div class="nc3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?m`<div class="nc3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:v}
          ${e.floors.length>1&&this._floorId?m`<div class="nc3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(o=>m`<button
                      aria-pressed=${this._floorStack===o}
                      @click=${()=>{this._floorStack=o,L.set("floor_stack",o)}}
                    >
                      ${this.t(`floor_stack_short_${o}`)}
                    </button>`)}
              </div>`:v}
          <div class="nc3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(o=>m`<button
                  aria-pressed=${this._heat===o}
                  @click=${()=>{this._heat=o,L.set("heat",o)}}
                >
                  ${this.t(o==="none"?"heat_off":`heat_short_${o}`)}
                </button>`)}
          </div>
          <button
            class="nc3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,L.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="nc3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,L.set("trail",this._trail?"1":"0")}}
          >
            ${W("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="nc3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,L.set("weather",this._weather?"1":"0")}}
          >
            ${W("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?m`<button class="nc3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:v}
        </div>
        ${this._furnish?m`<div class="nc3d-furnish-bar">
              ${this._selFurniture?m`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="nc3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="nc3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?m`<span>${P(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="nc3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="nc3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:m`<span>${this.t("furnish_hint")}</span>`}
              <button class="nc3d-chip nc3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:v}
      </div>
    `}static styles=[j,ne,U`
      .nc3d-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--nc3d-bg);
      }
      .nc3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .nc3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--nc3d-line);
        background: var(--nc3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--nc3d-text);
      }
      h1 {
        font-family: var(--nc3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .nc3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .nc3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--nc3d-line);
        background: var(--nc3d-chrome-solid);
        font-size: 13.5px;
      }
      .nc3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .nc3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--nc3d-warm);
      }
      .nc3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--nc3d-danger);
        word-break: break-word;
      }
      .nc3d-chip-on {
        background: var(--nc3d-accent);
        color: var(--nc3d-accent-text);
      }
      .nc3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nc3d-chrome);
        box-shadow: var(--nc3d-shadow);
        font-size: 13.5px;
      }
      .nc3d-size-select {
        font: inherit;
        color: var(--nc3d-text);
        background: var(--nc3d-chrome-solid);
        border: 1px solid var(--nc3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .nc3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--nc3d-muted);
      }
      .nc3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .nc3d-danger-chip {
        color: var(--nc3d-danger);
      }
      .nc3d-grow {
        flex: 1;
      }
      .nc3d-save {
        font-size: 12.5px;
        color: var(--nc3d-muted);
      }
      .nc3d-save-error {
        color: var(--nc3d-danger);
      }
      .nc3d-body {
        flex: 1;
        min-height: 0;
      }
      .nc3d-nav {
        display: flex;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      .nc3d-nav .nc3d-chip {
        box-shadow: none;
        border: 1px solid var(--nc3d-line);
      }
      .nc3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--nc3d-line);
      }
      .nc3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: nc3d;
      }
      .nc3d-stage-wrap nc3d-view3d {
        flex: 1;
      }
      .nc3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      nc3d-view3d {
        --nc3d-bottom-inset: 52px;
      }
      .nc3d-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container nc3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nc3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .nc3d-room-open .nc3d-overlay {
          display: none;
        }
      }
      .nc3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        left: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .nc3d-overlay > * {
        pointer-events: auto;
      }
      .nc3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .nc3d-message,
      .nc3d-empty {
        padding: 32px 20px;
        color: var(--nc3d-muted);
        text-align: center;
      }
      .nc3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neoncasa3d-panel")||customElements.define("neoncasa3d-panel",tn);function dt(i,e,t=new Date){if(!i||i==="off")return!1;if(i==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(i.trim());if(!n)return!1;let o=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return o<=r?s>=o&&s<r:s>=o||s<r}var no;function io(){let i=new URL("./neoncasa3d-card-editor.js?v=1ceac2abdb17",new URL(import.meta.url)).href;return no??=import(i),no}var nn=class extends D{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_night:{state:!0},_orbit:{state:!0}};idleTimer;nightTimer;data=new ge(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle()};armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("nc3d-view3d")}returnHome(){this._roomId=null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=dt(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await io(),document.createElement("neoncasa3d-card-editor")}static getStubConfig(){return{type:"custom:neoncasa3d-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=dt(e.night,this.hass),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass);let t=dt(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){let e=this.data.building,t=this._config?.height??420,n=this._config,o=this._floorId===void 0?n?.floor??null:this._floorId,r=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(b=>b.id===o)?o:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(e?.floors.length??0)>1,a=b=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(b),l=["temperature","humidity","co2"].filter(b=>a(b)),c=this._walls??n?.walls??"auto",d=this._heat??n?.heatmap??"none",u=this._explode??n?.explode??!0,p=this._fullscreen?"100vh":n?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t}px`,f=!!e&&(s||!!n?.controls&&!(this._roomId&&n.room_panel!==!1)),g=b=>S(this.hass,b);return m`<ha-card class=${this._night?"nc3d-night":""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="nc3d-card-body" style="height:${p}">
        ${e&&e.floors.some(b=>b.rooms.length)?m`<nc3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${u}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${d}
              .theme=${this._config?.theme??"neon"}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .alertJump=${!!n?.alert_jump}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              ?weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              style=${f?"--nc3d-bottom-inset: 52px":""}
              @room-tap=${b=>{if(this.canSwitch&&(e?.floors.length??0)>1&&b.detail.floorId&&r!==b.detail.floorId){this._floorId=b.detail.floorId,this._roomId=null;return}b.detail.roomId&&(this._roomId=b.detail.roomId===this._roomId?null:b.detail.roomId)}}
              @floor-tap=${b=>{this._floorId=b.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></nc3d-view3d>`:m`<p class="nc3d-card-msg">${this.data.error??(e?S(this.hass,"no_building"):S(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?m`<nc3d-room-panel
              @camera-look=${b=>this.view3d()?.lookThrough(b.detail.entity)}
              class="nc3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(b=>b.rooms).find(b=>b.id===this._roomId)??null}
              .floor=${e.floors.find(b=>b.rooms.some(k=>k.id===this._roomId))??null}
              .confirmEntities=${be(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></nc3d-room-panel>`:v}
        ${f&&e?m`<div class="nc3d-card-controls">
              ${s?m`<button class="nc3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:v}
              ${a("walls")?m`<div class="nc3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${g("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${g("walls_cut")}</button>
                  </div>`:v}
              ${a("floors")&&e.floors.length>1&&!r?m`<div class="nc3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:v}
              ${l.length?m`<div class="nc3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...l].map(b=>m`<button aria-pressed=${d===b} @click=${()=>this._heat=b}>
                          ${g(b==="none"?"heat_off":`heat_short_${b}`)}
                        </button>`)}
                  </div>`:v}
            </div>`:v}
        ${n?.fullscreen_button&&!(this._roomId&&n.room_panel!==!1)?m`<button class="nc3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:v}
      </div>
    </ha-card>`}static styles=[j,ne,U`
      .nc3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .nc3d-card-controls > * {
        pointer-events: auto;
      }
      .nc3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--nc3d-chrome);
        color: var(--nc3d-text);
        box-shadow: var(--nc3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--nc3d-bg);
        height: 100%;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.nc3d-night .nc3d-card-body {
        filter: brightness(0.55);
      }
      .nc3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: nc3d;
      }
      nc3d-view3d {
        flex: 1;
      }
      .nc3d-card-msg {
        margin: auto;
        color: var(--nc3d-muted);
        padding: 16px;
        text-align: center;
      }
      .nc3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container nc3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nc3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
    `]};if(!customElements.get("neoncasa3d-card")){customElements.define("neoncasa3d-card",nn);let i=window;i.customCards=i.customCards??[],i.customCards.push({type:"neoncasa3d-card",name:S(void 0,"card_name"),description:S(void 0,"card_description"),preview:!1})}ln();
