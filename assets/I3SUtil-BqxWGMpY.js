import{b8 as h,h2 as T,a5 as E,U as R,hX as U,hY as g}from"./index-CvP2eicz.js";import"./mat4f64-CSKppSlJ.js";import"./computeTranslationToOriginAndRotation-BHdCR7g4.js";import"./sphere-C7N5t2pE.js";import{I as O}from"./I3SBinaryReader-Bh9GHYXm.js";import"./symbolColorUtils-Rra1klt8.js";import{O as P}from"./orientedBoundingBox-Cz_d8G-e.js";function d(n,e,t,i){return{x:n,y:e,z:t,hasZ:t!=null,hasM:!1,spatialReference:i,type:"point"}}d(0,0,0,h.WGS84);var a;(function(n){n[n.INVISIBLE=0]="INVISIBLE",n[n.TRANSPARENT=1]="TRANSPARENT",n[n.OPAQUE=2]="OPAQUE"})(a||(a={}));function C(n){return{...D,...n,type:"solid"}}const D={color:T(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.OPAQUE,hasSlicePlane:!1};T(0,0,0,.2),a.OPAQUE;E();var S;async function V(n,e,t,i,p,N,m,c){const u=[];for(const o of e)if(o&&p.includes(o.name)){const r=`${n}/nodes/${t}/attributes/${o.key}/0`;u.push({url:r,storageInfo:o})}const f=await Promise.allSettled(u.map(o=>R(o.url,{responseType:"array-buffer",query:{...m,token:N},signal:c==null?void 0:c.signal}).then(r=>O(o.storageInfo,r.data)))),l=[];for(const o of i){const r={};for(let s=0;s<f.length;s++){const I=f[s];if(I.status==="fulfilled"){const y=I.value;r[u[s].storageInfo.name]=b(y,o)}}l.push(r)}return l}(function(n){n[n.OUTSIDE=0]="OUTSIDE",n[n.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",n[n.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",n[n.INSIDE=3]="INSIDE"})(S||(S={}));const _=-32768,$=-(2**31);function b(n,e){if(!n)return null;const t=n[e];return U(n)?t===_?null:t:g(n)?t===$?null:t:t!=t?null:t}C({color:[0,0,0,0],opacity:0});E();E();new P;new Array(72);export{V as $};
