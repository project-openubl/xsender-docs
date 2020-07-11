/*! For license information please see 2.1d782d2e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(185),o=a(180),l=a(183),i="",s="dark",u=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),u=Object(n.useCallback)((function(){c(i),l(i)}),[]),d=Object(n.useCallback)((function(){c(s),l(s)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?s:i)}))}),[]),{isDarkTheme:r===s,setLightTheme:u,setDarkTheme:d}},d=a(196);var f=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},m=(a(52),a(189),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),h=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=(t=void 0===t?{}:t).id,r=Object(n.useState)(!0),c=r[0],l=r[1];return Object(n.useEffect)((function(){if(a){var e=localStorage.getItem("docusaurus.announcement.id"),t=a!==e;localStorage.setItem("docusaurus.announcement.id",a),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&l(!1)}}),[]),{isAnnouncementBarClosed:c,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),l(!0)}}},v=a(197);var b=function(e){var t=m(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=h(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(v.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)},p=a(198),g=a(134),k=a.n(g);var E=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,n=a.content,c=a.backgroundColor,l=a.textColor,i=Object(p.a)(),s=i.isAnnouncementBarClosed,u=i.closeAnnouncementBar;return!n||s?null:r.a.createElement("div",{className:k.a.announcementBar,style:{backgroundColor:c,color:l},role:"banner"},r.a.createElement("div",{className:k.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("button",{type:"button",className:k.a.announcementBarClose,onClick:u,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},O=a(2),_=(a(199),a(10)),j=a(182),y=a(181),C=function(){return null},w=a(220),N=a.n(w),T=a(135),S=a.n(T),B=function(){return r.a.createElement("span",{className:Object(j.a)(S.a.toggle,S.a.moon)})},x=function(){return r.a.createElement("span",{className:Object(j.a)(S.a.toggle,S.a.sun)})},L=function(e){var t=Object(o.a)().isClient;return r.a.createElement(N.a,Object(O.a)({disabled:!t,icons:{checked:r.a.createElement(B,null),unchecked:r.a.createElement(x,null)}},e))},M=a(193),D=a(203);var P=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},A=a(204),I=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),f=d[0],m=d[1],h=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(D.b)(),b=P(v.hash),p=b[0],g=b[1];return Object(A.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<f))){if(o)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,f]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},X=a(205),F=a(206),R=a(207),H=a(136),U=a.n(H);function G(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,i=e.activeClassName,s=void 0===i?"navbar__link--active":i,u=e.prependBaseUrlToHref,d=Object(_.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),f=Object(l.a)(n),m=Object(l.a)(t),h=Object(l.a)(c,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(O.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?h:c}:Object.assign({isNavLink:!0,activeClassName:s,to:f},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(m)}}:null),d),o)}function Y(e){var t=e.items,a=e.position,n=void 0===a?"right":a,c=e.className,o=Object(_.a)(e,["items","position","className"]),l=function(e,t){return void 0===t&&(t=!1),Object(j.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:Object(j.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n})},r.a.createElement(G,Object(O.a)({className:l(c)},o,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),o.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(_.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(G,Object(O.a)({activeClassName:"dropdown__link--active",className:l(a,!0)},n)))})))):r.a.createElement(G,Object(O.a)({className:l(c)},o))}function W(e){var t=e.items,a=(e.position,e.className),n=Object(_.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(j.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(G,Object(O.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(_.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(G,Object(O.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(G,Object(O.a)({className:c(a)},n)))}var V=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,l=c.navbar,i=(l=void 0===l?{}:l).title,s=l.links,u=void 0===s?[]:s,d=l.hideOnScroll,f=void 0!==d&&d,m=c.disableDarkMode,h=void 0!==m&&m,v=a.isClient,b=Object(n.useState)(!1),p=b[0],g=b[1],k=Object(n.useState)(!1),E=k[0],_=k[1],w=Object(M.a)(),N=w.isDarkTheme,T=w.setLightTheme,S=w.setDarkTheme,B=I(f),x=B.navbarRef,D=B.isNavbarVisible,P=Object(R.a)(),A=P.logoLink,H=P.logoLinkProps,G=P.logoImageUrl,V=P.logoAlt;Object(X.a)(p);var z=Object(n.useCallback)((function(){g(!0)}),[g]),J=Object(n.useCallback)((function(){g(!1)}),[g]),K=Object(n.useCallback)((function(e){return e.target.checked?S():T()}),[T,S]),q=Object(F.a)();Object(n.useEffect)((function(){q===F.b.desktop&&g(!1)}),[q]);var Q=function(e){return{leftLinks:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightLinks:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(u),Z=Q.leftLinks,$=Q.rightLinks;return r.a.createElement("nav",{ref:x,className:Object(j.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":p},e[U.a.navbarHideable]=f,e[U.a.navbarHidden]=!D,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:z,onKeyDown:z},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(y.a,Object(O.a)({className:"navbar__brand",to:A},H),null!=G&&r.a.createElement("img",{key:v,className:"navbar__logo",src:G,alt:V}),null!=i&&r.a.createElement("strong",{className:Object(j.a)("navbar__title",(t={},t[U.a.hideLogoText]=E,t))},i)),Z.map((function(e,t){return r.a.createElement(Y,Object(O.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},$.map((function(e,t){return r.a.createElement(Y,Object(O.a)({},e,{key:t}))})),!h&&r.a.createElement(L,{className:U.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:K}),r.a.createElement(C,{handleSearchBarToggle:_,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(y.a,Object(O.a)({className:"navbar__brand",onClick:J,to:A},H),null!=G&&r.a.createElement("img",{key:v,className:"navbar__logo",src:G,alt:V}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!h&&p&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(W,Object(O.a)({},e,{onClick:J,key:t}))})))))))},z=a(137),J=a.n(z);function K(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(_.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(l.a)(t),s=Object(l.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(y.a,Object(O.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?s:a}:{to:i},o),n)}var q=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var Q=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,f=Object(l.a)(d.src);return a?r.a.createElement("footer",{className:Object(j.a)("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(K,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:J.a.footerLogoLink},r.a.createElement(q,{alt:d.alt,url:f})):r.a.createElement(q,{alt:d.alt,url:f})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(138);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.title,s=a.themeConfig.image,u=a.url,d=e.children,m=e.title,h=e.noFooter,v=e.description,p=e.image,g=e.keywords,k=e.permalink,O=e.version,_=m?m+" | "+i:i,j=p||s,y=Object(l.a)(j,{absolute:!0}),C=Object(l.a)(n);return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:y}),j&&r.a.createElement("meta",{property:"twitter:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),k&&r.a.createElement("meta",{property:"og:url",content:u+k}),k&&r.a.createElement("link",{rel:"canonical",href:u+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(E,null),r.a.createElement(V,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(Q,null)))}},193:function(e,t,a){"use strict";var n=a(0),r=a(196);t.a=function(){return Object(n.useContext)(r.a)}},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},197:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},198:function(e,t,a){"use strict";var n=a(0),r=a(197);t.a=function(){return Object(n.useContext)(r.a)}},199:function(e,t,a){var n=a(6),r=a(213),c=a(26).f,o=a(192).f,l=a(80),i=a(86),s=n.RegExp,u=s,d=s.prototype,f=/a/g,m=/a/g,h=new s(f)!==f;if(a(11)&&(!h||a(15)((function(){return m[a(3)("match")]=!1,s(f)!=f||s(m)==m||"/a/i"!=s(f,"i")})))){s=function(e,t){var a=this instanceof s,n=l(e),c=void 0===t;return!a&&n&&e.constructor===s&&c?e:r(h?new u(n&&!c?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&c?i.call(e):t),a?this:d,s)};for(var v=function(e){e in s||c(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=o(u),p=0;b.length>p;)v(b[p++]);d.constructor=s,s.prototype=d,a(16)(n,"RegExp",s)}a(89)("RegExp")},203:function(e,t,a){"use strict";var n=a(41);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},204:function(e,t,a){"use strict";var n=a(0),r=a(9),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},205:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},206:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(!e)return!1;function a(){o(t())}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),c}},207:function(e,t,a){"use strict";var n=a(180),r=a(193),c=a(183),o=a(187);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.navbar,a=(t=void 0===t?{}:t).logo,l=void 0===a?{}:a,i=Object(r.a)().isDarkTheme,s=Object(c.a)(l.href||"/"),u={};l.target?u={target:l.target}:Object(o.a)(s)||(u={rel:"noopener noreferrer",target:"_blank"});var d=l.srcDark&&i?l.srcDark:l.src;return{logoLink:s,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:l.alt}}},213:function(e,t,a){var n=a(14),r=a(214).set;e.exports=function(e,t,a){var c,o=t.constructor;return o!==a&&"function"==typeof o&&(c=o.prototype)!==a.prototype&&n(c)&&r&&r(e,c),e}},214:function(e,t,a){var n=a(14),r=a(8),c=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(31)(Function.call,a(200).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return c(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:c}},220:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),l=f(a(221)),i=f(a(18)),s=f(a(222)),u=f(a(223)),d=a(224);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},221:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},222:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},223:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},224:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);