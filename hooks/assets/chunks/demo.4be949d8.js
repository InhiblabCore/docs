import{e as m,r as t,q as v,o as d,c as p,d as e,t as n,a as f,w as _,f as k,u as F,a1 as b}from"../app.032845d0.js";const C=m({__name:"demo",setup(w){const s=t(0),a=t(0),o=t(0);function c(){return new Promise(u=>{setTimeout(()=>{u()},2e3)})}const r=b(async()=>{a.value+=1,await c(),s.value+=1,o.value+=1});return(u,l)=>{const i=v("vhp-button");return d(),p("div",null,[e("div",null,"submit count: "+n(s.value),1),e("div",null,"start\uFF1A"+n(a.value),1),e("div",null,"success\uFF1A"+n(o.value),1),e("div",null,[f(i,{onClick:l[0]||(l[0]=()=>F(r)())},{default:_(()=>[k("Submit")]),_:1})])])}}});export{C as _};
