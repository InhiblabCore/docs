import{u as t}from"./useRequest.0be4893d.js";import"./stringify.d118bae4.js";import{e as l,o as c,c as d,d as n,t as o,u as s,F as p}from"../app.90f4be9f.js";const v=l({__name:"demo",setup(_){function a(){return new Promise(e=>{setTimeout(()=>{e("vue-hooks-plus useRequest")},1e3)})}function u(){return new Promise(e=>{setTimeout(()=>{e("vue-hooks-plus useRequest A")},1e3)})}const{data:r}=t(()=>a()),{data:m,loading:i}=t(()=>u(),{loadingDelay:300});return(e,f)=>(c(),d(p,null,[n("div",null,"Username\uFF1A"+o(s(r)),1),n("div",null,"Username\uFF1A"+o(s(i)?"loading...":s(m)),1)],64))}});export{v as _};