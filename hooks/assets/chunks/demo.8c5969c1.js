import"./stringify.51fb85fa.js";import{u as R}from"./useRequest.e8211c35.js";import{r as d,l as D,g as O,d as T,s as b,o as m,c as f,F as A,n as P,u as x,t as k}from"../app.4d6255f4.js";import"./intersection-observer.38c1bba6.js";const v="VUE_HOOKS_PLUS_USE_REQUEST_DEFAULT_KEY";function B(s){return typeof s=="string"||typeof s=="number"}function H(s,i,c){const o=d(c==null?void 0:c.fetchKey),t=d({}),u=d({}),e=n=>{u.value=n};return{fetchs:u,fetchRun:(...n)=>{var y,S;const h=d(),r=(S=(y=o.value)==null?void 0:y.call(o,...n))!=null?S:v;h.value=r;const{data:l,run:w,params:p,loading:_}=R(s,{...i,cacheKey:r,manual:!0});D(()=>{t.value[r]={key:r,data:l==null?void 0:l.value,params:p.value,loading:_.value},e(t.value)}),w(...n),O([l,p,_,h],F=>{const[K=void 0,U=void 0,L=!1,g=v]=F,E=B(g)?g:v;t.value[E]={key:E,data:K,params:U,loading:L},e(t.value)})}}}const C=T({__name:"demo",setup(s){async function i(e){return new Promise(a=>{setTimeout(()=>{a(`VueHooks Plus ${e.desc}`)},e.desc==="SSS"?4e3:2e3)})}const c=["A","S","SS","SSS"],{fetchRun:o,fetchs:t}=H(i,{manual:!0},{fetchKey:e=>e.desc});c.forEach(e=>{o({desc:e})});const u=b(()=>{var e;return Object.keys((e=t.value)!=null?e:{}).map(a=>({name:t.value[a].key,data:t.value[a].data,loading:t.value[a].loading,key:t.value[a].key}))});return(e,a)=>(m(),f("div",null,[(m(!0),f(A,null,P(x(u),n=>(m(),f("div",{key:n.key,class:"item"},k(n.loading?"loading":"")+" "+k(n.data),1))),128))]))}});export{C as _};
