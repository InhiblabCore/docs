import"./stringify.7c979077.js";import{u as v}from"./index.cbf6f151.js";import{e as f,n as c,o as _,c as x,d as r,t as y,u as e,a as o,w as s,s as p}from"../app.fefc8ec7.js";const C={class:"contain"},N=f({__name:"demo",setup(b){const[l,{inc:i,dec:u,set:m,reset:d}]=v(20,{min:1,max:10});return(k,t)=>{const n=c("vhp-button");return _(),x("div",null,[r("p",null,y(e(l))+" [max: 10; min: 1;]",1),r("div",C,[o(n,{type:"vhp-button",onClick:t[0]||(t[0]=a=>e(i)())},{default:s(()=>[p(" Inc() ")]),_:1}),o(n,{type:"vhp-button",onClick:t[1]||(t[1]=a=>e(u)()),style:{"margin-left":"8px"}},{default:s(()=>[p(" Dec() ")]),_:1}),o(n,{type:"vhp-button",onClick:t[2]||(t[2]=a=>e(m)(3)),style:{"margin-left":"8px"}},{default:s(()=>[p(" Set(3) ")]),_:1}),o(n,{type:"vhp-button",onClick:t[3]||(t[3]=a=>e(d)()),style:{"margin-left":"8px"}},{default:s(()=>[p(" Reset() ")]),_:1})])])}}});export{N as _};
