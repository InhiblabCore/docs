import{I as A,_ as E}from"./chunks/Icon.d808f401.js";import{_,o as l,c as f,p,g,f as m,d as F,e as h,w as x,a as b}from"./app.99b16a18.js";import"./chunks/index.be703fe3.js";import"./chunks/intersection-observer.38c1bba6.js";import"./chunks/domTarget.0d02ce6b.js";import"./chunks/isBrowser.dc916034.js";import"./chunks/useEffectWithTarget.c77674b6.js";class B{constructor(s,e={}){e=Object.assign({antialias:!1,depthTest:!1,mousemove:!1,autosize:!0,side:"front",vertex:`
        precision highp float;

        attribute vec4 a_position;
        attribute vec4 a_color;

        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mousemove;
        uniform mat4 u_projection;

        varying vec4 v_color;

        void main() {

          gl_Position = u_projection * a_position;
          gl_PointSize = (10.0 / gl_Position.w) * 100.0;

          v_color = a_color;

        }`,fragment:`
        precision highp float;

        uniform sampler2D u_texture;
        uniform int u_hasTexture;

        varying vec4 v_color;

        void main() {

          if ( u_hasTexture == 1 ) {

            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

          } else {

            gl_FragColor = v_color;

          }

        }`,uniforms:{},buffers:{},camera:{},texture:null,onUpdate:()=>{},onResize:()=>{}},e);const t=Object.assign({time:{type:"float",value:0},hasTexture:{type:"int",value:0},resolution:{type:"vec2",value:[0,0]},mousemove:{type:"vec2",value:[0,0]},projection:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.uniforms),a=Object.assign({position:{size:3,data:[]},color:{size:4,data:[]}},e.buffers),i=Object.assign({fov:60,near:1,far:1e4,aspect:1,z:100,perspective:!0},e.camera),o=document.createElement("canvas"),r=o.getContext("webgl",{antialias:e.antialias});if(!r)return!1;this.count=0,this.gl=r,this.canvas=o,this.camera=i,this.holder=s,this.onUpdate=e.onUpdate,this.onResize=e.onResize,this.data={},s.appendChild(o),this.createProgram(e.vertex,e.fragment),this.createBuffers(a),this.createUniforms(t),this.updateBuffers(),this.updateUniforms(),this.createTexture(e.texture),r.enable(r.BLEND),r.enable(r.CULL_FACE),r.blendFunc(r.SRC_ALPHA,r.ONE),r[e.depthTest?"enable":"disable"](r.DEPTH_TEST),e.autosize&&window.addEventListener("resize",n=>this.resize(n),!1),e.mousemove&&window.addEventListener("mousemove",n=>this.mousemove(n),!1),this.resize(),this.update=this.update.bind(this),this.time={start:performance.now(),old:performance.now()},this.update()}mousemove(s){let e=s.pageX/this.width*2-1,t=s.pageY/this.height*2-1;this.uniforms.mousemove=[e,t]}resize(s){const e=this.holder,t=this.canvas,a=this.gl,i=this.width=e.offsetWidth,o=this.height=e.offsetHeight,r=this.aspect=i/o,n=this.dpi=devicePixelRatio;t.width=i*n,t.height=o*n,t.style.width=100+"%",t.style.height=100+"%",a.viewport(0,0,i*n,o*n),a.clearColor(0,0,0,0),this.uniforms.resolution=[i,o],this.uniforms.projection=this.setProjection(r),this.onResize(i,o,n)}setProjection(s){const e=this.camera;if(e.perspective){e.aspect=s;const t=e.fov*(Math.PI/180),a=Math.tan(Math.PI*.5-.5*t),i=1/(e.near-e.far),o=[a/e.aspect,0,0,0,0,a,0,0,0,0,(e.near+e.far)*i,-1,0,0,e.near*e.far*i*2,0];return o[14]+=e.z,o[15]+=e.z,o}else return[2/this.width,0,0,0,0,-2/this.height,0,0,0,0,1,0,-1,1,0,1]}createShader(s,e){const t=this.gl,a=t.createShader(s);if(t.shaderSource(a,e),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS))return a;console.log(t.getShaderInfoLog(a)),t.deleteShader(a)}createProgram(s,e){const t=this.gl,a=this.createShader(t.VERTEX_SHADER,s),i=this.createShader(t.FRAGMENT_SHADER,e),o=t.createProgram();t.attachShader(o,a),t.attachShader(o,i),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?(t.useProgram(o),this.program=o):(console.log(t.getProgramInfoLog(o)),t.deleteProgram(o))}createUniforms(s){const e=this.gl,t=this.data.uniforms=s;this.uniforms={},Object.keys(t).forEach(a=>{const i=t[a];i.location=e.getUniformLocation(this.program,"u_"+a)})}setUniform(s,e){const t=this.gl,a=this.data.uniforms[s];switch(a.value=e,a.type){case"int":{t.uniform1i(a.location,e);break}case"float":{t.uniform1f(a.location,e);break}case"vec2":{t.uniform2f(a.location,...e);break}case"vec3":{t.uniform3f(a.location,...e);break}case"vec4":{t.uniform4f(a.location,...e);break}case"mat2":{t.uniformMatrix2fv(a.location,!1,e);break}case"mat3":{t.uniformMatrix3fv(a.location,!1,e);break}case"mat4":{t.uniformMatrix4fv(a.location,!1,e);break}}}updateUniforms(){this.gl;const s=this.data.uniforms;Object.keys(s).forEach(e=>{const t=s[e];this.uniforms[e]=t.value})}createBuffers(s){this.gl;const e=this.data.buffers=s;this.buffers={},Object.keys(e).forEach(t=>{const a=e[t];a.buffer=this.createBuffer("a_"+t,a.size)})}createBuffer(s,e){const t=this.gl,a=this.program,i=t.getAttribLocation(a,s),o=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,o),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,e,t.FLOAT,!1,0,0),o}setBuffer(s,e){const t=this.gl,a=this.data.buffers;s==null&&!t.bindBuffer(t.ARRAY_BUFFER,null)||(t.bindBuffer(t.ARRAY_BUFFER,a[s].buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW))}updateBuffers(){this.gl;const s=this.buffers;Object.keys(s).forEach(e=>s[e]=buffer.data),this.setBuffer(null)}createTexture(s){const e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),this.texture=t,s&&(this.uniforms.hasTexture=1,this.loadTexture(s))}loadTexture(s){const e=this.gl,t=this.texture,a=new Image;a.onload=()=>{e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},a.src=s}update(){const s=this.gl,e=performance.now(),t=(e-this.time.start)/5e3,a=e-this.time.old;this.time.old=e,this.uniforms.time=t,this.count>0&&(s.clear(s.COLORBUFFERBIT),s.drawArrays(s.POINTS,0,this.count)),this.onUpdate(a),requestAnimationFrame(this.update)}}const R={name:"BgAnimation",data(){return{}},mounted(){new B(document.querySelector(".waves"),{texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC",uniforms:{size:{type:"float",value:5},field:{type:"vec3",value:[0,0,0]},speed:{type:"float",value:5}},vertex:`
    #define M_PI 3.1415926535897932384626433832795

    precision highp float;

    attribute vec4 a_position;
    attribute vec4 a_color;

    uniform float u_time;
    uniform float u_size;
    uniform float u_speed;
    uniform vec3 u_field;
    uniform mat4 u_projection;

    varying vec4 v_color;

    void main() {

      vec3 pos = a_position.xyz;

      pos.y += (
        cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +
        sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)
      ) * u_field.y;

      gl_Position = u_projection * vec4( pos.xyz, a_position.w );
      gl_PointSize = ( u_size / gl_Position.w ) * 100.0;

      v_color = a_color;

    }`,fragment:`
    precision highp float;

    uniform sampler2D u_texture;

    varying vec4 v_color;

    void main() {

      gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

    }`,onResize(s,e,t){const a=[],i=[],o=400*(s/e),r=400,n=12,v=5;for(let c=0;c<o;c+=v)for(let d=0;d<r;d+=v)a.push(-o/2+c,-30,-r/2+d),i.push(0,1-c/o*1,.5+c/o*.5,d/r);this.uniforms.field=[o,n,r],this.buffers.position=a,this.buffers.color=i,this.uniforms.size=e/400*5*t}})}},T=u=>(p("data-v-7932b29c"),u=u(),g(),u),C={class:"BgAnimation"},S=T(()=>m("div",{class:"waves"},null,-1)),D=[S];function P(u,s,e,t,a,i){return l(),f("div",C,D)}var w=_(R,[["render",P],["__scopeId","data-v-7932b29c"]]);const y=u=>(p("data-v-40b45911"),u=u(),g(),u),U={class:"home"},z={id:"hero"},I=b('<h1 class="tagline" data-v-40b45911><span class="accent" data-v-40b45911>VueHooks</span><br data-v-40b45911>Plus </h1><p class="description" data-v-40b45911></p><p class="actions" style="position:relative;z-index:9;" data-v-40b45911><a class="get-started" href="/docs/hooks/guide/" data-v-40b45911> Get Started <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-40b45911><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-40b45911></path></svg></a></p>',3),O=b('<section id="highlights" class="vt-box-container" data-v-40b45911><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F6F8} Vue3 \u7684 Hooks</h2><p data-v-40b45911> \u57FA\u7840\u548C\u9AD8\u7EA7\u7684 hook\uFF0C \u9AD8\u6027\u80FD\u903B\u8F91\u7684\u62BD\u8C61\u5C01\u88C5\uFF0C\u6EE1\u8DB3\u5927\u91CF\u573A\u666F\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F \u7B80\u6D01\u6613\u7528</h2><p data-v-40b45911> \u7B80\u6D01\u7684\u8BED\u6CD5\u548C\u6613\u7528\u7684\u7279\u6027\uFF0C\u8F7B\u677E\u4E0A\u624B\uFF0C\u8BE6\u7EC6\u7684\u6587\u6863\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F3AF} TypeScript</h2><p data-v-40b45911> \u4F7F\u7528 TypeScript \u6784\u5EFA\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\uFF0C\u5B89\u5168\u4E25\u8C28\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F3AA} \u4EA4\u4E92\u5F0Fdemo\u6F14\u793A</h2><p data-v-40b45911> \u773C\u89C1\u4E3A\u5B9E\uFF0C\u8EAB\u4E34\u5176\u5883\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F50B} \u652F\u6301 SSR</h2><p data-v-40b45911> \u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u7684\u53CB\u597D\u652F\u6301\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F9BE} useRequest</h2><p data-v-40b45911> \u57FA\u4E8E\u63D2\u4EF6\u6A21\u5F0F\u8BBE\u8BA1\u7684\u8BF7\u6C42\u51FD\u6570\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F93A} \u6F14\u7EC3\u573A</h2><p data-v-40b45911> \u5728\u7EBF\u7F16\u7801\uFF0C\u5927\u6709\u7528\u6B66\u4E4B\u5730\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1FA84} \u6309\u9700\u52A0\u8F7D</h2><p data-v-40b45911> \u62FF\u4F60\u60F3\u8981\uFF0C\u5305\u4F53\u79EF\u66F4\u5C0F\u3002 </p></div><div class="vt-box" data-v-40b45911><h2 data-v-40b45911>\u{1F510} \u5B89\u5168\u6027</h2><p data-v-40b45911> \u6D4B\u8BD5\u5B8C\u5584\uFF0C\u5B89\u5168\u53EF\u9760\u3002 </p></div></section>',1),L=y(()=>m("div",{class:"demo-name"}," Demo.vue ",-1)),M=F({__name:"Home",setup(u){return(s,e)=>(l(),f("div",U,[h(A),m("section",z,[I,h(w)]),O,h(E,null,{default:x(()=>[L]),_:1})]))}});var k=_(M,[["__scopeId","data-v-40b45911"]]);const $=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","sidebar":false,"realPath":"docs/index.zh-CN.md"},"headers":[],"relativePath":"index.md"}'),j={name:"index.md"},K=Object.assign(j,{setup(u){return(s,e)=>(l(),f("div",null,[h(k)]))}});export{$ as __pageData,K as default};
