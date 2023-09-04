---
id: use_cases
title: Use cases
description: Use cases
---

# Use Cases

This section presents representative use cases to illustrate the scope of the DEPA training cycle.

## Health Data Collaboration

AI models are being increasingly being integrated into healthcare systems for scenarios ranging from disease surveillance to diagnostic assistants. Building accurate models for healthcare often requires access to longitudinal data related to the specific population of interest. For instance, COVID surveillance models rely on data from PCR tests, vaccination records, and hospitalizations. To extract meaningful insights, these datasets must be combined using a common identifier (e.g., mobile number) and employed to train predictive models.

DEPA 2.0 can helps setup secure data collaborations and facilitate timely development of models.

- Patients get their X-rays done at the pathology labs or hospitals. Such labs and hospitals are Training Data Providers (TDP).
- A health tech has invented a new model for predicting tuberculosis using X-rays functions as a Training Data Consumer (TDC).
- The health tech enters into an electronic contract with one or more TDPs, The contract specifies the terms of data use, including the nature of the secure environment in which models will be trained, privacy constraints in accordance with standards defined by a healthcare SRO, and payment terms for additional value that the TDP provides e.g., by aggregating, cleaning and labelling data. The contract is registered with a contract service setup by the SRO.
- The health tech sets us a confidential clean room (possibly with the services of a CCR provider) hosting an ML framework certified by the SRO. The health tech uses the CCR to train the predictive model. During this process, the the raw health data from the TDPs is never exposed to the health tech. The training process ensures that the health tech cannot learn any information about specific patients from the trained model.
- Once the model has been trained, the health tech deploys it at various hospitals, where it is used by clinicians to obtain a first level of diagnosis, a process that would otherwise have taken days. Once confirmed by the clinicians, the diagnosis and treatment is presented to the patients.

DEPA Training framework streamlines secure data collaborations in the healthcare sector, enabling timely model development while maintaining stringent privacy and data security standards. This approach not only accelerates diagnosis and treatment but also ensures that sensitive patient information remains protected throughout the process.

## Travel Data Collaboration

Travel booking websites accumulate vast amounts of data, including user demographics and transaction history. Beyond their core services, these platforms can explore opportunities to leverage their data for external applications, such as cross-selling products like credit, healthcare, and travel insurance. However, concerns about sharing detailed user data with external partners while complying with regulations arise.

For example, consider BookMyTrip.com (BMT), a travel booking portal that collects demographic information from registered users.

BMT aims to enhance user value by offering personalized recommendations such as credit, healthcare, and travel insurance. BMT is however concerned about sharing fine-grained data about its users (e.g., transaction data) with external partners.

The DEPA training cycle can help BMT create value for its users while meeting regulatory concerns.

- BMT requests user consent to share their information with partners in return for personalized recommendation.Consent terms specify that data will be shared with stringent technical safeguards to protect user privacy.
- BMT enters into a contract with each of its partners to share data for training personalized recommendation models. The contract stipulates the secure environment in which data will be shared, privacy constraints and payment terms.
- BMT uses the services of the CCR provider to setup a CCR for each of its partners.
- BMT partners can train models on BMT's dataset (and optionally their own data) in a CCR as long as they can present a valid contract. BMT's dataset is never exposed to the partner, and the trained model protects the privacy of BMT's users, irrespective of any prior knowledge BMT's partners may have about BMT's users.

In short, the DEPA Training Cycle empowers BMT to create added value for its users by offering personalized recommendations while adhering to regulatory requirements and stringent privacy safeguards. Using the framework, BMT can extend its offerings without compromising user privacy and data security.

## Credit Models in Flow-based Lending

One of the main challenges in flow-based lending is to develop robust and accurate models for assessing creditworthiness of borrowers and the risk of default of a loan based on data such as bank statements, credit bureau data and tax returns. Developing such models is challenging, especially for smaller banks, who do not have access to a large existing customer base whose profiles can be used to train models. A framework that makes a bulk labelled dataset of anonymized loan applications can reduce the cost of developing accurate risk assessment models. This can lead to better, more customized financial products that meet the requirements of different cohorts of users, and eventually benefit the entire ecosystem.

For this scenario, a training dataset can be constructed by aggregating loan application datasets from multiple lenders. Each dataset consists of loan applications. Each loan application in turn consists of bank statement data, tax data (for MSMEs), data from the credit bureau, and the terms on which the loan was offered. Additionally, each application is labelled to indicate whether the borrower repaid or defaulted on the loan.

Since all data for a specific loan application is available from one lender, it is not essential to join data across lenders. Therefore, the lender can de-identify loan applications to a large extent e.g., by scrubbing all PII data such as name, age, gender, and addresses. Even so, the dataset contains a lot of sensitive data, and it is critical to ensure that the data remains protected during training.
