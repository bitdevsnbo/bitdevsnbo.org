---
layout: post
type: socratic
title: "Socratic Seminar #34"
---

## Location

The event will be hosted at **NodeNBO**:

Gigiri, Nairobi | [nodenbo.com](https://nodenbo.com/) | [Map](https://maps.app.goo.gl/rpxjHZBsvrjnaF8S8)

## Announcements

Join us on our Bitcoin [Socratic Seminar](https://bitdevsnbo.org/about) `#34`.
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

* [Bitcoin Core 31.3](https://github.com/bitcoin/bitcoin/releases/tag/v31.3)
  + [Bitcoin Core 30.5](https://github.com/bitcoin/bitcoin/releases/tag/v30.5)
  + [CVE-2025-62859: block processing stall via witness malleation](https://bitcoincore.org/en/2026/11/10/disclose-cve-2025-62859/)
  + [CVE-2025-62860: inbound Tor connections wrongly receive `-whitelist` permissions](https://bitcoincore.org/en/2026/11/10/disclose-cve-2025-62860/)
  + [CVE-2026-117348: node stall through duplicate orphan announcements](https://bitcoincore.org/en/2026/11/20/disclose-orphan-inv-stall/)
* [Slow-sliding MTP attack introduced by BIP 54?](https://delvingbitcoin.org/t/open-question-on-a-hypothetical-minor-slow-sliding-mtp-attack-introduced-by-bip-54/3101)
* [Machine-checked soundness of BIP340 batch verification](https://delvingbitcoin.org/t/machine-checked-soundness-of-bip340-batch-verification-with-128-bit-derived-randomizers/3019)
* [Multisig Session Protocol: remote multisig setup and signing](https://delvingbitcoin.org/t/multisig-session-protocol-draft-spec-for-remote-multisig-setup-and-signing-needs-review/3103)

MC: Frank

* [A STARK proof of Bitcoin's UTXO set at block 972,500](https://delvingbitcoin.org/t/a-stark-proof-of-bitcoins-utxo-set-at-block-972-500-with-circuits-proven-in-lean/3070)
* [Should wallets default to Taproot or SegWit receive addresses?](https://delvingbitcoin.org/t/should-wallets-default-to-taproot-or-segwit-receive-addresses-while-some-services-still-reject-bc1p/3056)
* [How much BTC sits behind keys already on chain](https://delvingbitcoin.org/t/how-much-btc-sits-behind-keys-or-scripts-already-on-chain-block-975-019/3088)
  + [Post Quantum Recovery Framework](https://delvingbitcoin.org/t/post-quantum-recovery-framework/3099)
  + [BIP draft: post-quantum address format (bc1z) using ML-DSA-65](https://delvingbitcoin.org/t/bip-draft-post-quantum-address-format-bc1z-using-ml-dsa-65/3067)
* [Full OP_RETURN value pruning](https://delvingbitcoin.org/t/full-op-return-value-pruning/3026)
* [Eltoo state chain on signet: TEMPLATEHASH + CSFS + INTERNALKEY](https://delvingbitcoin.org/t/eltoo-state-chain-on-signet-third-time-templatehash-csfs-internalkey/3012)

MC: Mercy

* [Mempool inconsistency during chain reorganization (CVE-2025-62861)](https://bitcoincore.org/en/2026/11/10/disclose-cve-2025-62861/)
  + [The original fix (#33504)](https://github.com/bitcoin/bitcoin/pull/33504)
  + [Follow-up testing (#36841)](https://github.com/bitcoin/bitcoin/pull/36841)

### Mining

---

MC: Nkatha

* [Decentralized Coinbase Payout Protocols (DCPP)](https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060)
* Stratum V2 adoption
  + [Foundry: testing Stratum V2](https://x.com/FoundryServices/status/2121279504475709625)
  + [MARA: first block(s) mined using Stratum V2](https://x.com/avg_gary/status/2120332745616543905)
  + [Luxor: Stratum V2 support](https://x.com/hash_bender/status/2122038009432506373)
  + [Stratum V2 v1.13.0](https://github.com/stratum-mining/stratum/releases/tag/v1.13.0)
* [P2PoolV2 beta: growing testnet5 hashrate](https://x.com/OrangeSurfBTC/status/2121700874632196303)
  + [P2PoolV2](https://x.com/BitcoinNewsCom/status/2122019989410422884)

### Lightning Network

---

MC: Isaack Njama

* [Core Lightning v26.12rc1](https://github.com/ElementsProject/lightning/releases/tag/v26.12rc1)
  + [Disclosure: DoS vulnerability fixed in Core Lightning v26.06.8](https://delvingbitcoin.org/t/disclosure-dos-vulnerability-fixed-in-core-lightning-v26-06-8/3072)
  + [CLN #9571: reject `tx_init_rbf` after peer sent `splice_locked`](https://github.com/ElementsProject/lightning/pull/9571)
  + [CLN #9681: xpay disables bad nodes](https://github.com/ElementsProject/lightning/pull/9681)
* [LND v0.21.8-beta](https://github.com/lightningnetwork/lnd/releases/tag/v0.21.8-beta)
  + [LND #11555: settle invoices only after complete HTLC collection](https://github.com/lightningnetwork/lnd/pull/11555)
  + [LND #11588: harden wallet sync checks during reorgs](https://github.com/lightningnetwork/lnd/pull/11588)
  + [LND #11575: buffer RBF close bumps in the close FSM](https://github.com/lightningnetwork/lnd/pull/11575)
* [Disclosure: memory-exhaustion DoS in Eclair 0.14.0](https://delvingbitcoin.org/t/disclosure-memory-exhaustion-dos-in-eclair-0-14-0/3057)
* [Receive screens and expiry: how users read payment-request expiry](https://delvingbitcoin.org/t/receive-screens-and-expiry-how-users-read-payment-request-expiry/3107)

### eCash

---

MC: Martin

* [Fedimint v0.13.0](https://github.com/fedimint/fedimint/releases/tag/v0.13.0)
* [Nutshell 0.22.0: BIP-39 mint seeds](https://github.com/cashubtc/nutshell/releases/tag/0.22.0)
* [Cashu v3 spec reorg: root NUTs now describe v3, old spec moved to `legacy/`](https://github.com/cashubtc/nuts/pull/469)
* [cashu-ts v4.13.1: hardening P2PK locks and payment requests](https://github.com/cashubtc/cashu-ts/releases/tag/v4.13.1)

### Community Announcements

---

MC: Sharon

* [Btrust Grants](https://x.com/btrustteam/status/2125170725367488987)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
