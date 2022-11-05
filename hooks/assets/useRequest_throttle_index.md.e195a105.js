import{d as A,r as c,w as y,o as E,c as t,e as C,x as i,y as B,t as d,u,F as h,h as p,i as m,a as e,n as g}from"./app.e3c783c8.js";import{u as _}from"./chunks/useRequest.831af6f6.js";import"./chunks/screenfull.98168371.js";import"./chunks/debounce.d83f872a.js";import"./chunks/throttle.8e74bd24.js";const v={style:{"margin-top":"16px"}},q={style:{"margin-top":"16px"}},f=A({setup(D){function l(){return new Promise((o,n)=>{setTimeout(()=>{o(`${String(Date.now())}`)},1e3)})}const s=c(""),{data:a,run:F}=_(()=>l(),{throttleWait:300,manual:!0});return y(s,()=>{F()}),(o,n)=>(E(),t(h,null,[C("div",v,[i(C("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>s.value=r)},null,512),[[B,s.value]])]),C("div",q,"\u8BFB\u53D6\u503C\uFF1A"+d(u(a)),1)],64))}}),x=e('<h1 id="\u8282\u6D41" tabindex="-1">\u8282\u6D41 <a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a></h1><p><code>useRequest</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A <code>options.throttleWait</code> \u53C2\u6570\uFF0C\u8FDB\u5165\u8282\u6D41\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5982\u679C\u9891\u7E41\u89E6\u53D1 <code>run</code> \u6216\u8005 <code>runAsync</code>\uFF0C\u5219\u4F1A\u4EE5\u8282\u6D41\u7B56\u7565\u8FDB\u884C\u8BF7\u6C42\u3002</p><h1 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h1>',3),w=e('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><p>throttle \u6240\u6709\u53C2\u6570\u7528\u6CD5\u548C\u6548\u679C\u540C <a href="https://www.lodashjs.com/docs/lodash.throttle/" target="_blank" rel="noopener noreferrer">lodash.throttle</a></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>throttleWait</td><td>\u8282\u6D41\u7B49\u5F85\u65F6\u95F4, \u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF0C\u8BBE\u7F6E\u540E\uFF0C\u8FDB\u5165\u8282\u6D41\u6A21\u5F0F</td><td><code>number</code></td><td>-</td></tr><tr><td>throttleLeading</td><td>\u5728\u8282\u6D41\u5F00\u59CB\u524D\u6267\u884C\u8C03\u7528</td><td><code>boolean</code>|<code> Ref&lt;boolean&gt;</code></td><td><code>true</code></td></tr><tr><td>throttleTrailing</td><td>\u5728\u8282\u6D41\u7ED3\u675F\u540E\u6267\u884C\u8C03\u7528</td><td><code>boolean</code>|<code> Ref&lt;boolean&gt;</code></td><td><code>true</code></td></tr></tbody></table><h2 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h2><ul><li><code>options.throttleWait</code>\u3001<code>options.throttleLeading</code>\u3001<code>options.throttleTrailing</code> \u652F\u6301\u52A8\u6001\u53D8\u5316\u3002</li><li><code>runAsync</code> \u5728\u771F\u6B63\u6267\u884C\u65F6\uFF0C\u4F1A\u8FD4\u56DE <code>Promise</code>\u3002\u5728\u672A\u88AB\u6267\u884C\u65F6\uFF0C\u4E0D\u4F1A\u6709\u4EFB\u4F55\u8FD4\u56DE\u3002</li></ul>',6),U=JSON.parse('{"title":"\u8282\u6D41","description":"","frontmatter":{"map":{"path":"/useRequest/throttle/"},"realPath":"src/useRequest/docs/throttle/index.md"},"headers":[{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Options","slug":"options"},{"level":2,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F"}],"relativePath":"useRequest/throttle/index.md"}'),T={name:"useRequest/throttle/index.md"},V=Object.assign(T,{setup(D){return(l,s)=>{const a=g("demo");return E(),t("div",null,[x,p(a,{code:"%3Ctemplate%3E%0A%09%3Cdiv%20style%3D%22margin-top%3A%2016px%3B%22%3E%3Cinput%20type%3D%22text%22%20v-model%3D%22text%22%20%2F%3E%3C%2Fdiv%3E%0A%09%3Cdiv%20style%3D%22margin-top%3A%2016px%3B%22%3E%E8%AF%BB%E5%8F%96%E5%80%BC%EF%BC%9A%7B%7B%20data%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useRequest%20%7D%20from%20'vue-hooks-plus'%0A%0Afunction%20getUsername()%3A%20Promise%3Cstring%3E%20%7B%0A%09return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%09%09setTimeout(()%20%3D%3E%20%7B%0A%09%09%09resolve(%60%24%7BString(Date.now())%7D%60)%0A%09%09%7D%2C%201000)%0A%09%7D)%0A%7D%0A%0Aconst%20text%20%3D%20ref('')%0A%0Aconst%20%7B%20data%2C%20run%20%7D%20%3D%20useRequest(()%20%3D%3E%20getUsername()%2C%20%7B%0A%09throttleWait%3A%20300%2C%0A%09manual%3A%20true%2C%0A%7D)%0A%0Awatch(text%2C%20()%20%3D%3E%20%7B%0A%09run()%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%2F%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E8%AF%BB%E5%8F%96%E5%80%BC%EF%BC%9A%7B%7B%20data%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20ref%2C%20watch%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20useRequest%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFA657%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E((%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFA657%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFA657%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%09%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%60%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EString%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EDate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Enow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E())%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%7D%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%09%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09throttleWait%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E300%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09manual%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Ewatch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(text%2C%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%2F%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E8%AF%BB%E5%8F%96%E5%80%BC%EF%BC%9A%7B%7B%20data%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20ref%2C%20watch%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useRequest%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E((%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%09%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%60%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EString%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EDate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Enow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E())%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%7D%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%09%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09throttleWait%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E300%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09manual%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ewatch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(text%2C%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useRequest/docs/throttle/demo/demo.vue",title:"",desc:"input \u6846\u4E2D\u5FEB\u901F\u8F93\u5165\u6587\u672C,\u9891\u7E41\u89E6\u53D1 run\uFF0C\u6BCF\u6B21\u95F4\u9694 200ms \u6267\u884C"},{default:m(()=>[p(f)]),_:1}),w])}}});export{U as __pageData,V as default};
