import{e as r,J as d,r as p,K as u,o as l,c,d as o,t as i,u as g,n as _,b as m,a as h,w as f,f as v}from"../app.367c0303.js";const x={style:{overflow:"scroll","min-height":"200px"}},y={class:"status"},k=["src"],S=r({__name:"demo",setup(b){const s=d("https://cdn.bootcdn.net/ajax/libs/axios/0.26.1/axios.js",{js:{async:!0}}),t=p();return u(()=>{s.value==="ready"&&axios.get("https://raw.githubusercontent.com/InhiblabCore/vue-hooks-plus/master/packages/hooks/docs/public/logo.png",{responseType:"arraybuffer"}).then(e=>"data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce((a,n)=>a+String.fromCharCode(n),""))).then(e=>{t.value=e})}),(e,a)=>(l(),c("div",x,[o("div",y,"Status: "+i(g(s)),1),o("img",{src:t.value,alt:""},null,8,k)]))}}),w={style:{padding:"16px"}},j=r({__name:"demo1",setup(b){const s=p(""),t=d(s);return(e,a)=>{const n=_("vhp-button");return l(),c("div",w,[o("div",null,"Status: "+i(g(t)),1),a[2]||(a[2]=m('<div class="bd-example"><span class="badge badge-pill badge-primary">Primary</span><span class="badge badge-pill badge-secondary">Secondary</span><span class="badge badge-pill badge-success">Success</span><span class="badge badge-pill badge-danger">Danger</span><span class="badge badge-pill badge-warning">Warning</span><span class="badge badge-pill badge-info">Info</span><span class="badge badge-pill badge-light">Light</span><span class="badge badge-pill badge-dark">Dark</span></div>',1)),h(n,{style:{"margin-top":"16px"},onClick:a[0]||(a[0]=()=>s.value="https://ahooks.js.org/useExternal/bootstrap-badge.css")},{default:f(()=>a[1]||(a[1]=[v(" \u52A0\u8F7Dcss ")])),_:1})])}}});export{S as _,j as a};
