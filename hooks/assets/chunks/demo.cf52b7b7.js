import{e as d,r as c,at as f,af as C,k as i,o as _,c as v,d as p,t as m,n as s,a,w as l}from"../app.b1a612ce.js";const h=d({__name:"DemoItem",props:{count:{}},setup(r){const e=r,o=c(Math.random());return f("useWhyDidYouUpdateComponent",{...C(e),mathRef:o}),(t,n)=>{const u=i("vhp-button");return _(),v("div",null,[p("div",null,"number: "+m(t.count),1),p("div",null,[s(" randomNum: "+m(o.value)+" ",1),a(u,{onClick:n[0]||(n[0]=()=>o.value=Math.random()),style:{"margin-left":"8px"}},{default:l(()=>[s(" \u{1F3B2} ")]),_:1})])])}}}),x=d({__name:"demo",setup(r){const e=c(0);return(o,t)=>{const n=i("vhp-button");return _(),v("div",null,[a(h,{count:e.value},null,8,["count"]),a(n,{onClick:t[0]||(t[0]=u=>e.value+=1)},{default:l(()=>[s("+")]),_:1}),a(n,{onClick:t[1]||(t[1]=u=>e.value-=1),style:{"margin-left":"8px"}},{default:l(()=>[s("-")]),_:1})])}}});export{x as _};
