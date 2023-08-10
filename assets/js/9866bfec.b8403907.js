"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6593],{8122:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Glossary",description:"Glossary of all specialized names and phrases used in DEPA. If you dont understand a wording you will find answers here."},l="Glossary",p={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Glossary of all specialized names and phrases used in DEPA. If you dont understand a wording you will find answers here.",source:"@site/internal/learn/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/learn/glossary",editUrl:"https://github.com/depa-world/docs/main/internal/learn/glossary.md",tags:[],version:"current",lastUpdatedAt:1691644403,formattedLastUpdatedAt:"8/10/2023",frontMatter:{title:"Glossary",description:"Glossary of all specialized names and phrases used in DEPA. If you dont understand a wording you will find answers here."},sidebar:"learn",previous:{title:"Overlapping networks",permalink:"/learn/networks/overlapping-networks"}},c=[{value:"C",id:"c",children:[],level:2},{value:"D",id:"d",children:[],level:2},{value:"G",id:"g",children:[],level:2},{value:"N",id:"n",children:[],level:2},{value:"P",id:"p",children:[],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("h2",{id:"c"},"C"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Consent Manager"))),(0,o.kt)("p",{parentName:"li"},"A consent manager is an entity that acts as a consent collector for the user and mediates personal data flows from PDPs to PDCs. Our architecture allows multiple entities to play the role of a CM and each must have its own front-end (a mobile app, a Web app, or a human agent who interfaces with a mobile/Web app) for interacting with users. A CM cannot access data of users, even in encrypted form, unless it is also an PDC and accesses information in that capacity. Its role is primarily to enable consent collection, based on which data is shared from PDPs to PDCs. It also enables discovery of PDPs from which user data can be shared. Consent managers are a key mechanism for ensuring ",(0,o.kt)("strong",{parentName:"p"},"privacy by design")," in our architecture."))),(0,o.kt)("h2",{id:"d"},"D"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Data Principal"))),(0,o.kt)("p",{parentName:"li"},"The person to whom the data belongs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Delegatee"))),(0,o.kt)("p",{parentName:"li"},"The person appointed by the Data Principal to take actions. A delegatee can delegate this to another delegatee if Data Principal allows."))),(0,o.kt)("h2",{id:"g"},"G"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Guardian"))),(0,o.kt)("p",{parentName:"li"},"The person who is appointed by the Data Principal or by legal means to take actions on Data Principal's behalf."))),(0,o.kt)("h2",{id:"n"},"N"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Nominee"))),(0,o.kt)("p",{parentName:"li"},"The person who takes over the account of the Data Principal post his death."))),(0,o.kt)("h2",{id:"p"},"P"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Personal Data Consumer"))),(0,o.kt)("p",{parentName:"li"},"A Personal Data Consumer(PDC) is an entity that seeks digital data from the Data Principal, in order to provide services. The PDC places the request for the need of data with the CM which triggers the process of consent collection from the Data Principal. PDCs include hospitals, health technology companies, banks, financial technology companies, govt departments, employment exchanges or any entity that is interested in delivering services to the Data Principal based on his data. These entities could have their own systems or use a third party service provider to be part of the network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Personal Data Provider"))),(0,o.kt)("p",{parentName:"li"},"A data provider (PDP) is an entity that collects or generates digital data and stores it in a software system. Essentially PDPs are custodians of the Data Principal\u2019s data. PDPs could be clinical establishments like hospitals, health service providers, insurance companies, banks, tax authorities, schools, Universities, Govt. Agencies, etc. These establishments act as custodians of the Data Principal\u2019s data and they rely on Consent managers for the purpose of collecting consent from the Data Principal for the purpose of data sharing. A PDP could host its own software system or could use a third party service provider to participate in the ecosystem."))))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);