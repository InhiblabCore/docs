import{e as l,r as t,a6 as c,q as p,o as m,c as v,d as s,t as i,A as _,a as f,w as x,f as b}from"../app.032845d0.js";const k=l({__name:"demo",setup(h){const o=t(void 0),e=t(200),a=t(0);c(n=>{n.forEach(()=>{a.value+=1})},o,{attributes:!0});const u=()=>{e.value+=10};return(n,r)=>{const d=p("vhp-button");return m(),v("div",null,[s("div",{ref_key:"domRef",ref:o,style:_({width:e.value+"px",padding:"12",border:"1px solid #000",marginBottom:"8px",backgroundColor:"rgba(188, 189, 190, 0.3)"})}," current width\uFF1A"+i(e.value)+" px ",5),f(d,{onClick:r[0]||(r[0]=g=>u())},{default:x(()=>[b("widening")]),_:1}),s("p",null,"Mutation count "+i(a.value),1)])}}});export{k as _};
