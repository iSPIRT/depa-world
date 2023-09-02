"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9118],{7951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={id:"architecture",title:"Architecture",description:"Architecture"},c="Architecture",l={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Architecture",source:"@site/internal/training/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/training/architecture",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/architecture.md",tags:[],version:"current",lastUpdatedAt:1693683297,formattedLastUpdatedAt:"9/2/2023",frontMatter:{id:"architecture",title:"Architecture",description:"Architecture"},sidebar:"training",previous:{title:"Glossary",permalink:"/training/glossary"},next:{title:"Use cases",permalink:"/training/use_cases"}},d=[],h={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"It is widely recognized that training accurate, fair, and unbiased AI models requires diverse datasets. However, sharing datasets across organizations in a secure and complaint manner is often a tedious and time-consuming process. Organizations need to build trust between each other, and develop legal and technical terms under which datasets will be shared. From a regulatory perspective, this process lacks transparency and creates market distortions, with only a handful of large organizations being able to accumulate sufficiently diverse datasets. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DEPA Training Framework",src:r(248).Z,width:"1004",height:"506"})),(0,i.kt)("p",null,"The DEPA training framework (shown above) is a ",(0,i.kt)("em",{parentName:"p"},"techno-legal framework")," that democratizes and accelerates this process by providing a pre-certified secure, privacy preserving, and compliant process for Training Data Providers (TDP) to share datasets with any Training Data Consumers (TDC), obtain compensation in return, and share returns with data principals. "),(0,i.kt)("p",null,"In the DEPA training framework, TDPs and TDCs register with a central registry setup by the SRO. After SRO verifies their identities, TDPs and TDCs sign a common agreement, accepting the terms of participation in the framework."),(0,i.kt)("p",null,"Next, TDPs register their datasets with a ",(0,i.kt)("a",{parentName:"p",href:"/training/contract_service_specifications"},"contract service")," setup by the SRO along with the terms of availability. At the same time, TDPs encrypt their datasets with their own encryption keys hosted in their key management systems (KMS) and host endpoints where encrypted datasets can be accessed. "),(0,i.kt)("p",null,"At any time, TDCs can query the contract service for available datasets. TDCs can use sample datasets provided by the TDPs to develop their initial models. Once a TDC has identified the datasets they wish to use, the TDC enters into a digital contract with the TDPs. Contract may be two-party (between a TDC and a single TDP), or multi-party (between a TDC and multiple TDPs). Contracts specify the datasets being shared and terms under which sharing is permitted. Terms include security and privacy constraints in line with standards set by the SRO, the purpose for which datasets are being shared, period of the contract, and payment terms. "),(0,i.kt)("p",null,"After agreeing on a contract, TDPs and TDCs digitally sign the contract using their long term digital identities and register signed contract with the contract service. A contract is said to be valid only when all participants in the contract have signed."),(0,i.kt)("p",null,"Next, the TDC (or a CCR provider that acts on behalf of the TDC) sets up a ",(0,i.kt)("a",{parentName:"p",href:"/training/confidential_clean_room_design"},"confidential clean room")," (CCR) with a set of signed contracts and additional configuration describing the model that the TDC wishes to train (e.g., initial weights, hyperparameters etc). The CCR is a secure environment the provides hardware based security and privacy for datasets and models during use. The CCR is deployed with a privacy-preserving analytics and ML framework certified by the SRO."),(0,i.kt)("p",null,"The CCR obtains encryption keys for TDP datasets from the TDPs KMS. The TDP KMS release keys to the CCR after verifying CCR attestation reports. The CCR decrypts the dataset, and trains the model with privacy guarantees. After training is complete, the CCR notifies the contract service, which can trigger external payment services to trigger payments to the TDPs in real time as per the terms of the contract. "),(0,i.kt)("p",null,"This framework aims to meet the principles of zero trust and privacy-by-design. The CCR ensures that raw datasets are never revealed to the TDC or any entity such as the CCR provider or the cloud provider acting on behalf of the TDC. Also, the TDC's model architecture or weights are not revealed to the TDPs."),(0,i.kt)("p",null,"We recognize that no technology or framework is perfect. Some TDCs and TDPs may act with malicious intent. Vulnerabilities may be discovered in contract services and CCRs implementations. New privacy technologies might emerge that invalidate current best practices. Instances of the DEPA training framework will be designed for resiliency in the face of such changes."))}p.isMDXComponent=!0},248:function(e,t,r){t.Z=r.p+"assets/images/overview-62cf07686d64a3e134bfcc038abbb519.png"},3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);