(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca18137"],{"0418":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[e("ul",{staticClass:"navbar-nav m-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"Content",params:{userId:this.User.id}}}},[t._v("Home")])],1),t._m(2),t._m(3),t._m(4),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{path:"createpost/"+this.User.id}}},[t._v("Add Blog")])],1)]),!1===t.authenticated?e("div",{staticClass:"d-flex buttonContainer"},[e("router-link",{attrs:{to:"/"}},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v("Login")])]),e("router-link",{attrs:{to:"/Signup"}},[e("button",{staticClass:"btn signup",attrs:{type:"button"}},[t._v("Sign up")])])],1):t._e(),!0===t.authenticated?e("div",{staticClass:"d-flex buttonContainer"},[e("router-link",{attrs:{to:"/"}},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.logout}},[t._v(" Logout ")])])],1):t._e()])])])])},o=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("a",{staticClass:"navbar-brand d-flex",attrs:{href:"#"}},[n("img",{staticClass:"d-inline-block align-text-top logo-image",attrs:{src:e("e809"),alt:"logo"}}),n("p",{staticClass:"m-auto logo-title"},[t._v("Gemini")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("i",{staticClass:"fa fa-bars"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link"},[t._v("Blog")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link"},[t._v("Docs")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link"},[t._v("About us")])])}],i=e("1da1"),a=e("5530"),c=(e("96cf"),e("2f62")),u={name:"Header",methods:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["Logout"])),{},{logout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.Logout();case 2:t.$router.push("/login");case 3:case"end":return r.stop()}}),r)})))()}}),computed:Object(a["a"])({authenticated:function(){var t=(!this.User||null!=this.User.id)&&(!(!this.User||!this.User.id)||void 0);return t}},Object(c["c"])({userPosts:"posts",User:"user"}))},s=u,f=e("2877"),l=Object(f["a"])(s,n,o,!1,null,"34786316",null);r["a"]=l.exports},"057f":function(t,r,e){var n=e("c6b6"),o=e("fc6a"),i=e("241c").f,a=e("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(r){return a(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?u(t):i(o(t))}},"159b":function(t,r,e){var n=e("da84"),o=e("fdbc"),i=e("785a"),a=e("17c2"),c=e("9112"),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(r){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,o=e("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7");function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"428f":function(t,r,e){var n=e("da84");t.exports=n},"4dae":function(t,r,e){var n=e("da84"),o=e("23cb"),i=e("07fa"),a=e("8418"),c=n.Array,u=Math.max;t.exports=function(t,r,e){for(var n=i(t),s=o(r,n),f=o(void 0===e?n:e,n),l=c(u(f-s,0)),h=0;s<f;s++,h++)a(l,h,t[s]);return l.length=h,l}},5530:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("159b"),e("dbb4");function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}},"746f":function(t,r,e){var n=e("428f"),o=e("1a2d"),i=e("e538"),a=e("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},8418:function(t,r,e){"use strict";var n=e("a04b"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(T){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=E(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={};function b(){}function g(){}function y(){}var m={};u(m,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(S([])));O&&O!==e&&n.call(O,i)&&(m=O);var x=y.prototype=b.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,r,e){var n=l;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=v;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?p:h,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a4d3:function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),i=e("d066"),a=e("2ba4"),c=e("c65b"),u=e("e330"),s=e("c430"),f=e("83ab"),l=e("4930"),h=e("d039"),v=e("1a2d"),p=e("e8b5"),d=e("1626"),b=e("861d"),g=e("3a9b"),y=e("d9b5"),m=e("825a"),w=e("7b0b"),O=e("fc6a"),x=e("a04b"),j=e("577e"),_=e("5c6c"),E=e("7c73"),L=e("df75"),P=e("241c"),k=e("057f"),C=e("7418"),S=e("06cf"),N=e("9bf2"),T=e("37e8"),D=e("d1e7"),G=e("f36a"),F=e("6eeb"),U=e("5692"),$=e("f772"),A=e("d012"),I=e("90e3"),R=e("b622"),J=e("e538"),B=e("746f"),H=e("d44e"),Y=e("69f3"),M=e("b727").forEach,Q=$("hidden"),W="Symbol",q="prototype",z=R("toPrimitive"),K=Y.set,V=Y.getterFor(W),X=Object[q],Z=o.Symbol,tt=Z&&Z[q],rt=o.TypeError,et=o.QObject,nt=i("JSON","stringify"),ot=S.f,it=N.f,at=k.f,ct=D.f,ut=u([].push),st=U("symbols"),ft=U("op-symbols"),lt=U("string-to-symbol-registry"),ht=U("symbol-to-string-registry"),vt=U("wks"),pt=!et||!et[q]||!et[q].findChild,dt=f&&h((function(){return 7!=E(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=ot(X,r);n&&delete X[r],it(t,r,e),n&&t!==X&&it(X,r,n)}:it,bt=function(t,r){var e=st[t]=E(tt);return K(e,{type:W,tag:t,description:r}),f||(e.description=r),e},gt=function(t,r,e){t===X&&gt(ft,r,e),m(t);var n=x(r);return m(e),v(st,n)?(e.enumerable?(v(t,Q)&&t[Q][n]&&(t[Q][n]=!1),e=E(e,{enumerable:_(0,!1)})):(v(t,Q)||it(t,Q,_(1,{})),t[Q][n]=!0),dt(t,n,e)):it(t,n,e)},yt=function(t,r){m(t);var e=O(r),n=L(e).concat(jt(e));return M(n,(function(r){f&&!c(wt,e,r)||gt(t,r,e[r])})),t},mt=function(t,r){return void 0===r?E(t):yt(E(t),r)},wt=function(t){var r=x(t),e=c(ct,this,r);return!(this===X&&v(st,r)&&!v(ft,r))&&(!(e||!v(this,r)||!v(st,r)||v(this,Q)&&this[Q][r])||e)},Ot=function(t,r){var e=O(t),n=x(r);if(e!==X||!v(st,n)||v(ft,n)){var o=ot(e,n);return!o||!v(st,n)||v(e,Q)&&e[Q][n]||(o.enumerable=!0),o}},xt=function(t){var r=at(O(t)),e=[];return M(r,(function(t){v(st,t)||v(A,t)||ut(e,t)})),e},jt=function(t){var r=t===X,e=at(r?ft:O(t)),n=[];return M(e,(function(t){!v(st,t)||r&&!v(X,t)||ut(n,st[t])})),n};if(l||(Z=function(){if(g(tt,this))throw rt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,r=I(t),e=function(t){this===X&&c(e,ft,t),v(this,Q)&&v(this[Q],r)&&(this[Q][r]=!1),dt(this,r,_(1,t))};return f&&pt&&dt(X,r,{configurable:!0,set:e}),bt(r,t)},tt=Z[q],F(tt,"toString",(function(){return V(this).tag})),F(Z,"withoutSetter",(function(t){return bt(I(t),t)})),D.f=wt,N.f=gt,T.f=yt,S.f=Ot,P.f=k.f=xt,C.f=jt,J.f=function(t){return bt(R(t),t)},f&&(it(tt,"description",{configurable:!0,get:function(){return V(this).description}}),s||F(X,"propertyIsEnumerable",wt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),M(L(vt),(function(t){B(t)})),n({target:W,stat:!0,forced:!l},{for:function(t){var r=j(t);if(v(lt,r))return lt[r];var e=Z(r);return lt[r]=e,ht[e]=r,e},keyFor:function(t){if(!y(t))throw rt(t+" is not a symbol");if(v(ht,t))return ht[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!f},{create:mt,defineProperty:gt,defineProperties:yt,getOwnPropertyDescriptor:Ot}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:xt,getOwnPropertySymbols:jt}),n({target:"Object",stat:!0,forced:h((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(w(t))}}),nt){var _t=!l||h((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:_t},{stringify:function(t,r,e){var n=G(arguments),o=r;if((b(r)||void 0!==t)&&!y(t))return p(r)||(r=function(t,r){if(d(o)&&(r=c(o,this,t,r)),!y(r))return r}),n[1]=r,a(nt,null,n)}})}if(!tt[z]){var Et=tt.valueOf;F(tt,z,(function(t){return c(Et,this)}))}H(Z,W),A[Q]=!0},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},b64b:function(t,r,e){var n=e("23e7"),o=e("7b0b"),i=e("df75"),a=e("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},dbb4:function(t,r,e){var n=e("23e7"),o=e("83ab"),i=e("56ef"),a=e("fc6a"),c=e("06cf"),u=e("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var r,e,n=a(t),o=c.f,s=i(n),f={},l=0;while(s.length>l)e=o(n,r=s[l++]),void 0!==e&&u(f,r,e);return f}})},e439:function(t,r,e){var n=e("23e7"),o=e("d039"),i=e("fc6a"),a=e("06cf").f,c=e("83ab"),u=o((function(){a(1)})),s=!c||u;n({target:"Object",stat:!0,forced:s,sham:!c},{getOwnPropertyDescriptor:function(t,r){return a(i(t),r)}})},e538:function(t,r,e){var n=e("b622");r.f=n},e809:function(t,r,e){t.exports=e.p+"img/logo.78ece986.jpg"}}]);
//# sourceMappingURL=chunk-2ca18137.2c529f6c.js.map