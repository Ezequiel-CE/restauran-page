(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),i=r.n(t),a=r(645),o=r.n(a),c=r(667),s=r.n(c),u=new URL(r(226),r.b),l=o()(i()),p=s()(u);l.push([n.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  background: url("+p+");\r\n  background-size: cover;\r\n}\r\n\r\n.navbar {\r\n  height: 90px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 100px;\r\n  border-radius: 15px;\r\n  margin-top: -10px;\r\n}\r\n\r\n.container-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n.nav-tittle {\r\n  font-size: 50px;\r\n  font-style: italic;\r\n  font-weight: 700;\r\n}\r\n\r\n.nav-logo {\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  opacity: 0.75;\r\n}\r\n\r\n.container-btns {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.nav-btn {\r\n  padding: 10px 20px;\r\n  width: 120px;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-btn:hover {\r\n  background-color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\n.main-header {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  margin-top: 50px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 20px;\r\n}\r\n\r\n.logo {\r\n  border-radius: 50%;\r\n  width: 100px;\r\n  height: 100px;\r\n  opacity: 0.75;\r\n}\r\n\r\n.tittle {\r\n  padding-top: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\n.main-tittle {\r\n  font-size: 60px;\r\n  font-style: italic;\r\n}\r\n\r\n.main-sub {\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.main-sub-sub {\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.section-2 {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  margin-top: 50px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 20px;\r\n  padding: 40px;\r\n}\r\n\r\n.sec2-text {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.sec2-title {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.sec2-schu {\r\n  text-align: center;\r\n  font-size: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.section-3 {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  margin-top: 50px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.location-box {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  display: grid;\r\n  grid-template-columns: 150px 350px;\r\n  justify-items: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\n/* MENU */\r\n\r\n.section-menu {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  margin-top: 50px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.menu-head {\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n  font-size: 40px;\r\n}\r\n\r\n.menu-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 40px;\r\n  justify-items: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu-car1,\r\n.menu-car2,\r\n.menu-car3,\r\n.menu-car4,\r\n.menu-car5,\r\n.menu-car6 {\r\n  border: 2px solid black;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.menu-tittle {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.menu-img {\r\n  width: 200px;\r\n  height: auto;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* info */\r\n\r\n.info-img {\r\n  display: block;\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n}\r\n\r\n.info-text {\r\n  width: 80%;\r\n  margin: 40px auto;\r\n  font-size: 20px;\r\n  text-align: justify;\r\n}\r\n",""]);const d=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},o=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var g=i(m,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var c=r(a[o]);e[c].references--}for(var s=t(n,i),u=0;u<a.length;u++){var l=r(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},226:(n,e,r)=>{n.exports=r.p+"e90730ea1960ce5e21ab.jpg"},819:(n,e,r)=>{n.exports=r.p+"c0cd8e8619fc96bdd441.jpg"},238:(n,e,r)=>{n.exports=r.p+"ebe91fe249ea0d8117c4.jpg"},496:(n,e,r)=>{n.exports=r.p+"075cd195e388d9c6ff30.jpg"},842:(n,e,r)=>{n.exports=r.p+"bb2ccce8b0c6cc3b6a21.jpg"},806:(n,e,r)=>{n.exports=r.p+"b89d87cb11a425956819.jpg"},586:(n,e,r)=>{n.exports=r.p+"eb9dab0e4ef62304364c.png"},109:(n,e,r)=>{n.exports=r.p+"e84af05dd2fb516e83c2.png"},551:(n,e,r)=>{n.exports=r.p+"45569194bd63f5773053.png"},675:(n,e,r)=>{n.exports=r.p+"8e3e99661e3618d282d7.jpg"},899:(n,e,r)=>{n.exports=r.p+"9ef9433dd325cae99c44.jpg"}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(109),e=r(551),t=r(586);const i=function(n,e=null,r,t=null,i=null){const a=document.createElement(n);null!==e&&a.classList.add(e),null!==t&&(a.textContent=t),null!==i&&(a.src=i);const o=document.querySelector(r);console.log(o),o.appendChild(a)},a=()=>{i("div","display-web","#content"),i("header","main-header",".display-web"),i("div","tittle",".main-header"),i("h1","main-tittle",".tittle","Don Carlos"),i("img","logo",".tittle",null,n),i("h2","main-sub",".main-header","Come on down for some delicious cuisine!",null),i("h3","main-sub-sub",".main-header","Tasty and affordable!"),i("div","main-content",".display-web"),i("div","section-2",".main-content"),i("p","sec2-text",".section-2","Welcome to the restaurant with the best meals in the country, we have everything, meat, pasta, fish and the best seasoning. Come to the place for the best attention and be part of this great family"),i("h2","sec2-title",".section-2","Schedule"),i("p","sec2-schu",".section-2","Week: 6am - 6pm"),i("p","sec2-schu",".section-2","weekend: 8am - 10pm"),i("div","section-3",".main-content"),i("div","location-box",".section-3"),i("img",null,".location-box",null,t),i("p",null,".location-box","1024 Oakwood Ave San Diego, CA 22434"),i("img",null,".location-box",null,e),i("p",null,".location-box","(222)-888 5555")};var o=r(675),c=r(819),s=r(899),u=r(842),l=r(806),p=r(238),d=r(496),m=r(379),g=r.n(m),b=r(795),f=r.n(b),x=r(569),h=r.n(x),v=r(565),y=r.n(v),w=r(216),C=r.n(w),j=r(589),k=r.n(j),S=r(426),z={};z.styleTagTransform=k(),z.setAttributes=y(),z.insert=h().bind(null,"head"),z.domAPI=f(),z.insertStyleElement=C(),g()(S.Z,z),S.Z&&S.Z.locals&&S.Z.locals,i("nav","navbar","#content"),i("div","container-logo",".navbar"),i("img","nav-logo",".container-logo",null,n),i("p","nav-tittle",".container-logo","Don Carlos"),i("div","container-btns",".navbar"),i("button","nav-btn",".container-btns","Home"),i("button","nav-btn",".container-btns","Menu"),i("button","nav-btn",".container-btns","Info"),a(),document.querySelectorAll(".nav-btn").forEach((n=>{n.addEventListener("click",(n=>{const e=document.querySelector(".display-web");document.getElementById("content").removeChild(e),"Menu"===n.target.textContent&&(i("div","display-web","#content"),i("div","section-menu",".display-web"),i("h1","menu-head",".section-menu","This is our menu"),i("div","menu-container",".section-menu"),i("div","menu-car1",".menu-container"),i("h3","menu-tittle",".menu-car1","Pizza"),i("img","menu-img",".menu-car1",null,o),i("div","menu-car2",".menu-container"),i("h3","menu-tittle",".menu-car2","Hamburger"),i("img","menu-img",".menu-car2",null,c),i("div","menu-car3",".menu-container"),i("h3","menu-tittle",".menu-car3","Steak"),i("img","menu-img",".menu-car3",null,s),i("div","menu-car4",".menu-container"),i("h3","menu-tittle",".menu-car4","Chiken Wings"),i("img","menu-img",".menu-car4",null,u),i("div","menu-car5",".menu-container"),i("h3","menu-tittle",".menu-car5","Ice cream"),i("img","menu-img",".menu-car5",null,l),i("div","menu-car6",".menu-container"),i("h3","menu-tittle",".menu-car6","Cake with ice tea"),i("img","menu-img",".menu-car6",null,p)),"Home"===n.target.textContent&&a(),"Info"===n.target.textContent&&(i("div","display-web","#content"),i("div","section-menu",".display-web"),i("h1","menu-head",".section-menu","Hey ,This is Me"),i("img","info-img",".section-menu",null,d),i("p","info-text",".section-menu","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,\n  voluptas tempore. Ullam voluptas natus alias inventore tempore\n  voluptatibus in nemo. Et vitae ipsam possimus. Aperiam ex blanditiis\n  veritatis placeat molestiae? Lorem ipsum dolor sit amet consectetur\n  adipisicing elit. Esse fugiat assumenda ullam sed labore molestiae\n  praesentium corrupti commodi odit sequi voluptatum maxime repellendus\n  omnis minima, est quas quis unde. Ullam."))}))}))})()})();