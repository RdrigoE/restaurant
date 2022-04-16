(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),i=n.n(a),r=n(645),l=n.n(r)()(i());l.push([e.id,"*{\n    margin:0;\n}\n\n.nav{\n    background-color: crimson;\n    height: 6vh;\n    padding-left: 25vw;\n    padding-right: 25vw;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.nav > div{\n    cursor: pointer;\n}\n\n\n\n.gridContainer{\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.mainContent{\n    display: flex;\n    flex-direction: column;\n}\n\n\n.header{\n    display: flex;\n    justify-content: center;\n}",""]);const c=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(a)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(l[o]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);a&&l[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},l=[],c=0;c<e.length;c++){var o=e[c],s=a.base?o[0]+a.base:o[0],u=r[s]||0,d="".concat(s," ").concat(u);r[s]=u+1;var m=n(d),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var v=i(p,a);a.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}l.push(d)}return l}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var l=0;l<r.length;l++){var c=n(r[l]);t[c].references--}for(var o=a(e,i),s=0;s<r.length;s++){var u=n(r[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=o}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>{let e=document.getElementById("content"),t=document.createDocumentFragment(),n=document.createElement("div");n.className="gridContainer";let a=document.createElement("div");a.className="empty 1",n.appendChild(a);let i=document.createElement("div");i.className="mainContent";let r=document.createElement("div");r.className="header";let l=document.createElement("h1");l.className="title",l.textContent="Restaurant",r.appendChild(l),i.appendChild(r);let c=document.createElement("h1");c.textContent="Delicious Food";let o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam ligula, ullamcorper vitae malesuada et, ultrices vitae nisi. In imperdiet, velit a tincidunt luctus, nisi augue fringilla urna, eu pellentesque velit lacus et erat. Nunc eleifend vel enim ac mattis. Praesent consequat dolor lectus, eu ullamcorper sem malesuada vitae. Aenean scelerisque ultricies nulla id tincidunt. Aliquam non velit lacus. Proin ex ex, ornare eget lacinia sit amet, tempor ut nunc. Nulla efficitur sem venenatis scelerisque bibendum.Donec turpis sapien, mollis nec condimentum sed, sollicitudin in nunc. Integer nec mi id purus varius consectetur et nec enim",i.appendChild(c),i.appendChild(o),n.appendChild(i);let s=document.createElement("div");s.className="empty 2",n.appendChild(s),t.appendChild(n),e.appendChild(t)};var t=n(379),a=n.n(t),i=n(795),r=n.n(i),l=n(569),c=n.n(l),o=n(565),s=n.n(o),u=n(216),d=n.n(u),m=n(589),p=n.n(m),v=n(426),f={};function h(e){for(;e.firstChild;)e.removeChild(e.firstChild)}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),a()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals,e(),document.getElementById("home").addEventListener("click",(()=>{h(document.getElementById("content")),e()})),document.getElementById("menu").addEventListener("click",(()=>{h(document.getElementById("content")),(()=>{let e=document.getElementById("content"),t=document.createDocumentFragment(),n=document.createElement("div");n.className="gridContainer";let a=document.createElement("div");a.className="empty 1",n.appendChild(a);let i=document.createElement("div");i.className="mainContent";let r=document.createElement("div");r.className="header";let l=document.createElement("h1");l.className="title",l.textContent="Menu",r.appendChild(l),i.appendChild(r);let c=document.createElement("h1");c.textContent="Delicious Food";let o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam ligula, ullamcorper vitae malesuada et, ultrices vitae nisi. In imperdiet, velit a tincidunt luctus, nisi augue fringilla urna, eu pellentesque velit lacus et erat. Nunc eleifend vel enim ac mattis. Praesent consequat dolor lectus, eu ullamcorper sem malesuada vitae. Aenean scelerisque ultricies nulla id tincidunt. Aliquam non velit lacus. Proin ex ex, ornare eget lacinia sit amet, tempor ut nunc. Nulla efficitur sem venenatis scelerisque bibendum.Donec turpis sapien, mollis nec condimentum sed, sollicitudin in nunc. Integer nec mi id purus varius consectetur et nec enim",i.appendChild(c),i.appendChild(o),n.appendChild(i);let s=document.createElement("div");s.className="empty 2",n.appendChild(s),t.appendChild(n),e.appendChild(t)})()})),document.getElementById("contact").addEventListener("click",(()=>{h(document.getElementById("content")),(()=>{let e=document.getElementById("content"),t=document.createDocumentFragment(),n=document.createElement("div");n.className="gridContainer";let a=document.createElement("div");a.className="empty 1",n.appendChild(a);let i=document.createElement("div");i.className="mainContent";let r=document.createElement("div");r.className="header";let l=document.createElement("h1");l.className="title",l.textContent="Contact",r.appendChild(l),i.appendChild(r);let c=document.createElement("h1");c.textContent="Delicious Food";let o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam ligula, ullamcorper vitae malesuada et, ultrices vitae nisi. In imperdiet, velit a tincidunt luctus, nisi augue fringilla urna, eu pellentesque velit lacus et erat. Nunc eleifend vel enim ac mattis. Praesent consequat dolor lectus, eu ullamcorper sem malesuada vitae. Aenean scelerisque ultricies nulla id tincidunt. Aliquam non velit lacus. Proin ex ex, ornare eget lacinia sit amet, tempor ut nunc. Nulla efficitur sem venenatis scelerisque bibendum.Donec turpis sapien, mollis nec condimentum sed, sollicitudin in nunc. Integer nec mi id purus varius consectetur et nec enim",i.appendChild(c),i.appendChild(o),n.appendChild(i);let s=document.createElement("div");s.className="empty 2",n.appendChild(s),t.appendChild(n),e.appendChild(t)})()}))})()})();