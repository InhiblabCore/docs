import{e as h,a9 as w,Z as f,l as y,o as u,c as i,a as p,w as m,f as g,u as n,d as a,t as _,X as x,F as D,r as K,K as F,A as N,B as U}from"../app.9aff4412.js";const B={key:0,style:{padding:"16px"}},J=h({__name:"demo",setup(v){const[o,{toggle:r}]=w();function s(){return new Promise((t,e)=>{setTimeout(()=>{t(String(Date.now()))},1e3)})}const{data:l}=f(()=>s(),{ready:o,cacheKey:"cacheKey-demo"});return(t,e)=>{const d=y("vhp-button");return u(),i("div",null,[p(d,{onClick:e[0]||(e[0]=()=>n(r)())},{default:m(()=>[g("show/hidden")]),_:1}),n(o)?(u(),i("div",B,[a("p",null,_(n(l)),1)])):x("",!0)])}}}),P={key:0,style:{padding:"16px"}},O=h({__name:"demo1",setup(v){const[o,{toggle:r}]=w();function s(){return new Promise((t,e)=>{setTimeout(()=>{t(String(Date.now()))},1e3)})}const{data:l}=f(()=>s(),{ready:o,cacheKey:"staleTime-demo",staleTime:5e4});return(t,e)=>{const d=y("vhp-button");return u(),i("div",null,[p(d,{onClick:e[0]||(e[0]=()=>n(r)())},{default:m(()=>[g("show/hidden")]),_:1}),n(o)?(u(),i("div",P,[a("p",null,_(n(l)),1)])):x("",!0)])}}}),S=h({__name:"ShareDemo",setup(v){function o(){return new Promise((t,e)=>{setTimeout(()=>{t(String(Date.now()))},1e3)})}const{data:r,loading:s,refresh:l}=f(()=>o(),{cacheKey:"cacheKey-share"});return(t,e)=>{const d=y("vhp-button");return u(),i(D,null,[p(d,{onClick:e[0]||(e[0]=()=>n(l)())},{default:m(()=>[g(" request again ")]),_:1}),a("div",null,_(`loading\uFF1A${n(s)}`),1),a("div",null,_(n(r)),1)],64)}}}),V={style:{padding:"16px"}},j=a("h2",null,"A data",-1),A=a("h2",null,"B data",-1),R=h({__name:"demo2",setup(v){return(o,r)=>(u(),i("div",V,[j,p(S),A,p(S)]))}}),q={key:0,style:{padding:"16px"}},M=h({__name:"demo3",setup(v){const[o,{toggle:r}]=w(),s=K("");function l(k){return new Promise(c=>{setTimeout(()=>{c(String(Date.now())+"-"+k)},1e3)})}const{data:t,params:e,loading:d,run:T}=f(l,{cacheKey:"cacheKey-demo3"});return F(()=>{s.value=e==null?void 0:e[0]}),(k,c)=>{const $=y("vhp-button");return u(),i("div",null,[p($,{onClick:c[0]||(c[0]=()=>n(r)())},{default:m(()=>[g("show/hidden")]),_:1}),n(o)?(u(),i("div",q,[a("div",null,_(`loading: ${n(d)}`),1),N(a("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=b=>s.value=b)},null,512),[[U,s.value]]),p($,{style:{"margin-left":"12px"},onClick:c[2]||(c[2]=b=>n(T)(s.value))},{default:m(()=>[g(" send ")]),_:1}),a("div",null,"params ID\uFF1A"+_(s.value),1),a("p",null,_(n(t)),1)])):x("",!0)])}}}),I={key:0,style:{padding:"16px"}},C="setCache-demo",X=h({__name:"demo4",setup(v){const[o,{toggle:r}]=w();function s(){return new Promise((t,e)=>{setTimeout(()=>{t(String(Date.now())+"useRequest")},1e3)})}const{data:l}=f(()=>s(),{ready:o,cacheKey:C,staleTime:5e3,setCache:t=>{localStorage.setItem(C,JSON.stringify(t.data))},getCache:()=>{var t;return JSON.parse((t=localStorage.getItem(C))!=null?t:"{}")}});return(t,e)=>{const d=y("vhp-button");return u(),i("div",null,[p(d,{onClick:e[0]||(e[0]=()=>n(r)())},{default:m(()=>[g("show/hidden")]),_:1}),n(o)?(u(),i("div",I,[a("p",null,_(n(l)),1)])):x("",!0)])}}});export{J as _,O as a,R as b,M as c,X as d};
