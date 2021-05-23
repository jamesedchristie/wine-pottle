function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t,e,n,r){if(t){const i=u(t,e,n,r);return t[0](i)}}function u(t,n,r,i){return t[1]&&i?e(r.ctx.slice(),t[1](i(n))):r.ctx}function h(t,e,n,r,i,s,o){const a=function(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}(e,r,i,s);if(a){const i=u(e,n,r,o);t.p(i,a)}}function l(t){return null==t?"":t}function d(t,e,n=e){return t.set(n),e}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function b(){return v("")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t){return function(e){return e.preventDefault(),t.call(this,e)}}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t){return Array.from(t.childNodes)}function S(t,e,n,r){for(let i=0;i<t.length;i+=1){const r=t[i];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(i,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):y(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return v(e)}function k(t){return A(t," ")}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function R(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let D;function O(t){D=t}function L(){if(!D)throw new Error("Function called outside component initialization");return D}function P(t){L().$$.on_mount.push(t)}function M(t){L().$$.after_update.push(t)}function x(t,e){L().$$.context.set(t,e)}function U(t){return L().$$.context.get(t)}function V(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const F=[],q=[],B=[],j=[],$=Promise.resolve();let z=!1;function K(t){B.push(t)}let H=!1;const G=new Set;function W(){if(!H){H=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];O(e),Q(e.$$)}for(O(null),F.length=0;q.length;)q.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];G.has(e)||(G.add(e),e())}B.length=0}while(F.length);for(;j.length;)j.pop()();z=!1,H=!1,G.clear()}}function Q(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const X=new Set;let Y;function J(){Y={r:0,c:[],p:Y}}function Z(){Y.r||i(Y.c),Y=Y.p}function tt(t,e){t&&t.i&&(X.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push((()=>{X.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function nt(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[s]=a}else for(const t in o)i[t]=1}for(const o in r)o in n||(n[o]=void 0);return n}function rt(t){return"object"==typeof t&&null!==t?t:{}}function it(t){t&&t.c()}function st(t,e){t&&t.l(e)}function ot(t,e,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:h}=t.$$;a&&a.m(e,r),o||K((()=>{const e=c.map(n).filter(s);u?u.push(...e):i(e),t.$$.on_mount=[]})),h.forEach(K)}function at(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(F.push(t),z||(z=!0,$.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,s,o,a,c,u=[-1]){const h=D;O(e);const l=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(l.ctx=s?s(e,n.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return l.ctx&&a(l.ctx[t],l.ctx[t]=i)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](i),d&&ct(e,t)),n})):[],l.update(),d=!0,i(l.before_update),l.fragment=!!o&&o(l.ctx),n.target){if(n.hydrate){const t=T(n.target);l.fragment&&l.fragment.l(t),t.forEach(m)}else l.fragment&&l.fragment.c();n.intro&&tt(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),W()}O(h)}class ht{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function dt(e,n=t){let r;const i=[];function s(t){if(o(e,t)&&(e=t,r)){const t=!lt.length;for(let n=0;n<i.length;n+=1){const t=i[n];t[1](),lt.push(t,e)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.push(c),1===i.length&&(r=n(s)||t),o(e),()=>{const t=i.indexOf(c);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}
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
***************************************************************************** */var ft=function(t,e){return(ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};var pt=function(){return(pt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function mt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function gt(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function yt(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function vt(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function wt(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function bt(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}
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
 */var Et={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=s>>2,l=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[h],n[l],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var h=o<<4&240|a>>2;if(r.push(h),64!==c){var l=a<<6&192|c;r.push(l)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_t=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
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
function It(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Tt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function St(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function At(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function kt(){var t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
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
var Nt=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Ct.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}ft(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),Ct=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?Rt(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Nt(i,a,r);return c},t}();function Rt(t,e){return t.replace(Dt,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var Dt=/\{\$([^}]+)}/g;
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
function Ot(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}function Lt(t){var e={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function Pt(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}var Mt=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=xt),void 0===r.error&&(r.error=xt),void 0===r.complete&&(r.complete=xt);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function xt(){}
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}var Vt=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),Ft=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return t.prototype.get=function(t){void 0===t&&(t="[DEFAULT]");var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new _t;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e=pt({identifier:"[DEFAULT]",optional:!1},t),n=e.identifier,r=e.optional,i=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(h){}try{for(var r=vt(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=wt(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(h){}}}catch(l){e={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return gt(this,void 0,void 0,(function(){var t;return yt(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(bt(bt([],wt(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),wt(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.instanceIdentifier,i=void 0===r?"[DEFAULT]":r,s=t.options,o=void 0===s?{}:s,a=this.normalizeInstanceIdentifier(i);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=vt(this.instancesDeferred.entries()),h=u.next();!h.done;h=u.next()){var l=wt(h.value,2),d=l[0],f=l[1];a===this.normalizeInstanceIdentifier(d)&&f.resolve(c)}}catch(p){e={error:p}}finally{try{h&&!h.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}return c},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
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
 */var qt,Bt,jt,$t=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new Ft(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
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
***************************************************************************** */function zt(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
 */(jt=Bt||(Bt={}))[jt.DEBUG=0]="DEBUG",jt[jt.VERBOSE=1]="VERBOSE",jt[jt.INFO=2]="INFO",jt[jt.WARN=3]="WARN",jt[jt.ERROR=4]="ERROR",jt[jt.SILENT=5]="SILENT";var Kt={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},Ht=Bt.INFO,Gt=((qt={})[Bt.DEBUG]="log",qt[Bt.VERBOSE]="log",qt[Bt.INFO]="info",qt[Bt.WARN]="warn",qt[Bt.ERROR]="error",qt),Wt=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=Gt[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,zt(["["+i+"]  "+t.name+":"],n))}},Qt=function(){function t(t){this.name=t,this._logLevel=Ht,this._logHandler=Wt,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in Bt))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?Kt[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,zt([this,Bt.DEBUG],t)),this._logHandler.apply(this,zt([this,Bt.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,zt([this,Bt.VERBOSE],t)),this._logHandler.apply(this,zt([this,Bt.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,zt([this,Bt.INFO],t)),this._logHandler.apply(this,zt([this,Bt.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,zt([this,Bt.WARN],t)),this._logHandler.apply(this,zt([this,Bt.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,zt([this,Bt.ERROR],t)),this._logHandler.apply(this,zt([this,Bt.ERROR],t))},t}();
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
class Xt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Yt=new Qt("@firebase/app"),Jt={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},Zt=new Map,te=new Map;function ee(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ne(t){const e=t.name;if(te.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;te.set(e,t);for(const n of Zt.values())ee(n,t);return!0}function re(t,e){return t.container.getProvider(e)}
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
 */const ie=new Ct("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class se{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vt("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}
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
 */function oe(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw ie.create("bad-app-name",{appName:String(r)});if(Zt.has(r))throw ie.create("duplicate-app",{appName:r});const i=new $t(r);for(const o of te.values())i.addComponent(o);const s=new se(t,n,i);return Zt.set(r,s),s}function ae(t="[DEFAULT]"){const e=Zt.get(t);if(!e)throw ie.create("no-app",{appName:t});return e}function ce(t,e,n){var r;let i=null!==(r=Jt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Yt.warn(t.join(" "))}ne(new Vt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
 */var ue;ne(new Vt("platform-logger",(t=>new Xt(t)),"PRIVATE")),ce("@firebase/app-exp","0.0.900-exp.894b5da5a",ue),ce("fire-js","");
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
ce("firebase-exp","9.0.0-beta.1","app");const he=new Ct("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),le=new Qt("@firebase/auth-exp");
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
 */function de(t,...e){le.logLevel<=Bt.ERROR&&le.error(`Auth (9.0.0-beta.1): ${t}`,...e)}
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
 */function fe(t,...e){throw me(t,...e)}function pe(t,...e){return me(t,...e)}function me(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return he.create(t,...e)}function ge(t,e,...n){if(!t)throw me(e,...n)}function ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw de(e),new Error(e)}function ve(t,e){t||ye(e)}
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
 */const we=new Map;function be(t){ve(t instanceof Function,"Expected a class definition");let e=we.get(t);return e?(ve(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,we.set(t,e),e)}
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
function Ee(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function _e(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function Ie(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==_e()&&"https:"!==_e()&&!St()&&!("connection"in navigator)||navigator.onLine}
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
class Te{constructor(t,e){this.shortDelay=t,this.longDelay=e,ve(e>t,"Short delay should be less than long delay!"),this.isMobile=Tt()||At()}get(){return Ie()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Se(t,e){ve(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class Ae{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ke={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Ne=new Te(3e4,6e4);
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
 */function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Re(t,e,n,r,i={}){return De(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=Ot(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(Ae.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),Ae.fetch()(Le(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function De(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ke),e);try{const e=new Pe(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Me(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw Me(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===e)throw Me(t,"email-already-in-use",s);fe(t,r[e]||e.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof Nt)throw i;fe(t,"network-request-failed")}}async function Oe(t,e,n,r,i={}){const s=await Re(t,e,n,r,i);return"mfaPendingCredential"in s&&fe(t,"multi-factor-auth-required",{serverResponse:s}),s}function Le(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Se(t.config,i):`${t.config.apiScheme}://${i}`}class Pe{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(pe(this.auth,"timeout"))),Ne.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Me(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pe(t,e,r);return i.customData._tokenResponse=n,i}
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
function xe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Ue(t){return 1e3*Number(t)}function Ve(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return de("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Et.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return t?JSON.parse(t):(de("Failed to decode base64 JWT payload"),null)}catch(i){return de("Caught error parsing JWT payload as JSON",i),null}}
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
async function Fe(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}class qe{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
 */class Be{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=xe(this.lastLoginAt),this.creationTime=xe(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function je(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fe(t,async function(t,e){return Re(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));ge(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=mt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const h=t.isAnonymous,l=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&l,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Be(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class $e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ge(t.idToken,"internal-error"),ge(void 0!==t.idToken,"internal-error"),ge(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ve(t);return ge(e,"internal-error"),ge(void 0!==e.exp,"internal-error"),ge(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ge(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(t,e){const n=await De(t,{},(()=>{const n=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=Le(t,r,"/v1/token",`key=${i}`);return Ae.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new $e;return n&&(ge("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(ge("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(ge("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $e,this.toJSON())}_performRefresh(){return ye("not implemented")}}
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
 */function ze(t,e){ge("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ke{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=mt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new qe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Be(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Fe(this,this.stsTokenManager.getToken(this.auth,t));return ge(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),i=Ve(r);ge(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xe(Ue(i.auth_time)),issuedAtTime:xe(Ue(i.iat)),expirationTime:xe(Ue(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ut(t);await je(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ge(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ke(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await je(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Fe(this,async function(t,e){return Re(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:_}=e;ge(v&&_,t,"internal-error");const I=$e.fromJSON(this.name,_);ge("string"==typeof v,t,"internal-error"),ze(h,t.name),ze(l,t.name),ge("boolean"==typeof w,t,"internal-error"),ge("boolean"==typeof b,t,"internal-error"),ze(d,t.name),ze(f,t.name),ze(p,t.name),ze(m,t.name),ze(g,t.name),ze(y,t.name);const T=new Ke({uid:v,auth:t,email:l,emailVerified:w,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((t=>Object.assign({},t)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new $e;r.updateFromServerResponse(e);const i=new Ke({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await je(i),i}}
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
 */class He{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}He.type="NONE";const Ge=He;
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
 */function We(t,e,n){return`firebase:${t}:${e}:${n}`}class Qe{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=We(this.userKey,r.apiKey,i),this.fullPersistenceKey=We("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ke._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Qe(be(Ge),t,n);let r=be(Ge);for(const a of e)if(await a._isAvailable()){r=a;break}let i=null;const s=We(n,t.config.apiKey,t.name);for(const a of e)try{const e=await a._get(s);if(e){const n=Ke._fromJSON(t,e);a!==r&&(i=n);break}}catch(o){}return i&&await r._set(s,i.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(o){}}))),new Qe(r,t,n)}}
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
 */function Xe(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ye(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nn(e))return"Blackberry";if(rn(e))return"Webos";if(Je(e))return"Safari";if((e.includes("chrome/")||Ze(e))&&!e.includes("edge/"))return"Chrome";if(en(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ye(t=It()){return/firefox\//i.test(t)}function Je(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ze(t=It()){return/crios\//i.test(t)}function tn(t=It()){return/iemobile/i.test(t)}function en(t=It()){return/android/i.test(t)}function nn(t=It()){return/blackberry/i.test(t)}function rn(t=It()){return/webos/i.test(t)}function sn(t=It()){return/iphone|ipad|ipod/i.test(t)}function on(t=It()){return sn(t)||en(t)||rn(t)||nn(t)||/windows phone/i.test(t)||tn(t)}
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
function an(t,e=[]){let n;switch(t){case"Browser":n=Xe(It());break;case"Worker":n=`${Xe(It())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0-beta.1/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */class cn{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hn(this),this.idTokenSubscription=new hn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=he,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=be(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await Qe.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(t)):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await je(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ut(t):null;return e&&ge(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&ge(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(be(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ct("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&be(t)||this._popupRedirectResolver;ge(e,this,"argument-error"),this.redirectPersistenceManager=await Qe.create(this,[be(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next,s=this._isInitialized?Promise.resolve():this._initializationPromise;return ge(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=an(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function un(t){return Ut(t)}class hn{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new Mt((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class ln{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ye("not implemented")}_getIdTokenResponse(t){return ye("not implemented")}_linkToIdToken(t,e){return ye("not implemented")}_getReauthenticationResolver(t){return ye("not implemented")}}
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
class dn extends ln{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new dn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new dn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Oe(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}
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
 */(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Oe(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}(t,{email:this._email,oobCode:this._password});default:fe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return Re(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Oe(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:fe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function fn(t,e){return Oe(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}
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
 */class pn{constructor(t){var e,n,r,i,s,o;const a=Lt(Pt(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ge(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=Lt(Pt(t)).link,n=e?Lt(Pt(e)).deep_link_id:null,r=Lt(Pt(t)).deep_link_id;return(r?Lt(Pt(r)).link:null)||r||n||e||t}(t);try{return new pn(e)}catch(n){return null}}}
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
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(t,e){return dn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=pn.parseLink(e);return ge(n,"argument-error"),dn._fromEmailAndCode(t,n.code,n.tenantId)}}mn.PROVIDER_ID="password",mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class gn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class yn extends gn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Ke._fromIdTokenResponse(t,n,r),s=wn(n);return new vn({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=wn(n);return new vn({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function wn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
 */class bn extends Nt{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,bn.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new bn(t,e,n,r)}}function En(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw bn._fromErrorAndOperation(t,n,e,r);throw n}))}
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
async function _n(t,e,n=!1){const r="signIn",i=await En(t,r,e),s=await vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function In(t,e,n){const r=un(t),i=await async function(t,e){return Oe(t,"POST","/v1/accounts:signUp",Ce(t,e))}(r,{returnSecureToken:!0,email:e,password:n}),s=await vn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Tn(t,e,n){return async function(t,e){return _n(un(t),e)}(Ut(t),mn.credential(e,n))}
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
class Sn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
class An{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
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
 */class kn extends An{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=It();return Je(t)||sn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=on(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);kt()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}kn.type="LOCAL";const Nn=kn;
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
class Cn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Cn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cn.receivers=[];class Rn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=
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
function(t="",e=20){return`${t}${Math.floor(Math.random()*Math.pow(10,e))}`}();r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Dn(){return window}
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
function On(){return void 0!==Dn().WorkerGlobalScope&&"function"==typeof Dn().importScripts}
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
const Ln="firebaseLocalStorageDb";class Pn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Mn(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function xn(){const t=indexedDB.open(Ln,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;if(!n.objectStoreNames.contains("firebaseLocalStorage"))return await function(){const t=indexedDB.deleteDatabase(Ln);return new Pn(t).toPromise()}(),xn();e(n)}))}))}async function Un(t,e,n){const r=Mn(t,!0).put({fbase_key:e,value:n});return new Pn(r).toPromise()}function Vn(t,e){const n=Mn(t,!0).delete(e);return new Pn(n).toPromise()}class Fn{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await xn()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return On()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cn._getInstance(On()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xn();return await Un(t,"__sak","1"),await Vn(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Un(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Mn(t,!1).get(e),r=await new Pn(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Vn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Mn(t,!1).getAll();return new Pn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fn.type="LOCAL";const qn=Fn;
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
 */class Bn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $n(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!$n(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(pe(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(jn(t))}saveEventToCache(t){this.cachedEventUids.add(jn(t)),this.lastProcessedEventTime=Date.now()}}function jn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function $n({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const zn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kn=/^https?/;async function Hn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await
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
async function(t){return Re(t,"GET","/v1/projects",{})}(t);for(const r of e)try{if(Gn(r))return}catch(n){}fe(t,"unauthorized-domain")}function Gn(t){const e=Ee(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Kn.test(n))return!1;if(zn.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */function Wn(t){return new Promise(((e,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=n,r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
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
const Qn=new Te(3e4,6e4);function Xn(){const t=Dn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Yn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xn(),n(pe(t,"network-request-failed"))},timeout:Qn.get()})}if(null===(i=null===(r=Dn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Dn().gapi)||void 0===s?void 0:s.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Dn()[e]=()=>{gapi.load?o():n(pe(t,"network-request-failed"))},Wn(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw Jn=null,t}))}let Jn=null;
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
const Zn=new Te(5e3,15e3),tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},er=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nr(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Se(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.0.0-beta.1"},i=er.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ot(r).slice(1)}`}async function rr(t){const e=await function(t){return Jn=Jn||Yn(t),Jn}(t),n=Dn().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:nr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=pe(t,"network-request-failed"),s=Dn().setTimeout((()=>{r(i)}),Zn.get());function o(){Dn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */class ir extends An{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ir.type="SESSION";const sr=ir,or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
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
 */class ar{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function cr(t,e,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},or),{width:r.toString(),height:i.toString(),top:s,left:o}),u=It().toLowerCase();n&&(a=Ze(u)?"_blank":n),Ye(u)&&(e=e||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=It()){var e;return sn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(e||"",a),new ar(null);const l=window.open(e||"",a,h);ge(l,t,"popup-blocked");try{l.focus()}catch(d){}return new ar(l)}
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
class ur extends ln{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return fn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function hr(t){return _n(t.auth,new ur(t),t.bypassAuthState)}function lr(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),
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
async function(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Fe(t,En(r,i,e,t),n);ge(s.idToken,r,"internal-error");const o=Ve(s.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(t.uid===a,r,"user-mismatch"),vn._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&fe(r,"user-mismatch"),s}}(n,new ur(t),t.bypassAuthState)}async function dr(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),async function(t,e,n=!1){const r=await Fe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}(n,new ur(t),t.bypassAuthState)}
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
const fr=new Map;class pr extends class{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hr;case"linkViaPopup":case"linkViaRedirect":return dr;case"reauthViaPopup":case"reauthViaRedirect":return lr;default:fe(this.auth,"internal-error")}}resolve(t){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=fr.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return We("pendingRedirect",t.config.apiKey,t.name)}(e),r="true"===await mr(t)._get(n);return await mr(t)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}fr.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function mr(t){return be(t._redirectPersistence)}async function gr(t,e,n=!1){const r=un(t),i=function(t,e){return e?be(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}(r,e),s=new pr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
 */function yr(t,e,n,r,i,s){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.0.0-beta.1",eventId:i};if(e instanceof gn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof yn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return Se(t,"emulator/auth/handler")}
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
 */(t)}?${Ot(a).slice(1)}`}const vr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sr,this._completeRedirectFn=gr}async _openPopup(t,e,n,r){var i;ve(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return cr(t,yr(t,e,n,Ee(),r),`${s||""}${Math.floor(1e9*Math.random())}`);var s}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=yr(t,e,n,Ee(),r),Dn().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ve(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await rr(t),n=new Bn(t);return e.register("authEvent",(e=>{ge(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),fe(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Hn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return on()||Je()||sn()}};function wr(t=ae()){const e=re(t,"auth-exp");return e.isInitialized()?e.getImmediate():function(t,e){const n=re(t,"auth-exp");n.isInitialized()&&fe(n.getImmediate(),"already-initialized");return n.initialize({options:e})}(t,{popupRedirectResolver:vr,persistence:[qn,Nn]})}var br;new Te(3e4,6e4),
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
new Te(2e3,1e4),br="Browser",ne(new Vt("auth-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{ge(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),ge(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:br,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:an(br)},s=new cn(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(be);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ne(new Vt("auth-internal",(t=>{const e=un(t.getProvider("auth-exp").getImmediate());return new Sn(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ce("@firebase/auth-exp","0.0.900-exp.894b5da5a",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(br));
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
var Er=function(t,e){return(Er=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function _r(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Ir,Tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Sr=Sr||{},Ar=Tr||self;function kr(){}function Nr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Cr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Rr="closure_uid_"+(1e9*Math.random()>>>0),Dr=0;function Or(t,e,n){return t.call.apply(t.bind,arguments)}function Lr(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pr(t,e,n){return(Pr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Or:Lr).apply(null,arguments)}function Mr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function xr(){return Date.now()}function Ur(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Kb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Vr(){this.j=this.j,this.i=this.i}Vr.prototype.j=!1,Vr.prototype.ja=function(){var t;!this.j&&(this.j=!0,this.G(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Rr)&&t[Rr]||(t[Rr]=++Dr))},Vr.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Fr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},qr=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Br(t){return Array.prototype.concat.apply([],arguments)}function jr(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function $r(t){return/^[\s\xa0]*$/.test(t)}var zr,Kr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hr(t,e){return-1!=t.indexOf(e)}function Gr(t,e){return t<e?-1:t>e?1:0}t:{var Wr=Ar.navigator;if(Wr){var Qr=Wr.userAgent;if(Qr){zr=Qr;break t}}zr=""}function Xr(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function Yr(t){var e={};for(var n in t)e[n]=t[n];return e}var Jr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zr(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Jr.length;s++)n=Jr[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ti(t){return ti[" "](t),t}ti[" "]=kr;var ei,ni,ri=Hr(zr,"Opera"),ii=Hr(zr,"Trident")||Hr(zr,"MSIE"),si=Hr(zr,"Edge"),oi=si||ii,ai=Hr(zr,"Gecko")&&!(Hr(zr.toLowerCase(),"webkit")&&!Hr(zr,"Edge"))&&!(Hr(zr,"Trident")||Hr(zr,"MSIE"))&&!Hr(zr,"Edge"),ci=Hr(zr.toLowerCase(),"webkit")&&!Hr(zr,"Edge");function ui(){var t=Ar.document;return t?t.documentMode:void 0}t:{var hi="",li=(ni=zr,ai?/rv:([^\);]+)(\)|;)/.exec(ni):si?/Edge\/([\d\.]+)/.exec(ni):ii?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ni):ci?/WebKit\/(\S+)/.exec(ni):ri?/(?:Version)[ \/]?(\S+)/.exec(ni):void 0);if(li&&(hi=li?li[1]:""),ii){var di=ui();if(null!=di&&di>parseFloat(hi)){ei=String(di);break t}}ei=hi}var fi,pi={};function mi(t){return function(t,e){var n=pi;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(){for(var e=0,n=Kr(String(ei)).split("."),r=Kr(String(t)).split("."),i=Math.max(n.length,r.length),s=0;0==e&&s<i;s++){var o=n[s]||"",a=r[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;e=Gr(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||Gr(0==o[2].length,0==a[2].length)||Gr(o[2],a[2]),o=o[3],a=a[3]}while(0==e)}return 0<=e}))}if(Ar.document&&ii){var gi=ui();fi=gi||(parseInt(ei,10)||void 0)}else fi=void 0;var yi=fi,vi=!ii||9<=Number(yi),wi=ii&&!mi("9"),bi=function(){if(!Ar.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ar.addEventListener("test",kr,e),Ar.removeEventListener("test",kr,e)}catch(n){}return t}();function Ei(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function _i(t,e){if(Ei.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(ai){t:{try{ti(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ii[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}Ei.prototype.b=function(){this.defaultPrevented=!0},Ur(_i,Ei);var Ii={2:"touch",3:"pen",4:"mouse"};_i.prototype.b=function(){_i.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,wi)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(e){}};var Ti="closure_listenable_"+(1e6*Math.random()|0),Si=0;function Ai(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++Si,this.Y=this.Z=!1}function ki(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function Ni(t){this.src=t,this.a={},this.b=0}function Ci(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],s=Fr(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ki(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function Ri(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.Y&&s.listener==e&&s.capture==!!n&&s.ca==r)return i}return-1}Ni.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.a[s])||(t=this.a[s]=[],this.b++);var o=Ri(t,e,r,i);return-1<o?(e=t[o],n||(e.Z=!1)):((e=new Ai(e,this.src,s,!!r,i)).Z=n,t.push(e)),e};var Di="closure_lm_"+(1e6*Math.random()|0),Oi={};function Li(t,e,n,r,i){if(r&&r.once)return Mi(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Li(t,e[s],n,r,i);return null}return n=$i(n),t&&t[Ti]?t.va(e,n,Cr(r)?!!r.capture:!!r,i):Pi(t,e,n,!1,r,i)}function Pi(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Cr(i)?!!i.capture:!!i;if(o&&!vi)return null;var a=Bi(t);if(a||(t[Di]=a=new Ni(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=qi,e=vi?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n};return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bi||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vi(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Mi(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mi(t,e[s],n,r,i);return null}return n=$i(n),t&&t[Ti]?t.wa(e,n,Cr(r)?!!r.capture:!!r,i):Pi(t,e,n,!0,r,i)}function xi(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xi(t,e[s],n,r,i);else r=Cr(r)?!!r.capture:!!r,n=$i(n),t&&t[Ti]?(t=t.c,(e=String(e).toString())in t.a&&(-1<(n=Ri(s=t.a[e],n,r,i))&&(ki(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.a[e],t.b--)))):t&&(t=Bi(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Ri(e,n,r,i)),(n=-1<t?e[t]:null)&&Ui(n))}function Ui(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src;if(e&&e[Ti])Ci(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vi(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bi(e))?(Ci(n,t),0==n.b&&(n.src=null,e[Di]=null)):ki(t)}}}function Vi(t){return t in Oi?Oi[t]:Oi[t]="on"+t}function Fi(t,e){var n=t.listener,r=t.ca||t.src;return t.Z&&Ui(t),n.call(r,e)}function qi(t,e){if(t.Y)return!0;if(!vi){if(!e)t:{e=["window","event"];for(var n=Ar,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null;break t}e=n}return Fi(t,e=new _i(e,this))}return Fi(t,new _i(e,this))}function Bi(t){return(t=t[Di])instanceof Ni?t:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(t){return"function"==typeof t?t:(t[ji]||(t[ji]=function(e){return t.handleEvent(e)}),t[ji])}function zi(){Vr.call(this),this.c=new Ni(this),this.J=this,this.C=null}function Ki(t,e){var n,r=t.C;if(r)for(n=[];r;r=r.C)n.push(r);if(t=t.J,r=e.type||e,"string"==typeof e)e=new Ei(e,t);else if(e instanceof Ei)e.target=e.target||t;else{var i=e;Zr(e=new Ei(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.a=n[s];i=Hi(o,r,!0,e)&&i}if(i=Hi(o=e.a=t,r,!0,e)&&i,i=Hi(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Hi(o=e.a=n[s],r,!1,e)&&i}function Hi(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.Y&&o.capture==n){var a=o.listener,c=o.ca||o.src;o.Z&&Ci(t.c,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Ur(zi,Vr),zi.prototype[Ti]=!0,(Ir=zi.prototype).addEventListener=function(t,e,n,r){Li(this,t,e,n,r)},Ir.removeEventListener=function(t,e,n,r){xi(this,t,e,n,r)},Ir.G=function(){if(zi.X.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)ki(n[r]);delete e.a[t],e.b--}}this.C=null},Ir.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},Ir.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var Gi=Ar.JSON.stringify;function Wi(){this.b=this.a=null}var Qi,Xi=new(function(){function t(t,e){this.c=t,this.f=e,this.b=0,this.a=null}return t.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new Ji}),(function(t){t.reset()}));function Yi(){var t=ns,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Ji(){this.next=this.b=this.a=null}function Zi(t){Ar.setTimeout((function(){throw t}),0)}function ts(t,e){Qi||function(){var t=Ar.Promise.resolve(void 0);Qi=function(){t.then(rs)}}(),es||(Qi(),es=!0),ns.add(t,e)}Wi.prototype.add=function(t,e){var n=Xi.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Ji.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Ji.prototype.reset=function(){this.next=this.b=this.a=null};var es=!1,ns=new Wi;function rs(){for(var t;t=Yi();){try{t.a.call(t.b)}catch(n){Zi(n)}var e=Xi;e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}es=!1}function is(t,e){zi.call(this),this.b=t||1,this.a=e||Ar,this.f=Pr(this.Za,this),this.g=xr()}function ss(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function os(t,e,n){if("function"==typeof t)n&&(t=Pr(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pr(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ar.setTimeout(t,e||0)}function as(t){t.a=os((function(){t.a=null,t.c&&(t.c=!1,as(t))}),t.h);var e=t.b;t.b=null,t.g.apply(null,e)}Ur(is,zi),(Ir=is.prototype).aa=!1,Ir.M=null,Ir.Za=function(){if(this.aa){var t=xr()-this.g;0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),Ki(this,"tick"),this.aa&&(ss(this),this.start()))}},Ir.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=xr())},Ir.G=function(){is.X.G.call(this),ss(this),delete this.a};var cs=function(t){function e(e,n){var r=t.call(this)||this;return r.g=e,r.h=n,r.b=null,r.c=!1,r.a=null,r}return function(t,e){function n(){this.constructor=t}Er(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:as(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(Ar.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(Vr);function us(t){Vr.call(this),this.b=t,this.a={}}Ur(us,Vr);var hs=[];function ls(t,e,n,r){Array.isArray(n)||(n&&(hs[0]=n.toString()),n=hs);for(var i=0;i<n.length;i++){var s=Li(e,n[i],r||t.handleEvent,!1,t.b||t);if(!s)break;t.a[s.key]=s}}function ds(t){Xr(t.a,(function(t,e){this.a.hasOwnProperty(e)&&Ui(t)}),t),t.a={}}function fs(){this.a=!0}function ps(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Gi(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}us.prototype.G=function(){us.X.G.call(this),ds(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},fs.prototype.info=function(){};var ms={},gs=null;function ys(){return gs=gs||new zi}function vs(t){Ei.call(this,ms.Fa,t)}function ws(t){var e=ys();Ki(e,new vs(e,t))}function bs(t,e){Ei.call(this,ms.STAT_EVENT,t),this.stat=e}function Es(t){var e=ys();Ki(e,new bs(e,t))}function _s(t){Ei.call(this,ms.Ga,t)}function Is(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ar.setTimeout((function(){t()}),e)}ms.Fa="serverreachability",Ur(vs,Ei),ms.STAT_EVENT="statevent",Ur(bs,Ei),ms.Ga="timingevent",Ur(_s,Ei);var Ts={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},Ss={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function As(){}function ks(t){var e;return(e=t.a)||(e=t.a={}),e}function Ns(){}As.prototype.a=null;var Cs,Rs={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function Ds(){Ei.call(this,"d")}function Os(){Ei.call(this,"c")}function Ls(){}function Ps(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new us(this),this.P=Ms,t=oi?125:void 0,this.R=new is(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}Ur(Ds,Ei),Ur(Os,Ei),Ur(Ls,As),Cs=new Ls;var Ms=45e3,xs={},Us={};function Vs(t,e,n){t.H=1,t.i=oo(to(e)),t.j=n,t.I=!0,Fs(t,null)}function Fs(t,e){t.u=xr(),js(t),t.l=to(t.i);var n=t.l,r=t.S;Array.isArray(r)||(r=[String(r)]),bo(n.b,"t",r),t.D=0,t.a=pa(t.g,t.g.C?e:null),0<t.O&&(t.F=new cs(Pr(t.Ca,t,t.a),t.O)),ls(t.J,t.a,"readystatechange",t.Xa),e=t.B?Yr(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),ws(1),function(t,e,n,r,i,s){t.info((function(){if(t.a)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.c,t.m,t.l,t.f,t.S,t.j)}function qs(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=Bs(t,n);if(i==Us){4==e&&(t.h=4,Es(14),r=!1),ps(t.c,t.f,null,"[Incomplete Response]");break}if(i==xs){t.h=4,Es(15),ps(t.c,t.f,n,"[Invalid Chunk]"),r=!1;break}ps(t.c,t.f,i,null),Gs(t,i)}4==e&&0==n.length&&(t.h=1,Es(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.V&&(t.V=!0,(e=t.g).a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),oa(e),e.F=!0,Es(11))):(ps(t.c,t.f,n,"[Invalid Chunked Response]"),Hs(t),Ks(t))}function Bs(t,e){var n=t.D,r=e.indexOf("\n",n);return-1==r?Us:(n=Number(e.substring(n,r)),isNaN(n)?xs:(r+=1)+n>e.length?Us:(e=e.substr(r,n),t.D=r+n,e))}function js(t){t.T=xr()+t.P,$s(t,t.P)}function $s(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=Is(Pr(t.Va,t),e)}function zs(t){t.o&&(Ar.clearTimeout(t.o),t.o=null)}function Ks(t){0==t.g.v||t.A||ua(t.g,t)}function Hs(t){zs(t);var e=t.F;e&&"function"==typeof e.ja&&e.ja(),t.F=null,ss(t.R),ds(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Gs(t,e){try{var n=t.g;if(0!=n.v&&(n.a==t||ko(n.b,t)))if(n.I=t.N,!t.C&&ko(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t;ca(n),Yo(n)}sa(n),Es(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=Is(Pr(n.Sa,n),6e3));if(1>=Ao(n.b)&&n.ea){try{n.ea()}catch(g){}n.ea=void 0}}else la(n,11)}else if((t.C||n.a==t)&&ca(n),!$r(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2];var s=i[3];null!=s&&(n.ha=s,n.c.info("VER="+n.ha));var o=i[4];null!=o&&(n.pa=o,n.c.info("SVER="+n.pa));var a=i[5];if(null!=a&&"number"==typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var u=t.a;if(u){var h=u.a?u.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(h){var l=c.b;!l.a&&(Hr(h,"spdy")||Hr(h,"quic")||Hr(h,"h2"))&&(l.f=l.g,l.a=new Set,l.b&&(No(l,l.b),l.b=null))}if(c.A){var d=u.a?u.a.getResponseHeader("X-HTTP-Session-Id"):null;d&&(c.na=d,so(c.B,c.A,d))}}n.v=3,n.f&&n.f.ta(),n.U&&(n.N=xr()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"));var f=t;if((c=n).la=fa(c,c.C?c.ga:null,c.fa),f.C){Co(c.b,f);var p=f,m=c.D;m&&p.setTimeout(m),p.o&&(zs(p),js(p)),c.a=f}else ia(c);0<n.g.length&&ta(n)}else"stop"!=i[0]&&"close"!=i[0]||la(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?la(n,7):Xo(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0);ws(4)}catch(g){}}function Ws(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Nr(t)||"string"==typeof t)qr(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(Nr(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"==typeof t)return t.split("");if(Nr(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Qs(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Qs)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Xs(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];Ys(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)Ys(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function Ys(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ir=Ps.prototype).setTimeout=function(t){this.P=t},Ir.Xa=function(t){t=t.target;var e=this.F;e&&3==Ho(t)?e.f():this.Ca(t)},Ir.Ca=function(t){try{if(t==this.a)t:{var e=Ho(this.a),n=this.a.ua(),r=this.a.W();if(!(3>e||3==e&&!oi&&!this.a.$())){this.A||4!=e||7==n||ws(8==n||0>=r?3:2),zs(this);var i=this.a.W();this.N=i;var s=this.a.$();if(this.b=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.c,this.m,this.l,this.f,this.S,e,i),this.b){if(this.U&&!this.C){e:{if(this.a){var o,a=this.a;if((o=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$r(o)){var c=o;break e}}c=null}if(!c){this.b=!1,this.h=3,Es(12),Hs(this),Ks(this);break t}ps(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Gs(this,c)}this.I?(qs(this,e,s),oi&&this.b&&3==e&&(ls(this.J,this.R,"tick",this.Wa),this.R.start())):(ps(this.c,this.f,s,null),Gs(this,s)),4==e&&Hs(this),this.b&&!this.A&&(4==e?ua(this.g,this):(this.b=!1,js(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.h=3,Es(12)):(this.h=0,Es(13)),Hs(this),Ks(this)}}}catch(u){}},Ir.Wa=function(){if(this.a){var t=Ho(this.a),e=this.a.$();this.D<e.length&&(zs(this),qs(this,t,e),this.b&&4!=t&&js(this))}},Ir.cancel=function(){this.A=!0,Hs(this)},Ir.Va=function(){this.o=null;var t=xr();0<=t-this.T?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.c,this.l),2!=this.H&&(ws(3),Es(17)),Hs(this),this.h=2,Ks(this)):$s(this,this.T-t)},(Ir=Qs.prototype).K=function(){Xs(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},Ir.L=function(){return Xs(this),this.a.concat()},Ir.get=function(t,e){return Ys(this.b,t)?this.b[t]:e},Ir.set=function(t,e){Ys(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},Ir.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Js=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Zs(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof Zs){this.a=void 0!==e?e:t.a,eo(this,t.f),this.j=t.j,no(this,t.c),ro(this,t.h),this.g=t.g,e=t.b;var n=new go;n.c=e.c,e.a&&(n.a=new Qs(e.a),n.b=e.b),io(this,n),this.i=t.i}else t&&(n=String(t).match(Js))?(this.a=!!e,eo(this,n[1]||"",!0),this.j=ao(n[2]||""),no(this,n[3]||"",!0),ro(this,n[4]),this.g=ao(n[5]||"",!0),io(this,n[6]||"",!0),this.i=ao(n[7]||"")):(this.a=!!e,this.b=new go(null,this.a))}function to(t){return new Zs(t)}function eo(t,e,n){t.f=n?ao(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function no(t,e,n){t.c=n?ao(e,!0):e}function ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.h=e}else t.h=null}function io(t,e,n){e instanceof go?(t.b=e,function(t,e){e&&!t.f&&(yo(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vo(this,e),bo(this,n,t))}),t)),t.f=e}(t.b,t.a)):(n||(e=co(e,po)),t.b=new go(e,t.a))}function so(t,e,n){t.b.set(e,n)}function oo(t){return so(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^xr()).toString(36)),t}function ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function co(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,uo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Zs.prototype.toString=function(){var t=[],e=this.f;e&&t.push(co(e,ho,!0),":");var n=this.c;return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(co(e,ho,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(co(n,"/"==n.charAt(0)?fo:lo,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",co(n,mo)),t.join("")};var ho=/[#\/\?@]/g,lo=/[#\?:]/g,fo=/[#\?]/g,po=/[#\?@]/g,mo=/#/g;function go(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function yo(t){t.a||(t.a=new Qs,t.b=0,t.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vo(t,e){yo(t),e=Eo(t,e),Ys(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Ys((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&Xs(t)))}function wo(t,e){return yo(t),e=Eo(t,e),Ys(t.a.b,e)}function bo(t,e,n){vo(t,e),0<n.length&&(t.c=null,t.a.set(Eo(t,e),jr(n)),t.b+=n.length)}function Eo(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(Ir=go.prototype).add=function(t,e){yo(this),this.c=null,t=Eo(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},Ir.forEach=function(t,e){yo(this),this.a.forEach((function(n,r){qr(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Ir.L=function(){yo(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},Ir.K=function(t){yo(this);var e=[];if("string"==typeof t)wo(this,t)&&(e=Br(e,this.a.get(Eo(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=Br(e,t[n])}return e},Ir.set=function(t,e){return yo(this),this.c=null,wo(this,t=Eo(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},Ir.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},Ir.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.K(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.c=t.join("&")};var _o=function(t,e){this.b=t,this.a=e};function Io(t){this.g=t||To,Ar.PerformanceNavigationTiming?t=0<(t=Ar.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ar.ia&&Ar.ia.ya&&Ar.ia.ya()&&Ar.ia.ya().Lb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var To=10;function So(t){return!!t.b||!!t.a&&t.a.size>=t.f}function Ao(t){return t.b?1:t.a?t.a.size:0}function ko(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function No(t,e){t.a?t.a.add(e):t.b=e}function Co(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function Ro(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null!=t.a&&0!==t.a.size){var r=t.c;try{for(var i=_r(t.a.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.s)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return jr(t.c)}function Do(){}function Oo(){this.a=new Do}function Lo(t,e,n){var r=n||"";try{Ws(t,(function(t,n){var i=t;Cr(t)&&(i=Gi(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Po(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}Io.prototype.cancel=function(){var t,e;if(this.c=Ro(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=_r(this.a.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},Do.prototype.stringify=function(t){return Ar.JSON.stringify(t,void 0)},Do.prototype.parse=function(t){return Ar.JSON.parse(t,void 0)};var Mo=Ar.JSON.parse;function xo(t){zi.call(this),this.headers=new Qs,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=Uo,this.D=this.F=!1}Ur(xo,zi);var Uo="",Vo=/^https?$/i,Fo=["POST","PUT"];function qo(t){return"content-type"==t.toLowerCase()}function Bo(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,jo(t),zo(t)}function jo(t){t.u||(t.u=!0,Ki(t,"complete"),Ki(t,"error"))}function $o(t){if(t.b&&void 0!==Sr&&(!t.s[1]||4!=Ho(t)||2!=t.W()))if(t.l&&4==Ho(t))os(t.za,0,t);else if(Ki(t,"readystatechange"),4==Ho(t)){t.b=!1;try{var e,n=t.W();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.B).match(Js)[1]||null;if(!s&&Ar.self&&Ar.self.location){var o=Ar.self.location.protocol;s=o.substr(0,o.length-1)}i=!Vo.test(s?s.toLowerCase():"")}e=i}if(e)Ki(t,"complete"),Ki(t,"success");else{t.h=6;try{var a=2<Ho(t)?t.a.statusText:""}catch(c){a=""}t.f=a+" ["+t.W()+"]",jo(t)}}finally{zo(t)}}}function zo(t,e){if(t.a){Ko(t);var n=t.a,r=t.s[0]?kr:null;t.a=null,t.s=null,e||Ki(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Ko(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(Ar.clearTimeout(t.m),t.m=null)}function Ho(t){return t.a?t.a.readyState:0}function Go(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return Xr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):so(t,e,n))}function Wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qo(t){this.pa=0,this.g=[],this.c=new fs,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=Wo("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=Wo("baseRetryDelayMs",5e3,t),this.Ra=Wo("retryDelaySeedMs",1e4,t),this.Ma=Wo("forwardChannelMaxRetries",2,t),this.ma=Wo("forwardChannelRequestTimeoutMs",2e4,t),this.Na=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new Io(t&&t.concurrentRequestLimit),this.ka=new Oo,this.da=t&&t.fastHandshake||!1,this.Ia=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&t&&t.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function Xo(t){if(Jo(t),3==t.v){var e=t.R++,n=to(t.B);so(n,"SID",t.J),so(n,"RID",e),so(n,"TYPE","terminate"),na(t,n),(e=new Ps(t,t.c,e,void 0)).H=2,e.i=oo(to(n)),n=!1,Ar.navigator&&Ar.navigator.sendBeacon&&(n=Ar.navigator.sendBeacon(e.i.toString(),"")),!n&&Ar.Image&&((new Image).src=e.i,n=!0),n||(e.a=pa(e.g,null),e.a.ba(e.i)),e.u=xr(),js(e)}da(t)}function Yo(t){t.a&&(oa(t),t.a.cancel(),t.a=null)}function Jo(t){Yo(t),t.j&&(Ar.clearTimeout(t.j),t.j=null),ca(t),t.b.cancel(),t.h&&("number"==typeof t.h&&Ar.clearTimeout(t.h),t.h=null)}function Zo(t,e){t.g.push(new _o(t.Oa++,e)),3==t.v&&ta(t)}function ta(t){So(t.b)||t.h||(t.h=!0,ts(t.Ba,t),t.u=0)}function ea(t,e){var n;n=e?e.f:t.R++;var r=to(t.B);so(r,"SID",t.J),so(r,"RID",n),so(r,"AID",t.P),na(t,r),t.i&&t.l&&Go(r,t.i,t.l),n=new Ps(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=ra(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),No(t.b,n),Vs(n,r,e)}function na(t,e){t.f&&Ws({},(function(t,n){so(e,n,t)}))}function ra(t,e,n){n=Math.min(t.g.length,n);var r=t.f?Pr(t.f.Ja,t.f,t):null;t:for(var i=t.g,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].b,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].b,h=i[c].a;if(0>(u-=s))s=Math.max(0,i[c].b-100),a=!1;else try{Lo(h,o,"req"+u+"_")}catch(l){r&&r(h)}}if(a){r=o.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function ia(t){t.a||t.j||(t.T=1,ts(t.Aa,t),t.o=0)}function sa(t){return!(t.a||t.j||3<=t.o)&&(t.T++,t.j=Is(Pr(t.Aa,t),ha(t,t.o)),t.o++,!0)}function oa(t){null!=t.s&&(Ar.clearTimeout(t.s),t.s=null)}function aa(t){t.a=new Ps(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=to(t.la);so(e,"RID","rpc"),so(e,"SID",t.J),so(e,"CI",t.H?"0":"1"),so(e,"AID",t.P),na(t,e),so(e,"TYPE","xmlhttp"),t.i&&t.l&&Go(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ga,n.H=1,n.i=oo(to(e)),n.j=null,n.I=!0,Fs(n,t)}function ca(t){null!=t.m&&(Ar.clearTimeout(t.m),t.m=null)}function ua(t,e){var n=null;if(t.a==e){ca(t),oa(t),t.a=null;var r=2}else{if(!ko(t.b,e))return;n=e.s,Co(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=xr()-e.u;var i=t.u;Ki(r=ys(),new _s(r,n,e,i)),ta(t)}else ia(t);else if(3==(i=e.h)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Ao(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.g=e.s.concat(t.g),0):1==t.v||2==t.v||t.u>=(t.La?0:t.Ma)||(t.h=Is(Pr(t.Ba,t,e),ha(t,t.u)),t.u++,0)))}(t,e)||2==r&&sa(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:la(t,5);break;case 4:la(t,10);break;case 3:la(t,6);break;default:la(t,2)}}function ha(t,e){var n=t.Ha+Math.floor(Math.random()*t.Ra);return t.f||(n*=2),n*e}function la(t,e){if(t.c.info("Error code "+e),2==e){var n=null;t.f&&(n=null);var r=Pr(t.Ya,t);n||(n=new Zs("//www.google.com/images/cleardot.gif"),Ar.location&&"http"==Ar.location.protocol||eo(n,"https"),oo(n)),function(t,e){var n=new fs;if(Ar.Image){var r=new Image;r.onload=Mr(Po,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mr(Po,n,r,"TestLoadImage: error",!1,e),r.onabort=Mr(Po,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mr(Po,n,r,"TestLoadImage: timeout",!1,e),Ar.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Es(2);t.v=0,t.f&&t.f.ra(e),da(t),Jo(t)}function da(t){t.v=0,t.I=-1,t.f&&(0==Ro(t.b).length&&0==t.g.length||(t.b.c.length=0,jr(t.g),t.g.length=0),t.f.qa())}function fa(t,e,n){var r=function(t){return t instanceof Zs?to(t):new Zs(t,void 0)}(n);if(""!=r.c)e&&no(r,e+"."+r.c),ro(r,r.h);else{var i=Ar.location;r=function(t,e,n,r){var i=new Zs(null,void 0);return t&&eo(i,t),e&&no(i,e),n&&ro(i,n),r&&(i.g=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.V&&Xr(t.V,(function(t,e){so(r,e,t)})),e=t.A,n=t.na,e&&n&&so(r,e,n),so(r,"VER",t.ha),na(t,r),r}function pa(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new xo(t.Na)).F=t.C,e}function ma(){}function ga(){if(ii&&!(10<=Number(yi)))throw Error("Environmental error: no available transport.")}function ya(t,e){zi.call(this),this.a=new Qo(e),this.o=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!$r(t)&&(this.a.i=t),this.m=e&&e.supportsCrossDomainXhr||!1,this.l=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$r(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&(e in(t=this.b)&&delete t[e])),this.f=new ba(this)}function va(t){Ds.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function wa(){Os.call(this),this.status=1}function ba(t){this.a=t}(Ir=xo.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t);e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?ks(this.H):ks(Cs),this.a.onreadystatechange=Pr(this.za,this);try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(s){return void Bo(this,s)}t=n||"";var i=new Qs(this.headers);r&&Ws(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=qo,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.L()),n=Ar.FormData&&t instanceof Ar.FormData,!(0<=Fr(Fo,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{Ko(this),0<this.o&&((this.D=function(t){return ii&&mi(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=Pr(this.xa,this)):this.m=os(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(s){Bo(this,s)}},Ir.xa=function(){void 0!==Sr&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,Ki(this,"timeout"),this.abort(8))},Ir.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,Ki(this,"complete"),Ki(this,"abort"),zo(this))},Ir.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),zo(this,!0)),xo.X.G.call(this)},Ir.za=function(){this.j||(this.A||this.l||this.g?$o(this):this.Ua())},Ir.Ua=function(){$o(this)},Ir.W=function(){try{return 2<Ho(this)?this.a.status:-1}catch(ni){return-1}},Ir.$=function(){try{return this.a?this.a.responseText:""}catch(ni){return""}},Ir.Pa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mo(e)}},Ir.ua=function(){return this.h},Ir.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(Ir=Qo.prototype).ha=8,Ir.v=1,Ir.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new Ps(this,this.c,t,void 0),r=this.l;if(this.O&&(r?Zr(r=Yr(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var s=this.g[i];if(void 0===(s="__data__"in s.a&&"string"==typeof(s=s.a.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=ra(this,n,e),so(i=to(this.B),"RID",t),so(i,"CVER",22),this.A&&so(i,"X-HTTP-Session-Id",this.A),na(this,i),this.i&&r&&Go(i,this.i,r),No(this.b,n),this.Ia&&so(i,"TYPE","init"),this.da?(so(i,"$req",e),so(i,"SID","null"),n.U=!0,Vs(n,i,null)):Vs(n,i,e),this.v=2}}else 3==this.v&&(t?ea(this,t):0==this.g.length||So(this.b)||ea(this))},Ir.Aa=function(){if(this.j=null,aa(this),this.U&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N;this.c.info("BP detection timer enabled: "+t),this.s=Is(Pr(this.Ta,this),t)}},Ir.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,Es(10),Yo(this),aa(this))},Ir.Sa=function(){null!=this.m&&(this.m=null,Yo(this),sa(this),Es(19))},Ir.Ya=function(t){t?(this.c.info("Successfully pinged google.com"),Es(2)):(this.c.info("Failed to ping google.com"),Es(1))},(Ir=ma.prototype).ta=function(){},Ir.sa=function(){},Ir.ra=function(){},Ir.qa=function(){},Ir.Ja=function(){},ga.prototype.a=function(t,e){return new ya(t,e)},Ur(ya,zi),ya.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var t=this.a,e=this.o,n=this.b||void 0;Es(0),t.fa=e,t.V=n||{},t.H=t.S,t.B=fa(t,null,t.fa),ta(t)},ya.prototype.close=function(){Xo(this.a)},ya.prototype.h=function(t){if("string"==typeof t){var e={};e.__data__=t,Zo(this.a,e)}else this.l?((e={}).__data__=Gi(t),Zo(this.a,e)):Zo(this.a,t)},ya.prototype.G=function(){this.a.f=null,delete this.f,Xo(this.a),delete this.a,ya.X.G.call(this)},Ur(va,Ds),Ur(wa,Os),Ur(ba,ma),ba.prototype.ta=function(){Ki(this.a,"a")},ba.prototype.sa=function(t){Ki(this.a,new va(t))},ba.prototype.ra=function(t){Ki(this.a,new wa(t))},ba.prototype.qa=function(){Ki(this.a,"b")},ga.prototype.createWebChannel=ga.prototype.a,ya.prototype.send=ya.prototype.h,ya.prototype.open=ya.prototype.g,ya.prototype.close=ya.prototype.close,Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Ss.COMPLETE="complete",Ns.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",zi.prototype.listen=zi.prototype.va,xo.prototype.listenOnce=xo.prototype.wa,xo.prototype.getLastError=xo.prototype.Qa,xo.prototype.getLastErrorCode=xo.prototype.ua,xo.prototype.getStatus=xo.prototype.W,xo.prototype.getResponseJson=xo.prototype.Pa,xo.prototype.getResponseText=xo.prototype.$,xo.prototype.send=xo.prototype.ba;var Ea=Ts,_a=Ss,Ia=ms,Ta=10,Sa=11,Aa=Ns,ka=xo;
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
class Na{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.t(t),this.i=t=>e.writeSequenceNumber(t))}t(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.i&&this.i(t),t}}Na.o=-1;
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
const Ca={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ra extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */const Da=new Qt("@firebase/firestore");function Oa(){return Da.logLevel}function La(t,...e){if(Da.logLevel<=Bt.DEBUG){const n=e.map(xa);Da.debug(`Firestore (8.4.1): ${t}`,...n)}}function Pa(t,...e){if(Da.logLevel<=Bt.ERROR){const n=e.map(xa);Da.error(`Firestore (8.4.1): ${t}`,...n)}}function Ma(t,...e){if(Da.logLevel<=Bt.WARN){const n=e.map(xa);Da.warn(`Firestore (8.4.1): ${t}`,...n)}}function xa(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
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
  */var e}
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
 */function Ua(t="Unexpected state"){const e="FIRESTORE (8.4.1) INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function Va(t,e){t||Ua()}function Fa(t,e){return t}
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
 */function qa(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Ba{static u(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=qa(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ja(t,e){return t<e?-1:t>e?1:0}function $a(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
 */class za{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ra(Ca.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ra(Ca.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ra(Ca.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ra(Ca.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return za.fromMillis(Date.now())}static fromDate(t){return za.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new za(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ja(this.nanoseconds,t.nanoseconds):ja(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ka{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ka(t)}static min(){return new Ka(new za(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Ha(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ga(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Qa{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ua(),void 0===n?n=t.length-e:n>t.length-e&&Ua(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Qa.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qa?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Xa extends Qa{construct(t,e,n){return new Xa(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ra(Ca.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Xa(e)}static emptyPath(){return new Xa([])}}const Ya=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ja extends Qa{construct(t,e,n){return new Ja(t,e,n)}static isValidIdentifier(t){return Ya.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ja.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ja(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ra(Ca.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Ra(Ca.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ra(Ca.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Ra(Ca.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ja(e)}static emptyPath(){return new Ja([])}}
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
 */class Za{constructor(t){this.fields=t,t.sort(Ja.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return $a(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class tc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new tc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new tc(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ja(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tc.EMPTY_BYTE_STRING=new tc("");const ec=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nc(t){if(Va(!!t),"string"==typeof t){let e=0;const n=ec.exec(t);if(Va(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rc(t.seconds),nanos:rc(t.nanos)}}function rc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ic(t){return"string"==typeof t?tc.fromBase64String(t):tc.fromUint8Array(t)}
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
 */function sc(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function oc(t){const e=t.mapValue.fields.__previous_value__;return sc(e)?oc(e):e}function ac(t){const e=nc(t.mapValue.fields.__local_write_time__.timestampValue);return new za(e.seconds,e.nanos)}
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
 */function cc(t){return null==t}function uc(t){return 0===t&&1/t==-1/0}
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
class hc{constructor(t){this.path=t}static fromPath(t){return new hc(Xa.fromString(t))}static fromName(t){return new hc(Xa.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Xa.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Xa.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new hc(new Xa(t.slice()))}}
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
 */function lc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sc(t)?4:10:Ua()}function dc(t,e){const n=lc(t);if(n!==lc(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ac(t).isEqual(ac(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=nc(t.timestampValue),r=nc(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,ic(t.bytesValue).isEqual(ic(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return rc(t.geoPointValue.latitude)===rc(e.geoPointValue.latitude)&&rc(t.geoPointValue.longitude)===rc(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return rc(t.integerValue)===rc(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=rc(t.doubleValue),r=rc(e.doubleValue);return n===r?uc(n)===uc(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return $a(t.arrayValue.values||[],e.arrayValue.values||[],dc);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ha(n)!==Ha(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!dc(n[i],r[i])))return!1;return!0}(t,e);default:return Ua()}var r}function fc(t,e){return void 0!==(t.values||[]).find((t=>dc(t,e)))}function pc(t,e){const n=lc(t),r=lc(e);if(n!==r)return ja(n,r);switch(n){case 0:return 0;case 1:return ja(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=rc(t.integerValue||t.doubleValue),r=rc(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return mc(t.timestampValue,e.timestampValue);case 4:return mc(ac(t),ac(e));case 5:return ja(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ic(t),r=ic(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=ja(n[i],r[i]);if(0!==t)return t}return ja(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ja(rc(t.latitude),rc(e.latitude));return 0!==n?n:ja(rc(t.longitude),rc(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=pc(n[i],r[i]);if(t)return t}return ja(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=ja(r[o],s[o]);if(0!==t)return t;const e=pc(n[r[o]],i[s[o]]);if(0!==e)return e}return ja(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ua()}}function mc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ja(t,e);const n=nc(t),r=nc(e),i=ja(n.seconds,r.seconds);return 0!==i?i:ja(n.nanos,r.nanos)}function gc(t){return yc(t)}function yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=nc(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ic(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,hc.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=yc(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${yc(t.fields[i])}`;return n+"}"}(t.mapValue):Ua();var e,n}function vc(t){return!!t&&"integerValue"in t}function wc(t){return!!t&&"arrayValue"in t}function bc(t){return!!t&&"nullValue"in t}function Ec(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _c(t){return!!t&&"mapValue"in t}
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
 */class Ic{constructor(t){this.overlayMap=new Map,this.partialValue=t}static empty(){return new Ic({mapValue:{}})}field(t){return Ic.extractNestedValue(this.buildProto(),t)}toProto(){return this.field(Ja.emptyPath())}set(t,e){this.setOverlay(t,e)}setAll(t){t.forEach(((t,e)=>{t?this.set(e,t):this.delete(e)}))}delete(t){this.setOverlay(t,null)}isEqual(t){return dc(this.buildProto(),t.buildProto())}setOverlay(t,e){let n=this.overlayMap;for(let r=0;r<t.length-1;++r){const e=t.get(r);let i=n.get(e);i instanceof Map?n=i:i&&10===lc(i)?(i=new Map(Object.entries(i.mapValue.fields||{})),n.set(e,i),n=i):(i=new Map,n.set(e,i),n=i)}n.set(t.lastSegment(),e)}applyOverlay(t,e){let n=!1;const r=Ic.extractNestedValue(this.partialValue,t),i=_c(r)?Object.assign({},r.mapValue.fields):{};return e.forEach(((e,r)=>{if(e instanceof Map){const s=this.applyOverlay(t.child(r),e);null!=s&&(i[r]=s,n=!0)}else null!==e?(i[r]=e,n=!0):i.hasOwnProperty(r)&&(delete i[r],n=!0)})),n?{mapValue:{fields:i}}:null}buildProto(){const t=this.applyOverlay(Ja.emptyPath(),this.overlayMap);return null!=t&&(this.partialValue=t,this.overlayMap.clear()),this.partialValue}static extractNestedValue(t,e){if(e.isEmpty())return t;{let n=t;for(let t=0;t<e.length-1;++t){if(!n.mapValue.fields)return null;if(n=n.mapValue.fields[e.get(t)],!_c(n))return null}return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}clone(){return new Ic(this.buildProto())}}function Tc(t){const e=[];return Ga(t.fields||{},((t,n)=>{const r=new Ja([t]);if(_c(n)){const t=Tc(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Za(e)
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
 */}class Sc{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Sc(t,0,Ka.min(),Ic.empty(),0)}static newFoundDocument(t,e,n){return new Sc(t,1,e,n,0)}static newNoDocument(t,e){return new Sc(t,2,e,Ic.empty(),0)}static newUnknownDocument(t,e){return new Sc(t,3,e,Ic.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ic.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ic.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Sc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Sc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ac{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function kc(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ac(t,e,n,r,i,s,o)}function Nc(t){const e=Fa(t);if(null===e.h){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+gc(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),cc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Bc(e.startAt)),e.endAt&&(t+="|ub:",t+=Bc(e.endAt)),e.h=t}return e.h}function Cc(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!$c(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!dc(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kc(t.startAt,e.startAt)&&Kc(t.endAt,e.endAt)}function Rc(t){return hc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Dc extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.l(t,e,n):new Oc(t,e,n):"array-contains"===e?new xc(t,n):"in"===e?new Uc(t,n):"not-in"===e?new Vc(t,n):"array-contains-any"===e?new Fc(t,n):new Dc(t,e,n)}static l(t,e,n){return"in"===e?new Lc(t,n):new Pc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.m(pc(e,this.value)):null!==e&&lc(this.value)===lc(e)&&this.m(pc(e,this.value))}m(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ua()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Oc extends Dc{constructor(t,e,n){super(t,e,n),this.key=hc.fromName(n.referenceValue)}matches(t){const e=hc.comparator(t.key,this.key);return this.m(e)}}class Lc extends Dc{constructor(t,e){super(t,"in",e),this.keys=Mc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Pc extends Dc{constructor(t,e){super(t,"not-in",e),this.keys=Mc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Mc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>hc.fromName(t.referenceValue)))}class xc extends Dc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wc(e)&&fc(e.arrayValue,this.value)}}class Uc extends Dc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&fc(this.value.arrayValue,e)}}class Vc extends Dc{constructor(t,e){super(t,"not-in",e)}matches(t){if(fc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!fc(this.value.arrayValue,e)}}class Fc extends Dc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>fc(this.value.arrayValue,t)))}}class qc{constructor(t,e){this.position=t,this.before=e}}function Bc(t){return`${t.before?"b":"a"}:${t.position.map((t=>gc(t))).join(",")}`}class jc{constructor(t,e="asc"){this.field=t,this.dir=e}}function $c(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function zc(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?hc.comparator(hc.fromName(o.referenceValue),n.key):pc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Kc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dc(t.position[n],e.position[n]))return!1;return!0}
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
 */class Hc{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function Gc(t){return new Hc(t)}function Wc(t){return!cc(t.limit)&&"F"===t.limitType}function Qc(t){return!cc(t.limit)&&"L"===t.limitType}function Xc(t){const e=Fa(t);if(null===e.p){e.p=[];const t=function(t){for(const e of t.filters)if(e.g())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.p.push(new jc(t)),e.p.push(new jc(Ja.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.p.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.p.push(new jc(Ja.keyField(),t))}}}return e.p}function Yc(t){const e=Fa(t);if(!e.T)if("F"===e.limitType)e.T=kc(e.path,e.collectionGroup,Xc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Xc(e)){const e="desc"===i.dir?"asc":"desc";t.push(new jc(i.field,e))}const n=e.endAt?new qc(e.endAt.position,!e.endAt.before):null,r=e.startAt?new qc(e.startAt.position,!e.startAt.before):null;e.T=kc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.T}function Jc(t,e){return Cc(Yc(t),Yc(e))&&t.limitType===e.limitType}function Zc(t){return`${Nc(Yc(t))}|lt:${t.limitType}`}function tu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${gc(e.value)}`;var e})).join(", ")}]`),cc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bc(t.startAt)),t.endAt&&(e+=", endAt: "+Bc(t.endAt)),`Target(${e})`}(Yc(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):hc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!zc(n.startAt,Xc(n),r)||n.endAt&&zc(n.endAt,Xc(n),r)));var n,r}function nu(t){return(e,n)=>{let r=!1;for(const i of Xc(t)){const t=ru(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ru(t,e,n){const r=t.field.isKeyField()?hc.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?pc(r,i):Ua()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ua()}}
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
 */function iu(t,e){if(t.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function su(t){return{integerValue:""+t}}function ou(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?su(e):iu(t,e)}
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
 */class au{constructor(){this._=void 0}}function cu(t,e,n){return t instanceof lu?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof du?fu(t,e):t instanceof pu?mu(t,e):function(t,e){const n=hu(t,e),r=yu(n)+yu(t.A);return vc(n)&&vc(t.A)?su(r):iu(t.R,r)}(t,e)}function uu(t,e,n){return t instanceof du?fu(t,e):t instanceof pu?mu(t,e):n}function hu(t,e){return t instanceof gu?vc(r=e)||(n=r)&&"doubleValue"in n?e:{integerValue:0}:null;var n,r}class lu extends au{}class du extends au{constructor(t){super(),this.elements=t}}function fu(t,e){const n=vu(e);for(const r of t.elements)n.some((t=>dc(t,r)))||n.push(r);return{arrayValue:{values:n}}}class pu extends au{constructor(t){super(),this.elements=t}}function mu(t,e){let n=vu(e);for(const r of t.elements)n=n.filter((t=>!dc(t,r)));return{arrayValue:{values:n}}}class gu extends au{constructor(t,e){super(),this.R=t,this.A=e}}function yu(t){return rc(t.integerValue||t.doubleValue)}function vu(t){return wc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class wu{constructor(t,e){this.version=t,this.transformResults=e}}class bu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bu}static exists(t){return new bu(void 0,t)}static updateTime(t){return new bu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Eu(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _u{}function Iu(t,e,n){var r;t instanceof Nu?function(t,e,n){const r=t.value.clone(),i=Du(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Cu?function(t,e,n){if(!Eu(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Du(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ru(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Tu(t,e,n){var r;t instanceof Nu?function(t,e,n){if(!Eu(t.precondition,e))return;const r=t.value.clone(),i=Ou(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ku(e),r).setHasLocalMutations()}(t,e,n):t instanceof Cu?function(t,e,n){if(!Eu(t.precondition,e))return;const r=Ou(t.fieldTransforms,n,e),i=e.data;i.setAll(Ru(t)),i.setAll(r),e.convertToFoundDocument(ku(e),i).setHasLocalMutations()}(t,e,n):(r=e,Eu(t.precondition,r)&&r.convertToNoDocument(Ka.min()))}function Su(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=hu(r.transform,t||null);null!=i&&(null==n&&(n=Ic.empty()),n.set(r.field,i))}return n||null}function Au(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&$a(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof du&&r instanceof du||n instanceof pu&&r instanceof pu?$a(n.elements,r.elements,dc):n instanceof gu&&r instanceof gu?dc(n.A,r.A):n instanceof lu&&r instanceof lu);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}function ku(t){return t.isFoundDocument()?t.version:Ka.min()}class Nu extends _u{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Cu extends _u{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ru(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Du(t,e,n){const r=new Map;Va(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uu(o,a,n[i]))}return r}function Ou(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,cu(t,s,e))}return r}class Lu extends _u{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Pu extends _u{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Mu{constructor(t){this.count=t}}
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
 */var xu,Uu;function Vu(t){if(void 0===t)return Pa("GRPC error has no .code"),Ca.UNKNOWN;switch(t){case xu.OK:return Ca.OK;case xu.CANCELLED:return Ca.CANCELLED;case xu.UNKNOWN:return Ca.UNKNOWN;case xu.DEADLINE_EXCEEDED:return Ca.DEADLINE_EXCEEDED;case xu.RESOURCE_EXHAUSTED:return Ca.RESOURCE_EXHAUSTED;case xu.INTERNAL:return Ca.INTERNAL;case xu.UNAVAILABLE:return Ca.UNAVAILABLE;case xu.UNAUTHENTICATED:return Ca.UNAUTHENTICATED;case xu.INVALID_ARGUMENT:return Ca.INVALID_ARGUMENT;case xu.NOT_FOUND:return Ca.NOT_FOUND;case xu.ALREADY_EXISTS:return Ca.ALREADY_EXISTS;case xu.PERMISSION_DENIED:return Ca.PERMISSION_DENIED;case xu.FAILED_PRECONDITION:return Ca.FAILED_PRECONDITION;case xu.ABORTED:return Ca.ABORTED;case xu.OUT_OF_RANGE:return Ca.OUT_OF_RANGE;case xu.UNIMPLEMENTED:return Ca.UNIMPLEMENTED;case xu.DATA_LOSS:return Ca.DATA_LOSS;default:return Ua()}}(Uu=xu||(xu={}))[Uu.OK=0]="OK",Uu[Uu.CANCELLED=1]="CANCELLED",Uu[Uu.UNKNOWN=2]="UNKNOWN",Uu[Uu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uu[Uu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uu[Uu.NOT_FOUND=5]="NOT_FOUND",Uu[Uu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uu[Uu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uu[Uu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uu[Uu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uu[Uu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uu[Uu.ABORTED=10]="ABORTED",Uu[Uu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uu[Uu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uu[Uu.INTERNAL=13]="INTERNAL",Uu[Uu.UNAVAILABLE=14]="UNAVAILABLE",Uu[Uu.DATA_LOSS=15]="DATA_LOSS";
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
class Fu{constructor(t,e){this.comparator=t,this.root=e||Bu.EMPTY}insert(t,e){return new Fu(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bu.BLACK,null,null))}remove(t){return new Fu(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bu.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qu(this.root,t,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qu(this.root,t,this.comparator,!0)}}class qu{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bu{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Bu.RED,this.left=null!=r?r:Bu.EMPTY,this.right=null!=i?i:Bu.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Bu(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Bu.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Bu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ua();if(this.right.isRed())throw Ua();const t=this.left.check();if(t!==this.right.check())throw Ua();return t+(this.isRed()?0:1)}}Bu.EMPTY=null,Bu.RED=!0,Bu.BLACK=!1,Bu.EMPTY=new class{constructor(){this.size=0}get key(){throw Ua()}get value(){throw Ua()}get color(){throw Ua()}get left(){throw Ua()}get right(){throw Ua()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Bu(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ju{constructor(t){this.comparator=t,this.data=new Fu(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $u(this.data.getIterator())}getIteratorFrom(t){return new $u(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ju))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ju(this.comparator);return e.data=t,e}}class $u{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const zu=new Fu(hc.comparator);function Ku(){return zu}const Hu=new Fu(hc.comparator);function Gu(){return Hu}const Wu=new Fu(hc.comparator);const Qu=new ju(hc.comparator);function Xu(...t){let e=Qu;for(const n of t)e=e.add(n);return e}const Yu=new ju(ja);function Ju(){return Yu}
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
 */class Zu{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,th.createSynthesizedTargetChangeForCurrentChange(t,e)),new Zu(Ka.min(),n,Ju(),Ku(),Xu())}}class th{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new th(tc.EMPTY_BYTE_STRING,e,Xu(),Xu(),Xu())}}
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
 */class eh{constructor(t,e,n,r){this.P=t,this.removedTargetIds=e,this.key=n,this.v=r}}class nh{constructor(t,e){this.targetId=t,this.V=e}}class rh{constructor(t,e,n=tc.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ih{constructor(){this.S=0,this.D=ah(),this.C=tc.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get O(){return 0!==this.S}get $(){return this.k}M(t){t.approximateByteSize()>0&&(this.k=!0,this.C=t)}F(){let t=Xu(),e=Xu(),n=Xu();return this.D.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ua()}})),new th(this.C,this.N,t,e,n)}L(){this.k=!1,this.D=ah()}B(t,e){this.k=!0,this.D=this.D.insert(t,e)}q(t){this.k=!0,this.D=this.D.remove(t)}U(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class sh{constructor(t){this.W=t,this.G=new Map,this.H=Ku(),this.J=oh(),this.Y=new ju(ja)}X(t){for(const e of t.P)t.v&&t.v.isFoundDocument()?this.Z(e,t.v):this.tt(e,t.key,t.v);for(const e of t.removedTargetIds)this.tt(e,t.key,t.v)}et(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.st(e)&&n.M(t.resumeToken);break;case 1:n.K(),n.O||n.L(),n.M(t.resumeToken);break;case 2:n.K(),n.O||this.removeTarget(e);break;case 3:this.st(e)&&(n.j(),n.M(t.resumeToken));break;case 4:this.st(e)&&(this.it(e),n.M(t.resumeToken));break;default:Ua()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.G.forEach(((t,n)=>{this.st(n)&&e(n)}))}rt(t){const e=t.targetId,n=t.V.count,r=this.ot(e);if(r){const t=r.target;if(Rc(t))if(0===n){const n=new hc(t.path);this.tt(e,n,Sc.newNoDocument(n,Ka.min()))}else Va(1===n);else this.ct(e)!==n&&(this.it(e),this.Y=this.Y.add(e))}}ut(t){const e=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Rc(i.target)){const e=new hc(i.target.path);null!==this.H.get(e)||this.at(r,e)||this.tt(r,e,Sc.newNoDocument(e,t))}n.$&&(e.set(r,n.F()),n.L())}}));let n=Xu();this.J.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Zu(t,e,this.Y,this.H,n);return this.H=Ku(),this.J=oh(),this.Y=new ju(ja),r}Z(t,e){if(!this.st(t))return;const n=this.at(t,e.key)?2:0;this.nt(t).B(e.key,n),this.H=this.H.insert(e.key,e),this.J=this.J.insert(e.key,this.ht(e.key).add(t))}tt(t,e,n){if(!this.st(t))return;const r=this.nt(t);this.at(t,e)?r.B(e,1):r.q(e),this.J=this.J.insert(e,this.ht(e).delete(t)),n&&(this.H=this.H.insert(e,n))}removeTarget(t){this.G.delete(t)}ct(t){const e=this.nt(t).F();return this.W.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}U(t){this.nt(t).U()}nt(t){let e=this.G.get(t);return e||(e=new ih,this.G.set(t,e)),e}ht(t){let e=this.J.get(t);return e||(e=new ju(ja),this.J=this.J.insert(t,e)),e}st(t){const e=null!==this.ot(t);return e||La("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.G.get(t);return e&&e.O?null:this.W.lt(t)}it(t){this.G.set(t,new ih),this.W.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}at(t,e){return this.W.getRemoteKeysForTarget(t).has(e)}}function oh(){return new Fu(hc.comparator)}function ah(){return new Fu(hc.comparator)}
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
 */const ch={asc:"ASCENDING",desc:"DESCENDING"},uh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class hh{constructor(t,e){this.databaseId=t,this.I=e}}function lh(t,e){return t.I?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dh(t,e){return t.I?e.toBase64():e.toUint8Array()}function fh(t,e){return lh(t,e.toTimestamp())}function ph(t){return Va(!!t),Ka.fromTimestamp(function(t){const e=nc(t);return new za(e.seconds,e.nanos)}(t))}function mh(t,e){return(n=t,new Xa(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function gh(t){const e=Xa.fromString(t);return Va(xh(e)),e}function yh(t,e){return mh(t.databaseId,e.path)}function vh(t,e){const n=gh(e);if(n.get(1)!==t.databaseId.projectId)throw new Ra(Ca.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ra(Ca.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new hc(Eh(n))}function wh(t,e){return mh(t.databaseId,e)}function bh(t){return new Xa(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Eh(t){return Va(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function _h(t,e,n){return{name:yh(t,e),fields:n.toProto().mapValue.fields}}function Ih(t,e){return{documents:[wh(t,e.path)]}}function Th(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=wh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ec(t.value))return{unaryFilter:{field:Dh(t.field),op:"IS_NAN"}};if(bc(t.value))return{unaryFilter:{field:Dh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ec(t.value))return{unaryFilter:{field:Dh(t.field),op:"IS_NOT_NAN"}};if(bc(t.value))return{unaryFilter:{field:Dh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dh(t.field),op:Rh(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Dh((e=t).field),direction:Ch(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.I||cc(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=kh(e.startAt)),e.endAt&&(n.structuredQuery.endAt=kh(e.endAt)),n}function Sh(t){let e=function(t){const e=gh(t);return 4===e.length?Xa.emptyPath():Eh(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Va(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Ah(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new jc(Oh((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,cc(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Nh(n.startAt));let u=null;return n.endAt&&(u=Nh(n.endAt)),function(t,e,n,r,i,s,o,a){return new Hc(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function Ah(t){return t?void 0!==t.unaryFilter?[Ph(t)]:void 0!==t.fieldFilter?[Lh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ah(t))).reduce(((t,e)=>t.concat(e))):Ua():[]}function kh(t){return{before:t.before,values:t.position}}function Nh(t){const e=!!t.before,n=t.values||[];return new qc(n,e)}function Ch(t){return ch[t]}function Rh(t){return uh[t]}function Dh(t){return{fieldPath:t.canonicalString()}}function Oh(t){return Ja.fromServerFormat(t.fieldPath)}function Lh(t){return Dc.create(Oh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Ua()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ph(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Oh(t.unaryFilter.field);return Dc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Oh(t.unaryFilter.field);return Dc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Oh(t.unaryFilter.field);return Dc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Oh(t.unaryFilter.field);return Dc.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Ua()}}function Mh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function xh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Uh{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Vh{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ua(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Vh(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Vh?e:Vh.resolve(e)}catch(e){return Vh.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Vh.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Vh.reject(e)}static resolve(t){return new Vh(((e,n)=>{e(t)}))}static reject(t){return new Vh(((e,n)=>{n(t)}))}static waitFor(t){return new Vh(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Vh.resolve(!1);for(const n of t)e=e.next((t=>t?Vh.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function Fh(t){return"IndexedDbTransactionError"===t.name}
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
 */class qh{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Iu(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Tu(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Tu(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Ka.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Xu())}isEqual(t){return this.batchId===t.batchId&&$a(this.mutations,t.mutations,((t,e)=>Au(t,e)))&&$a(this.baseMutations,t.baseMutations,((t,e)=>Au(t,e)))}}class Bh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Va(t.mutations.length===n.length);let r=Wu;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Bh(t,e,n,r)}}
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
 */class jh{constructor(t,e,n,r,i=Ka.min(),s=Ka.min(),o=tc.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new jh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new jh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new jh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class $h{constructor(t){this.Lt=t}}function zh(t){const e=Sh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
 */class Kh{constructor(){this.Bt=new Hh}addToCollectionParentIndex(t,e){return this.Bt.add(e),Vh.resolve()}getCollectionParents(t,e){return Vh.resolve(this.Bt.getEntries(e))}}class Hh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ju(Xa.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ju(Xa.comparator)).toArray()}}
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
 */class Gh{constructor(t){this.Ht=t}next(){return this.Ht+=2,this.Ht}static Jt(){return new Gh(0)}static Yt(){return new Gh(-1)}}
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
 */async function Wh(t){if(t.code!==Ca.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;La("LocalStore","Unexpectedly lost primary lease")}
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
 */class Qh{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){Ga(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Wa(this.inner)}}
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
class Xh{constructor(t,e,n){this.Ue=t,this._n=e,this.Ut=n}mn(t,e){return this._n.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.gn(t,e,n)))}gn(t,e,n){return this.Ue.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}yn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}pn(t,e){return this.Ue.getEntries(t,e).next((e=>this.En(t,e).next((()=>e))))}En(t,e){return this._n.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.yn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,hc.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.In(t,e,n):this.An(t,e,n);var r}Tn(t,e){return this.mn(t,new hc(e)).next((t=>{let e=Gu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}In(t,e,n){const r=e.collectionGroup;let i=Gu();return this.Ut.getCollectionParents(t,r).next((s=>Vh.forEach(s,(s=>{const o=(a=e,c=s.child(r),new Hc(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}An(t,e,n){let r,i;return this.Ue.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Rn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Sc.newInvalidDocument(n),r=r.insert(n,i)),Tu(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{eu(e,n)||(r=r.remove(t))})),r)))}Rn(t,e,n){let r=Xu();for(const s of e)for(const t of s.mutations)t instanceof Cu&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Ue.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
 */class Yh{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pn=n,this.bn=r}static vn(t,e){let n=Xu(),r=Xu();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Yh(t,e.fromCache,n,r)}}
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
 */class Jh{Vn(t){this.Sn=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(Ka.min())?this.Dn(t,e):this.Sn.pn(t,r).next((i=>{const s=this.Cn(e,i);return(Wc(e)||Qc(e))&&this.Nn(e.limitType,s,r,n)?this.Dn(t,e):(Oa()<=Bt.DEBUG&&La("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),tu(e)),this.Sn.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Cn(t,e){let n=new ju(nu(t));return e.forEach(((e,r)=>{eu(t,r)&&(n=n.add(r))})),n}Nn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(t,e){return Oa()<=Bt.DEBUG&&La("QueryEngine","Using full collection scan to execute query:",tu(e)),this.Sn.getDocumentsMatchingQuery(t,e,Ka.min())}}
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
 */class Zh{constructor(t,e,n,r){this.persistence=t,this.xn=e,this.R=r,this.kn=new Fu(ja),this.On=new Qh((t=>Nc(t)),Cc),this.$n=Ka.min(),this._n=t.getMutationQueue(n),this.Mn=t.getRemoteDocumentCache(),this.qe=t.getTargetCache(),this.Fn=new Xh(this.Mn,this._n,this.persistence.getIndexManager()),this.Ke=t.getBundleCache(),this.xn.Vn(this.Fn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.kn)))}}async function tl(t,e){const n=Fa(t);let r=n._n,i=n.Fn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n._n.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Xh(n.Mn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=Xu();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.pn(t,o).next((t=>({Ln:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Fn=i,n.xn.Vn(n.Fn),s}function el(t){const e=Fa(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qe.getLastRemoteSnapshotVersion(t)))}function nl(t,e){const n=Fa(t),r=e.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Mn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.qe.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.qe.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,d),u=a,l=e,Va((h=d).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size>0)&&o.push(n.qe.updateTargetData(t,d))}var u,h,l}));let a=Ku();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=Xu();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Ku();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Ka.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):La("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(Ka.min())){const e=n.qe.getLastRemoteSnapshotVersion(t).next((e=>n.qe.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Vh.waitFor(o).next((()=>s.apply(t))).next((()=>n.Fn.En(t,a))).next((()=>a))})).then((t=>(n.kn=i,t)))}function rl(t,e){const n=Fa(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n._n.getNextMutationBatchAfterBatchId(t,e))))}async function il(t,e,n){const r=Fa(t),i=r.kn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!Fh(o))throw o;La("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.kn=r.kn.remove(e),r.On.delete(i.target)}function sl(t,e,n){const r=Fa(t);let i=Ka.min(),s=Xu();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Fa(t),i=r.On.get(n);return void 0!==i?Vh.resolve(r.kn.get(i)):r.qe.getTargetData(e,n)}(r,t,Yc(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qe.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.xn.getDocumentsMatchingQuery(t,e,n?i:Ka.min(),n?s:Xu()))).next((t=>({documents:t,Bn:s})))))}
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
 */class ol{constructor(t){this.R=t,this.Qn=new Map,this.jn=new Map}getBundleMetadata(t,e){return Vh.resolve(this.Qn.get(e))}saveBundleMetadata(t,e){var n;return this.Qn.set(e.id,{id:(n=e).id,version:n.version,createTime:ph(n.createTime)}),Vh.resolve()}getNamedQuery(t,e){return Vh.resolve(this.jn.get(e))}saveNamedQuery(t,e){return this.jn.set(e.name,{name:(n=e).name,query:zh(n.bundledQuery),readTime:ph(n.readTime)}),Vh.resolve();var n}}
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
 */class al{constructor(){this.Wn=new ju(cl.Gn),this.zn=new ju(cl.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(t,e){const n=new cl(t,e);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Yn(new cl(t,e))}Xn(t,e){t.forEach((t=>this.removeReference(t,e)))}Zn(t){const e=new hc(new Xa([])),n=new cl(e,t),r=new cl(e,t+1),i=[];return this.zn.forEachInRange([n,r],(t=>{this.Yn(t),i.push(t.key)})),i}ts(){this.Wn.forEach((t=>this.Yn(t)))}Yn(t){this.Wn=this.Wn.delete(t),this.zn=this.zn.delete(t)}es(t){const e=new hc(new Xa([])),n=new cl(e,t),r=new cl(e,t+1);let i=Xu();return this.zn.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new cl(t,0),n=this.Wn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class cl{constructor(t,e){this.key=t,this.ns=e}static Gn(t,e){return hc.comparator(t.key,e.key)||ja(t.ns,e.ns)}static Hn(t,e){return ja(t.ns,e.ns)||hc.comparator(t.key,e.key)}}
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
 */class ul{constructor(t,e){this.Ut=t,this.referenceDelegate=e,this._n=[],this.ss=1,this.rs=new ju(cl.Gn)}checkEmpty(t){return Vh.resolve(0===this._n.length)}addMutationBatch(t,e,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new qh(i,e,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new cl(o.key,i)),this.Ut.addToCollectionParentIndex(t,o.key.path.popLast());return Vh.resolve(s)}lookupMutationBatch(t,e){return Vh.resolve(this.os(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.cs(n),i=r<0?0:r;return Vh.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return Vh.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(t){return Vh.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new cl(e,0),r=new cl(e,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(t=>{const e=this.os(t.ns);i.push(e)})),Vh.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ju(ja);return e.forEach((t=>{const e=new cl(t,0),r=new cl(t,Number.POSITIVE_INFINITY);this.rs.forEachInRange([e,r],(t=>{n=n.add(t.ns)}))})),Vh.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;hc.isDocumentKey(i)||(i=i.child(""));const s=new cl(new hc(i),0);let o=new ju(ja);return this.rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ns)),!0)}),s),Vh.resolve(this.us(o))}us(t){const e=[];return t.forEach((t=>{const n=this.os(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Va(0===this.hs(e.batchId,"removed")),this._n.shift();let n=this.rs;return Vh.forEach(e.mutations,(r=>{const i=new cl(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.rs=n}))}Gt(t){}containsKey(t,e){const n=new cl(e,0),r=this.rs.firstAfterOrEqual(n);return Vh.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this._n.length,Vh.resolve()}hs(t,e){return this.cs(t)}cs(t){return 0===this._n.length?0:t-this._n[0].batchId}os(t){const e=this.cs(t);return e<0||e>=this._n.length?null:this._n[e]}}
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
 */class hl{constructor(t,e){this.Ut=t,this.ls=e,this.docs=new Fu(hc.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ut.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Vh.resolve(n?n.document.clone():Sc.newInvalidDocument(e))}getEntries(t,e){let n=Ku();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Sc.newInvalidDocument(t))})),Vh.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ku();const i=new hc(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||eu(e,i)&&(r=r.insert(i.key,i.clone()))}return Vh.resolve(r)}fs(t,e){return Vh.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ll(this)}getSize(t){return Vh.resolve(this.size)}}class ll extends class{constructor(){this.changes=new Qh((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Ka.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Sc.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Vh.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Ie=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Ie.addEntry(t,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),Vh.waitFor(e)}getFromCache(t,e){return this.Ie.getEntry(t,e)}getAllFromCache(t,e){return this.Ie.getEntries(t,e)}}
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
 */class dl{constructor(t){this.persistence=t,this.ds=new Qh((t=>Nc(t)),Cc),this.lastRemoteSnapshotVersion=Ka.min(),this.highestTargetId=0,this.ws=0,this._s=new al,this.targetCount=0,this.gs=Gh.Jt()}forEachTarget(t,e){return this.ds.forEach(((t,n)=>e(n))),Vh.resolve()}getLastRemoteSnapshotVersion(t){return Vh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Vh.resolve(this.ws)}allocateTargetId(t){return this.highestTargetId=this.gs.next(),Vh.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ws&&(this.ws=e),Vh.resolve()}te(t){this.ds.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.gs=new Gh(e),this.highestTargetId=e),t.sequenceNumber>this.ws&&(this.ws=t.sequenceNumber)}addTargetData(t,e){return this.te(e),this.targetCount+=1,Vh.resolve()}updateTargetData(t,e){return this.te(e),Vh.resolve()}removeTargetData(t,e){return this.ds.delete(e.target),this._s.Zn(e.targetId),this.targetCount-=1,Vh.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Vh.waitFor(i).next((()=>r))}getTargetCount(t){return Vh.resolve(this.targetCount)}getTargetData(t,e){const n=this.ds.get(e)||null;return Vh.resolve(n)}addMatchingKeys(t,e,n){return this._s.Jn(e,n),Vh.resolve()}removeMatchingKeys(t,e,n){this._s.Xn(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Vh.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._s.Zn(e),Vh.resolve()}getMatchingKeysForTargetId(t,e){const n=this._s.es(e);return Vh.resolve(n)}containsKey(t,e){return Vh.resolve(this._s.containsKey(e))}}
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
 */class fl{constructor(t,e){var n;this.ys={},this.Ne=new Na(0),this.xe=!1,this.xe=!0,this.referenceDelegate=t(this),this.qe=new dl(this),this.Ut=new Kh,this.Ue=(n=this.Ut,new hl(n,(t=>this.referenceDelegate.ps(t)))),this.R=new $h(e),this.Ke=new ol(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ut}getMutationQueue(t){let e=this.ys[t.toKey()];return e||(e=new ul(this.Ut,this.referenceDelegate),this.ys[t.toKey()]=e),e}getTargetCache(){return this.qe}getRemoteDocumentCache(){return this.Ue}getBundleCache(){return this.Ke}runTransaction(t,e,n){La("MemoryPersistence","Starting transaction:",t);const r=new pl(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((t=>this.referenceDelegate.Ts(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Is(t,e){return Vh.or(Object.values(this.ys).map((n=>()=>n.containsKey(t,e))))}}class pl extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class ml{constructor(t){this.persistence=t,this.As=new al,this.Rs=null}static Ps(t){return new ml(t)}get bs(){if(this.Rs)return this.Rs;throw Ua()}addReference(t,e,n){return this.As.addReference(n,e),this.bs.delete(n.toString()),Vh.resolve()}removeReference(t,e,n){return this.As.removeReference(n,e),this.bs.add(n.toString()),Vh.resolve()}markPotentiallyOrphaned(t,e){return this.bs.add(e.toString()),Vh.resolve()}removeTarget(t,e){this.As.Zn(e.targetId).forEach((t=>this.bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Es(){this.Rs=new Set}Ts(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Vh.forEach(this.bs,(n=>{const r=hc.fromPath(n);return this.vs(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Rs=null,e.apply(t))))}updateLimboDocument(t,e){return this.vs(t,e).next((t=>{t?this.bs.delete(e.toString()):this.bs.add(e.toString())}))}ps(t){return 0}vs(t,e){return Vh.or([()=>Vh.resolve(this.As.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Is(t,e)])}}
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
 */class gl{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gl.UNAUTHENTICATED=new gl(null),gl.GOOGLE_CREDENTIALS=new gl("google-credentials-uid"),gl.FIRST_PARTY=new gl("first-party-uid");class yl{constructor(){this.activeTargetIds=Ju()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}Cs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vl{constructor(){this.li=new yl,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.li.Ds(t),this.fi[t]||"not-current"}updateQueryState(t,e,n){this.fi[t]=e}removeLocalQueryTarget(t){this.li.Cs(t)}isLocalQueryTarget(t){return this.li.activeTargetIds.has(t)}clearQueryState(t){delete this.fi[t]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(t){return this.li.activeTargetIds.has(t)}start(){return this.li=new yl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class wl{di(t){}shutdown(){}}
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
 */class bl{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(t){this.yi.push(t)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){La("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.yi)t(0)}gi(){La("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.yi)t(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const El={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class _l{constructor(t){this.Ei=t.Ei,this.Ti=t.Ti}Ii(t){this.Ai=t}Ri(t){this.Pi=t}onMessage(t){this.bi=t}close(){this.Ti()}send(t){this.Ei(t)}vi(){this.Ai()}Vi(t){this.Pi(t)}Si(t){this.bi(t)}}
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
 */class Il extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Di=e+"://"+t.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(t,e,n,r){const i=this.xi(t,e);La("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.Oi(t,i,s,n).then((t=>(La("RestConnection","Received: ",t),t)),(e=>{throw Ma("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}$i(t,e,n,r){return this.Ni(t,e,n,r)}ki(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/8.4.1",t["X-Firebase-GMPID"]=this.databaseInfo.appId,t["Content-Type"]="text/plain",e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}xi(t,e){const n=El[t];return`${this.Di}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling}Oi(t,e,n,r){return new Promise(((i,s)=>{const o=new ka;o.listenOnce(_a.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ea.NO_ERROR:const e=o.getResponseJson();La("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ea.TIMEOUT:La("Connection",'RPC "'+t+'" timed out'),s(new Ra(Ca.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const n=o.getStatus();if(La("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ca).indexOf(e)>=0?e:Ca.UNKNOWN}(t.status);s(new Ra(e,t.message))}else s(new Ra(Ca.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ra(Ca.UNAVAILABLE,"Connection failed."));break;default:Ua()}}finally{La("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}Mi(t,e){const n=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new ga,i=ys(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.ki(s.initMessageHeaders,e),Tt()||At()||It().indexOf("Electron/")>=0||kt()||It().indexOf("MSAppHost/")>=0||St()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");La("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const h=new _l({Ei:t=>{u?La("Connection","Not sending because WebChannel is closed:",t):(c||(La("Connection","Opening WebChannel transport."),a.open(),c=!0),La("Connection","WebChannel sending:",t),a.send(t))},Ti:()=>a.close()}),l=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return l(a,Aa.EventType.OPEN,(()=>{u||La("Connection","WebChannel transport opened.")})),l(a,Aa.EventType.CLOSE,(()=>{u||(u=!0,La("Connection","WebChannel transport closed"),h.Vi())})),l(a,Aa.EventType.ERROR,(t=>{u||(u=!0,Ma("Connection","WebChannel transport errored:",t),h.Vi(new Ra(Ca.UNAVAILABLE,"The operation could not be completed")))})),l(a,Aa.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Va(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){La("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=xu[t];if(void 0!==e)return Vu(e)}(t),n=i.message;void 0===e&&(e=Ca.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,h.Vi(new Ra(e,n)),a.close()}else La("Connection","WebChannel received:",n),h.Si(n)}})),l(i,Ia.STAT_EVENT,(t=>{t.stat===Ta?La("Connection","Detected buffering proxy"):t.stat===Sa&&La("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.vi()}),0),h}}function Tl(){return"undefined"!=typeof document?document:null}
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
 */function Sl(t){return new hh(t,!0)}class Al{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Se=t,this.timerId=e,this.Fi=n,this.Li=r,this.Bi=i,this.qi=0,this.Ui=null,this.Ki=Date.now(),this.reset()}reset(){this.qi=0}Qi(){this.qi=this.Bi}ji(t){this.cancel();const e=Math.floor(this.qi+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,e-n);r>0&&La("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.qi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ui=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),t()))),this.qi*=this.Li,this.qi<this.Fi&&(this.qi=this.Fi),this.qi>this.Bi&&(this.qi=this.Bi)}Gi(){null!==this.Ui&&(this.Ui.skipDelay(),this.Ui=null)}cancel(){null!==this.Ui&&(this.Ui.cancel(),this.Ui=null)}Wi(){return(Math.random()-.5)*this.qi}}
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
 */class kl{constructor(t,e,n,r,i,s){this.Se=t,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new Al(t,e)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(t){this.ur(),this.stream.send(t)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(t,e){this.ur(),this.Zi.cancel(),this.Yi++,3!==t?this.Zi.reset():e&&e.code===Ca.RESOURCE_EXHAUSTED?(Pa(e.toString()),Pa("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):e&&e.code===Ca.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ri(e)}ar(){}auth(){this.state=1;const t=this.hr(this.Yi),e=this.Yi;this.Ji.getToken().then((t=>{this.Yi===e&&this.lr(t)}),(e=>{t((()=>{const t=new Ra(Ca.UNKNOWN,"Fetching auth token failed: "+e.message);return this.dr(t)}))}))}lr(t){const e=this.hr(this.Yi);this.stream=this.wr(t),this.stream.Ii((()=>{e((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((t=>{e((()=>this.dr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}nr(){this.state=4,this.Zi.ji((async()=>{this.state=0,this.start()}))}dr(t){return La("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}hr(t){return e=>{this.Se.enqueueAndForget((()=>this.Yi===t?e():(La("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Nl extends kl{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.R=r}wr(t){return this.Hi.Mi("Listen",t)}onMessage(t){this.Zi.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ua(),s=e.targetChange.targetIds||[],o=function(t,e){return t.I?(Va(void 0===e||"string"==typeof e),tc.fromBase64String(e||"")):(Va(void 0===e||e instanceof Uint8Array),tc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Ca.UNKNOWN:Vu(t.code);return new Ra(e,t.message||"")}(a);n=new rh(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vh(t,r.document.name),s=ph(r.document.updateTime),o=new Ic({mapValue:{fields:r.document.fields}}),a=Sc.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new eh(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vh(t,r.document),s=r.readTime?ph(r.readTime):Ka.min(),o=Sc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new eh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vh(t,r.document),s=r.removedTargetIds||[];n=new eh([],s,i,null)}else{if(!("filter"in e))return Ua();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Mu(r),s=t.targetId;n=new nh(s,i)}}var r;return n}(this.R,t),n=function(t){if(!("targetChange"in t))return Ka.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ka.min():e.readTime?ph(e.readTime):Ka.min()}(t);return this.listener._r(e,n)}mr(t){const e={};e.database=bh(this.R),e.addTarget=function(t,e){let n;const r=e.target;return n=Rc(r)?{documents:Ih(t,r)}:{query:Th(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=dh(t,e.resumeToken):e.snapshotVersion.compareTo(Ka.min())>0&&(n.readTime=lh(t,e.snapshotVersion.toTimestamp())),n}(this.R,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ua()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,t);n&&(e.labels=n),this.cr(e)}gr(t){const e={};e.database=bh(this.R),e.removeTarget=t,this.cr(e)}}class Cl extends kl{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.R=r,this.yr=!1}get pr(){return this.yr}start(){this.yr=!1,this.lastStreamToken=void 0,super.start()}ar(){this.yr&&this.Er([])}wr(t){return this.Hi.Mi("Write",t)}onMessage(t){if(Va(!!t.streamToken),this.lastStreamToken=t.streamToken,this.yr){this.Zi.reset();const e=function(t,e){return t&&t.length>0?(Va(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ph(t.updateTime):ph(e);return n.isEqual(Ka.min())&&(n=ph(e)),new wu(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=ph(t.commitTime);return this.listener.Tr(n,e)}return Va(!t.writeResults||0===t.writeResults.length),this.yr=!0,this.listener.Ir()}Ar(){const t={};t.database=bh(this.R),this.cr(t)}Er(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Nu)n={update:_h(t,e.key,e.value)};else if(e instanceof Lu)n={delete:yh(t,e.key)};else if(e instanceof Cu)n={update:_h(t,e.key,e.data),updateMask:Mh(e.fieldMask)};else{if(!(e instanceof Pu))return Ua();n={verify:yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof lu)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof du)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof gu)return{fieldPath:e.field.canonicalString(),increment:n.A};throw Ua()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:fh(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ua())),n;var r,i}(this.R,t)))};this.cr(e)}}
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
 */class Rl extends class{}{constructor(t,e,n){super(),this.credentials=t,this.Hi=e,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new Ra(Ca.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(t,e,n,r))).catch((t=>{throw t.code===Ca.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}$i(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.$i(t,e,n,r))).catch((t=>{throw t.code===Ca.UNAUTHENTICATED&&this.credentials.invalidateToken(),t}))}terminate(){this.Rr=!1}}class Dl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(t){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Dr("Offline")))}set(t){this.kr(),this.br=0,"Online"===t&&(this.Vr=!1),this.Dr(t)}Dr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Cr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(Pa(e),this.Vr=!1):La("OnlineStateTracker",e)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
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
 */class Ol{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Or=[],this.$r=new Map,this.Mr=new Set,this.Fr=[],this.Lr=i,this.Lr.di((t=>{n.enqueueAndForget((async()=>{Bl(this)&&(La("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Fa(t);e.Mr.add(4),await Pl(e),e.Br.set("Unknown"),e.Mr.delete(4),await Ll(e)}(this))}))})),this.Br=new Dl(n,r)}}async function Ll(t){if(Bl(t))for(const e of t.Fr)await e(!0)}async function Pl(t){for(const e of t.Fr)await e(!1)}function Ml(t,e){const n=Fa(t);n.$r.has(e.targetId)||(n.$r.set(e.targetId,e),ql(n)?Fl(n):rd(n).er()&&Ul(n,e))}function xl(t,e){const n=Fa(t),r=rd(n);n.$r.delete(e),r.er()&&Vl(n,e),0===n.$r.size&&(r.er()?r.ir():Bl(n)&&n.Br.set("Unknown"))}function Ul(t,e){t.qr.U(e.targetId),rd(t).mr(e)}function Vl(t,e){t.qr.U(e),rd(t).gr(e)}function Fl(t){t.qr=new sh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.$r.get(e)||null}),rd(t).start(),t.Br.Sr()}function ql(t){return Bl(t)&&!rd(t).tr()&&t.$r.size>0}function Bl(t){return 0===Fa(t).Mr.size}function jl(t){t.qr=void 0}async function $l(t){t.$r.forEach(((e,n)=>{Ul(t,e)}))}async function zl(t,e){jl(t),ql(t)?(t.Br.Nr(e),Fl(t)):t.Br.set("Unknown")}async function Kl(t,e,n){if(t.Br.set("Online"),e instanceof rh&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.$r.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.$r.delete(r),t.qr.removeTarget(r))}(t,e)}catch(r){La("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hl(t,r)}else if(e instanceof eh?t.qr.X(e):e instanceof nh?t.qr.rt(e):t.qr.et(e),!n.isEqual(Ka.min()))try{const e=await el(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.qr.ut(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.$r.get(r);i&&t.$r.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.$r.get(e);if(!n)return;t.$r.set(e,n.withResumeToken(tc.EMPTY_BYTE_STRING,n.snapshotVersion)),Vl(t,e);const r=new jh(n.target,e,1,n.sequenceNumber);Ul(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){La("RemoteStore","Failed to raise snapshot:",i),await Hl(t,i)}}async function Hl(t,e,n){if(!Fh(e))throw e;t.Mr.add(1),await Pl(t),t.Br.set("Offline"),n||(n=()=>el(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{La("RemoteStore","Retrying IndexedDB access"),await n(),t.Mr.delete(1),await Ll(t)}))}function Gl(t,e){return e().catch((n=>Hl(t,n,e)))}async function Wl(t){const e=Fa(t),n=id(e);let r=e.Or.length>0?e.Or[e.Or.length-1].batchId:-1;for(;Ql(e);)try{const t=await rl(e.localStore,r);if(null===t){0===e.Or.length&&n.ir();break}r=t.batchId,Xl(e,t)}catch(i){await Hl(e,i)}Yl(e)&&Jl(e)}function Ql(t){return Bl(t)&&t.Or.length<10}function Xl(t,e){t.Or.push(e);const n=id(t);n.er()&&n.pr&&n.Er(e.mutations)}function Yl(t){return Bl(t)&&!id(t).tr()&&t.Or.length>0}function Jl(t){id(t).start()}async function Zl(t){id(t).Ar()}async function td(t){const e=id(t);for(const n of t.Or)e.Er(n.mutations)}async function ed(t,e,n){const r=t.Or.shift(),i=Bh.from(r,e,n);await Gl(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Wl(t)}async function nd(t,e){e&&id(t).pr&&await async function(t,e){if(function(t){switch(t){case Ca.OK:return Ua();case Ca.CANCELLED:case Ca.UNKNOWN:case Ca.DEADLINE_EXCEEDED:case Ca.RESOURCE_EXHAUSTED:case Ca.INTERNAL:case Ca.UNAVAILABLE:case Ca.UNAUTHENTICATED:return!1;case Ca.INVALID_ARGUMENT:case Ca.NOT_FOUND:case Ca.ALREADY_EXISTS:case Ca.PERMISSION_DENIED:case Ca.FAILED_PRECONDITION:case Ca.ABORTED:case Ca.OUT_OF_RANGE:case Ca.UNIMPLEMENTED:case Ca.DATA_LOSS:return!0;default:return Ua()}}(n=e.code)&&n!==Ca.ABORTED){const n=t.Or.shift();id(t).sr(),await Gl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Wl(t)}var n}(t,e),Yl(t)&&Jl(t)}function rd(t){return t.Ur||(t.Ur=function(t,e,n){const r=Fa(t);return r.Pr(),new Nl(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:$l.bind(null,t),Ri:zl.bind(null,t),_r:Kl.bind(null,t)}),t.Fr.push((async e=>{e?(t.Ur.sr(),ql(t)?Fl(t):t.Br.set("Unknown")):(await t.Ur.stop(),jl(t))}))),t.Ur}function id(t){return t.Kr||(t.Kr=function(t,e,n){const r=Fa(t);return r.Pr(),new Cl(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:Zl.bind(null,t),Ri:nd.bind(null,t),Ir:td.bind(null,t),Tr:ed.bind(null,t)}),t.Fr.push((async e=>{e?(t.Kr.sr(),await Wl(t)):(await t.Kr.stop(),t.Or.length>0&&(La("RemoteStore",`Stopping write stream with ${t.Or.length} pending writes`),t.Or=[]))}))),t.Kr
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
 */}class sd{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Uh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new sd(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ra(Ca.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(t,e){if(Pa("AsyncQueue",`${e}: ${t}`),Fh(t))return new Ra(Ca.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ad{constructor(t){this.comparator=t?(e,n)=>t(e,n)||hc.comparator(e.key,n.key):(t,e)=>hc.comparator(t.key,e.key),this.keyedMap=Gu(),this.sortedSet=new Fu(this.comparator)}static emptySet(t){return new ad(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ad))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ad;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class cd{constructor(){this.Qr=new Fu(hc.comparator)}track(t){const e=t.doc.key,n=this.Qr.get(e);n?0!==t.type&&3===n.type?this.Qr=this.Qr.insert(e,t):3===t.type&&1!==n.type?this.Qr=this.Qr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Qr=this.Qr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Qr=this.Qr.remove(e):1===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):Ua():this.Qr=this.Qr.insert(e,t)}jr(){const t=[];return this.Qr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ud{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ud(t,e,ad.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class hd{constructor(){this.Wr=void 0,this.listeners=[]}}class ld{constructor(){this.queries=new Qh((t=>Zc(t)),Jc),this.onlineState="Unknown",this.Gr=new Set}}function dd(t,e){const n=Fa(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Hr(i)&&(r=!0);e.Wr=i}}r&&pd(n)}function fd(t,e,n){const r=Fa(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function pd(t){t.Gr.forEach((t=>{t.next()}))}class md{constructor(t,e,n){this.query=t,this.Jr=e,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ud(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Yr?this.Zr(t)&&(this.Jr.next(t),e=!0):this.eo(t,this.onlineState)&&(this.no(t),e=!0),this.Xr=t,e}onError(t){this.Jr.error(t)}zr(t){this.onlineState=t;let e=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,t)&&(this.no(this.Xr),e=!0),e}eo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.so&&n||t.docs.isEmpty()&&"Offline"!==e)}Zr(t){if(t.docChanges.length>0)return!0;const e=this.Xr&&this.Xr.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}no(t){t=ud.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Yr=!0,this.Jr.next(t)}}
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
 */class gd{constructor(t){this.key=t}}class yd{constructor(t){this.key=t}}class vd{constructor(t,e){this.query=t,this.uo=e,this.ao=null,this.current=!1,this.ho=Xu(),this.mutatedKeys=Xu(),this.lo=nu(t),this.fo=new ad(this.lo)}get wo(){return this.uo}_o(t,e){const n=e?e.mo:new cd,r=e?e.fo:this.fo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Wc(this.query)&&r.size===this.query.limit?r.last():null,c=Qc(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=eu(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.yo(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.lo(h,a)>0||c&&this.lo(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Wc(this.query)||Qc(this.query))for(;s.size>this.query.limit;){const t=Wc(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.fo;this.fo=t.fo,this.mutatedKeys=t.mutatedKeys;const i=t.mo.jr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ua()}};return n(t)-n(e)}(t.type,e.type)||this.lo(t.doc,e.doc))),this.po(n);const s=e?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new ud(this.query,t.fo,r,i,t.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({fo:this.fo,mo:new cd,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(t){return!this.uo.has(t)&&!!this.fo.has(t)&&!this.fo.get(t).hasLocalMutations}po(t){t&&(t.addedDocuments.forEach((t=>this.uo=this.uo.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.uo=this.uo.delete(t))),this.current=t.current)}Eo(){if(!this.current)return[];const t=this.ho;this.ho=Xu(),this.fo.forEach((t=>{this.Io(t.key)&&(this.ho=this.ho.add(t.key))}));const e=[];return t.forEach((t=>{this.ho.has(t)||e.push(new yd(t))})),this.ho.forEach((n=>{t.has(n)||e.push(new gd(n))})),e}Ao(t){this.uo=t.Bn,this.ho=Xu();const e=this._o(t.documents);return this.applyChanges(e,!0)}Ro(){return ud.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class wd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class bd{constructor(t){this.key=t,this.Po=!1}}class Ed{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new Qh((t=>Zc(t)),Jc),this.Vo=new Map,this.So=new Set,this.Do=new Fu(hc.comparator),this.Co=new Map,this.No=new al,this.xo={},this.ko=new Map,this.Oo=Gh.Yt(),this.onlineState="Unknown",this.$o=void 0}get isPrimaryClient(){return!0===this.$o}}async function _d(t,e){const n=function(t){const e=Fa(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kd.bind(null,e),e.bo._r=dd.bind(null,e.eventManager),e.bo.Fo=fd.bind(null,e.eventManager),e}(t);let r,i;const s=n.vo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const t=await function(t,e){const n=Fa(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qe.getTargetData(t,e).next((i=>i?(r=i,Vh.resolve(r)):n.qe.allocateTargetId(t).next((i=>(r=new jh(e,i,0,t.currentSequenceNumber),n.qe.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.kn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(t.targetId,t),n.On.set(e,t.targetId)),t}))}(n.localStore,Yc(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Mo=(e,n,r)=>async function(t,e,n,r){let i=e.view._o(n);i.Nn&&(i=await sl(t.localStore,e.query,!1).then((({documents:t})=>e.view._o(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Pd(t,e.targetId,o.To),o.snapshot}(t,e,n,r);const i=await sl(t.localStore,e,!0),s=new vd(e,i.Bn),o=s._o(i.documents),a=th.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Pd(t,n,c.To);const u=new wd(e,n,s);return t.vo.set(e,u),t.Vo.has(n)?t.Vo.get(n).push(e):t.Vo.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&Ml(n.remoteStore,t)}return i}async function Id(t,e){const n=Fa(t),r=n.vo.get(e),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((t=>!Jc(t,e)))),void n.vo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await il(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),xl(n.remoteStore,r.targetId),Od(n,r.targetId)})).catch(Wh)):(Od(n,r.targetId),await il(n.localStore,r.targetId,!0))}async function Td(t,e,n){const r=function(t){const e=Fa(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cd.bind(null,e),e}(t);try{const t=await function(t,e){const n=Fa(t),r=za.now(),i=e.reduce(((t,e)=>t.add(e.key)),Xu());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Fn.pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=Su(t,s.get(t.key));null!=e&&o.push(new Cu(t.key,e,Tc(e.toProto().mapValue),bu.exists(!0)))}return n._n.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.xo[t.currentUser.toKey()];r||(r=new Fu(ja)),r=r.insert(e,n),t.xo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ud(r,t.changes),await Wl(r.remoteStore)}catch(i){const t=od(i,"Failed to persist write");n.reject(t)}}async function Sd(t,e){const n=Fa(t);try{const t=await nl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Co.get(e);r&&(Va(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Po=!0:t.modifiedDocuments.size>0?Va(r.Po):t.removedDocuments.size>0&&(Va(r.Po),r.Po=!1))})),await Ud(n,t,e)}catch(r){await Wh(r)}}function Ad(t,e,n){const r=Fa(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Fa(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.zr(e)&&(r=!0)})),r&&pd(n)}(r.eventManager,e),t.length&&r.bo._r(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kd(t,e,n){const r=Fa(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Co.get(e),s=i&&i.key;if(s){let t=new Fu(hc.comparator);t=t.insert(s,Sc.newNoDocument(s,Ka.min()));const n=Xu().add(s),i=new Zu(Ka.min(),new Map,new ju(ja),t,n);await Sd(r,i),r.Do=r.Do.remove(s),r.Co.delete(e),xd(r)}else await il(r.localStore,e,!1).then((()=>Od(r,e,n))).catch(Wh)}async function Nd(t,e){const n=Fa(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Fa(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Mn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Vh.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Va(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t._n.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n._n.performConsistencyCheck(t))).next((()=>n.Fn.pn(t,r)))}))}(n.localStore,e);Dd(n,r,null),Rd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ud(n,t)}catch(i){await Wh(i)}}async function Cd(t,e,n){const r=Fa(t);try{const t=await function(t,e){const n=Fa(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n._n.lookupMutationBatch(t,e).next((e=>(Va(null!==e),r=e.keys(),n._n.removeMutationBatch(t,e)))).next((()=>n._n.performConsistencyCheck(t))).next((()=>n.Fn.pn(t,r)))}))}(r.localStore,e);Dd(r,e,n),Rd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ud(r,t)}catch(i){await Wh(i)}}function Rd(t,e){(t.ko.get(e)||[]).forEach((t=>{t.resolve()})),t.ko.delete(e)}function Dd(t,e,n){const r=Fa(t);let i=r.xo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.xo[r.currentUser.toKey()]=i}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vo.get(e))t.vo.delete(r),n&&t.bo.Fo(r,n);t.Vo.delete(e),t.isPrimaryClient&&t.No.Zn(e).forEach((e=>{t.No.containsKey(e)||Ld(t,e)}))}function Ld(t,e){t.So.delete(e.path.canonicalString());const n=t.Do.get(e);null!==n&&(xl(t.remoteStore,n),t.Do=t.Do.remove(e),t.Co.delete(n),xd(t))}function Pd(t,e,n){for(const r of n)r instanceof gd?(t.No.addReference(r.key,e),Md(t,r)):r instanceof yd?(La("SyncEngine","Document no longer in limbo: "+r.key),t.No.removeReference(r.key,e),t.No.containsKey(r.key)||Ld(t,r.key)):Ua()}function Md(t,e){const n=e.key,r=n.path.canonicalString();t.Do.get(n)||t.So.has(r)||(La("SyncEngine","New document in limbo: "+n),t.So.add(r),xd(t))}function xd(t){for(;t.So.size>0&&t.Do.size<t.maxConcurrentLimboResolutions;){const e=t.So.values().next().value;t.So.delete(e);const n=new hc(Xa.fromString(e)),r=t.Oo.next();t.Co.set(r,new bd(n)),t.Do=t.Do.insert(n,r),Ml(t.remoteStore,new jh(Yc(Gc(n.path)),r,2,Na.o))}}async function Ud(t,e,n){const r=Fa(t),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((t,a)=>{o.push(r.Mo(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Yh.vn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.bo._r(i),await async function(t,e){const n=Fa(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Vh.forEach(e,(e=>Vh.forEach(e.Pn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Vh.forEach(e.bn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!Fh(r))throw r;La("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.kn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(t,i)}}}(r.localStore,s))}async function Vd(t,e){const n=Fa(t);if(!n.currentUser.isEqual(e)){La("SyncEngine","User change. New user:",e.toKey());const t=await tl(n.localStore,e);n.currentUser=e,(r=n).ko.forEach((t=>{t.forEach((t=>{t.reject(new Ra(Ca.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ud(n,t.Ln)}var r}function Fd(t,e){const n=Fa(t),r=n.Co.get(e);if(r&&r.Po)return Xu().add(r.key);{let t=Xu();const r=n.Vo.get(e);if(!r)return t;for(const e of r){const r=n.vo.get(e);t=t.unionWith(r.view.wo)}return t}}class qd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.R=Sl(t.databaseInfo.databaseId),this.sharedClientState=this.Bo(t),this.persistence=this.qo(t),await this.persistence.start(),this.gcScheduler=this.Uo(t),this.localStore=this.Ko(t)}Uo(t){return null}Ko(t){return function(t,e,n,r){return new Zh(t,e,n,r)}(this.persistence,new Jh,t.initialUser,this.R)}qo(t){return new fl(ml.Ps,this.R)}Bo(t){return new vl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ad(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vd.bind(null,this.syncEngine),await async function(t,e){const n=Fa(t);e?(n.Mr.delete(2),await Ll(n)):e||(n.Mr.add(2),await Pl(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ld}createDatastore(t){const e=Sl(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Il(r));var r,i;return i=t.credentials,new Rl(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Ad(this.syncEngine,t,0),s=bl.gt()?new bl:new wl,new Ol(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ed(t,e,n,r,i,s);return o&&(a.$o=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Fa(t);La("RemoteStore","RemoteStore shutting down."),e.Mr.add(5),await Pl(e),e.Lr.shutdown(),e.Br.set("Unknown")}(this.remoteStore)}}
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
 */class jd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.jo(this.observer.next,t)}error(t){this.observer.error?this.jo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Wo(){this.muted=!0}jo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
 */class $d{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=gl.UNAUTHENTICATED,this.clientId=Ba.u(),this.credentialListener=()=>{},this.receivedInitialUser=new Uh,this.credentials.setChangeListener((t=>{La("FirestoreClient","Received user=",t.uid),this.user=t,this.credentialListener(t),this.receivedInitialUser.resolve()}))}async getConfiguration(){return await this.receivedInitialUser.promise,{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t,this.receivedInitialUser.promise.then((()=>this.credentialListener(this.user)))}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ra(Ca.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Uh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),t.resolve()}catch(e){const n=od(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(La("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),La("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((n=>{r.isEqual(n)||(r=n,t.asyncQueue.enqueueRetryable((async()=>{await tl(e.localStore,n)})))})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new qd)),t.offlineComponents}(t);La("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((n=>t.asyncQueue.enqueueRetryable((()=>async function(t,e){const n=Fa(t);n.asyncQueue.verifyOperationInProgress(),La("RemoteStore","RemoteStore received new credentials");const r=Bl(n);n.Mr.add(3),await Pl(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Mr.delete(3),await Ll(n)}(e.remoteStore,n))))),t.onlineComponents=e}async function Kd(t){return t.onlineComponents||(La("FirestoreClient","Using default OnlineComponentProvider"),await zd(t,new Bd)),t.onlineComponents}async function Hd(t){const e=await Kd(t),n=e.eventManager;return n.onListen=_d.bind(null,e.syncEngine),n.onUnlisten=Id.bind(null,e.syncEngine),n}function Gd(t,e,n={}){const r=new Uh;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new jd({next:s=>{e.enqueueAndForget((()=>async function(t,e){const n=Fa(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ra(Ca.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ra(Ca.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new md(Gc(n.path),s,{includeMetadataChanges:!0,so:!0});return async function(e,n){const r=Fa(e),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new hd),s)try{o.Wr=await r.onListen(i)}catch(t){const r=od(t,`Initialization of query '${tu(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.zr(r.onlineState),o.Wr&&n.Hr(o.Wr)&&pd(r)}(t,o)}(await Hd(t),t.asyncQueue,e,n,r))),r.promise}class Wd{constructor(t,e,n,r,i,s,o){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o}}class Qd{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Qd&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Xd=new Map;
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
 */class Yd{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Jd{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(t){this.changeListener=t,t(gl.UNAUTHENTICATED)}removeChangeListener(){this.changeListener=null}}class Zd{constructor(t){this.oc=null,this.currentUser=gl.UNAUTHENTICATED,this.receivedInitialUser=!1,this.cc=0,this.changeListener=null,this.forceRefresh=!1,this.oc=()=>{this.cc++,this.currentUser=this.uc(),this.receivedInitialUser=!0,this.changeListener&&this.changeListener(this.currentUser)},this.cc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.oc):(this.oc(null),t.get().then((t=>{this.auth=t,this.oc&&this.auth.addAuthTokenListener(this.oc)}),(()=>{})))}getToken(){const t=this.cc,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.cc!==t?(La("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Va("string"==typeof e.accessToken),new Yd(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(t){this.changeListener=t,this.receivedInitialUser&&t(this.currentUser)}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.oc),this.oc=null,this.changeListener=null}uc(){const t=this.auth&&this.auth.getUid();return Va(null===t||"string"==typeof t),new gl(t)}}class tf{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n,this.type="FirstParty",this.user=gl.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.hc},e=this.ac.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.lc&&(t["X-Goog-Iam-Authorization-Token"]=this.lc),t}}class ef{constructor(t,e,n){this.ac=t,this.hc=e,this.lc=n}getToken(){return Promise.resolve(new tf(this.ac,this.hc,this.lc))}setChangeListener(t){t(gl.FIRST_PARTY)}removeChangeListener(){}invalidateToken(){}}
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
 */function nf(t,e,n){if(!n)throw new Ra(Ca.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rf(t){if(!hc.isDocumentKey(t))throw new Ra(Ca.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sf(t){if(hc.isDocumentKey(t))throw new Ra(Ca.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function of(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ua()}function af(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ra(Ca.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=of(t);throw new Ra(Ca.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class cf{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ra(Ca.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ra(Ca.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,function(t,e,n,r){if(!0===e&&!0===r)throw new Ra(Ca.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties}}
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
 */class uf{constructor(t,e){this._persistenceKey="(lite)",this._settings=new cf({}),this._settingsFrozen=!1,t instanceof Qd?(this._databaseId=t,this._credentials=new Jd):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ra(Ca.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qd(t.options.projectId)}(t),this._credentials=new Zd(e))}get app(){if(!this._app)throw new Ra(Ca.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ra(Ca.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cf(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Jd;switch(t.type){case"gapi":const e=t.client;return Va(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ef(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ra(Ca.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xd.get(t);e&&(La("ComponentProvider","Removing Datastore"),Xd.delete(t),e.terminate())}(this),Promise.resolve()}}
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
 */class hf{constructor(t,e,n){this._converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new df(this.firestore,this._converter,this._key.path.popLast())}withConverter(t){return new hf(this.firestore,t,this._key)}}class lf{constructor(t,e,n){this._converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new lf(this.firestore,t,this._query)}}class df extends lf{constructor(t,e,n){super(t,e,Gc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new hf(this.firestore,null,new hc(t))}withConverter(t){return new df(this.firestore,t,this._path)}}function ff(t,e,...n){if(t=Ut(t),nf("collection","path",e),t instanceof uf){const r=Xa.fromString(e,...n);return sf(r),new df(t,null,r)}{if(!(t instanceof hf||t instanceof df))throw new Ra(Ca.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=Xa.fromString(t.path,...n).child(Xa.fromString(e));return sf(r),new df(t.firestore,null,r)}}function pf(t,e,...n){if(t=Ut(t),1===arguments.length&&(e=Ba.u()),nf("doc","path",e),t instanceof uf){const r=Xa.fromString(e,...n);return rf(r),new hf(t,null,new hc(r))}{if(!(t instanceof hf||t instanceof df))throw new Ra(Ca.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xa.fromString(e,...n));return rf(r),new hf(t.firestore,t instanceof df?t._converter:null,new hc(r))}}
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
 */class mf{constructor(){this.fc=Promise.resolve(),this.dc=[],this.wc=!1,this._c=[],this.mc=null,this.gc=!1,this.yc=[],this.Zi=new Al(this,"async_queue_retry"),this.Ec=()=>{const t=Tl();t&&La("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Zi.Gi()};const t=Tl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ec)}get isShuttingDown(){return this.wc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Tc(),this.Ic(t)}enterRestrictedMode(){if(!this.wc){this.wc=!0;const t=Tl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ec)}}enqueue(t){return this.Tc(),this.wc?new Promise((t=>{})):this.Ic(t)}enqueueRetryable(t){this.enqueueAndForget((()=>(this.dc.push(t),this.Ac())))}async Ac(){if(0!==this.dc.length){try{await this.dc[0](),this.dc.shift(),this.Zi.reset()}catch(t){if(!Fh(t))throw t;La("AsyncQueue","Operation failed with retryable error: "+t)}this.dc.length>0&&this.Zi.ji((()=>this.Ac()))}}Ic(t){const e=this.fc.then((()=>(this.gc=!0,t().catch((t=>{throw this.mc=t,this.gc=!1,Pa("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.gc=!1,t))))));return this.fc=e,e}enqueueAfterDelay(t,e,n){this.Tc(),this.yc.indexOf(t)>-1&&(e=0);const r=sd.createAndSchedule(this,t,e,n,(t=>this.Rc(t)));return this._c.push(r),r}Tc(){this.mc&&Ua()}verifyOperationInProgress(){}async Pc(){let t;do{t=this.fc,await t}while(t!==this.fc)}bc(t){for(const e of this._c)if(e.timerId===t)return!0;return!1}vc(t){return this.Pc().then((()=>{this._c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pc()}))}Vc(t){this.yc.push(t)}Rc(t){const e=this._c.indexOf(t);this._c.splice(e,1)}}class gf extends uf{constructor(t,e){super(t,e),this._queue=new mf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||wf(this),this._firestoreClient.terminate()}}function yf(t=ae()){return re(t,"firestore-exp").getImmediate()}function vf(t){return t._firestoreClient||wf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wf(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Wd(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling));var i,s,o,a;t._firestoreClient=new $d(t._credentials,t._queue,r)}
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
 */class bf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ra(Ca.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ja(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
 */class Ef{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ef(tc.fromBase64String(t))}catch(e){throw new Ra(Ca.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ef(tc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class _f{constructor(t){this._methodName=t}}
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
 */class If{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ra(Ca.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ra(Ca.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ja(this._lat,t._lat)||ja(this._long,t._long)}}
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
 */const Tf=/^__.*__$/;class Sf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Cu(t,this.data,this.fieldMask,e,this.fieldTransforms):new Nu(t,this.data,e,this.fieldTransforms)}}function Af(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ua()}}class kf{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Dc(){return this.settings.Dc}Cc(t){return new kf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Cc({path:n,xc:!1});return r.kc(t),r}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Cc({path:n,xc:!1});return r.Sc(),r}$c(t){return this.Cc({path:void 0,xc:!0})}Mc(t){return Vf(t,this.settings.methodName,this.settings.Fc||!1,this.path,this.settings.Lc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sc(){if(this.path)for(let t=0;t<this.path.length;t++)this.kc(this.path.get(t))}kc(t){if(0===t.length)throw this.Mc("Document fields must not be empty");if(Af(this.Dc)&&Tf.test(t))throw this.Mc('Document fields cannot begin and end with "__"')}}class Nf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.R=n||Sl(t)}Bc(t,e,n,r=!1){return new kf({Dc:t,methodName:e,Lc:n,path:Ja.emptyPath(),xc:!1,Fc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)}}function Cf(t){const e=t._freezeSettings(),n=Sl(t._databaseId);return new Nf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rf(t,e,n,r,i,s={}){const o=t.Bc(s.merge||s.mergeFields?2:0,e,n,i);Pf("Data must be an object, but it was:",o,r);const a=Of(r,o);let c,u;if(s.merge)c=new Za(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Mf(e,r,n);if(!o.contains(i))throw new Ra(Ca.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ff(t,i)||t.push(i)}c=new Za(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Sf(new Ic(a),c,u)}function Df(t,e){if(Lf(t=Ut(t)))return Pf("Unsupported field value:",e,t),Of(t,e);if(t instanceof _f)return function(t,e){if(!Af(e.Dc))throw e.Mc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Mc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xc&&4!==e.Dc)throw e.Mc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Df(i,e.$c(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ut(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ou(e.R,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=za.fromDate(t);return{timestampValue:lh(e.R,n)}}if(t instanceof za){const n=new za(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:lh(e.R,n)}}if(t instanceof If)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ef)return{bytesValue:dh(e.R,t._byteString)};if(t instanceof hf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Mc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:mh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Mc(`Unsupported field value: ${of(t)}`)}(t,e)}function Of(t,e){const n={};return Wa(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ga(t,((t,r)=>{const i=Df(r,e.Nc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Lf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof za||t instanceof If||t instanceof Ef||t instanceof hf||t instanceof _f)}function Pf(t,e,n){if(!Lf(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=of(n);throw"an object"===r?e.Mc(t+" a custom object"):e.Mc(t+" "+r)}var r}function Mf(t,e,n){if((e=Ut(e))instanceof bf)return e._internalPath;if("string"==typeof e)return Uf(t,e);throw Vf("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const xf=new RegExp("[~\\*/\\[\\]]");function Uf(t,e,n){if(e.search(xf)>=0)throw Vf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bf(...e.split("."))._internalPath}catch(r){throw Vf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ra(Ca.INVALID_ARGUMENT,a+t+c)}function Ff(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class qf{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.toProto())}}get(t){if(this._document){const e=this._document.data.field(jf("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bf extends qf{data(){return super.data()}}function jf(t,e){return"string"==typeof e?Uf(t,e):e instanceof bf?e._internalPath:e._delegate._internalPath}
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
 */class $f{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zf extends qf{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.toProto(),t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(jf("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Kf extends zf{data(t={}){return super.data(t)}}
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
function Hf(t){t=af(t,hf);const e=af(t.firestore,gf);return Gd(vf(e),t._key).then((n=>function(t,e,n){const r=n.docs.get(e._key),i=new Gf(t);return new zf(t,i,e._key,r,new $f(n.hasPendingWrites,n.fromCache),e._converter)}(e,t,n)))}class Gf extends class{convertValue(t,e="none"){switch(lc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rc(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ic(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ua()}}convertObject(t,e){const n={};return Ga(t.fields||{},((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new If(rc(t.latitude),rc(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=oc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ac(t));default:return null}}convertTimestamp(t){const e=nc(t);return new za(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Xa.fromString(t);Va(xh(n));const r=new Qd(n.get(1),n.get(3)),i=new hc(n.popFirst(5));return r.isEqual(e)||Pa(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ef(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new hf(this.firestore,null,e)}}function Wf(t,e,n){t=af(t,hf);const r=af(t.firestore,gf),i=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t._converter,e,n);return function(t,e){return function(t,e){const n=new Uh;return t.asyncQueue.enqueueAndForget((async()=>Td(await function(t){return Kd(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(vf(t),e)}(r,[Rf(Cf(r),"setDoc",t._key,i,null!==t._converter,n).toMutation(t._key,bu.none())])}ne(new Vt("firestore-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),r=new gf(n,t.getProvider("auth-internal"));return e&&r._setSettings(e),r}),"PUBLIC")),ce("@firebase/firestore","0.0.900-exp.894b5da5a",undefined);export{Wf as $,e as A,J as B,dt as C,f as D,c as E,h as F,a as G,oe as H,wr as I,t as J,R as K,U as L,l as M,E as N,V as O,g as P,C as Q,yf as R,ht as S,i as T,d as U,_ as V,Tn as W,Hf as X,ff as Y,In as Z,pf as _,T as a,I as b,S as c,m as d,y as e,p as f,A as g,N as h,ut as i,it as j,w as k,b as l,st as m,k as n,ot as o,nt as p,rt as q,et as r,o as s,v as t,Z as u,tt as v,at as w,x,M as y,P as z};
