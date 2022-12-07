import{h as Q,j as F,k as H,l as W,m as Y,n as Z,o as V,p as z,q as rr,i as er,r as x}from"./stringify.90ac3b06.js";import"./intersection-observer.38c1bba6.js";import{r as h,d as q,o as y,c as v,e as p,q as m,t as tr,B as A}from"../app.bf572af9.js";import{g as nr}from"./domTarget.e9298873.js";import{u as sr}from"./useEffectWithTarget.fba3fd26.js";function ar(r,e){for(var t=-1,n=e.length,a=r.length;++t<n;)r[a+t]=e[t];return r}var or=ar,ir=Array.isArray,M=ir,ur=or,lr=M;function fr(r,e,t){var n=e(r);return lr(r)?n:ur(n,t(r))}var cr=fr;function pr(r,e){for(var t=-1,n=r==null?0:r.length,a=0,s=[];++t<n;){var i=r[t];e(i,t,r)&&(s[a++]=i)}return s}var yr=pr;function vr(){return[]}var dr=vr,_r=yr,gr=dr,mr=Object.prototype,Ar=mr.propertyIsEnumerable,k=Object.getOwnPropertySymbols,hr=k?function(r){return r==null?[]:(r=Object(r),_r(k(r),function(e){return Ar.call(r,e)}))}:gr,$r=hr;function wr(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var br=wr,Or=9007199254740991,Pr=/^(?:0|[1-9]\d*)$/;function Tr(r,e){var t=typeof r;return e=e==null?Or:e,!!e&&(t=="number"||t!="symbol"&&Pr.test(r))&&r>-1&&r%1==0&&r<e}var Kr=Tr,Er=br,xr=Q,Lr=M,Ir=F.exports,qr=Kr,Mr=H,Sr=Object.prototype,kr=Sr.hasOwnProperty;function Br(r,e){var t=Lr(r),n=!t&&xr(r),a=!t&&!n&&Ir(r),s=!t&&!n&&!a&&Mr(r),i=t||n||a||s,f=i?Er(r.length,String):[],o=f.length;for(var u in r)(e||kr.call(r,u))&&!(i&&(u=="length"||a&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||qr(u,o)))&&f.push(u);return f}var Gr=Br,Cr=Object.prototype;function Nr(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||Cr;return r===t}var Rr=Nr;function Dr(r,e){return function(t){return r(e(t))}}var Ur=Dr,jr=Ur,Xr=jr(Object.keys,Object),Fr=Xr,Hr=Rr,Jr=Fr,Qr=Object.prototype,Wr=Qr.hasOwnProperty;function Yr(r){if(!Hr(r))return Jr(r);var e=[];for(var t in Object(r))Wr.call(r,t)&&t!="constructor"&&e.push(t);return e}var Zr=Yr,Vr=W,zr=Y;function re(r){return r!=null&&zr(r.length)&&!Vr(r)}var ee=re,te=Gr,ne=Zr,se=ee;function ae(r){return se(r)?te(r):ne(r)}var oe=ae,ie=cr,ue=$r,le=oe;function fe(r){return ie(r,le,ue)}var ce=fe,B=ce,pe=1,ye=Object.prototype,ve=ye.hasOwnProperty;function de(r,e,t,n,a,s){var i=t&pe,f=B(r),o=f.length,u=B(e),_=u.length;if(o!=_&&!i)return!1;for(var c=o;c--;){var l=f[c];if(!(i?l in e:ve.call(e,l)))return!1}var g=s.get(r),w=s.get(e);if(g&&w)return g==e&&w==r;var $=!0;s.set(r,e),s.set(e,r);for(var b=i;++c<o;){l=f[c];var O=r[l],P=e[l];if(n)var S=i?n(P,O,l,e,r,s):n(O,P,l,r,e,s);if(!(S===void 0?O===P||a(O,P,t,n,s):S)){$=!1;break}b||(b=l=="constructor")}if($&&!b){var T=r.constructor,K=e.constructor;T!=K&&"constructor"in r&&"constructor"in e&&!(typeof T=="function"&&T instanceof T&&typeof K=="function"&&K instanceof K)&&($=!1)}return s.delete(r),s.delete(e),$}var _e=de,L=Z,ge=V,me=z,Ae=_e,G=rr,C=M,N=F.exports,he=H,$e=1,R="[object Arguments]",D="[object Array]",E="[object Object]",we=Object.prototype,U=we.hasOwnProperty;function be(r,e,t,n,a,s){var i=C(r),f=C(e),o=i?D:G(r),u=f?D:G(e);o=o==R?E:o,u=u==R?E:u;var _=o==E,c=u==E,l=o==u;if(l&&N(r)){if(!N(e))return!1;i=!0,_=!1}if(l&&!_)return s||(s=new L),i||he(r)?ge(r,e,t,n,a,s):me(r,e,o,t,n,a,s);if(!(t&$e)){var g=_&&U.call(r,"__wrapped__"),w=c&&U.call(e,"__wrapped__");if(g||w){var $=g?r.value():r,b=w?e.value():e;return s||(s=new L),a($,b,t,n,s)}}return l?(s||(s=new L),Ae(r,e,t,n,a,s)):!1}var Oe=be,Pe=Oe,j=er;function J(r,e,t,n,a){return r===e?!0:r==null||e==null||!j(r)&&!j(e)?r!==r&&e!==e:Pe(r,e,t,n,J,a)}var Te=J,Ke=Te;function Ee(r,e){return Ke(r,e)}var xe=Ee;const Le=(r,e=[])=>xe(r,e),Ie=(r,e,t)=>{const n=h(),a=h(0);Le(e,n.value)||(n.value=e,a.value+=1),sr(r,[a],t)},qe={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222},I={ctrl:r=>r.ctrlKey,shift:r=>r.shiftKey,alt:r=>r.altKey,meta:r=>r.metaKey};function Me(r){const e=Object.keys(I).reduce((t,n)=>I[n](r)?t+1:t,0);return[16,17,18,91,92].includes(r.keyCode)?e:e+1}function X(r,e,t){if(console.log(r),!r.key)return!1;if(x.exports.isNumber(e))return r.keyCode===e;const n=e.split(".");let a=0;for(const s of n){const i=I[s],f=qe[s.toLowerCase()];(i&&i(r)||f&&f===r.keyCode)&&a++}return t?a===n.length&&Me(r)===n.length:a===n.length}function Se(r,e){return x.exports.isFunction(r)?r:x.exports.isString(r)||x.exports.isNumber(r)?t=>X(t,r,e):Array.isArray(r)?t=>r.some(n=>X(t,n,e)):r?()=>!0:()=>!1}const ke=["keydown"];function d(r,e,t){const{events:n=ke,target:a,exactMatch:s=!1}=t||{},i=h(e),f=h(r);Ie(()=>{var _;const o=nr(a,window);if(!o)return;const u=c=>{var g;if(Se(f.value,s)(c))return(g=i.value)==null?void 0:g.call(i,c)};for(const c of n)(_=o==null?void 0:o.addEventListener)==null||_.call(o,c,u);return()=>{var c;for(const l of n)(c=o==null?void 0:o.removeEventListener)==null||c.call(o,l,u)}},[n],a)}const Be=p("p",null,"Try pressing the following: ",-1),Ge=p("div",null,"1. Press ArrowUp by key to increase",-1),Ce=p("div",null,"2. Press ArrowDown by keyCode to decrease",-1),Ne={style:{color:"#f00"}},rt=q({__name:"demo",setup(r){const e=h(0);return d("uparrow",()=>{e.value=e.value+1}),d(40,()=>{e.value=e.value-1}),(t,n)=>(y(),v("div",null,[Be,Ge,Ce,p("div",null,[m(" counter: "),p("span",Ne,tr(e.value),1)])]))}}),Re=p("p",null,"Try pressing the following: ",-1),De={key:0,style:{color:"#f00"}},Ue={key:0,style:{color:"#f00"}},je={key:0,style:{color:"#f00"}},Xe={key:0,style:{color:"#f00"}},Fe={key:0,style:{color:"#f00"}},et=q({__name:"demo1",setup(r){const e=h();return d(["shift.c"],()=>{e.value=1}),d(["meta"],()=>{e.value=2}),d("ctrl.alt.c",()=>{e.value=3}),d("ctrl.enter",()=>{e.value=4}),d("ctrl.alt.0",()=>{e.value=5}),(t,n)=>(y(),v("div",null,[Re,p("div",null,[m(" 1. Modifier key [shift.c]: "),e.value===1?(y(),v("span",De,"complete")):A("",!0)]),p("div",null,[m(" 2. Modifier key [meta]:"),e.value===2?(y(),v("span",Ue)):A("",!0)]),p("div",null,[m(" 3. Modifier key [ctrl.alt.c]: "),e.value===3?(y(),v("span",je)):A("",!0)]),p("div",null,[m(" 4. Modifier key [ctrl.enter]: "),e.value===4?(y(),v("span",Xe)):A("",!0)]),p("div",null,[m(" 5. Modifier key [ctrl.alt.0]: "),e.value===5?(y(),v("span",Fe)):A("",!0)])]))}}),He=p("p",null,"Try pressing the following: ",-1),Je={key:0,style:{color:"#f00"}},Qe={key:0,style:{color:"#f00"}},tt=q({__name:"demo2",setup(r){const e=h();return d(["shift.c"],()=>{e.value=1}),d(["c"],()=>{e.value=2},{exactMatch:!0}),(t,n)=>(y(),v("div",null,[He,p("div",null,[m(" 1. Modifier key [shift.c]: "),e.value===1?(y(),v("span",Je,"complete")):A("",!0)]),p("div",null,[m("2. Modifier key [c]: "),e.value===2?(y(),v("span",Qe,"complete")):A("",!0)])]))}});export{rt as _,et as a,tt as b};
