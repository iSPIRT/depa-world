---
id: tech_faq
title: Technical FAQ
description: Technical FAQ
---

# Technical FAQ

## Can I use the DEPA training framework to train/fine-tune transformer models using private data from TDPs?

Yes. As long as the model architecture can be expressed in a safe format (e.g., ONNX), and the CCR supports sufficient compute/network capacity, it can be trained or fine-tuned using private datasets from TDPs. 

## I have a dataset that does not contain any private data. Can I still use the framework to give controlled access to TDCs?  

Yes. As long as the dataset does not pertain to any data principals, or contains only public information, you can use the framework to give TDCs controlled access to your dataset. TDCs can be the dataset to train models without any differential privacy requirements. 

## Does the framework support training using GPUs? 

The concept of a CCR is hardware agnostic and can support diverse accelerators such as GPUs. The key requirement is for the hardware to support creation of fully attestable trusted execution environments. Recently, NVIDIA has announced support for TEEs in [Hopper](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/) GPUs. These capabilities are expected to be supported by all major cloud providers soon. Watch this space! 

## Do I have to rely on cloud providers for training models using the framework? Can I use my own compute resources? 

The DEPA training framework relies on confidential computing to protect datasets during training. While confidential computing support is now available in most modern CPUs, operating confidential computing  (such as confidential containers) securely and keeping them up-to-date (e.g., enabling confidential computing in the BIOS, regularly installing firmware and software updates, caching certificates, providing physical security etc.) requires specific set of processes to be in place. These processes have been adopted by most major cloud providers. With the right investment, it is possible for other compute providers to also host confidential computing hardware and services. We will shortly publish guidelines to support a broad range of providers, including on-prem deployments. 

## My model requires a custom tools and libraries for loading, pre-processing, and/or training. Can I still use the DEPA training framework? 

Initial implementations of the DEPA training framework will likely support a specific class of training pipelines with limited customization. We are exploring the use of other technologies such as sandboxing to allow TDCs to bring their own pipelines (BYOP) for training their models without compromising security and privacy of the datasets. Stay tuned! 

## How can I assess the quality of datasets without having direct access to the data? 

We expect TDPs to publish statistics and synthetic datasets to help TDCs assess quality of the actual datasets. TDCs can also build confidence in datasets using reviews from other TDCs, or by evaluating smaller, less expensive versions of the dataset before opting for large datasets. 

## How can I debug and monitor training pipelines host in CCRs? 

CCR implementations will support tools to help monitor and debug training pipelines without compromising privacy. 

## Does DEPA supporting Self-Sovereign Identity (SSI) and DIDs (distributed identifiers)? Which open source IAM frameworks are used?

Yes DEPA supports SSI and DID. The choice of which IAM frameworks are supported is left up to the SRO. In our reference implementation, we support did:x509 and did:web.

## How are contracts and agreements represented in the system (REGO, ODRL, etc.)?

In DEPA training, TDPs register datasets with the contract service, backed by a verifiable ledger. The service provides a public interface for querying. So potential TDCs (or anyone else) can query the service and find out all datasets that are registered.

## Which encryption technology is used? Is distributed ledger technology (blockchain) used? If yes which DLT open source software is used?

We use standard AES-XTS encryption. No DLT here.

## Payments to the TDPs in real time as per the terms of the contract". Is this service provided by a marketplace ?

Yes this is provided by the contract service.

## Would DEPA supply certified ML frameworks?
We are developing certified ML framework in the open source. Part of the roadmap.

## How can I get involved? 

We are currently in the Wave-0 phase, where we work with select organizations to evaluate the framework. If you are interested, please register using this [form](https://docs.google.com/forms)
