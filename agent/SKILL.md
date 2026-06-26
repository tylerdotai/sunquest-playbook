---
name: SunQuest God-Mode Agent
description: Automated SunQuest RPG completion agent — maps the world, samples combat, wins the game.
version: 1.0.0
author: Hermes Agent
---

# SunQuest God-Mode Agent

## Architecture

The agent operates via browser automation against `https://playsunquest.com`.

### Core Principles

1. **Stateless HTML renderer** — SunQuest stores ALL state server-side. The browser receives a new HTML page on every navigation. No localStorage, no sessionStorage, no cookies.
2. **URL = game state** — Each URL is a complete scene. Links (`<a id="link-N">`) are click targets.
3. **Image-map world** — Most world navigation uses `<area>` tags on a background image, not standard anchor tags.
4. **Combat = probabilistic** — Without server-side state access, combat outcomes can only be learned statistically.

## Automation Commands

### Navigate and snapshot
```
browser_navigate(url="https://playsunquest.com/starting-location/")
browser_snapshot()
```

### Get all links on current page
```javascript
Array.from(document.querySelectorAll('a')).map(a => ({
  id: a.id, href: a.href, text: a.textContent.trim().substring(0, 60)
}))
```

### Click a link by element ID
```
browser_click(ref="e1")  // by accessibility tree ref
```

### Click by JavaScript ID (preferred — reliable)
```javascript
document.getElementById('link-5').click()
```

### Get current URL
```javascript
location.href
```

## Storage Inspector

```javascript
(function() {
  const snapshot = (label) => {
    const s = { _meta: { ts: Date.now(), label, url: location.href } };
    s.ls = {}; try { for (let i=0;i<localStorage.length;i++){const k=localStorage.key(i);s.ls[k]=localStorage.getItem(k);} } catch(e){}
    s.ss = {}; try { for (let i=0;i<sessionStorage.length;i++){const k=sessionStorage.key(i);s.ss[k]=sessionStorage.getItem(k);} } catch(e){}
    s.ck = {}; document.cookie.split(';').forEach(c=>{const[k,...v]=c.trim().split('=');if(k)s.ck[k]=v.join('=');});
    return s;
  };
  window._sq_snapshots = [];
  window.snapshotNow = (label) => { const s = snapshot(label); window._sq_snapshots.push(s); console.log('[SQ]', label, '| ls:', Object.keys(s.ls).join(',')||'(empty)', '| ss:', Object.keys(s.ss).join(',')||'(empty)', '| ck:', Object.keys(s.ck).join(',')||'(empty)'); };
  window.snapshotDiff = () => {
    if(window._sq_snapshots.length<2){console.warn('Need 2');return;}
    const[p,c]=[window._sq_snapshots[window._sq_snapshots.length-2],window._sq_snapshots[window._sq_snapshots.length-1]];
    const d={};
    const chk=(n,a,b)=>{const ad=a.filter(k=>!(k in b)),rm=b.filter(k=>!(k in a)),ch=a.filter(k=>b[k]!==a[k]&&!ad.includes(k)&&!rm.includes(k));if(ad.length||rm.length||ch.length)d[n]={added:ad,removed:rm,changed:ch};};
    chk('ls',p.ls,c.ls); chk('ss',p.ss,c.ss); chk('ck',p.ck,c.ck);
    console.log('[SQ] Delta:', JSON.stringify(d));
  };
  snapshotNow('page_load');
})();
```

## Known Link ID Patterns

- `link-0` through `link-N` — gameplay links on most pages
- Empty `id=""` — decorative/system links (S-Map nav, logo, etc.)
- Image maps use `area` tags, not `a` tags — query with `document.querySelectorAll('area')`

## World Map Links (from /starting-location/s-map/)

| link-N | href | location |
|--------|------|----------|
| link-0 | javascript:history.back() | Back |
| link-1 | /skull-dungeon/719-2/ | Skull Dungeon Hub |
| link-2 | /lancaster/ | Lancaster |
| link-3 | /findpotion/ | Find Potion |
| link-4 | /stonemyst-village/ | Stonemyst Village |
| link-5 | /a-jail-quest/the-orc/ | The Orc (jail) |
| link-6 | /eastfall-farms/ | Eastfall Farms |
| link-7 | /thornwood/ | Thornwood |
| link-8 | /wc/wc-ironcliff/ | Ironcliff |
| link-9 | /wizard-house/ | Wizard's House |
| link-10 | /midnight-inn/ | Midnight Inn |
| link-11 | /bounty-quest/ | Bounty Quest |
| link-12 | /stonewind/ | Stonewind |
| link-13 | /woods/ | Woods |
| link-14 | /emberwind-crossroads/ | Emberwind Crossroads |
| link-15 | /training-isle/ | Training Isle |
| link-16 | /wc/wc-drathal-path-ride-boat/ | Drathal Path |
| link-17 | /lancaster-2/boat-crow-castle/ | Crow Castle |
| link-18 | /lancaster-2/ride-boat-draken-hold/ | Draken Hold |
| link-19 | /skull-dungeon/ | Skull Dungeon entrance |

## Dungeon Sub-Area Links (from /skull-dungeon/719-2/)

| link-N | href | location |
|--------|------|----------|
| link-0 | /skull-dungeon/729-2/ | Deep Floor (729-2) |
| link-1 | /skull-dungeon/skull-dungeon-2/ | Dungeon Floor 2 |
| link-2 | /emberwind-crossroads/ | Emberwind Crossroads |
| link-3 | /skull-dungeon/oak-tavern/ | Oak Tavern |
| link-4 | /skull-dungeon/part-3-gp/ | Part 3 GP |
| link-5 | /the-crypt/ | The Crypt ⚔️ |
| link-6 | /the-tavern/ | The Tavern |

## Critical Findings

- `/skull-dungeon/` (root) bounces back to `/starting-location/s-map/` — it is a redirector, not a real page
- `/skull-dungeon/714-2/` — floor 1 combat, skeleton enemies, ~50% P(death)
- `/skull-dungeon/719-2/` — the actual dungeon hub with sub-area access
- Direct navigation bypasses the map redirect
