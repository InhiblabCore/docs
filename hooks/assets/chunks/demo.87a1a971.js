import{e as y,r as S,a9 as b,Z as h,q,o as w,c as C,d as a,t as l,u as c,a as N,w as R,f as k,F as B}from"../app.032845d0.js";const T={style:{"margin-top":"16px"}},F=y({__name:"demo",setup(V){const u=S("");function d(e){return(t,n,o)=>{console.log("enter a");const s=e((...r)=>{console.log("request a");const g=t(...r);return g.then(v=>{u.value+=`Response: ${JSON.stringify(v)}
`}),g},n,o);return console.log("exit a"),s}}function p(e){return(t,n,o)=>{console.log("enter b");const s=e((...r)=>(console.log("request b"),t(...r)),n,o);return console.log("exit b"),s}}function m(){return new Promise(e=>{setTimeout(()=>{console.log("return"),e(String(Date.now()))},1e3)})}const[i,{toggle:x}]=b(!1),{data:f}=h(()=>m(),{ready:i,use:[d,p]});return(e,t)=>{const n=q("vhp-button");return w(),C(B,null,[a("div",null,"ready: "+l(c(i)),1),a("div",null,"log: "+l(u.value),1),N(n,{style:{"margin-top":"16px"},onClick:t[0]||(t[0]=()=>c(x)())},{default:R(()=>[k("changeReady")]),_:1}),a("div",T,l(c(f)),1)],64)}}});export{F as _};
