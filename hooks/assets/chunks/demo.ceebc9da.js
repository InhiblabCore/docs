import"./stringify.7c979077.js";import{u as f}from"./index.64141a97.js";import{u as m}from"./index.4519b465.js";import{v as p,j as k,e as g,n as v,o as b,c as y,d as c,t as _,u as a,y as x,a as d,w as u,s as i}from"../app.fefc8ec7.js";function C(){const[s,r]=f("dark-mode-enabled"),t=w(),o=p(()=>typeof s.value!="undefined"?s.value:t.value);return k(()=>{const n="dark-mode",e=window.document.body;o.value?e.classList.add(n):e.classList.remove(n)}),[o,r]}function w(){return m(["(prefers-color-scheme: dark)"],[!0],!1)}const M=g({__name:"demo",setup(s){const[r,t]=C(),o={dark:{backgroundColor:"#000",color:"white",paddingLeft:"4px"},light:{backgroundColor:"#fff",color:"black",paddingLeft:"4px"}};return(n,e)=>{const l=v("vhp-button");return b(),y("div",null,[c("p",{style:x(a(r)?o.dark:o.light)},_(a(r)?"dark":"light"),5),c("div",null,[d(l,{onClick:e[0]||(e[0]=()=>a(t)(!0))},{default:u(()=>[i("Dark")]),_:1}),d(l,{style:{"margin-left":"16px"},onClick:e[1]||(e[1]=()=>a(t)(!1))},{default:u(()=>[i(" Light ")]),_:1}),d(l,{style:{"margin-left":"16px"},onClick:e[2]||(e[2]=()=>a(t)(void 0))},{default:u(()=>[i(" Follow System ")]),_:1})])])}}});export{M as _};
