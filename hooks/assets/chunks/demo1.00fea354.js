import"./stringify.f75e9b86.js";import{r as i,v as j,j as _,k as S,u as v,e as y,o as x,c as E,d as g,t as k,n as w,a as L,w as A,s as $,b as N}from"../app.90f4be9f.js";const d={},D=(r,a={})=>{const t=document.querySelector(`script[src="${r}"]`);if(!t){const e=document.createElement("script");return e.src=r,Object.keys(a).forEach(s=>{e[s]=a[s]}),e.setAttribute("data-status","loading"),document.body.appendChild(e),{ref:e,status:"loading"}}return{ref:t,status:t.getAttribute("data-status")||"ready"}},I=(r,a={})=>{const t=document.querySelector(`link[href="${r}"]`);if(!t){const e=document.createElement("link");return e.rel="stylesheet",e.href=r,Object.keys(a).forEach(l=>{e[l]=a[l]}),"hideFocus"in e&&e.relList&&(e.rel="preload",e.as="style"),e.setAttribute("data-status","loading"),document.head.appendChild(e),{ref:e,status:"loading"}}return{ref:t,status:t.getAttribute("data-status")||"ready"}};function C(r,a){const t=i(r?"loading":"unset"),e=i(),s=j(()=>v(r));return _(l=>{var b,f,h,m;if(!s.value){t.value="unset";return}const p=(f=(b=s.value)==null?void 0:b.replace(/[|#].*$/,""))!=null?f:"";if((a==null?void 0:a.type)==="css"||!(a!=null&&a.type)&&/(^css!|\.css$)/.test(p)){const n=I((h=s.value)!=null?h:"",a==null?void 0:a.css);e.value=n.ref,t.value=n.status}else if((a==null?void 0:a.type)==="js"||!(a!=null&&a.type)&&/(^js!|\.js$)/.test(p)){const n=D((m=s.value)!=null?m:"",a==null?void 0:a.js);e.value=n.ref,t.value=n.status}else console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). Refer to the https://ahooks.js.org/hooks/dom/use-external/#options");if(!e.value)return;s.value&&d[s.value]===void 0?d[s.value]=1:s.value&&(d[s.value]+=1);const o=n=>{var u;const c=n.type==="load"?"ready":"error";(u=e.value)==null||u.setAttribute("data-status",c),t.value=c};e.value.addEventListener("load",o),e.value.addEventListener("error",o),l(()=>{var n,c,u;(n=e.value)==null||n.removeEventListener("load",o),(c=e.value)==null||c.removeEventListener("error",o),s.value&&(d[s.value]-=1),s.value&&d[s.value]===0&&((u=e.value)==null||u.remove()),e.value=void 0})}),S(t)}const T={style:{overflow:"scroll","min-height":"200px"}},V={class:"status"},B=["src"],F=y({__name:"demo",setup(r){const a=C("https://cdn.bootcdn.net/ajax/libs/axios/0.26.1/axios.js",{js:{async:!0}}),t=i();return _(()=>{a.value==="ready"&&axios.get("https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.png",{responseType:"arraybuffer"}).then(e=>"data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce((s,l)=>s+String.fromCharCode(l),""))).then(e=>{t.value=e})}),(e,s)=>(x(),E("div",T,[g("div",V,"Status: "+k(v(a)),1),g("img",{src:t.value,alt:""},null,8,B)]))}}),O={style:{padding:"16px"}},R=N('<div class="bd-example"><span class="badge badge-pill badge-primary">Primary</span><span class="badge badge-pill badge-secondary">Secondary</span><span class="badge badge-pill badge-success">Success</span><span class="badge badge-pill badge-danger">Danger</span><span class="badge badge-pill badge-warning">Warning</span><span class="badge badge-pill badge-info">Info</span><span class="badge badge-pill badge-light">Light</span><span class="badge badge-pill badge-dark">Dark</span></div>',1),P=y({__name:"demo1",setup(r){const a=i(""),t=C(a);return(e,s)=>{const l=w("vhp-button");return x(),E("div",O,[g("div",null,"Status: "+k(v(t)),1),R,L(l,{style:{"margin-top":"16px"},onClick:s[0]||(s[0]=()=>a.value="https://ahooks.js.org/useExternal/bootstrap-badge.css")},{default:A(()=>[$(" \u52A0\u8F7Dcss ")]),_:1})])}}});export{F as _,P as a};