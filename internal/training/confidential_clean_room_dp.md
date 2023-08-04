---
id: confidential_clean_room_dp
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
- When a CCR is created to train a model, it requests data encryptions keys from the TDP. The TDP SHALL NOT release keys to the CCR if the TDC has exceeded overall privacy budget assigned to the TDC. 
- In the CCR, models SHALL Be trained using a differentially private training algorithm subject to privacy constraints specified in the contracts. For example, if a model is trained using DP-SGD, the clipping norm and noise shall be chosen based on privacy constraints. 