import{e as v,v as c,k as f,o as _,c as x,d as p,t as y,j as e,a as o,w as s,n as a}from"../app.b1a612ce.js";const C={class:"contain"},$=v({__name:"demo",setup(k){const[r,{inc:i,dec:u,set:m,reset:d}]=c(20,{min:1,max:10});return(b,t)=>{const n=f("vhp-button");return _(),x("div",null,[p("p",null,y(e(r))+" [max: 10; min: 1;]",1),p("div",C,[o(n,{type:"vhp-button",onClick:t[0]||(t[0]=l=>e(i)())},{default:s(()=>[a(" Inc() ")]),_:1}),o(n,{type:"vhp-button",onClick:t[1]||(t[1]=l=>e(u)()),style:{"margin-left":"8px"}},{default:s(()=>[a(" Dec() ")]),_:1}),o(n,{type:"vhp-button",onClick:t[2]||(t[2]=l=>e(m)(3)),style:{"margin-left":"8px"}},{default:s(()=>[a(" Set(3) ")]),_:1}),o(n,{type:"vhp-button",onClick:t[3]||(t[3]=l=>e(d)()),style:{"margin-left":"8px"}},{default:s(()=>[a(" Reset() ")]),_:1})])])}}});export{$ as _};
