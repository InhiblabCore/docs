import"./stringify.678a69ff.js";import"./isBrowser.46f69b0e.js";import{r as v,I as c,e as f,m as k,o as _,c as x,d as r,a as u,w as i,q as d,u as o,t as g}from"../app.d255f7e5.js";function h(n){const a=()=>n===void 0?new Set:new Set(n),e=v(a());return[e,c({add:t=>{e.value.add(t)},remove:t=>{e.value.delete(t)},has:t=>e.value.has(t),clear:()=>e.value.clear(),reset:()=>{e.value=a()}})]}const b=f({__name:"demo",setup(n){const[a,{add:e,remove:m,reset:t,has:p}]=h(["hi vue-hooks-plus"]);return(w,s)=>{const l=k("vhp-button");return _(),x("div",null,[r("div",null,[u(l,{style:{"margin-left":"8px"},onClick:s[0]||(s[0]=()=>o(e)(String(Date.now())))},{default:i(()=>[d(" Add Timestamp ")]),_:1}),u(l,{style:{"margin-left":"8px"},onClick:s[1]||(s[1]=()=>o(m)("hi vue-hooks-plus")),disabled:!o(p)("hi vue-hooks-plus")},{default:i(()=>[d(" Remove text ")]),_:1},8,["disabled"]),u(l,{style:{"margin-left":"8px"},onClick:s[2]||(s[2]=()=>o(t)())},{default:i(()=>[d("Reset")]),_:1})]),r("div",null,[r("pre",null,g(JSON.stringify(Array.from(o(a)),null,2)),1)])])}}});export{b as _};
