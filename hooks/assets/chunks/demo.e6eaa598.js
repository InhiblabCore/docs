import"./stringify.678a69ff.js";import"./isBrowser.46f69b0e.js";import{g as f,e as _,r,m as d,o as g,c as p,d as l,t as u,a as s,w as i,q as m,F as k}from"../app.d255f7e5.js";const C=(o,t)=>o?o.map((n,e)=>o[e]!==(t==null?void 0:t[e])?e:-1).filter(n=>n>=0):t?t.map((n,e)=>e):[],w=(o,t)=>{f(t!=null?t:[],(n,e)=>{const a=C(e,n);o(a)})},N=_({__name:"demo",setup(o){const t=r(0),n=r(0);return w(e=>{console.log("Index of changed dependencies: ",e)},[t,n]),(e,a)=>{const c=d("vhp-button");return g(),p(k,null,[l("div",null,[l("div",null,"count1: "+u(t.value),1),s(c,{onClick:a[0]||(a[0]=v=>t.value+=1)},{default:i(()=>[m("Add")]),_:1})]),l("div",null,[l("div",null,"count2: "+u(n.value),1),s(c,{onClick:a[1]||(a[1]=v=>n.value+=1)},{default:i(()=>[m("Add")]),_:1})])],64)}}});export{N as _};
