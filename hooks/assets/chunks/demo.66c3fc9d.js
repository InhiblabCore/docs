import{e as m,aq as v,q as C,o as _,c as b,a as n,w as o,f as l,d as s,t as r,u as d}from"../app.032845d0.js";const x=s("br",null,null,-1),B=m({__name:"demo",setup(k){const u={count:0,page:1},e=v(u,{localStorageKey:"localStorageKey"}),p=()=>e.value.count++,i=()=>e.value.count--,c=()=>e.value.page++,g=()=>e.value.page--,f=()=>e.value=Object.assign({},u);return(y,t)=>{const a=C("vhp-button");return _(),b("div",null,[n(a,{onClick:t[0]||(t[0]=()=>p())},{default:o(()=>[l("add")]),_:1}),n(a,{style:{"margin-left":"16px"},onClick:t[1]||(t[1]=()=>i())},{default:o(()=>[l("sub")]),_:1}),n(a,{style:{"margin-left":"16px"},onClick:t[2]||(t[2]=()=>c())},{default:o(()=>[l("add-page")]),_:1}),n(a,{style:{"margin-left":"16px"},onClick:t[3]||(t[3]=()=>g())},{default:o(()=>[l("sub-page")]),_:1}),n(a,{style:{"margin-left":"16px"},onClick:t[4]||(t[4]=()=>f())},{default:o(()=>[l(" clear ")]),_:1}),x,s("div",null,"count: "+r(d(e).count),1),s("div",null,"page: "+r(d(e).page),1)])}}});export{B as _};
