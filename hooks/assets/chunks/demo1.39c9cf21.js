import"./stringify.7c979077.js";import{u as s}from"./index.77ab0585.js";import{e as o,r,o as a,c,d as t,t as l}from"../app.fefc8ec7.js";const _=t("br",null,null,-1),f=o({__name:"demo",setup(i){const e=r(),n=r(0);return s("click",()=>{n.value+=1},{target:e}),(u,d)=>(a(),c("div",null,[t("div",{ref_key:"divRef",ref:e,style:{cursor:"pointer"}},"Click me!",512),_,t("div",null,"click count\uFF1A"+l(n.value),1)]))}}),k=o({__name:"demo1",setup(i){const e=r(0);return s("resize",()=>{e.value+=1}),(n,u)=>(a(),c("div",null,[t("div",null,"Window size change\uFF1A"+l(e.value),1)]))}});export{f as _,k as a};
