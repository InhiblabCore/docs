import{r as I,l as V,u as f}from"../app.4d6255f4.js";import{i as w}from"./isBrowser.dc916034.js";function m(l){return typeof l=="function"}function y(l){function z(c,e){let a;try{a=l()}catch(r){console.error(r)}const d=r=>e!=null&&e.serializer?e==null?void 0:e.serializer(r):JSON.stringify(r),h=r=>e!=null&&e.deserializer?e==null?void 0:e.deserializer(r):JSON.parse(r);function S(){try{const r=a==null?void 0:a.getItem(f(c));if(r)return h(r)}catch(r){console.error(r)}return m(e==null?void 0:e.defaultValue)?e==null?void 0:e.defaultValue():e==null?void 0:e.defaultValue}const t=I(S());return V(()=>{c&&(t.value=S())}),[t,r=>{if(typeof r=="undefined")t.value=void 0,a==null||a.removeItem(f(c));else if(m(r)){const u=r(t.value);try{t.value=u,a==null||a.setItem(f(c),d(u))}catch(n){console.error(n)}}else try{t.value=r,a==null||a.setItem(f(c),d(r))}catch(u){console.error(u)}}]}return z}const O=y(()=>w?localStorage:void 0);export{O as u};
