---
layout: post
type: socratic
title: "Socratic Seminar #27"
---

## Location

The event will be hosted at **Waitabit Coffee Collective**:

[Map](https://maps.app.goo.gl/4d7hEjZy7QHqe9U38)

## Announcements

Join us on our Bitcoin [Socratic Seminar](/about) `#27`. A special thank you to our
sponsor [Btrust](http://btrust.tech/) for food and refreshments.

## Reminders

- We prefer no photos and no videos during the event
- [Chatham House Rule](https://www.chathamhouse.org/about-us/chatham-house-rule)
- Leave the meeting space as clean as you found it
- Suggest topics for the next Socratic Seminar! [Where to find topics?](/about/find-topics)

## Topics

## Bitcoin

---

MC: Brandon

- [Bitcoin Core 31.0rc4](https://bitcoincore.org/bin/bitcoin-core-31.0/test.rc4/) — fourth release candidate; community testing window open
- [BIP 361: Post-Quantum Migration and Legacy Signature Sunset](https://groups.google.com/g/bitcoindev/c/nSAd0UmDSvc) — proposes sunsetting ECDSA/Schnorr key-path spending in a future soft fork; builds on BIP 360 P2MR
  - [BIP 360 P2QRH: ongoing protocol design discussion](https://delvingbitcoin.org/t/changes-to-bip-360-pay-to-quantum-resistant-hash-p2qrh/1811)
  - [BIP Draft: Witness Version 3 — ML-DSA-65 Post-Quantum Key-Path Spending](https://delvingbitcoin.org/t/bip-draft-witness-version-3-ml-dsa-65-post-quantum-key-path-spending/2422) — alternative PQ address type using NIST ML-DSA-65
  - [SHRIMPS: 2.5 KB post-quantum signatures across multiple stateful devices](https://delvingbitcoin.org/t/shrimps-2-5-kb-post-quantum-signatures-across-multiple-stateful-devices/2355)
- [Commit-Reveal for PQ Migration](https://delvingbitcoin.org/t/commit-reveal-for-pq-migration/2419) — Jeremy Rubin proposes soft-fork-free PQ protection via pre-committed hashes
- [Active Sweeping of Vulnerable Outputs after Q-day](https://delvingbitcoin.org/t/active-sweeping-of-vulnerable-outputs-after-q-day/2421) — how exposed pubkey coins could be handled when quantum threat materialises
- [Utreexod 0.5](https://delvingbitcoin.org/t/new-utreexo-releases/2371) — SwiftSync for IBD with dramatically reduced UTXO download requirements
  - [Floresta 0.9.0](https://www.getfloresta.org/blog/release-v0.9.0) — BIP183 alignment and Bitcoin Kernel integration for a utreexo-based node
- [Binary Fuse Filters as an alternative to BIP 158 GCS](https://delvingbitcoin.org/t/binary-fuse-filters-as-an-alternative-to-bip-158-gcs/2428) — more space-efficient compact block filter encoding
- [Eltoo State Chain on Signet: CSFS+CTV with rekey and ladder, no CAT](https://delvingbitcoin.org/t/eltoo-state-chain-on-signet-again-three-rounds-two-transactions-csfs-ctv-with-rekey-and-ladder-no-cat/2430) — working two-transaction settlement demo on signet
- [How CTV+CSFS improves BitVM bridges](https://delvingbitcoin.org/t/how-ctv-csfs-improves-bitvm-bridges/1591) — Robin Linus shows covenant opcodes eliminate trusted operators in BitVM bridge design
- [Formal Verification of secp256k1 Modular Scalar Multiplication](https://groups.google.com/g/bitcoindev/c/l7AdGAKd1Oo) — machine-checked proof of correctness for secp256k1 scalar operations
- [Coldcard 6.5.0](https://coldcard.com/docs/upgrade/#edge-version-650xqx-musig2-miniscript-and-taproot-support) — adds MuSig2, BIP322, miniscript, and taproot key-path features

### Mining

---

MC: Simon

- [Difficulty slides 2.43% to 135.59T on April 17](https://cryptonews.net/news/mining/32730269/) — hashprice up 13.65%; faster blocks point to upward adjustment by April 30
- [Challenge: Covenants for Braidpool](https://delvingbitcoin.org/t/challenge-covenants-for-braidpool/1370) — Bob McElrath on which covenant proposal best enables decentralised share accounting for mining pools

### Lightning Network

---

MC: Isaack

- [Towards a K-of-N Lightning Network Node](https://delvingbitcoin.org/t/towards-a-k-of-n-lightning-network-node/2395) — ZmnSCPxj proposes nested MuSig2 to split a single LN node's keys across multiple machines
  - [Paper: Nested MuSig2 for threshold Lightning signing](https://eprint.iacr.org/2026/223)
- [Core Lightning 26.04rc3](https://github.com/ElementsProject/lightning/releases/tag/v26.04rc3) — April 2026 release candidate
  - [CLN #9021: Splicing enabled by default](https://github.com/ElementsProject/lightning/issues/9021)
  - [CLN #9046: Keysend CLTV expiry raised to 42 blocks](https://github.com/ElementsProject/lightning/issues/9046)
- [LND #9985: Simple taproot channels in production](https://github.com/lightningnetwork/lnd/issues/9985) — taproot channel support graduates from experimental flag
- [LDK #4515: Zero-fee anchor commitments to production](https://github.com/lightningdevkit/rust-lightning/issues/4515)
- [Onion Message Jamming in the Lightning Network](https://delvingbitcoin.org/t/onion-message-jamming-in-the-lightning-network/2414) — DoS vectors via onion messages and proposed mitigations
- [Eclair #3269: Automatic idle channel liquidity reclamation](https://github.com/ACINQ/eclair/issues/3269)

### Ecash

---

MC: Okjodom

- [Compact Isogeny PQC: post-quantum replacement for HD wallet key-tweaking and silent payment scanning](https://delvingbitcoin.org/t/compact-isogeny-pqc-can-replace-hd-wallets-key-tweaking-silent-payments/2324) — has direct implications for how Cashu mints and Fedimint federations derive keys
- [Cashu ecosystem — CDK, nutshell, eNuts, cashu-ts, cdk-go](https://github.com/cashubtc) — multiple projects pushed updates mid-April 2026; check individual release pages for details
- [Frigate 1.4.0](https://damus.io/nevent1qqsrg3xsjwpt4d9g05rqy4vkzx5ysdffm40qtxntfr47y3annnfwpzgpp4mhxue69uhkummn9ekx7mqpz3mhxue69uhkummnw3ezummcw3ezuer9wcq3samnwvaz7tmjv4kxz7fwwdhx7un59eek7cmfv9kqz9rhwden5te0wfjkccte9ejxzmt4wvhxjmczyzl85553k5ew3wgc7twfs9yffz3n60sd5pmc346pdaemf363fuywvqcyqqqqqqgmgu9ev) — Nostr client adds silent payment address scanning with GPU acceleration
- [Stealth Addresses Using Nostr](https://delvingbitcoin.org/t/stealth-addresses-using-nostr/1816) — proposal to use Nostr relays as the notification layer for silent payment coordination

#### Upcoming Events & Announcements

---

MC: Sharon

- [Btrust Builders Pathways](https://www.btrust.tech/builders/apply)
- [bitcoin++ open source edition](https://btcplusplus.dev/conf/nairobi)
- [Adopting Bitcoin Nairobi](https://x.com/AdoptingBTC/status/2017621046598226329)
- [Africa Bitcoin Conference 2026](https://afrobitcoin.org/)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
