import{e as h,a7 as k,X as v,n as S,o as d,c as m,a as _,w as y,f,u as t,d as i,t as p,k as K,F as T,r as I,K as P,A as U,B as j}from"../app.367c0303.js";const F={key:0,style:{padding:"16px"}},J=h({__name:"demo",setup(w){const[a,{toggle:o}]=k();function r(){return new Promise((n,e)=>{setTimeout(()=>{n(String(Date.now()))},1e3)})}const{data:l}=v(()=>r(),{ready:a,cacheKey:"cacheKey-demo"});return(n,e)=>{const c=S("vhp-button");return d(),m("div",null,[_(c,{onClick:e[0]||(e[0]=()=>t(o)())},{default:y(()=>e[1]||(e[1]=[f("show/hidden")])),_:1}),t(a)?(d(),m("div",F,[i("p",null,p(t(l)),1)])):K("",!0)])}}}),N={key:0,style:{padding:"16px"}},O=h({__name:"demo1",setup(w){const[a,{toggle:o}]=k();function r(){return new Promise((n,e)=>{setTimeout(()=>{n(String(Date.now()))},1e3)})}const{data:l}=v(()=>r(),{ready:a,cacheKey:"staleTime-demo",staleTime:5e4});return(n,e)=>{const c=S("vhp-button");return d(),m("div",null,[_(c,{onClick:e[0]||(e[0]=()=>t(o)())},{default:y(()=>e[1]||(e[1]=[f("show/hidden")])),_:1}),t(a)?(d(),m("div",N,[i("p",null,p(t(l)),1)])):K("",!0)])}}}),D=h({__name:"ShareDemo",setup(w){function a(){return new Promise((n,e)=>{setTimeout(()=>{n(String(Date.now()))},1e3)})}const{data:o,loading:r,refresh:l}=v(()=>a(),{cacheKey:"cacheKey-share"});return(n,e)=>{const c=S("vhp-button");return d(),m(T,null,[_(c,{onClick:e[0]||(e[0]=()=>t(l)())},{default:y(()=>e[1]||(e[1]=[f(" request again ")])),_:1}),i("div",null,p(`loading\uFF1A${t(r)}`),1),i("div",null,p(t(o)),1)],64)}}}),B={style:{padding:"16px"}},R=h({__name:"demo2",setup(w){return(a,o)=>(d(),m("div",B,[o[0]||(o[0]=i("h2",null,"A data",-1)),_(D),o[1]||(o[1]=i("h2",null,"B data",-1)),_(D)]))}}),V={key:0,style:{padding:"16px"}},M=h({__name:"demo3",setup(w){const[a,{toggle:o}]=k(),r=I("");function l(u){return new Promise(s=>{setTimeout(()=>{s(String(Date.now())+"-"+u)},1e3)})}const{data:n,params:e,loading:c,run:g}=v(l,{cacheKey:"cacheKey-demo3"});return P(()=>{r.value=e==null?void 0:e[0]}),(u,s)=>{const x=S("vhp-button");return d(),m("div",null,[_(x,{onClick:s[0]||(s[0]=()=>t(o)())},{default:y(()=>s[3]||(s[3]=[f("show/hidden")])),_:1}),t(a)?(d(),m("div",V,[i("div",null,p(`loading: ${t(c)}`),1),U(i("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=C=>r.value=C)},null,512),[[j,r.value]]),_(x,{style:{"margin-left":"12px"},onClick:s[2]||(s[2]=C=>t(g)(r.value))},{default:y(()=>s[4]||(s[4]=[f(" send ")])),_:1}),i("div",null,"params ID\uFF1A"+p(r.value),1),i("p",null,p(t(n)),1)])):K("",!0)])}}}),A={key:0,style:{padding:"16px"}},b="setCache-demo",X=h({__name:"demo4",setup(w){const[a,{toggle:o}]=k();function r(){return new Promise((n,e)=>{setTimeout(()=>{n(String(Date.now())+"useRequest")},1e3)})}const{data:l}=v(()=>r(),{ready:a,cacheKey:b,staleTime:5e3,setCache:n=>{localStorage.setItem(b,JSON.stringify(n.data))},getCache:()=>{var n;return JSON.parse((n=localStorage.getItem(b))!=null?n:"{}")}});return(n,e)=>{const c=S("vhp-button");return d(),m("div",null,[_(c,{onClick:e[0]||(e[0]=()=>t(o)())},{default:y(()=>e[1]||(e[1]=[f("show/hidden")])),_:1}),t(a)?(d(),m("div",A,[i("p",null,p(t(l)),1)])):K("",!0)])}}}),q={key:0,style:{padding:"16px"}},$="cacheKey-async-storage",z=h({__name:"asyncDemo",setup(w){const a={setItem:(g,u)=>new Promise((s,x)=>{setTimeout(()=>{localStorage.setItem(g,u),s(u)},200)}),getItem:g=>new Promise((u,s)=>{setTimeout(()=>{u(localStorage.getItem(g))},100)})},[o,{toggle:r}]=k(),{data:l,refresh:n}=v(()=>a.getItem($),{cacheKey:$,debugKey:$});function e(g){return new Promise(u=>{setTimeout(()=>{a.setItem($,String(Date.now())).then(()=>{g()}),u(String(Date.now()))},1e3)})}const{data:c}=v(()=>e(n),{ready:o,cacheKey:"cacheKey-get-username"});return(g,u)=>{var x;const s=S("vhp-button");return d(),m("div",null,[_(s,{onClick:u[0]||(u[0]=()=>t(r)())},{default:y(()=>u[1]||(u[1]=[f("show/hidden")])),_:1}),t(o)?(d(),m("div",q,[i("p",null,p((x=t(c))!=null?x:t(l)),1),i("div",null," cacheData: "+p(t(l)),1)])):K("",!0)])}}});export{J as _,O as a,R as b,M as c,X as d,z as e};
