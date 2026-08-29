---
layout: post
type: socratic
title: "Socratic Seminar #31"
---

## Location

The event will be hosted at **NodeNBO**:

Gigiri, Nairobi | [nodenbo.com](https://nodenbo.com/) | [Map](https://maps.app.goo.gl/rpxjHZBsvrjnaF8S8)

## Announcements

Join us on our Bitcoin [Socratic Seminar](https://bitdevsnbo.org/about) `#31`.
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

* [BIP 110: Reduced Data Temporary Softfork](https://bips.dev/110/)
  + [Block 961,632](https://x.com/saylor/status/2086057411056447861)
  + [WE HAVE FORK-OFF!](https://x.com/mononautical/status/2086174726238654607)
  + [BIP110 has forked off](https://bip110.orange.surf/live.html)
* [Quantum Safe Bitcoin tx on mainnet](https://x.com/avihu28/status/2092742315995480266)
* [Draft BIP for relaying stale block tips between peers](https://groups.google.com/g/bitcoindev/c/AwOPNxF15mU) — opt-in P2P message tracking "stale block rate" to expose validation bottlenecks, partitions, or selfish mining
  + [BIP draft text](https://github.com/pseudoramdom/bips/blob/staletip-bip-draft/bip-staletip.md)
* [HWI repository to enter maintenance mode](https://github.com/bitcoin-core/HWI/issues/850)
* [Static Bitcoin Core binaries available for testing](https://groups.google.com/g/bitcoindev/c/UgGHs-_YGvw)

MC: Frank

* [COLDCARD wallets at risk of theft from a firmware entropy bug](https://blog.coinkite.com/coldcard-mk3-seed-generation-warning/) — Mk3 (v4.0.1+) and pre-5.6.0 Mk4/Mk5/Q generated seeds with ~40 bits instead of 128; losses estimated over 1,000 BTC
  + [Technical root-cause analysis](https://engineering.block.xyz/blog/predictable-rng-fallback-and-32-bit-reseed-in-coldcard-firmware)
* [zkPoH: a zero-knowledge proof-of-hodl prototype](https://delvingbitcoin.org/t/zkpoh-zero-knowledge-proof-of-hodl/2699) — proves control of ≥100,000,000 sats without revealing UTXO details
  + [Reference implementation](https://github.com/fabohax/zkPoH)

### Mining

---

MC: Simon

* [OCEAN launches Portal, an end-to-end encrypted pool dashboard](https://www.morningstar.com/news/pr-newswire/20260722fl09578/ocean-launches-portal-the-first-end-to-end-encrypted-pool-dashboard-for-bitcoin-miners) — free dashboard for miners on OCEAN, unveiled at Mining Disrupt 2026
* [A miner rejects BIP-110 despite mining through a pool that signals for it](https://www.coindesk.com/markets/2026/08/10/bitcoin-miner-rejects-bip-110-despite-mining-through-a-pool-that-supported-it) — OCEAN's DATUM protocol keeps block-template construction with the individual miner, not the pool operator

MC: Nkatha

* [Pooled mining payout mechanisms / EDCA](https://bitcoinops.org/en/topics/pooled-mining/) — Optech's topic primer on how Betterhash, Braidpool, Stratum, and Stratum v2 coordinate pooled mining and split rewards
  + [EDCA reference implementation](https://github.com/zaidmstrr/EDCA)
* [Bitcoin After Block Rewards: preventing miner deviation once the subsidy hits zero](https://delvingbitcoin.org/t/research-bitcoin-after-block-rewards-preventing-miners-deviation-when-the-bitcoin-rewards-is-zero/2626)

### Lightning Network

---

MC: Isaack

* [Core Lightning maintainers disclose critical vulnerabilities, urge emergency offline mode](https://www.tftc.io/core-lightning-critical-vulnerabilities-emergency-shutdown) — bugs surfaced via an AI-assisted audit of 390+ Bitcoin repos by the Bitcoin Red Team; a signed binary patch was promised within 48 hours, full disclosure and CVEs within two weeks
  + [ElementsProject/lightning releases](https://github.com/ElementsProject/lightning/releases) — authoritative source for the patch once published
  + the second significant CLN vulnerability event in weeks, after the twin memory-exhaustion DoS bugs disclosed July 31 (message-queue flooding, fixed in #8376; fake-SCID flooding, fixed in #8903) — [disclosure post](https://delvingbitcoin.org/t/vulnerability-disclosure-twin-memory-exhaustion-dos-vulnerabilities-in-core-lightning/2731)
* [A conditional message transfer contract to solve channel jamming](https://delvingbitcoin.org/t/conditional-message-transfer-contract-to-solve-jamming/2772) — Antoine Riard's Script construction charging withhold-fees proportional to how long a payment is held, turning jamming into an expensive attack
* [Eclair 0.14.1](https://bitcoinops.org/en/newsletters/2026/07/31/) — BOLT12 fixes, now requires Bitcoin Core 31.x

### eCash

---

MC: Martin

* [Nutshell 0.20.3](https://github.com/cashubtc/nutshell/releases/tag/0.20.3) — adds P2BK (Pay-to-Blinded-Key) for payment unlinkability and a Spark L2 wallet backend
  + [Nutshell 0.20.2](https://github.com/cashubtc/nutshell/releases/tag/0.20.2) — hardening release enforcing auth on NUT-29 batched minting, migrates quote/subscription IDs to UUIDv7

### Privacy Tech

---

MC: Denver

* [Designing standalone escrows in Pontmore PIP-01](https://openbitcoin.africa/t/designing-standalone-escrows-in-pontmore-pip-01/28) — lets agents discover compatible escrow mechanisms, settlement networks, funding and release rules for fiat↔BTC swaps before a swap starts
  + [Pontmore protocol](https://pontmore.xyz/)
  + [Rollpot: a two-player dice wager built on a standalone escrow](https://rollpot.pontmore.xyz/)

#### Upcoming Events & Announcements

---

MC: Sharon

* [Africa Bitcoin Conference 2026](https://afrobitcoin.org/)

---

### Submit suggestions for next meeting!

Issues on Github: https://github.com/BitDevsNBO/bitdevsnbo.org/issues
