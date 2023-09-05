---
id: contract_service_specifications
title: Contract Service Specifications
description: Contract Service Specifications
---

# Contract Service

The contract service plays a crucial role within the DEPA Training Framework, facilitating secure data collaboration and contractual agreements between various participants, including Training Data Providers (TDPs), Training Data Consumers (TDCs), and Confidential Clean Room (CCR) providers.

The contract service maintains a registry, a verifiable data structure that records signed dataset references and contracts, and enforces contract registration policies. It also maintains a service key, which is used to endorse the state of the registry in receipts. All contract services MUST expose standard endpoints for registration of datasets and signed contracts and receipt issuance. Each contract service also defines its registration policy, which MUST apply to all entries in the registry.

The combination of registry, identity, registration policy evaluation, and registration endpoint constitute the trusted part of the contract service. Each of these components SHOULD be carefully protected against both external attacks and internal misbehaviour by some or all of the operators of the contract service.

Beyond the trusted components, contract services MAY operate additional endpoints for auditing, for instance to query for the history of dataset references and signed contracts registered by a given participant.

## Participant Identity

The DEPA Training Framework uses [decentralized identities](https://www.ietf.org/archive/id/draft-ietf-scitt-architecture-01.html#DID-CORE) to establish the identities of participants involved in sharing or consuming datasets.

Before a participant is able to share or consume datasets, they must create a decentralized identifier (also known as a DID). A DID is a unique string identifier associated with the participant. A DID can be resolved into a key manifest (a list of public keys indexed by a key identifier) using many different DID methods.

Participants MAY choose the DID method they prefer, but with no guarantee that all contract services will be able to register their signed contracts. To promote interoperability, all contract service implementations SHOULD support the did:web method [DID-WEB]. For instance, if the participants publishes its manifest at https://sample.participant/user/alice/did.json, the DID of the participant is did:web:sample.participant:user:alice.

Participants SHOULD use consistent decentralized identifiers for all their contracts. They MAY update their DID manifest, for instance to refresh their signing keys or algorithms, but they SHOULD NOT remove or change any prior keys unless they intend to revoke all contracts that are registered with those keys. This DID appears in the protected header of signed dataset and contracts.

## Dataset Reference and Contract Issuance and Registration

This section details the interoperability requirements for implementers of dataset reference and signed contract issuance and validation libraries, and of contract services.

### Signed Dataset Reference Format

The formats of signed dataset references and receipts are based on CBOR Object Signing and Encryption (COSE [RFC9052]). The choice of CBOR [RFC8949] is a trade-off between safety (in particular, non-malleability: each signed Contract has a unique serialization), ease of processing and availability of implementations.

A signed dataset reference is a COSE signed object (i.e., a COSE_Sign1) following the [SCITT](https://www.ietf.org/archive/id/draft-ietf-scitt-architecture-01.html) specifications. All signed dataset references MUST include the following protected headers.

- payload type (label: 3): media-type of contract payload as a string, for example application/json
- owner info (label: TBD, temporary 491):

### Signed Contract Format

The formats of signed contracts and receipts are based on CBOR Object Signing and Encryption (COSE [RFC9052]).

A signed contract is a COSE signed object (i.e., a COSE_Sign) signed by multiple participants. All signed contracts MUST include the following protected headers.

- payload type (label: 3): media-type of contract payload as a string, for example application/json
- participant info (label: TBD, temporary 491): an array containing the list of participant identifiers

Although participants may attach unprotected headers to signed dataset references and contracts, contract services MUST NOT rely on the presence or value of additional unprotected headers in signed contracts during registration and validation.

Participants sign contracts by attaching a CoseSignature object to an existing contract. All CoseSignature objects MUST contain the following protected headers.

- algorithm (label: 1): Asymmetric signature algorithm used by the participant of a Signed contract, as an integer, for example -35 for ECDSA with SHA-384, see COSE Algorithms registry [IANA.cose];
- Key ID (label: 4): Key ID
- Participant identity (label: TBD, temporary: 493): DID (Decentralized Identifier [DID-CORE]) of the participant, as a string, for example did:web:example.com;

In CDDL [RFC8610] notation, the Envelope is defined as follows:

```cddl
Contract_Envelope = COSE_Sign_Tagged

COSE_Sign_Tagged = #6.98(COSE_Sign)

COSE_Sign = [
  protected : bstr .cbor Protected_Header,
  unprotected : Unprotected_Header,
  payload : bstr,
  signatures : [+ Cose_Signature]
]

; All protected headers are mandatory.
Protected_Header = {
  3 => tstr         ; payload type
  491 => [+ tstr]   ; list of participants
  492 => tstr       ; feed
}

Unprotected_Header = {
  ; TBD, Labels are temporary
  ? 493 => [+ Contract_Receipt]
}

COSE_Signature =  [
    signature_protected : bstr .cbor Signature_Protected_Header,
    signature : bstr
]

Signature_Protected_Header = {
  1 => int               ; algorithm identifier
  3 => tstr              ; payload type
  4 => bstr              ; Key ID
  ; TBD, Labels are temporary
  494 => tstr            ; DID of participant
}
```

## Signed Contract Issuance

Once all the Envelope headers are set, an participant MUST use a standard COSE implementation to produce an appropriately serialized Signed Contract (the tag of COSE_Sign_Tagged is outside the scope of COSE, and used to indicate that a signed object is a signed Contract).

## Registering Signed Contracts

The same signed Contracts may be independently registered in multiple Contract Services. To register a signed Contract, the service performs the following steps:

- Client authentication. This is implementation-specific and MAY be unrelated to the participant identity. Signed Contracts may be registered by a different party on behalf of the participant.
- Participant identification. The Contract Service MUST store evidence of the DID resolution for the participant protected header of the Envelope and the resolved key manifest at the time of Registration for auditing. This MAY require that the service resolves the participant DID and record the resulting document, or rely on a cache of recent resolutions.
- Envelope signature verification, as described in COSE signature, using the signature algorithm and verification key of the participant DID document. li
- Envelope validation. The service MUST check that the Envelope includes a contract payload and the protected headers listed above. The service MUST additionally verify the contract payload format and content.
- Commit (register) the new signed Contract to the Registry Sign and return the Receipt.

A Contract Service MUST ensure that a signed Contract is registered before releasing its Receipt, so that it can always back up the Receipt by releasing the corresponding entry in the Registry.
