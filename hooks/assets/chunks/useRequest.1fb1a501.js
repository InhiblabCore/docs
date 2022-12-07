var O=Object.defineProperty;var _=(n,e,t)=>e in n?O(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>(_(n,typeof e!="symbol"?e+"":e,t),t);import{d as D,s as M,f as E,u as x}from"./stringify.90ac3b06.js";import{r as m,l as w,k as C,s as S,u as v,z as U,h as j,A as q}from"../app.bf572af9.js";import{d as N}from"./debounce.01a2f890.js";import{t as $}from"./throttle.5b457739.js";const R=new Map,z=(n,e,t)=>{const s=R.get(n);s!=null&&s.timer&&clearTimeout(s.timer);let u;e>-1&&(u=setTimeout(()=>{R.delete(n)},e)),R.set(n,{...t,timer:u})},L=n=>R.get(n),b=new Map,V=n=>b.get(n),J=(n,e)=>{b.set(n,e),e.then(t=>(b.delete(n),t)).catch(t=>{throw b.delete(n),t})},P={},Q=(n,e)=>{P[n]&&P[n].forEach(t=>t(e))},B=(n,e)=>(P[n]||(P[n]=[]),P[n].push(e),function(){const s=P[n].indexOf(e);P[n].splice(s,1)}),X=(n,{cacheKey:e,cacheTime:t=5*60*1e3,staleTime:s=0,setCache:u,getCache:a})=>{const r=m(),c=m(),l=(i,o)=>{u?u(o):z(i,t,o),Q(i,o.data)},d=(i,o=[])=>a?a(o):L(i);return w(()=>{if(!e)return;const i=d(e);i&&Object.hasOwnProperty.call(i,"data")&&(n.state.data=i.data,n.state.params=i.params,console.log("staleTime",s),(s===-1||new Date().getTime()-i.time<=s)&&(n.state.loading=!1)),r.value=B(e,o=>{n.setState({data:o})})}),C(()=>{var i;(i=r.value)==null||i.call(r)}),e?{onBefore:i=>{const o=d(e,i);return!o||!Object.hasOwnProperty.call(o,"data")?{}:s===-1||new Date().getTime()-o.time<=s?(console.log("\u505C\u6B62\u8BF7\u6C42"),{loading:!1,data:o==null?void 0:o.data,returnNow:!0}):{data:o==null?void 0:o.data}},onRequest:(i,o)=>{let f=V(e);return f&&f!==c.value?{servicePromise:f}:(f=i(...o),c.value=f,J(e,f),{servicePromise:f})},onSuccess:(i,o)=>{var f;e&&((f=r.value)==null||f.call(r),l(e,{data:i,params:o,time:new Date().getTime()}),r.value=B(e,h=>{n.setState({data:h})}))},onMutate:i=>{var o;e&&((o=r.value)==null||o.call(r),l(e,{data:i,params:n.state.params,time:new Date().getTime()}),r.value=B(e,f=>{n.setState({data:f})}))}}:{}},Y=(n,{debounceWait:e,debounceLeading:t,debounceTrailing:s,debounceMaxWait:u})=>{const a=m(),r=S(()=>{const c={},l=v(t),d=v(s),i=v(u);return l!==void 0&&(c.leading=l),d!==void 0&&(c.trailing=d),i!==void 0&&(c.maxWait=i),c});return w(c=>{if(v(e)){const l=n.runAsync.bind(n);a.value=N(d=>{d()},v(e),r.value),n.runAsync=(...d)=>new Promise((i,o)=>{var f;(f=a.value)==null||f.call(a,()=>{l(...d).then(i).catch(o)})}),c(()=>{var d;(d=a.value)==null||d.cancel(),n.runAsync=l})}}),v(e)?{onCancel:()=>{var c;(c=a.value)==null||c.cancel()}}:{}},Z=(n,{loadingDelay:e})=>{const t=m();if(!v(e))return{};const s=()=>{t.value&&clearTimeout(t.value)};return{onBefore:()=>(s(),t.value=setTimeout(()=>{n.setState({loading:!0})},v(e)),{loading:!1}),onFinally:()=>{s()},onCancel:()=>{s()}}},y=(n,{pollingInterval:e,pollingWhenHidden:t=!0,pollingErrorRetryCount:s=-1})=>{const u=m(),a=m(),r=m(0),c=()=>{var l;u.value&&clearInterval(u.value),(l=a.value)==null||l.call(a)};return w(()=>{v(e)||c()}),v(e)?{onBefore:()=>{c()},onError:()=>{r.value+=1},onSuccess:()=>{r.value=0},onFinally:()=>{s===-1||s!==-1&&r.value<=s?u.value=setTimeout(()=>{!t&&!D()?a.value=M(()=>{n.refresh()}):n.refresh()},v(e)):r.value=0},onCancel:()=>{c()}}:{}};function G(n,e){let t=!1;return(...s)=>{t||(t=!0,n(...s),setTimeout(()=>{t=!1},e))}}const W=(n,{refreshOnWindowFocus:e,focusTimespan:t=5e3})=>{const s=m(),u=()=>{var a;(a=s.value)==null||a.call(s)};return w(a=>{if(v(e)){const r=G(n.refresh.bind(n),v(t));s.value=E(()=>{r()})}a(()=>{u()})}),C(()=>{u()}),{}},k=(n,{retryInterval:e,retryCount:t})=>{const s=m(),u=m(0),a=m(!1);return t?{onBefore:()=>{a.value||(u.value=0),a.value=!1,s.value&&clearTimeout(s.value)},onSuccess:()=>{u.value=0},onError:()=>{if(u.value+=1,t===-1||u.value<=t){const r=e!=null?e:Math.min(1e3*2**u.value,3e4);s.value=setTimeout(()=>{a.value=!0,n.refresh()},r)}else u.value=0},onCancel:()=>{u.value=0,s.value&&clearTimeout(s.value)}}:{}},I=(n,{throttleWait:e,throttleLeading:t,throttleTrailing:s})=>{const u=S(()=>{const r={};return v(t)!==void 0&&(r.leading=v(t)),v(s)!==void 0&&(r.trailing=v(s)),r}),a=S(()=>$(r=>{r()},v(e),u.value));return w(r=>{if(v(e)){const c=n.runAsync.bind(n);n.runAsync=(...l)=>new Promise((d,i)=>{var o;(o=a.value)==null||o.call(a,()=>{c(...l).then(d).catch(i)})}),r(()=>{var l;n.runAsync=c,(l=a.value)==null||l.cancel()})}}),v(e)?{onCancel:()=>{var r;(r=a.value)==null||r.cancel()}}:{}};class K{constructor(e,t,s,u={}){A(this,"pluginImpls");A(this,"count",0);A(this,"state",{loading:!1,params:void 0,data:void 0,error:void 0});this.serviceRef=e,this.options=t,this.setUpdataData=s,this.initState=u,this.state={...this.state,loading:!t.manual,...u}}setState(e={}){this.state={...this.state,...e},this.setUpdataData(this.state)}setData(e,t){t instanceof Array?t.forEach(s=>{this.state[s]=e,this.setUpdataData(e,s)}):(this.state[t]=e,this.setUpdataData(e,t))}runPluginHandler(e,...t){var u,a,r;const s=(r=(a=(u=this.pluginImpls)==null?void 0:u.map(c=>{var l;return(l=c[e])==null?void 0:l.call(c,...t)}))!=null?a:[])==null?void 0:r.filter(Boolean);return Object.assign({},...s)}async runAsync(...e){var r,c,l,d,i,o,f,h,T,F;this.count+=1;const t=this.count,{stopNow:s=!1,returnNow:u=!1,...a}=this.runPluginHandler("onBefore",e);if(s)return new Promise(()=>{});if(this.setState({loading:!0,params:e,...a}),u)return Promise.resolve(a.data);(c=(r=this.options).onBefore)==null||c.call(r,e);try{let{servicePromise:g}=this.runPluginHandler("onRequest",this.serviceRef.value,e);g||(g=this.serviceRef.value(...e));const H=await g;if(t!==this.count)return new Promise(()=>{});const p=this.options.formatResult?this.options.formatResult(H):H;return this.setState({data:p,error:void 0,loading:!1}),(d=(l=this.options).onSuccess)==null||d.call(l,p,e),this.runPluginHandler("onSuccess",p,e),(o=(i=this.options).onFinally)==null||o.call(i,e,p,void 0),t===this.count&&this.runPluginHandler("onFinally",e,p,void 0),p}catch(g){if(t!==this.count)return new Promise(()=>{});throw this.setState({error:g,loading:!1}),(h=(f=this.options).onError)==null||h.call(f,g,e),this.runPluginHandler("onError",g,e),(F=(T=this.options).onFinally)==null||F.call(T,e,void 0,g),t===this.count&&this.runPluginHandler("onFinally",e,void 0,g),g}}run(...e){this.runAsync(...e).catch(t=>{this.options.onError||console.error(t)})}cancel(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")}refresh(){this.run(...this.state.params||[])}refreshAsync(){return this.runAsync(...this.state.params||[])}mutate(e){let t;typeof e=="function"?t=e==null?void 0:e(this.state.data):t=e,this.runPluginHandler("onMutate",t),this.setState({data:t})}}function ee(n,e={},t=[]){const{manual:s=!1,ready:u=!0,...a}=e,r={manual:s,ready:u,...a},c=m(n),l=U({data:void 0,loading:!1,params:void 0,error:void 0}),d=(o,f)=>{f?l[f]=o:(l.data=o.data,l.loading=o.loading,l.error=o.error,l.params=o.params)},i=S(()=>{const o=t.map(f=>{var h;return(h=f==null?void 0:f.onInit)==null?void 0:h.call(f,r)}).filter(Boolean);return new K(c,r,d,Object.assign({},...o))});return i.value.options=r,i.value.pluginImpls=t.map(o=>o(i.value,r)),j(()=>{if(!s){const o=i.value.state.params||e.defaultParams||[];v(u)&&i.value.run(...o)}}),C(()=>{i.value.cancel()}),{...q(l),cancel:i.value.cancel.bind(i.value),refresh:i.value.refresh.bind(i.value),refreshAsync:i.value.refreshAsync.bind(i.value),run:i.value.run.bind(i.value),runAsync:i.value.runAsync.bind(i.value),mutate:i.value.mutate.bind(i.value)}}function oe(n,e,t){return ee(n,e,[...t||[],Y,Z,y,W,I,x,X,k])}export{oe as u};
