import{a as l}from"./stringify.4c9b9ab5.js";import"./intersection-observer.38c1bba6.js";import{r as h,d as c,o as i,c as p,e as d,u as f}from"../app.3964b21e.js";function r(a){return typeof a=="function"}function _(a,t={}){const n=h((()=>{const e=l.get(a);return typeof e=="string"?e:r(t.defaultValue)?t.defaultValue():t.defaultValue})());return[n,(e,m={})=>{const{defaultValue:S,...g}={...t,...m},v=()=>{const o=r(e)?e(n.value):e;return o===void 0?l.remove(a):l.set(a,o,g),o};n.value=v()}]}const V=["value"],B=c({__name:"demo",setup(a){const[t,u]=_("useCookieStateString"),n=s=>{var e;u((e=s.target)==null?void 0:e.value)};return(s,e)=>(i(),p("div",null,[d("input",{type:"text",value:f(t),onChange:n,placeholder:"please input",style:{width:"300px"}},null,40,V)]))}}),x=["value"],M=c({__name:"demo1",setup(a){const[t,u]=_("useCookieStateString-set"),n=s=>{u(()=>s.target.value)};return(s,e)=>(i(),p("div",null,[d("input",{type:"text",value:f(t),onChange:n,placeholder:"please input",style:{width:"300px"}},null,40,x)]))}});export{B as _,M as a};