import{e as i,r as m,g as l,o as p,c,d as n,z as d,A as _,t as f,u as g,F as v}from"../app.90f4be9f.js";import{u as x}from"./useRequest.0be4893d.js";import"./stringify.d118bae4.js";const w={style:{"margin-top":"16px"}},y={style:{"margin-top":"16px"}},k=i({__name:"demo",setup(F){function o(){return new Promise((t,a)=>{setTimeout(()=>{t(`${String(Date.now())}`)},300)})}const e=m(""),{data:s,run:r}=x(()=>o(),{debounceWait:1e3,manual:!0});return l(e,t=>{r()}),(t,a)=>(p(),c(v,null,[n("div",w,[d(n("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[_,e.value]])]),n("div",y,"value\uFF1A"+f(g(s)),1)],64))}});export{k as _};