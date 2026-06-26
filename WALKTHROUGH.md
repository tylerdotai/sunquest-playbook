# SunQuest Use Guide & Walkthrough

**Beat the game: Collect 3 Orbs of Umbra → Summon & defeat Demon Kobal.**

---

## Quick Start

1. Go to https://playsunquest.com/
2. Click **MAP** → start at `/starting-location/s-map/`
3. Explore! The game is pure narrative — click links, read text, enjoy

---

## The Endgame Objective

> *"If the 3 orbs are combined you will summon the demon Kobal. Be careful."*
> — Hooded Figure, /cave-7-found/

**To win the game:**
1. Find **3 Orbs of Umbra**
2. Return to `/cave-7-portal-choice/`
3. Combine them → summon **Demon Kobal**
4. Defeat Kobal → **Victory**

---

## Orb Locations

| Orb # | Location | Status |
|-------|----------|--------|
| 1 | `/cave-7-found/` | ✅ CONFIRMED |
| 2 | UNKNOWN | 🔍 TODO |
| 3 | UNKNOWN | 🔍 TODO |

### How to Find Orb #1

```
starting-location/s-map/
  → skull-dungeon/714-2/
    → cave-upper-well-choice/
      → cave-upper/
        → cave-7-found/  ← ORB OF THE SUN (1st orb)
```

At `/cave-7-found/` — a hooded figure gives you the **Orb of Umbra** and warns you about combining all 3.

### Where to Find Orbs #2 & #3

**Likely locations** (not yet confirmed — based on game architecture):

- **/the-crypt/** — Crypt is the hardest dungeon in the game, likely houses an orb
- **Dragon areas** — Dragonfire Watch, Dragon's Peak, Drakhal's Lair (dragon themes often gate final items)
- **/bounty-quest/bounty-quest-avenr-the-sea-ghost/** — Sea Ghost boss may guard an orb
- **/troll-dungeon/** — Tuskbreaker Dungeon may have orb reward

---

## Key Item Locations

| Item | Location | Purpose |
|------|----------|---------|
| **Crypt Key** | `/the-crypt/crypt-relic/` | Unlocks crypt side rooms |
| **Relic of the Afterlife** | `/the-crypt/crypt-relic/` | Opens crypt forward path |
| **Sword of the Sun** | `/skull-cave/pick-up-sword/` | Combat upgrade |

---

## Dungeon Guide

### Skull Dungeon (Main Dungeon)

**Entry:** `/skull-dungeon/714-2/`

```
714-2 (entry floor — 4 links)
  ├── skull-dungeon-2 → LOOP BACK to 714-2 (safe zone)
  ├── cave-upper-well-choice/ ← CAVE SYSTEM
  │   ├── down-well/         ← Dark well (key, chest, wood, cube)
  │   ├── cave-upper-skull-eye/ ← Skull monster combat
  │   │   └── cave-upper-skull-eye-2/
  │   │       └── skull-cave/ ← Skull combat arena
  │   │           ├── attack/   ← COMBAT
  │   │           ├── pick-up-sword/ ← SWORD
  │   │           ├── swing-victory/
  │   │           └── swing-defeat/
  │   ├── cave-upper-well-no/
  │   └── cave-upper/
  │       ├── cave-7-found/  ← ⚔ ORB #1
  │       └── cave-7-portal-choice/ ← COMBINE ORBS HERE
  └── skull-dungeon-2/ ← LOOP (safe zone)
```

**Hub floor:** `/skull-dungeon/719-2/` → links to The Crypt, Oak Tavern, 729-2

### The Crypt (Endgame Dungeon)

**Requires:** Crypt Key + Relic of the Afterlife (both found in the crypt itself)

```
719-2 (forest)
  → the-crypt/
    ├── left-door/   ← Dead end
    ├── right-door/ ← Dead end
    └── enter/     ← Main entrance (4 options)
        ├── enter-axe/     ← Requires CRYPT KEY
        ├── enter-coffin/  ← ???
        ├── enter-main/    ← Requires RELIC
        └── enter-l1/      ← Requires RELIC
            ├── enter-l9-mummy-relic/ ← Mummy fight
            └── crypt-l-book/
                ├── crypt-relic/       ← RELIC & KEY (item room)
                │   └── crypt-relic-place/
                └── crypt-king-room/   ← CRYPT KING boss
                    ├── crypt-king-swing/ ← ATTACK
                    │   ├── crypt-king-victory/
                    │   └── crypt-king-defeat/
                    └── crypt-l-room/
```

**To get Crypt Key + Relic:**
1. From `crypt-l-book/` → go to `crypt-relic/`
2. Collect Relic of the Afterlife + Crypt Key
3. Return and unlock `enter-main/` or `enter-l1/`

---

## Combat System

**How it works:** Navigate to combat page → click action link → server determines win/loss → redirect to victory or defeat page.

**Known combat pages:**

| Location | Enemy | Victory | Defeat |
|----------|-------|---------|--------|
| `/skull-cave/attack/` | Skull Cave Monster | `/skull-cave/swing-victory/` | `/skull-cave/swing-defeat/` |
| `/the-crypt/crypt-king-swing/` | Crypt King | `/crypt-king-victory/` | `/crypt-king-defeat/` |
| `/the-crypt/enter-l9-mummy-relic/` | Mummy | `/crypt-relic-place/` | ? |

**P(win) — NOT YET DETERMINED.** The game is server-stateful — outcomes are server-determined and cannot be predicted from client-side state.

---

## Quest Chains

### Bounty Quest (Start at `/bounty-quest/`)

```
bounty-quest/
  ├── bounty-quest/avenr/ ← Avenr NPC
  │   ├── bounty-quest-avenr-ladder/ ← Blocked — "no one allowed up"
  │   └── bounty-quest-avenr-the-sea-ghost/ ← SEA GHOST boss
  ├── troll-dungeon/ ← Tuskbreaker Dungeon
  └── bhc/ ← Library (Book of Death lore)
```

### Jail Quest (Start at `/a-jail-quest/the-orc/`)

```
the-orc/ (jail)
  └── the-orc-stole-key/
      ├── dwarfhouse/
      ├── woods-key/
      ├── witch pond/
      └── the-forge/
```

### Potion Quest (Start at `/findpotion/`)

```
findpotion/
  ├── potionfound/
  └── findpotion-t/
```

---

## World Areas (24 total — 9 mapped, 15 unexplored)

| Area | Status | Notes |
|------|--------|-------|
| Skull Dungeon | ✅ Mapped | Main dungeon |
| The Crypt | ✅ Mapped | Item-gated endgame |
| Emberwind Crossroads | ✅ Mapped | Quest hub |
| Bounty Quest | ✅ Mapped | Sub-quests |
| Jail Quest | ✅ Mapped | Escape chain |
| Cave Upper System | ✅ Mapped | Orb location |
| Troll Dungeon | 🔍 Seen | Unexplored |
| BHC Library | 🔍 Seen | Unexplored |
| The Oak Tavern | ✅ Mapped | Safe zone |
| Dragonfire Watch | ❌ Unknown | Likely endgame |
| Devil's Mouth | ❌ Unknown | — |
| Grimstone Tower | ❌ Unknown | — |
| Midnight Inn | ❌ Unknown | — |
| Witches Woods | ❌ Unknown | — |
| Eastfall Farms | ❌ Unknown | — |
| Avon's Library | ❌ Unknown | — |
| Shiloh Cave | ❌ Unknown | — |
| Gorn's House | ❌ Unknown | — |
| Drakhal's Lair | ❌ Unknown | — |
| Turtle Island | ❌ Unknown | — |
| Iron Cliff | ❌ Unknown | — |
| The Skyship | ❌ Unknown | — |
| Old King's Island | ❌ Unknown | — |
| Worcester | ❌ Unknown | — |

---

## Automation

The agent (`agent/sunquest_agent.py`) can:
- Navigate any URL
- Extract all links from any page
- Click action links and record outcomes
- Run random exploration walks
- Sample combat outcomes

**To run:**
```bash
cd ~/sunquest-playbook/agent
python sunquest_agent.py --action explore --depth 20
python sunquest_agent.py --action sample_combat --page skull-cave/attack --samples 50
python sunquest_agent.py --action find_orb --orb_number 2
```

**Note:** The game is server-stateful — health, gold, inventory, and combat outcomes are tracked server-side. No client-side state exists to read.

---

## What We Still Don't Know

1. ⏳ Orb locations #2 and #3 — not yet found
2. ⏳ P(win) for any combat page — not yet sampled
3. ⏳ The full Crypt progression (what's behind enter-coffin?)
4. ⏳ Demon Kobal fight mechanics
5. ⏳ The complete ending/victory sequence
6. ⏳ Dragon areas contents (likely orb #2 or #3)
7. ⏳ The Witch, Forge, Dwarf quest rewards
8. ⏳ 15+ unexplored areas from the items page

## 🌑 The Shadow Lands (Endgame) — PATREON PASSWORD REQUIRED

**⚠️ IMPORTANT:** The Shadow Lands is locked behind a Patreon paywall. To enter, you need **"Voidcaster's Code"** from the game's Patreon page: **patreon.com/sungym**

If you have the password, enter it at: `/shadow-lands-left/shadow-lands-left-choice-get-in/` → text box → UNLOCK

### Entry Path (Free Game → Patreon Locked Zone)
1. **Get Orb #1:** `/cave-7-found/` (cave adventurer gives it, warns all 3 needed)
2. **Reach Cave Portal:** Navigate to `/skull-dungeon/714-2/` → path to cave-7 area
3. **Use Cave Portal:** Go to `/cave-portal-do/` → requires Lantern item from `/inventory/lantern-of-the-dead/`
4. **Enter Shadow Lands:** `/cave-portal-do-lantern/` → `/secret-shadow-lands-q/` → enter Patreon password
5. **Reach Portal:** `/shadow-lands-left/` → `/portal-choice/` → `/portal/`

### Orb Combine Portal Path
1. At `/portal-choice/` → go through portal → `/portal/`
2. Click through to `/elaras-room/`
3. **Elara** is here (a knight). She asks: "Defeated Token or Victory Token?"
4. You need Kobal's **Defeated Token** — obtained from the Kobal fight chain

### Kobal Fight Path
1. `/shadow-lands-left/` → `meet-knight/` → `mk-activate/`
2. Fight rounds: `mk-first-attack/` → `mk-horn-2-attack/` → `mk-horn-2/`
3. Win → get **Defeated Token**
4. Return to `/elaras-room/` → select "Defeated Token"
5. **Elara combines your 3 Orbs** → DEMON KOBAL appears
6. Defeat Kobal → 🎉 **YOU WIN!**

### Without Password (Free Gameplay Ends Here)
The base game ends at collecting Orb #1. The Shadow Lands, Orbs #2 & #3, and the Demon Kobal fight are in the Patreon Expansion Pack.

### Step 1: Get the Demon Key
1. Start at `/devils-key/` → `/devils-key-2/`
2. You may need potions from `/findpotion/` chain to unlock
3. Obtain the **Demon Key** (blue skull-key from items image)

### Step 2: Enter The Shadow Lands
1. Use the Demon Key at `/shadow-lands/` (connected to Drakenhold)
2. Find **Orb of Umbra #2** and **Orb of Umbra #3**

### Step 3: Combine Orbs & Defeat Demon Kobal
1. Once you have all 3 Orbs of Umbra, go to the **Orb Combine Portal**
2. Combine the orbs → **Demon Kobal** appears
3. Defeat Demon Kobal → **WIN THE GAME**

## 🎯 Win Condition Summary
```
Orb #1: /cave-7-found/ (cave adventurer)
    ↓
Orb #2: The Shadow Lands (needs Demon Key)
    ↓
Orb #3: The Shadow Lands (needs Demon Key)
    ↓
Combine at Orb Combine Portal
    ↓
Fight & Defeat DEMON KOBAL
    ↓
🎉 YOU WIN! 🎉
```

---
*Walkthrough last updated: 2026-06-27 | v1.2*