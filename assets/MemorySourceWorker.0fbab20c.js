var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&a(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&a(e,i,t[i]);return e},o=(e,s)=>t(e,i(s));import{J as d,g1 as u,g2 as p,cm as f,a$ as c,aS as y,cd as m,cf as h,g3 as g,eM as b}from"./vendor.6e209a4d.js";import{t as I,n as F}from"./objectIdUtils.93cb8a1b.js";import{u as j}from"./FeatureStore.5f6e7a90.js";import{p as _,y as E}from"./quantizationUtils.9cb72431.js";import{H as q}from"./QueryEngine.a48effac.js";import{n as x,u as T,i as O}from"./clientSideDefaults.d83baf45.js";import{y as R,u as w,d as D,c as v,h as S}from"./sourceUtils.ce601d04.js";import"./aaBoundingBox.45e1d856.js";import"./PooledRBush.7888d603.js";import"./quickselect.c0fda8e0.js";import"./centroid.f7592ee4.js";import"./json.df9e51f4.js";import"./WhereClause.7d3ac4db.js";import"./QueryEngineCapabilities.54eb86f4.js";import"./utils.3ea7c765.js";import"./spatialQuerySupport.96e2380d.js";const Q=b,M={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:b},P={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function Z(e){return y(e)?null!=e.z:!!e.hasZ}function C(e){return y(e)?null!=e.m:!!e.hasM}class k{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,s=this._inferLayerProperties(i,e.fields),r=e.fields||[],n=null!=e.hasM?e.hasM:s.hasM,a=null!=e.hasZ?e.hasZ:s.hasZ,c=!e.spatialReference&&!s.spatialReference,y=c?Q:e.spatialReference||s.spatialReference,m=c?M:null,h=e.geometryType||s.geometryType,g=!h;let b=e.objectIdField||s.objectIdField,E=e.timeInfo;if(!g&&(c&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!h))throw new d("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!b)throw new d("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&b!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${b}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),b=s.objectIdField),b&&!s.objectIdField){let e=null;r.some((t=>t.name===b&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:b,name:b,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const l of r){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new d("feature-layer:invalid-field-name","field name is missing",{field:l});if(l.name===b&&(l.type="esriFieldTypeOID"),-1===u.jsonValues.indexOf(l.type))throw new d("feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}const R={};this._requiredFields=[];for(const l of r)if("esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type){l.editable=null==l.editable||!!l.editable,l.nullable=null==l.nullable||!!l.nullable;const e=p(l);l.nullable||void 0!==e?R[l.name]=e:this._requiredFields.push(l)}if(this._fieldsIndex=new f(r),this._createDefaultAttributes=x(R,b),E){if(E.startTimeField){const e=this._fieldsIndex.get(E.startTimeField);e?(E.startTimeField=e.name,e.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){const e=this._fieldsIndex.get(E.endTimeField);e?(E.endTimeField=e.name,e.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){const e=this._fieldsIndex.get(E.trackIdField);e?E.trackIdField=e.name:(E.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:E}}))}E.startTimeField||E.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:E}}),E=null)}const w={warnings:t,featureErrors:[],layerDefinition:o(l({},P),{drawingInfo:T(h),templates:O(R),extent:m,geometryType:h,objectIdField:b,fields:r,hasZ:!!a,hasM:!!n,timeInfo:E}),assignedObjectIds:{}};if(this._queryEngine=new q({fields:r,geometryType:h,hasM:n,hasZ:a,objectIdField:b,spatialReference:y,featureStore:new j({geometryType:h,hasM:n,hasZ:a}),timeInfo:E,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=I,w;const D=F(b,i);return this._nextObjectId=D+1,await _(i,y),this._loadInitialFeatures(w,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([R(t,i),_(e.adds,t),_(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,r=null,n=null,a=null;for(const l of e){const e=l.geometry;if(e&&(r||(r=c(e)),n||(n=e.spatialReference),null==i&&(i=Z(e)),null==s&&(s=C(e)),r&&n&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(a=e.name)}return{geometryType:r,spatialReference:n,objectIdField:a,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:n,spatialReference:a,featureStore:l}=this._queryEngine,o=[];for(const d of t){if(null!=d.uid&&(e.assignedObjectIds[d.uid]=-1),d.geometry&&i!==c(d.geometry)){e.featureErrors.push(w("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=D(this._fieldsIndex,t,d.attributes,this._requiredFields,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,d.attributes,!0),d.attributes=t,null!=d.uid&&(e.assignedObjectIds[d.uid]=d.attributes[n]),d.geometry&&(d.geometry=E(d.geometry,d.geometry.spatialReference,a)),o.push(d))}if(l.addMany(m([],o,i,r,s,n)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(v(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:r,hasZ:n,objectIdField:a,spatialReference:l,featureStore:o}=this._queryEngine,d=[];for(const u of t){if(u.geometry&&s!==c(u.geometry)){i.push(w("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=D(this._fieldsIndex,t,u.attributes,this._requiredFields);if(r)i.push(r);else{if(this._assignObjectId(t,u.attributes),u.attributes=t,null!=u.uid){const t=u.attributes[a];e.uidToObjectId[u.uid]=t}u.geometry&&(u.geometry=E(S(u.geometry,l),u.geometry.spatialReference,l)),d.push(u),i.push(v(u.attributes[a]))}}o.addMany(m([],d,s,n,r,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:n,spatialReference:a,featureStore:l}=this._queryEngine;for(const o of t){const{attributes:t,geometry:d}=o,u=t&&t[n];if(null==u){e.push(w(`Identifier field ${n} missing`));continue}if(!l.has(u)){e.push(w(`Feature with object id ${u} missing`));continue}const p=h(l.getFeature(u),i,r,s);if(d){if(i!==c(d)){e.push(w("Incorrect geometry type."));continue}p.geometry=E(S(d,a),d.spatialReference,a)}if(t){const i=D(this._fieldsIndex,p.attributes,t,this._requiredFields);if(i){e.push(i);continue}}l.add(g(p,i,r,s,n)),e.push(v(u))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}export{k as default};