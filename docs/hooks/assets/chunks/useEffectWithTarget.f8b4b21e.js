import{g as m}from"./domTarget.667e5233.js";import{r as s,l as E,k as T}from"../app.b52e1a94.js";function g(a,u){if(a===u)return!0;for(let t=0;t<a.length;t++)if(!Object.is(a[t],u[t]))return!1;return!0}const W=a=>(t,n,f)=>{const c=s(!1),r=s([]),i=s([]),e=s();a(()=>{var o;const l=(Array.isArray(f)?f:[f]).map(h=>m(h));if(!c.value){c.value=!0,r.value=l,i.value=n,e.value=t();return}(l.length!==r.value.length||!g(l,r.value)||!g(n,i.value))&&((o=e.value)==null||o.call(e),r.value=l,i.value=n,e.value=t())}),E(()=>{var v;(v=e.value)==null||v.call(e),c.value=!1})},b=W(T);export{b as u};
