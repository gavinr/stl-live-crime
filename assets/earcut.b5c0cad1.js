var e,n,t={exports:{}};e=t,void 0!==(n=function(){function e(e,x,i){i=i||2;var v,u,o,p,a,l,s,c=x&&x.length,Z=c?x[0]*i:e.length,g=n(e,0,Z,i,!0),d=[];if(!g||g.next===g.prev)return d;if(c&&(g=function(e,r,x,i){var v,u,o,p=[];for(v=0,u=r.length;v<u;v++)(o=n(e,r[v]*i,v<u-1?r[v+1]*i:e.length,i,!1))===o.next&&(o.steiner=!0),p.push(h(o));for(p.sort(f),v=0;v<p.length;v++)x=t(x=y(p[v],x),x.next);return x}(e,x,g,i)),e.length>80*i){v=o=e[0],u=p=e[1];for(var w=i;w<Z;w+=i)(a=e[w])<v&&(v=a),(l=e[w+1])<u&&(u=l),a>o&&(o=a),l>p&&(p=l);s=0!==(s=Math.max(o-v,p-u))?1/s:0}return r(g,d,i,v,u,s),d}function n(e,n,t,r,x){var i,v;if(x===j(e,n,t,r)>0)for(i=n;i<t;i+=r)v=b(i,e[i],e[i+1],v);else for(i=t-r;i>=n;i-=r)v=b(i,e[i],e[i+1],v);return v&&Z(v,v.next)&&(m(v),v=v.next),v}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!Z(r,r.next)&&0!==c(r.prev,r,r.next))r=r.next;else{if(m(r),(r=n=r.prev)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,y,o,a,h){if(e){!h&&a&&p(e,y,o,a);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,a?i(e,y,o,a):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),m(e),e=s.next,c=s.next;else if((e=s)===c){h?1===h?r(e=v(t(e),n,f),n,f,y,o,a,2):2===h&&u(e,n,f,y,o,a):r(t(e),n,f,y,o,a,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(c(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(l(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&c(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,v=e.next;if(c(x,i,v)>=0)return!1;for(var u=x.x<i.x?x.x<v.x?x.x:v.x:i.x<v.x?i.x:v.x,f=x.y<i.y?x.y<v.y?x.y:v.y:i.y<v.y?i.y:v.y,y=x.x>i.x?x.x>v.x?x.x:v.x:i.x>v.x?i.x:v.x,o=x.y>i.y?x.y>v.y?x.y:v.y:i.y>v.y?i.y:v.y,p=a(u,f,n,t,r),h=a(y,o,n,t,r),s=e.prevZ,Z=e.nextZ;s&&s.z>=p&&Z&&Z.z<=h;){if(s!==e.prev&&s!==e.next&&l(x.x,x.y,i.x,i.y,v.x,v.y,s.x,s.y)&&c(s.prev,s,s.next)>=0)return!1;if(s=s.prevZ,Z!==e.prev&&Z!==e.next&&l(x.x,x.y,i.x,i.y,v.x,v.y,Z.x,Z.y)&&c(Z.prev,Z,Z.next)>=0)return!1;Z=Z.nextZ}for(;s&&s.z>=p;){if(s!==e.prev&&s!==e.next&&l(x.x,x.y,i.x,i.y,v.x,v.y,s.x,s.y)&&c(s.prev,s,s.next)>=0)return!1;s=s.prevZ}for(;Z&&Z.z<=h;){if(Z!==e.prev&&Z!==e.next&&l(x.x,x.y,i.x,i.y,v.x,v.y,Z.x,Z.y)&&c(Z.prev,Z,Z.next)>=0)return!1;Z=Z.nextZ}return!0}function v(e,n,r){var x=e;do{var i=x.prev,v=x.next.next;!Z(i,v)&&g(i,x,x.next,v)&&M(i,v)&&M(v,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(v.i/r),m(x),m(x.next),x=e=v),x=x.next}while(x!==e);return t(x)}function u(e,n,x,i,v,u){var f=e;do{for(var y=f.next.next;y!==f.prev;){if(f.i!==y.i&&s(f,y)){var o=z(f,y);return f=t(f,f.next),o=t(o,o.next),r(f,n,x,i,v,u),void r(o,n,x,i,v,u)}y=y.next}f=f.next}while(f!==e)}function f(e,n){return e.x-n.x}function y(e,n){var r=function(e,n){var t,r=n,x=e.x,i=e.y,v=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var u=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(u<=x&&u>v){if(v=u,u===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===v)return t;var f,y=t,p=t.x,a=t.y,h=1/0;r=t;do{x>=r.x&&r.x>=p&&x!==r.x&&l(i<a?x:v,i,p,a,i<a?v:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),M(r,e)&&(f<h||f===h&&(r.x>t.x||r.x===t.x&&o(t,r)))&&(t=r,h=f)),r=r.next}while(r!==y);return t}(e,n);if(!r)return n;var x=z(r,e),i=t(r,r.next);return t(x,x.next),n===r?i:n}function o(e,n){return c(e.prev,e,n.prev)<0&&c(n.next,e,e.next)<0}function p(e,n,t,r){var x=e;do{if(null===x.z&&(x.z=a(x.x,x.y,n,t,r)),x.prev.next!==x||x.next.prev!==x)return x.prev.next=x,x.next.prev=x,p(e,n,t,r);x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var n,t,r,x,i,v,u,f,y=1;do{for(t=e,e=null,i=null,v=0;t;){for(v++,r=t,u=0,n=0;n<y&&(u++,r=r.nextZ);n++);for(f=y;u>0||f>0&&r;)0!==u&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,u--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,y*=2}while(v>1)}(x)}function a(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function h(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function l(e,n,t,r,x,i,v,u){return(x-v)*(n-u)-(e-v)*(i-u)>=0&&(e-v)*(r-u)-(t-v)*(n-u)>=0&&(t-v)*(i-u)-(x-v)*(r-u)>=0}function s(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!function(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&g(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&(M(e,n)&&M(n,e)&&function(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}(e,n)&&(c(e.prev,e,n.prev)||c(e,n.prev,n))||Z(e,n)&&c(e.prev,e,e.next)>0&&c(n.prev,n,n.next)>0)}function c(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function Z(e,n){return e.x===n.x&&e.y===n.y}function g(e,n,t,r){var x=w(c(e,n,t)),i=w(c(e,n,r)),v=w(c(t,r,e)),u=w(c(t,r,n));return x!==i&&v!==u||!(0!==x||!d(e,t,n))||!(0!==i||!d(e,r,n))||!(0!==v||!d(t,e,r))||!(0!==u||!d(t,n,r))}function d(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function w(e){return e>0?1:e<0?-1:0}function M(e,n){return c(e.prev,e,e.next)<0?c(e,n,e.next)>=0&&c(e,e.prev,n)>=0:c(e,n,e.prev)<0||c(e,e.next,n)<0}function z(e,n){var t=new k(e.i,e.x,e.y),r=new k(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function b(e,n,t,r){var x=new k(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function m(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function k(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j(e,n,t,r){for(var x=0,i=n,v=t-r;i<t;i+=r)x+=(e[v]-e[i])*(e[i+1]+e[v+1]),v=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,v=Math.abs(j(e,0,i,t));if(x)for(var u=0,f=n.length;u<f;u++){var y=n[u]*t,o=u<f-1?n[u+1]*t:e.length;v-=Math.abs(j(e,y,o,t))}var p=0;for(u=0;u<r.length;u+=3){var a=r[u]*t,h=r[u+1]*t,l=r[u+2]*t;p+=Math.abs((e[a]-e[l])*(e[h+1]-e[a+1])-(e[a]-e[h])*(e[l+1]-e[a+1]))}return 0===v&&0===p?0:Math.abs((p-v)/v)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var v=0;v<n;v++)t.vertices.push(e[x][i][v]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e}())&&(e.exports=n);var r=t.exports;export{r};
