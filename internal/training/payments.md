---
id: payments
title: Payment Flows
description: Payment Flows
---

# Payment Flows

The DEPA training framework supports a broad class of data sharing scenarios, including

- Data sharing for societal benefit e.g., sharing patient health data with research institutions for training better diagnostic models. 
- Data sharing for commercial benefit of the TDC e.g., sharing travel data with a partner organization to help make personalized recommendations. 
- Data sharing for commercial benefit of the TDP e.g., monetizing carefully curated and labelled datasets. 
- Data sharing for mutual benefit of TDPs e.g., sharing financial transaction data for training an accurate fraud detection model. 

## TDC -> TDP Payments

In some scenarios, TDPs MAY expect payments from TDCs for the use of their datasets, either for covering the costs of curating and hosting datasets, or for commercial gains. TDPs may expect _one time_ payments i.e., for use of a dataset any number of times within a specified period, or _pay-per-use_ i.e., for every use of the dataset. 

The DEPA training framework supports a transparent, automated and flexible mechanism for TDPs to price their datasets and receive payments from TDCs. 

- TDP declare the terms of payments in their signed dataset references registered with the contract service. The terms SHOULD be fair, reasonably and non-discriminatory i.e., apply equally to all registered TDCs. 
- TDCs indicate agreement with the terms by signing contracts, and registering the contracts with a contract service. TDPs and TDCs receive signed receipts from the contract service on registration; these receipts may be used to prove registration and validity of the contract. 
- CCRs generate notifications to the contract service during the training workflow e.g., after fetching data encryption keys and before releasing the trained model to the TDC. 
- Contract services trigger payments from TDCs to TDPs using external payment systems. 

## TDP -> DP Payments

In some scenarios, TDPs MAY compensate data principals for contributing to their datasets, either willing or due to requirements defined by the SRO. The DEPA training framework currently does not define the nature of this compensation or support automated payments. TDPs are however encouraged to find appropriate ways of appropriately compensating data principals in a timely manner, while taking care not to create perverse incentives. 