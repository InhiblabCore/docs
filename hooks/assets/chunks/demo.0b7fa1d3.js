import{e as f,Z as g,o as F,c as k,d as c,t as d,u as r,F as v}from"../app.e653f72a.js";const S=f({__name:"demo",setup(B){const l=(e,{pluginOptions:a})=>({name:"formatterPlugin",onSuccess:()=>{var t;e.setFetchState((t=a==null?void 0:a.formatter)==null?void 0:t.call(a,e.state.data),"data")}});function _(){return new Promise(e=>{setTimeout(()=>{e({name:"vue-hooks-plus",age:18})},1e3)})}const{data:o,loading:m}=g(()=>_(),{debugKey:"plugindemo",pluginOptions:{formatter:e=>({name:`formatter ${e.name}`,age:e.age+1})}},[l]);return(e,a)=>{var t,n,s,u;return F(),k(v,null,[c("div",null,d(r(m)?"loading":(n=(t=r(o))==null?void 0:t.name)!=null?n:"-"),1),c("div",null,d(r(m)?"loading":(u=(s=r(o))==null?void 0:s.age)!=null?u:"-"),1)],64)}}});export{S as _};
