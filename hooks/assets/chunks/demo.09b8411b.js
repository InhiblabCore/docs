import"./stringify.dafbd646.js";import{u as c}from"./index.d6b3fadc.js";import{u}from"./index.ce8927d3.js";import"./isBrowser.46f69b0e.js";import{e as f,r as i,o as p,c as l,t as _,u as v}from"../app.a751dad7.js";function d(t,r){const{onEnter:s,onLeave:o,onChange:e}=r||{},[a,{setTrue:n,setFalse:m}]=c(!1);return u("mouseenter",()=>{s==null||s(),n(),e==null||e(!0)},{target:t}),u("mouseleave",()=>{o==null||o(),m(),e==null||e(!1)},{target:t}),a}const R=f({__name:"demo",setup(t){const r=i(),s=d(r);return(o,e)=>(p(),l("div",{ref_key:"valueRef",ref:r},_(v(s)?"hover":"no-hover"),513))}});export{R as _};