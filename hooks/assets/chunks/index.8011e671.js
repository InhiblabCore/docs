import"./isBrowser.46f69b0e.js";import{g as i}from"./domTarget.dc0dc16b.js";import{u}from"./useEffectWithTarget.36d0e03b.js";import{r as a}from"../app.d255f7e5.js";function b(r,e){const t=a(),o=a();return u(()=>{const n=i(r);if(!n)return;const s=new IntersectionObserver(f=>{for(const c of f)t.value=c.isIntersecting,o.value=c.intersectionRatio},{...e,root:i(e==null?void 0:e.root)});return s.observe(n),()=>{s.disconnect()}},[],r),[t,o]}export{b as u};
