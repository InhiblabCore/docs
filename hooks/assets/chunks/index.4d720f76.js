import{g as s}from"./domTarget.b60857f9.js";import{u as f}from"./useEffectWithTarget.871e4582.js";import{r as v}from"../app.9a97676b.js";function m(t,u,e={}){const c=v(u);f(()=>{const r=s(e.target,window);if(!(r!=null&&r.addEventListener))return;const a=n=>c.value(n);return r.addEventListener(t,a,{capture:e.capture,once:e.once,passive:e.passive}),()=>{r.removeEventListener(t,a,{capture:e.capture})}},[t,e.capture,e.once,e.passive],e.target)}export{m as u};