var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(i)for(var t of i(r))a.call(r,t)&&o(e,t,r[t]);return e};import{ar as l,as as p,h as u,d$ as c,cR as y,bn as d,j as f,at as m,c_ as B,dq as b,bm as v,G as h,dN as g,e0 as P,Q as O,e1 as j}from"./vendor.6e209a4d.js";import{c as R,i as S,u as N,d as A,a as k,p as C,o as w}from"./networkService.3d258c5a.js";import"./GPMessage.d9eb5ff2.js";function F(e){return b.fromJSON(e).features.map((e=>e.geometry))}let J=class extends B{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return F(e)}readIncidents(e){return F(e)}readPointBarriers(e,r){return F(r.barriers)}readPolylineBarriers(e){return F(e)}readPolygonBarriers(e){return F(e)}readRoutes(e){return(r=e).features.map((e=>{const t=v.fromJSON(r.spatialReference),i=f.fromJSON(e);return h(i.geometry)&&(i.geometry.spatialReference=t),i}));var r}};l([p({type:[R]})],J.prototype,"directions",void 0),l([p({type:[u]})],J.prototype,"facilities",void 0),l([c("facilities")],J.prototype,"readFacilities",null),l([p({type:[u]})],J.prototype,"incidents",void 0),l([c("incidents")],J.prototype,"readIncidents",null),l([p({type:[S]})],J.prototype,"messages",void 0),l([p({type:[u]})],J.prototype,"pointBarriers",void 0),l([c("pointBarriers",["barriers"])],J.prototype,"readPointBarriers",null),l([p({type:[y]})],J.prototype,"polylineBarriers",void 0),l([c("polylineBarriers")],J.prototype,"readPolylineBarriers",null),l([p({type:[d]})],J.prototype,"polygonBarriers",void 0),l([c("polygonBarriers")],J.prototype,"readPolygonBarriers",null),l([p({type:[f]})],J.prototype,"routes",void 0),l([c("routes")],J.prototype,"readRoutes",null),J=l([m("esri.rest.support.ClosestFacilitySolveResult")],J);var q=J;const x=w({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let I=class extends j{constructor(e){super(e),this.url=null}solve(e,i){return async function(e,i,s){const a=[],o=[],l={},p={},u=g(e);return i.incidents&&i.incidents.features&&N(i.incidents.features,o,"incidents.features",l),i.facilities&&i.facilities.features&&N(i.facilities.features,o,"facilities.features",l),i.pointBarriers&&i.pointBarriers.features&&N(i.pointBarriers.features,o,"pointBarriers.features",l),i.polylineBarriers&&i.polylineBarriers.features&&N(i.polylineBarriers.features,o,"polylineBarriers.features",l),i.polygonBarriers&&i.polygonBarriers.features&&N(i.polygonBarriers.features,o,"polygonBarriers.features",l),P(o).then((e=>{for(const r in l){const t=l[r];a.push(r),p[r]=e.slice(t[0],t[1])}return A(p,a)?k(u.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||C(p,a);for(const r in p)p[r].forEach(((e,t)=>{i.get(r)[t].geometry=e}));let o={query:n((l=n({},u.query),c={f:"json"},r(l,t(c))),x.toQueryParams(i))};var l,c;return s&&(o=n(n({},s),o)),O(`${u.path}/solveClosestFacility`,o)})).then((e=>q.fromJSON(e.data)))}(this.url,e,i)}};l([p()],I.prototype,"url",void 0),I=l([m("esri.tasks.ClosestFacilityTask")],I);var T=I;export{T as default};
