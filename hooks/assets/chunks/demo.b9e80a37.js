import"./stringify.3385e5ad.js";import"./intersection-observer.38c1bba6.js";import{s as y,g as b,e as d,r as i,A as k,m as f,o as v,c as _,b as r,t as p,q as c,a as l,w as m}from"../app.e03dc6d6.js";function g(s,e){const a=y(()=>Object.keys(e).map(t=>t));b(Object.keys(e).map(t=>e[t]),(t,o)=>{const n={};a.value.forEach((h,u)=>{o[u]!==t[u]&&(n[h]={from:o[u],to:t[u]})}),Object.keys(n).length&&console.log("[why-did-you-update]",s,n)},{deep:!0})}const C=d({__name:"DemoItem",props:{count:null},setup(s){const e=s,a=i(Math.random());return g("useWhyDidYouUpdateComponent",{...k(e),mathRef:a}),(t,o)=>{const n=f("vhp-button");return v(),_("div",null,[r("div",null,"number: "+p(s.count),1),r("div",null,[c(" randomNum: "+p(a.value)+" ",1),l(n,{onClick:o[0]||(o[0]=()=>a.value=Math.random()),style:{"margin-left":"8px"}},{default:m(()=>[c(" \u{1F3B2} ")]),_:1})])])}}}),D=d({__name:"demo",setup(s){const e=i(0);return(a,t)=>{const o=f("vhp-button");return v(),_("div",null,[l(C,{count:e.value},null,8,["count"]),l(o,{onClick:t[0]||(t[0]=n=>e.value+=1)},{default:m(()=>[c("+")]),_:1}),l(o,{onClick:t[1]||(t[1]=n=>e.value-=1),style:{"margin-left":"8px"}},{default:m(()=>[c("-")]),_:1})])}}});export{D as _};
