"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5962],{2921:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"tech_faq",title:"Technical FAQ",description:"Technical FAQ"},c="Technical FAQ",l={unversionedId:"tech_faq",id:"tech_faq",title:"Technical FAQ",description:"Technical FAQ",source:"@site/internal/training/tech_faq.md",sourceDirName:".",slug:"/tech_faq",permalink:"/training/tech_faq",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/tech_faq.md",tags:[],version:"current",lastUpdatedAt:1702987460,formattedLastUpdatedAt:"12/19/2023",frontMatter:{id:"tech_faq",title:"Technical FAQ",description:"Technical FAQ"},sidebar:"training",previous:{title:"Legal FAQ",permalink:"/training/legal_faq"},next:{title:"Reference Implementation",permalink:"/training/reference-implementation"}},d=[{value:"Can I use the DEPA training framework to train/fine-tune transformer models using private data from TDPs?",id:"can-i-use-the-depa-training-framework-to-trainfine-tune-transformer-models-using-private-data-from-tdps",children:[],level:2},{value:"I have a dataset that does not contain any private data. Can I still use the framework to give controlled access to TDCs?",id:"i-have-a-dataset-that-does-not-contain-any-private-data-can-i-still-use-the-framework-to-give-controlled-access-to-tdcs",children:[],level:2},{value:"Does the framework support training using GPUs?",id:"does-the-framework-support-training-using-gpus",children:[],level:2},{value:"Do I have to rely on cloud providers for training models using the framework? Can I use my own compute resources?",id:"do-i-have-to-rely-on-cloud-providers-for-training-models-using-the-framework-can-i-use-my-own-compute-resources",children:[],level:2},{value:"My model requires a custom tools and libraries for loading, pre-processing, and/or training. Can I still use the DEPA training framework?",id:"my-model-requires-a-custom-tools-and-libraries-for-loading-pre-processing-andor-training-can-i-still-use-the-depa-training-framework",children:[],level:2},{value:"How can I assess the quality of datasets without having direct access to the data?",id:"how-can-i-assess-the-quality-of-datasets-without-having-direct-access-to-the-data",children:[],level:2},{value:"How can I debug and monitor training pipelines host in CCRs?",id:"how-can-i-debug-and-monitor-training-pipelines-host-in-ccrs",children:[],level:2},{value:"Does DEPA supporting Self-Sovereign Identity (SSI) and DIDs (distributed identifiers)? Which open source IAM frameworks are used?",id:"does-depa-supporting-self-sovereign-identity-ssi-and-dids-distributed-identifiers-which-open-source-iam-frameworks-are-used",children:[],level:2},{value:"How are contracts and agreements represented in the system (REGO, ODRL, etc.)?",id:"how-are-contracts-and-agreements-represented-in-the-system-rego-odrl-etc",children:[],level:2},{value:"Which encryption technology is used? Is distributed ledger technology (blockchain) used? If yes which DLT open source software is used?",id:"which-encryption-technology-is-used-is-distributed-ledger-technology-blockchain-used-if-yes-which-dlt-open-source-software-is-used",children:[],level:2},{value:"Payments to the TDPs in real time as per the terms of the contract&quot;. Is this service provided by a marketplace ?",id:"payments-to-the-tdps-in-real-time-as-per-the-terms-of-the-contract-is-this-service-provided-by-a-marketplace-",children:[],level:2},{value:"Would DEPA supply certified ML frameworks?",id:"would-depa-supply-certified-ml-frameworks",children:[],level:2},{value:"How can I get involved?",id:"how-can-i-get-involved",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical-faq"},"Technical FAQ"),(0,a.kt)("h2",{id:"can-i-use-the-depa-training-framework-to-trainfine-tune-transformer-models-using-private-data-from-tdps"},"Can I use the DEPA training framework to train/fine-tune transformer models using private data from TDPs?"),(0,a.kt)("p",null,"Yes. As long as the model architecture can be expressed in a safe format (e.g., ONNX), and the CCR supports sufficient compute/network capacity, it can be trained or fine-tuned using private datasets from TDPs. "),(0,a.kt)("h2",{id:"i-have-a-dataset-that-does-not-contain-any-private-data-can-i-still-use-the-framework-to-give-controlled-access-to-tdcs"},"I have a dataset that does not contain any private data. Can I still use the framework to give controlled access to TDCs?"),(0,a.kt)("p",null,"Yes. As long as the dataset does not pertain to any data principals, or contains only public information, you can use the framework to give TDCs controlled access to your dataset. TDCs can be the dataset to train models without any differential privacy requirements. "),(0,a.kt)("h2",{id:"does-the-framework-support-training-using-gpus"},"Does the framework support training using GPUs?"),(0,a.kt)("p",null,"The concept of a CCR is hardware agnostic and can support diverse accelerators such as GPUs. The key requirement is for the hardware to support creation of fully attestable trusted execution environments. Recently, NVIDIA has announced support for TEEs in ",(0,a.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/"},"Hopper")," GPUs. These capabilities are expected to be supported by all major cloud providers soon. Watch this space! "),(0,a.kt)("h2",{id:"do-i-have-to-rely-on-cloud-providers-for-training-models-using-the-framework-can-i-use-my-own-compute-resources"},"Do I have to rely on cloud providers for training models using the framework? Can I use my own compute resources?"),(0,a.kt)("p",null,"The DEPA training framework relies on confidential computing to protect datasets during training. While confidential computing support is now available in most modern CPUs, operating confidential computing  (such as confidential containers) securely and keeping them up-to-date (e.g., enabling confidential computing in the BIOS, regularly installing firmware and software updates, caching certificates, providing physical security etc.) requires specific set of processes to be in place. These processes have been adopted by most major cloud providers. With the right investment, it is possible for other compute providers to also host confidential computing hardware and services. We will shortly publish guidelines to support a broad range of providers, including on-prem deployments. "),(0,a.kt)("h2",{id:"my-model-requires-a-custom-tools-and-libraries-for-loading-pre-processing-andor-training-can-i-still-use-the-depa-training-framework"},"My model requires a custom tools and libraries for loading, pre-processing, and/or training. Can I still use the DEPA training framework?"),(0,a.kt)("p",null,"Initial implementations of the DEPA training framework will likely support a specific class of training pipelines with limited customization. We are exploring the use of other technologies such as sandboxing to allow TDCs to bring their own pipelines (BYOP) for training their models without compromising security and privacy of the datasets. Stay tuned! "),(0,a.kt)("h2",{id:"how-can-i-assess-the-quality-of-datasets-without-having-direct-access-to-the-data"},"How can I assess the quality of datasets without having direct access to the data?"),(0,a.kt)("p",null,"We expect TDPs to publish statistics and synthetic datasets to help TDCs assess quality of the actual datasets. TDCs can also build confidence in datasets using reviews from other TDCs, or by evaluating smaller, less expensive versions of the dataset before opting for large datasets. "),(0,a.kt)("h2",{id:"how-can-i-debug-and-monitor-training-pipelines-host-in-ccrs"},"How can I debug and monitor training pipelines host in CCRs?"),(0,a.kt)("p",null,"CCR implementations will support tools to help monitor and debug training pipelines without compromising privacy. "),(0,a.kt)("h2",{id:"does-depa-supporting-self-sovereign-identity-ssi-and-dids-distributed-identifiers-which-open-source-iam-frameworks-are-used"},"Does DEPA supporting Self-Sovereign Identity (SSI) and DIDs (distributed identifiers)? Which open source IAM frameworks are used?"),(0,a.kt)("p",null,"Yes DEPA supports SSI and DID. The choice of which IAM frameworks are supported is left up to the SRO. In our reference implementation, we support did:x509 and did:web."),(0,a.kt)("h2",{id:"how-are-contracts-and-agreements-represented-in-the-system-rego-odrl-etc"},"How are contracts and agreements represented in the system (REGO, ODRL, etc.)?"),(0,a.kt)("p",null,"In DEPA training, TDPs register datasets with the contract service, backed by a verifiable ledger. The service provides a public interface for querying. So potential TDCs (or anyone else) can query the service and find out all datasets that are registered."),(0,a.kt)("h2",{id:"which-encryption-technology-is-used-is-distributed-ledger-technology-blockchain-used-if-yes-which-dlt-open-source-software-is-used"},"Which encryption technology is used? Is distributed ledger technology (blockchain) used? If yes which DLT open source software is used?"),(0,a.kt)("p",null,"We use standard AES-XTS encryption. No DLT here."),(0,a.kt)("h2",{id:"payments-to-the-tdps-in-real-time-as-per-the-terms-of-the-contract-is-this-service-provided-by-a-marketplace-"},'Payments to the TDPs in real time as per the terms of the contract". Is this service provided by a marketplace ?'),(0,a.kt)("p",null,"Yes this is provided by the contract service."),(0,a.kt)("h2",{id:"would-depa-supply-certified-ml-frameworks"},"Would DEPA supply certified ML frameworks?"),(0,a.kt)("p",null,"We are developing certified ML framework in the open source. Part of the roadmap."),(0,a.kt)("h2",{id:"how-can-i-get-involved"},"How can I get involved?"),(0,a.kt)("p",null,"We are currently in the Wave-0 phase, where we work with select organizations to evaluate the framework. If you are interested, please register using this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/forms"},"form")))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?i.createElement(f,o(o({ref:t},d),{},{components:r})):i.createElement(f,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);