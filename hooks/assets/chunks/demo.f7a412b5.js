import"./stringify.3385e5ad.js";import{s as p,l as m,u as g,e as h,r as d,m as v,o as f,c as _,b as c,t as k,a as l,w as i,q as r}from"../app.e03dc6d6.js";import"./intersection-observer.38c1bba6.js";const b={SVG:"image/svg+xml",ICO:"image/x-icon",GIF:"image/gif",PNG:"image/png"};function C(a){const o=p(()=>g(a));m(()=>{var n;if(!o.value)return;const t=(n=o.value)==null?void 0:n.split("."),s=t[t.length-1].toLocaleUpperCase(),e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type=b[s],e.href=o.value,e.rel="shortcut icon",document.getElementsByTagName("head")[0].appendChild(e)})}const x={style:{padding:"16px"}},w={style:{"margin-top":"16px"}},T=h({__name:"demo",setup(a){const o=d("https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.svg"),t=s=>{o.value=s};return C(o),(s,e)=>{const n=v("vhp-button");return f(),_("div",x,[c("span",null,k(o.value),1),c("div",w,[l(n,{class:"button1",onClick:e[0]||(e[0]=u=>t("https://www.google.com/favicon.ico"))},{default:i(()=>[r(" Change To Google favicon\u3002 ")]),_:1}),l(n,{class:"button2",style:{"margin-left":"8px"},onClick:e[1]||(e[1]=u=>t("https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.svg"))},{default:i(()=>[r(" Change To VueHooks Plus favicon\u3002 ")]),_:1})])])}}});export{T as _};