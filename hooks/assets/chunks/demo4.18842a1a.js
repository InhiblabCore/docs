import"./stringify.f75e9b86.js";import{r as F,v as B,g as j,x as z,k as K,e as T,n as E,o as n,c as a,u as e,I as b,F as N,q as D,d as L,J as H,w,s as $,t as M,a as V,z as Q,A as W}from"../app.90f4be9f.js";import{u as G}from"./useRequest.d9058b22.js";import{u as X}from"./index.f5a11e3e.js";import{g as tt}from"./domTarget.25866deb.js";import{u as et}from"./index.8ea47668.js";const ot=f=>f===document||f===document.body?Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop):f.scrollTop,nt=f=>f.scrollHeight||Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),st=f=>f.clientHeight||Math.max(document.documentElement.clientHeight,document.body.clientHeight),P=(f,c={})=>{const{target:v,isNoMore:_,threshold:d=100,reloadDeps:y=[],manual:x,onBefore:u,onSuccess:m,onError:t,onFinally:s}=c,l=F(),[o,{set:r}]=X(),p=g=>{l.value=g},i=B(()=>_?_(l.value):!1),{loading:I,run:k,runAsync:h,cancel:Z}=G(async g=>{const C=await f(g);return g?l.value={...C,list:[...g.list,...C.list]}:l.value=C,C},{manual:x,onFinally:(g,C,S)=>{r(!1),s==null||s(C,S)},onBefore:()=>u==null?void 0:u(),onSuccess:g=>{setTimeout(()=>{A()}),m==null||m(g)},onError:g=>t==null?void 0:t(g)}),R=()=>{i.value||(r(!0),k(l.value))},q=()=>{if(!i.value)return r(!0),h(l.value)},J=()=>k(),O=()=>h(),A=()=>{const g=tt(v);if(!g)return;const C=ot(g),S=nt(g),Y=st(g);S-C<=Y+d&&R()};et("scroll",()=>{I.value||o.value||A()},{target:v}),j(y,()=>{k()});const U=B(()=>o.value&&I.value);return{data:z(l),loading:K(U),loadingMore:o,noMore:i,loadMore:R,loadMoreAsync:q,reload:J,reloadAsync:O,mutate:p,scrollMethod:A,cancel:Z}},rt={key:0},lt={style:{"margin-top":"8px"}},at={key:1},it={key:0},Dt=T({__name:"demo",setup(f){const c=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(u,m){let t=0;u&&(t=c.findIndex(r=>r===u));const s=t+m,l=c.slice(t,s),o=c.length>=s?c[s]:void 0;return new Promise(r=>{setTimeout(()=>{r({list:l,nextId:o})},1e3)})}const{data:_,loading:d,loadMore:y,loadingMore:x}=P(u=>v(u==null?void 0:u.nextId,4));return(u,m)=>{var s,l,o;const t=E("vhp-button");return n(),a("div",null,[e(d)?(n(),a("p",rt)):b("",!0),(n(!0),a(N,null,D((s=e(_))==null?void 0:s.list,r=>(n(),a("div",{key:r,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},M(r),1))),128)),L("div",lt,[(l=e(_))!=null&&l.nextId?(n(),H(t,{key:0,type:"button",onClick:m[0]||(m[0]=()=>e(y)()),disabled:e(x)},{default:w(()=>[$(M(e(x)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(n(),a("p",at,[(o=e(_))!=null&&o.nextId?b("",!0):(n(),a("span",it,"No more data"))]))])])}}}),dt={key:0},ut={style:{"margin-top":"8px"}},ct={key:1},pt={key:0},Ht=T({__name:"demo1",setup(f){const v=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function _(t,s){const l=(t-1)*s,o=t*s,r=v.slice(l,o);return new Promise(p=>{setTimeout(()=>{p({list:r,total:v.length})},1e3)})}const{data:d,loading:y,loadMore:x,loadingMore:u}=P(t=>{const s=t?Math.ceil(t.list.length/4)+1:1;return _(s,4)}),m=B(()=>{var t;return d.value&&((t=d.value)==null?void 0:t.list.length)<d.value.total});return(t,s)=>{var o;const l=E("vhp-button");return n(),a("div",null,[e(y)?(n(),a("p",dt)):b("",!0),(n(!0),a(N,null,D((o=e(d))==null?void 0:o.list,r=>(n(),a("div",{key:r,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},M(r),1))),128)),L("div",ut,[e(m)?(n(),H(l,{key:0,type:"button",onClick:s[0]||(s[0]=()=>e(x)()),disabled:e(u)},{default:w(()=>[$(M(e(u)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(n(),a("p",ct,[e(m)?b("",!0):(n(),a("span",pt,"No more data"))]))])])}}}),mt={key:0},_t={style:{"margin-top":"8px"}},gt={key:1},ft={key:0},Pt=T({__name:"demo2",setup(f){const c=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(t,s){let l=0;t&&(l=c.findIndex(i=>i===t));const o=l+s,r=c.slice(l,o),p=c.length>=o?c[o]:void 0;return new Promise(i=>{setTimeout(()=>{i({list:r,nextId:p})},1e3)})}const _=F(),{data:d,loading:y,loadMore:x,loadingMore:u,noMore:m}=P(t=>v(t==null?void 0:t.nextId,4),{target:_,isNoMore:t=>(t==null?void 0:t.nextId)===void 0});return(t,s)=>{var o;const l=E("vhp-button");return n(),a("div",{ref_key:"domRef",ref:_,style:{height:"150px",overflow:"auto",border:"1px solid",padding:"12px"}},[e(y)?(n(),a("p",mt)):b("",!0),(n(!0),a(N,null,D((o=e(d))==null?void 0:o.list,r=>(n(),a("div",{key:r,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},M(r),1))),128)),L("div",_t,[e(m)?(n(),a("p",gt,[e(m)?(n(),a("span",ft,"No more data")):b("",!0)])):(n(),H(l,{key:0,type:"button",onClick:s[0]||(s[0]=()=>e(x)()),disabled:e(u)},{default:w(()=>[$(M(e(u)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"]))])],512)}}}),vt={style:{"margin-bottom":"16px"}},xt={key:0},yt={style:{"margin-top":"8px"}},ht={key:1},kt={key:0},At=T({__name:"demo3",setup(f){const c=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(t,s){let l=0;t&&(l=c.findIndex(i=>i===t));const o=l+s,r=c.slice(l,o),p=c.length>=o?c[o]:void 0;return new Promise(i=>{setTimeout(()=>{i({list:r,nextId:p})},1e3)})}const _=F(""),{data:d,loading:y,loadMore:x,loadingMore:u,reload:m}=P(t=>v(t==null?void 0:t.nextId,4),{reloadDeps:[_]});return(t,s)=>{var o,r,p;const l=E("vhp-button");return n(),a("div",null,[V(l,{onClick:s[0]||(s[0]=()=>e(m)()),style:{"margin-bottom":"8px"}},{default:w(()=>[$(" Reset ")]),_:1}),L("div",vt,[$("Change will be reset\uFF1A"),Q(L("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=i=>_.value=i)},null,512),[[W,_.value]])]),e(y)?(n(),a("p",xt)):b("",!0),(n(!0),a(N,null,D((o=e(d))==null?void 0:o.list,i=>(n(),a("div",{key:i,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},M(i),1))),128)),L("div",yt,[(r=e(d))!=null&&r.nextId?(n(),H(l,{key:0,type:"button",onClick:s[2]||(s[2]=()=>e(x)()),disabled:e(u)},{default:w(()=>[$(M(e(u)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(n(),a("p",ht,[(p=e(d))!=null&&p.nextId?b("",!0):(n(),a("span",kt,"No more data"))]))])])}}}),bt={key:0},Mt={style:{"margin-top":"8px"}},It={key:1},$t={key:0},St=T({__name:"demo4",setup(f){const c=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(o,r){let p=0;o&&(p=c.findIndex(h=>h===o));const i=p+r,I=c.slice(p,i),k=c.length>=i?c[i]:void 0;return new Promise(h=>{setTimeout(()=>{h({list:I,nextId:k})},1e3)})}function _(o){return new Promise(r=>{setTimeout(()=>{r()},1e3)})}const{data:d,loading:y,loadMore:x,loadingMore:u,mutate:m}=P(o=>v(o==null?void 0:o.nextId,4)),{loading:t,params:s,run:l}=G(_,{manual:!0,onSuccess:(o,[r])=>{var p,i;if(d.value){const I=(p=d.value)==null?void 0:p.list.findIndex(k=>k===r);(i=d==null?void 0:d.value)==null||i.list.splice(I,1),m({...d.value})}}});return(o,r)=>{var i,I,k;const p=E("vhp-button");return n(),a("div",null,[e(y)?(n(),a("p",bt)):b("",!0),(n(!0),a(N,null,D((i=e(d))==null?void 0:i.list,h=>(n(),a("div",{key:h,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},[$(M(h)+" ",1),V(p,{style:{"margin-left":"8px"},disabled:e(t)&&e(s)[0]===h,onClick:()=>e(l)(h)},{default:w(()=>[$(" delete")]),_:2},1032,["disabled","onClick"])]))),128)),L("div",Mt,[(I=e(d))!=null&&I.nextId?(n(),H(p,{key:0,type:"button",onClick:r[0]||(r[0]=()=>e(x)()),disabled:e(u)},{default:w(()=>[$(M(e(u)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(n(),a("p",It,[(k=e(d))!=null&&k.nextId?b("",!0):(n(),a("span",$t,"No more data"))]))])])}}});export{Dt as _,Ht as a,Pt as b,At as c,St as d};