import{bZ as n}from"./vendor.0f6f771b.js";function t(t,f,i){var u;const c=t.byteLength/(4*f),s=new Uint32Array(t,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i?void 0:i.minReduction)?u:0,d=(null==i?void 0:i.originalIndices)||null,g=d?d.length:0,y=(null==i?void 0:i.componentOffsets)||null;let b=0;if(y)for(let n=0;n<y.length-1;n++){const t=y[n+1]-y[n];t>b&&(b=t)}else b=c;const w=Math.floor(1.1*b)+1;(null==o||o.length<2*w)&&(o=new Uint32Array(n(2*w)));for(let n=0;n<2*w;n++)o[n]=0;let A=0;const U=!!y&&!!d,v=U?g:c,m=U?new Uint32Array(g):null,p=1.96;let M=0!==h?Math.ceil(4*p*p/(h*h)*h*(1-h)):v,q=1,j=y?y[1]:v;for(let n=0;n<v;n++){if(n===M){const t=1-A/n;if(t+p*Math.sqrt(t*(1-t)/n)<h)return null;M*=2}if(n===j){for(let n=0;n<2*w;n++)o[n]=0;if(d)for(let n=y[q-1];n<y[q];n++)m[n]=a[d[n]];j=y[++q]}const t=U?d[n]:n,l=t*f,i=r(s,l,f);let u=i%w,c=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const n=o[2*u+1]-1;if(e(s,l,n*f,f)){c=a[n];break}}u++,u>=w&&(u-=w)}c===A&&(o[2*u]=i,o[2*u+1]=t+1,A++),a[t]=c}if(0!==h&&1-A/c<h)return null;if(U){for(let n=y[q-1];n<m.length;n++)m[n]=a[d[n]];a=m}const k=new Uint32Array(f*A);A=0;for(let n=0;n<v;n++)a[n]===A&&(l(s,(U?d[n]:n)*f,k,A*f,f),A++);if(d&&!U){const n=new Uint32Array(g);for(let t=0;t<n.length;t++)n[t]=a[d[t]];a=n}return{buffer:k.buffer,indices:a,uniqueCount:A}}function e(n,t,e,l){for(let r=0;r<l;r++)if(n[t+r]!==n[e+r])return!1;return!0}function l(n,t,e,l,r){for(let o=0;o<r;o++)e[l+o]=n[t+o]}function r(n,t,e){let l=0;for(let r=0;r<e;r++)l=n[t+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;export{t as n};
