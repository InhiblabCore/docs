import{e as w,r as a,Y as y,k as B,o as l,c as r,d as t,t as p,j as u,a as m,w as v,n as h,A as D,B as $,F as _,m as V}from"../app.25ea1577.js";import{l as N}from"./useRequest_plugins.es.e1bcaf93.js";const S={style:{"margin-top":"8px"}},T=t("h4",null,"Desc",-1),F=t("h3",null,"Channel History:",-1),q=w({__name:"demo",setup(R){function f(s){return new Promise(e=>{setTimeout(()=>{e(`${s.desc}-${String(Date.now())}`)},1e3)})}const i=a([]),o=a(""),d=a("good"),C=()=>{d.value=`send-other-${o.value}`},{data:g,loading:x,refresh:k}=y(()=>f({desc:d.value}),{refreshDeps:!0,broadcastChannel:"nice-broadcastChannel",onBroadcastChannel:(s,e)=>{i.value.push(s.data)}},[N]);return(s,e)=>{const c=B("vhp-button");return l(),r(_,null,[t("div",null,"Current: "+p(u(x)?"loading..":u(g)),1),t("div",null,[m(c,{onClick:e[0]||(e[0]=n=>u(k)())},{default:v(()=>[h("Refresh")]),_:1}),t("div",S,[T,D(t("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>o.value=n)},null,512),[[$,o.value]]),m(c,{style:{"margin-left":"4px"},onClick:e[2]||(e[2]=n=>C())},{default:v(()=>[h("Send")]),_:1})])]),t("div",null,[F,(l(!0),r(_,null,V(i.value,(n,b)=>(l(),r("div",{key:b},p(n),1))),128))])],64)}}});export{q as _};
