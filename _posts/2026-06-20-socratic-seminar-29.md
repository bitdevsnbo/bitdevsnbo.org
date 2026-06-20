---
layout: post
type: socratic
title: "Socratic Seminar #29"
---

## Location

The event will be hosted at **NodeNBO**:

Gigiri, Nairobi | [nodenbo.com](https://nodenbo.com/) | [Map](https://maps.app.goo.gl/rpxjHZBsvrjnaF8S8)

## Announcements

Join us on our Bitcoin [Socratic Seminar](/about) `#29`. A special thank you to our
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

- [Citrea recently changed their scheme to use a single 144-byte OP_RETURN](https://x.com/jonatack/status/2067819987033608358)
  - [OP_RETURN | Storing data on the blockchain](https://learnmeabitcoin.com/technical/script/return/)
- [Draft BIP for testnet5](https://groups.google.com/g/bitcoindev/c/kGUMTxOvdJA/m/Eyx5FxQeAAAJ)
  - [BIP Draft: Testnet 5](https://github.com/bitcoin/bips/pull/2196)
- [A post-quantum path for BIP324](https://groups.google.com/g/bitcoindev/c/n_5WuKVYqwI/m/lBooLis3AQAJ)
- [Disposing of “dust attack” UTXOs](https://delvingbitcoin.org/t/disposing-of-dust-attack-utxos/2215/4)

---

MC: Frank

- [Bitcoin Core #35221: BIP434 peer feature negotiation](https://github.com/bitcoin/bitcoin/pull/35221) — new `feature` P2P message for advertising and negotiating peer capabilities
- [Removing RBF opt-in signaling from wallet transactions](https://github.com/bitcoin/bitcoin/pull/35405) — proposes `nSequence = MAX-2` (dominant in ~75% of mainnet txs) since full-RBF is now default and the signal only fingerprints wallets

### Mining

---

MC: Simon

- [Bitcoin mining difficulty drops 10%](https://beincrypto.com/bitcoin-mining-second-largest-2026-drop/) — second-largest negative adjustment of 2026 as a price slide pushed miners offline; difficulty fell from 138.9T to 124.9T at block 953,568
- [Oman launches mandatory national Bitcoin mining pool](https://bitcoinmagazine.com/news/oman-launches-mandatory-bitcoin-mining) — all licensed miners must join the state-backed Omanhash.com pool, giving the government visibility into revenue, energy use, and BTC distribution; country has invested $700M+ in mining infrastructure since 2022

MC: Ryan

- [https://www.256foundation.org/](Building the Open Source Mining Stack)

### Lightning Network

---

MC: Isaack

- [Alby Hub v1.23.0: Just-in-time channels](https://github.com/getAlby/hub/releases) — channels now open automatically to receive incoming payments; removes the "no inbound liquidity" friction for new users
- [Block (Square) rolling out Lightning to ~4 million US merchants](https://www.plaitr.com/blog/lightning-network-for-merchant-payments-a-2026-reality-check) — largest single expansion of Lightning merchant acceptance infrastructure to date
- [Bitnob: salary payments via Lightning across 23 African countries](https://www.plaitr.com/blog/lightning-network-for-merchant-payments-a-2026-reality-check) — transaction volumes growing 340% annually; what does this mean for Kenya?

---

MC: Matthew

- [Bark live on Bitcoin mainnet](https://blog.second.tech/bark-now-on-bitcoin-mainnet/)
- [Arké: Native iOS Ark wallet](https://github.com/arkeapp/arke) — integrates onchain (BDK) and Lightning payments alongside Ark

### Ecash

---

MC: Jodom

- [Fedimint v0.11.1 "Mint Condition"](https://github.com/fedimint/fedimint/releases/tag/v0.11.1) — BOLT12 send/receive, mnemonic-based gateway recovery, Pkarr DNS guardian discovery, memory usage slashed from ~1.6GB to under 200MB, redesigned gateway UI
- [Fedimint v0.11.2-alpha.1](https://github.com/fedimint/fedimint/releases/tag/v0.11.2-alpha.1) — backport improving recurring daemon guardian selection for available and vetted guardians

#### Upcoming Events & Announcements

---

MC: Sharon

- [Bitcoin Nairobi Conference](https://bitcoinnairobiconference.com/)
- [Africa Bitcoin Conference 2026](https://afrobitcoin.org/)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
