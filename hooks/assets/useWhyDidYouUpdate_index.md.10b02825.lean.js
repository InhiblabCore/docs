import"./chunks/stringify.af98eb1c.js";import"./chunks/intersection-observer.38c1bba6.js";import{s as d,w as m,d as y,r as i,A as h,n as D,o as F,c,e as r,t as A,q as t,h as E,i as e,a as B}from"./app.34efe815.js";function g(o,a){const l=d(()=>Object.keys(a).map(s=>s));m(Object.keys(a).map(s=>a[s]),(s,n)=>{const p={};l.value.forEach((u,C)=>{n[C]!==s[C]&&(p[u]={from:n[C],to:s[C]})}),Object.keys(p).length&&console.log("[why-did-you-update]",o,p)},{deep:!0})}const v=y({__name:"DemoItem",props:{count:null},setup(o){const a=o,l=i(Math.random());return g("useWhyDidYouUpdateComponent",{...h(a),mathRef:l}),(s,n)=>{const p=D("vhp-button");return F(),c("div",null,[r("div",null,"number: "+A(o.count),1),r("div",null,[t(" randomNum: "+A(l.value)+" ",1),E(p,{onClick:n[0]||(n[0]=()=>l.value=Math.random()),style:{"margin-left":"8px"}},{default:e(()=>[t(" \u{1F3B2} ")]),_:1})])])}}}),f=y({__name:"demo",setup(o){const a=i(0);return(l,s)=>{const n=D("vhp-button");return F(),c("div",null,[E(v,{count:a.value},null,8,["count"]),E(n,{onClick:s[0]||(s[0]=p=>a.value+=1)},{default:e(()=>[t("\u65B0\u589E")]),_:1}),E(n,{onClick:s[1]||(s[1]=p=>a.value-=1)},{default:e(()=>[t("\u51CF\u5C11")]),_:1})])}}}),_=B("",4),b=B("",6),W=JSON.parse('{"title":"useWhyDidYouUpdate","description":"","frontmatter":{"map":{"path":"/useWhyDidYouUpdate"},"realPath":"src/useWhyDidYouUpdate/index.md"},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Result","slug":"result"}],"relativePath":"useWhyDidYouUpdate/index.md"}'),q={name:"useWhyDidYouUpdate/index.md"},Y=Object.assign(q,{setup(o){return(a,l)=>{const s=D("demo");return F(),c("div",null,[_,E(s,{code:"%3C!--%20%0A%20%20%3Ctemplate%3E%0A%09%3Cdiv%3E%0A%09%09%3Cdiv%3Enumber%3A%20%7B%7B%20count%20%7D%7D%3C%2Fdiv%3E%0A%09%09%3Cdiv%3E%0A%09%09%09randomNum%3A%20%7B%7B%20mathRef%20%7D%7D%0A%09%09%09%3Cvhp-button%20%40click%3D%22()%20%3D%3E%20(mathRef%20%3D%20Math.random())%22%20style%3D%22margin-left%3A%208px%22%3E%0A%09%09%09%09%F0%9F%8E%B2%0A%09%09%09%3C%2Fvhp-button%3E%0A%09%09%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20watch%2C%20toRef%2C%20toRefs%2C%20computed%20%7D%20from%20'vue'%0A%20%0Aimport%20%7B%20useWhyDidYouUpdate%20%7D%20from%20'vue-hooks-plus'%0A%0Aconst%20props%20%3D%20defineProps%3C%7B%0A%09count%3A%20number%0A%7D%3E()%0A%0Aconst%20mathRef%20%3D%20ref(Math.random())%0AuseWhyDidYouUpdate('useWhyDidYouUpdateComponent'%2C%20%7B%0A%09...toRefs(props)%2C%0A%09mathRef%2C%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A%0A%20--%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdemo-item%20%3Acount%3D%22count%22%20%2F%3E%0A%20%20%20%20%3Cvhp-button%20%40click%3D%22count%20%2B%3D%201%22%3E%E6%96%B0%E5%A2%9E%3C%2Fvhp-button%3E%0A%20%20%20%20%3Cvhp-button%20%40click%3D%22count%20-%3D%201%22%3E%E5%87%8F%E5%B0%91%3C%2Fvhp-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20DemoItem%20from%20'.%2FDemoItem.vue'%0A%0A%20%20const%20count%20%3D%20ref(0)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%26lt%3B!--%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%20%20%26lt%3Btemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%26lt%3Bdiv%26gt%3Bnumber%3A%20%7B%7B%20count%20%7D%7D%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%09randomNum%3A%20%7B%7B%20mathRef%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%09%26lt%3Bvhp-button%20%40click%3D%26quot%3B()%20%3D%26gt%3B%20(mathRef%20%3D%20Math.random())%26quot%3B%20style%3D%26quot%3Bmargin-left%3A%208px%26quot%3B%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%09%09%F0%9F%8E%B2%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%09%26lt%3B%2Fvhp-button%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%26lt%3B%2Ftemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%20setup%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3Eimport%20%7B%20ref%2C%20watch%2C%20toRef%2C%20toRefs%2C%20computed%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3Eimport%20%7B%20useWhyDidYouUpdate%20%7D%20from%20%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3Econst%20props%20%3D%20defineProps%26lt%3B%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09count%3A%20number%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%7D%26gt%3B()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3Econst%20mathRef%20%3D%20ref(Math.random())%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3EuseWhyDidYouUpdate(%26%2339%3BuseWhyDidYouUpdateComponent%26%2339%3B%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09...toRefs(props)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%09mathRef%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%26lt%3B%2Fscript%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%26lt%3Bstyle%20scoped%20lang%3D%26quot%3Bless%26quot%3B%26gt%3B%26lt%3B%2Fstyle%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238B949E%22%3E%20--%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Edemo-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Ecount%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%2B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E6%96%B0%E5%A2%9E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Ecount%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E-%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E5%87%8F%E5%B0%91%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20DemoItem%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B.%2FDemoItem.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3B!--%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%20%20%26lt%3Btemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%26lt%3Bdiv%26gt%3Bnumber%3A%20%7B%7B%20count%20%7D%7D%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09randomNum%3A%20%7B%7B%20mathRef%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09%26lt%3Bvhp-button%20%40click%3D%26quot%3B()%20%3D%26gt%3B%20(mathRef%20%3D%20Math.random())%26quot%3B%20style%3D%26quot%3Bmargin-left%3A%208px%26quot%3B%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09%09%F0%9F%8E%B2%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09%26lt%3B%2Fvhp-button%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3B%2Ftemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%20setup%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Eimport%20%7B%20ref%2C%20watch%2C%20toRef%2C%20toRefs%2C%20computed%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Eimport%20%7B%20useWhyDidYouUpdate%20%7D%20from%20%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Econst%20props%20%3D%20defineProps%26lt%3B%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09count%3A%20number%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%7D%26gt%3B()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Econst%20mathRef%20%3D%20ref(Math.random())%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3EuseWhyDidYouUpdate(%26%2339%3BuseWhyDidYouUpdateComponent%26%2339%3B%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09...toRefs(props)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09mathRef%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3B%2Fscript%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3Bstyle%20scoped%20lang%3D%26quot%3Bless%26quot%3B%26gt%3B%26lt%3B%2Fstyle%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%20--%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Edemo-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Ecount%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%2B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E6%96%B0%E5%A2%9E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Ecount%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E-%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E5%87%8F%E5%B0%91%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20DemoItem%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B.%2FDemoItem.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useWhyDidYouUpdate/demo/demo.vue",title:"\u57FA\u672C\u7528\u6CD5",desc:"\u63A7\u5236\u53F0\u67E5\u770B\u6253\u5370\u7ED3\u679C"},{default:e(()=>[E(f)]),_:1}),b])}}});export{W as __pageData,Y as default};
