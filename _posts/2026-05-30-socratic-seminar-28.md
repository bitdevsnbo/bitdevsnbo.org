---
layout: post
type: socratic
title: "Socratic Seminar #28"
---

## Location

The event will be hosted at **NodeNBO**:

Gigiri, Nairobi | [nodenbo.com](https://nodenbo.com/) | [Map](https://maps.app.goo.gl/rpxjHZBsvrjnaF8S8)

## Announcements

Join us on our Bitcoin [Socratic Seminar](/about) `#28`. A special thank you to our
sponsor [Btrust](http://btrust.tech/) for food and refreshments.

## Reminders

- We prefer no photos and no videos during the event
- [Chatham House Rule](https://www.chathamhouse.org/about-us/chatham-house-rule)
- Leave the meeting space as clean as you found it
- Suggest topics for the next Socratic Seminar! [Where to find topics?](/about/find-topics)

## Topics

### Bitcoin

---

MC: Brandon

- [CVE-2024-52911: Bitcoin Core Script Interpreter Remote Crash](https://groups.google.com/g/bitcoindev/c/nSAd0UmDSvc) — use-after-free bug in parallel script validation; affects v0.14.0–28.x, fixed in 29.0
  - [Bitcoin Core #35209](https://github.com/bitcoin/bitcoin/pull/35209) — the covert + formal fix
- [BIP Proposal: UTXO Set Sharing over P2P Network](https://github.com/bitcoin/bips/pull/1748) — extends assumeUTXO with a new service bit and 4 P2P messages
  - [Voskuil counter-argument](https://github.com/bitcoin/bips/pull/1748#issuecomment-2800000000) — risks nudging new nodes to trust miners over full chain verification
- [BIP-323 merged: 24-bit nVersion nonce space for miners](https://github.com/bitcoin/bips/blob/master/bip-0323.mediawiki) — supersedes BIP-320; reserves bits 5–28 for header-only mining without rolling nTime more than once per second
- [CTV+CSFS: Can we reach consensus on a first step towards covenants?](https://delvingbitcoin.org/t/ctv-csfs-can-we-reach-consensus-on-a-first-step-towards-covenants/1509) — 81-reply thread still active as of March 2026
- [BIP Draft: Quantum-Resistant Transition for Dormant P2PKH Addresses](https://groups.google.com/g/bitcoindev/c/FmBCL2cVkEU) — proposed April 2026; relates to ongoing [BIP-360 (P2QRH)](https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki) work

---

MC: Frank

- [BIP-376: Spending Silent Payment outputs with PSBTs](https://github.com/bitcoin/bips/pull/1793) — how to include SP outputs in a PSBT workflow without leaking the shared secret
- [Frigate 1.4.0: GPU-accelerated Silent Payments scanning](https://github.com/cygnet3/sp-client) — experimental Electrum server for SP; uses UltrafastSecp256k1 + GPU; months of blocks scanned in ~0.5s


### Mining

---

MC: Simon

- [Stratum V2 Working Group: Foundry, AntPool, F2Pool, SpiderPool, Block Inc., MARA, DMND join](https://stratumprotocol.org/blog/sv2-working-group-launch/) — 7 pools representing ~75% of global hashrate; announced May 7, 2026
  - Key feature: miner-selected block templates — implications for censorship resistance
  - [Stratum V2 Working Group](https://stratumprotocol.org/)

### Lightning Network

---

MC: Isaack

- [Core Lightning 26.04 released](https://github.com/ElementsProject/lightning/releases/tag/v26.04) — splicing enabled by default; new `splicein`/`spliceout` commands including cross-splice mode; removes legacy onion format support; parallel pathfinding improvements in `askrene`
- [Core Lightning 26.06rc1](https://github.com/ElementsProject/lightning/releases/tag/v26.06rc1) — new `graceful`, `sendamount`, `xkeysend` RPCs; begins `pay` deprecation in favour of `xpay`; adds BOLT12 payer-proof RPC support
- [LND v0.21.0-beta.rc1: payment store migration to native SQL](https://github.com/lightningnetwork/lnd/releases/tag/v0.21.0-beta.rc1) — nodes using `--db.use-native-sql` with SQLite/Postgres will have payment store migrated from KV to SQL; opt-out available
- [Nested MuSig2 Lightning Nodes](https://delvingbitcoin.org/t/towards-a-k-of-n-lightning-network-node/2395) — ZmnSCPxj on k-of-n multisig Lightning nodes via nested MuSig2; motivated by large holders wanting safety guarantees without a single key

### Ecash

---

MC: Jodom

- [Cashu CDK — Go and Rust implementations](https://github.com/cashubtc/cdk) — `cdk-go`, eNuts, Numo (Lightning PoS), `cashu.me`, and `orchard` (mint management UI) all updated May 2026
- [Stateless VTXO Verification: Decoupling Custody from Implementation-Specific Stacks](https://delvingbitcoin.org/t/stateless-vtxo-verification-decoupling-custody-from-implementation-specific-stacks/2424) — Ark-related standard for verifying VTXOs across different implementations; also covered in [Optech #393](https://bitcoinops.org/en/newsletters/2026/04/18/)

#### Upcoming Events & Announcements

---

MC: Sharon

- [Bitcoin Nairobi Conference](https://bitcoinnairobiconference.com/)
- [bitcoin++ Open Source Edition](https://btcpp.dev/nairobi)
- [Africa Bitcoin Conference 2026](https://afrobitcoin.org/)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
