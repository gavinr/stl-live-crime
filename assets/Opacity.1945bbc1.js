import"./VertexArrayObject.59d5ee02.js";import"./vendor.6e209a4d.js";import{r as e}from"./Texture.3086c6ff.js";class t{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:a,painter:o}=e,{amount:l}=r,h=a.gl,n=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,n),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(h.COLOR_BUFFER_BIT),o.blitTexture(a,n,9728,l)}_createOrResizeResources(t,r,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new e(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}))}}export{t as Opacity};
