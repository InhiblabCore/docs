import{u as s}from"./useRequest.8f8f512c.js";import"./stringify.b1a2f83f.js";import{e as n,r as a,o as c,c as u,q as m,d as i,t as p}from"../app.f30a318a.js";const _={style:{"margin-top":"16px"}},x=n({__name:"demo",setup(l){function o(){return new Promise((t,r)=>{setTimeout(()=>{r("error")},1e3)})}const e=a(0);return s(()=>o(),{retryCount:3,onError:()=>{e.value+=1}}),(t,r)=>(c(),u("div",_,[m("Error count\uFF1A "),i("span",null,p(e.value),1)]))}});export{x as _};
