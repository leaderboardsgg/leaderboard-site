import {
  alttp,
  dkc,
  octodad,
  oot,
  shrek2,
  smw,
  superMario64,
  superMetroid,
} from './leaderboards'

const generateCategory = (opts = {}) => ({
  name: 'Any%',
  slug: 'any',
  info: 'Complete the game as fast as possible using any means necessary.',
  type: 'Time',
  sortDirection: 'desc',
  createdAt: '2024-11-02T22:11:08+0000',
  updatedAt: '2024-11-02T22:11:08+0000',
  deletedAt: null,
  status: 'Published',
  ...opts,
})

const smwCategories = [
  generateCategory({
    id: 1,
    leaderboardId: smw.id,
    name: '96 Exit',
    slug: '96-exit',
    info: 'Complete all 96 exits in Super Mario World.',
  }),
  generateCategory({
    id: 2,
    leaderboardId: smw.id,
    name: 'All Castles',
    slug: 'all-castles',
    info: 'Complete all 7 castles in Super Mario World.',
  }),
  generateCategory({
    id: 3,
    leaderboardId: smw.id,
    name: '0 Exit',
    slug: '0-exit',
    info: 'Complete the game without collecting any exits in Super Mario World.',
  }),
]

const superMetroidCategories = [
  generateCategory({ id: 4, leaderboardId: superMetroid.id }),
  generateCategory({
    id: 5,
    leaderboardId: superMetroid.id,
    name: '100%',
    slug: '100',
    info: 'Complete the game while collecting all items and upgrades.',
  }),
]

const alttpCategories = [
  generateCategory({
    id: 6,
    leaderboardId: alttp.id,
    name: 'Any% - No Major Glitches',
    slug: 'any-no-major-glitches',
    info: 'Complete the game as fast as possible without using major glitches.',
  }),
  generateCategory({
    id: 7,
    leaderboardId: alttp.id,
    name: '100% - No Major Glitches',
    slug: '100-no-major-glitches',
    info: 'Complete the game while collecting all items and upgrades without using major glitches.',
  }),
  generateCategory({
    id: 8,
    leaderboardId: alttp.id,
    name: 'Master Sword - No Major Glitches',
    slug: 'master-sword-no-major-glitches',
    info: 'Obtain the Master Sword without using major glitches.',
  }),
  generateCategory({
    id: 9,
    leaderboardId: alttp.id,
    name: 'Any% - Major Glitches',
    slug: 'any-major-glitches',
    info: 'Complete the game as fast as possible using everything at your disposal.',
  }),
]

const dkcCategories = [
  generateCategory({ id: 10, leaderboardId: dkc.id }),
  generateCategory({
    id: 11,
    leaderboardId: dkc.id,
    name: '101%',
    slug: '101',
    info: 'Complete the game while collecting all items and upgrades.',
  }),
  generateCategory({
    id: 12,
    leaderboardId: dkc.id,
    name: 'All Levels',
    slug: 'all-levels',
    info: 'Complete all levels in the game.',
  }),
]

const superMario64Categories = [
  generateCategory({
    id: 13,
    leaderboardId: superMario64.id,
    name: '120 Star',
    slug: '120-star',
    info: 'Collect all 120 stars in Super Mario 64.',
  }),
  generateCategory({
    id: 14,
    leaderboardId: superMario64.id,
    name: '70 Star',
    slug: '70-star',
    info: 'Collect at least 70 stars in Super Mario 64.',
  }),
  generateCategory({
    id: 15,
    leaderboardId: superMario64.id,
    name: '16 Star',
    slug: '16-star',
    info: 'Collect just 16 stars in Super Mario 64.',
  }),
  generateCategory({
    id: 16,
    leaderboardId: superMario64.id,
    name: '1 Star',
    slug: '1-star',
    info: 'Collect only 1 star in Super Mario 64.',
  }),
  generateCategory({
    id: 17,
    leaderboardId: superMario64.id,
    name: '0 Star',
    slug: '0-star',
    info: 'Complete the game without collecting any stars in Super Mario 64.',
  }),
]

const ootCategories = [
  generateCategory({ id: 18, leaderboardId: oot.id }),
  generateCategory({
    id: 19,
    leaderboardId: oot.id,
    name: '100%',
    slug: '100',
    info: 'Complete the game while collecting all items and upgrades.',
  }),
  generateCategory({
    id: 20,
    leaderboardId: oot.id,
    name: 'All Dungeons',
    slug: 'all-dungeons',
    info: 'Complete all dungeons in the game.',
  }),
]

const shrek2Categories = [
  generateCategory({ id: 21, leaderboardId: shrek2.id }),
  generateCategory({
    id: 22,
    leaderboardId: shrek2.id,
    name: '100%',
    slug: '100',
    info: 'Complete the game while collecting all items and upgrades.',
  }),
  generateCategory({
    id: 23,
    leaderboardId: shrek2.id,
    name: 'Any% - Co-op',
    slug: 'any-co-op',
    info: 'Complete the game as fast as possible with your friends.',
  }),
  generateCategory({
    id: 24,
    leaderboardId: shrek2.id,
    name: '100% - Co-op',
    slug: '100-co-op',
    info: 'Complete the game while collecting all items and upgrades with your friends.',
  }),
]

const octodadCategories = [
  generateCategory({ id: 25, leaderboardId: octodad.id }),
  generateCategory({
    id: 26,
    leaderboardId: octodad.id,
    name: 'Glitchless',
    slug: 'glitchless',
    info: 'Complete the game without using any glitches.',
  }),
  generateCategory({
    id: 27,
    leaderboardId: octodad.id,
    name: 'All Ties',
    slug: 'all-ties',
    info: 'Complete the game while collecting all ties.',
  }),
  generateCategory({
    id: 28,
    leaderboardId: octodad.id,
    name: 'Casual%',
    slug: 'casual',
    info: 'Complete the game at your leisure.',
  }),
]

const mockCategories = [
  ...smwCategories,
  ...superMetroidCategories,
  ...alttpCategories,
  ...dkcCategories,
  ...superMario64Categories,
  ...ootCategories,
  ...shrek2Categories,
  ...octodadCategories,
]

export default mockCategories
