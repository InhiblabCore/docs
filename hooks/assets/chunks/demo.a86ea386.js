import{x as g}from"./stringify.678a69ff.js";import"./isBrowser.46f69b0e.js";import{r as m,L as f,u as c,_ as S,e as C,m as k,o as x,c as y,d as v,t as A,a as o,w as s,q as r,F as N}from"../app.d255f7e5.js";function $(p){const e=m((()=>c(p))()),i=(u,d=!1)=>{const a=c(u);d?e.value=a:e.value=a?g(e.value,a):e.value};return[f(e),i]}const w={class:"contain"},B=C({__name:"demo",setup(p){const[l,e]=$({name:"vue-hooks-plus"}),i=()=>{e({age:1})},u=()=>{e({...l.value,age:3,tag:"nice"})},d=()=>{e({age:2})},a=()=>{e({age:0},!0)};return(D,t)=>{const n=k("vhp-button");return x(),y(N,null,[v("div",null,A(JSON.stringify(c(l))),1),v("div",w,[o(n,{onClick:t[0]||(t[0]=_=>i())},{default:s(()=>[r(" Add age ")]),_:1}),o(n,{onClick:t[1]||(t[1]=_=>d())},{default:s(()=>[r(" Update age ")]),_:1}),o(n,{onClick:t[2]||(t[2]=_=>u())},{default:s(()=>[r(" Add tag ")]),_:1}),o(n,{onClick:t[3]||(t[3]=_=>a())},{default:s(()=>[r(" cover ")]),_:1})])],64)}}});var F=S(B,[["__scopeId","data-v-49c81114"]]);export{F as D};
