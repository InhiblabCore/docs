import{e as p,r as s,ao as v,l as f,o as m,c as _,d as n,t as d,a as u,w as c,f as r,F as k}from"../app.d836b1d2.js";const g=p({__name:"demo",setup(x){const t=s(0),o=s(0);return v(a=>{console.log("Index of changed dependencies: ",a)},[t,o]),(a,e)=>{const l=f("vhp-button");return m(),_(k,null,[n("div",null,[n("div",null,"count1: "+d(t.value),1),u(l,{onClick:e[0]||(e[0]=i=>t.value+=1)},{default:c(()=>[r("Add")]),_:1})]),n("div",null,[n("div",null,"count2: "+d(o.value),1),u(l,{onClick:e[1]||(e[1]=i=>o.value+=1)},{default:c(()=>[r("Add")]),_:1})])],64)}}});export{g as _};