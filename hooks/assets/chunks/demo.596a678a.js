import{e as m,ai as f,q as v,o as _,c as k,d as o,a as n,w as l,f as a,u as t,t as x}from"../app.5e4b2b03.js";const C=m({__name:"demo",setup(c){const[r,{add:i,remove:u,reset:d,has:p}]=f(["hi vue-hooks-plus"]);return(g,e)=>{const s=v("vhp-button");return _(),k("div",null,[o("div",null,[n(s,{style:{"margin-left":"8px"},onClick:e[0]||(e[0]=()=>t(i)(String(Date.now())))},{default:l(()=>[a(" Add Timestamp ")]),_:1}),n(s,{style:{"margin-left":"8px"},onClick:e[1]||(e[1]=()=>t(u)("hi vue-hooks-plus")),disabled:!t(p)("hi vue-hooks-plus")},{default:l(()=>[a(" Remove text ")]),_:1},8,["disabled"]),n(s,{style:{"margin-left":"8px"},onClick:e[2]||(e[2]=()=>t(d)())},{default:l(()=>[a("Reset")]),_:1})]),o("div",null,[o("pre",null,x(JSON.stringify(Array.from(t(r)),null,2)),1)])])}}});export{C as _};