import{e as n,r as s,Y as a,o as c,c as u,n as i,d as m,t as p}from"../app.b3504820.js";const _={style:{"margin-top":"16px"}},f=n({__name:"demo",setup(l){function t(){return new Promise((o,r)=>{setTimeout(()=>{r("error")},1e3)})}const e=s(0);return a(()=>t(),{retryCount:3,onError:()=>{e.value+=1}}),(o,r)=>(c(),u("div",_,[i("Error count\uFF1A "),m("span",null,p(e.value),1)]))}});export{f as _};
