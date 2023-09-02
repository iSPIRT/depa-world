---
id: use_cases
title: Use cases
description: Use cases
---

# Use Cases

This section presents representative use cases to illustrate the scope of the DEPA training cycle. 

## Health Data Collaboration
AI models are being increasing adopted in healthcare systems for scenarios ranging from disease surveillance to diagnostic assistants. Building accurate models for healthcare often requires longitudinal data about the population that the model is targeting. 

For example, models for COVID surveillance have been built from PCR test data (e.g., from ICMR), vaccination data, and hospitalization data. To derive meaningful information from these datasets e.g., measure the propensity of vaccinated individuals above a certain age to test positive for COVID and require hospitalization, these datasets must be joined using a shared identifier (e.g., mobile number). The joint dataset can then be used to train a model (e.g., a regression model with features such as age, gender etc.) to predict the likelihood of a COVID patient requiring hospitalization. Similarly, models that can assist with the diagnosis and treatment of cancers may require sufficient and high quality labelled data from multiple hospitals across different regions. 

DEPA 2.0 can helps setup secure data collaborations and facilitate timely development of models. 

- Patients get their X-rays done at the pathology labs or hospitals. Such labs and hospitals are Training Data Providers.
- A health tech has invented a new model for predicting tuberculosis using X-rays. It is Training Data Consumer.
- The health tech enters into an electronic contract with one or more TDPs, The contract specifies the terms of data use, including the nature of the secure environment in which models will be trained, privacy constraints in line with the state-of-the-art privacy standards specified by a healthcare SRO, and payment terms for additional value that the TDP provides e.g., by aggregating, cleaning and labelling data. The contract is registered with a contract service setup by the SRO. 
- The health tech sets us a confidential clean room (possibly with the services of a CCR provider) hosting an ML framework certified by the SRO. The health tech uses the CCR to train the predictive model. During this process, the the raw health data from the TDPs is never revealed to the health tech, and the training process ensures that the health tech cannot learn any information about specific patients from the trained model.  
- Once the model has been trained, the health tech deploys it at various hospitals, where it is used by clinicians to obtain a first level of diagnosis, a process that would otherwise have taken days. Once confirmed by the clinicians, the diagnosis and treatment is presented to the patients. 

## Travel Data Collaboration
A typical travel booking site collects a large amount of data. Apart from building their own models, say for demand prediction, pricing, etc., these sites could be interested in monetizing the data for external applications. For example, BookMyTrip.com (BMT) is a portal for booking travels by Bus, Train, Flights. BMT collects demographic info from each user who registers on the site. 

BMT wishes to expand its core offerings and create more value for its users by cross-selling other products such as credit, healthcare, and travel insurance. BMT is however concerned about sharing fine-grained data about its users (e.g., transaction data) with external partners.

The DEPA training cycle can help BMT create value for its users while meeting regulatory concerns. 

- BMT asks its users for consent to share their information with partners in return for personalized recommendation. The terms of consent state that data will be shared with technical safeguards which ensure the user's privacy.
- BMT enters into a contract with each of its partners to share data for training personalized recommendation models. The contract stipulates the secure environment in which data will be shared, privacy constraints and payment terms. 
- BMT uses the services of the CCR provider to setup a CCR for each of its partners. 
- BMT partners can train models on BMT's dataset (and optionally their own data) in a CCR as long as they can present a valid contract. BMT's dataset is never exposed to the partner, and the trained model protects the privacy of BMT's users, irrespective of any prior knowledge BMT's partners may have about BMT's users. 

## Credit Models in Flow-based Lending

One of the main challenges in flow-based lending is to develop robust and accurate models for assessing creditworthiness of borrowers and the risk of default of a loan based on data such as bank statements, credit bureau data and tax returns. Developing such models is challenging, especially for smaller banks, who do not have access to a large existing customer base whose profiles can be used to train models. A framework that makes a bulk labelled dataset of anonymized loan applications can reduce the cost of developing accurate risk assessment models. This can lead to better, more customized financial products that meet the requirements of different cohorts of users, and eventually benefit the entire ecosystem. 

For this scenario, a training dataset can be constructed by aggregating loan application datasets from multiple lenders. Each dataset in turn consists of loan applications. Each loan application in turn consists of bank statement data, tax data (for MSMEs), data from the credit bureau, and the terms on which the loan was offered. Each application also includes labels e.g., a label representing whether the borrower repaid or defaulted on the loan. Since all data for a specific loan application is often available from one lender, it is not essential to join data from one lender with data from other lenders or sources. Therefore, the lender can de-identify the dataset to a large extent e.g., by scrubbing all PII data such as name, age, gender, and addresses. Even so, the dataset contains a lot of sensitive data, and it is critical to ensure that the data remains protected. 
