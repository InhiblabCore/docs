import"./stringify.7c979077.js";import{u as i}from"./index.64141a97.js";import{e as d,o as m,c as _,d as g,u as o,n as h,t as v,a as r,w as p,s as c}from"../app.fefc8ec7.js";const x=["value"],k=d({__name:"demo",setup(f){const[a,s]=i("use-local-storage-state-demo1",{defaultValue:"Hello ~ VueHooks Plus"}),n=t=>{var e;s((e=t==null?void 0:t.target)==null?void 0:e.value)};return(t,e)=>(m(),_("div",null,[g("input",{type:"text",value:o(a),onChange:n,placeholder:"\u8BF7\u8F93\u5165",style:{width:"300px"}},null,40,x)]))}}),b=d({__name:"demo1",setup(f){const a=["a","e","i","o","u"],[s,n]=i("use-local-storage-state-demo2",{defaultValue:a});return(t,e)=>{var u;const l=h("vhp-button");return m(),_("div",null,[g("p",null,v((u=o(s))==null?void 0:u.join("-")),1),r(l,{type:"vhp-button",style:{"margin-right":"16px"},onClick:e[0]||(e[0]=()=>o(n)([...o(s),Math.random().toString(36).slice(-1)]))},{default:p(()=>[c(" push random ")]),_:1}),r(l,{type:"vhp-button",onClick:e[1]||(e[1]=()=>o(n)(a))},{default:p(()=>[c(" reset ")]),_:1})])}}});export{k as _,b as a};
