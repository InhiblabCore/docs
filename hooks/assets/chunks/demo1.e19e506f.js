import"./stringify.51fb85fa.js";import"./intersection-observer.38c1bba6.js";import{r as g,s as C,g as $,z as q,d as B,o as m,c as v,e as _,F as L,n as M,u as f,t as R,m as O,x as U,y as G,b as H,w as J,q as K}from"../app.4d6255f4.js";import{u as P}from"./index.9bca8a35.js";import{g as S}from"./domTarget.1ffa4da9.js";const A=(r,d)=>{const c=g(),{wrapperTarget:h,itemHeight:e,overscan:y=5}=d,n=P(c),i=g([]),b=g(!1),p=(t,o)=>{if(typeof e=="number")return Math.ceil(t/e);let a=0,s=0;for(let l=o;l<r.value.length&&(a+=e(l,r.value[l]),s=l,!(a>=t));l++);return s-o},T=t=>{if(typeof e=="number")return Math.floor(t/e)+1;let o=0,a=0;for(let s=0;s<r.value.length;s++)if(o+=e(s,r.value[s]),o>=t){a=s;break}return a+1},u=t=>{var a,s;return typeof e=="number"?t*e:(s=(a=r.value)==null?void 0:a.slice(0,t))==null?void 0:s.reduce((l,k,x)=>l+(e==null?void 0:e(x,r==null?void 0:r.value[t])),0)},D=C(()=>typeof e=="number"?r.value.length*e:r.value.reduce((t,o,a)=>t+(e==null?void 0:e(a,r==null?void 0:r.value[a])),0)),w=()=>{const t=S(c),o=S(h);if(t&&o){const{scrollTop:a,clientHeight:s}=t,l=T(a),k=p(s,l),x=Math.max(0,l-y),j=Math.min(r.value.length,l+k+y),V=u(x);o.style.height=D.value-V+"px",o.style.marginTop=V+"px",i.value=r.value.slice(x,j).map((E,I)=>({data:E,index:I+x}))}};$([n==null?void 0:n.width,n==null?void 0:n.height,r],()=>{w()});const N=t=>{const o=S(c);o&&(b.value=!0,o.scrollTop=u(t),w())},F=q({ref:t=>{c.value=t},onScroll:t=>{if(b.value){b.value=!1;return}t.preventDefault(),w()}});return[i,F,N]},ee=B({__name:"demo",setup(r){const d=C(()=>Array.from(Array(999).keys())),c=g(),[h,e]=A(d,{wrapperTarget:c,itemHeight:60,overscan:10});return(y,n)=>(m(),v("div",{ref:f(e).ref,style:{height:"300px",overflow:"auto",border:"1px solid"},onScroll:n[0]||(n[0]=(...i)=>f(e).onScroll&&f(e).onScroll(...i))},[_("div",{ref_key:"wrapperRef",ref:c},[(m(!0),v(L,null,M(f(h),i=>(m(),v("div",{style:{height:"60px",border:"1px solid #e8e8e8",marginTop:"8px",display:"flex",justifyContent:"center",alignItems:"center"},key:i.index}," item - "+R(i.data),1))),128))],512)],544))}}),Q={style:{height:"50px","text-align":"end"}},te=B({__name:"demo1",setup(r){const d=C(()=>Array.from(Array(999).keys())),c=g(),[h,e,y]=A(d,{wrapperTarget:c,itemHeight:68,overscan:10}),n=g(0),i=()=>{y(n.value)};return(b,p)=>{const T=O("vhp-button");return m(),v("div",null,[_("div",Q,[U(_("input",{type:"number","onUpdate:modelValue":p[0]||(p[0]=u=>n.value=u)},null,512),[[G,n.value]]),H(T,{onClick:p[1]||(p[1]=u=>i())},{default:J(()=>[K("scroll to")]),_:1})]),_("div",{ref:f(e).ref,style:{height:"300px",overflow:"auto",border:"1px solid"},onScroll:p[2]||(p[2]=(...u)=>f(e).onScroll&&f(e).onScroll(...u))},[_("div",{ref_key:"wrapperRef",ref:c},[(m(!0),v(L,null,M(f(h),u=>(m(),v("div",{style:{height:"60px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #e8e8e8",marginBottom:"8px"},key:u.index}," item - "+R(u.data),1))),128))],512)],544)])}}});export{ee as _,te as a};
