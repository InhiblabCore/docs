import{e as m,r as o,ae as c,Z as p,g as d,o as _,c as v,d as a,A as g,B as x,t as f,j as h,F as w}from"../app.b1a612ce.js";const y={style:{"margin-top":"16px"}},B={style:{"margin-top":"16px"}},T=m({__name:"demo",setup(F){function r(){return new Promise((n,t)=>{setTimeout(()=>{n(`${String(Date.now())}`)},1e3)})}const e=o(""),s=o(500);c(()=>{s.value=3e3},2e3);const{data:u,run:i}=p(()=>r(),{throttleWait:s,manual:!0});return d(e,()=>{i()}),(n,t)=>(_(),v(w,null,[a("div",y,[g(a("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,512),[[x,e.value]])]),a("div",B,"value\uFF1A"+f(h(u)),1)],64))}});export{T as _};
