(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,"body {\n    margin: 0;\n}\np {\n    margin: 0px;\n}\n#page-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n.nav-bar {\n    background-color: #db4c3f;\n    height: 45px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.left-nav {\n    display: flex;\n    margin: 15px;\n    gap: 15px;\n}\n.right-nav {\n    display: flex;\n    gap: 15px;\n    margin: 15px;\n}\n#hero {\n    height: 80vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    /* border: solid black 1px; */\n    align-self: center;\n}\n.left-sidebar {\n    background-color: rgb(253, 250, 250);\n    width: 275px;\n    height: 100vh;\n}\n.project-bar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.project-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-top: 40px;\n}\n.addProject-form {\n    align-self: center;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n.project-list {\n    /* border: solid black 1px; */\n    padding: 24px;\n}\n.project {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    height: 30px;\n    margin: 10px;\n    padding-left: 20px;\n}\n.project.active {\n    background-color: rgb(231, 228, 228);\n    /* border-bottom: solid black 1px; */\n    border-radius: 40px;\n}\n.fa-thin.fa-plus {\n    margin: 20px;\n}\n.addProject-form {\n    display: none;\n}\n.addProject-form.active {\n    display: flex;\n}\n.itemCard {\n    width: 100vh;\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-bottom: solid rgb(227, 222, 222) 1px;\n    margin: 40px 40px;\n\n}\n.itemCard > * {\n    width: 80%;\n    height: 30px;\n    border-top: none;\n    text-align: center;\n    /* border-bottom: solid rgb(0, 0, 0) 1px; */\n}\n.deleteBtn {\n    width: 10%;\n}\n.itemPriority {\n}\n.submitCard {\n    border-radius: 5%;\n    position: fixed;\n    top: 105%;\n    left: 35%;\n    font-size: larger;\n    z-index: 2;\n    padding: 20px 50px 50px 50px;\n    transform: translate(-50%, -50%) scale(0);\n    background-color: white;\n    border: solid black 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n    align-self: center;\n    display: none;\n}\n.submitCard.active {\n    transform: translate(0%, -130%) scale(1);\n    display:flex;\n}\n#itemDes {\n\n}\n.dueDate-Container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.priority-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n  .overlay.active {\n      display: block;\n  }",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=i(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=t(a[o]);n[c].references--}for(var s=r(e,i),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),a=t(569),o=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector("#itemTitle"),h=document.querySelector("#itemDes"),x=document.querySelector("#dueDate"),y=document.querySelector("#priority"),g=(document.querySelector("#hero"),document.querySelector("#submit")),b=document.querySelector(".overlay"),L=document.querySelector("#addBtn"),j=document.querySelector(".submitCard"),w=document.querySelector(".project-list"),k=document.querySelector("#project-addBtn"),C=document.querySelector(".addProject-form"),S=document.querySelector("#todo-container");let E=[],D=[];function q(e,n,t,r,i){this.title=e,this.description=n,this.dueDate=t,this.priority=r,this.projectID=i}function T(e,n){this.name=e,this.isActive=!0;let t=function(e){let n=w.children;for(let e=0;e<n.length;e++)n[e].classList.remove("active");e.classList.add("active")};return{createDom:function(){let n=document.createElement("div");n.textContent=e,n.classList.add("project"),E=n,w.prepend(n),t(n),n.addEventListener("click",(()=>{t(n)}))},makeActive:t,taskList:[]}}g.addEventListener("click",(()=>{!function(e){let n=document.createElement("div");n.classList.add("itemCard");let t=document.createElement("p");t.classList.add("itemTitle"),t.textContent=e.title;let r=document.createElement("p");r.classList.add("itemDesc"),r.textContent=e.description;let i=document.createElement("p");i.classList.add("itemDueDate"),i.textContent=e.dueDate;let a=document.createElement("p");a.classList.add("itemPriority"),a.textContent=e.priority;let o=document.createElement("i");o.classList.add("far","fa-trash-alt","deleteBtn"),n.append(t,r,i,a,o),S.appendChild(n),E.taskList.push(n)}(new q(v.value,h.value,x.value,y.value)),j.classList.remove("active"),b.classList.remove("active")})),L.addEventListener("click",(()=>{j.classList.add("active"),b.classList.add("active")})),k.addEventListener("click",(()=>{C.classList.add("active"),C.focus()})),C.addEventListener("keypress",(e=>{if("Enter"===e.key){let e=new T(C.value,!0);D.push(e),e.createDom(),E=e,C.classList.remove("active"),C.value=""}})),b.onclick=function(){j.classList.remove("active"),b.classList.remove("active")};let P=new T("Default");D.push(P),P.createDom(),E=P})()})();