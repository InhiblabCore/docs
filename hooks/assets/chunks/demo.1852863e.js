import"./stringify.fbd7d15f.js";import{u as m}from"./index.8c12fc5b.js";import{u as n}from"./index.b4a6162b.js";import"./intersection-observer.38c1bba6.js";import{e as c,r as i,o as f,c as p,t as l,u as _}from"../app.70c79ca7.js";function v(r,o){const{onEnter:e,onLeave:s}=o||{},[t,{setTrue:a,setFalse:u}]=m(!1);return n("mouseenter",()=>{e==null||e(),a()},{target:r}),n("mouseleave",()=>{s==null||s(),u()},{target:r}),t}const y=c({__name:"demo",setup(r){const o=i(),e=v(o);return(s,t)=>(f(),p("div",{ref_key:"valueRef",ref:o},l(_(e)?"hover":"no-hover"),513))}});export{y as _};