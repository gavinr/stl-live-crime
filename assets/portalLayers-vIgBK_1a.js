import{ag as h,s as b,bp as d,bs as L}from"./index-CvP2eicz.js";import{s as N}from"./associatedFeatureServiceUtils-Cik1TLEH.js";import{t as v,a as M}from"./lazyLayerLoader-CpyO0XuA.js";class P{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(t,a){const r=this._serviceMetadatas.get(t);if(r)return r;const s=await v(t,a);return this._serviceMetadatas.set(t,s),s}async fetchItemData(t){const{id:a}=t;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await t.fetchData();return r.set(a,s),s}async fetchCustomParameters(t,a){const r=await this.fetchItemData(t);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function m(e){const t={id:e.id,name:e.name};return e.type==="Oriented Imagery Layer"&&(t.layerType="OrientedImageryLayer"),t}async function T(e,t,a){var r,s,c;if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const i=await a.fetchServiceMetadata(t,{customParameters:(r=f(e))==null?void 0:r.customParameters});(e=e||{}).layers=e.layers||((s=i==null?void 0:i.layers)==null?void 0:s.map(m)),e.tables=e.tables||((c=i==null?void 0:i.tables)==null?void 0:c.map(m))}return e}function C(e){const{layers:t,tables:a}=e;return t!=null&&t.length?t[0].id:a!=null&&a.length?a[0].id:null}function f(e){if(!e)return null;const{layers:t,tables:a}=e;return t!=null&&t.length?t[0]:a!=null&&a.length?a[0]:null}function S(e){var t,a;return(((t=e==null?void 0:e.layers)==null?void 0:t.length)??0)+(((a=e==null?void 0:e.tables)==null?void 0:a.length)??0)}function O(e){var a;const t=[];return(a=e==null?void 0:e.layers)==null||a.forEach(r=>{r.layerType==="SubtypeGroupLayer"&&t.push(r.id)}),t}function D(e){var t;return(t=e==null?void 0:e.layers)==null?void 0:t.filter(({layerType:a})=>a==="OrientedImageryLayer").map(({id:a})=>a)}function G(e){var t;return(t=e==null?void 0:e.layers)==null?void 0:t.filter(({layerType:a})=>a==="CatalogLayer").map(({id:a})=>a)}async function F(e,t,a){var c,i,l,u;if(!(e!=null&&e.url))return t??{};if(t??(t={}),!t.layers){const n=await a.fetchServiceMetadata(e.url);t.layers=(c=n.layers)==null?void 0:c.map(m)}const{serverUrl:r,portalItem:s}=await N(e.url,{sceneLayerItem:e,customParameters:(i=f(t))==null?void 0:i.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return t.tables=[],t;if(!t.tables&&s){const n=await s.fetchData();if(n!=null&&n.tables)t.tables=n.tables.map(m);else{const o=await a.fetchServiceMetadata(r,{customParameters:(l=f(n))==null?void 0:l.customParameters});t.tables=(u=o==null?void 0:o.tables)==null?void 0:u.map(m)}}if(t.tables)for(const n of t.tables)n.url=`${r}/${n.id}`;return t}async function _(e){!e.portalItem||e.portalItem instanceof h||(e={...e,portalItem:new h(e.portalItem)});const t=await $(e.portalItem);return new t.constructor({portalItem:e.portalItem,...t.properties})}async function $(e){await e.load();const t=new P;return j(await I(e,t))}async function I(e,t){switch(e.type){case"3DTiles Service":return E();case"CSV":return R();case"Feature Collection":return K(e);case"Feature Service":return W(e,t);case"Feed":return Q();case"GeoJson":return A();case"Group Layer":return X();case"Image Service":return U(e,t);case"KML":return z();case"Map Service":return V(e,t);case"Media Layer":return Y();case"Scene Service":return J(e,t);case"Stream Service":return k();case"Vector Tile Service":return x();case"WFS":return q();case"WMS":return B();case"WMTS":return H();default:throw new b("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function j(e){const t=e.className,a=M[t];return{constructor:await a(),properties:e.properties}}async function V(e,t){return await Z(e,t)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function W(e,t){const a=await g(e,t);if(typeof a=="object"){const{sourceJSON:r,className:s}=a,c={sourceJSON:r};return a.id!=null&&(c.layerId=a.id),{className:s||"FeatureLayer",properties:c}}return{className:"GroupLayer"}}async function J(e,t){var r;const a=await g(e,t,async()=>{try{if(!e.url)return[];const{serverUrl:s}=await N(e.url,{sceneLayerItem:e}),c=await t.fetchServiceMetadata(s);return(c==null?void 0:c.tables)??[]}catch{return[]}});if(typeof a=="object"){const s={};let c;if(a.id!=null?(s.layerId=a.id,c=`${e.url}/layers/${a.id}`):c=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const l of Object.keys(d))if(e.typeKeywords.includes(l))return{className:d[l]}}const i=await t.fetchServiceMetadata(c,{customParameters:await t.fetchCustomParameters(e,l=>{var u;return(u=f(l))==null?void 0:u.customParameters})});return{className:d[i==null?void 0:i.layerType]||"SceneLayer",properties:s}}if(a===!1){const s=await t.fetchServiceMetadata(e.url);if((s==null?void 0:s.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function K(e){await e.load();const t=L(e,"Map Notes"),a=L(e,"Markup");if(t||a)return{className:"MapNotesLayer"};if(L(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return S(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function U(e,t){var u,n,o;await e.load();const a=((u=e.typeKeywords)==null?void 0:u.map(y=>y.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await t.fetchItemData(e),s=r==null?void 0:r.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const c=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)}),i=(n=c.cacheType)==null?void 0:n.toLowerCase(),l=(o=c.capabilities)==null?void 0:o.toLowerCase().includes("tilesonly");return i==="map"||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function k(){return{className:"StreamLayer"}}function x(){return{className:"VectorTileLayer"}}function A(){return{className:"GeoJSONLayer"}}function E(){return{className:"IntegratedMesh3DTilesLayer"}}function R(){return{className:"CSVLayer"}}function z(){return{className:"KMLLayer"}}function q(){return{className:"WFSLayer"}}function B(){return{className:"WMSLayer"}}function H(){return{className:"WMTSLayer"}}function Q(){return{className:"StreamLayer"}}function X(){return{className:"GroupLayer"}}function Y(){return{className:"MediaLayer"}}async function Z(e,t){const{tileInfo:a}=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)});return a}async function g(e,t,a){const{url:r,type:s}=e,c=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(c){const u=await t.fetchServiceMetadata(r,{customParameters:await t.fetchCustomParameters(e,n=>{var o;return(o=f(n))==null?void 0:o.customParameters})});if(u.type==="Oriented Imagery Layer")return{id:u.id,className:"OrientedImageryLayer",sourceJSON:u}}return{}}await e.load();let i=await t.fetchItemData(e);if(c){const u=await T(i,r,t),n=w(u);if(typeof n=="object"){const o=O(u),y=D(u),p=G(u);n.className=n.id!=null&&o.includes(n.id)?"SubtypeGroupLayer":n.id!=null&&(y!=null&&y.includes(n.id))?"OrientedImageryLayer":n.id!=null&&(p!=null&&p.includes(n.id))?"CatalogLayer":"FeatureLayer"}return n}if(s==="Scene Service"&&(i=await F(e,i,t)),S(i)>0)return w(i);const l=await t.fetchServiceMetadata(r);return a&&(l.tables=await a()),w(l)}function w(e){return S(e)===1&&{id:C(e)}}const re=Object.freeze(Object.defineProperty({__proto__:null,fromItem:_,selectLayerClassPath:I},Symbol.toStringTag,{value:"Module"}));export{T as a,F as c,P as e,G as i,f as l,O as n,re as p,C as r,S as s,m as t,D as u,I as w};
