import{_ as C}from"./chunks/demo.fa0b288f.js";import{k as o,o as p,c as E,a as n,w as e,d as s,n as a,b as t}from"./app.25ea1577.js";const F=s("h1",{id:"\u9519\u8BEF\u91CD\u8BD5",tabindex:"-1"},[a("\u9519\u8BEF\u91CD\u8BD5 "),s("a",{class:"header-anchor",href:"#\u9519\u8BEF\u91CD\u8BD5","aria-hidden":"true"},"#")],-1),r=s("p",null,[s("code",null,"useRequest"),a(" \u63D0\u4F9B\u4E86\u4E00\u4E2A "),s("code",null,"options.retryCount"),a(" \u53C2\u6570\uFF0C\u6307\u5B9A\u9519\u8BEF\u91CD\u8BD5\u6B21\u6570\uFF0C\u5219 "),s("code",null,"useRequest"),a(" \u5728\u5931\u8D25\u540E\u4F1A\u8FDB\u884C\u91CD\u8BD5")],-1),A=s("h2",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[a("\u4EE3\u7801\u6F14\u793A "),s("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#")],-1),c=t("",6),h=JSON.parse('{"title":"\u9519\u8BEF\u91CD\u8BD5","description":"","frontmatter":{"map":{"path":"/useRequest/retry/"},"source":{"path":"https://github.com/InhiblabCore/vue-hooks-plus/blob/master/packages/hooks/src/useRequest/plugins/useRetryPlugin.ts","demoPath":"https://github.com/InhiblabCore/vue-hooks-plus/blob/master/packages/hooks/src/useRequest/docs/retry/demo/demo.vue"},"realPath":"src/useRequest/docs/retry/index.zh-CN.md"},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Options","slug":"options"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"useRequest/retry/index.md"}'),D={name:"useRequest/retry/index.md"},m=Object.assign(D,{setup(B){return(y,i)=>{const l=o("demo");return p(),E("div",null,[F,r,A,n(l,{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22margin-top%3A%2016px%3B%22%0A%20%20%3EError%20count%EF%BC%9A%20%3Cspan%3E%7B%7B%20count%20%7D%7D%3C%2Fspan%3E%3C%2Fdiv%0A%20%20%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20import%20%7B%20useRequest%20%7D%20from%20'vue-hooks-plus'%0A%0A%20%20function%20getUsername()%3A%20Promise%3Cstring%3E%20%7B%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20reject(%60error%60)%0A%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%0A%20%20const%20count%20%3D%20ref(0)%0A%0A%20%20useRequest(()%20%3D%3E%20getUsername()%2C%20%7B%0A%20%20%20%20retryCount%3A%203%2C%0A%20%20%20%20onError%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20count.value%20%2B%3D%201%0A%20%20%20%20%7D%2C%0A%20%20%7D)%0A%3C%2Fscript%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26gt%3BError%20count%EF%BC%9A%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E((%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%3B%20font-style%3A%20italic%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%3B%20font-style%3A%20italic%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%60error%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EretryCount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EonError%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3A%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%2B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E1%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26gt%3BError%20count%EF%BC%9A%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%7B%7B%20count%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useRequest%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E((%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%60error%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecount%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20retryCount%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E3%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EonError%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3A%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20count.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%2B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useRequest/docs/retry/demo/demo.vue",title:"",desc:"\u8BF7\u6C42\u9519\u8BEF\u91CD\u8BD5\u4E09\u6B21,\u52A0\u4E0A\u9996\u6B21\u8BF7\u6C42\u5931\u8D25\uFF0C\u6240\u4EE5\u6700\u540E\u4E3A\u56DB\u6B21\u9519\u8BEF"},{default:e(()=>[n(C)]),_:1}),c])}}});export{h as __pageData,m as default};
