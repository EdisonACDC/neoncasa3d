Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(t){let e=Math.trunc(t)||0;return this[e<0?this.length+e:e]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Wn=new URL(import.meta.url),Vn=Wn.searchParams.get("v"),Nn=o=>new URL(`./fonts/${o}${Vn?`?v=${Vn}`:""}`,Wn).href,Bn="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function qn(){if(typeof document>"u"||document.getElementById("nc3d-fonts"))return;let o=document.createElement("style");o.id="nc3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Nn("figtree.woff2")}) format("woff2");unicode-range:${Bn}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Nn("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Bn}}`,document.head.append(o)}var de=globalThis,pe=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),Un=new WeakMap,Bt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(pe&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Un.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Un.set(e,t))}return t}toString(){return this.cssText}},jn=o=>new Bt(typeof o=="string"?o:o+"",void 0,Ve),Z=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Bt(e,o,Ve)},Kn=(o,t)=>{if(pe)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=de.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Ne=pe?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return jn(e)})(o):o;var{is:br,defineProperty:vr,getOwnPropertyDescriptor:yr,getOwnPropertyNames:wr,getOwnPropertySymbols:xr,getPrototypeOf:kr}=Object,he=globalThis,Gn=he.trustedTypes,$r=Gn?Gn.emptyScript:"",Sr=he.reactiveElementPolyfillSupport,Wt=(o,t)=>o,Be={toAttribute(o,t){switch(t){case Boolean:o=o?$r:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Xn=(o,t)=>!br(o,t),Yn={attribute:!0,type:String,converter:Be,reflect:!1,useDefault:!1,hasChanged:Xn};Symbol.metadata??=Symbol("metadata"),he.litPropertyMetadata??=new WeakMap;var lt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Yn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&vr(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:r}=yr(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yn}static _$Ei(){if(this.hasOwnProperty(Wt("elementProperties")))return;let t=kr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wt("properties"))){let e=this.properties,n=[...wr(e),...xr(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Ne(i))}else t!==void 0&&e.push(Ne(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Be).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Be;this._$Em=i;let a=s.fromAttribute(e,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,r){if(t!==void 0){let s=this.constructor;if(i===!1&&(r=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Xn)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[Wt("elementProperties")]=new Map,lt[Wt("finalized")]=new Map,Sr?.({ReactiveElement:lt}),(he.reactiveElementVersions??=[]).push("2.1.2");var Ye=globalThis,Qn=o=>o,me=Ye.trustedTypes,Jn=me?me.createPolicy("lit-html",{createHTML:o=>o}):void 0,io="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,ro="?"+ut,Mr=`<${ro}>`,wt=document,Ut=()=>wt.createComment(""),jt=o=>o===null||typeof o!="object"&&typeof o!="function",Xe=Array.isArray,zr=o=>Xe(o)||typeof o?.[Symbol.iterator]=="function",We=`[ 	
\f\r]`,qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zn=/-->/g,to=/>/g,vt=RegExp(`>|${We}(?:([^\\s"'>=/]+)(${We}*=${We}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eo=/'/g,no=/"/g,so=/^(?:script|style|textarea|title)$/i,Qe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_=Qe(1),ao=Qe(2),ha=Qe(3),xt=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),oo=new WeakMap,yt=wt.createTreeWalker(wt,129);function lo(o,t){if(!Xe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jn!==void 0?Jn.createHTML(t):t}var Er=(o,t)=>{let e=o.length-1,n=[],i,r=t===2?"<svg>":t===3?"<math>":"",s=qt;for(let a=0;a<e;a++){let l=o[a],c,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===qt?u[1]==="!--"?s=Zn:u[1]!==void 0?s=to:u[2]!==void 0?(so.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=vt):u[3]!==void 0&&(s=vt):s===vt?u[0]===">"?(s=i??qt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?vt:u[3]==='"'?no:eo):s===no||s===eo?s=vt:s===Zn||s===to?s=qt:(s=vt,i=void 0);let f=s===vt&&o[a+1].startsWith("/>")?" ":"";r+=s===qt?l+Mr:d>=0?(n.push(c),l.slice(0,d)+io+l.slice(d)+ut+f):l+ut+(d===-2?a:f)}return[lo(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Kt=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,s=0,a=t.length-1,l=this.parts,[c,u]=Er(t,e);if(this.el=o.createElement(c,n),yt.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=yt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(io)){let p=u[s++],f=i.getAttribute(d).split(ut),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?Ue:g[1]==="?"?je:g[1]==="@"?Ke:Et}),i.removeAttribute(d)}else d.startsWith(ut)&&(l.push({type:6,index:r}),i.removeAttribute(d));if(so.test(i.tagName)){let d=i.textContent.split(ut),p=d.length-1;if(p>0){i.textContent=me?me.emptyScript:"";for(let f=0;f<p;f++)i.append(d[f],Ut()),yt.nextNode(),l.push({type:2,index:++r});i.append(d[p],Ut())}}}else if(i.nodeType===8)if(i.data===ro)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(ut,d+1))!==-1;)l.push({type:7,index:r}),d+=ut.length-1}r++}}static createElement(t,e){let n=wt.createElement("template");return n.innerHTML=t,n}};function zt(o,t,e=o,n){if(t===xt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,r=jt(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=zt(o,i._$AS(o,t.values),i,n)),t}var qe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??wt).importNode(e,!0);yt.currentNode=i;let r=yt.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Gt(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Ge(r,this,t)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=yt.nextNode(),s++)}return yt.currentNode=wt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Gt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=zt(this,t,e),jt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==xt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&jt(this._$AH)?this._$AA.nextSibling.data=t:this.T(wt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Kt.createElement(lo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new qe(i,this),s=r.u(this.options);r.p(e),this.T(s),this._$AH=r}}_$AC(t){let e=oo.get(t.strings);return e===void 0&&oo.set(t.strings,e=new Kt(t)),e}k(t){Xe(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let r of t)i===e.length?e.push(n=new o(this.O(Ut()),this.O(Ut()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Qn(t).nextSibling;Qn(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(t,e=this,n,i){let r=this.strings,s=!1;if(r===void 0)t=zt(this,t,e,0),s=!jt(t)||t!==this._$AH&&t!==xt,s&&(this._$AH=t);else{let a=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=zt(this,a[n+l],e,l),c===xt&&(c=this._$AH[l]),s||=!jt(c)||c!==this._$AH[l],c===v?t=v:t!==v&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ue=class extends Et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},je=class extends Et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},Ke=class extends Et{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=zt(this,t,e,0)??v)===xt)return;let n=this._$AH,i=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ge=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){zt(this,t)}};var Ir=Ye.litHtmlPolyfillSupport;Ir?.(Kt,Gt),(Ye.litHtmlVersions??=[]).push("3.3.3");var co=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let r=e?.renderBefore??null;n._$litPart$=i=new Gt(t.insertBefore(Ut(),r),r,void 0,e??{})}return i._$AI(o),i};var Je=globalThis,G=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=co(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xt}};G._$litElement$=!0,G.finalized=!0,Je.litElementHydrateSupport?.({LitElement:G});var Ar=Je.litElementPolyfillSupport;Ar?.({LitElement:G});(Je.litElementVersions??=[]).push("4.2.2");async function uo(o){return o.callWS({type:"neoncasa3d/building/get"})}async function po(o,t){return(await o.callWS({type:"neoncasa3d/building/save",building:t})).revision}function ho(o,t){return o.connection.subscribeMessage(e=>t(e.revision),{type:"neoncasa3d/building/subscribe"})}async function mo(o,t){return(await o.callWS({type:"neoncasa3d/image/get",image_id:t})).data}async function fo(o){return(await o.callWS({type:"neoncasa3d/packs/list"})).packs}var Rr="neoncasa3d.seenOffers";function go(o){let t=[];try{t=JSON.parse(localStorage.getItem(Rr)??"[]")}catch{}return o.filter(e=>!t.includes(e.id))}var Tr="neoncasa3d.seenUpdates";function _o(o){let t=[];try{t=JSON.parse(localStorage.getItem(Tr)??"[]")}catch{}return o.filter(e=>!t.includes(`${e.id}@${e.release}`))}function bo(o){return o.callWS({type:"neoncasa3d/license/get"})}var vo=[],Ze=new Map,yo=0;function wo(o){vo=o,Ze=new Map(o.flatMap(t=>t.items.map(e=>[Fr(t.id,e.id),e]))),yo++}function Yt(){return vo}function fe(){return yo}function Fr(o,t){return`pack:${o}:${t}`}function tn(o){return o.startsWith("pack:")}var Pr={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function xo(o){return et(o)?.parts.find(t=>t.screen)}function et(o){if(!tn(o))return;let t=Ze.get(o);if(t)return t;let[,e,...n]=o.split(":"),i=Pr[e];return i?Ze.get(`pack:${i}:${n.join(":")}`):void 0}function ko(o,t){let e=t.split("-")[0];return o.name[e]??o.name.en??Object.values(o.name)[0]??o.id}function It(o,t){let e=et(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return $o;if(t.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ge(o,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,o.height-t.h);default:return e?0:So(t)}}var zo={field:null,size:1,right:0,up:0};var Eo=["rain","snow","clouds","lightning","sky"];var Lr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Or(o){return o.elevation>.3?0:-.2}function _e(o,t,e){let n=(o.outdoor??[]).find(i=>i.type!=="hedge"&&i.type!=="fence"&&i.type!=="pool"&&C([t,e],i.points));return Or(o)+(n?Lr[n.type]:0)}var Hr={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Io={type:"none",pitch:35,overhang:.4},Dr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Io}};var Ao=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),$o=1.75;function Ro(o){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(o.type)?!1:et(o.type)?.mount!=="ceiling"}function en(o){return Ao.has(o)||!!et(o)?.light}var Vr=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function So(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function ge(o,t,e){let n=0;for(let i of o.furniture)!(Vr.has(i.type)||et(i.type)?.surface)||!C([t,e],be(i))||(n=Math.max(n,i.h));return n}var Cr=new Set([...Ao,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Mo={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function nn(o){o.energy={...Hr,...o.energy??{}},o.presence=o.presence??[],o.settings={...Dr,...o.settings,roof:{...Io,...o.settings?.roof??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(n=>({...n,panel:n.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light."));if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let r=n[i.mount??"ceiling"],[s,a,l]=Mo[r];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light."))}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function dt(o){let t=0;for(let e=0;e<o.length;e++){let[n,i]=o[e],[r,s]=o[(e+1)%o.length];t+=n*s-r*i}return t/2}function kt(o){let t=dt(o);if(Math.abs(t)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let e=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;e+=(r+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function be(o){let t=o.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*e-a*n,o.z+s*n+a*e])}function C(o,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[r,s]=t[n],[a,l]=t[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(e=!e)}return e}var To={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Nr=700,rn="neoncasa3d.unsaved",Fo="1.1.0",Co="neoncasa3d.legacy.unsaved";function Br(){try{let o=localStorage.getItem(rn)??localStorage.getItem(Co);return o?JSON.parse(o):null}catch{return null}}function on(o){try{o?localStorage.setItem(rn,JSON.stringify(o)):(localStorage.removeItem(rn),localStorage.removeItem(Co))}catch{}}var At=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Nr),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Fo!=="dev"&&this.backendVersion!==Fo}restoreDraft(){let t=this.draft;this.draft=null,t&&this.edit(nn(t.building))}discardDraft(){this.draft=null,on(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await po(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved",this.saveError=null,on(null)}catch(e){this.saveState="error",this.saveError=Po(e),on({building:t,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await ho(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await fo(this.hass)}catch{this.packs=[]}wo(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let t=await uo(this.hass);this.building=nn(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=Br()),this.revision=t.revision,this.error=null}catch(t){this.error=Po(t)}this.host.requestUpdate()}}};function Po(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}var Lo;function sn(){let o=new URL("./neoncasa3d-editor.js?v=ad6ae99ec397",new URL(import.meta.url)).href;return Lo??=import(o),Lo}var Wr={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},qr=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ur=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),jr=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),ve=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Wo=new Set(["light","switch","fan"]);function qo(o){return o.slice(0,o.indexOf("."))}function I(o){return Wr[qo(o)]??null}function Oo(o){return o!==null&&o!=="scene"&&o!=="script"}function Uo(o,t){let e=o.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&o.devices?.[e.device_id]?.area_id||null:null}function Ho(o,t){let e=I(t);if(!e)return!1;let n=o.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=o.states[t];if(!i)return!1;let r=i.attributes.device_class;return e==="sensor"?r?qr.has(r):Ur.has(String(i.attributes.unit_of_measurement??"")):e==="binary"?!!r&&jr.has(r):!0}var Kr=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Do(o,t){if(I(t)!=="sensor")return!1;let e=o.entities?.[t];if(e?.hidden||e?.entity_category)return!1;let n=o.states[t];return!n||!n.attributes.unit_of_measurement||Kr.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||D(n)}var an=null;function ln(o){let t=an;if(t&&t.entities===o.entities&&t.devices===o.devices&&(t.states===o.states||(t.states=o.states,Object.keys(o.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],r=new Map;for(let s of Object.keys(o.entities??{})){let a=o.entities[s],l=a.device_id;l&&gn(o,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(r.get(l)??r.set(l,new Set).get(l)).add(qo(s));let c=Ho(o,s),u=Uo(o,s);if(!u){(c||Do(o,s))&&Oo(I(s))&&i.push(s);continue}c&&(e.get(u)??e.set(u,[]).get(u)).push(s)}if(o.entities)for(let s of Object.keys(o.states))o.entities[s]||(Ho(o,s)||Do(o,s))&&Oo(I(s))&&i.push(s);i.sort((s,a)=>ve.indexOf(I(s))-ve.indexOf(I(a))||L(o,s).localeCompare(L(o,a)));for(let[s,a]of e){let l=o.areas?.[s]?.name;a.sort((c,u)=>{let d=ve.indexOf(I(c)),p=ve.indexOf(I(u));return d-p||L(o,c,l).localeCompare(L(o,u,l))})}return an={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:e,power:n,unassigned:i,domains:r},an}function q(o,t){return!t||!o.entities?[]:ln(o).areas.get(t)??[]}var Gr={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Yr=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Xr=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Qr(o,t){let e=o.entities?.[t]?.device_id,n=e?ln(o).domains.get(e):void 0;return n&&[...n].some(i=>Yr.has(i))?!1:!Xr.test(`${t} ${o.states[t]?.attributes.friendly_name??""}`)}function cn(o,t,e,n){let i=e.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=Gr[n],s=(d,p)=>C([d,p],e.points),a=t?.placements.filter(d=>d.entity_id.startsWith("sensor."))??[],l=a.filter(d=>s(d.x,d.z)).map(d=>d.entity_id),c=new Set(a.filter(d=>!s(d.x,d.z)).map(d=>d.entity_id));return[...new Set([...q(o,e.area_id).filter(d=>!c.has(d)),...l])].filter(d=>d.startsWith("sensor.")&&o.states[d]?.attributes.device_class===r&&Qr(o,d))}function ct(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Jr(o,t){return t==="\xB0F"?(o-32)*5/9:t==="K"?o-273.15:o}function Qt(o,t){return ct(o)==="\xB0F"?t*9/5+32:t}function ye(o,t,e,n){let i=cn(o,t,e,n).map(r=>{let s=Number(o.states[r]?.state);return n==="temperature"?Jr(s,o.states[r]?.attributes.unit_of_measurement):s}).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function un(o,t){return o.entities?ln(o).power.get(t)??[]:[]}function L(o,t,e){let i=o.states[t]?.attributes.friendly_name??o.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let r=i.slice(e.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function D(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Zr=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function dn(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function $t(o){if(!o)return!1;switch(I(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return dn(o)&&Zr.has(String(o.state).toLowerCase());default:return!1}}function Jt(o){if(!o||o.state!=="on")return null;let t=o.attributes,e=typeof t.brightness=="number"?Math.max(.08,t.brightness/255):1,n=t.rgb_color,i;return n&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[n[0]/255,n[1]/255,n[2]/255]:typeof t.color_temp_kelvin=="number"?i=ts(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:e}}function ts(o){let t=Math.min(1,Math.max(0,(o-2200)/4300)),e=[1,.66,.26],n=[.78,.9,1];return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}function Rt(o,t,e=null){if(o==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(o==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(o){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var es=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),ns=new Set(["garage","gate"]),os=new Set(["window","opening"]);function Xt(o,t,e=!1){let n=new Map;return t.length&&o.forEach((i,r)=>{let s=e&&t.length===1?t[0]:t[r];s&&n.set(i.id,s)}),n}function we(o,t){let e=new Map;for(let n of t)for(let i of n.rooms){let r=n.openings.filter(h=>h.room_id===i.id).sort((h,y)=>h.edge-y.edge||h.offset-y.offset);if(!r.length)continue;let s=q(o,i.area_id),a=h=>o.states[h]?.attributes.device_class,l=s.filter(h=>I(h)==="cover"&&es.has(a(h))),c=r.filter(h=>h.type==="window"),u=r.filter(h=>h.type==="door"),d=r.filter(h=>h.type==="garage"),p=Xt(c,l,!0),f=Xt(c,s.filter(h=>I(h)==="binary"&&os.has(a(h)))),g=Xt(u,s.filter(h=>I(h)==="binary"&&a(h)==="door")),m=Xt(d,s.filter(h=>I(h)==="cover"&&ns.has(a(h)??""))),b=Xt(d,s.filter(h=>I(h)==="binary"&&a(h)==="garage_door")),$=(h,y)=>h==="none"?null:h??y??null;for(let h of r){let y=h.type==="window"?p:h.type==="garage"?m:null,w=h.type==="window"?f:h.type==="garage"?b:g;e.set(h.id,{cover:$(h.cover,y?.get(h.id)),contact:h.sensor==="handle"&&h.contact==null?null:$(h.contact,w.get(h.id)),tilt:h.tilt==="none"?null:h.tilt,contact2:h.leaves===2&&h.contact2&&h.contact2!=="none"?h.contact2:null,tilt2:h.leaves===2&&h.tilt2&&h.tilt2!=="none"?h.tilt2:null,position:h.position&&h.position!=="none"?h.position:null,positionInverted:!!h.position_inverted})}}return e}var is=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function rs(o){if(!o||D(o))return null;let t=o.attributes.window_state;for(let e of[typeof t=="string"?t:null,o.state]){if(!e)continue;let n=is.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}var ss=.5;function pt(o,t,e="window"){let n=f=>!!f&&o.states[f]?.state==="on",i=f=>!!f&&!!o.states[f]&&!D(o.states[f]),r=f=>f?rs(o.states[f]):null,s=n(t.tilt2)||r(t.tilt2)==="tilted"||r(t.contact2)==="tilted",a=r(t.contact2)==="open"&&!s?1:0;if(e==="door"){let f=r(t.contact);return{open:f===null?ss:f==="closed"?0:1,open2:r(t.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:f!==null}}let l=n(t.tilt)||r(t.tilt)==="tilted"||r(t.contact)==="tilted",c=r(t.contact)==="open"&&!l?1:0,u=null,d=t.cover?o.states[t.cover]:void 0,p=as(o,t.position);if(p!==null)u=t.positionInverted?p:1-p;else if(d&&!D(d)){let f=d.attributes.current_position;typeof f=="number"?u=1-Math.min(100,Math.max(0,f))/100:u=d.state==="closed"?1:d.state==="opening"||d.state==="closing"?.5:0}else t.cover&&(u=0);if(e==="garage"){let f=u!==null||i(t.contact);return u===null&&(u=i(t.contact)&&n(t.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:u,sensed:f}}return{open:c,open2:a,tilt:l?1:0,tilt2:s?1:0,cover:u,sensed:i(t.contact)||i(t.tilt)}}function as(o,t){let e=t?o.states[t]:void 0;if(!e||D(e))return null;let n=Number(e.state);if(!Number.isFinite(n))return null;let i=e.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function pn(o,t){let e=new Map,n=[];for(let s of t){let a=o.entities?.[s]?.device_id??`entity:${s}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=e.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(t.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function hn(o,t){return pn(o,t).map(e=>e.primary)}var ls={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},cs=new Set(["tv_board","tv_wall"]);function jo(o,t){let e=o.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Ko(o){return cs.has(o)||!!xo(o)}function mn(o){return Ko(o)||o==="desk"||o==="fridge_smart"}function Tt(o,t){let e=new Set,n=Ft(o,t),i=t.some(r=>r.openings.some(s=>s.confirm))?we(o,t):null;for(let r of t){for(let s of r.placements)s.confirm&&e.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&e.add(a)}for(let s of r.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&e.add(a)}}return e}function fn(o,t){let e=i=>{if(!i||i==="none")return!1;let r=o.states[i]?.state;return r==="on"||r==="open"},n=new Map;for(let i of t)for(let r of i.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:e(r.door_left),right:e(r.door_right)});return n}var Vo={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function gn(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function us(o,t){if(gn(o,t))return t;let e=o.entities?.[t]?.device_id;return e?un(o,e).find(n=>n!==t)??null:null}function Ft(o,t){let e=new Map;for(let n of t){let i=new Set(n.furniture.flatMap(r=>[r.entity,r.power]).filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in Vo,a=s?Vo[r.type]:ls[r.type];if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&C([r.x,r.z],f.points)),c=l?hn(o,q(o,l.area_id)):[],u=f=>`${f} ${L(o,f)}`,d=r.entity==="none"?null:r.entity??null;if(r.entity==null){let f=c.filter(g=>!i.has(g));if(s){let g=f.filter(m=>I(m)==="light");d=g.find(m=>a.test(u(m)))??g[0]??null}else if(r.type==="robot_vacuum"){let g=l?.area_id??null;d=Object.keys(o.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&Uo(o,m)===g)??null}else if(r.type==="radiator"){let g=f.filter(m=>I(m)==="climate");d=g.find(m=>a.test(u(m)))??g[0]??null}else if(Ko(r.type)){let g=f.filter(m=>I(m)==="media");d=g.find(m=>o.states[m]?.attributes.device_class==="tv")??g.find(m=>a?.test(u(m)))??g[0]??null}else a&&(d=f.find(g=>["switch","media","fan"].includes(I(g)??"")&&a.test(u(g)))??null);d&&i.add(d)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=d?us(o,d):null,!p&&a&&l&&!s&&(p=q(o,l.area_id).find(g=>gn(o,g)&&!i.has(g)&&a.test(u(g)))??null),p&&i.add(p)),(d||p)&&e.set(r.id,{entity:d,power:p})}}return e}function Go(o){if(!o||o.state==="off"||o.state==="standby"||D(o))return null;let t=o.attributes,e=`${t.app_name??""} ${t.source??""} ${t.app_id??""}`.toLowerCase();return e.includes("netflix")?[.9,.04,.08]:e.includes("youtube")?[1,.1,.15]:e.includes("prime")||e.includes("amazon")?[.1,.6,.95]:e.includes("disney")?[.2,.35,1]:e.includes("spotify")?[.12,.85,.4]:e.includes("zdf")||e.includes("ard")||e.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Yo(o,t,e){let n=(c,u)=>C([c,u],e.points),i=Ft(o,[t]),r=we(o,[t]),s=[...t.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...t.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[i.get(c.id)?.entity,i.get(c.id)?.power]),...t.openings.filter(c=>c.room_id===e.id).flatMap(c=>{let u=r.get(c.id);return u?[u.cover,u.contact,u.tilt,u.contact2]:[]}),...e.panel??[]].filter(c=>!!c&&!!o.states[c]),a=[...new Set(s)],l=new Set(a);return{shown:a,more:q(o,e.area_id).filter(c=>!l.has(c))}}var No=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function _n(o,t,e){if(e==="none")return null;if(e)return e;let n=t?o.entities?.[t]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(No.test(i.translation_key??"")||No.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function Bo(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Xo(o,t,e,n){let i=n?o.states[n]?.state:e?o.states[e]?.attributes.current_room:void 0;if(typeof i!="string"||!i||i==="unknown"||i==="unavailable")return null;let r=Bo(i);if(!r)return null;let s=a=>[a.name,a.area_id??"",a.area_id&&o.areas?.[a.area_id]?.name||""].map(Bo).filter(Boolean);return t.find(a=>s(a).includes(r))??t.find(a=>s(a).some(l=>l.length>=3&&(l.includes(r)||r.includes(l))))??null}var ds={view:"3D",editor:"Disegna casa",all_floors:"Tutti i piani",no_building:"Non hai ancora disegnato la casa.",no_building_admin:"Non hai ancora disegnato la casa. Apri \xABDisegna casa\xBB e aggiungi il primo piano.",open_editor:"Apri editor",loading:"Caricamento \u2026",load_error:"Caricamento non riuscito",saving:"Salvataggio \u2026",saved:"Salvato",save_error:"Salvataggio non riuscito",save_failed_detail:"Salvataggio non riuscito: {error}. Le modifiche rimangono in questo browser.",needs_restart:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora {version}. Riavvia Home Assistant: fino ad allora il salvataggio potrebbe non riuscire.",needs_restart_old:"\xC8 installata una nuova versione di NeonCasa 3D, ma Home Assistant usa ancora quella precedente. Riavvia Home Assistant per poter salvare.",draft_found:"Trovate modifiche non salvate del {time}.",draft_restore:"Ripristina e salva",draft_discard:"Scarta",walls_auto:"Muri interi",walls_cut:"Muri tagliati",reset_view:"Panoramica",back:"Indietro",floor:"Piano",floors:"Piani",add_floor:"Aggiungi piano",floor_from_ha:"Piani di Home Assistant:",floor_empty:"Piano vuoto",level:"Livello {n}",ha_floor:"Piano in Home Assistant",no_ha_floor:"\u2013 nessuno \u2013",area_rooms:"Crea {n} stanze dalle aree di HA",area_rooms_hint:"Crea una stanza di 4 \xD7 3 m per ogni area del piano. Spostala nella posizione corretta e modifica gli angoli.",floor_name:"Nome",elevation:"Quota dal suolo (m)",height:"Altezza soffitto (m)",cut_height:"Altezza taglio (m)",delete_floor:"Elimina piano",delete_floor_confirm:"Eliminare il piano \xAB{name}\xBB con tutte le sue stanze?",move_up:"Sposta su",move_down:"Sposta gi\xF9",default_floor:"Piano terra",new_floor:"Piano {n}",tool_select:"Seleziona",tool_rect:"Rettangolo",tool_polygon:"Forma libera",undo:"Annulla",redo:"Ripeti",fit:"Mostra tutto",room:"Stanza",rooms:"Stanze",room_name:"Nome",area:"Area",no_area:"Nessuna area",material:"Pavimento",x:"X (m)",z:"Y (m)",width:"Larghezza (m)",depth:"Profondit\xE0 (m)",points:"Angoli",delete_point:"Elimina angolo",duplicate:"Duplica",delete:"Elimina",new_room:"Stanza {n}",settings:"Impostazioni",pendant_shape:"Forma",pendant_shade:"Paralume",pendant_globe:"Sfera",pendant_cone:"Cono",pendant_drum:"Cilindro",pkg_open:"Arreda \u2026",pkg_hint:"I mobili si dispongono lungo le pareti; le lampade si collegano alle luci dell'area. Puoi poi modificare ogni elemento. Ctrl+Z annulla tutto.",pkg_done:"Posizionati {n} elementi. Ctrl+Z annulla.",pkg_kitchen_row:"Cucina lineare",pkg_kitchen_row_desc:"Cucina sulla parete posteriore con frigorifero, forno, lavello, lavastoviglie, piano cottura, pensile e tavolo con lampada a sospensione",pkg_kitchen_l:"Cucina a L",pkg_kitchen_l_desc:"Cucina lungo le pareti posteriore e sinistra, isola con sgabelli",pkg_bath:"Bagno",pkg_bath_desc:"Lavabo, WC, vasca, lavatrice e faretto",pkg_bedroom:"Camera da letto",pkg_bedroom_desc:"Letto matrimoniale con due comodini, armadio, cassettiera e plafoniera",pkg_living:"Soggiorno",pkg_living_desc:"Mobile TV, divano, tavolino, tappeto, poltrona, scaffale, piantana e pianta",pkg_dining:"Sala da pranzo",pkg_dining_desc:"Tavolo con quattro sedie, credenza e lampada a sospensione",pkg_office:"Ufficio",pkg_office_desc:"Scrivania con sedia da ufficio, due scaffali e plafoniera",pkg_kids:"Cameretta",pkg_kids_desc:"Letto singolo, scrivania, scaffale e tappeto",pkg_hall:"Ingresso",pkg_hall_desc:"Appendiabiti e due faretti",spots_place:"Posiziona faretti",spots_type:"Lampada",spots_cols:"Colonne (sinistra\u2013destra)",spots_rows:"Righe (davanti\u2013dietro)",spots_add:"Posiziona {n} lampade",spots_placed:"Posizionate {n} lampade.",spots_hint:"Tutte le lampade seguono la luce scelta, per esempio faretti su un unico dimmer. Puoi poi spostarle o collegarle ad altre luci.",cancel:"Annulla",backup:"Backup",backup_history:"Punti di ripristino",backup_none:"Nessun punto disponibile. Durante le modifiche viene conservato al massimo un punto ogni 10 minuti.",backup_summary:"{rooms} stanze, {furniture} elementi",backup_restore:"Ripristina",backup_restore_confirm:"Ripristinare lo stato del {time}? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_restored:"Ripristinato.",backup_file:"File",backup_export:"Esporta",backup_export_share:"Condividi come modello",backup_export_share_hint:"Senza aree, dispositivi, sensori e immagini, per condividerlo con altri.",backup_import:"Importa \u2026",backup_import_confirm:"Sostituire l'intera pianta con il file? Lo stato attuale verr\xE0 conservato come punto di ripristino.",backup_import_error:"Il file non \xE8 una pianta NeonCasa 3D ({error}).",backup_imported:"Importato.",backup_hint:"Le immagini di sfondo non sono incluse nel file.",backup_full:"Backup completo",backup_full_export:"Salva tutto (pianta, immagini e pacchetti)",backup_full_import:"Ripristina un backup completo \u2026",backup_full_hint:"Un unico file con pianta, sfondi, immagini degli schermi e pacchetti installati. Al ripristino i pacchetti vengono verificati nuovamente; la chiave di licenza non \xE8 inclusa.",backup_full_confirm:"Sostituire pianta, immagini e pacchetti con il backup? Lo stato attuale rimarr\xE0 come punto di ripristino.",backup_full_not_backup:"Questo non \xE8 un backup completo di NeonCasa 3D.",backup_full_restored:"Backup ripristinato: {packs} pacchetti, {pictures} immagini.",backup_full_skipped:"Ignorati (non verificabili o legati a un'altra installazione): {packs}.",export_name_full:"completo",device_confirm:"Chiedi conferma prima di azionare",device_confirm_hint:"Il tocco nella vista 3D, il menu rapido e il pannello stanza chiedono conferma. Il doppio tocco sulla stanza esclude questo dispositivo.",cover_confirm_hint:"Apertura, chiusura e posizione richiedono conferma. Scorrere sull'indicatore ruota la vista senza muovere la tapparella. L'arresto non richiede conferma.",confirm_switch:"Azionare davvero {name}?",split_handle_hint:"Trascina per regolare la larghezza della pianta e della vista 3D",wall_exterior:"Spessore muro esterno (m)",wall_interior:"Spessore muro interno (m)",grid:"Griglia (m)",background:"Modello (immagine della piantina)",background_upload:"Scegli immagine \u2026",background_width:"Larghezza nella pianta (m)",background_opacity:"Opacit\xE0",background_remove:"Rimuovi modello",hint_select:"Seleziona una stanza \xB7 trascina gli angoli \xB7 \xAB+\xBB aggiunge un angolo \xB7 frecce per spostare \xB7 Canc elimina \xB7 Ctrl+Z annulla",hint_rect:"Trascina per disegnare un rettangolo",hint_polygon:"Posiziona gli angoli \xB7 clicca sul primo o premi Invio per chiudere \xB7 Esc annulla",hint_empty:"Aggiungi prima un piano.",area_m2:"{a} m\xB2",overlap_warning:"Le stanze si sovrappongono: i muri in quel punto sono incompleti.",read_only:"Solo gli amministratori possono modificare la pianta.",mat_wood:"Legno",mat_oak:"Rovere",mat_tiles:"Piastrelle",mat_carpet:"Moquette",mat_stone:"Pietra",mat_concrete:"Cemento",card_name:"NeonCasa 3D",card_description:"La tua casa in 3D, in italiano.",stats:"{calls} chiamate grafiche \xB7 {tris} triangoli",stats_fps:"{fps} fps (fotogramma pi\xF9 lento: {ms} ms)",stats_idle:"A riposo (0 fps)",stats_busy_camera:"inquadratura",stats_busy_floors:"piani",stats_busy_openings:"porte/finestre",stats_busy_flash:"lampeggio",stats_busy_roof:"tetto",stats_busy_flow:"flusso energetico",stats_busy_effect:"effetto colore",stats_busy_robot:"robot",stats_busy_orbit:"rotazione vista",stats_busy_tint:"colore stanza",stats_low:"qualit\xE0 tablet, rapporto pixel {r}",stats_full:"qualit\xE0 completa, rapporto pixel {r}",floors_apart:"Separati",floors_stacked:"Sovrapposti",floor_rooms_one:"1 stanza",floor_rooms:"{n} stanze",quality:"Qualit\xE0",quality_auto:"Automatica",quality_low:"Tablet",quality_high:"Alta",state_on:"Acceso",state_off:"Spento",state_open:"Aperto",state_closed:"Chiuso",state_opening:"Apertura",state_closing:"Chiusura",state_playing:"In riproduzione",state_paused:"In pausa",state_idle:"Inattivo",state_locked:"Bloccato",state_unlocked:"Sbloccato",state_detected:"Rilevato",state_clear:"Nessun rilevamento",state_unavailable:"Non disponibile",state_heat:"Riscaldamento",state_cool:"Raffrescamento",state_auto:"Automatico",state_heat_cool:"Caldo/freddo",state_dry:"Deumidificazione",state_fan_only:"Ventilazione",devices:"Dispositivi",devices_none_area:"Collega la stanza a un'area per visualizzare qui i suoi dispositivi.",devices_none:"L'area non contiene dispositivi adatti.",devices_place_all_n:"Posiziona tutti i {n} dispositivi \u2026",devices_place_all_confirm:"Posizionare {n} dispositivi nella stanza? Ctrl+Z o \xABAnnulla\xBB li rimuove tutti in un solo passaggio.",devices_src_area:"Questa area",devices_src_other:"Altre aree",devices_src_none:"Senza area",devices_place:"Posiziona",devices_remove:"Rimuovi",devices_hint:"I dispositivi posizionati appaiono in 3D. Trascinali nella pianta per spostarli.",panel_lights:"Luci",panel_covers:"Tapparelle",panel_climate:"Riscaldamento",panel_media:"Multimedia",panel_switches:"Interruttori",panel_sensors:"Sensori",panel_scenes:"Scene e script",panel_cameras:"Telecamere",camera_live:"Apri diretta",through_camera:"Guarda dalla telecamera",through_blend:"Sovrapposizione",through_back:"Torna alla vista",camera_mount:"Montaggio",camera_mount_wall:"Parete (segue la rotazione)",camera_mount_ceiling:"Soffitto (dome, tutto intorno)",camera_fov:"Campo visivo (\xB0)",camera_reach:"Portata (m)",camera_fov_short:"Angolo \xB0",camera_reach_short:"Portata m",camera_tilt:"Inclinazione verso il basso (\xB0)",camera_tilt_short:"Inclinazione \xB0",camera_aim_hint:"Il settore nella pianta indica dove guarda la telecamera. Trascina la maniglia sulla punta per ruotarla e regolare la portata.",state_recording:"Registrazione",state_streaming:"Trasmissione",panel_all_off:"Spegni tutto",panel_no_area:"La stanza non \xE8 collegata a un'area. Puoi collegarla nell'editor.",panel_empty:"Nessun dispositivo della stanza \xE8 nella pianta. Posizionalo nell'editor o aggiungilo al pannello stanza con \u2606.",close:"Chiudi",brightness:"Luminosit\xE0",color_temp:"Temperatura colore",color:"Colore",position:"Posizione",cover_open:"Apri",cover_stop:"Arresta",cover_close:"Chiudi",target_temp:"Desiderata",current_temp:"Attuale",temp_down:"Pi\xF9 freddo",temp_up:"Pi\xF9 caldo",volume:"Volume",play_pause:"Riproduci/pausa",previous:"Precedente",next:"Successivo",run:"Esegui",details:"Dettagli",hold_hint:"Tocco per azionare \xB7 pressione prolungata per i dettagli",tool_opening:"Porte e finestre",tool_furniture:"Arredamento",qm_off:"Spento",find:"Cerca",find_placeholder:"Dov'\xE8 \u2026? Dispositivo o stanza",find_none:"Nessun risultato",swipe_off:"Spento",panel_pin:"Mostra nel pannello stanza",panel_unpin:"Nascondi dal pannello stanza",devices_panel_hint:"Il pannello mostra i dispositivi della pianta. \u2606 aggiunge un dispositivo al pannello senza posizionarlo.",card_section_view:"Vista",card_size:"Dimensioni",card_size_fixed:"Altezza fissa",card_size_fill:"Riempi lo schermo",card_fill_hint:"Funziona meglio in una vista dashboard di tipo \xABPannello (scheda singola)\xBB: la scheda occupa tutto lo spazio.",card_controls:"Controlli nella scheda",card_floor_thumbs:"Miniature dei piani",card_floor_thumbs_hint:"Piccole immagini dei piani a lato: toccane una per cambiare piano",card_floor_thumbs_hint_start:"La scheda si apre sul piano scelto; le immagini laterali permettono di passare agli altri",card_room_names:"Mostra nomi stanze",card_section_kiosk:"Tablet a parete (chiosco)",card_section_features:"Funzioni",card_weather_plan:"come impostato nella pianta",card_pro_hint:"La traccia del movimento e il meteo sono extra Pro: senza il relativo extra questi comandi non hanno effetto.",card_idle_return:"Torna alla vista iniziale dopo",card_idle_off:"Mai",card_idle_min:"{n} min senza interazioni",card_idle_hint:"Dopo l'attesa la scheda chiude la stanza e torna alla vista iniziale.",card_night:"Oscuramento notturno",card_night_off:"Disattivato",card_night_sun:"In base al sole",card_night_time:"Fascia oraria",card_night_range:"Fascia oraria (es. 22:00-06:00)",card_idle_orbit:"Rotazione vista come salvaschermo",card_idle_orbit_hint:"Dopo il ritorno la vista ruota lentamente finch\xE9 qualcuno tocca il tablet",card_alerts:"Mostra avvisi",card_alerts_hint:"Fumo, gas, CO, acqua, allarme e finestre aperte sotto la pioggia: la stanza lampeggia e compare un avviso in alto",card_alert_jump:"Vai alla stanza di un nuovo avviso",card_alert_jump_hint:"La vista passa automaticamente al piano e alla stanza dell'avviso",card_scenes:"Pulsanti scene nella stanza",card_scenes_hint:"Scene e script dell'area sotto la vista 3D quando \xE8 selezionata una stanza",card_motion_trail:"Traccia del movimento",card_motion_trail_hint:"Movimenti rilevati negli ultimi 30 minuti, con orari (sensori di movimento, presenza e telecamere)",trail_short:"Traccia",weather_short:"Meteo",weather_entity:"Entit\xE0 meteo",weather_effects:"Effetti meteo in 3D",rain_warning:"Attenzione: finestra aperta mentre piove",weather_effect_rain:"Pioggia",weather_effect_snow:"Neve",weather_effect_fog:"Nebbia (ingrigisce la scena)",weather_effect_clouds:"Le nuvole oscurano cielo e sole",weather_effect_lightning:"Fulmini durante i temporali",weather_effect_sky:"Sole e luna nel cielo",weather_entity_hint:"L'entit\xE0 meteo fornisce pioggia, neve, nebbia e nuvole. La selezione automatica usa la prima disponibile.",weather_hint:"Meteo esterno: pioggia, neve, nebbia e nuvole dall'entit\xE0 meteo; sole e luna da sun.sun",card_weather:"Meteo esterno",card_weather_hint:"Pioggia, neve, nebbia e nuvole dalla prima entit\xE0 meteo; weather_entity permette di cambiarla. Con qualit\xE0 tablet vengono mostrate solo le nuvole.",trail_hint:"Traccia dei movimenti rilevati negli ultimi 30 minuti, con orari",alerts:"Avvisi",alert_smoke:"Fumo: {name}",alert_gas:"Gas: {name}",alert_co:"Monossido di carbonio: {name}",alert_water:"Acqua: {name}",alert_alarm:"Allarme scattato",alert_alarm_pending:"Allarme in attesa",alert_window_rain:"Finestra aperta sotto la pioggia: {name}",room_names_short:"Nomi stanze",floor_stack_short_dim:"Attenuati",floor_stack_short_stacked:"Sovrapposti",floor_stack_short_single:"Singolo",size_short_w:"L",size_short_d:"P",size_short_h:"H",import_error_not_json:"Il file non \xE8 in formato JSON.",import_error_not_plan:"Il file non \xE8 una pianta NeonCasa 3D.",export_name_template:"modello",export_name_backup:"backup",card_floor_stack:"Piani sottostanti",floor_stack_dim:"Attenuati",floor_stack_stacked:"Sovrapposti (casa fino a qui)",floor_stack_single:"Nascosti (solo questo piano)",card_control_walls:"Muri interi/tagliati",card_control_floors:"Separa piani",card_control_temperature:"Temperatura",card_control_humidity:"Umidit\xE0",card_control_co2:"CO\u2082",card_controls_hint:"Comandi per muri, separazione piani, temperatura, umidit\xE0 e CO\u2082",card_fullscreen_button:"Pulsante schermo intero",card_fullscreen_button_hint:"Nasconde la dashboard intorno alla scheda, ad esempio su un tablet a parete",fullscreen:"Schermo intero",fullscreen_exit:"Esci da schermo intero",card_section_show:"Mostra",card_floor:"Piano",card_floor_house:"Casa intera (tocca un piano per aprirlo)",card_height:"Altezza (pixel)",card_walls:"Muri",card_quality_hint:"\xABTablet\xBB \xE8 l'impostazione pi\xF9 leggera, ideale per tablet Fire e tablet a parete.",card_flows_switch:"Comando nella scheda",card_flows_on:"Sempre attivo",card_flows_off:"Sempre disattivato",card_energy:"Mostra valori energetici in alto",card_room_panel:"Dettagli stanza al tocco",card_room_panel_hint:"Luci, tapparelle e telecamere della stanza in un pannello laterale",card_explode:"Separa i piani nella vista casa",card_stats:"Prestazioni (fotogrammi al secondo)",card_stats_hint:"Per verificare la fluidit\xE0 della scheda sul dispositivo",packs:"Pacchetti di arredamento",packs_hint:"Si possono importare solo pacchetti firmati dall'editore.",lib_badge_light:"Lampada: collegabile a una luce e azionabile in 3D",lib_badge_electric:"Elettrico: collegabile a un'entit\xE0 e a un sensore di potenza (comandi, immagini e consumi)",lib_badge_hint:"Gli elementi con simbolo si collegano alle entit\xE0: lampade azionabili, schermi con immagini ed elettrodomestici con consumi.",pack_error_wrong_instance:"Pacchetto firmato per un'altra installazione Home Assistant. L'account del negozio pu\xF2 fornirlo per questa installazione.",license_title:"Collegamento al negozio",license_instance:"ID installazione",license_copy:"Copia",license_copied:"ID copiato",license_activate:"Attiva",license_activated:"Collegato: i tuoi pacchetti sono elencati sotto.",license_active:"Collegato come {name} (chiave {key})",license_checked:"Ultimo controllo: {time}",license_refresh:"Controlla ora",license_refreshed:"Controllo completato.",license_remove:"Scollega",license_remove_confirm:"Scollegare il negozio? I pacchetti installati rimangono, ma gli aggiornamenti automatici si interrompono.",license_installed:"installato \xB7 v{release}",license_update_available:"disponibile aggiornamento alla v{release}",license_not_installed:"non ancora installato",license_install:"Installa",license_update:"Aggiorna",license_none:"Nessun pacchetto nell'account.",license_hint:"La chiave di licenza si trova nell'ordine e nell'account su mastershort.de. Inseriscila per vedere i pacchetti acquistati, firmati per questa installazione e aggiornati automaticamente una volta al giorno. I pacchetti installati funzionano anche senza collegamento.",license_shop:"Altri pacchetti nel negozio",license_error_invalid_key:"Chiave non riconosciuta dal negozio. Il formato \xE8 NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"La chiave \xE8 gi\xE0 associata al numero massimo di installazioni consentite.",license_error_shop_unreachable:"Negozio momentaneamente non raggiungibile. I pacchetti installati continuano a funzionare.",license_error_not_owned:"Questo pacchetto non \xE8 presente nell'account.",license_error_no_key:"Inserisci prima la chiave di licenza.",license_error_wrong_instance:"Il negozio ha firmato il pacchetto per un'altra installazione.",license_error_other:"Operazione non riuscita: {detail}",pack_import:"Importa pacchetti di arredamento \u2026",pack_imported:"Importato \xAB{name}\xBB di {publisher}: {n} elementi",packs_imported_n:"Importati {n} pacchetti su {total}",pack_by:"di {publisher} \xB7 {n} elementi",pack_features:"di {publisher} \xB7 abilita {n} funzioni Pro",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Pannello telecamere: vista dalla telecamera e traccia del movimento",pro_name_camera_cockpit:"Pannello telecamere",pro_name_weather:"Meteo esterno",pro_name_screens:"Schermi dal vivo",pro_name_energy_pro:"Energia Pro",ext_tab:"Estensioni",offers_title:"Novit\xE0 nel negozio",offers_new:"NOVIT\xC0",offers_loyalty:"Sconto fedelt\xE0: {percent} % su ogni ulteriore pacchetto ed extra Pro",offers_kind_pack:"Pacchetto arredamento",offers_kind_pro:"Extra Pro",offers_kind_bundle:"Raccolta",offers_dot:"Novit\xE0 nel negozio",pack_updated:"{name} aggiornato alla versione {release}.",pack_updated_added:"{name} aggiornato alla versione {release}: {n} nuovi elementi. Guarda il catalogo!",ext_title:"Estensioni",ext_intro:"Pacchetti arredamento ed extra Pro dell'autore di NeonCasa 3D. Installa gli acquisti con la chiave di licenza: si aggiornano automaticamente e funzionano anche senza collegamento.",ext_shop:"Apri negozio",ext_pro:"Extra Pro",ext_active:"attivo",ext_get:"Vedi nel negozio",ext_open:"Apri estensioni",manual:"Manuale",manual_more:"Scopri di pi\xF9",ext_teaser_title:"Altri mobili e funzioni Pro",ext_teaser_text:"Pacchetti arredamento, collegamento al negozio ed extra Pro si trovano in \xABEstensioni\xBB in alto.",pro_feature_weather:"Meteo esterno: pioggia, neve, nuvole, sole e luna",pro_feature_screens:"Schermi dal vivo: colore dell'app e immagini multimediali, regole immagini e immagini delle telecamere sugli schermi",pro_feature_energy_pro:"Energia Pro: linee di flusso di energia nella casa, moduli solari vivi, ologramma di vetro con il bilancio energetico; gas, acqua e calore seguiranno come aggiornamenti",pro_locked:"Funzione disponibile come extra Pro. Dopo l'acquisto appare in Estensioni \u203A Collegamento al negozio, da cui puoi installarla.",pro_shop:"Vai al negozio",pack_licensed:"Licenza intestata a {name}",pack_remove:"Rimuovi",pack_remove_confirm:"Rimuovere \xAB{name}\xBB? I suoi mobili rimarranno nella pianta come semplici blocchi.",pack_missing_item:"Mobile di un pacchetto rimosso",pack_error_bad_signature:"Il pacchetto \xE8 stato modificato o la firma non \xE8 valida.",pack_error_unknown_publisher:"Il pacchetto non proviene da un editore riconosciuto.",pack_error_unsigned:"Il pacchetto non \xE8 firmato.",pack_error_not_a_pack:"Il file non \xE8 un pacchetto di arredamento.",pack_error_invalid_content:"Il pacchetto contiene elementi non validi: {detail}",pack_error_too_large:"Il file \xE8 troppo grande.",pack_error_other:"Importazione non riuscita: {detail}",back_to_room:"Torna a {room}",back_to_floor:"Torna al piano",hint_furniture:"Seleziona una stanza e scegli un elemento a destra \xB7 trascina gli elementi e ridimensionali dagli angoli",furniture_into:"I nuovi elementi vengono inseriti al centro di \xAB{room}\xBB.",furniture_pick_room:"Consiglio: seleziona prima una stanza per inserire i nuovi elementi al centro.",flows:"Flusso energetico",flows_hint:"Mostra o nasconde le linee luminose dal contatore alle utenze",holo_title:"Solare ed energia",holo_live:"live",holo_pv_now:"FV ora",holo_today:"Oggi",holo_peak:"Picco",holo_battery:"Batteria",holo_grid:"Rete",holo_house:"Casa",holo_wallbox:"Wallbox",holo_autarky:"Autosufficienza",furn_name:"Nome (facoltativo)",cables_title:"Cavi (Energia Pro)",cables_hint:"Tratteggiato: il cavo trova da solo la sua strada. Afferralo nel piano o sceglilo qui e premi \xABPosa a mano\xBB: allora corre a linea continua per i tuoi punti all'altezza impostata, es. lungo la facciata esterna o sotto il soffitto, e pi\xF9 cavi possono correre affiancati.",cable_laid:"posato a mano",cable_lay:"Posa a mano",cable_auto:"Di nuovo automatico",cable_height:"Altezza dal pavimento (m)",cable_points_hint:"Trascina i punti nel piano. Un clic sul cavo aggiunge un punto, un doppio clic su un punto lo toglie.",cable_other_floor:"Questo cavo \xE8 posato al piano {floor}: passa l\xEC per trascinarne i punti.",holo_settings:"Ologramma (Energia Pro)",holo_settings_hint:"L'ologramma \xE8 agganciato a un campo solare e mantiene la sua dimensione nel mondo: si rimpicciolisce allontanando la vista. Scegli qui il campo, la dimensione e lo spostamento.",holo_field:"Sul campo solare",holo_field_auto:"Automatico (campo pi\xF9 grande)",holo_size:"Dimensione (1 = normale)",holo_right:"Spostamento laterale (m, + = destra)",holo_up:"Spostamento verso l'alto (m, verso il colmo)",flow_on:"attivo",flow_off:"disattivato",hint_opening:"Clicca su un muro per inserire una porta o finestra; scegli il tipo a destra",preset_door:"Porta",preset_door_double:"Porta a due ante",preset_window:"Finestra",preset_window_double:"Finestra a due ante",preset_terrace:"Portafinestra",preset_terrace_double:"Portafinestra a due ante",preset_garage:"Portone garage",preset_front:"Porta d'ingresso",opening_style:"Stile",style_auto:"Automatico ({style})",style_interior:"Porta interna",style_front:"Porta d'ingresso",style_front_glass:"Porta d'ingresso vetrata",style_sidelight:"Porta d'ingresso con vetro laterale",style_sidelights:"Porta d'ingresso con due vetri laterali",style_glass:"Porta in vetro",style_sliding:"Porta scorrevole",style_passage:"Passaggio (senza porta)",style_standard:"Standard",style_bars:"Con traversini",flip_hinge:"Scambia lato cerniere",flip_main_leaf:"Scambia anta principale",flip_hinge_hint:"Sposta le cerniere sull'altro lato",flip_swing:"Inverti verso di apertura",flip_swing_hint:"La porta si apre verso la stanza oppure verso l'esterno",main_leaf:"Anta principale (vista dalla stanza)",contact_main:"Contatto anta principale",contact_second:"Contatto seconda anta",tool_outdoor:"Esterni",tool_measure:"Disegna con misure",hint_measure:"Clicca sul punto iniziale, poi inserisci a destra lunghezze e direzioni dei muri",measure:"Stanza con misure",measure_start:"Clicca sul punto iniziale nella pianta, ad esempio un angolo della stanza.",measure_from:"Partenza: {x} / {z} m. Clicca per spostarla.",measure_length:"Lunghezza muro successivo (m)",measure_close:"Chiudi stanza",measure_undo:"Rimuovi ultimo muro",measure_gap:"Distanza dal punto iniziale: {gap} m (unita alla chiusura)",measure_hint:"Inserisci una lunghezza e premi una freccia. Se usi misure interne, applica poi \xABChiudi spazi\xBB.",rect_by_size:"Rettangolo con dimensioni",rect_add:"Aggiungi rettangolo",dir_up:"Su",dir_down:"Gi\xF9",dir_left:"Sinistra",dir_right:"Destra",hint_outdoor:"Trascina per disegnare un'area esterna (prato, terrazza, piscina \u2026)",outdoor:"Area esterna",outdoor_type:"Tipo",outdoor_hint:"Le luci esterne illuminano tutte le aree esterne e la facciata.",out_lawn:"Prato",out_terrace:"Terrazza",out_path:"Sentiero",out_driveway:"Vialetto carrabile",out_pool:"Piscina",out_bed:"Aiuola",out_hedge:"Siepe",out_fence:"Recinzione",north:"Nord (\xB0 in senso orario dall'alto)",north_hint:"Il nord serve a calcolare la luce del sole attraverso le finestre.",roof:"Tetto",roof_none:"Nessun tetto",roof_flat:"Tetto piano",roof_gable:"Tetto a due falde",roof_custom:"Sezioni del tetto (personalizzate)",roof_sections:"Sezioni del tetto",roof_sections_hint:"Ogni sezione copre un rettangolo della casa con forma, colmo, quota di gronda e pendenza propri. Trascina per disegnarla; clicca per selezionarla, trascinala per spostarla e usa gli angoli per ridimensionarla.",roof_sections_start:"Crea sezioni dalle stanze",roof_sections_regen:"Ricrea dalle stanze",roof_sections_off:"Torna al tetto unico",roof_regen_confirm:"Sostituire tutte le sezioni del tetto con una nuova proposta basata sulle stanze?",roof_section:"Sezione tetto",roof_section_hint:"Le quote partono dal suolo. Un lato con gronda pi\xF9 bassa scende maggiormente. I tetti a una falda salgono dal primo lato.",roof_shape_gable:"Due falde",roof_shape_hip:"Padiglione",roof_shape_pent:"Una falda",roof_shape_flat:"Piano",roof_axis_x:"Colmo \u2194",roof_axis_z:"Colmo \u2195",roof_eave:"Quota gronda (m)",roof_pitch_short:"Pendenza (\xB0)",roof_height:"Altezza (m)",roof_base:"Sommit\xE0 muri (m)",roof_ridge_height:"Altezza colmo",roof_side_top:"superiore",roof_side_bottom:"inferiore",roof_side_left:"sinistra",roof_side_right:"destra",roof_swap:"Scambia lati",roof_open:"Tettoia (pilastri al posto dei muri)",roof_open_short:"Tettoia",roof_open_hint:"Per terrazze e posti auto coperti: pilastri e travi sostengono il tetto lasciando la vista aperta. Dove incontra il muro della casa, la tettoia si appoggia al muro.",roof_swap_hint:"Scambia gronda e pendenza dei due lati; un tetto a una falda sale nell'altro verso.",roof_pitch:"Pendenza tetto (\xB0)",roof_overhang:"Sporgenza tetto (m)",roof_ridge:"Colmo",roof_ridge_long:"Lungo il lato maggiore",roof_ridge_short:"Lungo il lato minore (es. casa a schiera)",device:"Dispositivo",lamp_mount:"Lampada",lamp_ceiling:"Plafoniera",lamp_floor:"Piantana",lamp_table:"Lampada da tavolo",lamp_wall:"Applique",marker_height:"Altezza indicatore (m)",height_auto:"Altezza automatica",device_centre:"Al centro della stanza",lights_spread:"Distribuisci uniformemente le luci a soffitto",devices_search:"Cerca dispositivi \u2026",devices_more:"Altri {n}",devices_less:"Meno",panel_more:"Altri dispositivi dell'area ({n})",panel_less:"Mostra meno",gaps_close:"Chiudi spazi",gaps_hint:"Unisce stanze distanti fino a 60 cm lungo un muro condiviso. Lo spazio diventa lo spessore del muro interno.",gaps_none:"Nessuno spazio tra le stanze trovato.",gaps_closed:"Chiusi {n} spazi.",gaps_closed_wall:"Chiusi {n} spazi. Spessore muro interno: {t} m.",fps:"FPS",fps_title:"Prestazioni (fotogrammi al secondo)",hint_garage:"Clicca su un muro per aggiungere un portone garage",opening_garage:"Portone garage",garage_hint:"Il portone segue l'entit\xE0 del garage (posizione o aperto/chiuso) o il contatto porta dell'area.",door_hint:"Con un contatto porta l'anta segue l'apertura; senza sensore rimane socchiusa.",hint_door:"Clicca su un muro per aggiungere una porta",hint_window:"Clicca su un muro per aggiungere una finestra",opening_door:"Porta",opening_window:"Finestra",opening_type:"Tipo",opening_position:"Centro dall'angolo (m)",sill:"Altezza davanzale (m)",opening_height:"Altezza (m)",hinge:"Cerniere (vista dalla stanza)",hinge_left:"Sinistra",hinge_right:"Destra",cover_entity:"Tapparella",cover_position_entity:"Sensore posizione (dal vivo)",cover_position_invert:"Sensore invertito (0 = aperto)",contact_entity:"Contatto",sensor_kind:"Tipo sensore",sensor_kind_contact:"Contatto finestra (aperto/chiuso)",sensor_kind_handle:"Sensore maniglia (aperto/ribalta/chiuso)",sensor_kind_contact_tilt:"Contatto + sensore ribalta",handle_entity:"Sensore maniglia",handle_main:"Sensore maniglia anta principale",leaf_main:"Anta principale",leaf_second:"Seconda anta",tilt_entity:"Sensore ribalta",entity_auto:"Automatico ({name})",entity_auto_none:"Automatico (nessuno trovato)",entity_none:"Nessuno",entity_search:"Scrivi per cercare \u2026",opening_hint:"Scegli contatto finestra (aperto/chiuso), sensore maniglia (aperto/ribalta/chiuso) o contatto con sensore ribalta separato. La scelta automatica usa tapparelle e contatti dell'area. Il sensore posizione comunica la posizione della tapparella mentre si muove (0\u2013100 % o 0\u20131, aperto = valore alto) per animarla in 3D.",furniture:"Arredamento",furniture_add:"Aggiungi mobile",furniture_search:"Cerca arredamento \u2026",furniture_type:"Elemento",rotation:"Rotazione (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altezza (m)",furn_sofa:"Divano",furn_armchair:"Poltrona",furn_table:"Tavolo",furn_chair:"Sedia",furn_bed:"Letto",furn_nightstand:"Comodino",furn_wardrobe:"Armadio",furn_shelf:"Scaffale",furn_kitchen:"Base cucina",furn_worktop:"Piano di lavoro",furn_fridge:"Frigorifero",furn_fridge_smart:"Frigorifero smart a due porte",furn_door_left:"Sensore porta sinistra (congelatore)",furn_door_right:"Sensore porta destra (frigorifero)",fridge_hint:"Quando il sensore segnala apertura, la porta si apre in 3D. Lo schermo sulla porta destra mostra immagini secondo le regole, come una TV, mentre la porta \xE8 chiusa.",furn_stove:"Piano cottura",furn_sink:"Lavello",furn_bathtub:"Vasca",furn_shower:"Doccia",furn_wc:"WC",furn_washbasin:"Lavabo",furn_desk:"Scrivania",furn_tv_board:"Mobile TV",furn_plant:"Pianta",furn_rug:"Tappeto",furn_stairs:"Scale",furn_stairwell:"Apertura nel solaio",stairwell_hint:"Apertura in questo piano, per esempio sopra le scale o un soppalco. Deve stare dentro una stanza; pi\xF9 aperture possono sovrapporsi per formare una L. Le scale del piano inferiore che raggiungono questo piano creano l'apertura automaticamente.",tool_hole:"Apertura solaio",tool_roof:"Tetto",tool_energy:"Energia",tool_wall:"Muro",hint_wall:"Trascina per disegnare un muro divisorio \xB7 Maiusc lo mantiene dritto \xB7 Alt disattiva l'aggancio",free_wall:"Muro",wall_length:"Lunghezza (m)",wall_thickness:"Spessore muro (m)",wall_height:"Altezza (m)",wall_height_full:"Altezza intera della stanza",wall_none:"Nessuna parete",wall_none_hint:"Togli del tutto questa parete: per planimetrie aperte le cui stanze sono un unico spazio ma separate in Home Assistant.",wall_heights:"Altezze muri",wall_n:"Muro {a}\u2013{b}",wall_exterior_short:"muro esterno",room_wall_hint:"Un'altezza ridotta crea un parapetto o un bancone. Per muri condivisi vale l'altezza minore. Porte e finestre terminano all'altezza del muro.",free_wall_hint:"Muro indipendente, per esempio un divisorio. L'incontro con un muro della stanza viene raccordato. Trascina le estremit\xE0 per modificarle o la linea per spostare tutto il muro.",stairwell_outside:"L'apertura supera il confine della stanza e non viene ritagliata. Spostala completamente dentro una stanza o riducila.",hint_hole:"Trascina per disegnare un'apertura nel solaio (scale, soppalco)",hint_roof:"Trascina per disegnare una sezione del tetto \xB7 clicca per selezionare \xB7 trascina per spostare \xB7 angoli per ridimensionare",hint_energy:"Seleziona e trascina un campo fotovoltaico, anche su un'altra falda \xB7 aggiungi campi con + Campo fotovoltaico a destra",furn_parking:"Posto auto",furn_group_vehicles:"Parcheggio",parking_entity:"Sensore \xABauto presente\xBB",parking_vehicle:"Veicolo",parking_vehicle_none:"Nessuno",parking_no_pack:"Nessun pacchetto veicoli importato. I veicoli provengono dal pacchetto \xABVehicles\xBB (Arredamento \u2192 Importa pacchetti).",parking_scale:"Dimensione (%)",parking_type_entity:"Sensore tipo veicolo (facoltativo)",parking_types:"Stato \u2192 veicolo",parking_type_state:"Stato (es. furgone)",parking_add_type:"+ Associazione",parking_hint:"Senza sensore il veicolo \xE8 sempre presente. Con un sensore appare con gli stati \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensore tipo veicolo seleziona il modello associato allo stato, anche se contenuto nel testo; altrimenti viene mostrato il modello predefinito.",parking_too_tall:"Il veicolo ({car} m) \xE8 pi\xF9 alto della stanza ({room} m).",furn_lamp_ceiling:"Plafoniera",furn_lamp_downlight:"Faretto da incasso",furn_lamp_spot:"Faretto a superficie",furn_lamp_panel:"Pannello LED",furn_lamp_uplight:"Piantana a luce indiretta",furn_lamp_bollard:"Paletto luminoso",furn_lamp_garden:"Faretto da giardino",furn_radiator:"Radiatore",furn_robot_vacuum:"Robot aspirapolvere",furn_entity_vacuum:"Robot aspirapolvere",furn_robot_room:"Stanza attuale (sensore)",robot_hint:"Durante la pulizia il robot percorre traiettorie simulate nella stanza indicata dal sensore \xABstanza attuale\xBB, abbinata per nome, oppure nella stanza della base. Home Assistant normalmente non conosce la posizione esatta. Al ritorno il robot rientra alla base.",furn_lamp_pendant:"Lampada a sospensione",furn_lamp_floor:"Piantana",furn_lamp_table:"Lampada da tavolo",furn_lamp_wall:"Applique",furn_led_strip:"Striscia LED",furn_group_lights:"Luci",furn_entity_light:"Luce o interruttore",furn_entity_climate:"Riscaldamento (termostato)",lamp_hint:"Tocca la lampada in 3D per azionarla; tieni premuto per il menu rapido. Funzionano anche gli interruttori, ad esempio un rel\xE8. Le lampade da tavolo si appoggiano sul mobile sottostante.",lamp_hint_pendant:"Altezza = distanza sotto il soffitto. Tocca in 3D per azionare; tieni premuto per i dettagli.",theme:"Aspetto",theme_neon:"Neon",theme_blueprint:"Disegno tecnico",theme_day:"Giorno",furnish:"Arreda",split_3d:"3D affiancato",mount_height:"Altezza dal pavimento (m)",side_open:"Apri pannello laterale",side_close:"Chiudi",side_details:"Dettagli della selezione",side_pin:"Fissa",side_pinned:"Fissato",side_pin_hint:"Se fissato, il pannello rimane aperto; altrimenti si chiude accanto al 3D quando non \xE8 selezionato nulla",split_3d_hint:"Vista 3D in tempo reale accanto alla pianta: trascina e ruota mobili e dispositivi, con annullamento e salvataggio nella pianta",size_w:"Larghezza (m)",size_d:"Profondit\xE0 (m)",size_h:"Altezza (m)",furnish_hint:"Trascina mobili, lampade e dispositivi \xB7 i mobili si agganciano ai muri \xB7 seleziona per ruotare e regolare altezza e montaggio",done:"Fatto",heatmap:"Mappa dei valori",heat_off:"Normale",heat_short_temperature:"Temp.",heat_short_humidity:"Umidit\xE0",heat_short_co2:"CO\u2082",heat_temperature:"Temperatura",heat_humidity:"Umidit\xE0",heat_co2:"CO\u2082",heat_none_found:"Nessun sensore adatto nelle aree delle stanze.",markers:"Indicatori",markers_none:"Nessuno",markers_important:"Importanti",markers_all:"Tutti",furn_stool:"Sgabello",furn_coffee_table:"Tavolino",furn_tv_wall:"TV a parete",furn_sideboard:"Credenza",furn_table_round:"Tavolo rotondo",furn_bench:"Panca",furn_corner_bench:"Panca angolare",furn_bar_stool:"Sgabello da bar",furn_kitchen_wall:"Pensile",furn_kitchen_tall:"Colonna forno",furn_island:"Isola cucina",furn_dishwasher:"Lavastoviglie",furn_bunk_bed:"Letto a castello",furn_dresser:"Cassettiera",furn_washer:"Lavatrice",furn_dryer:"Asciugatrice",furn_office_chair:"Sedia da ufficio",furn_tall_cabinet:"Mobile alto",furn_coat_rack:"Appendiabiti",furn_group_living:"Soggiorno",furn_group_dining:"Sala da pranzo",furn_group_energy:"Energia e fotovoltaico",energy_devices:"Dispositivi",solar_pro_title:"Fotovoltaico ed Energia Pro",solar_pro_soon:"prossimamente",solar_pro_1:"Moduli che si animano al sole e si illuminano in base alla produzione",solar_pro_2:"Linee dei flussi energetici nella casa: provenienza e destinazione dell'energia",solar_pro_3:"Ologramma trasparente con potenza, curva giornaliera, produzione e autosufficienza",solar_pro_4:"Valori delle stringhe, batteria, wallbox e rete a colpo d'occhio",solar_pro_free:"Tutto ci\xF2 che configuri qui (campi, stringhe, dispositivi e sensori) rimane gratuito e viene utilizzato direttamente dall'extra Pro.",wallbox_charging:"in carica",wallbox_plugged:"collegata",furn_soc:"Stato di carica (%)",furn_wallbox_status:"Stato (in carica, collegata)",energy_only_note:"\u26A1 Energia: qui puoi spostare solo campi fotovoltaici e dispositivi energetici. Stanze e mobili sono bloccati.",roof_only_note:"\u{1F3E0} Tetto: qui puoi spostare solo sezioni del tetto e lucernari. Stanze e mobili sono bloccati.",energy_devices_hint:"Aggiungi inverter, batterie domestiche e wallbox sul piano selezionato. Puoi spostarli nella pianta. Il sensore di potenza mostra i watt; ogni stringa pu\xF2 essere associata a un inverter.",solar_fields:"Campi fotovoltaici",solar_hint:"Posiziona i moduli sul tetto: seguono la pendenza della falda; sui tetti piani sono montati su supporti. Trascina un campo per spostarlo.",solar_no_roof:"Serve un tetto: piano o a due falde nelle Impostazioni, oppure sezioni nello strumento Tetto.",solar_face_gone:"falda mancante",solar_summary:"{n} moduli \xB7 {kwp} kWp",solar_add:"Campo fotovoltaico",solar_field:"Campo fotovoltaico",solar_face:"Falda del tetto",solar_rows:"Righe",solar_cols:"Moduli per riga",solar_portrait:"Verticale",solar_landscape:"Orizzontale",solar_u:"Distanza dal bordo (m)",solar_v:"Distanza dalla gronda (m)",solar_tilt:"Inclinazione supporti (\xB0)",solar_flip:"Inclina nell'altro verso",solar_partial:"sulla falda entrano solo {n} moduli su {total}",solar_form_hint:"I moduli oltre il bordo della falda vengono esclusi. \xABRiempi falda\xBB ne inserisce il massimo possibile. Il calcolo dei kWp considera 400 W per modulo.",solar_fit:"Riempi falda",roof_windows:"Lucernari",roof_window:"Lucernario",roof_windows_hint:"I lucernari seguono la falda, con tapparella e contatti come le finestre. Trascinali nella pianta, anche su un'altra falda.",roof_window_tilt:"Contatto ribalta",roof_window_hint:"L'anta aperta ruota verso l'esterno con cerniere in alto; in ribalta si apre leggermente. La tapparella scende dall'alto sul vetro.",solar_ground:"Indipendente (giardino, tetto garage \u2026)",solar_add_ground:"Indipendente",solar_base:"Quota superficie (m, 0 = suolo)",solar_add_wall:"Su un muro",solar_wall:"Muro",solar_v_wall:"Altezza dal pavimento (m)",solar_tilt_wall:"Inclinazione dal muro (\xB0, 90 = pensilina)",solar_flip_wall:"Distanzia la parte inferiore anzich\xE9 quella superiore",solar_rotation:"Rotazione (\xB0)",solar_name:"Nome",solar_name_hint:"es. stringa 1 sud",solar_module_w:"Larghezza modulo (m)",solar_module_h:"Altezza modulo (m)",solar_string:"Stringa",solar_strings:"Stringhe",solar_string_none:"Nessuna stringa",solar_string_new:"Nuova stringa",solar_string_n:"Stringa {n}",solar_string_name:"Nome stringa",solar_string_entity:"Potenza FV della stringa",solar_string_inverter:"Inverter",solar_string_inverter_none:"Nessun inverter selezionato",solar_string_inverter_missing:"Nessun inverter nella pianta: aggiungilo sotto, in Dispositivi",solar_string_hint:"I campi della stessa stringa sono associati anche su tetti diversi. Sensore e inverter si riferiscono all'intera stringa.",solar_string_sum:"{fields} campi \xB7 {n} moduli \xB7 {kwp} kWp",solar_face_size:"Falda {w} \xD7 {h} m (lungo la gronda \xD7 lungo la pendenza)",solar_cols_hint:"Un numero per righe uguali oppure un elenco, ad esempio \xAB4, 4, 3\xBB, partendo dalla gronda.",solar_align_left:"Sinistra",solar_align_center:"Centro",solar_align_right:"Destra",solar_look_black:"Nero integrale",solar_look_blue:"Blu",solar_pick:"Attiva/disattiva singoli moduli",solar_pick_all:"Riattiva tutti",solar_pick_hint:"Clicca un modulo nella pianta per rimuoverlo o reinserirlo. Quelli rimossi sono tratteggiati.",solar_entity:"Potenza FV di questo campo (es. della sua stringa)",solar_main:"Tetto principale",solar_section:"Sezione {n}",solar_flat:"tetto piano",compass_n:"nord",compass_ne:"nord-est",compass_e:"est",compass_se:"sud-est",compass_s:"sud",compass_sw:"sud-ovest",compass_w:"ovest",compass_nw:"nord-ovest",furn_meter:"Contatore elettrico",furn_grid_point:"Allacciamento alla rete",grid_point_hint:"Qui finisce il cavo della rete: al punto di consegna del gestore, es. in fondo all'ingresso auto. Spostabile nel piano; senza allacciamento il cavo finisce al bordo delle aree esterne.",furn_model:"Modello",inverter_std:"Standard (apparecchio a parete con display)",inverter_slim:"Stretto e alto (striscia luminosa)",inverter_hybrid:"Ibrido (quadrante rotondo, ventole)",battery_std:"Torre (moduli impilati)",battery_wall:"Batteria a parete (piatta, appesa)",battery_cube:"Compatta (batteria da balcone)",furn_inverter:"Inverter fotovoltaico",furn_home_battery:"Batteria domestica",furn_wallbox:"Wallbox",furn_group_kitchen:"Cucina",furn_group_sleeping:"Camera da letto",furn_group_bath:"Bagno e lavanderia",furn_group_work:"Lavoro e altro",furn_entity:"Dispositivo (interruttore, presa \u2026)",furn_entity_tv:"TV (lettore multimediale o presa smart)",fix:"Blocca",unfix:"Sblocca",fix_hint:"Bloccato: evita spostamenti accidentali (tasto L, clic destro o pressione prolungata)",fixed_drag_hint:"\u{1F512} Bloccato: sbloccalo prima di spostarlo (lucchetto nel pannello, clic destro o tasto L)",fixed_delete_confirm:"Questo elemento \xE8 bloccato. Eliminarlo comunque?",lock_plan:"\u{1F512} Pianta",lock_plan_hint:"Blocca stanze, muri, porte, finestre e aree esterne per evitare spostamenti accidentali. Mobili e dispositivi rimangono liberi.",start_view:"Vista iniziale",start_view_hint:"La vista 3D, la card e il chiosco aprono la casa con questa vista, es. dal lato giardino. Ruota e zooma la casa nella vista 3D a destra finch\xE9 va bene, poi memorizzala.",start_view_set:"Memorizza la vista 3D attuale come iniziale",start_view_reset:"Predefinita",start_view_saved:"\xC8 salvata una vista iniziale personalizzata.",ctx_rotate:"Ruota di 90\xB0",devices_placed_in:"in {room}",devices_narrow:"Altri {n}: restringi la ricerca",climate:"Clima della stanza",climate_temperature:"Temperatura",climate_humidity:"Umidit\xE0",climate_co2:"CO\u2082",climate_hint:"Sensori usati nella mappa dei valori e nel pannello stanza. \xABAutomatico\xBB usa quelli dell'area e quelli posizionati nella stanza, escludendo le temperature dei dispositivi (stampante 3D, pompa di calore, mandata \u2026).",plan_locked:"Pianta bloccata",plan_lock:"Blocca pianta",plan_unlock:"Sblocca pianta",opening_mark:"Evidenzia in 3D",opening_mark_open:"Quando aperto",opening_mark_closed:"Quando chiuso (es. WC)",opening_mark_hint:"La porta o finestra evidenziata emette una luce calda. \xABQuando chiuso\xBB richiede un contatto; senza sensore non viene evidenziata.",marker_show:"Indicatore in 3D",marker_show_hint:"Automatico segue la scelta Nessuno / Importanti / Tutti. Mostra sempre e Nascondi prevalgono, tranne quando \xE8 selezionato Nessuno.",marker_show_auto:"Automatico",marker_show_always:"Mostra sempre",marker_show_no_power:"Senza watt",marker_show_never:"Nascondi",furn_power:"Sensore potenza (W)",furn_links_hint:"Con un sensore di potenza l'elemento mostra i watt e un collegamento energetico.",screen_pictures:"Immagini in base allo stato",screen_pictures_hint:"Confronta lo stato o un attributo dell'entit\xE0, ad esempio app_name della TV. Un valore corrisponde se \xE8 uguale o contenuto nel testo; \xAB*\xBB significa sempre. Vale la prima regola corrispondente. Le immagini vengono ridotte a 512 px. Puoi usare anche un URL o una telecamera, aggiornata ogni 5 secondi quando visibile. Senza corrispondenze viene mostrato il lettore multimediale.",picture_state:"\xE8 o contiene \u2026 (es. netflix)",picture_state_of:"Stato",picture_attribute:"Confronta stato o attributo",picture_pick:"Scegli immagine \u2026",picture_change:"Cambia immagine \u2026",picture_url:"oppure URL immagine",picture_add_value:"+ Valore",picture_reuse:"Usa un'immagine salvata",picture_camera:"oppure una telecamera (immagine dal vivo) \u2026",picture_camera_none:"Nessuna telecamera",screen_bg:"Sfondo dietro l'immagine",screen_bg_black:"Scuro",screen_bg_white:"Bianco",picture_add_entity:"+ Altra entit\xE0",picture_current:"ora: {value}",picture_matches:"\u2713 corrisponde: questa immagine \xE8 visibile",furn_links_hint_tv:"Lo schermo si illumina quando la TV \xE8 accesa, con il colore dell'app (Netflix, YouTube \u2026). L'etichetta mostra app o titolo.",stairs_hint:"La scala sale verso il retro, allontanandosi dal bordo anteriore segnato, e apre il solaio del piano superiore.",floor_lights:"Luci accese: {n}",floor_open:"{n} aperti",floor_persons:"{n} persone",energy_consumption:"Consumo",energy_grid_import:"Prelievo dalla rete",energy_grid_export:"Immissione in rete",energy_solar:"Fotovoltaico",energy_battery:"Batteria",energy_tariff:"Tariffa",energy:"Energia",energy_meter:"Contatore",energy_grid:"Rete (W, + = prelievo)",energy_solar_sensor:"Produzione fotovoltaica (W)",energy_battery_sensor:"Potenza batteria (W, + = scarica)",energy_battery_soc:"Carica batteria (%)",energy_tariff_sensor:"Tariffa (es. \u20AC/kWh)",energy_invert:"Inverti segno",energy_hint:"Le utenze sono dispositivi posizionati con un sensore di potenza in W, proprio o dello stesso dispositivo.",energy_balance:"Bilancio energetico",energy_balance_hint:"Rete, solare e batteria vengono dai dispositivi nel piano: contatore, inverter e batteria domestica. Qui puoi scegliere altri sensori, invertire i segni e impostare il consumo della casa.",energy_consumption_sensor:"Consumo della casa (W, altrimenti dal bilancio)",energy_import_prefs:"Prendi dal dashboard Energia",energy_import_done:"{n} sensori acquisiti: controlla i segni.",energy_import_none:"Nessun sensore di potenza (W) adatto trovato nel dashboard Energia: scegli a mano.",energy_import_failed:"Il dashboard Energia di Home Assistant non \xE8 configurato.",tool_meter:"Contatore",hint_meter:"Clicca sulla posizione del contatore",presence:"Presenza",presence_hint:"Sensore stanza per persona (es. ESPresense, Bermuda): lo stato indica il nome della stanza o dell'area.",presence_sensor:"Sensore stanza",no_persons:"Non ci sono persone in Home Assistant."};function E(o,t,e={}){let n=ds[t]??t;for(let[i,r]of Object.entries(e))n=n.replaceAll(`{${i}}`,String(r));return n}function Y(o,t,e=2){return t.toLocaleString(o?.language??"it-IT",{maximumFractionDigits:e})}function Pt(o){return!0}function xe(o){return Promise.resolve()}var ps=["camera_cockpit","weather","screens","energy_pro"],hs=["fridge_smart"];var Qo=o=>(o??navigator.language).toLowerCase().startsWith("de");function Jo(o){return Qo(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var ms={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Zo(o,t){let e=Qo(o),n=e?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=t?ms[t]:void 0,r=i?e?i.de:i.en:"",[s,a]=r.split("#");return`${n}${s}?lang=${e?"de":"en"}${a?`#${a}`:""}`}function fs(o=Yt()){let t=new Set;for(let e of o)for(let n of e.features??[])(ps.includes(n)||hs.includes(n))&&t.add(n);return t}function U(o,t){return fs(t).has(o)}var ti={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function ke(o){return ti[o]}function Zt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ti[o]}"/></svg>`}var ht=(o,t)=>E(o,t);function j(o,t){if(!t||D(t))return ht(o,"state_unavailable");let e=t.attributes;switch(I(t.entity_id)){case"light":return t.state!=="on"?ht(o,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:ht(o,"state_on");case"switch":case"fan":return ht(o,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:$e(o,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${Y(o,e.current_temperature,1)} ${o?ct(o):"\xB0C"}`:null;return t.state==="off"?n?`${n} \xB7 ${ht(o,"state_off")}`:ht(o,"state_off"):n??$e(o,t.state)}case"media":{let n=t.state==="playing"||t.state==="paused"||t.state==="on"||t.state==="idle",i=[e.app_name,e.media_title,e.source].find(r=>typeof r=="string"&&r);return n&&i?i:$e(o,t.state)}case"lock":case"camera":return $e(o,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?ht(o,t.state==="on"?"state_open":"state_closed"):ht(o,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"",r=o?.entities?.[t.entity_id]?.display_precision??1;return Number.isFinite(n)?`${Y(o,n,r)}${i?` ${i}`:""}`:t.state}default:return""}}function $e(o,t){let e=`state_${t}`,n=E(o,e);return n===e?t:n}function ei(o,t){let e=[];for(let n of t.floors)for(let i of n.placements){let r=I(i.entity_id),s=o.states[i.entity_id];if(!r||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&C([i.x,i.z],c.points))??null,l=a?.area_id?o.areas?.[a.area_id]?.name:void 0;e.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??Rt(r,n.height,i.mount??null),lamp:r==="light"?i.mount??"ceiling":null,model:r==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:r==="camera"?gs(o,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:Zt(r),name:L(o,i.entity_id,l),text:j(o,s),active:$t(s),unavailable:D(s),glow:r==="light"?Jt(s):null,show:i.marker??void 0,fixed:!!i.locked})}return e}function gs(o,t){return te(o,t).some(e=>o.states[e]?.state==="on")}function te(o,t){let e=o.entities?.[t]?.device_id;return e?Object.values(o.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function ni(o){return o.floors.flatMap(t=>t.placements.map(e=>e.entity_id))}function mt(o,t){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function oi(o,t){let e=t.slice(0,t.indexOf("."));return o.callService(e,"toggle",{entity_id:t})}var rt=Z`
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
`,ft=Z`
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
`;var _s=4,bs=3e3,vs=8,ys=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Ct=o=>_`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${ke(o)} />
  </svg>`,Se={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},bn=o=>_`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,vn=class extends G{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},bs)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(t,e){return E(this.hass,t,e)}call(t,e,n){this.hass.callService(t,e,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return L(this.hass,t,this.areaName)}nameButton(t){return _`<button class="nc3d-rp-name" title=${this.t("details")} @click=${()=>mt(this,t)}>${this.name(t)}</button>`}askFor(t){return!this.confirmEntities?.has(t)||confirm(this.t("confirm_switch",{name:this.name(t)}))}toggle(t,e,n){let i=()=>{this.confirmEntities?.has(t.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(t.entity_id)}))||n()};return _`<button
      class="nc3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${D(t)}
      @click=${i}
    ></button>`}render(){let t=this.room;if(!t||!this.hass)return v;let e=q(this.hass,t.area_id),n=this.memo,{shown:i,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===t?n:this.memo={entities:this.hass.entities,floor:this.floor,room:t,...this.floor?Yo(this.hass,this.floor,t):{shown:e,more:[]}},s=pn(this.hass,r).map(w=>w.primary),a=s.length,l=this._showAll?[...i,...s]:i,c=w=>l.filter(S=>w.includes(I(S))).map(S=>this.hass.states[S]),u=c(["light"]),d=c(["cover"]),p=c(["climate"]),f=c(["media"]),g=c(["switch","fan","lock"]),m=c(["sensor","binary"]),b=c(["camera"]);this.hasCameras=b.length>0;let $=c(["scene","script"]),h=this.facts(p),y=u.filter(w=>w.state==="on");return _`<section class="nc3d-rp" aria-label=${t.name}>
      <header class="nc3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${h.length?_`<p class="nc3d-rp-facts">${h.join(" \xB7 ")}</p>`:v}
        </div>
        <button class="nc3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nc3d-rp-body">
        ${t.area_id?l.length?v:_`<p class="nc3d-rp-note">${this.t("panel_empty")}</p>`:_`<p class="nc3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${u.length?this.section("panel_lights",u.map(w=>this.lightRow(w)),y.length?_`<button class="nc3d-btn nc3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(w=>w.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:v):v}
        ${d.length?this.section("panel_covers",d.map(w=>this.coverRow(w))):v}
        ${p.length?this.section("panel_climate",p.map(w=>this.climateRow(w))):v}
        ${f.length?this.section("panel_media",f.map(w=>this.mediaRow(w))):v}
        ${g.length?this.section("panel_switches",g.map(w=>this.switchRow(w))):v}
        ${b.length?this.section("panel_cameras",b.map(w=>this.cameraTile(w))):v}
        ${m.length?this.section("panel_sensors",m.map(w=>this.sensorRow(w))):v}
        ${$.length?this.section("panel_scenes",[_`<div class="nc3d-rp-scenes">
                  ${$.map(w=>_`<button
                      class="nc3d-btn"
                      ?disabled=${D(w)}
                      @click=${()=>this.call(I(w.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:w.entity_id})}
                    >
                      ${this.name(w.entity_id)}
                    </button>`)}
                </div>`]):v}
        ${a?_`<button class="nc3d-btn nc3d-rp-small nc3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:v}
      </div>
    </section>`}facts(t){let e=[],n=this.room,i=(l,c)=>{let u=ye(this.hass,this.floor,n,l);if(u===null)return null;if(l==="temperature")return`${Y(this.hass,Qt(this.hass,u),1)} ${ct(this.hass)}`;let d=cn(this.hass,this.floor,n,l)[0],p=this.hass.states[d]?.attributes.unit_of_measurement??c;return`${Y(this.hass,u,1)} ${p}`},r=t.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?e.push(s):r&&n.climate?.temperature!=="none"&&e.push(`${Y(this.hass,r.attributes.current_temperature,1)} ${ct(this.hass)}`);let a=i("humidity","%");return a&&e.push(a),e}section(t,e,n=v){return _`<div class="nc3d-rp-sec">
      <div class="nc3d-rp-sec-head"><h3>${this.t(t)}</h3>${n}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,n=t.state==="on",i=e.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,c=e.min_color_temp_kelvin??2200,u=e.max_color_temp_kelvin??6500,d=t.entity_id;return _`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${n?"nc3d-rp-on":""}">${Ct("light")}</span>
      ${this.nameButton(d)}
      <span class="nc3d-rp-state">${j(this.hass,t)}</span>
      ${this.toggle(t,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&r?_`<label class="nc3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(p.target.value)})}
          /></label>`:v}
      ${n&&s?_`<label class="nc3d-rp-slider nc3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${u}
              step="50"
              .value=${String(e.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:v}
      ${n&&a?_`<div class="nc3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${ys.map(p=>_`<button
                class="nc3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:p})}
              ></button>`)}
          </div>`:v}
    </div>`}coverRow(t){let e=t.attributes,n=e.supported_features??0,i=t.entity_id,r=D(t);return _`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon">${Ct("cover")}</span>
      ${this.nameButton(i)}
      <span class="nc3d-rp-state">${j(this.hass,t)}</span>
      <div class="nc3d-rp-buttons">
        <button class="nc3d-btn nc3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&vs?_`<button class="nc3d-btn nc3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:v}
        <button class="nc3d-btn nc3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&_s&&typeof e.current_position=="number"?_`<label class="nc3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(e.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:v}
    </div>`}climateRow(t){let e=t.attributes,n=t.entity_id,i=typeof e.temperature=="number"?e.temperature:null,r=e.target_temp_step??.5,s=e.min_temp??5,a=e.max_temp??30,l=e.hvac_modes??[],c=u=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(u/r)*r))});return _`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${e.hvac_action==="heating"?"nc3d-rp-on":""}">${Ct("climate")}</span>
      ${this.nameButton(n)}
      <span class="nc3d-rp-state">${j(this.hass,t)}</span>
      ${i!==null?_`<div class="nc3d-rp-stepper nc3d-rp-wide">
            <button class="nc3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${Y(this.hass,i,1)} ${ct(this.hass)}</span>
            <button class="nc3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+r)}>+</button>
          </div>`:v}
      ${l.length>1?_`<div class="nc3d-rp-chips">
            ${l.map(u=>_`<button
                class="nc3d-chip"
                aria-pressed=${t.state===u}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:u})}
              >
                ${this.stateLabel(u)}
              </button>`)}
          </div>`:v}
    </div>`}stateLabel(t){let e=`state_${t}`,n=this.t(e);return n===e?t:n}mediaRow(t){let e=t.attributes,n=t.entity_id,i=D(t)||t.state==="off",r=[e.media_title,e.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return _`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${t.state==="playing"?"nc3d-rp-on":""}">${Ct("media")}</span>
      ${this.nameButton(n)}
      <span class="nc3d-rp-state">${this.stateLabel(t.state)}</span>
      ${r?_`<p class="nc3d-rp-media nc3d-rp-wide">${r}</p>`:v}
      <div class="nc3d-rp-buttons nc3d-rp-wide">
        <button class="nc3d-btn nc3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${bn(Se.previous)}
        </button>
        <button class="nc3d-btn nc3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${D(t)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${bn(t.state==="playing"?Se.pause:Se.play)}
        </button>
        <button class="nc3d-btn nc3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${bn(Se.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?_`<label class="nc3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:v}
    </div>`}switchRow(t){let e=t.entity_id,n=I(e),i=e.slice(0,e.indexOf(".")),r=n==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:e}):this.call(i,"toggle",{entity_id:e});return _`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${r?"nc3d-rp-on":""}">${Ct(n)}</span>
      ${this.nameButton(e)}
      <span class="nc3d-rp-state">${j(this.hass,t)}</span>
      ${this.toggle(t,r,s)}
    </div>`}cameraTile(t){let e=t.attributes.entity_picture,n=e&&!D(t)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}nc3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===t.entity_id);return _`<div class="nc3d-rp-camera-wrap">
      <button class="nc3d-rp-camera" title=${this.t("camera_live")} @click=${()=>mt(this,t.entity_id)}>
        ${n?_`<img src=${n} alt=${this.name(t.entity_id)} loading="lazy" />`:_`<span class="nc3d-rp-note">${j(this.hass,t)}</span>`}
        <span class="nc3d-rp-camera-name">${this.name(t.entity_id)}</span>
      </button>
      ${i?_`<button
            class="nc3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:t.entity_id},bubbles:!0,composed:!0}))}
          >
            ${U("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:v}
    </div>`}sensorRow(t){let e=I(t.entity_id),n=e==="binary"&&t.state==="on";return _`<div class="nc3d-rp-row">
      <span class="nc3d-rp-icon ${n?"nc3d-rp-on":""}">${Ct(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="nc3d-rp-state">${j(this.hass,t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[rt,ft,Z`
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
    `]};customElements.get("nc3d-room-panel")||customElements.define("nc3d-room-panel",vn);var ws={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function ee(o,t){return t&&o.states[t]?t:Object.keys(o.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function ii(o,t){let e=t?o.states[t]:void 0;if(!e||e.state==="unavailable"||e.state==="unknown")return null;let n=ws[e.state];if(!n)return null;let i=e.attributes,r=n.cloud??0;typeof i.cloud_coverage=="number"&&(r=Math.min(1,Math.max(0,i.cloud_coverage/100)));let s=n.wind??0;if(typeof i.wind_speed=="number"){let a=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:e.entity_id,condition:e.state,rain:n.rain??0,snow:n.snow??0,fog:n.fog??0,cloud:r,wind:s,lightning:!!n.lightning}}function ri(o,t){let e=new Set(t??Eo);return{...o,rain:e.has("rain")?o.rain:0,snow:e.has("snow")?o.snow:0,fog:e.has("fog")?o.fog:0,cloud:e.has("clouds")?o.cloud:0,lightning:e.has("lightning")&&o.lightning,sky:e.has("sky")}}var xs=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),si={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function ai(o,t,e){let n=[];for(let s of t.floors)for(let a of s.rooms){let l=q(o,a.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!si[String(o.states[c]?.attributes.device_class)]);l.length&&n.push({floorId:s.id,roomId:a.id,sensors:l})}let i=Object.keys(o.states),r=t.settings.rain_warning===!1?null:ee(o,e??t.settings.weather_entity);return{rooms:n,alarms:i.filter(s=>s.startsWith("alarm_control_panel.")),weather:r}}function li(o){return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[]]}function ci(o,t,e,n){let i=[];for(let s of e.rooms)for(let a of s.sensors){let l=o.states[a];l?.state==="on"&&i.push({kind:si[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!e.weather&&xs.has(o.states[e.weather]?.state??""))for(let s of t.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let c=pt(o,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||i.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of e.alarms){let a=o.states[s]?.state;a==="triggered"?i.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&i.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return i}function ui(o){switch(o){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function yn(o,t,e){let n=e.roomId?t.floors.flatMap(s=>s.rooms).find(s=>s.id===e.roomId):null,i=o?L(o,e.entity):e.entity,r=E(o,`alert_${e.kind}`,{name:i});return n?`${n.name} \xB7 ${r}`:r}var st=(o,t)=>[o[0]-t[0],o[1]-t[1]],ne=(o,t)=>[o[0]+t[0],o[1]+t[1]],St=(o,t)=>[o[0]*t,o[1]*t],wn=(o,t)=>o[0]*t[0]+o[1]*t[1],oe=(o,t)=>o[0]*t[1]-o[1]*t[0],Me=o=>Math.hypot(o[0],o[1]),ie=o=>{let t=Me(o)||1;return[o[0]/t,o[1]/t]},di=o=>[-o[1],o[0]],pi=o=>[o[1],-o[0]];function re(o,t,e=[]){let n=t.eps??.005,i=[],r=e.filter(h=>Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1])>.05),s=[],a=h=>{for(let y=0;y<s.length;y++)if(Math.abs(s[y][0]-h[0])<=n&&Math.abs(s[y][1]-h[1])<=n)return y;return s.push([h[0],h[1]]),s.length-1},l=[];for(let h of o){let y=h.points;if(y.length<3||Math.abs(dt(y))<1e-6)continue;let w=dt(y)>0,S=y.map(a);for(let M=0;M<y.length;M++){let F=S[M],R=S[(M+1)%y.length];F!==R&&l.push(w?{u:F,v:R,room:h.id,edge:M,forward:!0}:{u:R,v:F,room:h.id,edge:M,forward:!1})}}let c=r.map(h=>[a(h.a),a(h.b)]),u=[];for(let h of l){let y=s[h.u],w=s[h.v],S=st(w,y),M=Me(S),F=St(S,1/M),R=[];for(let k=0;k<s.length;k++){if(k===h.u||k===h.v)continue;let A=st(s[k],y),P=wn(A,F);P<=n||P>=M-n||Math.abs(oe(F,A))<=n&&R.push({t:P,id:k})}R.sort((k,A)=>k.t-A.t);let O=[{t:0,id:h.u},...R,{t:M,id:h.v}];for(let k=0;k+1<O.length;k++){let A=O[k],P=O[k+1],K=h.forward?A.t:M-P.t,W=h.forward?P.t:M-A.t;u.push({u:A.id,v:P.id,room:h.room,edge:h.edge,t0:K,t1:W})}}let d=new Map;for(let h of u){let y=h.u<h.v?`${h.u}-${h.v}`:`${h.v}-${h.u}`,w=d.get(y);w||d.set(y,w=[]),w.push(h)}let p=h=>({room_id:h.room,edge:h.edge,t0:h.t0,t1:h.t1}),f=h=>{let y=h.map(w=>o.find(S=>S.id===w.room)?.wall_heights?.[w.edge]).filter(w=>typeof w=="number"&&w>0);return y.length?Math.min(...y):void 0},g=h=>h.some(y=>o.find(w=>w.id===y.room)?.wall_heights?.[y.edge]===0),m=[];for(let h of d.values()){let y=h[0],w=h.find(S=>S!==y&&S.u===y.v&&S.v===y.u&&S.room!==y.room);for(let S of h)S!==y&&S!==w&&S.room!==y.room&&i.push(`overlap:${y.room}:${S.room}`);g(w?[y,w]:[y])||(w?m.push({a:y.u,b:y.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:y.room,roomRight:w.room,sources:[p(y),p(w)],height:f([y,w])}):m.push({a:y.u,b:y.v,left:0,right:t.exterior,exterior:!0,roomLeft:y.room,roomRight:null,sources:[p(y)],height:f([y])}))}r.forEach((h,y)=>{let[w,S]=c[y];if(w===S)return;let M=[(h.a[0]+h.b[0])/2,(h.a[1]+h.b[1])/2],F=o.find(k=>k.points.length>=3&&C(M,k.points))?.id??null,R=(h.thickness??t.interior)/2,O=typeof h.height=="number"&&h.height>0?h.height:void 0;m.push({free:h.id,a:w,b:S,left:R,right:R,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:O})}),m=$s(m,s);let b=Ms(m,s);return{walls:m.map((h,y)=>{let w=s[h.a],S=s[h.b],M=b.get(`${y}:a`),F=b.get(`${y}:b`),R=zs([M.right,F.left,S,F.right,M.left,w],1e-6);return{id:ks(w,S),a:[w[0],w[1]],b:[S[0],S[1]],left:h.left,right:h.right,exterior:h.exterior,roomLeft:h.roomLeft,roomRight:h.roomRight,sources:h.sources,footprint:R,...h.free?{free:h.free}:{},...h.height!==void 0?{height:h.height}:{}}}),warnings:[...new Set(i)]}}function ks(o,t){let e=r=>Math.round(r*100),[n,i]=o[0]<t[0]||o[0]===t[0]&&o[1]<=t[1]?[o,t]:[t,o];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function hi(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function $s(o,t){let e=o.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((r,s)=>{for(let a of[r.a,r.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(s)}});for(let[r,s]of i){if(s.length!==2)continue;let a=e[s[0]],l=e[s[1]];if(a.b!==r&&(a=hi(a)),l.a!==r&&(l=hi(l)),a.a===l.b)continue;let c=ie(st(t[a.b],t[a.a])),u=ie(st(t[l.b],t[l.a]));if(Math.abs(oe(c,u))>1e-6||wn(c,u)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let d={...a,b:l.b,sources:Ss(a.sources,l.sources)},p=e.filter((f,g)=>g!==s[0]&&g!==s[1]);p.push(d),e.length=0,e.push(...p),n=!0;break}}return e}function Ss(o,t){let e=o.map(n=>({...n}));for(let n of t){let i=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Ms(o,t){let e=new Map;o.forEach((i,r)=>{let s=ie(st(t[i.b],t[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:St(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[i,r]of e){let s=t[i];r.sort((c,u)=>c.angle-u.angle);let a=c=>({left:ne(s,St(di(c.d),c.left)),right:ne(s,St(pi(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let u=r[c],d=r[(c+1)%r.length],p=ne(s,St(di(u.d),u.left)),f=ne(s,St(pi(d.d),d.right)),g=oe(u.d,d.d);if(Math.abs(g)<1e-4)continue;let m=oe(st(f,p),d.d)/g,b=ne(p,St(u.d,m));Me(st(b,s))>l||(n.get(u.key).left=b,n.get(d.key).right=b)}}return n}function zs(o,t){let e=o.filter((i,r)=>Me(st(i,o[(r+1)%o.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let r=e[(i+e.length-1)%e.length],s=e[i],a=e[(i+1)%e.length],l=st(s,r),c=st(a,s);if(Math.abs(oe(ie(l),ie(c)))<1e-7&&wn(l,c)>0){e=e.filter((u,d)=>d!==i),n=!0;break}}}return e}var mi=Math.PI/180;function ze(o){let t=Math.min(o.x0,o.x1),e=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:t,u1:e,w:i-n,at:(r,s)=>[r,o.flip?i-s:n+s]}:{u0:n,u1:i,w:e-t,at:(r,s)=>[o.flip?e-s:t+s,r]}}function fi(o){let t=ze(o).w,e=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*mi),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*mi);if(o.shape==="flat")return{vr:t/2,rh:e,y:()=>e};if(o.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};let s=i+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(i+r))):t/2,a=e+s*i;return{vr:s,rh:a,y:l=>l<=s?e+l*i:n+(t-l)*r}}function gi(o,t,e){let n=ze(t),i=o.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),r=c=>c.some(u=>i.some(d=>C(u,d.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-s)))?0:e,b:r(a.map(c=>n.at(c,n.w+s)))?0:e,u0:r(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:r(l.map(c=>n.at(n.u1+s,c)))?0:e}}var xn=Math.PI/180,Es=1.13,Is=1.72,kn=.025;var _i=.25;function se(o,t){let e=[];for(let n of o.floors){if(t&&n.id!==t)continue;let{walls:i}=re(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior||r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,u=-s/l,d=[r.a[0]+c*r.right,n.elevation,r.a[1]+u*r.right],p=Math.min(n.height,r.height??n.height);e.push({key:`wall:${n.id}:${r.id}`,section:null,side:"top",flat:!1,o:d,eu:[s/l,0,a/l],es:[0,1,0],n:[c,0,u],lu:l,ls:p,pitch:90,span:()=>[0,l],facing:[c,u],wall:{floorId:n.id}})}}return e}var bi="ground";function As(o){return[...o.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??o.floors[0]??null}function Rs(o,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],r=As(o),s=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=r?r.elevation+(t.base!=null?t.base:_e(r,s,a)):t.base??0;return{key:bi,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Lt(o,t,e=ae(o)){return t.face===bi?Rs(o,t):t.face.startsWith("wall:")?se(o,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Sn(o){return o.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function ae(o){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(h=>Ts(h,gi(o,h,h.overhang??t.overhang)));let e=Sn(o);if(!e)return[];let n=e.rooms.flatMap(h=>h.points.map(y=>y[0])),i=e.rooms.flatMap(h=>h.points.map(y=>y[1])),r=o.settings.wall_exterior+t.overhang,s=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,u=e.elevation+e.height;if(t.type==="flat")return[vi("main",null,s,l,a,c,u+_i)];let d=a-s>=c-l,p=t.ridge==="short"?!d:d,f=(p?c-l:a-s)/2,g=f*Math.tan(t.pitch*xn),m=(h,y,w)=>p?[h,u+w,(l+c)/2+y]:[(s+a)/2+y,u+w,h],[b,$]=p?[s,a]:[l,c];return[-1,1].map(h=>Ae(`main:${h<0?"a":"b"}`,null,h<0?"a":"b",m(b,h*f,0),m($,h*f,0),m(b,0,g),t.pitch,()=>[0,$-b]))}function Ts(o,t){let e=ze(o),n=fi(o),i=(m,b,$)=>{let[h,y]=e.at(m,b);return[h,$,y]},r=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(o.shape==="flat"){let m=e.at(a,-r),b=e.at(l,e.w+s);return[vi(o.id,o.id,Math.min(m[0],b[0]),Math.min(m[1],b[1]),Math.max(m[0],b[0]),Math.max(m[1],b[1]),o.eave_a+_i)]}if(o.shape==="pent")return[Ae(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,e.w+s,n.y(e.w+s)),o.pitch_a,()=>[0,c])];let u=o.shape==="hip",d=u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,p=u?e.u0+d-a:0,f=u?l-(e.u1-d):0,g=[];if(n.vr>.3){let m=Math.hypot(n.vr+r,n.rh-n.y(-r));g.push(Ae(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,b=>[p*(b/m),c-f*(b/m)]))}if(e.w-n.vr>.3){let m=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));g.push(Ae(`${o.id}:b`,o.id,"b",i(l,e.w+s,n.y(e.w+s)),i(a,e.w+s,n.y(e.w+s)),i(l,n.vr,n.rh),o.pitch_b,b=>[f*(b/m),c-p*(b/m)]))}return g}function Ae(o,t,e,n,i,r,s,a){let l=Ie(Ee(i,n)),c=Ie(Ee(r,n)),u=Ie(Cs(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let d=Ie([-c[0],0,-c[2]]);return{key:o,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:$n(Ee(i,n)),ls:$n(Ee(r,n)),pitch:s,span:a,facing:[d[0],d[2]]}}function vi(o,t,e,n,i,r,s){let a=i-e>=r-n,l=a?i-e:r-n,c=a?r-n:i-e;return{key:`${o}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function yi(o){let t=o.module_w||Es,e=o.module_h||Is;return o.portrait===!1?[e,t]:[t,e]}function Fs(o){return o.layout?.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function wi(o,t){return o.flat?Math.min(45,Math.max(0,t.tilt??15))*xn:o.wall?Math.min(90,Math.max(0,t.tilt??0))*xn:0}function Ot(o,t){let[e,n]=yi(t),i=Fs(t),r=Math.max(1,...i),a=(i.length-1)*Ps(o,t)+n*Math.cos(wi(o,t));return[r*e+(r-1)*kn,a]}function Ps(o,t){let[,e]=yi(t),n=wi(o,t);return o.wall?e*Math.cos(n)+kn:o.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+kn}function Ee(o,t){return[o[0]-t[0],o[1]-t[1],o[2]-t[2]]}function $n(o){return Math.hypot(o[0],o[1],o[2])}function Ie(o){let t=$n(o)||1;return[o[0]/t,o[1]/t,o[2]/t]}function Cs(o,t){return[o[1]*t[2]-o[2]*t[1],o[2]*t[0]-o[0]*t[2],o[0]*t[1]-o[1]*t[0]]}function xi(o,t){let[e,n]=Ot(o,t);return[o.o[0]+o.eu[0]*(t.u+e/2)+o.es[0]*(t.v+n/2),o.o[2]+o.eu[2]*(t.u+e/2)+o.es[2]*(t.v+n/2)]}var nt=.03,ki=o=>o&&o!=="none"?o:null;function Te(o,t=e=>ki(e.power)){let e={grid:null,solar:[],battery:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let r=t(i);if(i.type==="meter")e.grid??=r;else if(i.type==="inverter"&&r&&!e.solar.includes(r))e.solar.push(r);else if(i.type==="home_battery"){r&&!e.battery.includes(r)&&e.battery.push(r);let s=ki(i.soc);s&&!e.soc.includes(s)&&e.soc.push(s)}}return e}function zn(o){for(let t of o.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return o.energy.meter}var Ls=.07;function tt(o,t=!1){if(!o)return null;let e=Number(o.state);if(!Number.isFinite(e))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function Os(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function En(o,t){if(Os(o,t))return t;let e=o.entities?.[t]?.device_id;return e?un(o,e).find(n=>n!==t)??null:null}function Ei(o,t){let e=t.energy,n=new Set([e.grid,e.solar,e.battery].filter(Boolean)),i=[],r=new Set;for(let s of t.floors)for(let a of s.placements){let l=En(o,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,tt(o.states[l])??0)}))}return i}function Ii(o,t,e,n=Te(t)){let i=t.energy,r=i.grid??n.grid,s=r?tt(o.states[r],i.grid_invert):null,a=i.solar?tt(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(b=>tt(o.states[b])).filter(b=>b!==null);a=m.length?m.reduce((b,$)=>b+$,0):null}let l=i.battery?tt(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.battery.length){let m=n.battery.map(b=>tt(o.states[b],i.battery_invert)).filter(b=>b!==null);l=m.length?m.reduce((b,$)=>b+$,0):null}let u=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>Number(o.states[m]?.state)).filter(m=>Number.isFinite(m)),d=u.length?u.reduce((m,b)=>m+b,0)/u.length:NaN,p=i.tariff?o.states[i.tariff]:void 0,f=Number(p?.state),g=i.consumption?tt(o.states[i.consumption]):null;return g!==null?g=Math.max(0,g):s!==null||a!==null||l!==null?g=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):e.length&&(g=e.reduce((m,b)=>m+b.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(d)?d:null,tariff:p&&Number.isFinite(f)?{value:f,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:g}}function Ht(o,t){return o.pos.push(t),o.adj.push([]),o.pos.length-1}function gt(o,t,e){let n=Math.hypot(o.pos[t][0]-o.pos[e][0],o.pos[t][1]-o.pos[e][1]);o.adj[t].push({to:e,w:n}),o.adj[e].push({to:t,w:n})}function Hs(o,t){let e=o.length,n=o.map((i,r)=>{let s=o[(r+1)%e],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,u=-l/c,d=a/c;return{p:[i[0]+u*t[r],i[1]+d*t[r]],d:[a/c,l/c],n:[u,d]}});return o.map((i,r)=>{let s=n[(r-1+e)%e],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[r],i[1]+a.n[1]*t[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Ds(o){return dt(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function In(o,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=re(o.rooms,{exterior:t,interior:e},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=Ds(r),l=s.length,c=s.map((p,f)=>{let g=a?(l-2-f+l)%l:f,m=i.some(b=>!b.exterior&&b.sources.some($=>$.room_id===r.id&&$.edge===g));return Ls+(m?e/2:0)}),u=Hs(s,c).map(p=>Ht(n,p)),d=u.map((p,f)=>[p,u[(f+1)%l]]);for(let[p,f]of d)gt(n,p,f);n.rings.set(r.id,d)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=Mt(n,r.roomLeft,s),l=Mt(n,r.roomRight,s);a!==null&&l!==null&&gt(n,a,l)}return n}function Mt(o,t,e){let n=o.rings.get(t);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],u=l[1]-a[1],d=c*c+u*u||1,p=Math.min(1,Math.max(0,((e[0]-a[0])*c+(e[1]-a[1])*u)/d)),f=[a[0]+c*p,a[1]+u*p],g=Math.hypot(e[0]-f[0],e[1]-f[1]);(!i||g<i.d)&&(i={seg:s,q:f,d:g})}if(!i)return null;let r=Ht(o,i.q);return gt(o,r,i.seg[0]),gt(o,r,i.seg[1]),r}function ce(o,t){let e=o.rooms.filter(r=>r.points.length>=3),n=e.find(r=>C(t,r.points));if(n)return n;let i=null;for(let r of e)for(let s of r.points){let a=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Ai(o,t){let e=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(e[t]=0;;){let r=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(r<0||e[s]<e[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])e[r]+a<e[s]-1e-9&&(e[s]=e[r]+a,n[s]=r)}return{dist:e,prev:n}}function $i(o,t){return o.every(e=>t[e].kind==="battery")?"battery":o.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var Si=new WeakMap;function Vs(o,t){let e=zn(o),n=o.floors.find(u=>u.id===e.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;t.forEach((u,d)=>l.set(u.floorId,[...l.get(u.floorId)??[],d]));let c=o.floors.filter(u=>l.has(u.id));for(let u of c){if(u.id===n.id)continue;let d=u.elevation>n.elevation,p=l.get(u.id),f=$i(p,t);i.push({floorId:n.id,a:[e.x,nt,e.z],b:[e.x,d?n.height:-.2,e.z],dist:0,members:p,kind:f});let g=Math.abs(u.elevation-n.elevation);i.push({floorId:u.id,a:[e.x,d?-.2:u.height,e.z],b:[e.x,nt,e.z],dist:g,members:p,kind:f}),a.set(u.id,g+.25)}for(let u of c){let d=In(u,r,s),p=ce(u,[e.x,e.z]);if(!p)continue;let f=Ht(d,[e.x,e.z]),g=Mt(d,p.id,[e.x,e.z]);if(g===null)continue;gt(d,f,g);let m=[];for(let w of l.get(u.id)){let S=t[w],M=ce(u,[S.x,S.z]);if(!M)continue;let F=Ht(d,[S.x,S.z]),R=Mt(d,M.id,[S.x,S.z]);R!==null&&(gt(d,F,R),m.push({node:F,member:w}))}let{dist:b,prev:$}=Ai(d,f),h=new Map;for(let w of m)if(Number.isFinite(b[w.node]))for(let S=w.node;$[S]>=0;S=$[S]){let M=$[S],F=`${M}>${S}`,R=h.get(F)??{a:M,b:S,members:[]};R.members.push(w.member),h.set(F,R)}let y=a.get(u.id)??0;for(let{a:w,b:S,members:M}of h.values()){let F=d.pos[w],R=d.pos[S],O=$i(M,t);i.push({floorId:u.id,a:[F[0],nt,F[1]],b:[R[0],nt,R[1]],dist:y+b[w],members:M,kind:O})}}return i}function Ri({building:o,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:r}){let s=zn(o);if(!s)return[];let a=o.floors.find(k=>k.id===s.floor_id);if(!a)return[];let l=k=>r?.get(k),c=Mn(o,"inverter"),u=Mn(o,"home_battery");!u.length&&n&&u.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let d=k=>{let A=null;for(let P of c)P.floorId===k.floorId&&(!A||Math.hypot(P.x-k.x,P.z-k.z)<Math.hypot(A.x-k.x,A.z-k.z))&&(A=P);return A},p=k=>l(k.id)??(u.length===1?e.battery??0:0),f=new Map;for(let k of u){let A=d(k);A&&f.set(k.id,A)}let g=t.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of u)!f.has(k.id)&&e.battery!==null&&g.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(p(k))});let m=`${s.floor_id}:${s.x},${s.z}|${g.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,b=Si.get(o);b||Si.set(o,b=new Map);let $=b.get(m);$||($=Vs(o,g),b.clear(),b.set(m,$));let h=$.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((A,P)=>A+g[P].power,0),kind:k.kind})),y=e.grid!==null?An(o):null,w=o.settings.roof.cables??[],S=k=>w.find(A=>A.id===k),M=(k,A)=>k.map(P=>({...P,key:A}));if(y){let k=e.grid>=0,A=S("grid"),P=A?Re(o,A,[y.end[0],a.elevation+nt,y.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[[y.end[0],nt,y.end[1]],[y.wall[0],nt,y.wall[1]],[s.x,nt,s.z]],K=A?le(o,k?P:[...P].reverse(),Math.abs(e.grid),k?"grid":"export",a):Fi(a.id,k?P:[...P].reverse(),Math.abs(e.grid),k?"grid":"export",0);h.push(...M(K,"grid"))}if(e.battery!==null&&e.battery>0)for(let k of h)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let F=o.settings.roof.solar??[],R=o.settings.roof.strings??[],O=new Map;if(i&&F.length){let k=[...ae(o),...se(o)];for(let A of F){let P=i.get(A.id)??0,K=A.string?R.find(z=>z.id===A.string)?.inverter:null,W=K?c.find(z=>z.id===K)??null:null;if(!W&&c.length){let z=Lt(o,A,k),V=z?xi(z,A):[A.u,A.v];W=c.reduce((Q,J)=>!Q||Math.hypot(J.x-V[0],J.z-V[1])<Math.hypot(Q.x-V[0],Q.z-V[1])?J:Q,null)}W&&O.set(W.id,(O.get(W.id)??0)+P);let H=W??{floorId:s.floor_id,x:s.x,z:s.z},ot=W?1.1+W.h:1.5,at=S(`solar:${A.id}`),_t=at?Ns(o,A):null,x=o.floors.find(z=>z.id===H.floorId);at&&_t&&x?h.push(...M(le(o,Re(o,at,_t,[H.x,x.elevation+ot,H.z]),P,"solar",x),`solar:${A.id}`)):h.push(...M(Ws(o,A,P,H,ot),`solar:${A.id}`))}}else e.solar!==null&&!c.length&&h.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,nt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let k of c){let A=1.1+k.h,P=u.filter(H=>f.get(H.id)===k),K=l(k.id);if(K===void 0){K=O.get(k.id)??(c.length===1?e.solar??0:0);for(let H of P)K+=p(H)}let W=o.floors.find(H=>H.id===k.floorId);if(e.solar!==null||e.battery!==null){let H=S(`inv:${k.id}`),ot=H&&W?le(o,Re(o,H,[k.x,W.elevation+A,k.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,K),"inverter",W):zi(o,k,A,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,K),"inverter",0);h.push(...M(ot,`inv:${k.id}`))}for(let H of P){let ot=p(H);if(e.battery===null&&l(H.id)===void 0)continue;let at=H.variant==="wall"?.5+H.h:.9,_t=S(`bat:${H.id}`),x=_t&&W?le(o,Re(o,_t,[k.x,W.elevation+A-.1,k.z],[H.x,W.elevation+at,H.z]),Math.abs(ot),"battery",W):zi(o,k,A-.1,H,at,Math.abs(ot),"battery",0);h.push(...M(ot<=0?x:x.map(z=>({...z,a:z.b,b:z.a})).reverse(),`bat:${H.id}`))}}return h}function An(o){let t=zn(o),e=t?o.floors.find(f=>f.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:r}=re(e.rooms,{exterior:n,interior:i},e.walls??[]),s=Mn(o,"grid_point")[0],a=r.filter(f=>f.exterior);if(s){let f=null;for(let m of a){let b=m.b[0]-m.a[0],$=m.b[1]-m.a[1],h=s.x-t.x,y=s.z-t.z,w=h*$-y*b;if(Math.abs(w)<1e-9)continue;let S=((m.a[0]-t.x)*$-(m.a[1]-t.z)*b)/w,M=((m.a[0]-t.x)*y-(m.a[1]-t.z)*h)/w;if(S<=0||S>1||M<0||M>1||f&&S>=f.t)continue;let F=Math.hypot(b,$)||1;f={q:[t.x+h*S,t.z+y*S],out:[$/F,-b/F],t:S}}let g=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[t.x,t.z];return{floorId:e.id,wall:g,end:[s.x,s.z]}}let l=null;for(let f of a){let g=f.b[0]-f.a[0],m=f.b[1]-f.a[1],b=g*g+m*m||1,$=Math.min(1,Math.max(0,((t.x-f.a[0])*g+(t.z-f.a[1])*m)/b)),h=[f.a[0]+g*$,f.a[1]+m*$],y=Math.hypot(t.x-h[0],t.z-h[1]),w=Math.sqrt(b);(!l||y<l.d)&&(l={q:h,out:[m/w,-g/w],d:y})}if(!l)return null;let{q:c,out:u}=l,d=0;for(let f of o.floors)for(let g of f.outdoor??[]){let m=g.points.length;for(let b=0;b<m;b++){let $=g.points[b],h=g.points[(b+1)%m],y=h[0]-$[0],w=h[1]-$[1],S=u[0]*w-u[1]*y;if(Math.abs(S)<1e-9)continue;let M=(($[0]-c[0])*w-($[1]-c[1])*y)/S,F=(($[0]-c[0])*u[1]-($[1]-c[1])*u[0])/S;M>0&&F>=0&&F<=1&&(d=Math.max(d,Math.min(15,M)))}}let p=d>n+1?d:n+2.5;return{floorId:e.id,wall:[c[0]+u[0]*(n/2+.05),c[1]+u[1]*(n/2+.05)],end:[c[0]+u[0]*p,c[1]+u[1]*p]}}function Mn(o,t){let e=[];for(let n of o.floors)for(let i of n.furniture)i.type===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var Mi=new WeakMap;function Ti(o,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,r=Mi.get(o);r||Mi.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=In(t,a,l),u=[e,n],d=ce(t,e),p=ce(t,n);if(d&&p){let f=Ht(c,e),g=Mt(c,d.id,e),m=Ht(c,n),b=Mt(c,p.id,n);if(g!==null&&b!==null){gt(c,f,g),gt(c,m,b);let{dist:$,prev:h}=Ai(c,f);if(Number.isFinite($[m])){u.length=0;for(let y=m;y>=0;y=h[y])u.unshift(c.pos[y])}}}return r.set(i,u),u}function zi(o,t,e,n,i,r,s,a){let l=o.floors.find(d=>d.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=Ti(o,l,[t.x,t.z],[n.x,n.z]),u=[[t.x,e,t.z],...c.map(d=>[d[0],nt,d[1]]),[n.x,i,n.z]];return Fi(l.id,u,r,s,a)}function Fi(o,t,e,n,i){let r=[];for(let s=0;s+1<t.length;s++){let a=t[s],l=t[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:e,kind:n}),i+=c)}return r}function Re(o,t,e,n){let r=(o.floors.find(s=>s.id===t.floor_id)?.elevation??0)+Math.max(nt,t.height);return[e,...t.points.map(s=>[s[0],r,s[1]]),n]}function Ns(o,t){let e=Lt(o,t,[...ae(o),...se(o)]);if(!e)return null;let[n,i]=Ot(e,t),r=t.u+n/2,s=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*r+e.es[0]*s,e.o[1]+e.eu[1]*r+e.es[1]*s,e.o[2]+e.eu[2]*r+e.es[2]*s]}function Bs(o,t,e){let{wall_exterior:n,wall_interior:i}=o.settings,r=In(t,n,i),s=ce(t,e),a=s?Mt(r,s.id,e):null;return a===null?e:r.pos[a]}function le(o,t,e,n,i){let r=[...o.floors].sort((c,u)=>c.elevation-u.elevation),s=c=>{let u=i;for(let d of r)c>=d.elevation-.01&&(u=d);return u},a=[],l=0;for(let c=0;c+1<t.length;c++){let u=t[c],d=t[c+1];if(Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2])<1e-4)continue;let f=[];if(Math.abs(d[1]-u[1])>.01){let g=Math.min(u[1],d[1]),m=Math.max(u[1],d[1]);for(let b of r)b.elevation>g+.01&&b.elevation<m-.01&&f.push(b.elevation);d[1]<u[1]&&f.reverse()}for(let g of[...f,d[1]]){let m=(g-u[1])/(d[1]-u[1]||1),b=Math.abs(d[1]-u[1])>.01?[u[0]+(d[0]-u[0])*m,g,u[2]+(d[2]-u[2])*m]:d,$=s((u[1]+b[1])/2),h=Math.hypot(b[0]-u[0],b[1]-u[1],b[2]-u[2]);h>1e-4&&a.push({floorId:$.id,a:[u[0],u[1]-$.elevation,u[2]],b:[b[0],b[1]-$.elevation,b[2]],dist:l,power:e,kind:n}),l+=h,u=b}}return a}function Ws(o,t,e,n,i){let r=[...ae(o),...se(o)],s=Lt(o,t,r),a=o.floors.find(b=>b.id===n.floorId);if(!s||!a)return[];let[l,c]=Ot(s,t),u=(b,$)=>[s.o[0]+s.eu[0]*b+s.es[0]*$,s.o[1]+s.eu[1]*b+s.es[1]*$,s.o[2]+s.eu[2]*b+s.es[2]*$],d=t.u+l/2,p=a.elevation+nt,f=[],g;if(s.unbounded){let b=u(d,t.v+c/2);g=[b[0],p,b[2]],f.push(g)}else if(s.wall){let b=u(d,t.v);g=[b[0],p,b[2]],f.push(b,g)}else{let b=u(d,t.v),$=Sn(o)??a,h=Math.max(a.elevation+.5,Math.min(b[1]-.25,$.elevation+$.height-.12));g=[b[0],h,b[2]],f.push(b)}let m=Bs(o,a,[g[0],g[2]]);f.push([m[0],g[1],m[1]]),Math.abs(g[1]-p)>.05&&f.push([m[0],p,m[1]]);for(let b of Ti(o,a,m,[n.x,n.z]).slice(1))f.push([b[0],p,b[1]]);return f.push([n.x,a.elevation+i,n.z]),le(o,f,e,"solar",a)}function qs(o,t=new Date){let e=new Date(t);e.setHours(0,0,0,0);let n=Math.max(1,Math.floor((t.getTime()-e.getTime())/3e5)+1),i=new Array(n).fill(0);for(let s of Object.values(o))for(let a of s){let l=typeof a.start=="number"?a.start:Date.parse(a.start),c=Math.floor((l-e.getTime())/3e5);c<0||c>=n||typeof a.mean!="number"||(i[c]+=Math.max(0,a.mean))}return{kwh:i.reduce((s,a)=>s+a*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Pi(o,t){let e=new Date;e.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),statistic_ids:t,period:"5minute",types:["mean"]});return qs(n??{})}catch{return null}}function Ci(o,t){let n=l=>42-(t>0?l/t*36:0),i=o.map((l,c)=>[c/288*220,n(l)]),r=i.map(([l,c],u)=>`${u?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Li(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Us=400;function Oi(o,t){let e=new Map;for(let n of o.settings.roof.solar??[]){let i=Math.min(1,(t.get(n.id)??0)/(Li(n)*Us));e.set(n.id,i>.003?Math.pow(i,.6):0)}return e}function Hi(o,t,e){let n=new Map,i=t.settings.roof.solar??[],r=t.settings.roof.strings??[],s=Li,a=[],l=0,c=new Map;for(let p of i){let f=p.entity&&p.entity!=="none"?tt(o.states[p.entity]):null;if(f!==null){n.set(p.id,Math.max(0,f)),l+=Math.max(0,f);continue}let g=p.string?r.find(b=>b.id===p.string):void 0,m=g?.entity&&g.entity!=="none"?tt(o.states[g.entity]):null;if(g&&m!==null){c.set(g.id,[...c.get(g.id)??[],p]);continue}a.push(p)}for(let[p,f]of c){let g=r.find($=>$.id===p),m=Math.max(0,tt(o.states[g.entity])??0),b=f.reduce(($,h)=>$+s(h),0);for(let $ of f)n.set($.id,m*s($)/b);l+=m}let u=Math.max(0,(e??0)-l),d=a.reduce((p,f)=>p+s(f),0);for(let p of a)n.set(p.id,d?u*s(p)/d:0);return n}var it={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Di(o,t){if(o==="grid")return it.import;if(o==="export")return it.export;if(o==="solar")return it.solar;if(o==="battery")return it.battery;if(o==="wallbox")return it.wallbox;if(o==="inverter")return(t.solar??0)>5?it.solar:it.battery;let e=[[Math.max(0,t.grid??0),it.house],[Math.max(0,(t.solar??0)-Math.max(0,-(t.grid??0))-Math.max(0,-(t.battery??0))),it.solar],[Math.max(0,t.battery??0),it.battery]],[n]=e.reduce((i,r)=>r[0]>i[0]?r:i);return n>0?e.find(i=>i[0]===n)[1]:it.house}var Rn=["neon","blueprint","day"],ue={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Fe={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Vi(o,t){let e=Fe[o].stops;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[i,r]=e[n],[s,a]=e[n-1];if(t<=i){let l=(t-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return e[e.length-1][1]}function Ni(o,t,e){let n=new Map;for(let i of t.floors)for(let r of i.rooms){let s=ye(o,i,r,e);s!==null&&n.set(r.id,s)}return n}function Bi(o){let t=Fe[o].stops,e=t[0][0],n=t[t.length-1][0];return`linear-gradient(90deg, ${t.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-e)/(n-e)*100)}%`).join(", ")})`}function Dt(o,t){if(!tn(t))return E(o,`furn_${t}`);let e=et(t);return e?ko(e,"it"):E(o,"pack_missing_item")}var js=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Pe(o){return o&&o!=="none"?o:null}function Ks(o,t){if(t.type!=="parking")return null;let e=Pe(t.entity);if(e){let r=o.states[e];if(!r||!js.has(r.state.toLowerCase()))return null}let n=t.vehicle??null,i=Pe(t.type_entity);if(i&&t.types?.length){let r=(o.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=t.types.find(l=>s(l.state)===r)??t.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&et(n)?n:null}function Tn(o,t){let e=new Map;for(let n of t.floors)for(let i of n.furniture){let r=Ks(o,i);r&&e.set(i.id,r)}return e}function Wi(o){return o.flatMap(t=>t.furniture.filter(e=>e.type==="parking").flatMap(e=>[Pe(e.entity),Pe(e.type_entity)])).filter(t=>!!t)}var Ce=1800*1e3,Gs=new Set(["motion","occupancy","presence"]);function qi(o,t){return t.startsWith("binary_sensor.")&&Gs.has(String(o.states[t]?.attributes.device_class))}function Le(o,t){let e=[],n=new Set,i=(r,s,a,l)=>{n.has(r)||(n.add(r),e.push({entity:r,floorId:s,x:a,z:l}))};for(let r of t.floors)for(let s of r.placements)if(qi(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(I(s.entity_id)==="camera")for(let a of te(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of t.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=kt(s.points);for(let c of q(o,s.area_id))qi(o,c)&&i(c,r.id,a,l)}return e}function Ui(o,t,e,n=Ce){let i=e-n,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let u=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&u>=i&&u<=e&&r.push({entity:s,time:u}),l=c.s}}for(let s of t){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=e)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function ji(o,t,e,n=Ce){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of t){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(e-s.time)/n))})}return r.slice(-40)}function Ki(o,t){return new Date(t).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var Gi='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Oe=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Yi(o,t){let e=[],n=Ft(o,t.floors),i=t.floors.length>1;for(let r of t.floors){let s=(u,d)=>r.rooms.find(p=>p.points.length>=3&&C([u,d],p.points))??null,a=(u,d)=>[s(u,d)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let u of r.rooms){if(u.points.length<3)continue;let[d,p]=kt(u.points);e.push({kind:"room",name:u.name,where:i?r.name:"",floorId:r.id,roomId:u.id,entity:null,icon:null,x:d,z:p,y:0})}let l=new Set,c=(u,d,p,f)=>{l.has(u)||!o.states[u]||(l.add(u),e.push({kind:"device",name:L(o,u),where:a(d,p),floorId:r.id,roomId:s(d,p)?.id??null,entity:u,icon:I(u),x:d,z:p,y:f}))};for(let u of r.placements)c(u.entity_id,u.x,u.z,u.y??Rt(I(u.entity_id)??"sensor",r.height,u.mount));for(let u of r.furniture){let d=n.get(u.id),p=d?.entity??d?.power;p&&c(p,u.x,u.z,Math.min(r.height-.3,Math.max(.5,u.h)))}}return e}function Xi(o,t,e=8){let n=Oe(t).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=o.filter(a=>{let l=Oe(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),r=Oe(t.trim()),s=a=>(Oe(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,e)}var Ys=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Xs=[2200,2700,3200,4e3,5e3,6500],Qs=["hs","rgb","rgbw","rgbww","xy"],Js=4;function Pn(o){let t=o.attributes.supported_color_modes??[],e=t.some(n=>Qs.includes(n));return{dim:t.some(n=>n!=="onoff"),color:e,temp:t.includes("color_temp")}}function Cn(o){return((o.attributes.supported_features??0)&Js)!==0&&typeof o.attributes.current_position=="number"}var Fn=class extends G{static properties={hass:{attribute:!1},entity:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{I(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(t){let e=t.attributes.entity_picture,n=e?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}nc3d=${this._tick}`:null;return _`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?_`<img src=${n} alt=${L(this.hass,this.entity)} />`:_`<span class="qm-note">${j(this.hass,t)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(t,e){return E(this.hass,t,e)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:L(this.hass,this.entity)}))}call(t,e,n={}){this.hass.callService(t,e,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){mt(this,this.entity),this.close()}ring(t){let e=t.length;return t.map((n,i)=>{let r=i/e*Math.PI*2-Math.PI/2;return _`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(t){let e=Pn(t),n=t.state==="on",i=n&&typeof t.attributes.brightness=="number"?Math.round(t.attributes.brightness/2.55):n?100:0,r=e.color?Ys.map(s=>_`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):e.temp?Xs.map(s=>_`<button class="qm-swatch" style="background:${Zs(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return _`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${e.dim?_`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:v}`}renderCover(t){let e=typeof t.attributes.current_position=="number"?t.attributes.current_position:null,n=t.state==="opening"||t.state==="closing",i=Cn(t),r=(c,u,d,p=!1)=>_`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${u} @click=${d}>${c}</button>`,s=c=>e!==null&&Math.abs(e-c)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(c=>r(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(c=>r(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],r("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=e===null?t.state==="closed"?100:0:100-e;return _`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${e!==null?`${e} %`:j(this.hass,t)}</b>
        </button>
      </div>
      ${i?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(e??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:v}`}renderToggle(t){let e=t.state==="on"||t.state==="unlocked"||t.state==="playing",n=t.entity_id.split(".")[0];return _`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${e?"qm-on":""}"
        aria-pressed=${e}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",e?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${j(this.hass,t)}</b>
      </button>
    </div>`}render(){let t=this.hass?.states[this.entity];if(!t)return v;let e=I(this.entity),n=D(t)?_`<p class="qm-note">${j(this.hass,t)}</p>`:e==="light"?this.renderLight(t):e==="cover"?this.renderCover(t):e==="camera"?this.renderCamera(t):this.renderToggle(t);return _`<div class="qm" role="dialog" aria-label=${L(this.hass,this.entity)}>
      <div class="qm-title">${L(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[rt,Z`
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
    `]};function Zs(o){let t=Math.min(1,Math.max(0,(o-2200)/4300)),e=(n,i)=>Math.round(n+(i-n)*t);return`rgb(${e(255,200)},${e(170,225)},${e(80,255)})`}customElements.get("nc3d-quick-menu")||customElements.define("nc3d-quick-menu",Fn);var ta=new URL(import.meta.url),ea=new URL("./neoncasa3d-3d.js?v=8e14db62ecf4",ta).href,Qi;function Ji(){return Qi??=import(ea),Qi}var Zi=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function na(o,t,e){let n=Zi(e);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of t.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(Zi).includes(n))return{floorId:i.id,room:r};return null}function oa(o){let t=o.trim().split(/\s+/).filter(Boolean);return t.length?(t.length>1?t[0][0]+t[t.length-1][0]:t[0].slice(0,2)).toUpperCase():"?"}function tr(o,t){let e=[],n=new Map;for(let i of t.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=na(o,t,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,u]=kt(a.room.points),d=-Math.PI/2+.9+l*1.15,p=.75,f=r.attributes.friendly_name??i.person;e.push({id:i.person,name:f,initials:oa(f),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(d)*p,z:u+Math.sin(d)*p})}return e}function er(o,t,e,n){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of t.floors){let a=new Set;for(let c of s.rooms)for(let u of hn(o,q(o,c.area_id)))I(u)==="light"&&a.add(u);for(let c of s.placements)I(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let u=e.get(c.id);if(!u)return!1;if(c.type==="garage")return(pt(o,u,"garage").cover??1)<.95;if(c.type==="door")return r(u.contact)||r(u.contact2??null);let d=pt(o,u,"window");return d.open>.5||d.tilt>.5||d.open2>.5||d.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return i}function nr(o,t){let e=[t.rooms===1?E(o,"floor_rooms_one"):E(o,"floor_rooms",{n:t.rooms})];return t.lightsOn&&e.push(E(o,"floor_lights",{n:t.lightsOn})),t.open&&e.push(E(o,"floor_open",{n:t.open})),t.persons&&e.push(E(o,"floor_persons",{n:t.persons})),e.join(" \xB7 ")}var ra='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Ln=class extends G{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holo:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_flows:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_find:{state:!0},_thumbs:{state:!0},floorThumbs:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoEl=null;holoIds="";shownStartView;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holo=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._swipe=null,this._menu=null,this._through=null,this._blend=.6,this._find=null,this._thumbs=[],this.floorThumbs=!0,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1;try{this._flows=localStorage.getItem("neoncasa3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let t=this.renderRoot.querySelector(".nc3d-stage");!t||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(e=>{let n=(e[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(t))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await Ji();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".nc3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?E(this.hass,"floor_rooms_one"):E(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,i,r)=>this.onDeviceTap(n,i,r),onDeviceHold:(n,i,r)=>this.onDeviceHold(n,i,r),onRoomDoubleTap:(n,i)=>this.onRoomDoubleTap(n,i),onDeviceSwipe:(n,i,r,s,a)=>this.onDeviceSwipe(n,i,r,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,i,r)=>this.fire("furniture-move",{id:n,x:i,z:r}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,i,r)=>this.fire("device-move",{id:n,x:i,z:r}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,i,r,s,a)=>this.placeHolo(n,i,r,s,a)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this._low=this.viewer.low,this.viewer.setPacks([...Yt()]),this.shownPacks=fe(),this.building&&(this.shownStartView=JSON.stringify(this.building.settings.start_view??null),this.viewer.setStartView(this.building.settings.start_view??null),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;if(!e)return;if(this._through&&(t.has("roomId")||t.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==fe()&&(this.shownPacks=fe(),e.setPacks([...Yt()]),this.hass&&this.building&&e.setParked(Tn(this.hass,this.building)),this.syncDevices(!0)),t.has("building")&&this.building){let i=JSON.stringify(this.building.settings.start_view??null),r=this.shownStartView!==void 0&&this.shownStartView!==i;this.shownStartView=i,e.setStartView(this.building.settings.start_view??null),e.setBuilding(this.building),r&&this.floorId===null&&e.resetView()}(t.has("building")||t.has("theme")||t.has("floorThumbs")||t.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(i=>t.has(i));(n||t.has("hass"))&&this.syncDevices(n),t.has("autoOrbit")&&e.setAutoOrbit(this.autoOrbit?.06:0),(t.has("_thumbs")||t.has("_narrowStage"))&&e.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("floorStack")&&e.setFloorStack(this.floorStack),t.has("theme")&&e.setTheme(this.theme),t.has("surfaceGrab")&&e.setSurfaceGrab(this.surfaceGrab??null),t.has("furnishTypes")&&e.setFurnishTypes(this.furnishTypes??null),t.has("furnish")&&(e.setFurnishMode(this.furnish),this.syncDevices(!0)),t.has("selectedFurniture")&&e.selectFurniture(this.selectedFurniture),t.has("selectedDevice")&&e.setSelectedDevice(this.selectedDevice),t.has("trail")&&this.watchTrail(),(t.has("weather")||t.has("weatherEntityId"))&&this.syncDevices(!0),t.has("quality")&&t.get("quality")!==void 0&&(e.setQuality(this.quality),this._low=e.low),t.has("showStats")&&e.setStats(this.showStats),t.has("building")&&(this.findIndex=null)}syncDevices(t){let e=this.viewer,n=this.building;if(!e||!n||!this.hass)return;let i=this.hass;if(t||!this.openingLinks||this.linkedRegistry!==i.entities){this.openingLinks=we(i,n.floors),this.furnitureLinks=Ft(i,n.floors),this.linkedRegistry=i.entities,this.findIndex=null;let x=[...this.openingLinks.values()].flatMap(T=>[T.cover,T.contact,T.tilt,T.contact2??null,T.tilt2??null,T.position??null]),z=ni(n),V=z.filter(T=>I(T)==="camera").flatMap(T=>te(i,T)),Q=z.map(T=>En(i,T)),J=n.energy,De=n.presence.flatMap(T=>[T.person,T.sensor]),Vt=n.floors.flatMap(T=>T.rooms.flatMap(X=>q(i,X.area_id).filter(bt=>I(bt)==="light"))),Nt=[...this.furnitureLinks.values()].flatMap(T=>[T.entity,T.power]),ar=n.floors.flatMap(T=>T.furniture.flatMap(X=>[X.door_left??null,X.door_right??null,X.soc??null,X.status??null])),lr=(n.settings.roof?.windows??[]).flatMap(T=>[T.cover,T.contact,T.tilt]).filter(T=>!!T&&T!=="none"),cr=[...(n.settings.roof?.solar??[]).map(T=>T.entity),...(n.settings.roof?.strings??[]).map(T=>T.entity)].filter(T=>!!T&&T!=="none"),ur=n.floors.flatMap(T=>T.furniture.filter(X=>X.type==="robot_vacuum").map(X=>_n(i,this.furnitureLinks.get(X.id)?.entity??null,X.room_sensor))),dr=n.floors.flatMap(T=>T.furniture.flatMap(X=>(X.pictures??[]).flatMap(bt=>[bt.entity,...bt.image.startsWith("camera:")?[bt.image.slice(7)]:[]]))),pr=this.heatMode==="none"?[]:n.floors.flatMap(T=>T.rooms.flatMap(X=>q(i,X.area_id).filter(bt=>bt.startsWith("sensor."))));this.alertSrc=this.alerts?ai(i,n,this.weatherEntityId):null;let hr=this.alertSrc?li(this.alertSrc):[],mr=Wi(n.floors),fr=Le(i,n).map(T=>T.entity),gr=ee(i,this.weatherEntityId??n.settings.weather_entity),_r=[...z,...V,...x,...Q,...Nt,...ar,...ur,...lr,...cr,...dr,J.grid,J.solar,J.battery,J.battery_soc,J.consumption,J.tariff,...De,...Vt,...pr,...hr,...mr,...fr,gr,"sun.sun"];this.watched=[...new Set(_r.filter(T=>!!T))],t=!0}if(!(t||this.watched.some(x=>this.shownStates.get(x)!==i.states[x])))return;this.shownStates=new Map(this.watched.map(x=>[x,i.states[x]]));let s=Ei(i,n),a=ei(i,n),l=this.furnitureMarkers(i,n,new Set(a.map(x=>x.id)),new Set(s.map(x=>x.powerEntity)));s.push(...l.consumers);let c=Ii(i,n,s,Te(n,x=>this.furnitureLinks?.get(x.id)?.power??null)),u=new Map(s.filter(x=>x.id!==x.powerEntity).map(x=>[x.id,x.power]));this.confirmSet=Tt(i,n.floors);let d=this.trail?this.trailNow(i,n):[],p=U("energy_pro");e.setDevices([...[...a,...l.markers].map(x=>{let z=x.show==="no_power"||"energyDevice"in x&&x.energyDevice?null:u.get(x.id)??null,V={...x,power:z,powerText:z===null?void 0:N(i,z),effect:this.dimmed?!1:x.effect};return{...V,pin:this.showPin(V)}}),...(p&&(this.flows??this._flows)&&!this.dimmed&&c.grid!==null?[this.gridPin(i,n,c.grid)]:[]).filter(x=>!!x),...d.map((x,z)=>({id:`trail:${z}`,floorId:x.floorId,roomId:null,x:x.x,z:x.z,y:.3+.4*d.slice(0,z).filter(V=>V.entity===x.entity).length,icon:Gi,name:L(i,x.entity),text:Ki(i,x.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),e.setTrail(d),e.setPickTargets(l.targets,this.openingTargets()),e.setScreens(l.screens),e.setFridgeDoors(fn(i,n.floors)),e.setRobots(this.robotInfos(i,n));let f=new Map;for(let x of n.settings.roof?.windows??[]){let z=Q=>Q&&Q!=="none"?Q:null,V=pt(i,{cover:z(x.cover),contact:z(x.contact),tilt:z(x.tilt)},"window");f.set(x.id,{open:V.open,tilt:V.tilt,cover:V.cover??0})}e.setRoofWindows(f),e.setParked(Tn(i,n));let g=new Map(n.floors.flatMap(x=>x.openings.map(z=>[z.id,z.type]))),m=new Map([...this.openingLinks].map(([x,z])=>[x,pt(i,z,g.get(x))]));e.setOpeningStates(m),this.setAlerts(this.alertSrc?ci(i,n,this.alertSrc,this.openingLinks):[]);let b=[...a,...l.markers].map(x=>`${x.id}:${x.glow?`${x.glow.level.toFixed(1)}/${x.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...m].map(([x,z])=>`${x}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(b!==this.thumbSig){let x=this.thumbSig==="";this.thumbSig=b,x||this.scheduleThumbs(1500)}let $=n.floors.flatMap(x=>x.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:x.id,x:z.x,z:z.z})))[0]??(n.energy.battery?n.floors.flatMap(x=>x.placements.filter(z=>z.entity_id===n.energy.battery).map(z=>({floorId:x.id,x:z.x,z:z.z})))[0]:null),h=p?Hi(i,n,c.solar):null,y=n.settings.roof.hologram??zo,w=[...n.settings.roof.solar??[]].sort((x,z)=>z.rows*z.cols-x.rows*x.cols),S=p&&c.solar!==null?w.find(x=>x.id===y.field)??w[0]:void 0,M=S?Lt(n,S):null;if(S&&M){let[x,z]=Ot(M,S),V=S.u+x/2+y.right,Q=S.v+z/2+y.up,J=[M.o[0]+M.eu[0]*V+M.es[0]*Q,M.o[1]+M.eu[1]*V+M.es[1]*Q,M.o[2]+M.eu[2]*V+M.es[2]*Q],De=M.wall?.floorId??(M.unbounded?n.floors.find(Vt=>Vt.elevation===Math.min(...n.floors.map(Nt=>Nt.elevation)))?.id??n.floors[0].id:[...n.floors].sort((Vt,Nt)=>Nt.elevation-Vt.elevation)[0].id);e.setAnchor({p:[J[0]+M.n[0]*.05,J[1]+M.n[1]*.05,J[2]+M.n[2]*.05],n:[M.n[0],M.n[1],M.n[2]],floorId:De,size:y.size})}else e.setAnchor(null);e.setSolarLevels(h&&!this.dimmed?Oi(n,h):new Map),e.setFlows(!p||!(this.flows??this._flows)||this.dimmed?[]:Ri({building:n,consumers:s,summary:c,battery:$??null,fieldPower:h,devicePower:this.devicePowers(i,n)}).map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.power,color:Di(x.kind,c)})));let F=[];e.setPersons(F);let R=er(i,n,this.openingLinks,F);e.setFloorInfo(new Map([...R].map(([x,z])=>[x,nr(i,z)])));let O=i.states["sun.sun"]?.attributes,k=typeof O?.elevation=="number"?O.elevation:null;e.setSun(k!==null&&typeof O?.azimuth=="number"?{elevation:k,azimuth:O.azimuth}:null);let A=this.weather&&!this.dimmed&&U("weather")?ii(i,ee(i,this.weatherEntityId??n.settings.weather_entity)):null,P=A?ri(A,n.settings.weather_effects):null;this.cloud=P?.cloud??0,this._sky=(k===null?0:Math.min(1,Math.max(0,(k+4)/16)))*(1-.45*this.cloud);let K=P?P.sky:(n.settings.weather_effects??["sky"]).includes("sky");e.setWeather(this.weather&&!this.dimmed&&U("weather")?{...P??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:K}:null),this.watchLightning(!!P?.lightning),this.applyTint();let H=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(H)!==JSON.stringify(this._energy)&&(this._energy=H);let ot=s.some(x=>x.wallbox)?s.filter(x=>x.wallbox).reduce((x,z)=>x+z.power,0):null,at=n.floors.flatMap(x=>x.furniture.filter(z=>z.type==="inverter")).map(x=>{let z=this.furnitureLinks?.get(x.id)?.power,V=z?tt(i.states[z]):null;return V===null?null:{name:x.name||Dt(i,x.type),w:Math.max(0,V)}}).filter(x=>!!x);JSON.stringify(at)!==JSON.stringify(this._plants)&&(this._plants=at),ot!==this._wallboxW&&(this._wallboxW=ot);let _t=p&&c.solar!==null?n.energy.solar?[n.energy.solar]:Te(n,x=>this.furnitureLinks?.get(x.id)?.power??null).solar:[];this.watchSolarDay(_t)}devicePowers(t,e){let n=new Map;for(let i of e.floors)for(let r of i.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let s=this.furnitureLinks?.get(r.id)?.power,a=s?tt(t.states[s],r.type==="home_battery"&&e.energy.battery_invert):null;a!==null&&n.set(r.id,a)}return n}gridPin(t,e,n){let i=An(e);if(!i)return null;let r=Math.abs(n)<5;return{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9,icon:ra,name:E(t,"holo_grid"),text:r?N(t,0):`${E(t,n<0?"energy_grid_export":"energy_grid_import")} ${N(t,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}watchSolarDay(t){let e=t.join(",");if(e===this.holoIds)return;if(this.holoIds=e,clearInterval(this.holoTimer),this.holoTimer=void 0,!t.length){this._holo=null;return}let n=async()=>{if(!this.hass||document.hidden)return;let i=await Pi(this.hass,t);this.holoIds===e&&(this._holo=i)};n(),this.holoTimer=setInterval(()=>{n()},3e5)}placeHolo(t,e,n,i,r){let s=this.holoEl??=this.renderRoot.querySelector(".nc3d-holo"),a=this.renderRoot.querySelector(".nc3d-holo-link");if(!s)return;let l=!n;if(s.hidden!==l&&(s.hidden=l),a&&a.hasAttribute("hidden")!==l&&a.toggleAttribute("hidden",l),!n)return;let c=i*.8,u=34*c,d=46*c,p=t+(r?u:-u),f=e-d;if(s.style.transform=`translate(${p.toFixed(1)}px, ${f.toFixed(1)}px) scale(${(r?c:-c).toFixed(3)}, ${c.toFixed(3)}) translate(0, -100%)`,a){let g=a.firstElementChild,m=a.lastElementChild;g?.setAttribute("x1",t.toFixed(1)),g?.setAttribute("y1",e.toFixed(1)),g?.setAttribute("x2",p.toFixed(1)),g?.setAttribute("y2",f.toFixed(1)),m?.setAttribute("cx",t.toFixed(1)),m?.setAttribute("cy",e.toFixed(1))}}renderHologram(){let t=this._energy;if(!U("energy_pro")||!t||t.solar===null||this.roomId||this.floorId!==null||!this.showEnergy)return this.holoEl=null,v;let e=this.hass,n=c=>E(e,c),i=this._holoOpen,r=this._holo,s=t.consumption!==null&&t.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,t.grid??0)/t.consumption)*100))):null,a=r&&r.curve.length>1?Ci(r.curve,r.peak):null,l=(new Date().getHours()+new Date().getMinutes()/60)/24*220;return _`<svg class="nc3d-holo-link" hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="nc3d-holo ${i?"":"nc3d-holo-min"}" hidden role="button" tabindex="0" aria-label=${n("holo_title")} @click=${()=>this._holoOpen=!this._holoOpen}>
      <div class="nc3d-holo-sheen"></div>
      <div class="nc3d-holo-scan"></div>
      <div class="nc3d-holo-body">
        <div class="nc3d-holo-head"><span>☀ ${n("holo_title")}</span><span class="nc3d-holo-live">● ${n("holo_live")}</span></div>
        <div class="nc3d-holo-big"><b>${N(e,t.solar)}</b><span>${n("holo_pv_now")}</span></div>
        ${i?_`${this._plants.length>1?_`<div class="nc3d-holo-plants">${this._plants.map(c=>_`<span>${c.name}</span><b>${N(e,c.w)}</b>`)}</div>`:v}
              ${r?_`<div class="nc3d-holo-sub">${n("holo_today")} <b>${Y(e,r.kwh,1)} kWh</b> · ${n("holo_peak")} <b>${N(e,r.peak)}</b></div>`:v}
              ${a?ao`<svg class="nc3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="nc3dHoloG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${a.area}" fill="url(#nc3dHoloG)"/>
                    <path d="${a.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${l}" y1="2" x2="${l}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:v}
              <div class="nc3d-holo-grid">
                ${t.battery!==null||t.soc!==null?_`<div class="nc3d-holo-cell nc3d-holo-bat">
                      ${n("holo_battery")}<br /><b>${t.soc!==null?`${Math.round(t.soc)} %`:N(e,Math.abs(t.battery??0))}</b>
                      ${t.battery!==null&&Math.abs(t.battery)>=5?_`<span>${t.battery<0?"\u25B2":"\u25BC"} ${N(e,Math.abs(t.battery))}</span>`:v}
                    </div>`:v}
                ${t.grid!==null?_`<div class="nc3d-holo-cell ${t.grid<-5?"nc3d-holo-exp":"nc3d-holo-imp"}">
                      ${n("holo_grid")}<br /><b>${N(e,Math.abs(t.grid))}</b> <span>${Math.abs(t.grid)<5?"":n(t.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:v}
                ${t.consumption!==null?_`<div class="nc3d-holo-cell nc3d-holo-house">${n("holo_house")}<br /><b>${N(e,t.consumption)}</b></div>`:v}
                ${this._wallboxW!==null?_`<div class="nc3d-holo-cell nc3d-holo-wb">${n("holo_wallbox")}<br /><b>${N(e,this._wallboxW)}</b></div>`:v}
              </div>
              ${s!==null?_`<div class="nc3d-holo-bar"><div style="width:${s}%"></div></div>
                    <div class="nc3d-holo-foot"><span>${n("holo_autarky")}</span><b>${s} %</b></div>`:v}`:v}
      </div>
    </div>`}setAlerts(t){let e=t.map(i=>`${i.kind}:${i.entity}`),n=t.filter((i,r)=>!this.seenAlerts.has(e[r]));this.seenAlerts=new Set(e),e.join()!==this._alerts.map(i=>`${i.kind}:${i.entity}`).join()&&(this._alerts=t),t.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!t.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(t){if(!t.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60)}onRoomDoubleTap(t,e){let n=this.building,i=this.hass,r=n?.floors.find(u=>u.id===t),s=r?.rooms.find(u=>u.id===e);if(!n||!i||!r||!s)return;let a=new Set(q(i,s.area_id).filter(u=>I(u)==="light"));for(let u of r.placements)I(u.entity_id)==="light"&&C([u.x,u.z],s.points)&&a.add(u.entity_id);for(let u of r.furniture){let d=this.furnitureLinks.get(u.id)?.entity;d&&en(u.type)&&C([u.x,u.z],s.points)&&a.add(d)}let l=[...a].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let c=l.some(u=>i.states[u]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:e,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(t){this.hass.callService(t.split(".")[0],"turn_on",{entity_id:t}),this._sceneFired=t,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let t=this.viewer,e=this.building,n=this.hass;if(!t||!e||!n)return;let i=null;if(this.heatMode!=="none"){let s=this.heatMode,a=Ni(n,e,s);this.heatValues=a,i=new Map([...a].map(([l,c])=>[l,Vi(s,c)]))}if(this._alerts.length){i??=new Map;let s=.55+.45*Math.sin(performance.now()/160);for(let a of this._alerts){let l=ui(a.kind).map(c=>c*s);if(a.roomId)i.set(a.roomId,l);else for(let c of e.floors)for(let u of c.rooms)i.set(u.id,l)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let r=i?[...i].map(([s,a])=>`${s}:${a.map(l=>l.toFixed(2)).join(",")}`).join(";"):"";r!==this.tintSig&&(this.tintSig=r,t.setRoomTint(i))}furnitureMarkers(t,e,n,i){let r=[],s=[],a=new Map,l=new Map;for(let d of e.floors)for(let p of d.furniture){let f=this.furnitureLinks.get(p.id);if(en(p.type)){r.push(this.lampMarker(t,d,p,f?.entity??null));continue}let g=p.type==="home_battery"?p.soc:p.type==="wallbox"?p.status:null,m=g&&g!=="none"?g:null,b=f??(m?{entity:null,power:null}:void 0);if(!b)continue;let $=p.type==="home_battery"?m??b.entity??b.power:b.entity??b.power??m;l.set(p.id,$);let h=b.entity?t.states[b.entity]:void 0,y=p.type==="meter"?e.energy.grid_invert:p.type==="home_battery"?e.energy.battery_invert:!1,w=b.power?tt(t.states[b.power],y):null;b.power&&w!==null&&!i.has(b.power)&&(i.add(b.power),s.push({id:$,powerEntity:b.power,floorId:d.id,x:p.x,z:p.z,power:Math.max(0,w),wallbox:p.type==="wallbox"||void 0}));let S=(w??0)>10||h?.state==="on"||h?.state==="running"||dn(h)&&$t(h);if(p.type==="radiator"&&h&&I(h.entity_id)==="climate"){let R=h.attributes;if(R.hvac_action==="heating"){let O=typeof R.temperature=="number"&&typeof R.current_temperature=="number"?R.temperature-R.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,O))})}}else(p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&S&&a.set(p.id,{color:[.3,.85,1],level:.8});if(h&&mn(p.type)){let R=U("screens"),O=I(h.entity_id)==="light"?Jt(h):null,k=R&&I(h.entity_id)==="media"?Go(h):O?O.color:$t(h)||h.state==="playing"?[.22,.88,1]:null,A=R&&I(h.entity_id)==="media"?h.attributes.entity_picture??null:null;k&&a.set(p.id,{color:k,level:h.state==="playing"?1:.6,picture:A})}if(n.has($))continue;n.add($);let M=b.entity?I(b.entity):null,F=d.rooms.find(R=>R.points.length>=3&&C([p.x,p.z],R.points));r.push({id:$,floorId:d.id,roomId:F?.id??null,x:p.x,z:p.z,y:sa(p)+It(d,p),icon:Zt(M??"switch"),name:p.name||(b.entity?L(t,b.entity):Dt(t,p.type)),text:p.type==="home_battery"?this.batteryText(t,m,w):p.type==="wallbox"?this.wallboxText(t,m,w):p.type==="meter"?this.meterText(t,w):h?j(t,h):w!==null?N(t,Math.max(0,w)):"",active:h?$t(h):(w??0)>5,unavailable:h?D(h):!1,glow:null,furnitureId:p.id,energyDevice:p.type==="inverter"||p.type==="home_battery"||p.type==="wallbox"||p.type==="meter",show:p.marker??void 0,fromFurniture:!0})}this.cameraScreens=0;let c=fn(t,e.floors),u=U("screens");for(let d of e.floors)for(let p of d.furniture){if(!u||!p.pictures?.length||!mn(p.type)||p.type==="fridge_smart"&&c.get(p.id)?.right)continue;let f=p.pictures.find(b=>jo(t,b));if(!f)continue;let g=this.pictureUrl(f.image),m=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];g&&a.set(p.id,{color:m,level:1,picture:g,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through),{markers:r,consumers:s,screens:a,targets:l}}trailNow(t,e){let n=Date.now(),i=Le(t,e),r=i.map(s=>{let a=t.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return ji(i,Ui(this.trailRows,r,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!U("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!U("camera_cockpit")){this.trailRows={},this.syncDevices(!0);return}let t=async()=>{let e=this.hass,n=this.building;if(!e||!n||document.hidden)return;let i=Le(e,n).map(r=>r.entity);if(i.length){try{let r=await e.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Ce).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};t(),this.trailTimer=setInterval(()=>{t()},6e4)}watchCameras(t){t&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),this._through&&this.requestUpdate())},this._low?1e4:5e3):!t&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(t){if(/^https?:\/\//.test(t))return t;if(t.startsWith("camera:")){let e=this.hass.states[t.slice(7)],n=e?.attributes.entity_picture;return!n||D(e)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}nc3d=${this.cameraTick}`)}return this.pictureUrls.has(t)?this.pictureUrls.get(t)??null:(this.pictureUrls.set(t,null),mo(this.hass,t).then(e=>{this.pictureUrls.set(t,e),this.syncDevices(!0)},()=>{}),null)}robotObstacles(t,e){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return t.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||It(t,i)>.12)return!1;let r=et(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:C([i.x,i.z],e)||be(i).some(s=>C(s,e))}).map(i=>be(i))}robotInfos(t,e){let n=[];for(let i of e.floors)for(let r of i.furniture){if(r.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?t.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=r.rotation*Math.PI/180,u=r.d*.14,d=[r.x-Math.sin(c)*u,r.z+Math.cos(c)*u],p=i.rooms.filter(b=>b.points.length>=3),g=(l==="cleaning"?Xo(t,p,s,_n(t,s,r.room_sensor)):null)??p.find(b=>C(d,b.points)),m=l==="cleaning"&&g?this.robotObstacles(i,g.points):[];n.push({id:r.id,floorId:i.id,rest:d,restHeading:-c,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:m})}return n}batteryText(t,e,n){let i=e?Number(t.states[e]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${Y(t,i,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${N(t,Math.abs(n))}`),r.join(" \xB7 ")}meterText(t,e){return e===null?"":Math.abs(e)<5?N(t,0):`${E(t,e<0?"energy_grid_export":"energy_grid_import")} ${N(t,Math.abs(e))}`}wallboxText(t,e,n){let i=e?t.states[e]:void 0,r=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(r),a=i?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=s?E(t,"wallbox_charging"):a?E(t,"wallbox_plugged"):i&&!D(i)&&!i.entity_id.startsWith("binary_sensor.")?j(t,i):"",c=n!==null&&n>50?N(t,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}lampMarker(t,e,n,i){let r=i?t.states[i]:void 0,s=et(n.type),a=To[n.type]??s?.light??"floor",l=n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?It(e,n):a==="table"?ge(e,n.x,n.z):a==="bollard"||a==="garden"?_e(e,n.x,n.z):0,c=e.rooms.find(p=>p.points.length>=3&&C([n.x,n.z],p.points)),u=e.height,d=s?s.mount==="ceiling"?Math.max(.5,l-.15):l+n.h+.2:{ceiling:u-.3,downlight:u-.25,spot:u-.35,panel:u-.25,pendant:Math.max(.6,u-n.h-.25),floor:l+n.h+.25,uplight:l+n.h+.25,table:l+n.h+.2,wall:l+n.h+.2,strip:Math.max(.3,l-.2),bollard:l+n.h+.25,garden:l+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:e.id,roomId:c?.id??null,x:n.x,z:n.z,y:d,icon:Zt("light"),name:n.name||(i?L(t,i):Dt(t,n.type)),text:r?j(t,r):"",active:r?$t(r):!1,unavailable:r?D(r):!1,glow:r?Jt(r):null,lamp:a,rotation:n.rotation,size:[n.w,n.d,n.h],base:l,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?l:l+n.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(r.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(t){if(this.furnish&&!t.fromFurniture)return!0;if(t.show==="never"||this.markerMode==="none")return!1;if(t.show==="always"||this.markerMode==="all")return!0;if(t.lamp||t.model)return!1;let e=I(t.id);return e==="light"?!1:t.fromFurniture?(t.power??0)>=1||e==="media"&&t.active||!!t.energyDevice&&!!t.text:!0}openingTargets(){let t=new Map;for(let[e,n]of this.openingLinks??[]){let i=n.cover??n.contact??n.tilt;i&&t.set(e,i)}return t}scheduleThumbs(t=600){clearTimeout(this.thumbTimer);let e=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||e<2){this._thumbs=[];return}let n=Math.max(t,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return v;let t=new Map(this.building.floors.map(n=>[n.id,n.name])),e=[...this._thumbs].sort((n,i)=>(this.building.floors.find(r=>r.id===i.floorId)?.elevation??0)-(this.building.floors.find(r=>r.id===n.floorId)?.elevation??0));return _`<nav class="nc3d-thumbs ${this.narrowThumbs?"nc3d-thumbs-small":""}" aria-label=${E(this.hass,"floors")}>
      <button class="nc3d-thumb nc3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${E(this.hass,"all_floors")}</span>
      </button>
      ${e.map(n=>_`<button class="nc3d-thumb" aria-pressed=${this.floorId===n.floorId} @click=${()=>this.fire("floor-tap",{floorId:n.floorId})}>
          <img src=${n.url} alt="" />
          <span>${t.get(n.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(t,e,n){let i=I(t);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:t,x:e,y:n}:mt(this,t)}onDeviceSwipe(t,e,n,i,r){let s=this.hass?.states[t];if(e==="start"){if(!s||D(s)||this.confirmSet.has(t))return!1;let l=I(t);if(l==="light"&&Pn(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:t,kind:"light",start:c,value:c,x:i,y:r},!0}if(l==="cover"&&Cn(s)){let c=s.attributes.current_position;return this._swipe={entity:t,kind:"cover",start:c,value:c,x:i,y:r},!0}return!1}let a=this._swipe;if(!a||a.entity!==t)return!1;if(e==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let t=this._swipe;!t||!this.hass||(t.kind==="light"?t.value<=0?this.hass.callService("light","turn_off",{entity_id:t.entity}):this.hass.callService("light","turn_on",{entity_id:t.entity,brightness_pct:t.value}):this.hass.callService("cover","set_cover_position",{entity_id:t.entity,position:t.value}))}goTo(t){if(this._find=null,t.kind==="room"){this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),setTimeout(()=>this.viewer?.focus(t.floorId,t.x,t.z,t.y,t.entity),120)}renderAlerts(){let t=this.building;if(!this._alerts.length||!t)return v;let e=this._alerts.slice(0,3);return _`<div class="nc3d-alert-banner" role="alert">
      ${e.map(n=>_`<button class="nc3d-alert nc3d-alert-${n.kind}" title=${yn(this.hass,t,n)} @click=${()=>this.jumpTo(n)}>${yn(this.hass,t,n)}</button>`)}
      ${this._alerts.length>3?_`<span class="nc3d-alert-more">+${this._alerts.length-3}</span>`:v}
    </div>`}renderScenes(){let t=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!t||!this.hass)return v;let e=t.floors.flatMap(r=>r.rooms).find(r=>r.id===this.roomId),n=e?q(this.hass,e.area_id).filter(r=>I(r)==="scene"||I(r)==="script").slice(0,6):[];if(!n.length)return v;let i=e?.area_id?this.hass.areas?.[e.area_id]?.name:void 0;return _`<div class="nc3d-scenes">
      ${n.map(r=>_`<button class="nc3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${L(this.hass,r,i)}</button>`)}
    </div>`}renderFind(){let t=this.building;if(!t||!this.hass)return v;if(this._find===null)return _`<button class="nc3d-find-btn" title=${E(this.hass,"find")} aria-label=${E(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let e=Xi(this.findIndex??=Yi(this.hass,t),this._find);return _`<div class="nc3d-find">
      <input
        type="search"
        placeholder=${E(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&e[0]&&this.goTo(e[0])}}
      />
      <button class="nc3d-find-close" aria-label=${E(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?_`<div class="nc3d-find-list">
            ${e.length?e.map(n=>_`<button @click=${()=>this.goTo(n)}>
                    <span class="nc3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?ke(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?_`<small>${n.where}</small>`:v}</span>
                  </button>`):_`<p>${E(this.hass,"find_none")}</p>`}
          </div>`:v}
    </div>`}renderSwipe(){let t=this._swipe;if(!t||!this.hass)return v;let e=t.kind==="light"&&t.value<=0;return _`<div class="nc3d-swipe" style="left:${t.x}px;top:${t.y}px">
      <span>${L(this.hass,t.entity)}</span>
      <b>${e?E(this.hass,"swipe_off"):`${t.value} %`}</b>
      <i><em style="height:${t.value}%"></em></i>
    </div>`}lookThrough(t){let e=this.viewer,n=this.building;if(!e||!n)return;if(!U("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===t))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:t}:this._through={entity:t,back:e.getView()},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===t&&!this.viewer?.lookThrough(t)&&(this._through=null)},r)}endThrough(){let t=this._through;t&&(this._through=null,this.viewer?.flyTo(t.back))}renderProHint(){return!this._proHint||!this.hass?v:_`<div class="nc3d-pro" role="dialog">
      <b>${E(this.hass,"pro_title")}</b>
      <span>${E(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="nc3d-sub">${E(this.hass,"pro_locked")}</span>
      <div>
        <a class="nc3d-chip nc3d-chip-on" href=${Jo(this.hass.language)} target="_blank" rel="noopener">${E(this.hass,"pro_shop")}</a>
        <a class="nc3d-chip" href=${Zo(this.hass.language,this._proHint)} target="_blank" rel="noopener">${E(this.hass,"manual_more")}</a>
        <button class="nc3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${E(this.hass,"ext_tab")}</button>
        <button class="nc3d-chip" @click=${()=>this._proHint=null}>${E(this.hass,"close")}</button>
      </div>
    </div>`}renderThrough(){let t=this._through;if(!t||!this.hass)return v;let e=this.hass.states[t.entity],n=e?.attributes.entity_picture,i=n&&!D(e)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}nc3d=${this.cameraTick}`:null;return _`<div class="nc3d-through" style="--nc3d-blend:${this._blend}">
      ${i?_`<img class="nc3d-through-img" src=${i} alt="" />`:v}
      <div class="nc3d-through-bar">
        <span class="nc3d-through-name">${L(this.hass,t.entity)}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${E(this.hass,"through_blend")}
          @input=${r=>this._blend=Number(r.target.value)/100}
        />
        <button class="nc3d-chip" @click=${()=>this.endThrough()}>${E(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let t=this._menu;if(!t||!this.hass)return v;let e=this.renderRoot.querySelector(".nc3d-stage"),n=e?.clientWidth??800,i=e?.clientHeight??600,r=Math.max(8,Math.min(n-240,t.x-116)),s=Math.max(8,Math.min(i-360,t.y-170));return _`<div class="nc3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nc3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${t.entity}
        ?confirmSwitch=${this.confirmSet.has(t.entity)}
        ?pro=${U("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></nc3d-quick-menu>`}onDeviceTap(t,e=0,n=0){if(t.startsWith("trail:"))return;let i=I(t);if(i==="cover"||i==="camera"){this._menu={entity:t,x:e,y:n};return}if(i&&Wo.has(i)){if(this.confirmSet.has(t)&&!confirm(E(this.hass,"confirm_switch",{name:L(this.hass,t)})))return;oi(this.hass,t)}else mt(this,t)}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neoncasa3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let t=this._energy;if(!U("energy_pro")||!t||this.roomId||!this.showEnergy)return v;let e=i=>E(this.hass,i),n=[];if(t.consumption!==null&&n.push({cls:"total",label:e("energy_consumption"),value:N(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;n.push({cls:i?"export":"grid",label:e(i?"energy_grid_export":"energy_grid_import"),value:N(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&n.push({cls:"solar",label:e("energy_solar"),value:N(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?N(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:e("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&n.push({cls:"tariff",label:e("energy_tariff"),value:`${Y(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),_`<div class="nc3d-energy" aria-live="off">
      ${n.map(i=>_`<div class="nc3d-energy-item nc3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?v:_`<button class="nc3d-energy-item nc3d-flow-toggle" aria-pressed=${this._flows} title=${`${e("flows_hint")} (${e(this._flows?"flow_on":"flow_off")})`} aria-label=${e("flows")} @click=${()=>this.toggleFlows()}>
        <span>${e("flows")}</span><b>⚡</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none")return v;let t=Fe[this.heatMode],e=this.heatMode==="temperature",n=e?Qt(this.hass,t.stops[0][0]):t.stops[0][0],i=e?Qt(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],r=e?ct(this.hass):t.unit,s=a=>E(this.hass,a);return _`<div class="nc3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="nc3d-legend-bar" style="background:${Bi(this.heatMode)}"></span>
      <span class="nc3d-legend-range"><span>${Y(this.hass,n,0)} ${r}</span><span>${Y(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?v:_`<span class="nc3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let t=ue[this.theme]??ue.neon,e=this._sky;return t.night[0].map((n,i)=>Math.round(n+(t.day[0][i]-n)*e))}watchLightning(t){if(!t){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let e=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),e()},5e3+Math.random()*9e3)};e()}render(){let t=this._sky,e=(r,s)=>`rgb(${r.map((a,l)=>Math.round(a+(s[l]-a)*t)).join(",")})`,n=ue[this.theme]??ue.neon,i=`--nc3d-sky:${e(n.night[0],n.day[0])};--nc3d-ground:${e(n.night[1],n.day[1])}`;return _`<div
      class="nc3d-stage ${this.roomLabels?"":"nc3d-no-room-names"} ${this._low?"nc3d-low":""} ${this.panelOpen?"nc3d-panel-open":""} ${this._alerts.length?"nc3d-has-alerts":""} ${this._through?"nc3d-through-on":""} ${this._flash?"nc3d-flash":""}"
      style=${i}
    >
      ${this._error?_`<p class="nc3d-error">${this._error}</p>`:v} ${this.renderEnergy()} ${this.renderHologram()} ${this.renderLegend()}
      ${this.renderAlerts()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderProHint()} ${this.renderMenu()}
      ${this.showStats&&this._stats?_`<span class="nc3d-stats"
            ><b>${this._stats.fps?E(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):E(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?_`(${this._stats.busy.map(r=>E(this.hass,`stats_busy_${r}`)).join(", ")})`:v} ·
            ${E(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${E(this.hass,this._stats.low?"stats_low":"stats_full",{r:Y(this.hass,this._stats.pixelRatio,2)})}</span
          >`:v}
    </div>`}static styles=[rt,ft,Z`
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
      /* Energie Pro: the glass hologram beside the house */
      .nc3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .nc3d-holo[hidden],
      .nc3d-holo-link[hidden] {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .nc3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .nc3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .nc3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .nc3d-holo-min {
        width: 150px;
      }
      .nc3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .nc3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .nc3d-holo-body {
        position: relative;
      }
      .nc3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .nc3d-holo-live {
        color: #5dffb0;
      }
      .nc3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .nc3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .nc3d-holo-big span,
      .nc3d-holo-sub {
        color: #aee9ff;
      }
      .nc3d-holo-sub {
        margin-bottom: 6px;
      }
      .nc3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .nc3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .nc3d-holo-sub b,
      .nc3d-holo-cell b,
      .nc3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .nc3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .nc3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .nc3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .nc3d-holo-cell span {
        font-size: 11px;
      }
      .nc3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .nc3d-holo-bat span {
        color: #5dffb0;
      }
      .nc3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .nc3d-holo-exp span {
        color: #4ff6ff;
      }
      .nc3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .nc3d-holo-imp span {
        color: #ff8fc4;
      }
      .nc3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .nc3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .nc3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .nc3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .nc3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
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
    `]};customElements.get("nc3d-view3d")||customElements.define("nc3d-view3d",Ln);function N(o,t){return Math.abs(t)>=1e3?`${Y(o,t/1e3,1)} kW`:`${Math.round(t)} W`}function sa(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var aa=.25,or=o=>Math.round(o*1e3)/1e3;function On(o,t,e,n,i){let r=o.rooms.find(s=>s.points.length>=3&&C([t,e],s.points));return!r||C([n,i],r.points)?[n,i]:C([n,e],r.points)?[n,e]:C([t,i],r.points)?[t,i]:[t,e]}function ir(o,t,e,n=aa){let i=o.rooms.find(c=>c.points.length>=3&&C([t.x,t.z],c.points));if(!i)return null;let r=i.points,s=dt(r)>=0?1:-1,a=e/2,l=null;for(let c=0;c<r.length;c++){let u=r[c],d=r[(c+1)%r.length],p=Math.hypot(d[0]-u[0],d[1]-u[1]);if(p<.3)continue;let f=[(d[0]-u[0])/p,(d[1]-u[1])/p],g=[-f[1]*s,f[0]*s],m=(t.x-u[0])*f[0]+(t.z-u[1])*f[1];if(m<0||m>p)continue;let $=o.rooms.some(R=>R.id!==i.id&&R.points.some((O,k)=>{let A=R.points[(k+1)%R.points.length],P=Math.abs((O[0]-u[0])*g[0]+(O[1]-u[1])*g[1]),K=Math.abs((A[0]-u[0])*g[0]+(A[1]-u[1])*g[1]);return P<.02&&K<.02}))?a:0,h=(t.x-u[0])*g[0]+(t.z-u[1])*g[1]-$,y=Math.atan2(-g[0],g[1])*180/Math.PI,w=R=>Math.abs((t.rotation-R+540)%360-180),M=[{rotation:y,extent:t.d/2},{rotation:y+90,extent:t.w/2},{rotation:y-90,extent:t.w/2}].reduce((R,O)=>w(O.rotation)<w(R.rotation)?O:R);if(w(M.rotation)>50)continue;let F=h-M.extent;Math.abs(F)>n||l&&Math.abs(F)>=Math.abs(l.gap)||(l={x:or(t.x-g[0]*F),z:or(t.z-g[1]*F),rotation:(Math.round(M.rotation)%360+360)%360,gap:F})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var B={get(o){try{return localStorage.getItem(`neoncasa3d.${o}`)}catch{return null}},set(o,t){try{localStorage.setItem(`neoncasa3d.${o}`,t)}catch{}}},Hn=class extends G{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new At(this);constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("nc3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=B.get("explode")!=="0";let t=B.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=B.get("stats")==="1"||new URLSearchParams(location.search).has("nc3d_stats");let e=B.get("markers");this._markers=e==="none"||e==="all"?e:"important";let n=B.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let i=B.get("theme");this._theme=i&&Rn.includes(i)?i:"neon",this._furnish=!1,this._selFurniture=null,this._selDevice=null;let r=B.get("floor_stack");this._floorStack=r==="stacked"||r==="single"?r:"dim",this._roomNames=B.get("room_names")!=="0",this._trail=B.get("trail")==="1",this._weather=B.get("weather")!=="0"}t(t,e){return E(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass),t.has("hass")&&this.hass&&!Pt(this.hass.language)&&xe(this.hass.language).then(()=>this.requestUpdate());let e=this.data.building;e&&this._floorId&&!e.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:n}=t.detail;if((this.data.building?.floors.length??0)>1&&e&&this._floorId!==e){this._floorId=e,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setExplode(t){this._explode=t,B.set("explode",t?"1":"0")}setQuality(t){this._quality=t,B.set("quality",t)}editFurniture(t,e){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.furniture.find(a=>a.id===t);s&&e(s,r)}this.data.edit(i)}editDevice(t,e){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===t);s&&e(s,r)}this.data.edit(i)}moveDevice(t){let{id:e,x:n,z:i}=t.detail;this.editDevice(e,(r,s)=>{let[a,l]=On(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:l})})}turnStep(){return I(this._selDevice??"")==="camera"?15:45}turnDevice(t){this._selDevice&&this.editDevice(this._selDevice,e=>e.rotation=(((e.rotation??0)+t)%360+360)%360)}deleteDevice(){let t=this._selDevice,e=this.data.building;if(!t||!e)return;let n=structuredClone(e);for(let i of n.floors)i.placements=i.placements.filter(r=>r.entity_id!==t);this.data.edit(n),this._selDevice=null}renderDeviceFields(t){let n=this.data.building?.floors.find(d=>d.placements.some(p=>p.entity_id===t)),i=n?.placements.find(d=>d.entity_id===t);if(!n||!i)return v;let r=I(t),s=r==="light",a=r==="camera",l=i.mount==="ceiling",c=r?Rt(r,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,u=(d,p,f,g,m,b)=>_`<label class="nc3d-size" title=${d}
        >${d}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${g}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${$=>{let h=parseFloat($.target.value.replace(",","."));Number.isFinite(h)&&b(Math.min(m,Math.max(g,h)))}}
        />
      </label>`;return _`${s?_`<select class="nc3d-size-select" title=${this.t("lamp_mount")} @change=${d=>this.editDevice(t,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(d=>_`<option value=${d} ?selected=${d===(i.mount??"ceiling")}>${this.t(`lamp_${d}`)}</option>`)}
          </select>`:v}
      ${a?_`<select class="nc3d-size-select" title=${this.t("camera_mount")} @change=${d=>this.editDevice(t,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${u(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,d=>this.editDevice(t,p=>p.fov=d))}
            ${u(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,d=>this.editDevice(t,p=>p.reach=d))}
            ${u(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,d=>this.editDevice(t,p=>p.tilt=d))}`:v}
      <label class="nc3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??c)*100)/100)}
          @change=${d=>{let p=parseFloat(d.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(t,f=>f.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?_`<button class="nc3d-chip" @click=${()=>this.editDevice(t,d=>d.y=null)}>${this.t("height_auto")}</button>`:v}`}furnitureName(t){let e=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===t);return e?Dt(this.hass,e.type):""}moveFurniture(t){let{id:e,x:n,z:i}=t.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(e,(s,a)=>{let[l,c]=On(a,s.x,s.z,n,i);Object.assign(s,{x:l,z:c});let u=ir(a,s,r);u&&Object.assign(s,u)})}renderSizeFields(t){let e=this.data.building?.floors.flatMap(r=>r.furniture).find(r=>r.id===t);if(!e)return v;let n=(r,s)=>_`<label class="nc3d-size" title=${this.t(`size_${r}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(e[r]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(t,c=>c[r]=Math.round(l*1e3)/1e3)}}
    /></label>`,i=this.data.building?.floors.find(r=>r.furniture.some(s=>s.id===t));return _`${n("w",this.t("size_short_w"))}${n("d",this.t("size_short_d"))}${n("h",this.t("size_short_h"))}
    ${i&&Ro(e)?_`<label class="nc3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((e.mount_y??It(i,e))*100)/100)}
              @change=${r=>{let s=parseFloat(r.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(t,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${e.mount_y!=null?_`<button class="nc3d-chip" @click=${()=>this.editFurniture(t,r=>r.mount_y=null)}>${this.t("height_auto")}</button>`:v}`:v}`}turnFurniture(t){this._selFurniture&&this.editFurniture(this._selFurniture,e=>e.rotation=((e.rotation+t)%360+360)%360)}deleteFurniture(){let t=this._selFurniture,e=this.data.building;if(!t||!e)return;let n=structuredClone(e);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==t);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("nc3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,bo(this.hass).then(t=>this._newOffers=t.active?go(t.offers??[]).length+_o(t.updates??[]).length:0).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&!Pt(this.hass.language))return v;this.checkOffers();let t=this.data.building,e=this.data.saveState;return _`
      <div class="nc3d-app">
        <header class="nc3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonCasa 3D</h1>
          ${this.isAdmin?_`<div class="nc3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="nc3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?_`<span class="nc3d-dot" aria-label=${this.t("offers_dot")}></span>`:v}
                </button>
              </div>`:v}
          <span class="nc3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(n=>n.rooms.length)?_`<div class="nc3d-seg nc3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>_`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="nc3d-seg nc3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Rn.map(n=>_`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,B.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="nc3d-seg nc3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>_`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,B.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="nc3d-seg nc3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,B.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:v}
          ${this._mode==="editor"&&e!=="idle"?_`<span class="nc3d-save nc3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:v}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!t?_`<p class="nc3d-message">${this.t("load_error")}: ${this.data.error}</p>`:v}
        ${!t&&!this.data.error?_`<p class="nc3d-message">${this.t("loading")}</p>`:v}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(t):v}
      </div>
    `}renderNotices(){let t=this.data,e=[];if(t.needsRestart&&e.push(_`<div class="nc3d-notice nc3d-notice-warn">${t.backendVersion?this.t("needs_restart",{version:t.backendVersion}):this.t("needs_restart_old")}</div>`),t.saveState==="error"&&t.saveError&&e.push(_`<div class="nc3d-notice nc3d-notice-error">${this.t("save_failed_detail",{error:t.saveError})}</div>`),t.draft&&this.isAdmin){let n=new Date(t.draft.savedAt).toLocaleString(this.hass?.language);e.push(_`<div class="nc3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="nc3d-btn nc3d-primary" @click=${()=>t.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="nc3d-btn" @click=${()=>t.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return e.length?_`<div class="nc3d-notices">${e}</div>`:v}renderExtensions(){return this._editorReady?_`<nc3d-extensions
      class="nc3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></nc3d-extensions>`:(sn().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),_`<div class="nc3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(t){return this._editorReady?_`<nc3d-editor
      class="nc3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></nc3d-editor>`:(sn().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),_`<div class="nc3d-empty"><p>${this.t("loading")}</p></div>`)}renderView(t){if(!t.floors.length||!t.floors.some(i=>i.rooms.length))return _`<div class="nc3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?_`<button class="nc3d-btn nc3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:v}
      </div>`;let e=t.floors.find(i=>i.id===this._floorId),n=e?[e]:t.floors;return _`
      <nav class="nc3d-nav">
        ${t.floors.length>1?_`<button class="nc3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(i=>_`<button
                  class="nc3d-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="nc3d-sep"></span>`:v}
        ${n.flatMap(i=>i.rooms.map(r=>_`<button
              class="nc3d-chip nc3d-room-chip"
              aria-pressed=${r.id===this._roomId}
              @click=${()=>{t.floors.length>1&&(this._floorId=i.id),this._roomId=r.id===this._roomId?null:r.id}}
            >
              ${r.name}
            </button>`))}
      </nav>
      <div class="nc3d-stage-wrap ${this._roomId?"nc3d-room-open":""}">
        <nc3d-view3d
          class="nc3d-body"
          .hass=${this.hass}
          .building=${t}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${t.floors.length>1?this._floorId:t.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${i=>this._selFurniture=i.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${i=>this._selDevice=i.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></nc3d-view3d>
        ${this._roomId?_`<nc3d-room-panel
              class="nc3d-room-panel"
              @camera-look=${i=>this.view3d()?.lookThrough(i.detail.entity)}
              .hass=${this.hass}
              .room=${t.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null}
              .floor=${t.floors.find(i=>i.rooms.some(r=>r.id===this._roomId))??null}
              .confirmEntities=${Tt(this.hass,t.floors)}
              @close=${()=>this._roomId=null}
            ></nc3d-room-panel>`:v}
        <div class="nc3d-overlay">
          <div class="nc3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?_`<div class="nc3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:v}
          ${t.floors.length>1&&this._floorId?_`<div class="nc3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(i=>_`<button
                      aria-pressed=${this._floorStack===i}
                      @click=${()=>{this._floorStack=i,B.set("floor_stack",i)}}
                    >
                      ${this.t(`floor_stack_short_${i}`)}
                    </button>`)}
              </div>`:v}
          <div class="nc3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(i=>_`<button
                  aria-pressed=${this._heat===i}
                  @click=${()=>{this._heat=i,B.set("heat",i)}}
                >
                  ${this.t(i==="none"?"heat_off":`heat_short_${i}`)}
                </button>`)}
          </div>
          <button
            class="nc3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,B.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="nc3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,B.set("trail",this._trail?"1":"0")}}
          >
            ${U("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="nc3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,B.set("weather",this._weather?"1":"0")}}
          >
            ${U("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&t.floors.length>1?_`<button class="nc3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:v}
        </div>
        ${this._furnish?_`<div class="nc3d-furnish-bar">
              ${this._selFurniture?_`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="nc3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="nc3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?_`<span>${L(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="nc3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="nc3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="nc3d-chip nc3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:_`<span>${this.t("furnish_hint")}</span>`}
              <button class="nc3d-chip nc3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:v}
      </div>
    `}static styles=[rt,ft,Z`
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
    `]};customElements.get("neoncasa3d-panel")||customElements.define("neoncasa3d-panel",Hn);function He(o,t,e=new Date){if(!o||o==="off")return!1;if(o==="sun")return t?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=e.getHours()*60+e.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var rr;function sr(){let o=new URL("./neoncasa3d-card-editor.js?v=6271614cbf7a",new URL(import.meta.url)).href;return rr??=import(o),rr}var Dn=class extends G{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_night:{state:!0},_orbit:{state:!0}};idleTimer;nightTimer;data=new At(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle()};armIdle(){clearTimeout(this.idleTimer);let t=this._config?.idle_return??0;t>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),t*1e3))}view3d(){return this.shadowRoot?.querySelector("nc3d-view3d")}returnHome(){this._roomId=null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=He(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await sr(),document.createElement("neoncasa3d-card-editor")}static getStubConfig(){return{type:"custom:neoncasa3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=He(t.night,this.hass),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){if(t.has("hass")&&this.hass){this.data.setHass(this.hass),Pt(this.hass.language)||xe(this.hass.language).then(()=>this.requestUpdate());let e=He(this._config?.night,this.hass);e!==this._night&&(this._night=e)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!Pt(this.hass.language))return v;let t=this.data.building,e=this._config?.height??420,n=this._config,i=this._floorId===void 0?n?.floor??null:this._floorId,r=t&&t.floors.length===1?t.floors[0].id:t?.floors.some(m=>m.id===i)?i:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(t?.floors.length??0)>1,a=m=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(m),l=["temperature","humidity","co2"].filter(m=>a(m)),c=this._walls??n?.walls??"auto",u=this._heat??n?.heatmap??"none",d=this._explode??n?.explode??!0,p=this._fullscreen?"100vh":n?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${e}px`,f=!!t&&(s||!!n?.controls&&!(this._roomId&&n.room_panel!==!1)),g=m=>E(this.hass,m);return _`<ha-card class=${this._night?"nc3d-night":""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="nc3d-card-body" style="height:${p}">
        ${t&&t.floors.some(m=>m.rooms.length)?_`<nc3d-view3d
              .hass=${this.hass}
              .building=${t}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${d}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${u}
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
              @room-tap=${m=>{if(this.canSwitch&&(t?.floors.length??0)>1&&m.detail.floorId&&r!==m.detail.floorId){this._floorId=m.detail.floorId,this._roomId=null;return}m.detail.roomId&&(this._roomId=m.detail.roomId===this._roomId?null:m.detail.roomId)}}
              @floor-tap=${m=>{this._floorId=m.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></nc3d-view3d>`:_`<p class="nc3d-card-msg">${this.data.error??(t?E(this.hass,"no_building"):E(this.hass,"loading"))}</p>`}
        ${this._roomId&&t&&this._config?.room_panel!==!1?_`<nc3d-room-panel
              @camera-look=${m=>this.view3d()?.lookThrough(m.detail.entity)}
              class="nc3d-card-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(m=>m.rooms).find(m=>m.id===this._roomId)??null}
              .floor=${t.floors.find(m=>m.rooms.some(b=>b.id===this._roomId))??null}
              .confirmEntities=${Tt(this.hass,t.floors)}
              @close=${()=>this._roomId=null}
            ></nc3d-room-panel>`:v}
        ${f&&t?_`<div class="nc3d-card-controls">
              ${s?_`<button class="nc3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:v}
              ${a("walls")?_`<div class="nc3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${g("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${g("walls_cut")}</button>
                  </div>`:v}
              ${a("floors")&&t.floors.length>1&&!r?_`<div class="nc3d-seg">
                    <button aria-pressed=${d} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!d} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:v}
              ${l.length?_`<div class="nc3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...l].map(m=>_`<button aria-pressed=${u===m} @click=${()=>this._heat=m}>
                          ${g(m==="none"?"heat_off":`heat_short_${m}`)}
                        </button>`)}
                  </div>`:v}
            </div>`:v}
        ${n?.fullscreen_button&&!(this._roomId&&n.room_panel!==!1)?_`<button class="nc3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:v}
      </div>
    </ha-card>`}static styles=[rt,ft,Z`
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
    `]};if(!customElements.get("neoncasa3d-card")){customElements.define("neoncasa3d-card",Dn);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neoncasa3d-card",name:E(void 0,"card_name"),description:E(void 0,"card_description"),preview:!1})}qn();
