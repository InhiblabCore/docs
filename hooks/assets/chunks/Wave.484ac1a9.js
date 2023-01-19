import{u as to}from"./index.de2a81b1.js";import{e as da,r as ci,g as no,h as fa,o as Or,c as Ur,d as ei,i as io,_ as pa,u as ro,p as so,f as ao}from"../app.9c682a42.js";const ma=r=>Array.isArray(r),ga=r=>ma(r)?r:[r];let oo=function(r){let e=function(m){return ga(m).forEach(_=>{var p;return d.set(Symbol((p=_.char)==null?void 0:p.innerText),i({..._}))}),this},t=()=>c().filter(m=>m.typeable),n=function(m,_){let p=[...d.keys()];d.set(p[m],i(_))},i=m=>(m.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},m),s=function(){d.forEach(m=>delete m.done)},o=function(){d=new Map,e(r)},a=()=>d,c=()=>Array.from(d.values()),l=m=>d.delete(m),u=(m=!1)=>m?c():c().filter(_=>!_.done),f=(m,_=!1)=>_?d.delete(m):d.get(m).done=!0,d=new Map;return e(r),{add:e,set:n,wipe:o,reset:s,destroy:l,done:f,getItems:u,getQueue:a,getTypeable:t}};const _a=r=>Array.from(r),zr=r=>document.createTextNode(r);let Br=r=>([...r.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(t=>{e.parentNode.insertBefore(zr(t),e)}),e.remove();return}Br(e)}),r);const xa=r=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=r,Br(e.body)},va="data-typeit-id",dn="ti-cursor",lo="END",co={started:!1,completed:!1,frozen:!1,destroyed:!1},Nn={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(r=>({opacity:r})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},uo=`[${va}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function Ma(r,e=!1,t=!1){let n=r.querySelector(`.${dn}`),i=document.createTreeWalker(r,NodeFilter.SHOW_ALL,{acceptNode:a=>{var c,l;if(n&&t){if((c=a.classList)!=null&&c.contains(dn))return NodeFilter.FILTER_ACCEPT;if(n.contains(a))return NodeFilter.FILTER_REJECT}return(l=a.classList)!=null&&l.contains(dn)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),s,o=[];for(;s=i.nextNode();)s.originalParent||(s.originalParent=s.parentNode),o.push(s);return e?o.reverse():o}function ho(r){return Ma(xa(r))}function fo(r,e=!0){return e?ho(r):_a(r).map(zr)}const Ni=r=>document.createElement(r),Sa=(r,e="")=>{let t=Ni("style");t.id=e,t.appendChild(zr(r)),document.head.appendChild(t)},Yr=r=>(ma(r)||(r=[r/2,r/2]),r),Qr=(r,e)=>Math.abs(Math.random()*(r+e-(r-e))+(r-e));let Jr=r=>r/2;function po(r){let{speed:e,deleteSpeed:t,lifeLike:n}=r;return t=t!==null?t:e/3,n?[Qr(e,Jr(e)),Qr(t,Jr(t))]:[e,t]}const mo=r=>(r.forEach(clearTimeout),[]),go=()=>Math.random().toString().substring(2,9),Gr=r=>"value"in r;let _o=r=>Gr(r)?_a(r.value):Ma(r,!0).filter(e=>!(e.childNodes.length>0));const xo=(r,e)=>{new IntersectionObserver((n,i)=>{n.forEach(s=>{s.isIntersecting&&(e(),i.unobserve(r))})},{threshold:1}).observe(r)};let vn=r=>typeof r=="function"?r():r;const ya=r=>Number.isInteger(r);let kr=(r,e=document,t=!1)=>e[`querySelector${t?"All":""}`](r),vo=r=>/body/i.test(r==null?void 0:r.tagName),Mo=(r,e)=>{if(Gr(r)){r.value=`${r.value}${e.textContent}`;return}e.innerHTML="";let t=vo(e.originalParent)?r:e.originalParent||r;t.insertBefore(e,kr("."+dn,t)||null)},So=(r,e,t)=>Math.min(Math.max(e+r,0),t.length);const Zn=(r,e)=>Object.assign({},r,e),yo=(r,e)=>{if(!r)return;let t=r.parentNode;(t.childNodes.length>1||t.isSameNode(e)?r:t).remove()},bo=(r,e,t)=>{let n=e[t-1],i=kr(`.${dn}`,r);r=(n==null?void 0:n.parentNode)||r,r.insertBefore(i,n||null)};function wo(r){return typeof r=="string"?kr(r):r}const Ao=r=>/<(.+)>(.*?)<\/(.+)>/.test(r.outerHTML);let Eo=(r,e,t)=>new Promise(n=>{let i=async()=>{await r(),n()};t.push(setTimeout(i,e||0))}),To={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Co=(r,e)=>{let n=`${`[${va}='${r}']`} .${dn}`,i=getComputedStyle(e),s=Object.entries(To).reduce((o,[a,c])=>`${o} ${a}: var(--ti-cursor-${a}, ${c||i[a]});`,"");Sa(`${n} { display: inline-block; width: 0; ${s} }`,r)};const ui=(r,e)=>new Array(e).fill(r),Zr=({queueItems:r,selector:e,cursorPosition:t,to:n})=>{if(ya(e))return e*-1;let i=new RegExp(lo,"i").test(n),s=e?[...r].reverse().findIndex(({char:a})=>{let c=a.parentElement,l=c.matches(e);return i&&l?!0:l&&c.firstChild.isSameNode(a)}):-1;s<0&&(s=i?0:r.length-1);let o=i?0:1;return s-t+o};let zi=r=>new Promise(e=>{requestAnimationFrame(async()=>{e(await r())})}),ba=r=>r==null?void 0:r.getAnimations().find(e=>e.id===r.dataset.tiAnimationId),wa=({cursor:r,frames:e,options:t})=>{let n=r.animate(e,t);return n.pause(),n.id=r.dataset.tiAnimationId,zi(()=>{zi(()=>{n.play()})}),n},Lo=({cursor:r,options:e,cursorOptions:t})=>{if(!r||!t)return;let n=ba(r),i;n&&(e.delay=n.effect.getComputedTiming().delay,i=n.currentTime,n.cancel());let s=wa({cursor:r,frames:t.animation.frames,options:e});return i&&(s.currentTime=i),s},Kr=r=>{var e;return(e=r.func)==null?void 0:e.call(null)},Do=async({index:r,queueItems:e,wait:t,cursor:n,cursorOptions:i})=>{let s=e[r][1],o=[],a=r,c=s,l=()=>c&&!c.delay,u=s.shouldPauseCursor()&&i.autoPause;for(;l();)o.push(c),l()&&a++,c=e[a]?e[a][1]:null;if(o.length)return await zi(async()=>{for(let m of o)await Kr(m)}),a-1;let f=ba(n),d;return f&&(d={...f.effect.getComputedTiming(),delay:u?i.autoPauseDelay:0}),await t(async()=>{f&&u&&f.cancel(),await zi(()=>{Kr(s)})},s.delay),await Lo({cursor:n,options:d,cursorOptions:i}),r},Po=r=>{var e,t,n;if(typeof r=="object"){let i={},{frames:s,options:o}=Nn.cursor.animation;return i.animation=r.animation||{},i.animation.frames=((e=r.animation)==null?void 0:e.frames)||s,i.animation.options=Zn(o,((t=r.animation)==null?void 0:t.options)||{}),i.autoPause=(n=r.autoPause)!=null?n:Nn.cursor.autoPause,i.autoPauseDelay=r.autoPauseDelay||Nn.cursor.autoPauseDelay,i}return r===!0?Nn.cursor:r};const Ro=function(r,e={}){var j;let t=async(C,N,O=!1)=>{te.frozen&&await new Promise(U=>{this.unfreeze=()=>{te.frozen=!1,U()}}),O||await F.beforeStep(this),await Eo(C,N,E),O||await F.afterStep(this)},n=(C,N)=>Do({index:C,queueItems:N,wait:t,cursor:J,cursorOptions:F.cursor}),i=C=>yo(C,g),s=()=>Gr(g),o=(C=0)=>po(F)[C],a=()=>_o(g),c=(C={})=>{let N=C.delay;N&&k.add({delay:N})},l=(C,N)=>(k.add(C),c(N),this),u=()=>Y!=null?Y:P,f=(C={})=>[{func:()=>w(C)},{func:()=>w(F)}],d=C=>{let N=F.nextStringDelay;k.add([{delay:N[0]},...C,{delay:N[1]}])},m=()=>{if(s())return;let C=Ni("span");return C.className=dn,Q?(C.innerHTML=xa(F.cursorChar).innerHTML,C):(C.style.visibility="hidden",C)},_=async()=>{if(!s()&&J&&g.appendChild(J),Q){Co(I,g),J.dataset.tiAnimationId=I;let{animation:C}=F.cursor,{frames:N,options:O}=C;wa({frames:N,cursor:J,options:{duration:F.cursorSpeed,...O}})}},p=()=>{let C=F.strings.filter(N=>!!N);C.forEach((N,O)=>{if(this.type(N),O+1===C.length)return;let U=F.breakLines?[{func:()=>S(Ni("BR")),typeable:!0}]:ui({func:z,delay:o(1)},k.getTypeable().length);d(U)})},h=async C=>{let N=u();N&&await b({value:N});let O=a().map(U=>[Symbol(),{func:z,delay:o(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let U=0;U<O.length;U++)await n(U,O);k.reset(),k.set(0,{delay:C})},x=C=>{let N=g.innerHTML;return N?(g.innerHTML="",F.startDelete?(g.innerHTML=N,Br(g),d(ui({func:z,delay:o(1),deletable:!0},a().length)),C):N.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(C)):C},A=async(C=!0)=>{te.started=!0;let N=O=>{k.done(O,!C)};try{let O=[...k.getQueue()];for(let $=0;$<O.length;$++){let[Z,ne]=O[$];if(!ne.done){if(!ne.deletable||ne.deletable&&a().length){let G=await n($,O);Array(G-$).fill($+1).map((we,le)=>we+le).forEach(we=>{let[le]=O[we];N(le)}),$=G}N(Z)}}if(!C)return this;if(te.completed=!0,await F.afterComplete(this),!F.loop)throw"";let U=F.loopDelay;t(async()=>{await h(U[0]),A()},U[1])}catch{}return this},b=async C=>{P=So(C,P,a()),bo(g,a(),P)},S=C=>Mo(g,C),w=async C=>F=Zn(F,C),L=async()=>{if(s()){g.value="";return}a().forEach(i)},z=()=>{let C=a();!C.length||(s()?g.value=g.value.slice(0,-1):i(C[P]))};this.break=function(C){return l({func:()=>S(Ni("BR")),typeable:!0},C)},this.delete=function(C=null,N={}){C=vn(C);let O=f(N),U=C,{instant:$,to:Z}=N,ne=k.getTypeable(),G=(()=>U===null?ne.length:ya(U)?U:Zr({queueItems:ne,selector:U,cursorPosition:u(),to:Z}))();return l([O[0],...ui({func:z,delay:$?0:o(1),deletable:!0},G),O[1]],N)},this.empty=function(C={}){return l({func:L},C)},this.exec=function(C,N={}){let O=f(N);return l([O[0],{func:()=>C(this)},O[1]],N)},this.move=function(C,N={}){C=vn(C);let O=f(N),{instant:U,to:$}=N,Z=Zr({queueItems:k.getTypeable(),selector:C===null?"":C,to:$,cursorPosition:u()}),ne=Z<0?-1:1;return Y=u()+Z,l([O[0],...ui({func:()=>b(ne),delay:U?0:o(),cursorable:!0},Math.abs(Z)),O[1]],N)},this.options=function(C,N={}){return C=vn(C),w(C),l({},N)},this.pause=function(C,N={}){return l({delay:vn(C)},N)},this.type=function(C,N={}){C=vn(C);let{instant:O}=N,U=f(N),Z=fo(C,F.html).map(G=>({func:()=>S(G),char:G,delay:O||Ao(G)?0:o(),typeable:G.nodeType===Node.TEXT_NODE})),ne=[U[0],{func:async()=>await F.beforeString(C,this)},...Z,{func:async()=>await F.afterString(C,this)},U[1]];return l(ne,N)},this.is=function(C){return te[C]},this.destroy=function(C=!0){E=mo(E),vn(C)&&J&&i(J),te.destroyed=!0},this.freeze=function(){te.frozen=!0},this.unfreeze=()=>{},this.reset=function(C){!this.is("destroyed")&&this.destroy(),C?(k.wipe(),C(this)):k.reset(),P=0;for(let N in te)te[N]=!1;return g[s()?"value":"innerHTML"]="",this},this.go=function(){return te.started?this:(_(),F.waitUntilVisible?(xo(g,A.bind(this)),this):(A(),this))},this.flush=function(C=()=>{}){return _(),A(!1).then(C),this},this.getQueue=()=>k,this.getOptions=()=>F,this.updateOptions=C=>w(C),this.getElement=()=>g;let g=wo(r),E=[],P=0,Y=null,te=Zn({},co);e.cursor=Po((j=e.cursor)!=null?j:Nn.cursor);let F=Zn(Nn,e);F=Zn(F,{html:!s()&&F.html,nextStringDelay:Yr(F.nextStringDelay),loopDelay:Yr(F.loopDelay)});let I=go(),k=oo([{delay:F.startDelay}]);g.dataset.typeitId=I,Sa(uo);let Q=!!F.cursor&&!s(),J=m();F.strings=x(ga(F.strings)),F.strings.length&&p()};const Io={class:"terminal"},jf=da({__name:"DemoEditor",setup(r){const e=ci(null),t=ci(!1),n=ci(!0),[i]=to(e),s=ci();return no([i,t],o=>{(o==null?void 0:o[0])&&(o==null?void 0:o[1])&&n.value===!0&&(n.value=!1,s.value&&new Ro(s.value,{speed:50,startDelay:900}).type('<br><h1 style="opacity: 0.5;">Welcome use VueHooks Plus!</h1><br /><br />',{delay:100}).type('<span class="label-code">&lt;script</span> setup lang="ts" <span class="label-code">&gt</span> <br /><br /><br />').type('&nbsp<span class="import-code">import</span> { <span class="module-code">useRequest</span> } from "<span class="export-code">vue-hooks-plus</span>" <br /> <br />',{delay:100}).type(`&nbspconst { <span class="variable-code">data</span>  } = <span class="module-code">useRequest</span>(()=><span class="module-code">getData</span>(),{
    <span class="variable-code">...options</span>
 })`).type('<br /><br /><br /><span class="label-code">&lt;script /&gt;</span>').type('<br /><br /><span class="label-code">&lt;template&gt;</span><br /><br />&nbsp<span class="label-code">&lt;div&gt; <br /></span>&nbsp&nbsp&nbspdata\uFF1A{{<span class="variable-code"> undefined </span>}} <br />&nbsp<span class="label-code">&lt;div /&gt; </span><br />').type('<br /><span class="label-code">&lt;template /&gt;</span>').move(-27).delete(11,{delay:400}).type('<span class="variable-code"> fetch API data update! </span>',{delay:400}).go())}),fa(()=>{t.value=!0}),(o,a)=>(Or(),Ur("div",{id:"demo-editor",ref_key:"domRef",ref:e},[ei("div",Io,[io(o.$slots,"default"),ei("div",null,[ei("pre",{ref_key:"block",ref:s,class:"language-vue extra-class"},null,512)])])],512))}}),Fo="data:image/png;base64,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";const No=r=>(so("data-v-23f2a419"),r=r(),ao(),r),Oo={class:"container"},Uo=No(()=>ei("div",{class:"img"},null,-1)),zo=["src"],Bo=da({__name:"Icon",setup(r){return(e,t)=>(Or(),Ur("div",Oo,[Uo,ei("img",{src:ro(Fo),alt:"vue-hooks-plus"},null,8,zo)]))}});var qf=pa(Bo,[["__scopeId","data-v-23f2a419"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hr="147",Go=0,$r=1,ko=2,Aa=1,Ho=2,Kn=3,Bn=0,St=1,Qt=2,Zt=0,Un=1,es=2,ts=3,ns=4,Vo=5,Fn=100,Wo=101,Xo=102,is=103,rs=104,jo=200,qo=201,Yo=202,Qo=203,Ea=204,Ta=205,Jo=206,Zo=207,Ko=208,$o=209,el=210,tl=0,nl=1,il=2,Tr=3,rl=4,sl=5,al=6,ol=7,Ca=0,ll=1,cl=2,Gt=0,ul=1,hl=2,dl=3,fl=4,pl=5,La=300,Gn=301,kn=302,Cr=303,Lr=304,Gi=306,Dr=1e3,Tt=1001,Pr=1002,at=1003,ss=1004,as=1005,vt=1006,ml=1007,ki=1008,gn=1009,gl=1010,_l=1011,Da=1012,xl=1013,un=1014,hn=1015,ti=1016,vl=1017,Ml=1018,zn=1020,Sl=1021,yl=1022,Ct=1023,bl=1024,wl=1025,fn=1026,Hn=1027,Al=1028,El=1029,Tl=1030,Cl=1031,Ll=1033,Yi=33776,Qi=33777,Ji=33778,Zi=33779,os=35840,ls=35841,cs=35842,us=35843,Dl=36196,hs=37492,ds=37496,fs=37808,ps=37809,ms=37810,gs=37811,_s=37812,xs=37813,vs=37814,Ms=37815,Ss=37816,ys=37817,bs=37818,ws=37819,As=37820,Es=37821,Ts=36492,_n=3e3,ze=3001,Pl=3200,Rl=3201,Il=0,Fl=1,Lt="srgb",ni="srgb-linear",Ki=7680,Nl=519,Cs=35044,Ls="300 es",Rr=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$i=Math.PI/180,Ds=180/Math.PI;function ii(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[e&255]+$e[e>>8&255]+"-"+$e[e>>16&15|64]+$e[e>>24&255]+"-"+$e[t&63|128]+$e[t>>8&255]+"-"+$e[t>>16&255]+$e[t>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function Ol(r,e){return(r%e+e)%e}function er(r,e,t){return(1-t)*r+t*e}function Ps(r){return(r&r-1)===0&&r!==0}function Ir(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],_=n[8],p=i[0],h=i[3],x=i[6],A=i[1],b=i[4],S=i[7],w=i[2],L=i[5],z=i[8];return s[0]=o*p+a*A+c*w,s[3]=o*h+a*b+c*L,s[6]=o*x+a*S+c*z,s[1]=l*p+u*A+f*w,s[4]=l*h+u*b+f*L,s[7]=l*x+u*S+f*z,s[2]=d*p+m*A+_*w,s[5]=d*h+m*b+_*L,s[8]=d*x+m*S+_*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,m=l*s-o*c,_=t*f+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tr.makeScale(e,t)),this}rotate(e){return this.premultiply(tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(tr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new pt;function Pa(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const nr={[Lt]:{[ni]:pn},[ni]:{[Lt]:Oi}},rt={legacyMode:!0,get workingColorSpace(){return ni},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(nr[e]&&nr[e][t]!==void 0){const n=nr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ve={r:0,g:0,b:0},wt={h:0,s:0,l:0},di={h:0,s:0,l:0};function ir(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function fi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Ol(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ir(o,s,e+1/3),this.g=ir(o,s,e),this.b=ir(o,s,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,rt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Lt){const n=Ra[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return rt.fromWorkingColorSpace(fi(this,Ve),e),ft(Ve.r*255,0,255)<<16^ft(Ve.g*255,0,255)<<8^ft(Ve.b*255,0,255)<<0}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(fi(this,Ve),t);const n=Ve.r,i=Ve.g,s=Ve.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(fi(this,Ve),t),e.r=Ve.r,e.g=Ve.g,e.b=Ve.b,e}getStyle(e=Lt){return rt.fromWorkingColorSpace(fi(this,Ve),e),e!==Lt?`color(${e} ${Ve.r} ${Ve.g} ${Ve.b})`:`rgb(${Ve.r*255|0},${Ve.g*255|0},${Ve.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wt),wt.h+=e,wt.s+=t,wt.l+=n,this.setHSL(wt.h,wt.s,wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wt),e.getHSL(di);const n=er(wt.h,di.h,t),i=er(wt.s,di.s,t),s=er(wt.l,di.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=Ra;let Mn;class Ia{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mn===void 0&&(Mn=Bi("canvas")),Mn.width=e.width,Mn.height=e.height;const n=Mn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Fa{constructor(e=null){this.isSource=!0,this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(rr(i[o].image)):s.push(rr(i[o]))}else s=rr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function rr(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ia.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ul=0;class mt extends Wn{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Tt,i=Tt,s=vt,o=ki,a=Ct,c=gn,l=mt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=ii(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==La)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case Tt:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case Tt:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=La;mt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],_=c[9],p=c[2],h=c[6],x=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(m+1)/2,w=(x+1)/2,L=(u+d)/4,z=(f+p)/4,g=(_+h)/4;return b>S&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=L/n,s=z/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=L/i,s=g/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=z/s,i=g/s),this.set(n,i,s,t),this}let A=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(h-_)/A,this.y=(f-p)/A,this.z=(d-u)/A,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xn extends Wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Na extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=at,this.minFilter=at,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=at,this.minFilter=at,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||c!==d||l!==m||u!==_){let h=1-a;const x=c*d+l*m+u*_+f*p,A=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const w=Math.sqrt(b),L=Math.atan2(w,x*A);h=Math.sin(h*L)/w,a=Math.sin(a*L)/w}const S=a*A;if(c=c*h+d*S,l=l*h+m*S,u=u*h+_*S,f=f*h+p*S,h===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*f+c*m-l*d,e[t+1]=c*_+u*d+l*f-a*m,e[t+2]=l*_+u*m+a*d-c*f,e[t+3]=u*_-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),d=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f+d*m*_;break;case"YZX":this._x=d*u*f+l*m*_,this._y=l*m*f+d*u*_,this._z=l*u*_-d*m*f,this._w=l*u*f-d*m*_;break;case"XZY":this._x=d*u*f-l*m*_,this._y=l*m*f-d*u*_,this._z=l*u*_+d*m*f,this._w=l*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,f=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+u*-a-f*-o,this.y=u*c+d*-o+f*-s-l*-a,this.z=f*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new B,Rs=new ri;class si{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],d=e[c+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),d=e.getZ(c);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)rn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(rn)}else n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox),ar.applyMatrix4(e.matrixWorld),this.union(ar);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qn),pi.subVectors(this.max,qn),Sn.subVectors(e.a,qn),yn.subVectors(e.b,qn),bn.subVectors(e.c,qn),Ht.subVectors(yn,Sn),Vt.subVectors(bn,yn),sn.subVectors(Sn,bn);let t=[0,-Ht.z,Ht.y,0,-Vt.z,Vt.y,0,-sn.z,sn.y,Ht.z,0,-Ht.x,Vt.z,0,-Vt.x,sn.z,0,-sn.x,-Ht.y,Ht.x,0,-Vt.y,Vt.x,0,-sn.y,sn.x,0];return!or(t,Sn,yn,bn,pi)||(t=[1,0,0,0,1,0,0,0,1],!or(t,Sn,yn,bn,pi))?!1:(mi.crossVectors(Ht,Vt),t=[mi.x,mi.y,mi.z],or(t,Sn,yn,bn,pi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return rn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ft=[new B,new B,new B,new B,new B,new B,new B,new B],rn=new B,ar=new si,Sn=new B,yn=new B,bn=new B,Ht=new B,Vt=new B,sn=new B,qn=new B,pi=new B,mi=new B,an=new B;function or(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){an.fromArray(r,s);const a=i.x*Math.abs(an.x)+i.y*Math.abs(an.y)+i.z*Math.abs(an.z),c=e.dot(an),l=t.dot(an),u=n.dot(an);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Bl=new si,Yn=new B,lr=new B;class Hi{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yn.subVectors(e,this.center);const t=Yn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yn.copy(e.center).add(lr)),this.expandByPoint(Yn.copy(e.center).sub(lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nt=new B,cr=new B,gi=new B,Wt=new B,ur=new B,_i=new B,hr=new B;class Oa{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nt.copy(this.direction).multiplyScalar(t).add(this.origin),Nt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cr.copy(e).add(t).multiplyScalar(.5),gi.copy(t).sub(e).normalize(),Wt.copy(this.origin).sub(cr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gi),a=Wt.dot(this.direction),c=-Wt.dot(gi),l=Wt.lengthSq(),u=Math.abs(1-o*o);let f,d,m,_;if(u>0)if(f=o*c-a,d=o*a-c,_=s*u,f>=0)if(d>=-_)if(d<=_){const p=1/u;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(gi).multiplyScalar(d).add(cr),m}intersectSphere(e,t){Nt.subVectors(e.center,this.origin);const n=Nt.dot(this.direction),i=Nt.dot(Nt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nt)!==null}intersectTriangle(e,t,n,i,s){ur.subVectors(t,e),_i.subVectors(n,e),hr.crossVectors(ur,_i);let o=this.direction.dot(hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wt.subVectors(this.origin,e);const c=a*this.direction.dot(_i.crossVectors(Wt,_i));if(c<0)return null;const l=a*this.direction.dot(ur.cross(Wt));if(l<0||c+l>o)return null;const u=-a*Wt.dot(hr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,f,d,m,_,p,h){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=f,x[14]=d,x[3]=m,x[7]=_,x[11]=p,x[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/wn.setFromMatrixColumn(e,0).length(),s=1/wn.setFromMatrixColumn(e,1).length(),o=1/wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,_=a*u,p=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,_=l*u,p=l*f;t[0]=d+p*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,_=l*u,p=l*f;t[0]=d-p*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*f,_=a*u,p=a*f;t[0]=c*u,t[4]=_*l-m,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*u,t[4]=p-d*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+_,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+p,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gl,e,kl)}lookAt(e,t,n){const i=this.elements;return ht.subVectors(e,t),ht.lengthSq()===0&&(ht.z=1),ht.normalize(),Xt.crossVectors(n,ht),Xt.lengthSq()===0&&(Math.abs(n.z)===1?ht.x+=1e-4:ht.z+=1e-4,ht.normalize(),Xt.crossVectors(n,ht)),Xt.normalize(),xi.crossVectors(ht,Xt),i[0]=Xt.x,i[4]=xi.x,i[8]=ht.x,i[1]=Xt.y,i[5]=xi.y,i[9]=ht.y,i[2]=Xt.z,i[6]=xi.z,i[10]=ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],_=n[2],p=n[6],h=n[10],x=n[14],A=n[3],b=n[7],S=n[11],w=n[15],L=i[0],z=i[4],g=i[8],E=i[12],P=i[1],Y=i[5],te=i[9],F=i[13],I=i[2],k=i[6],Q=i[10],J=i[14],j=i[3],C=i[7],N=i[11],O=i[15];return s[0]=o*L+a*P+c*I+l*j,s[4]=o*z+a*Y+c*k+l*C,s[8]=o*g+a*te+c*Q+l*N,s[12]=o*E+a*F+c*J+l*O,s[1]=u*L+f*P+d*I+m*j,s[5]=u*z+f*Y+d*k+m*C,s[9]=u*g+f*te+d*Q+m*N,s[13]=u*E+f*F+d*J+m*O,s[2]=_*L+p*P+h*I+x*j,s[6]=_*z+p*Y+h*k+x*C,s[10]=_*g+p*te+h*Q+x*N,s[14]=_*E+p*F+h*J+x*O,s[3]=A*L+b*P+S*I+w*j,s[7]=A*z+b*Y+S*k+w*C,s[11]=A*g+b*te+S*Q+w*N,s[15]=A*E+b*F+S*J+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],p=e[7],h=e[11],x=e[15];return _*(+s*c*f-i*l*f-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*u-s*c*u)+h*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*u-n*l*u)+x*(-i*a*u-t*c*f+t*a*d+i*o*f-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],p=e[13],h=e[14],x=e[15],A=f*h*l-p*d*l+p*c*m-a*h*m-f*c*x+a*d*x,b=_*d*l-u*h*l-_*c*m+o*h*m+u*c*x-o*d*x,S=u*p*l-_*f*l+_*a*m-o*p*m-u*a*x+o*f*x,w=_*f*c-u*p*c-_*a*d+o*p*d+u*a*h-o*f*h,L=t*A+n*b+i*S+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=A*z,e[1]=(p*d*s-f*h*s-p*i*m+n*h*m+f*i*x-n*d*x)*z,e[2]=(a*h*s-p*c*s+p*i*l-n*h*l-a*i*x+n*c*x)*z,e[3]=(f*c*s-a*d*s-f*i*l+n*d*l+a*i*m-n*c*m)*z,e[4]=b*z,e[5]=(u*h*s-_*d*s+_*i*m-t*h*m-u*i*x+t*d*x)*z,e[6]=(_*c*s-o*h*s-_*i*l+t*h*l+o*i*x-t*c*x)*z,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*m+t*c*m)*z,e[8]=S*z,e[9]=(_*f*s-u*p*s-_*n*m+t*p*m+u*n*x-t*f*x)*z,e[10]=(o*p*s-_*a*s+_*n*l-t*p*l-o*n*x+t*a*x)*z,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*m-t*a*m)*z,e[12]=w*z,e[13]=(u*p*i-_*f*i+_*n*d-t*p*d-u*n*h+t*f*h)*z,e[14]=(_*a*i-o*p*i-_*n*c+t*p*c+o*n*h-t*a*h)*z,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*d+t*a*d)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,m=s*u,_=s*f,p=o*u,h=o*f,x=a*f,A=c*l,b=c*u,S=c*f,w=n.x,L=n.y,z=n.z;return i[0]=(1-(p+x))*w,i[1]=(m+S)*w,i[2]=(_-b)*w,i[3]=0,i[4]=(m-S)*L,i[5]=(1-(d+x))*L,i[6]=(h+A)*L,i[7]=0,i[8]=(_+b)*z,i[9]=(h-A)*z,i[10]=(1-(d+p))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=wn.set(i[0],i[1],i[2]).length();const o=wn.set(i[4],i[5],i[6]).length(),a=wn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],At.copy(this);const l=1/s,u=1/o,f=1/a;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=u,At.elements[5]*=u,At.elements[6]*=u,At.elements[8]*=f,At.elements[9]*=f,At.elements[10]*=f,t.setFromRotationMatrix(At),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),f=(t+e)*c,d=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wn=new B,At=new Je,Gl=new B(0,0,0),kl=new B(1,1,1),Xt=new B,xi=new B,ht=new B,Is=new Je,Fs=new ri;class ai{constructor(e=0,t=0,n=0,i=ai.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Is.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Is,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fs.setFromEuler(this),this.setFromQuaternion(Fs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ai.DefaultOrder="XYZ";ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ua{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hl=0;const Ns=new B,An=new ri,Ot=new Je,vi=new B,Qn=new B,Vl=new B,Wl=new ri,Os=new B(1,0,0),Us=new B(0,1,0),zs=new B(0,0,1),Xl={type:"added"},Bs={type:"removed"};class ot extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new B,t=new ai,n=new ri,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new pt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(Os,e)}rotateY(e){return this.rotateOnAxis(Us,e)}rotateZ(e){return this.rotateOnAxis(zs,e)}translateOnAxis(e,t){return Ns.copy(e).applyQuaternion(this.quaternion),this.position.add(Ns.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Os,e)}translateY(e){return this.translateOnAxis(Us,e)}translateZ(e){return this.translateOnAxis(zs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ot.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vi.copy(e):vi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ot.lookAt(Qn,vi,this.up):Ot.lookAt(vi,Qn,this.up),this.quaternion.setFromRotationMatrix(Ot),i&&(Ot.extractRotation(i.matrixWorld),An.setFromRotationMatrix(Ot),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ot.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ot.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ot),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,Vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DefaultUp=new B(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const Et=new B,Ut=new B,dr=new B,zt=new B,En=new B,Tn=new B,Gs=new B,fr=new B,pr=new B,mr=new B;class Bt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Et.subVectors(e,t),i.cross(Et);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Et.subVectors(i,t),Ut.subVectors(n,t),dr.subVectors(e,t);const o=Et.dot(Et),a=Et.dot(Ut),c=Et.dot(dr),l=Ut.dot(Ut),u=Ut.dot(dr),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zt),zt.x>=0&&zt.y>=0&&zt.x+zt.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,zt),c.set(0,0),c.addScaledVector(s,zt.x),c.addScaledVector(o,zt.y),c.addScaledVector(a,zt.z),c}static isFrontFacing(e,t,n,i){return Et.subVectors(n,t),Ut.subVectors(e,t),Et.cross(Ut).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Et.subVectors(this.c,this.b),Ut.subVectors(this.a,this.b),Et.cross(Ut).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Bt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;En.subVectors(i,n),Tn.subVectors(s,n),fr.subVectors(e,n);const c=En.dot(fr),l=Tn.dot(fr);if(c<=0&&l<=0)return t.copy(n);pr.subVectors(e,i);const u=En.dot(pr),f=Tn.dot(pr);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(En,o);mr.subVectors(e,s);const m=En.dot(mr),_=Tn.dot(mr);if(_>=0&&m<=_)return t.copy(s);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Tn,a);const h=u*_-m*f;if(h<=0&&f-u>=0&&m-_>=0)return Gs.subVectors(s,i),a=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(Gs,a);const x=1/(h+p+d);return o=p*x,a=d*x,t.copy(n).addScaledVector(En,o).addScaledVector(Tn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jl=0;class oi extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Un,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Un&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class za extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ke=new B,Mi=new Fe;class yt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Cs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix3(e),this.setXY(t,Mi.x,Mi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyMatrix3(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyMatrix4(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyNormalMatrix(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.transformDirection(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ba extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ga extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mn extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ql=0;const xt=new Je,gr=new ot,Cn=new B,dt=new si,Jn=new si,Qe=new B;class kt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pa(e)?Ga:Ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,n){return xt.makeTranslation(e,t,n),this.applyMatrix4(xt),this}scale(e,t,n){return xt.makeScale(e,t,n),this.applyMatrix4(xt),this}lookAt(e){return gr.lookAt(e),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];dt.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,dt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,dt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(dt.min),this.boundingBox.expandByPoint(dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(dt.min,Jn.min),dt.expandByPoint(Qe),Qe.addVectors(dt.max,Jn.max),dt.expandByPoint(Qe)):(dt.expandByPoint(Jn.min),dt.expandByPoint(Jn.max))}dt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qe.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qe.fromBufferAttribute(a,l),c&&(Cn.fromBufferAttribute(e,l),Qe.add(Cn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<a;P++)l[P]=new B,u[P]=new B;const f=new B,d=new B,m=new B,_=new Fe,p=new Fe,h=new Fe,x=new B,A=new B;function b(P,Y,te){f.fromArray(i,P*3),d.fromArray(i,Y*3),m.fromArray(i,te*3),_.fromArray(o,P*2),p.fromArray(o,Y*2),h.fromArray(o,te*2),d.sub(f),m.sub(f),p.sub(_),h.sub(_);const F=1/(p.x*h.y-h.x*p.y);!isFinite(F)||(x.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(F),A.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(F),l[P].add(x),l[Y].add(x),l[te].add(x),u[P].add(A),u[Y].add(A),u[te].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let P=0,Y=S.length;P<Y;++P){const te=S[P],F=te.start,I=te.count;for(let k=F,Q=F+I;k<Q;k+=3)b(n[k+0],n[k+1],n[k+2])}const w=new B,L=new B,z=new B,g=new B;function E(P){z.fromArray(s,P*3),g.copy(z);const Y=l[P];w.copy(Y),w.sub(z.multiplyScalar(z.dot(Y))).normalize(),L.crossVectors(g,Y);const F=L.dot(u[P])<0?-1:1;c[P*4]=w.x,c[P*4+1]=w.y,c[P*4+2]=w.z,c[P*4+3]=F}for(let P=0,Y=S.length;P<Y;++P){const te=S[P],F=te.start,I=te.count;for(let k=F,Q=F+I;k<Q;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,c=new B,l=new B,u=new B,f=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,h),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let m=0,_=0;for(let p=0,h=c.length;p<h;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let x=0;x<u;x++)d[_++]=l[m++]}return new yt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ks=new Je,Ln=new Oa,_r=new Hi,jt=new B,qt=new B,Yt=new B,xr=new B,vr=new B,Mr=new B,Si=new B,yi=new B,bi=new B,wi=new Fe,Ai=new Fe,Ei=new Fe,Sr=new B,Ti=new B;class Jt extends ot{constructor(e=new kt,t=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),e.ray.intersectsSphere(_r)===!1)||(ks.copy(s).invert(),Ln.copy(e.ray).applyMatrix4(ks),n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const x=m[p],A=i[x.materialIndex],b=Math.max(x.start,_.start),S=Math.min(a.count,Math.min(x.start+x.count,_.start+_.count));for(let w=b,L=S;w<L;w+=3){const z=a.getX(w),g=a.getX(w+1),E=a.getX(w+2);o=Ci(this,A,e,Ln,c,l,u,f,d,z,g,E),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let x=p,A=h;x<A;x+=3){const b=a.getX(x),S=a.getX(x+1),w=a.getX(x+2);o=Ci(this,i,e,Ln,c,l,u,f,d,b,S,w),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const x=m[p],A=i[x.materialIndex],b=Math.max(x.start,_.start),S=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let w=b,L=S;w<L;w+=3){const z=w,g=w+1,E=w+2;o=Ci(this,A,e,Ln,c,l,u,f,d,z,g,E),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(c.count,_.start+_.count);for(let x=p,A=h;x<A;x+=3){const b=x,S=x+1,w=x+2;o=Ci(this,i,e,Ln,c,l,u,f,d,b,S,w),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Yl(r,e,t,n,i,s,o,a){let c;if(e.side===St?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==Qt,a),c===null)return null;Ti.copy(a),Ti.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ti);return l<t.near||l>t.far?null:{distance:l,point:Ti.clone(),object:r}}function Ci(r,e,t,n,i,s,o,a,c,l,u,f){jt.fromBufferAttribute(i,l),qt.fromBufferAttribute(i,u),Yt.fromBufferAttribute(i,f);const d=r.morphTargetInfluences;if(s&&d){Si.set(0,0,0),yi.set(0,0,0),bi.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=d[_],x=s[_];h!==0&&(xr.fromBufferAttribute(x,l),vr.fromBufferAttribute(x,u),Mr.fromBufferAttribute(x,f),o?(Si.addScaledVector(xr,h),yi.addScaledVector(vr,h),bi.addScaledVector(Mr,h)):(Si.addScaledVector(xr.sub(jt),h),yi.addScaledVector(vr.sub(qt),h),bi.addScaledVector(Mr.sub(Yt),h)))}jt.add(Si),qt.add(yi),Yt.add(bi)}r.isSkinnedMesh&&(r.boneTransform(l,jt),r.boneTransform(u,qt),r.boneTransform(f,Yt));const m=Yl(r,e,t,n,jt,qt,Yt,Sr);if(m){a&&(wi.fromBufferAttribute(a,l),Ai.fromBufferAttribute(a,u),Ei.fromBufferAttribute(a,f),m.uv=Bt.getUV(Sr,jt,qt,Yt,wi,Ai,Ei,new Fe)),c&&(wi.fromBufferAttribute(c,l),Ai.fromBufferAttribute(c,u),Ei.fromBufferAttribute(c,f),m.uv2=Bt.getUV(Sr,jt,qt,Yt,wi,Ai,Ei,new Fe));const _={a:l,b:u,c:f,normal:new B,materialIndex:0};Bt.getNormal(jt,qt,Yt,_.normal),m.face=_}return m}class li extends kt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(f,2));function _(p,h,x,A,b,S,w,L,z,g,E){const P=S/z,Y=w/g,te=S/2,F=w/2,I=L/2,k=z+1,Q=g+1;let J=0,j=0;const C=new B;for(let N=0;N<Q;N++){const O=N*Y-F;for(let U=0;U<k;U++){const $=U*P-te;C[p]=$*A,C[h]=O*b,C[x]=I,l.push(C.x,C.y,C.z),C[p]=0,C[h]=0,C[x]=L>0?1:-1,u.push(C.x,C.y,C.z),f.push(U/z),f.push(1-N/g),J+=1}}for(let N=0;N<g;N++)for(let O=0;O<z;O++){const U=d+O+k*N,$=d+O+k*(N+1),Z=d+(O+1)+k*(N+1),ne=d+(O+1)+k*N;c.push(U,$,ne),c.push($,Z,ne),j+=6}a.addGroup(m,j,E),m+=j,d+=J}}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function st(r){const e={};for(let t=0;t<r.length;t++){const n=Vn(r[t]);for(const i in n)e[i]=n[i]}return e}function Ql(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ka(r){return r.getRenderTarget()===null&&r.outputEncoding===ze?Lt:ni}const Jl={clone:Vn,merge:st};var Zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=Ql(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ha extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends Ha{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dn=-90,Pn=1;class $l extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Mt(Dn,Pn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Mt(Dn,Pn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Mt(Dn,Pn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Mt(Dn,Pn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Mt(Dn,Pn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Mt(Dn,Pn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Gt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Va extends mt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Gn,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new li(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:Zt});s.uniforms.tEquirect.value=t;const o=new Jt(i,s),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=vt),new $l(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const yr=new B,tc=new B,nc=new pt;class on{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yr.subVectors(n,t).cross(tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nc.getNormalMatrix(e),i=this.coplanarPoint(yr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Hi,Li=new B;class Wa{constructor(e=new on,t=new on,n=new on,i=new on,s=new on,o=new on){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],m=n[9],_=n[10],p=n[11],h=n[12],x=n[13],A=n[14],b=n[15];return t[0].setComponents(a-i,f-c,p-d,b-h).normalize(),t[1].setComponents(a+i,f+c,p+d,b+h).normalize(),t[2].setComponents(a+s,f+l,p+m,b+x).normalize(),t[3].setComponents(a-s,f-l,p-m,b-x).normalize(),t[4].setComponents(a-o,f-u,p-_,b-A).normalize(),t[5].setComponents(a+o,f+u,p+_,b+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Li.x=i.normal.x>0?e.max.x:e.min.x,Li.y=i.normal.y>0?e.max.y:e.min.y,Li.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Li)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xa(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ic(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,d),l.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,m=u.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Vr extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,d=t/c,m=[],_=[],p=[],h=[];for(let x=0;x<u;x++){const A=x*d-o;for(let b=0;b<l;b++){const S=b*f-s;_.push(S,-A,0),p.push(0,0,1),h.push(b/a),h.push(1-x/c)}}for(let x=0;x<c;x++)for(let A=0;A<a;A++){const b=A+l*x,S=A+l*(x+1),w=A+1+l*(x+1),L=A+1+l*x;m.push(b,S,L),m.push(S,w,L)}this.setIndex(m),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(p,3)),this.setAttribute("uv",new mn(h,2))}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ac=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uc="vec3 transformed = vec3( position );",hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,fc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ac=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ic=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,$c=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,zu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Yu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ju=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ku=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$u=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,th=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ih=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ch=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ph=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_h=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Th=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:rc,alphamap_pars_fragment:sc,alphatest_fragment:ac,alphatest_pars_fragment:oc,aomap_fragment:lc,aomap_pars_fragment:cc,begin_vertex:uc,beginnormal_vertex:hc,bsdfs:dc,iridescence_fragment:fc,bumpmap_pars_fragment:pc,clipping_planes_fragment:mc,clipping_planes_pars_fragment:gc,clipping_planes_pars_vertex:_c,clipping_planes_vertex:xc,color_fragment:vc,color_pars_fragment:Mc,color_pars_vertex:Sc,color_vertex:yc,common:bc,cube_uv_reflection_fragment:wc,defaultnormal_vertex:Ac,displacementmap_pars_vertex:Ec,displacementmap_vertex:Tc,emissivemap_fragment:Cc,emissivemap_pars_fragment:Lc,encodings_fragment:Dc,encodings_pars_fragment:Pc,envmap_fragment:Rc,envmap_common_pars_fragment:Ic,envmap_pars_fragment:Fc,envmap_pars_vertex:Nc,envmap_physical_pars_fragment:qc,envmap_vertex:Oc,fog_vertex:Uc,fog_pars_vertex:zc,fog_fragment:Bc,fog_pars_fragment:Gc,gradientmap_pars_fragment:kc,lightmap_fragment:Hc,lightmap_pars_fragment:Vc,lights_lambert_fragment:Wc,lights_lambert_pars_fragment:Xc,lights_pars_begin:jc,lights_toon_fragment:Yc,lights_toon_pars_fragment:Qc,lights_phong_fragment:Jc,lights_phong_pars_fragment:Zc,lights_physical_fragment:Kc,lights_physical_pars_fragment:$c,lights_fragment_begin:eu,lights_fragment_maps:tu,lights_fragment_end:nu,logdepthbuf_fragment:iu,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:su,logdepthbuf_vertex:au,map_fragment:ou,map_pars_fragment:lu,map_particle_fragment:cu,map_particle_pars_fragment:uu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:du,morphcolor_vertex:fu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:gu,normal_fragment_begin:_u,normal_fragment_maps:xu,normal_pars_fragment:vu,normal_pars_vertex:Mu,normal_vertex:Su,normalmap_pars_fragment:yu,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:Au,iridescence_pars_fragment:Eu,output_fragment:Tu,packing:Cu,premultiplied_alpha_fragment:Lu,project_vertex:Du,dithering_fragment:Pu,dithering_pars_fragment:Ru,roughnessmap_fragment:Iu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Ou,shadowmap_vertex:Uu,shadowmask_pars_fragment:zu,skinbase_vertex:Bu,skinning_pars_vertex:Gu,skinning_vertex:ku,skinnormal_vertex:Hu,specularmap_fragment:Vu,specularmap_pars_fragment:Wu,tonemapping_fragment:Xu,tonemapping_pars_fragment:ju,transmission_fragment:qu,transmission_pars_fragment:Yu,uv_pars_fragment:Qu,uv_pars_vertex:Ju,uv_vertex:Zu,uv2_pars_fragment:Ku,uv2_pars_vertex:$u,uv2_vertex:eh,worldpos_vertex:th,background_vert:nh,background_frag:ih,backgroundCube_vert:rh,backgroundCube_frag:sh,cube_vert:ah,cube_frag:oh,depth_vert:lh,depth_frag:ch,distanceRGBA_vert:uh,distanceRGBA_frag:hh,equirect_vert:dh,equirect_frag:fh,linedashed_vert:ph,linedashed_frag:mh,meshbasic_vert:gh,meshbasic_frag:_h,meshlambert_vert:xh,meshlambert_frag:vh,meshmatcap_vert:Mh,meshmatcap_frag:Sh,meshnormal_vert:yh,meshnormal_frag:bh,meshphong_vert:wh,meshphong_frag:Ah,meshphysical_vert:Eh,meshphysical_frag:Th,meshtoon_vert:Ch,meshtoon_frag:Lh,points_vert:Dh,points_frag:Ph,shadow_vert:Rh,shadow_frag:Ih,sprite_vert:Fh,sprite_frag:Nh},re={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}}},Dt={basic:{uniforms:st([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:st([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:st([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:st([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:st([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:st([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:st([re.points,re.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:st([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:st([re.common,re.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:st([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:st([re.sprite,re.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:st([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:st([re.lights,re.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Dt.physical={uniforms:st([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Di={r:0,b:0,g:0};function Oh(r,e,t,n,i,s,o){const a=new Ne(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function _(h,x){let A=!1,b=x.isScene===!0?x.background:null;b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b));const S=r.xr,w=S.getSession&&S.getSession();w&&w.environmentBlendMode==="additive"&&(b=null),b===null?p(a,c):b&&b.isColor&&(p(b,1),A=!0),(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Gi)?(u===void 0&&(u=new Jt(new li(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Vn(Dt.backgroundCube.uniforms),vertexShader:Dt.backgroundCube.vertexShader,fragmentShader:Dt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,z,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,(f!==b||d!==b.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,m=r.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Jt(new Vr(2,2),new Kt({name:"BackgroundMaterial",uniforms:Vn(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,m=r.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function p(h,x){h.getRGB(Di,ka(r)),n.buffers.color.setClear(Di.r,Di.g,Di.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(h,x=1){a.set(h),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,p(a,c)},render:_}}function Uh(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=h(null);let l=c,u=!1;function f(I,k,Q,J,j){let C=!1;if(o){const N=p(J,Q,k);l!==N&&(l=N,m(l.object)),C=x(I,J,Q,j),C&&A(I,J,Q,j)}else{const N=k.wireframe===!0;(l.geometry!==J.id||l.program!==Q.id||l.wireframe!==N)&&(l.geometry=J.id,l.program=Q.id,l.wireframe=N,C=!0)}j!==null&&t.update(j,34963),(C||u)&&(u=!1,g(I,k,Q,J),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,k,Q){const J=Q.wireframe===!0;let j=a[I.id];j===void 0&&(j={},a[I.id]=j);let C=j[k.id];C===void 0&&(C={},j[k.id]=C);let N=C[J];return N===void 0&&(N=h(d()),C[J]=N),N}function h(I){const k=[],Q=[],J=[];for(let j=0;j<i;j++)k[j]=0,Q[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:J,object:I,attributes:{},index:null}}function x(I,k,Q,J){const j=l.attributes,C=k.attributes;let N=0;const O=Q.getAttributes();for(const U in O)if(O[U].location>=0){const Z=j[U];let ne=C[U];if(ne===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;N++}return l.attributesNum!==N||l.index!==J}function A(I,k,Q,J){const j={},C=k.attributes;let N=0;const O=Q.getAttributes();for(const U in O)if(O[U].location>=0){let Z=C[U];Z===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),j[U]=ne,N++}l.attributes=j,l.attributesNum=N,l.index=J}function b(){const I=l.newAttributes;for(let k=0,Q=I.length;k<Q;k++)I[k]=0}function S(I){w(I,0)}function w(I,k){const Q=l.newAttributes,J=l.enabledAttributes,j=l.attributeDivisors;Q[I]=1,J[I]===0&&(r.enableVertexAttribArray(I),J[I]=1),j[I]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),j[I]=k)}function L(){const I=l.newAttributes,k=l.enabledAttributes;for(let Q=0,J=k.length;Q<J;Q++)k[Q]!==I[Q]&&(r.disableVertexAttribArray(Q),k[Q]=0)}function z(I,k,Q,J,j,C){n.isWebGL2===!0&&(Q===5124||Q===5125)?r.vertexAttribIPointer(I,k,Q,j,C):r.vertexAttribPointer(I,k,Q,J,j,C)}function g(I,k,Q,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const j=J.attributes,C=Q.getAttributes(),N=k.defaultAttributeValues;for(const O in C){const U=C[O];if(U.location>=0){let $=j[O];if($===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const Z=$.normalized,ne=$.itemSize,G=t.get($);if(G===void 0)continue;const we=G.buffer,le=G.type,xe=G.bytesPerElement;if($.isInterleavedBufferAttribute){const ce=$.data,Re=ce.stride,ye=$.offset;if(ce.isInstancedInterleavedBuffer){for(let _e=0;_e<U.locationSize;_e++)w(U.location+_e,ce.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<U.locationSize;_e++)S(U.location+_e);r.bindBuffer(34962,we);for(let _e=0;_e<U.locationSize;_e++)z(U.location+_e,ne/U.locationSize,le,Z,Re*xe,(ye+ne/U.locationSize*_e)*xe)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<U.locationSize;ce++)w(U.location+ce,$.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<U.locationSize;ce++)S(U.location+ce);r.bindBuffer(34962,we);for(let ce=0;ce<U.locationSize;ce++)z(U.location+ce,ne/U.locationSize,le,Z,ne*xe,ne/U.locationSize*ce*xe)}}else if(N!==void 0){const Z=N[O];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(U.location,Z);break;case 3:r.vertexAttrib3fv(U.location,Z);break;case 4:r.vertexAttrib4fv(U.location,Z);break;default:r.vertexAttrib1fv(U.location,Z)}}}}L()}function E(){te();for(const I in a){const k=a[I];for(const Q in k){const J=k[Q];for(const j in J)_(J[j].object),delete J[j];delete k[Q]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const Q in k){const J=k[Q];for(const j in J)_(J[j].object),delete J[j];delete k[Q]}delete a[I.id]}function Y(I){for(const k in a){const Q=a[k];if(Q[I.id]===void 0)continue;const J=Q[I.id];for(const j in J)_(J[j].object),delete J[j];delete Q[I.id]}}function te(){F(),u=!0,l!==c&&(l=c,m(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:te,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:Y,initAttributes:b,enableAttribute:S,disableUnusedAttributes:L}}function zh(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Bh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),x=r.getParameter(36348),A=r.getParameter(36349),b=d>0,S=o||e.has("OES_texture_float"),w=b&&S,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:L}}function Gh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new on,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,d,m){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,x=r.get(f);if(!i||_===null||_.length===0||s&&!h)s?u(null):l();else{const A=s?0:n,b=A*4;let S=x.clippingState||null;c.value=S,S=u(_,d,b,m);for(let w=0;w!==b;++w)S[w]=t[w];x.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=c.value,_!==!0||h===null){const x=m+p*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(h===null||h.length<x)&&(h=new Float32Array(x));for(let b=0,S=m;b!==p;++b,S+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(h,S),h[S+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function kh(r){let e=new WeakMap;function t(o,a){return a===Cr?o.mapping=Gn:a===Lr&&(o.mapping=kn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cr||a===Lr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ec(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Hh extends Ha{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const On=4,Hs=[.125,.215,.35,.446,.526,.582],cn=20,br=new Hh,Vs=new Ne;let wr=null;const ln=(1+Math.sqrt(5))/2,In=1/ln,Ws=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ln,In),new B(0,ln,-In),new B(In,0,ln),new B(-In,0,ln),new B(ln,In,0),new B(-ln,In,0)];class Xs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wr),e.scissorTest=!1,Pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gn||e.mapping===kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:ti,format:Ct,encoding:_n,depthBuffer:!1},i=js(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=js(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vh(s)),this._blurMaterial=Wh(s,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,i){const a=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vs),u.toneMapping=Gt,u.autoClear=!1;const m=new za({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),_=new Jt(new li,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Vs),p=!0);for(let x=0;x<6;x++){const A=x%3;A===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):A===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const b=this._cubeSize;Pi(i,A*b,x>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gn||e.mapping===kn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ys()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qs());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Pi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ws[(i-1)%Ws.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*cn-1),p=s/_,h=isFinite(s)?1+Math.floor(u*p):cn;h>cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${cn}`);const x=[];let A=0;for(let z=0;z<cn;++z){const g=z/p,E=Math.exp(-g*g/2);x.push(E),z===0?A+=E:z<h&&(A+=2*E)}for(let z=0;z<x.length;z++)x[z]=x[z]/A;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const S=this._sizeLods[i],w=3*S*(i>b-On?i-b+On:0),L=4*(this._cubeSize-S);Pi(t,w,L,3*S,2*S),c.setRenderTarget(t),c.render(f,br)}}function Vh(r){const e=[],t=[],n=[];let i=r;const s=r-On+1+Hs.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-On?c=Hs[o-r+On-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,h=2,x=1,A=new Float32Array(p*_*m),b=new Float32Array(h*_*m),S=new Float32Array(x*_*m);for(let L=0;L<m;L++){const z=L%3*2/3-1,g=L>2?0:-1,E=[z,g,0,z+2/3,g,0,z+2/3,g+1,0,z,g,0,z+2/3,g+1,0,z,g+1,0];A.set(E,p*_*L),b.set(d,h*_*L);const P=[L,L,L,L,L,L];S.set(P,x*_*L)}const w=new kt;w.setAttribute("position",new yt(A,p)),w.setAttribute("uv",new yt(b,h)),w.setAttribute("faceIndex",new yt(S,x)),e.push(w),i>On&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function js(r,e,t){const n=new xn(r,e,t);return n.texture.mapping=Gi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wh(r,e,t){const n=new Float32Array(cn),i=new B(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function qs(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Ys(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cr||c===Lr,u=c===Gn||c===kn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Xs(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Xs(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qh(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let h=0,x=p.length;h<x;h++)e.update(p[h],34962)}}function l(f){const d=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const A=m.array;p=m.version;for(let b=0,S=A.length;b<S;b+=3){const w=A[b+0],L=A[b+1],z=A[b+2];d.push(w,L,L,z,z,w)}}else{const A=_.array;p=_.version;for(let b=0,S=A.length/3-1;b<S;b+=3){const w=b+0,L=b+1,z=b+2;d.push(w,L,L,z,z,w)}}const h=new(Pa(d)?Ga:Ba)(d,1);h.version=p;const x=s.get(f);x&&e.remove(x),s.set(f,h)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Yh(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function f(d,m,_){if(_===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,d*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Qh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jh(r,e){return r[0]-e[0]}function Zh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Kh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0;let h=s.get(u);if(h===void 0||h.count!==p){let k=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",k)};h!==void 0&&h.texture.dispose();const b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],z=u.morphAttributes.normal||[],g=u.morphAttributes.color||[];let E=0;b===!0&&(E=1),S===!0&&(E=2),w===!0&&(E=3);let P=u.attributes.position.count*E,Y=1;P>e.maxTextureSize&&(Y=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const te=new Float32Array(P*Y*4*p),F=new Na(te,P,Y,p);F.type=hn,F.needsUpdate=!0;const I=E*4;for(let Q=0;Q<p;Q++){const J=L[Q],j=z[Q],C=g[Q],N=P*Y*4*Q;for(let O=0;O<J.count;O++){const U=O*I;b===!0&&(o.fromBufferAttribute(J,O),te[N+U+0]=o.x,te[N+U+1]=o.y,te[N+U+2]=o.z,te[N+U+3]=0),S===!0&&(o.fromBufferAttribute(j,O),te[N+U+4]=o.x,te[N+U+5]=o.y,te[N+U+6]=o.z,te[N+U+7]=0),w===!0&&(o.fromBufferAttribute(C,O),te[N+U+8]=o.x,te[N+U+9]=o.y,te[N+U+10]=o.z,te[N+U+11]=C.itemSize===4?o.w:1)}}h={count:p,texture:F,size:new Fe(P,Y)},s.set(u,h),u.addEventListener("dispose",k)}let x=0;for(let b=0;b<m.length;b++)x+=m[b];const A=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",A),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const _=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==_){p=[];for(let S=0;S<_;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<_;S++){const w=p[S];w[0]=S,w[1]=m[S]}p.sort(Zh);for(let S=0;S<8;S++)S<_&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Jh);const h=u.morphAttributes.position,x=u.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const w=a[S],L=w[0],z=w[1];L!==Number.MAX_SAFE_INTEGER&&z?(h&&u.getAttribute("morphTarget"+S)!==h[L]&&u.setAttribute("morphTarget"+S,h[L]),x&&u.getAttribute("morphNormal"+S)!==x[L]&&u.setAttribute("morphNormal"+S,x[L]),i[S]=z,A+=z):(h&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),x&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const b=u.morphTargetsRelative?1:1-A;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function $h(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ja=new mt,qa=new Na,Ya=new zl,Qa=new Va,Qs=[],Js=[],Zs=new Float32Array(16),Ks=new Float32Array(9),$s=new Float32Array(4);function Xn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qs[i];if(s===void 0&&(s=new Float32Array(i),Qs[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function We(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xe(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vi(r,e){let t=Js[e];t===void 0&&(t=new Int32Array(e),Js[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ed(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function td(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2fv(this.addr,e),Xe(t,e)}}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(We(t,e))return;r.uniform3fv(this.addr,e),Xe(t,e)}}function id(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4fv(this.addr,e),Xe(t,e)}}function rd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;$s.set(n),r.uniformMatrix2fv(this.addr,!1,$s),Xe(t,n)}}function sd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;Ks.set(n),r.uniformMatrix3fv(this.addr,!1,Ks),Xe(t,n)}}function ad(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;Zs.set(n),r.uniformMatrix4fv(this.addr,!1,Zs),Xe(t,n)}}function od(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2iv(this.addr,e),Xe(t,e)}}function cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3iv(this.addr,e),Xe(t,e)}}function ud(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4iv(this.addr,e),Xe(t,e)}}function hd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2uiv(this.addr,e),Xe(t,e)}}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3uiv(this.addr,e),Xe(t,e)}}function pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4uiv(this.addr,e),Xe(t,e)}}function md(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ja,i)}function gd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ya,i)}function _d(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qa,i)}function xd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qa,i)}function vd(r){switch(r){case 5126:return ed;case 35664:return td;case 35665:return nd;case 35666:return id;case 35674:return rd;case 35675:return sd;case 35676:return ad;case 5124:case 35670:return od;case 35667:case 35671:return ld;case 35668:case 35672:return cd;case 35669:case 35673:return ud;case 5125:return hd;case 36294:return dd;case 36295:return fd;case 36296:return pd;case 35678:case 36198:case 36298:case 36306:case 35682:return md;case 35679:case 36299:case 36307:return gd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return xd}}function Md(r,e){r.uniform1fv(this.addr,e)}function Sd(r,e){const t=Xn(e,this.size,2);r.uniform2fv(this.addr,t)}function yd(r,e){const t=Xn(e,this.size,3);r.uniform3fv(this.addr,t)}function bd(r,e){const t=Xn(e,this.size,4);r.uniform4fv(this.addr,t)}function wd(r,e){const t=Xn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ad(r,e){const t=Xn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ed(r,e){const t=Xn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Td(r,e){r.uniform1iv(this.addr,e)}function Cd(r,e){r.uniform2iv(this.addr,e)}function Ld(r,e){r.uniform3iv(this.addr,e)}function Dd(r,e){r.uniform4iv(this.addr,e)}function Pd(r,e){r.uniform1uiv(this.addr,e)}function Rd(r,e){r.uniform2uiv(this.addr,e)}function Id(r,e){r.uniform3uiv(this.addr,e)}function Fd(r,e){r.uniform4uiv(this.addr,e)}function Nd(r,e,t){const n=this.cache,i=e.length,s=Vi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ja,s[o])}function Od(r,e,t){const n=this.cache,i=e.length,s=Vi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ya,s[o])}function Ud(r,e,t){const n=this.cache,i=e.length,s=Vi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qa,s[o])}function zd(r,e,t){const n=this.cache,i=e.length,s=Vi(t,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qa,s[o])}function Bd(r){switch(r){case 5126:return Md;case 35664:return Sd;case 35665:return yd;case 35666:return bd;case 35674:return wd;case 35675:return Ad;case 35676:return Ed;case 5124:case 35670:return Td;case 35667:case 35671:return Cd;case 35668:case 35672:return Ld;case 35669:case 35673:return Dd;case 5125:return Pd;case 36294:return Rd;case 36295:return Id;case 36296:return Fd;case 35678:case 36198:case 36298:case 36306:case 35682:return Nd;case 35679:case 36299:case 36307:return Od;case 35680:case 36300:case 36308:case 36293:return Ud;case 36289:case 36303:case 36311:case 36292:return zd}}class Gd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vd(t.type)}}class kd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bd(t.type)}}class Hd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function ea(r,e){r.seq.push(e),r.map[e.id]=e}function Vd(r,e,t){const n=r.name,i=n.length;for(Ar.lastIndex=0;;){const s=Ar.exec(n),o=Ar.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ea(t,l===void 0?new Gd(a,r,e):new kd(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Hd(a),ea(t,f)),t=f}}}class Ui{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Vd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ta(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Wd=0;function Xd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jd(r){switch(r){case _n:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function na(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Xd(r.getShaderSource(e),o)}else return i}function qd(r,e){const t=jd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yd(r,e){let t;switch(e){case ul:t="Linear";break;case hl:t="Reinhard";break;case dl:t="OptimizedCineon";break;case fl:t="ACESFilmic";break;case pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($n).join(`
`)}function Jd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function $n(r){return r!==""}function ia(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ra(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(r){return r.replace(Kd,$d)}function $d(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fr(t)}const ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(r){return r.replace(ef,tf)}function tf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function aa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Aa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function rf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gn:case kn:e="ENVMAP_TYPE_CUBE";break;case Gi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case kn:e="ENVMAP_MODE_REFRACTION";break}return e}function af(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ca:e="ENVMAP_BLENDING_MULTIPLY";break;case ll:e="ENVMAP_BLENDING_MIX";break;case cl:e="ENVMAP_BLENDING_ADD";break}return e}function of(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=nf(t),l=rf(t),u=sf(t),f=af(t),d=of(t),m=t.isWebGL2?"":Qd(t),_=Jd(s),p=i.createProgram();let h,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter($n).join(`
`),h.length>0&&(h+=`
`),x=[m,_].filter($n).join(`
`),x.length>0&&(x+=`
`)):(h=[aa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),x=[m,aa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gt?"#define TONE_MAPPING":"",t.toneMapping!==Gt?Se.tonemapping_pars_fragment:"",t.toneMapping!==Gt?Yd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,qd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($n).join(`
`)),o=Fr(o),o=ia(o,t),o=ra(o,t),a=Fr(a),a=ia(a,t),a=ra(a,t),o=sa(o),a=sa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["#define varying in",t.glslVersion===Ls?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ls?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=A+h+o,S=A+x+a,w=ta(i,35633,b),L=ta(i,35632,S);if(i.attachShader(p,w),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(w).trim(),Y=i.getShaderInfoLog(L).trim();let te=!0,F=!0;if(i.getProgramParameter(p,35714)===!1){te=!1;const I=na(i,w,"vertex"),k=na(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+I+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||Y==="")&&(F=!1);F&&(this.diagnostics={runnable:te,programLog:E,vertexShader:{log:P,prefix:h},fragmentShader:{log:Y,prefix:x}})}i.deleteShader(w),i.deleteShader(L);let z;this.getUniforms=function(){return z===void 0&&(z=new Ui(i,p)),z};let g;return this.getAttributes=function(){return g===void 0&&(g=Zd(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Wd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let cf=0;class uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hf(e),t.set(e,n)),n}}class hf{constructor(e){this.id=cf++,this.code=e,this.usedTimes=0}}function df(r,e,t,n,i,s,o){const a=new Ua,c=new uf,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,E,P,Y,te){const F=Y.fog,I=te.geometry,k=g.isMeshStandardMaterial?Y.environment:null,Q=(g.isMeshStandardMaterial?t:e).get(g.envMap||k),J=!!Q&&Q.mapping===Gi?Q.image.height:null,j=_[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const C=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,N=C!==void 0?C.length:0;let O=0;I.morphAttributes.position!==void 0&&(O=1),I.morphAttributes.normal!==void 0&&(O=2),I.morphAttributes.color!==void 0&&(O=3);let U,$,Z,ne;if(j){const Re=Dt[j];U=Re.vertexShader,$=Re.fragmentShader}else U=g.vertexShader,$=g.fragmentShader,c.update(g),Z=c.getVertexShaderID(g),ne=c.getFragmentShaderID(g);const G=r.getRenderTarget(),we=g.alphaTest>0,le=g.clearcoat>0,xe=g.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:g.type,vertexShader:U,fragmentShader:$,defines:g.defines,customVertexShaderID:Z,customFragmentShaderID:ne,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:_n,map:!!g.map,matcap:!!g.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:J,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Fl,tangentSpaceNormalMap:g.normalMapType===Il,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===ze,clearcoat:le,clearcoatMap:le&&!!g.clearcoatMap,clearcoatRoughnessMap:le&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:le&&!!g.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!g.iridescenceMap,iridescenceThicknessMap:xe&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===Un,alphaMap:!!g.alphaMap,alphaTest:we,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!I.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!F,useFog:g.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:O,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:Gt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Qt,flipSided:g.side===St,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)E.push(P),E.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(x(E,g),A(E,g),E.push(r.outputEncoding)),E.push(g.customProgramCacheKey),E.join()}function x(g,E){g.push(E.precision),g.push(E.outputEncoding),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.combine),g.push(E.vertexUvs),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function A(g,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),g.push(a.mask)}function b(g){const E=_[g.type];let P;if(E){const Y=Dt[E];P=Jl.clone(Y.uniforms)}else P=g.uniforms;return P}function S(g,E){let P;for(let Y=0,te=l.length;Y<te;Y++){const F=l[Y];if(F.cacheKey===E){P=F,++P.usedTimes;break}}return P===void 0&&(P=new lf(r,E,g,s),l.push(P)),P}function w(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),g.destroy()}}function L(g){c.remove(g)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:S,releaseProgram:w,releaseShaderCache:L,programs:l,dispose:z}}function ff(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function oa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function la(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,_,p,h){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},r[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=h),e++,x}function a(f,d,m,_,p,h){const x=o(f,d,m,_,p,h);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(f,d,m,_,p,h){const x=o(f,d,m,_,p,h);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(f,d){t.length>1&&t.sort(f||pf),n.length>1&&n.sort(d||oa),i.length>1&&i.sort(d||oa)}function u(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function mf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new la,r.set(n,[o])):i>=s.length?(o=new la,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ne};break;case"SpotLight":t={position:new B,direction:new B,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function _f(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xf=0;function vf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Mf(r,e){const t=new gf,n=_f(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new B);const s=new B,o=new Je,a=new Je;function c(u,f){let d=0,m=0,_=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,h=0,x=0,A=0,b=0,S=0,w=0,L=0,z=0,g=0;u.sort(vf);const E=f!==!0?Math.PI:1;for(let Y=0,te=u.length;Y<te;Y++){const F=u[Y],I=F.color,k=F.intensity,Q=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=I.r*k*E,m+=I.g*k*E,_+=I.b*k*E;else if(F.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],k);else if(F.isDirectionalLight){const j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const C=F.shadow,N=n.get(F);N.shadowBias=C.bias,N.shadowNormalBias=C.normalBias,N.shadowRadius=C.radius,N.shadowMapSize=C.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=j,p++}else if(F.isSpotLight){const j=t.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(I).multiplyScalar(k*E),j.distance=Q,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[x]=j;const C=F.shadow;if(F.map&&(i.spotLightMap[z]=F.map,z++,C.updateMatrices(F),F.castShadow&&g++),i.spotLightMatrix[x]=C.matrix,F.castShadow){const N=n.get(F);N.shadowBias=C.bias,N.shadowNormalBias=C.normalBias,N.shadowRadius=C.radius,N.shadowMapSize=C.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=J,L++}x++}else if(F.isRectAreaLight){const j=t.get(F);j.color.copy(I).multiplyScalar(k),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[A]=j,A++}else if(F.isPointLight){const j=t.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity*E),j.distance=F.distance,j.decay=F.decay,F.castShadow){const C=F.shadow,N=n.get(F);N.shadowBias=C.bias,N.shadowNormalBias=C.normalBias,N.shadowRadius=C.radius,N.shadowMapSize=C.mapSize,N.shadowCameraNear=C.camera.near,N.shadowCameraFar=C.camera.far,i.pointShadow[h]=N,i.pointShadowMap[h]=J,i.pointShadowMatrix[h]=F.shadow.matrix,w++}i.point[h]=j,h++}else if(F.isHemisphereLight){const j=t.get(F);j.skyColor.copy(F.color).multiplyScalar(k*E),j.groundColor.copy(F.groundColor).multiplyScalar(k*E),i.hemi[b]=j,b++}}A>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==p||P.pointLength!==h||P.spotLength!==x||P.rectAreaLength!==A||P.hemiLength!==b||P.numDirectionalShadows!==S||P.numPointShadows!==w||P.numSpotShadows!==L||P.numSpotMaps!==z)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=A,i.point.length=h,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+z-g,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=g,P.directionalLength=p,P.pointLength=h,P.spotLength=x,P.rectAreaLength=A,P.hemiLength=b,P.numDirectionalShadows=S,P.numPointShadows=w,P.numSpotShadows=L,P.numSpotMaps=z,i.version=xf++)}function l(u,f){let d=0,m=0,_=0,p=0,h=0;const x=f.matrixWorldInverse;for(let A=0,b=u.length;A<b;A++){const S=u[A];if(S.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),d++}else if(S.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),_++}else if(S.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),a.identity(),o.copy(S.matrixWorld),o.premultiply(x),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const w=i.hemi[h];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(x),h++}}}return{setup:c,setupView:l,state:i}}function ca(r,e){const t=new Mf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Sf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new ca(r,e),t.set(s,[c])):o>=a.length?(c=new ca(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class yf extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bf extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Af=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ef(r,e,t){let n=new Wa;const i=new Fe,s=new Fe,o=new Ze,a=new yf({depthPacking:Rl}),c=new bf,l={},u=t.maxTextureSize,f={0:St,1:Bn,2:Qt},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:wf,fragmentShader:Af}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new kt;_.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa,this.render=function(S,w,L){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const z=r.getRenderTarget(),g=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Zt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let Y=0,te=S.length;Y<te;Y++){const F=S[Y],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const k=I.getFrameExtents();if(i.multiply(k),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null){const J=this.type!==Kn?{minFilter:at,magFilter:at}:{};I.map=new xn(i.x,i.y,J),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Q=I.getViewportCount();for(let J=0;J<Q;J++){const j=I.getViewport(J);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),P.viewport(o),I.updateMatrices(F,J),n=I.getFrustum(),b(w,L,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===Kn&&x(I,L),I.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(z,g,E)};function x(S,w){const L=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new xn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,L,d,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,L,m,p,null)}function A(S,w,L,z,g,E){let P=null;const Y=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(Y!==void 0?P=Y:P=L.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const te=P.uuid,F=w.uuid;let I=l[te];I===void 0&&(I={},l[te]=I);let k=I[F];k===void 0&&(k=P.clone(),I[F]=k),P=k}return P.visible=w.visible,P.wireframe=w.wireframe,E===Kn?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:f[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=z,P.farDistance=g),P}function b(S,w,L,z,g){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&g===Kn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),te=S.material;if(Array.isArray(te)){const F=Y.groups;for(let I=0,k=F.length;I<k;I++){const Q=F[I],J=te[Q.materialIndex];if(J&&J.visible){const j=A(S,J,z,L.near,L.far,g);r.renderBufferDirect(L,null,Y,j,S,Q)}}}else if(te.visible){const F=A(S,te,z,L.near,L.far,g);r.renderBufferDirect(L,null,Y,F,S,null)}}const P=S.children;for(let Y=0,te=P.length;Y<te;Y++)b(P[Y],w,L,z,g)}}function Tf(r,e,t){const n=t.isWebGL2;function i(){let T=!1;const W=new Ze;let K=null;const oe=new Ze(0,0,0,0);return{setMask:function(he){K!==he&&!T&&(r.colorMask(he,he,he,he),K=he)},setLocked:function(he){T=he},setClear:function(he,Pe,qe,Ke,$t){$t===!0&&(he*=Ke,Pe*=Ke,qe*=Ke),W.set(he,Pe,qe,Ke),oe.equals(W)===!1&&(r.clearColor(he,Pe,qe,Ke),oe.copy(W))},reset:function(){T=!1,K=null,oe.set(-1,0,0,0)}}}function s(){let T=!1,W=null,K=null,oe=null;return{setTest:function(he){he?we(2929):le(2929)},setMask:function(he){W!==he&&!T&&(r.depthMask(he),W=he)},setFunc:function(he){if(K!==he){switch(he){case tl:r.depthFunc(512);break;case nl:r.depthFunc(519);break;case il:r.depthFunc(513);break;case Tr:r.depthFunc(515);break;case rl:r.depthFunc(514);break;case sl:r.depthFunc(518);break;case al:r.depthFunc(516);break;case ol:r.depthFunc(517);break;default:r.depthFunc(515)}K=he}},setLocked:function(he){T=he},setClear:function(he){oe!==he&&(r.clearDepth(he),oe=he)},reset:function(){T=!1,W=null,K=null,oe=null}}}function o(){let T=!1,W=null,K=null,oe=null,he=null,Pe=null,qe=null,Ke=null,$t=null;return{setTest:function(Ue){T||(Ue?we(2960):le(2960))},setMask:function(Ue){W!==Ue&&!T&&(r.stencilMask(Ue),W=Ue)},setFunc:function(Ue,Rt,_t){(K!==Ue||oe!==Rt||he!==_t)&&(r.stencilFunc(Ue,Rt,_t),K=Ue,oe=Rt,he=_t)},setOp:function(Ue,Rt,_t){(Pe!==Ue||qe!==Rt||Ke!==_t)&&(r.stencilOp(Ue,Rt,_t),Pe=Ue,qe=Rt,Ke=_t)},setLocked:function(Ue){T=Ue},setClear:function(Ue){$t!==Ue&&(r.clearStencil(Ue),$t=Ue)},reset:function(){T=!1,W=null,K=null,oe=null,he=null,Pe=null,qe=null,Ke=null,$t=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,p=[],h=null,x=!1,A=null,b=null,S=null,w=null,L=null,z=null,g=null,E=!1,P=null,Y=null,te=null,F=null,I=null;const k=r.getParameter(35661);let Q=!1,J=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),Q=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Q=J>=2);let C=null,N={};const O=r.getParameter(3088),U=r.getParameter(2978),$=new Ze().fromArray(O),Z=new Ze().fromArray(U);function ne(T,W,K){const oe=new Uint8Array(4),he=r.createTexture();r.bindTexture(T,he),r.texParameteri(T,10241,9728),r.texParameteri(T,10240,9728);for(let Pe=0;Pe<K;Pe++)r.texImage2D(W+Pe,0,6408,1,1,0,6408,5121,oe);return he}const G={};G[3553]=ne(3553,3553,1),G[34067]=ne(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),we(2929),c.setFunc(Tr),nt(!1),gt($r),we(2884),et(Zt);function we(T){d[T]!==!0&&(r.enable(T),d[T]=!0)}function le(T){d[T]!==!1&&(r.disable(T),d[T]=!1)}function xe(T,W){return m[T]!==W?(r.bindFramebuffer(T,W),m[T]=W,n&&(T===36009&&(m[36160]=W),T===36160&&(m[36009]=W)),!0):!1}function ce(T,W){let K=p,oe=!1;if(T)if(K=_.get(W),K===void 0&&(K=[],_.set(W,K)),T.isWebGLMultipleRenderTargets){const he=T.texture;if(K.length!==he.length||K[0]!==36064){for(let Pe=0,qe=he.length;Pe<qe;Pe++)K[Pe]=36064+Pe;K.length=he.length,oe=!0}}else K[0]!==36064&&(K[0]=36064,oe=!0);else K[0]!==1029&&(K[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Re(T){return h!==T?(r.useProgram(T),h=T,!0):!1}const ye={[Fn]:32774,[Wo]:32778,[Xo]:32779};if(n)ye[is]=32775,ye[rs]=32776;else{const T=e.get("EXT_blend_minmax");T!==null&&(ye[is]=T.MIN_EXT,ye[rs]=T.MAX_EXT)}const _e={[jo]:0,[qo]:1,[Yo]:768,[Ea]:770,[el]:776,[Ko]:774,[Jo]:772,[Qo]:769,[Ta]:771,[$o]:775,[Zo]:773};function et(T,W,K,oe,he,Pe,qe,Ke){if(T===Zt){x===!0&&(le(3042),x=!1);return}if(x===!1&&(we(3042),x=!0),T!==Vo){if(T!==A||Ke!==E){if((b!==Fn||L!==Fn)&&(r.blendEquation(32774),b=Fn,L=Fn),Ke)switch(T){case Un:r.blendFuncSeparate(1,771,1,771);break;case es:r.blendFunc(1,1);break;case ts:r.blendFuncSeparate(0,769,0,1);break;case ns:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Un:r.blendFuncSeparate(770,771,1,771);break;case es:r.blendFunc(770,1);break;case ts:r.blendFuncSeparate(0,769,0,1);break;case ns:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,w=null,z=null,g=null,A=T,E=Ke}return}he=he||W,Pe=Pe||K,qe=qe||oe,(W!==b||he!==L)&&(r.blendEquationSeparate(ye[W],ye[he]),b=W,L=he),(K!==S||oe!==w||Pe!==z||qe!==g)&&(r.blendFuncSeparate(_e[K],_e[oe],_e[Pe],_e[qe]),S=K,w=oe,z=Pe,g=qe),A=T,E=!1}function tt(T,W){T.side===Qt?le(2884):we(2884);let K=T.side===St;W&&(K=!K),nt(K),T.blending===Un&&T.transparent===!1?et(Zt):et(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),c.setFunc(T.depthFunc),c.setTest(T.depthTest),c.setMask(T.depthWrite),a.setMask(T.colorWrite);const oe=T.stencilWrite;l.setTest(oe),oe&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Ie(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?we(32926):le(32926)}function nt(T){P!==T&&(T?r.frontFace(2304):r.frontFace(2305),P=T)}function gt(T){T!==Go?(we(2884),T!==Y&&(T===$r?r.cullFace(1029):T===ko?r.cullFace(1028):r.cullFace(1032))):le(2884),Y=T}function He(T){T!==te&&(Q&&r.lineWidth(T),te=T)}function Ie(T,W,K){T?(we(32823),(F!==W||I!==K)&&(r.polygonOffset(W,K),F=W,I=K)):le(32823)}function Pt(T){T?we(3089):le(3089)}function bt(T){T===void 0&&(T=33984+k-1),C!==T&&(r.activeTexture(T),C=T)}function y(T,W,K){K===void 0&&(C===null?K=33984+k-1:K=C);let oe=N[K];oe===void 0&&(oe={type:void 0,texture:void 0},N[K]=oe),(oe.type!==T||oe.texture!==W)&&(C!==K&&(r.activeTexture(K),C=K),r.bindTexture(T,W||G[T]),oe.type=T,oe.texture=W)}function v(){const T=N[C];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function me(T){$.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),$.copy(T))}function de(T){Z.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),Z.copy(T))}function Le(T,W){let K=f.get(W);K===void 0&&(K=new WeakMap,f.set(W,K));let oe=K.get(T);oe===void 0&&(oe=r.getUniformBlockIndex(W,T.name),K.set(T,oe))}function Oe(T,W){const oe=f.get(W).get(T);u.get(T)!==oe&&(r.uniformBlockBinding(W,oe,T.__bindingPointIndex),u.set(T,oe))}function je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},C=null,N={},m={},_=new WeakMap,p=[],h=null,x=!1,A=null,b=null,S=null,w=null,L=null,z=null,g=null,E=!1,P=null,Y=null,te=null,F=null,I=null,$.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:we,disable:le,bindFramebuffer:xe,drawBuffers:ce,useProgram:Re,setBlending:et,setMaterial:tt,setFlipSided:nt,setCullFace:gt,setLineWidth:He,setPolygonOffset:Ie,setScissorTest:Pt,activeTexture:bt,bindTexture:y,unbindTexture:v,compressedTexImage2D:V,compressedTexImage3D:ee,texImage2D:ge,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:Oe,texStorage2D:q,texStorage3D:pe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:ae,scissor:me,viewport:de,reset:je}}function Cf(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(y,v){return x?new OffscreenCanvas(y,v):Bi("canvas")}function b(y,v,V,ee){let ie=1;if((y.width>ee||y.height>ee)&&(ie=ee/Math.max(y.width,y.height)),ie<1||v===!0)if(typeof HTMLImageElement!="undefined"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&y instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&y instanceof ImageBitmap){const se=v?Ir:Math.floor,ve=se(ie*y.width),ae=se(ie*y.height);p===void 0&&(p=A(ve,ae));const q=V?A(ve,ae):p;return q.width=ve,q.height=ae,q.getContext("2d").drawImage(y,0,0,ve,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ve+"x"+ae+")."),q}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function S(y){return Ps(y.width)&&Ps(y.height)}function w(y){return a?!1:y.wrapS!==Tt||y.wrapT!==Tt||y.minFilter!==at&&y.minFilter!==vt}function L(y,v){return y.generateMipmaps&&v&&y.minFilter!==at&&y.minFilter!==vt}function z(y){r.generateMipmap(y)}function g(y,v,V,ee,ie=!1){if(a===!1)return v;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se=v;return v===6403&&(V===5126&&(se=33326),V===5131&&(se=33325),V===5121&&(se=33321)),v===33319&&(V===5126&&(se=33328),V===5131&&(se=33327),V===5121&&(se=33323)),v===6408&&(V===5126&&(se=34836),V===5131&&(se=34842),V===5121&&(se=ee===ze&&ie===!1?35907:32856),V===32819&&(se=32854),V===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function E(y,v,V){return L(y,V)===!0||y.isFramebufferTexture&&y.minFilter!==at&&y.minFilter!==vt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function P(y){return y===at||y===ss||y===as?9728:9729}function Y(y){const v=y.target;v.removeEventListener("dispose",Y),F(v),v.isVideoTexture&&_.delete(v)}function te(y){const v=y.target;v.removeEventListener("dispose",te),k(v)}function F(y){const v=n.get(y);if(v.__webglInit===void 0)return;const V=y.source,ee=h.get(V);if(ee){const ie=ee[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(y),Object.keys(ee).length===0&&h.delete(V)}n.remove(y)}function I(y){const v=n.get(y);r.deleteTexture(v.__webglTexture);const V=y.source,ee=h.get(V);delete ee[v.__cacheKey],o.memory.textures--}function k(y){const v=y.texture,V=n.get(y),ee=n.get(v);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ie=0,se=v.length;ie<se;ie++){const ve=n.get(v[ie]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(v[ie])}n.remove(v),n.remove(y)}let Q=0;function J(){Q=0}function j(){const y=Q;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),Q+=1,y}function C(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.encoding),v.join()}function N(y,v){const V=n.get(y);if(y.isVideoTexture&&Pt(y),y.isRenderTargetTexture===!1&&y.version>0&&V.__version!==y.version){const ee=y.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(V,y,v);return}}t.bindTexture(3553,V.__webglTexture,33984+v)}function O(y,v){const V=n.get(y);if(y.version>0&&V.__version!==y.version){le(V,y,v);return}t.bindTexture(35866,V.__webglTexture,33984+v)}function U(y,v){const V=n.get(y);if(y.version>0&&V.__version!==y.version){le(V,y,v);return}t.bindTexture(32879,V.__webglTexture,33984+v)}function $(y,v){const V=n.get(y);if(y.version>0&&V.__version!==y.version){xe(V,y,v);return}t.bindTexture(34067,V.__webglTexture,33984+v)}const Z={[Dr]:10497,[Tt]:33071,[Pr]:33648},ne={[at]:9728,[ss]:9984,[as]:9986,[vt]:9729,[ml]:9985,[ki]:9987};function G(y,v,V){if(V?(r.texParameteri(y,10242,Z[v.wrapS]),r.texParameteri(y,10243,Z[v.wrapT]),(y===32879||y===35866)&&r.texParameteri(y,32882,Z[v.wrapR]),r.texParameteri(y,10240,ne[v.magFilter]),r.texParameteri(y,10241,ne[v.minFilter])):(r.texParameteri(y,10242,33071),r.texParameteri(y,10243,33071),(y===32879||y===35866)&&r.texParameteri(y,32882,33071),(v.wrapS!==Tt||v.wrapT!==Tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,10240,P(v.magFilter)),r.texParameteri(y,10241,P(v.minFilter)),v.minFilter!==at&&v.minFilter!==vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.type===hn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ti&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(y,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function we(y,v){let V=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",Y));const ee=v.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const se=C(v);if(se!==y.__cacheKey){ie[se]===void 0&&(ie[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[se].usedTimes++;const ve=ie[y.__cacheKey];ve!==void 0&&(ie[y.__cacheKey].usedTimes--,ve.usedTimes===0&&I(v)),y.__cacheKey=se,y.__webglTexture=ie[se].texture}return V}function le(y,v,V){let ee=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=35866),v.isData3DTexture&&(ee=32879);const ie=we(y,v),se=v.source;t.bindTexture(ee,y.__webglTexture,33984+V);const ve=n.get(se);if(se.version!==ve.__version||ie===!0){t.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ae=w(v)&&S(v.image)===!1;let q=b(v.image,ae,!1,u);q=bt(v,q);const pe=S(q)||a,ge=s.convert(v.format,v.encoding);let ue=s.convert(v.type),me=g(v.internalFormat,ge,ue,v.encoding,v.isVideoTexture);G(ee,v,pe);let de;const Le=v.mipmaps,Oe=a&&v.isVideoTexture!==!0,je=ve.__version===void 0||ie===!0,T=E(v,q,pe);if(v.isDepthTexture)me=6402,a?v.type===hn?me=36012:v.type===un?me=33190:v.type===zn?me=35056:me=33189:v.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===fn&&me===6402&&v.type!==Da&&v.type!==un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=un,ue=s.convert(v.type)),v.format===Hn&&me===6402&&(me=34041,v.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=zn,ue=s.convert(v.type))),je&&(Oe?t.texStorage2D(3553,1,me,q.width,q.height):t.texImage2D(3553,0,me,q.width,q.height,0,ge,ue,null));else if(v.isDataTexture)if(Le.length>0&&pe){Oe&&je&&t.texStorage2D(3553,T,me,Le[0].width,Le[0].height);for(let W=0,K=Le.length;W<K;W++)de=Le[W],Oe?t.texSubImage2D(3553,W,0,0,de.width,de.height,ge,ue,de.data):t.texImage2D(3553,W,me,de.width,de.height,0,ge,ue,de.data);v.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(3553,T,me,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ge,ue,q.data)):t.texImage2D(3553,0,me,q.width,q.height,0,ge,ue,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&je&&t.texStorage3D(35866,T,me,Le[0].width,Le[0].height,q.depth);for(let W=0,K=Le.length;W<K;W++)de=Le[W],v.format!==Ct?ge!==null?Oe?t.compressedTexSubImage3D(35866,W,0,0,0,de.width,de.height,q.depth,ge,de.data,0,0):t.compressedTexImage3D(35866,W,me,de.width,de.height,q.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,W,0,0,0,de.width,de.height,q.depth,ge,ue,de.data):t.texImage3D(35866,W,me,de.width,de.height,q.depth,0,ge,ue,de.data)}else{Oe&&je&&t.texStorage2D(3553,T,me,Le[0].width,Le[0].height);for(let W=0,K=Le.length;W<K;W++)de=Le[W],v.format!==Ct?ge!==null?Oe?t.compressedTexSubImage2D(3553,W,0,0,de.width,de.height,ge,de.data):t.compressedTexImage2D(3553,W,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,W,0,0,de.width,de.height,ge,ue,de.data):t.texImage2D(3553,W,me,de.width,de.height,0,ge,ue,de.data)}else if(v.isDataArrayTexture)Oe?(je&&t.texStorage3D(35866,T,me,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ge,ue,q.data)):t.texImage3D(35866,0,me,q.width,q.height,q.depth,0,ge,ue,q.data);else if(v.isData3DTexture)Oe?(je&&t.texStorage3D(32879,T,me,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ge,ue,q.data)):t.texImage3D(32879,0,me,q.width,q.height,q.depth,0,ge,ue,q.data);else if(v.isFramebufferTexture){if(je)if(Oe)t.texStorage2D(3553,T,me,q.width,q.height);else{let W=q.width,K=q.height;for(let oe=0;oe<T;oe++)t.texImage2D(3553,oe,me,W,K,0,ge,ue,null),W>>=1,K>>=1}}else if(Le.length>0&&pe){Oe&&je&&t.texStorage2D(3553,T,me,Le[0].width,Le[0].height);for(let W=0,K=Le.length;W<K;W++)de=Le[W],Oe?t.texSubImage2D(3553,W,0,0,ge,ue,de):t.texImage2D(3553,W,me,ge,ue,de);v.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(3553,T,me,q.width,q.height),t.texSubImage2D(3553,0,0,0,ge,ue,q)):t.texImage2D(3553,0,me,ge,ue,q);L(v,pe)&&z(ee),ve.__version=se.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function xe(y,v,V){if(v.image.length!==6)return;const ee=we(y,v),ie=v.source;t.bindTexture(34067,y.__webglTexture,33984+V);const se=n.get(ie);if(ie.version!==se.__version||ee===!0){t.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ve=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!ve&&!ae?q[W]=b(v.image[W],!1,!0,l):q[W]=ae?v.image[W].image:v.image[W],q[W]=bt(v,q[W]);const pe=q[0],ge=S(pe)||a,ue=s.convert(v.format,v.encoding),me=s.convert(v.type),de=g(v.internalFormat,ue,me,v.encoding),Le=a&&v.isVideoTexture!==!0,Oe=se.__version===void 0||ee===!0;let je=E(v,pe,ge);G(34067,v,ge);let T;if(ve){Le&&Oe&&t.texStorage2D(34067,je,de,pe.width,pe.height);for(let W=0;W<6;W++){T=q[W].mipmaps;for(let K=0;K<T.length;K++){const oe=T[K];v.format!==Ct?ue!==null?Le?t.compressedTexSubImage2D(34069+W,K,0,0,oe.width,oe.height,ue,oe.data):t.compressedTexImage2D(34069+W,K,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+W,K,0,0,oe.width,oe.height,ue,me,oe.data):t.texImage2D(34069+W,K,de,oe.width,oe.height,0,ue,me,oe.data)}}}else{T=v.mipmaps,Le&&Oe&&(T.length>0&&je++,t.texStorage2D(34067,je,de,q[0].width,q[0].height));for(let W=0;W<6;W++)if(ae){Le?t.texSubImage2D(34069+W,0,0,0,q[W].width,q[W].height,ue,me,q[W].data):t.texImage2D(34069+W,0,de,q[W].width,q[W].height,0,ue,me,q[W].data);for(let K=0;K<T.length;K++){const he=T[K].image[W].image;Le?t.texSubImage2D(34069+W,K+1,0,0,he.width,he.height,ue,me,he.data):t.texImage2D(34069+W,K+1,de,he.width,he.height,0,ue,me,he.data)}}else{Le?t.texSubImage2D(34069+W,0,0,0,ue,me,q[W]):t.texImage2D(34069+W,0,de,ue,me,q[W]);for(let K=0;K<T.length;K++){const oe=T[K];Le?t.texSubImage2D(34069+W,K+1,0,0,ue,me,oe.image[W]):t.texImage2D(34069+W,K+1,de,ue,me,oe.image[W])}}}L(v,ge)&&z(34067),se.__version=ie.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ce(y,v,V,ee,ie){const se=s.convert(V.format,V.encoding),ve=s.convert(V.type),ae=g(V.internalFormat,se,ve,V.encoding);n.get(v).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ae,v.width,v.height,v.depth,0,se,ve,null):t.texImage2D(ie,0,ae,v.width,v.height,0,se,ve,null)),t.bindFramebuffer(36160,y),Ie(v)?d.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(V).__webglTexture,0,He(v)):(ie===3553||ie>=34069&&ie<=34074)&&r.framebufferTexture2D(36160,ee,ie,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(y,v,V){if(r.bindRenderbuffer(36161,y),v.depthBuffer&&!v.stencilBuffer){let ee=33189;if(V||Ie(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===hn?ee=36012:ie.type===un&&(ee=33190));const se=He(v);Ie(v)?d.renderbufferStorageMultisampleEXT(36161,se,ee,v.width,v.height):r.renderbufferStorageMultisample(36161,se,ee,v.width,v.height)}else r.renderbufferStorage(36161,ee,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,y)}else if(v.depthBuffer&&v.stencilBuffer){const ee=He(v);V&&Ie(v)===!1?r.renderbufferStorageMultisample(36161,ee,35056,v.width,v.height):Ie(v)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,y)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<ee.length;ie++){const se=ee[ie],ve=s.convert(se.format,se.encoding),ae=s.convert(se.type),q=g(se.internalFormat,ve,ae,se.encoding),pe=He(v);V&&Ie(v)===!1?r.renderbufferStorageMultisample(36161,pe,q,v.width,v.height):Ie(v)?d.renderbufferStorageMultisampleEXT(36161,pe,q,v.width,v.height):r.renderbufferStorage(36161,q,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function ye(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);const ee=n.get(v.depthTexture).__webglTexture,ie=He(v);if(v.depthTexture.format===fn)Ie(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(v.depthTexture.format===Hn)Ie(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function _e(y){const v=n.get(y),V=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ye(v.__webglFramebuffer,y)}else if(V){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=r.createRenderbuffer(),Re(v.__webglDepthbuffer[ee],y,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Re(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function et(y,v,V){const ee=n.get(y);v!==void 0&&ce(ee.__webglFramebuffer,y,y.texture,36064,3553),V!==void 0&&_e(y)}function tt(y){const v=y.texture,V=n.get(y),ee=n.get(v);y.addEventListener("dispose",te),y.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=v.version,o.memory.textures++);const ie=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,ve=S(y)||a;if(ie){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)V.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const ae=y.texture;for(let q=0,pe=ae.length;q<pe;q++){const ge=n.get(ae[q]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ie(y)===!1){const ae=se?v:[v];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let q=0;q<ae.length;q++){const pe=ae[q];V.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[q]);const ge=s.convert(pe.format,pe.encoding),ue=s.convert(pe.type),me=g(pe.internalFormat,ge,ue,pe.encoding,y.isXRRenderTarget===!0),de=He(y);r.renderbufferStorageMultisample(36161,de,me,y.width,y.height),r.framebufferRenderbuffer(36160,36064+q,36161,V.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),y.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(V.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),G(34067,v,ve);for(let ae=0;ae<6;ae++)ce(V.__webglFramebuffer[ae],y,v,36064,34069+ae);L(v,ve)&&z(34067),t.unbindTexture()}else if(se){const ae=y.texture;for(let q=0,pe=ae.length;q<pe;q++){const ge=ae[q],ue=n.get(ge);t.bindTexture(3553,ue.__webglTexture),G(3553,ge,ve),ce(V.__webglFramebuffer,y,ge,36064+q,3553),L(ge,ve)&&z(3553)}t.unbindTexture()}else{let ae=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ae=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),G(ae,v,ve),ce(V.__webglFramebuffer,y,v,36064,ae),L(v,ve)&&z(ae),t.unbindTexture()}y.depthBuffer&&_e(y)}function nt(y){const v=S(y)||a,V=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0,ie=V.length;ee<ie;ee++){const se=V[ee];if(L(se,v)){const ve=y.isWebGLCubeRenderTarget?34067:3553,ae=n.get(se).__webglTexture;t.bindTexture(ve,ae),z(ve),t.unbindTexture()}}}function gt(y){if(a&&y.samples>0&&Ie(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],V=y.width,ee=y.height;let ie=16384;const se=[],ve=y.stencilBuffer?33306:36096,ae=n.get(y),q=y.isWebGLMultipleRenderTargets===!0;if(q)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){se.push(36064+pe),y.depthBuffer&&se.push(ve);const ge=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ge===!1&&(y.depthBuffer&&(ie|=256),y.stencilBuffer&&(ie|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[pe]),ge===!0&&(r.invalidateFramebuffer(36008,[ve]),r.invalidateFramebuffer(36009,[ve])),q){const ue=n.get(v[pe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,9728),m&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,ae.__webglColorRenderbuffer[pe]);const ge=n.get(v[pe]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,ge,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function He(y){return Math.min(f,y.samples)}function Ie(y){const v=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(y){const v=o.render.frame;_.get(y)!==v&&(_.set(y,v),y.update())}function bt(y,v){const V=y.encoding,ee=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Rr||V!==_n&&(V===ze?a===!1?e.has("EXT_sRGB")===!0&&ee===Ct?(y.format=Rr,y.minFilter=vt,y.generateMipmaps=!1):v=Ia.sRGBToLinear(v):(ee!==Ct||ie!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),v}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=$,this.rebindTextures=et,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ie}function Lf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===gn)return 5121;if(s===vl)return 32819;if(s===Ml)return 32820;if(s===gl)return 5120;if(s===_l)return 5122;if(s===Da)return 5123;if(s===xl)return 5124;if(s===un)return 5125;if(s===hn)return 5126;if(s===ti)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sl)return 6406;if(s===Ct)return 6408;if(s===bl)return 6409;if(s===wl)return 6410;if(s===fn)return 6402;if(s===Hn)return 34041;if(s===yl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Rr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Al)return 6403;if(s===El)return 36244;if(s===Tl)return 33319;if(s===Cl)return 33320;if(s===Ll)return 36249;if(s===Yi||s===Qi||s===Ji||s===Zi)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ji)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===os||s===ls||s===cs||s===us)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===os)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ls)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===us)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hs||s===ds)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hs)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ds)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fs||s===ps||s===ms||s===gs||s===_s||s===xs||s===vs||s===Ms||s===Ss||s===ys||s===bs||s===ws||s===As||s===Es)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ps)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ms)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_s)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ms)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ss)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ys)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bs)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ws)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===As)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Es)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ts)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ts)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===zn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Df extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n),x=this._getHandJoint(l,p);h!==null&&(x.matrix.fromArray(h.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=h.radius),x.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rf extends mt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:fn,u!==fn&&u!==Hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fn&&(n=un),n===void 0&&u===Hn&&(n=zn),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:at,this.minFilter=c!==void 0?c:at,this.flipY=!1,this.generateMipmaps=!1}}class If extends Wn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,f=null,d=null,m=null;const _=t.getContextAttributes();let p=null,h=null;const x=[],A=[],b=new Set,S=new Map,w=new Mt;w.layers.enable(1),w.viewport=new Ze;const L=new Mt;L.layers.enable(2),L.viewport=new Ze;const z=[w,L],g=new Df;g.layers.enable(1),g.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let U=x[O];return U===void 0&&(U=new Er,x[O]=U),U.getTargetRaySpace()},this.getControllerGrip=function(O){let U=x[O];return U===void 0&&(U=new Er,x[O]=U),U.getGripSpace()},this.getHand=function(O){let U=x[O];return U===void 0&&(U=new Er,x[O]=U),U.getHandSpace()};function Y(O){const U=A.indexOf(O.inputSource);if(U===-1)return;const $=x[U];$!==void 0&&$.dispatchEvent({type:O.type,data:O.inputSource})}function te(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",F);for(let O=0;O<x.length;O++){const U=A[O];U!==null&&(A[O]=null,x[O].disconnect(U))}E=null,P=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,h=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",te),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:d}),h=new xn(d.framebufferWidth,d.framebufferHeight,{format:Ct,type:gn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let U=null,$=null,Z=null;_.depth&&(Z=_.stencil?35056:33190,U=_.stencil?Hn:fn,$=_.stencil?zn:un);const ne={colorFormat:32856,depthFormat:Z,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ne),i.updateRenderState({layers:[f]}),h=new xn(f.textureWidth,f.textureHeight,{format:Ct,type:gn,depthTexture:new Rf(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const G=e.properties.get(h);G.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(O){for(let U=0;U<O.removed.length;U++){const $=O.removed[U],Z=A.indexOf($);Z>=0&&(A[Z]=null,x[Z].disconnect($))}for(let U=0;U<O.added.length;U++){const $=O.added[U];let Z=A.indexOf($);if(Z===-1){for(let G=0;G<x.length;G++)if(G>=A.length){A.push($),Z=G;break}else if(A[G]===null){A[G]=$,Z=G;break}if(Z===-1)break}const ne=x[Z];ne&&ne.connect($)}}const I=new B,k=new B;function Q(O,U,$){I.setFromMatrixPosition(U.matrixWorld),k.setFromMatrixPosition($.matrixWorld);const Z=I.distanceTo(k),ne=U.projectionMatrix.elements,G=$.projectionMatrix.elements,we=ne[14]/(ne[10]-1),le=ne[14]/(ne[10]+1),xe=(ne[9]+1)/ne[5],ce=(ne[9]-1)/ne[5],Re=(ne[8]-1)/ne[0],ye=(G[8]+1)/G[0],_e=we*Re,et=we*ye,tt=Z/(-Re+ye),nt=tt*-Re;U.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(nt),O.translateZ(tt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const gt=we+tt,He=le+tt,Ie=_e-nt,Pt=et+(Z-nt),bt=xe*le/He*gt,y=ce*le/He*gt;O.projectionMatrix.makePerspective(Ie,Pt,bt,y,gt,He)}function J(O,U){U===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(U.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;g.near=L.near=w.near=O.near,g.far=L.far=w.far=O.far,(E!==g.near||P!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,P=g.far);const U=O.parent,$=g.cameras;J(g,U);for(let ne=0;ne<$.length;ne++)J($[ne],U);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),O.matrix.copy(g.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const Z=O.children;for(let ne=0,G=Z.length;ne<G;ne++)Z[ne].updateMatrixWorld(!0);$.length===2?Q(g,w,L):g.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.getPlanes=function(){return b};let j=null;function C(O,U){if(l=U.getViewerPose(c||o),m=U,l!==null){const $=l.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Z=!1;$.length!==g.cameras.length&&(g.cameras.length=0,Z=!0);for(let ne=0;ne<$.length;ne++){const G=$[ne];let we=null;if(d!==null)we=d.getViewport(G);else{const xe=u.getViewSubImage(f,G);we=xe.viewport,ne===0&&(e.setRenderTargetTextures(h,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let le=z[ne];le===void 0&&(le=new Mt,le.layers.enable(ne),le.viewport=new Ze,z[ne]=le),le.matrix.fromArray(G.transform.matrix),le.projectionMatrix.fromArray(G.projectionMatrix),le.viewport.set(we.x,we.y,we.width,we.height),ne===0&&g.matrix.copy(le.matrix),Z===!0&&g.cameras.push(le)}}for(let $=0;$<x.length;$++){const Z=A[$],ne=x[$];Z!==null&&ne!==void 0&&ne.update(Z,U,c||o)}if(j&&j(O,U),U.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let $=null;for(const Z of b)U.detectedPlanes.has(Z)||($===null&&($=[]),$.push(Z));if($!==null)for(const Z of $)b.delete(Z),S.delete(Z),n.dispatchEvent({type:"planeremoved",data:Z});for(const Z of U.detectedPlanes)if(!b.has(Z))b.add(Z),S.set(Z,U.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Z});else{const ne=S.get(Z);Z.lastChangedTime>ne&&(S.set(Z,Z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Z}))}}m=null}const N=new Xa;N.setAnimationLoop(C),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}}function Ff(r,e){function t(p,h){h.color.getRGB(p.fogColor.value,ka(r)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,x,A,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),l(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,b)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),_(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,x,A):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===St&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===St&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let A;h.map?A=h.map:h.specularMap?A=h.specularMap:h.displacementMap?A=h.displacementMap:h.normalMap?A=h.normalMap:h.bumpMap?A=h.bumpMap:h.roughnessMap?A=h.roughnessMap:h.metalnessMap?A=h.metalnessMap:h.alphaMap?A=h.alphaMap:h.emissiveMap?A=h.emissiveMap:h.clearcoatMap?A=h.clearcoatMap:h.clearcoatNormalMap?A=h.clearcoatNormalMap:h.clearcoatRoughnessMap?A=h.clearcoatRoughnessMap:h.iridescenceMap?A=h.iridescenceMap:h.iridescenceThicknessMap?A=h.iridescenceThicknessMap:h.specularIntensityMap?A=h.specularIntensityMap:h.specularColorMap?A=h.specularColorMap:h.transmissionMap?A=h.transmissionMap:h.thicknessMap?A=h.thicknessMap:h.sheenColorMap?A=h.sheenColorMap:h.sheenRoughnessMap&&(A=h.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix));let b;h.aoMap?b=h.aoMap:h.lightMap&&(b=h.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,x,A){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=A*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let b;h.map?b=h.map:h.alphaMap&&(b=h.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===St&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Nf(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(A,b){const S=b.program;n.uniformBlockBinding(A,S)}function l(A,b){let S=i[A.id];S===void 0&&(_(A),S=u(A),i[A.id]=S,A.addEventListener("dispose",h));const w=b.program;n.updateUBOMapping(A,w);const L=e.render.frame;s[A.id]!==L&&(d(A),s[A.id]=L)}function u(A){const b=f();A.__bindingPointIndex=b;const S=r.createBuffer(),w=A.__size,L=A.usage;return r.bindBuffer(35345,S),r.bufferData(35345,w,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=i[A.id],S=A.uniforms,w=A.__cache;r.bindBuffer(35345,b);for(let L=0,z=S.length;L<z;L++){const g=S[L];if(m(g,L,w)===!0){const E=g.value,P=g.__offset;typeof E=="number"?(g.__data[0]=E,r.bufferSubData(35345,P,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):E.toArray(g.__data),r.bufferSubData(35345,P,g.__data))}}r.bindBuffer(35345,null)}function m(A,b,S){const w=A.value;if(S[b]===void 0)return typeof w=="number"?S[b]=w:S[b]=w.clone(),!0;if(typeof w=="number"){if(S[b]!==w)return S[b]=w,!0}else{const L=S[b];if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(A){const b=A.uniforms;let S=0;const w=16;let L=0;for(let z=0,g=b.length;z<g;z++){const E=b[z],P=p(E);if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,z>0){L=S%w;const Y=w-L;L!==0&&Y-P.boundary<0&&(S+=w-L,E.__offset=S)}S+=P.storage}return L=S%w,L>0&&(S+=w-L),A.__size=S,A.__cache={},this}function p(A){const b=A.value,S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function h(A){const b=A.target;b.removeEventListener("dispose",h);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function x(){for(const A in i)r.deleteBuffer(i[A]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}function Of(){const r=Bi("canvas");return r.style.display="block",r}function Ja(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Of(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=_n,this.physicallyCorrectLights=!1,this.toneMapping=Gt,this.toneMappingExposure=1;const p=this;let h=!1,x=0,A=0,b=null,S=-1,w=null;const L=new Ze,z=new Ze;let g=null,E=e.width,P=e.height,Y=1,te=null,F=null;const I=new Ze(0,0,E,P),k=new Ze(0,0,E,P);let Q=!1;const J=new Wa;let j=!1,C=!1,N=null;const O=new Je,U=new Fe,$=new B,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return b===null?Y:1}let G=t;function we(M,R){for(let H=0;H<M.length;H++){const D=M[H],X=e.getContext(D,R);if(X!==null)return X}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hr}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Le,!1),G===null){const R=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&R.shift(),G=we(R,M),G===null)throw we(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let le,xe,ce,Re,ye,_e,et,tt,nt,gt,He,Ie,Pt,bt,y,v,V,ee,ie,se,ve,ae,q,pe;function ge(){le=new jh(G),xe=new Bh(G,le,r),le.init(xe),ae=new Lf(G,le,xe),ce=new Tf(G,le,xe),Re=new Qh,ye=new ff,_e=new Cf(G,le,ce,ye,xe,ae,Re),et=new kh(p),tt=new Xh(p),nt=new ic(G,xe),q=new Uh(G,le,nt,xe),gt=new qh(G,nt,Re,q),He=new $h(G,gt,nt,Re),ie=new Kh(G,xe,_e),v=new Gh(ye),Ie=new df(p,et,tt,le,xe,q,v),Pt=new Ff(p,ye),bt=new mf,y=new Sf(le,xe),ee=new Oh(p,et,tt,ce,He,u,o),V=new Ef(p,He,xe),pe=new Nf(G,Re,xe,ce),se=new zh(G,le,Re,xe),ve=new Yh(G,le,Re,xe),Re.programs=Ie.programs,p.capabilities=xe,p.extensions=le,p.properties=ye,p.renderLists=bt,p.shadowMap=V,p.state=ce,p.info=Re}ge();const ue=new If(p,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(E,P,!1))},this.getSize=function(M){return M.set(E,P)},this.setSize=function(M,R,H){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=M,P=R,e.width=Math.floor(M*Y),e.height=Math.floor(R*Y),H!==!1&&(e.style.width=M+"px",e.style.height=R+"px"),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(E*Y,P*Y).floor()},this.setDrawingBufferSize=function(M,R,H){E=M,P=R,Y=H,e.width=Math.floor(M*H),e.height=Math.floor(R*H),this.setViewport(0,0,M,R)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(I)},this.setViewport=function(M,R,H,D){M.isVector4?I.set(M.x,M.y,M.z,M.w):I.set(M,R,H,D),ce.viewport(L.copy(I).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(k)},this.setScissor=function(M,R,H,D){M.isVector4?k.set(M.x,M.y,M.z,M.w):k.set(M,R,H,D),ce.scissor(z.copy(k).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(M){ce.setScissorTest(Q=M)},this.setOpaqueSort=function(M){te=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(M=!0,R=!0,H=!0){let D=0;M&&(D|=16384),R&&(D|=256),H&&(D|=1024),G.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),bt.dispose(),y.dispose(),ye.dispose(),et.dispose(),tt.dispose(),He.dispose(),q.dispose(),pe.dispose(),Ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",oe),ue.removeEventListener("sessionend",he),N&&(N.dispose(),N=null),Pe.stop()};function me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const M=Re.autoReset,R=V.enabled,H=V.autoUpdate,D=V.needsUpdate,X=V.type;ge(),Re.autoReset=M,V.enabled=R,V.autoUpdate=H,V.needsUpdate=D,V.type=X}function Le(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const R=M.target;R.removeEventListener("dispose",Oe),je(R)}function je(M){T(M),ye.remove(M)}function T(M){const R=ye.get(M).programs;R!==void 0&&(R.forEach(function(H){Ie.releaseProgram(H)}),M.isShaderMaterial&&Ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,H,D,X,fe){R===null&&(R=Z);const Me=X.isMesh&&X.matrixWorld.determinant()<0,be=Za(M,R,H,D,X);ce.setMaterial(D,Me);let Ae=H.index,De=1;D.wireframe===!0&&(Ae=gt.getWireframeAttribute(H),De=2);const Ee=H.drawRange,Te=H.attributes.position;let Be=Ee.start*De,lt=(Ee.start+Ee.count)*De;fe!==null&&(Be=Math.max(Be,fe.start*De),lt=Math.min(lt,(fe.start+fe.count)*De)),Ae!==null?(Be=Math.max(Be,0),lt=Math.min(lt,Ae.count)):Te!=null&&(Be=Math.max(Be,0),lt=Math.min(lt,Te.count));const It=lt-Be;if(It<0||It===1/0)return;q.setup(X,D,be,H,Ae);let en,Ge=se;if(Ae!==null&&(en=nt.get(Ae),Ge=ve,Ge.setIndex(en)),X.isMesh)D.wireframe===!0?(ce.setLineWidth(D.wireframeLinewidth*ne()),Ge.setMode(1)):Ge.setMode(4);else if(X.isLine){let Ce=D.linewidth;Ce===void 0&&(Ce=1),ce.setLineWidth(Ce*ne()),X.isLineSegments?Ge.setMode(1):X.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else X.isPoints?Ge.setMode(0):X.isSprite&&Ge.setMode(4);if(X.isInstancedMesh)Ge.renderInstances(Be,It,X.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Wi=Math.min(H.instanceCount,Ce);Ge.renderInstances(Be,It,Wi)}else Ge.render(Be,It)},this.compile=function(M,R){function H(D,X,fe){D.transparent===!0&&D.side===Qt?(D.side=St,D.needsUpdate=!0,_t(D,X,fe),D.side=Bn,D.needsUpdate=!0,_t(D,X,fe),D.side=Qt):_t(D,X,fe)}d=y.get(M),d.init(),_.push(d),M.traverseVisible(function(D){D.isLight&&D.layers.test(R.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights(p.physicallyCorrectLights),M.traverse(function(D){const X=D.material;if(X)if(Array.isArray(X))for(let fe=0;fe<X.length;fe++){const Me=X[fe];H(Me,M,D)}else H(X,M,D)}),_.pop(),d=null};let W=null;function K(M){W&&W(M)}function oe(){Pe.stop()}function he(){Pe.start()}const Pe=new Xa;Pe.setAnimationLoop(K),typeof self!="undefined"&&Pe.setContext(self),this.setAnimationLoop=function(M){W=M,ue.setAnimationLoop(M),M===null?Pe.stop():Pe.start()},ue.addEventListener("sessionstart",oe),ue.addEventListener("sessionend",he),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(R),R=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,R,b),d=y.get(M,_.length),d.init(),_.push(d),O.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),J.setFromProjectionMatrix(O),C=this.localClippingEnabled,j=v.init(this.clippingPlanes,C,R),f=bt.get(M,m.length),f.init(),m.push(f),qe(M,R,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(te,F),j===!0&&v.beginShadows();const H=d.state.shadowsArray;if(V.render(H,M,R),j===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,M),d.setupLights(p.physicallyCorrectLights),R.isArrayCamera){const D=R.cameras;for(let X=0,fe=D.length;X<fe;X++){const Me=D[X];Ke(f,M,Me,Me.viewport)}}else Ke(f,M,R);b!==null&&(_e.updateMultisampleRenderTarget(b),_e.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(p,M,R),q.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function qe(M,R,H,D){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){D&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(O);const Me=He.update(M),be=M.material;be.visible&&f.push(M,Me,be,H,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Re.render.frame&&(M.skeleton.update(),M.skeleton.frame=Re.render.frame),!M.frustumCulled||J.intersectsObject(M))){D&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(O);const Me=He.update(M),be=M.material;if(Array.isArray(be)){const Ae=Me.groups;for(let De=0,Ee=Ae.length;De<Ee;De++){const Te=Ae[De],Be=be[Te.materialIndex];Be&&Be.visible&&f.push(M,Me,Be,H,$.z,Te)}}else be.visible&&f.push(M,Me,be,H,$.z,null)}}const fe=M.children;for(let Me=0,be=fe.length;Me<be;Me++)qe(fe[Me],R,H,D)}function Ke(M,R,H,D){const X=M.opaque,fe=M.transmissive,Me=M.transparent;d.setupLightsView(H),fe.length>0&&$t(X,R,H),D&&ce.viewport(L.copy(D)),X.length>0&&Ue(X,R,H),fe.length>0&&Ue(fe,R,H),Me.length>0&&Ue(Me,R,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function $t(M,R,H){const D=xe.isWebGL2;N===null&&(N=new xn(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?ti:gn,minFilter:ki,samples:D&&s===!0?4:0})),p.getDrawingBufferSize(U),D?N.setSize(U.x,U.y):N.setSize(Ir(U.x),Ir(U.y));const X=p.getRenderTarget();p.setRenderTarget(N),p.clear();const fe=p.toneMapping;p.toneMapping=Gt,Ue(M,R,H),p.toneMapping=fe,_e.updateMultisampleRenderTarget(N),_e.updateRenderTargetMipmap(N),p.setRenderTarget(X)}function Ue(M,R,H){const D=R.isScene===!0?R.overrideMaterial:null;for(let X=0,fe=M.length;X<fe;X++){const Me=M[X],be=Me.object,Ae=Me.geometry,De=D===null?Me.material:D,Ee=Me.group;be.layers.test(H.layers)&&Rt(be,R,H,Ae,De,Ee)}}function Rt(M,R,H,D,X,fe){M.onBeforeRender(p,R,H,D,X,fe),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(p,R,H,D,M,fe),X.transparent===!0&&X.side===Qt?(X.side=St,X.needsUpdate=!0,p.renderBufferDirect(H,R,D,X,M,fe),X.side=Bn,X.needsUpdate=!0,p.renderBufferDirect(H,R,D,X,M,fe),X.side=Qt):p.renderBufferDirect(H,R,D,X,M,fe),M.onAfterRender(p,R,H,D,X,fe)}function _t(M,R,H){R.isScene!==!0&&(R=Z);const D=ye.get(M),X=d.state.lights,fe=d.state.shadowsArray,Me=X.state.version,be=Ie.getParameters(M,X.state,fe,R,H),Ae=Ie.getProgramCacheKey(be);let De=D.programs;D.environment=M.isMeshStandardMaterial?R.environment:null,D.fog=R.fog,D.envMap=(M.isMeshStandardMaterial?tt:et).get(M.envMap||D.environment),De===void 0&&(M.addEventListener("dispose",Oe),De=new Map,D.programs=De);let Ee=De.get(Ae);if(Ee!==void 0){if(D.currentProgram===Ee&&D.lightsStateVersion===Me)return Xr(M,be),Ee}else be.uniforms=Ie.getUniforms(M),M.onBuild(H,be,p),M.onBeforeCompile(be,p),Ee=Ie.acquireProgram(be,Ae),De.set(Ae,Ee),D.uniforms=be.uniforms;const Te=D.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=v.uniform),Xr(M,be),D.needsLights=$a(M),D.lightsStateVersion=Me,D.needsLights&&(Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.directionalShadowMap.value=X.state.directionalShadowMap,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotShadowMap.value=X.state.spotShadowMap,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMap.value=X.state.pointShadowMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix);const Be=Ee.getUniforms(),lt=Ui.seqWithValue(Be.seq,Te);return D.currentProgram=Ee,D.uniformsList=lt,Ee}function Xr(M,R){const H=ye.get(M);H.outputEncoding=R.outputEncoding,H.instancing=R.instancing,H.skinning=R.skinning,H.morphTargets=R.morphTargets,H.morphNormals=R.morphNormals,H.morphColors=R.morphColors,H.morphTargetsCount=R.morphTargetsCount,H.numClippingPlanes=R.numClippingPlanes,H.numIntersection=R.numClipIntersection,H.vertexAlphas=R.vertexAlphas,H.vertexTangents=R.vertexTangents,H.toneMapping=R.toneMapping}function Za(M,R,H,D,X){R.isScene!==!0&&(R=Z),_e.resetTextureUnits();const fe=R.fog,Me=D.isMeshStandardMaterial?R.environment:null,be=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:_n,Ae=(D.isMeshStandardMaterial?tt:et).get(D.envMap||Me),De=D.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ee=!!D.normalMap&&!!H.attributes.tangent,Te=!!H.morphAttributes.position,Be=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color,It=D.toneMapped?p.toneMapping:Gt,en=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ge=en!==void 0?en.length:0,Ce=ye.get(D),Wi=d.state.lights;if(j===!0&&(C===!0||M!==w)){const ct=M===w&&D.id===S;v.setState(D,M,ct)}let Ye=!1;D.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Wi.state.version||Ce.outputEncoding!==be||X.isInstancedMesh&&Ce.instancing===!1||!X.isInstancedMesh&&Ce.instancing===!0||X.isSkinnedMesh&&Ce.skinning===!1||!X.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==Ae||D.fog===!0&&Ce.fog!==fe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==v.numPlanes||Ce.numIntersection!==v.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ee||Ce.morphTargets!==Te||Ce.morphNormals!==Be||Ce.morphColors!==lt||Ce.toneMapping!==It||xe.isWebGL2===!0&&Ce.morphTargetsCount!==Ge)&&(Ye=!0):(Ye=!0,Ce.__version=D.version);let tn=Ce.currentProgram;Ye===!0&&(tn=_t(D,R,X));let jr=!1,jn=!1,Xi=!1;const it=tn.getUniforms(),nn=Ce.uniforms;if(ce.useProgram(tn.program)&&(jr=!0,jn=!0,Xi=!0),D.id!==S&&(S=D.id,jn=!0),jr||w!==M){if(it.setValue(G,"projectionMatrix",M.projectionMatrix),xe.logarithmicDepthBuffer&&it.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,jn=!0,Xi=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const ct=it.map.cameraPosition;ct!==void 0&&ct.setValue(G,$.setFromMatrixPosition(M.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&it.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&it.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(X.isSkinnedMesh){it.setOptional(G,X,"bindMatrix"),it.setOptional(G,X,"bindMatrixInverse");const ct=X.skeleton;ct&&(xe.floatVertexTextures?(ct.boneTexture===null&&ct.computeBoneTexture(),it.setValue(G,"boneTexture",ct.boneTexture,_e),it.setValue(G,"boneTextureSize",ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ji=H.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0&&xe.isWebGL2===!0)&&ie.update(X,H,D,tn),(jn||Ce.receiveShadow!==X.receiveShadow)&&(Ce.receiveShadow=X.receiveShadow,it.setValue(G,"receiveShadow",X.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(nn.envMap.value=Ae,nn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),jn&&(it.setValue(G,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&Ka(nn,Xi),fe&&D.fog===!0&&Pt.refreshFogUniforms(nn,fe),Pt.refreshMaterialUniforms(nn,D,Y,P,N),Ui.upload(G,Ce.uniformsList,nn,_e)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ui.upload(G,Ce.uniformsList,nn,_e),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&it.setValue(G,"center",X.center),it.setValue(G,"modelViewMatrix",X.modelViewMatrix),it.setValue(G,"normalMatrix",X.normalMatrix),it.setValue(G,"modelMatrix",X.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const ct=D.uniformsGroups;for(let qi=0,eo=ct.length;qi<eo;qi++)if(xe.isWebGL2){const qr=ct[qi];pe.update(qr,tn),pe.bind(qr,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function Ka(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function $a(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,R,H){ye.get(M.texture).__webglTexture=R,ye.get(M.depthTexture).__webglTexture=H;const D=ye.get(M);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=H===void 0,D.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,R){const H=ye.get(M);H.__webglFramebuffer=R,H.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,H=0){b=M,x=R,A=H;let D=!0,X=null,fe=!1,Me=!1;if(M){const Ae=ye.get(M);Ae.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),D=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(M):Ae.__hasExternalTextures&&_e.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ee=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(X=Ee[R],fe=!0):xe.isWebGL2&&M.samples>0&&_e.useMultisampledRTT(M)===!1?X=ye.get(M).__webglMultisampledFramebuffer:X=Ee,L.copy(M.viewport),z.copy(M.scissor),g=M.scissorTest}else L.copy(I).multiplyScalar(Y).floor(),z.copy(k).multiplyScalar(Y).floor(),g=Q;if(ce.bindFramebuffer(36160,X)&&xe.drawBuffers&&D&&ce.drawBuffers(M,X),ce.viewport(L),ce.scissor(z),ce.setScissorTest(g),fe){const Ae=ye.get(M.texture);G.framebufferTexture2D(36160,36064,34069+R,Ae.__webglTexture,H)}else if(Me){const Ae=ye.get(M.texture),De=R||0;G.framebufferTextureLayer(36160,36064,Ae.__webglTexture,H||0,De)}S=-1},this.readRenderTargetPixels=function(M,R,H,D,X,fe,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){ce.bindFramebuffer(36160,be);try{const Ae=M.texture,De=Ae.format,Ee=Ae.type;if(De!==Ct&&ae.convert(De)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=Ee===ti&&(le.has("EXT_color_buffer_half_float")||xe.isWebGL2&&le.has("EXT_color_buffer_float"));if(Ee!==gn&&ae.convert(Ee)!==G.getParameter(35738)&&!(Ee===hn&&(xe.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-D&&H>=0&&H<=M.height-X&&G.readPixels(R,H,D,X,ae.convert(De),ae.convert(Ee),fe)}finally{const Ae=b!==null?ye.get(b).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(M,R,H=0){const D=Math.pow(2,-H),X=Math.floor(R.image.width*D),fe=Math.floor(R.image.height*D);_e.setTexture2D(R,0),G.copyTexSubImage2D(3553,H,0,0,M.x,M.y,X,fe),ce.unbindTexture()},this.copyTextureToTexture=function(M,R,H,D=0){const X=R.image.width,fe=R.image.height,Me=ae.convert(H.format),be=ae.convert(H.type);_e.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),R.isDataTexture?G.texSubImage2D(3553,D,M.x,M.y,X,fe,Me,be,R.image.data):R.isCompressedTexture?G.compressedTexSubImage2D(3553,D,M.x,M.y,R.mipmaps[0].width,R.mipmaps[0].height,Me,R.mipmaps[0].data):G.texSubImage2D(3553,D,M.x,M.y,Me,be,R.image),D===0&&H.generateMipmaps&&G.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(M,R,H,D,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Ae=ae.convert(D.format),De=ae.convert(D.type);let Ee;if(D.isData3DTexture)_e.setTexture3D(D,0),Ee=32879;else if(D.isDataArrayTexture)_e.setTexture2DArray(D,0),Ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,D.flipY),G.pixelStorei(37441,D.premultiplyAlpha),G.pixelStorei(3317,D.unpackAlignment);const Te=G.getParameter(3314),Be=G.getParameter(32878),lt=G.getParameter(3316),It=G.getParameter(3315),en=G.getParameter(32877),Ge=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,Ge.width),G.pixelStorei(32878,Ge.height),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(Ee,X,R.x,R.y,R.z,fe,Me,be,Ae,De,Ge.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ee,X,R.x,R.y,R.z,fe,Me,be,Ae,Ge.data)):G.texSubImage3D(Ee,X,R.x,R.y,R.z,fe,Me,be,Ae,De,Ge),G.pixelStorei(3314,Te),G.pixelStorei(32878,Be),G.pixelStorei(3316,lt),G.pixelStorei(3315,It),G.pixelStorei(32877,en),X===0&&D.generateMipmaps&&G.generateMipmap(Ee),ce.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?_e.setTextureCube(M,0):M.isData3DTexture?_e.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_e.setTexture2DArray(M,0):_e.setTexture2D(M,0),ce.unbindTexture()},this.resetState=function(){x=0,A=0,b=null,ce.reset(),q.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Uf extends Ja{}Uf.prototype.isWebGL1Renderer=!0;class zf extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Bf extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ua=new Je,Nr=new Oa,Ii=new Hi,Fi=new B;class Gf extends ot{constructor(e=new kt,t=new Bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(i),Ii.radius+=s,e.ray.intersectsSphere(Ii)===!1)return;ua.copy(i).invert(),Nr.copy(e.ray).applyMatrix4(ua);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=d,p=m;_<p;_++){const h=l.getX(_);Fi.fromBufferAttribute(f,h),ha(Fi,h,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,p=m;_<p;_++)Fi.fromBufferAttribute(f,_),ha(Fi,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ha(r,e,t,n,i,s,o){const a=Nr.distanceSqToPoint(r);if(a<t){const c=new B;Nr.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hr);const kf={props:{amountX:{type:Number,default:150},amountY:{type:Number,default:80},color:{type:String,default:"#097bdb"},top:{type:Number,default:0}},setup(r){let t,n,i,s,o,a=0,c=0;function l(){t=document.createElement("div"),document.getElementById("iviewBg").appendChild(t),n=new Mt(75,window.innerWidth/window.innerHeight,1,1e4),n.position.z=550,i=new zf;const m=r.amountX*r.amountY,_=new Float32Array(m*3),p=new Float32Array(m);let h=0,x=0;for(let S=0;S<r.amountX;S++)for(let w=0;w<r.amountY;w++)_[h]=S*100-r.amountX*100/2,_[h+1]=0,_[h+2]=w*100-r.amountY*100/2,p[x]=1,h+=3,x++;const A=new kt;A.setAttribute("position",new yt(_,3)),A.setAttribute("scale",new yt(p,1));const b=new Kt({uniforms:{color:{value:new Ne(r.color)}},vertexShader:"attribute float scale; void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}",fragmentShader:"uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}"});o=new Gf(A,b),i.add(o),s=new Ja({antialias:!0,alpha:!0}),s.setPixelRatio(window.devicePixelRatio),s.setClearAlpha(0),s.setSize(window.innerWidth,window.innerHeight),t.appendChild(s.domElement),t.style.touchAction="none",t.style.position="relative",t.style.top=`${r.top}px`,window.addEventListener("resize",f)}function u(){n.position.x+=(c-n.position.x)*.05,n.position.y=400,n.lookAt(i.position);const m=o.geometry.attributes.position.array,_=o.geometry.attributes.scale.array;let p=0,h=0;for(let x=0;x<r.amountX;x++)for(let A=0;A<r.amountY;A++)m[p+1]=Math.sin((x+a)*.3)*50+Math.sin((A+a)*.5)*50,_[h]=(Math.sin((x+a)*.3)+1)*10+(Math.sin((A+a)*.5)+1)*10,p+=3,h++;o.geometry.attributes.position.needsUpdate=!0,o.geometry.attributes.scale.needsUpdate=!0,s.render(i,n),a+=.1}function f(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function d(){requestAnimationFrame(d),u()}return fa(()=>{l(),d()}),{}}},Hf={id:"iviewBg"};function Vf(r,e,t,n,i,s){return Or(),Ur("div",Hf)}var Yf=pa(kf,[["render",Vf],["__scopeId","data-v-cca34280"]]);export{qf as I,Yf as W,jf as _};
