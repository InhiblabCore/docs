import{u as d}from"./useRequest.e8211c35.js";import"./stringify.51fb85fa.js";import"./intersection-observer.38c1bba6.js";import{d as g,o as _,c as k,e as m,t as l,u as n,F as v}from"../app.4d6255f4.js";const P=g({__name:"demo",setup(B){const p=(e,{formatter:a})=>({onSuccess:()=>{e.setData(a==null?void 0:a(e.state.data),"data")}});function c(){return new Promise(e=>{setTimeout(()=>{e({name:"vue-hooks-plus",age:18})},1e3)})}const{data:t,loading:s}=d(()=>c(),{formatter:e=>({name:`${e.name} - plugins update`,age:20})},[p]);return(e,a)=>{var o,u,r,i;return _(),k(v,null,[m("div",null,l(n(s)?"loading":(u=(o=n(t))==null?void 0:o.name)!=null?u:"-"),1),m("div",null,l(n(s)?"loading":(i=(r=n(t))==null?void 0:r.age)!=null?i:"-"),1)],64)}}});export{P as _};
