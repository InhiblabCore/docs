import"./stringify.b1a2f83f.js";import{r as i,z as D,e as w,j as F,g as O,s as T,o as m,c as p,F as b,n as H,u as P,t as k}from"../app.f30a318a.js";import{u as j}from"./useRequest.8f8f512c.js";function x(s){D(w({setup(){return s(),()=>{}}})).mount(document.createElement("div"))}const f="VUE_HOOKS_PLUS_USE_REQUEST_DEFAULT_KEY";function B(s){return typeof s=="string"||typeof s=="number"}function V(s,u,c){const o=i(c==null?void 0:c.fetchKey),t=i({}),r=i({}),e=n=>{r.value=n};return{fetchs:r,fetchRun:(...n)=>{var h,_;const v=i(),l=(_=(h=o.value)==null?void 0:h.call(o,...n))!=null?_:f;v.value=l,x(()=>{const{data:d,run:K,params:y,loading:S}=j(s,{...u,cacheKey:l,manual:!0});F(()=>{t.value[l]={key:l,data:d==null?void 0:d.value,params:y.value,loading:S.value},e(t.value)}),K(...n),O([d,y,S,v],U=>{const[L=void 0,R=void 0,A=!1,g=f]=U,E=B(g)?g:f;t.value[E]={key:E,data:L,params:R,loading:A},e(t.value)})})}}}const C=w({__name:"demo",setup(s){async function u(e){return new Promise(a=>{setTimeout(()=>{a(`VueHooks Plus ${e.desc}`)},e.desc==="SSS"?4e3:2e3)})}const c=["A","S","SS","SSS"],{fetchRun:o,fetchs:t}=V(u,{manual:!0},{fetchKey:e=>e.desc});F(()=>{c.forEach(e=>{o({desc:e})})});const r=T(()=>{var e;return Object.keys((e=t.value)!=null?e:{}).map(a=>({name:t.value[a].key,data:t.value[a].data,loading:t.value[a].loading,key:t.value[a].key}))});return(e,a)=>(m(),p("div",null,[(m(!0),p(b,null,H(P(r),n=>(m(),p("div",{key:n.key,class:"item"},k(n.loading?"loading":"")+" "+k(n.data),1))),128))]))}});export{C as _};
