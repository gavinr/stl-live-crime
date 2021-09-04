import"./vendor.6e209a4d.js";function n(n){const l=null!=n.normalizationField||null!=n.normalizationType,e=null!=n.minValue||null!=n.maxValue,t=!!n.sqlExpression&&n.supportsSQLExpression;return!l&&!e&&!t}function l(n){const{values:l,supportsNullCount:e}=n,t=l.filter((n=>null!=n)).length,u={count:t};return e&&(u.nullcount=l.length-t),u}function e(n){const{values:l,useSampleStdDev:e,supportsNullCount:t}=n;let u=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,i=null,c=0;const m=null==n.minValue?-1/0:n.minValue,f=null==n.maxValue?1/0:n.maxValue;for(const N of l)Number.isFinite(N)?N>=m&&N<=f&&(o+=N,u=Math.min(u,N),a=Math.max(a,N),c++):"string"==typeof N&&c++;if(c&&null!=o){r=o/c;let n=0;for(const e of l)Number.isFinite(e)&&e>=m&&e<=f&&(n+=(e-r)**2);i=e?c>1?n/(c-1):0:c>0?n/c:0,s=Math.sqrt(i)}else u=null,a=null;const p={avg:r,count:c,max:a,min:u,stddev:s,sum:o,variance:i};return t&&(p.nullcount=l.length-c),p}function t(n,l){return l?(["avg","stddev","variance"].forEach((l=>{null!=n[l]&&(n[l]=Math.ceil(n[l]))})),n):n}function u(n,l,e,t){let u=null;switch(l){case"log":0!==n&&(u=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(t)&&0!==t&&(u=n/t*100);break;case"field":Number.isFinite(e)&&0!==e&&(u=n/e);break;case"natural-log":n>0&&(u=Math.log(n));break;case"square-root":n>0&&(u=n**.5)}return u}export{l as i,n as o,e as r,u as s,t as u};
