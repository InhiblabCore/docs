import{u as D}from"./useRequest.0be4893d.js";import"./stringify.d118bae4.js";import{e as I,r as f,D as x,v as b,n as k,o as F,c as $,d as t,a as i,w as s,s as l,t as u,u as a,F as w}from"../app.90f4be9f.js";const A={style:{"margin-top":"16px"}},B=t("div",{style:{opacity:"0.6"}}," count !==0 and count !==5 ready is true ",-1),N=t("br",null,null,-1),S={style:{"margin-top":"16px"}},q={style:{"margin-top":"16px"}},L=t("thead",null,[t("th",null,"Time"),t("th",null,"Id"),t("th",null,"StoreId"),t("th",null,"Count")],-1),K=I({__name:"demo",setup(T){function h({id:c,storeId:n,count:e}){return new Promise(r=>{setTimeout(()=>{r({time:Date.now(),id:c,storeId:n,count:e})},1e3)})}const p=f(1),m=x({id:1}),o=f(0),y=b(()=>o.value!==0&&o.value!==5),{data:d,loading:C}=D(()=>h({id:p.value,storeId:m.id,count:o.value}),{initialData:{time:Date.now(),id:"-",count:"-",storeId:"-"},ready:y,refreshDeps:[p,()=>m.id,o]});return(c,n)=>{var r,v,_,g;const e=k("vhp-button");return F(),$(w,null,[t("div",A,[t("div",null,[i(e,{type:"button",onClick:n[0]||(n[0]=V=>o.value++)},{default:s(()=>[l("count is "+u(o.value),1)]),_:1}),B]),N,i(e,{onClick:n[1]||(n[1]=()=>p.value=1)},{default:s(()=>[l("Change ID = 1")]),_:1}),i(e,{onClick:n[2]||(n[2]=()=>p.value=2),style:{"margin-left":"16px"}},{default:s(()=>[l("Change ID = 2")]),_:1}),i(e,{onClick:n[3]||(n[3]=()=>m.id=1),style:{"margin-left":"16px"}},{default:s(()=>[l(" Change store ID = 1 ")]),_:1}),i(e,{onClick:n[4]||(n[4]=()=>m.id=2),style:{"margin-left":"16px"}},{default:s(()=>[l(" Change store ID = 2 ")]),_:1})]),t("div",S,"Loading\uFF1A"+u(a(C)?"loading":""),1),t("div",q,[l("Data Value\uFF1A "),t("div",null,[t("table",null,[L,t("tbody",null,[t("tr",null,[t("th",null,u((r=a(d))==null?void 0:r.time),1),t("th",null,u((v=a(d))==null?void 0:v.id),1),t("th",null,u((_=a(d))==null?void 0:_.storeId),1),t("th",null,u((g=a(d))==null?void 0:g.count),1)])])])])])],64)}}}),P={style:{"margin-top":"16px"}},U=t("div",{style:{opacity:"0.6"}}," count !==0 and count !==5 ready is true ",-1),E=t("br",null,null,-1),R={style:{"margin-top":"16px"}},j={style:{"margin-top":"16px"}},z=t("thead",null,[t("th",null,"Time"),t("th",null,"Id"),t("th",null,"StoreId"),t("th",null,"Count")],-1),M=I({__name:"demo1",setup(T){function h({id:c,storeId:n,count:e}){return console.log("request"),new Promise(r=>{setTimeout(()=>{r({time:Date.now(),id:c,storeId:n,count:e})},1e3)})}const p=f(1),m=x({id:1}),o=f(0),y=b(()=>o.value!==0&&o.value!==5),{data:d,loading:C}=D(()=>h({id:p.value,storeId:m.id,count:o.value}),{initialData:{time:Date.now(),id:"-",count:"-",storeId:"-"},ready:y,refreshDeps:!0});return(c,n)=>{var r,v,_,g;const e=k("vhp-button");return F(),$(w,null,[t("div",P,[t("div",null,[i(e,{type:"button",onClick:n[0]||(n[0]=V=>o.value++)},{default:s(()=>[l("count is "+u(o.value),1)]),_:1}),U]),E,i(e,{onClick:n[1]||(n[1]=()=>p.value=1)},{default:s(()=>[l("Change ID = 1")]),_:1}),i(e,{onClick:n[2]||(n[2]=()=>p.value=2),style:{"margin-left":"16px"}},{default:s(()=>[l("Change ID = 2")]),_:1}),i(e,{onClick:n[3]||(n[3]=()=>m.id=1),style:{"margin-left":"16px"}},{default:s(()=>[l(" Change store ID = 1 ")]),_:1}),i(e,{onClick:n[4]||(n[4]=()=>m.id=2),style:{"margin-left":"16px"}},{default:s(()=>[l(" Change store ID = 2 ")]),_:1})]),t("div",R,"Loading\uFF1A"+u(a(C)?"loading":""),1),t("div",j,[l("Data Value\uFF1A "),t("div",null,[t("table",null,[z,t("tbody",null,[t("tr",null,[t("th",null,u((r=a(d))==null?void 0:r.time),1),t("th",null,u((v=a(d))==null?void 0:v.id),1),t("th",null,u((_=a(d))==null?void 0:_.storeId),1),t("th",null,u((g=a(d))==null?void 0:g.count),1)])])])])])],64)}}});export{K as _,M as a};