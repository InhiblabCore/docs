import{e as p,z as f,q as u,o as k,c as m,d as i,t as c,u as t,A as g,a as l,w as n,f as r}from"../app.cd02527d.js";const v=p({__name:"demo",setup(_){const[s,o]=f(),d={dark:{backgroundColor:"#000",color:"white",paddingLeft:"4px"},light:{backgroundColor:"#fff",color:"black",paddingLeft:"4px"}};return(x,e)=>{const a=u("vhp-button");return k(),m("div",null,[i("p",{style:g(t(s)?d.dark:d.light)},c(t(s)?"dark":"light"),5),i("div",null,[l(a,{onClick:e[0]||(e[0]=()=>t(o)(!0))},{default:n(()=>[r("Dark")]),_:1}),l(a,{style:{"margin-left":"16px"},onClick:e[1]||(e[1]=()=>t(o)(!1))},{default:n(()=>[r(" Light ")]),_:1}),l(a,{style:{"margin-left":"16px"},onClick:e[2]||(e[2]=()=>t(o)(void 0))},{default:n(()=>[r(" Follow System ")]),_:1})])])}}});export{v as _};