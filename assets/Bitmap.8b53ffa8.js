import{cr as t,d2 as e,d3 as i,bX as s,d4 as r,d5 as h,cB as n}from"./vendor.6e209a4d.js";import"./VertexArrayObject.59d5ee02.js";import{r as o}from"./Texture.3086c6ff.js";import{a}from"./Container.2fe15eee.js";class u{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(!e)return;const i=this.filter({pixelBlock:e}),s=i.pixelBlock.getAsRGBA(),r=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),t.putImageData(r,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}function d(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new o(t,s)}class l extends a{constructor(e=null,i,s=!0){super(),this.requestRenderOnSourceChangedEnabled=s,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:t()},this.blendFunction=i,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(t){const o=e(this.transforms.dvs),[a,u]=t.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/t.resolution,l=d*this.width,c=d*this.height,x=Math.PI*this.rotation/180;i(o,o,s(a,u)),i(o,o,s(l/2,c/2)),r(o,o,-x),i(o,o,s(-l/2,-c/2)),h(o,o,s(l,c)),n(this.transforms.dvs,t.displayViewMat3,o)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(t){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(t,this.sourceWidth,this.sourceHeight):this._texture=d(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(t){return t&&"render"in t}(i))if(i instanceof u){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}(i));else(function(t){return t&&!("render"in t)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}export{u as e,l as g};
