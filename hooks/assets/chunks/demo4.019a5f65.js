import{u as f}from"./useRequest.8f8f512c.js";import{u as w}from"./index.b09c12ee.js";import"./stringify.b1a2f83f.js";import{e as h,m as y,o as d,c as l,a as m,w as p,q as g,u as t,d as u,t as _,G as x,F as T,r as D,j as K,x as F,y as N}from"../app.f30a318a.js";const U={key:0,style:{padding:"16px"}},R=h({__name:"demo",setup(v){const[n,{toggle:i}]=w();function o(){return new Promise((s,e)=>{setTimeout(()=>{s(String(Date.now()))},1e3)})}const{data:a}=f(()=>o(),{ready:n,cacheKey:"cacheKey-demo"});return(s,e)=>{const r=y("vhp-button");return d(),l("div",null,[m(r,{onClick:e[0]||(e[0]=()=>t(i)())},{default:p(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",U,[u("p",null,_(t(a)),1)])):x("",!0)])}}}),j={key:0,style:{padding:"16px"}},G=h({__name:"demo1",setup(v){const[n,{toggle:i}]=w();function o(){return new Promise((s,e)=>{setTimeout(()=>{s(String(Date.now()))},1e3)})}const{data:a}=f(()=>o(),{ready:n,cacheKey:"staleTime-demo",staleTime:5e4});return(s,e)=>{const r=y("vhp-button");return d(),l("div",null,[m(r,{onClick:e[0]||(e[0]=()=>t(i)())},{default:p(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",j,[u("p",null,_(t(a)),1)])):x("",!0)])}}}),S=h({__name:"ShareDemo",setup(v){function n(){return new Promise((s,e)=>{setTimeout(()=>{s(String(Date.now()))},1e3)})}const{data:i,loading:o,refresh:a}=f(()=>n(),{cacheKey:"cacheKey-share"});return(s,e)=>{const r=y("vhp-button");return d(),l(T,null,[m(r,{onClick:e[0]||(e[0]=()=>t(a)())},{default:p(()=>[g(" request again ")]),_:1}),u("div",null,_(`loading\uFF1A${t(o)}`),1),u("div",null,_(t(i)),1)],64)}}}),P={style:{padding:"16px"}},V=u("h2",null,"A data",-1),q=u("h2",null,"B data",-1),M=h({__name:"demo2",setup(v){return(n,i)=>(d(),l("div",P,[V,m(S),q,m(S)]))}}),B={key:0,style:{padding:"16px"}},z=h({__name:"demo3",setup(v){const[n,{toggle:i}]=w(),o=D("");function a(k){return new Promise(c=>{setTimeout(()=>{c(String(Date.now())+"-"+k)},1e3)})}const{data:s,params:e,loading:r,run:C}=f(a,{cacheKey:"cacheKey-demo3"});return K(()=>{o.value=e==null?void 0:e[0]}),(k,c)=>{const $=y("vhp-button");return d(),l("div",null,[m($,{onClick:c[0]||(c[0]=()=>t(i)())},{default:p(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",B,[u("div",null,_(`loading: ${t(r)}`),1),F(u("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=b=>o.value=b)},null,512),[[N,o.value]]),m($,{style:{"margin-left":"12px"},onClick:c[2]||(c[2]=b=>t(C)(o.value))},{default:p(()=>[g(" send ")]),_:1}),u("div",null,"params ID\uFF1A"+_(o.value),1),u("p",null,_(t(s)),1)])):x("",!0)])}}}),A={key:0,style:{padding:"16px"}},H=h({__name:"demo4",setup(v){const[n,{toggle:i}]=w();function o(){return new Promise((e,r)=>{setTimeout(()=>{e(String(Date.now())+"useRequest")},1e3)})}const a="setCache-demo",{data:s}=f(()=>o(),{ready:n,cacheKey:a,staleTime:5e3,setCache:e=>{localStorage.setItem(a,JSON.stringify(e.data))},getCache:()=>{var e;return JSON.parse((e=localStorage.getItem(a))!=null?e:"{}")}});return(e,r)=>{const C=y("vhp-button");return d(),l("div",null,[m(C,{onClick:r[0]||(r[0]=()=>t(i)())},{default:p(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",A,[u("p",null,_(t(s)),1)])):x("",!0)])}}});export{R as _,G as a,M as b,z as c,H as d};
