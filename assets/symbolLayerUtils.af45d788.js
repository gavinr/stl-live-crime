import{aD as e,dS as r,J as t,Q as n,G as o}from"./vendor.6e209a4d.js";import{u as i,F as s,a as u}from"./aaBoundingBox.45e1d856.js";const c=i(-.5,-.5,-.5,.5,.5,.5),a=i(-.5,-.5,0,.5,.5,1),l=i(-.5,-.5,0,.5,.5,.5);let f=y();function y(){return new r(50)}function m(){f=y()}function d(e,r){if("icon"===e.type)return p(e,r);if("object"===e.type)return b(e,r);throw new t("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function h(r,n){if("icon"===r.type)return function(e,r){return p(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(r,n);if("object"===r.type)return async function(r,t){return function(r,{isPrimitive:t,width:n,depth:o,height:i}){const s=t?10:1;if(null==n&&null==i&&null==o)return[s*r[0],s*r[1],s*r[2]];const u=e(n,o,i);let c;for(let e=0;e<3;e++){const t=u[e];if(null!=t){c=t/r[e];break}}for(let e=0;e<3;e++)null==u[e]&&(u[e]=r[e]*c);return u}(await b(r,t),r)}(r,n);throw new t("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,r){if(e.resource.href)return(i=e.resource.href,n(i,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var i;if(e.resource.primitive)return o(r)?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(e,r){return async function(e,r){if(!e.isPrimitive){const r=e.resource.href,t=f.get(r);if(void 0!==t)return Promise.resolve(t);const n=await import("./objectResourceUtils.9fe0db26.js").then((function(e){return e.o})),o=await n.fetch(r,{disableTextures:!0});return f.put(r,o.referenceBoundingBox),o.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=u(function(e){switch(e){case"sphere":case"cube":case"diamond":return c;case"cylinder":case"cone":case"inverted-cone":return a;case"tetrahedron":return l;default:return}}(e.resource.primitive)),o(r)))for(let t=0;t<n.length;t++)n[t]*=r;return n?Promise.resolve(n):Promise.reject(new t("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>s(e)))}export{m as clearBoundingBoxCache,p as computeIconLayerResourceSize,d as computeLayerResourceSize,h as computeLayerSize,b as computeObjectLayerResourceSize};
