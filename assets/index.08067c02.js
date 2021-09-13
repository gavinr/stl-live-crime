import{w as e,S as t,i as n,s as r,e as s,a,b as i,c as o,d as c,n as l,f as u,g as d,o as m,h as p,j as f,W as h,k as g,l as v,m as w,p as y,q as $,r as b,t as x,u as C,v as M,x as k,y as S,z as L,A as T,B as z,C as D,D as j,E as q}from"./vendor.0f6f771b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const A=e([]),P=e=>{let t=Math.abs((new Date).getTime()-new Date(e).getTime()),n=10;return t<36e5?n=30:t<72e5&&(n=20),n},_=(e,t)=>Array.prototype.slice.call(t.querySelectorAll(e)),I=async e=>{const[t,n,r,s]=_("td",e).map((e=>e.querySelector("font").innerHTML)),a=r.replace("XX ","00 ").replace(" / "," and ")+", St. Louis, MO, USA",i=await(async e=>{var t=new URL("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find"),n={text:e,f:"json"};Object.keys(n).forEach((e=>t.searchParams.append(e,n[e])));const r=await fetch(t.toString());return await r.json()})(a);let o=!1,c=!1;i.locations.length>0&&i.locations[0].feature.attributes.Score>90&&(o=i.locations[0].feature.geometry.y,c=i.locations[0].feature.geometry.x);return{date:t,id:n,address:a,offense:s,size:P(t),lat:o,lon:c}},O=async()=>{const e=await fetch("https://muddy-glitter-47c1.alligator.workers.dev"),t=await e.text();var n=(new DOMParser).parseFromString(t,"text/html");const r=_("table tbody tr",n).map(I);return Promise.all(r)};function F(e){let t,n,r,d;return{c(){t=s("main"),n=s("div"),a(n,"class","svelte-cbm4uo"),a(t,"class","svelte-cbm4uo")},m(s,a){i(s,t,a),o(t,n),r||(d=c(e[0].call(null,n)),r=!0)},p:l,i:l,o:l,d(e){e&&u(t),r=!1,d()}}}function N(e,t,n){let{selectedCrime:r}=t,{centerMap:s=!1}=t;const a=d();let i,o,c;const l=A.subscribe((e=>{n(5,c=e)}));m(l);return e.$$set=e=>{"selectedCrime"in e&&n(1,r=e.selectedCrime),"centerMap"in e&&n(2,s=e.centerMap)},e.$$.update=()=>{if(30&e.$$.dirty&&i&&o)if(r){!0===s&&n(3,i.center=[r.lon,r.lat],i);const e=o.graphics.find((e=>e.attributes.id===r.id));n(3,i.popup.features=[e],i),n(3,i.popup.location=e.geometry,i),n(3,i.popup.visible=!0,i)}else n(3,i.popup.visible=!1,i);if(48&e.$$.dirty&&c&&c.length>0&&o){let e=c.map((e=>{if(e.lat&&e.lon){const t=new p({latitude:e.lat,longitude:e.lon}),n={type:"simple-marker",style:"circle",color:"green",size:e.size+"px",outline:{color:[255,255,0],width:3}};return new f({geometry:t,symbol:n,attributes:e,popupTemplate:{title:e.offense,content:"{date}<br />{address}"}})}}));o.removeAll(),o.addMany(e)}},[e=>{const t=new h({url:"https://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/st_louis_mo_boundary/FeatureServer/0"});t.renderer={type:"simple",symbol:{type:"simple-fill",color:[51,51,204,0],style:"solid",outline:{color:"black",width:2}}},n(3,i=new g({container:e,map:{basemap:"streets",layers:[t]},zoom:12,center:[-90.28,38.6]})),n(4,o=new v),i.map.add(o),i.watch("popup.visible",(e=>{!1===e&&a("selected",!1)})),i.on("click",(function(e){i.hitTest(e).then((function(e){if(e.results.length){var t=e.results.filter((function(e){return e.graphic.layer===o}))[0].graphic;a("selected",t.attributes)}else a("selected",!1)}))}))},r,s,i,o,c]}class B extends t{constructor(e){super(),n(this,e,N,F,r,{selectedCrime:1,centerMap:2})}}function E(e){let t,n,r;return{c(){t=s("span"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',a(t,"class","svelte-1ow4dq9")},m(s,a){i(s,t,a),n||(r=w(t,"click",e[0]),n=!0)},p:l,i:l,o:l,d(e){e&&u(t),n=!1,r()}}}function U(e,t,n){let{name:r=""}=t;return e.$$set=e=>{"name"in e&&n(1,r=e.name)},[()=>{y.fire({title:`About ${r}`,html:'This is a live view of the City of St. Louis Police Department <a href="http://www.slmpd.org/cfs.aspx" target="_blank">calls for service</a>. These are just requests - none of these crimes have been verified, charged, or prosecuted. Please leave feedback this project here: <a href="https://github.com/gavinr/stl-live-crime" target="_blank">github.com/gavinr/stl-live-crime</a>.',icon:"info",confirmButtonText:"Cool"})},r]}class H extends t{constructor(e){super(),n(this,e,U,E,r,{name:1})}}function R(e,t,n){const r=e.slice();return r[5]=t[n],r}function W(e){let t;return{c(){t=x("Loading ...")},m(e,n){i(e,t,n)},p:l,d(e){e&&u(t)}}}function X(e){let t,n=e[1],r=[];for(let s=0;s<n.length;s+=1)r[s]=G(R(e,n,s));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);i(e,t,n)},p(e,s){if(7&s){let a;for(n=e[1],a=0;a<n.length;a+=1){const i=R(e,n,a);r[a]?r[a].p(i,s):(r[a]=G(i),r[a].c(),r[a].m(t.parentNode,t))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(e){S(r,e),e&&u(t)}}}function G(e){let t,n,r,c,l,d,m,p,f,h,g,v,y=e[5].offense+"",$=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e[5].date))+"",b=e[5].address+"";function S(){return e[3](e[5])}return{c(){t=s("div"),n=x(y),r=C(),c=s("br"),l=C(),d=x($),m=s("br"),p=C(),f=x(b),h=C(),a(t,"class","card svelte-5g9mpc"),M(t,"highlight",e[0]&&e[5].id===e[0].id)},m(e,s){i(e,t,s),o(t,n),o(t,r),o(t,c),o(t,l),o(t,d),o(t,m),o(t,p),o(t,f),o(t,h),g||(v=w(t,"click",S),g=!0)},p(r,s){e=r,2&s&&y!==(y=e[5].offense+"")&&k(n,y),2&s&&$!==($=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e[5].date))+"")&&k(d,$),2&s&&b!==(b=e[5].address+"")&&k(f,b),3&s&&M(t,"highlight",e[0]&&e[5].id===e[0].id)},d(e){e&&u(t),g=!1,v()}}}function K(e){let t;function n(e,t){return e[1].length>0?X:W}let r=n(e),s=r(e);return{c(){s.c(),t=$()},m(e,n){s.m(e,n),i(e,t,n)},p(e,[a]){r===(r=n(e))&&s?s.p(e,a):(s.d(1),s=r(e),s&&(s.c(),s.m(t.parentNode,t)))},i:l,o:l,d(e){s.d(e),e&&u(t)}}}function J(e,t,n){let r;b(e,A,(e=>n(1,r=e)));let{selectedCrime:s}=t;const a=d();function i(e){a("click",e)}return e.$$set=e=>{"selectedCrime"in e&&n(0,s=e.selectedCrime)},[s,r,i,e=>i(e)]}class Q extends t{constructor(e){super(),n(this,e,J,K,r,{selectedCrime:0})}}function V(e){let t,n,r,c,l,d,m,p,f,h,g;return l=new H({props:{name:e[2]}}),m=new B({props:{selectedCrime:e[0],centerMap:e[1]}}),m.$on("selected",e[4]),h=new Q({props:{selectedCrime:e[0]}}),h.$on("click",e[5]),{c(){t=s("header"),n=x(e[2]),r=C(),c=s("span"),L(l.$$.fragment),d=C(),L(m.$$.fragment),p=C(),f=s("aside"),L(h.$$.fragment),a(c,"class","svelte-4xg6uf"),a(t,"class","svelte-4xg6uf"),a(f,"id","sidebar"),a(f,"class","svelte-4xg6uf")},m(e,s){i(e,t,s),o(t,n),o(t,r),o(t,c),T(l,c,null),i(e,d,s),T(m,e,s),i(e,p,s),i(e,f,s),T(h,f,null),g=!0},p(e,[t]){(!g||4&t)&&k(n,e[2]);const r={};4&t&&(r.name=e[2]),l.$set(r);const s={};1&t&&(s.selectedCrime=e[0]),2&t&&(s.centerMap=e[1]),m.$set(s);const a={};1&t&&(a.selectedCrime=e[0]),h.$set(a)},i(e){g||(z(l.$$.fragment,e),z(m.$$.fragment,e),z(h.$$.fragment,e),g=!0)},o(e){D(l.$$.fragment,e),D(m.$$.fragment,e),D(h.$$.fragment,e),g=!1},d(e){e&&u(t),j(l),e&&u(d),j(m,e),e&&u(p),e&&u(f),j(h)}}}function Y(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function o(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))};let{name:s}=t,{selectedCrime:a}=t,{centerMap:i=!1}=t;function o(e,t){a==e.detail||!1===e.detail?n(0,a=void 0):(n(1,i=t),n(0,a=e.detail))}q((function(){return r(this,void 0,void 0,(function*(){(async()=>{const e=await O();A.update((t=>e)),setInterval((async()=>{const e=await O();A.update((t=>e))}),6e4)})()}))}));return e.$$set=e=>{"name"in e&&n(2,s=e.name),"selectedCrime"in e&&n(0,a=e.selectedCrime),"centerMap"in e&&n(1,i=e.centerMap)},[a,i,s,o,e=>{o(e,!1)},e=>{o(e,!0)}]}new class extends t{constructor(e){super(),n(this,e,Y,V,r,{name:2,selectedCrime:0,centerMap:1})}}({target:document.getElementById("app"),props:{name:"St. Louis Live Crime"}});
