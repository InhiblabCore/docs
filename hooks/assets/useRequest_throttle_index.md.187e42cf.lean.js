import{d as y,r as E,w as i,o as e,c as t,e as C,x as B,y as d,t as u,u as h,F as m,n as g,h as p,i as _,a as D}from"./app.3f3e34b8.js";import{u as v}from"./chunks/useRequest.4105c59c.js";import"./chunks/stringify.72f98ff7.js";import"./chunks/intersection-observer.38c1bba6.js";import{u as f}from"./chunks/index.0e72fc64.js";import"./chunks/debounce.1fb9583f.js";import"./chunks/throttle.194e3921.js";const x={style:{"margin-top":"16px"}},q={style:{"margin-top":"16px"}},T=y({__name:"demo",setup(F){function l(){return console.log("\u53D1\u9001\u8BF7\u6C42"),new Promise((o,n)=>{setTimeout(()=>{o(`${String(Date.now())}`)},1e3)})}const s=E(""),a=E(500);f(()=>{a.value=3e3},2e3);const{data:r,run:A}=v(()=>l(),{throttleWait:a,manual:!0});return i(s,()=>{A()}),(o,n)=>(e(),t(m,null,[C("div",x,[B(C("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=c=>s.value=c)},null,512),[[d,s.value]])]),C("div",q,"\u8BFB\u53D6\u503C\uFF1A"+u(h(r)),1)],64))}}),w=D("",3),b=D("",6),I=JSON.parse('{"title":"\u8282\u6D41","description":"","frontmatter":{"map":{"path":"/useRequest/throttle/"},"realPath":"src/useRequest/docs/throttle/index.md"},"headers":[{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Options","slug":"options"},{"level":2,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F"}],"relativePath":"useRequest/throttle/index.md"}'),R={name:"useRequest/throttle/index.md"},N=Object.assign(R,{setup(F){return(l,s)=>{const a=g("demo");return e(),t("div",null,[w,p(a,{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22margin-top%3A%2016px%3B%22%3E%3Cinput%20type%3D%22text%22%20v-model%3D%22text%22%3E%3C%2Fdiv%3E%0A%20%20%3Cdiv%20style%3D%22margin-top%3A%2016px%3B%22%3E%E8%AF%BB%E5%8F%96%E5%80%BC%EF%BC%9A%7B%7B%20data%20%7D%7D%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%2C%20watch%20%7D%20from%20'vue'%0A%0A%20%20import%20%7B%20useRequest%2C%20useTimeout%20%7D%20from%20'vue-hooks-plus'%0A%0A%20%20function%20getUsername()%3A%20Promise%3Cstring%3E%20%7B%0A%20%20%20%20console.log('%E5%8F%91%E9%80%81%E8%AF%B7%E6%B1%82')%0A%0A%20%20%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20resolve(%60%24%7BString(Date.now())%7D%60)%0A%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%0A%20%20const%20text%20%3D%20ref('')%0A%0A%20%20const%20throttleWait%20%3D%20ref(500)%0A%0A%20%20useTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20throttleWait.value%20%3D%203000%0A%20%20%7D%2C%202000)%0A%0A%20%20const%20%7B%20data%2C%20run%20%7D%20%3D%20useRequest(()%20%3D%3E%20getUsername()%2C%20%7B%0A%20%20%20%20throttleWait%2C%0A%20%20%20%20manual%3A%20true%2C%0A%20%20%7D)%0A%0A%20%20watch(text%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20run()%0A%20%20%7D)%0A%3C%2Fscript%3E%0A",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E8%AF%BB%E5%8F%96%E5%80%BC%EF%BC%9A%7B%7B%20data%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20ref%2C%20watch%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20useRequest%2C%20useTimeout%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFA657%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E5%8F%91%E9%80%81%E8%AF%B7%E6%B1%82%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E((%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFA657%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFA657%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%60%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EString%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EDate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Enow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E())%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%7D%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EthrottleWait%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E500%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20throttleWait.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E3000%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E2000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20throttleWait%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20manual%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Ewatch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(text%2C%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bmargin-top%3A%2016px%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E8%AF%BB%E5%8F%96%E5%80%BC%EF%BC%9A%7B%7B%20data%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20ref%2C%20watch%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useRequest%2C%20useTimeout%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bvue-hooks-plus%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E5%8F%91%E9%80%81%E8%AF%B7%E6%B1%82%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Enew%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EPromise%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E((%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23953800%22%3Ereject%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eresolve%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%60%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EString%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EDate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Enow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E())%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%7D%60%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etext%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EthrottleWait%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E500%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseTimeout%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20throttleWait.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E3000%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E2000%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseRequest%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EgetUsername%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%2C%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20throttleWait%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20manual%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ewatch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(text%2C%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Erun%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/Users/yangjie/WebCode/npm\u5E93/vue-hooks-plus/vue-hooks-plus/packages/hooks/src/useRequest/docs/throttle/demo/demo.vue",title:"",desc:"input \u6846\u4E2D\u5FEB\u901F\u8F93\u5165\u6587\u672C,\u9891\u7E41\u89E6\u53D1 run\uFF0C\u6BCF\u6B21\u95F4\u9694 200ms \u6267\u884C"},{default:_(()=>[p(T)]),_:1}),b])}}});export{I as __pageData,N as default};
