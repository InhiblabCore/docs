import{j as J,k as Q,l as W,m as X,n as Y,o as Z,p as j,q as V,c as z}from"./stringify.f75e9b86.js";import{r as A,e as L,o as p,c as _,d as f,s as m,t as F,I as w}from"../app.90f4be9f.js";import{g as ee}from"./domTarget.25866deb.js";import{u as re}from"./useEffectWithTarget.368c1a11.js";import{a as ne,b as ae,i as U}from"./index.36bbfc15.js";var k=J,te=1,se=Object.prototype,oe=se.hasOwnProperty;function le(r,e,a,n,o,t){var l=a&te,c=k(r),s=c.length,d=k(e),y=d.length;if(s!=y&&!l)return!1;for(var u=s;u--;){var i=c[u];if(!(l?i in e:oe.call(e,i)))return!1}var g=t.get(r),T=t.get(e);if(g&&T)return g==e&&T==r;var h=!0;t.set(r,e),t.set(e,r);for(var E=l;++u<s;){i=c[u];var O=r[i],q=e[i];if(n)var I=l?n(q,O,i,e,r,t):n(O,q,i,r,e,t);if(!(I===void 0?O===q||o(O,q,a,n,t):I)){h=!1;break}E||(E=i=="constructor")}if(h&&!E){var P=r.constructor,$=e.constructor;P!=$&&"constructor"in r&&"constructor"in e&&!(typeof P=="function"&&P instanceof P&&typeof $=="function"&&$ instanceof $)&&(h=!1)}return t.delete(r),t.delete(e),h}var ie=le,K=Q,ue=W,fe=X,ce=ie,x=Y,B=V,C=Z.exports,de=j,pe=1,S="[object Arguments]",D="[object Array]",b="[object Object]",_e=Object.prototype,N=_e.hasOwnProperty;function ve(r,e,a,n,o,t){var l=B(r),c=B(e),s=l?D:x(r),d=c?D:x(e);s=s==S?b:s,d=d==S?b:d;var y=s==b,u=d==b,i=s==d;if(i&&C(r)){if(!C(e))return!1;l=!0,y=!1}if(i&&!y)return t||(t=new K),l||de(r)?ue(r,e,a,n,o,t):fe(r,e,s,a,n,o,t);if(!(a&pe)){var g=y&&N.call(r,"__wrapped__"),T=u&&N.call(e,"__wrapped__");if(g||T){var h=g?r.value():r,E=T?e.value():e;return t||(t=new K),o(h,E,a,n,t)}}return i?(t||(t=new K),ce(r,e,a,n,o,t)):!1}var ye=ve,ge=ye,R=z;function H(r,e,a,n,o){return r===e?!0:r==null||e==null||!R(r)&&!R(e)?r!==r&&e!==e:ge(r,e,a,n,H,o)}var me=H,we=me;function Ae(r,e){return we(r,e)}var he=Ae;const Te=(r,e=[])=>he(r,e),Ee=(r,e,a)=>{const n=A(),o=A(0);Te(e,n.value)||(n.value=e,o.value+=1),re(r,[o],a)},Oe={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222},M={ctrl:r=>r.ctrlKey,shift:r=>r.shiftKey,alt:r=>r.altKey,meta:r=>r.metaKey};function qe(r){const e=Object.keys(M).reduce((a,n)=>M[n](r)?a+1:a,0);return[16,17,18,91,92].includes(r.keyCode)?e:e+1}function G(r,e,a){if(!r.key)return!1;if(U(e))return r.keyCode===e;const n=e.split(".");let o=0;for(const t of n){const l=M[t],c=Oe[t.toLowerCase()];(l&&l(r)||c&&c===r.keyCode)&&o++}return a?o===n.length&&qe(r)===n.length:o===n.length}function Pe(r,e){return ne(r)?r:ae(r)||U(r)?a=>G(a,r,e):Array.isArray(r)?a=>r.some(n=>G(a,n,e)):r?()=>!0:()=>!1}const $e=["keydown"];function v(r,e,a){const{events:n=$e,target:o,exactMatch:t=!1}=a||{},l=A(e),c=A(r);Ee(()=>{var y;const s=ee(o,window);if(!s)return;const d=u=>{var g;if(Pe(c.value,t)(u))return(g=l.value)==null?void 0:g.call(l,u)};for(const u of n)(y=s==null?void 0:s.addEventListener)==null||y.call(s,u,d);return()=>{var u;for(const i of n)(u=s==null?void 0:s.removeEventListener)==null||u.call(s,i,d)}},[n],o)}const be=f("p",null,"Try pressing the following: ",-1),Ke=f("div",null,"1. Press ArrowUp by key to increase",-1),Me=f("div",null,"2. Press ArrowDown by keyCode to decrease",-1),Le={style:{color:"#f00"}},We=L({__name:"demo",setup(r){const e=A(0);return v("uparrow",()=>{e.value=e.value+1}),v(40,()=>{e.value=e.value-1}),(a,n)=>(p(),_("div",null,[be,Ke,Me,f("div",null,[m(" counter: "),f("span",Le,F(e.value),1)])]))}}),Ie=f("p",null,"Try pressing the following: ",-1),ke={key:0,style:{color:"#f00"}},xe={key:0,style:{color:"#f00"}},Be={key:0,style:{color:"#f00"}},Ce={key:0,style:{color:"#f00"}},Se={key:0,style:{color:"#f00"}},Xe=L({__name:"demo1",setup(r){const e=A();return v(["shift.c"],()=>{e.value=1}),v(["meta"],()=>{e.value=2}),v("ctrl.alt.c",()=>{e.value=3}),v("ctrl.enter",()=>{e.value=4}),v("ctrl.alt.0",()=>{e.value=5}),(a,n)=>(p(),_("div",null,[Ie,f("div",null,[m(" 1. Modifier key [shift.c]: "),e.value===1?(p(),_("span",ke,"complete")):w("",!0)]),f("div",null,[m(" 2. Modifier key [meta]:"),e.value===2?(p(),_("span",xe)):w("",!0)]),f("div",null,[m(" 3. Modifier key [ctrl.alt.c]: "),e.value===3?(p(),_("span",Be)):w("",!0)]),f("div",null,[m(" 4. Modifier key [ctrl.enter]: "),e.value===4?(p(),_("span",Ce)):w("",!0)]),f("div",null,[m(" 5. Modifier key [ctrl.alt.0]: "),e.value===5?(p(),_("span",Se)):w("",!0)])]))}}),De=f("p",null,"Try pressing the following: ",-1),Ne={key:0,style:{color:"#f00"}},Re={key:0,style:{color:"#f00"}},Ye=L({__name:"demo2",setup(r){const e=A();return v(["shift.c"],()=>{e.value=1}),v(["c"],()=>{e.value=2},{exactMatch:!0}),(a,n)=>(p(),_("div",null,[De,f("div",null,[m(" 1. Modifier key [shift.c]: "),e.value===1?(p(),_("span",Ne,"complete")):w("",!0)]),f("div",null,[m("2. Modifier key [c]: "),e.value===2?(p(),_("span",Re,"complete")):w("",!0)])]))}});export{We as _,Xe as a,Ye as b};
