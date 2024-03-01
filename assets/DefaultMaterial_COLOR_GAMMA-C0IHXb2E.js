import{b as Y}from"./vec3-3UlydMzt.js";import{c7 as ie,jY as ue,jZ as le,j_ as fe,jr as X,an as ce,j$ as W,U as de,hA as pe,bq as me,s as f,gK as he,k0 as ye,S as we,e4 as Te,hW as ge,k1 as _e,k2 as be,hT as xe,cJ as Se,hg as Q,k3 as H,k as P,k4 as Ee}from"./index-CvP2eicz.js";import{e as Z,r as k}from"./mat4f64-CSKppSlJ.js";import{D as j,L as G,C as c,E as A}from"./enums-CYMvjYBC.js";import{v as Ae}from"./quat-D-bewmrS.js";import{e as Oe}from"./quatf64-Bdb9ZJJK.js";import{B as Re,g as Ne,d as ve,i as V,c as z,u as ee,x as Ie,L as Ce,O as Me,E as Be,F as Le,w as $e,q as Fe,A as Ue,V as De}from"./BufferView-CQDcOXlC.js";import{n as Pe,t as je,o as Ge,r as Ve}from"./resourceUtils-C165QOub.js";import{l as ke,i as He}from"./Indices-DKTeDg-u.js";function ze(o,e,r){if(o.count!==e.count)return void Y().error("source and destination buffers need to have the same number of elements");const t=o.count,n=r[0],s=r[1],a=r[2],i=r[3],u=r[4],l=r[5],m=r[6],h=r[7],w=r[8],p=r[9],T=r[10],d=r[11],y=r[12],x=r[13],g=r[14],b=r[15],_=o.typedBuffer,O=o.typedBufferStride,S=e.typedBuffer,C=e.typedBufferStride;for(let R=0;R<t;R++){const N=R*O,M=R*C,B=S[M],v=S[M+1],I=S[M+2],$=S[M+3];_[N]=n*B+u*v+w*I+y*$,_[N+1]=s*B+l*v+p*I+x*$,_[N+2]=a*B+m*v+T*I+g*$,_[N+3]=i*B+h*v+d*I+b*$}}function qe(o,e,r){te(o.typedBuffer,e.typedBuffer,r,o.typedBufferStride,e.typedBufferStride)}function te(o,e,r,t=4,n=t){if(o.length/t!=e.length/n)return void Y().error("source and destination buffers need to have the same number of elements");const s=o.length/t,a=r[0],i=r[1],u=r[2],l=r[3],m=r[4],h=r[5],w=r[6],p=r[7],T=r[8];let d=0,y=0;for(let x=0;x<s;x++){const g=e[d],b=e[d+1],_=e[d+2],O=e[d+3];o[y]=a*g+l*b+w*_,o[y+1]=i*g+m*b+p*_,o[y+2]=u*g+h*b+T*_,o[y+3]=O,d+=n,y+=t}}function Ke(o,e){const r=Math.min(o.count,e.count),t=o.typedBuffer,n=o.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let i=0;i<r;i++){const u=i*n,l=i*a,m=s[l],h=s[l+1],w=s[l+2],p=m*m+h*h+w*w;if(p>0){const T=1/Math.sqrt(p);t[u]=T*m,t[u+1]=T*h,t[u+2]=T*w}}}function Je(o,e,r){re(o.typedBuffer,e,r,o.typedBufferStride)}function re(o,e,r,t=4){const n=Math.min(o.length/t,e.count),s=e.typedBuffer,a=e.typedBufferStride;let i=0,u=0;for(let l=0;l<n;l++)o[u]=r*s[i],o[u+1]=r*s[i+1],o[u+2]=r*s[i+2],o[u+3]=r*s[i+3],i+=a,u+=t}Object.freeze(Object.defineProperty({__proto__:null,normalize:Ke,scale:re,scaleView:Je,transformMat3:te,transformMat3View:qe,transformMat4:ze},Symbol.toStringTag,{value:"Module"}));function Ye(o,e){oe(o.typedBuffer,e.typedBuffer,o.typedBufferStride,e.typedBufferStride)}function oe(o,e,r=2,t=r){const n=e.length/2;let s=0,a=0;if(ie(e)||ue(e)){for(let u=0;u<n;++u)o[s]=e[a],o[s+1]=e[a+1],s+=r,a+=t;return}const i=le(e);if(fe(e))for(let u=0;u<n;++u)o[s]=Math.max(e[a]/i,-1),o[s+1]=Math.max(e[a+1]/i,-1),s+=r,a+=t;else for(let u=0;u<n;++u)o[s]=e[a]/i,o[s+1]=e[a+1]/i,s+=r,a+=t}function Xe(o,e,r,t){const n=o.typedBuffer,s=o.typedBufferStride,a=(t==null?void 0:t.count)??o.count;let i=((t==null?void 0:t.dstIndex)??0)*s;for(let u=0;u<a;++u)n[i]=e,n[i+1]=r,i+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:Xe,normalizeIntegerBuffer:oe,normalizeIntegerBufferView:Ye},Symbol.toStringTag,{value:"Module"}));function We(o,e){ne(o.typedBuffer,e.typedBuffer,o.typedBufferStride,e.typedBufferStride)}function ne(o,e,r=3,t=r){const n=e.length/t;let s=0,a=0;for(let i=0;i<n;++i)o[s]=e[a],o[s+1]=e[a+1],o[s+2]=e[a+2],s+=r,a+=t}function Qe(o,e,r,t,n){const s=o.typedBuffer,a=o.typedBufferStride,i=(n==null?void 0:n.count)??o.count;let u=((n==null?void 0:n.dstIndex)??0)*a;for(let l=0;l<i;++l)s[u]=e,s[u+1]=r,s[u+2]=t,u+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:ne,copyView:We,fill:Qe},Symbol.toStringTag,{value:"Module"}));function Ze(o,e){se(o.typedBuffer,e,o.typedBufferStride)}function se(o,e,r=4){const t=e.typedBuffer,n=e.typedBufferStride,s=e.count;let a=0,i=0;for(let u=0;u<s;++u)o[a]=t[i],o[a+1]=t[i+1],o[a+2]=t[i+2],o[a+3]=t[i+3],a+=r,i+=n}function et(o,e,r,t,n,s){const a=o.typedBuffer,i=o.typedBufferStride,u=(s==null?void 0:s.count)??o.count;let l=((s==null?void 0:s.dstIndex)??0)*i;for(let m=0;m<u;++m)a[l]=e,a[l+1]=r,a[l+2]=t,a[l+3]=n,l+=i}Object.freeze(Object.defineProperty({__proto__:null,copy:se,copyView:Ze,fill:et},Symbol.toStringTag,{value:"Module"}));let $t=class{constructor(e){this._streamDataRequester=e}async loadJSON(e,r){return this._load("json",e,r)}async loadBinary(e,r){return X(e)?(ce(r),W(e)):this._load("binary",e,r)}async loadImage(e,r){return this._load("image",e,r)}async _load(e,r,t){if(this._streamDataRequester==null)return(await de(r,{responseType:tt[e]})).data;const n=await pe(this._streamDataRequester.request(r,e,t));if(n.ok===!0)return n.value;throw me(n.error),new f("",`Request for resource failed: ${n.error}`)}};const tt={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function rt(o={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...o}}function ot(o,e={}){return{data:o,parameters:{wrap:{s:j.REPEAT,t:j.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}function D(o,e){const r=o.count;e||(e=new o.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=o.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:D},Symbol.toStringTag,{value:"Module"}));let q=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var L,K;(function(o){o.SCALAR="SCALAR",o.VEC2="VEC2",o.VEC3="VEC3",o.VEC4="VEC4",o.MAT2="MAT2",o.MAT3="MAT3",o.MAT4="MAT4"})(L||(L={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(K||(K={}));const ae={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},nt={pbrMetallicRoughness:ae,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},st={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},J=(o={})=>{const e={...ae,...o.pbrMetallicRoughness},r=at({...st,...o.extras});return{...nt,...o,pbrMetallicRoughness:e,extras:r}};function at(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:he(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const it={magFilter:G.LINEAR,minFilter:G.LINEAR_MIPMAP_LINEAR,wrapS:j.REPEAT,wrapT:j.REPEAT},ut=o=>({...it,...o});function lt(o){let e,r;return o.replace(/^(.*\/)?([^/]*)$/,(t,n,s)=>(e=n||"",r=s||"","")),{dirPart:e,filePart:r}}const F={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class E{constructor(e,r,t,n){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=lt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new f("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new f("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new f("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(X(r)){const a=we(r);if(a&&a.mediaType!=="model/gltf-binary")try{const u=JSON.parse(a.isBase64?atob(a.data):a.data);return new E(e,r,u)}catch{}const i=W(r);if(E._isGLBData(i))return this._fromGLBData(e,r,i)}if(ht.test(r)||(t==null?void 0:t.expectedType)==="gltf"){const a=await e.loadJSON(r,t);return new E(e,r,a)}const n=await e.loadBinary(r,t);if(E._isGLBData(n))return this._fromGLBData(e,r,n);if(yt.test(r)||(t==null?void 0:t.expectedType)==="glb")throw new f("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(r,t);return new E(e,r,s)}static _isGLBData(e){if(e==null)return!1;const r=new q(e);return r.remainingBytes()>=4&&r.readUint32()===F.MAGIC}static async _fromGLBData(e,r,t){const n=await E._parseGLBData(t);return new E(e,r,n.json,n.binaryData)}static async _parseGLBData(e){const r=new q(e);if(r.remainingBytes()<12)throw new f("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),n=r.readUint32(),s=r.readUint32();if(t!==F.MAGIC)throw new f("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new f("gltf-loader-error","glb binary data is smaller than header specifies.");if(n!==2)throw new f("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const l=r.readUint32(),m=r.readUint32();if(u===0){if(m!==F.CHUNK_TYPE_JSON)throw new f("gltf-loader-error","First glb chunk must be JSON.");if(l<0)throw new f("gltf-loader-error","No JSON data found.");a=await Pe(r.readUint8Array(l))}else if(u===1){if(m!==F.CHUNK_TYPE_BIN)throw new f("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=r.readUint8Array(l)}else P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");u+=1}if(!a)throw new f("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new f("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,r);if(n.byteLength!==t.byteLength)throw new f("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const n=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(n),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,r){if(!this.json.accessors)throw new f("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if((t==null?void 0:t.bufferView)==null)throw new f("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[L.MAT2,L.MAT3,L.MAT4])throw new f("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const n=this.json.bufferViews[t.bufferView],s=await this.getBuffer(n.buffer,r),a=dt[t.type],i=pt[t.componentType],u=a*i,l=n.byteStride||u;return{raw:s.buffer,byteStride:l,byteOffset:s.byteOffset+(n.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:l===u,componentCount:a,componentByteSize:i,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case c.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case c.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case c.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case c.UNSIGNED_BYTE:return D(this._wrapAccessor(ve,t));case c.UNSIGNED_SHORT:return D(this._wrapAccessor(Ne,t));case c.UNSIGNED_INT:return D(this._wrapAccessor(Re,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new f("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==c.FLOAT)throw new f("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+c[t.componentType]);if(t.componentCount!==3)throw new f("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return this._wrapAccessor(V,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new f("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==c.FLOAT)throw new f("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+c[t.componentType]);if(t.componentCount!==3)throw new f("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return this._wrapAccessor(V,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new f("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==c.FLOAT)throw new f("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+c[t.componentType]);if(t.componentCount!==4)throw new f("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return new z(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new f("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new f("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===c.FLOAT)return this._wrapAccessor(ee,t);if(!t.normalized)throw new f("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return mt(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new f("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new f("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===c.FLOAT)return this._wrapAccessor(z,t);if(t.componentType===c.UNSIGNED_BYTE)return this._wrapAccessor(Ie,t);if(t.componentType===c.UNSIGNED_SHORT)return this._wrapAccessor(Ce,t)}else if(t.componentCount===3){if(t.componentType===c.FLOAT)return this._wrapAccessor(V,t);if(t.componentType===c.UNSIGNED_BYTE)return this._wrapAccessor(Me,t);if(t.componentType===c.UNSIGNED_SHORT)return this._wrapAccessor(Be,t)}throw new f("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+c[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){var s,a,i,u,l,m,h,w,p,T;let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const d=e.material!=null?J(this.json.materials[e.material]):J(),y=d.pbrMetallicRoughness,x=this.hasVertexColors(e),g=this.getTexture(y.baseColorTexture,r),b=this.getTexture(d.normalTexture,r),_=t?this.getTexture(d.occlusionTexture,r):void 0,O=t?this.getTexture(d.emissiveTexture,r):void 0,S=t?this.getTexture(y.metallicRoughnessTexture,r):void 0,C=e.material!=null?e.material:-1;n={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:y.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:await g,normalTexture:await b,name:d.name,id:C,occlusionTexture:await _,emissiveTexture:await O,emissiveFactor:d.emissiveFactor,metallicFactor:y.metallicFactor,roughnessFactor:y.roughnessFactor,metallicRoughnessTexture:await S,hasVertexColors:x,ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=y==null?void 0:y.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(u=(i=d.normalTexture)==null?void 0:i.extensions)==null?void 0:u.KHR_texture_transform,occlusionTextureTransform:(m=(l=d.occlusionTexture)==null?void 0:l.extensions)==null?void 0:m.KHR_texture_transform,emissiveTextureTransform:(w=(h=d.emissiveTexture)==null?void 0:h.extensions)==null?void 0:w.KHR_texture_transform,metallicRoughnessTextureTransform:(T=(p=y==null?void 0:y.metallicRoughnessTexture)==null?void 0:p.extensions)==null?void 0:T.KHR_texture_transform,receiveAmbientOcclusion:d.extras.ESRI_receiveAmbientOcclusion,receiveShadows:d.extras.ESRI_receiveShadows}}return n}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new f("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,n=this.json.textures[t],s=ut(n.sampler!=null?this.json.samplers[n.sampler]:{}),a=this._getTextureSourceId(n),i=this.json.images[a],u=await this._loadTextureImageData(t,n,r);return Te(this._textureCache,t,()=>{const l=h=>h===33071||h===33648||h===10497,m=h=>{throw new f("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${h}`)};return{data:u,wrapS:l(s.wrapS)?s.wrapS:m(s.wrapS),wrapT:l(s.wrapT)?s.wrapT:m(s.wrapT),minFilter:s.minFilter,name:i.name,id:t}})}getNodeTransform(e){if(e===void 0)return ft;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?r=ge(Z(),t,n.matrix):n.translation||n.rotation||n.scale?(r=k(t),n.translation&&_e(r,r,n.translation),n.rotation&&(U[3]=Ae(U,n.rotation),be(r,r,U[3],U)),n.scale&&xe(r,r,n.scale)):r=k(t),this._nodeTransformCache.set(e,r)}return r}_wrapAccessor(e,r){return new e(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*(r.entryCount-1)+r.componentByteSize*r.componentCount)}_resolveUri(e){return Se(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=Q.parse(this.json.asset.version,"glTF");ct.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new f("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const n=this._textureLoaders.get(e);if(n)return n;const s=this._createTextureLoader(r,t);return this._textureLoaders.set(e,s),s}_getTextureSourceId(e){if(e.extensions!==void 0&&e.extensions.KHR_texture_basisu!==null)return e.extensions.KHR_texture_basisu.source;if(e.source!==null)return e.source;throw new f("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(e,r){const t=this._getTextureSourceId(e),n=this.json.images[t];if(n.uri){if(n.uri.endsWith(".ktx2")){const u=await this._context.loadBinary(this._resolveUri(n.uri),r);return new je(new Uint8Array(u))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(n.bufferView==null)throw new f("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(n.mimeType==null)throw new f("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(s.byteStride!=null)throw new f("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return Ge(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await H(Array.from(this._bufferLoaders.values())),r=await H(Array.from(this._textureLoaders.values()));return e.reduce((t,n)=>t+((n==null?void 0:n.byteLength)??0),0)+r.reduce((t,n)=>t+(n?Ve(n)?n.data.byteLength:n.width*n.height*4:0),0)}}const ft=ye(Z(),Math.PI/2),ct=new Q(2,0,"glTF"),U=Oe(),dt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pt={[c.BYTE]:1,[c.UNSIGNED_BYTE]:1,[c.SHORT]:2,[c.UNSIGNED_SHORT]:2,[c.FLOAT]:4,[c.INT]:4,[c.UNSIGNED_INT]:4};function mt(o){switch(o.componentType){case c.BYTE:return new De(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.UNSIGNED_BYTE:return new Ue(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.SHORT:return new Fe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.UNSIGNED_SHORT:return new $e(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.UNSIGNED_INT:return new Le(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case c.FLOAT:return new ee(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}}const ht=/\.gltf$/i,yt=/\.glb$/i;let wt=0;async function Dt(o,e,r={},t=!0){var h,w;const n=await E.load(o,e,r),s="gltf_"+wt++,a={lods:[],materials:new Map,textures:new Map,meta:Tt(n)},i=!(!n.json.asset.extras||n.json.asset.extras.ESRI_type!=="symbolResource"),u=(w=(h=n.json.asset.extras)==null?void 0:h.ESRI_webstyleSymbol)==null?void 0:w.webstyle,l=new Map;await gt(n,async(p,T,d,y)=>{var I;const x=l.get(d)??0;l.set(d,x+1);const g=p.mode!==void 0?p.mode:A.TRIANGLES,b=g===A.TRIANGLES||g===A.TRIANGLE_STRIP||g===A.TRIANGLE_FAN?g:null;if(b==null)return void P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+A[g]+"). Skipping primitive.");if(!n.hasPositions(p))return void P.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const _=n.getPositionData(p,r),O=n.getMaterial(p,r,t),S=n.hasNormals(p)?n.getNormalData(p,r):null,C=n.hasTangents(p)?n.getTangentData(p,r):null,R=n.hasTextureCoordinates(p)?n.getTextureCoordinates(p,r):null,N=n.hasVertexColors(p)?n.getVertexColors(p,r):null,M=n.getIndexData(p,r),B={name:y,transform:k(T),attributes:{position:await _,normal:S?await S:null,texCoord0:R?await R:null,color:N?await N:null,tangent:C?await C:null},indices:await M,primitiveType:b,material:bt(a,await O,s)};let v=null;((I=a.meta)==null?void 0:I.ESRI_lod)!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(v=a.meta.ESRI_lod.thresholds[d]),a.lods[d]=a.lods[d]||{parts:[],name:y,lodThreshold:v},a.lods[d].parts[x]=B});for(const p of a.lods)p.parts=p.parts.filter(T=>!!T);const m=await n.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:n.uri,ESRI_webstyle:u},customMeta:{},size:m}}function Tt(o){const e=o.json;let r=null;return e.nodes.forEach(t=>{const n=t.extras;n!=null&&(n.ESRI_proxyEllipsoid||n.ESRI_lod)&&(r=n)}),r}async function gt(o,e){const r=o.json,t=r.scenes[r.scene||0].nodes,n=t.length>1,s=[];for(const i of t){const u=r.nodes[i];s.push(a(i,0)),_t(u)&&!n&&u.extensions.MSFT_lod.ids.forEach((l,m)=>a(l,m+1))}async function a(i,u){const l=r.nodes[i],m=o.getNodeTransform(i);if(l.weights!=null&&P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),l.mesh!=null){const h=r.meshes[l.mesh];for(const w of h.primitives)s.push(e(w,m,u,h.name))}for(const h of l.children||[])s.push(a(h,u))}await Promise.all(s)}function _t(o){var e;return((e=o.extensions)==null?void 0:e.MSFT_lod)&&Array.isArray(o.extensions.MSFT_lod.ids)}function bt(o,e,r){const t=s=>{const a=`${r}_tex_${s&&s.id}${s!=null&&s.name?"_"+s.name:""}`;if(s&&!o.textures.has(a)){const i=ot(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:xt.has(s.minFilter),noUnpackFlip:!0});o.textures.set(a,i)}return a},n=`${r}_mat_${e.id}_${e.name}`;if(!o.materials.has(n)){const s=rt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});o.materials.set(n,s)}return n}const xt=new Set([G.LINEAR_MIPMAP_LINEAR,G.LINEAR_MIPMAP_NEAREST]);function Pt(o,e){switch(e){case A.TRIANGLES:return St(o);case A.TRIANGLE_STRIP:return Et(o);case A.TRIANGLE_FAN:return At(o)}}function St(o){return typeof o=="number"?ke(o):Ee(o)?new Uint16Array(o):o}function Et(o){const e=typeof o=="number"?o:o.length;if(e<3)return[];const r=e-2,t=He(3*r);if(typeof o=="number"){let n=0;for(let s=0;s<r;s+=1)s%2==0?(t[n++]=s,t[n++]=s+1,t[n++]=s+2):(t[n++]=s+1,t[n++]=s,t[n++]=s+2)}else{let n=0;for(let s=0;s<r;s+=1)s%2==0?(t[n++]=o[s],t[n++]=o[s+1],t[n++]=o[s+2]):(t[n++]=o[s+1],t[n++]=o[s],t[n++]=o[s+2])}return t}function At(o){const e=typeof o=="number"?o:o.length;if(e<3)return new Uint16Array(0);const r=e-2,t=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if(typeof o=="number"){let i=0;for(let u=0;u<r;++u)t[i++]=0,t[i++]=u+1,t[i++]=u+2;return t}const n=o[0];let s=o[1],a=0;for(let i=0;i<r;++i){const u=o[i+2];t[a++]=n,t[a++]=s,t[a++]=u,s=u}return t}const jt=2.1;export{Ke as a,et as b,Ye as c,Xe as d,Je as e,Qe as f,Ze as g,We as h,jt as i,te as j,oe as k,Dt as l,ne as m,$t as n,Pt as o,qe as r,se as t,re as u};
