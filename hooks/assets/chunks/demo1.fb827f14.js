import{e as i,T as _,q as m,o as p,c as d,d as o,A as f,u as e,a as t,w as n,f as l}from"../app.032845d0.js";const b=i({__name:"demo",setup(g){const[s,{enterFullscreen:u,exitFullscreen:a,toggleFullscreen:c}]=_();return(x,C)=>{const r=m("vhp-button");return p(),d("div",null,[o("div",{style:f([{margin:"bottom 16px"},e(s)?"Fullscreen":"Not fullscreen"])},null,4),o("div",null,[t(r,{type:"button",onClick:e(u)},{default:n(()=>[l(" enterFullscreen ")]),_:1},8,["onClick"]),t(r,{type:"button",onClick:e(a),style:{margin:"0 8px"}},{default:n(()=>[l(" exitFullscreen ")]),_:1},8,["onClick"]),t(r,{type:"button",onClick:e(c)},{default:n(()=>[l(" toggleFullscreen ")]),_:1},8,["onClick"])])])}}}),v="https://v2.cn.vuejs.org/images/logo.svg",k=i({__name:"demo1",setup(g){const[,{enterFullscreen:s}]=_(()=>document.getElementById("fullscreen-img"));return(u,a)=>{const c=m("vhp-button");return p(),d("div",null,[o("div",{style:{"margin-bottom":"16px"}},[o("img",{id:"fullscreen-img",src:v,style:{width:"320px"},alt:""})]),t(c,{type:"button",onClick:e(s)},{default:n(()=>[l(" enterFullscreen ")]),_:1},8,["onClick"])])}}});export{b as _,k as a};
