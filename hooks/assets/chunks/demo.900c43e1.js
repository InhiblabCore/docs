import{u as s}from"./useRequest.c5c3e16e.js";import"./stringify.dafbd646.js";import"./isBrowser.46f69b0e.js";import{e as l,o as c,c as p,d as n,t as o,u as t,F as d}from"../app.a751dad7.js";const U=l({__name:"demo",setup(_){function a(){return new Promise(e=>{setTimeout(()=>{e("vue-hooks-plus useRequest")},1e3)})}function r(){return new Promise(e=>{setTimeout(()=>{e("vue-hooks-plus useRequest A")},1e3)})}const{data:u}=s(()=>a()),{data:m,loading:i}=s(()=>r(),{loadingDelay:300});return(e,f)=>(c(),p(d,null,[n("div",null,"Username\uFF1A"+o(t(u)),1),n("div",null,"Username\uFF1A"+o(t(i)?"loading...":t(m)),1)],64))}});export{U as _};