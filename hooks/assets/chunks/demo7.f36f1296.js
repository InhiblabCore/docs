import{e as k,Y as $,o as c,c as p,d as n,t as _,j as u,n as g,F as v,r as h,k as F,A as C,B as U,a as y,w as x,m as w}from"../app.c3f19403.js";const D=k({__name:"demo",setup(b){function m(d){return new Promise(i=>{setTimeout(()=>{i(`vue-hooks-plus ${d.desc}`)},1e3)})}const{data:e,loading:a}=$(()=>m({desc:"good"}),{devKey:"demo"});return(d,i)=>(c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(a)?"loading":u(e)),1),g(" "+_(u(e)),1)],64))}}),P={style:{"margin-top":"8px"}},j=k({__name:"demo1",setup(b){function m(r){return new Promise((o,t)=>{setTimeout(()=>{Math.random()>.5&&o(`vue-hooks-plus ${r.desc}`),t("error")},1e3)})}const e=h("vue-hooks-plus"),{data:a,loading:d,run:i}=$(m,{manual:!0,devKey:"demo1",onSuccess:r=>{alert(r)},onError:r=>{alert(r)}});return(r,o)=>{const t=F("vhp-button");return c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(d)?"loading":u(a)),1),n("div",P,[C(n("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s)},null,512),[[U,e.value]]),y(t,{style:{"margin-left":"8px"},onClick:o[1]||(o[1]=s=>u(i)({desc:e.value}))},{default:x(()=>[g("Edit")]),_:1})])],64)}}}),T={style:{"margin-top":"8px"}},O=k({__name:"demo2",setup(b){function m(o){return new Promise((t,s)=>{setTimeout(()=>{Math.random()>.5&&t(`vue-hooks-plus ${o.desc}`),s("error")},1e3)})}const e=h("vue-hooks-plus"),{data:a,loading:d,runAsync:i}=$(m,{manual:!0,devKey:"demo2"}),r=async()=>{try{await i({desc:e.value}),alert("success")}catch{alert("error")}};return(o,t)=>{const s=F("vhp-button");return c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(d)?"loading":u(a)),1),n("div",T,[C(n("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,512),[[U,e.value]]),y(s,{style:{"margin-left":"8px"},onClick:r},{default:x(()=>[g("Edit")]),_:1})])],64)}}}),A={style:{"margin-top":"8px"}},J=k({__name:"demo3",setup(b){function m(o){return new Promise((t,s)=>{setTimeout(()=>{Math.random()>.5&&t(`vue-hooks-plus ${o.desc}`),s("error")},1e3)})}const e=h(""),a=h([]),{data:d,loading:i,run:r}=$(m,{manual:!0,devKey:"demo3",onBefore:()=>{a.value=[],a.value.push("start request")},onSuccess:()=>{a.value.push("start request success")},onError:()=>{a.value.push("start request error")},onFinally:()=>{a.value.push("start request finally")}});return(o,t)=>{const s=F("vhp-button");return c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(i)?"loading":u(d)),1),n("div",A,[C(n("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,512),[[U,e.value]]),y(s,{style:{"margin-left":"8px"},onClick:t[1]||(t[1]=l=>u(r)({desc:e.value}))},{default:x(()=>[g("Edit")]),_:1})]),n("div",null,[(c(!0),p(v,null,w(a.value,l=>(c(),p("p",{key:l},_(l),1))),128))])],64)}}}),V={style:{"margin-top":"16px"}},L=k({__name:"demo4",setup(b){function m(){return new Promise(r=>{setTimeout(()=>{r(String(Date.now()))},1e3)})}const{data:e,run:a,loading:d,refresh:i}=$(()=>m(),{manual:!0,devKey:"demo4"});return a(),(r,o)=>{const t=F("vhp-button");return c(),p(v,null,[y(t,{style:{"margin-top":"16px"},onClick:o[0]||(o[0]=()=>u(i)())},{default:x(()=>[g("refresh")]),_:1}),n("div",V,_(u(d)?"loading..":u(e)),1)],64)}}}),K={style:{"margin-top":"8px"}},q={style:{"margin-top":"8px"}},R=k({__name:"demo5",setup(b){function m(t){return new Promise((s,l)=>{setTimeout(()=>{Math.random()>.5&&s(`request-${t.desc}`),l("error")},2e3)})}const e=h(""),a=h([]),{data:d,run:i,mutate:r}=$(m,{manual:!0,devKey:"demo5",rollbackOnError:!0,onError:()=>{alert("error")}}),o=()=>{r(e.value),i({desc:e.value})};return(t,s)=>{const l=F("vhp-button");return c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(d)),1),n("div",K,[C(n("input",{"onUpdate:modelValue":s[0]||(s[0]=f=>e.value=f)},null,512),[[U,e.value]]),y(l,{style:{"margin-left":"8px"},onClick:o},{default:x(()=>[g("Edit")]),_:1})]),n("div",q,[(c(!0),p(v,null,w(a.value,f=>(c(),p("p",{key:f},_(f),1))),128))])],64)}}}),M={style:{"margin-top":"8px"}},Y=k({__name:"demo6",setup(b){function m(s){return new Promise((l,f)=>{setTimeout(()=>{Math.random()>.5&&l(`request-${s.desc}`),f("error")},2e3)})}const e=h(""),{data:a,loading:d,run:i,cancel:r}=$(m,{manual:!0,devKey:"demo6",onError:()=>{alert("error")}}),o=()=>{i({desc:e.value})},t=()=>{r()};return(s,l)=>{const f=F("vhp-button");return c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(d)?"loading..":u(a)),1),n("div",M,[C(n("input",{"onUpdate:modelValue":l[0]||(l[0]=E=>e.value=E)},null,512),[[U,e.value]]),y(f,{style:{"margin-left":"8px"},onClick:o},{default:x(()=>[g("Edit")]),_:1}),y(f,{style:{"margin-left":"8px"},onClick:t},{default:x(()=>[g("Cancel")]),_:1})])],64)}}}),B={style:{"margin-top":"8px"}},S=n("br",null,null,-1),z=k({__name:"demo7",setup(b){function m(o){return new Promise((t,s)=>{setTimeout(()=>{t(`vue-hooks-plus ${o.desc}`)},1e3)})}const e=h("vue-hooks-plus"),{data:a,loading:d,run:i,params:r}=$(m,{defaultParams:[{desc:"nice"}],devKey:"demo7"});return(o,t)=>{const s=F("vhp-button");return c(),p(v,null,[n("div",null,"name\uFF1A"+_(u(d)?"loading":u(a)),1),n("div",B,[C(n("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l)},null,512),[[U,e.value]]),y(s,{style:{"margin-left":"8px"},onClick:t[1]||(t[1]=l=>u(i)({desc:e.value}))},{default:x(()=>[g("Edit")]),_:1})]),S,n("div",null," Params: "+_(JSON.stringify(u(r))),1)],64)}}});export{D as _,j as a,O as b,J as c,L as d,R as e,Y as f,z as g};
