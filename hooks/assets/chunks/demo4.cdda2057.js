import{e as h,a7 as w,Y as f,k as y,o as d,c as l,a as p,w as m,n as g,j as t,d as u,t as _,W as x,F as T,r as D,J as K,A as F,B as N}from"../app.b3504820.js";const U={key:0,style:{padding:"16px"}},J=h({__name:"demo",setup(v){const[n,{toggle:i}]=w();function o(){return new Promise((s,e)=>{setTimeout(()=>{s(String(Date.now()))},1e3)})}const{data:a}=f(()=>o(),{ready:n,cacheKey:"cacheKey-demo"});return(s,e)=>{const r=y("vhp-button");return d(),l("div",null,[p(r,{onClick:e[0]||(e[0]=()=>t(i)())},{default:m(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",U,[u("p",null,_(t(a)),1)])):x("",!0)])}}}),j={key:0,style:{padding:"16px"}},E=h({__name:"demo1",setup(v){const[n,{toggle:i}]=w();function o(){return new Promise((s,e)=>{setTimeout(()=>{s(String(Date.now()))},1e3)})}const{data:a}=f(()=>o(),{ready:n,cacheKey:"staleTime-demo",staleTime:5e4});return(s,e)=>{const r=y("vhp-button");return d(),l("div",null,[p(r,{onClick:e[0]||(e[0]=()=>t(i)())},{default:m(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",j,[u("p",null,_(t(a)),1)])):x("",!0)])}}}),S=h({__name:"ShareDemo",setup(v){function n(){return new Promise((s,e)=>{setTimeout(()=>{s(String(Date.now()))},1e3)})}const{data:i,loading:o,refresh:a}=f(()=>n(),{cacheKey:"cacheKey-share"});return(s,e)=>{const r=y("vhp-button");return d(),l(T,null,[p(r,{onClick:e[0]||(e[0]=()=>t(a)())},{default:m(()=>[g(" request again ")]),_:1}),u("div",null,_(`loading\uFF1A${t(o)}`),1),u("div",null,_(t(i)),1)],64)}}}),B={style:{padding:"16px"}},P=u("h2",null,"A data",-1),V=u("h2",null,"B data",-1),O=h({__name:"demo2",setup(v){return(n,i)=>(d(),l("div",B,[P,p(S),V,p(S)]))}}),A={key:0,style:{padding:"16px"}},R=h({__name:"demo3",setup(v){const[n,{toggle:i}]=w(),o=D("");function a(C){return new Promise(c=>{setTimeout(()=>{c(String(Date.now())+"-"+C)},1e3)})}const{data:s,params:e,loading:r,run:k}=f(a,{cacheKey:"cacheKey-demo3"});return K(()=>{o.value=e==null?void 0:e[0]}),(C,c)=>{const $=y("vhp-button");return d(),l("div",null,[p($,{onClick:c[0]||(c[0]=()=>t(i)())},{default:m(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",A,[u("div",null,_(`loading: ${t(r)}`),1),F(u("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=b=>o.value=b)},null,512),[[N,o.value]]),p($,{style:{"margin-left":"12px"},onClick:c[2]||(c[2]=b=>t(k)(o.value))},{default:m(()=>[g(" send ")]),_:1}),u("div",null,"params ID\uFF1A"+_(o.value),1),u("p",null,_(t(s)),1)])):x("",!0)])}}}),q={key:0,style:{padding:"16px"}},M=h({__name:"demo4",setup(v){const[n,{toggle:i}]=w();function o(){return new Promise((e,r)=>{setTimeout(()=>{e(String(Date.now())+"useRequest")},1e3)})}const a="setCache-demo",{data:s}=f(()=>o(),{ready:n,cacheKey:a,staleTime:5e3,setCache:e=>{localStorage.setItem(a,JSON.stringify(e.data))},getCache:()=>{var e;return JSON.parse((e=localStorage.getItem(a))!=null?e:"{}")}});return(e,r)=>{const k=y("vhp-button");return d(),l("div",null,[p(k,{onClick:r[0]||(r[0]=()=>t(i)())},{default:m(()=>[g("show/hidden")]),_:1}),t(n)?(d(),l("div",q,[u("p",null,_(t(s)),1)])):x("",!0)])}}});export{J as _,E as a,O as b,R as c,M as d};
