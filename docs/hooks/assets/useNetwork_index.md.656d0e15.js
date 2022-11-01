import"./chunks/stringify.97ab121b.js";import{r as D,k as y,d as A,o as C,c as r,e as c,t as i,u as d,n as u,h as p,i as B,a as E}from"./app.b52e1a94.js";function F(){const s=navigator;return typeof s!="object"?null:s.connection||s.mozConnection||s.webkitConnection}function t(){const s=F();return s?{rtt:s.rtt,type:s.type,saveData:s.saveData,downlink:s.downlink,downlinkMax:s.downlinkMax,effectiveType:s.effectiveType}:{}}function h(){const s=D({since:void 0,online:navigator==null?void 0:navigator.onLine,...t()});return y(l=>{const o=()=>{s.value={...s.value,online:!0,since:new Date}},a=()=>{s.value={...s.value,online:!1,since:new Date}},e=()=>{s.value={...s.value,...t()}};window.addEventListener("online",o),window.addEventListener("offline",a);const n=F();n==null||n.addEventListener("change",e),l(()=>{window.removeEventListener("online",o),window.removeEventListener("offline",a),n==null||n.removeEventListener("change",e)})}),s.value}const v=c("div",null,"Network information:",-1),g=A({__name:"demo",setup(s){const l=h();return(o,a)=>(C(),r("div",null,[v,c("pre",null,i(JSON.stringify(d(l),null,2)),1)]))}}),w=E('<h1 id="usenetwork" tabindex="-1">useNetwork <a class="header-anchor" href="#usenetwork" aria-hidden="true">#</a></h1><p>\u7BA1\u7406\u7F51\u7EDC\u8FDE\u63A5\u72B6\u6001\u7684 Hook\u3002</p><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',4),k=E(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">interface</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">NetworkState</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">online</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">since</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Date</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">rtt</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">type</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">downlink</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">saveData</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">downlinkMax</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">effectiveType</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">result</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">NetworkState</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useNetwork</span><span style="color:#C9D1D9;">();</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">NetworkState</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">online</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">since</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#953800;">Date</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">rtt</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">type</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">downlink</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">saveData</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">boolean</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">downlinkMax</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">effectiveType</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">result</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">NetworkState</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useNetwork</span><span style="color:#24292F;">();</span></span>
<span class="line"></span></code></pre></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>online</td><td>\u7F51\u7EDC\u662F\u5426\u4E3A\u5728\u7EBF</td><td><code>boolean</code></td></tr><tr><td>since</td><td><code>online</code> \u6700\u540E\u6539\u53D8\u65F6\u95F4</td><td><code>Date</code></td></tr><tr><td>rtt</td><td>\u5F53\u524D\u8FDE\u63A5\u4E0B\u8BC4\u4F30\u7684\u5F80\u8FD4\u65F6\u5EF6</td><td><code>number</code></td></tr><tr><td>type</td><td>\u8BBE\u5907\u4F7F\u7528\u4E0E\u6240\u8FF0\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\u7684\u8FDE\u63A5\u7684\u7C7B\u578B</td><td><code>bluetooth</code> | <code>cellular</code> | <code>ethernet</code> | <code>none</code> | <code>wifi</code> | <code>wimax</code> | <code>other</code> | <code>unknown</code></td></tr><tr><td>downlink</td><td>\u6709\u6548\u5E26\u5BBD\u4F30\u7B97\uFF08\u5355\u4F4D\uFF1A\u5146\u6BD4\u7279/\u79D2\uFF09</td><td><code>number</code></td></tr><tr><td>downlinkMax</td><td>\u6700\u5927\u4E0B\u884C\u901F\u5EA6\uFF08\u5355\u4F4D\uFF1A\u5146\u6BD4\u7279/\u79D2\uFF09</td><td><code>number</code></td></tr><tr><td>saveData</td><td>\u7528\u6237\u4EE3\u7406\u662F\u5426\u8BBE\u7F6E\u4E86\u51CF\u5C11\u6570\u636E\u4F7F\u7528\u7684\u9009\u9879</td><td><code>boolean</code></td></tr><tr><td>effectiveType</td><td>\u7F51\u7EDC\u8FDE\u63A5\u7684\u7C7B\u578B</td><td><code>slow-2g</code> | <code>2g</code> | <code>3g</code> | <code>4g</code></td></tr></tbody></table>`,4),N=JSON.parse('{"title":"useNetwork","description":"","frontmatter":{"map":{"path":"/useNetwork"},"realPath":"src/useNetwork/index.md"},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Result","slug":"result"}],"relativePath":"useNetwork/index.md"}'),f={name:"useNetwork/index.md"},b=Object.assign(f,{setup(s){return(l,o)=>{const a=u("demo");return C(),r("div",null,[w,p(a,{code:"%3Ctemplate%3E%0A%09%3Cdiv%3E%0A%09%09%3Cdiv%3ENetwork%20information%3A%3C%2Fdiv%3E%0A%09%09%3Cpre%3E%7B%7B%20JSON.stringify(networkState%2C%20null%2C%202)%20%7D%7D%3C%2Fpre%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20useNetwork%20%7D%20from%20'vue-hooks-plus'%0A%0Aconst%20networkState%20%3D%20useNetwork()%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3BNetwork%20information%3A%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Epre%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EJSON%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estringify%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(networkState%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Epre%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%09%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20useNetwork%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EnetworkState%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseNetwork%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3BNetwork%20information%3A%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%09%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Epre%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EJSON%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estringify%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(networkState%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Epre%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%09%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useNetwork%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EnetworkState%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseNetwork%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useNetwork/demo/demo.vue",title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8FD4\u56DE\u7F51\u7EDC\u72B6\u6001\u4FE1\u606F"},{default:B(()=>[p(g)]),_:1}),k])}}});export{N as __pageData,b as default};
