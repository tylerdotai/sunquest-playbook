# SunQuest World Map — Complete

> Auto-crawled from playsunquest.com. Last updated: 2026-06-27

## World Structure

```
SunQuest Root: https://playsunquest.com/
└── starting-location/s-map/          ← Fast Travel Hub (20 links)
    ├── emberwind-crossroads/         ← Central hub
    │   ├── bounty-quest/             ← Quest hub (Bounty Board)
    │   │   ├── bounty-quest-avenr-ladder/
    │   │   ├── bounty-quest-avenr-the-sea-ghost/
    │   │   └── bounty-quest/avenr/   ← Avenr NPC
    │   ├── jail-quest/               ← Jail escape quest chain
    │   │   ├── woods/                ← Leads to forge/witch pond
    │   │   └── the-orc-stole-key/   ← Leads to dwarfhouse
    │   ├── findpotion/               ← Potion quest
    │   │   ├── findpotion-t/
    │   │   └── potionfound/
    │   ├── lampa/                    ← ???
    │   ├── the-tavern/               ← NPC tavern
    │   └── findlight/                ← ???
    │
    ├── skull-dungeon/                ← MAIN DUNGEON
    │   ├── 714-2/                    ← Entry (loop hub)
    │   │   ├── skull-dungeon-2/      ← Safe zone (welcome back)
    │   │   │   └── [LOOP back to 714-2]
    │   │   ├── cave-upper-well-choice/
    │   │   │   ├── down-well/       ← Down Well sub-area
    │   │   │   │   ├── down-well-wood/
    │   │   │   │   ├── down-well-key/
    │   │   │   │   ├── down-well-cube-choice/
    │   │   │   │   └── down-chest-choice/
    │   │   │   ├── cave-upper-well-no/
    │   │   │   ├── cave-upper-skull-eye/
    │   │   │   │   └── cave-upper-skull-eye-2/
    │   │   │   │       └── skull-cave/
    │   │   │   │           ├── skull-cave-1/
    │   │   │   │           ├── attack/        ← COMBAT (Victory/Defeat)
    │   │   │   │           ├── pick-up-sword/  ← SWORD ACQUIRED
    │   │   │   │           ├── swing-victory/  ← COMBAT WIN
    │   │   │   │           └── swing-defeat/  ← COMBAT LOSE
    │   │   │   └── cave-upper/
    │   │   │       ├── cave-7-found/   ← ⚔ ORB OF THE SUN (1st)
    │   │   │       └── cave-7-portal-choice/
    │   │   │           ├── skull-dungeon/714-2/   ← LOOP BACK
    │   │   │           └── cave-7-found/
    │   │   └── skull-dungeon-2/       ← Safe zone (loops to 714-2)
    │   │
    │   ├── 719-2/                    ← Forest Hub
    │   │   ├── the-crypt/            ← CRYPT ENTRANCE
    │   │   │   ├── left-door/        ← Dead end
    │   │   │   ├── right-door/       ← Dead end
    │   │   │   ├── enter/            ← Main crypt entrance
    │   │   │   │   ├── enter-axe/       ← Requires CRYPT KEY
    │   │   │   │   ├── enter-coffin/    ← ???
    │   │   │   │   ├── enter-main/      ← Requires RELIC OF THE AFTERLIFE
    │   │   │   │   └── enter-l1/        ← Requires RELIC OF THE AFTERLIFE
    │   │   │   │       ├── enter-l9-mummy-relic/ ← MUMMY FIGHT
    │   │   │   │       └── crypt-l-book/        ← Relic path
    │   │   │   │           ├── crypt-relic/      ← RELIC OF THE AFTERLIFE (drop)
    │   │   │   │           │   └── crypt-relic-place/ ← Place the relic
    │   │   │   │           └── crypt-king-room/  ← CRYPT KING FIGHT
    │   │   │   │               ├── crypt-king-swing/ ← ATTACK (victory/defeat)
    │   │   │   │               ├── crypt-king-victory/
    │   │   │   │               └── crypt-king-defeat/
    │   │   │   │               └── crypt-l-room/     ← Returns here
    │   │   │   │
    │   │   │   └── crypt-l-room/   ← Crypt interior hub
    │   │   │
    │   │   ├── oak-tavern/         ← Safe zone / NPC hub
    │   │   ├── part-3-gp/           ← Tomb (Golden Phoenix)
    │   │   │   ├── skull-dungeon/729-2/ ← ???
    │   │   │   ├── the-crypt/       ← CRYPT LINK
    │   │   │   └── [other links]
    │   │   └── skull-dungeon/oak-tavern/
    │   │
    │   ├── skull-dungeon-2/        ← Safe zone (loops to 714-2)
    │   ├── skull-dungeon-sword/     ← ???
    │   ├── skull-dungeon-need/      ← ???
    │   └── dk-remove/               ← ???
    │       └── dk-remove-k/
    │
    ├── the-tavern/                 ← Tavern
    ├── lampa/                      ← ???
    ├── findlight/                  ← ???
    └── [other hub links]           ← See world-map/graph.md

```

## Combat Pages Discovered

| URL | Victory Page | Defeat Page | Enemy |
|-----|-------------|-------------|-------|
| `/skull-cave/attack/` | `skull-cave/swing-victory/` | `skull-cave/swing-defeat/` | Skull Cave Monster |
| `/the-crypt/crypt-king-swing/` | `crypt-king-victory/` | `crypt-king-defeat/` | Crypt King |
| `/cave-upper-skull-eye-2/` | (linked to skull-cave combat) | | Skull Eye Monster |

## Items Found

### Skull Dungeon
- ⚔ Orb of the Sun (RARE) ← cave-7-found/
- ⚔ Sword of the Sun
- ⚔ Gold Skull Key
- ⚔ Helmet of the Sun
- ⚔ Dark Sun Shield
- ⚔ Skull of the Sun
- ⚔ Sun Crystal
- ⚔ Sun Orb
- ⚔ Crown of the Sun
- ⚔ Sun Key
- ⚔ Sun Staff

### The Oak Tavern / The Crypt
- ⚔ Golden Phoenix Feather
- ⚔ Black Key
- ⚔ Lantern of the Dead
- ⚔ Golden Sun Coin
- ⚔ Black Raven Feather
- ⚔ Black Sun Orb
- ⚔ Ruby of the Ancients
- ⚔ **Crypt Key** ← /the-crypt/crypt-relic/
- ⚔ Ruby Dragon's Heart

### Emberwind Crossroads
- ⚔ Blue Sapphire
- ⚔ Diamond
- ⚔ Cube of Ender
- ⚔ Book of Necromancy
- ⚔ Phoenix Feather
- ⚔ Emerald Sun
- ⚔ Golden Token
- ⚔ Skull of the Dead
- ⚔ Sun Amulet

### Dragonfire Watch / Dragon Echo Cave / Dragon's Peak
- ⚔ Dragonfire Sword
- ⚔ Dragon's Lair
- ⚔ Dragon's Eye
- ⚔ Dragon's Echo
- ⚔ Dragon's Peak
- ⚔ Dragon's Scale
- ⚔ Dragon's Tooth
- ⚔ Dragon's Wing

### Devil's Mouth
- ⚔ Sun Sword
- ⚔ Sun Shield
- ⚔ Sun Staff
- ⚔ Demon's Mask
- ⚔ Fire Orb

### The Lantern of Sludge Crypts / The Sea Ghost
- ⚔ Red Sun Crystal
- ⚔ Sun Key
- ⚔ Emerald of Life
- ⚔ Emerald Eye
- ⚔ Brown Sun Key
- ⚔ Captain's Hat
- ⚔ Pirate's Cutlass
- ⚔ Sun Coin

## Quest Chains Discovered

### 1. Bounty Quest (Emberwind Crossroads)
```
bounty-quest/
  ├── bounty-quest/avenr/       ← Avenr NPC
  │   ├── bounty-quest-avenr-ladder/    ← Blocked (no one allowed up)
  │   └── bounty-quest-avenr-the-sea-ghost/ ← SEA GHOST boss fight
  ├── troll-dungeon/           ← Tuskbreaker Dungeon (new area)
  └── bhc/                     ← Gothic library (BOOK OF DEATH)
```

### 2. Jail Quest (Escape)
```
jail-quest/the-orc/
  ├── jail-quest/the-orc-stole-key/
  │   ├── dwarfhouse/
  │   ├── jail-quest/woods-key/
  │   ├── a-witch-quest/pond/
  │   └── the-forge/
```

### 3. Potion Quest
```
findpotion/
  ├── findpotion/potionfound/
  └── findpotion/findpotion-t/
```

## Key NPCs

| NPC | Location | Notes |
|-----|----------|-------|
| Avenr | bounty-quest/avenr/ | Bounty board quest giver |
| The Orc | jail-quest/the-orc/ | Quest antagonist — stole key |
| — | the-tavern/ | Tavern NPC |
| — | oak-tavern/ | Forest tavern NPC |
| — | dwarfhouse/ | Dwarf NPC (jail quest chain) |
| — | a-witch-quest/pond/ | Witch NPC (jail quest chain) |
| — | the-forge/ | Forge/blacksmith (jail quest chain) |

## Recently Discovered Areas (v1.2)

### 🏰 Drakenhold (New v1.2)
- **Hub:** `/drakenhold/`
- **Sub-pages:** `keep-courtyard/`, `drakenhold-cellar/`, `keep-inside-tavern/`, `keep-inside-tavern-door/`, `keep-inside-tavern-2/`
- **Connects to:** Emberwind Crossroads, The Forge
- **Notes:** Castle town with tavern and courtyard

### ⚔️ The Forge (New v1.2)
- **Hub:** `/the-forge/`
- **Sub-pages:** `forge-blacksmith/`, `the-forge-dig/`, `forge-shadow/`, `forge-shadow-2/`, `forge-shadow-3/`
- **Connects to:** Drakenhold
- **Notes:** Has a blacksmith and shadow dungeon branch

### 🚀 Skyship (New v1.2)
- **Hub:** `/skyship/`
- **Sub-pages:** `skyship-c-room/`, `skyship-map/`, `skyship-return/`, `skyship-lounge-room/`, `skyship-meeting-room/`, `skyship-viewing-room/`
- **Connects to:** Gorak's House, Turtle Island
- **Notes:** Airship transport system

### 🏚️ Gorak's House (New v1.2)
- **Hub:** `/goraks-house/`
- **Sub-pages:** `house/`, `wagon/`, `goraks-dungeon/`, `goraks-dungeon-choice/`, `cart-back/`
- **Connects to:** Skyship, Wizard House
- **Notes:** Entry point to Gorak's Dungeon

### 📚 Library-2 / BHC (New v1.2)
- **Hub:** `/library-2/`, `/bhc/`
- **Sub-pages:** `shadow-orb/`, `bhc-yes/`, `bhc-no/`, `bhc-book/`
- **Connects to:** Bounty Quest
- **Notes:** Second library with shadow orb reference

### 🧙 Wizard House (New v1.2)
- **Hub:** `/wizard-house/`
- **Sub-pages:** `wizard-inside/`
- **Connects to:** Gorak's House
- **Notes:** NPC house accessible from Gorak's wagon

### 🌑 The Shadow Lands (Endgame - LOCKED)
- **Hub:** `/shadow-lands/`
- **Access:** Requires Demon Key from `/devils-key-2/`
- **Contains:** Orb of Umbra #2, Orb of Umbra #3, Demon Kobal final boss
- **Notes:** Win-condition area — collect all 3 orbs here

### 🔑 Demon Key Chain (Endgame Unlock)
- **Chain:** `/devils-key/` → `/devils-key-2/`
- **Purpose:** Unlocks The Shadow Lands
- **Notes:** May require potions from `/findpotion/` chain first

---
*Map last updated: 2026-06-27 | v1.2 | ~60 pages across 18 areas*