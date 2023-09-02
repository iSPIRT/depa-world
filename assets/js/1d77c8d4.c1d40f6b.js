"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[281],{9578:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"legal_faq",title:"Legal FAQ",description:"Legal FAQ"},l="Legal FAQ",c={unversionedId:"legal_faq",id:"legal_faq",title:"Legal FAQ",description:"Legal FAQ",source:"@site/internal/training/legal_faq.md",sourceDirName:".",slug:"/legal_faq",permalink:"/training/legal_faq",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/legal_faq.md",tags:[],version:"current",lastUpdatedAt:1693683297,formattedLastUpdatedAt:"9/2/2023",frontMatter:{id:"legal_faq",title:"Legal FAQ",description:"Legal FAQ"},sidebar:"training",previous:{title:"API Specifications",permalink:"/training/api-specs.yaml"},next:{title:"Technical FAQ",permalink:"/training/tech_faq"}},d=[{value:"Is consent from data principals required for sharing data under the DEPA training framework?",id:"is-consent-from-data-principals-required-for-sharing-data-under-the-depa-training-framework",children:[],level:2},{value:"Are signed contracts legally valid documents?",id:"are-signed-contracts-legally-valid-documents",children:[],level:2},{value:"Are there any guardrails against societal harms caused by models trained using the DEPA training framework?",id:"are-there-any-guardrails-against-societal-harms-caused-by-models-trained-using-the-depa-training-framework",children:[],level:2}],p={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"legal-faq"},"Legal FAQ"),(0,i.kt)("h2",{id:"is-consent-from-data-principals-required-for-sharing-data-under-the-depa-training-framework"},"Is consent from data principals required for sharing data under the DEPA training framework?"),(0,i.kt)("p",null,"As per modern privacy laws, there are several legal bases for processing data. For instance, Article 6 of the European Union\u2019s General Data Protection Regulation (GPDR), outlines six legal bases for processing data legally. One of which is consent from the data principals. Others include, performance of a contract; compliance with a legal obligations; protect vital interests of the data subject or of another natural person; public interest or in the exercise of official authority; and for the purposes of the legitimate interests. "),(0,i.kt)("p",null,"In India, the Digital Personal Data Protection Act, 2023 outlines two legal bases for processing personal data of data principals for lawful purposes. One is consent and the other is for certain legitimate uses. The Act under Chapter IV also lays down certain exemptions for securing consent. In Clause 2 (b), the Act states that ",(0,i.kt)("strong",{parentName:"p"},"provisions will not apply in cases where personal data is necessary for research, archiving or statistical purposes as long as the personal data is not used to take any decision specific to a Data Principal and such processing is carried on in accordance with such standards as may be prescribed"),". "),(0,i.kt)("p",null,"Since the DEPA training framework is an incidental use case of aggregated personal data, is not used to make any decision specific to a Data Principal and also provides technical guardrails based on privacy-preserving technologies to diminish the risk of privacy violations, the exemption within Chapter IV Clause 2 (b) applies and obviates the need for seeking fine-grained, explicit consent from data principals for every training cycle. However, depending on the scenario, SROs may stipulate that TDPs collect appropriate course-grained consent describing the broad purpose for which their data will be used before including a data principal's data in aggregated datasets. "),(0,i.kt)("h2",{id:"are-signed-contracts-legally-valid-documents"},"Are signed contracts legally valid documents?"),(0,i.kt)("p",null,"Yes. Signed digital contracts as defined in the DEPA training framework are given evidentiary value within the Indian Evidence Act. "),(0,i.kt)("h2",{id:"are-there-any-guardrails-against-societal-harms-caused-by-models-trained-using-the-depa-training-framework"},"Are there any guardrails against societal harms caused by models trained using the DEPA training framework?"),(0,i.kt)("p",null,"The DEPA training framework requires TDCs to include  any reported and anticipated risks from their AI model in contracts. See ",(0,i.kt)("a",{parentName:"p",href:"https://indiaai.gov.in/responsible-ai/homepage"},"AI Governance Framework")," for a detailed list of risks tools to help identity and assess risks for a specific model."))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=n,g=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);