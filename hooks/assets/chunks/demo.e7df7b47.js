import{u as g}from"./useRequest.61b8cc34.js";import"./stringify.60d04010.js";import"./intersection-observer.38c1bba6.js";import{e as p,o as _,c as k,d as l,t as c,u as t,F as v}from"../app.70c79ca7.js";const P=p({__name:"demo",setup(B){const d=(e,{formatter:n})=>({onSuccess:()=>{e.setData(n==null?void 0:n(e.state.data),"data")}});function m(){return new Promise(e=>{setTimeout(()=>{e({name:"vue-hooks-plus",age:18})},1e3)})}const{data:a,loading:o}=g(()=>m(),{formatter:e=>({name:`${e==null?void 0:e.name} - plugins update`,age:20})},[d]);return(e,n)=>{var s,u,i,r;return _(),k(v,null,[l("div",null,c(t(o)?"loading":(u=(s=t(a))==null?void 0:s.name)!=null?u:"-"),1),l("div",null,c(t(o)?"loading":(r=(i=t(a))==null?void 0:i.age)!=null?r:"-"),1)],64)}}});export{P as _};