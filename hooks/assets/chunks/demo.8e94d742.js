import{T as dt,U as mt,e as ht,n as bt,o as C,c as I,d as R,F as H,l as Pt,u as gt,a as tt,w as nt,f as rt,V as Ot,t as wt}from"../app.367c0303.js";function y(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function g(t){return!!t&&!!t[l]}function P(t){var n;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var e=Object.getPrototypeOf(r);if(e===null)return!0;var o=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Dt}(t)||Array.isArray(t)||!!t[st]||!!(!((n=t.constructor)===null||n===void 0)&&n[st])||L(t)||B(t))}function A(t,n,r){r===void 0&&(r=!1),O(t)===0?(r?Object.keys:G)(t).forEach(function(e){r&&typeof e=="symbol"||n(e,t[e],t)}):t.forEach(function(e,o){return n(o,e,t)})}function O(t){var n=t[l];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:L(t)?2:B(t)?3:0}function K(t,n){return O(t)===2?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function jt(t,n){return O(t)===2?t.get(n):t[n]}function lt(t,n,r){var e=O(t);e===2?t.set(n,r):e===3?t.add(r):t[n]=r}function At(t,n){return t===n?t!==0||1/t==1/n:t!=t&&n!=n}function L(t){return Rt&&t instanceof Map}function B(t){return xt&&t instanceof Set}function b(t){return t.o||t.t}function J(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=Nt(t);delete n[l];for(var r=G(n),e=0;e<r.length;e++){var o=r[e],u=n[o];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(n[o]={configurable:!0,writable:!0,enumerable:u.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),n)}function _(t,n){return n===void 0&&(n=!1),X(t)||g(t)||!P(t)||(O(t)>1&&(t.set=t.add=t.clear=t.delete=_t),Object.freeze(t),n&&A(t,function(r,e){return _(e,!0)},!0)),t}function _t(){y(2)}function X(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function d(t){var n=Ft[t];return n||y(18,t),n}function et(){return S}function z(t,n){n&&(d("Patches"),t.u=[],t.s=[],t.v=n)}function x(t){U(t),t.p.forEach(St),t.p=null}function U(t){t===S&&(S=t.l)}function ot(t){return S={p:[],l:S,h:t,m:!0,_:0}}function St(t){var n=t[l];n.i===0||n.i===1?n.j():n.g=!0}function M(t,n){n._=n.p.length;var r=n.p[0],e=t!==void 0&&t!==r;return n.h.O||d("ES5").S(n,t,e),e?(r[l].P&&(x(n),y(4)),P(t)&&(t=D(n,t),n.l||N(n,t)),n.u&&d("Patches").M(r[l].t,t,n.u,n.s)):t=D(n,r,[]),x(n),n.u&&n.v(n.u,n.s),t!==pt?t:void 0}function D(t,n,r){if(X(n))return n;var e=n[l];if(!e)return A(n,function(i,a){return ut(t,e,n,i,a,r)},!0),n;if(e.A!==t)return n;if(!e.P)return N(t,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=e.i===4||e.i===5?e.o=J(e.k):e.o,u=o,c=!1;e.i===3&&(u=new Set(o),o.clear(),c=!0),A(u,function(i,a){return ut(t,e,o,i,a,r,c)}),N(t,o,!1),r&&t.u&&d("Patches").N(e,r,t.u,t.s)}return e.o}function ut(t,n,r,e,o,u,c){if(g(o)){var i=D(t,o,u&&n&&n.i!==3&&!K(n.R,e)?u.concat(e):void 0);if(lt(r,e,i),!g(i))return;t.m=!1}else c&&r.add(o);if(P(o)&&!X(o)){if(!t.h.D&&t._<1)return;D(t,o),n&&n.A.l||N(t,o)}}function N(t,n,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&_(n,r)}function V(t,n){var r=t[l];return(r?b(r):t)[n]}function it(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r)}}function T(t){t.P||(t.P=!0,t.l&&T(t.l))}function E(t){t.o||(t.o=J(t.t))}function W(t,n,r){var e=L(n)?d("MapSet").F(n,r):B(n)?d("MapSet").T(n,r):t.O?function(o,u){var c=Array.isArray(o),i={i:c?1:0,A:u?u.A:et(),P:!1,I:!1,R:{},l:u,t:o,k:null,o:null,j:null,C:!1},a=i,f=$;c&&(a=[i],f=j);var s=Proxy.revocable(a,f),m=s.revoke,v=s.proxy;return i.k=v,i.j=m,v}(n,r):d("ES5").J(n,r);return(r?r.A:et()).p.push(e),e}function kt(t){return g(t)||y(22,t),function n(r){if(!P(r))return r;var e,o=r[l],u=O(r);if(o){if(!o.P&&(o.i<4||!d("ES5").K(o)))return o.t;o.I=!0,e=at(r,u),o.I=!1}else e=at(r,u);return A(e,function(c,i){o&&jt(o.t,c)===i||lt(e,c,n(i))}),u===3?new Set(e):e}(t)}function at(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return J(t)}var ct,S,q=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Rt=typeof Map<"u",xt=typeof Set<"u",ft=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",pt=q?Symbol.for("immer-nothing"):((ct={})["immer-nothing"]=!0,ct),st=q?Symbol.for("immer-draftable"):"__$immer_draftable",l=q?Symbol.for("immer-state"):"__$immer_state",Dt=""+Object.prototype.constructor,G=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Nt=Object.getOwnPropertyDescriptors||function(t){var n={};return G(t).forEach(function(r){n[r]=Object.getOwnPropertyDescriptor(t,r)}),n},Ft={},$={get:function(t,n){if(n===l)return t;var r=b(t);if(!K(r,n))return function(o,u,c){var i,a=it(u,c);return a?"value"in a?a.value:(i=a.get)===null||i===void 0?void 0:i.call(o.k):void 0}(t,r,n);var e=r[n];return t.I||!P(e)?e:e===V(t.t,n)?(E(t),t.o[n]=W(t.A.h,e,t)):e},has:function(t,n){return n in b(t)},ownKeys:function(t){return Reflect.ownKeys(b(t))},set:function(t,n,r){var e=it(b(t),n);if(e!=null&&e.set)return e.set.call(t.k,r),!0;if(!t.P){var o=V(b(t),n),u=o==null?void 0:o[l];if(u&&u.t===r)return t.o[n]=r,t.R[n]=!1,!0;if(At(r,o)&&(r!==void 0||K(t.t,n)))return!0;E(t),T(t)}return t.o[n]===r&&(r!==void 0||n in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[n])||(t.o[n]=r,t.R[n]=!0),!0},deleteProperty:function(t,n){return V(t.t,n)!==void 0||n in t.t?(t.R[n]=!1,E(t),T(t)):delete t.R[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var r=b(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e&&{writable:!0,configurable:t.i!==1||n!=="length",enumerable:e.enumerable,value:r[n]}},defineProperty:function(){y(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){y(12)}},j={};A($,function(t,n){j[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}}),j.deleteProperty=function(t,n){return j.set.call(this,t,n,void 0)},j.set=function(t,n,r){return $.set.call(this,t[0],n,r,t[0])};var Ct=function(){function t(r){var e=this;this.O=ft,this.D=!0,this.produce=function(o,u,c){if(typeof o=="function"&&typeof u!="function"){var i=u;u=o;var a=e;return function(h){var vt=this;h===void 0&&(h=i);for(var F=arguments.length,Y=Array(F>1?F-1:0),k=1;k<F;k++)Y[k-1]=arguments[k];return a.produce(h,function(yt){var Z;return(Z=u).call.apply(Z,[vt,yt].concat(Y))})}}var f;if(typeof u!="function"&&y(6),c!==void 0&&typeof c!="function"&&y(7),P(o)){var s=ot(e),m=W(e,o,void 0),v=!0;try{f=u(m),v=!1}finally{v?x(s):U(s)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(h){return z(s,c),M(h,s)},function(h){throw x(s),h}):(z(s,c),M(f,s))}if(!o||typeof o!="object"){if((f=u(o))===void 0&&(f=o),f===pt&&(f=void 0),e.D&&_(f,!0),c){var w=[],Q=[];d("Patches").M(o,f,w,Q),c(w,Q)}return f}y(21,o)},this.produceWithPatches=function(o,u){if(typeof o=="function")return function(f){for(var s=arguments.length,m=Array(s>1?s-1:0),v=1;v<s;v++)m[v-1]=arguments[v];return e.produceWithPatches(f,function(w){return o.apply(void 0,[w].concat(m))})};var c,i,a=e.produce(o,u,function(f,s){c=f,i=s});return typeof Promise<"u"&&a instanceof Promise?a.then(function(f){return[f,c,i]}):[a,c,i]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var n=t.prototype;return n.createDraft=function(r){P(r)||y(8),g(r)&&(r=kt(r));var e=ot(this),o=W(this,r,void 0);return o[l].C=!0,U(e),o},n.finishDraft=function(r,e){var o=r&&r[l],u=o.A;return z(u,e),M(void 0,u)},n.setAutoFreeze=function(r){this.D=r},n.setUseProxies=function(r){r&&!ft&&y(20),this.O=r},n.applyPatches=function(r,e){var o;for(o=e.length-1;o>=0;o--){var u=e[o];if(u.path.length===0&&u.op==="replace"){r=u.value;break}}o>-1&&(e=e.slice(o+1));var c=d("Patches").$;return g(r)?c(r,e):this.produce(r,function(i){return c(i,e)})},t}(),p=new Ct,It=p.produce;p.produceWithPatches.bind(p);p.setAutoFreeze.bind(p);p.setUseProxies.bind(p);p.applyPatches.bind(p);p.createDraft.bind(p);p.finishDraft.bind(p);function zt(t){const n=dt(_(typeof t=="function"?t():t,!0)),r=e=>{typeof e=="function"?n.value=It(n.value,e):n.value=_(e)};return[mt(n),r]}const Mt=["onClick"],Et=ht({__name:"demo",setup(t){const n=[{title:"Learn Vue",done:!0},{title:"Use Vue with Immer",done:!1}],[r,e]=zt(n);function o(i){e(a=>{a[i].done=!a[i].done})}const u=()=>{e([{title:"Learn Vue 1",done:!1}])},c=()=>{e(n)};return(i,a)=>{const f=bt("vhp-button");return C(),I(H,null,[a[2]||(a[2]=R("h3",null,"function updater",-1)),R("ul",null,[(C(!0),I(H,null,Pt(gt(r),({title:s,done:m},v)=>(C(),I("li",{class:Ot({done:m}),key:s,onClick:w=>o(v)},wt(s),11,Mt))),128))]),a[3]||(a[3]=R("h3",null," no function updater",-1)),R("div",null,[tt(f,{onClick:u},{default:nt(()=>a[0]||(a[0]=[rt("Set index 0 title")])),_:1}),tt(f,{onClick:c,style:{"margin-left":"8px"}},{default:nt(()=>a[1]||(a[1]=[rt("Reset")])),_:1})])],64)}}});export{Et as _};
