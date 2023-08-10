---
id: depa-actions
title: Actions
description: This topic explores the essential actions through which a DEPA ecosystem comes to life.
---

# Actions

- **Network Onboarding** - All the participants of a transaction i:e Consent Manager, Personal Data Provider (PDP) and Personal Data Consumer (PDC) must get themselves on-boarded to a registry. It's post onboarding only that these entities will be able to discover, do resolution of each other and participate in a data transaction. A registry will facilitate the on-boarding workflow.

- **Resolution** - Entities will have to resolve each other for having access to the metadata of the entity and the service endpoints where the connection can be established. A registry will expose resolution functionality for the entities on its network.

- **Linking Accounts** - A user needs to link his PDPs with the consent manager. This linking can be initiated via the DP itself or the CM, in the latter case there will be a need to discover the PDPs on the CMs interface before the linking can be initiated. The linking will enable exchange of tokens between the DP and the CM and build a trust relation between the two entities. The linking process will also enable the CM to know about the accounts which user has associated with it, this will be required at the time of consent collection.

- **Consent collection and sharing** - The consent is collected by the CM and shared with PDP and PDC. Sharing of consent will enable the sharing of data as a next step. A precursor to giving consent is the linking of accounts with PDP so that users can select the accounts and PDPs from where the data needs to be shared with the PDC. A User can select multiple PDPs and accounts for a single consent.

- **Data fetching** - Post the consent is shared with the PDC, PDC initiates the fetching of data from PDP. The data transfer will be P2P between PDP and PDC but facilitated by the CM.

- **DP Discovery** - A PDP discovery will only be needed in case the user initiates the linking from the CMs system. Since all the entities are on boarded onto a registry, registry will enable the discovery of PDP via APIs. CM will use these APIs to assist users in discovering PDPs.

The responsibility of a registry is very minimal. A registry enables the transacting entities (PDPs, CMs and PDCs) to discover each other on the network (and their respective communication addresses) and helps establish trusted one-to-one connections between them. No traffic passes through a registry. Even consent request creation, the sharing of consent artifacts and notifications across entities happens in a peer-to-peer manner.

![Architecture](/img/learn/about-depa/DEPA-Arch.png)
