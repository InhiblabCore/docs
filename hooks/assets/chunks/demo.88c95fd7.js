import"./stringify.4c9b9ab5.js";import"./intersection-observer.38c1bba6.js";import{r as p,D as v,d as c,m as f,o as k,c as _,e as r,b as u,w as i,q as d,u as n,t as x}from"../app.3964b21e.js";function g(a){const o=()=>a===void 0?new Set:new Set(a),e=p(o());return[e,v({add:t=>{e.value.add(t)},remove:t=>{e.value.delete(t)},has:t=>e.value.has(t),clear:()=>e.value.clear(),reset:()=>{e.value=o()}})]}const S=c({__name:"demo",setup(a){const[o,{add:e,remove:m,reset:t}]=g(["hi vue-hooks-plus"]);return(h,s)=>{const l=f("vhp-button");return k(),_("div",null,[r("div",null,[u(l,{style:{"margin-left":"8px"},onClick:s[0]||(s[0]=()=>n(e)(String(Date.now())))},{default:i(()=>[d(" Add Timestamp ")]),_:1}),u(l,{style:{"margin-left":"8px"},onClick:s[1]||(s[1]=()=>n(m)("hi vue-hooks-plus")),disabled:!n(o).has("hi vue-hooks-plus")},{default:i(()=>[d(" Remove text ")]),_:1},8,["disabled"]),u(l,{style:{"margin-left":"8px"},onClick:s[2]||(s[2]=()=>n(t)())},{default:i(()=>[d("Reset")]),_:1})]),r("div",null,[r("pre",null,x(JSON.stringify(Array.from(n(o)),null,2)),1)])])}}});export{S as _};