var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))o.call(t,r)&&i(e,r,t[r]);return e};import{d as u,e as c,g as f,t as l}from"./vec33.b1ba2534.js";import{u as d,c as p,r as h,e as m}from"./types.d83c009a.js";import{iR as y,Y as b,i$ as x,F as w,Q as g,cP as T,cO as O,J as S,I as C,g9 as I,j0 as B,er as U,fw as v,fq as A,fp as M,fo as R,eH as N,G as _,j1 as E,j2 as P,j3 as L,j4 as j,fB as F,aw as D,fj as k,ay as G,fg as V,ax as z,f9 as q,az as H,K as X,iS as $}from"./vendor.6e209a4d.js";import{r as J}from"./Version.6ad91437.js";import{I as Q,e as Y,t as W,b as Z}from"./quat.db82b83c.js";import{B as K,g as ee,d as te,i as re,c as ne,u as se,x as oe,L as ie,O as ae,E as ue,F as ce,w as fe,q as le,A as de,V as pe}from"./BufferView.8ddf8472.js";function he(){return[0,0,0,0]}function me(e,t,r,n){return[e,t,r,n]}function ye(e,t){return new Float64Array(e,t,4)}function be(){return[0,0,0,0]}function xe(){return me(1,1,1,1)}function we(){return me(1,0,0,0)}function ge(){return me(0,1,0,0)}function Te(){return me(0,0,1,0)}function Oe(){return me(0,0,0,1)}const Se=[0,0,0,0],Ce=xe(),Ie=we(),Be=ge(),Ue=Te(),ve=Oe();function Ae(e,t,r){if(e.count!==t.count)return void u.error("source and destination buffers need to have the same number of elements");const n=e.count,s=r[0],o=r[1],i=r[2],a=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,b=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*m,t=u*b,r=y[t],n=y[t+1],x=y[t+2],w=y[t+3];h[e]=s*r+a*n+l*x,h[e+1]=o*r+c*n+d*x,h[e+2]=i*r+f*n+p*x,h[e+3]=w}}function Me(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*o,t=u*a;s[e]=r*i[t],s[e+1]=r*i[t+1],s[e+2]=r*i[t+2],s[e+3]=r*i[t+3]}}function Re(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*o,t=u*a;s[e]=i[t]>>r,s[e+1]=i[t+1]>>r,s[e+2]=i[t+2]>>r,s[e+3]=i[t+3]>>r}}function Ne(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}function _e(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=o[c],n[u+1]=o[c+1],u+=s,c+=i}function Ee(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;if(d(t.elementType)){const e=p(t.elementType);if(h(t.elementType))for(let t=0;t<a;++t)n[u]=Math.max(o[c]/e,-1),n[u+1]=Math.max(o[c+1]/e,-1),u+=s,c+=i;else for(let t=0;t<a;++t)n[u]=o[c]/e,n[u+1]=o[c+1]/e,u+=s,c+=i}else _e(e,t,r);return e}function Pe(e,t,r,n){var s,o;const i=e.typedBuffer,a=e.typedBufferStride,u=null!=(s=null==n?void 0:n.count)?s:e.count;let c=(null!=(o=null==n?void 0:n.dstIndex)?o:0)*a;for(let f=0;f<u;++f)i[c]=t,i[c+1]=r,c+=a}function Le(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=o[c],n[u+1]=o[c+1],n[u+2]=o[c+2],n[u+3]=o[c+3],u+=s,c+=i}function je(e,t,r,n,s,o){var i,a;const u=e.typedBuffer,c=e.typedBufferStride,f=null!=(i=null==o?void 0:o.count)?i:e.count;let l=(null!=(a=null==o?void 0:o.dstIndex)?a:0)*c;for(let d=0;d<f;++d)u[l]=t,u[l+1]=r,u[l+2]=n,u[l+3]=s,l+=c}function Fe(e,t){return new e(new ArrayBuffer(t*e.ElementCount*m(e.ElementType)))}Object.freeze({__proto__:null,create:he,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:me,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:ye,zeros:be,ones:xe,unitX:we,unitY:ge,unitZ:Te,unitW:Oe,ZEROS:Se,ONES:Ce,UNIT_X:Ie,UNIT_Y:Be,UNIT_Z:Ue,UNIT_W:ve}),Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void u.error("source and destination buffers need to have the same number of elements");const n=e.count,s=r[0],o=r[1],i=r[2],a=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],b=r[12],x=r[13],w=r[14],g=r[15],T=e.typedBuffer,O=e.typedBufferStride,S=t.typedBuffer,C=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*O,t=u*C,r=S[t],n=S[t+1],I=S[t+2],B=S[t+3];T[e]=s*r+c*n+p*I+b*B,T[e+1]=o*r+f*n+h*I+x*B,T[e+2]=i*r+l*n+m*I+w*B,T[e+3]=a*r+d*n+y*I+g*B}},transformMat3:Ae,scale:Me,shiftRight:Re}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<9;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<16;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=o[c],u+=s,c+=i},makeDense:Ne}),Object.freeze({__proto__:null,copy:_e,normalizeIntegerBuffer:Ee,fill:Pe}),Object.freeze({__proto__:null,copy:Le,fill:je});class De{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return y(e)?(b(t),x(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(w(this.streamDataRequester))return(await g(t,{responseType:ke[e]})).data;const n=await T(this.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw O(n.error),new S("",`Request for resource failed: ${n.error}`)}}const ke={image:"image",binary:"array-buffer",json:"json"},Ge=C.getLogger("esri.views.3d.glTF");class Ve{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const ze={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},qe={pbrMetallicRoughness:ze,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},He={ESRI_externalColorMixMode:"tint"},Xe=(e={})=>{const n=a(a({},ze),e.pbrMetallicRoughness),s=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:I(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}(a(a({},He),e.extras));return((e,n)=>t(e,r(n)))(a(a({},qe),e),{pbrMetallicRoughness:n,extras:s})};const $e={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const Je=1179937895,Qe=1313821514,Ye=5130562;class We{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,s)=>(t=n||"",r=s||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,n){if(y(r)){const n=U(r);if("model/gltf-binary"!==n.mediaType)try{const s=JSON.parse(n.isBase64?atob(n.data):n.data);return new We(e,t,r,s)}catch{}const s=x(r);if(We.isGLBData(s))return this.fromGLBData(e,t,r,s)}if(r.endsWith(".gltf")){const s=await e.loadJSON(r,n);return new We(e,t,r,s)}const s=await e.loadBinary(r,n);if(We.isGLBData(s))return this.fromGLBData(e,t,r,s);const o=await e.loadJSON(r,n);return new We(e,t,r,o)}static isGLBData(e){const t=new Ve(e);return t.remainingBytes()>=4&&t.readUint32()===Je}static async fromGLBData(e,t,r,n){const s=await We.parseGLBData(t,n);return new We(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new Ve(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===Je,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===Qe,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await nt(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==Ye,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let s=this.bufferCache.get(e);if(!s){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);s=new Uint8Array(o),this.bufferCache.set(e,s),n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match.")}return s}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t),i=tt[r.type],a=rt[r.componentType],u=i*a,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Ne(this.wrapAccessor(te,r));case 5123:return Ne(this.wrapAccessor(ee,r));case 5125:return Ne(this.wrapAccessor(K,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+st[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(re,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+st[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(re,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+st[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new ne(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(se,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new pe(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new de(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new le(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new fe(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new ce(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new se(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void I(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(ne,n);if(5121===n.componentType)return this.wrapAccessor(oe,n);if(5123===n.componentType)return this.wrapAccessor(ie,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(re,n);if(5121===n.componentType)return this.wrapAccessor(ae,n);if(5123===n.componentType)return this.wrapAccessor(ue,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+st[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const n=this.errorContext;let s=this.materialCache.get(e.material);if(!s){const o=null!=e.material?Xe(this.json.materials[e.material]):Xe(),i=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let u,c,f,l,d;i.baseColorTexture&&(n.errorUnsupportedIf(0!==(i.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),u=await this.getTexture(i.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):f=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):l=await this.getTexture(o.emissiveTexture.index,t)),i.metallicRoughnessTexture&&r&&(0!==(i.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(i.metallicRoughnessTexture.index,t));const p=null!=e.material?e.material:-1;s={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:i.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:u,normalTexture:c,name:o.name,id:p,occlusionTexture:f,emissiveTexture:l,emissiveFactor:o.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return s}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],s=(e=>a(a({},$e),e))(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const o=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(o.uri)n=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],s=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),i.src=o}))}(new Uint8Array(s.buffer,s.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}const a=e=>33071===e||33648===e||10497===e,u=e=>(r.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);i={data:n,wrapS:a(s.wrapS)?s.wrapS:u(s.wrapS),wrapT:a(s.wrapT)?s.wrapT:u(s.wrapT),minFilter:s.minFilter,name:o.name,id:e},this.textureCache.set(e,i)}return i}getNodeTransform(e){if(void 0===e)return Ke;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=v(c(),r,n.matrix):n.translation||n.rotation||n.scale?(t=f(r),n.translation&&A(t,t,n.translation),n.rotation&&(et[3]=Q(et,n.rotation),M(t,t,et[3],et)),n.scale&&R(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return N(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=J.parse(this.json.asset.version,"glTF");Ze.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Ze=new J(2,0,"glTF"),Ke=B(c(),Math.PI/2),et=Y(),tt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},rt={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function nt(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)}))}const st={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let ot=0;async function it(e,t,r={},n=!0){const s=await We.load(e,ft,t,r),o="gltf_"+ot++,i={lods:[],materials:new Map,textures:new Map,meta:at(s)},a=!(!s.json.asset.extras||"symbolResource"!==s.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,s=n.length>1;for(const i of n){const e=r.nodes[i],t=[o(i,0)];if(ut(e)&&!s){const r=e.extensions.MSFT_lod.ids;t.push(...r.map(((e,t)=>o(e,t+1))))}await Promise.all(t)}async function o(n,s){const i=r.nodes[n],a=e.getNodeTransform(n);if(ft.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)await t(r,a,s,e.name)}for(const e of i.children||[])await o(e,s)}}(s,(async(e,t,a,u)=>{const c=void 0!==e.mode?e.mode:4,l=4===c||5===c||6===c?c:null;if(w(l))return void ft.warnUnsupported("Unsupported primitive mode ("+dt[c]+"). Skipping primitive.");if(!s.hasPositions(e))return void ft.warn("Skipping primitive without POSITION vertex attribute.");const d=await s.getMaterial(e,r,n),p={transform:f(t),attributes:{position:await s.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await s.getIndexData(e,r),primitiveType:l,material:ct(i,d,o)};s.hasNormals(e)&&(p.attributes.normal=await s.getNormalData(e,r)),s.hasTangents(e)&&(p.attributes.tangent=await s.getTangentData(e,r)),s.hasTextureCoordinates(e)&&(p.attributes.texCoord0=await s.getTextureCoordinates(e,r)),s.hasVertexColors(e)&&(p.attributes.color=await s.getVertexColors(e,r));let h=null;_(i.meta)&&_(i.meta.ESRI_lod)&&"screenSpaceRadius"===i.meta.ESRI_lod.metric&&(h=i.meta.ESRI_lod.thresholds[a]),i.lods[a]=i.lods[a]||{parts:[],name:u,lodThreshold:h},i.lods[a].parts.push(p)})),{model:i,meta:{isEsriSymbolResource:a,uri:s.uri},customMeta:{}}}function at(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;_(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function ut(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function ct(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:a({wrap:a({s:10497,t:10497},t.wrap),noUnpackFlip:!0,mipmap:!1},t)}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:lt.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(n,r)}return n},s=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const r=function(e={}){return a({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},e)}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,r)}return s}const ft=new class{error(e){throw new S("gltf-loader-error",e)}errorUnsupported(e){throw new S("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Ge.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},lt=[9987,9985],dt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];class pt{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=E.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=P(this.tickHandle)),this.items=P(this.items)}get(){return 0===this.itemsPtr&&E((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*ht);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,ht));e++)this.items.push(this.allocator())}}const ht=1024;class mt{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=E.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=P(this.tickHandle)),this.itemsPtr=0,this.items=P(this.items),this.buffers=P(this.buffers)}get(){0===this.itemsPtr&&E((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=yt){return new mt(16,L,e)}static createVec3f64(e=yt){return new mt(24,j,e)}static createVec4f64(e=yt){return new mt(32,ye,e)}static createMat3f64(e=yt){return new mt(72,W,e)}static createMat4f64(e=yt){return new mt(128,l,e)}static createQuatf64(e=yt){return new mt(32,Z,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const yt=4096;mt.createVec2f64();const bt=mt.createVec3f64();mt.createVec4f64(),mt.createMat3f64();const xt=mt.createMat4f64();mt.createQuatf64(),new pt((()=>({origin:null,vector:null}))),new pt((function(e){return e?{origin:F(e.origin),vector:F(e.vector)}:{origin:D(),vector:D()}})),new pt((()=>({p0:null,p1:null,p2:null})));const wt=D(),gt=D();let Tt=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const Ot=new Uint16Array([0]),St=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function Ct(e){if(1===e)return Ot;if(e<St.length)return new Uint16Array(St.buffer,0,e);if(e>Tt.length){const t=Math.max(2*Tt.length,e);Tt=new Uint32Array(t);for(let e=0;e<Tt.length;e++)Tt[e]=e}return new Uint32Array(Tt.buffer,0,e)}function It(e){if(1===e)return new Uint16Array(Ot);if(e<St.length)return new Uint16Array(St.slice(0,e));if(e>Tt.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(Tt.slice(0,e))}function Bt(e,t,r){if(!e)return!1;const{size:n,data:s}=e;z(r,0,0,0),z(Rt,0,0,0);let o=0,i=0;for(let c=0;c<t.length-2;c+=3){const e=t[c+0]*n,f=t[c+1]*n,l=t[c+2]*n;z(vt,s[e+0],s[e+1],s[e+2]),z(At,s[f+0],s[f+1],s[f+2]),z(Mt,s[l+0],s[l+1],s[l+2]);const d=(u=Mt,k(wt,At,a=vt),k(gt,u,a),G(V(wt,wt,gt))/2);d?(q(vt,vt,At),q(vt,vt,Mt),H(vt,vt,1/3*d),q(r,r,vt),o+=d):(q(Rt,Rt,vt),q(Rt,Rt,At),q(Rt,Rt,Mt),i+=3)}var a,u;return!(0===i&&0===o||(0!==o?(H(r,r,1/o),0):0===i||(H(r,Rt,1/i),0)))}function Ut(e,t,r){if(!e||!t)return!1;const{size:n,data:s}=e;z(r,0,0,0);let o=-1,i=0;for(let a=0;a<t.length;a++){const e=t[a]*n;o!==e&&(r[0]+=s[e+0],r[1]+=s[e+1],r[2]+=s[e+2],i++),o=e}return i>1&&H(r,r,1/i),i>0}const vt=D(),At=D(),Mt=D(),Rt=D();function Nt(e,t=Ct){return"number"==typeof e?t(e):X(e)||$(e)?new Uint32Array(e):e}function _t(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let s=0;s<r;s+=1)if(s%2==0){const r=e[s],o=e[s+1],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}else{const r=e[s+1],o=e[s],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}}return n}function Et(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let s=e[1],o=0;for(let i=0;i<r;++i){const r=e[i+2];n[o++]=t,n[o++]=s,n[o++]=r,s=r}return n}}const Pt=2.1;export{it as a,De as b,bt as c,Fe as d,Ae as e,xt as f,Ee as g,Ut as h,Me as i,Le as j,Et as k,Ct as l,_t as m,he as n,Pt as o,Nt as p,Pe as q,me as r,pt as s,je as t,Bt as u,Re as v,It as w};