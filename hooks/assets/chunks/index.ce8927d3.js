import{g as s}from"./domTarget.96b8f1af.js";import{u as f}from"./useEffectWithTarget.a2dbc306.js";import{r as v}from"../app.a751dad7.js";function m(t,u,e={}){const c=v(u);f(()=>{const r=s(e.target,window);if(!(r!=null&&r.addEventListener))return;const a=n=>c.value(n);return r.addEventListener(t,a,{capture:e.capture,once:e.once,passive:e.passive}),()=>{r.removeEventListener(t,a,{capture:e.capture})}},[t,e.capture,e.once,e.passive],e.target)}export{m as u};