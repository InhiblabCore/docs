import"./stringify.90ac3b06.js";import"./intersection-observer.38c1bba6.js";import{r as u,g as L,k as N,u as n,d as I,s as J,l as X,m as j,o as f,c as S,C as x,w as C,q as b,B as T,t as k,e as h,F as q,n as G}from"../app.bf572af9.js";function H(w,l={}){const{reconnectLimit:p=3,reconnectInterval:_=3*1e3,manual:g=u(!1),onOpen:v,onClose:d,onMessage:r,onError:i,protocols:a}=l,o=u(0),s=u(),c=u(),y=u(!1),V=u(),m=u(3),B=()=>{var e;o.value<p&&((e=c.value)==null?void 0:e.readyState)!==1&&(s.value&&clearTimeout(s.value),s.value=setTimeout(()=>{D(),o.value++},_))},D=()=>{s.value&&clearTimeout(s.value),c.value&&c.value.close();const e=new WebSocket(n(w),a);m.value=0,e.onerror=t=>{y.value||(B(),i==null||i(t,e),m.value=e.readyState||3)},e.onopen=t=>{y.value||(v==null||v(t,e),o.value=0,m.value=e.readyState||1)},e.onmessage=t=>{y.value||(r==null||r(t,e),V.value=t)},e.onclose=t=>{y.value||(B(),d==null||d(t,e),m.value=e.readyState||3)},c.value=e},F=e=>{var t;if(m.value===1)(t=c.value)==null||t.send(e);else throw new Error("WebSocket disconnected")},R=()=>{o.value=0,D()},E=()=>{var e;s.value&&clearTimeout(s.value),o.value=p,(e=c.value)==null||e.close()};return L([w,g],e=>{const[t,W]=e;W||R()},{immediate:!0}),N(()=>{y.value=!0,E()}),{latestMessage:V,sendMessage:F,connect:R,disconnect:E,readyState:m,webSocketIns:c.value}}const M={style:{height:"400px",overflow:"scroll"}},P={style:{"margin-top":"8px"}},U={style:{"margin-top":"8px"}},Z={style:{"margin-top":"8px"}},$=h("p",null,"received message: ",-1),Q=I({__name:"demo",setup(w){const{readyState:l,sendMessage:p,latestMessage:_,disconnect:g,connect:v}=H("wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"),d=J(()=>_==null?void 0:_.value),r=u([]);return X(()=>{var i,a;(i=d.value)!=null&&i.data&&r.value.push((a=d.value)==null?void 0:a.data)}),(i,a)=>{const o=j("vhp-button");return f(),S("div",M,[n(l)===1?(f(),x(o,{key:0,onClick:a[0]||(a[0]=()=>n(p)&&n(p)(`${Date.now()}`))},{default:C(()=>[b("\u2709\uFE0F send")]),_:1})):T("",!0),n(l)===1?(f(),x(o,{key:1,style:{"margin-left":"8px"},onClick:a[1]||(a[1]=()=>n(g)&&n(g)())},{default:C(()=>[b(" \u274C disconnect")]),_:1})):T("",!0),n(l)!==1?(f(),x(o,{key:2,style:{"margin-left":"8px"},onClick:a[2]||(a[2]=()=>n(v)&&n(v)())},{default:C(()=>[b(k(n(l)===0?"connecting":"\u{1F4DE} connect"),1)]),_:1})):T("",!0),h("div",P,"readyState: "+k(n(l)),1),h("div",U," message count: "+k(r.value.length),1),h("div",Z,[$,(f(!0),S(q,null,G(r.value,(s,c)=>(f(),S("p",{key:c},k(s),1))),128))])])}}});export{Q as _};
