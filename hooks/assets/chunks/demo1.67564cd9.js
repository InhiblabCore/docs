import{e as a,r as s,I as l,o,c as u,d as n,t as c}from"../app.367c0303.js";const d=a({__name:"demo",setup(i){const e=s(),t=s(0);return l("click",()=>{t.value+=1},{target:e}),(_,r)=>(o(),u("div",null,[n("div",{ref_key:"divRef",ref:e,style:{cursor:"pointer"}},"Click me!",512),r[0]||(r[0]=n("br",null,null,-1)),n("div",null,"click count\uFF1A"+c(t.value),1)]))}}),p=a({__name:"demo1",setup(i){const e=s(0);return l("resize",()=>{e.value+=1}),(t,_)=>(o(),u("div",null,[n("div",null,"Window size change\uFF1A"+c(e.value),1)]))}});export{d as _,p as a};
