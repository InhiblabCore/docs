import{e as k,r as a,Z as y,l as B,o as l,c as r,d as t,t as p,u,a as m,w as v,f as h,A as D,B as $,F as f,n as V}from"../app.a038a21c.js";import{w as N}from"./useRequest_plugins.es.b0bda4e7.js";const S={style:{"margin-top":"8px"}},T=t("h4",null,"Desc",-1),F=t("h3",null,"Channel History:",-1),A=k({__name:"demo",setup(R){function _(s){return new Promise(e=>{setTimeout(()=>{e(`${s.desc}-${String(Date.now())}`)},1e3)})}const i=a([]),o=a(""),d=a("good"),g=()=>{d.value=`send-other-${o.value}`},{data:C,loading:w,refresh:x}=y(()=>_({desc:d.value}),{refreshDeps:!0,pluginOptions:{broadcastChannel:"nice-broadcastChannel",onBroadcastChannel:(s,e)=>{i.value.push(s.data)}}},[N]);return(s,e)=>{const c=B("vhp-button");return l(),r(f,null,[t("div",null,"Current: "+p(u(w)?"loading..":u(C)),1),t("div",null,[m(c,{onClick:e[0]||(e[0]=n=>u(x)())},{default:v(()=>[h("Refresh")]),_:1}),t("div",S,[T,D(t("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>o.value=n)},null,512),[[$,o.value]]),m(c,{style:{"margin-left":"4px"},onClick:e[2]||(e[2]=n=>g())},{default:v(()=>[h("Send")]),_:1})])]),t("div",null,[F,(l(!0),r(f,null,V(i.value,(n,b)=>(l(),r("div",{key:b},p(n),1))),128))])],64)}}});export{A as _};