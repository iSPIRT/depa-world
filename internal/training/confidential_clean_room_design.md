---
id: confidential_clean_room_design
title: Confidential Clean Room High Level Design
description: Confidential Clean Room High Level Design
---

# Confidential Clean Rooms

In the DEPA training framework, datasets are brought together and processed in secure environments known as _confidential clean rooms_. Confidential clean rooms intend to meet a set of privacy and security goals through technical measures. This includes:

- Prevent inappropriate access to raw data or other intermediate data through technical enforcement.
- Allow TDPs to retain control over the data they've shared without trusting any third party. 
- Allow TDCs to retain control over the models they are training without trusting any third party.
- Enforce constraints on data usage defined in contracts. This includes noise addition during analytics and training in line with the long-term goal of differential privacy.
- Support flexible, scalable, and extensible training so that TDCs can choose when and what kinds of models they wish to train.
- Provide open and transparent implementations for all infrastructure components.

## Confidential Computing
Confidential clean rooms are based on novel security features for _confidential computing_ available in most modern CPUs and GPUs (Intel, AMD, ARM and NVIDIA). Confidential computing can be used to create Trusted Execution Environments (TEEs) that isolate the code and data of a given task from the rest of the platform, including privileged entities such as server administrators. Therefore, the task can be trusted with private data, as hardware encryption and access control ensure it will be accessible only to the TEE code. 

The second core feature of confidential computing is remote attestation: the TEE code can request the hardware to attest a given message (such as a public key), together with the digests of its binary image and configuration, measured when the TEE was created. The attestation is signed with a key unique to the CPU (stored in hardware fuses) and is backed by a public-key certificate for the plat-form (endorsed by the hardware vendor). By verifying this signature, a user can thus authenticate the TEE’s code and hardware platform before trusting it with private data.

Most cloud platform support deployment of containerized workloads in TEEs. In the following, we suppose that training runs in confidential containers, such as those provided in the cloud by AWS Nitro Enclaves, Confidential Spaces on GCP and Confidential Azure Container Instances on Azure.

## Training Workflow
In the DEPA training framework, TDCs employ confidential clean rooms to train their models on datasets based on contracts signed with TDPs and registered with the contract service. The overall training workflow is as follows. 

- TDC provides the CCR provider with a description of the model they wish to train, including signed contracts permitting the TDC to access the datasets required for training. 

- In preparation for the training job, the CCR provider may download and cache encrypted datasets into their own local storage. This is purely for efficiency as the CCR provider will not be able to decrypt the datasets. 

- CCR provider creates a confidential clean room using SRO certified code. 

- During launch, the CCR verifies authenticity and validity of contracts. The CCR terminates if any of the provided contracts are not correctly signed (e.g., if the identities of the signers have expired) or no longer valid (e.g., have been revoked). 

- CCR use a key release protocol to obtain data and model encryption keys from key management services hosted by TDPs. As part of the key release protocol, CCR SHOULD provide attestation evidence to the key management service. Evidence MAY include raw attestation reports along with certificates issued by the hardware manufacturer OR attestation tokens issued by an attestation service. 

- Key management services independently verify evidence against key release policies configured by the TDP, perform additional book keeping (such as track privacy budgets), and release data encryption keys securely to the CCR. 

- CCR uses encryption keys to decrypt the datasets and model. The CCR ensures that decrypted models and datasets are appropriately protected from the hosting platform, including the CCR provider.

- The datasets may be pre-processed within the CCR e.g., aggregate or join as long as the operations are permitted by contracts. 

- The CCR loads the model and trains the model on the pre-processed dataset as per the model configuration. The CCR may partition the dataset into train and test dataset as per TDC requirements. Training must meet all constraints specified in the respective contracts. For example, CCR must use certified training algorithm to inject appropriate noise in the model weights so as to stay within the privacy budget allocated for each dataset. 

- During the training process, the CCR may notify the contract service. 

- After training is complete, the CCR makes the trained model available to the TDC along with metrics such as loss and accuracy on the validation dataset. 
