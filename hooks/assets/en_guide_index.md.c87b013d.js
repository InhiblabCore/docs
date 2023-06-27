import{B as s}from"./chunks/Badge.4948f4ce.js";import{o as a,c as n,a as l,b as p}from"./app.25ea1577.js";const o=p(`<p>Through this chapter, you will know how to quickly start using VueHooks Plus.</p><h2 id="\u2728-features" tabindex="-1">\u2728 Features <a class="header-anchor" href="#\u2728-features" aria-hidden="true">#</a></h2><ul><li>\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F Easy to learn and use</li><li>\u{1F50B} Supports SSR</li><li>\u{1F6F8} Contains a comprehensive collection of basic Hooks</li><li>\u{1F3DF}\uFE0F A wide range of application scenarios</li><li>\u{1F9BE} Preferred useRequest, Powerful request middle tier</li><li>\u{1F3AA} Interactive demo, immersive</li><li>\u{1F3AF} Written in TypeScript with predictable static types</li><li>\u{1FA84} Support the on-demand load, and reduce the packing volume</li><li>\u{1F93A} Playground, there&#39;s ample scope for one&#39;s abilities</li><li>\u{1F510} Perfect test, safe and reliable</li></ul><h2 id="\u{1F4E6}-install" tabindex="-1">\u{1F4E6} Install <a class="header-anchor" href="#\u{1F4E6}-install" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">npm i vue-hooks-plus</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#24292F;">npm i vue-hooks-plus</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F528}-usage" tabindex="-1">\u{1F528} Usage <a class="header-anchor" href="#\u{1F528}-usage" aria-hidden="true">#</a></h2><h3 id="all" tabindex="-1">All <a class="header-anchor" href="#all" aria-hidden="true">#</a></h3><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useRequest</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-hooks-plus&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useRequest } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue-hooks-plus&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="introduced-on-demand" tabindex="-1">Introduced on demand <a class="header-anchor" href="#introduced-on-demand" aria-hidden="true">#</a></h3><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">useRequest</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-hooks-plus/es/useRequest&#39;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> useRequest </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue-hooks-plus/es/useRequest&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="auto-import" tabindex="-1">Auto Import <a class="header-anchor" href="#auto-import" aria-hidden="true">#</a></h3><p>Use <code>unplugin-auto-import</code>&#39;s <code>resolver</code></p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">npm i -D @vue-hooks-plus/resolvers</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292F;">npm i -D @vue-hooks-plus/resolvers</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h4><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">AutoImport</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">VueHooksPlusResolver</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;@vue-hooks-plus/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">AutoImportDeps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">AutoImport</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">imports</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;vue&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;vue-router&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">include</span><span style="color:#ABB2BF;">: [</span><span style="color:#E06C75;">/</span><span style="color:#E5C07B;">\\.</span><span style="color:#D19A66;">[tj]</span><span style="color:#E06C75;">sx</span><span style="color:#D19A66;">?</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#E5C07B;">\\.</span><span style="color:#E06C75;">vue</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#E5C07B;">\\.</span><span style="color:#E06C75;">vue</span><span style="color:#E5C07B;">\\?</span><span style="color:#E06C75;">vue/</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#E5C07B;">\\.</span><span style="color:#E06C75;">md</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">dts</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;src/auto-imports.d.ts&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">resolvers</span><span style="color:#ABB2BF;">: [</span><span style="color:#61AFEF;">VueHooksPlusResolver</span><span style="color:#ABB2BF;">()],</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> AutoImport </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { VueHooksPlusResolver } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@vue-hooks-plus/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">AutoImportDeps</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">AutoImport</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">    imports: [</span><span style="color:#0A3069;">&#39;vue&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;vue-router&#39;</span><span style="color:#24292F;">],</span></span>
<span class="line"><span style="color:#24292F;">    include: [</span><span style="color:#0A3069;">/</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0550AE;">[tj]</span><span style="color:#0A3069;">sx</span><span style="color:#CF222E;">?$</span><span style="color:#0A3069;">/</span><span style="color:#24292F;">,</span><span style="color:#0A3069;"> /</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0A3069;">vue</span><span style="color:#CF222E;">$</span><span style="color:#0A3069;">/</span><span style="color:#24292F;">,</span><span style="color:#0A3069;"> /</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0A3069;">vue</span><span style="color:#116329;font-weight:bold;">\\?</span><span style="color:#0A3069;">vue/</span><span style="color:#24292F;">,</span><span style="color:#0A3069;"> /</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0A3069;">md</span><span style="color:#CF222E;">$</span><span style="color:#0A3069;">/</span><span style="color:#24292F;">],</span></span>
<span class="line"><span style="color:#24292F;">    dts: </span><span style="color:#0A3069;">&#39;src/auto-imports.d.ts&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    resolvers: [</span><span style="color:#8250DF;">VueHooksPlusResolver</span><span style="color:#24292F;">()],</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"></span></code></pre></div><h4 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h4><div class="language-typescript"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">VueHooksPlusResolver</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@vue-hooks-plus/resolvers&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/* ... */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;unplugin-auto-import/webpack&#39;</span><span style="color:#ABB2BF;">)({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">imports</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;vue&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;vue-router&#39;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">include</span><span style="color:#ABB2BF;">: [</span><span style="color:#E06C75;">/</span><span style="color:#E5C07B;">\\.</span><span style="color:#D19A66;">[tj]</span><span style="color:#E06C75;">sx</span><span style="color:#D19A66;">?</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#E5C07B;">\\.</span><span style="color:#E06C75;">vue</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#E5C07B;">\\.</span><span style="color:#E06C75;">vue</span><span style="color:#E5C07B;">\\?</span><span style="color:#E06C75;">vue/</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#E5C07B;">\\.</span><span style="color:#E06C75;">md</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">dts</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;src/auto-imports.d.ts&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">resolvers</span><span style="color:#ABB2BF;">: [</span><span style="color:#61AFEF;">VueHooksPlusResolver</span><span style="color:#ABB2BF;">()],</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">VueHooksPlusResolver</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;@vue-hooks-plus/resolvers&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#0550AE;">module</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">exports</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">/* ... */</span></span>
<span class="line"><span style="color:#24292F;">  plugins: [</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;unplugin-auto-import/webpack&#39;</span><span style="color:#24292F;">)({</span></span>
<span class="line"><span style="color:#24292F;">      imports: [</span><span style="color:#0A3069;">&#39;vue&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;vue-router&#39;</span><span style="color:#24292F;">],</span></span>
<span class="line"><span style="color:#24292F;">      include: [</span><span style="color:#0A3069;">/</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0550AE;">[tj]</span><span style="color:#0A3069;">sx</span><span style="color:#CF222E;">?$</span><span style="color:#0A3069;">/</span><span style="color:#24292F;">,</span><span style="color:#0A3069;"> /</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0A3069;">vue</span><span style="color:#CF222E;">$</span><span style="color:#0A3069;">/</span><span style="color:#24292F;">,</span><span style="color:#0A3069;"> /</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0A3069;">vue</span><span style="color:#116329;font-weight:bold;">\\?</span><span style="color:#0A3069;">vue/</span><span style="color:#24292F;">,</span><span style="color:#0A3069;"> /</span><span style="color:#116329;font-weight:bold;">\\.</span><span style="color:#0A3069;">md</span><span style="color:#CF222E;">$</span><span style="color:#0A3069;">/</span><span style="color:#24292F;">],</span></span>
<span class="line"><span style="color:#24292F;">      dts: </span><span style="color:#0A3069;">&#39;src/auto-imports.d.ts&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">      resolvers: [</span><span style="color:#8250DF;">VueHooksPlusResolver</span><span style="color:#24292F;">()],</span></span>
<span class="line"><span style="color:#24292F;">    }),</span></span>
<span class="line"><span style="color:#24292F;">  ],</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div><p>For other supported tools, please see <a href="https://github.com/antfu/unplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import</a></p><br><h2 id="\u{1F9E9}-compatible" tabindex="-1">\u{1F9E9} Compatible <a class="header-anchor" href="#\u{1F9E9}-compatible" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">Not compatible with vue2 version</p></div>`,21),B=JSON.parse('{"title":"\u2728 Features","description":"","frontmatter":{"source":{"show":false},"realPath":"docs/guide/index.en-US.md"},"headers":[{"level":2,"title":"\u2728 Features","slug":"\u2728-features"},{"level":2,"title":"\u{1F4E6} Install","slug":"\u{1F4E6}-install"},{"level":2,"title":"\u{1F528} Usage","slug":"\u{1F528}-usage"},{"level":3,"title":"All","slug":"all"},{"level":3,"title":"Introduced on demand","slug":"introduced-on-demand"},{"level":3,"title":"Auto Import","slug":"auto-import"},{"level":2,"title":"\u{1F9E9} Compatible","slug":"\u{1F9E9}-compatible"}],"relativePath":"en/guide/index.md"}'),e={name:"en/guide/index.md"},u=Object.assign(e,{setup(t){return(r,c)=>(a(),n("div",null,[l(s),o]))}});export{B as __pageData,u as default};
