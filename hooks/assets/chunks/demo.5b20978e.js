import"./stringify.f75e9b86.js";import{r as i,k as O,B as R,e as w,j as F,g as T,v as b,o as m,c as p,F as B,q as H,u as P,t as E}from"../app.90f4be9f.js";import{u as j}from"./useRequest.d9058b22.js";function q(s){R(w({setup(){return s(),()=>{}}})).mount(document.createElement("div"))}const v="VUE_HOOKS_PLUS_USE_REQUEST_DEFAULT_KEY";function x(s){return typeof s=="string"||typeof s=="number"}function V(s,u,o){const c=i(o==null?void 0:o.fetchKey),t=i({}),r=i({}),e=n=>{r.value=n},a=(...n)=>{var h,y;const f=i(),l=(y=(h=c.value)==null?void 0:h.call(c,...n))!=null?y:v;f.value=l,q(()=>{const{data:d,run:K,params:_,loading:S}=j(s,{...u,cacheKey:l,manual:!0});F(()=>{t.value[l]={key:l,data:d==null?void 0:d.value,params:_.value,loading:S.value},e(t.value)}),K(...n),T([d,_,S,f],U=>{const[L=void 0,A=void 0,D=!1,g=v]=U,k=x(g)?g:v;t.value[k]={key:k,data:L,params:A,loading:D},e(t.value)})})};return{fetchs:O(r),fetchRun:a}}const N=w({__name:"demo",setup(s){async function u(e){return new Promise(a=>{setTimeout(()=>{a(`VueHooks Plus ${e.desc}`)},e.desc==="SSS"?4e3:2e3)})}const o=["A","S","SS","SSS"],{fetchRun:c,fetchs:t}=V(u,{manual:!0},{fetchKey:e=>e.desc});F(()=>{o.forEach(e=>{c({desc:e})})});const r=b(()=>{var e;return Object.keys((e=t.value)!=null?e:{}).map(a=>({name:t.value[a].key,data:t.value[a].data,loading:t.value[a].loading,key:t.value[a].key}))});return(e,a)=>(m(),p("div",null,[(m(!0),p(B,null,H(P(r),n=>(m(),p("div",{key:n.key,class:"item"},E(n.loading?"loading":"")+" "+E(n.data),1))),128))]))}});export{N as _};