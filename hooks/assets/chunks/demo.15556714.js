import"./stringify.7c979077.js";import{u as f}from"./index.3c4367e0.js";import{u}from"./index.77ab0585.js";import{e as m,r as i,o as l,c as p,t as _,u as v}from"../app.fefc8ec7.js";function d(t,r){const{onEnter:s,onLeave:o,onChange:e}=r||{},[a,{setTrue:n,setFalse:c}]=f(!1);return u("mouseenter",()=>{s==null||s(),n(),e==null||e(!0)},{target:t}),u("mouseleave",()=>{o==null||o(),c(),e==null||e(!1)},{target:t}),a}const H=m({__name:"demo",setup(t){const r=i(),s=d(r);return(o,e)=>(l(),p("div",{ref_key:"valueRef",ref:r},_(v(s)?"hover":"no-hover"),513))}});export{H as _};
