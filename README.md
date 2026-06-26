# SunQuest Playbook
**Beat every dungeon. Find every orb. Win the game.**

> An empirically-derived playbook and use guide for [SunQuest RPG](https://playsunquest.com) — auto-crawled by Hermes Agent.

---

## 🎯 The Mission

**Endgame objective:** Collect 3 Orbs of Umbra → Combine them → Summon **Demon Kobal** → Defeat Kobal → Win.

> *"If the 3 orbs are combined you will summon the demon Kobal. Be careful."*
> — Hooded Figure, Cave-7-Found

---

## Orb Tracker

| Orb | Location | Status |
|-----|----------|--------|
| ⚄ Orb #1 | `/cave-7-found/` | ✅ CONFIRMED |
| ⚄ Orb #2 | Unknown | 🔍 Searching |
| ⚄ Orb #3 | Unknown | 🔍 Searching |

**Orb #1 path:** `s-map/ → skull-dungeon/714-2/ → cave-upper-well-choice/ → cave-upper/ → cave-7-found/`

---

## World Map (9/24 areas mapped)

```
🌍 starting-location/s-map/         ← FAST TRAVEL (20 destinations)
├── 🏰 emberwind-crossroads/        ← Central quest hub
│   ├── bounty-quest/              ← Bounty Board
│   │   ├── bounty-quest/avenr/   ← Avenr NPC → Sea Ghost boss
│   │   └── troll-dungeon/        ← Tuskbreaker Dungeon
│   ├── jail-quest/the-orc/       ← Escape quest
│   └── findpotion/               ← Potion quest
│
└── ⚔ skull-dungeon/             ← MAIN DUNGEON
    ├── 714-2/                    ← Entry floor
    │   ├── skull-dungeon-2/      ← Safe zone (loops back)
    │   └── cave-upper-well-choice/
    │       ├── down-well/        ← Dark well (keys, chest)
    │       ├── cave-upper-skull-eye/
    │       │   └── skull-cave/   ← COMBAT arena
    │       │       ├── attack/ ← skull cave fight
    │       │       ├── pick-up-sword/ ← SWORD ACQUIRED
    │       │       ├── swing-victory/
    │       │       └── swing-defeat/
    │       └── cave-upper/
    │           ├── cave-7-found/   ← ⚄ ORB #1 + ORB COMBINE PORTAL
    │           └── cave-7-portal-choice/
    │
    └── 719-2/                    ← Forest hub
        ├── the-crypt/            ← CRYPT (item-gated)
        │   ├── enter/           ← 4 choices: enter-axe, enter-coffin,
        │   │                    ←   enter-main, enter-l1
        │   │   ├── enter-axe/      ← Needs CRYPT KEY
        │   │   └── enter-main/    ← Needs RELIC OF AFTERLIFE
        │   │       ├── crypt-relic/     ← CRYPT KEY + RELIC (item room)
        │   │       │   └── crypt-relic-place/
        │   │       └── crypt-king-room/  ← CRYPT KING BOSS
        │   │           └── crypt-king-swing/
        │   │               ├── crypt-king-victory/
        │   │               └── crypt-king-defeat/
        │   └── crypt-l-room/
        │
        ├── oak-tavern/          ← Safe zone / NPCs
        └── part-3-gp/          ← Tomb with treasure
```

---

## Combat Pages Discovered

| Page | Enemy | Victory | Defeat |
|------|-------|---------|--------|
| `/skull-cave/attack/` | Skull Cave Monster | `/swing-victory/` | `/swing-defeat/` |
| `/the-crypt/crypt-king-swing/` | Crypt King | `/crypt-king-victory/` | `/crypt-king-defeat/` |
| `/the-crypt/enter-l9-mummy-relic/` | Mummy | `/crypt-relic-place/` | ? |

**Combat model:** Server-stateful — outcome determined on click, no client-side state readable. P(win) unknown.

---

## Key Items

| Item | Location | Purpose |
|------|----------|---------|
| ⚄ Orb of the Sun | `/cave-7-found/` | Endgame material |
| 🗝 Crypt Key | `/the-crypt/crypt-relic/` | Unlocks crypt side rooms |
| ☠ Relic of the Afterlife | `/the-crypt/crypt-relic/` | Opens crypt forward path |
| ⚔ Sword of the Sun | `/skull-cave/pick-up-sword/` | Combat upgrade |
| 🔑 Woods Key | `/a-jail-quest/woods-key/` | Quest item |
| 🗝 Black Key | Items page | Area unlock |
| 💎 Blue Key | Items page | Area unlock |
| 💎 Silver Key | Items page | Area unlock |

---

## Areas Not Yet Explored

15+ areas from the items database — not yet visited:

- Dragonfire Watch / Dragon Echo Cave / Dragon's Peak
- Devil's Mouth
- Grimstone Tower / Howling Woodlands
- Midnight Inn
- Witches Woods / Azure Acolyte's House / Escape Room
- Eastfall Farms / Arcane Observatory / Crystal Cove / Grimclaw Cave
- Avon's Library / Tuskbreaker Dungeon / Orco Kingdom / Red Hood Hideout
- Shiloh Cave / Crypt of the Dead / Wizard's House
- Gorn's House / Lekor's House / Gorn's Dungeon
- Drakhal's Lair / Whispering Crypt
- Turtle Island
- Iron Cliff / Iron Kingdom / Crystal Hollow
- The Skyship
- Old King's Island
- Sorcerer's Shuffle
- The Ancient Dungeon
- Blighted Mind / Cursed Mines
- Worcester

---

## How to Navigate the Agent

```bash
# Random exploration walk
cd ~/sunquest-playbook/agent
python sunquest_agent.py --action explore --depth 50

# Combat sampling
python sunquest_agent.py --action sample_combat --page skull-cave/attack --samples 50

# Find a specific orb
python sunquest_agent.py --action find_orb --orb_number 2
```

---

## Files

```
sunquest-playbook/
├── README.md                    ← This file
├── WALKTHROUGH.md               ← Full use guide & walkthrough
├── agent/
│   ├── SKILL.md                ← Agent skill documentation
│   ├── sunquest_agent.py       ← Main automation agent
│   ├── combat_sampler.js        ← Combat outcome sampler
│   ├── playbook.json           ← Complete game data (JSON)
│   └── world-map/
│       ├── graph.md            ← URL graph edges
│       └── complete-world-map.md ← Full world tree
```

---

## What We Still Don't Know

- ⏳ Orb locations #2 and #3
- ⏳ P(win) for any combat encounter
- ⏳ The complete Crypt endgame path
- ⏳ Demon Kobal fight mechanics
- ⏳ 15+ unexplored world areas
- ⏳ Full quest chain rewards

---

*Auto-generated by Hermes Agent on 2026-06-27. Repo: github.com/tylerdotai/sunquest-playbook*
