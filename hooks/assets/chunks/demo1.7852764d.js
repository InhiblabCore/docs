import"./stringify.f75e9b86.js";import{r as d,k,e as r,g as c,n as i,o as _,c as v,d as m,t as f,a as u,w as p,s as l,u as b,h as w}from"../app.90f4be9f.js";function h(){const e=d({}),n=()=>{e.value=Object.assign({},{...e.value})};return{update:k(e),setUpdate:n}}const C=r({__name:"demo",setup(e){const{update:n,setUpdate:s}=h(),o=d(Date.now());return c(n,()=>{o.value=Date.now()}),(g,t)=>{const a=i("vhp-button");return _(),v("div",null,[m("div",null,"Time: "+f(o.value),1),u(a,{class:"btn",type:"vhp-button",onClick:t[0]||(t[0]=()=>b(s)())},{default:p(()=>[l("update")]),_:1})])}}}),D=r({__name:"demo1",setup(e){const{update:n,setUpdate:s}=h(),o=d(0);return w(()=>{console.log("mounted!")}),c(n,()=>{location.hash=`${Date.now()}`}),(g,t)=>{const a=i("vhp-button");return _(),v("div",null,[m("div",null,"count:"+f(o.value),1),u(a,{type:"vhp-button",onClick:t[0]||(t[0]=()=>o.value++)},{default:p(()=>[l("Add")]),_:1}),u(a,{type:"vhp-button",style:{"margin-left":"16px"},onClick:t[1]||(t[1]=()=>b(s)())},{default:p(()=>[l("Refresh Page")]),_:1})])}}});export{C as _,D as a};