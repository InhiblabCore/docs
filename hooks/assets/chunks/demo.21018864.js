import"./stringify.90ac3b06.js";import"./intersection-observer.38c1bba6.js";import{r as f,D as v,d as g,m as c,o as w,c as x,e as m,b as o,w as r,q as u,u as s,t as _}from"../app.bf572af9.js";function k(p){const a=()=>p?new Map(p):new Map,t=f(a());return[t,v({set:(e,i)=>{t.value.set(e,i)},get:e=>t.value.get(e),remove:e=>{t.value.delete(e)},has:e=>t.value.has(e),clear:()=>t.value.clear(),setAll:e=>{t.value=new Map(e)},reset:()=>t.value=a()})]}const S=g({__name:"demo",setup(p){const[a,{set:t,setAll:d,remove:e,reset:i}]=k([["msg","hello useMap"],[123,"123"]]);return(y,n)=>{const l=c("vhp-button");return w(),x("div",null,[m("div",null,[o(l,{style:{"margin-left":"8px"},onClick:n[0]||(n[0]=()=>s(t)(String(Date.now()),new Date().toJSON()))},{default:r(()=>[u(" Add ")]),_:1}),o(l,{style:{"margin-left":"8px"},onClick:n[1]||(n[1]=()=>s(d)([["text","this is a new Map"]]))},{default:r(()=>[u(" Set new Map ")]),_:1}),o(l,{style:{"margin-left":"8px"},onClick:n[2]||(n[2]=()=>s(e)("msg"))},{default:r(()=>[u(" Remove 'msg'")]),_:1}),o(l,{style:{"margin-left":"8px"},onClick:n[3]||(n[3]=()=>s(i)())},{default:r(()=>[u("Reset")]),_:1})]),m("div",null,[m("pre",null,_(JSON.stringify(Array.from(s(a)),null,2)),1)])])}}});export{S as _};
