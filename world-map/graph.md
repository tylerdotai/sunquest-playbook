# SunQuest World Map

## Complete URL Graph

### Root Level (from /starting-location/s-map/)

| ID | href | Canonical Name | Type |
|----|------|----------------|------|
| link-0 | javascript:history.back() | Back | Nav |
| link-1 | /skull-dungeon/719-2/ | Skull Dungeon Hub | Dungeon |
| link-2 | /lancaster/ | Lancaster | Town |
| link-3 | /findpotion/ | Find Potion | Item |
| link-4 | /stonemyst-village/ | Stonemyst Village | Location |
| link-5 | /a-jail-quest/the-orc/ | The Orc (Jail Quest) | Quest |
| link-6 | /eastfall-farms/ | Eastfall Farms | Location |
| link-7 | /thornwood/ | Thornwood | Location |
| link-8 | /wc/wc-ironcliff/ | Ironcliff | Location |
| link-9 | /wizard-house/ | Wizard's House | Location |
| link-10 | /midnight-inn/ | Midnight Inn | Location |
| link-11 | /bounty-quest/ | Bounty Quest | Quest |
| link-12 | /stonewind/ | Stonewind | Location |
| link-13 | /woods/ | Woods | Location |
| link-14 | /emberwind-crossroads/ | Emberwind Crossroads | Hub |
| link-15 | /training-isle/ | Training Isle | Location |
| link-16 | /wc/wc-drathal-path-ride-boat/ | Drathal Path | Travel |
| link-17 | /lancaster-2/boat-crow-castle/ | Crow Castle | Location |
| link-18 | /lancaster-2/ride-boat-draken-hold/ | Draken Hold | Location |
| link-19 | /skull-dungeon/ | Skull Dungeon Entrance | Dungeon |

### Skull Dungeon Area

#### /skull-dungeon/ (root)
- **Behavior:** Redirects to `/starting-location/s-map/`
- **Purpose:** Route guard — forces player to use map

#### /skull-dungeon/714-2/
- **Name:** Floor 1
- **Type:** Combat
- **Enemy:** Skeleton (inferred from narrative)
- **P(Death):** ~50% (needs more samples)
- **Links:** Return to hub or continue deeper

#### /skull-dungeon/719-2/
- **Name:** Forest Hub
- **Type:** Navigation hub
- **Sub-areas:** 729-2, skull-dungeon-2, The Crypt, Oak Tavern, Emberwind

#### /skull-dungeon/729-2/
- **Name:** Deep Floor
- **Type:** Unknown (untested)
- **From:** 719-2 hub

#### /skull-dungeon/skull-dungeon-2/
- **Name:** Dungeon Floor 2
- **Type:** Combat (unknown enemy)
- **From:** 719-2 hub

#### /skull-dungeon/oak-tavern/
- **Name:** Oak Tavern
- **Type:** Shop / Rest
- **From:** 719-2 hub

#### /skull-dungeon/part-3-gp/
- **Name:** Part 3 GP
- **Type:** Unknown
- **From:** 719-2 hub

### The Crypt (/the-crypt/)
- **Name:** The Crypt
- **Type:** Combat
- **From:** /skull-dungeon/719-2/ (link-5)
- **Enemy:** Unknown
- **P(Death):** Untested

### Emberwind Crossroads (/emberwind-crossroads/)
- **Name:** Emberwind Crossroads
- **Type:** Hub
- **From:** S-Map, Skull Dungeon hub

### Other Notable Locations

#### /the-tavern/
- **Type:** Tavern
- **From:** /skull-dungeon/719-2/ (link-6)

#### /findpotion/
- **Type:** Item acquisition
- **Potion effect:** Unknown

#### /bounty-quest/
- **Type:** Structured quest
- **Status:** Untested

#### /training-isle/
- **Type:** Training / tutorial
- **Status:** Untested

#### /wizard-house/
- **Type:** Location
- **Status:** Untested

---

## Graph Connectivity

```
START
  └── /starting-location/s-map/  (fast travel map — 20 locations)
        ├── /skull-dungeon/719-2/  (dungeon hub)
        │     ├── /skull-dungeon/714-2/  (floor 1 ⚔️)
        │     ├── /skull-dungeon/729-2/  (deep floor)
        │     ├── /skull-dungeon/skull-dungeon-2/  (floor 2 ⚔️)
        │     ├── /skull-dungeon/oak-tavern/  (shop)
        │     ├── /skull-dungeon/part-3-gp/  (???)
        │     ├── /the-crypt/  (⚔️)
        │     ├── /the-tavern/  (tavern)
        │     └── /emberwind-crossroads/  (hub)
        ├── /emberwind-crossroads/  (major hub)
        │     └── ? (more sub-links)
        ├── /lancaster/  (town)
        ├── /the-tavern/  (alternate tavern)
        ├── /findpotion/  (item)
        ├── /bounty-quest/  (quest)
        ├── /training-isle/  (training)
        ├── /wizard-house/  (mystery)
        ├── /midnight-inn/  (mystery)
        ├── /thornwood/  (mystery)
        ├── /stonewind/  (mystery)
        ├── /woods/  (mystery)
        ├── /stonemyst-village/  (mystery)
        ├── /eastfall-farms/  (mystery)
        ├── /a-jail-quest/the-orc/  (jail quest)
        ├── /wc/wc-ironcliff/  (ironcliff)
        ├── /wc/wc-drathal-path-ride-boat/  (boat/travel)
        ├── /lancaster-2/boat-crow-castle/  (crow castle)
        └── /lancaster-2/ride-boat-draken-hold/  (draken hold)
```

---

## Untested / Unknown Pages

The following major locations are **completely untested** — no agent has visited yet:

- `/lancaster/` — Town
- `/the-tavern/` — Tavern
- `/bounty-quest/` — Quest
- `/training-isle/` — Training
- `/wizard-house/` — Wizard location
- `/midnight-inn/` — Inn
- `/thornwood/` — Woods area
- `/stonewind/` — City
- `/woods/` — Woods
- `/stonemyst-village/` — Village
- `/eastfall-farms/` — Farm
- `/a-jail-quest/the-orc/` — Jail quest
- `/wc/wc-ironcliff/` — Ironcliff
- `/wc/wc-drathal-path-ride-boat/` — Boat travel
- `/lancaster-2/boat-crow-castle/` — Castle
- `/lancaster-2/ride-boat-draken-hold/` — Dragon hold
- `/findpotion/` — Item location
- `/skull-dungeon/part-3-gp/` — Unknown
- `/skull-dungeon/729-2/` — Deep floor
