import type {
  CrowdZone, FoodCourt, Match, MapPoint, ParkingLot, SentimentSample, UserProfile, Washroom,
} from './types';

export const user: UserProfile = {
  name: 'Aarav',
  gate: 'B',
  section: '218',
  row: '14',
  seat: '9',
  parkingLot: 'P3',
  parkingBay: '24',
  avatarHue: 26,
};

export const liveMatchId = 'm-bra-arg';

export const matches: Match[] = [
  {
    id: 'm-bra-arg', home: 'Brazil', away: 'Argentina', homeFlag: '🇧🇷', awayFlag: '🇦🇷',
    homeScore: 1, awayScore: 0, minute: "67'", status: 'live',
    kickoff: '20:00', venue: 'MetLife Stadium', group: 'Group F', matchday: 3,
  },
  {
    id: 'm-eng-esp', home: 'England', away: 'Spain', homeFlag: '🏴', awayFlag: '🇪🇸',
    status: 'upcoming', kickoff: 'Tomorrow 19:00', venue: 'MetLife Stadium', group: 'Group D', matchday: 4,
  },
  {
    id: 'm-fra-por', home: 'France', away: 'Portugal', homeFlag: '🇫🇷', awayFlag: '🇵🇹',
    status: 'upcoming', kickoff: 'Jul 21 · 21:00', venue: 'AT&T Stadium', group: 'Group H', matchday: 4,
  },
  {
    id: 'm-usa-mex', home: 'USA', away: 'Mexico', homeFlag: '🇺🇸', awayFlag: '🇲🇽',
    status: 'upcoming', kickoff: 'Jul 22 · 18:00', venue: 'SoFi Stadium', group: 'Group A', matchday: 4,
  },
  {
    id: 'm-ger-ned', home: 'Germany', away: 'Netherlands', homeFlag: '🇩🇪', awayFlag: '🇳🇱',
    homeScore: 2, awayScore: 1, status: 'finished', kickoff: 'Yesterday 20:00', venue: 'Rose Bowl', group: 'Group E', matchday: 3,
  },
  {
    id: 'm-jpn-kor', home: 'Japan', away: 'South Korea', homeFlag: '🇯🇵', awayFlag: '🇰🇷',
    status: 'upcoming', kickoff: 'Jul 23 · 16:00', venue: 'Mercedes-Benz Stadium', group: 'Group G', matchday: 4,
  },
];

export const mapPoints: MapPoint[] = [
  { id: 'you', type: 'seat', name: 'You · Sec 218', x: 50, y: 52, level: 1, meta: 'Row 14 · Seat 9' },
  { id: 'gate-a', type: 'exit', name: 'Gate A', x: 18, y: 30, level: 1 },
  { id: 'gate-b', type: 'exit', name: 'Gate B', x: 82, y: 30, level: 1 },
  { id: 'gate-c', type: 'exit', name: 'Gate C', x: 18, y: 74, level: 1 },
  { id: 'gate-d', type: 'exit', name: 'Gate D', x: 82, y: 74, level: 1 },
  { id: 'food-1', type: 'food', name: 'Goal Bites', x: 60, y: 40, level: 1, meta: 'Hot dogs · Nachos' },
  { id: 'food-2', type: 'food', name: 'Taco Stand', x: 30, y: 38, level: 1, meta: 'Mexican' },
  { id: 'food-3', type: 'food', name: 'Pizza Corner', x: 70, y: 62, level: 1, meta: 'Pizza' },
  { id: 'food-4', type: 'food', name: 'Biryani Bowl', x: 38, y: 64, level: 1, meta: 'Indian' },
  { id: 'wr-1', type: 'washroom', name: 'Washroom E1', x: 56, y: 46, level: 1 },
  { id: 'wr-2', type: 'washroom', name: 'Washroom W1', x: 44, y: 46, level: 1 },
  { id: 'wr-3', type: 'washroom', name: 'Washroom N1', x: 50, y: 30, level: 1 },
  { id: 'wr-4', type: 'washroom', name: 'Washroom S1', x: 50, y: 70, level: 1 },
  { id: 'aid-1', type: 'firstAid', name: 'First Aid · East', x: 64, y: 50, level: 1 },
  { id: 'aid-2', type: 'firstAid', name: 'First Aid · West', x: 36, y: 50, level: 1 },
  { id: 'shop-1', type: 'shop', name: 'Fan Store', x: 50, y: 38, level: 1, meta: 'Merchandise' },
  { id: 'shop-2', type: 'shop', name: 'Souvenir Kiosk', x: 62, y: 36, level: 1 },
  { id: 'vip-1', type: 'vip', name: 'VIP Lounge', x: 50, y: 20, level: 2, meta: 'Level 2' },
  { id: 'park-1', type: 'parking', name: 'Lot P3 · Bay 24', x: 92, y: 50, level: 0, meta: 'Your car' },
  { id: 'info-1', type: 'info', name: 'Info Desk', x: 50, y: 78, level: 1 },
];

export const foodCourts: FoodCourt[] = [
  {
    id: 'fc-1', name: 'Goal Bites', cuisine: 'American · Fast Food', level: 1, concourse: 'East',
    distance: 60, wait: 4, rating: 4.6, open: true, closesIn: '2h 30m', veg: true, vegan: false, priceLevel: 2,
    menu: [
      { name: 'Classic Hot Dog', price: '$7', veg: false, popular: true },
      { name: 'Loaded Nachos', price: '$9', veg: true, popular: true },
      { name: 'Cold Brew Soda', price: '$4', veg: true },
      { name: 'Vegan Burger', price: '$11', veg: true, vegan: true },
    ],
  },
  {
    id: 'fc-2', name: 'Taco Stand', cuisine: 'Mexican', level: 1, concourse: 'West',
    distance: 95, wait: 7, rating: 4.4, open: true, closesIn: '3h', veg: true, vegan: true, priceLevel: 1,
    menu: [
      { name: 'Chicken Taco', price: '$6', veg: false, popular: true },
      { name: 'Veggie Burrito', price: '$8', veg: true },
      { name: 'Guac & Chips', price: '$7', veg: true, vegan: true, popular: true },
      { name: 'Quesadilla', price: '$9', veg: true },
    ],
  },
  {
    id: 'fc-3', name: 'Pizza Corner', cuisine: 'Italian', level: 1, concourse: 'South',
    distance: 130, wait: 9, rating: 4.3, open: true, closesIn: '2h', veg: true, vegan: false, priceLevel: 2,
    menu: [
      { name: 'Margherita Slice', price: '$6', veg: true, popular: true },
      { name: 'Pepperoni Slice', price: '$8', veg: false, popular: true },
      { name: 'Garlic Bread', price: '$5', veg: true },
      { name: 'Veggie Supreme', price: '$9', veg: true },
    ],
  },
  {
    id: 'fc-4', name: 'Biryani Bowl', cuisine: 'Indian', level: 1, concourse: 'South',
    distance: 145, wait: 6, rating: 4.8, open: true, closesIn: '1h 45m', veg: true, vegan: true, priceLevel: 2,
    menu: [
      { name: 'Chicken Biryani', price: '$12', veg: false, popular: true },
      { name: 'Veg Biryani', price: '$10', veg: true, popular: true },
      { name: 'Paneer Tikka', price: '$9', veg: true },
      { name: 'Mango Lassi', price: '$5', veg: true },
    ],
  },
  {
    id: 'fc-5', name: 'Pitchside Grill', cuisine: 'Steakhouse', level: 2, concourse: 'East',
    distance: 210, wait: 14, rating: 4.7, open: true, closesIn: '3h', veg: false, vegan: false, priceLevel: 3,
    menu: [
      { name: 'Ribeye Steak', price: '$24', veg: false, popular: true },
      { name: 'Grilled Chicken', price: '$16', veg: false },
      { name: 'Loaded Fries', price: '$8', veg: true },
      { name: 'Craft Lemonade', price: '$6', veg: true },
    ],
  },
];

export const washrooms: Washroom[] = [
  { id: 'w-1', name: 'Washroom E1', level: 1, concourse: 'East', distance: 35, status: 'open', queue: 2, accessible: true, babyCare: true },
  { id: 'w-2', name: 'Washroom W1', level: 1, concourse: 'West', distance: 55, status: 'busy', queue: 6, accessible: true, babyCare: false },
  { id: 'w-3', name: 'Washroom N1', level: 1, concourse: 'North', distance: 80, status: 'open', queue: 3, accessible: true, babyCare: true },
  { id: 'w-4', name: 'Washroom S1', level: 1, concourse: 'South', distance: 110, status: 'cleaning', queue: 0, accessible: false, babyCare: false },
  { id: 'w-5', name: 'Washroom E2', level: 2, concourse: 'East', distance: 160, status: 'open', queue: 1, accessible: true, babyCare: true },
];

export const parkingLots: ParkingLot[] = [
  { id: 'p-1', name: 'Lot P3 · North', zone: 'C', total: 1200, occupied: 880, reserved: 60, distance: 180, fee: '$25', covered: true, ev: true, entryIn: '3 min' },
  { id: 'p-2', name: 'Lot P1 · East', zone: 'A', total: 950, occupied: 920, reserved: 20, distance: 260, fee: '$20', covered: false, ev: false, entryIn: '6 min' },
  { id: 'p-3', name: 'Lot P2 · West', zone: 'B', total: 1100, occupied: 640, reserved: 40, distance: 320, fee: '$20', covered: true, ev: true, entryIn: '5 min' },
  { id: 'p-4', name: 'Lot P4 · South', zone: 'D', total: 800, occupied: 410, reserved: 30, distance: 410, fee: '$15', covered: false, ev: false, entryIn: '8 min' },
];

export const crowdZones: CrowdZone[] = [
  { id: 'c-1', name: 'Gate A', category: 'gate', density: 89, people: 2400, trend: 'up', forecast: [89, 92, 94, 91, 86, 82, 78] },
  { id: 'c-2', name: 'Gate B', category: 'gate', density: 61, people: 1650, trend: 'flat', forecast: [61, 63, 65, 64, 60, 56, 52] },
  { id: 'c-3', name: 'Gate C', category: 'gate', density: 32, people: 860, trend: 'down', forecast: [32, 30, 28, 26, 28, 31, 34] },
  { id: 'c-4', name: 'Gate D', category: 'gate', density: 54, people: 1450, trend: 'up', forecast: [54, 58, 62, 66, 69, 72, 70] },
  { id: 'c-5', name: 'Concourse East', category: 'concourse', density: 72, people: 3200, trend: 'up', forecast: [72, 76, 80, 83, 85, 82, 78] },
  { id: 'c-6', name: 'Concourse West', category: 'concourse', density: 48, people: 2100, trend: 'flat', forecast: [48, 50, 52, 51, 49, 46, 44] },
  { id: 'c-7', name: 'Food Court · East', category: 'food', density: 78, people: 540, trend: 'up', forecast: [78, 82, 85, 88, 84, 79, 73] },
  { id: 'c-8', name: 'Food Court · West', category: 'food', density: 41, people: 280, trend: 'down', forecast: [41, 38, 35, 33, 36, 40, 44] },
  { id: 'c-9', name: 'Restroom Block N', category: 'restroom', density: 66, people: 120, trend: 'up', forecast: [66, 70, 73, 75, 71, 66, 60] },
  { id: 'c-10', name: 'Restroom Block S', category: 'restroom', density: 28, people: 60, trend: 'down', forecast: [28, 25, 23, 22, 25, 29, 33] },
];

export const sentimentSamples: SentimentSample[] = [
  { id: 's-1', user: '@diegoFan', avatar: 'D', text: 'VINÍCIUS!! What a goal! The stadium is shaking! 🔥', mood: 'excitement', time: '2m' },
  { id: 's-2', user: '@priya_07', avatar: 'P', text: 'Found my seat in seconds with the map. This app is a lifesaver!', mood: 'joy', time: '5m' },
  { id: 's-3', user: '@rohan99', avatar: 'R', text: 'Wish the queue at Gate A was shorter, took 20 min to enter.', mood: 'concern', time: '8m' },
  { id: 's-4', user: '@mei_w', avatar: 'M', text: 'Biryani Bowl at Level 1 is incredible. Worth the walk!', mood: 'joy', time: '12m' },
  { id: 's-5', user: '@kofi_gh', avatar: 'K', text: 'Argentina needs to wake up, this is frustrating to watch 😩', mood: 'frustration', time: '15m' },
  { id: 's-6', user: '@ananya', avatar: 'A', text: 'Proud of how diverse the crowd is — 30 nations in one stand!', mood: 'pride', time: '20m' },
];

export const sentimentKeywords = [
  { word: 'GOAL', count: 4120, mood: 'excitement' as const },
  { word: 'Vinícius', count: 3210, mood: 'joy' as const },
  { word: 'Crowd', count: 2480, mood: 'excitement' as const },
  { word: 'Biryani', count: 1980, mood: 'joy' as const },
  { word: 'Queue', count: 1640, mood: 'concern' as const },
  { word: 'Argentina', count: 1520, mood: 'frustration' as const },
  { word: 'Map', count: 1340, mood: 'joy' as const },
  { word: 'Atmosphere', count: 1180, mood: 'pride' as const },
];

export const sentimentOverall = { positive: 68, neutral: 22, negative: 10 };

export const sentimentBreakdown = [
  { mood: 'excitement' as const, value: 38 },
  { mood: 'joy' as const, value: 26 },
  { mood: 'pride' as const, value: 18 },
  { mood: 'concern' as const, value: 12 },
  { mood: 'frustration' as const, value: 6 },
];
