"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4298],{3808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"confidential_clean_room_design",title:"Confidential Clean Room High Level Design",description:"Confidential Clean Room High Level Design"},l="Confidential Clean Rooms",c={unversionedId:"confidential_clean_room_design",id:"confidential_clean_room_design",title:"Confidential Clean Room High Level Design",description:"Confidential Clean Room High Level Design",source:"@site/internal/training/confidential_clean_room_design.md",sourceDirName:".",slug:"/confidential_clean_room_design",permalink:"/training/confidential_clean_room_design",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/confidential_clean_room_design.md",tags:[],version:"current",lastUpdatedAt:1693683297,formattedLastUpdatedAt:"9/2/2023",frontMatter:{id:"confidential_clean_room_design",title:"Confidential Clean Room High Level Design",description:"Confidential Clean Room High Level Design"},sidebar:"training",previous:{title:"Payment Flows",permalink:"/training/payments"},next:{title:"Confidential Clean Rooms Specifications",permalink:"/training/confidential_clean_room_specifications"}},d=[{value:"Confidential Computing",id:"confidential-computing",children:[],level:2},{value:"Training Workflow",id:"training-workflow",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"confidential-clean-rooms"},"Confidential Clean Rooms"),(0,r.kt)("p",null,"In the DEPA training framework, datasets are brought together and processed in secure environments known as ",(0,r.kt)("em",{parentName:"p"},"confidential clean rooms"),". Confidential clean rooms intend to meet a set of privacy and security goals through technical measures. This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prevent inappropriate access to raw data or other intermediate data through technical enforcement."),(0,r.kt)("li",{parentName:"ul"},"Allow TDPs to retain control over the data they've shared without trusting any third party. "),(0,r.kt)("li",{parentName:"ul"},"Allow TDCs to retain control over the models they are training without trusting any third party."),(0,r.kt)("li",{parentName:"ul"},"Enforce constraints on data usage defined in contracts. This includes noise addition during analytics and training in line with the long-term goal of differential privacy."),(0,r.kt)("li",{parentName:"ul"},"Support flexible, scalable, and extensible training so that TDCs can choose when and what kinds of models they wish to train."),(0,r.kt)("li",{parentName:"ul"},"Provide open and transparent implementations for all infrastructure components.")),(0,r.kt)("h2",{id:"confidential-computing"},"Confidential Computing"),(0,r.kt)("p",null,"Confidential clean rooms are based on novel security features for ",(0,r.kt)("em",{parentName:"p"},"confidential computing")," available in most modern CPUs and GPUs (Intel, AMD, ARM and NVIDIA). Confidential computing can be used to create Trusted Execution Environments (TEEs) that isolate the code and data of a given task from the rest of the platform, including privileged entities such as server administrators. Therefore, the task can be trusted with private data, as hardware encryption and access control ensure it will be accessible only to the TEE code. "),(0,r.kt)("p",null,"The second core feature of confidential computing is remote attestation: the TEE code can request the hardware to attest a given message (such as a public key), together with the digests of its binary image and configuration, measured when the TEE was created. The attestation is signed with a key unique to the CPU (stored in hardware fuses) and is backed by a public-key certificate for the plat-form (endorsed by the hardware vendor). By verifying this signature, a user can thus authenticate the TEE\u2019s code and hardware platform before trusting it with private data."),(0,r.kt)("p",null,"Most cloud platform support deployment of containerized workloads in TEEs. In the following, we suppose that training runs in confidential containers, such as those provided in the cloud by AWS Nitro Enclaves, Confidential Spaces on GCP and Confidential Azure Container Instances on Azure."),(0,r.kt)("h2",{id:"training-workflow"},"Training Workflow"),(0,r.kt)("p",null,"In the DEPA training framework, TDCs employ confidential clean rooms to train their models on datasets based on contracts signed with TDPs and registered with the contract service. The overall training workflow is as follows. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TDC provides the CCR provider with a description of the model they wish to train, including signed contracts permitting the TDC to access the datasets required for training. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In preparation for the training job, the CCR provider may download and cache encrypted datasets into their own local storage. This is purely for efficiency as the CCR provider will not be able to decrypt the datasets. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CCR provider creates a confidential clean room using SRO certified code. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"During launch, the CCR verifies authenticity and validity of contracts. The CCR terminates if any of the provided contracts are not correctly signed (e.g., if the identities of the signers have expired) or no longer valid (e.g., have been revoked). ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CCR use a key release protocol to obtain data and model encryption keys from key management services hosted by TDPs. As part of the key release protocol, CCR SHOULD provide attestation evidence to the key management service. Evidence MAY include raw attestation reports along with certificates issued by the hardware manufacturer OR attestation tokens issued by an attestation service. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Key management services independently verify evidence against key release policies configured by the TDP, perform additional book keeping (such as track privacy budgets), and release data encryption keys securely to the CCR. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CCR uses encryption keys to decrypt the datasets and model. The CCR ensures that decrypted models and datasets are appropriately protected from the hosting platform, including the CCR provider.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The datasets may be pre-processed within the CCR e.g., aggregate or join as long as the operations are permitted by contracts. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The CCR loads the model and trains the model on the pre-processed dataset as per the model configuration. The CCR may partition the dataset into train and test dataset as per TDC requirements. Training must meet all constraints specified in the respective contracts. For example, CCR must use certified training algorithm to inject appropriate noise in the model weights so as to stay within the privacy budget allocated for each dataset. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"During the training process, the CCR may notify the contract service. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After training is complete, the CCR makes the trained model available to the TDC along with metrics such as loss and accuracy on the validation dataset."))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);