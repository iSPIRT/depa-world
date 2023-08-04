---
id: api-specs.yaml
title: API Specifications
description: API Specifications
---

```yaml
openapi: '3.0.2'
info:
  title: CCR Training APIs
  description: |
    This api specification file define the set of APIs for mediating the workflows for CCR training among the participants. 
    <p>
    <b>Versioning</b>
    CCR Training APIs will follow the <a href="https://semver.org/">https://semver.org/</a> versioning scheme. Given a version number MAJOR.MINOR.PATCH, increment the:
    <ul>
      <li>MAJOR version when you make incompatible API changes</li>
      <li>MINOR version when you add functionality in a backwards compatible manner</li>
      <li>PATCH version when you make backwards compatible bug fixes.</li>
    </ul>
    Changes to the event data models which are backward compatible will lead to changes in the MINOR or PATCH version of the API.
    </p>
  version: '1.0.0'
tags:
  - name: CCR Provider
  - name: CCR
  - name: Training Data Provider (TDP)
  - name: Training Data Consumer (TDC)
  - name: Authorization Server
  - name: Electronic Contract (EC)

servers:
  - url: https://api.server.ccrprovider/1.0
    description: Endpoint for ccr provider
  - url: https://api.server.ccr/1.0
    description: Endpoint for ccr environment created by ccr provider
  - url: https://api.server.tdp/1.0
    description: Endpoint for tdp
  - url: https://api.server.tdc/1.0
    description: Endpoint for tdc
  - url: https://api.server.ec/1.0
    description: Endpoint for electronic contract
paths:
  /provision:
    post:
      tags:
        - "CCR Provider"
        - "Training Data Consumer (TDC)"
      summary: Provision CCR workflow. Endpoint supports events of type ccr.event.provision.failure , ccr.event.provision.initiate or ccr.event.provision.success .
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/event'
      responses:
        '200':
          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/event'
    
  /attest:
    post:
      tags:
        - "CCR"
        - "Attestation Service"
      summary: CCR Attestation workflow.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/event'
      responses:
        '200':
          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/event'

  /data:
    post:
      tags:
        - "CCR Provider"
        - "Training Data Provider (TDP)"
      summary: Training data workflow.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/event'
      responses:
        '200':
          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/event'
  /key:
    post:
      tags:
        - "CCR"
        - "Training Data Provider (TDP)"
        - "Authorization Server"
      summary: Training data key sharing workflow.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/event'
      responses:
        '200':
          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad) is given back.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/event'

  /authorize:
    post:
      tags:
        - "Authorization Server"
      summary: Dataset authorization request
      requestBody:
        required: true
        content: 
          application/json:
            schema:
              $ref: "#/components/schemas/event"
      responses:
        '200':
          description: Either acknowledgement event type (ccr.event.ack) or error event type (ccr.event.bad)
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/event'
  
  /create_contract/{auth_key}:
    post:
      tags:
        - "Electronic Contract (EC)"
      summary: Create contract workflow.
      parameters:
        - name: auth_key
          in: path
          description: Authentication
          required: true
          schema:
            type: object
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/contract'
      responses:
        '200':
          description: OK
        '400':
          description: Invalid contract structure
        '401':
          description: Unauthorized
  
  /find_contract:
    get:
      tags:
        - "Electronic Contract (EC)"
      summary: Find contract workflow.
      parameters:
        - name: contract_id
          in: query
          description: Contract ID
          schema:
            type: string
        - name: creation_date
          in: query
          description: Creation date of the contract
          schema:
            type: string
        - name: start_date
          in: query
          description: Start date of the contract
          schema:
            type: string
        - name: expiry_date
          in: query
          description: Expiry date of the contract
          schema:
            type: string
        - name: tdp
          in: query
          description: TDP ID
          schema:
            type: string
        - name: tdc
          in: query
          description: TDC ID
          schema:
            type: string

      responses:
        '200':
          description: OK
          
  
  /update_contract/{contract_id}:
    put:
      tags:
        - "Electronic Contract (EC)"
      summary: Update contract workflow.
      parameters:
        - name: contract_id
          in: path
          description: Contract ID
          required: True
          schema:
            type: string
            
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/contract'

      responses:
        '200':
          description: OK
  
  /commit_contract/{contract_id}{entity_id}{committer}:
    put:
      tags:
        - "Electronic Contract (EC)"
      summary: Commit contract workflow.
      parameters:
        - name: contract_id
          in: path
          description: Contract ID
          required: True
          schema:
            type: string
        - name: entity_id
          in: path
          description: Entity ID (TDP/TDC ID) 
          required: True
          schema:
            type: string
        - name: committer
          in: path
          description: Committer ID
          required: True
          schema:
            type: string

      responses:
        '200':
          description: OK
  
  /revoke_contract/{contract_id}{entity_id}{revoker}:
    put:
      tags:
        - "Electronic Contract (EC)"
      summary: Revoke contract workflow.
      parameters:
        - name: contract_id
          in: path
          description: Contract ID
          required: True
          schema:
            type: string
        - name: entity_id
          in: path
          description: Entity ID (TDP/TDC ID) 
          required: True
          schema:
            type: string
        - name: revoker
          in: path
          description: Revoker ID
          required: True
          schema:
            type: string

      responses:
        '200':
          description: OK
  
  /validate_contract/{contract_id}:
    get:
      tags:
        - "Electronic Contract (EC)"
      summary: Validate contract workflow.
      parameters:
        - name: contract_id
          in: path
          description: Contract ID
          required: True
          schema:
            type: string

      responses:
        '200':
          description: Valid contract
        '400':
          description: Invalid contract

components:
  schemas:
    event:
      type: object
      properties:
        id:
          type: string
          description: unique id of the event. This can help the consumer to implement the idempotent behavior in case of receiving multiple events.
        time:
          type: string
          description: time of event.
          format: date-time
        version:
          type: string
          description: this is typically the api version of the specification. Any changes to the events data model will also increment the api spec version and hence these will be in sync.
        type:
          type: string
          description: the type of event this is. example include ccr.event.ack, ccr.event.provision.success etc.
        contentType:
          type: string
          description: the type of data field. example application/json
        data:
          type: string
          description: the base64 encoded data. Example the the event ccr.prepare.init will be base64 encoded before being set in this field.
          format: base64
        signature:
          type: string
          description: the digital signature of the entity which created this event. Consumer entity can verify the signature and the signing entity. This signature is in the JWS format.

    identity: 
      type: object
      properties: 
        id: 
          type: string
          description: string representing identity of a participant. This can be the subject of a leaf X.509 certificate, or a more general identity such as DID.

## Generic events
    ccr.event.ack:
      type: object
      description: event acknowledging the receipt of an event.
      properties:
        message:
          type: string
          example: event ${event-id} successfully received.

    ccr.event.bad:
      type: object
      description: event highlighting the issue with the event received.
      properties:
        code:
          type: string
          enum:
            - 501 ## event not supported on this endpoint.
            - 502 ## event has missing or invalid fields.
            - 503 ## Unable to parse event.
            - 504 ## Signature not valid.
            - 505 ## event Producer not known.
            - 506 ## Retry again.
        message:
          type: string
          example: event ${event-id} is not parsable.

## Authorization events
    ccr.event.authorization.request:
      type: object
      description: event generated by a CCR provider to request authorization for a dataset from a TDP
      properties: 
        tdp: 
          $ref: '#/components/schemas/identity'
          description: Identity of the TDP providing the dataset
        dataset: 
          type: string
          description: unique id representing a dataset provided by a TDP

    ccr.event.authorization.granted: 
      type: object
      description: event fired by the authorization server granting access to a dataset to a CCR provider
      properties:
        token: 
          type: string
          description: Bearer token that grants access to the dataset

    ccr.event.authorization.denied:
      type: object
      description: event fired by the authorization server denying access to a dataset
      properties:
        reason: 
          type: string
          description: Reason why access was denied
        
## Provisioning events
    ccr.event.provision.init:
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'

    ccr.event.provision.success:
      type: object
      properties:
        ccr-url:
          type: string
          description: endpoint where the CCR apis can be accessed.
        ccr-details:
          $ref: '#/components/schemas/ccr-details'

    ccr.event.provision.failure:
      type: object
      properties:
        code:
          type: string
        message:
          type: string

## Attestation events
    ccr.event.attestation.request:
      type: object
      description: Request to attest a CCR
      properties:
        evidence: 
          type: object
          description: Evidence based on which attestation service verifies the CCR
        endorsements: 
          type: object
          description: Statements from a trusted entity vounching for the integrity of the CCR attestor

    ccr.event.attestation.success:
      type: object
      description: Response from the attestation service when attestation verification succeeds
      properties:
        token: 
          $ref: '#/components/schemas/token'

    ccr.event.attestation.failure:
      type: object
      description: Object returned when attestation fails
      properties:
        code:
          type: string
        message:
          type: string

## Data workflow events
    ccr.event.data.prepare:
      type: object
      description: event fired by the CCR provider to the TDP to prepare the data set agreed in the training contract.

    ccr.event.data.ready:
      type: object
      description: event fired by the TDP to signal the data readiness and location of the encrypted data to pull from.
      properties:
        data-url:
          type: string
          format: url
        data-size-bytes:
          type: integer
          description: size of the data in bytes. This is post compression.
        data-compression:
          type: string
          description: compression algo used to compress the data.
          example: zip
        data-hash:
          type: string
          description: hash of the compressed data set. data-hash-algo provides the algo used to compute this hash
        data-hash-algo:
          type: string
          description: algo used to compute the hash of the data set.
          example: SHA256
        metadata-tags:
          $ref: '#/components/schemas/tags'

    ccr.event.data.unavailable:
      type: object
      description: event from TDP to the CCR Provider highlighting the unavailability of the data.
      properties:
        code:
          type: string
          enum:
              - 801 ## 
              - 802 ## 
              - 803 ## 

    ccr.event.data.transmitted:
      type: object
      description: event to notify the recipient of the data transfer details.

    ccr.event.data.received:
      type: object

## Key workflow events
    ccr.event.key.release.check:
      description: event fired by the CCR provider to the authorization server to take any steps (e.g., block funds) before it requests for the release encryption key from TDP.
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'

    ccr.event.key.release.accept:
      type: boolean

    ccr.event.key.release.denied:
      type: boolean

    ccr.event.key.release.request:
      description: event fired by the CCR provider to the TDP to request for release of a data encryption key.
      type: object
      properties:
        token: 
          $ref: '#/components/schemas/token'

    ccr.event.key.release.success:
      description: Callback event fired by the TDP, includes the encryption key for TDP's dataset.
      type: object

    ccr.event.key.release.failure:
      description: Callback event fired by the TDP, includes the encryption key for TDP's dataset.
      type: object

## Contract workflow events
    ccr.event.contract.propose:
      description: propose a contract 
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'

    ccr.event.contract.accept:
      description: accept a contract 
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'

    ccr.event.contract.revoke:
      description: revoke a contract 
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'

    ccr.event.contract.check:
      description: query contracts registered with the authorization server
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'

    ccr.event.contract.query:
      description: query contracts registered with the authorization server
      type: object
      properties:
        contract:
          $ref: '#/components/schemas/contract'


## common reusable schema elements

    ccr-details:
      type: object
      description: Details of the CCR environment created

    contract:
      type: object
      description: The digital signed document between the parties (TDC, TDP and CCR-Provider) to carry out this transaction. Contracts are signed by the participant proposing the contract, and counter-signed by all other participants involved in the contract. 
      properties:
        id:
          type: string
          description: unique id assigned to the contract
        version:
          type: string
          description: version number of the contract
        schemaVersion:
          type: string
          description: schema identifier of the contract artifact
        startTime: 
          type: string
          description: contract start date and time
        expiryTime: 
          type: string
          description: contract expiry date and time
        jurisdiction:
          type: string
          description: country of jurisdiction
        tdc:
          $ref: '#/components/schemas/identity'
          description: identity of the training data consumer
        ccrp:
          $ref: '#/components/schemas/identity'
          description: identity of the ccr provider
        tdps:
          type: array
          description: set of training data providers 
          items:
            $ref: '#/components/schemas/identity'
        dataset: 
          $ref: '#/components/schemas/dataset'
          description: dataset to be shared
        terms:
          $ref: '#/components/schemas/terms'
          description: terms of the contract
        constraints:
          $ref: '#/components/schemas/constraints'
          description: constraints on how the dataset should be used

    dataset: 
      type: object
      description: Description of the dataset being shared by the TDP
      properties:
        id: 
          description: unique id assigned to the dataset
          type: string
        url: 
          description: URL where the dataset can be accessed
          type: string
        schema: 
          description: URL where the schema of the dataset can be accessed
          type: string
        sample:
          description: URL where sample data can be accessed
          type: string

    terms: 
      type: object
      description: Terms of the contract
      properties:
        payment:
          $ref: '#/components/schemas/paymentTerms'
        revoke:
          $ref: '#/components/schemas/revokeTerms'
          
    paymentTerms:
      type: object
      properties:
        tdp:
          type: array
          items:
            $ref: '#/components/schemas/tdpPaymentTerm'
        tdc:
          $ref: '#/components/schemas/tdcPaymentTerm'
        ccrp:
          $ref: '#/components/schemas/ccrpPaymentTerm'
        mc:
          $ref: '#/components/schemas/mcPaymentTerm'
      
    tdpPaymentTerm: 
      type: object
      properties:
        tdp:
          description: TDP ID
          type: string
        paymentType:
          description: "Type of payment: once, recurring etc."
          type: string
        paymentProcessor: 
          description: Payment processor name
          type: string
        amount:
          description: Amount to be paid
          type: number
        paymentSchedule:
          description: Dates on which payment needs to be made
          type: array
          items: 
            type: string
        paymentDetails:
          $ref: '#/components/schemas/paymentDetails'
    
    tdcPaymentTerm: 
      type: object
      properties:
        tdc:
          description: TDC ID
          type: string
        paymentProcessor: 
          description: Payment processor name
          type: string
        paymentDetails:
          $ref: '#/components/schemas/paymentDetails'
          
    ccrpPaymentTerm: 
      type: object
      properties:
        ccrp:
          description: CCRP ID
          type: string
        paymentProcessor: 
          description: Payment processor name
          type: string
        paymentDetails:
          $ref: '#/components/schemas/paymentDetails'
          
    mcPaymentTerm: 
      type: object
      properties:
        mc:
          description: MC ID
          type: string
        paymentProcessor: 
          description: Payment processor name
          type: string
        amount:
          description: Amount to be paid
          type: number
        paymentDetails:
          $ref: '#/components/schemas/paymentDetails'
    
    paymentDetails:
      type: object
      properties:
        paymentMode:
          description: Payment mode - credit card, bank account etc.
          type: string
        paymentToken:
          description: Tokenized version of credit card, bank account
          type: string
    
    
    revokeTerms: 
      type: array
      items:
        $ref: '#/components/schemas/revokeTerm'
      
    revokeTerm: 
      type: object
      properties:
        "description": 
          description: Description of the revoke clause
          type: string
        condition:
          description: Condition under which the contract will be revoked
          type: array
          items:
            $ref: '#/components/schemas/revokeCondition'
    
    revokeCondition:
      type: object
      properties:
        dummy:
          description: dummy
          type: string
            
    constraints: 
      type: object
      description: Constraints under which a dataset is shared
      properties:
        fetch: 
          type: string
          description: Type of fetching permitted (e.g., single, periodic)
        compute: 
          $ref: '#/components/schemas/computeConstraints'
        data:
          $ref: '#/components/schemas/dataUseConstraints'

    computeConstraints: 
      type: array
      description: Constraints on computation environment where data can be accessed.
      items:
        type: string

    dataUseConstraints: 
      type: array
      description: Constraints on datasets that can be accessed in the environment
      items:
        type: object
        properties:
          id: 
            description: unique id of the dataset to which the constraint applies
            type: string
          target_variables:
            description: Variables permitted to be used as target variables
            type: array
            items: 
              type: string
          join:
            description: Variables on which the dataset can be joined
            type: array
            items: 
              type: string
          privacy:
            $ref: "#/components/schemas/privacyConstraint"

    privacyConstraint: 
      type: object
      description: Privacy related constraints
      properties:
        epsilon: 
          description: Epsilon threshold for this dataset
          type: string
        delta:
          description: Delta
          type: string
        noise_multiplier:
          description: Noise multiplier 
    
    receipt:
      type: object
      properties:
        authserver: 
          description: authorization server 
          $ref: "#/components/schemas/identity"
        
    token:
      type: object
      description: Token issued by attestation service. Tokens must be in RATS-compliant format. 

    tags:
      type: array
      description: additional tags which can be defined.
      items:
        type: object
        properties:
          key:
            type: string
          value:
            type: string

```