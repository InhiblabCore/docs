import{u as D}from"./useRequest.d85d7707.js";import"./stringify.421d9888.js";import{e as I,r as h,D as x,v as b,n as k,o as F,c as $,d as t,a as s,w as i,s as u,t as l,u as a,F as w}from"../app.90f4be9f.js";const A={style:{"margin-top":"16px"}},B=t("div",{style:{opacity:"0.6"}}," count !==0 and count !==5 ready is true ",-1),N=t("br",null,null,-1),S={style:{"margin-top":"16px"}},q={style:{"margin-top":"16px"}},L=t("thead",null,[t("th",null,"Time"),t("th",null,"Id"),t("th",null,"StoreId"),t("th",null,"Count")],-1),M=I({__name:"demo",setup(T){function f({id:c,storeId:n,count:e}){return new Promise(r=>{setTimeout(()=>{r({time:Date.now(),id:c,storeId:n,count:e})},1e3)})}const p=h(1),m=x({id:1}),o=h(0),y=b(()=>o.value!==0&&o.value!==5),{data:d,loading:C}=D(()=>f({id:p.value,storeId:m.id,count:o.value}),{initialData:{time:Date.now(),id:"-",count:"-",storeId:"-"},ready:y,refreshDeps:[p,()=>m.id,o]});return(c,n)=>{var r,_,v,g;const e=k("vhp-button");return F(),$(w,null,[t("div",A,[t("div",null,[s(e,{type:"button",onClick:n[0]||(n[0]=V=>o.value++)},{default:i(()=>[u("count is "+l(o.value),1)]),_:1}),B]),N,s(e,{onClick:n[1]||(n[1]=()=>p.value=1)},{default:i(()=>[u("Change ID = 1")]),_:1}),s(e,{onClick:n[2]||(n[2]=()=>p.value=2),style:{"margin-left":"16px"}},{default:i(()=>[u("Change ID = 2")]),_:1}),s(e,{onClick:n[3]||(n[3]=()=>m.id=1),style:{"margin-left":"16px"}},{default:i(()=>[u(" Change store ID = 1 ")]),_:1}),s(e,{onClick:n[4]||(n[4]=()=>m.id=2),style:{"margin-left":"16px"}},{default:i(()=>[u(" Change store ID = 2 ")]),_:1})]),t("div",S,"Loading\uFF1A"+l(a(C)?"loading":""),1),t("div",q,[u("Data Value\uFF1A "),t("div",null,[t("table",null,[L,t("tbody",null,[t("tr",null,[t("th",null,l((r=a(d))==null?void 0:r.time),1),t("th",null,l((_=a(d))==null?void 0:_.id),1),t("th",null,l((v=a(d))==null?void 0:v.storeId),1),t("th",null,l((g=a(d))==null?void 0:g.count),1)])])])])])],64)}}}),P={style:{"margin-top":"16px"}},U=t("div",{style:{opacity:"0.6"}}," count !==0 and count !==5 ready is true ",-1),E=t("br",null,null,-1),R={style:{"margin-top":"16px"}},j={style:{"margin-top":"16px"}},z=t("span",null,"Data Value\uFF1A",-1),G=t("thead",null,[t("th",null,"Time"),t("th",null,"Id"),t("th",null,"StoreId"),t("th",null,"Count")],-1),O=I({__name:"demo1",setup(T){function f({id:c,storeId:n,count:e}){return console.log("request"),new Promise(r=>{setTimeout(()=>{r({time:Date.now(),id:c,storeId:n,count:e})},1e3)})}const p=h(1),m=x({id:1}),o=h(0),y=b(()=>o.value!==0&&o.value!==5),{data:d,loading:C}=D(()=>f({id:p.value,storeId:m.id,count:o.value}),{initialData:{time:Date.now(),id:"-",count:"-",storeId:"-"},ready:y,refreshDeps:!0});return(c,n)=>{var r,_,v,g;const e=k("vhp-button");return F(),$(w,null,[t("div",P,[t("div",null,[s(e,{type:"button",onClick:n[0]||(n[0]=V=>o.value++)},{default:i(()=>[u("count is "+l(o.value),1)]),_:1}),U]),E,s(e,{onClick:n[1]||(n[1]=()=>p.value=1)},{default:i(()=>[u("Change ID = 1")]),_:1}),s(e,{onClick:n[2]||(n[2]=()=>p.value=2),style:{"margin-left":"16px"}},{default:i(()=>[u("Change ID = 2")]),_:1}),s(e,{onClick:n[3]||(n[3]=()=>m.id=1),style:{"margin-left":"16px"}},{default:i(()=>[u(" Change store ID = 1 ")]),_:1}),s(e,{onClick:n[4]||(n[4]=()=>m.id=2),style:{"margin-left":"16px"}},{default:i(()=>[u(" Change store ID = 2 ")]),_:1})]),t("div",R,"Loading\uFF1A"+l(a(C)?"loading":""),1),t("div",j,[z,t("div",null,[t("table",null,[G,t("tbody",null,[t("tr",null,[t("th",null,l((r=a(d))==null?void 0:r.time),1),t("th",null,l((_=a(d))==null?void 0:_.id),1),t("th",null,l((v=a(d))==null?void 0:v.storeId),1),t("th",null,l((g=a(d))==null?void 0:g.count),1)])])])])])],64)}}});export{M as _,O as a};
