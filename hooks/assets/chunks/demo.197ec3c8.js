import{e as i,r as l,Z as c,i as m,o as p,c as d,d as n,C as _,D as v,t as x,u as f,F as g}from"../app.032845d0.js";const w={style:{"margin-top":"16px"}},y={style:{"margin-top":"16px"}},h=i({__name:"demo",setup(D){function s(){return new Promise((t,a)=>{setTimeout(()=>{t(`${String(Date.now())}`)},300)})}const e=l(""),{data:o,run:r}=c(()=>s(),{debounceWait:1e3,manual:!0});return m(e,t=>{r()}),(t,a)=>(p(),d(g,null,[n("div",w,[_(n("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[v,e.value]])]),n("div",y,"value\uFF1A"+x(f(o)),1)],64))}});export{h as _};
