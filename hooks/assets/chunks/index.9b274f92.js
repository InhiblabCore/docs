import{r as i,l as f}from"../app.e03dc6d6.js";function m(c,a,d){const n=c.map(e=>window.matchMedia(e)),r=()=>{const e=n.findIndex(t=>t.matches);return typeof a[e]!="undefined"?a[e]:d},o=i(r()),s=()=>{o.value=r()};return f(e=>{n.forEach(t=>{t.addListener(s)}),e(()=>{n.forEach(t=>t.removeListener(s))})}),o}export{m as u};
