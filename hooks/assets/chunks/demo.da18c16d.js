import"./stringify.471e71ff.js";import"./intersection-observer.38c1bba6.js";import{u as g}from"./index.3d0e2070.js";import{d as P,r as l,o as _,c as f,e as T,t as w,F as A,n as N}from"../app.7e92691a.js";function b({task:t,option:u}){const{delay:a=0,onError:i,onReady:o,onSuccess:m}=u!=null?u:{};if(!(t instanceof Array))throw new Error("task must be Array");const r=n=>{i==null||i(n)},e=n=>c=>{r(c),n==null||n({error:c})},p=()=>{var n;(n=Array(...t.keys()))==null||n.reduce((c,d)=>c.then(s=>(s!=null&&s.error||m==null||m(s),new Promise(h=>{var y;(y=t==null?void 0:t[d])==null||y.call(t,h,e(h),d)}))),Promise.resolve())};g(()=>{o==null||o(),p()},a)}const C=P({__name:"demo",setup(t){const u=l(0),a=l([]);function i(){return new Promise((r,e)=>{setTimeout(()=>{r("No.1")},3e3)})}function o(){return new Promise((r,e)=>{setTimeout(()=>{r("No.2")},2e3)})}function m(){return new Promise((r,e)=>{setTimeout(()=>{r("No.3")},2e3)})}return b({task:[r=>{i().then(e=>{r==null||r(e)})},r=>{o().then(e=>{r==null||r(e)})},(r,e)=>{o().then(()=>{e==null||e({err:"error"})})},(r,e)=>{m().then(()=>{e==null||e({error:"error"})})}],option:{onError:r=>{u.value+=1},onSuccess:r=>{a.value.push(r)}}}),(r,e)=>(_(),f("div",null,[T("div",null,"error count: "+w(u.value),1),(_(!0),f(A,null,N(a.value,(p,n)=>(_(),f("p",{key:n},w(p),1))),128))]))}});export{C as _};
