var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,l=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&o(e,r,t[r]);return e},n=(e,s)=>t(e,r(s));import{gS as p,hv as y,gT as c,gU as u,e8 as h,e9 as d,ea as m,eb as g,h5 as b,hw as f,ao as v,ef as x,G as S,cO as w,hN as O,J as j,Q as I,V as P,cn as E,da as M,h7 as N,ar as J,as as L,d$ as R,c6 as U,gp as F,ee as q,at as T}from"./vendor.6e209a4d.js";import{r as A}from"./scaleUtils.6fe0c268.js";import{f as V,y as D,Q as $}from"./SublayersOwner.7b648a27.js";import{n as k}from"./ExportImageParameters.7690a489.js";import{e as G}from"./sublayerUtils.70a0c1f5.js";import"./Version.6ad91437.js";let H=class extends(p(y(c(u(V(D(h(d(m(g(b(f(v(x)))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?l({url:e},t):e}load(e){const t=S(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(w).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let i=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=O(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;i=G(a,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");i=G(a,e.sublayers,O(e.origin))}}const o=[],n=l({writeSublayerStructure:i},s);let p=i;a.forEach((e=>{const t=e.write({},n);o.push(t),p=p||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),p&&(t.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const a=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const i=new k({layer:this,scale:A({extent:e,width:t})*a}),o=i.toJSON();i.destroy();const n=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},p=e&&e.spatialReference,y=p.wkid||JSON.stringify(p.toJSON());o.dpi*=a;const c={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();c.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return l(l(l({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r},o),n),c)}async fetchImage(e,t,r,s){var a,i;const o={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:n(l(n(l(l({},this.parsedUrl.query),this.createExportImageParameters(e,t,r,s)),{f:"image",_ts:this.alwaysRefetch?Date.now():null!=(i=null==s?void 0:s.timestamp)?i:null}),this.customParameters),{token:this.apiKey})},p=this.parsedUrl.path+"/export";return null==o.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?I(p,o).then((e=>e.data)).catch((e=>{if(P(e))throw e;throw new j("mapimagelayer:image-fetch-error",`Unable to load image: ${p}`,{error:e})})):Promise.reject(new j("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:o.query}))}async fetchRecomputedExtents(e={}){const t=n(l({},e),{query:{returnUpdates:!0,f:"json"}}),{data:r}=await I(this.url,t),{extent:s,fullExtent:a,timeExtent:i}=r,o=s||a;return{fullExtent:o&&E.fromJSON(o),timeExtent:i&&M.fromJSON({start:i[0],end:i[1]})}}loadAll(){return N(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await I(this.parsedUrl.path,{query:n(l(l({f:"json"},this.parsedUrl.query),this.customParameters),{token:this.apiKey}),signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};J([L()],H.prototype,"alwaysRefetch",void 0),J([L()],H.prototype,"dpi",void 0),J([L()],H.prototype,"gdbVersion",void 0),J([L()],H.prototype,"imageFormat",void 0),J([R("imageFormat",["supportedImageFormatTypes"])],H.prototype,"readImageFormat",null),J([L({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],H.prototype,"imageMaxHeight",void 0),J([L({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],H.prototype,"imageMaxWidth",void 0),J([L()],H.prototype,"imageTransparency",void 0),J([L({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],H.prototype,"isReference",void 0),J([L({json:{read:!1,write:!1}})],H.prototype,"labelsVisible",void 0),J([L({type:["ArcGISMapServiceLayer"]})],H.prototype,"operationalLayerType",void 0),J([L({json:{read:!1,write:!1}})],H.prototype,"popupEnabled",void 0),J([L()],H.prototype,"sourceJSON",void 0),J([L({json:{write:{ignoreOrigin:!0}}})],H.prototype,"sublayers",void 0),J([U("sublayers",{layers:{type:[$]},visibleLayers:{type:[F]}})],H.prototype,"writeSublayers",null),J([L({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),J([L({json:{read:!1},readOnly:!0,value:"map-image"})],H.prototype,"type",void 0),J([L(q)],H.prototype,"url",void 0),H=J([T("esri.layers.MapImageLayer")],H);var W=H;export{W as default};