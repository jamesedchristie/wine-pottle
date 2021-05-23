import{S as e,i as t,s as r,j as s,m as n,o as i,v as a,r as o,w as c,e as l,k as h,t as f,c as u,a as d,d as p,n as v,g as m,b as $,f as w,D as g,h as y,Q as E,N as j,V as I,u as x,P,T as b,G as k,L as A,B as N}from"../../../../chunks/vendor-4d4e9b60.js";import{s as T}from"../../../../chunks/utils-ccc08853.js";import{B as V}from"../../../../chunks/Button-05365e81.js";import{E as D}from"../../../../chunks/ErrorAlert-442993d9.js";import{s as L}from"../../../../chunks/stores-30b5dc7d.js";function S(e,t,r){const s=e.slice();return s[8]=t[r],s}function B(e){let t,r;return t=new D({props:{$$slots:{default:[C]},$$scope:{ctx:e}}}),{c(){s(t.$$.fragment)},l(e){n(t.$$.fragment,e)},m(e,s){i(t,e,s),r=!0},p(e,r){const s={};2049&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(a(t.$$.fragment,e),r=!0)},o(e){o(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function C(e){let t;return{c(){t=f(e[0])},l(r){t=m(r,e[0])},m(e,r){w(e,t,r)},p(e,r){1&r&&y(t,e[0])},d(e){e&&p(t)}}}function O(e){let t;return{c(){t=f("Post")},l(e){t=m(e,"Post")},m(e,r){w(e,t,r)},d(e){e&&p(t)}}}function U(e){let t,r,s,n,i,a,o,c,E,j,I,x,P,b,k,A,N,T=e[8].preview.title+"",V=e[8].preview.description+"";return{c(){t=l("article"),r=l("div"),s=l("img"),a=h(),o=l("div"),c=l("h4"),E=f(T),j=h(),I=l("p"),x=f(V),P=h(),b=l("a"),k=f("Visit"),N=h(),this.h()},l(e){t=u(e,"ARTICLE",{class:!0});var n=d(t);r=u(n,"DIV",{class:!0});var i=d(r);s=u(i,"IMG",{src:!0,alt:!0,width:!0}),i.forEach(p),a=v(n),o=u(n,"DIV",{class:!0});var l=d(o);c=u(l,"H4",{});var h=d(c);E=m(h,T),h.forEach(p),j=v(l),I=u(l,"P",{});var f=d(I);x=m(f,V),f.forEach(p),P=v(l),b=u(l,"A",{href:!0,target:!0});var $=d(b);k=m($,"Visit"),$.forEach(p),l.forEach(p),N=v(n),n.forEach(p),this.h()},h(){var a,c;s.src!==(n=(null==(c=null==(a=e[8].preview)?void 0:a.images)?void 0:c.length)>0?e[8].preview.images[0]:"")&&$(s,"src",n),$(s,"alt",i=e[8].preview.title),$(s,"width","100"),$(r,"class","articleImage svelte-1eumhpq"),$(b,"href",A=e[8].href),$(b,"target","_blank"),$(o,"class","articleInfo"),$(t,"class","svelte-1eumhpq")},m(e,n){w(e,t,n),g(t,r),g(r,s),g(t,a),g(t,o),g(o,c),g(c,E),g(o,j),g(o,I),g(I,x),g(o,P),g(o,b),g(b,k),g(t,N)},p(e,t){var r,a;2&t&&s.src!==(n=(null==(a=null==(r=e[8].preview)?void 0:r.images)?void 0:a.length)>0?e[8].preview.images[0]:"")&&$(s,"src",n),2&t&&i!==(i=e[8].preview.title)&&$(s,"alt",i),2&t&&T!==(T=e[8].preview.title+"")&&y(E,T),2&t&&V!==(V=e[8].preview.description+"")&&y(x,V),2&t&&A!==(A=e[8].href)&&$(b,"href",A)},d(e){e&&p(t)}}}function q(e){let t,r,y,k,A,D,L,C,q,R,_,F,G,H,J,M,Q,z,K,W=e[0]&&B(e);H=new V({props:{variant:"primary",type:"submit",$$slots:{default:[O]},$$scope:{ctx:e}}});let X=T(e[1]),Y=[];for(let s=0;s<X.length;s+=1)Y[s]=U(S(e,X,s));return{c(){t=l("h1"),r=f("Articles"),y=h(),W&&W.c(),k=h(),A=l("section"),D=l("form"),L=l("div"),C=l("label"),q=f("URL"),R=h(),_=l("input"),F=h(),G=l("div"),s(H.$$.fragment),J=h(),M=l("section");for(let e=0;e<Y.length;e+=1)Y[e].c();this.h()},l(e){t=u(e,"H1",{});var s=d(t);r=m(s,"Articles"),s.forEach(p),y=v(e),W&&W.l(e),k=v(e),A=u(e,"SECTION",{id:!0,class:!0});var i=d(A);D=u(i,"FORM",{id:!0});var a=d(D);L=u(a,"DIV",{id:!0});var o=d(L);C=u(o,"LABEL",{for:!0});var c=d(C);q=m(c,"URL"),c.forEach(p),R=v(o),_=u(o,"INPUT",{id:!0,type:!0,placeholder:!0}),o.forEach(p),F=v(a),G=u(a,"DIV",{id:!0});var l=d(G);n(H.$$.fragment,l),l.forEach(p),a.forEach(p),i.forEach(p),J=v(e),M=u(e,"SECTION",{id:!0,class:!0});var h=d(M);for(let t=0;t<Y.length;t+=1)Y[t].l(h);h.forEach(p),this.h()},h(){$(C,"for","articleUrl"),$(_,"id","articleUrl"),$(_,"type","text"),$(_,"placeholder","Paste the address of the article..."),$(L,"id","titleSection"),$(G,"id","newPostButtons"),$(D,"id","newPostForm"),$(A,"id","newArticle"),$(A,"class","svelte-1eumhpq"),$(M,"id","feed"),$(M,"class","svelte-1eumhpq")},m(s,n){w(s,t,n),g(t,r),w(s,y,n),W&&W.m(s,n),w(s,k,n),w(s,A,n),g(A,D),g(D,L),g(L,C),g(C,q),g(L,R),g(L,_),E(_,e[2]),g(D,F),g(D,G),i(H,G,null),w(s,J,n),w(s,M,n);for(let e=0;e<Y.length;e+=1)Y[e].m(M,null);Q=!0,z||(K=[j(_,"input",e[4]),j(D,"submit",I(e[3]))],z=!0)},p(e,[t]){e[0]?W?(W.p(e,t),1&t&&a(W,1)):(W=B(e),W.c(),a(W,1),W.m(k.parentNode,k)):W&&(N(),o(W,1,1,(()=>{W=null})),x()),4&t&&_.value!==e[2]&&E(_,e[2]);const r={};if(2048&t&&(r.$$scope={dirty:t,ctx:e}),H.$set(r),2&t){let r;for(X=T(e[1]),r=0;r<X.length;r+=1){const s=S(e,X,r);Y[r]?Y[r].p(s,t):(Y[r]=U(s),Y[r].c(),Y[r].m(M,null))}for(;r<Y.length;r+=1)Y[r].d(1);Y.length=X.length}},i(e){Q||(a(W),a(H.$$.fragment,e),Q=!0)},o(e){o(W),o(H.$$.fragment,e),Q=!1},d(e){e&&p(t),e&&p(y),W&&W.d(e),e&&p(k),e&&p(A),c(H),e&&p(J),e&&p(M),P(Y,e),z=!1,b(K)}}}var R=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function a(e){try{c(s.next(e))}catch(t){i(t)}}function o(e){try{c(s.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}c((s=s.apply(e,t||[])).next())}))};const _=({fetch:e,session:t})=>R(void 0,void 0,void 0,(function*(){try{const r=yield e("/articles.json?venueId="+t.venue.id);if(!r.ok){throw(yield r.json()).errors}return{props:{articles:yield r.json()}}}catch(r){return{props:{err:r}}}}));function F(e,t,r){let s;k(e,L,(e=>r(5,s=e)));var n=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function a(e){try{c(s.next(e))}catch(t){i(t)}}function o(e){try{c(s.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}c((s=s.apply(e,t||[])).next())}))};let{err:i}=t;A("store");let{articles:a=[]}=t,o="";return e.$$set=e=>{"err"in e&&r(0,i=e.err),"articles"in e&&r(1,a=e.articles)},[i,a,o,function(){return n(this,void 0,void 0,(function*(){try{const e={userId:s.user.id,venueId:s.venue.id,href:o,datetime:new Date},t=yield fetch("/articles/preview",{method:"post",credentials:"include",headers:{"Content-Type":"application/json "},body:JSON.stringify({url:o})});if(!t.ok){throw(yield t.json()).errors}e.preview=yield t.json(),r(1,a=[...a,e]),fetch("/articles.json",{method:"post",credentials:"include",headers:{"Content-Type":"application/json "},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{if(e.errors)throw e.errors;console.log(e)}))}catch(e){r(0,i=e)}}))},function(){o=this.value,r(2,o)}]}export default class extends e{constructor(e){super(),t(this,e,F,q,r,{err:0,articles:1})}}export{_ as load};