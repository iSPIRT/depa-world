# DEPA System Technical Document

## Executive Summary

We are rich in data but poor in insights. For data to generate value, it needs to be sizable, of good quality, and cross-linked diversely in terms of modalities, population groups, geographies, etc. As it stands, crucial human and human-industry related data needed to open up the next wave of AI solutions, such as in Health and allied areas, is weakly standardized, fragmented and guarded in silos.

**DEPA** (*Data Empowerment and Protection Architecture*) is a techno-legal framework, endorsed by the Government of India, to enable stakeholder-led standardization and multi-party data sharing with built-in privacy and security guarantees to drive India and the World’s AI economy forward.

DEPA has four key ingredients:

- **DEPA Data Collective:** Domain-specific consortium that defines schema/control standards for responsible, compliant data use.
- **DEPA Contracts:** Techno-legal guardrails for data access and use within confidential clean room environments.
- **DEPA Privacy-Preserving Toolkit:** Ensures privacy-preserving AI model training, resilient to white-box attacks.
- **DEPA AI Chain:** Immutable distributed ledger for all interactions, supporting accountability and traceability.



DEPA builds on two core technologies:
- **Confidential Clean Rooms:** Ephemeral containers executing code on data with minimal breach risk.
- **Differential Privacy:** Enables learning from aggregated data while protecting individual privacy.

DEPA offers a trustable ecosystem for Responsible AI innovation, empowering both Data Providers and Data Consumers (for Training and Inference) and bringing together Enablers and Guardians—compute providers, clean room certifiers, technology service providers, discovery agents, model auditors, and more.

***

## Implementing DEPA

DEPA enables secure, private, and compliant data sharing between Data Providers and Data Consumers for building data-driven AI products.

Supported AI workflows:

- **AI Inference:** Individual, enriched data points (with consent) sent to pre-trained AI models for predictions.
- **AI Training:** Aggregate, cross-linked data used for training AI models.

DEPA offers comprehensive control primitives ensuring privacy and compliance at multiple levels (national policy, sectoral, business, ethical) for both training and inference modalities—including supervised, unsupervised, reinforcement, and emerging foundational machine learning models.



***

## DEPA Functionalities

The architecture delivers a comprehensive, multi-layered data and AI system.  

### Design Principles

- Northbound interface: Consumer-facing APIs and ecosystem enrollment.
- Orchestrator: Coordinated integration of northbound and southbound interfaces.
- Reusable technical primitives for scaling complex structures and functionalities.

### Outward-Facing Functionalities

- **Registration:** User enrollment, profile creation and management.
- **Onboarding:** SLA signing, resource sharing, training compliance.
- **Discoverability:** Find users/resources/services across the platform.
- **Policy Services:** Define and manage access/use control policies.
- **Contract Services:** Enter into techno-legal resource agreements with policy-as-code orchestration.
- **Payment Services:** Monetize resources exchanged on DEPA.
- **Audit Services:** Access AI value chain auditing.

***

## DEPA Orchestrator Architecture Overview



**Components:**
1. API Gateway: Unified entry point for requests, authentication/rate-limiting/logging.
2. Core Orchestrator Engine: Workflow, service orchestration, error handling.
3. Shared Data Services: Central repository (catalog, registry, policy, contracts, payments, provenance).
4. Automation & AI Chain Layer: Provenance, logging, audit engines.
5. Security & Governance: IAM, policy enforcement, contract validation.
6. Integration Layer: Connects external systems (legacy data, e-sign/payments).

### Data & Interaction Flow

- External clients send requests → Forwarded to Orchestrator Core Engine
- Routed to correct microservice (Data Catalog, Payment, Provider, etc.)
- Microservices interact with databases and enforce business/policy rules
- Events (contract, delivery, provenance) are tracked and unified responses returned via API Gateway

***

## DEPA Objects

DEPA objects represent both human and non-human entities, encapsulating data and methods.

Types:
- **Roles/Users:** Data providers, consumers, service providers (cloud, model, discovery agents).
- **Resources:** Data, compute, models.
- **Contracts:** Techno-legal agreements with programmatic schema.
- **Provenance:** Immutable event ledgers for transparency and accountability.

### Table 1: Functional Microservices & Domains

| Domain / Namespace                       | Service Purpose                                                 |
|------------------------------------------|-----------------------------------------------------------------|
| depa.orchestrator.discoveryagent         | Dataset discovery (search, relationship, geo-spatial, composite)|
| depa.orchestrator.registration           | Onboarding and registration for providers/consumers             |
| depa.orchestrator.providers              | Entity type management                                          |
| depa.orchestrator.providerregistration    | Provider data lifecycle APIs                                    |
| depa.orchestrator.datacatalog            | Catalog item and lifecycle management                           |
| depa.orchestrator.datacatalog.search     | Specialized catalog search                                      |
| depa.orchestrator.policy                 | Policy engines (scenarios/consumers)                            |
| depa.orchestrator.scenario               | Scenario templates, secure rooms, purpose limitation            |
| depa.orchestrator.contract               | Contract lifecycle and audit                                    |
| depa.orchestrator.payment                | Payment/order config and management                             |
| depa.orchestrator.deliverymanagement     | Delivery requests, ticketing, dashboards                        |
| depa.orchestrator.aichain                | AI chain provenance configuration/tracking                      |

***

### Table 2: DEPA Object attributes (Roles/Users)

| Role                 | Unique ID | Name | Type             | Location         | Contact               | Tax ID | Status | Domain                 | Resources     | Contract Log   | Transaction Log |
|----------------------|----------|------|------------------|------------------|-----------------------|--------|--------|-----------------------|--------------|---------------|-----------------|
| Data provider        | ✔        | ✔    | provider         | registered addr  | registered phone      | ✔      | ✔      | Finance/Healthcare/etc| Linked       | ✔             | ✔               |
| Data consumer        | ✔        | ✔    | consumer         | registered addr  | registered phone      | ✔      | ✔      | -                     | Resource log | ✔             | ✔               |
| Technology provider  | ✔        | ✔    | service          | registered addr  | registered phone      | ✔      | ✔      | -                     | Linked       | ✔             | ✔               |
| Cloud service        | ✔        | ✔    | service          | registered addr  | registered phone      | ✔      | ✔      | Finance/Healthcare/etc| Linked       | ✔             | ✔               |
| Model provider       | ✔        | ✔    | service          | registered addr  | registered phone      | ✔      | ✔      | -                     | Linked       | ✔             | ✔               |
| Discovery agent      | ✔        | ✔    | service          | registered addr  | registered phone      | ✔      | ✔      | -                     | Resource log | ✔             | ✔               |

***

### Table 3: DEPA Object attributes (Resources)

| Resource   | resource_type | Unique ID | Description | Type | Location | Price | Access Type | Rating |
|------------|--------------|-----------|-------------|------|----------|-------|-------------|--------|
| Data       | 1            | ✔         | Details     | ✔    | ✔        | ✔     | ✔           | ✔      |
| Compute    | 2            | ✔         | Details     | ✔    | ✔        | ✔     | ✔           | ✔      |
| Models     | 3            | ✔         | Details     | ✔    | ✔        | ✔     | ✔           | ✔      |

***

### Table 4: Discovery Agent APIs

| API / Operation     | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| Text Search         | Search datasets across platform with free-text queries                        |
| Attribute Search    | Find datasets by attribute-based criteria                                    |
| Relationship Search | Identify datasets via model-defined relationships                            |
| Geo-Spatial Search  | Discover/select by geographic parameters                                     |
| Build Composite     | Aggregate datasets for composite analytics                                   |

***

### Table 5: Registration APIs

| API / Operation     | Description                                   |
|---------------------|-----------------------------------------------|
| Onboarding          | Start onboarding of platform participant      |
| Consumer Onboarding | Register/validate/provision data consumers    |
| Provider Onboarding | Register/verify new providers for integration |

***

### Table 6: Provider Entity Types

| API / Operation          | Description                                                    |
|--------------------------|----------------------------------------------------------------|
| Provider: DataProvider   | Register dataset/service provider for platform                 |
| Provider: InfrastructureProvider | Register compute/storage infrastructure provider         |
| Provider: DataConsumer   | Enroll entity to consume available platform datasets           |
| Provider: KeyManagement  | Register cryptographic key/security provider                   |
| Provider: ContractManagement | Onboard contract manager entity                           |
| Provider: IdentityManagement  | Add provider for identity/authentication management        |

***

### Table 7: Provider APIs

| API / Operation                   | Description                                            |
|-----------------------------------|--------------------------------------------------------|
| CreateProvider(token,entity,details)| Create provider with details and authentication token |
| UpdateProvider(token,entityID,details)| Update provider info securely                        |
| ViewProvider(token,entityID)      | Retrieve provider details by unique ID                 |
| DeleteProvider(token,entityID)    | Permanently remove provider with security token         |

***

### Table 8: Data Catalogue APIs

| API / Operation          | Description                                                            |
|--------------------------|------------------------------------------------------------------------|
| Create/Update/View/Delete Item | Manage dataset items in catalog                                  |
| Whitelist                 | Create/Modify/Delete/Inactive whitelist controls                      |
| Blacklist                 | Maintain/modify blacklists, inactive options                         |
| Get quality metrics        | Retrieve dataset quality metrics                                     |
| Get Metering               | Obtain access frequency/usage statistics                             |
| Consumer Rating            | Set/view consumer ratings for datasets                               |
| Dataset Filters            | Create/update/view/delete filters for dataset discovery/access        |
| Dataset SLA                | Manage dataset Service Level Agreements (availability/usage)          |
| Dataset Cost               | Set/view dataset cost/price info                                     |
| Dataset Metadata           | Add/update dataset metadata                                          |
| Dataset Sample data        | Manage sample data for preview/validation                            |
| Data Ingestion             | Ingest new data into catalog                                         |

***

### Table 9: Data Catalogue Search APIs

| API / Operation     | Description                                             |
|---------------------|--------------------------------------------------------|
| Text Search         | Free-text search for dataset discovery                 |
| Attribute Search    | Filtered search via attribute filters                  |
| Relationship Search | Link datasets through modeled relationships            |
| Geo-Spatial Search  | Locate datasets by spatial/geographical attributes     |

***

### Table 10: Policy Management APIs

| API / Operation                        | Description                                                             |
|----------------------------------------|-------------------------------------------------------------------------|
| Usage Scenario Policy                  | Create/update/view/delete/mark inactive usage scenario policy            |
| Consumer Policy                        | Administer consumer-level policies for subscriptions/API/file access     |

***

### Table 11: Scenario Templates
***

| Scenario ID | Scenario Template | Quick Description | Orchestrator Outcome | Type |
|-------------|------------------|-------------------|----------------------|------|
| S1 | DP provides (Aggregated Personal Data) silver copy with T&C | Data providers (DP) have datasets.<br>It must be noted that these are aggregated personal data.<br>These are available through commercial pricing.<br>Subject to terms and conditions defined in contract.<br>These are provided through API end-points. | DP API (Personal Data) Endpoint | Personal Aggregated Data |
| S2 | DP provides data silver copy with T&C (Purpose Limitation \| No Download \| Usage only in Data Clean Room) | Data providers (DP) have datasets that can be used only for specific purpose limitations.<br>The DP does not want this data to be used for any other purposes.<br>The terms and conditions defined in the contract state that this can be used only in a secure data room. | Secure Data Room Compute Endpoint | Personal Aggregated Data |
| S3 | DP provides data silver copy with T&C (Privacy & Confidentiality Required \| Usage only via DEPA CCR) | Data providers (DP) have datasets that have private and confidential data.<br>The terms and conditions defined in the contract state that this can be used only in a DEPA specified infrastructure. | DEPA CCR Training Endpoint | Personal Aggregated Data |
| S7 | TDC provides (Privacy Preserved Inferencing) with T&C (Multiparty Privacy and Business Confidentiality Required \| Usage only via DEPA CCR Inference Compute) | Data providers (DP) have datasets that have business confidential data.<br>The terms and conditions defined in the contract state that this can be used only in a DEPA specified infrastructure. | DEPA CCR Inference Endpoint | Personal Aggregated Data |
| S4 | DP provides (Non Personal Data) silver copy with T&C | Data providers (DP) have datasets.<br>These are available through commercial pricing.<br>Subject to terms and conditions defined in contract.<br>These are provided through API end-points. | DP API (Non Personal Data) Endpoint | Non Personal Aggregated Data |
| S5 | DP provides (Non Personal Data) silver copy with T&C (Purpose Limitation \| No Downloaded \| Usage only in Data Clean Room) | Data providers (DP) have datasets that can be used only for specific purpose limitations.<br>The DP does not want this data to be used for any other purposes.<br>The terms and conditions defined in the contract state that this can be used only in a secure data room. | Secure Data Room Compute (Non Personal Data) Endpoint | Non Personal Aggregated Data |
| S6 | DP provides Non Personal Data silver copy with T&C (Business Confidentiality Required \| Usage only via DEPA Non CCR Compute) | Data providers (DP) have datasets that have business confidential data.<br>The terms and conditions defined in the contract state that this can be used only in a DEPA specified infrastructure. | DEPA Non CCR Compute Endpoint | Non Personal Aggregated Data |
| S8 | TDC provides (Inferencing) with T&C (Multiparty Business Confidentiality Required \| Usage only via DEPA Non CCR Inference Compute) | Data providers (DP) have datasets that have business confidential data.<br>The terms and conditions defined in the contract state that this can be used only in a DEPA specified infrastructure. | DEPA Non CCR Inference Endpoint | Non Personal Aggregated Data |

***

### Table 12: Contract Management APIs

| API / Operation                  | Description                                                  |
|----------------------------------|--------------------------------------------------------------|
| Contract Template management     | Create/update/delete/inactivate/view contract templates       |
| Create Contract                  | Build contract, assign unique ID, versioning                 |
| Register Contract                | Register finalized contract for enforcement                  |
| Sign Contracts                   | E-sign/digitally bind contracts                              |
| Get Audit Trail                  | Retrieve contract audit logs for compliance/transparency      |

***

### Table 13: Payment APIs

| API / Operation                 | Description                                       |
|---------------------------------|---------------------------------------------------|
| Payment Configuration           | Create/update/view/delete/inactivate payment configs|
| Order Management                | Create/update/view/delete/build/view orders        |
| Build Order                     | Scenario-based order construction                 |

***

### Table 14: Delivery Management APIs

| API / Operation | Description                                             |
|-----------------|--------------------------------------------------------|
| Order Request   | Request delivery/fulfillment of orders                  |
| Raise Ticket    | Incident ticket submission for order/delivery issues    |

***

### Table 15: AI Chain APIs

| API / Operation      | Description                                                                           |
|----------------------|---------------------------------------------------------------------------------------|
| ConfigureProvenance  | Enable, select provenance types (T1, T2, ... Tn)                                     |
| RegisterProvenance   | Register provenance service for use/process types                                     |
| RunProvenance        | Generate provenance artifacts for data/model tracking                                 |
| log_session          | Log activity/epochs for transparency                                                  |
| create_MT            | Create Merkle Tree artifact for cryptographic provenance                              |
| attest_MT            | Digitally sign/attest for proof/non-repudiation                                      |
| PublishProvenance    | Publish provenance artifact as root (data, model, contract)                          |
| GetProvenance        | Retrieve provenance object by ID for audit/analysis                                   |
| TraceProvenance      | Query/trace provenance object, track components                                      |
| ValidateProvenance   | Validate authenticity of provenance artifact                                         |

***

## DEPA Processes

DEPA processes deliver functionalities and ensure system conforms to ADEPTS (`A`ccountability, `D`emocratisation, `E`volvability, `P`rivacy, `T`ransparency, `S`ecurity).

- **ID Management:** Unified root-of-trust identity protocol using DiDs (Decentralized Identifiers).
- **Key Management:** Secure, conditional key-release protocol for encryption, signing, compliance.
- **Contract Management:** Ricardian contracts with distinct legal and programmatic (JSON-LD) views. Encompasses contract initialization, signing (multi-signature), ledgering, and receipt validation.
- **Training:** Policy-driven, privacy-preserving orchestration in CCR. Mounts encrypted datasets; declarative, auditable pipelines executed in secure Python runtime.
- **AI Chain:** Provenance engine traces data/model pathways, supporting dispute resolution, compliance, quantitative privacy checks, payout models.

***

## References

| Topic                                  | Link                                                                        |
|-----------------------------------------|-----------------------------------------------------------------------------|
| Main Webpage                           | https://depa.world/training/depa_training_framework                        |
| GitHub Repository                      | https://github.com/iSPIRT/depa-training                                    |
| Key Glossary                           | https://depa.world/training/glossary                                        |
| Data Sharing (DEPA)                    | https://depa.world/training/depa                                            |
| Core Architecture                      | https://depa.world/training/architecture                                    |
| Use cases (demo reference)              | https://depa.world/training/use_cases                                       |
| Roadmap                                | https://depa.world/training/roadmap                                         |
| Dataset references and contracts        | https://depa.world/training/roadmap                                         |
| Contract Service Specifications         | https://depa.world/training/contract_service_specifications                 |
| Payment Flows                          | https://depa.world/training/payments                                        |
| CCR Design                             | https://depa.world/training/confidential_clean_room_design                  |
| Differential Privacy                   | https://depa.world/training/differential_privacy                            |
| Workflows and API specs                 | https://depa.world/training/workflows                                       |
| FAQ (Legal)                            | https://depa.world/training/legal_faq                                       |
| FAQ (Technical)                        | https://depa.world/training/tech_faq                                        |
| Detailed Reference Implementation Steps | https://depa.world/training/reference-implementation                        |

***

## Open House Videos

| Topic             | Link                                                                                  |
|-------------------|--------------------------------------------------------------------------------------|
| Open house Part 1 | https://pn.ispirt.in/introducing-depa-for-training-dpi-for-responsible-ai/           |
| Open house Part 2 | https://pn.ispirt.in/open-house-on-depa-training-2-dpi-to-unfreeze-data-markets-lets-make-india-an-ai-nation/ |
| Open house Part 3 | https://pn.ispirt.in/open-house-on-depa-training-3-the-regulatory-and-legal-aspects/ |
| Open house Part 4 | https://pn.ispirt.in/open-house-on-dpi-for-ai-4-why-india-is-best-suited-to-be-the-breeding-ground-for-ai-innovation/ |
| Open house Part 5 | https://youtu.be/P8txudZnGFo                                                         |
| Open house Part 6 | https://youtu.be/mCWgNDzi6d0?feature=shared                                          |
| GPAI Talk Video   | https://www.youtube.com/watch?v=dpCSGz959v8                                          |

***

## Appendix

### [A] Consent-based Data Sharing Architecture



### [B] DEPA Training Architecture



### [C] DEPA Inferencing Architecture



### [D] DEPA Contract Signing (Training Reference)

