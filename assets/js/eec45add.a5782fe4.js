"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2127],{9711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"depa-actions",title:"Actions",description:"This topic explores the essential actions through which a DEPA ecosystem comes to life."},c="Actions",l={unversionedId:"about-depa/depa-actions",id:"about-depa/depa-actions",title:"Actions",description:"This topic explores the essential actions through which a DEPA ecosystem comes to life.",source:"@site/internal/learn/about-depa/actions.md",sourceDirName:"about-depa",slug:"/about-depa/depa-actions",permalink:"/learn/about-depa/depa-actions",editUrl:"https://github.com/depa-world/docs/main/internal/learn/about-depa/actions.md",tags:[],version:"current",lastUpdatedAt:1691644403,formattedLastUpdatedAt:"8/10/2023",frontMatter:{id:"depa-actions",title:"Actions",description:"This topic explores the essential actions through which a DEPA ecosystem comes to life."},sidebar:"learn",previous:{title:"Entities",permalink:"/learn/about-depa/entities"},next:{title:"Reciprocity",permalink:"/learn/about-depa/reciprocity"}},p=[],h={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"actions"},"Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Network Onboarding")," - All the participants of a transaction i:e Consent Manager, Personal Data Provider (PDP) and Personal Data Consumer (PDC) must get themselves on-boarded to a registry. It's post onboarding only that these entities will be able to discover, do resolution of each other and participate in a data transaction. A registry will facilitate the on-boarding workflow.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")," - Entities will have to resolve each other for having access to the metadata of the entity and the service endpoints where the connection can be established. A registry will expose resolution functionality for the entities on its network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Linking Accounts")," - A user needs to link his PDPs with the consent manager. This linking can be initiated via the DP itself or the CM, in the latter case there will be a need to discover the PDPs on the CMs interface before the linking can be initiated. The linking will enable exchange of tokens between the DP and the CM and build a trust relation between the two entities. The linking process will also enable the CM to know about the accounts which user has associated with it, this will be required at the time of consent collection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Consent collection and sharing")," - The consent is collected by the CM and shared with PDP and PDC. Sharing of consent will enable the sharing of data as a next step. A precursor to giving consent is the linking of accounts with PDP so that users can select the accounts and PDPs from where the data needs to be shared with the PDC. A User can select multiple PDPs and accounts for a single consent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data fetching")," - Post the consent is shared with the PDC, PDC initiates the fetching of data from PDP. The data transfer will be P2P between PDP and PDC but facilitated by the CM.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DP Discovery")," - A PDP discovery will only be needed in case the user initiates the linking from the CMs system. Since all the entities are on boarded onto a registry, registry will enable the discovery of PDP via APIs. CM will use these APIs to assist users in discovering PDPs."))),(0,i.kt)("p",null,"The responsibility of a registry is very minimal. A registry enables the transacting entities (PDPs, CMs and PDCs) to discover each other on the network (and their respective communication addresses) and helps establish trusted one-to-one connections between them. No traffic passes through a registry. Even consent request creation, the sharing of consent artifacts and notifications across entities happens in a peer-to-peer manner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture",src:n(7586).Z,width:"2936",height:"1686"})))}u.isMDXComponent=!0},7586:function(e,t,n){t.Z=n.p+"assets/images/DEPA-Arch-bb0c9eb9915274a936ef56996e819753.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);