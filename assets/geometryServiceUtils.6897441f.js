import{Z as e,J as r,cG as t}from"./vendor.6e209a4d.js";import{a as o}from"./ProjectParameters.928b7e9f.js";async function i(o=null,i){if(e.geometryServiceUrl)return new((await import("./GeometryService.c2ef128f.js")).default)({url:e.geometryServiceUrl});if(!o)throw new r("internal:geometry-service-url-not-configured");let a;if(a="portal"in o?o.portal||t.getDefault():o,await a.load({signal:i}),a.helperServices&&a.helperServices.geometry&&a.helperServices.geometry.url)return new((await import("./GeometryService.c2ef128f.js")).default)({url:a.helperServices.geometry.url});throw new r("internal:geometry-service-url-not-configured")}async function a(e,t,a=null,n){const l=await i(a,n),c=new o;c.geometries=[e],c.outSpatialReference=t;const s=await l.project(c,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new r("internal:geometry-service-projection-failed")}export{i as create,a as projectGeometry};