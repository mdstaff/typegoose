"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7298],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return t?o.createElement(g,r(r({ref:n},u),{},{components:t})):o.createElement(g,r({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<s;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(7294),a=t(6010),s="tabItem_Ymn6";function r(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,r),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(7462),a=t(7294),s=t(6010),r=t(2389),l=t(7392),i=t(7094),p=t(2466),u="tabList__CuJ",m="tabItem_LNqP";function c(e){var n,t,r=e.lazy,c=e.block,d=e.defaultValue,g=e.values,f=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.l)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,T=(0,a.useState)(k),x=T[0],I=T[1],S=[],M=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=w[f];null!=O&&O!==x&&b.some((function(e){return e.value===O}))&&I(O)}var F=function(e){var n=e.currentTarget,t=S.indexOf(n),o=b[t].value;o!==x&&(M(n),I(o),null!=f&&C(f,String(o)))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o,a=S.indexOf(e.currentTarget)+1;t=null!=(o=S[a])?o:S[0];break;case"ArrowLeft":var s,r=S.indexOf(e.currentTarget)-1;t=null!=(s=S[r])?s:S[S.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:F,onClick:F},r,{className:(0,s.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),r?(0,a.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,r.Z)();return a.createElement(c,(0,o.Z)({key:String(n)},e))}},1076:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var o=t(7462),a=t(3366),s=(t(7294),t(3905)),r=t(5488),l=t(5162),i=["components"],p={id:"common-plugins",title:"Common Plugins"},u=void 0,m={unversionedId:"guides/integration-examples/common-plugins",id:"guides/integration-examples/common-plugins",title:"Common Plugins",description:"Typegoose supports mongoose plugins and this Guide will showcase how to use some plugins, more plugins or updating their versions can be done with a PR to typegoose's repository.",source:"@site/../docs/guides/integration-examples/common-plugins.mdx",sourceDirName:"guides/integration-examples",slug:"/guides/integration-examples/common-plugins",permalink:"/typegoose/docs/guides/integration-examples/common-plugins",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/integration-examples/common-plugins.mdx",tags:[],version:"current",frontMatter:{id:"common-plugins",title:"Common Plugins"},sidebar:"guides",previous:{title:"Using with @deepkit/type",permalink:"/typegoose/docs/guides/integration-examples/using-with-deepkit-type"},next:{title:"Typegoose Logger",permalink:"/typegoose/docs/guides/advanced/logger"}},c={},d=[{value:"mongoose-autopopulate",id:"mongoose-autopopulate",level:2},{value:"mongoose-findorcreate",id:"mongoose-findorcreate",level:2},{value:"mongoose-sequence",id:"mongoose-sequence",level:2},{value:"@typegoose/auto-increment",id:"typegooseauto-increment",level:2},{value:"AutoIncrementSimple",id:"autoincrementsimple",level:3},{value:"AutoIncrementID",id:"autoincrementid",level:3}],g={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Typegoose supports mongoose plugins and this Guide will showcase how to use some plugins, more plugins or updating their versions can be done with a PR to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose"},"typegoose's repository"),"."),(0,s.kt)("p",null,"If the Example does not have tabs for ",(0,s.kt)("inlineCode",{parentName:"p"},"esModuleInterop"),", then assume it is only written and tested for ",(0,s.kt)("inlineCode",{parentName:"p"},"esModuleInterop: false"),"."),(0,s.kt)("h2",{id:"mongoose-autopopulate"},"mongoose-autopopulate"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.0.0\nmongoose-autopopulate@0.14.0\n")),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-autopopulate\n"))),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-autopopulate\n")))),(0,s.kt)("p",null,"Typegoose has the prop option ",(0,s.kt)("inlineCode",{parentName:"p"},"autopopulate")," implemented, but it only has an effect, if ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mongodb-js/mongoose-autopopulate"},(0,s.kt)("inlineCode",{parentName:"a"},"mongoose-autopopulate"))," is installed and used too."),(0,s.kt)(r.Z,{groupId:"esModuleInterop",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"esModuleInterop-false",label:"esModuleInterop: false",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport * as autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin dont work with \"esModuleInterop: false\"\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {\n  // a dummy property is required, otherwise the class will equal to others\n  @prop()\n  public dummy?: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides', useUnifiedTopology: true });\n\n  const reference = await SomeReferencedClassModel.create({ dummy: 'hello' });\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n"))),(0,s.kt)(l.Z,{value:"esModuleInterop-true",label:"esModuleInterop: true",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate)\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {\n  // a dummy property is required, otherwise the class will equal to others\n  @prop()\n  public dummy?: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides', useUnifiedTopology: true });\n\n  const reference = await SomeReferencedClassModel.create({ dummy: 'hello' });\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n")))),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you have a ",(0,s.kt)("inlineCode",{parentName:"p"},"ref")," which refers back to its own class/model, like having a User class with a ",(0,s.kt)("inlineCode",{parentName:"p"},"createdBy")," field referring back to User, then you'll need to set the ",(0,s.kt)("inlineCode",{parentName:"p"},"maxDepth")," prop of ",(0,s.kt)("inlineCode",{parentName:"p"},"autocomplete")," to 1. If you don't do this, Mongoose will do recursive calls to\nthe user collection 10 times, extremely delaying the output of the query. Below is an example of how to set ",(0,s.kt)("inlineCode",{parentName:"p"},"maxDepth"),"."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// the types of "autopopulate" may change depending on the tsconfig option "esModuleInterop"\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin dont work\nclass SomeClass {\n  @prop({ autopopulate: { maxDepth: 1 }, ref: \'SomeReferencedClass\' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n')),(0,s.kt)("h2",{id:"mongoose-findorcreate"},"mongoose-findorcreate"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.0.0\nmongoose-findorcreate@3.0.0\n")),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-findorcreate\n"))),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-findorcreate\n")))),(0,s.kt)("p",null,"Typegoose has a default class for ",(0,s.kt)("inlineCode",{parentName:"p"},"mongoose-findorcreate")," that has all the types it needs. Here's how to use it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { DocumentType, getModelForClass, plugin, prop, defaultClasses } from '@typegoose/typegoose';\nimport * as mongoose from 'mongoose';\nimport * as findorcreate from 'mongoose-findorcreate';\n\n@plugin(findorcreate)\nclass SomeClass extends defaultClasses.FindOrCreate {\n  @prop()\n  public someField!: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides' });\n\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' }));\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' })); // both will give the same output\n\n  await mongoose.disconnect();\n})();\n")),(0,s.kt)("h2",{id:"mongoose-sequence"},"mongoose-sequence"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@7.1.0\nmongoose-sequence@5.0.0\n")),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-sequence\n"))),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-sequence\n")))),(0,s.kt)("p",null,"To use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ramiel/mongoose-sequence"},(0,s.kt)("inlineCode",{parentName:"a"},"mongoose-sequence")),", import the plugin and use it like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import AutoIncrementFactory from 'mongoose-sequence';\n\n// AutoIncrement now is the instance\nconst AutoIncrement = AutoIncrementFactory(mongoose);\n\n@plugin(AutoIncrement, { inc_field: '_id', start_seq: 200 })\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id: number;\n}\n\n// The Plugin options can be applied too\n\n@plugin<mongoose.SequenceOptions>(AutoIncrement, { inc_field: '_id' }) // Note: \"start_seq\" is not in the \"SequenceOptions\" type\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id!: number;\n}\n")),(0,s.kt)("p",null,"For more details, see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ramiel/mongoose-sequence/issues/83"},"this issue"),"."),(0,s.kt)("h2",{id:"typegooseauto-increment"},"@typegoose/auto-increment"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.7.0\n@typegoose/auto-increment@1.2.0\n")),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @typegoose/auto-increment\n"))),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @typegoose/auto-increment\n")))),(0,s.kt)("p",null,"The Typegoose project provides an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/typegoose/auto-increment"},(0,s.kt)("inlineCode",{parentName:"a"},"auto-increment")," plugin")," for Mongoose. Here is how to use it:"),(0,s.kt)("h3",{id:"autoincrementsimple"},"AutoIncrementSimple"),(0,s.kt)("p",null,"Always increments the field on each save"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@plugin(AutoIncrementSimple, [{ field: 'someIncrementedField' }])\nclass SomeClass {\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 });\n\nawait doc.save(); // someIncrementedField will be 11\n")),(0,s.kt)("h3",{id:"autoincrementid"},"AutoIncrementID"),(0,s.kt)("p",null,"Only increases the field if the document is ",(0,s.kt)("em",{parentName:"p"},"new")," and the counter is stored in a counter-collection (default field: ",(0,s.kt)("inlineCode",{parentName:"p"},"_id"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@plugin(AutoIncrementID, {})\nclass SomeClass {\n  @prop()\n  public _id: number;\n\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 }); // _id will be 1\n")),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Some or all of the listed plugins might not have a ",(0,s.kt)("inlineCode",{parentName:"p"},"@types")," package, so types have to be mostly manually declared."))))}f.isMDXComponent=!0}}]);