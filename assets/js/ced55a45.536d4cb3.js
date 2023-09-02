"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4435],{8773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"glossary",title:"Glossary",description:"Glossary"},c="Key Terms and Concepts",l={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Glossary",source:"@site/internal/training/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/training/glossary",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/glossary.md",tags:[],version:"current",lastUpdatedAt:1693683297,formattedLastUpdatedAt:"9/2/2023",frontMatter:{id:"glossary",title:"Glossary",description:"Glossary"},sidebar:"training",previous:{title:"Principles",permalink:"/training/principles"},next:{title:"Architecture",permalink:"/training/architecture"}},d=[],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key-terms-and-concepts"},"Key Terms and Concepts"),(0,i.kt)("p",null,"The terms defined in this section have special meaning in the context of the DEPA training framework throughout this document. To ensure readability, only a core set of terms is included in this section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Principal"),": The individual to whom data belongs. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Training dataset"),": Dataset obtained by aggregating and de-identifying data belonging to multiple data principals. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Training Data Provider (TDP)"),": Person or organization who shares training datasets. A TDP MUST have obtained consent from all data principals to share their de-identified data for analytics/training. TDPs MAY be required to share certain training datasets without remuneration. Where TDPs add significant values, they MAY expect remuneration on a FRAND (Fair, Reasonable and non-discriminatory) basis. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Training Data Consumer (TDC)"),": Person or organization who wishes to analyse or train models on one or more training datasets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trusted Execution Environment (TEE)"),": A combination of hardware and software that provides a secure environment for processing sensitive data. TEEs allow code to execute in isolation with confidentiality and integrity and protect data that exists within it. TEEs allow external parties to verify that the software does exactly what the software manufacturer claims it does."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Differential privacy"),": A system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Confidential Clean Room"),": A secure environment where training datasets can be processed while ensuring security and privacy. Confidential clean rooms bring together data protection capabilities of TEEs with algorithmic notions of privacy such as differential privacy. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CCR Provider"),": An organization that provides clean room infrastructure and services, either in the cloud or on-premises. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technical Standards Organization (TSO)"),": An sector-specific organization that defines security and privacy standards that TDPs, TDCs and CCR providers are expected to meet. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Self-regulated Organization (SRO)"),": A consortium of sector-specific organizations that regulates data sharing on the basis of standards set by the TSO. The SRO hosts core infrastructure components such as the central registry, contract and code signing services in support of the framework. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Central Registry"),": A service provided by the SRO where TDPs, TDCs and CCR providers are registered after meeting requirements set by the SRO. The central registry may host a token service that issues participants with tokens that participants can use as proof of registration. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dataset Reference"),": Metadata about a dataset published by a TDP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signed Dataset Reference"),": An identifiable and non-repudiable dataset reference. In DEPA training framework, signed  dataset references are encoded as COSE1 signed objects; the payload contains the dataset reference. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contract"),": An agreement between multiple participants (TDPs, TDCs, and CCR Providers) defining the terms and constraints under which one or more datasets are shared. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signed Contract"),": An identifiable and non-repudiable contract made by one or more participants. In DEPA training framework, signed contracts are encoded as COSE signed objects; the payload of the COSE structure contains the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contract Service"),": A service setup by the SRO to register dataset references and contracts between participants. The contract service MAY enforce SRO specific policies during dataset and contract registration to ensure that data sharing agreements meet published norms. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Management Service"),": A service hosted by TDPs to store data encryption keys, and release keys only to CCRs meet the TDPs security and privacy policies. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Discovery Agent"),": An entities who assists TDPs and TDCs in identifying and acquiring data sharing opportunities, eventually resulting in TDPs and TDC signing contracts. Discovery agents are expected to play an assistive role in the training framework; they are not mandatory and are not party to any contracts.")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);