import{e as i,R as _,k as m,o as p,c as d,d as o,y as v,j as e,a as t,w as n,n as l}from"../app.b1a612ce.js";const C=i({__name:"demo",setup(g){const[s,{enterFullscreen:u,exitFullscreen:a,toggleFullscreen:c}]=_();return(k,x)=>{const r=m("vhp-button");return p(),d("div",null,[o("div",{style:v([{margin:"bottom 16px"},e(s)?"Fullscreen":"Not fullscreen"])},null,4),o("div",null,[t(r,{type:"button",onClick:e(u)},{default:n(()=>[l(" enterFullscreen ")]),_:1},8,["onClick"]),t(r,{type:"button",onClick:e(a),style:{margin:"0 8px"}},{default:n(()=>[l(" exitFullscreen ")]),_:1},8,["onClick"]),t(r,{type:"button",onClick:e(c)},{default:n(()=>[l(" toggleFullscreen ")]),_:1},8,["onClick"])])])}}}),f="https://v2.cn.vuejs.org/images/logo.svg",F=i({__name:"demo1",setup(g){const[,{enterFullscreen:s}]=_(()=>document.getElementById("fullscreen-img"));return(u,a)=>{const c=m("vhp-button");return p(),d("div",null,[o("div",{style:{"margin-bottom":"16px"}},[o("img",{id:"fullscreen-img",src:f,style:{width:"320px"},alt:""})]),t(c,{type:"button",onClick:e(s)},{default:n(()=>[l(" enterFullscreen ")]),_:1},8,["onClick"])])}}});export{C as _,F as a};
