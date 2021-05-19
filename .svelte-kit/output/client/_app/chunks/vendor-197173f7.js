function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function l(e,t,n,r,i,s,o){const a=function(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}(t,r,i,s);if(a){const i=u(t,n,r,o);e.p(i,a)}}function h(e){return null==e?"":e}function d(e,t,n=t){return e.set(n),t}function f(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function w(){return v(" ")}function b(){return v("")}function _(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function I(e){return function(t){return t.preventDefault(),e.call(this,t)}}function T(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e){return Array.from(e.childNodes)}function S(e,t,n,r){for(let i=0;i<e.length;i+=1){const r=e[i];if(r.nodeName===t){let t=0;const s=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)r.removeAttribute(s[e]);return e.splice(i,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):y(t)}function k(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return v(t)}function A(e){return k(e," ")}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}function D(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}let C;function O(e){C=e}function x(){if(!C)throw new Error("Function called outside component initialization");return C}function P(e){x().$$.on_mount.push(e)}function L(e){x().$$.after_update.push(e)}function M(e,t){x().$$.context.set(e,t)}function U(e){return x().$$.context.get(e)}function F(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e(t)))}const V=[],q=[],B=[],j=[],$=Promise.resolve();let z=!1;function K(e){B.push(e)}let G=!1;const W=new Set;function H(){if(!G){G=!0;do{for(let e=0;e<V.length;e+=1){const t=V[e];O(t),Q(t.$$)}for(O(null),V.length=0;q.length;)q.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];W.has(t)||(W.add(t),t())}B.length=0}while(V.length);for(;j.length;)j.pop()();z=!1,G=!1,W.clear()}}function Q(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const Y=new Set;let J;function X(){J={r:0,c:[],p:J}}function Z(){J.r||i(J.c),J=J.p}function ee(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function te(e,t,n,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),J.c.push((()=>{Y.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function ne(e,t){const n={},r={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],a=t[s];if(a){for(const e in o)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[s]=a}else for(const e in o)i[e]=1}for(const o in r)o in n||(n[o]=void 0);return n}function re(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function se(e,t){e&&e.l(t)}function oe(e,t,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=e.$$;a&&a.m(t,r),o||K((()=>{const t=c.map(n).filter(s);u?u.push(...t):i(t),e.$$.on_mount=[]})),l.forEach(K)}function ae(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){-1===e.$$.dirty[0]&&(V.push(e),z||(z=!0,$.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(t,n,s,o,a,c,u=[-1]){const l=C;O(t);const h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(h.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),d&&ce(t,e)),n})):[],h.update(),d=!0,i(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){const e=E(n.target);h.fragment&&h.fragment.l(e),e.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&ee(t.$$.fragment),oe(t,n.target,n.anchor,n.customElement),H()}O(l)}class le{$destroy(){ae(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const he=[];function de(t,n=e){let r;const i=[];function s(e){if(o(t,e)&&(t=e,r)){const e=!he.length;for(let n=0;n<i.length;n+=1){const e=i[n];e[1](),he.push(e,t)}if(e){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.push(c),1===i.length&&(r=n(s)||e),o(t),()=>{const e=i.indexOf(c);-1!==e&&i.splice(e,1),0===i.length&&(r(),r=null)}}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fe=function(e,t){return(fe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var pe=function(){return(pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function me(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ge(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function ye(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function ve(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function we(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function be(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};function Ie(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ie(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Te=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Se(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ke(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function Ae(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ne(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Re(){var e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function De(){return"indexedDB"in self&&null!=indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Oe.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}fe(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Oe=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?xe(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Ce(i,a,r);return c},e}();function xe(e,t){return e.replace(Pe,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Pe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}function Me(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function Ue(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Fe(e,t){var n=new Ve(e,t);return n.subscribe.bind(n)}var Ve=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=qe),void 0===r.error&&(r.error=qe),void 0===r.complete&&(r.complete=qe);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function qe(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return e&&e._delegate?e._delegate:e}var je=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),$e=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Te;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=pe({identifier:"[DEFAULT]",optional:!1},e),n=t.identifier,r=t.optional,i=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l){}try{for(var r=ve(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=we(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(l){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return ge(this,void 0,void 0,(function(){var e;return ye(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(be(be([],we(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),we(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.instanceIdentifier,i=void 0===r?"[DEFAULT]":r,s=e.options,o=void 0===s?{}:s,a=this.normalizeInstanceIdentifier(i);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=ve(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var h=we(l.value,2),d=h[0],f=h[1];a===this.normalizeInstanceIdentifier(d)&&f.resolve(c)}}catch(p){t={error:p}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return c},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ke=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new $e(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Ge(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,He,Qe=[];(He=We||(We={}))[He.DEBUG=0]="DEBUG",He[He.VERBOSE=1]="VERBOSE",He[He.INFO=2]="INFO",He[He.WARN=3]="WARN",He[He.ERROR=4]="ERROR",He[He.SILENT=5]="SILENT";var Ye={debug:We.DEBUG,verbose:We.VERBOSE,info:We.INFO,warn:We.WARN,error:We.ERROR,silent:We.SILENT},Je=We.INFO,Xe=((ze={})[We.DEBUG]="log",ze[We.VERBOSE]="log",ze[We.INFO]="info",ze[We.WARN]="warn",ze[We.ERROR]="error",ze),Ze=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=Xe[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Ge(["["+i+"]  "+e.name+":"],n))}},et=function(){function e(e){this.name=e,this._logLevel=Je,this._logHandler=Ze,this._userLogHandler=null,Qe.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in We))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Ye[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,We.DEBUG],e)),this._logHandler.apply(this,Ge([this,We.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,We.VERBOSE],e)),this._logHandler.apply(this,Ge([this,We.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,We.INFO],e)),this._logHandler.apply(this,Ge([this,We.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,We.WARN],e)),this._logHandler.apply(this,Ge([this,We.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ge([this,We.ERROR],e)),this._logHandler.apply(this,Ge([this,We.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const nt=new et("@firebase/app"),rt={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},it=new Map,st=new Map;function ot(e,t){try{e.container.addComponent(t)}catch(n){nt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function at(e,t){e.container.addOrOverwriteComponent(t)}function ct(e){const t=e.name;if(st.has(t))return nt.debug(`There were multiple attempts to register component ${t}.`),!1;st.set(t,e);for(const n of it.values())ot(n,e);return!0}function ut(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=new Oe("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new je("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw lt.create("bad-app-name",{appName:String(r)});if(it.has(r))throw lt.create("duplicate-app",{appName:r});const i=new Ke(r);for(const o of st.values())i.addComponent(o);const s=new ht(e,n,i);return it.set(r,s),s}async function ft(e){const t=e.name;it.has(t)&&(it.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function pt(e,t,n){var r;let i=null!==(r=rt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void nt.warn(e.join(" "))}ct(new je(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function mt(e,t){if(null!==e&&"function"!=typeof e)throw lt.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=Ye[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],s=2;s<arguments.length;s++)i[s-2]=arguments[s];var o=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:We[n].toLowerCase(),message:o,args:i,type:t.name})}},r=0,i=Qe;r<i.length;r++)n(i[r])}(e,t)}function gt(e){var t;t=e,Qe.forEach((function(e){e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;ct(new je("platform-logger",(e=>new tt(e)),"PRIVATE")),pt("@firebase/app-exp","0.0.900-exp.894b5da5a",yt),pt("fire-js","");var vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:"9.0.0-beta.1",_DEFAULT_ENTRY_NAME:"[DEFAULT]",_addComponent:ot,_addOrOverwriteComponent:at,_apps:it,_clearComponents:function(){st.clear()},_components:st,_getProvider:ut,_registerComponent:ct,_removeServiceInstance:function(e,t,n="[DEFAULT]"){ut(e,t).clearInstance(n)},deleteApp:ft,getApp:function(e="[DEFAULT]"){const t=it.get(e);if(!t)throw lt.create("no-app",{appName:e});return t},getApps:function(){return Array.from(it.values())},initializeApp:dt,onLog:mt,registerVersion:pt,setLogLevel:gt});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this._delegate=e,this.firebase=t,ot(e,new je("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),ft(this._delegate))))}_getService(e,t="[DEFAULT]"){return this._delegate.checkDestroyed(),this._delegate.container.getProvider(e).getImmediate({identifier:t})}_removeServiceInstance(e,t="[DEFAULT]"){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ot(this._delegate,e)}_addOrOverwriteComponent(e){at(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Oe("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const s=dt(r,i),o=new e(s,n);return t[s.name]=o,o},app:r,registerVersion:pt,setLogLevel:gt,onLog:mt,apps:null,SDK_VERSION:"9.0.0-beta.1",INTERNAL:{registerComponent:function(t){const i=t.name,s=i.replace("-compat","");if(ct(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[s])throw bt.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&Ie(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:vt}};function r(e){if(n=t,r=e=e||"[DEFAULT]",!Object.prototype.hasOwnProperty.call(n,r))throw bt.create("no-app",{appName:e});var n,r;return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=function e(){const t=_t(wt);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Ie(t,e)},createSubscribe:Fe,ErrorFactory:Oe,deepExtend:Ie}),t}(),Tt=new et("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Tt.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Tt.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Et=It;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){pt("@firebase/app-compat","0.0.900-exp.894b5da5a",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Et.registerVersion("firebase-exp","9.0.0-beta.1","app-compat");const St=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "useAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"Auth can only be initialized once per app."}},kt=new Oe("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),At=new et("@firebase/auth-exp");function Nt(e,...t){At.logLevel<=We.ERROR&&At.error(`Auth (9.0.0-beta.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,...t){throw Ct(e,...t)}function Dt(e,...t){return Ct(e,...t)}function Ct(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kt.create(e,...t)}function Ot(e,t,...n){if(!e)throw Ct(t,...n)}function xt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Nt(t),new Error(t)}function Pt(e,t){e||xt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Map;function Mt(e){Pt(e instanceof Function,"Expected a class definition");let t=Lt.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ft(){return"http:"===Vt()||"https:"===Vt()}function Vt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Se()||Ne()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ft()||Ae()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},zt=new qt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Gt(e,t,n,r,i={}){return Wt(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Le(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(jt.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),jt.fetch()(Qt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Wt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$t),t);try{const t=new Yt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Jt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Jt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Jt(e,"email-already-in-use",s);Rt(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof Ce)throw i;Rt(e,"network-request-failed")}}async function Ht(e,t,n,r,i={}){const s=await Gt(e,t,n,r,i);return"mfaPendingCredential"in s&&Rt(e,"multi-factor-auth-required",{serverResponse:s}),s}function Qt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Bt(e.config,i):`${e.config.apiScheme}://${i}`}class Yt{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Dt(this.auth,"timeout"))),zt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Zt(e){return 1e3*Number(e)}function en(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Nt("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return _e.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(Nt("Failed to decode base64 JWT payload"),null)}catch(i){return Nt("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ce&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class nn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xt(this.lastLoginAt),this.creationTime=Xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await tn(e,async function(e,t){return Gt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ot(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=me(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ot(e.idToken,"internal-error"),Ot(void 0!==e.idToken,"internal-error"),Ot(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=en(e);return Ot(t,"internal-error"),Ot(void 0!==t.exp,"internal-error"),Ot(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ot(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Wt(e,{},(()=>{const n=Le({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Qt(e,r,"/v1/token",`key=${i}`);return jt.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new on;return n&&(Ot("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ot("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ot("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return xt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t){Ot("string"==typeof e||void 0===e,"internal-error",{appName:t})}class cn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=me(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new nn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new rn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await tn(this,this.stsTokenManager.getToken(this.auth,e));return Ot(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Be(e),r=await n.getIdToken(t),i=en(r);Ot(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xt(Zt(i.auth_time)),issuedAtTime:Xt(Zt(i.iat)),expirationTime:Xt(Zt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Be(e);await sn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ot(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ot(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tn(this,async function(e,t){return Gt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;Ot(v&&I,e,"internal-error");const T=on.fromJSON(this.name,I);Ot("string"==typeof v,e,"internal-error"),an(l,e.name),an(h,e.name),Ot("boolean"==typeof w,e,"internal-error"),Ot("boolean"==typeof b,e,"internal-error"),an(d,e.name),an(f,e.name),an(p,e.name),an(m,e.name),an(g,e.name),an(y,e.name);const E=new cn({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(E.providerData=_.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new on;r.updateFromServerResponse(t);const i=new cn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await sn(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}un.type="NONE";const ln=un;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t,n){return`firebase:${e}:${t}:${n}`}class dn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=hn(this.userKey,r.apiKey,i),this.fullPersistenceKey=hn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new dn(Mt(ln),e,n);let r=Mt(ln);for(const a of t)if(await a._isAvailable()){r=a;break}let i=null;const s=hn(n,e.config.apiKey,e.name);for(const a of t)try{const t=await a._get(s);if(t){const n=cn._fromJSON(e,t);a!==r&&(i=n);break}}catch(o){}return i&&await r._set(s,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(o){}}))),new dn(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wn(t))return"Blackberry";if(bn(t))return"Webos";if(mn(t))return"Safari";if((t.includes("chrome/")||gn(t))&&!t.includes("edge/"))return"Chrome";if(vn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function pn(e=Ee()){return/firefox\//i.test(e)}function mn(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gn(e=Ee()){return/crios\//i.test(e)}function yn(e=Ee()){return/iemobile/i.test(e)}function vn(e=Ee()){return/android/i.test(e)}function wn(e=Ee()){return/blackberry/i.test(e)}function bn(e=Ee()){return/webos/i.test(e)}function _n(e=Ee()){return/iphone|ipad|ipod/i.test(e)}function In(e=Ee()){return _n(e)||vn(e)||bn(e)||wn(e)||/windows phone/i.test(e)||yn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tn(e,t=[]){let n;switch(e){case"Browser":n=fn(Ee());break;case"Worker":n=`${fn(Ee())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kn(this),this.idTokenSubscription=new kn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await dn.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Ot(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sn(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Be(e):null;return t&&Ot(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Ot(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Mt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oe("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mt(e)||this._popupRedirectResolver;Ot(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next,s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ot(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ot(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Sn(e){return Be(e)}class kn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fe((e=>this.observer=e))}get next(){return Ot(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function An(e,t,n){const r=Sn(e);Ot(r._canInitEmulator,r,"emulator-config-failed"),Ot(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Nn(t),{host:o,port:a}=function(e){const t=Nn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Rn(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Rn(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),function(e){function t(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#ff0000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"==typeof window||"undefined"==typeof document||e||("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)}function Nn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Rn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Dn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t){return Gt(e,"POST","/v1/accounts:resetPassword",Kt(e,t))}async function On(e,t){return Gt(e,"POST","/v1/accounts:update",t)}async function xn(e,t){return Gt(e,"POST","/v1/accounts:sendOobCode",Kt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn extends Dn{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithPassword",Kt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithEmailLink",Kt(e,t))}(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return On(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithEmailLink",Kt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t){return Ht(e,"POST","/v1/accounts:signInWithIdp",Kt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Dn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=me(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Mn(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return Ln(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ln(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ln(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Le(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn extends Dn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithPhoneNumber",Kt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ht(e,"POST","/v1/accounts:signInWithPhoneNumber",Kt(e,t));if(n.temporaryProof)throw Jt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithPhoneNumber",Kt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Un)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Fn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){var t,n,r,i,s,o;const a=Me(Ue(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Ot(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Me(Ue(e)).link,n=t?Me(Ue(t)).deep_link_id:null,r=Me(Ue(e)).deep_link_id;return(r?Me(Ue(r)).link:null)||r||n||t||e}(e);try{return new Vn(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,t){return Pn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Vn.parseLink(t);return Ot(n,"argument-error"),Pn._fromEmailAndCode(e,n.code,n.tenantId)}}qn.PROVIDER_ID="password",qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Bn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $n extends jn{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return Ot("providerId"in t&&"signInMethod"in t,"argument-error"),Mn._fromParams(t)}credential(e){return this._credential(e)}_credential(e){return Ot(e.idToken||e.accessToken,"argument-error"),Mn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $n.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $n.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new $n(o)._credential({idToken:t,accessToken:n,rawNonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends jn{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch(t){return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com",zn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn extends jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Kn.credential(t,n)}catch(r){return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com",Kn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn extends jn{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch(t){return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com",Gn.PROVIDER_ID="github.com";class Wn extends Dn{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Ln(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ln(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ln(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Wn(n,i):null}static _create(e,t){return new Wn(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends jn{constructor(){super("twitter.com")}static credential(e,t){return Mn._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Hn.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qn(e,t){return Ht(e,"POST","/v1/accounts:signUp",Kt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn.TWITTER_SIGN_IN_METHOD="twitter.com",Hn.PROVIDER_ID="twitter.com";class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await cn._fromIdTokenResponse(e,n,r),s=Jn(n);return new Yn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Jn(n);return new Yn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Jn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn extends Ce{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Xn.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Xn(e,t,n,r)}}function Zn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Xn._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e,t){const n=Be(e);await rr(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return Gt(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=er(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function nr(e,t,n=!1){const r=await tn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yn._forOperation(e,"link",r)}async function rr(e,t,n){await sn(t);const r=!1===e?"provider-already-linked":"no-such-provider";Ot(er(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await tn(e,Zn(r,i,t,e),n);Ot(s.idToken,r,"internal-error");const o=en(s.idToken);Ot(o,r,"internal-error");const{sub:a}=o;return Ot(e.uid===a,r,"user-mismatch"),Yn._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Rt(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t,n=!1){const r="signIn",i=await Zn(e,r,t),s=await Yn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function or(e,t){return sr(Sn(e),t)}async function ar(e,t){const n=Be(e);return await rr(!1,n,t.providerId),nr(n,t)}async function cr(e,t){return ir(Be(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ur(e,t){const n=Sn(e),r=await async function(e,t){return Ht(e,"POST","/v1/accounts:signInWithCustomToken",Kt(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Yn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?hr._fromServerResponse(e,t):Rt(e,"internal-error")}}class hr extends lr{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new hr(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,t,n){var r;Ot((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Ot(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Ot(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iosBundleId=n.iOS.bundleId),n.android&&(Ot(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e,t,n){const r=Be(e),i={requestType:"PASSWORD_RESET",email:t};n&&dr(r,i,n),await async function(e,t){return xn(e,t)}(r,i)}async function pr(e,t){await async function(e,t){return Gt(e,"POST","/v1/accounts:update",Kt(e,t))}(Be(e),{oobCode:t})}async function mr(e,t){const n=Be(e),r=await Cn(n,{oobCode:t}),i=r.requestType;switch(Ot(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Ot(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Ot(r.mfaInfo,n,"internal-error");default:Ot(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=lr._fromServerResponse(Sn(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gr(e,t,n){const r=Be(e),i={requestType:"EMAIL_SIGNIN",email:t};Ot(n.handleCodeInApp,r,"argument-error"),n&&dr(r,i,n),await async function(e,t){return xn(e,t)}(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yr(e,t){const n={identifier:t,continueUri:Ft()?Ut():"http://localhost"},{signinMethods:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Gt(e,"POST","/v1/accounts:createAuthUri",Kt(e,t))}(Be(e),n);return r||[]}async function vr(e,t){const n=Be(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&dr(n.auth,r,t);const{email:i}=await async function(e,t){return xn(e,t)}(n.auth,r);i!==e.email&&await e.reload()}async function wr(e,t,n){const r=Be(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&dr(r.auth,i,n);const{email:s}=await async function(e,t){return xn(e,t)}(r.auth,i);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function br(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Be(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await tn(r,async function(e,t){return Gt(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}async function _r(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await tn(e,On(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Tr extends Ir{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Er extends Ir{constructor(e,t){super(e,"facebook.com",t)}}class Sr extends Tr{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class kr extends Ir{constructor(e,t){super(e,"google.com",t)}}class Ar extends Tr{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Nr(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=en(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Ir(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new Er(s,i);case"github.com":return new Sr(s,i);case"google.com":return new kr(s,i);case"twitter.com":return new Ar(s,i,e.screenName||null);case"custom":case"anonymous":return new Ir(s,null);default:return new Ir(s,r,i)}}(n)}class Rr{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Rr("enroll",e)}static _fromMfaPendingCredential(e){return new Rr("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Rr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Rr._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Sn(e),r=(t.serverResponse.mfaInfo||[]).map((e=>lr._fromServerResponse(n,e)));Ot(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=Rr._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new Dr(i,r,(async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const s=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Yn._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return Ot(t.user,n,"internal-error"),Yn._forOperation(t.user,t.operationType,s);default:Rt(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class Cr{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>lr._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Cr(e)}async getSession(){return Rr._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await tn(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await tn(this.user,(i=this.user.auth,s={idToken:n,mfaEnrollmentId:t},Gt(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Object.assign({tenantId:i.tenantId},s))));var i,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(o){if("auth/user-token-expired"!==o.code)throw o}}}const Or=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ot(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Pr{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ee();return mn(e)||_n(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=In(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Re()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lr.type="LOCAL";const Mr=Lr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ur(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];class Fr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e="",t=20){return`${e}${Math.floor(Math.random()*Math.pow(10,t))}`}();r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(){return void 0!==Vr().WorkerGlobalScope&&"function"==typeof Vr().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Br="firebaseLocalStorageDb";class jr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $r(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function zr(){const e=indexedDB.open(Br,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;if(!n.objectStoreNames.contains("firebaseLocalStorage"))return await function(){const e=indexedDB.deleteDatabase(Br);return new jr(e).toPromise()}(),zr();t(n)}))}))}async function Kr(e,t,n){const r=$r(e,!0).put({fbase_key:t,value:n});return new jr(r).toPromise()}function Gr(e,t){const n=$r(e,!0).delete(t);return new jr(n).toPromise()}class Wr{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await zr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(qr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Fr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zr();return await Kr(e,"__sak","1"),await Gr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Kr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=$r(e,!1).get(t),r=await new jr(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$r(e,!1).getAll();return new jr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wr.type="LOCAL";const Hr=Wr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Jr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Dt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yr(e))}saveEventToCache(e){this.cachedEventUids.add(Yr(e)),this.lastProcessedEventTime=Date.now()}}function Yr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Jr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}function Xr(e){return`${e||""}${Math.floor(1e9*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ei=/^https?/;async function ti(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e){return Gt(e,"GET","/v1/projects",{})}(e);for(const r of t)try{if(ni(r))return}catch(n){}Rt(e,"unauthorized-domain")}function ni(e){const t=Ut(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ei.test(n))return!1;if(Zr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=n,r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ii(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new qt(3e4,6e4);function oi(){const e=Vr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}let ai=null;function ci(e){return ai=ai||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){oi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oi(),n(Dt(e,"network-request-failed"))},timeout:si.get()})}if(null===(i=null===(r=Vr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vr().gapi)||void 0===s?void 0:s.load)){const t=ii("iframefcb");return Vr()[t]=()=>{gapi.load?o():n(Dt(e,"network-request-failed"))},ri(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw ai=null,e}))}(e),ai}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new qt(5e3,15e3),li={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},hi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function di(e){const t=e.config;Ot(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0-beta.1"},i=hi.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Le(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi extends Pr{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fi.type="SESSION";const pi=fi,mi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yi(e,t,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mi),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=gn(u)?"_blank":n),pn(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ee()){var t;return _n(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new gi(null);const h=window.open(t||"",a,l);Ot(h,e,"popup-blocked");try{h.focus()}catch(d){}return new gi(h)}function vi(e,t){return t?Mt(t):(Ot(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Dn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bi(e){return sr(e.auth,new wi(e),e.bypassAuthState)}function _i(e){const{auth:t,user:n}=e;return Ot(n,t,"internal-error"),ir(n,new wi(e),e.bypassAuthState)}async function Ii(e){const{auth:t,user:n}=e;return Ot(n,t,"internal-error"),nr(n,new wi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bi;case"linkViaPopup":case"linkViaRedirect":return Ii;case"reauthViaPopup":case"reauthViaRedirect":return _i;default:Rt(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map;class Si extends Ti{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ei.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ni(t),r="true"===await Ai(e)._get(n);return await Ai(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ei.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ki(e,t){return Ai(e)._set(Ni(t),"true")}function Ai(e){return Mt(e._redirectPersistence)}function Ni(e){return hn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e,t,n){return async function(e,t,n){const r=Sn(e);Ot(t instanceof Bn,e,"argument-error");const i=vi(r,n);return await ki(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Di(e,t,n){return async function(e,t,n){const r=Be(e);Ot(t instanceof Bn,r.auth,"argument-error");const i=vi(r.auth,n);await ki(i,r.auth);const s=await xi(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}(e,t,n)}function Ci(e,t,n){return async function(e,t,n){const r=Be(e);Ot(t instanceof Bn,r.auth,"argument-error");const i=vi(r.auth,n);await rr(!1,r,t.providerId),await ki(i,r.auth);const s=await xi(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}(e,t,n)}async function Oi(e,t,n=!1){const r=Sn(e),i=vi(r,t),s=new Si(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function xi(e){const t=Xr(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t,n,r,i,s){Ot(e.config.authDomain,e,"auth-domain-config-required"),Ot(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0-beta.1",eventId:i};if(t instanceof Bn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof jn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Bt(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Le(a).slice(1)}`}const Li=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pi,this._completeRedirectFn=Oi}async _openPopup(e,t,n,r){var i;Pt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return yi(e,Pi(e,t,n,Ut(),r),Xr())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Pi(e,t,n,Ut(),r),Vr().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Pt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await ci(e),n=Vr().gapi;return Ot(n,e,"internal-error"),t.open({where:document.body,url:di(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:li,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Dt(e,"network-request-failed"),s=Vr().setTimeout((()=>{r(i)}),ui.get());function o(){Vr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Qr(e);return t.register("authEvent",(t=>{Ot(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Rt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ti(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return In()||mn()||_n()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Ui(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Ui{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;Ot(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Fi=ii("rcb"),Vi=new qt(3e4,6e4);class qi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Vr().grecaptcha}load(e,t=""){return Ot(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vr().grecaptcha):new Promise(((n,r)=>{const i=Vr().setTimeout((()=>{r(Dt(e,"network-request-failed"))}),Vi.get());Vr()[Fi]=()=>{Vr().clearTimeout(i),delete Vr()[Fi];const s=Vr().grecaptcha;if(!s)return void r(Dt(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};ri(`https://www.google.com/recaptcha/api.js??${Le({onload:Fi,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(i),r(Dt(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Vr().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class Bi{async load(e){return new Mi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={theme:"light",type:"image"};class $i{constructor(e,t=Object.assign({},ji),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Sn(n),this.isInvisible="invisible"===this.parameters.size,Ot("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;Ot(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Bi:new qi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){Ot(!this.parameters.sitekey,this.auth,"argument-error"),Ot(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Ot("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=Vr()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){Ot(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Ot(Ft()&&!qr(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await Gt(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.auth);Ot(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Ot(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class zi{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Fn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ki(e,t,n){var r;const i=await n.verify();try{let s;if(Ot("string"==typeof i,e,"argument-error"),Ot("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ot("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Gt(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{Ot("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Ot(n,e,"missing-multi-factor-info");return(await function(e,t){return Gt(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Gt(e,"POST","/v1/accounts:sendVerificationCode",Kt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(e){this.providerId=Gi.PROVIDER_ID,this.auth=Sn(e)}verifyPhoneNumber(e,t){return Ki(this.auth,e,Be(t))}static credential(e,t){return Fn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Gi.credentialFromTaggedObject(t)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fn._fromTokenResponse(t,n):null}}Gi.PROVIDER_ID="phone",Gi.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi=new qt(2e3,1e4);class Hi extends Ti{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ot(e,this.auth,"internal-error"),e}async onExecution(){Pt(1===this.filter.length,"Popup operations only handle one event");const e=Xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Dt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Wi.get())};e()}}Hi.currentPopupAction=null;class Qi extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return xt("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qi(e)}_finalizeEnroll(e,t,n){return function(e,t){return Gt(e,"POST","/v2/accounts/mfaEnrollment:finalize",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Gt(e,"POST","/v2/accounts/mfaSignIn:finalize",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Yi{constructor(){}static assertion(e){return Qi._fromCredential(e)}}var Ji;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji="Browser",ct(new je("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Ot(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Ot(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Ji,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tn(Ji)},s=new En(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ct(new je("auth-internal",(e=>{const t=Sn(e.getProvider("auth-exp").getImmediate());return new xr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),pt("@firebase/auth-exp","0.0.900-exp.894b5da5a",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ji));async function Zi(e,t,n){var r;const{BuildInfo:i}=Xi();Pt(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(Pt(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return _n()?o.ibi=i.packageName:vn()?o.apn=i.packageName:Rt(e,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Pi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}function es(e){const{cordova:t}=Xi();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,function(e=Ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(i)}))}))}class ts extends Qr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function ns(e){const t=await ss()._get(os(e));return t&&await ss()._remove(os(e)),t}function rs(e,t){var n,r;const i=function(e){const t=as(e),n=t.link?decodeURIComponent(t.link):void 0,r=as(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return as(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=as(i),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(t){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(r=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?Dt(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function is(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ss(){return Mt(Mr)}function os(e){return hn("authEvent",e.config.apiKey,e.name)}function as(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Me(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=class{constructor(){this._redirectPersistence=pi,this._shouldInitProactively=!0,this.eventManagers=new Map,this._completeRedirectFn=Oi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ts(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,s,o,a,c,u,l;const h=Xi();Ot("function"==typeof(null===(t=null==h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Ot(void 0!==(null===(n=null==h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Ot("function"==typeof(null===(s=null===(i=null===(r=null==h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ot("function"==typeof(null===(c=null===(a=null===(o=null==h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Ot("function"==typeof(null===(l=null===(u=null==h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Ei.clear();const s=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:is(),postBody:null,tenantId:e.tenantId,error:Dt(e,"no-auth-event")}}(e,n,r);await function(e,t){return ss()._set(os(e),t)}(e,s);const o=await Zi(e,s,t);return async function(e,t,n){const{cordova:r}=Xi();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(Dt(e,"redirect-cancelled-by-user"))}),2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),vn()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}(e,i,await es(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(){return Promise.resolve()}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Xi(),s=setTimeout((async()=>{await ns(e),t.onEvent(us())}),500),o=async n=>{clearTimeout(s);const r=await ns(e);let i=null;r&&(null==n?void 0:n.url)&&(i=rs(r,n.url)),t.onEvent(i||us())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;Xi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof a)try{a(e)}catch(t){console.error(t)}}}};function us(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Dt("no-auth-event")}}function ls(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function hs(e=Ee()){return!("file:"!==ls()&&"ionic:"!==ls()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ds(e=Ee()){return Re()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Ee()){return/Edge\/\d+/.test(e)}(e)}function fs(){try{const e=self.localStorage,t=Xr();if(e)return e.setItem(t,"1"),e.removeItem(t),!ds()||De()}catch(e){return ps()&&De()}return!1}function ps(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function ms(){return("http:"===ls()||"https:"===ls()||Ae()||hs())&&!(Ne()||ke())&&fs()&&!ps()}function gs(){return hs()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ys={LOCAL:"local",NONE:"none",SESSION:"session"},vs=Ot;async function ws(e){await e._initializationPromise;const t=bs(),n=hn("persistence",e.config.apiKey,e.name);(null==t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function bs(){return"undefined"!=typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=Ot,Is=Mt(Li),Ts=Mt(cs);class Es{constructor(){this.underlyingResolver=null,this._redirectPersistence=pi,this._completeRedirectFn=Oi}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return gs()||Is._shouldInitProactively}get assertedUnderlyingResolver(){return _s(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!gs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?Ts:Is}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){t.resolver=new Rs(e,function(e,t){var n;const r=Be(e),i=t;return Ot(t.operationType,r,"argument-error"),Ot(null===(n=i.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Dr._fromError(r,i)}(e,t))}else if(r){const e=ks(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function ks(e){const{_tokenResponse:t}=e instanceof Ce?e.customData:e;if(!t)return null;if(!(e instanceof Ce)&&"temporaryProof"in t&&"phoneNumber"in t)return Gi.credentialFromResult(e);const n=t.providerId;if(!n||"password"===n)return null;let r;switch(n){case"google.com":r=Kn;break;case"facebook.com":r=zn;break;case"github.com":r=Gn;break;case"twitter.com":r=Hn;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Wn._create(n,o):Mn._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new $n(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof Ce?r.credentialFromError(e):r.credentialFromResult(e)}async function As(e,t){let n;try{n=await t}catch(o){throw o instanceof Ce&&Ss(e,o),o}const{operationType:r,user:i}=n;return{operationType:r,credential:(s=n,ks(s)),additionalUserInfo:Nr(n),user:Ds.getOrCreate(i)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s}async function Ns(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>As(e,n.confirm(t))}}class Rs{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return As(this.auth.unwrap(),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=Be(e);return Or.has(t)||Or.set(t,Cr._fromUser(t)),Or.get(t)}(e)}static getOrCreate(e){return Ds.USER_MAP.has(e)||Ds.USER_MAP.set(e,new Ds(e)),Ds.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return As(this.auth,ar(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ns(this.auth,async function(e,t,n){const r=Be(e);await rr(!1,r,"phone");const i=await Ki(r.auth,t,Be(n));return new zi(i,(e=>ar(r,e)))}(this._delegate,e,t))}async linkWithPopup(e){return As(this.auth,async function(e,t,n){const r=Be(e);Ot(t instanceof Bn,r.auth,"argument-error");const i=vi(r.auth,n);return new Hi(r.auth,"linkViaPopup",t,i,r).executeNotNull()}(this._delegate,e,Es))}async linkWithRedirect(e){return await ws(Sn(this.auth)),Ci(this._delegate,e,Es)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return As(this.auth,cr(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ns(this.auth,async function(e,t,n){const r=Be(e),i=await Ki(r.auth,t,Be(n));return new zi(i,(e=>cr(r,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return As(this.auth,async function(e,t,n){const r=Be(e);Ot(t instanceof Bn,r.auth,"argument-error");const i=vi(r.auth,n);return new Hi(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}(this._delegate,e,Es))}async reauthenticateWithRedirect(e){return await ws(Sn(this.auth)),Di(this._delegate,e,Es)}sendEmailVerification(e){return vr(this._delegate,e)}async unlink(e){return await tr(this._delegate,e),this}updateEmail(e){return function(e,t){return _r(Be(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return _r(Be(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await nr(Be(e),t)}(this._delegate,e)}updateProfile(e){return br(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return wr(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ds.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cs=Ot;class Os{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Cs(n,"invalid-api-key",{appName:e.name});let r=[ln];if("undefined"!=typeof window){r=function(e,t){const n=bs();if(!(null==n?void 0:n.sessionStorage))return[];const r=hn("persistence",e,t);switch(n.sessionStorage.getItem(r)){case ys.NONE:return[ln];case ys.LOCAL:return[Hr,pi];case ys.SESSION:return[pi];default:return[]}}(n,e.name);for(const e of[Hr,Mr])r.includes(e)||r.push(e)}Cs(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?Es:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:i}}),this._delegate._updateErrorMap(St),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ds.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){An(this._delegate,e,t)}applyActionCode(e){return pr(this._delegate,e)}checkActionCode(e){return mr(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await Cn(Be(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return As(this._delegate,async function(e,t,n){const r=Sn(e),i=await Qn(r,{returnSecureToken:!0,email:t,password:n}),s=await Yn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return yr(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=Vn.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){Cs(ms(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await Sn(e)._initializationPromise,Oi(e,t,!1)}(this._delegate,Es);return e?As(this._delegate,Promise.resolve(e)):{credential:null,user:null}}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=xs(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=xs(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return gr(this._delegate,e,t)}sendPasswordResetEmail(e,t){return fr(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){vs(Object.values(ys).includes(t),e,"invalid-persistence-type"),Ne()?vs(t!==ys.SESSION,e,"unsupported-persistence-type"):ke()?vs(t===ys.NONE,e,"unsupported-persistence-type"):ps()?vs(t===ys.NONE||t===ys.LOCAL&&De(),e,"unsupported-persistence-type"):vs(t===ys.NONE||fs(),e,"unsupported-persistence-type")}(this._delegate,e),e){case ys.SESSION:t=pi;break;case ys.LOCAL:t=await Mt(Hr)._isAvailable()?Hr:Mr;break;case ys.NONE:t=ln;break;default:return Rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return As(this._delegate,async function(e){var t;const n=Sn(e);if(null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Yn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Qn(n,{returnSecureToken:!0}),i=await Yn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(this._delegate))}signInWithCredential(e){return As(this._delegate,or(this._delegate,e))}signInWithCustomToken(e){return As(this._delegate,ur(this._delegate,e))}signInWithEmailAndPassword(e,t){return As(this._delegate,function(e,t,n){return or(Be(e),qn.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return As(this._delegate,async function(e,t,n){const r=Be(e),i=qn.credentialWithLink(t,n||Ut());return Ot(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),or(r,i)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ns(this._delegate,async function(e,t,n){const r=Sn(e),i=await Ki(r,t,Be(n));return new zi(i,(e=>or(r,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Cs(ms(),this._delegate,"operation-not-supported-in-this-environment"),As(this._delegate,async function(e,t,n){const r=Sn(e);Ot(t instanceof Bn,e,"argument-error");const i=vi(r,n);return new Hi(r,"signInViaPopup",t,i).executeNotNull()}(this._delegate,e,Es))}async signInWithRedirect(e){return Cs(ms(),this._delegate,"operation-not-supported-in-this-environment"),await ws(this._delegate),Ri(this._delegate,e,Es)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await mr(Be(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function xs(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&Ds.getOrCreate(e)),error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.providerId="phone",this._delegate=new Gi(unwrap(Et.auth()))}static credential(e,t){return Gi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Ps.PHONE_SIGN_IN_METHOD=Gi.PHONE_SIGN_IN_METHOD,Ps.PROVIDER_ID=Gi.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ls=Ot;class Ms{constructor(e,t,n=Et.app()){var r;Ls(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new $i(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Us;(Us=Et).INTERNAL.registerComponent(new je("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth-exp");return new Os(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"}},EmailAuthProvider:qn,FacebookAuthProvider:zn,GithubAuthProvider:Gn,GoogleAuthProvider:Kn,OAuthProvider:$n,PhoneAuthProvider:Ps,PhoneMultiFactorGenerator:Yi,RecaptchaVerifier:Ms,TwitterAuthProvider:Hn,Auth:{Persistence:ys},AuthCredential:Dn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Us.registerVersion("@firebase/auth-compat","0.0.900-exp.894b5da5a");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Fs=function(e,t){return(Fs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Vs(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var qs,Bs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},js=js||{},$s=Bs||self;function zs(){}function Ks(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Gs(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ws="closure_uid_"+(1e9*Math.random()>>>0),Hs=0;function Qs(e,t,n){return e.call.apply(e.bind,arguments)}function Ys(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Js(e,t,n){return(Js=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qs:Ys).apply(null,arguments)}function Xs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Zs(){return Date.now()}function eo(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Kb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function to(){this.j=this.j,this.i=this.i}to.prototype.j=!1,to.prototype.ja=function(){var e;!this.j&&(this.j=!0,this.G(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Ws)&&e[Ws]||(e[Ws]=++Hs))},to.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var no=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},ro=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function io(e){return Array.prototype.concat.apply([],arguments)}function so(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function oo(e){return/^[\s\xa0]*$/.test(e)}var ao,co=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function uo(e,t){return-1!=e.indexOf(t)}function lo(e,t){return e<t?-1:e>t?1:0}e:{var ho=$s.navigator;if(ho){var fo=ho.userAgent;if(fo){ao=fo;break e}}ao=""}function po(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function mo(e){var t={};for(var n in e)t[n]=e[n];return t}var go="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yo(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var s=0;s<go.length;s++)n=go[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function vo(e){return vo[" "](e),e}vo[" "]=zs;var wo,bo,_o=uo(ao,"Opera"),Io=uo(ao,"Trident")||uo(ao,"MSIE"),To=uo(ao,"Edge"),Eo=To||Io,So=uo(ao,"Gecko")&&!(uo(ao.toLowerCase(),"webkit")&&!uo(ao,"Edge"))&&!(uo(ao,"Trident")||uo(ao,"MSIE"))&&!uo(ao,"Edge"),ko=uo(ao.toLowerCase(),"webkit")&&!uo(ao,"Edge");function Ao(){var e=$s.document;return e?e.documentMode:void 0}e:{var No="",Ro=(bo=ao,So?/rv:([^\);]+)(\)|;)/.exec(bo):To?/Edge\/([\d\.]+)/.exec(bo):Io?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(bo):ko?/WebKit\/(\S+)/.exec(bo):_o?/(?:Version)[ \/]?(\S+)/.exec(bo):void 0);if(Ro&&(No=Ro?Ro[1]:""),Io){var Do=Ao();if(null!=Do&&Do>parseFloat(No)){wo=String(Do);break e}}wo=No}var Co,Oo={};function xo(e){return function(e,t){var n=Oo;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(){for(var t=0,n=co(String(wo)).split("."),r=co(String(e)).split("."),i=Math.max(n.length,r.length),s=0;0==t&&s<i;s++){var o=n[s]||"",a=r[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;t=lo(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||lo(0==o[2].length,0==a[2].length)||lo(o[2],a[2]),o=o[3],a=a[3]}while(0==t)}return 0<=t}))}if($s.document&&Io){var Po=Ao();Co=Po||(parseInt(wo,10)||void 0)}else Co=void 0;var Lo=Co,Mo=!Io||9<=Number(Lo),Uo=Io&&!xo("9"),Fo=function(){if(!$s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$s.addEventListener("test",zs,t),$s.removeEventListener("test",zs,t)}catch(n){}return e}();function Vo(e,t){this.type=e,this.a=this.target=t,this.defaultPrevented=!1}function qo(e,t){if(Vo.call(this,e?e.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.a=t,t=e.relatedTarget){if(So){e:{try{vo(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Bo[e.pointerType]||"",this.c=e,e.defaultPrevented&&this.b()}}Vo.prototype.b=function(){this.defaultPrevented=!0},eo(qo,Vo);var Bo={2:"touch",3:"pen",4:"mouse"};qo.prototype.b=function(){qo.X.b.call(this);var e=this.c;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Uo)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(t){}};var jo="closure_listenable_"+(1e6*Math.random()|0),$o=0;function zo(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ca=i,this.key=++$o,this.Y=this.Z=!1}function Ko(e){e.Y=!0,e.listener=null,e.proxy=null,e.src=null,e.ca=null}function Go(e){this.src=e,this.a={},this.b=0}function Wo(e,t){var n=t.type;if(n in e.a){var r,i=e.a[n],s=no(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ko(t),0==e.a[n].length&&(delete e.a[n],e.b--))}}function Ho(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.Y&&s.listener==t&&s.capture==!!n&&s.ca==r)return i}return-1}Go.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.a[s])||(e=this.a[s]=[],this.b++);var o=Ho(e,t,r,i);return-1<o?(t=e[o],n||(t.Z=!1)):((t=new zo(t,this.src,s,!!r,i)).Z=n,e.push(t)),t};var Qo="closure_lm_"+(1e6*Math.random()|0),Yo={};function Jo(e,t,n,r,i){if(r&&r.once)return Zo(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Jo(e,t[s],n,r,i);return null}return n=aa(n),e&&e[jo]?e.va(t,n,Gs(r)?!!r.capture:!!r,i):Xo(e,t,n,!1,r,i)}function Xo(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Gs(i)?!!i.capture:!!i;if(o&&!Mo)return null;var a=sa(e);if(a||(e[Qo]=a=new Go(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){var e=ia,t=Mo?function(n){return e.call(t.src,t.listener,n)}:function(n){if(!(n=e.call(t.src,t.listener,n)))return n};return t}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Fo||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(na(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Zo(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Zo(e,t[s],n,r,i);return null}return n=aa(n),e&&e[jo]?e.wa(t,n,Gs(r)?!!r.capture:!!r,i):Xo(e,t,n,!0,r,i)}function ea(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ea(e,t[s],n,r,i);else r=Gs(r)?!!r.capture:!!r,n=aa(n),e&&e[jo]?(e=e.c,(t=String(t).toString())in e.a&&(-1<(n=Ho(s=e.a[t],n,r,i))&&(Ko(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.a[t],e.b--)))):e&&(e=sa(e))&&(t=e.a[t.toString()],e=-1,t&&(e=Ho(t,n,r,i)),(n=-1<e?t[e]:null)&&ta(n))}function ta(e){if("number"!=typeof e&&e&&!e.Y){var t=e.src;if(t&&t[jo])Wo(t.c,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(na(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=sa(t))?(Wo(n,e),0==n.b&&(n.src=null,t[Qo]=null)):Ko(e)}}}function na(e){return e in Yo?Yo[e]:Yo[e]="on"+e}function ra(e,t){var n=e.listener,r=e.ca||e.src;return e.Z&&ta(e),n.call(r,t)}function ia(e,t){if(e.Y)return!0;if(!Mo){if(!t)e:{t=["window","event"];for(var n=$s,r=0;r<t.length;r++)if(null==(n=n[t[r]])){t=null;break e}t=n}return ra(e,t=new qo(t,this))}return ra(e,new qo(t,this))}function sa(e){return(e=e[Qo])instanceof Go?e:null}var oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function aa(e){return"function"==typeof e?e:(e[oa]||(e[oa]=function(t){return e.handleEvent(t)}),e[oa])}function ca(){to.call(this),this.c=new Go(this),this.J=this,this.C=null}function ua(e,t){var n,r=e.C;if(r)for(n=[];r;r=r.C)n.push(r);if(e=e.J,r=t.type||t,"string"==typeof t)t=new Vo(t,e);else if(t instanceof Vo)t.target=t.target||e;else{var i=t;yo(t=new Vo(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.a=n[s];i=la(o,r,!0,t)&&i}if(i=la(o=t.a=e,r,!0,t)&&i,i=la(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=la(o=t.a=n[s],r,!1,t)&&i}function la(e,t,n,r){if(!(t=e.c.a[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.Y&&o.capture==n){var a=o.listener,c=o.ca||o.src;o.Z&&Wo(e.c,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}eo(ca,to),ca.prototype[jo]=!0,(qs=ca.prototype).addEventListener=function(e,t,n,r){Jo(this,e,t,n,r)},qs.removeEventListener=function(e,t,n,r){ea(this,e,t,n,r)},qs.G=function(){if(ca.X.G.call(this),this.c){var e,t=this.c;for(e in t.a){for(var n=t.a[e],r=0;r<n.length;r++)Ko(n[r]);delete t.a[e],t.b--}}this.C=null},qs.va=function(e,t,n,r){return this.c.add(String(e),t,!1,n,r)},qs.wa=function(e,t,n,r){return this.c.add(String(e),t,!0,n,r)};var ha=$s.JSON.stringify;function da(){this.b=this.a=null}var fa,pa=new(function(){function e(e,t){this.c=e,this.f=t,this.b=0,this.a=null}return e.prototype.get=function(){var e;return 0<this.b?(this.b--,e=this.a,this.a=e.next,e.next=null):e=this.c(),e},e}())((function(){return new ga}),(function(e){e.reset()}));function ma(){var e=ba,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.b=null),t.next=null),t}function ga(){this.next=this.b=this.a=null}function ya(e){$s.setTimeout((function(){throw e}),0)}function va(e,t){fa||function(){var e=$s.Promise.resolve(void 0);fa=function(){e.then(_a)}}(),wa||(fa(),wa=!0),ba.add(e,t)}da.prototype.add=function(e,t){var n=pa.get();n.set(e,t),this.b?this.b.next=n:this.a=n,this.b=n},ga.prototype.set=function(e,t){this.a=e,this.b=t,this.next=null},ga.prototype.reset=function(){this.next=this.b=this.a=null};var wa=!1,ba=new da;function _a(){for(var e;e=ma();){try{e.a.call(e.b)}catch(n){ya(n)}var t=pa;t.f(e),100>t.b&&(t.b++,e.next=t.a,t.a=e)}wa=!1}function Ia(e,t){ca.call(this),this.b=e||1,this.a=t||$s,this.f=Js(this.Za,this),this.g=Zs()}function Ta(e){e.aa=!1,e.M&&(e.a.clearTimeout(e.M),e.M=null)}function Ea(e,t,n){if("function"==typeof e)n&&(e=Js(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Js(e.handleEvent,e)}return 2147483647<Number(t)?-1:$s.setTimeout(e,t||0)}function Sa(e){e.a=Ea((function(){e.a=null,e.c&&(e.c=!1,Sa(e))}),e.h);var t=e.b;e.b=null,e.g.apply(null,t)}eo(Ia,ca),(qs=Ia.prototype).aa=!1,qs.M=null,qs.Za=function(){if(this.aa){var e=Zs()-this.g;0<e&&e<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-e):(this.M&&(this.a.clearTimeout(this.M),this.M=null),ua(this,"tick"),this.aa&&(Ta(this),this.start()))}},qs.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=Zs())},qs.G=function(){Ia.X.G.call(this),Ta(this),delete this.a};var ka=function(e){function t(t,n){var r=e.call(this)||this;return r.g=t,r.h=n,r.b=null,r.c=!1,r.a=null,r}return function(e,t){function n(){this.constructor=e}Fs(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.f=function(e){this.b=arguments,this.a?this.c=!0:Sa(this)},t.prototype.G=function(){e.prototype.G.call(this),this.a&&($s.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},t}(to);function Aa(e){to.call(this),this.b=e,this.a={}}eo(Aa,to);var Na=[];function Ra(e,t,n,r){Array.isArray(n)||(n&&(Na[0]=n.toString()),n=Na);for(var i=0;i<n.length;i++){var s=Jo(t,n[i],r||e.handleEvent,!1,e.b||e);if(!s)break;e.a[s.key]=s}}function Da(e){po(e.a,(function(e,t){this.a.hasOwnProperty(t)&&ta(e)}),e),e.a={}}function Ca(){this.a=!0}function Oa(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.a)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ha(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}Aa.prototype.G=function(){Aa.X.G.call(this),Da(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ca.prototype.info=function(){};var xa={},Pa=null;function La(){return Pa=Pa||new ca}function Ma(e){Vo.call(this,xa.Fa,e)}function Ua(e){var t=La();ua(t,new Ma(t,e))}function Fa(e,t){Vo.call(this,xa.STAT_EVENT,e),this.stat=t}function Va(e){var t=La();ua(t,new Fa(t,e))}function qa(e){Vo.call(this,xa.Ga,e)}function Ba(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return $s.setTimeout((function(){e()}),t)}xa.Fa="serverreachability",eo(Ma,Vo),xa.STAT_EVENT="statevent",eo(Fa,Vo),xa.Ga="timingevent",eo(qa,Vo);var ja={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},$a={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function za(){}function Ka(e){var t;return(t=e.a)||(t=e.a={}),t}function Ga(){}za.prototype.a=null;var Wa,Ha={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function Qa(){Vo.call(this,"d")}function Ya(){Vo.call(this,"c")}function Ja(){}function Xa(e,t,n,r){this.g=e,this.c=t,this.f=n,this.S=r||1,this.J=new Aa(this),this.P=Za,e=Eo?125:void 0,this.R=new Ia(e),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}eo(Qa,Vo),eo(Ya,Vo),eo(Ja,za),Wa=new Ja;var Za=45e3,ec={},tc={};function nc(e,t,n){e.H=1,e.i=Ec(vc(t)),e.j=n,e.I=!0,rc(e,null)}function rc(e,t){e.u=Zs(),oc(e),e.l=vc(e.i);var n=e.l,r=e.S;Array.isArray(r)||(r=[String(r)]),Uc(n.b,"t",r),e.D=0,e.a=Cu(e.g,e.g.C?t:null),0<e.O&&(e.F=new ka(Js(e.Ca,e,e.a),e.O)),Ra(e.J,e.a,"readystatechange",e.Xa),t=e.B?mo(e.B):{},e.j?(e.m||(e.m="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.a.ba(e.l,e.m,e.j,t)):(e.m="GET",e.a.ba(e.l,e.m,null,t)),Ua(1),function(e,t,n,r,i,s){e.info((function(){if(e.a)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.c,e.m,e.l,e.f,e.S,e.j)}function ic(e,t,n){for(var r=!0;!e.A&&e.D<n.length;){var i=sc(e,n);if(i==tc){4==t&&(e.h=4,Va(14),r=!1),Oa(e.c,e.f,null,"[Incomplete Response]");break}if(i==ec){e.h=4,Va(15),Oa(e.c,e.f,n,"[Invalid Chunk]"),r=!1;break}Oa(e.c,e.f,i,null),hc(e,i)}4==t&&0==n.length&&(e.h=1,Va(16),r=!1),e.b=e.b&&r,r?0<n.length&&!e.V&&(e.V=!0,(t=e.g).a==e&&t.U&&!t.F&&(t.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tu(t),t.F=!0,Va(11))):(Oa(e.c,e.f,n,"[Invalid Chunked Response]"),lc(e),uc(e))}function sc(e,t){var n=e.D,r=t.indexOf("\n",n);return-1==r?tc:(n=Number(t.substring(n,r)),isNaN(n)?ec:(r+=1)+n>t.length?tc:(t=t.substr(r,n),e.D=r+n,t))}function oc(e){e.T=Zs()+e.P,ac(e,e.P)}function ac(e,t){if(null!=e.o)throw Error("WatchDog timer not null");e.o=Ba(Js(e.Va,e),t)}function cc(e){e.o&&($s.clearTimeout(e.o),e.o=null)}function uc(e){0==e.g.v||e.A||ku(e.g,e)}function lc(e){cc(e);var t=e.F;t&&"function"==typeof t.ja&&t.ja(),e.F=null,Ta(e.R),Da(e.J),e.a&&(t=e.a,e.a=null,t.abort(),t.ja())}function hc(e,t){try{var n=e.g;if(0!=n.v&&(n.a==e||zc(n.b,e)))if(n.I=e.N,!e.C&&zc(n.b,e)&&3==n.v){try{var r=n.ka.a.parse(t)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.j){if(n.a){if(!(n.a.u+3e3<e.u))break e;Su(n),pu(n)}Iu(n),Va(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=Ba(Js(n.Sa,n),6e3));if(1>=$c(n.b)&&n.ea){try{n.ea()}catch(g){}n.ea=void 0}}else Nu(n,11)}else if((e.C||n.a==e)&&Su(n),!oo(t))for(t=r=n.ka.a.parse(t),r=0;r<t.length;r++)if(i=t[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2];var s=i[3];null!=s&&(n.ha=s,n.c.info("VER="+n.ha));var o=i[4];null!=o&&(n.pa=o,n.c.info("SVER="+n.pa));var a=i[5];if(null!=a&&"number"==typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var u=e.a;if(u){var l=u.a?u.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=c.b;!h.a&&(uo(l,"spdy")||uo(l,"quic")||uo(l,"h2"))&&(h.f=h.g,h.a=new Set,h.b&&(Kc(h,h.b),h.b=null))}if(c.A){var d=u.a?u.a.getResponseHeader("X-HTTP-Session-Id"):null;d&&(c.na=d,Tc(c.B,c.A,d))}}n.v=3,n.f&&n.f.ta(),n.U&&(n.N=Zs()-e.u,n.c.info("Handshake RTT: "+n.N+"ms"));var f=e;if((c=n).la=Du(c,c.C?c.ga:null,c.fa),f.C){Gc(c.b,f);var p=f,m=c.D;m&&p.setTimeout(m),p.o&&(cc(p),oc(p)),c.a=f}else _u(c);0<n.g.length&&yu(n)}else"stop"!=i[0]&&"close"!=i[0]||Nu(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?Nu(n,7):fu(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0);Ua(4)}catch(g){}}function dc(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ks(e)||"string"==typeof e)ro(e,t,void 0);else{if(e.L&&"function"==typeof e.L)var n=e.L();else if(e.K&&"function"==typeof e.K)n=void 0;else if(Ks(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.K&&"function"==typeof e.K)return e.K();if("string"==typeof e)return e.split("");if(Ks(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function fc(e,t){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof fc)for(n=e.L(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function pc(e){if(e.c!=e.a.length){for(var t=0,n=0;t<e.a.length;){var r=e.a[t];mc(e.b,r)&&(e.a[n++]=r),t++}e.a.length=n}if(e.c!=e.a.length){var i={};for(n=t=0;t<e.a.length;)mc(i,r=e.a[t])||(e.a[n++]=r,i[r]=1),t++;e.a.length=n}}function mc(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(qs=Xa.prototype).setTimeout=function(e){this.P=e},qs.Xa=function(e){e=e.target;var t=this.F;t&&3==uu(e)?t.f():this.Ca(e)},qs.Ca=function(e){try{if(e==this.a)e:{var t=uu(this.a),n=this.a.ua(),r=this.a.W();if(!(3>t||3==t&&!Eo&&!this.a.$())){this.A||4!=t||7==n||Ua(8==n||0>=r?3:2),cc(this);var i=this.a.W();this.N=i;var s=this.a.$();if(this.b=200==i,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.c,this.m,this.l,this.f,this.S,t,i),this.b){if(this.U&&!this.C){t:{if(this.a){var o,a=this.a;if((o=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(o)){var c=o;break t}}c=null}if(!c){this.b=!1,this.h=3,Va(12),lc(this),uc(this);break e}Oa(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,hc(this,c)}this.I?(ic(this,t,s),Eo&&this.b&&3==t&&(Ra(this.J,this.R,"tick",this.Wa),this.R.start())):(Oa(this.c,this.f,s,null),hc(this,s)),4==t&&lc(this),this.b&&!this.A&&(4==t?ku(this.g,this):(this.b=!1,oc(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.h=3,Va(12)):(this.h=0,Va(13)),lc(this),uc(this)}}}catch(u){}},qs.Wa=function(){if(this.a){var e=uu(this.a),t=this.a.$();this.D<t.length&&(cc(this),ic(this,e,t),this.b&&4!=e&&oc(this))}},qs.cancel=function(){this.A=!0,lc(this)},qs.Va=function(){this.o=null;var e=Zs();0<=e-this.T?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.c,this.l),2!=this.H&&(Ua(3),Va(17)),lc(this),this.h=2,uc(this)):ac(this,this.T-e)},(qs=fc.prototype).K=function(){pc(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.b[this.a[t]]);return e},qs.L=function(){return pc(this),this.a.concat()},qs.get=function(e,t){return mc(this.b,e)?this.b[e]:t},qs.set=function(e,t){mc(this.b,e)||(this.c++,this.a.push(e)),this.b[e]=t},qs.forEach=function(e,t){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yc(e,t){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,e instanceof yc){this.a=void 0!==t?t:e.a,wc(this,e.f),this.j=e.j,bc(this,e.c),_c(this,e.h),this.g=e.g,t=e.b;var n=new xc;n.c=t.c,t.a&&(n.a=new fc(t.a),n.b=t.b),Ic(this,n),this.i=e.i}else e&&(n=String(e).match(gc))?(this.a=!!t,wc(this,n[1]||"",!0),this.j=Sc(n[2]||""),bc(this,n[3]||"",!0),_c(this,n[4]),this.g=Sc(n[5]||"",!0),Ic(this,n[6]||"",!0),this.i=Sc(n[7]||"")):(this.a=!!t,this.b=new xc(null,this.a))}function vc(e){return new yc(e)}function wc(e,t,n){e.f=n?Sc(t,!0):t,e.f&&(e.f=e.f.replace(/:$/,""))}function bc(e,t,n){e.c=n?Sc(t,!0):t}function _c(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.h=t}else e.h=null}function Ic(e,t,n){t instanceof xc?(e.b=t,function(e,t){t&&!e.f&&(Pc(e),e.c=null,e.a.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Lc(this,t),Uc(this,n,e))}),e)),e.f=t}(e.b,e.a)):(n||(t=kc(t,Cc)),e.b=new xc(t,e.a))}function Tc(e,t,n){e.b.set(t,n)}function Ec(e){return Tc(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Zs()).toString(36)),e}function Sc(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function kc(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ac),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ac(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}yc.prototype.toString=function(){var e=[],t=this.f;t&&e.push(kc(t,Nc,!0),":");var n=this.c;return(n||"file"==t)&&(e.push("//"),(t=this.j)&&e.push(kc(t,Nc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&e.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&e.push("/"),e.push(kc(n,"/"==n.charAt(0)?Dc:Rc,!0))),(n=this.b.toString())&&e.push("?",n),(n=this.i)&&e.push("#",kc(n,Oc)),e.join("")};var Nc=/[#\/\?@]/g,Rc=/[#\?:]/g,Dc=/[#\?]/g,Cc=/[#\?@]/g,Oc=/#/g;function xc(e,t){this.b=this.a=null,this.c=e||null,this.f=!!t}function Pc(e){e.a||(e.a=new fc,e.b=0,e.c&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.c,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Lc(e,t){Pc(e),t=Fc(e,t),mc(e.a.b,t)&&(e.c=null,e.b-=e.a.get(t).length,mc((e=e.a).b,t)&&(delete e.b[t],e.c--,e.a.length>2*e.c&&pc(e)))}function Mc(e,t){return Pc(e),t=Fc(e,t),mc(e.a.b,t)}function Uc(e,t,n){Lc(e,t),0<n.length&&(e.c=null,e.a.set(Fc(e,t),so(n)),e.b+=n.length)}function Fc(e,t){return t=String(t),e.f&&(t=t.toLowerCase()),t}(qs=xc.prototype).add=function(e,t){Pc(this),this.c=null,e=Fc(this,e);var n=this.a.get(e);return n||this.a.set(e,n=[]),n.push(t),this.b+=1,this},qs.forEach=function(e,t){Pc(this),this.a.forEach((function(n,r){ro(n,(function(n){e.call(t,n,r,this)}),this)}),this)},qs.L=function(){Pc(this);for(var e=this.a.K(),t=this.a.L(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},qs.K=function(e){Pc(this);var t=[];if("string"==typeof e)Mc(this,e)&&(t=io(t,this.a.get(Fc(this,e))));else{e=this.a.K();for(var n=0;n<e.length;n++)t=io(t,e[n])}return t},qs.set=function(e,t){return Pc(this),this.c=null,Mc(this,e=Fc(this,e))&&(this.b-=this.a.get(e).length),this.a.set(e,[t]),this.b+=1,this},qs.get=function(e,t){return e&&0<(e=this.K(e)).length?String(e[0]):t},qs.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var e=[],t=this.a.L(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.K(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.c=e.join("&")};var Vc=function(e,t){this.b=e,this.a=t};function qc(e){this.g=e||Bc,$s.PerformanceNavigationTiming?e=0<(e=$s.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!($s.ia&&$s.ia.ya&&$s.ia.ya()&&$s.ia.ya().Lb),this.f=e?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var Bc=10;function jc(e){return!!e.b||!!e.a&&e.a.size>=e.f}function $c(e){return e.b?1:e.a?e.a.size:0}function zc(e,t){return e.b?e.b==t:!!e.a&&e.a.has(t)}function Kc(e,t){e.a?e.a.add(t):e.b=t}function Gc(e,t){e.b&&e.b==t?e.b=null:e.a&&e.a.has(t)&&e.a.delete(t)}function Wc(e){var t,n;if(null!=e.b)return e.c.concat(e.b.s);if(null!=e.a&&0!==e.a.size){var r=e.c;try{for(var i=Vs(e.a.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.s)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return so(e.c)}function Hc(){}function Qc(){this.a=new Hc}function Yc(e,t,n){var r=n||"";try{dc(e,(function(e,n){var i=e;Gs(e)&&(i=ha(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Jc(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}qc.prototype.cancel=function(){var e,t;if(this.c=Wc(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=Vs(this.a.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.a.clear()}},Hc.prototype.stringify=function(e){return $s.JSON.stringify(e,void 0)},Hc.prototype.parse=function(e){return $s.JSON.parse(e,void 0)};var Xc=$s.JSON.parse;function Zc(e){ca.call(this),this.headers=new fc,this.H=e||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=eu,this.D=this.F=!1}eo(Zc,ca);var eu="",tu=/^https?$/i,nu=["POST","PUT"];function ru(e){return"content-type"==e.toLowerCase()}function iu(e,t){e.b=!1,e.a&&(e.g=!0,e.a.abort(),e.g=!1),e.f=t,e.h=5,su(e),au(e)}function su(e){e.u||(e.u=!0,ua(e,"complete"),ua(e,"error"))}function ou(e){if(e.b&&void 0!==js&&(!e.s[1]||4!=uu(e)||2!=e.W()))if(e.l&&4==uu(e))Ea(e.za,0,e);else if(ua(e,"readystatechange"),4==uu(e)){e.b=!1;try{var t,n=e.W();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var s=String(e.B).match(gc)[1]||null;if(!s&&$s.self&&$s.self.location){var o=$s.self.location.protocol;s=o.substr(0,o.length-1)}i=!tu.test(s?s.toLowerCase():"")}t=i}if(t)ua(e,"complete"),ua(e,"success");else{e.h=6;try{var a=2<uu(e)?e.a.statusText:""}catch(c){a=""}e.f=a+" ["+e.W()+"]",su(e)}}finally{au(e)}}}function au(e,t){if(e.a){cu(e);var n=e.a,r=e.s[0]?zs:null;e.a=null,e.s=null,t||ua(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function cu(e){e.a&&e.D&&(e.a.ontimeout=null),e.m&&($s.clearTimeout(e.m),e.m=null)}function uu(e){return e.a?e.a.readyState:0}function lu(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return po(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Tc(e,t,n))}function hu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function du(e){this.pa=0,this.g=[],this.c=new Ca,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=hu("failFast",!1,e),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=hu("baseRetryDelayMs",5e3,e),this.Ra=hu("retryDelaySeedMs",1e4,e),this.Ma=hu("forwardChannelMaxRetries",2,e),this.ma=hu("forwardChannelRequestTimeoutMs",2e4,e),this.Na=e&&e.g||void 0,this.D=void 0,this.C=e&&e.supportsCrossDomainXhr||!1,this.J="",this.b=new qc(e&&e.concurrentRequestLimit),this.ka=new Qc,this.da=e&&e.fastHandshake||!1,this.Ia=e&&e.b||!1,e&&e.f&&(this.c.a=!1),e&&e.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&e&&e.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=e&&e.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function fu(e){if(mu(e),3==e.v){var t=e.R++,n=vc(e.B);Tc(n,"SID",e.J),Tc(n,"RID",t),Tc(n,"TYPE","terminate"),wu(e,n),(t=new Xa(e,e.c,t,void 0)).H=2,t.i=Ec(vc(n)),n=!1,$s.navigator&&$s.navigator.sendBeacon&&(n=$s.navigator.sendBeacon(t.i.toString(),"")),!n&&$s.Image&&((new Image).src=t.i,n=!0),n||(t.a=Cu(t.g,null),t.a.ba(t.i)),t.u=Zs(),oc(t)}Ru(e)}function pu(e){e.a&&(Tu(e),e.a.cancel(),e.a=null)}function mu(e){pu(e),e.j&&($s.clearTimeout(e.j),e.j=null),Su(e),e.b.cancel(),e.h&&("number"==typeof e.h&&$s.clearTimeout(e.h),e.h=null)}function gu(e,t){e.g.push(new Vc(e.Oa++,t)),3==e.v&&yu(e)}function yu(e){jc(e.b)||e.h||(e.h=!0,va(e.Ba,e),e.u=0)}function vu(e,t){var n;n=t?t.f:e.R++;var r=vc(e.B);Tc(r,"SID",e.J),Tc(r,"RID",n),Tc(r,"AID",e.P),wu(e,r),e.i&&e.l&&lu(r,e.i,e.l),n=new Xa(e,e.c,n,e.u+1),null===e.i&&(n.B=e.l),t&&(e.g=t.s.concat(e.g)),t=bu(e,n,1e3),n.setTimeout(Math.round(.5*e.ma)+Math.round(.5*e.ma*Math.random())),Kc(e.b,n),nc(n,r,t)}function wu(e,t){e.f&&dc({},(function(e,n){Tc(t,n,e)}))}function bu(e,t,n){n=Math.min(e.g.length,n);var r=e.f?Js(e.f.Ja,e.f,e):null;e:for(var i=e.g,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].b,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].b,l=i[c].a;if(0>(u-=s))s=Math.max(0,i[c].b-100),a=!1;else try{Yc(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break e}}return e=e.g.splice(0,n),t.s=e,r}function _u(e){e.a||e.j||(e.T=1,va(e.Aa,e),e.o=0)}function Iu(e){return!(e.a||e.j||3<=e.o)&&(e.T++,e.j=Ba(Js(e.Aa,e),Au(e,e.o)),e.o++,!0)}function Tu(e){null!=e.s&&($s.clearTimeout(e.s),e.s=null)}function Eu(e){e.a=new Xa(e,e.c,"rpc",e.T),null===e.i&&(e.a.B=e.l),e.a.O=0;var t=vc(e.la);Tc(t,"RID","rpc"),Tc(t,"SID",e.J),Tc(t,"CI",e.H?"0":"1"),Tc(t,"AID",e.P),wu(e,t),Tc(t,"TYPE","xmlhttp"),e.i&&e.l&&lu(t,e.i,e.l),e.D&&e.a.setTimeout(e.D);var n=e.a;e=e.ga,n.H=1,n.i=Ec(vc(t)),n.j=null,n.I=!0,rc(n,e)}function Su(e){null!=e.m&&($s.clearTimeout(e.m),e.m=null)}function ku(e,t){var n=null;if(e.a==t){Su(e),Tu(e),e.a=null;var r=2}else{if(!zc(e.b,t))return;n=t.s,Gc(e.b,t),r=1}if(e.I=t.N,0!=e.v)if(t.b)if(1==r){n=t.j?t.j.length:0,t=Zs()-t.u;var i=e.u;ua(r=La(),new qa(r,n,t,i)),yu(e)}else _u(e);else if(3==(i=t.h)||0==i&&0<e.I||!(1==r&&function(e,t){return!($c(e.b)>=e.b.f-(e.h?1:0)||(e.h?(e.g=t.s.concat(e.g),0):1==e.v||2==e.v||e.u>=(e.La?0:e.Ma)||(e.h=Ba(Js(e.Ba,e,t),Au(e,e.u)),e.u++,0)))}(e,t)||2==r&&Iu(e)))switch(n&&0<n.length&&(t=e.b,t.c=t.c.concat(n)),i){case 1:Nu(e,5);break;case 4:Nu(e,10);break;case 3:Nu(e,6);break;default:Nu(e,2)}}function Au(e,t){var n=e.Ha+Math.floor(Math.random()*e.Ra);return e.f||(n*=2),n*t}function Nu(e,t){if(e.c.info("Error code "+t),2==t){var n=null;e.f&&(n=null);var r=Js(e.Ya,e);n||(n=new yc("//www.google.com/images/cleardot.gif"),$s.location&&"http"==$s.location.protocol||wc(n,"https"),Ec(n)),function(e,t){var n=new Ca;if($s.Image){var r=new Image;r.onload=Xs(Jc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Xs(Jc,n,r,"TestLoadImage: error",!1,t),r.onabort=Xs(Jc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Xs(Jc,n,r,"TestLoadImage: timeout",!1,t),$s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Va(2);e.v=0,e.f&&e.f.ra(t),Ru(e),mu(e)}function Ru(e){e.v=0,e.I=-1,e.f&&(0==Wc(e.b).length&&0==e.g.length||(e.b.c.length=0,so(e.g),e.g.length=0),e.f.qa())}function Du(e,t,n){var r=function(e){return e instanceof yc?vc(e):new yc(e,void 0)}(n);if(""!=r.c)t&&bc(r,t+"."+r.c),_c(r,r.h);else{var i=$s.location;r=function(e,t,n,r){var i=new yc(null,void 0);return e&&wc(i,e),t&&bc(i,t),n&&_c(i,n),r&&(i.g=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.V&&po(e.V,(function(e,t){Tc(r,t,e)})),t=e.A,n=e.na,t&&n&&Tc(r,t,n),Tc(r,"VER",e.ha),wu(e,r),r}function Cu(e,t){if(t&&!e.C)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new Zc(e.Na)).F=e.C,t}function Ou(){}function xu(){if(Io&&!(10<=Number(Lo)))throw Error("Environmental error: no available transport.")}function Pu(e,t){ca.call(this),this.a=new du(t),this.o=e,this.b=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.a.l=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.a&&(e?e["X-WebChannel-Client-Profile"]=t.a:e={"X-WebChannel-Client-Profile":t.a}),this.a.O=e,(e=t&&t.httpHeadersOverwriteParam)&&!oo(e)&&(this.a.i=e),this.m=t&&t.supportsCrossDomainXhr||!1,this.l=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!oo(t)&&(this.a.A=t,null!==(e=this.b)&&t in e&&(t in(e=this.b)&&delete e[t])),this.f=new Uu(this)}function Lu(e){Qa.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.c=e)?(e=this.c,this.data=null!==t&&e in t?t[e]:void 0):this.data=t}else this.data=e}function Mu(){Ya.call(this),this.status=1}function Uu(e){this.a=e}(qs=Zc.prototype).ba=function(e,t,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+e);t=t?t.toUpperCase():"GET",this.B=e,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?Ka(this.H):Ka(Wa),this.a.onreadystatechange=Js(this.za,this);try{this.A=!0,this.a.open(t,String(e),!0),this.A=!1}catch(s){return void iu(this,s)}e=n||"";var i=new fc(this.headers);r&&dc(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=ru,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.L()),n=$s.FormData&&e instanceof $s.FormData,!(0<=no(nu,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.a.setRequestHeader(t,e)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{cu(this),0<this.o&&((this.D=function(e){return Io&&xo(9)&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=Js(this.xa,this)):this.m=Ea(this.xa,this.o,this)),this.l=!0,this.a.send(e),this.l=!1}catch(s){iu(this,s)}},qs.xa=function(){void 0!==js&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,ua(this,"timeout"),this.abort(8))},qs.abort=function(e){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=e||7,ua(this,"complete"),ua(this,"abort"),au(this))},qs.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),au(this,!0)),Zc.X.G.call(this)},qs.za=function(){this.j||(this.A||this.l||this.g?ou(this):this.Ua())},qs.Ua=function(){ou(this)},qs.W=function(){try{return 2<uu(this)?this.a.status:-1}catch(bo){return-1}},qs.$=function(){try{return this.a?this.a.responseText:""}catch(bo){return""}},qs.Pa=function(e){if(this.a){var t=this.a.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Xc(t)}},qs.ua=function(){return this.h},qs.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(qs=du.prototype).ha=8,qs.v=1,qs.Ba=function(e){if(this.h)if(this.h=null,1==this.v){if(!e){this.R=Math.floor(1e5*Math.random()),e=this.R++;var t,n=new Xa(this,this.c,e,void 0),r=this.l;if(this.O&&(r?yo(r=mo(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)e:{for(var i=t=0;i<this.g.length;i++){var s=this.g[i];if(void 0===(s="__data__"in s.a&&"string"==typeof(s=s.a.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=i;break e}if(4096===t||i===this.g.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=bu(this,n,t),Tc(i=vc(this.B),"RID",e),Tc(i,"CVER",22),this.A&&Tc(i,"X-HTTP-Session-Id",this.A),wu(this,i),this.i&&r&&lu(i,this.i,r),Kc(this.b,n),this.Ia&&Tc(i,"TYPE","init"),this.da?(Tc(i,"$req",t),Tc(i,"SID","null"),n.U=!0,nc(n,i,null)):nc(n,i,t),this.v=2}}else 3==this.v&&(e?vu(this,e):0==this.g.length||jc(this.b)||vu(this))},qs.Aa=function(){if(this.j=null,Eu(this),this.U&&!(this.F||null==this.a||0>=this.N)){var e=2*this.N;this.c.info("BP detection timer enabled: "+e),this.s=Ba(Js(this.Ta,this),e)}},qs.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,Va(10),pu(this),Eu(this))},qs.Sa=function(){null!=this.m&&(this.m=null,pu(this),Iu(this),Va(19))},qs.Ya=function(e){e?(this.c.info("Successfully pinged google.com"),Va(2)):(this.c.info("Failed to ping google.com"),Va(1))},(qs=Ou.prototype).ta=function(){},qs.sa=function(){},qs.ra=function(){},qs.qa=function(){},qs.Ja=function(){},xu.prototype.a=function(e,t){return new Pu(e,t)},eo(Pu,ca),Pu.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var e=this.a,t=this.o,n=this.b||void 0;Va(0),e.fa=t,e.V=n||{},e.H=e.S,e.B=Du(e,null,e.fa),yu(e)},Pu.prototype.close=function(){fu(this.a)},Pu.prototype.h=function(e){if("string"==typeof e){var t={};t.__data__=e,gu(this.a,t)}else this.l?((t={}).__data__=ha(e),gu(this.a,t)):gu(this.a,e)},Pu.prototype.G=function(){this.a.f=null,delete this.f,fu(this.a),delete this.a,Pu.X.G.call(this)},eo(Lu,Qa),eo(Mu,Ya),eo(Uu,Ou),Uu.prototype.ta=function(){ua(this.a,"a")},Uu.prototype.sa=function(e){ua(this.a,new Lu(e))},Uu.prototype.ra=function(e){ua(this.a,new Mu(e))},Uu.prototype.qa=function(){ua(this.a,"b")},xu.prototype.createWebChannel=xu.prototype.a,Pu.prototype.send=Pu.prototype.h,Pu.prototype.open=Pu.prototype.g,Pu.prototype.close=Pu.prototype.close,ja.NO_ERROR=0,ja.TIMEOUT=8,ja.HTTP_ERROR=6,$a.COMPLETE="complete",Ga.EventType=Ha,Ha.OPEN="a",Ha.CLOSE="b",Ha.ERROR="c",Ha.MESSAGE="d",ca.prototype.listen=ca.prototype.va,Zc.prototype.listenOnce=Zc.prototype.wa,Zc.prototype.getLastError=Zc.prototype.Qa,Zc.prototype.getLastErrorCode=Zc.prototype.ua,Zc.prototype.getStatus=Zc.prototype.W,Zc.prototype.getResponseJson=Zc.prototype.Pa,Zc.prototype.getResponseText=Zc.prototype.$,Zc.prototype.send=Zc.prototype.ba;var Fu=ja,Vu=$a,qu=xa,Bu=10,ju=11,$u=Ga,zu=Zc;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.t(e),this.i=e=>t.writeSequenceNumber(e))}t(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.i&&this.i(e),e}}Ku.o=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wu extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new et("@firebase/firestore");function Qu(){return Hu.logLevel}function Yu(e,...t){if(Hu.logLevel<=We.DEBUG){const n=t.map(Zu);Hu.debug(`Firestore (8.4.1): ${e}`,...n)}}function Ju(e,...t){if(Hu.logLevel<=We.ERROR){const n=t.map(Zu);Hu.error(`Firestore (8.4.1): ${e}`,...n)}}function Xu(e,...t){if(Hu.logLevel<=We.WARN){const n=t.map(Zu);Hu.warn(`Firestore (8.4.1): ${e}`,...n)}}function Zu(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e="Unexpected state"){const t="FIRESTORE (8.4.1) INTERNAL ASSERTION FAILED: "+e;throw Ju(t),new Error(t)}function tl(e,t){e||el()}function nl(e,t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static u(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=rl(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function sl(e,t){return e<t?-1:e>t?1:0}function ol(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function al(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Wu(Gu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Wu(Gu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Wu(Gu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Wu(Gu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return cl.fromMillis(Date.now())}static fromDate(e){return cl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new cl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?sl(this.nanoseconds,e.nanoseconds):sl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ul(e)}static min(){return new ul(new cl(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function hl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function dl(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,n){void 0===t?t=0:t>e.length&&el(),void 0===n?n=e.length-t:n>e.length-t&&el(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===fl.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pl extends fl{construct(e,t,n){return new pl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new pl(t)}static emptyPath(){return new pl([])}}const ml=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gl extends fl{construct(e,t,n){return new gl(e,t,n)}static isValidIdentifier(e){return ml.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gl(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Wu(Gu.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Wu(Gu.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Wu(Gu.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gl(t)}static emptyPath(){return new gl([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.fields=e,e.sort(gl.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ol(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new vl(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new vl(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return sl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vl.EMPTY_BYTE_STRING=new vl("");const wl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bl(e){if(tl(!!e),"string"==typeof e){let t=0;const n=wl.exec(e);if(tl(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_l(e.seconds),nanos:_l(e.nanos)}}function _l(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Il(e){return"string"==typeof e?vl.fromBase64String(e):vl.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function El(e){const t=e.mapValue.fields.__previous_value__;return Tl(t)?El(t):t}function Sl(e){const t=bl(e.mapValue.fields.__local_write_time__.timestampValue);return new cl(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(e){return null==e}function Al(e){return 0===e&&1/e==-1/0}function Nl(e){return"number"==typeof e&&Number.isInteger(e)&&!Al(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.path=e}static fromPath(e){return new Rl(pl.fromString(e))}static fromName(e){return new Rl(pl.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===pl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return pl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Rl(new pl(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tl(e)?4:10:el()}function Cl(e,t){const n=Dl(e);if(n!==Dl(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Sl(e).isEqual(Sl(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=bl(e.timestampValue),r=bl(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Il(e.bytesValue).isEqual(Il(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return _l(e.geoPointValue.latitude)===_l(t.geoPointValue.latitude)&&_l(e.geoPointValue.longitude)===_l(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return _l(e.integerValue)===_l(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=_l(e.doubleValue),r=_l(t.doubleValue);return n===r?Al(n)===Al(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ol(e.arrayValue.values||[],t.arrayValue.values||[],Cl);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ll(n)!==ll(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Cl(n[i],r[i])))return!1;return!0}(e,t);default:return el()}var r}function Ol(e,t){return void 0!==(e.values||[]).find((e=>Cl(e,t)))}function xl(e,t){const n=Dl(e),r=Dl(t);if(n!==r)return sl(n,r);switch(n){case 0:return 0;case 1:return sl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=_l(e.integerValue||e.doubleValue),r=_l(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Pl(e.timestampValue,t.timestampValue);case 4:return Pl(Sl(e),Sl(t));case 5:return sl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Il(e),r=Il(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=sl(n[i],r[i]);if(0!==e)return e}return sl(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=sl(_l(e.latitude),_l(t.latitude));return 0!==n?n:sl(_l(e.longitude),_l(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=xl(n[i],r[i]);if(e)return e}return sl(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=sl(r[o],s[o]);if(0!==e)return e;const t=xl(n[r[o]],i[s[o]]);if(0!==t)return t}return sl(r.length,s.length)}(e.mapValue,t.mapValue);default:throw el()}}function Pl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return sl(e,t);const n=bl(e),r=bl(t),i=sl(n.seconds,r.seconds);return 0!==i?i:sl(n.nanos,r.nanos)}function Ll(e){return Ml(e)}function Ml(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=bl(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Il(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Rl.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ml(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ml(e.fields[i])}`;return n+"}"}(e.mapValue):el();var t,n}function Ul(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Fl(e){return!!e&&"integerValue"in e}function Vl(e){return!!e&&"arrayValue"in e}function ql(e){return!!e&&"nullValue"in e}function Bl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function jl(e){return!!e&&"mapValue"in e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.overlayMap=new Map,this.partialValue=e}static empty(){return new $l({mapValue:{}})}field(e){return $l.extractNestedValue(this.buildProto(),e)}toProto(){return this.field(gl.emptyPath())}set(e,t){this.setOverlay(e,t)}setAll(e){e.forEach(((e,t)=>{e?this.set(t,e):this.delete(t)}))}delete(e){this.setOverlay(e,null)}isEqual(e){return Cl(this.buildProto(),e.buildProto())}setOverlay(e,t){let n=this.overlayMap;for(let r=0;r<e.length-1;++r){const t=e.get(r);let i=n.get(t);i instanceof Map?n=i:i&&10===Dl(i)?(i=new Map(Object.entries(i.mapValue.fields||{})),n.set(t,i),n=i):(i=new Map,n.set(t,i),n=i)}n.set(e.lastSegment(),t)}applyOverlay(e,t){let n=!1;const r=$l.extractNestedValue(this.partialValue,e),i=jl(r)?Object.assign({},r.mapValue.fields):{};return t.forEach(((t,r)=>{if(t instanceof Map){const s=this.applyOverlay(e.child(r),t);null!=s&&(i[r]=s,n=!0)}else null!==t?(i[r]=t,n=!0):i.hasOwnProperty(r)&&(delete i[r],n=!0)})),n?{mapValue:{fields:i}}:null}buildProto(){const e=this.applyOverlay(gl.emptyPath(),this.overlayMap);return null!=e&&(this.partialValue=e,this.overlayMap.clear()),this.partialValue}static extractNestedValue(e,t){if(t.isEmpty())return e;{let n=e;for(let e=0;e<t.length-1;++e){if(!n.mapValue.fields)return null;if(n=n.mapValue.fields[t.get(e)],!jl(n))return null}return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}clone(){return new $l(this.buildProto())}}function zl(e){const t=[];return hl(e.fields||{},((e,n)=>{const r=new gl([e]);if(jl(n)){const e=zl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new yl(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Kl{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Kl(e,0,ul.min(),$l.empty(),0)}static newFoundDocument(e,t,n){return new Kl(e,1,t,n,0)}static newNoDocument(e,t){return new Kl(e,2,t,$l.empty(),0)}static newUnknownDocument(e,t){return new Kl(e,3,t,$l.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$l.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$l.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Kl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Kl(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function Wl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Gl(e,t,n,r,i,s,o)}function Hl(e){const t=nl(e);if(null===t.h){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+Ll(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),kl(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=ah(t.startAt)),t.endAt&&(e+="|ub:",e+=ah(t.endAt)),t.h=e}return t.h}function Ql(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!uh(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Cl(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!hh(e.startAt,t.startAt)&&hh(e.endAt,t.endAt)}function Yl(e){return Rl.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Jl extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.l(e,t,n):new Xl(e,t,n):"array-contains"===t?new nh(e,n):"in"===t?new rh(e,n):"not-in"===t?new ih(e,n):"array-contains-any"===t?new sh(e,n):new Jl(e,t,n)}static l(e,t,n){return"in"===t?new Zl(e,n):new eh(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.m(xl(t,this.value)):null!==t&&Dl(this.value)===Dl(t)&&this.m(xl(t,this.value))}m(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return el()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xl extends Jl{constructor(e,t,n){super(e,t,n),this.key=Rl.fromName(n.referenceValue)}matches(e){const t=Rl.comparator(e.key,this.key);return this.m(t)}}class Zl extends Jl{constructor(e,t){super(e,"in",t),this.keys=th("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class eh extends Jl{constructor(e,t){super(e,"not-in",t),this.keys=th("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function th(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Rl.fromName(e.referenceValue)))}class nh extends Jl{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vl(t)&&Ol(t.arrayValue,this.value)}}class rh extends Jl{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ol(this.value.arrayValue,t)}}class ih extends Jl{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ol(this.value.arrayValue,t)}}class sh extends Jl{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ol(this.value.arrayValue,e)))}}class oh{constructor(e,t){this.position=e,this.before=t}}function ah(e){return`${e.before?"b":"a"}:${e.position.map((e=>Ll(e))).join(",")}`}class ch{constructor(e,t="asc"){this.field=e,this.dir=t}}function uh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function lh(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Rl.comparator(Rl.fromName(o.referenceValue),n.key):xl(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function hh(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Cl(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function fh(e,t,n,r,i,s,o,a){return new dh(e,t,n,r,i,s,o,a)}function ph(e){return new dh(e)}function mh(e){return!kl(e.limit)&&"F"===e.limitType}function gh(e){return!kl(e.limit)&&"L"===e.limitType}function yh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function vh(e){for(const t of e.filters)if(t.g())return t.field;return null}function wh(e){return null!==e.collectionGroup}function bh(e){const t=nl(e);if(null===t.p){t.p=[];const e=vh(t),n=yh(t);if(null!==e&&null===n)e.isKeyField()||t.p.push(new ch(e)),t.p.push(new ch(gl.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.p.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.p.push(new ch(gl.keyField(),e))}}}return t.p}function _h(e){const t=nl(e);if(!t.T)if("F"===t.limitType)t.T=Wl(t.path,t.collectionGroup,bh(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of bh(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ch(i.field,t))}const n=t.endAt?new oh(t.endAt.position,!t.endAt.before):null,r=t.startAt?new oh(t.startAt.position,!t.startAt.before):null;t.T=Wl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.T}function Ih(e,t,n){return new dh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Th(e,t){return Ql(_h(e),_h(t))&&e.limitType===t.limitType}function Eh(e){return`${Hl(_h(e))}|lt:${e.limitType}`}function Sh(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ll(t.value)}`;var t})).join(", ")}]`),kl(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+ah(e.startAt)),e.endAt&&(t+=", endAt: "+ah(e.endAt)),`Target(${t})`}(_h(e))}; limitType=${e.limitType})`}function kh(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Rl.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!lh(n.startAt,bh(n),r)||n.endAt&&lh(n.endAt,bh(n),r)));var n,r}function Ah(e){return(t,n)=>{let r=!1;for(const i of bh(e)){const e=Nh(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Nh(e,t,n){const r=e.field.isKeyField()?Rl.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?xl(r,i):el()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return el()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(e,t){if(e.I){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(t)?"-0":t}}function Dh(e){return{integerValue:""+e}}function Ch(e,t){return Nl(t)?Dh(t):Rh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this._=void 0}}function xh(e,t,n){return e instanceof Mh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Uh?Fh(e,t):e instanceof Vh?qh(e,t):function(e,t){const n=Lh(e,t),r=jh(n)+jh(e.A);return Fl(n)&&Fl(e.A)?Dh(r):Rh(e.R,r)}(e,t)}function Ph(e,t,n){return e instanceof Uh?Fh(e,t):e instanceof Vh?qh(e,t):n}function Lh(e,t){return e instanceof Bh?Fl(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class Mh extends Oh{}class Uh extends Oh{constructor(e){super(),this.elements=e}}function Fh(e,t){const n=$h(t);for(const r of e.elements)n.some((e=>Cl(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Vh extends Oh{constructor(e){super(),this.elements=e}}function qh(e,t){let n=$h(t);for(const r of e.elements)n=n.filter((e=>!Cl(e,r)));return{arrayValue:{values:n}}}class Bh extends Oh{constructor(e,t){super(),this.R=e,this.A=t}}function jh(e){return _l(e.integerValue||e.doubleValue)}function $h(e){return Vl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.field=e,this.transform=t}}class Kh{constructor(e,t){this.version=e,this.transformResults=t}}class Gh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gh}static exists(e){return new Gh(void 0,e)}static updateTime(e){return new Gh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Hh{}function Qh(e,t,n){var r;e instanceof ed?function(e,t,n){const r=e.value.clone(),i=rd(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof td?function(e,t,n){if(!Wh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=rd(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nd(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Yh(e,t,n){var r;e instanceof ed?function(e,t,n){if(!Wh(e.precondition,t))return;const r=e.value.clone(),i=id(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Zh(t),r).setHasLocalMutations()}(e,t,n):e instanceof td?function(e,t,n){if(!Wh(e.precondition,t))return;const r=id(e.fieldTransforms,n,t),i=t.data;i.setAll(nd(e)),i.setAll(r),t.convertToFoundDocument(Zh(t),i).setHasLocalMutations()}(e,t,n):(r=t,Wh(e.precondition,r)&&r.convertToNoDocument(ul.min()))}function Jh(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Lh(r.transform,e||null);null!=i&&(null==n&&(n=$l.empty()),n.set(r.field,i))}return n||null}function Xh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&ol(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Uh&&r instanceof Uh||n instanceof Vh&&r instanceof Vh?ol(n.elements,r.elements,Cl):n instanceof Bh&&r instanceof Bh?Cl(n.A,r.A):n instanceof Mh&&r instanceof Mh);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function Zh(e){return e.isFoundDocument()?e.version:ul.min()}class ed extends Hh{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class td extends Hh{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function nd(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function rd(e,t,n){const r=new Map;tl(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ph(o,a,n[i]))}return r}function id(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,xh(e,s,t))}return r}class sd extends Hh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class od extends Hh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cd,ud;function ld(e){switch(e){case Gu.OK:return el();case Gu.CANCELLED:case Gu.UNKNOWN:case Gu.DEADLINE_EXCEEDED:case Gu.RESOURCE_EXHAUSTED:case Gu.INTERNAL:case Gu.UNAVAILABLE:case Gu.UNAUTHENTICATED:return!1;case Gu.INVALID_ARGUMENT:case Gu.NOT_FOUND:case Gu.ALREADY_EXISTS:case Gu.PERMISSION_DENIED:case Gu.FAILED_PRECONDITION:case Gu.ABORTED:case Gu.OUT_OF_RANGE:case Gu.UNIMPLEMENTED:case Gu.DATA_LOSS:return!0;default:return el()}}function hd(e){if(void 0===e)return Ju("GRPC error has no .code"),Gu.UNKNOWN;switch(e){case cd.OK:return Gu.OK;case cd.CANCELLED:return Gu.CANCELLED;case cd.UNKNOWN:return Gu.UNKNOWN;case cd.DEADLINE_EXCEEDED:return Gu.DEADLINE_EXCEEDED;case cd.RESOURCE_EXHAUSTED:return Gu.RESOURCE_EXHAUSTED;case cd.INTERNAL:return Gu.INTERNAL;case cd.UNAVAILABLE:return Gu.UNAVAILABLE;case cd.UNAUTHENTICATED:return Gu.UNAUTHENTICATED;case cd.INVALID_ARGUMENT:return Gu.INVALID_ARGUMENT;case cd.NOT_FOUND:return Gu.NOT_FOUND;case cd.ALREADY_EXISTS:return Gu.ALREADY_EXISTS;case cd.PERMISSION_DENIED:return Gu.PERMISSION_DENIED;case cd.FAILED_PRECONDITION:return Gu.FAILED_PRECONDITION;case cd.ABORTED:return Gu.ABORTED;case cd.OUT_OF_RANGE:return Gu.OUT_OF_RANGE;case cd.UNIMPLEMENTED:return Gu.UNIMPLEMENTED;case cd.DATA_LOSS:return Gu.DATA_LOSS;default:return el()}}(ud=cd||(cd={}))[ud.OK=0]="OK",ud[ud.CANCELLED=1]="CANCELLED",ud[ud.UNKNOWN=2]="UNKNOWN",ud[ud.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ud[ud.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ud[ud.NOT_FOUND=5]="NOT_FOUND",ud[ud.ALREADY_EXISTS=6]="ALREADY_EXISTS",ud[ud.PERMISSION_DENIED=7]="PERMISSION_DENIED",ud[ud.UNAUTHENTICATED=16]="UNAUTHENTICATED",ud[ud.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ud[ud.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ud[ud.ABORTED=10]="ABORTED",ud[ud.OUT_OF_RANGE=11]="OUT_OF_RANGE",ud[ud.UNIMPLEMENTED=12]="UNIMPLEMENTED",ud[ud.INTERNAL=13]="INTERNAL",ud[ud.UNAVAILABLE=14]="UNAVAILABLE",ud[ud.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dd{constructor(e,t){this.comparator=e,this.root=t||pd.EMPTY}insert(e,t){return new dd(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pd.BLACK,null,null))}remove(e){return new dd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fd(this.root,e,this.comparator,!1)}getReverseIterator(){return new fd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fd(this.root,e,this.comparator,!0)}}class fd{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pd{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:pd.RED,this.left=null!=r?r:pd.EMPTY,this.right=null!=i?i:pd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new pd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return pd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw el();if(this.right.isRed())throw el();const e=this.left.check();if(e!==this.right.check())throw el();return e+(this.isRed()?0:1)}}pd.EMPTY=null,pd.RED=!0,pd.BLACK=!1,pd.EMPTY=new class{constructor(){this.size=0}get key(){throw el()}get value(){throw el()}get color(){throw el()}get left(){throw el()}get right(){throw el()}copy(e,t,n,r,i){return this}insert(e,t,n){return new pd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class md{constructor(e){this.comparator=e,this.data=new dd(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof md))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new md(this.comparator);return t.data=e,t}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new dd(Rl.comparator);function vd(){return yd}const wd=new dd(Rl.comparator);function bd(){return wd}const _d=new dd(Rl.comparator);function Id(){return _d}const Td=new md(Rl.comparator);function Ed(...e){let t=Td;for(const n of e)t=t.add(n);return t}const Sd=new md(sl);function kd(){return Sd}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Nd.createSynthesizedTargetChangeForCurrentChange(e,t)),new Ad(ul.min(),n,kd(),vd(),Ed())}}class Nd{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Nd(vl.EMPTY_BYTE_STRING,t,Ed(),Ed(),Ed())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t,n,r){this.P=e,this.removedTargetIds=t,this.key=n,this.v=r}}class Dd{constructor(e,t){this.targetId=e,this.V=t}}class Cd{constructor(e,t,n=vl.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Od{constructor(){this.S=0,this.D=Ld(),this.C=vl.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get O(){return 0!==this.S}get $(){return this.k}M(e){e.approximateByteSize()>0&&(this.k=!0,this.C=e)}F(){let e=Ed(),t=Ed(),n=Ed();return this.D.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:el()}})),new Nd(this.C,this.N,e,t,n)}L(){this.k=!1,this.D=Ld()}B(e,t){this.k=!0,this.D=this.D.insert(e,t)}q(e){this.k=!0,this.D=this.D.remove(e)}U(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class xd{constructor(e){this.W=e,this.G=new Map,this.H=vd(),this.J=Pd(),this.Y=new md(sl)}X(e){for(const t of e.P)e.v&&e.v.isFoundDocument()?this.Z(t,e.v):this.tt(t,e.key,e.v);for(const t of e.removedTargetIds)this.tt(t,e.key,e.v)}et(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.st(t)&&n.M(e.resumeToken);break;case 1:n.K(),n.O||n.L(),n.M(e.resumeToken);break;case 2:n.K(),n.O||this.removeTarget(t);break;case 3:this.st(t)&&(n.j(),n.M(e.resumeToken));break;case 4:this.st(t)&&(this.it(t),n.M(e.resumeToken));break;default:el()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.G.forEach(((e,n)=>{this.st(n)&&t(n)}))}rt(e){const t=e.targetId,n=e.V.count,r=this.ot(t);if(r){const e=r.target;if(Yl(e))if(0===n){const n=new Rl(e.path);this.tt(t,n,Kl.newNoDocument(n,ul.min()))}else tl(1===n);else this.ct(t)!==n&&(this.it(t),this.Y=this.Y.add(t))}}ut(e){const t=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Yl(i.target)){const t=new Rl(i.target.path);null!==this.H.get(t)||this.at(r,t)||this.tt(r,t,Kl.newNoDocument(t,e))}n.$&&(t.set(r,n.F()),n.L())}}));let n=Ed();this.J.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.ot(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Ad(e,t,this.Y,this.H,n);return this.H=vd(),this.J=Pd(),this.Y=new md(sl),r}Z(e,t){if(!this.st(e))return;const n=this.at(e,t.key)?2:0;this.nt(e).B(t.key,n),this.H=this.H.insert(t.key,t),this.J=this.J.insert(t.key,this.ht(t.key).add(e))}tt(e,t,n){if(!this.st(e))return;const r=this.nt(e);this.at(e,t)?r.B(t,1):r.q(t),this.J=this.J.insert(t,this.ht(t).delete(e)),n&&(this.H=this.H.insert(t,n))}removeTarget(e){this.G.delete(e)}ct(e){const t=this.nt(e).F();return this.W.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}U(e){this.nt(e).U()}nt(e){let t=this.G.get(e);return t||(t=new Od,this.G.set(e,t)),t}ht(e){let t=this.J.get(e);return t||(t=new md(sl),this.J=this.J.insert(e,t)),t}st(e){const t=null!==this.ot(e);return t||Yu("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.G.get(e);return t&&t.O?null:this.W.lt(e)}it(e){this.G.set(e,new Od),this.W.getRemoteKeysForTarget(e).forEach((t=>{this.tt(e,t,null)}))}at(e,t){return this.W.getRemoteKeysForTarget(e).has(t)}}function Pd(){return new dd(Rl.comparator)}function Ld(){return new dd(Rl.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={asc:"ASCENDING",desc:"DESCENDING"},Ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Fd{constructor(e,t){this.databaseId=e,this.I=t}}function Vd(e,t){return e.I?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qd(e,t){return e.I?t.toBase64():t.toUint8Array()}function Bd(e,t){return Vd(e,t.toTimestamp())}function jd(e){return tl(!!e),ul.fromTimestamp(function(e){const t=bl(e);return new cl(t.seconds,t.nanos)}(e))}function $d(e,t){return(n=e,new pl(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function zd(e){const t=pl.fromString(e);return tl(mf(t)),t}function Kd(e,t){return $d(e.databaseId,t.path)}function Gd(e,t){const n=zd(t);if(n.get(1)!==e.databaseId.projectId)throw new Wu(Gu.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Wu(Gu.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Rl(Yd(n))}function Wd(e,t){return $d(e.databaseId,t)}function Hd(e){const t=zd(e);return 4===t.length?pl.emptyPath():Yd(t)}function Qd(e){return new pl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Yd(e){return tl(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Jd(e,t,n){return{name:Kd(e,t),fields:n.toProto().mapValue.fields}}function Xd(e,t,n){const r=Gd(e,t.name),i=jd(t.updateTime),s=new $l({mapValue:{fields:t.fields}}),o=Kl.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Zd(e,t){let n;if(t instanceof ed)n={update:Jd(e,t.key,t.value)};else if(t instanceof sd)n={delete:Kd(e,t.key)};else if(t instanceof td)n={update:Jd(e,t.key,t.data),updateMask:pf(t.fieldMask)};else{if(!(t instanceof od))return el();n={verify:Kd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Mh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Uh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Vh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Bh)return{fieldPath:t.field.canonicalString(),increment:n.A};throw el()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Bd(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:el())),n;var r,i}function ef(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?Gh.updateTime(jd(i.updateTime)):void 0!==i.exists?Gh.exists(i.exists):Gh.none():Gh.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)tl("REQUEST_TIME"===t.setToServerValue),n=new Mh;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Uh(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Vh(e)}else"increment"in t?n=new Bh(e,t.increment):el();const r=gl.fromServerFormat(t.fieldPath);return new zh(r,n)}(e,t))):[];var i;if(t.update){t.update.name;const i=Gd(e,t.update.name),s=new $l({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new yl(t.map((e=>gl.fromServerFormat(e))))}(t.updateMask);return new td(i,s,e,n,r)}return new ed(i,s,n,r)}if(t.delete){const r=Gd(e,t.delete);return new sd(r,n)}if(t.verify){const r=Gd(e,t.verify);return new od(r,n)}return el()}function tf(e,t){return{documents:[Wd(e,t.path)]}}function nf(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Wd(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Wd(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Bl(e.value))return{unaryFilter:{field:lf(e.field),op:"IS_NAN"}};if(ql(e.value))return{unaryFilter:{field:lf(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Bl(e.value))return{unaryFilter:{field:lf(e.field),op:"IS_NOT_NAN"}};if(ql(e.value))return{unaryFilter:{field:lf(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lf(e.field),op:uf(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:lf((t=e).field),direction:cf(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,c=t.limit,a.I||kl(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=of(t.startAt)),t.endAt&&(n.structuredQuery.endAt=of(t.endAt)),n}function rf(e){let t=Hd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){tl(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=sf(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new ch(hf((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,kl(t)?null:t}(n.limit));let c=null;n.startAt&&(c=af(n.startAt));let u=null;return n.endAt&&(u=af(n.endAt)),fh(t,i,o,s,a,"F",c,u)}function sf(e){return e?void 0!==e.unaryFilter?[ff(e)]:void 0!==e.fieldFilter?[df(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>sf(e))).reduce(((e,t)=>e.concat(t))):el():[]}function of(e){return{before:e.before,values:e.position}}function af(e){const t=!!e.before,n=e.values||[];return new oh(n,t)}function cf(e){return Md[e]}function uf(e){return Ud[e]}function lf(e){return{fieldPath:e.canonicalString()}}function hf(e){return gl.fromServerFormat(e.fieldPath)}function df(e){return Jl.create(hf(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return el()}}(e.fieldFilter.op),e.fieldFilter.value)}function ff(e){switch(e.unaryFilter.op){case"IS_NAN":const t=hf(e.unaryFilter.field);return Jl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=hf(e.unaryFilter.field);return Jl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hf(e.unaryFilter.field);return Jl.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hf(e.unaryFilter.field);return Jl.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return el()}}function pf(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=vf(t)),t=yf(e.get(n),t);return vf(t)}function yf(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function vf(e){return e+""}function wf(e){const t=e.length;if(tl(t>=2),2===t)return tl(""===e.charAt(0)&&""===e.charAt(1)),pl.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&el(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:el()}s=t+2}return new pl(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class _f{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}_f.store="owner",_f.key="owner";class If{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}If.store="mutationQueues",If.keyPath="userId";class Tf{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Tf.store="mutations",Tf.keyPath="batchId",Tf.userMutationsIndex="userMutationsIndex",Tf.userMutationsKeyPath=["userId","batchId"];class Ef{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,gf(t)]}static key(e,t,n){return[e,gf(t),n]}}Ef.store="documentMutations",Ef.PLACEHOLDER=new Ef;class Sf{constructor(e,t){this.path=e,this.readTime=t}}class kf{constructor(e,t){this.path=e,this.version=t}}class Af{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Af.store="remoteDocuments",Af.readTimeIndex="readTimeIndex",Af.readTimeIndexPath="readTime",Af.collectionReadTimeIndex="collectionReadTimeIndex",Af.collectionReadTimeIndexPath=["parentPath","readTime"];class Nf{constructor(e){this.byteSize=e}}Nf.store="remoteDocumentGlobal",Nf.key="remoteDocumentGlobalKey";class Rf{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Rf.store="targets",Rf.keyPath="targetId",Rf.queryTargetsIndexName="queryTargetsIndex",Rf.queryTargetsKeyPath=["canonicalId","targetId"];class Df{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}Df.store="targetDocuments",Df.keyPath=["targetId","path"],Df.documentTargetsIndex="documentTargetsIndex",Df.documentTargetsKeyPath=["path","targetId"];class Cf{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Cf.key="targetGlobalKey",Cf.store="targetGlobal";class Of{constructor(e,t){this.collectionId=e,this.parent=t}}Of.store="collectionParents",Of.keyPath=["collectionId","parent"];class xf{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}xf.store="clientMetadata",xf.keyPath="clientId";class Pf{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}Pf.store="bundles",Pf.keyPath="bundleId";class Lf{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}Lf.store="namedQueries",Lf.keyPath="name";const Mf=[If.store,Tf.store,Ef.store,Af.store,Rf.store,_f.store,Cf.store,Df.store,xf.store,Nf.store,Of.store,Pf.store,Lf.store],Uf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ff{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&el(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new qf(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof qf?t:qf.resolve(t)}catch(t){return qf.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):qf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):qf.reject(t)}static resolve(e){return new qf(((t,n)=>{t(e)}))}static reject(e){return new qf(((t,n)=>{n(e)}))}static waitFor(e){return new qf(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=qf.resolve(!1);for(const n of e)t=t.next((e=>e?qf.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.ft=new Vf,this.transaction.oncomplete=()=>{this.ft.resolve()},this.transaction.onabort=()=>{t.error?this.ft.reject(new zf(e,t.error)):this.ft.resolve()},this.transaction.onerror=t=>{const n=Qf(t.target.error);this.ft.reject(new zf(e,n))}}static open(e,t,n,r){try{return new Bf(t,e.transaction(r,n))}catch(i){throw new zf(t,i)}}get dt(){return this.ft.promise}abort(e){e&&this.ft.reject(e),this.aborted||(Yu("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Gf(t)}}class jf{constructor(e,t,n){this.name=e,this.version=t,this.wt=n,12.2===jf._t(Ee())&&Ju("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Yu("SimpleDb","Removing database:",e),Wf(window.indexedDB.deleteDatabase(e)).toPromise()}static gt(){if("undefined"==typeof indexedDB)return!1;if(jf.yt())return!0;const e=Ee(),t=jf._t(e),n=0<t&&t<10,r=jf.Et(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static yt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Tt)}static It(e,t){return e.store(t)}static _t(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Et(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async At(e){return this.db||(Yu("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new zf(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Wu(Gu.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):n(new zf(e,r))},r.onupgradeneeded=e=>{Yu("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.wt.Rt(t,r.transaction,e.oldVersion,this.version).next((()=>{Yu("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Pt&&(this.db.onversionchange=e=>this.Pt(e)),this.db}bt(e){this.Pt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.At(e);const t=Bf.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch((e=>(t.abort(e),qf.reject(e)))).toPromise();return s.catch((()=>{})),await t.dt,s}catch(o){const e="FirebaseError"!==o.name&&s<3;if(Yu("SimpleDb","Transaction failed with error:",o.message,"Retrying:",e),this.close(),!e)return Promise.reject(o)}}}close(){this.db&&this.db.close(),this.db=void 0}}class $f{constructor(e){this.vt=e,this.Vt=!1,this.St=null}get isDone(){return this.Vt}get Dt(){return this.St}set cursor(e){this.vt=e}done(){this.Vt=!0}Ct(e){this.St=e}delete(){return Wf(this.vt.delete())}}class zf extends Wu{constructor(e,t){super(Gu.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kf(e){return"IndexedDbTransactionError"===e.name}class Gf{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Yu("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Yu("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Wf(n)}add(e){return Yu("SimpleDb","ADD",this.store.name,e,e),Wf(this.store.add(e))}get(e){return Wf(this.store.get(e)).next((t=>(void 0===t&&(t=null),Yu("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Yu("SimpleDb","DELETE",this.store.name,e),Wf(this.store.delete(e))}count(){return Yu("SimpleDb","COUNT",this.store.name),Wf(this.store.count())}Nt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.xt(n,((e,t)=>{r.push(t)})).next((()=>r))}kt(e,t){Yu("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Ot=!1;const r=this.cursor(n);return this.xt(r,((e,t,n)=>n.delete()))}$t(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.xt(r,t)}Mt(e){const t=this.cursor({});return new qf(((n,r)=>{t.onerror=e=>{const t=Qf(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}xt(e,t){const n=[];return new qf(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new $f(i),o=t(i.primaryKey,i.value,s);if(o instanceof qf){const e=o.catch((e=>(s.done(),qf.reject(e))));n.push(e)}s.isDone?r():null===s.Dt?i.continue():i.continue(s.Dt)}})).next((()=>qf.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Ot?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Wf(e){return new qf(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Qf(e.target.error);n(t)}}))}let Hf=!1;function Qf(e){const t=jf._t(Ee());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Wu("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hf||(Hf=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Ff{constructor(e,t){super(),this.Ft=e,this.currentSequenceNumber=t}}function Jf(e,t){const n=nl(e);return jf.It(n.Ft,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Qh(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Yh(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Yh(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(ul.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ed())}isEqual(e){return this.batchId===e.batchId&&ol(this.mutations,e.mutations,((e,t)=>Xh(e,t)))&&ol(this.baseMutations,e.baseMutations,((e,t)=>Xh(e,t)))}}class Zf{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){tl(e.mutations.length===n.length);let r=Id();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Zf(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,n,r,i=ul.min(),s=ul.min(),o=vl.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new ep(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ep(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ep(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.Lt=e}}function np(e,t){if(t.document)return Xd(e.Lt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=Rl.fromSegments(t.noDocument.path),n=ap(t.noDocument.readTime),r=Kl.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=Rl.fromSegments(t.unknownDocument.path),n=ap(t.unknownDocument.version);return Kl.newUnknownDocument(e,n)}return el()}function rp(e,t,n){const r=ip(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n={name:Kd(s=e.Lt,(o=t).key),fields:o.data.toProto().mapValue.fields,updateTime:Vd(s,o.version.toTimestamp())},a=t.hasCommittedMutations;return new Af(null,null,n,a,r,i)}var s,o;if(t.isNoDocument()){const e=t.key.path.toArray(),n=op(t.version),s=t.hasCommittedMutations;return new Af(null,new Sf(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=op(t.version);return new Af(new kf(e,n),null,null,!0,r,i)}return el()}function ip(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function sp(e){const t=new cl(e[0],e[1]);return ul.fromTimestamp(t)}function op(e){const t=e.toTimestamp();return new bf(t.seconds,t.nanoseconds)}function ap(e){const t=new cl(e.seconds,e.nanoseconds);return ul.fromTimestamp(t)}function cp(e,t){const n=(t.baseMutations||[]).map((t=>ef(e.Lt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>ef(e.Lt,t))),i=cl.fromMillis(t.localWriteTimeMs);return new Xf(t.batchId,i,n,r)}function up(e){const t=ap(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?ap(e.lastLimboFreeSnapshotVersion):ul.min();let r;var i;return void 0!==e.query.documents?(tl(1===(i=e.query).documents.length),r=_h(ph(Hd(i.documents[0])))):r=_h(rf(e.query)),new ep(r,e.targetId,0,e.lastListenSequenceNumber,t,n,vl.fromBase64String(e.resumeToken))}function lp(e,t){const n=op(t.snapshotVersion),r=op(t.lastLimboFreeSnapshotVersion);let i;i=Yl(t.target)?tf(e.Lt,t.target):nf(e.Lt,t.target);const s=t.resumeToken.toBase64();return new Rf(t.targetId,Hl(t.target),n,s,t.sequenceNumber,r,i)}function hp(e){const t=rf({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ih(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{getBundleMetadata(e,t){return fp(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:ap(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return fp(e).put({bundleId:(n=t).id,createTime:op(jd(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return pp(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:hp(t.bundledQuery),readTime:ap(t.readTime)};var t}))}saveNamedQuery(e,t){return pp(e).put({name:(n=t).name,readTime:op(jd(n.readTime)),bundledQuery:n.bundledQuery});var n}}function fp(e){return Jf(e,Pf.store)}function pp(e){return Jf(e,Lf.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.Bt=new gp}addToCollectionParentIndex(e,t){return this.Bt.add(t),qf.resolve()}getCollectionParents(e,t){return qf.resolve(this.Bt.getEntries(t))}}class gp{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new md(pl.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new md(pl.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.qt=new gp}addToCollectionParentIndex(e,t){if(!this.qt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.qt.add(t)}));const i={collectionId:n,parent:gf(r)};return vp(e).put(i)}return qf.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[al(t),""],!1,!0);return vp(e).Nt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(wf(r.parent))}return n}))}}function vp(e){return Jf(e,Of.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bp{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new bp(e,bp.DEFAULT_COLLECTION_PERCENTILE,bp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(e,t,n){const r=e.store(Tf.store),i=e.store(Ef.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.$t({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{tl(1===a)})));const u=[];for(const l of n.mutations){const e=Ef.key(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return qf.waitFor(s).next((()=>u))}function Ip(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw el();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bp.DEFAULT_COLLECTION_PERCENTILE=10,bp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bp.DEFAULT=new bp(41943040,bp.DEFAULT_COLLECTION_PERCENTILE,bp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bp.DISABLED=new bp(-1,0,0);class Tp{constructor(e,t,n,r){this.userId=e,this.R=t,this.Ut=n,this.referenceDelegate=r,this.Kt={}}static Qt(e,t,n,r){tl(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Tp(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sp(e).$t({index:Tf.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=kp(e),s=Sp(e);return s.add({}).next((o=>{tl("number"==typeof o);const a=new Xf(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Zd(e.Lt,t))),i=n.mutations.map((t=>Zd(e.Lt,t)));return new Tf(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.R,this.userId,a),u=[];let l=new md(((e,t)=>sl(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Ef.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Ef.PLACEHOLDER))}return l.forEach((t=>{u.push(this.Ut.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Kt[o]=a.keys()})),qf.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Sp(e).get(t).next((e=>e?(tl(e.userId===this.userId),cp(this.R,e)):null))}jt(e,t){return this.Kt[t]?qf.resolve(this.Kt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Kt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Sp(e).$t({index:Tf.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(tl(t.batchId>=n),i=cp(this.R,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Sp(e).$t({index:Tf.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sp(e).Nt(Tf.userMutationsIndex,t).next((e=>e.map((e=>cp(this.R,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ef.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return kp(e).$t({range:r},((n,r,s)=>{const[o,a,c]=n,u=wf(a);if(o===this.userId&&t.path.isEqual(u))return Sp(e).get(c).next((e=>{if(!e)throw el();tl(e.userId===this.userId),i.push(cp(this.R,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new md(sl);const r=[];return t.forEach((t=>{const i=Ef.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=kp(e).$t({range:s},((e,r,i)=>{const[s,o,a]=e,c=wf(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),qf.waitFor(r).next((()=>this.Wt(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ef.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new md(sl);return kp(e).$t({range:s},((e,t,i)=>{const[s,a,c]=e,u=wf(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Wt(e,o)))}Wt(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Sp(e).get(t).next((e=>{if(null===e)throw el();tl(e.userId===this.userId),n.push(cp(this.R,e))})))})),qf.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return _p(e.Ft,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Gt(t.batchId)})),qf.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Gt(e){delete this.Kt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return qf.resolve();const n=IDBKeyRange.lowerBound(Ef.prefixForUser(this.userId)),r=[];return kp(e).$t({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=wf(e[1]);r.push(t)}else n.done()})).next((()=>{tl(0===r.length)}))}))}containsKey(e,t){return Ep(e,this.userId,t)}zt(e){return Ap(e).get(this.userId).next((e=>e||new If(this.userId,-1,"")))}}function Ep(e,t,n){const r=Ef.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return kp(e).$t({range:s,Ot:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Sp(e){return Jf(e,Tf.store)}function kp(e){return Jf(e,Ef.store)}function Ap(e){return Jf(e,If.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.Ht=e}next(){return this.Ht+=2,this.Ht}static Jt(){return new Np(0)}static Yt(){return new Np(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t){this.referenceDelegate=e,this.R=t}allocateTargetId(e){return this.Xt(e).next((t=>{const n=new Np(t.highestTargetId);return t.highestTargetId=n.next(),this.Zt(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Xt(e).next((e=>ul.fromTimestamp(new cl(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Xt(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Xt(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Zt(e,r))))}addTargetData(e,t){return this.te(e,t).next((()=>this.Xt(e).next((n=>(n.targetCount+=1,this.ee(t,n),this.Zt(e,n))))))}updateTargetData(e,t){return this.te(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Dp(e).delete(t.targetId))).next((()=>this.Xt(e))).next((t=>(tl(t.targetCount>0),t.targetCount-=1,this.Zt(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Dp(e).$t(((s,o)=>{const a=up(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>qf.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Dp(e).$t(((e,n)=>{const r=up(n);t(r)}))}Xt(e){return Cp(e).get(Cf.key).next((e=>(tl(null!==e),e)))}Zt(e,t){return Cp(e).put(Cf.key,t)}te(e,t){return Dp(e).put(lp(this.R,t))}ee(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Xt(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Hl(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Dp(e).$t({range:r,index:Rf.queryTargetsIndexName},((e,n,r)=>{const s=up(n);Ql(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Op(e);return t.forEach((t=>{const s=gf(t.path);r.push(i.put(new Df(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))})),qf.waitFor(r)}removeMatchingKeys(e,t,n){const r=Op(e);return qf.forEach(t,(t=>{const i=gf(t.path);return qf.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Op(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Op(e);let i=Ed();return r.$t({range:n,Ot:!0},((e,t,n)=>{const r=wf(e[1]),s=new Rl(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=gf(t.path),r=IDBKeyRange.bound([n],[al(n)],!1,!0);let i=0;return Op(e).$t({index:Df.documentTargetsIndex,Ot:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}lt(e,t){return Dp(e).get(t).next((e=>e?up(e):null))}}function Dp(e){return Jf(e,Rf.store)}function Cp(e){return Jf(e,Cf.store)}function Op(e){return Jf(e,Df.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(e){if(e.code!==Gu.FAILED_PRECONDITION||e.message!==Uf)throw e;Yu("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp([e,t],[n,r]){const i=sl(e,n);return 0===i?sl(t,r):i}class Lp{constructor(e){this.ne=e,this.buffer=new md(Pp),this.se=0}ie(){return++this.se}re(e){const t=[e,this.ie()];if(this.buffer.size<this.ne)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Pp(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mp{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.oe=!1,this.ce=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.ue(e)}stop(){this.ce&&(this.ce.cancel(),this.ce=null)}get started(){return null!==this.ce}ue(e){const t=this.oe?3e5:6e4;Yu("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.ce=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.ce=null,this.oe=!0;try{await e.collectGarbage(this.garbageCollector)}catch(t){Kf(t)?Yu("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xp(t)}await this.ue(e)}))}}class Up{constructor(e,t){this.ae=e,this.params=t}calculateTargetCount(e,t){return this.ae.he(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return qf.resolve(Ku.o);const n=new Lp(t);return this.ae.forEachTarget(e,(e=>n.re(e.sequenceNumber))).next((()=>this.ae.le(e,(e=>n.re(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.ae.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.ae.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Yu("LruGarbageCollector","Garbage collection skipped; disabled"),qf.resolve(wp)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Yu("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wp):this.fe(e,t)))}getCacheSize(e){return this.ae.getCacheSize(e)}fe(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Yu("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Qu()<=We.DEBUG&&Yu("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),qf.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.db=e,this.garbageCollector=new Up(this,t)}he(e){const t=this.de(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}de(e){let t=0;return this.le(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}le(e,t){return this.we(e,((e,n)=>t(n)))}addReference(e,t,n){return Vp(e,n)}removeReference(e,t,n){return Vp(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Vp(e,t)}_e(e,t){return function(e,t){let n=!1;return Ap(e).Mt((r=>Ep(e,r,t).next((e=>(e&&(n=!0),qf.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.we(e,((s,o)=>{if(o<=t){const t=this._e(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s),Op(e).delete([0,gf(s.path)]))))}));r.push(t)}})).next((()=>qf.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Vp(e,t)}we(e,t){const n=Op(e);let r,i=Ku.o;return n.$t({index:Df.documentTargetsIndex},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Ku.o&&t(new Rl(wf(r)),i),i=o,r=s):i=Ku.o})).next((()=>{i!==Ku.o&&t(new Rl(wf(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vp(e,t){return Op(e).put((n=t,r=e.currentSequenceNumber,new Df(0,gf(n.path),r)));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){hl(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return dl(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.changes=new qp((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:ul.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Kl.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?qf.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.R=e,this.Ut=t}addEntry(e,t,n){return Kp(e).put(Gp(t),n)}removeEntry(e,t){const n=Kp(e),r=Gp(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.me(e,n))))}getEntry(e,t){return Kp(e).get(Gp(t)).next((e=>this.ge(t,e)))}ye(e,t){return Kp(e).get(Gp(t)).next((e=>({document:this.ge(t,e),size:Ip(e)})))}getEntries(e,t){let n=vd();return this.pe(e,t,((e,t)=>{const r=this.ge(e,t);n=n.insert(e,r)})).next((()=>n))}Ee(e,t){let n=vd(),r=new dd(Rl.comparator);return this.pe(e,t,((e,t)=>{const i=this.ge(e,t);n=n.insert(e,i),r=r.insert(e,Ip(t))})).next((()=>({documents:n,Te:r})))}pe(e,t,n){if(t.isEmpty())return qf.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Kp(e).$t({range:r},((e,t,r)=>{const o=Rl.fromSegments(e);for(;s&&Rl.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Ct(s.path.toArray()):r.done()})).next((()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=vd();const i=t.path.length+1,s={};if(n.isEqual(ul.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=ip(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=Af.collectionReadTimeIndex}return Kp(e).$t(s,((e,n,s)=>{if(e.length!==i)return;const o=np(this.R,n);t.path.isPrefixOf(o.key.path)?kh(t,o)&&(r=r.insert(o.key,o)):s.done()})).next((()=>r))}newChangeBuffer(e){return new $p(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return zp(e).get(Nf.key).next((e=>(tl(!!e),e)))}me(e,t){return zp(e).put(Nf.key,t)}ge(e,t){if(t){const e=np(this.R,t);if(!e.isNoDocument()||!e.version.isEqual(ul.min()))return e}return Kl.newInvalidDocument(e)}}class $p extends Bp{constructor(e,t){super(),this.Ie=e,this.trackRemovals=t,this.Ae=new qp((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new md(((e,t)=>sl(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Ae.get(i);if(s.document.isValidDocument()){const a=rp(this.Ie.R,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=Ip(a);n+=c-o,t.push(this.Ie.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=rp(this.Ie.R,Kl.newNoDocument(i,ul.min()),this.getReadTime(i));t.push(this.Ie.addEntry(e,i,n))}else t.push(this.Ie.removeEntry(e,i))})),r.forEach((n=>{t.push(this.Ie.Ut.addToCollectionParentIndex(e,n))})),t.push(this.Ie.updateMetadata(e,n)),qf.waitFor(t)}getFromCache(e,t){return this.Ie.ye(e,t).next((e=>(this.Ae.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Ie.Ee(e,t).next((({documents:e,Te:t})=>(t.forEach(((e,t)=>{this.Ae.set(e,t)})),e)))}}function zp(e){return Jf(e,Nf.store)}function Kp(e){return Jf(e,Af.store)}function Gp(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.R=e}Rt(e,t,n,r){tl(n<r&&n>=0&&r<=11);const i=new Bf("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore(_f.store),function(e){e.createObjectStore(If.store,{keyPath:If.keyPath}),e.createObjectStore(Tf.store,{keyPath:Tf.keyPath,autoIncrement:!0}).createIndex(Tf.userMutationsIndex,Tf.userMutationsKeyPath,{unique:!0}),e.createObjectStore(Ef.store)}(e),Hp(e),function(e){e.createObjectStore(Af.store)}(e));let s=qf.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Df.store),e.deleteObjectStore(Rf.store),e.deleteObjectStore(Cf.store)}(e),Hp(e)),s=s.next((()=>function(e){const t=e.store(Cf.store),n=new Cf(0,0,ul.min().toTimestamp(),0);return t.put(Cf.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(Tf.store).Nt().next((n=>{e.deleteObjectStore(Tf.store),e.createObjectStore(Tf.store,{keyPath:Tf.keyPath,autoIncrement:!0}).createIndex(Tf.userMutationsIndex,Tf.userMutationsKeyPath,{unique:!0});const r=t.store(Tf.store),i=n.map((e=>r.put(e)));return qf.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(xf.store,{keyPath:xf.keyPath})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Re(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore(Nf.store)}(e),this.Pe(i))))),n<7&&r>=7&&(s=s.next((()=>this.be(i)))),n<8&&r>=8&&(s=s.next((()=>this.ve(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(Af.store);t.createIndex(Af.readTimeIndex,Af.readTimeIndexPath,{unique:!1}),t.createIndex(Af.collectionReadTimeIndex,Af.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(s=s.next((()=>this.Ve(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(Pf.store,{keyPath:Pf.keyPath})}(e),function(e){e.createObjectStore(Lf.store,{keyPath:Lf.keyPath})}(e)}))),s}Pe(e){let t=0;return e.store(Af.store).$t(((e,n)=>{t+=Ip(n)})).next((()=>{const n=new Nf(t);return e.store(Nf.store).put(Nf.key,n)}))}Re(e){const t=e.store(If.store),n=e.store(Tf.store);return t.Nt().next((t=>qf.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Nt(Tf.userMutationsIndex,r).next((n=>qf.forEach(n,(n=>{tl(n.userId===t.userId);const r=cp(this.R,n);return _p(e,t.userId,r).next((()=>{}))}))))}))))}be(e){const t=e.store(Df.store),n=e.store(Af.store);return e.store(Cf.store).get(Cf.key).next((e=>{const r=[];return n.$t(((n,i)=>{const s=new pl(n),o=[0,gf(s)];r.push(t.get(o).next((n=>{return n?qf.resolve():(r=s,t.put(new Df(0,gf(r),e.highestListenSequenceNumber)));var r})))})).next((()=>qf.waitFor(r)))}))}ve(e,t){e.createObjectStore(Of.store,{keyPath:Of.keyPath});const n=t.store(Of.store),r=new gp,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:gf(r)})}};return t.store(Af.store).$t({Ot:!0},((e,t)=>{const n=new pl(e);return i(n.popLast())})).next((()=>t.store(Ef.store).$t({Ot:!0},(([e,t,n],r)=>{const s=wf(t);return i(s.popLast())}))))}Ve(e){const t=e.store(Rf.store);return t.$t(((e,n)=>{const r=up(n),i=lp(this.R,r);return t.put(i)}))}}function Hp(e){e.createObjectStore(Df.store,{keyPath:Df.keyPath}).createIndex(Df.documentTargetsIndex,Df.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(Rf.store,{keyPath:Rf.keyPath}).createIndex(Rf.queryTargetsIndexName,Rf.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(Cf.store)}const Qp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yp{constructor(e,t,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Se=i,this.window=s,this.document=o,this.De=c,this.Ce=u,this.Ne=null,this.xe=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ke=null,this.inForeground=!1,this.Oe=null,this.$e=null,this.Me=Number.NEGATIVE_INFINITY,this.Fe=e=>Promise.resolve(),!Yp.gt())throw new Wu(Gu.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");var l,h;this.referenceDelegate=new Fp(this,r),this.Le=t+"main",this.R=new tp(a),this.Be=new jf(this.Le,11,new Wp(this.R)),this.qe=new Rp(this.referenceDelegate,this.R),this.Ut=new yp,this.Ue=(l=this.R,h=this.Ut,new jp(l,h)),this.Ke=new dp,this.window&&this.window.localStorage?this.Qe=this.window.localStorage:(this.Qe=null,!1===u&&Ju("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.je().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Wu(Gu.FAILED_PRECONDITION,Qp);return this.We(),this.Ge(),this.ze(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.qe.getHighestSequenceNumber(e)))})).then((e=>{this.Ne=new Ku(e,this.De)})).then((()=>{this.xe=!0})).catch((e=>(this.Be&&this.Be.close(),Promise.reject(e))))}He(e){return this.Fe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Be.bt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Se.enqueueAndForget((async()=>{this.started&&await this.je()})))}je(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Xp(e).put(new xf(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.Je(e).next((e=>{e||(this.isPrimary=!1,this.Se.enqueueRetryable((()=>this.Fe(!1))))}))})).next((()=>this.Ye(e))).next((t=>this.isPrimary&&!t?this.Xe(e).next((()=>!1)):!!t&&this.Ze(e).next((()=>!0)))))).catch((e=>{if(Kf(e))return Yu("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Yu("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Se.enqueueRetryable((()=>this.Fe(e))),this.isPrimary=e}))}Je(e){return Jp(e).get(_f.key).next((e=>qf.resolve(this.tn(e))))}en(e){return Xp(e).delete(this.clientId)}async nn(){if(this.isPrimary&&!this.sn(this.Me,18e5)){this.Me=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Jf(e,xf.store);return t.Nt().next((e=>{const n=this.rn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return qf.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Qe)for(const t of e)this.Qe.removeItem(this.on(t.clientId))}}ze(){this.$e=this.Se.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.je().then((()=>this.nn())).then((()=>this.ze()))))}tn(e){return!!e&&e.ownerId===this.clientId}Ye(e){return this.Ce?qf.resolve(!0):Jp(e).get(_f.key).next((t=>{if(null!==t&&this.sn(t.leaseTimestampMs,5e3)&&!this.cn(t.ownerId)){if(this.tn(t)&&this.networkEnabled)return!0;if(!this.tn(t)){if(!t.allowTabSynchronization)throw new Wu(Gu.FAILED_PRECONDITION,Qp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Xp(e).Nt().next((e=>void 0===this.rn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Yu("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.xe=!1,this.un(),this.$e&&(this.$e.cancel(),this.$e=null),this.an(),this.hn(),await this.Be.runTransaction("shutdown","readwrite",[_f.store,xf.store],(e=>{const t=new Yf(e,Ku.o);return this.Xe(t).next((()=>this.en(t)))})),this.Be.close(),this.ln()}rn(e,t){return e.filter((e=>this.sn(e.updateTimeMs,t)&&!this.cn(e.clientId)))}fn(){return this.runTransaction("getActiveClients","readonly",(e=>Xp(e).Nt().next((e=>this.rn(e,18e5).map((e=>e.clientId))))))}get started(){return this.xe}getMutationQueue(e){return Tp.Qt(e,this.R,this.Ut,this.referenceDelegate)}getTargetCache(){return this.qe}getRemoteDocumentCache(){return this.Ue}getIndexManager(){return this.Ut}getBundleCache(){return this.Ke}runTransaction(e,t,n){Yu("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.Be.runTransaction(e,r,Mf,(r=>(i=new Yf(r,this.Ne?this.Ne.next():Ku.o),"readwrite-primary"===t?this.Je(i).next((e=>!!e||this.Ye(i))).next((t=>{if(!t)throw Ju(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Se.enqueueRetryable((()=>this.Fe(!1))),new Wu(Gu.FAILED_PRECONDITION,Uf);return n(i)})).next((e=>this.Ze(i).next((()=>e)))):this.dn(i).next((()=>n(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}dn(e){return Jp(e).get(_f.key).next((e=>{if(null!==e&&this.sn(e.leaseTimestampMs,5e3)&&!this.cn(e.ownerId)&&!this.tn(e)&&!(this.Ce||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Wu(Gu.FAILED_PRECONDITION,Qp)}))}Ze(e){const t=new _f(this.clientId,this.allowTabSynchronization,Date.now());return Jp(e).put(_f.key,t)}static gt(){return jf.gt()}Xe(e){const t=Jp(e);return t.get(_f.key).next((e=>this.tn(e)?(Yu("IndexedDbPersistence","Releasing primary lease."),t.delete(_f.key)):qf.resolve()))}sn(e,t){const n=Date.now();return!(e<n-t||e>n&&(Ju(`Detected an update time that is in the future: ${e} > ${n}`),1))}We(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Oe=()=>{this.Se.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.je())))},this.document.addEventListener("visibilitychange",this.Oe),this.inForeground="visible"===this.document.visibilityState)}an(){this.Oe&&(this.document.removeEventListener("visibilitychange",this.Oe),this.Oe=null)}Ge(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ke=()=>{this.un(),this.Se.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("unload",this.ke))}hn(){this.ke&&(this.window.removeEventListener("unload",this.ke),this.ke=null)}cn(e){var t;try{const n=null!==(null===(t=this.Qe)||void 0===t?void 0:t.getItem(this.on(e)));return Yu("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ju("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}un(){if(this.Qe)try{this.Qe.setItem(this.on(this.clientId),String(Date.now()))}catch(e){Ju("Failed to set zombie client id.",e)}}ln(){if(this.Qe)try{this.Qe.removeItem(this.on(this.clientId))}catch(e){}}on(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Jp(e){return Jf(e,_f.store)}function Xp(e){return Jf(e,xf.store)}function Zp(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class em{constructor(e,t){this.progress=e,this.wn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,n){this.Ue=e,this._n=t,this.Ut=n}mn(e,t){return this._n.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.gn(e,t,n)))}gn(e,t,n){return this.Ue.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}yn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}pn(e,t){return this.Ue.getEntries(e,t).next((t=>this.En(e,t).next((()=>t))))}En(e,t){return this._n.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.yn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,Rl.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(e,t.path):wh(t)?this.In(e,t,n):this.An(e,t,n);var r}Tn(e,t){return this.mn(e,new Rl(t)).next((e=>{let t=bd();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}In(e,t,n){const r=t.collectionGroup;let i=bd();return this.Ut.getCollectionParents(e,r).next((s=>qf.forEach(s,(s=>{const o=(a=t,c=s.child(r),new dh(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}An(e,t,n){let r,i;return this.Ue.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Rn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Kl.newInvalidDocument(n),r=r.insert(n,i)),Yh(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{kh(t,n)||(r=r.remove(e))})),r)))}Rn(e,t,n){let r=Ed();for(const s of t)for(const e of s.mutations)e instanceof td&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Ue.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pn=n,this.bn=r}static vn(e,t){let n=Ed(),r=Ed();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new nm(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{Vn(e){this.Sn=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(ul.min())?this.Dn(e,t):this.Sn.pn(e,r).next((i=>{const s=this.Cn(t,i);return(mh(t)||gh(t))&&this.Nn(t.limitType,s,r,n)?this.Dn(e,t):(Qu()<=We.DEBUG&&Yu("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Sh(t)),this.Sn.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}Cn(e,t){let n=new md(Ah(e));return t.forEach(((t,r)=>{kh(e,r)&&(n=n.add(r))})),n}Nn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(e,t){return Qu()<=We.DEBUG&&Yu("QueryEngine","Using full collection scan to execute query:",Sh(t)),this.Sn.getDocumentsMatchingQuery(e,t,ul.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,n,r){this.persistence=e,this.xn=t,this.R=r,this.kn=new dd(sl),this.On=new qp((e=>Hl(e)),Ql),this.$n=ul.min(),this._n=e.getMutationQueue(n),this.Mn=e.getRemoteDocumentCache(),this.qe=e.getTargetCache(),this.Fn=new tm(this.Mn,this._n,this.persistence.getIndexManager()),this.Ke=e.getBundleCache(),this.xn.Vn(this.Fn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.kn)))}}function sm(e,t,n,r){return new im(e,t,n,r)}async function om(e,t){const n=nl(e);let r=n._n,i=n.Fn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n._n.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new tm(n.Mn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Ed();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.pn(e,o).next((e=>({Ln:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Fn=i,n.xn.Vn(n.Fn),s}function am(e){const t=nl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.qe.getLastRemoteSnapshotVersion(e)))}function cm(e,t,n,r,i){let s=Ed();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=vd();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(ul.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Yu("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function um(e,t){const n=nl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n._n.getNextMutationBatchAfterBatchId(e,t))))}function lm(e,t){const n=nl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.qe.getTargetData(e,t).next((i=>i?(r=i,qf.resolve(r)):n.qe.allocateTargetId(e).next((i=>(r=new ep(t,i,0,e.currentSequenceNumber),n.qe.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.kn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(e.targetId,e),n.On.set(t,e.targetId)),e}))}async function hm(e,t,n){const r=nl(e),i=r.kn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!Kf(o))throw o;Yu("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.kn=r.kn.remove(t),r.On.delete(i.target)}function dm(e,t,n){const r=nl(e);let i=ul.min(),s=Ed();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=nl(e),i=r.On.get(n);return void 0!==i?qf.resolve(r.kn.get(i)):r.qe.getTargetData(t,n)}(r,e,_h(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.qe.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.xn.getDocumentsMatchingQuery(e,t,n?i:ul.min(),n?s:Ed()))).next((e=>({documents:e,Bn:s})))))}function fm(e,t){const n=nl(e),r=nl(n.qe),i=n.kn.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.lt(e,t).next((e=>e?e.target:null))))}function pm(e){const t=nl(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=nl(e);let i=vd(),s=ip(n);const o=Kp(t),a=IDBKeyRange.lowerBound(s,!0);return o.$t({index:Af.readTimeIndex,range:a},((e,t)=>{const n=np(r.R,t);i=i.insert(n.key,n),s=t.readTime})).next((()=>({wn:i,readTime:sp(s)})))}(t.Mn,e,t.$n))).then((({wn:e,readTime:n})=>(t.$n=n,e)))}async function mm(e,t,n=Ed()){const r=await lm(e,_h(hp(t.bundledQuery))),i=nl(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=jd(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ke.saveNamedQuery(e,t);const o=r.withResumeToken(vl.EMPTY_BYTE_STRING,s);return i.kn=i.kn.insert(o.targetId,o),i.qe.updateTargetData(e,o).next((()=>i.qe.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.qe.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ke.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.R=e,this.Qn=new Map,this.jn=new Map}getBundleMetadata(e,t){return qf.resolve(this.Qn.get(t))}saveBundleMetadata(e,t){var n;return this.Qn.set(t.id,{id:(n=t).id,version:n.version,createTime:jd(n.createTime)}),qf.resolve()}getNamedQuery(e,t){return qf.resolve(this.jn.get(t))}saveNamedQuery(e,t){return this.jn.set(t.name,{name:(n=t).name,query:hp(n.bundledQuery),readTime:jd(n.readTime)}),qf.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.Wn=new md(vm.Gn),this.zn=new md(vm.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(e,t){const n=new vm(e,t);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Yn(new vm(e,t))}Xn(e,t){e.forEach((e=>this.removeReference(e,t)))}Zn(e){const t=new Rl(new pl([])),n=new vm(t,e),r=new vm(t,e+1),i=[];return this.zn.forEachInRange([n,r],(e=>{this.Yn(e),i.push(e.key)})),i}ts(){this.Wn.forEach((e=>this.Yn(e)))}Yn(e){this.Wn=this.Wn.delete(e),this.zn=this.zn.delete(e)}es(e){const t=new Rl(new pl([])),n=new vm(t,e),r=new vm(t,e+1);let i=Ed();return this.zn.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new vm(e,0),n=this.Wn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class vm{constructor(e,t){this.key=e,this.ns=t}static Gn(e,t){return Rl.comparator(e.key,t.key)||sl(e.ns,t.ns)}static Hn(e,t){return sl(e.ns,t.ns)||Rl.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t){this.Ut=e,this.referenceDelegate=t,this._n=[],this.ss=1,this.rs=new md(vm.Gn)}checkEmpty(e){return qf.resolve(0===this._n.length)}addMutationBatch(e,t,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new Xf(i,t,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new vm(o.key,i)),this.Ut.addToCollectionParentIndex(e,o.key.path.popLast());return qf.resolve(s)}lookupMutationBatch(e,t){return qf.resolve(this.os(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.cs(n),i=r<0?0:r;return qf.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return qf.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(e){return qf.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new vm(t,0),r=new vm(t,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(e=>{const t=this.os(e.ns);i.push(t)})),qf.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new md(sl);return t.forEach((e=>{const t=new vm(e,0),r=new vm(e,Number.POSITIVE_INFINITY);this.rs.forEachInRange([t,r],(e=>{n=n.add(e.ns)}))})),qf.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Rl.isDocumentKey(i)||(i=i.child(""));const s=new vm(new Rl(i),0);let o=new md(sl);return this.rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ns)),!0)}),s),qf.resolve(this.us(o))}us(e){const t=[];return e.forEach((e=>{const n=this.os(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){tl(0===this.hs(t.batchId,"removed")),this._n.shift();let n=this.rs;return qf.forEach(t.mutations,(r=>{const i=new vm(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.rs=n}))}Gt(e){}containsKey(e,t){const n=new vm(t,0),r=this.rs.firstAfterOrEqual(n);return qf.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this._n.length,qf.resolve()}hs(e,t){return this.cs(e)}cs(e){return 0===this._n.length?0:e-this._n[0].batchId}os(e){const t=this.cs(e);return t<0||t>=this._n.length?null:this._n[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t){this.Ut=e,this.ls=t,this.docs=new dd(Rl.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ut.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return qf.resolve(n?n.document.clone():Kl.newInvalidDocument(t))}getEntries(e,t){let n=vd();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Kl.newInvalidDocument(e))})),qf.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=vd();const i=new Rl(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||kh(t,i)&&(r=r.insert(i.key,i.clone()))}return qf.resolve(r)}fs(e,t){return qf.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new _m(this)}getSize(e){return qf.resolve(this.size)}}class _m extends Bp{constructor(e){super(),this.Ie=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Ie.addEntry(e,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),qf.waitFor(t)}getFromCache(e,t){return this.Ie.getEntry(e,t)}getAllFromCache(e,t){return this.Ie.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.persistence=e,this.ds=new qp((e=>Hl(e)),Ql),this.lastRemoteSnapshotVersion=ul.min(),this.highestTargetId=0,this.ws=0,this._s=new ym,this.targetCount=0,this.gs=Np.Jt()}forEachTarget(e,t){return this.ds.forEach(((e,n)=>t(n))),qf.resolve()}getLastRemoteSnapshotVersion(e){return qf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return qf.resolve(this.ws)}allocateTargetId(e){return this.highestTargetId=this.gs.next(),qf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ws&&(this.ws=t),qf.resolve()}te(e){this.ds.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.gs=new Np(t),this.highestTargetId=t),e.sequenceNumber>this.ws&&(this.ws=e.sequenceNumber)}addTargetData(e,t){return this.te(t),this.targetCount+=1,qf.resolve()}updateTargetData(e,t){return this.te(t),qf.resolve()}removeTargetData(e,t){return this.ds.delete(t.target),this._s.Zn(t.targetId),this.targetCount-=1,qf.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),qf.waitFor(i).next((()=>r))}getTargetCount(e){return qf.resolve(this.targetCount)}getTargetData(e,t){const n=this.ds.get(t)||null;return qf.resolve(n)}addMatchingKeys(e,t,n){return this._s.Jn(t,n),qf.resolve()}removeMatchingKeys(e,t,n){this._s.Xn(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),qf.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._s.Zn(t),qf.resolve()}getMatchingKeysForTargetId(e,t){const n=this._s.es(t);return qf.resolve(n)}containsKey(e,t){return qf.resolve(this._s.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){var n;this.ys={},this.Ne=new Ku(0),this.xe=!1,this.xe=!0,this.referenceDelegate=e(this),this.qe=new Im(this),this.Ut=new mp,this.Ue=(n=this.Ut,new bm(n,(e=>this.referenceDelegate.ps(e)))),this.R=new tp(t),this.Ke=new gm(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ut}getMutationQueue(e){let t=this.ys[e.toKey()];return t||(t=new wm(this.Ut,this.referenceDelegate),this.ys[e.toKey()]=t),t}getTargetCache(){return this.qe}getRemoteDocumentCache(){return this.Ue}getBundleCache(){return this.Ke}runTransaction(e,t,n){Yu("MemoryPersistence","Starting transaction:",e);const r=new Em(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((e=>this.referenceDelegate.Ts(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Is(e,t){return qf.or(Object.values(this.ys).map((n=>()=>n.containsKey(e,t))))}}class Em extends Ff{constructor(e){super(),this.currentSequenceNumber=e}}class Sm{constructor(e){this.persistence=e,this.As=new ym,this.Rs=null}static Ps(e){return new Sm(e)}get bs(){if(this.Rs)return this.Rs;throw el()}addReference(e,t,n){return this.As.addReference(n,t),this.bs.delete(n.toString()),qf.resolve()}removeReference(e,t,n){return this.As.removeReference(n,t),this.bs.add(n.toString()),qf.resolve()}markPotentiallyOrphaned(e,t){return this.bs.add(t.toString()),qf.resolve()}removeTarget(e,t){this.As.Zn(t.targetId).forEach((e=>this.bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Es(){this.Rs=new Set}Ts(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return qf.forEach(this.bs,(n=>{const r=Rl.fromPath(n);return this.vs(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Rs=null,t.apply(e))))}updateLimboDocument(e,t){return this.vs(e,t).next((e=>{e?this.bs.delete(t.toString()):this.bs.add(t.toString())}))}ps(e){return 0}vs(e,t){return qf.or([()=>qf.resolve(this.As.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Is(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}function Am(e,t){return`firestore_clients_${e}_${t}`}function Nm(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Rm(e,t){return`firestore_targets_${e}_${t}`}km.UNAUTHENTICATED=new km(null),km.GOOGLE_CREDENTIALS=new km("google-credentials-uid"),km.FIRST_PARTY=new km("first-party-uid");class Dm{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Vs(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new Wu(r.error.code,r.error.message))),s?new Dm(e,t,r.state,i):(Ju("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ss(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Cm{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Vs(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new Wu(n.error.code,n.error.message))),i?new Cm(e,n.state,r):(Ju("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Ss(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Om{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Vs(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=kd();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=Nl(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Om(e,i):(Ju("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class xm{constructor(e,t){this.clientId=e,this.onlineState=t}static Vs(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new xm(t.clientId,t.onlineState):(Ju("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pm{constructor(){this.activeTargetIds=kd()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}Cs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lm{constructor(e,t,n,r,i){this.window=e,this.Se=t,this.persistenceKey=n,this.Ns=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.xs=this.ks.bind(this),this.Os=new dd(sl),this.started=!1,this.$s=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ms=Am(this.persistenceKey,this.Ns),this.Fs=`firestore_sequence_number_${this.persistenceKey}`,this.Os=this.Os.insert(this.Ns,new Pm),this.Ls=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Bs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Us=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Ks=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.xs)}static gt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.fn();for(const n of e){if(n===this.Ns)continue;const e=this.getItem(Am(this.persistenceKey,n));if(e){const t=Om.Vs(n,e);t&&(this.Os=this.Os.insert(t.clientId,t))}}this.Qs();const t=this.storage.getItem(this.Us);if(t){const e=this.js(t);e&&this.Ws(e)}for(const n of this.$s)this.ks(n);this.$s=[],this.window.addEventListener("unload",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.Os)}isActiveQueryTarget(e){let t=!1;return this.Os.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,n){this.zs(e,t,n),this.Hs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Rm(this.persistenceKey,e));if(n){const r=Cm.Vs(e,n);r&&(t=r.state)}}return this.Js.Ds(e),this.Qs(),t}removeLocalQueryTarget(e){this.Js.Cs(e),this.Qs()}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rm(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ys(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Hs(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Xs(e)}notifyBundleLoaded(){this.Zs()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.xs),this.removeItem(this.Ms),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Yu("SharedClientState","READ",e,t),t}setItem(e,t){Yu("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Yu("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ks(e){const t=e;if(t.storageArea===this.storage){if(Yu("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ms)return void Ju("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Se.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ls.test(t.key)){if(null==t.newValue){const e=this.ti(t.key);return this.ei(e,null)}{const e=this.ni(t.key,t.newValue);if(e)return this.ei(e.clientId,e)}}else if(this.Bs.test(t.key)){if(null!==t.newValue){const e=this.si(t.key,t.newValue);if(e)return this.ii(e)}}else if(this.qs.test(t.key)){if(null!==t.newValue){const e=this.ri(t.key,t.newValue);if(e)return this.oi(e)}}else if(t.key===this.Us){if(null!==t.newValue){const e=this.js(t.newValue);if(e)return this.Ws(e)}}else if(t.key===this.Fs){const e=function(e){let t=Ku.o;if(null!=e)try{const n=JSON.parse(e);tl("number"==typeof n),t=n}catch(n){Ju("SharedClientState","Failed to read sequence number from WebStorage",n)}return t}(t.newValue);e!==Ku.o&&this.sequenceNumberHandler(e)}else if(t.key===this.Ks)return this.syncEngine.ci()}else this.$s.push(t)}))}}get Js(){return this.Os.get(this.Ns)}Qs(){this.setItem(this.Ms,this.Js.Ss())}zs(e,t,n){const r=new Dm(this.currentUser,e,t,n),i=Nm(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Ss())}Hs(e){const t=Nm(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Xs(e){const t={clientId:this.Ns,onlineState:e};this.storage.setItem(this.Us,JSON.stringify(t))}Ys(e,t,n){const r=Rm(this.persistenceKey,e),i=new Cm(e,t,n);this.setItem(r,i.Ss())}Zs(){this.setItem(this.Ks,"value-not-used")}ti(e){const t=this.Ls.exec(e);return t?t[1]:null}ni(e,t){const n=this.ti(e);return Om.Vs(n,t)}si(e,t){const n=this.Bs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Dm.Vs(new km(i),r,t)}ri(e,t){const n=this.qs.exec(e),r=Number(n[1]);return Cm.Vs(r,t)}js(e){return xm.Vs(e)}async ii(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.ui(e.batchId,e.state,e.error);Yu("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}oi(e){return this.syncEngine.ai(e.targetId,e.state,e.error)}ei(e,t){const n=t?this.Os.insert(e,t):this.Os.remove(e),r=this.Gs(this.Os),i=this.Gs(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.hi(s,o).then((()=>{this.Os=n}))}Ws(e){this.Os.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=kd();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Mm{constructor(){this.li=new Pm,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.li.Ds(e),this.fi[e]||"not-current"}updateQueryState(e,t,n){this.fi[e]=t}removeLocalQueryTarget(e){this.li.Cs(e)}isLocalQueryTarget(e){return this.li.activeTargetIds.has(e)}clearQueryState(e){delete this.fi[e]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(e){return this.li.activeTargetIds.has(e)}start(){return this.li=new Pm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{di(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(e){this.yi.push(e)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){Yu("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.yi)e(0)}gi(){Yu("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.yi)e(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.Ei=e.Ei,this.Ti=e.Ti}Ii(e){this.Ai=e}Ri(e){this.Pi=e}onMessage(e){this.bi=e}close(){this.Ti()}send(e){this.Ei(e)}vi(){this.Ai()}Vi(e){this.Pi(e)}Si(e){this.bi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Di=t+"://"+e.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(e,t,n,r){const i=this.xi(e,t);Yu("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.Oi(e,i,s,n).then((e=>(Yu("RestConnection","Received: ",e),e)),(t=>{throw Xu("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}$i(e,t,n,r){return this.Ni(e,t,n,r)}ki(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/8.4.1",e["X-Firebase-GMPID"]=this.databaseInfo.appId,e["Content-Type"]="text/plain",t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}xi(e,t){const n=Vm[e];return`${this.Di}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling}Oi(e,t,n,r){return new Promise(((i,s)=>{const o=new zu;o.listenOnce(Vu.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Fu.NO_ERROR:const t=o.getResponseJson();Yu("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Fu.TIMEOUT:Yu("Connection",'RPC "'+e+'" timed out'),s(new Wu(Gu.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const n=o.getStatus();if(Yu("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Gu).indexOf(t)>=0?t:Gu.UNKNOWN}(e.status);s(new Wu(t,e.message))}else s(new Wu(Gu.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Wu(Gu.UNAVAILABLE,"Connection failed."));break;default:el()}}finally{Yu("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Mi(e,t){const n=[this.Di,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new xu,i=La(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.ki(s.initMessageHeaders,t),Se()||Ne()||Ee().indexOf("Electron/")>=0||Re()||Ee().indexOf("MSAppHost/")>=0||Ae()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Yu("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const l=new qm({Ei:e=>{u?Yu("Connection","Not sending because WebChannel is closed:",e):(c||(Yu("Connection","Opening WebChannel transport."),a.open(),c=!0),Yu("Connection","WebChannel sending:",e),a.send(e))},Ti:()=>a.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,$u.EventType.OPEN,(()=>{u||Yu("Connection","WebChannel transport opened.")})),h(a,$u.EventType.CLOSE,(()=>{u||(u=!0,Yu("Connection","WebChannel transport closed"),l.Vi())})),h(a,$u.EventType.ERROR,(e=>{u||(u=!0,Xu("Connection","WebChannel transport errored:",e),l.Vi(new Wu(Gu.UNAVAILABLE,"The operation could not be completed")))})),h(a,$u.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];tl(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Yu("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=cd[e];if(void 0!==t)return hd(t)}(e),n=i.message;void 0===t&&(t=Gu.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,l.Vi(new Wu(t,n)),a.close()}else Yu("Connection","WebChannel received:",n),l.Si(n)}})),h(i,qu.STAT_EVENT,(e=>{e.stat===Bu?Yu("Connection","Detected buffering proxy"):e.stat===ju&&Yu("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.vi()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){return"undefined"!=typeof window?window:null}function $m(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(e){return new Fd(e,!0)}class Km{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Se=e,this.timerId=t,this.Fi=n,this.Li=r,this.Bi=i,this.qi=0,this.Ui=null,this.Ki=Date.now(),this.reset()}reset(){this.qi=0}Qi(){this.qi=this.Bi}ji(e){this.cancel();const t=Math.floor(this.qi+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,t-n);r>0&&Yu("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.qi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ui=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),e()))),this.qi*=this.Li,this.qi<this.Fi&&(this.qi=this.Fi),this.qi>this.Bi&&(this.qi=this.Bi)}Gi(){null!==this.Ui&&(this.Ui.skipDelay(),this.Ui=null)}cancel(){null!==this.Ui&&(this.Ui.cancel(),this.Ui=null)}Wi(){return(Math.random()-.5)*this.qi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,n,r,i,s){this.Se=e,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new Km(e,t)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(e){this.ur(),this.stream.send(e)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(e,t){this.ur(),this.Zi.cancel(),this.Yi++,3!==e?this.Zi.reset():t&&t.code===Gu.RESOURCE_EXHAUSTED?(Ju(t.toString()),Ju("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):t&&t.code===Gu.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ri(t)}ar(){}auth(){this.state=1;const e=this.hr(this.Yi),t=this.Yi;this.Ji.getToken().then((e=>{this.Yi===t&&this.lr(e)}),(t=>{e((()=>{const e=new Wu(Gu.UNKNOWN,"Fetching auth token failed: "+t.message);return this.dr(e)}))}))}lr(e){const t=this.hr(this.Yi);this.stream=this.wr(e),this.stream.Ii((()=>{t((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((e=>{t((()=>this.dr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}nr(){this.state=4,this.Zi.ji((async()=>{this.state=0,this.start()}))}dr(e){return Yu("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}hr(e){return t=>{this.Se.enqueueAndForget((()=>this.Yi===e?t():(Yu("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wm extends Gm{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.R=r}wr(e){return this.Hi.Mi("Listen",e)}onMessage(e){this.Zi.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:el(),s=t.targetChange.targetIds||[],o=function(e,t){return e.I?(tl(void 0===t||"string"==typeof t),vl.fromBase64String(t||"")):(tl(void 0===t||t instanceof Uint8Array),vl.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Gu.UNKNOWN:hd(e.code);return new Wu(t,e.message||"")}(a);n=new Cd(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gd(e,r.document.name),s=jd(r.document.updateTime),o=new $l({mapValue:{fields:r.document.fields}}),a=Kl.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Rd(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Gd(e,r.document),s=r.readTime?jd(r.readTime):ul.min(),o=Kl.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Rd([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Gd(e,r.document),s=r.removedTargetIds||[];n=new Rd([],s,i,null)}else{if(!("filter"in t))return el();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new ad(r),s=e.targetId;n=new Dd(s,i)}}var r;return n}(this.R,e),n=function(e){if(!("targetChange"in e))return ul.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ul.min():t.readTime?jd(t.readTime):ul.min()}(e);return this.listener._r(t,n)}mr(e){const t={};t.database=Qd(this.R),t.addTarget=function(e,t){let n;const r=t.target;return n=Yl(r)?{documents:tf(e,r)}:{query:nf(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=qd(e,t.resumeToken):t.snapshotVersion.compareTo(ul.min())>0&&(n.readTime=Vd(e,t.snapshotVersion.toTimestamp())),n}(this.R,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return el()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,e);n&&(t.labels=n),this.cr(t)}gr(e){const t={};t.database=Qd(this.R),t.removeTarget=e,this.cr(t)}}class Hm extends Gm{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.R=r,this.yr=!1}get pr(){return this.yr}start(){this.yr=!1,this.lastStreamToken=void 0,super.start()}ar(){this.yr&&this.Er([])}wr(e){return this.Hi.Mi("Write",e)}onMessage(e){if(tl(!!e.streamToken),this.lastStreamToken=e.streamToken,this.yr){this.Zi.reset();const t=function(e,t){return e&&e.length>0?(tl(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?jd(e.updateTime):jd(t);return n.isEqual(ul.min())&&(n=jd(t)),new Kh(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=jd(e.commitTime);return this.listener.Tr(n,t)}return tl(!e.writeResults||0===e.writeResults.length),this.yr=!0,this.listener.Ir()}Ar(){const e={};e.database=Qd(this.R),this.cr(e)}Er(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Zd(this.R,e)))};this.cr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends class{}{constructor(e,t,n){super(),this.credentials=e,this.Hi=t,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new Wu(Gu.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(e,t,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(e,t,n,r))).catch((e=>{throw e.code===Gu.UNAUTHENTICATED&&this.credentials.invalidateToken(),e}))}$i(e,t,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.$i(e,t,n,r))).catch((e=>{throw e.code===Gu.UNAUTHENTICATED&&this.credentials.invalidateToken(),e}))}terminate(){this.Rr=!1}}class Ym{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(e){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Dr("Offline")))}set(e){this.kr(),this.br=0,"Online"===e&&(this.Vr=!1),this.Dr(e)}Dr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Cr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(Ju(t),this.Vr=!1):Yu("OnlineStateTracker",t)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Or=[],this.$r=new Map,this.Mr=new Set,this.Fr=[],this.Lr=i,this.Lr.di((e=>{n.enqueueAndForget((async()=>{og(this)&&(Yu("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=nl(e);t.Mr.add(4),await Zm(t),t.Br.set("Unknown"),t.Mr.delete(4),await Xm(t)}(this))}))})),this.Br=new Ym(n,r)}}async function Xm(e){if(og(e))for(const t of e.Fr)await t(!0)}async function Zm(e){for(const t of e.Fr)await t(!1)}function eg(e,t){const n=nl(e);n.$r.has(t.targetId)||(n.$r.set(t.targetId,t),sg(n)?ig(n):Tg(n).er()&&ng(n,t))}function tg(e,t){const n=nl(e),r=Tg(n);n.$r.delete(t),r.er()&&rg(n,t),0===n.$r.size&&(r.er()?r.ir():og(n)&&n.Br.set("Unknown"))}function ng(e,t){e.qr.U(t.targetId),Tg(e).mr(t)}function rg(e,t){e.qr.U(t),Tg(e).gr(t)}function ig(e){e.qr=new xd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.$r.get(t)||null}),Tg(e).start(),e.Br.Sr()}function sg(e){return og(e)&&!Tg(e).tr()&&e.$r.size>0}function og(e){return 0===nl(e).Mr.size}function ag(e){e.qr=void 0}async function cg(e){e.$r.forEach(((t,n)=>{ng(e,t)}))}async function ug(e,t){ag(e),sg(e)?(e.Br.Nr(t),ig(e)):e.Br.set("Unknown")}async function lg(e,t,n){if(e.Br.set("Online"),t instanceof Cd&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.$r.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.$r.delete(r),e.qr.removeTarget(r))}(e,t)}catch(r){Yu("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await hg(e,r)}else if(t instanceof Rd?e.qr.X(t):t instanceof Dd?e.qr.rt(t):e.qr.et(t),!n.isEqual(ul.min()))try{const t=await am(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.qr.ut(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.$r.get(r);i&&e.$r.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.$r.get(t);if(!n)return;e.$r.set(t,n.withResumeToken(vl.EMPTY_BYTE_STRING,n.snapshotVersion)),rg(e,t);const r=new ep(n.target,t,1,n.sequenceNumber);ng(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Yu("RemoteStore","Failed to raise snapshot:",i),await hg(e,i)}}async function hg(e,t,n){if(!Kf(t))throw t;e.Mr.add(1),await Zm(e),e.Br.set("Offline"),n||(n=()=>am(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Yu("RemoteStore","Retrying IndexedDB access"),await n(),e.Mr.delete(1),await Xm(e)}))}function dg(e,t){return t().catch((n=>hg(e,n,t)))}async function fg(e){const t=nl(e),n=Eg(t);let r=t.Or.length>0?t.Or[t.Or.length-1].batchId:-1;for(;pg(t);)try{const e=await um(t.localStore,r);if(null===e){0===t.Or.length&&n.ir();break}r=e.batchId,mg(t,e)}catch(i){await hg(t,i)}gg(t)&&yg(t)}function pg(e){return og(e)&&e.Or.length<10}function mg(e,t){e.Or.push(t);const n=Eg(e);n.er()&&n.pr&&n.Er(t.mutations)}function gg(e){return og(e)&&!Eg(e).tr()&&e.Or.length>0}function yg(e){Eg(e).start()}async function vg(e){Eg(e).Ar()}async function wg(e){const t=Eg(e);for(const n of e.Or)t.Er(n.mutations)}async function bg(e,t,n){const r=e.Or.shift(),i=Zf.from(r,t,n);await dg(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await fg(e)}async function _g(e,t){t&&Eg(e).pr&&await async function(e,t){if(ld(n=t.code)&&n!==Gu.ABORTED){const n=e.Or.shift();Eg(e).sr(),await dg(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await fg(e)}var n}(e,t),gg(e)&&yg(e)}async function Ig(e,t){const n=nl(e);t?(n.Mr.delete(2),await Xm(n)):t||(n.Mr.add(2),await Zm(n),n.Br.set("Unknown"))}function Tg(e){return e.Ur||(e.Ur=function(e,t,n){const r=nl(e);return r.Pr(),new Wm(t,r.Hi,r.credentials,r.R,n)}(e.datastore,e.asyncQueue,{Ii:cg.bind(null,e),Ri:ug.bind(null,e),_r:lg.bind(null,e)}),e.Fr.push((async t=>{t?(e.Ur.sr(),sg(e)?ig(e):e.Br.set("Unknown")):(await e.Ur.stop(),ag(e))}))),e.Ur}function Eg(e){return e.Kr||(e.Kr=function(e,t,n){const r=nl(e);return r.Pr(),new Hm(t,r.Hi,r.credentials,r.R,n)}(e.datastore,e.asyncQueue,{Ii:vg.bind(null,e),Ri:_g.bind(null,e),Ir:wg.bind(null,e),Tr:bg.bind(null,e)}),e.Fr.push((async t=>{t?(e.Kr.sr(),await fg(e)):(await e.Kr.stop(),e.Or.length>0&&(Yu("RemoteStore",`Stopping write stream with ${e.Or.length} pending writes`),e.Or=[]))}))),e.Kr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Sg{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Vf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Sg(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Wu(Gu.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(e,t){if(Ju("AsyncQueue",`${t}: ${e}`),Kf(e))return new Wu(Gu.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Rl.comparator(t.key,n.key):(e,t)=>Rl.comparator(e.key,t.key),this.keyedMap=bd(),this.sortedSet=new dd(this.comparator)}static emptySet(e){return new Ag(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ag))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ag;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.Qr=new dd(Rl.comparator)}track(e){const t=e.doc.key,n=this.Qr.get(t);n?0!==e.type&&3===n.type?this.Qr=this.Qr.insert(t,e):3===e.type&&1!==n.type?this.Qr=this.Qr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Qr=this.Qr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Qr=this.Qr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Qr=this.Qr.remove(t):1===e.type&&2===n.type?this.Qr=this.Qr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Qr=this.Qr.insert(t,{type:2,doc:e.doc}):el():this.Qr=this.Qr.insert(t,e)}jr(){const e=[];return this.Qr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Rg{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Rg(e,t,Ag.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Th(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Wr=void 0,this.listeners=[]}}class Cg{constructor(){this.queries=new qp((e=>Eh(e)),Th),this.onlineState="Unknown",this.Gr=new Set}}async function Og(e,t){const n=nl(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Dg),i)try{s.Wr=await n.onListen(r)}catch(o){const e=kg(o,`Initialization of query '${Sh(t.query)}' failed`);return void t.onError(e)}n.queries.set(r,s),s.listeners.push(t),t.zr(n.onlineState),s.Wr&&t.Hr(s.Wr)&&Mg(n)}async function xg(e,t){const n=nl(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Pg(e,t){const n=nl(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Hr(i)&&(r=!0);t.Wr=i}}r&&Mg(n)}function Lg(e,t,n){const r=nl(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Mg(e){e.Gr.forEach((e=>{e.next()}))}class Ug{constructor(e,t,n){this.query=e,this.Jr=t,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Rg(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Yr?this.Zr(e)&&(this.Jr.next(e),t=!0):this.eo(e,this.onlineState)&&(this.no(e),t=!0),this.Xr=e,t}onError(e){this.Jr.error(e)}zr(e){this.onlineState=e;let t=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,e)&&(this.no(this.Xr),t=!0),t}eo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.so&&n||e.docs.isEmpty()&&"Offline"!==t)}Zr(e){if(e.docChanges.length>0)return!0;const t=this.Xr&&this.Xr.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}no(e){e=Rg.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Yr=!0,this.Jr.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t){this.payload=e,this.byteLength=t}io(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.R=e}qn(e){return Gd(this.R,e)}Un(e){return e.metadata.exists?Xd(this.R,e.document,!1):Kl.newNoDocument(this.qn(e.metadata.name),this.Kn(e.metadata.readTime))}Kn(e){return jd(e)}}class qg{constructor(e,t,n){this.ro=e,this.localStore=t,this.R=n,this.queries=[],this.documents=[],this.progress=Bg(e)}oo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}co(e){const t=new Map,n=new Vg(this.R);for(const r of e)if(r.metadata.queries){const e=n.qn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Ed()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=nl(e);let s=Ed(),o=vd(),a=Id();for(const h of n){const e=t.qn(h.metadata.name);h.document&&(s=s.add(e)),o=o.insert(e,t.Un(h)),a=a.insert(e,t.Kn(h.metadata.readTime))}const c=i.Mn.newChangeBuffer({trackRemovals:!0}),u=await lm(i,(l=r,_h(ph(pl.fromString(`__bundle__/docs/${l}`)))));var l;return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>cm(e,c,o,ul.min(),a).next((t=>(c.apply(e),t))).next((t=>i.qe.removeMatchingKeysForTargetId(e,u.targetId).next((()=>i.qe.addMatchingKeys(e,s,u.targetId))).next((()=>i.Fn.En(e,t))).next((()=>t))))))}(this.localStore,new Vg(this.R),this.documents,this.ro.id),t=this.co(this.documents);for(const n of this.queries)await mm(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new em(Object.assign({},this.progress),e)}}function Bg(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.key=e}}class $g{constructor(e){this.key=e}}class zg{constructor(e,t){this.query=e,this.uo=t,this.ao=null,this.current=!1,this.ho=Ed(),this.mutatedKeys=Ed(),this.lo=Ah(e),this.fo=new Ag(this.lo)}get wo(){return this.uo}_o(e,t){const n=t?t.mo:new Ng,r=t?t.fo:this.fo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=mh(this.query)&&r.size===this.query.limit?r.last():null,c=gh(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=kh(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.yo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.lo(l,a)>0||c&&this.lo(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),mh(this.query)||gh(this.query))for(;s.size>this.query.limit;){const e=mh(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.fo;this.fo=e.fo,this.mutatedKeys=e.mutatedKeys;const i=e.mo.jr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return el()}};return n(e)-n(t)}(e.type,t.type)||this.lo(e.doc,t.doc))),this.po(n);const s=t?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new Rg(this.query,e.fo,r,i,e.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({fo:this.fo,mo:new Ng,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(e){return!this.uo.has(e)&&!!this.fo.has(e)&&!this.fo.get(e).hasLocalMutations}po(e){e&&(e.addedDocuments.forEach((e=>this.uo=this.uo.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.uo=this.uo.delete(e))),this.current=e.current)}Eo(){if(!this.current)return[];const e=this.ho;this.ho=Ed(),this.fo.forEach((e=>{this.Io(e.key)&&(this.ho=this.ho.add(e.key))}));const t=[];return e.forEach((e=>{this.ho.has(e)||t.push(new $g(e))})),this.ho.forEach((n=>{e.has(n)||t.push(new jg(n))})),t}Ao(e){this.uo=e.Bn,this.ho=Ed();const t=this._o(e.documents);return this.applyChanges(t,!0)}Ro(){return Rg.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class Kg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Gg{constructor(e){this.key=e,this.Po=!1}}class Wg{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new qp((e=>Eh(e)),Th),this.Vo=new Map,this.So=new Set,this.Do=new dd(Rl.comparator),this.Co=new Map,this.No=new ym,this.xo={},this.ko=new Map,this.Oo=Np.Yt(),this.onlineState="Unknown",this.$o=void 0}get isPrimaryClient(){return!0===this.$o}}async function Hg(e,t){const n=by(e);let r,i;const s=n.vo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const e=await lm(n.localStore,_h(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Qg(n,t,r,"current"===s),n.isPrimaryClient&&eg(n.remoteStore,e)}return i}async function Qg(e,t,n,r){e.Mo=(t,n,r)=>async function(e,t,n,r){let i=t.view._o(n);i.Nn&&(i=await dm(e.localStore,t.query,!1).then((({documents:e})=>t.view._o(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return oy(e,t.targetId,o.To),o.snapshot}(e,t,n,r);const i=await dm(e.localStore,t,!0),s=new zg(t,i.Bn),o=s._o(i.documents),a=Nd.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);oy(e,n,c.To);const u=new Kg(t,n,s);return e.vo.set(t,u),e.Vo.has(n)?e.Vo.get(n).push(t):e.Vo.set(n,[t]),c.snapshot}async function Yg(e,t){const n=nl(e),r=n.vo.get(t),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((e=>!Th(e,t)))),void n.vo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hm(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),tg(n.remoteStore,r.targetId),iy(n,r.targetId)})).catch(xp)):(iy(n,r.targetId),await hm(n.localStore,r.targetId,!0))}async function Jg(e,t){const n=nl(e);try{const e=await function(e,t){const n=nl(e),r=t.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Mn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.qe.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.qe.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,d),u=a,h=t,tl((l=d).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.qe.updateTargetData(e,d))}var u,l,h}));let a=vd();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(cm(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(ul.min())){const t=n.qe.getLastRemoteSnapshotVersion(e).next((t=>n.qe.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return qf.waitFor(o).next((()=>s.apply(e))).next((()=>n.Fn.En(e,a))).next((()=>a))})).then((e=>(n.kn=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Co.get(t);r&&(tl(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Po=!0:e.modifiedDocuments.size>0?tl(r.Po):e.removedDocuments.size>0&&(tl(r.Po),r.Po=!1))})),await uy(n,e,t)}catch(r){await xp(r)}}function Xg(e,t,n){const r=nl(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=nl(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.zr(t)&&(r=!0)})),r&&Mg(n)}(r.eventManager,t),e.length&&r.bo._r(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zg(e,t,n){const r=nl(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Co.get(t),s=i&&i.key;if(s){let e=new dd(Rl.comparator);e=e.insert(s,Kl.newNoDocument(s,ul.min()));const n=Ed().add(s),i=new Ad(ul.min(),new Map,new md(sl),e,n);await Jg(r,i),r.Do=r.Do.remove(s),r.Co.delete(t),cy(r)}else await hm(r.localStore,t,!1).then((()=>iy(r,t,n))).catch(xp)}async function ey(e,t){const n=nl(e),r=t.batch.batchId;try{const e=await function(e,t){const n=nl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Mn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=qf.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);tl(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e._n.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n._n.performConsistencyCheck(e))).next((()=>n.Fn.pn(e,r)))}))}(n.localStore,t);ry(n,r,null),ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uy(n,e)}catch(i){await xp(i)}}async function ty(e,t,n){const r=nl(e);try{const e=await function(e,t){const n=nl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n._n.lookupMutationBatch(e,t).next((t=>(tl(null!==t),r=t.keys(),n._n.removeMutationBatch(e,t)))).next((()=>n._n.performConsistencyCheck(e))).next((()=>n.Fn.pn(e,r)))}))}(r.localStore,t);ry(r,t,n),ny(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await uy(r,e)}catch(i){await xp(i)}}function ny(e,t){(e.ko.get(t)||[]).forEach((e=>{e.resolve()})),e.ko.delete(t)}function ry(e,t,n){const r=nl(e);let i=r.xo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.xo[r.currentUser.toKey()]=i}}function iy(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Vo.get(t))e.vo.delete(r),n&&e.bo.Fo(r,n);e.Vo.delete(t),e.isPrimaryClient&&e.No.Zn(t).forEach((t=>{e.No.containsKey(t)||sy(e,t)}))}function sy(e,t){e.So.delete(t.path.canonicalString());const n=e.Do.get(t);null!==n&&(tg(e.remoteStore,n),e.Do=e.Do.remove(t),e.Co.delete(n),cy(e))}function oy(e,t,n){for(const r of n)r instanceof jg?(e.No.addReference(r.key,t),ay(e,r)):r instanceof $g?(Yu("SyncEngine","Document no longer in limbo: "+r.key),e.No.removeReference(r.key,t),e.No.containsKey(r.key)||sy(e,r.key)):el()}function ay(e,t){const n=t.key,r=n.path.canonicalString();e.Do.get(n)||e.So.has(r)||(Yu("SyncEngine","New document in limbo: "+n),e.So.add(r),cy(e))}function cy(e){for(;e.So.size>0&&e.Do.size<e.maxConcurrentLimboResolutions;){const t=e.So.values().next().value;e.So.delete(t);const n=new Rl(pl.fromString(t)),r=e.Oo.next();e.Co.set(r,new Gg(n)),e.Do=e.Do.insert(n,r),eg(e.remoteStore,new ep(_h(ph(n.path)),r,2,Ku.o))}}async function uy(e,t,n){const r=nl(e),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((e,a)=>{o.push(r.Mo(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=nm.vn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.bo._r(i),await async function(e,t){const n=nl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>qf.forEach(t,(t=>qf.forEach(t.Pn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>qf.forEach(t.bn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Kf(r))throw r;Yu("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.kn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(e,i)}}}(r.localStore,s))}async function ly(e,t){const n=nl(e);if(!n.currentUser.isEqual(t)){Yu("SyncEngine","User change. New user:",t.toKey());const e=await om(n.localStore,t);n.currentUser=t,(r=n).ko.forEach((e=>{e.forEach((e=>{e.reject(new Wu(Gu.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await uy(n,e.Ln)}var r}function hy(e,t){const n=nl(e),r=n.Co.get(t);if(r&&r.Po)return Ed().add(r.key);{let e=Ed();const r=n.Vo.get(t);if(!r)return e;for(const t of r){const r=n.vo.get(t);e=e.unionWith(r.view.wo)}return e}}async function dy(e,t){const n=nl(e),r=await dm(n.localStore,t.query,!0),i=t.view.Ao(r);return n.isPrimaryClient&&oy(n,t.targetId,i.To),i}async function fy(e){const t=nl(e);return pm(t.localStore).then((e=>uy(t,e)))}async function py(e,t,n,r){const i=nl(e),s=await function(e,t){const n=nl(e),r=nl(n._n);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.jt(e,t).next((t=>t?n.Fn.pn(e,t):qf.resolve(null)))))}(i.localStore,t);var o,a;null!==s?("pending"===n?await fg(i.remoteStore):"acknowledged"===n||"rejected"===n?(ry(i,t,r||null),ny(i,t),o=i.localStore,a=t,nl(nl(o)._n).Gt(a)):el(),await uy(i,s)):Yu("SyncEngine","Cannot apply mutation batch with id: "+t)}async function my(e,t,n){const r=nl(e),i=[],s=[];for(const o of t){let e;const t=r.Vo.get(o);if(t&&0!==t.length){e=await lm(r.localStore,_h(t[0]));for(const e of t){const t=r.vo.get(e),n=await dy(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await fm(r.localStore,o);e=await lm(r.localStore,t),await Qg(r,gy(t),o,!1)}i.push(e)}return r.bo._r(s),i}function gy(e){return fh(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function yy(e){const t=nl(e);return nl(nl(t.localStore).persistence).fn()}async function vy(e,t,n,r){const i=nl(e);if(i.$o)Yu("SyncEngine","Ignoring unexpected query state notification.");else if(i.Vo.has(t))switch(n){case"current":case"not-current":{const e=await pm(i.localStore),r=Ad.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await uy(i,e,r);break}case"rejected":await hm(i.localStore,t,!0),iy(i,t,r);break;default:el()}}async function wy(e,t,n){const r=by(e);if(r.$o){for(const e of t){if(r.Vo.has(e)){Yu("SyncEngine","Adding an already active target "+e);continue}const t=await fm(r.localStore,e),n=await lm(r.localStore,t);await Qg(r,gy(t),n.targetId,!1),eg(r.remoteStore,n)}for(const e of n)r.Vo.has(e)&&await hm(r.localStore,e,!1).then((()=>{tg(r.remoteStore,e),iy(r,e)})).catch(xp)}}function by(e){const t=nl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zg.bind(null,t),t.bo._r=Pg.bind(null,t.eventManager),t.bo.Fo=Lg.bind(null,t.eventManager),t}function _y(e){const t=nl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ey.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ty.bind(null,t),t}class Iy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.R=zm(e.databaseInfo.databaseId),this.sharedClientState=this.Bo(e),this.persistence=this.qo(e),await this.persistence.start(),this.gcScheduler=this.Uo(e),this.localStore=this.Ko(e)}Uo(e){return null}Ko(e){return sm(this.persistence,new rm,e.initialUser,this.R)}qo(e){return new Tm(Sm.Ps,this.R)}Bo(e){return new Mm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ty extends Iy{constructor(e,t,n){super(),this.Qo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await async function(e){const t=nl(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=Kp(e);let n=ul.min();return t.$t({index:Af.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=sp(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.$n=e}))}(this.localStore),await this.Qo.initialize(this,e),await _y(this.Qo.syncEngine),await fg(this.Qo.remoteStore)}Ko(e){return sm(this.persistence,new rm,e.initialUser,this.R)}Uo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Mp(t,e.asyncQueue)}qo(e){const t=Zp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?bp.withCacheSize(this.cacheSizeBytes):bp.DEFAULT;return new Yp(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,jm(),$m(),this.R,this.sharedClientState,!!this.forceOwnership)}Bo(e){return new Mm}}class Ey extends Ty{constructor(e,t){super(e,t,!1),this.Qo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Qo.syncEngine;this.sharedClientState instanceof Lm&&(this.sharedClientState.syncEngine={ui:py.bind(null,t),ai:vy.bind(null,t),hi:wy.bind(null,t),fn:yy.bind(null,t),ci:fy.bind(null,t)},await this.sharedClientState.start()),await this.persistence.He((async e=>{await async function(e,t){const n=nl(e);if(by(n),_y(n),!0===t&&!0!==n.$o){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await my(n,e.toArray());n.$o=!0,await Ig(n.remoteStore,!0);for(const r of t)eg(n.remoteStore,r)}else if(!1===t&&!1!==n.$o){const e=[];let t=Promise.resolve();n.Vo.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(iy(n,i),hm(n.localStore,i,!0)))),tg(n.remoteStore,i)})),await t,await my(n,e),function(e){const t=nl(e);t.Co.forEach(((e,n)=>{tg(t.remoteStore,n)})),t.No.ts(),t.Co=new Map,t.Do=new dd(Rl.comparator)}(n),n.$o=!1,await Ig(n.remoteStore,!1)}}(this.Qo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Bo(e){const t=jm();if(!Lm.gt(t))throw new Wu(Gu.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Zp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Lm(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Sy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Xg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ly.bind(null,this.syncEngine),await Ig(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cg}createDatastore(e){const t=zm(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Bm(r));var r,i;return i=e.credentials,new Qm(i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Xg(this.syncEngine,e,0),s=Fm.gt()?new Fm:new Um,new Jm(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Wg(e,t,n,r,i,s);return o&&(a.$o=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=nl(e);Yu("RemoteStore","RemoteStore shutting down."),t.Mr.add(5),await Zm(t),t.Lr.shutdown(),t.Br.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.jo(this.observer.next,e)}error(e){this.observer.error?this.jo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Wo(){this.muted=!0}jo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.Go=e,this.R=t,this.metadata=new Vf,this.buffer=new Uint8Array,this.zo=new TextDecoder("utf-8"),this.Ho().then((e=>{e&&e.io()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Go.cancel()}async getMetadata(){return this.metadata.promise}async Lo(){return await this.getMetadata(),this.Ho()}async Ho(){const e=await this.Jo();if(null===e)return null;const t=this.zo.decode(e),n=Number(t);isNaN(n)&&this.Yo(`length string (${t}) is not valid number`);const r=await this.Xo(n);return new Fg(JSON.parse(r),e.length+n)}Zo(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Jo(){for(;this.Zo()<0&&!(await this.tc()););if(0===this.buffer.length)return null;const e=this.Zo();e<0&&this.Yo("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Xo(e){for(;this.buffer.length<e;)await this.tc()&&this.Yo("Reached the end of bundle when more is expected.");const t=this.zo.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Yo(e){throw this.Go.cancel(),new Error(`Invalid bundle format: ${e}`)}async tc(){const e=await this.Go.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Wu(Gu.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=nl(e),r=Qd(n.R)+"/documents",i={documents:t.map((e=>Kd(n.R,e)))},s=await n.$i("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){tl(!!t.found),t.found.name,t.found.updateTime;const n=Gd(e,t.found.name),r=jd(t.found.updateTime),i=new $l({mapValue:{fields:t.found.fields}});return Kl.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){tl(!!t.missing),tl(!!t.readTime);const n=Gd(e,t.missing),r=jd(t.readTime);return Kl.newNoDocument(n,r)}(e,t):el()}(n.R,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());tl(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new sd(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Rl.fromPath(t);this.mutations.push(new od(n,this.precondition(n)))})),await async function(e,t){const n=nl(e),r=Qd(n.R)+"/documents",i={writes:t.map((e=>Zd(n.R,e)))};await n.Ni("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw el();t=ul.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Wu(Gu.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Gh.updateTime(t):Gh.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ul.min()))throw new Wu(Gu.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Gh.updateTime(t)}return Gh.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.ec=5,this.Zi=new Km(this.asyncQueue,"transaction_retry")}run(){this.nc()}nc(){this.Zi.ji((async()=>{const e=new Ry(this.datastore),t=this.sc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ic(e)}))))})).catch((e=>{this.ic(e)}))}))}sc(e){try{const t=this.updateFunction(e);return!kl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ic(e){this.ec>0&&this.rc(e)?(this.ec-=1,this.asyncQueue.enqueueAndForget((()=>(this.nc(),Promise.resolve())))):this.deferred.reject(e)}rc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!ld(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=km.UNAUTHENTICATED,this.clientId=il.u(),this.credentialListener=()=>{},this.receivedInitialUser=new Vf,this.credentials.setChangeListener((e=>{Yu("FirestoreClient","Received user=",e.uid),this.user=e,this.credentialListener(e),this.receivedInitialUser.resolve()}))}async getConfiguration(){return await this.receivedInitialUser.promise,{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e,this.receivedInitialUser.promise.then((()=>this.credentialListener(this.user)))}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wu(Gu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),e.resolve()}catch(t){const n=kg(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Oy(e,t){e.asyncQueue.verifyOperationInProgress(),Yu("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((n=>{r.isEqual(n)||(r=n,e.asyncQueue.enqueueRetryable((async()=>{await om(t.localStore,n)})))})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function xy(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Py(e);Yu("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((n=>e.asyncQueue.enqueueRetryable((()=>async function(e,t){const n=nl(e);n.asyncQueue.verifyOperationInProgress(),Yu("RemoteStore","RemoteStore received new credentials");const r=og(n);n.Mr.add(3),await Zm(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Mr.delete(3),await Xm(n)}(t.remoteStore,n))))),e.onlineComponents=t}async function Py(e){return e.offlineComponents||(Yu("FirestoreClient","Using default OfflineComponentProvider"),await Oy(e,new Iy)),e.offlineComponents}async function Ly(e){return e.onlineComponents||(Yu("FirestoreClient","Using default OnlineComponentProvider"),await xy(e,new Sy)),e.onlineComponents}function My(e){return Py(e).then((e=>e.persistence))}function Uy(e){return Py(e).then((e=>e.localStore))}function Fy(e){return Ly(e).then((e=>e.remoteStore))}function Vy(e){return Ly(e).then((e=>e.syncEngine))}async function qy(e){const t=await Ly(e),n=t.eventManager;return n.onListen=Hg.bind(null,t.syncEngine),n.onUnlisten=Yg.bind(null,t.syncEngine),n}function By(e,t,n={}){const r=new Vf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ay({next:s=>{t.enqueueAndForget((()=>xg(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Wu(Gu.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Wu(Gu.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Ug(ph(n.path),s,{includeMetadataChanges:!0,so:!0});return Og(e,o)}(await qy(e),e.asyncQueue,t,n,r))),r.promise}function jy(e,t,n={}){const r=new Vf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ay({next:n=>{t.enqueueAndForget((()=>xg(e,o))),n.fromCache&&"server"===r.source?i.reject(new Wu(Gu.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Ug(n,s,{includeMetadataChanges:!0,so:!0});return Og(e,o)}(await qy(e),e.asyncQueue,t,n,r))),r.promise}function $y(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return ky(e,t);if(e instanceof ArrayBuffer)return ky(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new Ny(r,t);var r}(n,zm(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=nl(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=nl(e),r=jd(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ke.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,i))return await t.close(),void n._completeWith((r=i,{taskState:"Success",documentsLoaded:r.totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}));n._updateProgress(Bg(i));const s=new qg(i,e.localStore,t.R);let o=await t.Lo();for(;o;){const e=await s.oo(o);e&&n._updateProgress(e),o=await t.Lo()}const a=await s.complete();await uy(e,a.wn,void 0),await function(e,t){const n=nl(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ke.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(a.progress)}catch(r){Xu("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r)}var r})(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}(await Vy(e),i,r)}))}class zy{constructor(e,t,n,r,i,s,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o}}class Ky{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ky&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Hy{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(e){this.changeListener=e,e(km.UNAUTHENTICATED)}removeChangeListener(){this.changeListener=null}}class Qy{constructor(e){this.oc=null,this.currentUser=km.UNAUTHENTICATED,this.receivedInitialUser=!1,this.cc=0,this.changeListener=null,this.forceRefresh=!1,this.oc=()=>{this.cc++,this.currentUser=this.uc(),this.receivedInitialUser=!0,this.changeListener&&this.changeListener(this.currentUser)},this.cc=0,this.auth=e.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.oc):(this.oc(null),e.get().then((e=>{this.auth=e,this.oc&&this.auth.addAuthTokenListener(this.oc)}),(()=>{})))}getToken(){const e=this.cc,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.cc!==e?(Yu("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(tl("string"==typeof t.accessToken),new Wy(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(e){this.changeListener=e,this.receivedInitialUser&&e(this.currentUser)}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.oc),this.oc=null,this.changeListener=null}uc(){const e=this.auth&&this.auth.getUid();return tl(null===e||"string"==typeof e),new km(e)}}class Yy{constructor(e,t,n){this.ac=e,this.hc=t,this.lc=n,this.type="FirstParty",this.user=km.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.hc},t=this.ac.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.lc&&(e["X-Goog-Iam-Authorization-Token"]=this.lc),e}}class Jy{constructor(e,t,n){this.ac=e,this.hc=t,this.lc=n}getToken(){return Promise.resolve(new Yy(this.ac,this.hc,this.lc))}setChangeListener(e){e(km.FIRST_PARTY)}removeChangeListener(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(e,t,n){if(!n)throw new Wu(Gu.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Zy(e){if(!Rl.isDocumentKey(e))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ev(e){if(Rl.isDocumentKey(e))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function tv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":el()}function nv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Wu(Gu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tv(e);throw new Wu(Gu.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function rv(e,t){if(t<=0)throw new Wu(Gu.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Wu(Gu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Wu(Gu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,function(e,t,n,r){if(!0===t&&!0===r)throw new Wu(Gu.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){this._persistenceKey="(lite)",this._settings=new iv({}),this._settingsFrozen=!1,e instanceof Ky?(this._databaseId=e,this._credentials=new Hy):(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Wu(Gu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ky(e.options.projectId)}(e),this._credentials=new Qy(t))}get app(){if(!this._app)throw new Wu(Gu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Wu(Gu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iv(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new Hy;switch(e.type){case"gapi":const t=e.client;return tl(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Jy(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Wu(Gu.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Gy.get(e);t&&(Yu("ComponentProvider","Removing Datastore"),Gy.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ov{constructor(e,t,n){this._converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cv(this.firestore,this._converter,this._key.path.popLast())}withConverter(e){return new ov(this.firestore,e,this._key)}}class av{constructor(e,t,n){this._converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new av(this.firestore,e,this._query)}}class cv extends av{constructor(e,t,n){super(e,t,ph(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ov(this.firestore,null,new Rl(e))}withConverter(e){return new cv(this.firestore,e,this._path)}}function uv(e,t,...n){if(e=Be(e),Xy("collection","path",t),e instanceof sv){const r=pl.fromString(t,...n);return ev(r),new cv(e,null,r)}{if(!(e instanceof ov||e instanceof cv))throw new Wu(Gu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=pl.fromString(e.path,...n).child(pl.fromString(t));return ev(r),new cv(e.firestore,null,r)}}function lv(e,t,...n){if(e=Be(e),1===arguments.length&&(t=il.u()),Xy("doc","path",t),e instanceof sv){const r=pl.fromString(t,...n);return Zy(r),new ov(e,null,new Rl(r))}{if(!(e instanceof ov||e instanceof cv))throw new Wu(Gu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(pl.fromString(t,...n));return Zy(r),new ov(e.firestore,e instanceof cv?e._converter:null,new Rl(r))}}function hv(e,t){return e=Be(e),t=Be(t),(e instanceof ov||e instanceof cv)&&(t instanceof ov||t instanceof cv)&&e.firestore===t.firestore&&e.path===t.path&&e._converter===t._converter}function dv(e,t){return e=Be(e),t=Be(t),e instanceof av&&t instanceof av&&e.firestore===t.firestore&&Th(e._query,t._query)&&e._converter===t._converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fv{constructor(){this.fc=Promise.resolve(),this.dc=[],this.wc=!1,this._c=[],this.mc=null,this.gc=!1,this.yc=[],this.Zi=new Km(this,"async_queue_retry"),this.Ec=()=>{const e=$m();e&&Yu("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Zi.Gi()};const e=$m();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ec)}get isShuttingDown(){return this.wc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Tc(),this.Ic(e)}enterRestrictedMode(){if(!this.wc){this.wc=!0;const e=$m();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ec)}}enqueue(e){return this.Tc(),this.wc?new Promise((e=>{})):this.Ic(e)}enqueueRetryable(e){this.enqueueAndForget((()=>(this.dc.push(e),this.Ac())))}async Ac(){if(0!==this.dc.length){try{await this.dc[0](),this.dc.shift(),this.Zi.reset()}catch(e){if(!Kf(e))throw e;Yu("AsyncQueue","Operation failed with retryable error: "+e)}this.dc.length>0&&this.Zi.ji((()=>this.Ac()))}}Ic(e){const t=this.fc.then((()=>(this.gc=!0,e().catch((e=>{throw this.mc=e,this.gc=!1,Ju("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.gc=!1,e))))));return this.fc=t,t}enqueueAfterDelay(e,t,n){this.Tc(),this.yc.indexOf(e)>-1&&(t=0);const r=Sg.createAndSchedule(this,e,t,n,(e=>this.Rc(e)));return this._c.push(r),r}Tc(){this.mc&&el()}verifyOperationInProgress(){}async Pc(){let e;do{e=this.fc,await e}while(e!==this.fc)}bc(e){for(const t of this._c)if(t.timerId===e)return!0;return!1}vc(e){return this.Pc().then((()=>{this._c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()}))}Vc(e){this.yc.push(e)}Rc(e){const t=this._c.indexOf(e);this._c.splice(t,1)}}function pv(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of["next","error","complete"])if(r in n&&"function"==typeof n[r])return!0;return!1}(e)}class mv{constructor(){this._progressObserver={},this._taskCompletionResolver=new Vf,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv extends sv{constructor(e,t){super(e,t),this._queue=new fv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vv(this),this._firestoreClient.terminate()}}function yv(e){return e._firestoreClient||vv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vv(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new zy(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling));var i,s,o,a;e._firestoreClient=new Cy(e._credentials,e._queue,r)}function wv(e,t,n){const r=new Vf;return e.asyncQueue.enqueue((async()=>{try{await Oy(e,n),await xy(e,t),r.resolve()}catch(s){if(!("FirebaseError"===(i=s).name?i.code===Gu.FAILED_PRECONDITION||i.code===Gu.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&i instanceof DOMException)||22===i.code||20===i.code||11===i.code))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}var i})).then((()=>r.promise))}function bv(e){return function(e){const t=new Vf;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n){const r=nl(t);og(r.remoteStore)||Yu("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=nl(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t._n.getHighestUnacknowledgedBatchId(e)))}(r.localStore);if(-1===e)return void n.resolve();const t=r.ko.get(e)||[];t.push(n),r.ko.set(e,t)}catch(e){const r=kg(e,"Initialization of waitForPendingWrites() operation failed");n.reject(r)}}(await Vy(e),t))),t.promise}(yv(e=nv(e,gv)))}function _v(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await My(e),n=await Fy(e);return t.setNetworkEnabled(!0),function(e){const t=nl(e);return t.Mr.delete(0),Xm(t)}(n)}))}(yv(e=nv(e,gv)))}function Iv(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await My(e),n=await Fy(e);return t.setNetworkEnabled(!1),async function(e){const t=nl(e);t.Mr.add(0),await Zm(t),t.Br.set("Offline")}(n)}))}(yv(e=nv(e,gv)))}function Tv(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=nl(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ke.getNamedQuery(e,t)))}(await Uy(e),t)))}(yv(e=nv(e,gv)),t).then((t=>t?new av(e,null,t.query):null))}function Ev(e){if(e._initialized||e._terminated)throw new Wu(Gu.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Wu(Gu.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gl(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kv(vl.fromBase64String(e))}catch(t){throw new Wu(Gu.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kv(vl.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Wu(Gu.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Wu(Gu.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return sl(this._lat,e._lat)||sl(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=/^__.*__$/;class Dv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new td(e,this.data,this.fieldMask,t,this.fieldTransforms):new ed(e,this.data,t,this.fieldTransforms)}}class Cv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new td(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ov(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw el()}}class xv{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Dc(){return this.settings.Dc}Cc(e){return new xv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Nc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Cc({path:n,xc:!1});return r.kc(e),r}Oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Cc({path:n,xc:!1});return r.Sc(),r}$c(e){return this.Cc({path:void 0,xc:!0})}Mc(e){return Zv(e,this.settings.methodName,this.settings.Fc||!1,this.path,this.settings.Lc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sc(){if(this.path)for(let e=0;e<this.path.length;e++)this.kc(this.path.get(e))}kc(e){if(0===e.length)throw this.Mc("Document fields must not be empty");if(Ov(this.Dc)&&Rv.test(e))throw this.Mc('Document fields cannot begin and end with "__"')}}class Pv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.R=n||zm(e)}Bc(e,t,n,r=!1){return new xv({Dc:e,methodName:t,Lc:n,path:gl.emptyPath(),xc:!1,Fc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)}}function Lv(e){const t=e._freezeSettings(),n=zm(e._databaseId);return new Pv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Mv(e,t,n,r,i,s={}){const o=e.Bc(s.merge||s.mergeFields?2:0,t,n,i);Qv("Data must be an object, but it was:",o,r);const a=Wv(r,o);let c,u;if(s.merge)c=new yl(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Yv(t,r,n);if(!o.contains(i))throw new Wu(Gu.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ew(e,i)||e.push(i)}c=new yl(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Dv(new $l(a),c,u)}class Uv extends Av{_toFieldTransform(e){if(2!==e.Dc)throw 1===e.Dc?e.Mc(`${this._methodName}() can only appear at the top level of your update data`):e.Mc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uv}}function Fv(e,t,n){return new xv({Dc:3,Lc:t.settings.Lc,methodName:e._methodName,xc:n},t.databaseId,t.R,t.ignoreUndefinedProperties)}class Vv extends Av{_toFieldTransform(e){return new zh(e.path,new Mh)}isEqual(e){return e instanceof Vv}}class qv extends Av{constructor(e,t){super(e),this.qc=t}_toFieldTransform(e){const t=Fv(this,e,!0),n=this.qc.map((e=>Gv(e,t))),r=new Uh(n);return new zh(e.path,r)}isEqual(e){return this===e}}class Bv extends Av{constructor(e,t){super(e),this.qc=t}_toFieldTransform(e){const t=Fv(this,e,!0),n=this.qc.map((e=>Gv(e,t))),r=new Vh(n);return new zh(e.path,r)}isEqual(e){return this===e}}class jv extends Av{constructor(e,t){super(e),this.Uc=t}_toFieldTransform(e){const t=new Bh(e.R,Ch(e.R,this.Uc));return new zh(e.path,t)}isEqual(e){return this===e}}function $v(e,t,n,r){const i=e.Bc(1,t,n);Qv("Data must be an object, but it was:",i,r);const s=[],o=$l.empty();hl(r,((e,r)=>{const a=Xv(t,e,n);r=Be(r);const c=i.Oc(a);if(r instanceof Uv)s.push(a);else{const e=Gv(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new yl(s);return new Cv(o,a,i.fieldTransforms)}function zv(e,t,n,r,i,s){const o=e.Bc(1,t,n),a=[Yv(t,r,n)],c=[i];if(s.length%2!=0)throw new Wu(Gu.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Yv(t,s[d])),c.push(s[d+1]);const u=[],l=$l.empty();for(let d=a.length-1;d>=0;--d)if(!ew(u,a[d])){const e=a[d];let t=c[d];t=Be(t);const n=o.Oc(e);if(t instanceof Uv)u.push(e);else{const r=Gv(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new yl(u);return new Cv(l,h,o.fieldTransforms)}function Kv(e,t,n,r=!1){return Gv(n,e.Bc(r?4:3,t))}function Gv(e,t){if(Hv(e=Be(e)))return Qv("Unsupported field value:",t,e),Wv(e,t);if(e instanceof Av)return function(e,t){if(!Ov(t.Dc))throw t.Mc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Mc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xc&&4!==t.Dc)throw t.Mc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Gv(i,t.$c(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Be(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ch(t.R,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=cl.fromDate(e);return{timestampValue:Vd(t.R,n)}}if(e instanceof cl){const n=new cl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Vd(t.R,n)}}if(e instanceof Nv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kv)return{bytesValue:qd(t.R,e._byteString)};if(e instanceof ov){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Mc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$d(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Mc(`Unsupported field value: ${tv(e)}`)}(e,t)}function Wv(e,t){const n={};return dl(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hl(e,((e,r)=>{const i=Gv(r,t.Nc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Hv(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof cl||e instanceof Nv||e instanceof kv||e instanceof ov||e instanceof Av)}function Qv(e,t,n){if(!Hv(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=tv(n);throw"an object"===r?t.Mc(e+" a custom object"):t.Mc(e+" "+r)}var r}function Yv(e,t,n){if((t=Be(t))instanceof Sv)return t._internalPath;if("string"==typeof t)return Xv(e,t);throw Zv("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Jv=new RegExp("[~\\*/\\[\\]]");function Xv(e,t,n){if(t.search(Jv)>=0)throw Zv(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sv(...t.split("."))._internalPath}catch(r){throw Zv(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zv(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Wu(Gu.INVALID_ARGUMENT,a+e+c)}function ew(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ov(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new nw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.toProto())}}get(e){if(this._document){const t=this._document.data.field(rw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nw extends tw{data(){return super.data()}}function rw(e,t){return"string"==typeof t?Xv(e,t):t instanceof Sv?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sw extends tw{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ow(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.toProto(),e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(rw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ow extends sw{data(e={}){return super.data(e)}}class aw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new iw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ow(this._firestore,this._userDataWriter,n.key,n,new iw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query._converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Wu(Gu.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ow(e._firestore,e._userDataWriter,n.doc.key,n.doc,new iw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query._converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ow(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query._converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:cw(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return el()}}function uw(e,t){return e instanceof sw&&t instanceof sw?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof aw&&t instanceof aw&&e._firestore===t._firestore&&dv(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(e){if(gh(e)&&0===e.explicitOrderBy.length)throw new Wu(Gu.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hw{}function dw(e,...t){for(const n of t)e=n._apply(e);return e}class fw extends hw{constructor(e,t,n){super(),this.Kc=e,this.Qc=t,this.jc=n,this.type="where"}_apply(e){const t=Lv(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){bw(o,s);const t=[];for(const n of o)t.push(ww(r,e,n));a={arrayValue:{values:t}}}else a=ww(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||bw(o,s),a=Kv(n,"where",o,"in"===s||"not-in"===s);const c=Jl.create(i,s,a);return function(e,t){if(t.g()){const n=vh(e);if(null!==n&&!n.isEqual(t.field))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=yh(e);null!==r&&_w(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Wu(Gu.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Wu(Gu.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.Kc,this.Qc,this.jc);return new av(e.firestore,e._converter,function(e,t){const n=e.filters.concat([t]);return new dh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}class pw extends hw{constructor(e,t){super(),this.Kc=e,this.Wc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Wu(Gu.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Wu(Gu.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ch(t,n);return function(e,t){if(null===yh(e)){const n=vh(e);null!==n&&_w(e,n,t.field)}}(e,r),r}(e._query,this.Kc,this.Wc);return new av(e.firestore,e._converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new dh(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class mw extends hw{constructor(e,t,n){super(),this.type=e,this.Gc=t,this.zc=n}_apply(e){return new av(e.firestore,e._converter,Ih(e._query,this.Gc,this.zc))}}class gw extends hw{constructor(e,t,n){super(),this.type=e,this.Hc=t,this.Jc=n}_apply(e){const t=vw(e,this.type,this.Hc,this.Jc);return new av(e.firestore,e._converter,(n=e._query,r=t,new dh(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}class yw extends hw{constructor(e,t,n){super(),this.type=e,this.Hc=t,this.Jc=n}_apply(e){const t=vw(e,this.type,this.Hc,this.Jc);return new av(e.firestore,e._converter,(n=e._query,r=t,new dh(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function vw(e,t,n,r){if(n[0]=Be(n[0]),n[0]instanceof tw)return function(e,t,n,r,i){if(!r)throw new Wu(Gu.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of bh(e))if(o.field.isKeyField())s.push(Ul(t,r.key));else{const e=r.data.field(o.field);if(Tl(e))throw new Wu(Gu.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new oh(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Lv(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new Wu(Gu.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!wh(e)&&-1!==s.indexOf("/"))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(pl.fromString(s));if(!Rl.isDocumentKey(n))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Rl(n);a.push(Ul(t,i))}else{const e=Kv(n,r,s);a.push(e)}}return new oh(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function ww(e,t,n){if("string"==typeof(n=Be(n))){if(""===n)throw new Wu(Gu.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!wh(t)&&-1!==n.indexOf("/"))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(pl.fromString(n));if(!Rl.isDocumentKey(r))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ul(e,new Rl(r))}if(n instanceof ov)return Ul(e,n._key);throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${tv(n)}.`)}function bw(e,t){if(!Array.isArray(e)||0===e.length)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function _w(e,t,n){if(!n.isEqual(t))throw new Wu(Gu.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{convertValue(e,t="none"){switch(Dl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _l(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Il(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw el()}}convertObject(e,t){const n={};return hl(e.fields||{},((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Nv(_l(e.latitude),_l(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=El(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const t=bl(e);return new cl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=pl.fromString(e);tl(mf(n));const r=new Ky(n.get(1),n.get(3)),i=new Rl(n.popFirst(5));return r.isEqual(t)||Ju(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Ew extends Iw{constructor(e){super(),this.firestore=e}convertBytes(e){return new kv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ov(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Lv(e)}set(e,t,n){this._verifyNotCommitted();const r=kw(e,this._firestore),i=Tw(r._converter,t,n),s=Mv(this._dataReader,"WriteBatch.set",r._key,i,null!==r._converter,n);return this._mutations.push(s.toMutation(r._key,Gh.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=kw(e,this._firestore);let s;return s="string"==typeof(t=Be(t))||t instanceof Sv?zv(this._dataReader,"WriteBatch.update",i._key,t,n,r):$v(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Gh.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kw(e,this._firestore);return this._mutations=this._mutations.concat(new sd(t._key,Gh.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Wu(Gu.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kw(e,t){if((e=Be(e)).firestore!==t)throw new Wu(Gu.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Iw{constructor(e){super(),this.firestore=e}convertBytes(e){return new kv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ov(this.firestore,null,t)}}function Nw(e){e=nv(e,ov);const t=nv(e.firestore,gv),n=yv(t),r=new Aw(t);return function(e,t){const n=new Vf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=nl(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Fn.mn(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Wu(Gu.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){const e=kg(r,`Failed to get document '${t} from cache`);n.reject(e)}}(await Uy(e),t,n))),n.promise}(n,e._key).then((n=>new sw(t,r,e._key,n,new iw(null!==n&&n.hasLocalMutations,!0),e._converter)))}function Rw(e){e=nv(e,av);const t=nv(e.firestore,gv),n=yv(t),r=new Aw(t);return function(e,t){const n=new Vf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await dm(e,t,!0),i=new zg(t,r.Bn),s=i._o(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(r){const e=kg(r,`Failed to execute query '${t} against cache`);n.reject(e)}}(await Uy(e),t,n))),n.promise}(n,e._query).then((n=>new aw(t,r,e,n)))}function Dw(e,t,n,...r){e=nv(e,ov);const i=nv(e.firestore,gv),s=Lv(i);let o;return o="string"==typeof(t=Be(t))||t instanceof Sv?zv(s,"updateDoc",e._key,t,n,r):$v(s,"updateDoc",e._key,t),xw(i,[o.toMutation(e._key,Gh.exists(!0))])}function Cw(e,...t){var n,r,i;e=Be(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||pv(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pv(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof ov)u=nv(e.firestore,gv),l=ph(e._key.path),c={next:n=>{t[o]&&t[o](Pw(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=nv(e,av);u=nv(n.firestore,gv),l=n._query;const r=new Aw(u);c={next:e=>{t[o]&&t[o](new aw(u,r,n,e))},error:t[o+1],complete:t[o+2]},lw(e._query)}return function(e,t,n,r){const i=new Ay(r),s=new Ug(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Og(await qy(e),s))),()=>{i.Wo(),e.asyncQueue.enqueueAndForget((async()=>xg(await qy(e),s)))}}(yv(u),l,a,c)}function Ow(e,t){return function(e,t){const n=new Ay(t);return e.asyncQueue.enqueueAndForget((async()=>{return t=await qy(e),r=n,nl(t).Gr.add(r),void r.next();var t,r})),()=>{n.Wo(),e.asyncQueue.enqueueAndForget((async()=>{return t=await qy(e),r=n,void nl(t).Gr.delete(r);var t,r}))}}(yv(e=nv(e,gv)),pv(t)?t:{next:t})}function xw(e,t){return function(e,t){const n=new Vf;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n,r){const i=_y(t);try{const e=await function(e,t){const n=nl(e),r=cl.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ed());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Fn.pn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Jh(e,s.get(e.key));null!=t&&o.push(new td(e.key,t,zl(t.toProto().mapValue),Gh.exists(!0)))}return n._n.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,n);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.xo[e.currentUser.toKey()];r||(r=new dd(sl)),r=r.insert(t,n),e.xo[e.currentUser.toKey()]=r}(i,e.batchId,r),await uy(i,e.changes),await fg(i.remoteStore)}catch(e){const n=kg(e,"Failed to persist write");r.reject(n)}}(await Vy(e),t,n))),n.promise}(yv(e),t)}function Pw(e,t,n){const r=n.docs.get(t._key),i=new Aw(e);return new sw(e,i,t._key,r,new iw(n.hasPendingWrites,n.fromCache),t._converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Lv(e)}get(e){const t=kw(e,this._firestore),n=new Ew(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return el();const r=e[0];if(r.isFoundDocument())return new tw(this._firestore,n,r.key,r,t._converter);if(r.isNoDocument())return new tw(this._firestore,n,t._key,null,t._converter);throw el()}))}set(e,t,n){const r=kw(e,this._firestore),i=Tw(r._converter,t,n),s=Mv(this._dataReader,"Transaction.set",r._key,i,null!==r._converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=kw(e,this._firestore);let s;return s="string"==typeof(t=Be(t))||t instanceof Sv?zv(this._dataReader,"Transaction.update",i._key,t,n,r):$v(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=kw(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kw(e,this._firestore),n=new Aw(this._firestore);return super.get(e).then((e=>new sw(this._firestore,n,t._key,e._document,new iw(!1,!1),t._converter)))}}function Mw(e,t){return function(e,t){const n=new Vf;return e.asyncQueue.enqueueAndForget((async()=>{const r=await(i=e,Ly(i).then((e=>e.datastore)));var i;new Dy(e.asyncQueue,r,t,n).run()})),n.promise}(yv(e),(n=>t(new Lw(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(new je("firestore-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),r=new gv(n,e.getProvider("auth-internal"));return t&&r._setSettings(t),r}),"PUBLIC")),pt("@firebase/firestore","0.0.900-exp.894b5da5a",undefined);class Uw{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Uw&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fw=new et("@firebase/firestore");function Vw(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(e="Unexpected state"){const t="FIRESTORE (8.4.1) INTERNAL ASSERTION FAILED: "+e;throw function(e,...t){if(Fw.logLevel<=We.ERROR){const n=t.map(Vw);Fw.error(`Firestore (8.4.1): ${e}`,...n)}}(t),new Error(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="invalid-argument",jw="failed-precondition",$w="unimplemented";class zw extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t,n){void 0===t?t=0:t>e.length&&qw(),void 0===n?n=e.length-t:n>e.length-t&&qw(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Kw.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kw?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Gw extends Kw{construct(e,t,n){return new Gw(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new zw(Bw,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Gw(t)}static emptyPath(){return new Gw([])}}const Ww=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Hw extends Kw{construct(e,t,n){return new Hw(e,t,n)}static isValidIdentifier(e){return Ww.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Hw.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Hw(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new zw(Bw,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new zw(Bw,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new zw(Bw,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new zw(Bw,"Unterminated ` in path: "+e);return new Hw(t)}static emptyPath(){return new Hw([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.path=e}static fromPath(e){return new Qw(Gw.fromString(e))}static fromName(e){return new Qw(Gw.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Gw.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Gw.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Qw(new Gw(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new zw(Bw,`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}function Jw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new zw(Bw,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":qw()}(e);throw new zw(Bw,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xw(){if("undefined"==typeof Uint8Array)throw new zw($w,"Uint8Arrays are not available in this environment.")}function Zw(){if("undefined"==typeof atob)throw new zw($w,"Blobs are unavailable in Firestore in this environment.")}class eb{constructor(e){this._delegate=e}static fromBase64String(e){return Zw(),new eb(kv.fromBase64String(e))}static fromUint8Array(e){return Xw(),new eb(kv.fromUint8Array(e))}toBase64(){return Zw(),this._delegate.toBase64()}toUint8Array(){return Xw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class nb{enableIndexedDbPersistence(e,t){return function(e,t){Ev(e=nv(e,gv));const n=yv(e),r=e._freezeSettings(),i=new Sy;return wv(n,i,new Ty(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){Ev(e=nv(e,gv));const t=yv(e),n=e._freezeSettings(),r=new Sy;return wv(t,r,new Ey(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new Wu(Gu.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Vf;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!jf.gt())return Promise.resolve();const t=e+"main";await jf.delete(t)}(Zp(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}})),t.promise}(e._delegate)}}class rb{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Uw||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){e.merge&&delete(e=Object.assign(Object.assign({},this._delegate._getSettings()),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t){!function(e,t,n){const r=(e=nv(e,sv))._getSettings();"firestore.googleapis.com"!==r.host&&r.host!==t&&Xu("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1}))}(this._delegate,e,t)}enableNetwork(){return _v(this._delegate)}disableNetwork(){return Iv(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,function(e,t,n,r){if(!0===t&&!0===r)throw new zw(Bw,`${e} and ${n} cannot be used together.`)}("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore"),this._appCompat._removeServiceInstance("firestore-exp")),this._delegate._delete()}waitForPendingWrites(){return bv(this._delegate)}onSnapshotsInSync(e){return Ow(this._delegate,e)}get app(){if(!this._appCompat)throw new zw(jw,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new yb(this,uv(this._delegate,e))}catch(t){throw ub(t,"collection()","Firestore.collection()")}}doc(e){try{return new cb(this,lv(this._delegate,e))}catch(t){throw ub(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new pb(this,function(e,t){if(e=nv(e,sv),Xy("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Wu(Gu.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new av(e,null,(n=t,new dh(pl.emptyPath(),n)));var n}(this._delegate,e))}catch(t){throw ub(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Mw(this._delegate,(t=>e(new sb(this,t))))}batch(){return yv(this._delegate),new ob(new Sw(this._delegate,(e=>xw(this._delegate,e))))}loadBundle(e){throw new zw(jw,'"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?')}namedQuery(e){throw new zw(jw,'"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?')}}class ib extends Iw{constructor(e){super(),this.firestore=e}convertBytes(e){return new eb(new kv(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return cb.forKey(t,this.firestore,null)}}class sb{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ib(e)}get(e){const t=vb(e);return this._delegate.get(t).then((e=>new db(this._firestore,new sw(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t._converter))))}set(e,t,n){const r=vb(e);return n?(Yw("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=vb(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=vb(e);return this._delegate.delete(t),this}}class ob{constructor(e){this._delegate=e}set(e,t,n){const r=vb(e);return n?(Yw("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=vb(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=vb(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ab{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new ow(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new fb(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=ab.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new ab(e,new ib(e),t),r.set(t,i)),i}}ab.INSTANCES=new WeakMap;class cb{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ib(e)}static forPath(e,t,n){if(e.length%2!=0)throw new zw(Bw,`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new cb(t,new ov(t._delegate,n,new Qw(e)))}static forKey(e,t,n){return new cb(t,new ov(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new yb(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new yb(this.firestore,uv(this._delegate,e))}catch(t){throw ub(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Be(e))instanceof ov&&hv(this._delegate,e)}set(e,t){t=Yw("DocumentReference.set",t);try{return function(e,t,n){e=nv(e,ov);const r=nv(e.firestore,gv),i=Tw(e._converter,t,n);return xw(r,[Mv(Lv(r),"setDoc",e._key,i,null!==e._converter,n).toMutation(e._key,Gh.none())])}(this._delegate,e,t)}catch(n){throw ub(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Dw(this._delegate,e):Dw(this._delegate,e,t,...n)}catch(r){throw ub(r,"updateDoc()","DocumentReference.update()")}}delete(){return xw(nv((e=this._delegate).firestore,gv),[new sd(e._key,Gh.none())]);var e}onSnapshot(...e){const t=lb(e),n=hb(e,(e=>new db(this.firestore,new sw(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate._converter))));return Cw(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Nw(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=nv(e,ov);const t=nv(e.firestore,gv);return By(yv(t),e._key,{source:"server"}).then((n=>Pw(t,e,n)))}(this._delegate):function(e){e=nv(e,ov);const t=nv(e.firestore,gv);return By(yv(t),e._key).then((n=>Pw(t,e,n)))}(this._delegate),t.then((e=>new db(this.firestore,new sw(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate._converter))))}withConverter(e){return new cb(this.firestore,e?this._delegate.withConverter(ab.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ub(e,t,n){return e.message=e.message.replace(t,n),e}function lb(e){for(const t of e)if("object"==typeof t&&!tb(t))return t;return{}}function hb(e,t){var n,r;let i;return i=tb(e[0])?e[0]:tb(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class db{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new cb(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return uw(this._delegate,e._delegate)}}class fb extends db{data(e){return this._delegate.data(e)}}class pb{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ib(e)}where(e,t,n){try{return new pb(this.firestore,dw(this._delegate,function(e,t,n){const r=t,i=rw("where",e);return new fw(i,r,n)}(e,t,n)))}catch(r){throw ub(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new pb(this.firestore,dw(this._delegate,function(e,t="asc"){const n=t,r=rw("orderBy",e);return new pw(r,n)}(e,t)))}catch(n){throw ub(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new pb(this.firestore,dw(this._delegate,(rv("limit",t=e),new mw("limit",t,"F"))))}catch(n){throw ub(n,"limit()","Query.limit()")}var t}limitToLast(e){try{return new pb(this.firestore,dw(this._delegate,(rv("limitToLast",t=e),new mw("limitToLast",t,"L"))))}catch(n){throw ub(n,"limitToLast()","Query.limitToLast()")}var t}startAt(...e){try{return new pb(this.firestore,dw(this._delegate,function(...e){return new gw("startAt",e,!0)}(...e)))}catch(t){throw ub(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new pb(this.firestore,dw(this._delegate,function(...e){return new gw("startAfter",e,!1)}(...e)))}catch(t){throw ub(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new pb(this.firestore,dw(this._delegate,function(...e){return new yw("endBefore",e,!0)}(...e)))}catch(t){throw ub(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new pb(this.firestore,dw(this._delegate,function(...e){return new yw("endAt",e,!1)}(...e)))}catch(t){throw ub(t,"endAt()","Query.endAt()")}}isEqual(e){return dv(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Rw(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=nv(e,av);const t=nv(e.firestore,gv),n=yv(t),r=new Aw(t);return jy(n,e._query,{source:"server"}).then((n=>new aw(t,r,e,n)))}(this._delegate):function(e){e=nv(e,av);const t=nv(e.firestore,gv),n=yv(t),r=new Aw(t);return lw(e._query),jy(n,e._query).then((n=>new aw(t,r,e,n)))}(this._delegate),t.then((e=>new gb(this.firestore,new aw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=lb(e),n=hb(e,(e=>new gb(this.firestore,new aw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Cw(this._delegate,t,n)}withConverter(e){return new pb(this.firestore,e?this._delegate.withConverter(ab.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class mb{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new fb(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class gb{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new pb(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new fb(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new mb(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new fb(this._firestore,n))}))}isEqual(e){return uw(this._delegate,e._delegate)}}class yb extends pb{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new cb(this.firestore,e):null}doc(e){try{return new cb(this.firestore,void 0===e?lv(this._delegate):lv(this._delegate,e))}catch(t){throw ub(t,"doc()","CollectionReference.doc()")}}add(e){return function(e,t){const n=nv(e.firestore,gv),r=lv(e),i=Tw(e._converter,t);return xw(n,[Mv(Lv(e.firestore),"addDoc",r._key,i,null!==e._converter,{}).toMutation(r._key,Gh.exists(!1))]).then((()=>r))}(this._delegate,e).then((e=>new cb(this.firestore,e)))}isEqual(e){return hv(this._delegate,e._delegate)}withConverter(e){return new yb(this.firestore,e?this._delegate.withConverter(ab.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vb(e){return Jw(e,ov)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(e){return function(e,t){const n=yv(e=nv(e,gv)),r=new mv;return $y(n,e._databaseId,t,r),r}(this._delegate,e)}function bb(e){return Tv(this._delegate,e).then((e=>e?new pb(this,e):null))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _b{constructor(...e){this._delegate=new Sv(...e)}static documentId(){return new _b(Hw.keyField().canonicalString())}isEqual(e){return(e=Be(e))instanceof Sv&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this._delegate=e}static serverTimestamp(){const e=new Vv("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new Ib(e)}static delete(){const e=new Uv("deleteField");return e._methodName="FieldValue.delete",new Ib(e)}static arrayUnion(...e){const t=function(...e){return new qv("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new Ib(t)}static arrayRemove(...e){const t=function(...e){return new Bv("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new Ib(t)}static increment(e){const t=new jv("increment",e);return t._methodName="FieldValue.increment",new Ib(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb={Firestore:rb,GeoPoint:Nv,Timestamp:cl,Blob:eb,Transaction:sb,WriteBatch:ob,DocumentReference:cb,DocumentSnapshot:db,Query:pb,QueryDocumentSnapshot:fb,QuerySnapshot:gb,CollectionReference:yb,FieldPath:_b,FieldValue:Ib,setLogLevel:function(e){var t;t=e,Fw.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};function Eb(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}!
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t;t=(e,t)=>new rb(e,t,new nb),e.INTERNAL.registerComponent(new je("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore-exp").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Tb))),e.registerVersion("@firebase/firestore-compat","0.0.900-exp.894b5da5a")}(Et),function(e){e.prototype.loadBundle=wb,e.prototype.namedQuery=bb}(rb);var Sb={},kb=Eb(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}}));const Ab=kb,Nb=kb;function Rb(e){console.log(`[dotenv][DEBUG] ${e}`)}const Db=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,Cb=/\\n/g,Ob=/\r\n|\n|\r/;function xb(e,t){const n=Boolean(t&&t.debug),r={};return e.toString().split(Ob).forEach((function(e,t){const i=e.match(Db);if(null!=i){const e=i[1];let t=i[2]||"";const n=t.length-1,s='"'===t[0]&&'"'===t[n];"'"===t[0]&&"'"===t[n]||s?(t=t.substring(1,n),s&&(t=t.replace(Cb,"\n"))):t=t.trim(),r[e]=t}else n&&Rb(`did not match key and value when parsing line ${t+1}: ${e}`)})),r}Sb.config=function(e){let t=Nb.resolve(process.cwd(),".env"),n="utf8",r=!1;e&&(null!=e.path&&(t=e.path),null!=e.encoding&&(n=e.encoding),null!=e.debug&&(r=!0));try{const e=xb(Ab.readFileSync(t,{encoding:n}),{debug:r});return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?r&&Rb(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=e[t]})),{parsed:e}}catch(i){return{error:i}}},Sb.parse=xb;export{t as A,X as B,de as C,f as D,c as E,l as F,a as G,e as H,D as I,U as J,h as K,_ as L,F as M,g as N,R as O,i as P,d as Q,I as R,le as S,Sb as T,Et as U,E as a,T as b,S as c,m as d,y as e,p as f,k as g,N as h,ue as i,ie as j,w as k,b as l,se as m,A as n,oe as o,ne as p,re as q,te as r,o as s,v as t,Z as u,ee as v,ae as w,M as x,L as y,P as z};
