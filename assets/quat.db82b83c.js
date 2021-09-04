import{fl as t,ff as n,fg as r,fO as a,fa as e,aw as o,aD as s,fm as c}from"./vendor.6e209a4d.js";import{a as u,r as i,s as f,l as h,_ as M,j as l,x as m,q as _,g as p,D as q,E as d}from"./vec4.69768a19.js";function I(){return[1,0,0,0,1,0,0,0,1]}function g(t,n){return new Float64Array(t,n,9)}function A(){return[0,0,0,1]}function j(t){return[t[0],t[1],t[2],t[3]]}function x(t,n){return new Float64Array(t,n,4)}Object.freeze({__proto__:null,create:I,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,n,r,a,e,o,s,c,u){return[t,n,r,a,e,o,s,c,u]},createView:g});const P=[0,0,0,1];function b(t,n,r){r*=.5;const a=Math.sin(r);return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=Math.cos(r),t}function w(n,r){const a=2*Math.acos(r[3]),e=Math.sin(a/2);return e>t?(n[0]=r[0]/e,n[1]=r[1]/e,n[2]=r[2]/e):(n[0]=1,n[1]=0,n[2]=0),a}function y(t,n,r){const a=n[0],e=n[1],o=n[2],s=n[3],c=r[0],u=r[1],i=r[2],f=r[3];return t[0]=a*f+s*c+e*i-o*u,t[1]=e*f+s*u+o*c-a*i,t[2]=o*f+s*i+a*u-e*c,t[3]=s*f-a*c-e*u-o*i,t}function z(n,r,a,e){const o=r[0],s=r[1],c=r[2],u=r[3];let i,f,h,M,l,m=a[0],_=a[1],p=a[2],q=a[3];return f=o*m+s*_+c*p+u*q,f<0&&(f=-f,m=-m,_=-_,p=-p,q=-q),1-f>t?(i=Math.acos(f),h=Math.sin(i),M=Math.sin((1-e)*i)/h,l=Math.sin(e*i)/h):(M=1-e,l=e),n[0]=M*o+l*m,n[1]=M*s+l*_,n[2]=M*c+l*p,n[3]=M*u+l*q,n}function E(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function O(t,n){const r=n[0]+n[4]+n[8];let a;if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const e=(r+1)%3,o=(r+2)%3;a=Math.sqrt(n[3*r+r]-n[3*e+e]-n[3*o+o]+1),t[r]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+r]+n[3*r+e])*a,t[o]=(n[3*o+r]+n[3*r+o])*a}return t}function V(t,n,r,a){const e=.5*Math.PI/180;n*=e,r*=e,a*=e;const o=Math.sin(n),s=Math.cos(n),c=Math.sin(r),u=Math.cos(r),i=Math.sin(a),f=Math.cos(a);return t[0]=o*u*f-s*c*i,t[1]=s*c*f+o*u*i,t[2]=s*u*i-o*c*f,t[3]=s*u*f+o*c*i,t}Object.freeze({__proto__:null,create:A,clone:j,fromValues:function(t,n,r,a){return[t,n,r,a]},createView:x,IDENTITY:P});const v=u,D=i,T=f,F=y,L=h,Y=M,N=l,W=m,X=W,Z=_,k=Z,B=p,C=q,G=d;const H=o(),J=s(1,0,0),K=s(0,1,0);const Q=[0,0,0,1],R=[0,0,0,1];const S=[1,0,0,0,1,0,0,0,1];Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:b,getAxisAngle:w,multiply:y,rotateX:function(t,n,r){r*=.5;const a=n[0],e=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=a*u+s*c,t[1]=e*u+o*c,t[2]=o*u-e*c,t[3]=s*u-a*c,t},rotateY:function(t,n,r){r*=.5;const a=n[0],e=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=a*u-o*c,t[1]=e*u+s*c,t[2]=o*u+a*c,t[3]=s*u-e*c,t},rotateZ:function(t,n,r){r*=.5;const a=n[0],e=n[1],o=n[2],s=n[3],c=Math.sin(r),u=Math.cos(r);return t[0]=a*u+e*c,t[1]=e*u-a*c,t[2]=o*u+s*c,t[3]=s*u-o*c,t},calculateW:function(t,n){const r=n[0],a=n[1],e=n[2];return t[0]=r,t[1]=a,t[2]=e,t[3]=Math.sqrt(Math.abs(1-r*r-a*a-e*e)),t},slerp:z,random:function(t){const n=c(),r=c(),a=c(),e=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=e*Math.sin(2*Math.PI*r),t[1]=e*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*a),t[3]=o*Math.cos(2*Math.PI*a),t},invert:function(t,n){const r=n[0],a=n[1],e=n[2],o=n[3],s=r*r+a*a+e*e+o*o,c=s?1/s:0;return t[0]=-r*c,t[1]=-a*c,t[2]=-e*c,t[3]=o*c,t},conjugate:E,fromMat3:O,fromEuler:V,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:v,set:D,add:T,mul:F,scale:L,dot:Y,lerp:N,length:W,len:X,squaredLength:Z,sqrLen:k,normalize:B,exactEquals:C,equals:G,rotationTo:function(t,o,s){const c=n(o,s);return c<-.999999?(r(H,J,o),a(H)<1e-6&&r(H,K,o),e(H,H),b(t,H,Math.PI),t):c>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(r(H,o,s),t[0]=H[0],t[1]=H[1],t[2]=H[2],t[3]=1+c,B(t,t))},sqlerp:function(t,n,r,a,e,o){return z(Q,n,e,o),z(R,r,a,o),z(t,Q,R,2*o*(1-o)),t},setAxes:function(t,n,r,a){const e=S;return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=a[0],e[4]=a[1],e[7]=a[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],B(t,O(t,e))}});export{b as A,V as C,w as I,C as N,y as P,I as a,x as b,P as c,A as e,j as r,g as t,E as w};
