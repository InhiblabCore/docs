var ll=Object.defineProperty;var cl=(r,e,t)=>e in r?ll(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var gt=(r,e,t)=>(cl(r,typeof e!="symbol"?e+"":e,t),t),Xs=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var Ve=(r,e,t)=>(Xs(r,e,"read from private field"),t?t.call(r):e.get(r)),ze=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var he=(r,e,t)=>(Xs(r,e,"access private method"),t);import{e as Nr,r as Wi,g as ul,h as hl,i as mo,o as qe,c as tt,d as Qe,j as dl,t as ji,k as Un,u as br,F as bs,l as ws,_ as zr,m as fl}from"../app.367c0303.js";const go=r=>Array.isArray(r),xo=r=>go(r)?r:[r];let pl=function(r){let e=function(g){return xo(g).forEach(p=>{var u;return m.set(Symbol((u=p.char)==null?void 0:u.innerText),i({...p}))}),this},t=()=>l().filter(g=>g.typeable),n=function(g,p){let u=[...m.keys()];m.set(u[g],i(p))},i=g=>(g.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},g),s=function(){m.forEach(g=>delete g.done)},o=function(){m=new Map,e(r)},a=()=>m,l=()=>Array.from(m.values()),c=g=>m.delete(g),h=()=>{const g=[];for(let[,p]of a())p.done||g.push(p);return g},d=(g=!1)=>g?l():l().filter(p=>!p.done),f=(g,p=!1)=>p?m.delete(g):m.get(g).done=!0,m=new Map;return e(r),{add:e,set:n,wipe:o,done:f,reset:s,destroy:c,getItems:d,getQueue:a,getTypeable:t,getPendingQueueItems:h}};const _o="data-typeit-id",In="ti-cursor",ml="END",gl={started:!1,completed:!1,frozen:!1,destroyed:!1},ti={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(r=>({opacity:r})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},xl=`[${_o}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,xr=r=>document.createElement(r),Gs=r=>document.createTextNode(r),vo=(r,e="")=>{let t=xr("style");t.id=e,t.appendChild(Gs(r)),document.head.appendChild(t)},Zs=r=>(go(r)||(r=[r/2,r/2]),r),Js=(r,e)=>Math.abs(Math.random()*(r+e-(r-e))+(r-e));let Ks=r=>r/2;function _l(r){let{speed:e,deleteSpeed:t,lifeLike:n}=r;return t=t!==null?t:e/3,n?[Js(e,Ks(e)),Js(t,Ks(t))]:[e,t]}const Mo=r=>Array.from(r);let ks=r=>([...r.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(t=>{e.parentNode.insertBefore(Gs(t),e)}),e.remove();return}ks(e)}),r);const yo=r=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=r,ks(e.body)};function So(r,e=!1,t=!1){let n=r.querySelector(`.${In}`),i=document.createTreeWalker(r,NodeFilter.SHOW_ALL,{acceptNode:a=>{var l,c;if(n&&t){if((l=a.classList)!=null&&l.contains(In))return NodeFilter.FILTER_ACCEPT;if(n.contains(a))return NodeFilter.FILTER_REJECT}return(c=a.classList)!=null&&c.contains(In)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),s,o=[];for(;s=i.nextNode();)s.originalParent||(s.originalParent=s.parentNode),o.push(s);return e?o.reverse():o}function vl(r){return So(yo(r))}function Ml(r,e=!0){return e?vl(r):Mo(r).map(Gs)}const yl=({index:r,newIndex:e,queueItems:t,cleanUp:n})=>{for(let i=r+1;i<e+1;i++)n(t[i][0])},bo=r=>Number.isInteger(r),$s=({queueItems:r,selector:e,cursorPosition:t,to:n})=>{if(bo(e))return e*-1;let i=new RegExp(ml,"i").test(n),s=e?[...r].reverse().findIndex(({char:a})=>{let l=a.parentElement,c=l.matches(e);return i&&c?!0:c&&l.firstChild.isSameNode(a)}):-1;s<0&&(s=i?0:r.length-1);let o=i?0:1;return s-t+o},Sl=r=>(r.forEach(clearTimeout),[]),Yi=(r,e)=>new Array(e).fill(r);let wr=r=>new Promise(e=>{requestAnimationFrame(async()=>{e(await r())})}),wo=r=>r==null?void 0:r.getAnimations().find(e=>e.id===r.dataset.tiAnimationId),Ao=({cursor:r,frames:e,options:t})=>{let n=r.animate(e,t);return n.pause(),n.id=r.dataset.tiAnimationId,wr(()=>{wr(()=>{n.play()})}),n},bl=({cursor:r,options:e,cursorOptions:t})=>{if(!r||!t)return;let n=wo(r),i;n&&(e.delay=n.effect.getComputedTiming().delay,i=n.currentTime,n.cancel());let s=Ao({cursor:r,frames:t.animation.frames,options:e});return i&&(s.currentTime=i),s},ea=r=>{var e;return(e=r.func)==null?void 0:e.call(null)},wl=async({index:r,queueItems:e,wait:t,cursor:n,cursorOptions:i})=>{let s=e[r][1],o=[],a=r,l=s,c=()=>l&&!l.delay,h=s.shouldPauseCursor()&&i.autoPause;for(;c();)o.push(l),c()&&a++,l=e[a]?e[a][1]:null;if(o.length)return await wr(async()=>{for(let m of o)await ea(m)}),a-1;let d=wo(n),f;return d&&(f={...d.effect.getComputedTiming(),delay:h?i.autoPauseDelay:0}),await t(async()=>{d&&h&&d.cancel(),await wr(()=>{ea(s)})},s.delay),await bl({cursor:n,options:f,cursorOptions:i}),r};const Al=(r,e)=>{new IntersectionObserver((n,i)=>{n.forEach(s=>{s.isIntersecting&&(e(),i.unobserve(r))})},{threshold:1}).observe(r)},Tl=()=>Math.random().toString().substring(2,9),Ar=r=>"value"in r;let El=r=>Ar(r)?Mo(r.value):So(r,!0).filter(e=>!(e.childNodes.length>0)),Bn=r=>typeof r=="function"?r():r,Hs=(r,e=document,t=!1)=>e[`querySelector${t?"All":""}`](r),Cl=r=>/body/i.test(r==null?void 0:r.tagName),Ll=(r,e)=>{if(Ar(r)){r.value=`${r.value}${e.textContent}`;return}e.innerHTML="";let t=Cl(e.originalParent)?r:e.originalParent||r,n=Hs("."+In,t)||null;n&&n.parentElement!==t&&(t=n.parentElement),t.insertBefore(e,n)};const Dl=r=>/<(.+)>(.*?)<\/(.+)>/.test(r.outerHTML),Mi=(r,e)=>Object.assign({},r,e);let Il=r=>{var e,t,n;if(typeof r=="object"){let i={},{frames:s,options:o}=ti.cursor.animation;return i.animation=r.animation||{},i.animation.frames=((e=r.animation)==null?void 0:e.frames)||s,i.animation.options=Mi(o,((t=r.animation)==null?void 0:t.options)||{}),i.autoPause=(n=r.autoPause)!=null?n:ti.cursor.autoPause,i.autoPauseDelay=r.autoPauseDelay||ti.cursor.autoPauseDelay,i}return r===!0?ti.cursor:r};const Pl=(r,e)=>{if(!r)return;let t=r.parentNode;(t.childNodes.length>1||t.isSameNode(e)?r:t).remove()},Rl=(r,e,t)=>{let n=e[t-1],i=Hs(`.${In}`,r);r=(n==null?void 0:n.parentNode)||r,r.insertBefore(i,n||null)};function Nl(r){return typeof r=="string"?Hs(r):r}let zl={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Ol=(r,e)=>{let n=`${`[${_o}='${r}']`} .${In}`,i=getComputedStyle(e),s=Object.entries(zl).reduce((o,[a,l])=>`${o} ${a}: var(--ti-cursor-${a}, ${l||i[a]});`,"");vo(`${n} { display: inline-block; width: 0; ${s} }`,r)};function Fl(r){return r.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let Ul=(r,e,t)=>Math.min(Math.max(e+r,0),t.length),Bl=(r,e,t)=>new Promise(n=>{let i=async()=>{await r(),n()};t.push(setTimeout(i,e||0))});var Er,To,An,yi,Pi,As,Cr,Eo,Ri,Ts,Ni,Es,zi,Cs,si,_r,Nt,Qt,Lr,Co,Tn,Si,En,bi,Dr,Lo,Ir,Pr,Do,Rr,Io,Oi,Ls,ai,vr,Cn,wi,oi,Mr,Zt,vn,Ln,Ai,Dn,Ti,Fi,Ds,zt,Xt;class Gl{constructor(e,t={}){ze(this,Er);ze(this,An);ze(this,Pi);ze(this,Cr);ze(this,Ri);ze(this,Ni);ze(this,zi);ze(this,si);ze(this,Nt);ze(this,Lr);ze(this,Tn);ze(this,En);ze(this,Dr);ze(this,Pr);ze(this,Rr);ze(this,Oi);ze(this,ai);ze(this,Cn);ze(this,oi);ze(this,Zt);ze(this,Ln);ze(this,Dn);ze(this,Fi);ze(this,zt);gt(this,"element");gt(this,"timeouts");gt(this,"cursorPosition");gt(this,"predictedCursorPosition");gt(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1,firing:!1});gt(this,"opts");gt(this,"id");gt(this,"queue");gt(this,"cursor");gt(this,"flushCallback",null);gt(this,"unfreeze",()=>{});gt(this,"is",function(e){return this.statuses[e]});ze(this,Ir,e=>{var t;this.opts.cursor=Il((t=e.cursor)!=null?t:ti.cursor),this.opts.strings=he(this,Pr,Do).call(this,xo(this.opts.strings)),this.opts=Mi(this.opts,{html:!Ve(this,Dn,Ti)&&this.opts.html,nextStringDelay:Zs(this.opts.nextStringDelay),loopDelay:Zs(this.opts.loopDelay)})});this.opts=Mi(ti,t),this.element=Nl(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=Mi({},gl),this.id=Tl(),this.queue=pl([{delay:this.opts.startDelay}]),Ve(this,Ir).call(this,t),this.cursor=he(this,Rr,Io).call(this),this.element.dataset.typeitId=this.id,vo(xl),this.opts.strings.length&&he(this,Dr,Lo).call(this)}go(){return this.statuses.started?this:(he(this,zi,Cs).call(this),this.opts.waitUntilVisible?(Al(this.element,he(this,An,yi).bind(this)),this):(he(this,An,yi).call(this),this))}destroy(e=!0){this.timeouts=Sl(this.timeouts),Bn(e)&&this.cursor&&he(this,oi,Mr).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let t in this.statuses)this.statuses[t]=!1;return this.element[he(this,si,_r).call(this)?"value":"innerHTML"]="",this}type(e,t={}){e=Bn(e);let{instant:n}=t,i=he(this,Tn,Si).call(this,t),o=Ml(e,this.opts.html).map(l=>({func:()=>he(this,ai,vr).call(this,l),char:l,delay:n||Dl(l)?0:he(this,Zt,vn).call(this),typeable:l.nodeType===Node.TEXT_NODE})),a=[i[0],{func:async()=>await this.opts.beforeString(e,this)},...o,{func:async()=>await this.opts.afterString(e,this)},i[1]];return he(this,Nt,Qt).call(this,a,t)}break(e={}){return he(this,Nt,Qt).call(this,{func:()=>he(this,ai,vr).call(this,xr("BR")),typeable:!0},e)}move(e,t={}){e=Bn(e);let n=he(this,Tn,Si).call(this,t),{instant:i,to:s}=t,o=$s({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:s,cursorPosition:Ve(this,Ln,Ai)}),a=o<0?-1:1;return this.predictedCursorPosition=Ve(this,Ln,Ai)+o,he(this,Nt,Qt).call(this,[n[0],...Yi({func:()=>he(this,Pi,As).call(this,a),delay:i?0:he(this,Zt,vn).call(this),cursorable:!0},Math.abs(o)),n[1]],t)}exec(e,t={}){let n=he(this,Tn,Si).call(this,t);return he(this,Nt,Qt).call(this,[n[0],{func:()=>e(this)},n[1]],t)}options(e,t={}){return e=Bn(e),he(this,En,bi).call(this,e),he(this,Nt,Qt).call(this,{},t)}pause(e,t={}){return he(this,Nt,Qt).call(this,{delay:Bn(e)},t)}delete(e=null,t={}){e=Bn(e);let n=he(this,Tn,Si).call(this,t),i=e,{instant:s,to:o}=t,a=this.queue.getTypeable(),l=(()=>i===null?a.length:bo(i)?i:$s({queueItems:a,selector:i,cursorPosition:Ve(this,Ln,Ai),to:o}))();return he(this,Nt,Qt).call(this,[n[0],...Yi({func:he(this,Cn,wi).bind(this),delay:s?0:he(this,Zt,vn).call(this,1),deletable:!0},l),n[1]],t)}freeze(){this.statuses.frozen=!0}flush(e=null){return this.flushCallback=e||this.flushCallback,this.statuses.firing?this:(he(this,zi,Cs).call(this),he(this,An,yi).call(this,!1).then(()=>{if(this.queue.getPendingQueueItems().length>0)return this.flush();this.flushCallback(),this.flushCallback=null}),this)}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return he(this,En,bi).call(this,e)}getElement(){return this.element}empty(e={}){return he(this,Nt,Qt).call(this,{func:he(this,Er,To).bind(this)},e)}}Er=new WeakSet,To=async function(){if(he(this,si,_r).call(this)){this.element.value="";return}Ve(this,zt,Xt).forEach(he(this,oi,Mr).bind(this))},An=new WeakSet,yi=async function(e=!0){this.statuses.started=!0,this.statuses.firing=!0;let t=n=>{this.queue.done(n,!e)};try{let n=[...this.queue.getQueue()];for(let s=0;s<n.length;s++){let[o,a]=n[s];if(!a.done){if(!a.deletable||a.deletable&&Ve(this,zt,Xt).length){let l=await he(this,Ri,Ts).call(this,s,n);yl({index:s,newIndex:l,queueItems:n,cleanUp:t}),s=l}t(o)}}if(!e)return this.statuses.firing=!1,this;if(this.statuses.completed=!0,this.statuses.firing=!1,await this.opts.afterComplete(this),!this.opts.loop)throw"";let i=this.opts.loopDelay;he(this,Ni,Es).call(this,async()=>{await he(this,Cr,Eo).call(this,i[0]),he(this,An,yi).call(this)},i[1])}catch{}return this.statuses.firing=!1,this},Pi=new WeakSet,As=async function(e){this.cursorPosition=Ul(e,this.cursorPosition,Ve(this,zt,Xt)),Rl(this.element,Ve(this,zt,Xt),this.cursorPosition)},Cr=new WeakSet,Eo=async function(e){let t=Ve(this,Ln,Ai);t&&await he(this,Pi,As).call(this,{value:t});let n=Ve(this,zt,Xt).map(i=>[Symbol(),{func:he(this,Cn,wi).bind(this),delay:he(this,Zt,vn).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let i=0;i<n.length;i++)await he(this,Ri,Ts).call(this,i,n);this.queue.reset(),this.queue.set(0,{delay:e})},Ri=new WeakSet,Ts=function(e,t){return wl({index:e,queueItems:t,wait:he(this,Ni,Es).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},Ni=new WeakSet,Es=async function(e,t,n=!1){this.statuses.frozen&&await new Promise(i=>{this.unfreeze=()=>{this.statuses.frozen=!1,i()}}),n||await this.opts.beforeStep(this),await Bl(e,t,this.timeouts),n||await this.opts.afterStep(this)},zi=new WeakSet,Cs=async function(){if(!he(this,si,_r).call(this)&&this.cursor&&this.element.appendChild(this.cursor),Ve(this,Fi,Ds)){Ol(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:t,options:n}=e;Ao({frames:t,cursor:this.cursor,options:{duration:this.opts.cursorSpeed,...n}})}},si=new WeakSet,_r=function(){return Ar(this.element)},Nt=new WeakSet,Qt=function(e,t){return this.queue.add(e),he(this,Lr,Co).call(this,t),this},Lr=new WeakSet,Co=function(e={}){let t=e.delay;t&&this.queue.add({delay:t})},Tn=new WeakSet,Si=function(e={}){return[{func:()=>he(this,En,bi).call(this,e)},{func:()=>he(this,En,bi).call(this,this.opts)}]},En=new WeakSet,bi=async function(e){this.opts=Mi(this.opts,e)},Dr=new WeakSet,Lo=function(){let e=this.opts.strings.filter(t=>!!t);e.forEach((t,n)=>{if(this.type(t),n+1===e.length)return;let i=this.opts.breakLines?[{func:()=>he(this,ai,vr).call(this,xr("BR")),typeable:!0}]:Yi({func:he(this,Cn,wi).bind(this),delay:he(this,Zt,vn).call(this,1)},this.queue.getTypeable().length);he(this,Oi,Ls).call(this,i)})},Ir=new WeakMap,Pr=new WeakSet,Do=function(e){let t=this.element.innerHTML;return t?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=t,ks(this.element),he(this,Oi,Ls).call(this,Yi({func:he(this,Cn,wi).bind(this),delay:he(this,Zt,vn).call(this,1),deletable:!0},Ve(this,zt,Xt).length)),e):Fl(t).concat(e)):e},Rr=new WeakSet,Io=function(){if(Ve(this,Dn,Ti))return null;let e=xr("span");return e.className=In,Ve(this,Fi,Ds)?(e.innerHTML=yo(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},Oi=new WeakSet,Ls=function(e){let t=this.opts.nextStringDelay;this.queue.add([{delay:t[0]},...e,{delay:t[1]}])},ai=new WeakSet,vr=function(e){Ll(this.element,e)},Cn=new WeakSet,wi=function(){!Ve(this,zt,Xt).length||(Ve(this,Dn,Ti)?this.element.value=this.element.value.slice(0,-1):he(this,oi,Mr).call(this,Ve(this,zt,Xt)[this.cursorPosition]))},oi=new WeakSet,Mr=function(e){Pl(e,this.element)},Zt=new WeakSet,vn=function(e=0){return _l(this.opts)[e]},Ln=new WeakSet,Ai=function(){var e;return(e=this.predictedCursorPosition)!=null?e:this.cursorPosition},Dn=new WeakSet,Ti=function(){return Ar(this.element)},Fi=new WeakSet,Ds=function(){return!!this.opts.cursor&&!Ve(this,Dn,Ti)},zt=new WeakSet,Xt=function(){return El(this.element)};const kl={class:"terminal"},Em=Nr({__name:"DemoEditor",setup(r){const e=Wi(null),t=Wi(!1),n=Wi(!0),[i]=ul(e),s=Wi();return hl([i,t],o=>{(o==null?void 0:o[0])&&(o==null?void 0:o[1])&&n.value===!0&&(n.value=!1,s.value&&new Gl(s.value,{speed:50,startDelay:900}).type('<br><h1 style="opacity: 0.5;">Welcome use VueHooks Plus!</h1><br /><br />',{delay:100}).type('<span class="label-code">&lt;script</span> setup lang="ts" <span class="label-code">&gt</span> <br /><br /><br />').type('&nbsp<span class="import-code">import</span> { <span class="module-code">useRequest</span> } from "<span class="export-code">vue-hooks-plus</span>" <br /> <br />',{delay:100}).type(`&nbspconst { <span class="variable-code">data</span>  } = <span class="module-code">useRequest</span>(()=><span class="module-code">getData</span>(),{
    <span class="variable-code">...options</span>
 })`).type('<br /><br /><br /><span class="label-code">&lt;script /&gt;</span>').type('<br /><br /><span class="label-code">&lt;template&gt;</span><br /><br />&nbsp<span class="label-code">&lt;div&gt; <br /></span>&nbsp&nbsp&nbspdata\uFF1A{{<span class="variable-code"> undefined </span>}} <br />&nbsp<span class="label-code">&lt;div /&gt; </span><br />').type('<br /><span class="label-code">&lt;template /&gt;</span>').move(-27).delete(11,{delay:400}).type('<span class="variable-code"> fetch API data update! </span>',{delay:400}).go())}),mo(()=>{t.value=!0}),(o,a)=>(qe(),tt("div",{id:"demo-editor",ref_key:"domRef",ref:e},[Qe("div",kl,[dl(o.$slots,"default"),Qe("div",null,[Qe("pre",{ref_key:"block",ref:s,class:"language-vue extra-class"},null,512)])])],512))}});var Hl=["NelsonYong","hongaah","Noobbbbbbb"];const Li={},Vl=r=>`https://github.com/${encodeURIComponent(r)}.png`;Hl.reduce((r,e)=>(Li[e]=Vl(e),r.push({name:e,avatar:Li[e]}),r),[]);const Wl=[{avatar:Li.NelsonYong,name:"Yong Git",github:"NelsonYong",twitter:"Yong_Git",sponsors:!0,description:"VueHooks Plus's Author",packages:["vue-hooks-plus"]},{avatar:Li.hongaah,name:"Hongaah",github:"hongaah",description:"Swiftcode's Author",functions:["useSetState","useWebSocket"]},{avatar:"https://avatars.githubusercontent.com/u/51957438?v=4",name:"XiaoDaiGua-Ray",github:"XiaoDaiGua-Ray",description:"Tring be better\uFF5E",functions:["useElementBounding","useMutationObserver"]},{avatar:Li.Noobbbbbbb,name:"Noobbbbbbb",github:"Noobbbbbbb",description:"Mysterious",functions:["useFullscreen"],functionsMap:{useFullscreen:"useFull"}}],jl="data:image/png;base64,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",Yl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY5Mjg1NjMxNzM5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5OTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTU1OC40NTIzNjQgOTUuNDE4MTgybDcuOTEyNzI3IDQuMTQyNTQ1TDg0My40MDM2MzYgMjU3Ljg2MTgxOGExMDguOTE2MzY0IDEwOC45MTYzNjQgMCAwIDEgNTQuMjI1NDU1IDg1Ljk2OTQ1NWwwLjMyNTgxOCA4LjI4NTA5MXYzMTYuNzQxODE4YzAgMzYuMDcyNzI3LTE3LjkyIDY5LjU4NTQ1NS00Ny40Mjk4MTggODkuNzg2MTgybC02Ljk4MTgxOCA0LjM3NTI3Mi0wLjEzOTYzNyAwLjA5MzA5MS0yNzcuMDM4NTQ1IDE1OC4zMDEwOTFjLTEyLjE5NDkwOSA2Ljk4MTgxOC0yNS4zNjcyNzMgMTEuNDk2NzI3LTM4LjgxODkwOSAxMy40NTE2MzdhMjkuNzg5MDkxIDI5Ljc4OTA5MSAwIDAgMS0zMS4xODU0NTUtMC4wNDY1NDYgMTA3LjUyIDEwNy41MiAwIDAgMS0zMS4zMjUwOTEtOS40OTUyNzNsLTcuNDQ3MjcyLTMuOTA5ODE4LTI3Ny4wMzg1NDYtMTU4LjMwMTA5MWExMDguOTE2MzY0IDEwOC45MTYzNjQgMCAwIDEtNTQuMjI1NDU0LTg2LjAxNmwtMC4zMjU4MTktOC4yMzg1NDVWMzUyLjExNjM2NGMwLTM2LjA3MjcyNyAxNy45Mi02OS42MzIgNDcuNDI5ODE5LTg5Ljc4NjE4Mmw2Ljk4MTgxOC00LjM3NTI3MyAwLjEzOTYzNi0wLjA5MzA5MUw0NTcuNTg4MzY0IDk5LjYwNzI3M2ExMDguODY5ODE4IDEwOC44Njk4MTggMCAwIDEgMTAwLjg2NC00LjE0MjU0NnpNMTg1LjcxNjM2NCAzNDYuMjk4MTgybC0wLjMyNTgxOSA1LjgxODE4MnYzMTYuNjk1MjcyYzAgMTUuNjg1ODE4IDcuNDQ3MjczIDMwLjI1NDU0NSAxOS44MjgzNjQgMzkuNTYzNjM3bDQuODQwNzI3IDMuMjExNjM2IDI3Mi4xOTc4MTkgMTU1LjUwODM2NHYtMzUwLjcyTDE4NS45MDI1NDUgMzQ0Ljk5NDkwOWE0OS4zMzgxODIgNDkuMzM4MTgyIDAgMCAwLTAuMTg2MTgxIDEuMzQ5ODE4eiBtNjUyLjM4MTA5MS0xLjAyNEw1NDEuNjQ5NDU1IDUxNi42NTQ1NDV2MzUwLjQ4NzI3M2wyNzIuMjQ0MzYzLTE1NS41NTQ5MDljMTMuNTQ0NzI3LTcuODY2MTgyIDIyLjQ4MTQ1NS0yMS41OTcwOTEgMjQuMzQzMjczLTM2Ljk1NzA5MWwwLjMyNTgxOC01LjgxODE4MlYzNTIuMTYyOTA5YzAtMi4zMjcyNzMtMC4xMzk2MzYtNC42NTQ1NDUtMC40NjU0NTQtNi44ODg3Mjd6IG0tMzQ0Ljk0ODM2NC0xOTcuMTY2NTQ2bC01LjkxMTI3MyAyLjg4NTgxOS0wLjA5MzA5MSAwLjA5MzA5LTI2MC41NjE0NTQgMTQ4LjgwNTgxOSAyODUuNjQ5NDU0IDE2NS4yMzYzNjMgMjg1LjMyMzYzNy0xNjUuMDUwMTgyLTI2MC43MDEwOTEtMTQ4Ljk5Mi0wLjEzOTYzNy0wLjA5MzA5YTQ5LjQ3NzgxOCA0OS40Nzc4MTggMCAwIDAtNDMuNTY2NTQ1LTIuODg1ODE5eiIgZmlsbD0iI2RiZGJkYiIgcC1pZD0iMTk5MyI+PC9wYXRoPjwvc3ZnPg==",ql="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjY5Mjg1ODU1ODcxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ5ODMiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTM2MC40NDggNDU2LjcwNGgxNjEuNzkyYzEyLjI4OCAwIDIwLjQ4IDguMTkyIDIwLjQ4IDIwLjQ4cy04LjE5MiAyMC40OC0yMC40OCAyMC40OGgtMTY3LjkzNmwtNzcuODI0IDQzOC4yNzJjLTIuMDQ4IDEwLjI0LTEyLjI4OCAxOC40MzItMjQuNTc2IDE2LjM4NC0xMC4yNC0yLjA0OC0xOC40MzItMTIuMjg4LTE2LjM4NC0yNC41NzZsNzUuNzc2LTQzMC4wOGgtMTE2LjczNmMtMTIuMjg4IDAtMjAuNDgtOC4xOTItMjAuNDgtMjAuNDhzOC4xOTItMjAuNDggMjAuNDgtMjAuNDhoMTI0LjkyOGwzNC44MTYtMTk2LjYwOGM0LjA5Ni0yMi41MjggMTQuMzM2LTUzLjI0OCAzNC44MTYtODMuOTY4IDE4LjQzMi0yNi42MjQgNDMuMDA4LTQ5LjE1MiA3MS42OC02My40ODggMzYuODY0LTE4LjQzMiA3Ny44MjQtMjYuNjI0IDExOC43ODQtMjguNjcyIDEyLjI4OCAwIDIwLjQ4IDguMTkyIDIwLjQ4IDIwLjQ4cy04LjE5MiAyMC40OC0yMC40OCAyMC40OGMtMzQuODE2IDAtNjcuNTg0IDguMTkyLTEwMC4zNTIgMjIuNTI4LTIyLjUyOCAxMi4yODgtNDMuMDA4IDI4LjY3Mi01Ny4zNDQgNTEuMi0xMC4yNCAxNC4zMzYtMTguNDMyIDMwLjcyLTIyLjUyOCA0Ny4xMDQtNC4wOTYgMTAuMjQtNC4wOTYgMTYuMzg0LTYuMTQ0IDIwLjQ4bC0zMi43NjggMTkwLjQ2NHogbTM0NC4wNjQgMjUxLjkwNGwxMTYuNzM2LTEzNy4yMTZjOC4xOTItOC4xOTIgMjAuNDgtMTAuMjQgMjguNjcyLTIuMDQ4czEwLjI0IDIwLjQ4IDIuMDQ4IDI4LjY3MmwtMTIwLjgzMiAxNDMuMzYgMTIwLjgzMiAxNDMuMzZjOC4xOTIgOC4xOTIgNi4xNDQgMjIuNTI4LTIuMDQ4IDI4LjY3Mi04LjE5MiA4LjE5Mi0yMi41MjggNi4xNDQtMjguNjcyLTIuMDQ4bC0xMTYuNzM2LTEzNy4yMTYtMTE2LjczNiAxMzcuMjE2Yy04LjE5MiA4LjE5Mi0yMC40OCAxMC4yNC0yOC42NzIgMi4wNDgtOC4xOTItOC4xOTItMTAuMjQtMjAuNDgtMi4wNDgtMjguNjcybDEyMC44MzItMTQzLjM2LTEyMC44MzItMTQzLjM2Yy04LjE5Mi04LjE5Mi02LjE0NC0yMi41MjggMi4wNDgtMjguNjcyIDguMTkyLTguMTkyIDIyLjUyOC02LjE0NCAyOC42NzIgMi4wNDhsMTE2LjczNiAxMzcuMjE2eiIgcC1pZD0iNDk4NCIgZmlsbD0iI2RiZGJkYiI+PC9wYXRoPjwvc3ZnPg==";const Ql={class:"container"},Xl=["src","alt"],Zl={class:"name"},Jl=["href"],Kl={key:1},$l=["innerHTML"],ec={flex:"~ inline gap-2",py2:"","text-2xl":""},tc=["href","aria-label"],nc=["href","aria-label"],ic=["href","title","aria-label"],rc={key:0,"bg-gray:5":"",mb2:"",p2:"",rounded:"",grid:"~ cols-[20px_1fr] gap-y-2","items-start":"",w:"5/6",mxa:""},sc={key:0,class:"code"},ac=["src"],oc={class:"code-container"},lc=["href"],cc={key:1,class:"code"},uc=["src"],hc={class:"code-container"},dc=Nr({__name:"TeamMember",props:{data:{}},setup(r){return(e,t)=>(qe(),tt("div",Ql,[Qe("img",{class:"avatar",loading:"lazy",width:"150",height:"150","m-auto":"","rounded-full":"","min-w-25":"","min-h-25":"","h-25":"","w-25":"",src:e.data.avatar,alt:`${e.data.name}'s avatar`},null,8,Xl),Qe("div",Zl,[e.data.github?(qe(),tt("a",{key:0,href:`https://github.com/${e.data.github}`,target:"_blank"},ji(e.data.name),9,Jl)):(qe(),tt("div",Kl,ji(e.data.name),1))]),Qe("div",{class:"description",innerHTML:e.data.description},null,8,$l),Qe("div",ec,[e.data.github?(qe(),tt("a",{key:0,class:"i-carbon-logo-github inline-block text-current op30 hover:op100 mya transition duration-200",href:`https://github.com/${e.data.github}`,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.data.name} on GitHub`},null,8,tc)):Un("",!0),e.data.twitter?(qe(),tt("a",{key:1,class:"i-carbon-logo-twitter inline-block text-1.3em mya text-current op30 hover:op100 transition duration-200",href:`https://twitter.com/${e.data.twitter}`,target:"_blank",rel:"noopener noreferrer","aria-label":`${e.data.name} on Twitter`},null,8,nc)):Un("",!0),e.data.sponsors?(qe(),tt("a",{key:2,class:"i-carbon-favorite-filled inline-block mya text-current op30 hover:op100 transition duration-200",href:`https://github.com/sponsors/${e.data.github}`,target:"_blank",rel:"noopener noreferrer",title:`Sponsor ${e.data.name}`,"aria-label":`Sponsor ${e.data.name}`},null,8,ic)):Un("",!0)]),e.data.functions||e.data.packages?(qe(),tt("div",rc,[e.data.functions?(qe(),tt("div",sc,[Qe("img",{class:"icon",src:br(ql),alt:""},null,8,ac),Qe("div",oc,[(qe(!0),tt(bs,null,ws(e.data.functions,n=>{var i,s,o;return qe(),tt("a",{key:n,href:`/docs/hooks/${(o=(s=(i=e.data)==null?void 0:i.functionsMap)==null?void 0:s[n])!=null?o:n}/`,target:"_blank"},[Qe("code",null,ji(n),1)],8,lc)}),128))])])):Un("",!0),e.data.packages?(qe(),tt("div",cc,[Qe("img",{class:"icon",src:br(Yl),alt:""},null,8,uc),Qe("div",hc,[(qe(!0),tt(bs,null,ws(e.data.packages,n=>(qe(),tt("a",{key:n,href:""},[Qe("code",null,ji(n),1)]))),128))])])):Un("",!0)])):Un("",!0)]))}});var fc=zr(dc,[["__scopeId","data-v-5c70fdfa"]]);const pc={class:"container"},mc={class:"main"},gc={class:"grid"},xc=Nr({__name:"HomeTeam",setup(r){return(e,t)=>(qe(),tt("div",pc,[Qe("div",mc,[t[0]||(t[0]=Qe("div",null,[Qe("h2",{class:"name"}," Meet The Team ")],-1)),Qe("div",gc,[(qe(!0),tt(bs,null,ws(br(Wl),n=>(qe(),fl(fc,{key:n.github,data:n},null,8,["data"]))),128))])])]))}});var Cm=zr(xc,[["__scopeId","data-v-9b0a6856"]]);const _c={class:"container"},vc=["src"],Mc=Nr({__name:"Icon",setup(r){return(e,t)=>(qe(),tt("div",_c,[t[0]||(t[0]=Qe("div",{class:"img"},null,-1)),Qe("img",{src:br(jl),alt:"vue-hooks-plus"},null,8,vc)]))}});var Lm=zr(Mc,[["__scopeId","data-v-23f2a419"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="147",yc=0,ta=1,Sc=2,Po=1,bc=2,Ei=3,li=0,Ct=1,ln=2,un=0,ii=1,na=2,ia=3,ra=4,wc=5,ei=100,Ac=101,Tc=102,sa=103,aa=104,Ec=200,Cc=201,Lc=202,Dc=203,Ro=204,No=205,Ic=206,Pc=207,Rc=208,Nc=209,zc=210,Oc=0,Fc=1,Uc=2,Is=3,Bc=4,Gc=5,kc=6,Hc=7,zo=0,Vc=1,Wc=2,Kt=0,jc=1,Yc=2,qc=3,Qc=4,Xc=5,Oo=300,ci=301,ui=302,Ps=303,Rs=304,Or=306,Ns=1e3,Ot=1001,zs=1002,dt=1003,oa=1004,la=1005,Tt=1006,Zc=1007,Fr=1008,zn=1009,Jc=1010,Kc=1011,Fo=1012,$c=1013,bn=1014,wn=1015,Di=1016,eu=1017,tu=1018,ri=1020,nu=1021,iu=1022,Ft=1023,ru=1024,su=1025,Pn=1026,hi=1027,au=1028,ou=1029,lu=1030,cu=1031,uu=1033,Wr=33776,jr=33777,Yr=33778,qr=33779,ca=35840,ua=35841,ha=35842,da=35843,hu=36196,fa=37492,pa=37496,ma=37808,ga=37809,xa=37810,_a=37811,va=37812,Ma=37813,ya=37814,Sa=37815,ba=37816,wa=37817,Aa=37818,Ta=37819,Ea=37820,Ca=37821,La=36492,On=3e3,Ge=3001,du=3200,fu=3201,pu=0,mu=1,Ut="srgb",Ii="srgb-linear",Qr=7680,gu=519,Da=35044,Ia="300 es",Os=1035;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const st=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,Pa=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function xu(r,e){return(r%e+e)%e}function Zr(r,e,t){return(1-t)*r+t*e}function Ra(r){return(r&r-1)===0&&r!==0}function Fs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],p=i[0],u=i[3],_=i[6],A=i[1],b=i[4],y=i[7],w=i[2],L=i[5],N=i[8];return s[0]=o*p+a*A+l*w,s[3]=o*u+a*b+l*L,s[6]=o*_+a*y+l*N,s[1]=c*p+h*A+d*w,s[4]=c*u+h*b+d*L,s[7]=c*_+h*y+d*N,s[2]=f*p+m*A+g*w,s[5]=f*u+m*b+g*L,s[8]=f*_+m*y+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new yt;function Uo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Kr={[Ut]:{[Ii]:Rn},[Ii]:{[Ut]:yr}},ut={legacyMode:!0,get workingColorSpace(){return Ii},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Kr[e]&&Kr[e][t]!==void 0){const n=Kr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ye={r:0,g:0,b:0},It={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function $r(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Xi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=xu(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$r(o,s,e+1/3),this.g=$r(o,s,e),this.b=$r(o,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ut.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ut.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ut.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ut){const n=Bo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ut.fromWorkingColorSpace(Xi(this,Ye),e),Mt(Ye.r*255,0,255)<<16^Mt(Ye.g*255,0,255)<<8^Mt(Ye.b*255,0,255)<<0}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Xi(this,Ye),t);const n=Ye.r,i=Ye.g,s=Ye.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Xi(this,Ye),t),e.r=Ye.r,e.g=Ye.g,e.b=Ye.b,e}getStyle(e=Ut){return ut.fromWorkingColorSpace(Xi(this,Ye),e),e!==Ut?`color(${e} ${Ye.r} ${Ye.g} ${Ye.b})`:`rgb(${Ye.r*255|0},${Ye.g*255|0},${Ye.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(It),It.h+=e,It.s+=t,It.l+=n,this.setHSL(It.h,It.s,It.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(It),e.getHSL(Qi);const n=Zr(It.h,Qi.h,t),i=Zr(It.s,Qi.s,t),s=Zr(It.l,Qi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Bo;let Gn;class Go{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=Tr("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Rn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ko{constructor(e=null){this.isSource=!0,this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(es(i[o].image)):s.push(es(i[o]))}else s=es(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function es(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Go.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _u=0;class St extends fi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Ot,i=Ot,s=Tt,o=Fr,a=Ft,l=zn,c=St.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ui(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Oo;St.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],p=l[2],u=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-p)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+p)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(m+1)/2,w=(_+1)/2,L=(h+f)/4,N=(d+p)/4,x=(g+u)/4;return b>y&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=L/n,s=N/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=L/i,s=x/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=N/s,i=x/s),this.set(n,i,s,t),this}let A=Math.sqrt((u-g)*(u-g)+(d-p)*(d-p)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(u-g)/A,this.y=(d-p)/A,this.z=(f-h)/A,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fn extends fi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vu extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==f||c!==m||h!==g){let u=1-a;const _=l*f+c*m+h*g+d*p,A=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const w=Math.sqrt(b),L=Math.atan2(w,_*A);u=Math.sin(u*L)/w,a=Math.sin(a*L)/w}const y=a*A;if(l=l*u+f*y,c=c*u+m*y,h=h*u+g*y,d=d*u+p*y,u===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,d=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+h*-a-d*-o,this.y=h*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ts=new R,Na=new Bi;class Gi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],f=e[l+2];h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>s&&(s=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),f=e.getZ(l);h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>s&&(s=h),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)gn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Zi.subVectors(this.max,gi),kn.subVectors(e.a,gi),Hn.subVectors(e.b,gi),Vn.subVectors(e.c,gi),en.subVectors(Hn,kn),tn.subVectors(Vn,Hn),xn.subVectors(kn,Vn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-xn.z,xn.y,en.z,0,-en.x,tn.z,0,-tn.x,xn.z,0,-xn.x,-en.y,en.x,0,-tn.y,tn.x,0,-xn.y,xn.x,0];return!is(t,kn,Hn,Vn,Zi)||(t=[1,0,0,0,1,0,0,0,1],!is(t,kn,Hn,Vn,Zi))?!1:(Ji.crossVectors(en,tn),t=[Ji.x,Ji.y,Ji.z],is(t,kn,Hn,Vn,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vt=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,ns=new Gi,kn=new R,Hn=new R,Vn=new R,en=new R,tn=new R,xn=new R,gi=new R,Zi=new R,Ji=new R,_n=new R;function is(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_n.fromArray(r,s);const a=i.x*Math.abs(_n.x)+i.y*Math.abs(_n.y)+i.z*Math.abs(_n.z),l=e.dot(_n),c=t.dot(_n),h=n.dot(_n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Mu=new Gi,xi=new R,rs=new R;class Ur{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(rs)),this.expandByPoint(xi.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wt=new R,ss=new R,Ki=new R,nn=new R,as=new R,$i=new R,os=new R;class Vo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.direction).multiplyScalar(t).add(this.origin),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ss.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(ss);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ki),a=nn.dot(this.direction),l=-nn.dot(Ki),c=nn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const p=1/h;d*=p,f*=p,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Ki).multiplyScalar(f).add(ss),m}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);const n=Wt.dot(this.direction),i=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,i,s){as.subVectors(t,e),$i.subVectors(n,e),os.crossVectors(as,$i);let o=this.direction.dot(os),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nn.subVectors(this.origin,e);const l=a*this.direction.dot($i.crossVectors(nn,$i));if(l<0)return null;const c=a*this.direction.dot(as.cross(nn));if(c<0||l+c>o)return null;const h=-a*nn.dot(os);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,h,d,f,m,g,p,u){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wn.setFromMatrixColumn(e,0).length(),s=1/Wn.setFromMatrixColumn(e,1).length(),o=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,p=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,p=c*d;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,p=c*d;t[0]=f-p*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,p=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+p,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yu,e,Su)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),rn.crossVectors(n,_t),rn.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),rn.crossVectors(n,_t)),rn.normalize(),er.crossVectors(_t,rn),i[0]=rn.x,i[4]=er.x,i[8]=_t.x,i[1]=rn.y,i[5]=er.y,i[9]=_t.y,i[2]=rn.z,i[6]=er.z,i[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],p=n[6],u=n[10],_=n[14],A=n[3],b=n[7],y=n[11],w=n[15],L=i[0],N=i[4],x=i[8],T=i[12],I=i[1],Y=i[5],ie=i[9],H=i[13],P=i[2],j=i[6],X=i[10],J=i[14],W=i[3],K=i[7],q=i[11],B=i[15];return s[0]=o*L+a*I+l*P+c*W,s[4]=o*N+a*Y+l*j+c*K,s[8]=o*x+a*ie+l*X+c*q,s[12]=o*T+a*H+l*J+c*B,s[1]=h*L+d*I+f*P+m*W,s[5]=h*N+d*Y+f*j+m*K,s[9]=h*x+d*ie+f*X+m*q,s[13]=h*T+d*H+f*J+m*B,s[2]=g*L+p*I+u*P+_*W,s[6]=g*N+p*Y+u*j+_*K,s[10]=g*x+p*ie+u*X+_*q,s[14]=g*T+p*H+u*J+_*B,s[3]=A*L+b*I+y*P+w*W,s[7]=A*N+b*Y+y*j+w*K,s[11]=A*x+b*ie+y*X+w*q,s[15]=A*T+b*H+y*J+w*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],p=e[7],u=e[11],_=e[15];return g*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*m-n*l*m)+p*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*h-s*l*h)+u*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*h-n*c*h)+_*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],p=e[13],u=e[14],_=e[15],A=d*u*c-p*f*c+p*l*m-a*u*m-d*l*_+a*f*_,b=g*f*c-h*u*c-g*l*m+o*u*m+h*l*_-o*f*_,y=h*p*c-g*d*c+g*a*m-o*p*m-h*a*_+o*d*_,w=g*d*l-h*p*l-g*a*f+o*p*f+h*a*u-o*d*u,L=t*A+n*b+i*y+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=A*N,e[1]=(p*f*s-d*u*s-p*i*m+n*u*m+d*i*_-n*f*_)*N,e[2]=(a*u*s-p*l*s+p*i*c-n*u*c-a*i*_+n*l*_)*N,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*m-n*l*m)*N,e[4]=b*N,e[5]=(h*u*s-g*f*s+g*i*m-t*u*m-h*i*_+t*f*_)*N,e[6]=(g*l*s-o*u*s-g*i*c+t*u*c+o*i*_-t*l*_)*N,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*m+t*l*m)*N,e[8]=y*N,e[9]=(g*d*s-h*p*s-g*n*m+t*p*m+h*n*_-t*d*_)*N,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*_+t*a*_)*N,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*m-t*a*m)*N,e[12]=w*N,e[13]=(h*p*i-g*d*i+g*n*f-t*p*f-h*n*u+t*d*u)*N,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*u-t*a*u)*N,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,g=s*d,p=o*h,u=o*d,_=a*d,A=l*c,b=l*h,y=l*d,w=n.x,L=n.y,N=n.z;return i[0]=(1-(p+_))*w,i[1]=(m+y)*w,i[2]=(g-b)*w,i[3]=0,i[4]=(m-y)*L,i[5]=(1-(f+_))*L,i[6]=(u+A)*L,i[7]=0,i[8]=(g+b)*N,i[9]=(u-A)*N,i[10]=(1-(f+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wn.set(i[0],i[1],i[2]).length();const o=Wn.set(i[4],i[5],i[6]).length(),a=Wn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pt.copy(this);const c=1/s,h=1/o,d=1/a;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=h,Pt.elements[5]*=h,Pt.elements[6]*=h,Pt.elements[8]*=d,Pt.elements[9]*=d,Pt.elements[10]*=d,t.setFromRotationMatrix(Pt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),d=(t+e)*l,f=(n+i)*c,m=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new R,Pt=new nt,yu=new R(0,0,0),Su=new R(1,1,1),rn=new R,er=new R,_t=new R,za=new nt,Oa=new Bi;class ki{constructor(e=0,t=0,n=0,i=ki.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ki.DefaultOrder="XYZ";ki.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Fa=new R,jn=new Bi,jt=new nt,tr=new R,_i=new R,wu=new R,Au=new Bi,Ua=new R(1,0,0),Ba=new R(0,1,0),Ga=new R(0,0,1),Tu={type:"added"},ka={type:"removed"};class ft extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DefaultUp.clone();const e=new R,t=new ki,n=new Bi,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new yt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DefaultMatrixWorldAutoUpdate,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(_i,tr,this.up):jt.lookAt(tr,_i,this.up),this.quaternion.setFromRotationMatrix(jt),i&&(jt.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(jt),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ka)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ka)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DefaultUp=new R(0,1,0);ft.DefaultMatrixAutoUpdate=!0;ft.DefaultMatrixWorldAutoUpdate=!0;const Rt=new R,Yt=new R,ls=new R,qt=new R,Yn=new R,qn=new R,Ha=new R,cs=new R,us=new R,hs=new R;class Jt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rt.subVectors(e,t),i.cross(Rt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rt.subVectors(i,t),Yt.subVectors(n,t),ls.subVectors(e,t);const o=Rt.dot(Rt),a=Rt.dot(Yt),l=Rt.dot(ls),c=Yt.dot(Yt),h=Yt.dot(ls),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qt),qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,qt),l.set(0,0),l.addScaledVector(s,qt.x),l.addScaledVector(o,qt.y),l.addScaledVector(a,qt.z),l}static isFrontFacing(e,t,n,i){return Rt.subVectors(n,t),Yt.subVectors(e,t),Rt.cross(Yt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Rt.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Jt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yn.subVectors(i,n),qn.subVectors(s,n),cs.subVectors(e,n);const l=Yn.dot(cs),c=qn.dot(cs);if(l<=0&&c<=0)return t.copy(n);us.subVectors(e,i);const h=Yn.dot(us),d=qn.dot(us);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Yn,o);hs.subVectors(e,s);const m=Yn.dot(hs),g=qn.dot(hs);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qn,a);const u=h*g-m*d;if(u<=0&&d-h>=0&&m-g>=0)return Ha.subVectors(s,i),a=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(Ha,a);const _=1/(u+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(Yn,o).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Eu=0;class Hi extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ii,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ro,this.blendDst=No,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jo extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const We=new R,nr=new Oe;class Lt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Da,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Yo extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qo extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nn extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cu=0;const At=new nt,ds=new ft,Qn=new R,vt=new Gi,vi=new Gi,et=new R;class $t extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?qo:Yo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return ds.lookAt(e),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vt.setFromBufferAttribute(s),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(et.addVectors(vt.min,vi.min),vt.expandByPoint(et),et.addVectors(vt.max,vi.max),vt.expandByPoint(et)):(vt.expandByPoint(vi.min),vt.expandByPoint(vi.max))}vt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)et.fromBufferAttribute(a,c),l&&(Qn.fromBufferAttribute(e,c),et.add(Qn)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<a;I++)c[I]=new R,h[I]=new R;const d=new R,f=new R,m=new R,g=new Oe,p=new Oe,u=new Oe,_=new R,A=new R;function b(I,Y,ie){d.fromArray(i,I*3),f.fromArray(i,Y*3),m.fromArray(i,ie*3),g.fromArray(o,I*2),p.fromArray(o,Y*2),u.fromArray(o,ie*2),f.sub(d),m.sub(d),p.sub(g),u.sub(g);const H=1/(p.x*u.y-u.x*p.y);!isFinite(H)||(_.copy(f).multiplyScalar(u.y).addScaledVector(m,-p.y).multiplyScalar(H),A.copy(m).multiplyScalar(p.x).addScaledVector(f,-u.x).multiplyScalar(H),c[I].add(_),c[Y].add(_),c[ie].add(_),h[I].add(A),h[Y].add(A),h[ie].add(A))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,Y=y.length;I<Y;++I){const ie=y[I],H=ie.start,P=ie.count;for(let j=H,X=H+P;j<X;j+=3)b(n[j+0],n[j+1],n[j+2])}const w=new R,L=new R,N=new R,x=new R;function T(I){N.fromArray(s,I*3),x.copy(N);const Y=c[I];w.copy(Y),w.sub(N.multiplyScalar(N.dot(Y))).normalize(),L.crossVectors(x,Y);const H=L.dot(h[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=H}for(let I=0,Y=y.length;I<Y;++I){const ie=y[I],H=ie.start,P=ie.count;for(let j=H,X=H+P;j<X;j+=3)T(n[j+0]),T(n[j+1]),T(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),u=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,u),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,u),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,u=l.length;p<u;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new Lt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new nt,Xn=new Vo,fs=new Ur,sn=new R,an=new R,on=new R,ps=new R,ms=new R,gs=new R,ir=new R,rr=new R,sr=new R,ar=new Oe,or=new Oe,lr=new Oe,xs=new R,cr=new R;class cn extends ft{constructor(e=new $t,t=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),e.ray.intersectsSphere(fs)===!1)||(Va.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Va),n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const _=m[p],A=i[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=b,L=y;w<L;w+=3){const N=a.getX(w),x=a.getX(w+1),T=a.getX(w+2);o=ur(this,A,e,Xn,l,c,h,d,f,N,x,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),u=Math.min(a.count,g.start+g.count);for(let _=p,A=u;_<A;_+=3){const b=a.getX(_),y=a.getX(_+1),w=a.getX(_+2);o=ur(this,i,e,Xn,l,c,h,d,f,b,y,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const _=m[p],A=i[_.materialIndex],b=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=b,L=y;w<L;w+=3){const N=w,x=w+1,T=w+2;o=ur(this,A,e,Xn,l,c,h,d,f,N,x,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),u=Math.min(l.count,g.start+g.count);for(let _=p,A=u;_<A;_+=3){const b=_,y=_+1,w=_+2;o=ur(this,i,e,Xn,l,c,h,d,f,b,y,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Lu(r,e,t,n,i,s,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==ln,a),l===null)return null;cr.copy(a),cr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(cr);return c<t.near||c>t.far?null:{distance:c,point:cr.clone(),object:r}}function ur(r,e,t,n,i,s,o,a,l,c,h,d){sn.fromBufferAttribute(i,c),an.fromBufferAttribute(i,h),on.fromBufferAttribute(i,d);const f=r.morphTargetInfluences;if(s&&f){ir.set(0,0,0),rr.set(0,0,0),sr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const u=f[g],_=s[g];u!==0&&(ps.fromBufferAttribute(_,c),ms.fromBufferAttribute(_,h),gs.fromBufferAttribute(_,d),o?(ir.addScaledVector(ps,u),rr.addScaledVector(ms,u),sr.addScaledVector(gs,u)):(ir.addScaledVector(ps.sub(sn),u),rr.addScaledVector(ms.sub(an),u),sr.addScaledVector(gs.sub(on),u)))}sn.add(ir),an.add(rr),on.add(sr)}r.isSkinnedMesh&&(r.boneTransform(c,sn),r.boneTransform(h,an),r.boneTransform(d,on));const m=Lu(r,e,t,n,sn,an,on,xs);if(m){a&&(ar.fromBufferAttribute(a,c),or.fromBufferAttribute(a,h),lr.fromBufferAttribute(a,d),m.uv=Jt.getUV(xs,sn,an,on,ar,or,lr,new Oe)),l&&(ar.fromBufferAttribute(l,c),or.fromBufferAttribute(l,h),lr.fromBufferAttribute(l,d),m.uv2=Jt.getUV(xs,sn,an,on,ar,or,lr,new Oe));const g={a:c,b:h,c:d,normal:new R,materialIndex:0};Jt.getNormal(sn,an,on,g.normal),m.face=g}return m}class Vi extends $t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(d,2));function g(p,u,_,A,b,y,w,L,N,x,T){const I=y/N,Y=w/x,ie=y/2,H=w/2,P=L/2,j=N+1,X=x+1;let J=0,W=0;const K=new R;for(let q=0;q<X;q++){const B=q*Y-H;for(let z=0;z<j;z++){const ne=z*I-ie;K[p]=ne*A,K[u]=B*b,K[_]=P,c.push(K.x,K.y,K.z),K[p]=0,K[u]=0,K[_]=L>0?1:-1,h.push(K.x,K.y,K.z),d.push(z/N),d.push(1-q/x),J+=1}}for(let q=0;q<x;q++)for(let B=0;B<N;B++){const z=f+B+j*q,ne=f+B+j*(q+1),$=f+(B+1)+j*(q+1),re=f+(B+1)+j*q;l.push(z,ne,re),l.push(ne,$,re),W+=6}a.addGroup(m,W,T),m+=W,f+=J}}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(r){const e={};for(let t=0;t<r.length;t++){const n=di(r[t]);for(const i in n)e[i]=n[i]}return e}function Du(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Qo(r){return r.getRenderTarget()===null&&r.outputEncoding===Ge?Ut:Ii}const Iu={clone:di,merge:ht};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xo extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends Xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,Jn=1;class Nu extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Et(Zn,Jn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Et(Zn,Jn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Et(Zn,Jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Et(Zn,Jn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Et(Zn,Jn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Et(Zn,Jn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Kt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zo extends St{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zu extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vi(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:un});s.uniforms.tEquirect.value=t;const o=new cn(i,s),a=t.minFilter;return t.minFilter===Fr&&(t.minFilter=Tt),new Nu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const _s=new R,Ou=new R,Fu=new yt;class Mn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_s.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(_s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fu.getNormalMatrix(e),i=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Ur,hr=new R;class Jo{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,s=new Mn,o=new Mn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7],f=n[8],m=n[9],g=n[10],p=n[11],u=n[12],_=n[13],A=n[14],b=n[15];return t[0].setComponents(a-i,d-l,p-f,b-u).normalize(),t[1].setComponents(a+i,d+l,p+f,b+u).normalize(),t[2].setComponents(a+s,d+c,p+m,b+_).normalize(),t[3].setComponents(a-s,d-c,p-m,b-_).normalize(),t[4].setComponents(a-o,d-h,p-g,b-A).normalize(),t[5].setComponents(a+o,d+h,p+g,b+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,m=h.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Ws extends $t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],p=[],u=[];for(let _=0;_<h;_++){const A=_*f-o;for(let b=0;b<c;b++){const y=b*d-s;g.push(y,-A,0),p.push(0,0,1),u.push(b/a),u.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<a;A++){const b=A+c*_,y=A+c*(_+1),w=A+1+c*(_+1),L=A+1+c*_;m.push(b,y,L),m.push(y,w,L)}this.setIndex(m),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(p,3)),this.setAttribute("uv",new Nn(u,2))}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju="vec3 transformed = vec3( position );",Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rh=`#define PI 3.141592653589793
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
}`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ah=`vec3 transformedNormal = objectNormal;
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
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
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
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
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
#endif`,Ch=`#if defined( USE_ENVMAP )
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rh=`PhysicalMaterial material;
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
#endif`,Nh=`struct PhysicalMaterial {
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
}`,zh=`
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
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
#endif`,Jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,$h=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ed=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Id=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Pd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`#include <common>
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
}`,Wd=`#if DEPTH_PACKING == 3200
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
}`,jd=`#define DISTANCE
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
}`,Yd=`#define DISTANCE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xd=`uniform float scale;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,Kd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,sf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,uf=`#define TOON
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
}`,hf=`#define TOON
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
}`,df=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,xf=`uniform vec3 diffuse;
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
}`,Se={alphamap_fragment:Bu,alphamap_pars_fragment:Gu,alphatest_fragment:ku,alphatest_pars_fragment:Hu,aomap_fragment:Vu,aomap_pars_fragment:Wu,begin_vertex:ju,beginnormal_vertex:Yu,bsdfs:qu,iridescence_fragment:Qu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:$u,color_fragment:eh,color_pars_fragment:th,color_pars_vertex:nh,color_vertex:ih,common:rh,cube_uv_reflection_fragment:sh,defaultnormal_vertex:ah,displacementmap_pars_vertex:oh,displacementmap_vertex:lh,emissivemap_fragment:ch,emissivemap_pars_fragment:uh,encodings_fragment:hh,encodings_pars_fragment:dh,envmap_fragment:fh,envmap_common_pars_fragment:ph,envmap_pars_fragment:mh,envmap_pars_vertex:gh,envmap_physical_pars_fragment:Ch,envmap_vertex:xh,fog_vertex:_h,fog_pars_vertex:vh,fog_fragment:Mh,fog_pars_fragment:yh,gradientmap_pars_fragment:Sh,lightmap_fragment:bh,lightmap_pars_fragment:wh,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Th,lights_pars_begin:Eh,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Ph,lights_physical_fragment:Rh,lights_physical_pars_fragment:Nh,lights_fragment_begin:zh,lights_fragment_maps:Oh,lights_fragment_end:Fh,logdepthbuf_fragment:Uh,logdepthbuf_pars_fragment:Bh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:kh,map_fragment:Hh,map_pars_fragment:Vh,map_particle_fragment:Wh,map_particle_pars_fragment:jh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:qh,morphcolor_vertex:Qh,morphnormal_vertex:Xh,morphtarget_pars_vertex:Zh,morphtarget_vertex:Jh,normal_fragment_begin:Kh,normal_fragment_maps:$h,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,output_fragment:ld,packing:cd,premultiplied_alpha_fragment:ud,project_vertex:hd,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:xd,shadowmap_vertex:_d,shadowmask_pars_fragment:vd,skinbase_vertex:Md,skinning_pars_vertex:yd,skinning_vertex:Sd,skinnormal_vertex:bd,specularmap_fragment:wd,specularmap_pars_fragment:Ad,tonemapping_fragment:Td,tonemapping_pars_fragment:Ed,transmission_fragment:Cd,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Id,uv_vertex:Pd,uv2_pars_fragment:Rd,uv2_pars_vertex:Nd,uv2_vertex:zd,worldpos_vertex:Od,background_vert:Fd,background_frag:Ud,backgroundCube_vert:Bd,backgroundCube_frag:Gd,cube_vert:kd,cube_frag:Hd,depth_vert:Vd,depth_frag:Wd,distanceRGBA_vert:jd,distanceRGBA_frag:Yd,equirect_vert:qd,equirect_frag:Qd,linedashed_vert:Xd,linedashed_frag:Zd,meshbasic_vert:Jd,meshbasic_frag:Kd,meshlambert_vert:$d,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:uf,meshtoon_frag:hf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:xf},te={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},Bt={basic:{uniforms:ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ht([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ht([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ht([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ht([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ht([te.points,te.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ht([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ht([te.common,te.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ht([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ht([te.sprite,te.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ht([te.common,te.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ht([te.lights,te.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Bt.physical={uniforms:ht([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const dr={r:0,b:0,g:0};function _f(r,e,t,n,i,s,o){const a=new Fe(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function g(u,_){let A=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b));const y=r.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(b=null),b===null?p(a,l):b&&b.isColor&&(p(b,1),A=!0),(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Or)?(h===void 0&&(h=new cn(new Vi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:di(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(d!==b||f!==b.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,m=r.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new cn(new Ws(2,2),new hn({name:"BackgroundMaterial",uniforms:di(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,m=r.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function p(u,_){u.getRGB(dr,Qo(r)),n.buffers.color.setClear(dr.r,dr.g,dr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(u,_=1){a.set(u),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,p(a,l)},render:g}}function vf(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=u(null);let c=l,h=!1;function d(P,j,X,J,W){let K=!1;if(o){const q=p(J,X,j);c!==q&&(c=q,m(c.object)),K=_(P,J,X,W),K&&A(P,J,X,W)}else{const q=j.wireframe===!0;(c.geometry!==J.id||c.program!==X.id||c.wireframe!==q)&&(c.geometry=J.id,c.program=X.id,c.wireframe=q,K=!0)}W!==null&&t.update(W,34963),(K||h)&&(h=!1,x(P,j,X,J),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,j,X){const J=X.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let K=W[j.id];K===void 0&&(K={},W[j.id]=K);let q=K[J];return q===void 0&&(q=u(f()),K[J]=q),q}function u(P){const j=[],X=[],J=[];for(let W=0;W<i;W++)j[W]=0,X[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:X,attributeDivisors:J,object:P,attributes:{},index:null}}function _(P,j,X,J){const W=c.attributes,K=j.attributes;let q=0;const B=X.getAttributes();for(const z in B)if(B[z].location>=0){const $=W[z];let re=K[z];if(re===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;q++}return c.attributesNum!==q||c.index!==J}function A(P,j,X,J){const W={},K=j.attributes;let q=0;const B=X.getAttributes();for(const z in B)if(B[z].location>=0){let $=K[z];$===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),W[z]=re,q++}c.attributes=W,c.attributesNum=q,c.index=J}function b(){const P=c.newAttributes;for(let j=0,X=P.length;j<X;j++)P[j]=0}function y(P){w(P,0)}function w(P,j){const X=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;X[P]=1,J[P]===0&&(r.enableVertexAttribArray(P),J[P]=1),W[P]!==j&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,j),W[P]=j)}function L(){const P=c.newAttributes,j=c.enabledAttributes;for(let X=0,J=j.length;X<J;X++)j[X]!==P[X]&&(r.disableVertexAttribArray(X),j[X]=0)}function N(P,j,X,J,W,K){n.isWebGL2===!0&&(X===5124||X===5125)?r.vertexAttribIPointer(P,j,X,W,K):r.vertexAttribPointer(P,j,X,J,W,K)}function x(P,j,X,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const W=J.attributes,K=X.getAttributes(),q=j.defaultAttributeValues;for(const B in K){const z=K[B];if(z.location>=0){let ne=W[B];if(ne===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const $=ne.normalized,re=ne.itemSize,k=t.get(ne);if(k===void 0)continue;const Le=k.buffer,ce=k.type,ve=k.bytesPerElement;if(ne.isInterleavedBufferAttribute){const le=ne.data,Re=le.stride,be=ne.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<z.locationSize;_e++)w(z.location+_e,le.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<z.locationSize;_e++)y(z.location+_e);r.bindBuffer(34962,Le);for(let _e=0;_e<z.locationSize;_e++)N(z.location+_e,re/z.locationSize,ce,$,Re*ve,(be+re/z.locationSize*_e)*ve)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)w(z.location+le,ne.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<z.locationSize;le++)y(z.location+le);r.bindBuffer(34962,Le);for(let le=0;le<z.locationSize;le++)N(z.location+le,re/z.locationSize,ce,$,re*ve,re/z.locationSize*le*ve)}}else if(q!==void 0){const $=q[B];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(z.location,$);break;case 3:r.vertexAttrib3fv(z.location,$);break;case 4:r.vertexAttrib4fv(z.location,$);break;default:r.vertexAttrib1fv(z.location,$)}}}}L()}function T(){ie();for(const P in a){const j=a[P];for(const X in j){const J=j[X];for(const W in J)g(J[W].object),delete J[W];delete j[X]}delete a[P]}}function I(P){if(a[P.id]===void 0)return;const j=a[P.id];for(const X in j){const J=j[X];for(const W in J)g(J[W].object),delete J[W];delete j[X]}delete a[P.id]}function Y(P){for(const j in a){const X=a[j];if(X[P.id]===void 0)continue;const J=X[P.id];for(const W in J)g(J[W].object),delete J[W];delete X[P.id]}}function ie(){H(),h=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:H,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:Y,initAttributes:b,enableAttribute:y,disableUnusedAttributes:L}}function Mf(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function yf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),u=r.getParameter(36347),_=r.getParameter(36348),A=r.getParameter(36349),b=f>0,y=o||e.has("OES_texture_float"),w=b&&y,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:L}}function Sf(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Mn,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const g=d.length!==0||f||n!==0||i;return i=f,t=h(d,m,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,f,m){const g=d.clippingPlanes,p=d.clipIntersection,u=d.clipShadows,_=r.get(d);if(!i||g===null||g.length===0||s&&!u)s?h(null):c();else{const A=s?0:n,b=A*4;let y=_.clippingState||null;l.value=y,y=h(g,f,b,m);for(let w=0;w!==b;++w)y[w]=t[w];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const p=d!==null?d.length:0;let u=null;if(p!==0){if(u=l.value,g!==!0||u===null){const _=m+p*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(u===null||u.length<_)&&(u=new Float32Array(_));for(let b=0,y=m;b!==p;++b,y+=4)o.copy(d[b]).applyMatrix4(A,a),o.normal.toArray(u,y),u[y+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function bf(r){let e=new WeakMap;function t(o,a){return a===Ps?o.mapping=ci:a===Rs&&(o.mapping=ui),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ps||a===Rs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zu(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wf extends Xo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Wa=[.125,.215,.35,.446,.526,.582],Sn=20,vs=new wf,ja=new Fe;let Ms=null;const yn=(1+Math.sqrt(5))/2,$n=1/yn,Ya=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,yn,$n),new R(0,yn,-$n),new R($n,0,yn),new R(-$n,0,yn),new R(yn,$n,0),new R(-yn,$n,0)];class qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ms=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ms),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ms=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Di,format:Ft,encoding:On,depthBuffer:!1},i=Qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Af(s)),this._blurMaterial=Tf(s,e,t)}return i}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,i){const a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ja),h.toneMapping=Kt,h.autoClear=!1;const m=new jo({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new cn(new Vi,m);let p=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,p=!0):(m.color.copy(ja),p=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):A===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const b=this._cubeSize;fr(i,A*b,_>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ya[(i-1)%Ya.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new cn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Sn-1),p=s/g,u=isFinite(s)?1+Math.floor(h*p):Sn;u>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Sn}`);const _=[];let A=0;for(let N=0;N<Sn;++N){const x=N/p,T=Math.exp(-x*x/2);_.push(T),N===0?A+=T:N<u&&(A+=2*T)}for(let N=0;N<_.length;N++)_[N]=_[N]/A;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[i],w=3*y*(i>b-ni?i-b+ni:0),L=4*(this._cubeSize-y);fr(t,w,L,3*y,2*y),l.setRenderTarget(t),l.render(d,vs)}}function Af(r){const e=[],t=[],n=[];let i=r;const s=r-ni+1+Wa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ni?l=Wa[o-r+ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,u=2,_=1,A=new Float32Array(p*g*m),b=new Float32Array(u*g*m),y=new Float32Array(_*g*m);for(let L=0;L<m;L++){const N=L%3*2/3-1,x=L>2?0:-1,T=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];A.set(T,p*g*L),b.set(f,u*g*L);const I=[L,L,L,L,L,L];y.set(I,_*g*L)}const w=new $t;w.setAttribute("position",new Lt(A,p)),w.setAttribute("uv",new Lt(b,u)),w.setAttribute("faceIndex",new Lt(y,_)),e.push(w),i>ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qa(r,e,t){const n=new Fn(r,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Tf(r,e,t){const n=new Float32Array(Sn),i=new R(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:js(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Xa(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:js(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Za(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function js(){return`

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
	`}function Ef(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ps||l===Rs,h=l===ci||l===ui;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qa(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new qa(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lf(r,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let u=0,_=p.length;u<_;u++)e.update(p[u],34962)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const A=m.array;p=m.version;for(let b=0,y=A.length;b<y;b+=3){const w=A[b+0],L=A[b+1],N=A[b+2];f.push(w,L,L,N,N,w)}}else{const A=g.array;p=g.version;for(let b=0,y=A.length/3-1;b<y;b+=3){const w=b+0,L=b+1,N=b+2;f.push(w,L,L,N,N,w)}}const u=new(Uo(f)?qo:Yo)(f,1);u.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,u)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Df(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,g){if(g===0)return;let p,u;if(i)p=r,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,m,a,f*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function If(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pf(r,e){return r[0]-e[0]}function Rf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Nf(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let u=s.get(h);if(u===void 0||u.count!==p){let j=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",j)};u!==void 0&&u.texture.dispose();const b=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let T=0;b===!0&&(T=1),y===!0&&(T=2),w===!0&&(T=3);let I=h.attributes.position.count*T,Y=1;I>e.maxTextureSize&&(Y=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ie=new Float32Array(I*Y*4*p),H=new Ho(ie,I,Y,p);H.type=wn,H.needsUpdate=!0;const P=T*4;for(let X=0;X<p;X++){const J=L[X],W=N[X],K=x[X],q=I*Y*4*X;for(let B=0;B<J.count;B++){const z=B*P;b===!0&&(o.fromBufferAttribute(J,B),ie[q+z+0]=o.x,ie[q+z+1]=o.y,ie[q+z+2]=o.z,ie[q+z+3]=0),y===!0&&(o.fromBufferAttribute(W,B),ie[q+z+4]=o.x,ie[q+z+5]=o.y,ie[q+z+6]=o.z,ie[q+z+7]=0),w===!0&&(o.fromBufferAttribute(K,B),ie[q+z+8]=o.x,ie[q+z+9]=o.y,ie[q+z+10]=o.z,ie[q+z+11]=K.itemSize===4?o.w:1)}}u={count:p,texture:H,size:new Oe(I,Y)},s.set(h,u),h.addEventListener("dispose",j)}let _=0;for(let b=0;b<m.length;b++)_+=m[b];const A=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",A),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}else{const g=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<g;y++){const w=p[y];w[0]=y,w[1]=m[y]}p.sort(Rf);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Pf);const u=h.morphAttributes.position,_=h.morphAttributes.normal;let A=0;for(let y=0;y<8;y++){const w=a[y],L=w[0],N=w[1];L!==Number.MAX_SAFE_INTEGER&&N?(u&&h.getAttribute("morphTarget"+y)!==u[L]&&h.setAttribute("morphTarget"+y,u[L]),_&&h.getAttribute("morphNormal"+y)!==_[L]&&h.setAttribute("morphNormal"+y,_[L]),i[y]=N,A+=N):(u&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),_&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const b=h.morphTargetsRelative?1:1-A;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function zf(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const $o=new St,el=new Ho,tl=new vu,nl=new Zo,Ja=[],Ka=[],$a=new Float32Array(16),eo=new Float32Array(9),to=new Float32Array(4);function pi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ja[i];if(s===void 0&&(s=new Float32Array(i),Ja[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Xe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ze(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Br(r,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Of(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;r.uniform2fv(this.addr,e),Ze(t,e)}}function Uf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xe(t,e))return;r.uniform3fv(this.addr,e),Ze(t,e)}}function Bf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;r.uniform4fv(this.addr,e),Ze(t,e)}}function Gf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ze(t,e)}else{if(Xe(t,n))return;to.set(n),r.uniformMatrix2fv(this.addr,!1,to),Ze(t,n)}}function kf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ze(t,e)}else{if(Xe(t,n))return;eo.set(n),r.uniformMatrix3fv(this.addr,!1,eo),Ze(t,n)}}function Hf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ze(t,e)}else{if(Xe(t,n))return;$a.set(n),r.uniformMatrix4fv(this.addr,!1,$a),Ze(t,n)}}function Vf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Wf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;r.uniform2iv(this.addr,e),Ze(t,e)}}function jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;r.uniform3iv(this.addr,e),Ze(t,e)}}function Yf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;r.uniform4iv(this.addr,e),Ze(t,e)}}function qf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;r.uniform2uiv(this.addr,e),Ze(t,e)}}function Xf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;r.uniform3uiv(this.addr,e),Ze(t,e)}}function Zf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;r.uniform4uiv(this.addr,e),Ze(t,e)}}function Jf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$o,i)}function Kf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tl,i)}function $f(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nl,i)}function ep(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||el,i)}function tp(r){switch(r){case 5126:return Of;case 35664:return Ff;case 35665:return Uf;case 35666:return Bf;case 35674:return Gf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return jf;case 35669:case 35673:return Yf;case 5125:return qf;case 36294:return Qf;case 36295:return Xf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return ep}}function np(r,e){r.uniform1fv(this.addr,e)}function ip(r,e){const t=pi(e,this.size,2);r.uniform2fv(this.addr,t)}function rp(r,e){const t=pi(e,this.size,3);r.uniform3fv(this.addr,t)}function sp(r,e){const t=pi(e,this.size,4);r.uniform4fv(this.addr,t)}function ap(r,e){const t=pi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function op(r,e){const t=pi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lp(r,e){const t=pi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cp(r,e){r.uniform1iv(this.addr,e)}function up(r,e){r.uniform2iv(this.addr,e)}function hp(r,e){r.uniform3iv(this.addr,e)}function dp(r,e){r.uniform4iv(this.addr,e)}function fp(r,e){r.uniform1uiv(this.addr,e)}function pp(r,e){r.uniform2uiv(this.addr,e)}function mp(r,e){r.uniform3uiv(this.addr,e)}function gp(r,e){r.uniform4uiv(this.addr,e)}function xp(r,e,t){const n=this.cache,i=e.length,s=Br(t,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$o,s[o])}function _p(r,e,t){const n=this.cache,i=e.length,s=Br(t,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||tl,s[o])}function vp(r,e,t){const n=this.cache,i=e.length,s=Br(t,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nl,s[o])}function Mp(r,e,t){const n=this.cache,i=e.length,s=Br(t,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||el,s[o])}function yp(r){switch(r){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return hp;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return Mp}}class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tp(t.type)}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=yp(t.type)}}class wp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ys=/(\w+)(\])?(\[|\.)?/g;function no(r,e){r.seq.push(e),r.map[e.id]=e}function Ap(r,e,t){const n=r.name,i=n.length;for(ys.lastIndex=0;;){const s=ys.exec(n),o=ys.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){no(t,c===void 0?new Sp(a,r,e):new bp(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new wp(a),no(t,d)),t=d}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ap(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function io(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Tp=0;function Ep(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Cp(r){switch(r){case On:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ro(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ep(r.getShaderSource(e),o)}else return i}function Lp(r,e){const t=Cp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dp(r,e){let t;switch(e){case jc:t="Linear";break;case Yc:t="Reinhard";break;case qc:t="OptimizedCineon";break;case Qc:t="ACESFilmic";break;case Xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ip(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function Pp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ci(r){return r!==""}function so(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ao(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Us(r){return r.replace(Np,zp)}function zp(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Us(t)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oo(r){return r.replace(Op,Fp)}function Fp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ci:case ui:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function kp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Vc:e="ENVMAP_BLENDING_MIX";break;case Wc:e="ENVMAP_BLENDING_ADD";break}return e}function Hp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Up(t),c=Bp(t),h=Gp(t),d=kp(t),f=Hp(t),m=t.isWebGL2?"":Ip(t),g=Pp(s),p=i.createProgram();let u,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[g].filter(Ci).join(`
`),u.length>0&&(u+=`
`),_=[m,g].filter(Ci).join(`
`),_.length>0&&(_+=`
`)):(u=[lo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),_=[m,lo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kt?"#define TONE_MAPPING":"",t.toneMapping!==Kt?Se.tonemapping_pars_fragment:"",t.toneMapping!==Kt?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,Lp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),o=Us(o),o=so(o,t),o=ao(o,t),a=Us(a),a=so(a,t),a=ao(a,t),o=oo(o),a=oo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=A+u+o,y=A+_+a,w=io(i,35633,b),L=io(i,35632,y);if(i.attachShader(p,w),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(w).trim(),Y=i.getShaderInfoLog(L).trim();let ie=!0,H=!0;if(i.getProgramParameter(p,35714)===!1){ie=!1;const P=ro(i,w,"vertex"),j=ro(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+P+`
`+j)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||Y==="")&&(H=!1);H&&(this.diagnostics={runnable:ie,programLog:T,vertexShader:{log:I,prefix:u},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(w),i.deleteShader(L);let N;this.getUniforms=function(){return N===void 0&&(N=new Sr(i,p)),N};let x;return this.getAttributes=function(){return x===void 0&&(x=Rp(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Tp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let Wp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}}class Yp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function qp(r,e,t,n,i,s,o){const a=new Wo,l=new jp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,T,I,Y,ie){const H=Y.fog,P=ie.geometry,j=x.isMeshStandardMaterial?Y.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),J=!!X&&X.mapping===Or?X.image.height:null,W=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,q=K!==void 0?K.length:0;let B=0;P.morphAttributes.position!==void 0&&(B=1),P.morphAttributes.normal!==void 0&&(B=2),P.morphAttributes.color!==void 0&&(B=3);let z,ne,$,re;if(W){const Re=Bt[W];z=Re.vertexShader,ne=Re.fragmentShader}else z=x.vertexShader,ne=x.fragmentShader,l.update(x),$=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const k=r.getRenderTarget(),Le=x.alphaTest>0,ce=x.clearcoat>0,ve=x.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:x.type,vertexShader:z,fragmentShader:ne,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:f,outputEncoding:k===null?r.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:On,map:!!x.map,matcap:!!x.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===mu,tangentSpaceNormalMap:x.normalMapType===pu,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ge,clearcoat:ce,clearcoatMap:ce&&!!x.clearcoatMap,clearcoatRoughnessMap:ce&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!x.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!x.iridescenceMap,iridescenceThicknessMap:ve&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ii,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!H,useFog:x.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Kt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Ct,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(T,x),A(T,x),T.push(r.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function A(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),x.push(a.mask)}function b(x){const T=g[x.type];let I;if(T){const Y=Bt[T];I=Iu.clone(Y.uniforms)}else I=x.uniforms;return I}function y(x,T){let I;for(let Y=0,ie=c.length;Y<ie;Y++){const H=c[Y];if(H.cacheKey===T){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Vp(r,T,x,s),c.push(I)),I}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:L,programs:c,dispose:N}}function Qp(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Xp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function co(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,g,p,u){let _=r[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:u},r[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=u),e++,_}function a(d,f,m,g,p,u){const _=o(d,f,m,g,p,u);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,f,m,g,p,u){const _=o(d,f,m,g,p,u);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,f){t.length>1&&t.sort(d||Xp),n.length>1&&n.sort(f||co),i.length>1&&i.sort(f||co)}function h(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Zp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new uo,r.set(n,[o])):i>=s.length?(o=new uo,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Fe};break;case"SpotLight":t={position:new R,direction:new R,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function Kp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $p=0;function em(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tm(r,e){const t=new Jp,n=Kp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new R);const s=new R,o=new nt,a=new nt;function l(h,d){let f=0,m=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,u=0,_=0,A=0,b=0,y=0,w=0,L=0,N=0,x=0;h.sort(em);const T=d!==!0?Math.PI:1;for(let Y=0,ie=h.length;Y<ie;Y++){const H=h[Y],P=H.color,j=H.intensity,X=H.distance,J=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=P.r*j*T,m+=P.g*j*T,g+=P.b*j*T;else if(H.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(H.sh.coefficients[W],j);else if(H.isDirectionalLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const K=H.shadow,q=n.get(H);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=H.shadow.matrix,y++}i.directional[p]=W,p++}else if(H.isSpotLight){const W=t.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(P).multiplyScalar(j*T),W.distance=X,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,i.spot[_]=W;const K=H.shadow;if(H.map&&(i.spotLightMap[N]=H.map,N++,K.updateMatrices(H),H.castShadow&&x++),i.spotLightMatrix[_]=K.matrix,H.castShadow){const q=n.get(H);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=J,L++}_++}else if(H.isRectAreaLight){const W=t.get(H);W.color.copy(P).multiplyScalar(j),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),i.rectArea[A]=W,A++}else if(H.isPointLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*T),W.distance=H.distance,W.decay=H.decay,H.castShadow){const K=H.shadow,q=n.get(H);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,i.pointShadow[u]=q,i.pointShadowMap[u]=J,i.pointShadowMatrix[u]=H.shadow.matrix,w++}i.point[u]=W,u++}else if(H.isHemisphereLight){const W=t.get(H);W.skyColor.copy(H.color).multiplyScalar(j*T),W.groundColor.copy(H.groundColor).multiplyScalar(j*T),i.hemi[b]=W,b++}}A>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==u||I.spotLength!==_||I.rectAreaLength!==A||I.hemiLength!==b||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==L||I.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=A,i.point.length=u,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+N-x,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=x,I.directionalLength=p,I.pointLength=u,I.spotLength=_,I.rectAreaLength=A,I.hemiLength=b,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=L,I.numSpotMaps=N,i.version=$p++)}function c(h,d){let f=0,m=0,g=0,p=0,u=0;const _=d.matrixWorldInverse;for(let A=0,b=h.length;A<b;A++){const y=h[A];if(y.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),f++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const w=i.hemi[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(_),u++}}}return{setup:l,setupView:c,state:i}}function ho(r,e){const t=new tm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nm(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ho(r,e),t.set(s,[l])):o>=a.length?(l=new ho(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class im extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
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
}`;function om(r,e,t){let n=new Jo;const i=new Oe,s=new Oe,o=new it,a=new im({depthPacking:fu}),l=new rm,c={},h=t.maxTextureSize,d={0:Ct,1:li,2:ln},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:sm,fragmentShader:am}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new cn(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po,this.render=function(y,w,L){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||y.length===0)return;const N=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(un),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Y=0,ie=y.length;Y<ie;Y++){const H=y[Y],P=H.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const j=P.getFrameExtents();if(i.multiply(j),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,P.mapSize.y=s.y)),P.map===null){const J=this.type!==Ei?{minFilter:dt,magFilter:dt}:{};P.map=new Fn(i.x,i.y,J),P.map.texture.name=H.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const X=P.getViewportCount();for(let J=0;J<X;J++){const W=P.getViewport(J);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),I.viewport(o),P.updateMatrices(H,J),n=P.getFrustum(),b(w,L,P.camera,H,this.type)}P.isPointLightShadow!==!0&&this.type===Ei&&_(P,L),P.needsUpdate=!1}u.needsUpdate=!1,r.setRenderTarget(N,x,T)};function _(y,w){const L=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Fn(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,L,f,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,L,m,p,null)}function A(y,w,L,N,x,T){let I=null;const Y=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Y!==void 0?I=Y:I=L.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const ie=I.uuid,H=w.uuid;let P=c[ie];P===void 0&&(P={},c[ie]=P);let j=P[H];j===void 0&&(j=I.clone(),P[H]=j),I=j}return I.visible=w.visible,I.wireframe=w.wireframe,T===Ei?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(L.matrixWorld),I.nearDistance=N,I.farDistance=x),I}function b(y,w,L,N,x){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Ei)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const Y=e.update(y),ie=y.material;if(Array.isArray(ie)){const H=Y.groups;for(let P=0,j=H.length;P<j;P++){const X=H[P],J=ie[X.materialIndex];if(J&&J.visible){const W=A(y,J,N,L.near,L.far,x);r.renderBufferDirect(L,null,Y,W,y,X)}}}else if(ie.visible){const H=A(y,ie,N,L.near,L.far,x);r.renderBufferDirect(L,null,Y,H,y,null)}}const I=y.children;for(let Y=0,ie=I.length;Y<ie;Y++)b(I[Y],w,L,N,x)}}function lm(r,e,t){const n=t.isWebGL2;function i(){let E=!1;const U=new it;let Q=null;const oe=new it(0,0,0,0);return{setMask:function(de){Q!==de&&!E&&(r.colorMask(de,de,de,de),Q=de)},setLocked:function(de){E=de},setClear:function(de,Pe,Ke,rt,dn){dn===!0&&(de*=rt,Pe*=rt,Ke*=rt),U.set(de,Pe,Ke,rt),oe.equals(U)===!1&&(r.clearColor(de,Pe,Ke,rt),oe.copy(U))},reset:function(){E=!1,Q=null,oe.set(-1,0,0,0)}}}function s(){let E=!1,U=null,Q=null,oe=null;return{setTest:function(de){de?Le(2929):ce(2929)},setMask:function(de){U!==de&&!E&&(r.depthMask(de),U=de)},setFunc:function(de){if(Q!==de){switch(de){case Oc:r.depthFunc(512);break;case Fc:r.depthFunc(519);break;case Uc:r.depthFunc(513);break;case Is:r.depthFunc(515);break;case Bc:r.depthFunc(514);break;case Gc:r.depthFunc(518);break;case kc:r.depthFunc(516);break;case Hc:r.depthFunc(517);break;default:r.depthFunc(515)}Q=de}},setLocked:function(de){E=de},setClear:function(de){oe!==de&&(r.clearDepth(de),oe=de)},reset:function(){E=!1,U=null,Q=null,oe=null}}}function o(){let E=!1,U=null,Q=null,oe=null,de=null,Pe=null,Ke=null,rt=null,dn=null;return{setTest:function(Be){E||(Be?Le(2960):ce(2960))},setMask:function(Be){U!==Be&&!E&&(r.stencilMask(Be),U=Be)},setFunc:function(Be,kt,wt){(Q!==Be||oe!==kt||de!==wt)&&(r.stencilFunc(Be,kt,wt),Q=Be,oe=kt,de=wt)},setOp:function(Be,kt,wt){(Pe!==Be||Ke!==kt||rt!==wt)&&(r.stencilOp(Be,kt,wt),Pe=Be,Ke=kt,rt=wt)},setLocked:function(Be){E=Be},setClear:function(Be){dn!==Be&&(r.clearStencil(Be),dn=Be)},reset:function(){E=!1,U=null,Q=null,oe=null,de=null,Pe=null,Ke=null,rt=null,dn=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,p=[],u=null,_=!1,A=null,b=null,y=null,w=null,L=null,N=null,x=null,T=!1,I=null,Y=null,ie=null,H=null,P=null;const j=r.getParameter(35661);let X=!1,J=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=J>=2);let K=null,q={};const B=r.getParameter(3088),z=r.getParameter(2978),ne=new it().fromArray(B),$=new it().fromArray(z);function re(E,U,Q){const oe=new Uint8Array(4),de=r.createTexture();r.bindTexture(E,de),r.texParameteri(E,10241,9728),r.texParameteri(E,10240,9728);for(let Pe=0;Pe<Q;Pe++)r.texImage2D(U+Pe,0,6408,1,1,0,6408,5121,oe);return de}const k={};k[3553]=re(3553,3553,1),k[34067]=re(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(2929),l.setFunc(Is),lt(!1),bt(ta),Le(2884),at(un);function Le(E){f[E]!==!0&&(r.enable(E),f[E]=!0)}function ce(E){f[E]!==!1&&(r.disable(E),f[E]=!1)}function ve(E,U){return m[E]!==U?(r.bindFramebuffer(E,U),m[E]=U,n&&(E===36009&&(m[36160]=U),E===36160&&(m[36009]=U)),!0):!1}function le(E,U){let Q=p,oe=!1;if(E)if(Q=g.get(U),Q===void 0&&(Q=[],g.set(U,Q)),E.isWebGLMultipleRenderTargets){const de=E.texture;if(Q.length!==de.length||Q[0]!==36064){for(let Pe=0,Ke=de.length;Pe<Ke;Pe++)Q[Pe]=36064+Pe;Q.length=de.length,oe=!0}}else Q[0]!==36064&&(Q[0]=36064,oe=!0);else Q[0]!==1029&&(Q[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Re(E){return u!==E?(r.useProgram(E),u=E,!0):!1}const be={[ei]:32774,[Ac]:32778,[Tc]:32779};if(n)be[sa]=32775,be[aa]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(be[sa]=E.MIN_EXT,be[aa]=E.MAX_EXT)}const _e={[Ec]:0,[Cc]:1,[Lc]:768,[Ro]:770,[zc]:776,[Rc]:774,[Ic]:772,[Dc]:769,[No]:771,[Nc]:775,[Pc]:773};function at(E,U,Q,oe,de,Pe,Ke,rt){if(E===un){_===!0&&(ce(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),E!==wc){if(E!==A||rt!==T){if((b!==ei||L!==ei)&&(r.blendEquation(32774),b=ei,L=ei),rt)switch(E){case ii:r.blendFuncSeparate(1,771,1,771);break;case na:r.blendFunc(1,1);break;case ia:r.blendFuncSeparate(0,769,0,1);break;case ra:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case ii:r.blendFuncSeparate(770,771,1,771);break;case na:r.blendFunc(770,1);break;case ia:r.blendFuncSeparate(0,769,0,1);break;case ra:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}y=null,w=null,N=null,x=null,A=E,T=rt}return}de=de||U,Pe=Pe||Q,Ke=Ke||oe,(U!==b||de!==L)&&(r.blendEquationSeparate(be[U],be[de]),b=U,L=de),(Q!==y||oe!==w||Pe!==N||Ke!==x)&&(r.blendFuncSeparate(_e[Q],_e[oe],_e[Pe],_e[Ke]),y=Q,w=oe,N=Pe,x=Ke),A=E,T=!1}function ot(E,U){E.side===ln?ce(2884):Le(2884);let Q=E.side===Ct;U&&(Q=!Q),lt(Q),E.blending===ii&&E.transparent===!1?at(un):at(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),a.setMask(E.colorWrite);const oe=E.stencilWrite;c.setTest(oe),oe&&(c.setMask(E.stencilWriteMask),c.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),c.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Ne(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Le(32926):ce(32926)}function lt(E){I!==E&&(E?r.frontFace(2304):r.frontFace(2305),I=E)}function bt(E){E!==yc?(Le(2884),E!==Y&&(E===ta?r.cullFace(1029):E===Sc?r.cullFace(1028):r.cullFace(1032))):ce(2884),Y=E}function je(E){E!==ie&&(X&&r.lineWidth(E),ie=E)}function Ne(E,U,Q){E?(Le(32823),(H!==U||P!==Q)&&(r.polygonOffset(U,Q),H=U,P=Q)):ce(32823)}function Gt(E){E?Le(3089):ce(3089)}function Dt(E){E===void 0&&(E=33984+j-1),K!==E&&(r.activeTexture(E),K=E)}function S(E,U,Q){Q===void 0&&(K===null?Q=33984+j-1:Q=K);let oe=q[Q];oe===void 0&&(oe={type:void 0,texture:void 0},q[Q]=oe),(oe.type!==E||oe.texture!==U)&&(K!==Q&&(r.activeTexture(Q),K=Q),r.bindTexture(E,U||k[E]),oe.type=E,oe.texture=U)}function v(){const E=q[K];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function F(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ge(E){ne.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),ne.copy(E))}function fe(E){$.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),$.copy(E))}function De(E,U){let Q=d.get(U);Q===void 0&&(Q=new WeakMap,d.set(U,Q));let oe=Q.get(E);oe===void 0&&(oe=r.getUniformBlockIndex(U,E.name),Q.set(E,oe))}function Ue(E,U){const oe=d.get(U).get(E);h.get(E)!==oe&&(r.uniformBlockBinding(U,oe,E.__bindingPointIndex),h.set(E,oe))}function Je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},K=null,q={},m={},g=new WeakMap,p=[],u=null,_=!1,A=null,b=null,y=null,w=null,L=null,N=null,x=null,T=!1,I=null,Y=null,ie=null,H=null,P=null,ne.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:ce,bindFramebuffer:ve,drawBuffers:le,useProgram:Re,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:bt,setLineWidth:je,setPolygonOffset:Ne,setScissorTest:Gt,activeTexture:Dt,bindTexture:S,unbindTexture:v,compressedTexImage2D:F,compressedTexImage3D:Z,texImage2D:xe,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:V,texStorage3D:me,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:Me,compressedTexSubImage3D:ae,scissor:ge,viewport:fe,reset:Je}}function cm(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,v){return _?new OffscreenCanvas(S,v):Tr("canvas")}function b(S,v,F,Z){let ee=1;if((S.width>Z||S.height>Z)&&(ee=Z/Math.max(S.width,S.height)),ee<1||v===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const se=v?Fs:Math.floor,Me=se(ee*S.width),ae=se(ee*S.height);p===void 0&&(p=A(Me,ae));const V=F?A(Me,ae):p;return V.width=Me,V.height=ae,V.getContext("2d").drawImage(S,0,0,Me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+ae+")."),V}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function y(S){return Ra(S.width)&&Ra(S.height)}function w(S){return a?!1:S.wrapS!==Ot||S.wrapT!==Ot||S.minFilter!==dt&&S.minFilter!==Tt}function L(S,v){return S.generateMipmaps&&v&&S.minFilter!==dt&&S.minFilter!==Tt}function N(S){r.generateMipmap(S)}function x(S,v,F,Z,ee=!1){if(a===!1)return v;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let se=v;return v===6403&&(F===5126&&(se=33326),F===5131&&(se=33325),F===5121&&(se=33321)),v===33319&&(F===5126&&(se=33328),F===5131&&(se=33327),F===5121&&(se=33323)),v===6408&&(F===5126&&(se=34836),F===5131&&(se=34842),F===5121&&(se=Z===Ge&&ee===!1?35907:32856),F===32819&&(se=32854),F===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function T(S,v,F){return L(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==dt&&S.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function I(S){return S===dt||S===oa||S===la?9728:9729}function Y(S){const v=S.target;v.removeEventListener("dispose",Y),H(v),v.isVideoTexture&&g.delete(v)}function ie(S){const v=S.target;v.removeEventListener("dispose",ie),j(v)}function H(S){const v=n.get(S);if(v.__webglInit===void 0)return;const F=S.source,Z=u.get(F);if(Z){const ee=Z[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(S),Object.keys(Z).length===0&&u.delete(F)}n.remove(S)}function P(S){const v=n.get(S);r.deleteTexture(v.__webglTexture);const F=S.source,Z=u.get(F);delete Z[v.__cacheKey],o.memory.textures--}function j(S){const v=S.texture,F=n.get(S),Z=n.get(v);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)r.deleteFramebuffer(F.__webglFramebuffer[ee]),F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[ee]);else{if(r.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,se=v.length;ee<se;ee++){const Me=n.get(v[ee]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(v[ee])}n.remove(v),n.remove(S)}let X=0;function J(){X=0}function W(){const S=X;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),X+=1,S}function K(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.encoding),v.join()}function q(S,v){const F=n.get(S);if(S.isVideoTexture&&Gt(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,S,v);return}}t.bindTexture(3553,F.__webglTexture,33984+v)}function B(S,v){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ce(F,S,v);return}t.bindTexture(35866,F.__webglTexture,33984+v)}function z(S,v){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ce(F,S,v);return}t.bindTexture(32879,F.__webglTexture,33984+v)}function ne(S,v){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ve(F,S,v);return}t.bindTexture(34067,F.__webglTexture,33984+v)}const $={[Ns]:10497,[Ot]:33071,[zs]:33648},re={[dt]:9728,[oa]:9984,[la]:9986,[Tt]:9729,[Zc]:9985,[Fr]:9987};function k(S,v,F){if(F?(r.texParameteri(S,10242,$[v.wrapS]),r.texParameteri(S,10243,$[v.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,$[v.wrapR]),r.texParameteri(S,10240,re[v.magFilter]),r.texParameteri(S,10241,re[v.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(v.wrapS!==Ot||v.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,I(v.magFilter)),r.texParameteri(S,10241,I(v.minFilter)),v.minFilter!==dt&&v.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(v.type===wn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Le(S,v){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",Y));const Z=v.source;let ee=u.get(Z);ee===void 0&&(ee={},u.set(Z,ee));const se=K(v);if(se!==S.__cacheKey){ee[se]===void 0&&(ee[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[se].usedTimes++;const Me=ee[S.__cacheKey];Me!==void 0&&(ee[S.__cacheKey].usedTimes--,Me.usedTimes===0&&P(v)),S.__cacheKey=se,S.__webglTexture=ee[se].texture}return F}function ce(S,v,F){let Z=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=35866),v.isData3DTexture&&(Z=32879);const ee=Le(S,v),se=v.source;t.bindTexture(Z,S.__webglTexture,33984+F);const Me=n.get(se);if(se.version!==Me.__version||ee===!0){t.activeTexture(33984+F),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ae=w(v)&&y(v.image)===!1;let V=b(v.image,ae,!1,h);V=Dt(v,V);const me=y(V)||a,xe=s.convert(v.format,v.encoding);let ue=s.convert(v.type),ge=x(v.internalFormat,xe,ue,v.encoding,v.isVideoTexture);k(Z,v,me);let fe;const De=v.mipmaps,Ue=a&&v.isVideoTexture!==!0,Je=Me.__version===void 0||ee===!0,E=T(v,V,me);if(v.isDepthTexture)ge=6402,a?v.type===wn?ge=36012:v.type===bn?ge=33190:v.type===ri?ge=35056:ge=33189:v.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Pn&&ge===6402&&v.type!==Fo&&v.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=bn,ue=s.convert(v.type)),v.format===hi&&ge===6402&&(ge=34041,v.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ri,ue=s.convert(v.type))),Je&&(Ue?t.texStorage2D(3553,1,ge,V.width,V.height):t.texImage2D(3553,0,ge,V.width,V.height,0,xe,ue,null));else if(v.isDataTexture)if(De.length>0&&me){Ue&&Je&&t.texStorage2D(3553,E,ge,De[0].width,De[0].height);for(let U=0,Q=De.length;U<Q;U++)fe=De[U],Ue?t.texSubImage2D(3553,U,0,0,fe.width,fe.height,xe,ue,fe.data):t.texImage2D(3553,U,ge,fe.width,fe.height,0,xe,ue,fe.data);v.generateMipmaps=!1}else Ue?(Je&&t.texStorage2D(3553,E,ge,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,xe,ue,V.data)):t.texImage2D(3553,0,ge,V.width,V.height,0,xe,ue,V.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ue&&Je&&t.texStorage3D(35866,E,ge,De[0].width,De[0].height,V.depth);for(let U=0,Q=De.length;U<Q;U++)fe=De[U],v.format!==Ft?xe!==null?Ue?t.compressedTexSubImage3D(35866,U,0,0,0,fe.width,fe.height,V.depth,xe,fe.data,0,0):t.compressedTexImage3D(35866,U,ge,fe.width,fe.height,V.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,U,0,0,0,fe.width,fe.height,V.depth,xe,ue,fe.data):t.texImage3D(35866,U,ge,fe.width,fe.height,V.depth,0,xe,ue,fe.data)}else{Ue&&Je&&t.texStorage2D(3553,E,ge,De[0].width,De[0].height);for(let U=0,Q=De.length;U<Q;U++)fe=De[U],v.format!==Ft?xe!==null?Ue?t.compressedTexSubImage2D(3553,U,0,0,fe.width,fe.height,xe,fe.data):t.compressedTexImage2D(3553,U,ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,U,0,0,fe.width,fe.height,xe,ue,fe.data):t.texImage2D(3553,U,ge,fe.width,fe.height,0,xe,ue,fe.data)}else if(v.isDataArrayTexture)Ue?(Je&&t.texStorage3D(35866,E,ge,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,xe,ue,V.data)):t.texImage3D(35866,0,ge,V.width,V.height,V.depth,0,xe,ue,V.data);else if(v.isData3DTexture)Ue?(Je&&t.texStorage3D(32879,E,ge,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,xe,ue,V.data)):t.texImage3D(32879,0,ge,V.width,V.height,V.depth,0,xe,ue,V.data);else if(v.isFramebufferTexture){if(Je)if(Ue)t.texStorage2D(3553,E,ge,V.width,V.height);else{let U=V.width,Q=V.height;for(let oe=0;oe<E;oe++)t.texImage2D(3553,oe,ge,U,Q,0,xe,ue,null),U>>=1,Q>>=1}}else if(De.length>0&&me){Ue&&Je&&t.texStorage2D(3553,E,ge,De[0].width,De[0].height);for(let U=0,Q=De.length;U<Q;U++)fe=De[U],Ue?t.texSubImage2D(3553,U,0,0,xe,ue,fe):t.texImage2D(3553,U,ge,xe,ue,fe);v.generateMipmaps=!1}else Ue?(Je&&t.texStorage2D(3553,E,ge,V.width,V.height),t.texSubImage2D(3553,0,0,0,xe,ue,V)):t.texImage2D(3553,0,ge,xe,ue,V);L(v,me)&&N(Z),Me.__version=se.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,F){if(v.image.length!==6)return;const Z=Le(S,v),ee=v.source;t.bindTexture(34067,S.__webglTexture,33984+F);const se=n.get(ee);if(ee.version!==se.__version||Z===!0){t.activeTexture(33984+F),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,V=[];for(let U=0;U<6;U++)!Me&&!ae?V[U]=b(v.image[U],!1,!0,c):V[U]=ae?v.image[U].image:v.image[U],V[U]=Dt(v,V[U]);const me=V[0],xe=y(me)||a,ue=s.convert(v.format,v.encoding),ge=s.convert(v.type),fe=x(v.internalFormat,ue,ge,v.encoding),De=a&&v.isVideoTexture!==!0,Ue=se.__version===void 0||Z===!0;let Je=T(v,me,xe);k(34067,v,xe);let E;if(Me){De&&Ue&&t.texStorage2D(34067,Je,fe,me.width,me.height);for(let U=0;U<6;U++){E=V[U].mipmaps;for(let Q=0;Q<E.length;Q++){const oe=E[Q];v.format!==Ft?ue!==null?De?t.compressedTexSubImage2D(34069+U,Q,0,0,oe.width,oe.height,ue,oe.data):t.compressedTexImage2D(34069+U,Q,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+U,Q,0,0,oe.width,oe.height,ue,ge,oe.data):t.texImage2D(34069+U,Q,fe,oe.width,oe.height,0,ue,ge,oe.data)}}}else{E=v.mipmaps,De&&Ue&&(E.length>0&&Je++,t.texStorage2D(34067,Je,fe,V[0].width,V[0].height));for(let U=0;U<6;U++)if(ae){De?t.texSubImage2D(34069+U,0,0,0,V[U].width,V[U].height,ue,ge,V[U].data):t.texImage2D(34069+U,0,fe,V[U].width,V[U].height,0,ue,ge,V[U].data);for(let Q=0;Q<E.length;Q++){const de=E[Q].image[U].image;De?t.texSubImage2D(34069+U,Q+1,0,0,de.width,de.height,ue,ge,de.data):t.texImage2D(34069+U,Q+1,fe,de.width,de.height,0,ue,ge,de.data)}}else{De?t.texSubImage2D(34069+U,0,0,0,ue,ge,V[U]):t.texImage2D(34069+U,0,fe,ue,ge,V[U]);for(let Q=0;Q<E.length;Q++){const oe=E[Q];De?t.texSubImage2D(34069+U,Q+1,0,0,ue,ge,oe.image[U]):t.texImage2D(34069+U,Q+1,fe,ue,ge,oe.image[U])}}}L(v,xe)&&N(34067),se.__version=ee.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function le(S,v,F,Z,ee){const se=s.convert(F.format,F.encoding),Me=s.convert(F.type),ae=x(F.internalFormat,se,Me,F.encoding);n.get(v).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ae,v.width,v.height,v.depth,0,se,Me,null):t.texImage2D(ee,0,ae,v.width,v.height,0,se,Me,null)),t.bindFramebuffer(36160,S),Ne(v)?f.framebufferTexture2DMultisampleEXT(36160,Z,ee,n.get(F).__webglTexture,0,je(v)):(ee===3553||ee>=34069&&ee<=34074)&&r.framebufferTexture2D(36160,Z,ee,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(S,v,F){if(r.bindRenderbuffer(36161,S),v.depthBuffer&&!v.stencilBuffer){let Z=33189;if(F||Ne(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===wn?Z=36012:ee.type===bn&&(Z=33190));const se=je(v);Ne(v)?f.renderbufferStorageMultisampleEXT(36161,se,Z,v.width,v.height):r.renderbufferStorageMultisample(36161,se,Z,v.width,v.height)}else r.renderbufferStorage(36161,Z,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(v.depthBuffer&&v.stencilBuffer){const Z=je(v);F&&Ne(v)===!1?r.renderbufferStorageMultisample(36161,Z,35056,v.width,v.height):Ne(v)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<Z.length;ee++){const se=Z[ee],Me=s.convert(se.format,se.encoding),ae=s.convert(se.type),V=x(se.internalFormat,Me,ae,se.encoding),me=je(v);F&&Ne(v)===!1?r.renderbufferStorageMultisample(36161,me,V,v.width,v.height):Ne(v)?f.renderbufferStorageMultisampleEXT(36161,me,V,v.width,v.height):r.renderbufferStorage(36161,V,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function be(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const Z=n.get(v.depthTexture).__webglTexture,ee=je(v);if(v.depthTexture.format===Pn)Ne(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ee):r.framebufferTexture2D(36160,36096,3553,Z,0);else if(v.depthTexture.format===hi)Ne(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ee):r.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function _e(S){const v=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,S)}else if(F){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=r.createRenderbuffer(),Re(v.__webglDepthbuffer[Z],S,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Re(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function at(S,v,F){const Z=n.get(S);v!==void 0&&le(Z.__webglFramebuffer,S,S.texture,36064,3553),F!==void 0&&_e(S)}function ot(S){const v=S.texture,F=n.get(S),Z=n.get(v);S.addEventListener("dispose",ie),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=v.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,se=S.isWebGLMultipleRenderTargets===!0,Me=y(S)||a;if(ee){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)F.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(F.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const ae=S.texture;for(let V=0,me=ae.length;V<me;V++){const xe=n.get(ae[V]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Ne(S)===!1){const ae=se?v:[v];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let V=0;V<ae.length;V++){const me=ae[V];F.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(36161,F.__webglColorRenderbuffer[V]);const xe=s.convert(me.format,me.encoding),ue=s.convert(me.type),ge=x(me.internalFormat,xe,ue,me.encoding,S.isXRRenderTarget===!0),fe=je(S);r.renderbufferStorageMultisample(36161,fe,ge,S.width,S.height),r.framebufferRenderbuffer(36160,36064+V,36161,F.__webglColorRenderbuffer[V])}r.bindRenderbuffer(36161,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Z.__webglTexture),k(34067,v,Me);for(let ae=0;ae<6;ae++)le(F.__webglFramebuffer[ae],S,v,36064,34069+ae);L(v,Me)&&N(34067),t.unbindTexture()}else if(se){const ae=S.texture;for(let V=0,me=ae.length;V<me;V++){const xe=ae[V],ue=n.get(xe);t.bindTexture(3553,ue.__webglTexture),k(3553,xe,Me),le(F.__webglFramebuffer,S,xe,36064+V,3553),L(xe,Me)&&N(3553)}t.unbindTexture()}else{let ae=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ae=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Z.__webglTexture),k(ae,v,Me),le(F.__webglFramebuffer,S,v,36064,ae),L(v,Me)&&N(ae),t.unbindTexture()}S.depthBuffer&&_e(S)}function lt(S){const v=y(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,ee=F.length;Z<ee;Z++){const se=F[Z];if(L(se,v)){const Me=S.isWebGLCubeRenderTarget?34067:3553,ae=n.get(se).__webglTexture;t.bindTexture(Me,ae),N(Me),t.unbindTexture()}}}function bt(S){if(a&&S.samples>0&&Ne(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,Z=S.height;let ee=16384;const se=[],Me=S.stencilBuffer?33306:36096,ae=n.get(S),V=S.isWebGLMultipleRenderTargets===!0;if(V)for(let me=0;me<v.length;me++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let me=0;me<v.length;me++){se.push(36064+me),S.depthBuffer&&se.push(Me);const xe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(xe===!1&&(S.depthBuffer&&(ee|=256),S.stencilBuffer&&(ee|=1024)),V&&r.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[me]),xe===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),V){const ue=n.get(v[me]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,ee,9728),m&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let me=0;me<v.length;me++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+me,36161,ae.__webglColorRenderbuffer[me]);const xe=n.get(v[me]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+me,3553,xe,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function je(S){return Math.min(d,S.samples)}function Ne(S){const v=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(S){const v=o.render.frame;g.get(S)!==v&&(g.set(S,v),S.update())}function Dt(S,v){const F=S.encoding,Z=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Os||F!==On&&(F===Ge?a===!1?e.has("EXT_sRGB")===!0&&Z===Ft?(S.format=Os,S.minFilter=Tt,S.generateMipmaps=!1):v=Go.sRGBToLinear(v):(Z!==Ft||ee!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),v}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ne}function um(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===zn)return 5121;if(s===eu)return 32819;if(s===tu)return 32820;if(s===Jc)return 5120;if(s===Kc)return 5122;if(s===Fo)return 5123;if(s===$c)return 5124;if(s===bn)return 5125;if(s===wn)return 5126;if(s===Di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nu)return 6406;if(s===Ft)return 6408;if(s===ru)return 6409;if(s===su)return 6410;if(s===Pn)return 6402;if(s===hi)return 34041;if(s===iu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Os)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===au)return 6403;if(s===ou)return 36244;if(s===lu)return 33319;if(s===cu)return 33320;if(s===uu)return 36249;if(s===Wr||s===jr||s===Yr||s===qr)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ca||s===ua||s===ha||s===da)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ca)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ua)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ha)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fa||s===pa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===fa)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ma||s===ga||s===xa||s===_a||s===va||s===Ma||s===ya||s===Sa||s===ba||s===wa||s===Aa||s===Ta||s===Ea||s===Ca)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ma)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ga)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_a)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===va)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ma)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ya)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ba)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Aa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ta)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ea)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ca)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===La)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===La)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ri?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class hm extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const u=t.getJointPose(p,n),_=this._getHandJoint(c,p);u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=u.radius),_.visible=u!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fm extends St{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Pn,h!==Pn&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pn&&(n=bn),n===void 0&&h===hi&&(n=ri),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}}class pm extends fi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,d=null,f=null,m=null;const g=t.getContextAttributes();let p=null,u=null;const _=[],A=[],b=new Set,y=new Map,w=new Et;w.layers.enable(1),w.viewport=new it;const L=new Et;L.layers.enable(2),L.viewport=new it;const N=[w,L],x=new hm;x.layers.enable(1),x.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let z=_[B];return z===void 0&&(z=new Ss,_[B]=z),z.getTargetRaySpace()},this.getControllerGrip=function(B){let z=_[B];return z===void 0&&(z=new Ss,_[B]=z),z.getGripSpace()},this.getHand=function(B){let z=_[B];return z===void 0&&(z=new Ss,_[B]=z),z.getHandSpace()};function Y(B){const z=A.indexOf(B.inputSource);if(z===-1)return;const ne=_[z];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function ie(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",ie),i.removeEventListener("inputsourceschange",H);for(let B=0;B<_.length;B++){const z=A[B];z!==null&&(A[B]=null,_[B].disconnect(z))}T=null,I=null,e.setRenderTarget(p),f=null,d=null,h=null,i=null,u=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:f}),u=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Ft,type:zn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,ne=null,$=null;g.depth&&($=g.stencil?35056:33190,z=g.stencil?hi:Pn,ne=g.stencil?ri:bn);const re={colorFormat:32856,depthFormat:$,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(re),i.updateRenderState({layers:[d]}),u=new Fn(d.textureWidth,d.textureHeight,{format:Ft,type:zn,depthTexture:new fm(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const k=e.properties.get(u);k.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(B){for(let z=0;z<B.removed.length;z++){const ne=B.removed[z],$=A.indexOf(ne);$>=0&&(A[$]=null,_[$].disconnect(ne))}for(let z=0;z<B.added.length;z++){const ne=B.added[z];let $=A.indexOf(ne);if($===-1){for(let k=0;k<_.length;k++)if(k>=A.length){A.push(ne),$=k;break}else if(A[k]===null){A[k]=ne,$=k;break}if($===-1)break}const re=_[$];re&&re.connect(ne)}}const P=new R,j=new R;function X(B,z,ne){P.setFromMatrixPosition(z.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const $=P.distanceTo(j),re=z.projectionMatrix.elements,k=ne.projectionMatrix.elements,Le=re[14]/(re[10]-1),ce=re[14]/(re[10]+1),ve=(re[9]+1)/re[5],le=(re[9]-1)/re[5],Re=(re[8]-1)/re[0],be=(k[8]+1)/k[0],_e=Le*Re,at=Le*be,ot=$/(-Re+be),lt=ot*-Re;z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(lt),B.translateZ(ot),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const bt=Le+ot,je=ce+ot,Ne=_e-lt,Gt=at+($-lt),Dt=ve*ce/je*bt,S=le*ce/je*bt;B.projectionMatrix.makePerspective(Ne,Gt,Dt,S,bt,je)}function J(B,z){z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;x.near=L.near=w.near=B.near,x.far=L.far=w.far=B.far,(T!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,I=x.far);const z=B.parent,ne=x.cameras;J(x,z);for(let re=0;re<ne.length;re++)J(ne[re],z);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const $=B.children;for(let re=0,k=$.length;re<k;re++)$[re].updateMatrixWorld(!0);ne.length===2?X(x,w,L):x.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(B){d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return b};let W=null;function K(B,z){if(c=z.getViewerPose(l||o),m=z,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(u,f.framebuffer),e.setRenderTarget(u));let $=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,$=!0);for(let re=0;re<ne.length;re++){const k=ne[re];let Le=null;if(f!==null)Le=f.getViewport(k);else{const ve=h.getViewSubImage(d,k);Le=ve.viewport,re===0&&(e.setRenderTargetTextures(u,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(u))}let ce=N[re];ce===void 0&&(ce=new Et,ce.layers.enable(re),ce.viewport=new it,N[re]=ce),ce.matrix.fromArray(k.transform.matrix),ce.projectionMatrix.fromArray(k.projectionMatrix),ce.viewport.set(Le.x,Le.y,Le.width,Le.height),re===0&&x.matrix.copy(ce.matrix),$===!0&&x.cameras.push(ce)}}for(let ne=0;ne<_.length;ne++){const $=A[ne],re=_[ne];$!==null&&re!==void 0&&re.update($,z,l||o)}if(W&&W(B,z),z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:z.detectedPlanes});let ne=null;for(const $ of b)z.detectedPlanes.has($)||(ne===null&&(ne=[]),ne.push($));if(ne!==null)for(const $ of ne)b.delete($),y.delete($),n.dispatchEvent({type:"planeremoved",data:$});for(const $ of z.detectedPlanes)if(!b.has($))b.add($),y.set($,z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:$});else{const re=y.get($);$.lastChangedTime>re&&(y.set($,$.lastChangedTime),n.dispatchEvent({type:"planechanged",data:$}))}}m=null}const q=new Ko;q.setAnimationLoop(K),this.setAnimationLoop=function(B){W=B},this.dispose=function(){}}}function mm(r,e){function t(p,u){u.color.getRGB(p.fogColor.value,Qo(r)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,A,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),h(p,u)):u.isMeshPhongMaterial?(i(p,u),c(p,u)):u.isMeshStandardMaterial?(i(p,u),d(p,u),u.isMeshPhysicalMaterial&&f(p,u,b)):u.isMeshMatcapMaterial?(i(p,u),m(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),g(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?a(p,u,_,A):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===Ct&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===Ct&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*y}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let A;u.map?A=u.map:u.specularMap?A=u.specularMap:u.displacementMap?A=u.displacementMap:u.normalMap?A=u.normalMap:u.bumpMap?A=u.bumpMap:u.roughnessMap?A=u.roughnessMap:u.metalnessMap?A=u.metalnessMap:u.alphaMap?A=u.alphaMap:u.emissiveMap?A=u.emissiveMap:u.clearcoatMap?A=u.clearcoatMap:u.clearcoatNormalMap?A=u.clearcoatNormalMap:u.clearcoatRoughnessMap?A=u.clearcoatRoughnessMap:u.iridescenceMap?A=u.iridescenceMap:u.iridescenceThicknessMap?A=u.iridescenceThicknessMap:u.specularIntensityMap?A=u.specularIntensityMap:u.specularColorMap?A=u.specularColorMap:u.transmissionMap?A=u.transmissionMap:u.thicknessMap?A=u.thicknessMap:u.sheenColorMap?A=u.sheenColorMap:u.sheenRoughnessMap&&(A=u.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix));let b;u.aoMap?b=u.aoMap:u.lightMap&&(b=u.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function a(p,u,_,A){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=A*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b;u.map?b=u.map:u.alphaMap&&(b=u.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _;u.map?_=u.map:u.alphaMap&&(_=u.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function f(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===Ct&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gm(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(A,b){const y=b.program;n.uniformBlockBinding(A,y)}function c(A,b){let y=i[A.id];y===void 0&&(g(A),y=h(A),i[A.id]=y,A.addEventListener("dispose",u));const w=b.program;n.updateUBOMapping(A,w);const L=e.render.frame;s[A.id]!==L&&(f(A),s[A.id]=L)}function h(A){const b=d();A.__bindingPointIndex=b;const y=r.createBuffer(),w=A.__size,L=A.usage;return r.bindBuffer(35345,y),r.bufferData(35345,w,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,y),y}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=i[A.id],y=A.uniforms,w=A.__cache;r.bindBuffer(35345,b);for(let L=0,N=y.length;L<N;L++){const x=y[L];if(m(x,L,w)===!0){const T=x.value,I=x.__offset;typeof T=="number"?(x.__data[0]=T,r.bufferSubData(35345,I,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):T.toArray(x.__data),r.bufferSubData(35345,I,x.__data))}}r.bindBuffer(35345,null)}function m(A,b,y){const w=A.value;if(y[b]===void 0)return typeof w=="number"?y[b]=w:y[b]=w.clone(),!0;if(typeof w=="number"){if(y[b]!==w)return y[b]=w,!0}else{const L=y[b];if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(A){const b=A.uniforms;let y=0;const w=16;let L=0;for(let N=0,x=b.length;N<x;N++){const T=b[N],I=p(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,N>0){L=y%w;const Y=w-L;L!==0&&Y-I.boundary<0&&(y+=w-L,T.__offset=y)}y+=I.storage}return L=y%w,L>0&&(y+=w-L),A.__size=y,A.__cache={},this}function p(A){const b=A.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function u(A){const b=A.target;b.removeEventListener("dispose",u);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function _(){for(const A in i)r.deleteBuffer(i[A]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function xm(){const r=Tr("canvas");return r.style.display="block",r}function il(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:xm(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=On,this.physicallyCorrectLights=!1,this.toneMapping=Kt,this.toneMappingExposure=1;const p=this;let u=!1,_=0,A=0,b=null,y=-1,w=null;const L=new it,N=new it;let x=null,T=e.width,I=e.height,Y=1,ie=null,H=null;const P=new it(0,0,T,I),j=new it(0,0,T,I);let X=!1;const J=new Jo;let W=!1,K=!1,q=null;const B=new nt,z=new Oe,ne=new R,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return b===null?Y:1}let k=t;function Le(M,D){for(let O=0;O<M.length;O++){const C=M[O],G=e.getContext(C,D);if(G!==null)return G}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vs}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",De,!1),k===null){const D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),k=Le(D,M),k===null)throw Le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ce,ve,le,Re,be,_e,at,ot,lt,bt,je,Ne,Gt,Dt,S,v,F,Z,ee,se,Me,ae,V,me;function xe(){ce=new Cf(k),ve=new yf(k,ce,r),ce.init(ve),ae=new um(k,ce,ve),le=new lm(k,ce,ve),Re=new If,be=new Qp,_e=new cm(k,ce,le,be,ve,ae,Re),at=new bf(p),ot=new Ef(p),lt=new Uu(k,ve),V=new vf(k,ce,lt,ve),bt=new Lf(k,lt,Re,V),je=new zf(k,bt,lt,Re),ee=new Nf(k,ve,_e),v=new Sf(be),Ne=new qp(p,at,ot,ce,ve,V,v),Gt=new mm(p,be),Dt=new Zp,S=new nm(ce,ve),Z=new _f(p,at,ot,le,je,h,o),F=new om(p,je,ve),me=new gm(k,Re,ve,le),se=new Mf(k,ce,Re,ve),Me=new Df(k,ce,Re,ve),Re.programs=Ne.programs,p.capabilities=ve,p.extensions=ce,p.properties=be,p.renderLists=Dt,p.shadowMap=F,p.state=le,p.info=Re}xe();const ue=new pm(p,k);this.xr=ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(T,I,!1))},this.getSize=function(M){return M.set(T,I)},this.setSize=function(M,D,O){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,I=D,e.width=Math.floor(M*Y),e.height=Math.floor(D*Y),O!==!1&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(T*Y,I*Y).floor()},this.setDrawingBufferSize=function(M,D,O){T=M,I=D,Y=O,e.width=Math.floor(M*O),e.height=Math.floor(D*O),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(P)},this.setViewport=function(M,D,O,C){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,D,O,C),le.viewport(L.copy(P).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,D,O,C){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,D,O,C),le.scissor(N.copy(j).multiplyScalar(Y).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(M){le.setScissorTest(X=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){H=M},this.getClearColor=function(M){return M.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(M=!0,D=!0,O=!0){let C=0;M&&(C|=16384),D&&(C|=256),O&&(C|=1024),k.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",De,!1),Dt.dispose(),S.dispose(),be.dispose(),at.dispose(),ot.dispose(),je.dispose(),V.dispose(),me.dispose(),Ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",oe),ue.removeEventListener("sessionend",de),q&&(q.dispose(),q=null),Pe.stop()};function ge(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const M=Re.autoReset,D=F.enabled,O=F.autoUpdate,C=F.needsUpdate,G=F.type;xe(),Re.autoReset=M,F.enabled=D,F.autoUpdate=O,F.needsUpdate=C,F.type=G}function De(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const D=M.target;D.removeEventListener("dispose",Ue),Je(D)}function Je(M){E(M),be.remove(M)}function E(M){const D=be.get(M).programs;D!==void 0&&(D.forEach(function(O){Ne.releaseProgram(O)}),M.isShaderMaterial&&Ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,O,C,G,pe){D===null&&(D=$);const ye=G.isMesh&&G.matrixWorld.determinant()<0,we=rl(M,D,O,C,G);le.setMaterial(C,ye);let Ae=O.index,Ie=1;C.wireframe===!0&&(Ae=bt.getWireframeAttribute(O),Ie=2);const Te=O.drawRange,Ee=O.attributes.position;let ke=Te.start*Ie,pt=(Te.start+Te.count)*Ie;pe!==null&&(ke=Math.max(ke,pe.start*Ie),pt=Math.min(pt,(pe.start+pe.count)*Ie)),Ae!==null?(ke=Math.max(ke,0),pt=Math.min(pt,Ae.count)):Ee!=null&&(ke=Math.max(ke,0),pt=Math.min(pt,Ee.count));const Ht=pt-ke;if(Ht<0||Ht===1/0)return;V.setup(G,C,we,O,Ae);let fn,He=se;if(Ae!==null&&(fn=lt.get(Ae),He=Me,He.setIndex(fn)),G.isMesh)C.wireframe===!0?(le.setLineWidth(C.wireframeLinewidth*re()),He.setMode(1)):He.setMode(4);else if(G.isLine){let Ce=C.linewidth;Ce===void 0&&(Ce=1),le.setLineWidth(Ce*re()),G.isLineSegments?He.setMode(1):G.isLineLoop?He.setMode(2):He.setMode(3)}else G.isPoints?He.setMode(0):G.isSprite&&He.setMode(4);if(G.isInstancedMesh)He.renderInstances(ke,Ht,G.count);else if(O.isInstancedBufferGeometry){const Ce=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Gr=Math.min(O.instanceCount,Ce);He.renderInstances(ke,Ht,Gr)}else He.render(ke,Ht)},this.compile=function(M,D){function O(C,G,pe){C.transparent===!0&&C.side===ln?(C.side=Ct,C.needsUpdate=!0,wt(C,G,pe),C.side=li,C.needsUpdate=!0,wt(C,G,pe),C.side=ln):wt(C,G,pe)}f=S.get(M),f.init(),g.push(f),M.traverseVisible(function(C){C.isLight&&C.layers.test(D.layers)&&(f.pushLight(C),C.castShadow&&f.pushShadow(C))}),f.setupLights(p.physicallyCorrectLights),M.traverse(function(C){const G=C.material;if(G)if(Array.isArray(G))for(let pe=0;pe<G.length;pe++){const ye=G[pe];O(ye,M,C)}else O(G,M,C)}),g.pop(),f=null};let U=null;function Q(M){U&&U(M)}function oe(){Pe.stop()}function de(){Pe.start()}const Pe=new Ko;Pe.setAnimationLoop(Q),typeof self!="undefined"&&Pe.setContext(self),this.setAnimationLoop=function(M){U=M,ue.setAnimationLoop(M),M===null?Pe.stop():Pe.start()},ue.addEventListener("sessionstart",oe),ue.addEventListener("sessionend",de),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(D),D=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,D,b),f=S.get(M,g.length),f.init(),g.push(f),B.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),J.setFromProjectionMatrix(B),K=this.localClippingEnabled,W=v.init(this.clippingPlanes,K,D),d=Dt.get(M,m.length),d.init(),m.push(d),Ke(M,D,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(ie,H),W===!0&&v.beginShadows();const O=f.state.shadowsArray;if(F.render(O,M,D),W===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,M),f.setupLights(p.physicallyCorrectLights),D.isArrayCamera){const C=D.cameras;for(let G=0,pe=C.length;G<pe;G++){const ye=C[G];rt(d,M,ye,ye.viewport)}}else rt(d,M,D);b!==null&&(_e.updateMultisampleRenderTarget(b),_e.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(p,M,D),V.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ke(M,D,O,C){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){C&&ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);const ye=je.update(M),we=M.material;we.visible&&d.push(M,ye,we,O,ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Re.render.frame&&(M.skeleton.update(),M.skeleton.frame=Re.render.frame),!M.frustumCulled||J.intersectsObject(M))){C&&ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);const ye=je.update(M),we=M.material;if(Array.isArray(we)){const Ae=ye.groups;for(let Ie=0,Te=Ae.length;Ie<Te;Ie++){const Ee=Ae[Ie],ke=we[Ee.materialIndex];ke&&ke.visible&&d.push(M,ye,ke,O,ne.z,Ee)}}else we.visible&&d.push(M,ye,we,O,ne.z,null)}}const pe=M.children;for(let ye=0,we=pe.length;ye<we;ye++)Ke(pe[ye],D,O,C)}function rt(M,D,O,C){const G=M.opaque,pe=M.transmissive,ye=M.transparent;f.setupLightsView(O),pe.length>0&&dn(G,D,O),C&&le.viewport(L.copy(C)),G.length>0&&Be(G,D,O),pe.length>0&&Be(pe,D,O),ye.length>0&&Be(ye,D,O),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function dn(M,D,O){const C=ve.isWebGL2;q===null&&(q=new Fn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Di:zn,minFilter:Fr,samples:C&&s===!0?4:0})),p.getDrawingBufferSize(z),C?q.setSize(z.x,z.y):q.setSize(Fs(z.x),Fs(z.y));const G=p.getRenderTarget();p.setRenderTarget(q),p.clear();const pe=p.toneMapping;p.toneMapping=Kt,Be(M,D,O),p.toneMapping=pe,_e.updateMultisampleRenderTarget(q),_e.updateRenderTargetMipmap(q),p.setRenderTarget(G)}function Be(M,D,O){const C=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pe=M.length;G<pe;G++){const ye=M[G],we=ye.object,Ae=ye.geometry,Ie=C===null?ye.material:C,Te=ye.group;we.layers.test(O.layers)&&kt(we,D,O,Ae,Ie,Te)}}function kt(M,D,O,C,G,pe){M.onBeforeRender(p,D,O,C,G,pe),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(p,D,O,C,M,pe),G.transparent===!0&&G.side===ln?(G.side=Ct,G.needsUpdate=!0,p.renderBufferDirect(O,D,C,G,M,pe),G.side=li,G.needsUpdate=!0,p.renderBufferDirect(O,D,C,G,M,pe),G.side=ln):p.renderBufferDirect(O,D,C,G,M,pe),M.onAfterRender(p,D,O,C,G,pe)}function wt(M,D,O){D.isScene!==!0&&(D=$);const C=be.get(M),G=f.state.lights,pe=f.state.shadowsArray,ye=G.state.version,we=Ne.getParameters(M,G.state,pe,D,O),Ae=Ne.getProgramCacheKey(we);let Ie=C.programs;C.environment=M.isMeshStandardMaterial?D.environment:null,C.fog=D.fog,C.envMap=(M.isMeshStandardMaterial?ot:at).get(M.envMap||C.environment),Ie===void 0&&(M.addEventListener("dispose",Ue),Ie=new Map,C.programs=Ie);let Te=Ie.get(Ae);if(Te!==void 0){if(C.currentProgram===Te&&C.lightsStateVersion===ye)return Ys(M,we),Te}else we.uniforms=Ne.getUniforms(M),M.onBuild(O,we,p),M.onBeforeCompile(we,p),Te=Ne.acquireProgram(we,Ae),Ie.set(Ae,Te),C.uniforms=we.uniforms;const Ee=C.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=v.uniform),Ys(M,we),C.needsLights=al(M),C.lightsStateVersion=ye,C.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMap.value=G.state.directionalShadowMap,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotShadowMap.value=G.state.spotShadowMap,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMap.value=G.state.pointShadowMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix);const ke=Te.getUniforms(),pt=Sr.seqWithValue(ke.seq,Ee);return C.currentProgram=Te,C.uniformsList=pt,Te}function Ys(M,D){const O=be.get(M);O.outputEncoding=D.outputEncoding,O.instancing=D.instancing,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function rl(M,D,O,C,G){D.isScene!==!0&&(D=$),_e.resetTextureUnits();const pe=D.fog,ye=C.isMeshStandardMaterial?D.environment:null,we=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:On,Ae=(C.isMeshStandardMaterial?ot:at).get(C.envMap||ye),Ie=C.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Te=!!C.normalMap&&!!O.attributes.tangent,Ee=!!O.morphAttributes.position,ke=!!O.morphAttributes.normal,pt=!!O.morphAttributes.color,Ht=C.toneMapped?p.toneMapping:Kt,fn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,He=fn!==void 0?fn.length:0,Ce=be.get(C),Gr=f.state.lights;if(W===!0&&(K===!0||M!==w)){const mt=M===w&&C.id===y;v.setState(C,M,mt)}let $e=!1;C.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Gr.state.version||Ce.outputEncoding!==we||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==Ae||C.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==v.numPlanes||Ce.numIntersection!==v.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==Te||Ce.morphTargets!==Ee||Ce.morphNormals!==ke||Ce.morphColors!==pt||Ce.toneMapping!==Ht||ve.isWebGL2===!0&&Ce.morphTargetsCount!==He)&&($e=!0):($e=!0,Ce.__version=C.version);let pn=Ce.currentProgram;$e===!0&&(pn=wt(C,D,G));let qs=!1,mi=!1,kr=!1;const ct=pn.getUniforms(),mn=Ce.uniforms;if(le.useProgram(pn.program)&&(qs=!0,mi=!0,kr=!0),C.id!==y&&(y=C.id,mi=!0),qs||w!==M){if(ct.setValue(k,"projectionMatrix",M.projectionMatrix),ve.logarithmicDepthBuffer&&ct.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,mi=!0,kr=!0),C.isShaderMaterial||C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshStandardMaterial||C.envMap){const mt=ct.map.cameraPosition;mt!==void 0&&mt.setValue(k,ne.setFromMatrixPosition(M.matrixWorld))}(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&ct.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial||C.isShadowMaterial||G.isSkinnedMesh)&&ct.setValue(k,"viewMatrix",M.matrixWorldInverse)}if(G.isSkinnedMesh){ct.setOptional(k,G,"bindMatrix"),ct.setOptional(k,G,"bindMatrixInverse");const mt=G.skeleton;mt&&(ve.floatVertexTextures?(mt.boneTexture===null&&mt.computeBoneTexture(),ct.setValue(k,"boneTexture",mt.boneTexture,_e),ct.setValue(k,"boneTextureSize",mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hr=O.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0&&ve.isWebGL2===!0)&&ee.update(G,O,C,pn),(mi||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,ct.setValue(k,"receiveShadow",G.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(mn.envMap.value=Ae,mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),mi&&(ct.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&sl(mn,kr),pe&&C.fog===!0&&Gt.refreshFogUniforms(mn,pe),Gt.refreshMaterialUniforms(mn,C,Y,I,q),Sr.upload(k,Ce.uniformsList,mn,_e)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Sr.upload(k,Ce.uniformsList,mn,_e),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&ct.setValue(k,"center",G.center),ct.setValue(k,"modelViewMatrix",G.modelViewMatrix),ct.setValue(k,"normalMatrix",G.normalMatrix),ct.setValue(k,"modelMatrix",G.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const mt=C.uniformsGroups;for(let Vr=0,ol=mt.length;Vr<ol;Vr++)if(ve.isWebGL2){const Qs=mt[Vr];me.update(Qs,pn),me.bind(Qs,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function sl(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function al(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,D,O){be.get(M.texture).__webglTexture=D,be.get(M.depthTexture).__webglTexture=O;const C=be.get(M);C.__hasExternalTextures=!0,C.__hasExternalTextures&&(C.__autoAllocateDepthBuffer=O===void 0,C.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const O=be.get(M);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,O=0){b=M,_=D,A=O;let C=!0,G=null,pe=!1,ye=!1;if(M){const Ae=be.get(M);Ae.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),C=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(M):Ae.__hasExternalTextures&&_e.rebindTextures(M,be.get(M.texture).__webglTexture,be.get(M.depthTexture).__webglTexture);const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Te=be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(G=Te[D],pe=!0):ve.isWebGL2&&M.samples>0&&_e.useMultisampledRTT(M)===!1?G=be.get(M).__webglMultisampledFramebuffer:G=Te,L.copy(M.viewport),N.copy(M.scissor),x=M.scissorTest}else L.copy(P).multiplyScalar(Y).floor(),N.copy(j).multiplyScalar(Y).floor(),x=X;if(le.bindFramebuffer(36160,G)&&ve.drawBuffers&&C&&le.drawBuffers(M,G),le.viewport(L),le.scissor(N),le.setScissorTest(x),pe){const Ae=be.get(M.texture);k.framebufferTexture2D(36160,36064,34069+D,Ae.__webglTexture,O)}else if(ye){const Ae=be.get(M.texture),Ie=D||0;k.framebufferTextureLayer(36160,36064,Ae.__webglTexture,O||0,Ie)}y=-1},this.readRenderTargetPixels=function(M,D,O,C,G,pe,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){le.bindFramebuffer(36160,we);try{const Ae=M.texture,Ie=Ae.format,Te=Ae.type;if(Ie!==Ft&&ae.convert(Ie)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=Te===Di&&(ce.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Te!==zn&&ae.convert(Te)!==k.getParameter(35738)&&!(Te===wn&&(ve.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-C&&O>=0&&O<=M.height-G&&k.readPixels(D,O,C,G,ae.convert(Ie),ae.convert(Te),pe)}finally{const Ae=b!==null?be.get(b).__webglFramebuffer:null;le.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(M,D,O=0){const C=Math.pow(2,-O),G=Math.floor(D.image.width*C),pe=Math.floor(D.image.height*C);_e.setTexture2D(D,0),k.copyTexSubImage2D(3553,O,0,0,M.x,M.y,G,pe),le.unbindTexture()},this.copyTextureToTexture=function(M,D,O,C=0){const G=D.image.width,pe=D.image.height,ye=ae.convert(O.format),we=ae.convert(O.type);_e.setTexture2D(O,0),k.pixelStorei(37440,O.flipY),k.pixelStorei(37441,O.premultiplyAlpha),k.pixelStorei(3317,O.unpackAlignment),D.isDataTexture?k.texSubImage2D(3553,C,M.x,M.y,G,pe,ye,we,D.image.data):D.isCompressedTexture?k.compressedTexSubImage2D(3553,C,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,ye,D.mipmaps[0].data):k.texSubImage2D(3553,C,M.x,M.y,ye,we,D.image),C===0&&O.generateMipmaps&&k.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(M,D,O,C,G=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,we=M.max.z-M.min.z+1,Ae=ae.convert(C.format),Ie=ae.convert(C.type);let Te;if(C.isData3DTexture)_e.setTexture3D(C,0),Te=32879;else if(C.isDataArrayTexture)_e.setTexture2DArray(C,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,C.flipY),k.pixelStorei(37441,C.premultiplyAlpha),k.pixelStorei(3317,C.unpackAlignment);const Ee=k.getParameter(3314),ke=k.getParameter(32878),pt=k.getParameter(3316),Ht=k.getParameter(3315),fn=k.getParameter(32877),He=O.isCompressedTexture?O.mipmaps[0]:O.image;k.pixelStorei(3314,He.width),k.pixelStorei(32878,He.height),k.pixelStorei(3316,M.min.x),k.pixelStorei(3315,M.min.y),k.pixelStorei(32877,M.min.z),O.isDataTexture||O.isData3DTexture?k.texSubImage3D(Te,G,D.x,D.y,D.z,pe,ye,we,Ae,Ie,He.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Te,G,D.x,D.y,D.z,pe,ye,we,Ae,He.data)):k.texSubImage3D(Te,G,D.x,D.y,D.z,pe,ye,we,Ae,Ie,He),k.pixelStorei(3314,Ee),k.pixelStorei(32878,ke),k.pixelStorei(3316,pt),k.pixelStorei(3315,Ht),k.pixelStorei(32877,fn),G===0&&C.generateMipmaps&&k.generateMipmap(Te),le.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?_e.setTextureCube(M,0):M.isData3DTexture?_e.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_e.setTexture2DArray(M,0):_e.setTexture2D(M,0),le.unbindTexture()},this.resetState=function(){_=0,A=0,b=null,le.reset(),V.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _m extends il{}_m.prototype.isWebGL1Renderer=!0;class vm extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Mm extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fo=new nt,Bs=new Vo,mr=new Ur,gr=new R;class ym extends ft{constructor(e=new $t,t=new Mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;fo.copy(i).invert(),Bs.copy(e.ray).applyMatrix4(fo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const u=c.getX(g);gr.fromBufferAttribute(d,u),po(gr,u,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,p=m;g<p;g++)gr.fromBufferAttribute(d,g),po(gr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function po(r,e,t,n,i,s,o){const a=Bs.distanceSqToPoint(r);if(a<t){const l=new R;Bs.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);const Sm={props:{amountX:{type:Number,default:150},amountY:{type:Number,default:80},color:{type:String,default:"#097bdb"},top:{type:Number,default:0}},setup(r){let t,n,i,s,o,a=0,l=0;function c(){t=document.createElement("div"),document.getElementById("iviewBg").appendChild(t),n=new Et(75,window.innerWidth/window.innerHeight,1,1e4),n.position.z=550,i=new vm;const m=r.amountX*r.amountY,g=new Float32Array(m*3),p=new Float32Array(m);let u=0,_=0;for(let y=0;y<r.amountX;y++)for(let w=0;w<r.amountY;w++)g[u]=y*100-r.amountX*100/2,g[u+1]=0,g[u+2]=w*100-r.amountY*100/2,p[_]=1,u+=3,_++;const A=new $t;A.setAttribute("position",new Lt(g,3)),A.setAttribute("scale",new Lt(p,1));const b=new hn({uniforms:{color:{value:new Fe(r.color)}},vertexShader:"attribute float scale; void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}",fragmentShader:"uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}"});o=new ym(A,b),i.add(o),s=new il({antialias:!0,alpha:!0}),s.setPixelRatio(window.devicePixelRatio),s.setClearAlpha(0),s.setSize(window.innerWidth,window.innerHeight),t.appendChild(s.domElement),t.style.touchAction="none",t.style.position="relative",t.style.top=`${r.top}px`,window.addEventListener("resize",d)}function h(){n.position.x+=(l-n.position.x)*.05,n.position.y=400,n.lookAt(i.position);const m=o.geometry.attributes.position.array,g=o.geometry.attributes.scale.array;let p=0,u=0;for(let _=0;_<r.amountX;_++)for(let A=0;A<r.amountY;A++)m[p+1]=Math.sin((_+a)*.3)*50+Math.sin((A+a)*.5)*50,g[u]=(Math.sin((_+a)*.3)+1)*10+(Math.sin((A+a)*.5)+1)*10,p+=3,u++;o.geometry.attributes.position.needsUpdate=!0,o.geometry.attributes.scale.needsUpdate=!0,s.render(i,n),a+=.1}function d(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function f(){requestAnimationFrame(f),h()}return mo(()=>{c(),f()}),{}}},bm={id:"iviewBg"};function wm(r,e,t,n,i,s){return qe(),tt("div",bm)}var Dm=zr(Sm,[["render",wm],["__scopeId","data-v-cca34280"]]);export{Cm as H,Lm as I,Dm as W,Em as _};
