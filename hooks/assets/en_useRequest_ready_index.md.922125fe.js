import{_ as o}from"./chunks/demo.21f6023e.js";import{k as l,o as e,c as C,a as s,w as p,b as a}from"./app.c3f19403.js";const E=a('<h1 id="ready" tabindex="-1">Ready <a class="header-anchor" href="#ready" aria-hidden="true">#</a></h1><p><code>useRequest</code> provides an <code>options.ready</code>, when its value is false, the request will never be sent.</p><ul><li>1\u3001In the automatic mode of <code>manual=false</code>, every time <code>ready</code> changes from <code>false</code> to <code>true</code>, a request will be automatically executed with the parameter <code>options.defaultParams</code>.</li><li>2\u3001When <code>manual=true</code> manual request mode, as long as <code>ready=false</code>, the request triggered by run/runAsync will not be executed.</li></ul><h2 id="code-demonstration" tabindex="-1">Code demonstration <a class="header-anchor" href="#code-demonstration" aria-hidden="true">#</a></h2>',4),t=a('<h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>ready</td><td>Is the current request ready</td><td><code>boolean</code>|<code>Ref&lt;boolean&gt;</code></td><td><code>true</code></td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/InhiblabCore/vue-hooks-plus/blob/master/packages/hooks/src/useRequest/plugins/useAutoRunPlugin.ts" target="_blank" rel="noopener noreferrer">Source</a> \u2022 <a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useRequest/docs/ready/index.en-US.md" target="_blank" rel="noopener noreferrer">Docs</a> \u2022 <a href="https://github.com/InhiblabCore/vue-hooks-plus/blob/master/packages/hooks/src/useRequest/docs/ready/demo/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a></p>',4),y=JSON.parse('{"title":"Ready","description":"","frontmatter":{"map":{"path":"/useRequest/ready/"},"source":{"path":"https://github.com/InhiblabCore/vue-hooks-plus/blob/master/packages/hooks/src/useRequest/plugins/useAutoRunPlugin.ts","demoPath":"https://github.com/InhiblabCore/vue-hooks-plus/blob/master/packages/hooks/src/useRequest/docs/ready/demo/demo.vue"},"realPath":"src/useRequest/docs/ready/index.en-US.md"},"headers":[{"level":2,"title":"Code demonstration","slug":"code-demonstration"},{"level":2,"title":"Options","slug":"options"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"en/useRequest/ready/index.md"}'),F={name:"en/useRequest/ready/index.md"},i=Object.assign(F,{setup(r){return(A,c)=>{const n=l("demo");return e(),C("div",null,[E,s(n,{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3Eready%3A%20%7B%7B%20ready%20%7D%7D%3C%2Fdiv%3E%0A%20%20%3Cvhp-button%20style%3D%22margin-top%3A%2016px%3B%22%20%40click%3D%22()%20%3D%3E%20toggle()%22%3EchangeReady%3C%2Fvhp-button%3E%0A%20%20%3Cdiv%20style%3D%22margin-top%3A%2016px%3B%22%3E%7B%7B%20data%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20useRequest%2C%20useToggle%20%7D%20from%20'vue-hooks-plus'%0A%0A%20%20function%20getUsername()%3A%20Promise%3Cstring%3E%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(String(Date.now()))%0A%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%20%20const%20%5Bready%2C%20%7B%20toggle%20%7D%5D%20%3D%20useToggle(false)%0A%0A%20%20const%20%7B%20data%20%7D%20%3D%20useRequest(()%20%3D%3E%20getUsername()%2C%20%7B%0A%20%20%20%20ready%2C%0A%20%20%7D)%0A%3C%2Fscript%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3Bready%3A%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eready%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3BchangeReady%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EuseToggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%3B%20font-style%3A%20italic%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EString%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EDate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Enow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()))%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Eready%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%2C%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%5D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EuseToggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eready%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3Bready%3A%20%7B%7B%20ready%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3BchangeReady%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%7B%7B%20data%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useRequest%2C%20useToggle%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EString%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EDate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Enow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()))%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eready%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%5D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseToggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20ready%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useRequest/docs/ready/demo/demo.vue",title:"",desc:"Every time ready changes from false to true, the request will be executed."},{default:p(()=>[s(o)]),_:1}),t])}}});export{y as __pageData,i as default};
