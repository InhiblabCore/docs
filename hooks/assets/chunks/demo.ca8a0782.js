import"./stringify.dc8c2ebb.js";import"./intersection-observer.38c1bba6.js";import{i as u}from"./isBrowser.dc916034.js";import{r as s,j as r,g as c,h as l,u as n,k as m,e as a,o as i,c as f}from"../app.a1bd5cfe.js";const p={restoreOnUnmount:!1};function d(e,o=p){const t=s(u?document.title:"");r(e)?c(e,()=>{document.title=e.value}):document.title=e,l(()=>{document.title=n(e)}),m(()=>{o.restoreOnUnmount&&(document.title=n(t))})}const U=a({__name:"demo",setup(e){const o=s("hello vue-hooks-plus");return d(o),(t,_)=>(i(),f("div",null,"title\uFF1Ahellovue-hooks-plus"))}});export{U as _};