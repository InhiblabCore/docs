import{e as s,r as n,Z as a,o as c,c as u,f as i,d as m,t as p}from"../app.032845d0.js";const _={style:{"margin-top":"16px"}},f=s({__name:"demo",setup(l){function t(){return new Promise((o,r)=>{setTimeout(()=>{r("error")},1e3)})}const e=n(0);return a(()=>t(),{retryCount:3,onError:()=>{e.value+=1}}),(o,r)=>(c(),u("div",_,[i("Error count\uFF1A "),m("span",null,p(e.value),1)]))}});export{f as _};
