import"./stringify.51fb85fa.js";import"./intersection-observer.38c1bba6.js";import{d as f,r as s,m as p,o as v,c as d,e as o,t as a,b as _,w as k,q as w,u as b}from"../app.4d6255f4.js";function F(u){let e=!1;return async(...n)=>{if(!e){e=!0;try{const t=await u(...n);return e=!1,t}catch(t){throw e=!1,t}}}}const C=f({__name:"demo",setup(u){const e=s(0),n=s(0),t=s(0);function c(){return new Promise(r=>{setTimeout(()=>{r()},2e3)})}const i=F(async()=>{n.value+=1,await c(),e.value+=1,t.value+=1});return(r,l)=>{const m=p("vhp-button");return v(),d("div",null,[o("div",null,"submit count: "+a(e.value),1),o("div",null,"start\uFF1A"+a(n.value),1),o("div",null,"success\uFF1A"+a(t.value),1),o("div",null,[_(m,{onClick:l[0]||(l[0]=()=>b(i)())},{default:k(()=>[w("Submit")]),_:1})])])}}});export{C as _};
