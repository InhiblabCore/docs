import{e as a,r as s,H as c,o as r,c as l,d as n,t as o}from"../app.25ea1577.js";const _=n("br",null,null,-1),p=a({__name:"demo",setup(u){const e=s(),t=s(0);return c("click",()=>{t.value+=1},{target:e}),(i,d)=>(r(),l("div",null,[n("div",{ref_key:"divRef",ref:e,style:{cursor:"pointer"}},"Click me!",512),_,n("div",null,"click count\uFF1A"+o(t.value),1)]))}}),f=a({__name:"demo1",setup(u){const e=s(0);return c("resize",()=>{e.value+=1}),(t,i)=>(r(),l("div",null,[n("div",null,"Window size change\uFF1A"+o(e.value),1)]))}});export{p as _,f as a};
