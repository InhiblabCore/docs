import{_ as o}from"./chunks/demo.d5fdef12.js";import{n as t,o as l,c as p,a,w as C,d as s,s as n,b as E}from"./app.8202eaee.js";import"./chunks/stringify.a5507314.js";import"./chunks/domTarget.b96984d9.js";import"./chunks/useEffectWithTarget.a239e03a.js";const r=s("h1",{id:"uselongpress",tabindex:"-1"},[n("useLongPress "),s("a",{class:"header-anchor",href:"#uselongpress","aria-hidden":"true"},"#")],-1),c=s("p",null,"\u76D1\u542C Element \u7684\u957F\u6309\u4E8B\u4EF6\u3002",-1),F=s("h2",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[n("\u4EE3\u7801\u6F14\u793A "),s("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#")],-1),A=E(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">isPressing</span><span style="color:#ABB2BF;"> , </span><span style="color:#E5C07B;">pressingTime</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useLongPress</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">BasicTarget</span><span style="color:#ABB2BF;"> , </span><span style="color:#E06C75;">options</span><span style="color:#C678DD;">?:</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">LongPressOptions</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">isPressing</span><span style="color:#24292F;"> , </span><span style="color:#0550AE;">pressingTime</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useLongPress</span><span style="color:#24292F;">(target: BasicTarget , options</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> LongPressOptions)</span></span>
<span class="line"></span></code></pre></div><h2 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>isPressing</td><td>\u8868\u793A\u5F53\u524D\u6309\u538B\u72B6\u6001\u3002\u5982\u679C\u6B63\u5728\u6309\u538B\uFF0C\u503C\u4E3A true\uFF1B\u5426\u5219\uFF0C\u503C\u4E3A false\u3002</td><td><code>Readonly&lt;Ref&lt;boolean&gt;&gt;</code></td></tr><tr><td>pressingTime</td><td>\u8868\u793A\u6309\u538B\u7684\u6301\u7EED\u65F6\u95F4\uFF08\u53EF\u80FD\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\u6B64\u503C\u4EC5\u5728\u6309\u538B\u671F\u95F4\u66F4\u65B0\u3002</td><td><code>Readonly&lt;Ref&lt;number&gt;&gt;</code></td></tr></tbody></table><h2 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>DOM\u5143\u7D20 \u6216 Ref\u5F15\u7528</td><td><code>() =&gt; Element</code> | <code>Element</code> | <code>MutableRefObject&lt;Element&gt;</code></td><td>-</td></tr><tr><td>options</td><td>\u914D\u7F6E\u9078\u9805</td><td><code>UseLongPressOptions</code></td><td>-</td></tr></tbody></table><h3 id="dropoptions" tabindex="-1">DropOptions <a class="header-anchor" href="#dropoptions" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>Default</th></tr></thead><tbody><tr><td>delay</td><td>\u89E6\u53D1 longpress \u4E8B\u4EF6\u524D\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</td><td><code>number</code></td><td>500</td></tr><tr><td>minUpdateTime</td><td>\u66F4\u65B0 longpress \u4E8B\u4EF6\u65F6\u95F4\u7684\u6700\u5C0F\u95F4\u9694\uFF08\u6BEB\u79D2\uFF09</td><td><code>number</code></td><td>100</td></tr><tr><td>cancelOnMove</td><td>\u662F\u5426\u5728\u53D1\u751F\u79FB\u52A8\u65F6\u53D6\u6D88 longpress \u4E8B\u4EF6</td><td><code>boolean</code></td><td>true</td></tr><tr><td>modifiers</td><td>longpress \u4E8B\u4EF6\u4FEE\u9970\u7B26</td><td><code>LongPressModifiers</code></td><td>-</td></tr></tbody></table><h3 id="longpressmodifiers" tabindex="-1">LongPressModifiers <a class="header-anchor" href="#longpressmodifiers" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>Default</th></tr></thead><tbody><tr><td>stop</td><td>\u505C\u6B62\u4F20\u64AD\u4E8B\u4EF6</td><td><code>boolean</code></td><td>-</td></tr><tr><td>once</td><td>\u53EA\u76D1\u542C\u4E8B\u4EF6\u76D1\u542C\u5668\u4E00\u6B21</td><td><code>boolean</code></td><td>-</td></tr><tr><td>prevent</td><td>\u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</td><td><code>boolean</code></td><td>-</td></tr><tr><td>capture</td><td>\u4E8B\u4EF6\u76D1\u542C\u5668\u6355\u83B7\u9009\u9879</td><td><code>boolean</code></td><td>-</td></tr><tr><td>self</td><td>\u68C0\u67E5\u4E8B\u4EF6\u76EE\u6807\u5143\u7D20\u662F\u5426\u4E0E\u81EA\u8EAB\u76F8\u540C</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useLongPress/index.ts" target="_blank" rel="noopener noreferrer">\u6E90\u7801</a> \u2022 <a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useLongPress/index.zh-CN.md" target="_blank" rel="noopener noreferrer">\u6587\u6863</a> \u2022 <a href="https://github.com/InhiblabCore/vue-hooks-plus/tree/master/packages/hooks/src/useLongPress/demo" target="_blank" rel="noopener noreferrer">\u793A\u4F8B</a></p>`,12),b=JSON.parse('{"title":"useLongPress","description":"","frontmatter":{"map":{"path":"/useLongPress"},"realPath":"src/useLongPress/index.zh-CN.md"},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Result","slug":"result"},{"level":2,"title":"Params","slug":"params"},{"level":3,"title":"DropOptions","slug":"dropoptions"},{"level":3,"title":"LongPressModifiers","slug":"longpressmodifiers"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"useLongPress/index.md"}'),B={name:"useLongPress/index.md"},f=Object.assign(B,{setup(D){return(d,y)=>{const e=t("demo");return l(),p("div",null,[r,c,F,a(e,{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%7B%7B%20pressingTime%20%7D%7D%20ms%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cvhp-button%20ref%3D%22pressButton%22%3E%20%7B%7B%20isPressing%20%3F%20'Pressing'%20%3A%20'Click'%20%7D%7D%3C%2Fvhp-button%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20useLongPress%20%7D%20from%20'vue-hooks-plus'%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20pressButton%20%3D%20ref(null)%0Aconst%20%7B%20pressingTime%20%2C%20isPressing%20%7D%20%3D%20useLongPress(pressButton)%0A%0A%3C%2Fscript%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EpressingTime%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%7D%20ms%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3BpressButton%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EisPressing%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3BPressing%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3BClick%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EuseLongPress%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2398C379%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EpressButton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D19A66%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C678DD%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EpressingTime%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E5C07B%22%3EisPressing%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2356B6C2%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2361AFEF%22%3EuseLongPress%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3EpressButton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E06C75%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23ABB2BF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7B%7B%20pressingTime%20%7D%7D%20ms%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3BpressButton%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%20%7B%7B%20isPressing%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3BPressing%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3BClick%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Evhp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useLongPress%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EpressButton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EpressingTime%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EisPressing%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseLongPress%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(pressButton)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useLongPress/demo/demo.vue",title:"\u57FA\u672C\u7528\u6CD5",desc:"\u76D1\u542C Element \u7684\u957F\u6309\u4E8B\u4EF6\u3002"},{default:C(()=>[a(o)]),_:1}),A])}}});export{b as __pageData,f as default};
