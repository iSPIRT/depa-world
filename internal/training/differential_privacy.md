---
id: differential_privacy
title: Differential Privacy
description: Differential Privacy
---

# Differentially Private Training

Imagine a TDC who wants to train a model for detecting payment fraud. The could do this by collecting labelled transaction data from multiple payment companies. The trained model might be quite useful, but it could also reveal a lot of information about the transactions, even if the TDC only has access to the trained model. Other kinds of models have been shown to be potentially vulnerable; credit card numbers have been pulled out of language models and actual faces reconstructed from image models. 

The DEPA training framework supports model training using a robust approach based on [_differential privacy_](https://desfontain.es/privacy/differential-privacy-awesomeness.html). 

## Differential Privacy

At its roots, differential privacy is a mathematical way to protect individuals when their data is used in datasets. DP allows high level trends and patterns within the dataset to be shared while withholding information about individuals. It guarantees that adversaries cannot discover an individual within the protected data set even by comparing the data with other datasets. In other words, an individual will experience no difference whether they participate in information collection or not. This means that __no harm will come to the participant as a result of providing data__. 

Differential privacy works by introducing a privacy loss or privacy budget parameter, often denoted as epsilon (ε), to the dataset. ε controls how much noise or randomness is added to the raw dataset. The added randomness is controlled, therefore, the resulting dataset is still accurate enough to generate aggregate insights through data analysis while maintaining the privacy of individual participants.

## Differential Private Training

There are several ways of training machine learning models with differential privacy. By far the most common is using Differentially Private Stochastic Gradient Descent (DP-SGD). DP-SGD prevents the model from memorizing or leaking sensitive information about the data by adding noise to the gradients during the optimization process. The amount of noise is carefully calibrated to satisfy a mathematical definition of differential privacy, which guarantees that the model's output is almost independent of any single data point. DP-SGD can be applied to various types of models, such as deep neural networks, and has been used for tasks such as natural language processing and computer vision.  DP-SGD can be applied to fine-tune models while preserving the privacy of the task-specific data. 

Here are some references that explain DP-SGD in more detail:

- [Differential Privacy Series | DP-SGD Algorithm Explained](https://medium.com/pytorch/differential-privacy-series-part-1-dp-sgd-algorithm-explained-12512c3959a3): This blog post provides a gentle introduction to DP-SGD and its core concepts, such as clipping and noise addition.
- [Deep Learning with Differential Privacy (DP-SGD Explained)](https://mukulrathi.com/privacy-preserving-machine-learning/deep-learning-differential-privacy/): This article gives a more formal definition of differential privacy and shows how DP-SGD can be implemented using PyTorch.
- [An Efficient DP-SGD Mechanism for Large Scale NLP Models](https://arxiv.org/abs/2107.14586): This paper presents an efficient implementation of DP-SGD for fine-tuning large-scale NLP models based on LSTM and transformer architectures.


## Differential Private Training/Fine-tuning in DEPA 

The DEPA training framework provides TDPs with mechanisms to ensure that TDCs use their datasets in a way that protects the privacy of data principals. Using these mechanisms, TDPs can meet compliance requirements 

- TDPs create anonymized datasets by using standard de-identification approaches such as k-anonymity, masking and scrubbing as defined by the TSO. In addition, TDPs allocate a privacy budget for each dataset based on recommendations of the TSO. The privacy budget bounds the information a TDC can learn about de-identified records in the dataset. 
- When TDPs and TDCs sign contracts, they allocate a certain fraction of the privacy budget for each training run. This is specified in the privacy constraint in the contract. 
- When a CCR is created to train a model, it requests data encryptions keys from the TDP. The TDP SHALL NOT release keys to the CCR if the privacy budget has been exhausted. 
- In the CCR, models SHALL Be trained using a differentially private training algorithm subject to privacy constraints specified in the contracts. For example, if a model is trained using DP-SGD, the clipping norm and noise shall be chosen based on privacy constraints. 

## Privacy Budgets

In any differentially private mechanism, processing a dataset e.g., to train a model, consumes some privacy budget. The dataset cannot be used anyone once the allocated budget is exhausted. This makes privacy budget a scarce resource that must be carefully managed. The DEPA training framework intends to provide TDPs with tools and guidance to manage privacy budget correctly and judiciously. 

### Granularity 

It is possible to assign privacy budgets to a whole dataset, or to partition 

### Renewing privacy budgets

### Global vs individual budget allocation


TDPs ma
This works fine as long as the identity of TDC is maintained over time. The problem arises if two or more TDCs either collaborate or merge in future. In such scenarios, it is possible that the TDCs already exhausted their individual privacy budget then their cumulative privacy budget can go over the allowed limits -which is a problem because this breaks the mathematical guarantees provided by the framework. Such situations can be prevented by appropriate regulation but any malicious identification of a breach will happen post-facto which goes against our principles. Therefore, in addition to preventive regulatory requirements, we provide a range of solutions for different privacy requirements.

Solution: 
To address such undesirable collusions among TDCs at a future time, we recommend a graded framework that can be decided by SROs for individual domains based on the privacy-sensitivity of the underlying training data. 


Sensitivity Level
Solution
Data Privacy Sensitivity
Features
Level 2
Restrict trained model use to CCR, i.e. the trained model never leaves CCR  


Highly sensitive data which is critical for larger social good. Also the speed at which more such data gets generated is rather slow.
-Makes collusion harder
-Restricted participation but still better than no access to rare critical training data
Level 1
Renewable Global Privacy Budget
Highly sensitive data. Also the speed at which more such data gets generated is not too slow.
-No restrictions in taking the model out
-”Old” training data is continuously replaced with “new” training data to ensure privacy 
Level 0
Only regulatory protection


Non-sensitive or aggregate data. Large amount of data is available for training and more data keeps getting generated continuously
-Least restrictive for TDCs
-Privacy amplification by sampling provides extra layer of safety



The choice of the solution depends on the privacy sensitivity of the data. This will be a critical responsibility of SROs to agree upon the right level for each domain and dataset to best reflect the trade-offs between privacy of the data and the criticality of the use-cases for which the data is used. In addition to the above solutions, watermarking of models trained within with our Depa 2.0 framework is suggested. This can be particularly useful for accurate privacy budget accounting if a new TDC further tries to train a model already trained by another TDC - this can happen in the case of companies merging or coming together for business reasons.
