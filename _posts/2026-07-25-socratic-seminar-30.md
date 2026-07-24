---
layout: post
type: socratic
title: "Socratic Seminar #30"
---

## Location

The event will be hosted at **NodeNBO**:

Gigiri, Nairobi | [nodenbo.com](https://nodenbo.com/) | [Map](https://maps.app.goo.gl/rpxjHZBsvrjnaF8S8)

## Announcements

Join us on our Bitcoin [Socratic Seminar](https://bitdevsnbo.org/about) `#30`.
A special thank you to our sponsor [Btrust](http://btrust.tech/) for food and refreshments.

## Reminders

* We prefer no photos and no videos during the event
* [Chatham House Rule](https://www.chathamhouse.org/about-us/chatham-house-rule)
* Leave the meeting space as clean as you found it
* Suggest topics for the next Socratic Seminar! [Where to find topics?](https://bitdevsnbo.org/about/find-topics)

## Topics

### Bitcoin

---

MC: Brandon

* [btc-verified: Formalizing the Bitcoin protocol in Lean4](https://delvingbitcoin.org/t/btc-verified-formalizing-the-bitcoin-protocol/2684) — first result formally proves Core's CVE-2012-2459 merkle-root mutation check is correct
  + [Bitcoin-Dev mailing list announcement](https://groups.google.com/g/bitcoindev/c/OIml9stwbGQ)
* [Fountain codes: a way to reduce blockchain storage costs](https://delvingbitcoin.org/t/fountain-codes-a-way-to-reduce-blockchain-storage-costs/2624) — letting pruned nodes serve IBD from erasure-coded "droplets"; discussion raised peer-count, DoS, and fingerprinting concerns
* [BIP95: draft spec for testnet5 merged into the BIPs repo](https://github.com/bitcoin/bips/issues/2196) — follow-up to the testnet5 draft we discussed last month; removes testnet4's exploited min-difficulty exception and enforces BIP54 rules from block 1
* [Draft BIP: prohibit merkle internal-node preimages that encode 64-byte transactions](https://groups.google.com/g/bitcoindev/c/ZVDEzxG6Sq8) — Jeremy Rubin's alternative to BIP54's outright 64-byte transaction ban; most responses preferred the simpler ban

MC: Frank

* [Triggering EC disabling with a NUMS point spend or hashrate majority](https://groups.google.com/g/bitcoindev/c/aWYtPLVPZ3U) — Pieter Wuille on consensus-enforced "tripwire" and "miner lockdown" triggers for disabling elliptic curve spends in post-quantum output types
  + [Public key recovery for P2MR EC leaves](https://delvingbitcoin.org/t/public-key-recovery-for-ec-leaves-in-p2mr-bip-360/2603)
  + [Lattice-based signatures: why has Bitcoin PQ work favored hash-based schemes?](https://delvingbitcoin.org/t/pqc-lattice-based-signatures/2522)
* [Bitcoin Core #35295: parallel prevout fetching](https://github.com/bitcoin/bitcoin/issues/35295) — fetches coins spent by a block's inputs concurrently; benchmarks show IBD speedups from 1.18x to over 3x
* [Bitcoin Core 31.1](https://bitcoincore.org/en/releases/31.1/) — fixes an IP address leak in `-privatebroadcast`, plus chainstate compaction, wallet migration, and MuSig2 key aggregation fixes
  + [Bitcoin Core 30.3](https://bitcoincore.org/en/releases/30.3/)

### Mining

---

MC: Sy ⚡

* [interoperability-tests-sv2: new library for testing Stratum v2 compliance](https://github.com/stratum-mining/interoperability-tests-sv2/issues/1) — verifying compatibility between the SRI reference implementation and other SV2-based software as protocol experimentation grows
* [Bitcoin Core #34020: transaction lookup methods for the Mining IPC interface](https://github.com/bitcoin/bitcoin/issues/34020) — `getTransactionsByTxID()`/`getTransactionsByWitnessID()` support Stratum v2 custom job declaration, letting pools request only the template transactions they're missing

MC: Nkatha

* [Braidpool - Attempts towards mining decentralization](https://x.com/i/status/2063204362386800944)

### Lightning Network

---

MC: Isaack Njama

* [Core Lightning #9104: experimental option_simple_close support](https://github.com/ElementsProject/lightning/issues/9104) — each peer proposes its own closing transaction and fee, ending stuck fee negotiations in cooperative closes
* [Eclair #3323: fail incoming HTLCs with expiries over 2016 blocks](https://github.com/ACINQ/eclair/issues/3323) — caps how long funds can be locked and raises the cost of channel jamming
* [LND #10832: BOLT12 InvoiceRequest support lands](https://github.com/lightningnetwork/lnd/issues/10832) — continues LND's offers implementation with TLV encoding, decoding, and structural validation
* [LND #10900: SubmitPackage RPC for 1p1c packages](https://github.com/lightningnetwork/lnd/issues/10900) — zero-fee v3 commitment transactions with ephemeral anchors can now be fee-bumped via package relay on bitcoind backends
* [LND v0.20.2-beta](https://github.com/lightningnetwork/lnd/releases/tag/v0.20.2-beta) — maintenance release; tightens final-hop HTLC CLTV expiry validation
* [LDK #4748 & #4751: splicing state-machine edge case fixes](https://github.com/lightningdevkit/rust-lightning/issues/4748) — delayed `tx_signatures` and stale splice `commitment_signed` messages could block splices or force close live channels

### Ecash

---

MC: Martin

* [Cashu.me released as native iOS and Android apps](https://x.com/CashuBTC/status/2076700928569426026) — the OG ecash web wallet goes native, built on CDK's Swift and Kotlin bindings with Lightning, onchain, tap-to-pay, and multi-currency support
* [CDK #1834: retrieve mint quotes associated with a public key](https://github.com/cashubtc/cdk/pull/1834) — implementation ready, awaiting the spec's official NUT number
  + [nuts #341: the draft specification](https://github.com/cashubtc/nuts/pull/341/)
* [Nutshell 0.20.1](https://github.com/cashubtc/nutshell/releases/tag/0.20.1) — NUT-29 batched minting, NUT-26 bech32m payment requests, async-melt, and P2PK pubkey deduplication hardening

### Show & Tell

---

MC: Fidel

* [Build with Robin!](https://www.buildwithrobin.xyz/)

MC: Susan

* [SiriScore](https://siriscore.xyz/)

MC: Jodom

* [Pontmore protocol](https://pontmore.xyz/)

#### Upcoming Events & Announcements

---

MC: Sharon

* [Africa Bitcoin Conference 2026](https://afrobitcoin.org/)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
