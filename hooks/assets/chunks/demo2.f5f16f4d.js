import{e as i,r as a,Y as r,o,c as s,d as l,f as n,t as v,k as u}from"../app.367c0303.js";const y={style:{color:"#f00"}},x=i({__name:"demo",setup(d){const t=a(0);return r("uparrow",()=>{t.value=t.value+1}),r(40,()=>{t.value=t.value-1}),(p,e)=>(o(),s("div",null,[e[1]||(e[1]=l("p",null,"Try pressing the following: ",-1)),e[2]||(e[2]=l("div",null,"1. Press ArrowUp by key to increase",-1)),e[3]||(e[3]=l("div",null,"2. Press ArrowDown by keyCode to decrease",-1)),l("div",null,[e[0]||(e[0]=n(" counter: ")),l("span",y,v(t.value),1)])]))}}),f={key:0,style:{color:"#f00"}},m={key:0,style:{color:"#f00"}},k={key:0,style:{color:"#f00"}},_={key:0,style:{color:"#f00"}},c={key:0,style:{color:"#f00"}},$=i({__name:"demo1",setup(d){const t=a();return r(["shift.c"],()=>{t.value=1}),r(["meta"],()=>{t.value=2}),r("ctrl.alt.c",()=>{t.value=3}),r("ctrl.enter",()=>{t.value=4}),r("ctrl.alt.0",()=>{t.value=5}),(p,e)=>(o(),s("div",null,[e[5]||(e[5]=l("p",null,"Try pressing the following: ",-1)),l("div",null,[e[0]||(e[0]=n(" 1. Modifier key [shift.c]: ")),t.value===1?(o(),s("span",f,"complete")):u("",!0)]),l("div",null,[e[1]||(e[1]=n(" 2. Modifier key [meta]:")),t.value===2?(o(),s("span",m)):u("",!0)]),l("div",null,[e[2]||(e[2]=n(" 3. Modifier key [ctrl.alt.c]: ")),t.value===3?(o(),s("span",k)):u("",!0)]),l("div",null,[e[3]||(e[3]=n(" 4. Modifier key [ctrl.enter]: ")),t.value===4?(o(),s("span",_)):u("",!0)]),l("div",null,[e[4]||(e[4]=n(" 5. Modifier key [ctrl.alt.0]: ")),t.value===5?(o(),s("span",c)):u("",!0)])]))}}),M={key:0,style:{color:"#f00"}},g={key:0,style:{color:"#f00"}},T=i({__name:"demo2",setup(d){const t=a();return r(["shift.c"],()=>{t.value=1}),r(["c"],()=>{t.value=2},{exactMatch:!0}),(p,e)=>(o(),s("div",null,[e[2]||(e[2]=l("p",null,"Try pressing the following: ",-1)),l("div",null,[e[0]||(e[0]=n(" 1. Modifier key [shift.c]: ")),t.value===1?(o(),s("span",M,"complete")):u("",!0)]),l("div",null,[e[1]||(e[1]=n("2. Modifier key [c]: ")),t.value===2?(o(),s("span",g,"complete")):u("",!0)])]))}});export{x as _,$ as a,T as b};
