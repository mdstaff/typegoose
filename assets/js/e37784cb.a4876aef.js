"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8688],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,m=c["".concat(l,".").concat(d)]||c[d]||y[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7710:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],p={id:"utility-types",title:"Utility Types"},l=void 0,u={unversionedId:"api/types/utility-types",id:"api/types/utility-types",title:"Utility Types",description:"This document documents various smaller utility types",source:"@site/../docs/api/types/utility-types.md",sourceDirName:"api/types",slug:"/api/types/utility-types",permalink:"/typegoose/docs/api/types/utility-types",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/types/utility-types.md",tags:[],version:"current",frontMatter:{id:"utility-types",title:"Utility Types"},sidebar:"docs",previous:{title:"Additional Types",permalink:"/typegoose/docs/api/types/additional-types"}},s={},c=[{value:"<code>FilterOutFunctionKeys&lt;T&gt;</code>",id:"filteroutfunctionkeyst",level:2}],y={toc:c},d="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document documents various smaller utility types"),(0,a.kt)("h2",{id:"filteroutfunctionkeyst"},(0,a.kt)("inlineCode",{parentName:"h2"},"FilterOutFunctionKeys<T>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Typings:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type FilterOutFunctionKeys<T extends object> = Omit<T, GetFunctionKeys<T>>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")," ",(0,a.kt)("span",{class:"badge badge--secondary"},"Required")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The type to filter functions out of")))),(0,a.kt)("p",null,"The type ",(0,a.kt)("inlineCode",{parentName:"p"},"FilterOutFunctionKeys<T>")," can be used where function types need to be filtered-out, for example for ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyBulkWriteOperation"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Kitten {\n  @prop()\n  public name?: string;\n\n  public getName() {\n    return this.name;\n  }\n}\n\ntype Normal = Pick<Kitten, typeof Kitten>;\n// type:\n// {\n//  name: string | undefined,\n//  getName: () => string\n// }\n\ntype Filtered = FilterOutFunctionKeys<Kitten>;\n// type:\n// {\n//   name: string | undefined\n// }\n")),(0,a.kt)("p",null,"This type ",(0,a.kt)("em",{parentName:"p"},"may")," be used in the future for ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentType"),"."))}m.isMDXComponent=!0}}]);