import { useState } from 'react';
import { AppProvider, useApp } from './store';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { SOSModal } from './components/SOSModal';
import { HomeView } from './views/HomeView';
import { AssistantView } from './views/AssistantView';
import { MapView } from './views/MapView';
import { FoodView } from './views/FoodView';
import { WashroomView } from './views/WashroomView';
import { ParkingView } from './views/ParkingView';
import { ScheduleView } from './views/ScheduleView';
import { CrowdView } from './views/CrowdView';
import { SentimentView } from './views/SentimentView';

function Shell() {
  const { view } = useApp();
  const [sosOpen, setSosOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-stadium-radial" />
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-wc-500/20 blur-3xl dark:bg-wc-600/20" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl dark:bg-gold-600/10" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pitch-500/10 blur-3xl dark:bg-pitch-600/10" />
      </div>

      <Header onSOS={() => setSosOpen(true)} />

      <main className="mx-auto max-w-6xl px-4 pb-32 pt-6">
        <div key={view} className="animate-fade-in">
          {view === 'home' && <HomeView />}
          {view === 'assistant' && <AssistantView />}
          {view === 'map' && <MapView />}
          {view === 'food' && <FoodView />}
          {view === 'washroom' && <WashroomView />}
          {view === 'parking' && <ParkingView />}
          {view === 'schedule' && <ScheduleView />}
          {view === 'crowd' && <CrowdView />}
          {view === 'sentiment' && <SentimentView />}
        </div>

<div className="card">
  <h2>🏟 Smart Stadium Dashboard</h2>

  <div className="dashboard-grid">

    <div className="dashboard-card">
      <h3>👥 Crowd Density</h3>
      <p>Medium</p>
    </div>

    <div className="dashboard-card">
      <h3>🚗 Parking Slots</h3>
      <p>124 Available</p>
    </div>

    <div className="dashboard-card">
      <h3>🌦 Weather</h3>
      <p>28°C Clear Sky</p>
    </div>

    <div className="dashboard-card">
      <h3>🎫 Ticket Status</h3>
      <p>Verified</p>
    </div>

<div className="card">
  <h2>🤖 AI Features</h2>

  <ul>
    <li>AI Fan Assistant</li>
    <li>Voice Navigation</li>
    <li>Multi Language Support</li>
    <li>Emergency SOS</li>
    <li>Crowd Monitoring</li>
    <li>Smart Match Information</li>
  </ul>
</div>
    

  </div>
</div>
        
      </main>

      <BottomNav />
      <SOSModal open={sosOpen} onClose={() => setSosOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
