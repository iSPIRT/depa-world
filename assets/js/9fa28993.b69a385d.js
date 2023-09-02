"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7505],{3831:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return y}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={id:"api-specs.yaml",title:"API Specifications",description:"API Specifications"},c=void 0,p={unversionedId:"api-specs.yaml",id:"api-specs.yaml",title:"API Specifications",description:"API Specifications",source:"@site/internal/training/api-specs.yaml.md",sourceDirName:".",slug:"/api-specs.yaml",permalink:"/training/api-specs.yaml",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/training/api-specs.yaml.md",tags:[],version:"current",lastUpdatedAt:1693683534,formattedLastUpdatedAt:"9/2/2023",frontMatter:{id:"api-specs.yaml",title:"API Specifications",description:"API Specifications"},sidebar:"training",previous:{title:"Workflows",permalink:"/training/workflows"},next:{title:"Legal FAQ",permalink:"/training/legal_faq"}},d=[],m={toc:d};function y(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disclaimer: All APIs are representative and subject to change.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: '3.0.2'\ninfo:\n  title: CCR Training APIs\n  description: |\n    This api specification file define the set of APIs for mediating the workflows for CCR training among the participants. \n    <p>\n    <b>Versioning</b>\n    CCR Training APIs will follow the <a href=\"https://semver.org/\">https://semver.org/</a> versioning scheme. Given a version number MAJOR.MINOR.PATCH, increment the:\n    <ul>\n      <li>MAJOR version when you make incompatible API changes</li>\n      <li>MINOR version when you add functionality in a backwards compatible manner</li>\n      <li>PATCH version when you make backwards compatible bug fixes.</li>\n    </ul>\n    Changes to the event data models which are backward compatible will lead to changes in the MINOR or PATCH version of the API.\n    </p>\n  version: '1.0.0'\ntags:\n  - name: CCR Provider\n  - name: CCR\n  - name: Training Data Provider (TDP)\n  - name: Training Data Consumer (TDC)\n  - name: Authorization Server\n  - name: Electronic Contract (EC)\n\nservers:\n  - url: https://api.server.ccrprovider/1.0\n    description: Endpoint for ccr provider\n  - url: https://api.server.ccr/1.0\n    description: Endpoint for ccr environment created by ccr provider\n  - url: https://api.server.tdp/1.0\n    description: Endpoint for tdp\n  - url: https://api.server.tdc/1.0\n    description: Endpoint for tdc\n  - url: https://api.server.ec/1.0\n    description: Endpoint for electronic contract\npaths:\n  /provision:\n    post:\n      tags:\n        - \"CCR Provider\"\n        - \"Training Data Consumer (TDC)\"\n      summary: Provision CCR workflow. Endpoint supports events of type ccr.event.provision.failure , ccr.event.provision.initiate or ccr.event.provision.success .\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/event'\n      responses:\n        '200':\n          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/event'\n    \n  /attest:\n    post:\n      tags:\n        - \"CCR\"\n        - \"Attestation Service\"\n      summary: CCR Attestation workflow.\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/event'\n      responses:\n        '200':\n          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/event'\n\n  /data:\n    post:\n      tags:\n        - \"CCR Provider\"\n        - \"Training Data Provider (TDP)\"\n      summary: Training data workflow.\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/event'\n      responses:\n        '200':\n          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/event'\n  /key:\n    post:\n      tags:\n        - \"CCR\"\n        - \"Training Data Provider (TDP)\"\n        - \"Authorization Server\"\n      summary: Training data key sharing workflow.\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/event'\n      responses:\n        '200':\n          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/event'\n\n  /authorize:\n    post:\n      tags:\n        - \"Authorization Server\"\n      summary: Dataset authorization request\n      requestBody:\n        required: true\n        content: \n          application/json:\n            schema:\n              $ref: \"#/components/schemas/event\"\n      responses:\n        '200':\n          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad)\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/event'\n  \n  /create_contract/{auth_key}:\n    post:\n      tags:\n        - \"Electronic Contract (EC)\"\n      summary: Create contract workflow.\n      parameters:\n        - name: auth_key\n          in: path\n          description: Authentication\n          required: true\n          schema:\n            type: object\n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/contract'\n      responses:\n        '200':\n          description: OK\n        '400':\n          description: Invalid contract structure\n        '401':\n          description: Unauthorized\n  \n  /find_contract:\n    get:\n      tags:\n        - \"Electronic Contract (EC)\"\n      summary: Find contract workflow.\n      parameters:\n        - name: contract_id\n          in: query\n          description: Contract ID\n          schema:\n            type: string\n        - name: creation_date\n          in: query\n          description: Creation date of the contract\n          schema:\n            type: string\n        - name: start_date\n          in: query\n          description: Start date of the contract\n          schema:\n            type: string\n        - name: expiry_date\n          in: query\n          description: Expiry date of the contract\n          schema:\n            type: string\n        - name: tdp\n          in: query\n          description: TDP ID\n          schema:\n            type: string\n        - name: tdc\n          in: query\n          description: TDC ID\n          schema:\n            type: string\n\n      responses:\n        '200':\n          description: OK\n          \n  \n  /update_contract/{contract_id}:\n    put:\n      tags:\n        - \"Electronic Contract (EC)\"\n      summary: Update contract workflow.\n      parameters:\n        - name: contract_id\n          in: path\n          description: Contract ID\n          required: True\n          schema:\n            type: string\n            \n      requestBody:\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/contract'\n\n      responses:\n        '200':\n          description: OK\n  \n  /commit_contract/{contract_id}{entity_id}{committer}:\n    put:\n      tags:\n        - \"Electronic Contract (EC)\"\n      summary: Commit contract workflow.\n      parameters:\n        - name: contract_id\n          in: path\n          description: Contract ID\n          required: True\n          schema:\n            type: string\n        - name: entity_id\n          in: path\n          description: Entity ID (TDP/TDC ID) \n          required: True\n          schema:\n            type: string\n        - name: committer\n          in: path\n          description: Committer ID\n          required: True\n          schema:\n            type: string\n\n      responses:\n        '200':\n          description: OK\n  \n  /revoke_contract/{contract_id}{entity_id}{revoker}:\n    put:\n      tags:\n        - \"Electronic Contract (EC)\"\n      summary: Revoke contract workflow.\n      parameters:\n        - name: contract_id\n          in: path\n          description: Contract ID\n          required: True\n          schema:\n            type: string\n        - name: entity_id\n          in: path\n          description: Entity ID (TDP/TDC ID) \n          required: True\n          schema:\n            type: string\n        - name: revoker\n          in: path\n          description: Revoker ID\n          required: True\n          schema:\n            type: string\n\n      responses:\n        '200':\n          description: OK\n  \n  /validate_contract/{contract_id}:\n    get:\n      tags:\n        - \"Electronic Contract (EC)\"\n      summary: Validate contract workflow.\n      parameters:\n        - name: contract_id\n          in: path\n          description: Contract ID\n          required: True\n          schema:\n            type: string\n\n      responses:\n        '200':\n          description: Valid contract\n        '400':\n          description: Invalid contract\n\ncomponents:\n  schemas:\n    event:\n      type: object\n      properties:\n        id:\n          type: string\n          description: unique id of the event. This can help the consumer to implement the idempotent behavior in case of receiving multiple events.\n        time:\n          type: string\n          description: time of event.\n          format: date-time\n        version:\n          type: string\n          description: this is typically the api version of the specification. Any changes to the events data model will also increment the api spec version and hence these will be in sync.\n        type:\n          type: string\n          description: the type of event this is. example include ccr.event.ack, ccr.event.provision.success etc.\n        contentType:\n          type: string\n          description: the type of data field. example application/json\n        data:\n          type: string\n          description: the base64 encoded data. Example the the event ccr.prepare.init will be base64 encoded before being set in this field.\n          format: base64\n        signature:\n          type: string\n          description: the digital signature of the entity which created this event. Consumer entity can verify the signature and the signing entity. This signature is in the JWS format.\n\n    identity: \n      type: object\n      properties: \n        id: \n          type: string\n          description: string representing identity of a participant. This can be the subject of a leaf X.509 certificate, or a more general identity such as DID.\n\n## Generic events\n    ccr.event.ack:\n      type: object\n      description: event acknowledging the receipt of an event.\n      properties:\n        message:\n          type: string\n          example: event ${event-id} successfully received.\n\n    ccr.event.bad:\n      type: object\n      description: event highlighting the issue with the event received.\n      properties:\n        code:\n          type: string\n          enum:\n            - 501 ## event not supported on this endpoint.\n            - 502 ## event has missing or invalid fields.\n            - 503 ## Unable to parse event.\n            - 504 ## Signature not valid.\n            - 505 ## event Producer not known.\n            - 506 ## Retry again.\n        message:\n          type: string\n          example: event ${event-id} is not parsable.\n\n## Authorization events\n    ccr.event.authorization.request:\n      type: object\n      description: event generated by a CCR provider to request authorization for a dataset from a TDP\n      properties: \n        tdp: \n          $ref: '#/components/schemas/identity'\n          description: Identity of the TDP providing the dataset\n        dataset: \n          type: string\n          description: unique id representing a dataset provided by a TDP\n\n    ccr.event.authorization.granted: \n      type: object\n      description: event fired by the authorization server granting access to a dataset to a CCR provider\n      properties:\n        token: \n          type: string\n          description: Bearer token that grants access to the dataset\n\n    ccr.event.authorization.denied:\n      type: object\n      description: event fired by the authorization server denying access to a dataset\n      properties:\n        reason: \n          type: string\n          description: Reason why access was denied\n        \n## Provisioning events\n    ccr.event.provision.init:\n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n    ccr.event.provision.success:\n      type: object\n      properties:\n        ccr-url:\n          type: string\n          description: endpoint where the CCR apis can be accessed.\n        ccr-details:\n          $ref: '#/components/schemas/ccr-details'\n\n    ccr.event.provision.failure:\n      type: object\n      properties:\n        code:\n          type: string\n        message:\n          type: string\n\n## Attestation events\n    ccr.event.attestation.request:\n      type: object\n      description: Request to attest a CCR\n      properties:\n        evidence: \n          type: object\n          description: Evidence based on which attestation service verifies the CCR\n        endorsements: \n          type: object\n          description: Statements from a trusted entity vounching for the integrity of the CCR attestor\n\n    ccr.event.attestation.success:\n      type: object\n      description: Response from the attestation service when attestation verification succeeds\n      properties:\n        token: \n          $ref: '#/components/schemas/token'\n\n    ccr.event.attestation.failure:\n      type: object\n      description: Object returned when attestation fails\n      properties:\n        code:\n          type: string\n        message:\n          type: string\n\n## Data workflow events\n    ccr.event.data.prepare:\n      type: object\n      description: event fired by the CCR provider to the TDP to prepare the data set agreed in the training contract.\n\n    ccr.event.data.ready:\n      type: object\n      description: event fired by the TDP to signal the data readiness and location of the encrypted data to pull from.\n      properties:\n        data-url:\n          type: string\n          format: url\n        data-size-bytes:\n          type: integer\n          description: size of the data in bytes. This is post compression.\n        data-compression:\n          type: string\n          description: compression algo used to compress the data.\n          example: zip\n        data-hash:\n          type: string\n          description: hash of the compressed data set. data-hash-algo provides the algo used to compute this hash\n        data-hash-algo:\n          type: string\n          description: algo used to compute the hash of the data set.\n          example: SHA256\n        metadata-tags:\n          $ref: '#/components/schemas/tags'\n\n    ccr.event.data.unavailable:\n      type: object\n      description: event from TDP to the CCR Provider highlighting the unavailability of the data.\n      properties:\n        code:\n          type: string\n          enum:\n              - 801 ## \n              - 802 ## \n              - 803 ## \n\n    ccr.event.data.transmitted:\n      type: object\n      description: event to notify the recipient of the data transfer details.\n\n    ccr.event.data.received:\n      type: object\n\n## Key workflow events\n    ccr.event.key.release.check:\n      description: event fired by the CCR provider to the authorization server to take any steps (e.g., block funds) before it requests for the release encryption key from TDP.\n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n    ccr.event.key.release.accept:\n      type: boolean\n\n    ccr.event.key.release.denied:\n      type: boolean\n\n    ccr.event.key.release.request:\n      description: event fired by the CCR provider to the TDP to request for release of a data encryption key.\n      type: object\n      properties:\n        token: \n          $ref: '#/components/schemas/token'\n\n    ccr.event.key.release.success:\n      description: Callback event fired by the TDP, includes the encryption key for TDP's dataset.\n      type: object\n\n    ccr.event.key.release.failure:\n      description: Callback event fired by the TDP, includes the encryption key for TDP's dataset.\n      type: object\n\n## Contract workflow events\n    ccr.event.contract.propose:\n      description: propose a contract \n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n    ccr.event.contract.accept:\n      description: accept a contract \n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n    ccr.event.contract.revoke:\n      description: revoke a contract \n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n    ccr.event.contract.check:\n      description: query contracts registered with the authorization server\n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n    ccr.event.contract.query:\n      description: query contracts registered with the authorization server\n      type: object\n      properties:\n        contract:\n          $ref: '#/components/schemas/contract'\n\n\n## common reusable schema elements\n\n    ccr-details:\n      type: object\n      description: Details of the CCR environment created\n\n    contract:\n      type: object\n      description: The digital signed document between the parties (TDC, TDP and CCR-Provider) to carry out this transaction. Contracts are signed by the participant proposing the contract, and counter-signed by all other participants involved in the contract. \n      properties:\n        id:\n          type: string\n          description: unique id assigned to the contract\n        version:\n          type: string\n          description: version number of the contract\n        schemaVersion:\n          type: string\n          description: schema identifier of the contract artifact\n        startTime: \n          type: string\n          description: contract start date and time\n        expiryTime: \n          type: string\n          description: contract expiry date and time\n        jurisdiction:\n          type: string\n          description: country of jurisdiction\n        tdc:\n          $ref: '#/components/schemas/identity'\n          description: identity of the training data consumer\n        ccrp:\n          $ref: '#/components/schemas/identity'\n          description: identity of the ccr provider\n        tdps:\n          type: array\n          description: set of training data providers \n          items:\n            $ref: '#/components/schemas/identity'\n        dataset: \n          $ref: '#/components/schemas/dataset'\n          description: dataset to be shared\n        terms:\n          $ref: '#/components/schemas/terms'\n          description: terms of the contract\n        constraints:\n          $ref: '#/components/schemas/constraints'\n          description: constraints on how the dataset should be used\n\n    dataset: \n      type: object\n      description: Description of the dataset being shared by the TDP\n      properties:\n        id: \n          description: unique id assigned to the dataset\n          type: string\n        url: \n          description: URL where the dataset can be accessed\n          type: string\n        schema: \n          description: URL where the schema of the dataset can be accessed\n          type: string\n        sample:\n          description: URL where sample data can be accessed\n          type: string\n\n    terms: \n      type: object\n      description: Terms of the contract\n      properties:\n        payment:\n          $ref: '#/components/schemas/paymentTerms'\n        revoke:\n          $ref: '#/components/schemas/revokeTerms'\n          \n    paymentTerms:\n      type: object\n      properties:\n        tdp:\n          type: array\n          items:\n            $ref: '#/components/schemas/tdpPaymentTerm'\n        tdc:\n          $ref: '#/components/schemas/tdcPaymentTerm'\n        ccrp:\n          $ref: '#/components/schemas/ccrpPaymentTerm'\n        mc:\n          $ref: '#/components/schemas/mcPaymentTerm'\n      \n    tdpPaymentTerm: \n      type: object\n      properties:\n        tdp:\n          description: TDP ID\n          type: string\n        paymentType:\n          description: \"Type of payment: once, recurring etc.\"\n          type: string\n        paymentProcessor: \n          description: Payment processor name\n          type: string\n        amount:\n          description: Amount to be paid\n          type: number\n        paymentSchedule:\n          description: Dates on which payment needs to be made\n          type: array\n          items: \n            type: string\n        paymentDetails:\n          $ref: '#/components/schemas/paymentDetails'\n    \n    tdcPaymentTerm: \n      type: object\n      properties:\n        tdc:\n          description: TDC ID\n          type: string\n        paymentProcessor: \n          description: Payment processor name\n          type: string\n        paymentDetails:\n          $ref: '#/components/schemas/paymentDetails'\n          \n    ccrpPaymentTerm: \n      type: object\n      properties:\n        ccrp:\n          description: CCRP ID\n          type: string\n        paymentProcessor: \n          description: Payment processor name\n          type: string\n        paymentDetails:\n          $ref: '#/components/schemas/paymentDetails'\n          \n    mcPaymentTerm: \n      type: object\n      properties:\n        mc:\n          description: MC ID\n          type: string\n        paymentProcessor: \n          description: Payment processor name\n          type: string\n        amount:\n          description: Amount to be paid\n          type: number\n        paymentDetails:\n          $ref: '#/components/schemas/paymentDetails'\n    \n    paymentDetails:\n      type: object\n      properties:\n        paymentMode:\n          description: Payment mode - credit card, bank account etc.\n          type: string\n        paymentToken:\n          description: Tokenized version of credit card, bank account\n          type: string\n    \n    \n    revokeTerms: \n      type: array\n      items:\n        $ref: '#/components/schemas/revokeTerm'\n      \n    revokeTerm: \n      type: object\n      properties:\n        \"description\": \n          description: Description of the revoke clause\n          type: string\n        condition:\n          description: Condition under which the contract will be revoked\n          type: array\n          items:\n            $ref: '#/components/schemas/revokeCondition'\n    \n    revokeCondition:\n      type: object\n      properties:\n        dummy:\n          description: dummy\n          type: string\n            \n    constraints: \n      type: object\n      description: Constraints under which a dataset is shared\n      properties:\n        fetch: \n          type: string\n          description: Type of fetching permitted (e.g., single, periodic)\n        compute: \n          $ref: '#/components/schemas/computeConstraints'\n        data:\n          $ref: '#/components/schemas/dataUseConstraints'\n\n    computeConstraints: \n      type: array\n      description: Constraints on computation environment where data can be accessed.\n      items:\n        type: string\n\n    dataUseConstraints: \n      type: array\n      description: Constraints on datasets that can be accessed in the environment\n      items:\n        type: object\n        properties:\n          id: \n            description: unique id of the dataset to which the constraint applies\n            type: string\n          target_variables:\n            description: Variables permitted to be used as target variables\n            type: array\n            items: \n              type: string\n          join:\n            description: Variables on which the dataset can be joined\n            type: array\n            items: \n              type: string\n          privacy:\n            $ref: \"#/components/schemas/privacyConstraint\"\n\n    privacyConstraint: \n      type: object\n      description: Privacy related constraints\n      properties:\n        epsilon: \n          description: Epsilon threshold for this dataset\n          type: string\n        delta:\n          description: Delta\n          type: string\n        noise_multiplier:\n          description: Noise multiplier \n    \n    receipt:\n      type: object\n      properties:\n        authserver: \n          description: authorization server \n          $ref: \"#/components/schemas/identity\"\n        \n    token:\n      type: object\n      description: Token issued by attestation service. Tokens must be in RATS-compliant format. \n\n    tags:\n      type: array\n      description: additional tags which can be defined.\n      items:\n        type: object\n        properties:\n          key:\n            type: string\n          value:\n            type: string\n\n")))}y.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),y=p(t),h=i,l=y["".concat(c,".").concat(h)]||y[h]||m[h]||o;return t?r.createElement(l,s(s({ref:n},d),{},{components:t})):r.createElement(l,s({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=y;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);