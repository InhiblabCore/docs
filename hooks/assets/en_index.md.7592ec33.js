import{I as x,_ as A}from"./chunks/Icon.d808f401.js";import{d as v,r as E,b as R,o as h,c as m,_ as T,e as f,f as b,w as S,a as _,p as y,g as P}from"./app.99b16a18.js";import"./chunks/index.be703fe3.js";import"./chunks/intersection-observer.38c1bba6.js";import"./chunks/domTarget.0d02ce6b.js";import"./chunks/isBrowser.dc916034.js";import"./chunks/useEffectWithTarget.c77674b6.js";class w{constructor(a,e={}){e=Object.assign({antialias:!1,depthTest:!1,mousemove:!1,autosize:!0,side:"front",vertex:`
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

        }`,uniforms:{},buffers:{},camera:{},texture:null,onUpdate:()=>{},onResize:()=>{}},e);const t=Object.assign({time:{type:"float",value:0},hasTexture:{type:"int",value:0},resolution:{type:"vec2",value:[0,0]},mousemove:{type:"vec2",value:[0,0]},projection:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.uniforms),s=Object.assign({position:{size:3,data:[]},color:{size:4,data:[]}},e.buffers),i=Object.assign({fov:60,near:1,far:1e4,aspect:1,z:100,perspective:!0},e.camera),o=document.createElement("canvas"),r=o.getContext("webgl",{antialias:e.antialias});if(!r)return!1;this.count=0,this.gl=r,this.canvas=o,this.camera=i,this.holder=a,this.onUpdate=e.onUpdate,this.onResize=e.onResize,this.data={},a.appendChild(o),this.createProgram(e.vertex,e.fragment),this.createBuffers(s),this.createUniforms(t),this.updateBuffers(),this.updateUniforms(),this.createTexture(e.texture),r.enable(r.BLEND),r.enable(r.CULL_FACE),r.blendFunc(r.SRC_ALPHA,r.ONE),r[e.depthTest?"enable":"disable"](r.DEPTH_TEST),e.autosize&&window.addEventListener("resize",n=>this.resize(n),!1),e.mousemove&&window.addEventListener("mousemove",n=>this.mousemove(n),!1),this.resize(),this.update=this.update.bind(this),this.time={start:performance.now(),old:performance.now()},this.update()}mousemove(a){let e=a.pageX/this.width*2-1,t=a.pageY/this.height*2-1;this.uniforms.mousemove=[e,t]}resize(a){const e=this.holder,t=this.canvas,s=this.gl,i=this.width=e.offsetWidth,o=this.height=e.offsetHeight,r=this.aspect=i/o,n=this.dpi=devicePixelRatio;t.width=i*n,t.height=o*n,t.style.width=i+"px",t.style.height=o+"px",s.viewport(0,0,i*n,o*n),s.clearColor(0,0,0,0),this.uniforms.resolution=[i,o],this.uniforms.projection=this.setProjection(r),this.onResize(i,o,n)}setProjection(a){const e=this.camera;if(e.perspective){e.aspect=a;const t=e.fov*(Math.PI/180),s=Math.tan(Math.PI*.5-.5*t),i=1/(e.near-e.far),o=[s/e.aspect,0,0,0,0,s,0,0,0,0,(e.near+e.far)*i,-1,0,0,e.near*e.far*i*2,0];return o[14]+=e.z,o[15]+=e.z,o}else return[2/this.width,0,0,0,0,-2/this.height,0,0,0,0,1,0,-1,1,0,1]}createShader(a,e){const t=this.gl,s=t.createShader(a);if(t.shaderSource(s,e),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS))return s;t.deleteShader(s)}createProgram(a,e){const t=this.gl,s=this.createShader(t.VERTEX_SHADER,a),i=this.createShader(t.FRAGMENT_SHADER,e),o=t.createProgram();t.attachShader(o,s),t.attachShader(o,i),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?(t.useProgram(o),this.program=o):t.deleteProgram(o)}createUniforms(a){const e=this.gl,t=this.data.uniforms=a;this.uniforms={},Object.keys(t).forEach(s=>{const i=t[s];i.location=e.getUniformLocation(this.program,"u_"+s)})}setUniform(a,e){const t=this.gl,s=this.data.uniforms[a];switch(s.value=e,s.type){case"int":{t.uniform1i(s.location,e);break}case"float":{t.uniform1f(s.location,e);break}case"vec2":{t.uniform2f(s.location,...e);break}case"vec3":{t.uniform3f(s.location,...e);break}case"vec4":{t.uniform4f(s.location,...e);break}case"mat2":{t.uniformMatrix2fv(s.location,!1,e);break}case"mat3":{t.uniformMatrix3fv(s.location,!1,e);break}case"mat4":{t.uniformMatrix4fv(s.location,!1,e);break}}}updateUniforms(){const a=this.data.uniforms;Object.keys(a).forEach(e=>{const t=a[e];this.uniforms[e]=t.value})}createBuffers(a){const e=this.data.buffers=a;this.buffers={},Object.keys(e).forEach(t=>{const s=e[t];s.buffer=this.createBuffer("a_"+t,s.size)})}createBuffer(a,e){const t=this.gl,s=this.program,i=t.getAttribLocation(s,a),o=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,o),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,e,t.FLOAT,!1,0,0),o}setBuffer(a,e){const t=this.gl,s=this.data.buffers;a==null&&!t.bindBuffer(t.ARRAY_BUFFER,null)||(t.bindBuffer(t.ARRAY_BUFFER,s[a].buffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW))}updateBuffers(){const a=this.buffers;Object.keys(a).forEach(e=>a[e]=buffer.data),this.setBuffer(null)}createTexture(a){const e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),this.texture=t,a&&(this.uniforms.hasTexture=1,this.loadTexture(a))}loadTexture(a){const e=this.gl,t=this.texture,s=new Image;s.onload=()=>{e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},s.src=a}update(){const a=this.gl,e=performance.now(),t=(e-this.time.start)/5e3,s=e-this.time.old;this.time.old=e,this.uniforms.time=t,this.count>0&&(a.clear(a.COLORBUFFERBIT),a.drawArrays(a.POINTS,0,this.count)),this.onUpdate(s),requestAnimationFrame(this.update)}}const U=v({__name:"index",setup(c){const a=E();return R(()=>{a.value&&new w(a.value,{texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC",uniforms:{size:{type:"float",value:5},field:{type:"vec3",value:[0,0,0]},speed:{type:"float",value:5}},vertex:`
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

    }`,onResize(t,s,i){const o=[],r=[],n=400*(t/s),d=400,g=12,p=5;for(let u=0;u<n;u+=p)for(let l=0;l<d;l+=p)o.push(-n/2+u,-30,-d/2+l),r.push(0,1-u/n*1,.5+u/n*.5,l/d);this.uniforms.field=[n,g,d],this.buffers.position=o,this.buffers.color=r,this.uniforms.size=s/400*5*i}})}),(e,t)=>(h(),m("div",{ref_key:"wavaRef",ref:a,style:{position:"absolute",top:"0",right:"0",bottom:"0px",left:"0",opacity:"0.85"}},null,512))}});const z=c=>(y("data-v-1abeb67e"),c=c(),P(),c),F={class:"home"},B={id:"hero"},C=_('<h1 class="tagline" data-v-1abeb67e><span class="accent" data-v-1abeb67e>VueHooks</span><br data-v-1abeb67e>Plus </h1><p class="description" data-v-1abeb67e></p><p class="actions" data-v-1abeb67e><a class="get-started" href="/docs/hooks/en/guide/" style="position:relative;z-index:9;" data-v-1abeb67e> Get Started <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-1abeb67e><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-1abeb67e></path></svg></a></p>',3),D=_('<section id="highlights" class="vt-box-container" data-v-1abeb67e><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F6F8} Hooks for vue3 </h2><p data-v-1abeb67e> Contains a comprehensive collection of basic Hooks. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F Easy to learn and use</h2><p data-v-1abeb67e> Simple language and easy-to-use features, easy to use, detailed documentation. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F3AF} TypeScript</h2><p data-v-1abeb67e> Written in TypeScript with predictable static types. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F3AA} Interactive demo</h2><p data-v-1abeb67e> Interactive demo, immersive. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F50B} Support SSR</h2><p data-v-1abeb67e> Friendly support for server-side rendering. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F9BE} useRequest</h2><p data-v-1abeb67e> Preferred useRequest, Powerful request middle tier. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F93A} Playground</h2><p data-v-1abeb67e> there&#39;s ample scope for one&#39;s abilities. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1FA84} On-demand load</h2><p data-v-1abeb67e> Take what you want, the package is smaller. </p></div><div class="vt-box" data-v-1abeb67e><h2 data-v-1abeb67e>\u{1F510} Safe</h2><p data-v-1abeb67e> Perfect test, safe and reliable. </p></div></section>',1),I=z(()=>b("div",{class:"demo-name"}," Demo.vue ",-1)),O=v({__name:"Home-EN",setup(c){return(a,e)=>(h(),m("div",F,[f(x),b("section",B,[C,f(U)]),D,f(A,null,{default:S(()=>[I]),_:1})]))}});var k=T(O,[["__scopeId","data-v-1abeb67e"]]);const Y=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","sidebar":false,"realPath":"docs/index.en-US.md"},"headers":[],"relativePath":"en/index.md"}'),M={name:"en/index.md"},W=Object.assign(M,{setup(c){return(a,e)=>(h(),m("div",null,[f(k)]))}});export{Y as __pageData,W as default};
