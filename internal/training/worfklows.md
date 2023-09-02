---
id: workflows
title: Workflows
description: Workflows
---

# Workflows

__Disclaimer: All workflows are representative only and subject to change.__

## Participant registration

![TDP/TDC registration](./seqDiagram/ccr_participantRegistrationFlow.drawio.png)

![CCR provider registration](./seqDiagram/ccr_providerRegistrationFlow.drawio.png)

## Dataset registration

![Dataset registration](./seqDiagram/ccr_datasetRegistrationFlow.drawio.png)

## Dataset discovery

![Dataset discovery](./seqDiagram/ccr_datasetDiscoveryFlow.drawio.png)

## Contract

![Propose Contract](./seqDiagram/ccr_proposeContractFlow.drawio.png)

![Accept Contract](./seqDiagram/ccr_acceptContractFlow.drawio.png)

![Revoke Contract](./seqDiagram/ccr_revokeContractFlow.drawio.png)

![Check Contract](./seqDiagram/ccr_checkContractFlow.drawio.png)

![Query Contracts](./seqDiagram/ccr_queryContractFlow.drawio.png)

## Authorization

TDCs need to obtain explicit authorization from the authorization server before requesting access to datasets from TDPs.

![Authorization](./seqDiagram/ccr_authorizationFlow.drawio.png)

- TDC sends an authorization request to the authorization server. The request includes attributes such as identity of the TDP, identity of the CCR provider, purpose for which the dataset is required, and privacy attributes such as privacy budget. 
- The authorization server checks if the TDC can be granted access to the dataset based on contracts that exist between the TDP and TDC.
- If a valid contract exists, the authorization server grants access by responding with an auth token. 
- The authorization server can deny authorization if a valid contract does not exist, 

## Dataset fetching

![Dataset fetching](./seqDiagram/ccr_datasetFetchingFlow.drawio.png)

## Model fetching

![Model fetching](./seqDiagram/ccr_modelFetchingFlow.drawio.png)

## Provisioning flow

![Provisioning](./seqDiagram/ccr_provisioningFlow.drawio.png)

## Attestation Flow

![Attestation](./seqDiagram/ccr_attestationFlow.drawio.png)

## Key release

![Secure key release](./seqDiagram/ccr_keyReleaseFlow.drawio.png)

## Logs sharing

![Logs sharing](./seqDiagram/ccr_logsSharingFlow.drawio.png)

## Trained model sharing

![Trained model sharing](./seqDiagram/ccr_trainedModelSharingFlow.drawio.png)
