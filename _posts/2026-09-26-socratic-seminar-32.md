---
layout: post
type: socratic
title: "Socratic Seminar #32"
---

## Location

The event will be hosted at **NodeNBO**:

Gigiri, Nairobi | [nodenbo.com](https://nodenbo.com/) | [Map](https://maps.app.goo.gl/rpxjHZBsvrjnaF8S8)

## Announcements

Join us on our Bitcoin [Socratic Seminar](https://bitdevsnbo.org/about) `#32`.
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

* [Bitcoin Core 32.0 release candidate](https://github.com/bitcoin/bitcoin/releases/tag/v32.0rc1) — rc1 tagged Sep 14, final release targeted for Oct 10; parallel input fetching during block validation (up to ~3x faster IBD in testing), and 29.x reaches end of maintenance
  + [`-walletnotify` command injection fix (#36048)](https://github.com/bitcoin/bitcoin/pull/36048)
  + [Unbounded memory growth in the replacement HTTP server (#36123)](https://github.com/bitcoin/bitcoin/pull/36123) — sixteen REST connections grew memory by 3.2 GB before the fix
  + [Block templates enforce BIP54 minimum timestamps (#35949)](https://github.com/bitcoin/bitcoin/pull/35949)
* [Bounds on chain length with BIP-54 timewarp fixes](https://delvingbitcoin.org/t/bounds-on-chain-length-with-bip-54-timewarp-fixes/2899)
* [BIP332: stale chain tip relay finalized](https://github.com/bitcoin/bips/pull/2241) — follow-up to the stale block tips draft discussed at #31
* [Implicit deletions and improvements in Utreexo IBD](https://delvingbitcoin.org/t/implicit-deletions-and-improvements-in-utreexo-ibd/2881) — uses SwiftSync hintsfiles to cut ~200GB of deletion proofs during IBD to near-zero
* [Draft BIP: unspendable taproot internal keys in descriptors](https://groups.google.com/g/bitcoindev/c/se3TkNnbno4)
  + [Unspendable keys in descriptors](https://delvingbitcoin.org/t/unspendable-keys-in-descriptors/304)
* [Universal opt-in replay protection?](https://delvingbitcoin.org/t/universal-opt-in-replay-protection/2792) — revived after the BIP-110 fork-off

MC: Frank

* [PQC output type discussion](https://delvingbitcoin.org/t/pqc-output-type-discussion/2749) — bundling cross-input signature aggregation with P2TRv2, wallet adoption, and hash-based signature fees
  + [SHRINCS hash-based signatures draft BIP](https://github.com/SHRINCS/shrincs-bip/blob/main/SHRINCS.md) — 48-byte pubkeys, 548-byte stateful signatures with a 5,777-byte stateless fallback
  + [DropKick: a commit/reveal rescue for non-PQC coins](https://groups.google.com/g/bitcoindev/c/6SqWPfBf-p0)
  + [Standardizing an exposure classification for existing outputs (pre-BIP)](https://delvingbitcoin.org/t/standardizing-an-exposure-classification-for-existing-outputs-pre-bip/2866)
* [Block-wide signature aggregation via SNARKs](https://delvingbitcoin.org/t/block-wide-signature-aggregation-via-snarks/2875)
* [Comparing Bitcoin covenant proposals for vaults](https://delvingbitcoin.org/t/comparing-bitcoin-covenant-proposals-for-vaults/2877)
  + [Covenants.diy: a node editor for covenant scripts](https://delvingbitcoin.org/t/covenants-diy-a-node-editor-for-covenant-scripts/2826)
  + [Depots: theft-proof, self-custodial Bitcoin for billions of users](https://delvingbitcoin.org/t/depots-theft-proof-self-custodial-bitcoin-for-billions-of-users/2892)
* [A design bar for coercion-resistant custody](https://delvingbitcoin.org/t/a-design-bar-for-coercion-resistant-custody-and-where-duressfeatures-land-against-it/2832)

### Mining

---

MC: Kurt

- [Building Bitshoka](https://github.com/kuenrg153/bitshoka)

### Lightning Network

---

MC: Isaack

* [Core Lightning 26.06.7 security release](https://github.com/ElementsProject/lightning/releases/tag/v26.06.7) — the patch promised at #31; source withheld 14 days, verifiable via reproducible builds
  + [Disclosure: crashing CLN with a flood of pings](https://delvingbitcoin.org/t/disclosure-crashing-cln-with-a-flood-of-pings/2846) — OOM without needing a channel, fixed with backpressure in `connectd`
  + [Responsible disclosure and white hacking: it's about caring](https://delvingbitcoin.org/t/responsible-disclosure-and-white-hacking-its-about-caring/2910)
* [LND v0.21.3-beta](https://github.com/lightningnetwork/lnd/releases/tag/v0.21.3-beta) — peer resource limits, ping rate limiting, `channel_update` encoding fix, dust HTLC resolution
  + [LND #11061: BOLT12 invoice signing and verification](https://github.com/lightningnetwork/lnd/pull/11061)
* [LDK v0.3-rc1](https://github.com/lightningdevkit/rust-lightning/tree/v0.3-rc1) — RBF for splices, splice-in and splice-out in one splice, anchors by default
  + [LDK v0.2.6 security release](https://github.com/lightningdevkit/rust-lightning/blob/v0.2.6/CHANGELOG.md) — deserialization DoS and splice fee-inflation fixes
* [Eclair 0.14.3 security release](https://github.com/ACINQ/eclair/releases/tag/v0.14.3) — fixes in channel closing, splicing and on-the-fly funding
* [PQLN: post-quantum security for Lightning's off-chain surfaces](https://delvingbitcoin.org/t/pqln-post-quantum-security-for-the-bitcoin-lightning-networks-off-chain-surfaces/2893)
* [Towards a k-of-n Lightning node](https://delvingbitcoin.org/t/towards-a-k-of-n-lightning-network-node/2395)

### eCash

---

MC: Martin

* [Fedimint v0.12.0 "Second Nature"](https://github.com/fedimint/fedimint/releases/tag/v0.12.0) — v2 modules (lnv2, mintv2, walletv2) default for new federations, Iroh 1.0, UniFFI bindings for Kotlin and Swift
  + [Fedimint v0.12.1 / v0.11.3](https://github.com/fedimint/fedimint/releases/tag/v0.12.1) — Lightning gateway LNv1 payment bug fix; gateway operators urged to upgrade
* [CDK v0.18.0](https://github.com/cashubtc/cdk/releases/tag/v0.18.0) — database-authoritative mint config, NUT-16 animated QR tokens, deterministic DLEQ nonces
  + [CDK v0.18.1](https://github.com/cashubtc/cdk/releases/tag/v0.18.1)
* [Institutional-grade spending policies for statechains](https://delvingbitcoin.org/t/institutional-grade-spending-policies-for-statechains/2874)

### Show & Tell

---

MC: Vlad & Collin

- [Kesh Labs](https://kesh.ke/)

MC: Isaack

- [Payment Channels](https://www.npmjs.com/package/@minmoto/payment-channels)

#### Upcoming Events & Announcements

---

MC: Sharon

* [Africa Bitcoin Conference 2026](https://afrobitcoin.org/)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
