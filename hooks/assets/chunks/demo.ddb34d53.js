import"./stringify.51fb85fa.js";import{u as m}from"./index.d33efac1.js";import"./intersection-observer.38c1bba6.js";import{u as f}from"./index.c633dcd7.js";import{s as p,l as k,d as g,m as v,o as b,c as _,e as c,t as x,u as a,v as y,b as d,w as i,q as u}from"../app.4d6255f4.js";function C(){const[s,r]=f("dark-mode-enabled"),t=w(),o=p(()=>typeof s.value!="undefined"?s.value:t.value);return k(()=>{const n="dark-mode",e=window.document.body;o.value?e.classList.add(n):e.classList.remove(n)}),[o,r]}function w(){return m(["(prefers-color-scheme: dark)"],[!0],!1)}const N=g({__name:"demo",setup(s){const[r,t]=C(),o={dark:{backgroundColor:"#000",color:"white",paddingLeft:"4px"},light:{backgroundColor:"#fff",color:"black",paddingLeft:"4px"}};return(n,e)=>{const l=v("vhp-button");return b(),_("div",null,[c("p",{style:y(a(r)?o.dark:o.light)},x(a(r)?"dark":"light"),5),c("div",null,[d(l,{onClick:e[0]||(e[0]=()=>a(t)(!0))},{default:i(()=>[u("Dark")]),_:1}),d(l,{style:{"margin-left":"16px"},onClick:e[1]||(e[1]=()=>a(t)(!1))},{default:i(()=>[u(" Light ")]),_:1}),d(l,{style:{"margin-left":"16px"},onClick:e[2]||(e[2]=()=>a(t)(void 0))},{default:i(()=>[u(" Follow System ")]),_:1})])])}}});export{N as _};
