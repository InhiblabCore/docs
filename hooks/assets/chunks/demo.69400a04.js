import"./stringify.678a69ff.js";import{i as u}from"./isBrowser.46f69b0e.js";import{r as s,j as r,g as c,h as l,u as n,k as a,e as m,o as i,c as f}from"../app.d255f7e5.js";const p={restoreOnUnmount:!1};function d(e,o=p){const t=s(u?document.title:"");r(e)?c(e,()=>{document.title=e.value}):document.title=e,l(()=>{document.title=n(e)}),a(()=>{o.restoreOnUnmount&&(document.title=n(t))})}const O=m({__name:"demo",setup(e){const o=s("hello vue-hooks-plus");return d(o),(t,_)=>(i(),f("div",null,"title\uFF1Ahellovue-hooks-plus"))}});export{O as _};
