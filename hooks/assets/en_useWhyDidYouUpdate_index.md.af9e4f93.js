import{_ as o}from"./chunks/demo.93271be4.js";import{n as t,o as e,c as E,d as a,f as n,a as l,w as C,b as c}from"./app.367c0303.js";const y=JSON.parse('{"title":"useWhyDidYouUpdate","description":"","frontmatter":{"map":{"path":"/useWhyDidYouUpdate"},"realPath":"src/useWhyDidYouUpdate/index.en-US.md"},"headers":[{"level":2,"title":"Code demonstration","slug":"code-demonstration"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Result","slug":"result"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"en/useWhyDidYouUpdate/index.md"}'),F={name:"en/useWhyDidYouUpdate/index.md"},i=Object.assign(F,{setup(r){return(A,s)=>{const p=t("demo");return e(),E("div",null,[s[0]||(s[0]=a("h1",{id:"usewhydidyouupdate",tabindex:"-1"},[n("useWhyDidYouUpdate "),a("a",{class:"header-anchor",href:"#usewhydidyouupdate","aria-hidden":"true"},"#")],-1)),s[1]||(s[1]=a("p",null,"Help developers troubleshoot what changes have caused component rerender.",-1)),s[2]||(s[2]=a("h2",{id:"code-demonstration",tabindex:"-1"},[n("Code demonstration "),a("a",{class:"header-anchor",href:"#code-demonstration","aria-hidden":"true"},"#")],-1)),l(p,{code:"%3C!--%20%0A%20%20%3Ctemplate%3E%0A%09%3Cdiv%3E%0A%09%09%3Cdiv%3Enumber%3A%20%7B%7B%20count%20%7D%7D%3C%2Fdiv%3E%0A%09%09%3Cdiv%3E%0A%09%09%09randomNum%3A%20%7B%7B%20mathRef%20%7D%7D%0A%09%09%09%3Cvhp-button%20%40click%3D%22()%20%3D%3E%20(mathRef%20%3D%20Math.random())%22%20style%3D%22margin-left%3A%208px%22%3E%0A%09%09%09%09%F0%9F%8E%B2%0A%09%09%09%3C%2Fvhp-button%3E%0A%09%09%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20watch%2C%20toRef%2C%20toRefs%2C%20computed%20%7D%20from%20'vue'%0A%20%0Aimport%20%7B%20useWhyDidYouUpdate%20%7D%20from%20'vue-hooks-plus'%0A%0Aconst%20props%20%3D%20defineProps%3C%7B%0A%09count%3A%20number%0A%7D%3E()%0A%0Aconst%20mathRef%20%3D%20ref(Math.random())%0AuseWhyDidYouUpdate('useWhyDidYouUpdateComponent'%2C%20%7B%0A%09...toRefs(props)%2C%0A%09mathRef%2C%0A%7D)%0A%3C%2Fscript%3E%0A%0A%0A%0A%20--%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdemo-item%20%3Acount%3D%22count%22%20%2F%3E%0A%20%20%20%20%3Cvhp-button%20%40click%3D%22count%20%2B%3D%201%22%3E%2B%3C%2Fvhp-button%3E%0A%20%20%20%20%3Cvhp-button%20%40click%3D%22count%20-%3D%201%22%20style%3D%22margin-left%3A%208px%3B%22%3E-%3C%2Fvhp-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20DemoItem%20from%20'.%2FDemoItem.vue'%0A%0A%20%20const%20count%20%3D%20ref(0)%0A%3C%2Fscript%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%26lt%3B!--%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%20%20%26lt%3Btemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%26lt%3Bdiv%26gt%3Bnumber%3A%20%7B%7B%20count%20%7D%7D%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%09randomNum%3A%20%7B%7B%20mathRef%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%09%26lt%3Bvhp-button%20%40click%3D%26quot%3B()%20%3D%26gt%3B%20(mathRef%20%3D%20Math.random())%26quot%3B%20style%3D%26quot%3Bmargin-left%3A%208px%26quot%3B%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%09%09%F0%9F%8E%B2%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%09%26lt%3B%2Fvhp-button%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%26lt%3B%2Ftemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%20setup%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3Eimport%20%7B%20ref%2C%20watch%2C%20toRef%2C%20toRefs%2C%20computed%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3Eimport%20%7B%20useWhyDidYouUpdate%20%7D%20from%20%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3Econst%20props%20%3D%20defineProps%26lt%3B%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09count%3A%20number%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%7D%26gt%3B()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3Econst%20mathRef%20%3D%20ref(Math.random())%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3EuseWhyDidYouUpdate(%26%2339%3BuseWhyDidYouUpdateComponent%26%2339%3B%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09...toRefs(props)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%09mathRef%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%26lt%3B%2Fscript%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%20--%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Edemo-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%2B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%2B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E-%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bmargin-left%3A%208px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B-%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EDemoItem%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3B.%2FDemoItem.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3B!--%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%20%20%26lt%3Btemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%26lt%3Bdiv%26gt%3Bnumber%3A%20%7B%7B%20count%20%7D%7D%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%26lt%3Bdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09randomNum%3A%20%7B%7B%20mathRef%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09%26lt%3Bvhp-button%20%40click%3D%26quot%3B()%20%3D%26gt%3B%20(mathRef%20%3D%20Math.random())%26quot%3B%20style%3D%26quot%3Bmargin-left%3A%208px%26quot%3B%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09%09%F0%9F%8E%B2%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%09%26lt%3B%2Fvhp-button%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09%26lt%3B%2Fdiv%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3B%2Ftemplate%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%20setup%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Eimport%20%7B%20ref%2C%20watch%2C%20toRef%2C%20toRefs%2C%20computed%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Eimport%20%7B%20useWhyDidYouUpdate%20%7D%20from%20%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Econst%20props%20%3D%20defineProps%26lt%3B%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09count%3A%20number%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%7D%26gt%3B()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3Econst%20mathRef%20%3D%20ref(Math.random())%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3EuseWhyDidYouUpdate(%26%2339%3BuseWhyDidYouUpdateComponent%26%2339%3B%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09...toRefs(props)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%09mathRef%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%26lt%3B%2Fscript%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%20--%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Edemo-item%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Ecount%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%2B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%2B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Ecount%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E-%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-left%3A%208px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B-%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20DemoItem%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B.%2FDemoItem.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useWhyDidYouUpdate/demo/demo.vue",title:"Basic usage",desc:"Console to view the print results"},{default:C(()=>[l(o)]),_:1}),s[3]||(s[3]=c(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">IProps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">any</span><span style="color:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="color:#61AFEF;">useWhyDidYouUpdate</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">componentName</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">IProps</span><span style="color:#ABB2BF;">): </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">IProps</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#953800;">Record</span><span style="color:#24292F;">&lt;</span><span style="color:#0550AE;">string</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">any</span><span style="color:#24292F;">&gt;;</span></span>
<span class="line"><span style="color:#8250DF;">useWhyDidYouUpdate</span><span style="color:#24292F;">(componentName: string, props: IProps): </span><span style="color:#CF222E;">void</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>componentName</td><td>Required, the name of the observation component</td><td><code>string</code></td><td>-</td></tr><tr><td>props</td><td>Required, data to be observed (<code>state</code> or <code>props</code> and other data that may lead to rerender)</td><td><code>Proxy&lt;object&gt;</code></td><td>-</td></tr></tbody></table><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3><p>Please open the browser console, you can see the output of the changed observed <code>state</code> or <code>props</code>.</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useWhyDidYouUpdate/index.ts" target="_blank" rel="noopener noreferrer">Source</a> \u2022 <a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useWhyDidYouUpdate/index.en-US.md" target="_blank" rel="noopener noreferrer">Docs</a> \u2022 <a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useWhyDidYouUpdate/demo" target="_blank" rel="noopener noreferrer">Demo</a></p>`,8))])}}});export{y as __pageData,i as default};
