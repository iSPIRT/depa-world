---
title: Glossary
description: Glossary of all specialized names and phrases used in DEPA. If you dont understand a wording you will find answers here.
---

This section outlines the **definitions of all participants** within the data ecosystem, as defined by the **DEPA (Data Empowerment and Protection Architecture) Framework**.

The definitions provided herein are **general in nature**. The interpretation of legally-defined terms—such as *person*, *child*, *person with disability*, *lawful guardian*, *delegatee*, *nominee* etc.—is governed by the applicable **data protection laws in each jurisdiction**. 

> **Note:** Where such laws provide a specific definition, that definition shall prevail.

This framework is further supported by:
- **Processes and guidelines** from a Self-Regulatory Organization (SRO)
- **Technical specifications** from a Technical Standards Organization (TSO)

---

### Additional Notes:

- Each definition is accompanied by a **simple example for clarity**.
- Many examples feature **Rajni**, a fictional individual from rural India, to illustrate **real-world relevance and accessibility**.
- All names used in the examples are **fictional and solely for illustrative purposes**.

---

### Legal Classification:

For the legal classification of the terms defined across jurisdictions, please refer to the **DEPA Terminology Mapper**.

---

## 1.1 Key Actors in the Data Ecosystem

| Actor                        | Definition                                                                              | Example                                                                                    |
|------------------------------|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| Technical Standards Organization (TSO) | Responsible for developing, publishing, and maintaining technical specifications, protocols, and standards for interoperability, security, and compliance. | The DEPA Foundation publishes and maintains open-source protocols, codebase, and API specs for compliant data exchange. |
| Self-Regulatory Organization (SRO) | Has authority to define, enforce, and oversee data-related regulations, ethical standards, and norms within an industry or sector. | Samyog certifies DPI for AI (DEPA) specs and ensures actors like CCR providers are DEPA compliant.                      |
| Data Record / Data Set        | Data Record: atomic collection of related elements. Data Set: collection of Records conforming to same schema. | Rajni's health tracker records daily steps and heart rate (Data Record); month's records form a Dataset.                |
| Model                        | Mathematical or computational construct representing a real-world process for inference, prediction, or decisions. | Statistical models, generative models, recommendation systems, classification algorithms.                              |
| Data Source                  | The origin from which a data record is generated.                                       | Rajni’s wearable device is the Data Source for her health data; she owns the data record.                               |
| Data Subject (DS)            | Individual to whom personal data relates or belongs.                                    | Rajni is the Data Subject for her device data; her child using it makes her guardian DS too.                           |
| Data Provider (DP)           | Actor that determines the purpose and means of processing personal data.                | GoodHealth Wearables defines data collection and use for their fitness tracker data.                                  |
| Data Consumer (DC)           | Actor who derives value from data via analytics, model training, or inference.          | HealthModels trains a fitness model (Training DC); Swasthya Assurance uses it for pricing (Inferencing DC).           |
| Data Collective (DX)         | Aggregates, validates, curates data from multiple providers and governs access.         | HealthyLife Data Collective provisions curated fitness datasets to HealthModels.                                      |
| Technology Service Provider (TSP) | Offers infrastructure or computational services for secure data processing without direct access to data. | A2Z Computing provides a Confidential Clean Room for model training; C2C Cloud is a TSP certified by Samyog.          |
| Discovery Agent (DA)         | Facilitates discovery of datasets/models via metadata exposure, not actual data.        | AIKosh lists metadata for fitness datasets and models; HealthModels discovers datasets without accessing raw data.     |
| Application Builder (AB)     | Integrates data-derived outputs into user-facing applications.                         | Hridayalogic builds a fitness app using HealthModels’ model; assisted by MakerStudio Inc (TSP).                       |
| Application User (AU)        | Uses an application, generating new data and becoming a Data Subject.                   | Amit uses Hridayalogic app, making him an Application User and Data Subject.                                           |
| AI Chain (AIC) / DEPA Chain  | Cryptographic framework that logs provenance data for traceability and compliance.      | Hashes of datasets, training parameters, and models used by HealthModels are logged in the AI Chain for auditability.  |

---

## 1.2 Categories of Data

### 1.2.1 Classification by Privacy and Accessibility

| Category                     | Description                                                                                           | Example                                           |
|------------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Private Personal Data        | Personal and private; needs strict protection.                                                        | Patient’s EHR with ID details and diagnosis.      |
| Public Personal Data         | Personal data made public by consent or breach.                                                       | Public marathon list with names/times.            |
| Private Non-Personal Data    | Confidential, not tied to individuals.                                                                | Internal financial report or secret recipe.       |
| Public Non-Personal Data     | Openly accessible, no personal identifiers.                                                           | Gov’t weather reports, census data.               |
| Private Personal Aggregate Data | Statistical data from personal records, kept confidential.                                         | Internal hospital recovery report.                |
| Public Personal Aggregate Data | Published statistics from personal records.                                                         | Health studies released publicly.                 |
| Private Non-Personal Aggregate Data | Summarized non-personal data kept private.                                                     | Market research sold to a client.                 |
| Public Non-Personal Aggregate Data | Openly published summaries of non-personal data.                                                | Stock exchange average trading volumes.           |
| Open Data                    | Freely usable under open licenses.                                                                   | WHO Global Health Observatory, OpenStreetMap.     |
| Closed Data                  | Restricted access or licensing.                                                                      | Gartner market report, internal databases.        |

---

### 1.2.2 Classification by Origin and Quality

| Origin/Quality               | Description                                                                                           | Example                                           |
|------------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Natural Data                 | Directly measured from real-world sources.                                                           | Sensor readings, GPS logs, user clickstreams.     |
| Synthetic Data               | Computationally generated to mimic real data.                                                        | Simulated transaction data for testing/training.  |
| Noisy Data                   | Contains random or irrelevant artifacts.                                                             | Distorted images, static-filled recordings.       |
| Clean Data                   | Accurate and standardized.                                                                           | Validated customer address lists.                 |
| Verified Data                | Authenticated against trusted source.                                                                | Cleared transactions by a bank.                   |
| Falsified Data               | Tampered or fraudulent information.                                                                  | Fake research results or insurance fraud.         |

---

### 1.2.3 Classification by Relational and Structural Properties

| Relational/Structural        | Description                                                                                           | Example                                           |
|------------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Linked Data                  | Connected by relational references to other datasets.                                                 | Products and reviews linked by product ID.        |
| Orphaned Data                | Isolated datasets without integration.                                                               | Legacy data lacking documentation or keys.        |
| Rich Data                    | High-dimensional, rich in metadata.                                                                  | 3D medical imaging with layers of metadata.       |
| Sparse Data                  | Many empty/null fields.                                                                              | Sparse user-item rating matrix.                   |

---

### 1.2.4 Classification by Temporal State

| Temporal State               | Description                                                                                           | Example                                           |
|------------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Data at Rest                 | Stored, not actively moving.                                                                         | Archived records, saved files.                    |
| Data in Transit              | Being transferred.                                                                                   | Live-streams, network data packets.               |
| Short-Lived Data             | Ephemeral, relevant briefly.                                                                         | OTP, temporary session ID.                        |
| Long-Lived Data              | Needed long-term.                                                                                    | Census archive, contract documents.               |

---

### 1.2.5 Classification by Jurisdictional Scope

| Jurisdictional Scope         | Description                                                                                           | Example                                           |
|------------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Territorial Data             | Kept within a single legal jurisdiction.                                                             | German health records under EU protection.        |
| Cross-Border Data            | Accessed or processed across jurisdictions.                                                          | Customer data stored outside its origin country.  |

---

## 1.3 Additional Notes on Definitions
 
| Term                    | Description                                                                                               | Example                                                                                     | Notes                                                                             |
|-------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Personal Data Consumer (PDC) | Entity seeking digital data from the Data Principal to deliver services; requests data via CM.         | Hospitals, banks, govt. departments requesting DP data for providing services. This can be considered to a type of DC. This can be considered in the case of AI inferencing use cases. A Personal Data Consumer (PDC) is an entity that seeks digital data from the Data Principal, in order to provide services. The PDC places the request for the need of data with the CM which triggers the process of consent collection from the Data Principal.              | Training Data Consumers (TDP) are a type of DP.                                   |
| Personal Data Provider (PDP) | Entity collecting/generating digital data, storing in software—custodian of Data Principal’s data.    | Hospitals, insurance companies, banks, govt agencies act as data custodians.                | Training Data Consumers (TDC) are a type of DP.                                   |
| Consent Manager (CM)    | Acts as consent collector for user, mediates personal data flows from DP to DC.                          | Account Aggregator network and DigiLocker consent integrations in India.                    | Multiple CMs possible; each interfaces directly via own app/agent; CMs can't access data unless also DC.                        |
| Data Principal          | Synonymous with Data Subject. Delegatee: Appointed agent; Guardian: Appointed for legal actions; Nominee: Takes over on death. | Delegatee can appoint another; guardian works for DP, nominee acts post-death.              | See Data Subject definition for further insight.                                   |

---
