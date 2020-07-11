(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),c=r(10),o=(r(0),r(180)),a={id:"bs_getstatus",title:"BillService:getStatus"},i={id:"bs_getstatus",isDocsHomePage:!1,title:"BillService:getStatus",description:"Use for check Tickets:",source:"@site/docs/bs_getstatus.md",permalink:"/xsender-docs/docs/bs_getstatus",editUrl:"https://github.com/project-openubl/xsender/edit/master/docusaurus/docs/bs_getstatus.md",sidebar:"someSidebar",previous:{title:"BillService:sendSummary",permalink:"/xsender-docs/docs/bs_sendsummary"},next:{title:"BillConsultService:getStatus",permalink:"/xsender-docs/docs/bcs_getstatus"}},s=[{value:"Check <em>ticket</em>",id:"check-ticket",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use for check ",Object(o.b)("em",{parentName:"p"},"Tickets"),":"),Object(o.b)("h2",{id:"check-ticket"},"Check ",Object(o.b)("em",{parentName:"h2"},"ticket")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nBillServiceModel result = BillServiceManager.getStatus("miTicket", config);\n')))}l.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return r?c.a.createElement(f,i(i({ref:t},u),{},{components:r})):c.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);