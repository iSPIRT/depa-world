"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1470],{9551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"principles",title:"Principles",description:"Principles"},c="Guiding Principles",l={unversionedId:"principles",id:"principles",title:"Principles",description:"Principles",source:"@site/internal/training/principles.md",sourceDirName:".",slug:"/principles",permalink:"/training/principles",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/principles.md",tags:[],version:"current",lastUpdatedAt:1691941180,formattedLastUpdatedAt:"8/13/2023",frontMatter:{id:"principles",title:"Principles",description:"Principles"},sidebar:"training",previous:{title:"Data Sharing in DEPA",permalink:"/training/depa"},next:{title:"Architecture",permalink:"/training/architecture"}},d=[{value:"Democratize data access",id:"democratize-data-access",children:[],level:2},{value:"Security and Privacy-by-Design",id:"security-and-privacy-by-design",children:[],level:2},{value:"Evolvability",id:"evolvability",children:[],level:2},{value:"Transparency and Accountability",id:"transparency-and-accountability",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guiding-principles"},"Guiding Principles"),(0,a.kt)("h2",{id:"democratize-data-access"},"Democratize data access"),(0,a.kt)("p",null,"Growth and innovation in a data economy relies on organizations being able to access and join disparate datasets, derive meaningful insights and develop new, innovative solutions. We wish to build the foundations of such an economy by encouraging open sharing of metadata and regulated sharing of rich datasets on a FRAND (fair, reasonable, and non-discriminatory) basis. "),(0,a.kt)("h2",{id:"security-and-privacy-by-design"},"Security and Privacy-by-Design"),(0,a.kt)("p",null,"Obtaining and processing sensitive information from disparate sources increases the risk of privacy. Modern data privacy laws such as GDPR and Digital Data Protection Bill require a legal basis for such data to be shared and processed. In DEPA, informed and granular consent of the data principal forms the legal basis. However, consent is not practical for bulk data sharing because bulk data is not owned by a single individual. An alternative to fine-grained consent is to establish that data consumers (a) have a legitimate interest in acquiring and processing the data, and (b) the interest does not violate the rights of the data principals, including the right to privacy. This in turn implies that the risk of re-identification or harm to the data principal must be minimized. "),(0,a.kt)("h2",{id:"evolvability"},"Evolvability"),(0,a.kt)("p",null,"Technologies that enable safe and secure data sharing are constantly evolving. Furthermore, even specific technologies such as differential privacy require constant re-evaluation. We want our design to be simple and easily evolvable: it should be possible for capabilities to be built incrementally while allowing for rapid adoption in today\u2019s world. It should also be possible to monitor systems at scale, so that policy corrections can be suitably informed. The design should be adaptable to future policies around data and future technology frameworks for data exchange. "),(0,a.kt)("h2",{id:"transparency-and-accountability"},"Transparency and Accountability"),(0,a.kt)("p",null,"We wish to ensure that the system ensures transparency of all actions performed by participants, subject to justifiable confidentiality requirements of each party."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,y=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);