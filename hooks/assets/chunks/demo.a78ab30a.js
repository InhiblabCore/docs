import{e as d,a1 as f,n as g,o as x,c as v,d as r,a as s,w as l,f as o,u as e,t as y}from"../app.367c0303.js";const N=d({__name:"demo",setup(C){const[a,{set:i,setAll:p,remove:m,reset:u}]=f([["msg","hello useMap"],[123,"123"]]);return(k,t)=>{const n=g("vhp-button");return x(),v("div",null,[r("div",null,[s(n,{style:{"margin-left":"8px"},onClick:t[0]||(t[0]=()=>e(i)(String(Date.now()),new Date().toJSON()))},{default:l(()=>t[4]||(t[4]=[o(" Add ")])),_:1}),s(n,{style:{"margin-left":"8px"},onClick:t[1]||(t[1]=()=>e(p)([["text","this is a new Map"]]))},{default:l(()=>t[5]||(t[5]=[o(" Set new Map ")])),_:1}),s(n,{style:{"margin-left":"8px"},onClick:t[2]||(t[2]=()=>e(m)("msg"))},{default:l(()=>t[6]||(t[6]=[o(" Remove 'msg'")])),_:1}),s(n,{style:{"margin-left":"8px"},onClick:t[3]||(t[3]=()=>e(u)())},{default:l(()=>t[7]||(t[7]=[o("Reset")])),_:1})]),r("div",null,[r("pre",null,y(JSON.stringify(Array.from(e(a)),null,2)),1)])])}}});export{N as _};
