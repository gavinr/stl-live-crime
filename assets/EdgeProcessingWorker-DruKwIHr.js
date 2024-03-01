import{I as f}from"./InterleavedLayout-BNOwxNyM.js";import{f as d,u as c,a as u,I as p,d as g,m}from"./edgeProcessing-t23HlkxQ.js";import"./BufferView-CQDcOXlC.js";import"./index-CvP2eicz.js";import"./types-D0PSWh4d.js";import"./Util-DdAyWLdN.js";import"./deduplicate-DboLcGcG.js";import"./Indices-DKTeDg-u.js";import"./VertexAttribute-BlT9lbVY.js";import"./enums-CYMvjYBC.js";import"./VertexElementDescriptor-BOD-G50G.js";function a(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:new f(t.layout)}}class S{async extract(e){const i=o(e),n=d(i),r=[i.data.buffer];return{result:h(n,r),transferList:r}}async extractComponentsEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),r=u(n,L,l),s=[];return{result:a(r.regular.instancesData,s),transferList:s}}async extractEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),r=u(n,I,l),s=[];return{result:a(r.regular.instancesData,s),transferList:s}}}function o(t){return{data:p.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indices):t.indicesType==="Uint16Array"?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function h(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class w{allocate(e){return g.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1)}}class y{allocate(e){return m.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1),e.componentIndex.set(i,n.componentIndex)}}const I=new w,L=new y,l={allocate:()=>null,write:()=>{},trim:()=>null};export{S as default};
