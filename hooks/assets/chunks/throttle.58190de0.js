import{d as n}from"./debounce.dc1d820c.js";import{b as l}from"./screenfull.0d13f71e.js";var d=n,g=l,c="Expected a function";function f(i,a,r){var e=!0,t=!0;if(typeof i!="function")throw new TypeError(c);return g(r)&&(e="leading"in r?!!r.leading:e,t="trailing"in r?!!r.trailing:t),d(i,a,{leading:e,maxWait:a,trailing:t})}var b=f;export{b as t};