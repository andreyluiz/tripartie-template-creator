var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function o(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function p(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){return""===e?null:+e}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function b(e,t){e.value=null==t?"":t}function m(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}function y(e,t,n){e.classList[n?"add":"remove"](t)}let g;function x(e){g=e}function $(e){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(e)}const z=[],w=[],_=[],C=[],I=Promise.resolve();let k=!1;function E(e){_.push(e)}let A=!1;const S=new Set;function T(){if(!A){A=!0;do{for(let e=0;e<z.length;e+=1){const t=z[e];x(t),D(t.$$)}for(x(null),z.length=0;w.length;)w.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];S.has(t)||(S.add(t),t())}_.length=0}while(z.length);for(;C.length;)C.pop()();k=!1,A=!1,S.clear()}}function D(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const P=new Set;function U(e,t){-1===e.$$.dirty[0]&&(z.push(e),k||(k=!0,I.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(r,s,o,c,u,d,p,f=[-1]){const v=g;x(r);const h=r.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(v?v.$$.context:s.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||v.$$.root};p&&p(h.root);let b=!1;if(h.ctx=o?o(r,s.props||{},((e,t,...n)=>{const l=n.length?n[0]:t;return h.ctx&&u(h.ctx[e],h.ctx[e]=l)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](l),b&&U(r,e)),t})):[],h.update(),b=!0,l(h.before_update),h.fragment=!!c&&c(h.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);h.fragment&&h.fragment.l(e),e.forEach(a)}else h.fragment&&h.fragment.c();s.intro&&((m=r.$$.fragment)&&m.i&&(P.delete(m),m.i(y))),function(e,n,r,s){const{fragment:o,on_mount:a,on_destroy:c,after_update:u}=e.$$;o&&o.m(n,r),s||E((()=>{const n=a.map(t).filter(i);c?c.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(E)}(r,s.target,s.anchor,s.customElement),T()}var m,y;x(v)}function K(e){let t,n,l=e[12].text+"";return{c(){t=c("div"),n=u(l),f(t,"class","message svelte-9zbdep"),y(t,"error",e[12].error)},m(e,l){o(e,t,l),s(t,n)},p(e,i){4096&i&&l!==(l=e[12].text+"")&&h(n,l),4096&i&&y(t,"error",e[12].error)},d(e){e&&a(t)}}}function N(e){let t,n;return{c(){t=c("button"),n=u("Create"),t.disabled=e[11],f(t,"type","submit"),f(t,"class","svelte-9zbdep")},m(e,l){o(e,t,l),s(t,n)},p(e,n){2048&n&&(t.disabled=e[11])},d(e){e&&a(t)}}}function O(t){let n;return{c(){n=c("h4"),n.textContent="Loading..."},m(e,t){o(e,n,t)},p:e,d(e){e&&a(n)}}}function j(t){let n,i,r,y,g,x,$,z,w,_,C,I,k,A,S,T,D,P,U,L,j,R,F,W,q,J,B,H,M,G,Q,V,X,Y,Z,ee,te,ne,le,ie,re,se,oe,ae,ce,ue,de,pe,fe,ve,he,be,me,ye,ge,xe,$e,ze,we,_e,Ce,Ie,ke,Ee,Ae,Se,Te,De,Pe=t[12].text&&K(t);function Ue(e,t){return e[13]?O:N}let Le=Ue(t),Ke=Le(t);return{c(){n=c("main"),Pe&&Pe.c(),i=d(),r=c("h3"),r.textContent="Input data below",y=d(),g=c("form"),x=c("div"),$=c("label"),$.textContent="API Key",z=d(),w=c("input"),_=d(),C=c("div"),I=c("label"),I.textContent="Title",k=d(),A=c("input"),S=d(),T=c("div"),D=c("label"),D.textContent="Description",P=d(),U=c("textarea"),L=d(),j=c("div"),R=c("label"),R.textContent="Currency",F=d(),W=c("select"),q=c("option"),q.textContent="Euro",J=c("option"),J.textContent="Swiss Franc",B=d(),H=c("div"),M=c("label"),G=u("Price in "),Q=u(t[3]),V=d(),X=c("input"),Y=d(),Z=c("div"),ee=c("label"),ee.textContent="Template ID",te=d(),ne=c("input"),le=d(),ie=c("div"),re=c("label"),re.textContent="Seller ID",se=d(),oe=c("input"),ae=d(),ce=c("div"),ue=c("label"),ue.textContent="Seller E-mail",de=d(),pe=c("input"),fe=d(),ve=c("div"),he=c("label"),he.textContent="Listing URL",be=d(),me=c("input"),ye=d(),ge=c("div"),xe=c("label"),xe.textContent="Allow in person",$e=d(),ze=c("input"),we=d(),_e=c("div"),Ce=c("label"),Ce.textContent="Allow delivery",Ie=d(),ke=c("input"),Ee=d(),Ke.c(),Ae=d(),Se=c("button"),Se.textContent="Clean Cache",f($,"for","api-key"),f($,"class","svelte-9zbdep"),f(w,"type","text"),f(w,"name","api-key"),f(w,"id","api-key"),f(w,"placeholder","API Key"),f(w,"class","svelte-9zbdep"),f(x,"class","input svelte-9zbdep"),f(I,"for","title"),f(I,"class","svelte-9zbdep"),f(A,"type","text"),f(A,"name","title"),f(A,"id","title"),f(A,"placeholder","Title"),f(A,"class","svelte-9zbdep"),f(C,"class","input svelte-9zbdep"),f(D,"for","description"),f(D,"class","svelte-9zbdep"),f(U,"type","text"),f(U,"name","description"),f(U,"id","description"),f(U,"placeholder","Description"),f(U,"class","svelte-9zbdep"),f(T,"class","input svelte-9zbdep"),f(R,"for","currency"),f(R,"class","svelte-9zbdep"),q.__value="EUR",q.value=q.__value,J.__value="CHF",J.value=J.__value,f(W,"name","currency"),f(W,"class","svelte-9zbdep"),void 0===t[3]&&E((()=>t[19].call(W))),f(j,"class","input svelte-9zbdep"),f(M,"for","price"),f(M,"class","svelte-9zbdep"),f(X,"type","number"),f(X,"name","price"),f(X,"id","price"),f(X,"placeholder","Price"),f(X,"class","svelte-9zbdep"),f(H,"class","input svelte-9zbdep"),f(ee,"for","template-id"),f(ee,"class","svelte-9zbdep"),f(ne,"type","text"),f(ne,"name","template-id"),f(ne,"id","template-id"),f(ne,"placeholder","Template ID"),f(ne,"class","svelte-9zbdep"),f(Z,"class","input svelte-9zbdep"),f(re,"for","seller-id"),f(re,"class","svelte-9zbdep"),f(oe,"type","number"),f(oe,"name","seller-id"),f(oe,"id","seller-id"),f(oe,"placeholder","Seller ID"),f(oe,"class","svelte-9zbdep"),f(ie,"class","input svelte-9zbdep"),f(ue,"for","seller-email"),f(ue,"class","svelte-9zbdep"),f(pe,"type","email"),f(pe,"name","seller-email"),f(pe,"id","seller-email"),f(pe,"placeholder","Seller E-mail"),f(pe,"class","svelte-9zbdep"),f(ce,"class","input svelte-9zbdep"),f(he,"for","listing-url"),f(he,"class","svelte-9zbdep"),f(me,"type","url"),f(me,"name","listing-url"),f(me,"id","listing-url"),f(me,"placeholder","Listing URL"),f(me,"class","svelte-9zbdep"),f(ve,"class","input svelte-9zbdep"),f(xe,"for","listing-url"),f(xe,"class","svelte-9zbdep"),f(ze,"type","checkbox"),f(ze,"name","allow-in-person"),f(ze,"id","allow-in-person"),f(ze,"class","svelte-9zbdep"),f(ge,"class","input svelte-9zbdep"),f(Ce,"for","listing-url"),f(Ce,"class","svelte-9zbdep"),f(ke,"type","checkbox"),f(ke,"name","allow-delivery"),f(ke,"id","allow-delivery"),f(ke,"class","svelte-9zbdep"),f(_e,"class","input svelte-9zbdep"),f(g,"class","svelte-9zbdep"),f(n,"class","svelte-9zbdep")},m(e,l){o(e,n,l),Pe&&Pe.m(n,null),s(n,i),s(n,r),s(n,y),s(n,g),s(g,x),s(x,$),s(x,z),s(x,w),b(w,t[0]),s(g,_),s(g,C),s(C,I),s(C,k),s(C,A),b(A,t[1]),s(g,S),s(g,T),s(T,D),s(T,P),s(T,U),b(U,t[2]),s(g,L),s(g,j),s(j,R),s(j,F),s(j,W),s(W,q),s(W,J),m(W,t[3]),s(g,B),s(g,H),s(H,M),s(M,G),s(M,Q),s(H,V),s(H,X),b(X,t[4]),s(g,Y),s(g,Z),s(Z,ee),s(Z,te),s(Z,ne),b(ne,t[5]),s(g,le),s(g,ie),s(ie,re),s(ie,se),s(ie,oe),b(oe,t[6]),s(g,ae),s(g,ce),s(ce,ue),s(ce,de),s(ce,pe),b(pe,t[7]),s(g,fe),s(g,ve),s(ve,he),s(ve,be),s(ve,me),b(me,t[8]),s(g,ye),s(g,ge),s(ge,xe),s(ge,$e),s(ge,ze),ze.checked=t[9],s(g,we),s(g,_e),s(_e,Ce),s(_e,Ie),s(_e,ke),ke.checked=t[10],s(g,Ee),Ke.m(g,null),s(n,Ae),s(n,Se),Te||(De=[p(w,"input",t[16]),p(A,"input",t[17]),p(U,"input",t[18]),p(W,"change",t[19]),p(X,"input",t[20]),p(ne,"input",t[21]),p(oe,"input",t[22]),p(pe,"input",t[23]),p(me,"input",t[24]),p(ze,"change",t[25]),p(ke,"change",t[26]),p(g,"submit",t[14]),p(Se,"click",t[15])],Te=!0)},p(e,[t]){e[12].text?Pe?Pe.p(e,t):(Pe=K(e),Pe.c(),Pe.m(n,i)):Pe&&(Pe.d(1),Pe=null),1&t&&w.value!==e[0]&&b(w,e[0]),2&t&&A.value!==e[1]&&b(A,e[1]),4&t&&b(U,e[2]),8&t&&m(W,e[3]),8&t&&h(Q,e[3]),16&t&&v(X.value)!==e[4]&&b(X,e[4]),32&t&&ne.value!==e[5]&&b(ne,e[5]),64&t&&v(oe.value)!==e[6]&&b(oe,e[6]),128&t&&pe.value!==e[7]&&b(pe,e[7]),256&t&&b(me,e[8]),512&t&&(ze.checked=e[9]),1024&t&&(ke.checked=e[10]),Le===(Le=Ue(e))&&Ke?Ke.p(e,t):(Ke.d(1),Ke=Le(e),Ke&&(Ke.c(),Ke.m(g,null)))},i:e,o:e,d(e){e&&a(n),Pe&&Pe.d(),Ke.d(),Te=!1,l(De)}}}function R(e,t,n){let l={},i=l.apiKey||"",r=l.title||"",s=l.description||"",o=l.currency||"EUR",a=l.price||"",c=l.listingId||"",u=l.sellerId||"",d=l.sellerEmail||"",p=l.listingUrl||"",f=l.allowInPerson||!1,h=l.allowDelivery||!1,b=!1,m={error:!1,text:""},y=!1;$((()=>{const e=localStorage.getItem("cache");if(e)try{l=JSON.parse(e),n(0,i=l.apiKey),n(1,r=l.title),n(2,s=l.description),n(3,o=l.currency),n(4,a=l.price),n(5,c=l.listingId),n(6,u=l.sellerId),n(7,d=l.sellerEmail),n(8,p=l.listingUrl),n(9,f=l.allowInPerson),n(10,h=l.allowDelivery)}catch(e){l={}}}));const g=(e,t=!1)=>{n(12,m={error:t,text:e})};return e.$$.update=()=>{511&e.$$.dirty&&n(11,b=!(i&&r&&s&&a&&o&&c&&u&&d&&p)),1&e.$$.dirty&&(e=>{const t=TripartieWebApi.ApiClient.instance,{ClientIdAuth:n}=t.authentications;n.apiKey=e})(i),2047&e.$$.dirty&&(l={apiKey:i,sellerId:u,sellerEmail:d,title:r,description:s,price:a,currency:o,listingId:c,listingUrl:p,allowInPerson:f,allowDelivery:h})},[i,r,s,o,a,c,u,d,p,f,h,b,m,y,async e=>{e.preventDefault(),g("");try{n(13,y=!0),console.log(l),localStorage.setItem("cache",JSON.stringify(l)),await(async(e,t,n,l,i,r,s,o,a,c,u)=>{const d=new TripartieWebApi.UsersApi;let p;try{p=await d.fetch({externalId:e})}catch(e){console.log("user error",e)}p||await d.register({email:t,externalId:e});const f=new TripartieWebApi.TransactionTemplatesApi,v={title:n,description:l,subTotal:100*i,externalId:s,sellerExternalId:e,currency:r,flow:"objects",shippingProviders:"swiss-post",productCategory:"other",allowPriceChange:!1,adUrl:a,allowInPerson:c,allowDelivery:u};await f.create(v)})(u,d,r,s,a,o,c,0,p,f,h),g("Template created. Check admin dashboard to find it.")}catch(e){console.log(e),g(e.error.message||e.message||e.response.text,!0)}finally{n(13,y=!1)}},()=>{localStorage.removeItem("cache")},function(){i=this.value,n(0,i)},function(){r=this.value,n(1,r)},function(){s=this.value,n(2,s)},function(){o=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(3,o)},function(){a=v(this.value),n(4,a)},function(){c=this.value,n(5,c)},function(){u=v(this.value),n(6,u)},function(){d=this.value,n(7,d)},function(){p=this.value,n(8,p)},function(){f=this.checked,n(9,f)},function(){h=this.checked,n(10,h)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),L(this,e,R,j,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
