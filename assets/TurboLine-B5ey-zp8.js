import{N as ue,_ as Qt,h9 as he}from"./index-CvP2eicz.js";import{e as st,n as J}from"./enums-BRqP_wXA.js";import{S as ce}from"./definitions-C14Q9bsB.js";const xe=128e3;let jt=null,re=null;async function sr(){return jt||(jt=fe()),jt}async function fe(){re=await(ue("esri-csp-restrictions")?await Qt(()=>import("./libtess-asm-CoBLsFeE.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(i=>i.l):await Qt(()=>import("./libtess-B9mwmV5T.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(i=>i.l)).default({locateFile:i=>he(`esri/core/libs/libtess/${i}`)})}function or(s,i){const o=Math.max(s.length,xe);return re.triangulate(s,i,o)}const Et=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],At=["آ","أ","إ","ا"],ye=["ﻵ","ﻷ","ﻹ","ﻻ"],_e=["ﻶ","ﻸ","ﻺ","ﻼ"],kt=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],Te=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],de=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],ge=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],Ae=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],Yt=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],Le=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],Zt=["ء","ف"],me=["غ","ي"],we=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],ve=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],r=0,l=1,_=2,b=3,t=4,tt=5,$t=6,e=7,O=8,j=9,Z=10,d=11,n=12,Re=13,Ue=14,be=15,Be=16,pe=17,f=18,Ne=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],K=100,Fe=[K+0,r,r,r,r,K+1,K+2,K+3,l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,K+4,t,t,t,r,t,r,t,r,t,t,t,r,r,t,t,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,r,r,t,t,r,r,t,t,r,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,r,r,r,K+5,e,e,K+6,K+7],Ve=[[f,f,f,f,f,f,f,f,f,$t,tt,$t,O,tt,f,f,f,f,f,f,f,f,f,f,f,f,f,f,tt,tt,tt,$t,O,t,t,d,d,d,t,t,t,t,t,Z,j,Z,j,j,_,_,_,_,_,_,_,_,_,_,j,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,f,f,f,f,f,f,tt,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,j,t,d,d,d,d,t,t,t,t,r,t,t,f,t,t,d,d,_,_,t,r,t,t,t,_,r,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r,r],[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,r,t,t,t,t,t,t,t,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l,n,l,n,n,l,n,n,l,n,t,t,t,t,t,t,t,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,t,t,t,t,l,l,l,l,l,t,t,t,t,t,t,t,t,t,t,t],[b,b,b,b,t,t,t,t,e,d,d,e,j,e,t,t,n,n,n,n,n,n,n,n,n,n,n,e,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,b,b,b,b,b,b,b,b,b,b,d,b,b,e,e,e,n,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,n,n,n,n,n,n,n,b,t,n,n,n,n,n,n,e,e,n,n,t,n,n,n,n,e,e,_,_,_,_,_,_,_,_,_,_,e,e,e,e,e,e],[e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,e,n,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,n,n,n,n,n,n,n,n,n,n,n,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,n,n,n,n,n,n,n,n,l,l,t,t,t,t,l,t,t,t,t,t],[O,O,O,O,O,O,O,O,O,O,O,f,f,f,r,l,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,O,tt,Re,Ue,be,Be,pe,j,d,d,d,d,d,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,j,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,O,f,f,f,f,f,t,t,t,t,t,f,f,f,f,f,f,_,r,t,t,_,_,_,_,_,_,Z,Z,t,t,t,r,_,_,_,_,_,_,_,_,_,_,Z,Z,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],[r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,t,r,r,r,r,r,t,t,t,t,t,l,n,l,l,l,l,l,l,l,l,l,l,Z,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,t,l,t,l,l,t,l,l,t,l,l,l,l,l,l,l,l,l,l,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e],[n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,n,n,n,n,n,n,n,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,j,t,j,t,t,j,t,t,t,t,t,t,t,t,t,d,t,t,Z,Z,t,t,t,t,t,d,d,t,t,t,t,t,e,e,e,e,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,t,f],[t,t,t,d,d,d,t,t,t,t,t,Z,j,Z,j,j,_,_,_,_,_,_,_,_,_,_,j,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,t,t,t,t,t,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,t,t,t,r,r,r,r,r,r,t,t,r,r,r,r,r,r,t,t,r,r,r,r,r,r,t,t,r,r,r,t,t,t,d,d,t,t,t,d,d,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]];class ar{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(i,o,a){if(this.sourceToTarget=[],this.targetToSource=[],!i)return"";if(Ye(this.sourceToTarget,this.targetToSource,i.length),!this.checkParameters(o,a))return i;o=this.inputFormat,a=this.outputFormat;let u=i;const x=Ge,T=Jt(o.charAt(1)),y=Jt(a.charAt(1)),g=(o.charAt(0)==="I"?"L":o.charAt(0))+T,A=(a.charAt(0)==="I"?"L":a.charAt(0))+y,m=o.charAt(2)+a.charAt(2);x.defInFormat=g,x.defOutFormat=A,x.defSwap=m;const D=wt(i,g,A,m,x);let B=!1;return a.charAt(1)==="R"?B=!0:a.charAt(1)!=="C"&&a.charAt(1)!=="D"||(B=this.checkContextual(D)==="rtl"),this.sourceToTarget=X,this.targetToSource=Ze(this.sourceToTarget),Mt=this.targetToSource,u=o.charAt(3)===a.charAt(3)?D:a.charAt(3)==="S"?Ee(B,D,!0):Ce(D,B,!0),this.sourceToTarget=X,this.targetToSource=Mt,this.levels=Dt,u}_inputFormatSetter(i){if(!Kt.test(i))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=i}_outputFormatSetter(i){if(!Kt.test(i))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=i}checkParameters(i,o){return i?this._inputFormatSetter(i):i=this.inputFormat,o?this._outputFormatSetter(o):o=this.outputFormat,i!==o}checkContextual(i){let o=Ct(i);if(o!=="ltr"&&o!=="rtl"){try{o=document.dir.toLowerCase()}catch{}o!=="ltr"&&o!=="rtl"&&(o="ltr")}return o}hasBidiChar(i){return Ke.test(i)}}function wt(s,i,o,a,u){const x=Se(s,{inFormat:i,outFormat:o,swap:a},u);if(x.inFormat===x.outFormat)return s;i=x.inFormat,o=x.outFormat,a=x.swap;const T=i.substring(0,1),y=i.substring(1,4),g=o.substring(0,1),A=o.substring(1,4);if(u.inFormat=i,u.outFormat=o,u.swap=a,T==="L"&&o==="VLTR"){if(y==="LTR")return u.dir=dt,ut(s,u);if(y==="RTL")return u.dir=vt,ut(s,u)}if(T==="V"&&g==="V")return u.dir=y==="RTL"?vt:dt,Wt(s,u);if(T==="L"&&o==="VRTL")return y==="LTR"?(u.dir=dt,s=ut(s,u)):(u.dir=vt,s=ut(s,u)),Wt(s);if(i==="VLTR"&&o==="LLTR")return u.dir=dt,ut(s,u);if(T==="V"&&g==="L"&&y!==A)return s=Wt(s),y==="RTL"?wt(s,"LLTR","VLTR",a,u):wt(s,"LRTL","VRTL",a,u);if(i==="VRTL"&&o==="LRTL")return wt(s,"LRTL","VRTL",a,u);if(T==="L"&&g==="L"){const m=u.swap;return u.swap=m.substr(0,1)+"N",y==="RTL"?(u.dir=vt,s=ut(s,u),u.swap="N"+m.substr(1,2),u.dir=dt,s=ut(s,u)):(u.dir=dt,s=ut(s,u),u.swap="N"+m.substr(1,2),s=wt(s,"VLTR","LRTL",u.swap,u)),s}return s}function Se(s,i,o){if(i.inFormat===void 0&&(i.inFormat=o.defInFormat),i.outFormat===void 0&&(i.outFormat=o.defOutFormat),i.swap===void 0&&(i.swap=o.defSwap),i.inFormat===i.outFormat)return i;const a=i.inFormat.substring(0,1),u=i.outFormat.substring(0,1);let x,T=i.inFormat.substring(1,4),y=i.outFormat.substring(1,4);return T.charAt(0)==="C"&&(x=Ct(s),T=x==="ltr"||x==="rtl"?x.toUpperCase():i.inFormat.charAt(2)==="L"?"LTR":"RTL",i.inFormat=a+T),y.charAt(0)==="C"&&(x=Ct(s),x==="rtl"?y="RTL":x==="ltr"?(x=ke(s),y=x.toUpperCase()):y=i.outFormat.charAt(2)==="L"?"LTR":"RTL",i.outFormat=u+y),i}function Ee(s,i,o){if(i.length===0)return"";s===void 0&&(s=!0),o===void 0&&(o=!0);const a=(i=String(i)).split("");let u=0,x=1,T=a.length;s||(u=a.length-1,x=-1,T=1);const y=$e(a,u,x,T,o);let g="";for(let A=0;A<a.length;A++)o&&Ie(y,y.length,A)>-1?(se(Mt,A,!s,-1),X.splice(A,1)):g+=a[A];return g}function $e(s,i,o,a,u){let x=0;const T=[];let y=0;for(let g=i;g*o<a;g+=o)if(ne(s[g])||Rt(s[g])){if(s[g]==="ل"&&Pe(s,g+o,o,a)){s[g]=Qe(s[g+o],x===0?ye:_e),g+=o,ze(s,g,o,a),u&&(T[y]=g,y++),x=0;continue}const A=s[g];x===1?s[g]=Gt(s,g+o,o,a)?qe(s[g]):Xt(s[g],de):Gt(s,g+o,o,a)===!0?s[g]=Xt(s[g],Ae):s[g]=Xt(s[g],Te),Rt(A)||(x=1),Xe(A)===!0&&(x=0)}else x=0;return T}function Ct(s){const i=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(s);return i?i[0]<="z"?"ltr":"rtl":""}function ke(s){const i=s.split("");return i.reverse(),Ct(i.join(""))}function Ce(s,i,o){if(s.length===0)return"";o===void 0&&(o=!0),i===void 0&&(i=!0);let a="";const u=(s=String(s)).split("");for(let x=0;x<s.length;x++){let T=!1;if(u[x]>="ﹰ"&&u[x]<"\uFEFF"){const y=s.charCodeAt(x);u[x]>="ﻵ"&&u[x]<="ﻼ"?(i?(x>0&&o&&u[x-1]===" "?a=a.substring(0,a.length-1)+"ل":(a+="ل",T=!0),a+=At[(y-65269)/2]):(a+=At[(y-65269)/2],a+="ل",x+1<s.length&&o&&u[x+1]===" "?x++:T=!0),T&&(se(Mt,x,!0,1),X.splice(x,0,X[x]))):a+=Le[y-65136]}else a+=u[x]}return a}function ut(s,i){const o=s.split(""),a=[];return ie(o,a,i),De(o,a,i),Ht(2,o,a,i),Ht(1,o,a,i),Dt=a,o.join("")}function ie(s,i,o){const a=s.length,u=o.dir?ve:we;let x=0,T=-1;const y=[],g=[];o.hiLevel=o.dir,o.lastArabic=!1,o.hasUbatAl=!1,o.hasUbatB=!1,o.hasUbatS=!1;for(let A=0;A<a;A++)y[A]=Oe(s[A]);for(let A=0;A<a;A++){const m=x,D=je(s,y,g,A,o);g[A]=D,x=u[m][D];const B=240&x;x&=15;const R=u[x][He];if(i[A]=R,B>0)if(B===16){for(let v=T;v<A;v++)i[v]=1;T=-1}else T=-1;if(u[x][Je])T===-1&&(T=A);else if(T>-1){for(let v=T;v<A;v++)i[v]=R;T=-1}y[A]===tt&&(i[A]=0),o.hiLevel|=R}o.hasUbatS&&Me(y,i,a,o)}function Me(s,i,o,a){for(let u=0;u<o;u++)if(s[u]===$t){i[u]=a.dir;for(let x=u-1;x>=0&&s[x]===O;x--)i[x]=a.dir}}function De(s,i,o){if(o.hiLevel!==0&&o.swap.substr(0,1)!==o.swap.substr(1,2))for(let a=0;a<s.length;a++)i[a]===1&&(s[a]=We(s[a]))}function Oe(s){const i=s.charCodeAt(0),o=Fe[i>>8];return o<K?o:Ve[o-K][255&i]}function Wt(s,i){const o=s.split("");if(i){const a=[];ie(o,a,i),Dt=a}return o.reverse(),X.reverse(),o.join("")}function Ie(s,i,o){for(let a=0;a<i;a++)if(s[a]===o)return a;return-1}function ne(s){for(let i=0;i<Zt.length;i++)if(s>=Zt[i]&&s<=me[i])return!0;return!1}function Gt(s,i,o,a){for(;i*o<a&&Rt(s[i]);)i+=o;return!!(i*o<a&&ne(s[i]))}function Pe(s,i,o,a){for(;i*o<a&&Rt(s[i]);)i+=o;let u=" ";if(!(i*o<a))return!1;u=s[i];for(let x=0;x<At.length;x++)if(At[x]===u)return!0;return!1}function Ht(s,i,o,a){if(a.hiLevel<s)return;if(s===1&&a.dir===vt&&!a.hasUbatB)return i.reverse(),void X.reverse();const u=i.length;let x,T,y,g,A,m=0;for(;m<u;){if(o[m]>=s){for(x=m+1;x<u&&o[x]>=s;)x++;for(T=m,y=x-1;T<y;T++,y--)g=i[T],i[T]=i[y],i[y]=g,A=X[T],X[T]=X[y],X[y]=A;m=x}m++}}function je(s,i,o,a,u){const x=i[a];return{UBAT_L:()=>(u.lastArabic=!1,r),UBAT_R:()=>(u.lastArabic=!1,l),UBAT_ON:()=>t,UBAT_AN:()=>b,UBAT_EN:()=>u.lastArabic?b:_,UBAT_AL:()=>(u.lastArabic=!0,u.hasUbatAl=!0,l),UBAT_WS:()=>t,UBAT_CS:()=>{let T,y;return a<1||a+1>=i.length||(T=o[a-1])!==_&&T!==b||(y=i[a+1])!==_&&y!==b?t:(u.lastArabic&&(y=b),y===T?y:t)},UBAT_ES:()=>(a>0?o[a-1]:tt)===_&&a+1<i.length&&i[a+1]===_?_:t,UBAT_ET:()=>{if(a>0&&o[a-1]===_)return _;if(u.lastArabic)return t;let T=a+1;const y=i.length;for(;T<y&&i[T]===d;)T++;return T<y&&i[T]===_?_:t},UBAT_NSM:()=>{if(u.inFormat==="VLTR"){const T=i.length;let y=a+1;for(;y<T&&i[y]===n;)y++;if(y<T){const g=s[a].charCodeAt(0),A=g>=1425&&g<=2303||g===64286,m=i[y];if(A&&(m===l||m===e))return l}}return a<1||i[a-1]===tt?t:o[a-1]},UBAT_B:()=>(u.lastArabic=!0,u.hasUbatB=!0,u.dir),UBAT_S:()=>(u.hasUbatS=!0,t),UBAT_LRE:()=>(u.lastArabic=!1,t),UBAT_RLE:()=>(u.lastArabic=!1,t),UBAT_LRO:()=>(u.lastArabic=!1,t),UBAT_RLO:()=>(u.lastArabic=!1,t),UBAT_PDF:()=>(u.lastArabic=!1,t),UBAT_BN:()=>t}[Ne[x]]()}function We(s){let i,o=0,a=Et.length-1;for(;o<=a;)if(i=Math.floor((o+a)/2),s<Et[i][0])a=i-1;else{if(!(s>Et[i][0]))return Et[i][1];o=i+1}return s}function Xe(s){for(let i=0;i<Yt.length;i++)if(Yt[i]===s)return!0;return!1}function qe(s){for(let i=0;i<kt.length;i++)if(s===kt[i])return ge[i];return s}function Xt(s,i){for(let o=0;o<kt.length;o++)if(s===kt[o])return i[o];return s}function Rt(s){return s>="ً"&&s<="ٕ"}function Jt(s){return s==="L"?"LTR":s==="R"?"RTL":s==="C"?"CLR":s==="D"?"CRL":""}function ze(s,i,o,a){for(;i*o<a&&Rt(s[i]);)i+=o;return i*o<a&&(s[i]=" ",!0)}function Qe(s,i){for(let o=0;o<At.length;o++)if(s===At[o])return i[o];return s}function Ye(s,i,o){X=[],Dt=[];for(let a=0;a<o;a++)s[a]=a,i[a]=a,X[a]=a}function Ze(s){const i=new Array(s.length);for(let o=0;o<s.length;o++)i[s[o]]=o;return i}function se(s,i,o,a){for(let u=0;u<s.length;u++)(s[u]>i||!o&&s[u]===i)&&(s[u]+=a)}let X=[],Mt=[],Dt=[];const Ge={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},He=5,Je=6,dt=0,vt=1,Kt=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,Ke=/[\u0591-\u06ff\ufb1d-\ufefc]/;function oe(s,i){return s.x===i.x&&s.y===i.y}function tr(s){if(!s)return;const i=s.length;if(i<=1)return;let o=0;for(let a=1;a<i;a++)oe(s[a],s[o])||++o===a||(s[o]=s[a]);s.length=o+1}function G(s,i){return s.x=i.y,s.y=-i.x,s}function q(s,i){return s.x=-i.y,s.y=i.x,s}function te(s,i){return s.x=i.x,s.y=i.y,s}function qt(s,i){return s.x=-i.x,s.y=-i.y,s}function zt(s){return Math.sqrt(s.x*s.x+s.y*s.y)}function er(s,i){return s.x*i.y-s.y*i.x}function ee(s,i){return s.x*i.x+s.y*i.y}function gt(s,i,o,a){return s.x=i.x*o+i.y*a,s.y=i.x*a-i.y*o,s}class lr{constructor(i,o,a){this._writeVertex=i,this._writeTriangle=o,this._canUseThinTessellation=a,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,o,a=this._canUseThinTessellation){tr(i),a&&o.halfWidth<ce&&!o.offset?this._tessellateThin(i,o):this._tessellate(i,o)}_tessellateThin(i,o){if(i.length<2)return;const a=o.wrapDistance||65535;let u=o.initialDistance||0,x=!1,T=i[0].x,y=i[0].y;const g=i.length;for(let A=1;A<g;++A){x&&(x=!1,u=0);let m=i[A].x,D=i[A].y,B=m-T,R=D-y,v=Math.sqrt(B*B+R*R);if(B/=v,R/=v,u+v>a){x=!0;const h=(a-u)/v;v=a-u,m=(1-h)*T+h*m,D=(1-h)*y+h*D,--A}const p=this._writeVertex(T,y,0,0,B,R,R,-B,0,-1,u),U=this._writeVertex(T,y,0,0,B,R,-R,B,0,1,u);u+=v;const ht=this._writeVertex(m,D,0,0,B,R,R,-B,0,-1,u),c=this._writeVertex(m,D,0,0,B,R,-R,B,0,1,u);this._writeTriangle(p,U,ht),this._writeTriangle(U,ht,c),T=m,y=D}}_tessellate(i,o){const a=i[0],u=i[i.length-1],x=oe(a,u),T=x?3:2;if(i.length<T)return;const y=o.pixelCoordRatio,g=o.capType!=null?o.capType:st.BUTT,A=o.joinType!=null?o.joinType:J.MITER,m=o.miterLimit!=null?Math.min(o.miterLimit,4):2,D=o.roundLimit!=null?Math.min(o.roundLimit,1.05):1.05,B=o.halfWidth!=null?o.halfWidth:2,R=!!o.textured;let v,p,U,ht=null;const c=this._prevNormal,h=this._nextNormal;let ft=-1,ot=-1;const w=this._joinNormal;let S,E;const Ut=this._textureNormalLeft,bt=this._textureNormalRight,C=this._textureNormal;let $=-1,N=-1;const Ot=o.wrapDistance||65535;let F=o.initialDistance||0;const ae=this._writeVertex,le=this._writeTriangle,k=(z,Bt,ct,I,H,et)=>{const rt=ae(p,U,S,E,ct,I,z,Bt,H,et,F);return $>=0&&N>=0&&rt>=0&&le($,N,rt),$=N,N=rt,rt};x&&(v=i[i.length-2],h.x=u.x-v.x,h.y=u.y-v.y,ot=zt(h),h.x/=ot,h.y/=ot);let yt=!1;for(let z=0;z<i.length;++z){if(yt&&(yt=!1,F=0),v&&(c.x=-h.x,c.y=-h.y,ft=ot,F+ft>Ot&&(yt=!0)),yt){const L=(Ot-F)/ft;ft=Ot-F,v={x:(1-L)*v.x+L*i[z].x,y:(1-L)*v.y+L*i[z].y},--z}else v=i[z];p=v.x,U=v.y;const Bt=z<=0&&!yt,ct=z===i.length-1;if(Bt||(F+=ft),ht=ct?x?i[1]:null:i[z+1],ht?(h.x=ht.x-p,h.y=ht.y-U,ot=zt(h),h.x/=ot,h.y/=ot):(h.x=void 0,h.y=void 0),!x){if(Bt){q(w,h),S=w.x,E=w.y,g===st.SQUARE&&(k(-h.y-h.x,h.x-h.y,h.x,h.y,0,-1),k(h.y-h.x,-h.x-h.y,h.x,h.y,0,1)),g===st.ROUND&&(k(-h.y-h.x,h.x-h.y,h.x,h.y,-1,-1),k(h.y-h.x,-h.x-h.y,h.x,h.y,-1,1)),g!==st.ROUND&&g!==st.BUTT||(k(-h.y,h.x,h.x,h.y,0,-1),k(h.y,-h.x,h.x,h.y,0,1));continue}if(ct){G(w,c),S=w.x,E=w.y,g!==st.ROUND&&g!==st.BUTT||(k(c.y,-c.x,-c.x,-c.y,0,-1),k(-c.y,c.x,-c.x,-c.y,0,1)),g===st.SQUARE&&(k(c.y-c.x,-c.x-c.y,-c.x,-c.y,0,-1),k(-c.y-c.x,c.x-c.y,-c.x,-c.y,0,1)),g===st.ROUND&&(k(c.y-c.x,-c.x-c.y,-c.x,-c.y,1,-1),k(-c.y-c.x,c.x-c.y,-c.x,-c.y,1,1));continue}}let I,H,et=-er(c,h);if(Math.abs(et)<.01)ee(c,h)>0?(w.x=c.x,w.y=c.y,et=1,I=Number.MAX_VALUE,H=!0):(q(w,h),et=1,I=1,H=!1);else{w.x=(c.x+h.x)/et,w.y=(c.y+h.y)/et,I=zt(w);const L=(I-1)*B*y;H=I>4||L>ft&&L>ot}S=w.x,E=w.y;let rt=A;switch(A){case J.BEVEL:I<1.05&&(rt=J.MITER);break;case J.ROUND:I<D&&(rt=J.MITER);break;case J.MITER:I>m&&(rt=J.BEVEL)}switch(rt){case J.MITER:if(k(w.x,w.y,-c.x,-c.y,0,-1),k(-w.x,-w.y,-c.x,-c.y,0,1),ct)break;if(R){const L=yt?0:F;$=this._writeVertex(p,U,S,E,h.x,h.y,w.x,w.y,0,-1,L),N=this._writeVertex(p,U,S,E,h.x,h.y,-w.x,-w.y,0,1,L)}break;case J.BEVEL:{const L=et<0;let M,P,at,Q;if(L){const V=$;$=N,N=V,M=Ut,P=bt}else M=bt,P=Ut;if(H)at=L?q(this._innerPrev,c):G(this._innerPrev,c),Q=L?G(this._innerNext,h):q(this._innerNext,h);else{const V=L?qt(this._inner,w):te(this._inner,w);at=V,Q=V}const Y=L?G(this._bevelStart,c):q(this._bevelStart,c);k(at.x,at.y,-c.x,-c.y,M.x,M.y);const pt=k(Y.x,Y.y,-c.x,-c.y,P.x,P.y);if(ct)break;const it=L?q(this._bevelEnd,h):G(this._bevelEnd,h);if(H){const V=this._writeVertex(p,U,S,E,-c.x,-c.y,0,0,0,0,F);$=this._writeVertex(p,U,S,E,h.x,h.y,Q.x,Q.y,M.x,M.y,F),N=this._writeVertex(p,U,S,E,h.x,h.y,it.x,it.y,P.x,P.y,F),this._writeTriangle(pt,V,N)}else{if(R){const V=this._bevelMiddle;V.x=(Y.x+it.x)/2,V.y=(Y.y+it.y)/2,gt(C,V,-c.x,-c.y),k(V.x,V.y,-c.x,-c.y,C.x,C.y),gt(C,V,h.x,h.y),$=this._writeVertex(p,U,S,E,h.x,h.y,V.x,V.y,C.x,C.y,F),N=this._writeVertex(p,U,S,E,h.x,h.y,Q.x,Q.y,M.x,M.y,F)}else{const V=$;$=N,N=V}k(it.x,it.y,h.x,h.y,P.x,P.y)}if(L){const V=$;$=N,N=V}break}case J.ROUND:{const L=et<0;let M,P;if(L){const W=$;$=N,N=W,M=Ut,P=bt}else M=bt,P=Ut;const at=L?qt(this._inner,w):te(this._inner,w);let Q,Y;H?(Q=L?q(this._innerPrev,c):G(this._innerPrev,c),Y=L?G(this._innerNext,h):q(this._innerNext,h)):(Q=at,Y=at);const pt=L?G(this._roundStart,c):q(this._roundStart,c),it=L?q(this._roundEnd,h):G(this._roundEnd,h),V=k(Q.x,Q.y,-c.x,-c.y,M.x,M.y),Nt=k(pt.x,pt.y,-c.x,-c.y,P.x,P.y);if(ct)break;const lt=this._writeVertex(p,U,S,E,-c.x,-c.y,0,0,0,0,F);H||this._writeTriangle($,N,lt);const nt=qt(this._outer,at),xt=this._writeVertex(p,U,S,E,h.x,h.y,it.x,it.y,P.x,P.y,F);let _t,Tt;const Ft=I>2;if(Ft){let W;I!==Number.MAX_VALUE?(nt.x/=I,nt.y/=I,W=ee(c,nt),W=(I*(W*W-1)+1)/W):W=-1,_t=L?G(this._startBreak,c):q(this._startBreak,c),_t.x+=c.x*W,_t.y+=c.y*W,Tt=L?q(this._endBreak,h):G(this._endBreak,h),Tt.x+=h.x*W,Tt.y+=h.y*W}gt(C,nt,-c.x,-c.y);const Vt=this._writeVertex(p,U,S,E,-c.x,-c.y,nt.x,nt.y,C.x,C.y,F);gt(C,nt,h.x,h.y);const It=R?this._writeVertex(p,U,S,E,h.x,h.y,nt.x,nt.y,C.x,C.y,F):Vt,Pt=lt,St=R?this._writeVertex(p,U,S,E,h.x,h.y,0,0,0,0,F):lt;let Lt=-1,mt=-1;if(Ft&&(gt(C,_t,-c.x,-c.y),Lt=this._writeVertex(p,U,S,E,-c.x,-c.y,_t.x,_t.y,C.x,C.y,F),gt(C,Tt,h.x,h.y),mt=this._writeVertex(p,U,S,E,h.x,h.y,Tt.x,Tt.y,C.x,C.y,F)),R?Ft?(this._writeTriangle(Pt,Nt,Lt),this._writeTriangle(Pt,Lt,Vt),this._writeTriangle(St,It,mt),this._writeTriangle(St,mt,xt)):(this._writeTriangle(Pt,Nt,Vt),this._writeTriangle(St,It,xt)):Ft?(this._writeTriangle(lt,Nt,Lt),this._writeTriangle(lt,Lt,mt),this._writeTriangle(lt,mt,xt)):(this._writeTriangle(lt,Nt,Vt),this._writeTriangle(lt,It,xt)),H?($=this._writeVertex(p,U,S,E,h.x,h.y,Y.x,Y.y,M.x,M.y,F),N=xt):($=R?this._writeVertex(p,U,S,E,h.x,h.y,Y.x,Y.y,M.x,M.y,F):V,this._writeTriangle($,St,xt),N=xt),L){const W=$;$=N,N=W}break}}}}}export{ar as C,or as a,lr as c,sr as i};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./libtess-asm-CoBLsFeE.js","./index-CvP2eicz.js","./index-D_cCBC5R.css","./libtess-B9mwmV5T.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
