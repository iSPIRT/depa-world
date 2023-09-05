---
id: glossary
title: Glossary
description: Glossary
---

# Key Terms and Concepts

In this section, we define key terms that hold specific meanings within the context of the DEPA training framework throughout this document:

- **Data Principal**: The individual to whom data belongs.
- **Training dataset**: Dataset created by aggregating and de-identifying data belonging to multiple data principals.
- **Training Data Provider (TDP)**: Person or organization who shares training datasets. A TDP MUST have obtained consent from all data principals to share their de-identified data for analytics/training. TDPs MAY be required to share certain training datasets without remuneration. In cases where TDPs add significant values, they MAY expect remuneration on a FRAND (Fair, Reasonable and non-discriminatory) basis.
- **Training Data Consumer (TDC)**: Person or organization who wishes to analyse or train models on one or more training datasets.
- **Trusted Execution Environment (TEE)**: A combination of hardware and software that provides a secure environment for processing sensitive data. TEEs allow code to execute in isolation with confidentiality and integrity and protect data that exists within it. TEEs allow external parties to verify that the software does exactly what the software manufacturer claims it does.
- **Differential privacy**: A system for publicly sharing information about a dataset by describing the patterns of groups within the dataset while withholding information about individuals in the dataset.
- **Confidential Clean Room**: A secure environment where training datasets can be processed while ensuring security and privacy. Confidential clean rooms bring together data protection capabilities of TEEs with algorithmic notions of privacy such as differential privacy.
- **CCR Provider**: An organization that provides clean room infrastructure and services, either in the cloud or on-premises.
- **Technical Standards Organization (TSO)**: An sector-specific organization that defines security and privacy standards that TDPs, TDCs and CCR providers are expected to meet.
- **Self-regulated Organization (SRO)**: A consortium of sector-specific organizations that regulates data sharing on the basis of standards set by the TSO. The SRO hosts core infrastructure components such as the central registry, contract and code signing services in support of the framework.
- **Central Registry**: A service provided by the SRO where TDPs, TDCs and CCR providers are registered after meeting requirements set by the SRO. The central registry may host a token service that issues participants with tokens that participants can use as proof of registration.
- **Dataset Reference**: Metadata about a dataset published by a TDP.
- **Signed Dataset Reference**: An identifiable and non-repudiable dataset reference. In DEPA training framework, signed dataset references are encoded as COSE1 signed objects; the payload contains the dataset reference.
- **Contract**: An agreement between multiple participants (TDPs, TDCs, and CCR Providers) defining the terms and constraints under which one or more datasets are shared.
- **Signed Contract**: An identifiable and non-repudiable contract made by one or more participants. In DEPA training framework, signed contracts are encoded as COSE signed objects; the payload of the COSE structure contains the contract.
- **Contract Service**: A service setup by the SRO to register dataset references and contracts between participants. The contract service MAY enforce SRO specific policies during dataset and contract registration to ensure that data sharing agreements meet published norms.
- **Key Management Service**: A service hosted by TDPs to store data encryption keys, and release keys only to CCRs meet the TDPs security and privacy policies.
- **Discovery Agent**: Entities that assist TDPs and TDCs in identifying and obtaining data sharing opportunities unblocking frozen data markets, ultimately leading to the signing of contracts. Discovery agents play a supportive role in the training framework; they are not mandatory and are not party to any contracts
