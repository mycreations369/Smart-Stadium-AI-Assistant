import type { Lang, ViewId } from './i18n/dictionaries';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  ts: number;
}

export type FacilityType = 'food' | 'washroom' | 'parking' | 'firstAid' | 'shop' | 'exit' | 'seat' | 'info' | 'vip';

export interface MapPoint {
  id: string;
  type: FacilityType;
  name: string;
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
  level: number;
  meta?: string;
}

export interface FoodItem {
  name: string;
  price: string;
  veg: boolean;
  vegan?: boolean;
  popular?: boolean;
}

export interface FoodCourt {
  id: string;
  name: string;
  cuisine: string;
  level: number;
  concourse: 'East' | 'West' | 'North' | 'South';
  distance: number; // meters
  wait: number; // minutes
  rating: number;
  open: boolean;
  closesIn: string;
  veg: boolean;
  vegan: boolean;
  priceLevel: 1 | 2 | 3;
  menu: FoodItem[];
}

export interface Washroom {
  id: string;
  name: string;
  level: number;
  concourse: 'East' | 'West' | 'North' | 'South';
  distance: number;
  status: 'open' | 'busy' | 'cleaning';
  queue: number; // minutes
  accessible: boolean;
  babyCare: boolean;
}

export interface ParkingLot {
  id: string;
  name: string;
  zone: 'A' | 'B' | 'C' | 'D';
  total: number;
  occupied: number;
  reserved: number;
  distance: number;
  fee: string;
  covered: boolean;
  ev: boolean;
  entryIn: string;
}

export interface Match {
  id: string;
  home: string;
  away: string;
  homeFlag: string;
  awayFlag: string;
  homeScore?: number;
  awayScore?: number;
  minute?: string;
  status: 'live' | 'upcoming' | 'finished';
  kickoff: string;
  venue: string;
  group: string;
  matchday: number;
}

export interface CrowdZone {
  id: string;
  name: string;
  category: 'concourse' | 'gate' | 'food' | 'restroom';
  density: number; // 0-100
  people: number;
  trend: 'up' | 'down' | 'flat';
  forecast: number[]; // next 30 min samples
}

export interface SentimentSample {
  id: string;
  user: string;
  avatar: string;
  text: string;
  mood: 'joy' | 'excitement' | 'pride' | 'concern' | 'frustration';
  time: string;
}

export interface UserProfile {
  name: string;
  gate: string;
  section: string;
  row: string;
  seat: string;
  parkingLot: string;
  parkingBay: string;
  avatarHue: number;
}

export interface AppState {
  lang: Lang;
  theme: 'light' | 'dark';
  view: ViewId;
  user: UserProfile;
  liveMatchId: string;
}

export const densityLevel = (d: number): 'safe' | 'moderate' | 'dense' | 'veryDense' => {
  if (d < 35) return 'safe';
  if (d < 60) return 'moderate';
  if (d < 80) return 'dense';
  return 'veryDense';
};
