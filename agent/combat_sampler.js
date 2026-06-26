#!/usr/bin/env node
/**
 * SunQuest Combat Sampler
 * TDD approach: test before sampling, verify outcome detection, log all edge cases
 *
 * Coverage gates:
 *  - PASS: outcome is determinable (win or death URL)
 *  - FAIL: ambiguous outcome (unknown URL, redirect loop, JS interrupt)
 *  - EDGE: boundary conditions (back navigation, map redirects, shop pages)
 */

const BASE_URL = 'https://playsunquest.com';

const COMBAT_PAGES = [
  {
    name: 'skull-dungeon-714-2',
    url: `${BASE_URL}/skull-dungeon/714-2/`,
    link_id: 'link-0',
    description: 'Floor 1 combat — skeleton enemies',
    iterations: 10,
    expected_outcomes: ['victory', 'death'],
    edge_cases: ['map_redirect', 'hub_return', 'loop_detect']
  },
  {
    name: 'skull-dungeon-2',
    url: `${BASE_URL}/skull-dungeon/skull-dungeon-2/`,
    link_id: 'link-0',
    description: 'Floor 2 combat — unknown enemies',
    iterations: 10,
    expected_outcomes: ['victory', 'death'],
    edge_cases: ['map_redirect', 'hub_return', 'loop_detect']
  },
  {
    name: 'the-crypt',
    url: `${BASE_URL}/the-crypt/`,
    link_id: 'link-0',
    description: 'The Crypt combat',
    iterations: 10,
    expected_outcomes: ['victory', 'death'],
    edge_cases: ['map_redirect', 'hub_return', 'loop_detect']
  },
  {
    name: 'skull-dungeon-729-2',
    url: `${BASE_URL}/skull-dungeon/729-2/`,
    link_id: 'link-0',
    description: 'Deep floor combat',
    iterations: 10,
    expected_outcomes: ['victory', 'death'],
    edge_cases: ['map_redirect', 'hub_return', 'loop_detect']
  },
  {
    name: 'bounty-quest',
    url: `${BASE_URL}/bounty-quest/`,
    link_id: null, // unknown yet — need to discover
    description: 'Bounty quest combat',
    iterations: 5,
    expected_outcomes: ['victory', 'death', 'quest_complete'],
    edge_cases: ['death_redirect', 'quest_give', 'repeat_visit']
  },
  {
    name: 'jail-quest-orc',
    url: `${BASE_URL}/a-jail-quest/the-orc/`,
    link_id: null,
    description: 'Jail quest — The Orc',
    iterations: 5,
    expected_outcomes: ['victory', 'death', 'quest_complete'],
    edge_cases: ['death_redirect', 'quest_give', 'repeat_visit']
  }
];

// Outcome detection patterns
const OUTCOME_PATTERNS = {
  victory: [/victory/i, /won/i, /loot/i, /gold/i, /treasure/i, /escaped/i, /defeated/i],
  death: [/death/i, /died/i, /game.?over/i, /you.?lose/i, /defeated/i],
  quest_complete: [/quest.?complete/i, /reward/i, /bounty/i, /collected/i],
  redirect: [/s-map/i, /starting-location/i],
  shop: [/tavern/i, /shop/i, /buy/i, /sell/i],
  hub: [/hub/i, /crossroads/i, /tavern/i]
};

/**
 * Classify a URL/path into an outcome category
 */
function classifyOutcome(url) {
  const path = url.replace(BASE_URL, '') || '/';
  const lower = path.toLowerCase();

  for (const [category, patterns] of Object.entries(OUTCOME_PATTERNS)) {
    if (patterns.some(p => p.test(lower))) {
      return category;
    }
  }

  // Fallback: if URL contains a number pattern like /714-2/ or /729-2/ it's probably a dungeon room
  if (/\/\d+-2\//.test(path)) return 'combat_room';
  if (path === '/' || path === '/starting-location/') return 'respawn';

  return 'unknown';
}

/**
 * Detect edge case from URL sequence
 */
function detectEdgeCase(urls, expected_outcomes) {
  const last = urls[urls.length - 1];

  if (urls.length !== new Set(urls).size) return 'loop_detect';
  if (last.includes('/s-map/')) return 'map_redirect';
  if (last.includes('/starting-location/') && !last.includes('/s-map/')) return 'respawn_return';
  if (last.includes('tavern') || last.includes('shop')) return 'shop_page';
  if (last.includes('victory')) return 'victory_page';
  if (last.includes('death')) return 'death_page';

  return null;
}

// Export for use by the agent loop
global.SunQuestCombatSampler = {
  COMBAT_PAGES,
  classifyOutcome,
  detectEdgeCase,
  OUTCOME_PATTERNS
};

module.exports = { COMBAT_PAGES, classifyOutcome, detectEdgeCase, OUTCOME_PATTERNS };
