import{e as m,Y as _,o as p,c as F,d as c,t as d,j as t,F as k}from"../app.b3504820.js";const S=m({__name:"demo",setup(v){const r=(e,{formatter:n})=>({onSuccess:()=>{e.setFetchState(n==null?void 0:n(e.state.data),"data")}});function g(){return new Promise(e=>{setTimeout(()=>{e({name:"vue-hooks-plus",age:18})},1e3)})}const{data:a,loading:s}=_(()=>g(),{formatter:e=>({name:`${e==null?void 0:e.name} - plugins update`,age:20})},[r]);return(e,n)=>{var o,u,l,i;return p(),F(k,null,[c("div",null,d(t(s)?"loading":(u=(o=t(a))==null?void 0:o.name)!=null?u:"-"),1),c("div",null,d(t(s)?"loading":(i=(l=t(a))==null?void 0:l.age)!=null?i:"-"),1)],64)}}});export{S as _};
