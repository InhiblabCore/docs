import{u as m}from"./useRequest.c5c3e16e.js";import"./stringify.dafbd646.js";import"./isBrowser.46f69b0e.js";import{L as y,e as u,r as k,o as F,c as _,d as h,t as f,u as g,F as v,K as l,a as d}from"../app.a751dad7.js";const b=y("fetchingGlobalStore",{state:()=>({states:{}}),getters:{},actions:{setFetchingInit(n,s,t){this.states[n]={key:n,onFetching:s,isFetching:t}},setCurrentKeyData(n,s,t){var i;(i=this.states[n])!=null&&i.key?(this.states[n]={...this.states[n],data:s,status:t},this.broadcastFetching()):console.warn("key is no exist!")},broadcastFetching(){var n;for(const s in this.states)if(Object.prototype.hasOwnProperty.call(this.states,s)){const t=this.states[s];(n=t.onFetching)==null||n.call(t,t,this.states),t.isFetching&&this.isFetchingAll(t.isFetching)}},isFetchingAll(n){const s=Object.keys(this.states),t=Object.keys(this.states).filter(i=>this.states[i].status==="success");n(s.length===t.length)}}}),p=(n,{fetchingKey:s,onFetching:t,isFetching:i})=>{const a=b();let e;return{onBefore:o=>{e=s==null?void 0:s(o),e&&a.setFetchingInit(e,t,i)},onSuccess:o=>{e&&a.setCurrentKeyData(e,o,"success")},onError:()=>{e&&a.setCurrentKeyData(e,null,"error")}}},K=h("h3",null,"demo3",-1),w=h("br",null,null,-1),D=u({__name:"demo3",setup(n){function s(e){return new Promise(o=>{setTimeout(()=>{o(`vue-hooks-plus ${e.desc}`)},3e3)})}const t=k(!1),{data:i,loading:a}=m(()=>s({desc:"good"}),{fetchingKey:()=>"three",onFetching:(e,o)=>{console.log(e),console.log(o)},isFetching:e=>{t.value=e}},[p]);return(e,o)=>(F(),_(v,null,[K,h("div",null,f(g(a)?"loading...":g(i)),1),w,h("div",null,f(t.value?"complete!":"all loading..."),1)],64))}}),P=u({__name:"demo",setup(n){const s=u({setup:()=>{function a(c){return new Promise(r=>{setTimeout(()=>{r(`vue-hooks-plus ${c.desc}`)},1e3)})}const{data:e,loading:o}=m(()=>a({desc:"good"}),{fetchingKey:()=>"one",onFetching:(c,r)=>{console.log(c),console.log(r)},isFetching:c=>{console.log(c)}},[p]);return()=>l("div",{},[l("h3","demo1"),l("div",null,o.value?"loading":e.value)])}}),t=u({setup:()=>{function a(c){return new Promise(r=>{setTimeout(()=>{r(`vue-hooks-plus ${c.desc}`)},2e3)})}const{data:e,loading:o}=m(()=>a({desc:"good"}),{fetchingKey:()=>"two",onFetching:(c,r)=>{console.log(c),console.log(r)}},[p]);return()=>l("div",{},[l("h3","demo2"),l("div",null,o.value?"loading":e.value)])}}),i=u({setup:()=>()=>l(t)});return(a,e)=>(F(),_(v,null,[d(g(s)),d(g(i)),d(D)],64))}});export{P as _};