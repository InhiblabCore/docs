import{u as s}from"./useRequest.48443945.js";import"./stringify.471e71ff.js";import"./intersection-observer.38c1bba6.js";import{d as n,r as a,o as c,c as u,q as m,e as i,t as p}from"../app.7e92691a.js";const _={style:{"margin-top":"16px"}},g=n({__name:"demo",setup(l){function o(){return new Promise((t,r)=>{setTimeout(()=>{r("error")},1e3)})}const e=a(0);return s(()=>o(),{retryCount:3,onError:()=>{e.value+=1}}),(t,r)=>(c(),u("div",_,[m("Error count\uFF1A "),i("span",null,p(e.value),1)]))}});export{g as _};
