import{e as v,r,S as _,q as f,o as m,c as d,d as C,t as k,a as t,w as a,f as n,u as s,F as x}from"../app.032845d0.js";const I=v({__name:"demo",setup(g){const o=r(0),l=r(2e3),{clear:c,restart:i}=_(()=>{o.value+=1},l),u=()=>{l.value+=1e3},p=()=>{l.value=2e3};return(h,y)=>{const e=f("vhp-button");return m(),d(x,null,[C("div",null," value: "+k(o.value),1),t(e,{style:{"margin-top":"8px"},onClick:u},{default:a(()=>[n("interval + 1000")]),_:1}),t(e,{style:{"margin-left":"8px"},onClick:p},{default:a(()=>[n(" reset interval")]),_:1}),t(e,{style:{"margin-left":"8px"},onClick:s(c)},{default:a(()=>[n("clear")]),_:1},8,["onClick"]),t(e,{style:{"margin-left":"8px"},onClick:s(i)},{default:a(()=>[n("restart")]),_:1},8,["onClick"])],64)}}});export{I as _};
