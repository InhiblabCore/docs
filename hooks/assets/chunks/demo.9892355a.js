import{e as u,r as m,g as p,o as l,c,d as o,x as d,y as _,t as x,u as f,F as g}from"../app.a751dad7.js";import{u as v}from"./useRequest.c5c3e16e.js";import"./stringify.dafbd646.js";import"./isBrowser.46f69b0e.js";const y={style:{"margin-top":"16px"}},w={style:{"margin-top":"16px"}},S=u({__name:"demo",setup(F){function n(){return new Promise((t,a)=>{setTimeout(()=>{t(`${String(Date.now())}`)},300)})}const e=m(""),{data:s,run:r}=v(()=>n(),{debounceWait:1e3,manual:!0});return p(e,t=>{r()}),(t,a)=>(l(),c(g,null,[o("div",y,[d(o("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i)},null,512),[[_,e.value]])]),o("div",w,"value\uFF1A"+x(f(s)),1)],64))}});export{S as _};