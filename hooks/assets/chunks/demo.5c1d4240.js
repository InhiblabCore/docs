import{e as m,r as n,n as v,o as d,c as p,d as t,t as s,a as f,w as _,f as k,u as F,$ as b}from"../app.367c0303.js";const C=m({__name:"demo",setup(w){const o=n(0),a=n(0),u=n(0);function r(){return new Promise(l=>{setTimeout(()=>{l()},2e3)})}const i=b(async()=>{a.value+=1,await r(),o.value+=1,u.value+=1});return(l,e)=>{const c=v("vhp-button");return d(),p("div",null,[t("div",null,"submit count: "+s(o.value),1),t("div",null,"start\uFF1A"+s(a.value),1),t("div",null,"success\uFF1A"+s(u.value),1),t("div",null,[f(c,{onClick:e[0]||(e[0]=()=>F(i)())},{default:_(()=>e[1]||(e[1]=[k("Submit")])),_:1})])])}}});export{C as _};
