import{e as i,r as l,X as c,h as m,o as p,c as d,d as n,A as _,B as v,t as x,u as f,F as g}from"../app.367c0303.js";const h={style:{"margin-top":"16px"}},w={style:{"margin-top":"16px"}},F=i({__name:"demo",setup(y){function s(){return new Promise((t,a)=>{setTimeout(()=>{t(`${String(Date.now())}`)},300)})}const e=l(""),{data:o,run:r}=c(()=>s(),{debounceWait:1e3,manual:!0});return m(e,t=>{r()}),(t,a)=>(p(),d(g,null,[n("div",h,[_(n("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[v,e.value]])]),n("div",w,"value\uFF1A"+x(f(o)),1)],64))}});export{F as _};
