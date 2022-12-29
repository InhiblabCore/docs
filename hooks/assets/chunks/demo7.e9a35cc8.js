import{e as k,r as g,m as $,o as m,c,b as o,t as _,u as l,x as F,y as U,a as h,w as x,q as y,F as f,n as w}from"../app.e03dc6d6.js";import{u as b}from"./useRequest.63b2dd59.js";import"./stringify.3385e5ad.js";import"./intersection-observer.38c1bba6.js";const P={style:{"margin-top":"8px"}},O=k({__name:"demo1",setup(C){function i(u){return new Promise((n,e)=>{setTimeout(()=>{Math.random()>.5&&n(`vue-hooks-plus ${u.desc}`),e("error")},1e3)})}const t=g("vue-hooks-plus"),{data:r,loading:d,run:p}=b(i,{manual:!0,onSuccess:u=>{alert(u)},onError:u=>{alert(u)}});return(u,n)=>{const e=$("vhp-button");return m(),c(f,null,[o("div",null,"name\uFF1A"+_(l(d)?"loading":l(r)),1),o("div",P,[F(o("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s)},null,512),[[U,t.value]]),h(e,{style:{"margin-left":"8px"},onClick:n[1]||(n[1]=s=>l(p)({desc:t.value}))},{default:x(()=>[y("Edit")]),_:1})])],64)}}}),T={style:{"margin-top":"8px"}},R=k({__name:"demo2",setup(C){function i(n){return new Promise((e,s)=>{setTimeout(()=>{Math.random()>.5&&e(`vue-hooks-plus ${n.desc}`),s("error")},1e3)})}const t=g("vue-hooks-plus"),{data:r,loading:d,runAsync:p}=b(i,{manual:!0}),u=async()=>{try{await p({desc:t.value}),alert("success")}catch{alert("error")}};return(n,e)=>{const s=$("vhp-button");return m(),c(f,null,[o("div",null,"name\uFF1A"+_(l(d)?"loading":l(r)),1),o("div",T,[F(o("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},null,512),[[U,t.value]]),h(s,{style:{"margin-left":"8px"},onClick:u},{default:x(()=>[y("Edit")]),_:1})])],64)}}}),V={style:{"margin-top":"8px"}},z=k({__name:"demo3",setup(C){function i(n){return new Promise((e,s)=>{setTimeout(()=>{Math.random()>.5&&e(`vue-hooks-plus ${n.desc}`),s("error")},1e3)})}const t=g(""),r=g([]),{data:d,loading:p,run:u}=b(i,{manual:!0,onBefore:()=>{r.value=[],r.value.push("start request")},onSuccess:()=>{r.value.push("start request success")},onError:()=>{r.value.push("start request error")},onFinally:()=>{r.value.push("start request finally")}});return(n,e)=>{const s=$("vhp-button");return m(),c(f,null,[o("div",null,"name\uFF1A"+_(l(p)?"loading":l(d)),1),o("div",V,[F(o("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},null,512),[[U,t.value]]),h(s,{style:{"margin-left":"8px"},onClick:e[1]||(e[1]=a=>l(u)({desc:t.value}))},{default:x(()=>[y("Edit")]),_:1})]),o("div",null,[(m(!0),c(f,null,w(r.value,a=>(m(),c("p",{key:a},_(a),1))),128))])],64)}}}),q={style:{"margin-top":"16px"}},G=k({__name:"demo4",setup(C){function i(){return new Promise(u=>{setTimeout(()=>{u(String(Date.now()))},1e3)})}const{data:t,run:r,loading:d,refresh:p}=b(()=>i(),{manual:!0});return r(),(u,n)=>{const e=$("vhp-button");return m(),c(f,null,[h(e,{style:{"margin-top":"16px"},onClick:n[0]||(n[0]=()=>l(p)())},{default:x(()=>[y("refresh")]),_:1}),o("div",q,_(l(d)?"loading..":l(t)),1)],64)}}}),A={style:{"margin-top":"8px"}},M={style:{"margin-top":"8px"}},H=k({__name:"demo5",setup(C){function i(e){return new Promise((s,a)=>{setTimeout(()=>{Math.random()>.5&&s(`request-${e.desc}`),a("error")},2e3)})}const t=g(""),r=g([]),{data:d,run:p,mutate:u}=b(i,{manual:!0,onError:()=>{alert("error")}}),n=()=>{u(t.value),p({desc:t.value})};return(e,s)=>{const a=$("vhp-button");return m(),c(f,null,[o("div",null,"name\uFF1A"+_(l(d)),1),o("div",A,[F(o("input",{"onUpdate:modelValue":s[0]||(s[0]=v=>t.value=v)},null,512),[[U,t.value]]),h(a,{style:{"margin-left":"8px"},onClick:n},{default:x(()=>[y("Edit")]),_:1})]),o("div",M,[(m(!0),c(f,null,w(r.value,v=>(m(),c("p",{key:v},_(v),1))),128))])],64)}}}),S={style:{"margin-top":"8px"}},I=k({__name:"demo6",setup(C){function i(s){return new Promise((a,v)=>{setTimeout(()=>{Math.random()>.5&&a(`request-${s.desc}`),v("error")},2e3)})}const t=g(""),{data:r,loading:d,run:p,cancel:u}=b(i,{manual:!0,onError:()=>{alert("error")}}),n=()=>{p({desc:t.value})},e=()=>{u()};return(s,a)=>{const v=$("vhp-button");return m(),c(f,null,[o("div",null,"name\uFF1A"+_(l(d)?"loading..":l(r)),1),o("div",S,[F(o("input",{"onUpdate:modelValue":a[0]||(a[0]=E=>t.value=E)},null,512),[[U,t.value]]),h(v,{style:{"margin-left":"8px"},onClick:n},{default:x(()=>[y("Edit")]),_:1}),h(v,{style:{"margin-left":"8px"},onClick:e},{default:x(()=>[y("Cancel")]),_:1})])],64)}}}),B={style:{"margin-top":"8px"}},N=o("br",null,null,-1),K=k({__name:"demo7",setup(C){function i(n){return new Promise((e,s)=>{setTimeout(()=>{e(`vue-hooks-plus ${n.desc}`)},1e3)})}const t=g("vue-hooks-plus"),{data:r,loading:d,run:p,params:u}=b(i,{defaultParams:[{desc:"nice"}]});return(n,e)=>{const s=$("vhp-button");return m(),c(f,null,[o("div",null,"name\uFF1A"+_(l(d)?"loading":l(r)),1),o("div",B,[F(o("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},null,512),[[U,t.value]]),h(s,{style:{"margin-left":"8px"},onClick:e[1]||(e[1]=a=>l(p)({desc:t.value}))},{default:x(()=>[y("Edit")]),_:1})]),N,o("div",null," Params: "+_(JSON.stringify(l(u))),1)],64)}}});export{O as _,R as a,z as b,G as c,H as d,I as e,K as f};
