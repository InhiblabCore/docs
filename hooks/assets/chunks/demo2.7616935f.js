import"./stringify.471e71ff.js";import"./intersection-observer.38c1bba6.js";import{r as n,d as c,o as r,c as v,e,t as _,u as a,F as y,a as m}from"../app.7e92691a.js";import{g as f}from"./domTarget.63171dbf.js";import{u as k}from"./useEffectWithTarget.86511655.js";function p(d,t=()=>!0){const s=n(),l=n(t);return k(()=>{const i=f(d,document);if(!i)return;const u=()=>{let o;i===document?document.scrollingElement?o={left:document.scrollingElement.scrollLeft,top:document.scrollingElement.scrollTop}:o={left:Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),top:Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft)}:o={left:i.scrollLeft,top:i.scrollTop},l.value(o)&&(s.value=o)};return u(),i.addEventListener("scroll",u),()=>{i.removeEventListener("scroll",u)}},[],d),s}const I=e("div",null," I like study I like study I like study I like study I like study ",-1),h=e("div",null," I like study I like study I like study ",-1),g=e("div",null," I like study ",-1),x=e("div",null," I like study ",-1),w=e("div",null," I like study ",-1),E=e("div",null,"I like study",-1),S=e("div",null," I like study ",-1),L=e("div",null," I like study ",-1),T=[I,h,g,x,w,E,S,L],z=c({__name:"demo",setup(d){const t=n(null),s=p(t);return(l,i)=>(r(),v(y,null,[e("p",null,_(JSON.stringify(a(s))),1),e("div",{style:{height:"160px",width:"160px",border:"solid 1px #000",overflow:"scroll",whiteSpace:"nowrap",fontSize:"32px"},ref_key:"domRef",ref:t},T,512)],64))}}),F=c({__name:"demo1",setup(d){const t=p(document);return(s,l)=>(r(),v("div",null,[e("p",null,_(JSON.stringify(a(t))),1)]))}}),b=m("<div> I like study I like study I like study I like study I like study </div><div> I like study I like study I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div>I like study</div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div><div> I like study </div>",16),N=[b],M=c({__name:"demo2",setup(d){const t=n(null),s=p(t,l=>l.top>100&&l.top<200);return(l,i)=>(r(),v(y,null,[e("p",null,_(JSON.stringify(a(s))),1),e("div",{style:{height:"160px",width:"160px",border:"solid 1px #000",overflow:"scroll",whiteSpace:"nowrap",fontSize:"32px"},ref_key:"domRef",ref:t},N,512)],64))}});export{z as _,F as a,M as b};
