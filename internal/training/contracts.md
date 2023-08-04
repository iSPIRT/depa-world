---
id: contracts
title: Dataset References and Contracts
description: Dataset References and Contracts
---

# Dataset References and Contracts 

In the DEPA training framework, TDPs express intent to share datasets by registering __dataset references__ with a [contract service](./contract_service_specifications.md). Dataset references are signed JSON objects that include (but are not limited to) 

- Name: Name of the dataset
- Description: Description of the dataset
- UUID: Unique identifier for the dataset
- Schema: Reference to the dataset schema
- URL: Location where the encrypted dataset is available
- Sample URL: Location of the sample dataset
- Key Vault URL: Location where encryption key is available
- Key ID: Key identifier
- Data Usage Policy: Policy constraining use of the dataset 
- Data card: Detailed description of data sources, how the data was sourced, data distributions, pre-processing, risks and limitations. 
- Creators: Names of dataset creations. 

A sample dataset reference is as follows.

```json
{
  "name": "covid-hospitalization",
  "uuid": "...",
  "schema": "...",
  "url": "...",
  "sampleUrl": "...",
  "keyVaultUrl": "...",
  "keyid": "CovidHospitalizationDataKey",
  "dataUsagePolicy": "...",
  "dataCard": "...",
  "creators": "abc@hospital.com"
}
```

TDPs can restrict the operations that may be performed on a dataset using `dataUsagePolicy`. For example, the policy may specify that certain columns (e.g., mobile number) in the dataset may not be used as keys in a join operation. The SRO shall define a standard language (e.g., Rego) for expressing data usage policies.

The SRO SHALL define the format and attributes required in the data card. 

See [contract service specifications](./contract_service_specifications.md) for details on signing and registering dataset references. 

TDPs and TDCs collaborate on datasets using __digital contracts__. A contract is an object that defines the terms of a collaboration. It includes (but is not limited to)

- List of participants. This includes TDPs, TDCs, and CCR providers.
- Duration of the contract. 
- The dataset(s) being shared.
- Constraints under which each dataset is shared.
- Terms under which the dataset is shared.
- Terms under which the contract may be revoked. 

Constraints may include (but are not limited to)
- Security constraints e.g., the specific confidential clean room environment in which the dataset can be accessed
- Data usage constraints e.g., the class of queries that can be performed on the dataset
- Privacy constraints e.g., the privacy budget available to the TDC

Dataset sharing terms may include payment terms e.g., one time payments, pay per use etc. 

A sample contract is as follows. 

```json
{
  "id": "f4f72a88-bab1-11ed-afa1-0242ac120002",
  "schemaVersion": "0.1",
  "startTime": "2023-03-14T00:00:00.000Z",
  "expiryTime": "2024-03-14T00:00:00.000Z",
  "tdc" : "did:web:researchlabs.ac.in",
  "tdps" : [
    "did:web:abc.corp.com",
    "did:web:xyz.gov.in"
  ],
  "ccrp": "did:web:ccrp.cloud.com",
  "datasets": [
    {
      "id" : "19517ba8-bab8-11ed-afa1-0242ac120002",
      "name": "covid-infection",
      "url" : "...",
      "provider": "did:web:abc.corp.com"
    },
    {
      "id" : "216d5cc6-bab8-11ed-afa1-0242ac120002",
      "name": "covid-hospitalization",
      "url" : "...",
      "provider": "did:web:xyz.gov.in"
    }
  ],
  "purpose": "TRAINING",
  "constraints": [
    {
      "compute" : {
        "attestation_service": "health.sro.ac.in"
      },
      "privacy": [
        {
          "dataset": "19517ba8-bab8-11ed-afa1-0242ac120002", 
          "epsilon_threshold": "1.5",
          "noise_multiplier": "2.0",
          "delta": "0.01",
          "epochs_per_report": "2"
        },
        {
          "dataset": "216d5cc6-bab8-11ed-afa1-0242ac120002", 
          "epsilon_threshold": "1.5",
          "noise_multiplier": "2.0",
          "delta": "0.01",
          "epochs_per_report": "2"
        }
      ]
    }
  ],
  "terms": {
    "payment" : "..."
  }
}
```

This contract between entitles an organization `research.ac.in` to access two datasets, a dataset called `covid-infection` from `abc.corp.com`, and `covid-hospitalization` from `xyz.gov.in` for the purpose of training. However, the dataset may only be accessed in  confidential clean rooms authorized by a healthcare SRO. Furthermore, the training algorithm may not exceed the specified privacy budget of each of the datasets.

Contracts come into existence when they are signed and registered with a contract service. During registration, contract services may enforce additional policies e.g., to ensure that contracts are fair and non-discriminatory. 
