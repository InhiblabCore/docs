import{_ as l}from"./chunks/demo.15265d43.js";import{m as p,o as E,c as o,b as s,w as C,a}from"./app.bf572af9.js";import"./chunks/stringify.90ac3b06.js";import"./chunks/intersection-observer.38c1bba6.js";const e=a('<h1 id="useeventemitter" tabindex="-1">useEventEmitter <a class="header-anchor" href="#useeventemitter" aria-hidden="true">#</a></h1><p>\u4F18\u96C5\u7684\u8FDB\u884C\u591A\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u8FDB\u884C\u4E8B\u4EF6\u901A\u77E5\u3002</p><blockquote><p>\u5728\u7EC4\u4EF6\u591A\u6B21\u6E32\u67D3\u65F6\uFF0C\u6BCF\u6B21\u6E32\u67D3\u8C03\u7528 <code>useEventEmitter</code> \u5F97\u5230\u7684\u8FD4\u56DE\u503C\u4F1A\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4E0D\u4F1A\u91CD\u590D\u521B\u5EFA EventEmitter \u7684\u5B9E\u4F8B\u3002</p><p>\u4E5F\u53EF\u521B\u5EFA\u5168\u5C40\u5171\u4EAB\u7684\u5B9E\u4F8B\u3002</p></blockquote><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),t=a(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useEventEmitter</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">event</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useEventEmitter</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">T</span><span style="color:#24292F;">&gt;();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>global</td><td>\u662F\u5426\u4E3A\u5168\u5C40</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>emit</td><td>\u53D1\u9001\u4E00\u4E2A\u4E8B\u4EF6\u901A\u77E5</td><td><code>(eventName?:string,val: T) =&gt; void</code></td></tr><tr><td>useSubscription</td><td>\u8BA2\u9605\u4E8B\u4EF6</td><td><code>(eventName?:string,callback: (val: T) =&gt; void) =&gt; void</code></td></tr></tbody></table>`,6),d=JSON.parse('{"title":"useEventEmitter","description":"","frontmatter":{"map":{"path":"/useEventEmitter"},"realPath":"src/useEventEmitter/index.zh-CN.md"},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Result","slug":"result"}],"relativePath":"useEventEmitter/index.md"}'),F={name:"useEventEmitter/index.md"},u=Object.assign(F,{setup(A){return(c,D)=>{const n=p("demo");return E(),o("div",null,[e,s(n,{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cvhp-button%20%40click%3D%22changeGlobal%22%3E%0A%20%20%20%20%20%20%20%20Global%20Event%0A%20%20%20%20%20%20%3C%2Fvhp-button%3E%0A%20%20%20%20%20%20%3Cvhp-button%20%40click%3D%22changeA%22%20style%3D%22margin-left%3A%2016px%3B%22%3ESub-event%20A%20communication%3C%2Fvhp-button%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cglobal-demo%20%2F%3E%0A%20%20%20%20%20%20%3Cdemo-a%20%3Aevent%3D%22eventA%22%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20GlobalDemo%20from%20'.%2FGlobalDemo.vue'%0A%20%20import%20DemoA%20from%20'.%2FDemoA.vue'%0A%0A%20%20import%20%7B%20useEventEmitter%20%7D%20from%20'vue-hooks-plus'%0A%0A%20%20const%20eventGlobal%20%3D%20useEventEmitter(%7B%20global%3A%20true%20%7D)%0A%20%20const%20eventA%20%3D%20useEventEmitter()%0A%0A%20%20const%20changeGlobal%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20eventGlobal.emit('change')%0A%20%20%7D%0A%0A%20%20const%20changeA%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20globalCount.value%20%2B%3D%201%0A%20%20%20%20eventA.emit('change')%0A%20%20%7D%0A%3C%2Fscript%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EchangeGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%20%20Global%20Event%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EchangeA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bmargin-left%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3BSub-event%20A%20communication%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eglobal-demo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Edemo-a%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eevent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EeventA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EGlobalDemo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3B.%2FGlobalDemo.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EDemoA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3B.%2FDemoA.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EuseEventEmitter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EeventGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EuseEventEmitter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eglobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EeventA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EuseEventEmitter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EchangeGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EeventGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Eemit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bchange%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EchangeA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237F848E%3B%20font-style%3A%20italic%22%3E%2F%2F%20globalCount.value%20%2B%3D%201%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EeventA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Eemit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bchange%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EchangeGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20Global%20Event%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EchangeA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-left%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3BSub-event%20A%20communication%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Eglobal-demo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Edemo-a%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eevent%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EeventA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20GlobalDemo%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B.%2FGlobalDemo.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20DemoA%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B.%2FDemoA.vue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useEventEmitter%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EeventGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseEventEmitter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%7B%20global%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EeventA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseEventEmitter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EchangeGlobal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20eventGlobal.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eemit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bchange%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EchangeA%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236E7781%22%3E%2F%2F%20globalCount.value%20%2B%3D%201%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20eventA.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eemit%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bchange%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useEventEmitter/demo/demo.vue",title:"\u57FA\u672C\u7528\u6CD5",desc:""},{default:C(()=>[s(l)]),_:1}),t])}}});export{d as __pageData,u as default};
