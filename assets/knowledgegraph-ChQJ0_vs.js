import{ah as x,_ as G,aj as j,a$ as J,b0 as Q,b1 as V,b8 as I,ag as K,eh as P,ej as M,ek as U}from"./index-CvP2eicz.js";import{a as T,b as u,r as p,x as B,d as W,G as y,a9 as C,v as L,N as k,U as _,q as O,E as q,X as E,k as X,t as Y,aa as z,ab as A,ac as H}from"./arcadeUtils-DJl9P9Us.js";import{l as Z}from"./portalUtils-CjnS69fu.js";import{p as $,n as tt}from"./project-BsvICmhw.js";import{a as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-C04Jhm0r.js";import"./TimeOnly-C3E0F8I-.js";import"./ImmutableArray-BlMso3qf.js";import"./number-D1JCo06P.js";import"./featureConversionUtils-C41mmn72.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";let c=null;async function ot(t){const n=j.geometryServiceUrl??"";if(!n){J()||await Q();for(const e of t)e.container[e.indexer]=V(e.container[e.indexer],I.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new $({geometries:r,outSpatialReference:I.WGS84}),s=await tt(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function D(t,n){const r=new K({portal:t,id:n});return await r.load(),c===null&&(c=await G(()=>import("./knowledgeGraphService-DdlHI3zV.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]),import.meta.url)),await c.fetchKnowledgeGraph(r.url)}function v(t,n,r,i,s){if(t===null)return null;if(y(t)||q(t))return t;if(E(t)||E(t))return t.toJSDate();if(X(t))return t.toStorageFormat();if(Y(t))return t.toStorageString();if(z(t)){const e={};for(const a of t.keys())e[a]=v(t.field(a),n,r,i,s),e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(_(t)){const e=t.map(a=>v(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof P&&s.push({container:e,indexer:a});return e}if(A(t)){if(t.spatialReference.isWGS84)return t;if(t.spatialReference.isWebMercator&&n)return M(t);if(!n||!r)return t;throw new u(i,p.WrongSpatialReference,null)}}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return U(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,p.WrongSpatialReference,null)}function S(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:_(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:S(t.properties,n)}:t instanceof rt?{graphType:"object",properties:S(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:S(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:A(t)?st(t,n):y(t)||q(t)||H(t)?t:null}function Rt(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var m,d;if(T(e,2,2,n,r),e[0]===null)throw new u(n,p.PortalRequired,r);if(e[0]instanceof B){const f=W(e[1]);let h=null;return h=(m=n.services)!=null&&m.portal?n.services.portal:x.getDefault(),D(Z(e[0],h),f)}if(y(e[0])===!1)throw new u(n,p.InvalidParameter,r);const a=W(e[0]);return D(((d=n.services)==null?void 0:d.portal)??x.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var b;T(e,2,4,n,r);const a=e[0];if(!C(a))throw new u(n,p.InvalidParameter,r);const m=e[1];if(!y(m))throw new u(n,p.InvalidParameter,r);c===null&&(c=await G(()=>import("./knowledgeGraphService-DdlHI3zV.js").then(o=>o.k),__vite__mapDeps([0,1,2,3]),import.meta.url));let d=null;const f=L(e[2],null);if(!(f instanceof k||f===null))throw new u(n,p.InvalidParameter,r);if(f){let o=[];d=v(f,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:m,bindParameters:d});(((b=a==null?void 0:a.serviceDefinition)==null?void 0:b.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const F=(await c.executeQueryStreaming(a,h)).resultRowsStream.getReader(),R=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(_(l))for(const w of l)R.push(g(w,n));else{const w=[];for(const N of l)w.push(g(l[N],n));R.push(w)}}}catch(o){throw o}return k.convertJsonToArcade(R,O(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{Rt as registerFunctions};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./knowledgeGraphService-DdlHI3zV.js","./index-CvP2eicz.js","./index-D_cCBC5R.css","./GraphQueryStreaming-C04Jhm0r.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
