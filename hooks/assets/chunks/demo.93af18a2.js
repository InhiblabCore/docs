import{r as m}from"./stringify.90ac3b06.js";import"./intersection-observer.38c1bba6.js";import{r as g,G as v,u,_ as f,d as S,m as x,o as C,c as k,e as c,t as y,b as d,w as l,q as i,F as A}from"../app.bf572af9.js";function N(_){const e=g((()=>u(_))()),o=s=>{const a=u(s);e.value=a?m.exports.merge(e.value,a):e.value};return[v(e),o]}const b={class:"contain"},w=S({__name:"demo",setup(_){const[n,e]=N({name:"vue-hooks-plus"}),o=()=>{e({age:1})},s=()=>{e({...n.value,age:3,tag:"nice"})},a=()=>{e({age:2})};return(B,t)=>{const r=x("vhp-button");return C(),k(A,null,[c("div",null,y(JSON.stringify(u(n))),1),c("div",b,[d(r,{onClick:t[0]||(t[0]=p=>o())},{default:l(()=>[i(" Add age ")]),_:1}),d(r,{onClick:t[1]||(t[1]=p=>a())},{default:l(()=>[i(" Update age ")]),_:1}),d(r,{onClick:t[2]||(t[2]=p=>s())},{default:l(()=>[i(" Add tag ")]),_:1})])],64)}}});var $=f(w,[["__scopeId","data-v-d7d26ea2"]]);export{$ as D};
