import"./stringify.3385e5ad.js";import{u as n}from"./index.7af09056.js";import{e as l,r as d,o as p,c as a,b as e,q as c,t as i,u as r,v as h}from"../app.e03dc6d6.js";const x={style:{width:"100%",height:"300px",overflow:"scroll",border:"1px solid"}},f={style:{height:"800px"}},V=l({__name:"demo",setup(_){const o=d(null),[t]=n(o);return(s,m)=>(p(),a("div",null,[e("div",x,[c(" scroll here "),e("div",f,[e("div",{ref_key:"domRef",ref:o,style:{border:"1px solid",height:"100px",width:"100px","text-align":"center","margin-top":"80px"}}," observer dom ",512)])]),e("div",{style:h({marginTop:16,color:r(t)?"#87d068":"#f50"})}," inViewport: "+i(r(t)?"visible":"hidden"),5)]))}}),u={style:{width:"100%",height:"300px",overflow:"scroll",border:"1px solid"}},v={style:{height:"800px"}},k=l({__name:"demo1",setup(_){const o=d(null),[t,s]=n(o,{threshold:[0,.25,.5,.75,1],root:()=>document.getElementById("container")});return(m,g)=>(p(),a("div",null,[e("div",u,[c(" scroll here "),e("div",v,[e("div",{ref_key:"domRef",ref:o,style:{border:"1px solid",height:"100px",width:"100px","text-align":"center","margin-top":"80px"}}," observer dom ",512)])]),e("div",{style:h({marginTop:16,color:r(t)?"#87d068":"#f50"})},[e("p",null,"inViewport: "+i(r(t)?"visible":"hidden"),1),e("p",null,"ratio: "+i(r(s)),1)],4)]))}});export{V as _,k as a};
