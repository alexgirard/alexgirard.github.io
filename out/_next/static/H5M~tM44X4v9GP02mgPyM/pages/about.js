(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16Al":function(e,t,r){"use strict";var n=r("WbBG");function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},"17x9":function(e,t,r){e.exports=r("16Al")()},"9Jkg":function(e,t,r){e.exports=r("oh+g")},GJ8f:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=(r("17x9"),r("YFqc")),i=r.n(o),l=function(e){var t=e.href,r=e.classes,n=e.children;return a.a.createElement(i.a,{href:t,className:"text"},a.a.createElement("a",{className:r},n))};l.defaultProps={classes:""},t.a=l},Juyh:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("rg0b");t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{fill:"transparent"}),a.a.createElement("section",{id:"about"},a.a.createElement("div",{className:"module"},a.a.createElement("p",null,"Hello ",a.a.createElement("span",{role:"img","aria-label":"wave"},"👋")),a.a.createElement("p",null,"My name is Alex and I’m a 2B software engineering student at the University of Waterloo. Passionate about front end design, dance, music, and robotics with a background in web development. More information here blah blah blah. Need a longer paragraph, avid coffee drinker, movie lover and romantic at heart."))),a.a.createElement("section",{id:"more"}),a.a.createElement("section",{id:"contact"}))}},WbBG:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),a=n(r("9Jkg")),o=n(r("iZP3")),i=n(r("/HRN")),l=n(r("WaGi")),s=n(r("ZDA2")),c=n(r("/+P4")),f=n(r("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=r("CxY0"),d=u(r("q1tI")),m=(p(r("lgD3")),u(r("20a2"))),v=r("Bu4q");var y=function(e){function t(){var e,r,n,a,l;return(0,i.default)(this,t),(e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,o.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?v.formatWithValidation(t):t}},n=null,a=null,l=null,function(e,t){if(e===n&&t===a)return l;var o=r(e,t);return n=e,a=t,l=o,o}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,a=r.target;if("A"!==n||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=h.parse(e,!1,!0),r=h.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var s=window.location.pathname;i=h.resolve(s,i),l=l?h.resolve(s,l):i,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=h.resolve(e,t);m.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=m.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(o,i)}}]),t}(d.Component);t.default=y},"oh+g":function(e,t,r){var n=r("WEpk"),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},rB5V:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var e=r("Juyh");return{page:e.default||e}}])},rg0b:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=(r("17x9"),r("MeF8"),r("GJ8f")),i=function(e){var t=e.fill;return a.a.createElement(o.a,{href:"/"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"50px",viewBox:"0 0 68 165","fill-rule":"evenodd","clip-rule":"evenodd"},a.a.createElement("g",{stroke:"black",strokeWidth:"2px"},a.a.createElement("polygon",{fill:t,points:"0,59 25,0 60,0 40,44 68,44 12,132 31,59 "}))))};i.defaultProps={fill:"black"},t.a=i}},[["rB5V",1,0,7]]]);