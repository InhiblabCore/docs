import{e as r,r as k,Z as m,o as _,c as v,d as a,t as h,u as c,F as f,aa as s,a as g}from"../app.a038a21c.js";import{E as p}from"./useRequest_plugins.es.b0bda4e7.js";const w=a("h3",null,"demo3",-1),y=a("br",null,null,-1),$=r({__name:"demo3",setup(F){function i(e){return new Promise(n=>{setTimeout(()=>{n(`vue-hooks-plus ${e.desc}`)},3e3)})}const u=k(!1),{data:d,loading:l}=m(()=>i({desc:"good"}),{pluginOptions:{fetchingKey:()=>"three",onFetching:(e,n)=>{console.log(e),console.log(n)},isFetching:e=>{u.value=e}}},[p]);return(e,n)=>(_(),v(f,null,[w,a("div",null,h(c(l)?"loading...":c(d)),1),y,a("div",null,h(u.value?"complete!":"all loading..."),1)],64))}}),E=r({__name:"demo",setup(F){const i=r({setup:()=>{function l(o){return new Promise(t=>{setTimeout(()=>{t(`vue-hooks-plus ${o.desc}`)},1e3)})}const{data:e,loading:n}=m(()=>l({desc:"good"}),{pluginOptions:{fetchingKey:()=>"one",onFetching:(o,t)=>{console.log(o),console.log(t)},isFetching:o=>{console.log(o)}}},[p]);return()=>s("div",{},[s("h3","demo1"),s("div",null,n.value?"loading":e.value)])}}),u=r({setup:()=>{function l(o){return new Promise(t=>{setTimeout(()=>{t(`vue-hooks-plus ${o.desc}`)},2e3)})}const{data:e,loading:n}=m(()=>l({desc:"good"}),{pluginOptions:{fetchingKey:()=>"two",onFetching:(o,t)=>{console.log(o),console.log(t)}}},[p]);return()=>s("div",{},[s("h3","demo2"),s("div",null,n.value?"loading":e.value)])}}),d=r({setup:()=>()=>s(u)});return(l,e)=>(_(),v(f,null,[g(c(i)),g(c(d)),g($)],64))}});export{E as _};