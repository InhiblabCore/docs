import"./stringify.f3255a0a.js";import"./intersection-observer.38c1bba6.js";import{r as p,D as v,e as c,m as f,o as k,c as _,b as r,a as u,w as i,q as d,u as a,t as x}from"../app.1a673492.js";function g(n){const o=()=>n===void 0?new Set:new Set(n),e=p(o());return[e,v({add:t=>{e.value.add(t)},remove:t=>{e.value.delete(t)},has:t=>e.value.has(t),clear:()=>e.value.clear(),reset:()=>{e.value=o()}})]}const S=c({__name:"demo",setup(n){const[o,{add:e,remove:m,reset:t}]=g(["hi vue-hooks-plus"]);return(h,s)=>{const l=f("vhp-button");return k(),_("div",null,[r("div",null,[u(l,{style:{"margin-left":"8px"},onClick:s[0]||(s[0]=()=>a(e)(String(Date.now())))},{default:i(()=>[d(" Add Timestamp ")]),_:1}),u(l,{style:{"margin-left":"8px"},onClick:s[1]||(s[1]=()=>a(m)("hi vue-hooks-plus")),disabled:!a(o).has("hi vue-hooks-plus")},{default:i(()=>[d(" Remove text ")]),_:1},8,["disabled"]),u(l,{style:{"margin-left":"8px"},onClick:s[2]||(s[2]=()=>a(t)())},{default:i(()=>[d("Reset")]),_:1})]),r("div",null,[r("pre",null,x(JSON.stringify(Array.from(a(o)),null,2)),1)])])}}});export{S as _};
