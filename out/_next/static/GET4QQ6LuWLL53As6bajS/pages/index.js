(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var r,o=n("q1tI");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.Component),n=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return l.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,r),i&&s(n,i),t}();t.default=h},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,h=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9Jkg":function(e,t,n){e.exports=n("oh+g")},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},GJ8f:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=(n("17x9"),n("YFqc")),s=n.n(i),a=function(e){var t=e.href,n=e.classes,r=e.children;return o.a.createElement(s.a,{href:t},o.a.createElement("a",{className:n},r))};a.defaultProps={classes:""},t.a=a},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),i=n("q1tI"),s=n.n(i),a=["section.jsx-2130246549{padding:50px 50px;font-size:64px;font-weight:900;background-color:#E5E5E5;height:100%;}",".module.jsx-2130246549{max-width:1200px;margin:auto;margin-top:20vh;}",".text-row.jsx-2130246549{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:2rem 0;}",".text-link{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;text-transform:uppercase;white-space:nowrap;padding:10px 20px;}",".text-link:hover{background-color:#FFC328;color:white;}",".text-link::selection{background:none;}",".line.jsx-2130246549{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;}",".line.jsx-2130246549:before{position:absolute;width:75%;border-bottom:3px solid #000;content:'';left:13%;top:50%;}","#projects.jsx-2130246549{background-color:black;height:500px;}","h2.jsx-2130246549{font-size:60px;-webkit-text-stroke:.01em white;text-stroke:.01em white;font-weight:800;}"];a.__hash="2130246549";var c=a,u=n("GJ8f"),l=n("rg0b");t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{id:c.__hash},c),s.a.createElement(l.a,null),s.a.createElement("section",{className:"jsx-".concat(c.__hash)},s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" module"},s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" text-row"},s.a.createElement(u.a,{href:"/about",classes:"text-link"},"A l e x a n d r a"),s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" line"}),s.a.createElement(u.a,{href:"/about",classes:"text-link"},"G i r a r d")),s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" text-row"},s.a.createElement(u.a,{href:"/music",classes:"text-link"},"M u s i c"),s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" line"}),s.a.createElement(u.a,{href:"/experience",classes:"text-link"},"E x p e r i e n c e")),s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" text-row"},s.a.createElement(u.a,{href:"/contact",classes:"text-link"},"C o n t a c t"),s.a.createElement("div",{className:"jsx-".concat(c.__hash)+" line"}),s.a.createElement(u.a,{href:"/dance",classes:"text-link"},"D a n c e")))))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,i;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var o=String(n),i=t+o;return e[i]||(e[i]="jsx-".concat((0,r.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),i&&s(t,i),e}();t.default=a},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,l=void 0===u?"undefined"!=typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),s("boolean"==typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,i,a;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("9Jkg")),i=r(n("iZP3")),s=r(n("/HRN")),a=r(n("WaGi")),c=r(n("ZDA2")),u=r(n("/+P4")),l=r(n("N9n2")),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),d=h(n("q1tI")),m=(f(n("lgD3")),h(n("20a2"))),v=n("Bu4q");var _=function(e){function t(){var e,n,r,o,a;return(0,s.default)(this,t),(e=(0,c.default)(this,(0,u.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},r=null,o=null,a=null,function(e,t){if(e===r&&t===o)return a;var i=n(e,t);return r=e,o=t,a=i,i}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,a=i.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=p.resolve(c,s),a=a?p.resolve(c,a):s,t.preventDefault();var u=e.props.scroll;null==u&&(u=a.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](s,a,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);m.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),s={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=m.Router._rewriteUrlForNextExport(s.href)),d.default.cloneElement(i,s)}}]),t}(d.Component);t.default=_},"oh+g":function(e,t,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},rg0b:function(e,t,n){"use strict";var r=n("MX0m"),o=n.n(r),i=n("q1tI"),s=n.n(i),a=(n("17x9"),n("OSpC"),["svg.jsx-737351181{position:absolute;top:10%;left:5%;}"]);a.__hash="737351181";var c=a,u=n("GJ8f"),l=function(e){var t=e.fill;return s.a.createElement(u.a,{href:"/"},s.a.createElement(o.a,{id:c.__hash},c),s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"50px",viewBox:"0 0 68 165","fill-rule":"evenodd","clip-rule":"evenodd",className:"jsx-".concat(c.__hash)},s.a.createElement("g",{stroke:"black",strokeWidth:"2px",className:"jsx-".concat(c.__hash)},s.a.createElement("polygon",{fill:t,points:"0,59 25,0 60,0 40,44 68,44 12,132 31,59 ",className:"jsx-".concat(c.__hash)}))))};l.defaultProps={fill:"black"};t.a=l},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0,7]]]);