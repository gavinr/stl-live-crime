var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,l=(e,l)=>{for(var i in l||(l={}))r.call(l,i)&&a(e,i,l[i]);if(t)for(var i of t(l))o.call(l,i)&&a(e,i,l[i]);return e};import{em as i,as as n,at as s,au as y,hp as p,hm as u,ho as d,i7 as m,gT as c,gU as f,eA as b,eB as g,eC as S,eH as h,bn as O,cD as w,W as N,bA as v,co as J,j as L,G as T,K as C,H as x,cL as I,cF as M,h6 as j,et as R,c7 as D,l as E,bF as P,hT as _,dY as F,d_ as G,d$ as A}from"./vendor.0f6f771b.js";import{n as B}from"./objectIdUtils.93cb8a1b.js";function W(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const z=new i({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),$=new i({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let k=class extends E{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};n([s({readOnly:!0})],k.prototype,"sublayers",null),n([s()],k.prototype,"layer",void 0),n([s({readOnly:!0})],k.prototype,"visibilityMode",void 0),k=n([y("esri.layers.MapNotesLayer.MapNotesSublayer")],k);const H=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new p).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new u).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new d).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new d).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new m).toJSON()}];let U=class extends(c(f(b(g(S(h)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=O.WGS84,this.sublayers=new w(H.map((e=>new k({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!W(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!W(t))return null;const o=t.layers.map((e=>{const t=new N;return t.read(e,r),t}));return new w({items:o})}readLegacyfeatureCollectionJSON(e,t){return W(t)?v(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new J({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:O.WGS84});const r=O.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?J.fromJSON(r).union(e):e}),new J({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?O.fromJSON(t.layers[0].layerDefinition.spatialReference):O.WGS84}readSublayers(e,t,r){if(W(t))return null;const o=[];for(let l=0;l<t.layers.length;l++){var a;const{layerDefinition:e,featureSet:r}=t.layers[l],i=null!=(a=e.geometryType)?a:r.geometryType,n=H.find((t=>{var r,o,a;return i===t.geometryTypeJSON&&(null==(r=e.drawingInfo)||null==(o=r.renderer)||null==(a=o.symbol)?void 0:a.type)===t.identifyingSymbol.type}));if(n){const t=new k({id:n.layerId,title:e.name,layer:this,graphics:r.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>L.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(t)}}return new w(o)}writeSublayers(e,t,r,o){const{minScale:a,maxScale:l}=this;if(T(e))return;const i=e.some((e=>e.graphics.length>0));var n;if(!this.capabilities.operations.supportsMapNotesEditing)return void(i&&(null==o||null==(n=o.messages)||n.push(new C("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const s=[];let y=this.spatialReference.toJSON();e:for(const p of e)for(const e of p.graphics)if(x(e.geometry)){y=e.geometry.spatialReference.toJSON();break e}for(const p of H){const t=e.find((e=>p.layerId===e.id));this._writeMapNoteSublayer(s,t,p,a,l,y,o)}I("featureCollection.layers",s,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=v(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(T(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(x(r.geometry)){const o=r.geometry;e?P(o.spatialReference,e)||(_(o.spatialReference,e)||F()||await G(),r.geometry=A(o,e)):e=o.spatialReference,t.push(r)}const r=await M(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return T(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,o,a,l,i){const n=[];if(!T(t)){for(const e of t.graphics)this._writeMapNote(n,e,r.geometryType,i);this._normalizeObjectIds(n,z),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:v(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[z.toJSON(),$.toJSON()],spatialReference:l},featureSet:{features:n,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if(T(t))return;const{geometry:a,symbol:i,popupTemplate:n}=t;if(T(a))return;var s,y;if(a.type!==r)return void(null==o||null==(s=o.messages)||s.push(new j("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(T(i))return void(null==o||null==(y=o.messages)||y.push(new j("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:l({},t.attributes),geometry:a.toJSON(),symbol:i.toJSON()};x(n)&&(p.popupInfo=n.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let o=B(r,e)+1;const a=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||a.has(e[r]))&&(e[r]=o++),a.add(e[r])}}};n([s({readOnly:!0})],U.prototype,"capabilities",void 0),n([R(["portal-item","web-map"],"capabilities",["layers"])],U.prototype,"readCapabilities",null),n([s({readOnly:!0})],U.prototype,"featureCollections",void 0),n([R(["web-map","portal-item"],"featureCollections",["layers"])],U.prototype,"readFeatureCollections",null),n([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],U.prototype,"featureCollectionJSON",void 0),n([R(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],U.prototype,"readLegacyfeatureCollectionJSON",null),n([s({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],U.prototype,"featureCollectionType",void 0),n([s({json:{write:!1}})],U.prototype,"fullExtent",void 0),n([R(["web-map","portal-item"],"fullExtent",["layers"])],U.prototype,"readFullExtent",null),n([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],U.prototype,"legendEnabled",void 0),n([s({type:["show","hide"]})],U.prototype,"listMode",void 0),n([s({type:Number,nonNullable:!0,json:{write:!1}})],U.prototype,"minScale",void 0),n([R(["web-map","portal-item"],"minScale",["layers"])],U.prototype,"readMinScale",null),n([s({type:Number,nonNullable:!0,json:{write:!1}})],U.prototype,"maxScale",void 0),n([R(["web-map","portal-item"],"maxScale",["layers"])],U.prototype,"readMaxScale",null),n([s({readOnly:!0})],U.prototype,"multipointLayer",null),n([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],U.prototype,"operationalLayerType",void 0),n([s({readOnly:!0})],U.prototype,"pointLayer",null),n([s({readOnly:!0})],U.prototype,"polygonLayer",null),n([s({readOnly:!0})],U.prototype,"polylineLayer",null),n([s({type:O})],U.prototype,"spatialReference",void 0),n([R(["web-map","portal-item"],"spatialReference",["layers"])],U.prototype,"readSpatialReference",null),n([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],U.prototype,"sublayers",void 0),n([R("web-map","sublayers",["layers"])],U.prototype,"readSublayers",null),n([D("web-map","sublayers")],U.prototype,"writeSublayers",null),n([s({readOnly:!0})],U.prototype,"textLayer",null),n([s()],U.prototype,"title",void 0),n([s({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),U=n([y("esri.layers.MapNotesLayer")],U);var K=U;export{K as default};
