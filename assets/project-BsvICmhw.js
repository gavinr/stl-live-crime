import{n as s,y as n,o as l,bR as h,dE as i,cy as f,f1 as y,as as S,bP as g,U as R,f2 as w}from"./index-CvP2eicz.js";let o=class extends h{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=i(this.outSpatialReference),r.inSR=i(t.spatialReference),r.geometries=JSON.stringify({geometryType:f(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([n()],o.prototype,"geometries",void 0),s([n({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([n()],o.prototype,"transformation",void 0),s([n()],o.prototype,"transformForward",void 0),o=s([l("esri.rest.support.ProjectParameters")],o);const j=o,F=y(j);async function N(e,t,r){t=F(t);const a=S(e),p={...a.query,f:"json",...t.toJSON()},c=t.outSpatialReference,m=f(t.geometries[0]),u=g(p,r);return R(a.path+"/project",u).then(({data:{geometries:d}})=>w(d,m,c))}export{N as n,j as p};
