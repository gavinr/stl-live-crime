import{aQ as t,bR as e,as as i,at as o,au as a,aq as s,dJ as r,aR as n,co as h,dR as p,dh as d}from"./vendor.0f6f771b.js";import{g as l}from"./Bitmap.cf6b2596.js";const c=Math.PI/180;function m(t,e){const i=e.rotation*c,o=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[s,r]=e.size;return t[0]=Math.round(r*a+s*o),t[1]=Math.round(r*o+s*a),t}const u=t(),g=[0,0],f=new e(0,0,0,0),x=2048,y=2048,M=!1,v=!1,R=!1;let S=class extends s{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=R,this.imageMaxWidth=x,this.imageMaxHeight=y,this.imageRotationSupported=M,this.imageNormalizationSupported=v,this.update=r((async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,o=n(i.spatialReference),a=this.hidpi?t.pixelRatio:1,s=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];s?(g[0]=i.worldScreenWidth,g[1]=i.size[1]):this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):m(g,i);const r=Math.floor(g[0]*a)>this.imageMaxWidth||Math.floor(g[1]*a)>this.imageMaxHeight,h=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),p=!this.imageNormalizationSupported&&h,d=!r&&!p,l=this.imageRotationSupported?i.rotation:0;if(d){const t=s?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,g,t,i.resolution,l,a,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);p&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,l,a,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,o,a,s){const r=await this.fetchSource(t,Math.floor(e*a),Math.floor(i*a),{rotation:o,pixelRatio:a,signal:s}),n=new l(r,"additive");return n.x=t.xmin,n.y=t.ymax,n.resolution=t.width/e,n.rotation=o,n.pixelRatio=a,n}async _singleExport(t,e,i,o,a,s,r){!function(t,e,i,o){const[a,s]=e,[r,n]=o,h=.5*i;t[0]=a-h*r,t[1]=s-h*n,t[2]=a+h*r,t[3]=s+h*n}(u,i,o,e);const n=new h(u[0],u[1],u[2],u[3],t.spatialReference);return[await this._export(n,e[0],e[1],a,s,r)]}_tiledExport(t,e,i,o,a){const s=p.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),r=new d(s),n=r.getTileCoverage(t);if(!n)return null;const l=[];return n.forEach(((s,n,p,d)=>{f.set(s,n,p,d),r.getTileBounds(u,f);const c=new h(u[0],u[1],u[2],u[3],t.spatialReference);l.push(this._export(c,e,e,i,o,a))})),Promise.all(l)}};i([o()],S.prototype,"_imagePromise",void 0),i([o()],S.prototype,"bitmaps",void 0),i([o()],S.prototype,"container",void 0),i([o()],S.prototype,"fetchSource",void 0),i([o()],S.prototype,"hidpi",void 0),i([o()],S.prototype,"imageMaxWidth",void 0),i([o()],S.prototype,"imageMaxHeight",void 0),i([o()],S.prototype,"imageRotationSupported",void 0),i([o()],S.prototype,"imageNormalizationSupported",void 0),i([o()],S.prototype,"requestUpdate",void 0),i([o()],S.prototype,"updating",null),S=i([a("esri.views.2d.layers.support.ExportStrategy")],S);var w=S;export{w as S};
