import{e as C,V as L,k as w,o,c as s,j as t,W as x,F as N,m as D,d as h,X as P,w as I,n as k,t as g,M as R,r as B,a as F,A,B as E,Y as S}from"../app.64e50989.js";const j={key:0},q={style:{"margin-top":"8px"}},G={key:1},U={key:0},lt=C({__name:"demo",setup(T){const l=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(p,u){let e=0;p&&(e=l.findIndex(i=>i===p));const d=e+u,a=l.slice(e,d),n=l.length>=d?l[d]:void 0;return new Promise(i=>{setTimeout(()=>{i({list:a,nextId:n})},1e3)})}const{data:_,loading:c,loadMore:y,loadingMore:f}=L(p=>v(p==null?void 0:p.nextId,4));return(p,u)=>{var d,a,n;const e=w("vhp-button");return o(),s("div",null,[t(c)?(o(),s("p",j)):x("",!0),(o(!0),s(N,null,D((d=t(_))==null?void 0:d.list,i=>(o(),s("div",{key:i,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},g(i),1))),128)),h("div",q,[(a=t(_))!=null&&a.nextId?(o(),P(e,{key:0,type:"button",onClick:u[0]||(u[0]=()=>t(y)()),disabled:t(f)},{default:I(()=>[k(g(t(f)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(o(),s("p",G,[(n=t(_))!=null&&n.nextId?x("",!0):(o(),s("span",U,"No more data"))]))])])}}}),W={key:0},X={style:{"margin-top":"8px"}},Y={key:1},Z={key:0},V=4,rt=C({__name:"demo1",setup(T){const l=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(u,e){const d=(u-1)*e,a=u*e,n=l.slice(d,a);return new Promise(i=>{setTimeout(()=>{i({list:n,total:l.length})},1e3)})}const{data:_,loading:c,loadMore:y,loadingMore:f}=L(u=>{const e=u?Math.ceil(u.list.length/V)+1:1;return v(e,V)}),p=R(()=>{var u;return _.value&&((u=_.value)==null?void 0:u.list.length)<_.value.total});return(u,e)=>{var a;const d=w("vhp-button");return o(),s("div",null,[t(c)?(o(),s("p",W)):x("",!0),(o(!0),s(N,null,D((a=t(_))==null?void 0:a.list,n=>(o(),s("div",{key:n,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},g(n),1))),128)),h("div",X,[p.value?(o(),P(d,{key:0,type:"button",onClick:e[0]||(e[0]=()=>t(y)()),disabled:t(f)},{default:I(()=>[k(g(t(f)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(o(),s("p",Y,[p.value?x("",!0):(o(),s("span",Z,"No more data"))]))])])}}}),H={key:0},J={style:{"margin-top":"8px"}},K={key:1},O={key:0},ut=C({__name:"demo2",setup(T){const l=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(e,d){let a=0;e&&(a=l.findIndex(r=>r===e));const n=a+d,i=l.slice(a,n),m=l.length>=n?l[n]:void 0;return new Promise(r=>{setTimeout(()=>{r({list:i,nextId:m})},1e3)})}const _=B(),{data:c,loading:y,loadMore:f,loadingMore:p,noMore:u}=L(e=>v(e==null?void 0:e.nextId,4),{target:_,isNoMore:e=>(e==null?void 0:e.nextId)===void 0});return(e,d)=>{var n;const a=w("vhp-button");return o(),s("div",{ref_key:"domRef",ref:_,style:{height:"150px",overflow:"auto",border:"1px solid",padding:"12px"}},[t(y)?(o(),s("p",H)):x("",!0),(o(!0),s(N,null,D((n=t(c))==null?void 0:n.list,i=>(o(),s("div",{key:i,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},g(i),1))),128)),h("div",J,[t(u)?(o(),s("p",K,[t(u)?(o(),s("span",O,"No more data")):x("",!0)])):(o(),P(a,{key:0,type:"button",onClick:d[0]||(d[0]=()=>t(f)()),disabled:t(p)},{default:I(()=>[k(g(t(p)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"]))])],512)}}}),Q={style:{"margin-bottom":"16px"}},z={key:0},tt={style:{"margin-top":"8px"}},et={key:1},ot={key:0},ct=C({__name:"demo3",setup(T){const l=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(e,d){let a=0;e&&(a=l.findIndex(r=>r===e));const n=a+d,i=l.slice(a,n),m=l.length>=n?l[n]:void 0;return new Promise(r=>{setTimeout(()=>{r({list:i,nextId:m})},1e3)})}const _=B(""),{data:c,loading:y,loadMore:f,loadingMore:p,reload:u}=L(e=>v(e==null?void 0:e.nextId,4),{reloadDeps:[_]});return(e,d)=>{var n,i,m;const a=w("vhp-button");return o(),s("div",null,[F(a,{onClick:d[0]||(d[0]=()=>t(u)()),style:{"margin-bottom":"8px"}},{default:I(()=>[k(" Reset ")]),_:1}),h("div",Q,[k("Change will be reset\uFF1A"),A(h("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=r=>_.value=r)},null,512),[[E,_.value]])]),t(y)?(o(),s("p",z)):x("",!0),(o(!0),s(N,null,D((n=t(c))==null?void 0:n.list,r=>(o(),s("div",{key:r,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},g(r),1))),128)),h("div",tt,[(i=t(c))!=null&&i.nextId?(o(),P(a,{key:0,type:"button",onClick:d[2]||(d[2]=()=>t(f)()),disabled:t(p)},{default:I(()=>[k(g(t(p)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(o(),s("p",et,[(m=t(c))!=null&&m.nextId?x("",!0):(o(),s("span",ot,"No more data"))]))])])}}}),nt={key:0},st={style:{"margin-top":"8px"}},it={key:1},dt={key:0},pt=C({__name:"demo4",setup(T){const l=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];function v(n,i){let m=0;n&&(m=l.findIndex(b=>b===n));const r=m+i,M=l.slice(m,r),$=l.length>=r?l[r]:void 0;return new Promise(b=>{setTimeout(()=>{b({list:M,nextId:$})},1e3)})}function _(n){return new Promise(i=>{setTimeout(()=>{i()},1e3)})}const{data:c,loading:y,loadMore:f,loadingMore:p,mutate:u}=L(n=>v(n==null?void 0:n.nextId,4)),{loading:e,params:d,run:a}=S(_,{manual:!0,onSuccess:(n,[i])=>{var m,r;if(c.value){const M=(m=c.value)==null?void 0:m.list.findIndex($=>$===i);(r=c==null?void 0:c.value)==null||r.list.splice(M,1),u({...c.value})}}});return(n,i)=>{var r,M,$;const m=w("vhp-button");return o(),s("div",null,[t(y)?(o(),s("p",nt)):x("",!0),(o(!0),s(N,null,D((r=t(c))==null?void 0:r.list,b=>(o(),s("div",{key:b,style:{padding:"12px",border:"1px solid #f5f5f5","text-align":"center"}},[k(g(b)+" ",1),F(m,{style:{"margin-left":"8px"},disabled:t(e)&&t(d)[0]===b,onClick:()=>t(a)(b)},{default:I(()=>[k(" delete")]),_:2},1032,["disabled","onClick"])]))),128)),h("div",st,[(M=t(c))!=null&&M.nextId?(o(),P(m,{key:0,type:"button",onClick:i[0]||(i[0]=()=>t(f)()),disabled:t(p)},{default:I(()=>[k(g(t(p)?"Loading more...":"Click to load more"),1)]),_:1},8,["disabled"])):(o(),s("p",it,[($=t(c))!=null&&$.nextId?x("",!0):(o(),s("span",dt,"No more data"))]))])])}}});export{lt as _,rt as a,ut as b,ct as c,pt as d};
