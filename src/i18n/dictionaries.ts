export type Lang = 'en' | 'te' | 'hi';

export type ViewId =
  | 'home'
  | 'assistant'
  | 'map'
  | 'food'
  | 'washroom'
  | 'parking'
  | 'schedule'
  | 'crowd'
  | 'sentiment';

export interface Dictionary {
  appName: string;
  tagline: string;
  nav: {
    home: string;
    assistant: string;
    map: string;
    food: string;
    washroom: string;
    parking: string;
    schedule: string;
    crowd: string;
    sentiment: string;
    more: string;
  };
  common: {
    open: string;
    live: string;
    away: string;
    full: string;
    available: string;
    busy: string;
    find: string;
    directions: string;
    walkTo: string;
    minutes: string;
    meters: string;
    now: string;
    today: string;
    tomorrow: string;
    close: string;
    send: string;
    listening: string;
    askAnything: string;
    poweredBy: string;
    rating: string;
    free: string;
    paid: string;
    eta: string;
    gate: string;
    level: string;
    call: string;
    share: string;
    capacity: string;
    distance: string;
    avgWait: string;
    foodCourt: string;
    restrooms: string;
    parkingLots: string;
    firstAid: string;
    info: string;
    shops: string;
    seats: string;
    vipLounge: string;
    exits: string;
    you: string;
    ai: string;
    clearChat: string;
    suggestion: string;
    online: string;
    seconds: string;
    versus: string;
  };
  home: {
    heroBadge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    liveMatch: string;
    versus: string;
    scoreboard: string;
    minute: string;
    quickActions: string;
    aiCard: string;
    aiCardDesc: string;
    navCard: string;
    navCardDesc: string;
    foodCard: string;
    foodCardDesc: string;
    sosCard: string;
    sosCardDesc: string;
    parkingCard: string;
    parkingCardDesc: string;
    crowdCard: string;
    crowdCardDesc: string;
    fanCard: string;
    fanCardDesc: string;
    scheduleCard: string;
    scheduleCardDesc: string;
    yourGate: string;
    yourSeat: string;
    matchInsights: string;
    energy: string;
    energyHigh: string;
    noise: string;
    temp: string;
    nextMatch: string;
    seeAll: string;
    stadiumStatus: string;
    operational: string;
  };
  assistant: {
    title: string;
    subtitle: string;
    greeting: string;
    askPlaceholder: string;
    voiceHint: string;
    quickAsk: string[];
    responses: {
      food: string;
      washroom: string;
      parking: string;
      gate: string;
      emergency: string;
      crowd: string;
      match: string;
      default: string;
    };
  };
  map: {
    title: string;
    subtitle: string;
    layers: { food: string; washroom: string; parking: string; firstAid: string; shop: string; exit: string; seat: string };
    legend: string;
    yourLocation: string;
    routeTo: string;
    startRoute: string;
    clearRoute: string;
    aiGuiding: string;
    arrived: string;
    youAreHere: string;
    searchPlaceholder: string;
    reset: string;
    zoomIn: string;
    zoomOut: string;
  };
  food: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterVeg: string;
    filterNonVeg: string;
    filterVegan: string;
    menu: string;
    openNow: string;
    closesIn: string;
    avgPrice: string;
    waitTime: string;
    nearest: string;
    popular: string;
  };
  washroom: {
    title: string;
    subtitle: string;
    nearest: string;
    status: { open: string; busy: string; cleaning: string };
    queue: string;
    accessible: string;
    babyCare: string;
  };
  parking: {
    title: string;
    subtitle: string;
    total: string;
    occupied: string;
    free: string;
    reserved: string;
    entryIn: string;
    fee: string;
    covered: string;
    ev: string;
    myVehicle: string;
    directions: string;
  };
  schedule: {
    title: string;
    subtitle: string;
    group: string;
    matchday: string;
    finished: string;
    upcoming: string;
    venue: string;
    kickoff: string;
    buyTickets: string;
    setReminder: string;
    liveNow: string;
  };
  crowd: {
    title: string;
    subtitle: string;
    zones: string;
    concourses: string;
    entryGates: string;
    foodCourts: string;
    restrooms: string;
    safe: string;
    moderate: string;
    dense: string;
    veryDense: string;
    people: string;
    trend: string;
    forecast: string;
    low: string;
    high: string;
  };
  sentiment: {
    title: string;
    subtitle: string;
    overall: string;
    positive: string;
    neutral: string;
    negative: string;
    trending: string;
    buzz: string;
    keywords: string;
    sample: string;
    fanVoice: string;
    joy: string;
    excitement: string;
    pride: string;
    concern: string;
    frustration: string;
  };
  sos: {
    title: string;
    subtitle: string;
    cancel: string;
    holdToActivate: string;
    activated: string;
    contacting: string;
    medical: string;
    security: string;
    fire: string;
    lost: string;
    shareLocation: string;
    dispatched: string;
    keepCalm: string;
    nearestFirstAid: string;
    responder: string;
    responseTime: string;
  };
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    appName: 'StadiumGenie AI',
    tagline: 'FIFA World Cup 2026 · Smart Stadium Companion',
    nav: {
      home: 'Home', assistant: 'AI Assistant', map: 'Stadium Map', food: 'Food Court',
      washroom: 'Washrooms', parking: 'Parking', schedule: 'Schedule', crowd: 'Crowd', sentiment: 'Fan Sentiment', more: 'More',
    },
    common: {
      open: 'Open', live: 'LIVE', away: 'away', full: 'Full', available: 'Available', busy: 'Busy',
      find: 'Find', directions: 'Directions', walkTo: 'Walk to', minutes: 'min', meters: 'm', now: 'Now',
      today: 'Today', tomorrow: 'Tomorrow', close: 'Close', send: 'Send', listening: 'Listening…',
      askAnything: 'Ask StadiumGenie anything…', poweredBy: 'AI-powered · Voice enabled', rating: 'rating',
      free: 'Free', paid: 'Paid', eta: 'ETA', gate: 'Gate', level: 'Level', call: 'Call', share: 'Share', versus: 'vs',
      capacity: 'Capacity', distance: 'Distance', avgWait: 'Avg. wait', foodCourt: 'Food Court',
      restrooms: 'Restrooms', parkingLots: 'Parking Lots', firstAid: 'First Aid', info: 'Info',
      shops: 'Shops', seats: 'Seats', vipLounge: 'VIP Lounge', exits: 'Exits', you: 'You', ai: 'StadiumGenie',
      clearChat: 'Clear chat', suggestion: 'Suggestion', online: 'Online', seconds: 's',
    },
    home: {
      heroBadge: 'Live at MetLife Stadium', heroTitle1: 'Your smart', heroTitle2: 'World Cup companion',
      heroSubtitle: 'Navigation, food, parking, crowd insights and AI help — all in one beautiful app.',
      liveMatch: 'Live Match', versus: 'vs', scoreboard: 'Scoreboard', minute: "Min",
      quickActions: 'Quick Actions', aiCard: 'AI Assistant', aiCardDesc: 'Ask anything, use voice',
      navCard: 'Stadium Navigation', navCardDesc: 'Interactive map & routes',
      foodCard: 'Food Court Finder', foodCardDesc: 'Find food near you',
      sosCard: 'Emergency SOS', sosCardDesc: 'One tap for help',
      parkingCard: 'Parking', parkingCardDesc: 'Live availability',
      crowdCard: 'Crowd Density', crowdCardDesc: 'Avoid congested zones',
      fanCard: 'Fan Sentiment', fanCardDesc: 'Live crowd mood',
      scheduleCard: 'Match Schedule', scheduleCardDesc: 'Fixtures & reminders',
      yourGate: 'Your gate', yourSeat: 'Your seat', matchInsights: 'Match Insights',
      energy: 'Crowd Energy', energyHigh: 'Electric', noise: 'Stadium Noise', temp: 'Temp',
      nextMatch: 'Next match', seeAll: 'See all', stadiumStatus: 'Stadium Status', operational: 'Operational',
    },
    assistant: {
      title: 'AI Assistant', subtitle: 'Voice & text, powered by StadiumGenie',
      greeting: "Hi! I'm StadiumGenie. Ask me about food, washrooms, parking, your gate, the match, or tap the mic to speak.",
      askPlaceholder: 'Ask about food, parking, your seat…',
      voiceHint: 'Tap the mic and speak',
      quickAsk: ['Where is the nearest food court?', 'Find the closest washroom', 'Where did I park my car?', 'How do I get to Gate B?', 'What is the crowd like at Gate A?', "What's the current score?"],
      responses: {
        food: 'The nearest food court is "Goal Bites" on Level 1, Concourse East — about 60m from your seat. Hot dogs, nachos and cold drinks are available with a ~4 min wait. Tap "Directions" and I will guide you there.',
        washroom: 'Closest washroom is 35m to your left on Level 1, Concourse East. Status: Open, light queue (~2 min). An accessible facility is right next to it.',
        parking: 'Your vehicle is parked in Lot P3, Bay 24 (North side). Current exit time is ~8 min. I can share live directions to your car whenever you are ready.',
        gate: 'Your entry gate is Gate B. From your current location, walk 120m west along the main concourse — about a 2-minute walk. Your seat is in Section 218, Row 14, Seat 9.',
        emergency: 'If this is urgent, please tap the red SOS button — it shares your location with stadium medical & security. The nearest first-aid post is 50m behind your section.',
        crowd: 'Right now the densest zone is Gate A (89%). Gate B where you are is Moderate (61%). I would suggest using Gate C for exits — it is at 32% and fastest.',
        match: 'Live: Brazil 1 – 0 Argentina, 67th minute. Vinícius Jr. scored in the 23rd minute. Next match for you: England vs Spain, tomorrow 19:00 at this stadium.',
        default: "I can help with food, washrooms, parking, gates, crowd, the match or emergencies. Try one of the suggestions below, or tap the mic to speak.",
      },
    },
    map: {
      title: 'Stadium Map', subtitle: 'Interactive navigation & live routing',
      layers: { food: 'Food', washroom: 'Washrooms', parking: 'Parking', firstAid: 'First Aid', shop: 'Shops', exit: 'Exits', seat: 'Seats' },
      legend: 'Legend', yourLocation: 'Your location', routeTo: 'Route to', startRoute: 'Start route',
      clearRoute: 'Clear route', aiGuiding: 'AI is guiding you', arrived: 'You have arrived', youAreHere: 'You are here',
      searchPlaceholder: 'Search gates, food, seats…', reset: 'Reset view', zoomIn: 'Zoom in', zoomOut: 'Zoom out',
    },
    food: {
      title: 'Food Court Finder', subtitle: 'Live menus, wait times & directions',
      searchPlaceholder: 'Search food, cuisine, dish…', filterAll: 'All', filterVeg: 'Veg', filterNonVeg: 'Non-Veg', filterVegan: 'Vegan',
      menu: 'Menu', openNow: 'Open now', closesIn: 'closes in', avgPrice: 'Avg. price', waitTime: 'Wait', nearest: 'Nearest', popular: 'Popular',
    },
    washroom: {
      title: 'Washroom Finder', subtitle: 'Live queue status & accessibility',
      nearest: 'Nearest', status: { open: 'Open', busy: 'Busy', cleaning: 'Cleaning' },
      queue: 'Queue', accessible: 'Accessible', babyCare: 'Baby care',
    },
    parking: {
      title: 'Parking Availability', subtitle: 'Live lot status & find your car',
      total: 'Total', occupied: 'Occupied', free: 'Free', reserved: 'Reserved',
      entryIn: 'Entry in', fee: 'Fee', covered: 'Covered', ev: 'EV charging', myVehicle: 'My vehicle', directions: 'Directions',
    },
    schedule: {
      title: 'Match Schedule', subtitle: 'FIFA World Cup 2026 fixtures',
      group: 'Group', matchday: 'Matchday', finished: 'Finished', upcoming: 'Upcoming',
      venue: 'Venue', kickoff: 'Kick-off', buyTickets: 'Tickets', setReminder: 'Reminder', liveNow: 'Live now',
    },
    crowd: {
      title: 'Crowd Density Monitor', subtitle: 'Live zone congestion & forecasts',
      zones: 'Zones', concourses: 'Concourses', entryGates: 'Entry Gates', foodCourts: 'Food Courts', restrooms: 'Restrooms',
      safe: 'Safe', moderate: 'Moderate', dense: 'Dense', veryDense: 'Very Dense', people: 'people', trend: 'Trend', forecast: '30-min forecast', low: 'Low', high: 'High',
    },
    sentiment: {
      title: 'Fan Sentiment Analysis', subtitle: 'Live crowd mood & social buzz',
      overall: 'Overall mood', positive: 'Positive', neutral: 'Neutral', negative: 'Negative',
      trending: 'Trending', buzz: 'Social buzz', keywords: 'Top keywords', sample: 'Fan voice', fanVoice: 'What fans are saying',
      joy: 'Joy', excitement: 'Excitement', pride: 'Pride', concern: 'Concern', frustration: 'Frustration',
    },
    sos: {
      title: 'Emergency SOS', subtitle: 'Help is one tap away',
      cancel: 'Cancel', holdToActivate: 'Hold to activate SOS', activated: 'SOS Activated', contacting: 'Contacting stadium response…',
      medical: 'Medical', security: 'Security', fire: 'Fire', lost: 'Lost child', shareLocation: 'Share my live location',
      dispatched: 'Responder dispatched', keepCalm: 'Stay calm. Help is on the way.', nearestFirstAid: 'Nearest first-aid post', responder: 'Responder', responseTime: 'ETA',
    },
  },
  te: {
    appName: 'స్టేడియంజీనీ AI',
    tagline: 'FIFA ప్రపంచ కప్ 2026 · స్మార్ట్ స్టేడియం సహచరుడు',
    nav: {
      home: 'హోమ్', assistant: 'AI సహాయకుడు', map: 'స్టేడియం మ్యాప్', food: 'ఫుడ్ కోర్ట్',
      washroom: 'మరుగుదొడ్లు', parking: 'పార్కింగ్', schedule: 'షెడ్యూల్', crowd: 'జనసమూహం', sentiment: 'అభిమానుల భావం', more: 'మరిన్ని',
    },
    common: {
      open: 'తెరచు', live: 'ప్రత్యక్ష', away: 'దూరం', full: 'నిండింది', available: 'అందుబాటులో', busy: 'రద్దీ',
      find: 'కనుగొను', directions: 'దారి', walkTo: 'నడవండి', minutes: 'నిమి', meters: 'మీ', now: 'ఇప్పుడు',
      today: 'ఈరోజు', tomorrow: 'రేపు', close: 'మూసివేయి', send: 'పంపు', listening: 'వింటోంది…',
      askAnything: 'స్టేడియంజీనీని ఏదైనా అడగండి…', poweredBy: 'AI ఆధారిత · వాయిస్ ఉంది', rating: 'రేటింగ్',
      free: 'ఉచితం', paid: 'చెల్లింపు', eta: 'ETA', gate: 'గేట్', level: 'అంతస్తు', call: 'కాల్', share: 'షేర్', versus: 'vs',
      capacity: 'సామర్థ్యం', distance: 'దూరం', avgWait: 'సగటు వేచి', foodCourt: 'ఫుడ్ కోర్ట్',
      restrooms: 'మరుగుదొడ్లు', parkingLots: 'పార్కింగ్ లాట్లు', firstAid: 'ప్రాథమిక చికిత్స', info: 'సమాచారం',
      shops: 'దుకాణాలు', seats: 'సీట్లు', vipLounge: 'VIP లాంజ్', exits: 'నిష్క్రమణ', you: 'మీరు', ai: 'స్టేడియంజీనీ',
      clearChat: 'చాట్ క్లియర్', suggestion: 'సూచన', online: 'ఆన్‌లైన్', seconds: 'సె',
    },
    home: {
      heroBadge: 'MetLife స్టేడియంలో ప్రత్యక్ష', heroTitle1: 'మీ స్మార్ట్', heroTitle2: 'ప్రపంచ కప్ సహచరుడు',
      heroSubtitle: 'దారి, ఆహారం, పార్కింగ్, జనసమూహ అంతర్దృష్టి మరియు AI సహాయం — అంతా ఒకే అందమైన యాప్‌లో.',
      liveMatch: 'ప్రత్యక్ష మ్యాచ్', versus: 'vs', scoreboard: 'స్కోర్‌బోర్డ్', minute: 'నిమి',
      quickActions: 'త్వరిత చర్యలు', aiCard: 'AI సహాయకుడు', aiCardDesc: 'ఏదైనా అడగండి, వాయిస్ ఉపయోగించండి',
      navCard: 'స్టేడియం నావిగేషన్', navCardDesc: 'ఇంటరాక్టివ్ మ్యాప్ & మార్గాలు',
      foodCard: 'ఫుడ్ కోర్ట్ ఫైండర్', foodCardDesc: 'మీ దగ్గర ఆహారం కనుగొనండి',
      sosCard: 'అత్యవసర SOS', sosCardDesc: 'సహాయం కోసం ఒక ట్యాప్',
      parkingCard: 'పార్కింగ్', parkingCardDesc: 'ప్రత్యక్ష అందుబాటు',
      crowdCard: 'జనసమూహ సాంద్రత', crowdCardDesc: 'రద్దీ ప్రాంతాలను నివారించండి',
      fanCard: 'అభిమానుల భావం', fanCardDesc: 'ప్రత్యక్ష జనసమూహ మూడ్',
      scheduleCard: 'మ్యాచ్ షెడ్యూల్', scheduleCardDesc: 'ఫిక్స్చర్లు & రిమైండర్లు',
      yourGate: 'మీ గేట్', yourSeat: 'మీ సీట్', matchInsights: 'మ్యాచ్ ఇన్‌సైట్స్',
      energy: 'జనసమూహ శక్తి', energyHigh: 'ఎలక్ట్రిక్', noise: 'స్టేడియం శబ్దం', temp: 'ఉష్ణోగ్రత',
      nextMatch: 'తదుపరి మ్యాచ్', seeAll: 'అన్నీ చూడండి', stadiumStatus: 'స్టేడియం స్థితి', operational: 'పనిచేస్తోంది',
    },
    assistant: {
      title: 'AI సహాయకుడు', subtitle: 'వాయిస్ & టెక్స్ట్, స్టేడియంజీనీతో',
      greeting: 'నమస్కారం! నేను స్టేడియంజీనీ. ఆహారం, మరుగుదొడ్లు, పార్కింగ్, మీ గేట్, మ్యాచ్ గురించి అడగండి లేదా మైక్ నొక్కండి.',
      askPlaceholder: 'ఆహారం, పార్కింగ్, మీ సీట్ గురించి అడగండి…',
      voiceHint: 'మైక్ నొక్కి మాట్లాడండి',
      quickAsk: ['సమీపంలోని ఫుడ్ కోర్ట్ ఎక్కడ?', 'సమీప మరుగుదొడ్ కనుగొను', 'నేను కార్ ఎక్కడ పార్క్ చేశాను?', 'గేట్ Bకి ఎలా వెళ్ళు?', 'గేట్ A వద్ద జనసమూహం ఎలా ఉంది?', 'ప్రస్తుత స్కోర్ ఎంత?'],
      responses: {
        food: 'సమీప ఫుడ్ కోర్ట్ "గోల్ బైట్స్" లెవల్ 1, కాన్కోర్స్ తూర్పు — మీ సీట్ నుండి 60మీ. హాట్ డాగ్స్, నాచోస్, కోల్డ్ డ్రింక్స్ లభ్యం, ~4 నిమి వేచి. "దారి" నొక్కితే నేను గైడ్ చేస్తాను.',
        washroom: 'సమీప మరుగుదొడ్ మీకు ఎడమ 35మీ, లెవల్ 1. స్థితి: తెరచు, తేలిక క్యూ (~2 నిమి). దగ్గరే యాక్సెసిబుల్ సౌకర్యం ఉంది.',
        parking: 'మీ వాహనం లాట్ P3, బే 24 (ఉత్తర భాగం)లో ఉంది. ప్రస్తుత నిష్క్రమణ సమయం ~8 నిమి. మీ కారుకు దారి చూపిస్తాను.',
        gate: 'మీ ఎంట్రీ గేట్ B. ప్రధాన కాన్కోర్స్ వెంట పశ్చిమంగా 120మీ నడవండి — ~2 నిమి. మీ సీట్ సెక్షన్ 218, వరుస 14, సీట్ 9.',
        emergency: 'అత్యవసరం అయితే ఎర్ర SOS బటన్ నొక్కండి — మీ లొకేషన్ మెడికల్ & సెక్యూరిటీకి వెళ్ళుతుంది. సమీప ప్రాథమిక చికిత్స 50మీ వెనుక.',
        crowd: 'ప్రస్తుతం అత్యధిక జనసమూహం గేట్ A (89%). మీరు ఉన్న గేట్ B మితమైనది (61%). నిష్క్రమణకు గేట్ C ఉపయోగించండి — 32% వేగవంతం.',
        match: 'ప్రత్యక్ష: బ్రెజిల్ 1 – 0 అర్జెంటీనా, 67వ నిమి. వినిసియస్ Jr. 23వ నిమిలో గోల్. మీ తదుపరి మ్యాచ్: ఇంగ్లాండ్ vs స్పెయిన్, రేపు 19:00.',
        default: 'నేను ఆహారం, మరుగుదొడ్లు, పార్కింగ్, గేట్లు, జనసమూహం, మ్యాచ్ లేదా అత్యవసరాలలో సహాయం చేస్తాను. సూచనలను ప్రయత్నించండి లేదా మైక్ నొక్కండి.',
      },
    },
    map: {
      title: 'స్టేడియం మ్యాప్', subtitle: 'ఇంటరాక్టివ్ నావిగేషన్ & ప్రత్యక్ష రూటింగ్',
      layers: { food: 'ఆహారం', washroom: 'మరుగుదొడ్లు', parking: 'పార్కింగ్', firstAid: 'ప్రాథమిక చికిత్స', shop: 'దుకాణాలు', exit: 'నిష్క్రమణ', seat: 'సీట్లు' },
      legend: 'లెజెండ్', yourLocation: 'మీ స్థానం', routeTo: 'దారి', startRoute: 'మార్గం ప్రారంభించు',
      clearRoute: 'మార్గం క్లియర్', aiGuiding: 'AI గైడ్ చేస్తోంది', arrived: 'మీరు చేరుకున్నారు', youAreHere: 'మీరు ఇక్కడ',
      searchPlaceholder: 'గేట్లు, ఆహారం, సీట్లు వెతకండి…', reset: 'రీసెట్', zoomIn: 'జూమ్ ఇన్', zoomOut: 'జూమ్ అవుట్',
    },
    food: {
      title: 'ఫుడ్ కోర్ట్ ఫైండర్', subtitle: 'ప్రత్యక్ష మెనూలు, వేచి సమయాలు & దారులు',
      searchPlaceholder: 'ఆహారం, వంటకం, వంటకం వెతకండి…', filterAll: 'అన్నీ', filterVeg: 'శాకాహారం', filterNonVeg: 'మాంసాహారం', filterVegan: 'వెగన్',
      menu: 'మెనూ', openNow: 'ఇప్పుడు తెరచు', closesIn: 'మూసే సమయం', avgPrice: 'సగటు ధర', waitTime: 'వేచి', nearest: 'సమీప', popular: 'ప్రజాదరణ',
    },
    washroom: {
      title: 'మరుగుదొడ్ ఫైండర్', subtitle: 'ప్రత్యక్ష క్యూ స్థితి & యాక్సెసిబిలిటీ',
      nearest: 'సమీప', status: { open: 'తెరచు', busy: 'రద్దీ', cleaning: 'క్లీనింగ్' },
      queue: 'క్యూ', accessible: 'యాక్సెసిబుల్', babyCare: 'బేబీ కేర్',
    },
    parking: {
      title: 'పార్కింగ్ అందుబాటు', subtitle: 'ప్రత్యక్ష లాట్ స్థితి & మీ కారు కనుగొను',
      total: 'మొత్తం', occupied: 'ఆక్రమించబడింది', free: 'ఖాళీ', reserved: 'రిజర్వ్',
      entryIn: 'ఎంట్రీ', fee: 'ఫీజు', covered: 'కవర్డ్', ev: 'EV ఛార్జింగ్', myVehicle: 'నా వాహనం', directions: 'దారి',
    },
    schedule: {
      title: 'మ్యాచ్ షెడ్యూల్', subtitle: 'FIFA ప్రపంచ కప్ 2026 ఫిక్స్చర్లు',
      group: 'గ్రూప్', matchday: 'మ్యాచ్‌డే', finished: 'పూర్తయింది', upcoming: 'రాబోతున్న',
      venue: 'వేదిక', kickoff: 'ప్రారంభం', buyTickets: 'టిక్కెట్లు', setReminder: 'రిమైండర్', liveNow: 'ప్రత్యక్ష',
    },
    crowd: {
      title: 'జనసమూహ సాంద్రత మానిటర్', subtitle: 'ప్రత్యక్ష జోన్ రద్దీ & అంచనాలు',
      zones: 'జోన్లు', concourses: 'కాన్కోర్స్‌లు', entryGates: 'ఎంట్రీ గేట్లు', foodCourts: 'ఫుడ్ కోర్ట్‌లు', restrooms: 'మరుగుదొడ్లు',
      safe: 'సురక్షితం', moderate: 'మితమైన', dense: 'దట్టమైన', veryDense: 'చాలా దట్టం', people: 'మంది', trend: 'ధోరణి', forecast: '30-నిమి అంచనా', low: 'తక్కువ', high: 'ఎక్కువ',
    },
    sentiment: {
      title: 'అభిమానుల భావ విశ్లేషణ', subtitle: 'ప్రత్యక్ష జనసమూహ మూడ్ & సోషల్ బజ్',
      overall: 'మొత్తం మూడ్', positive: 'సానుకూల', neutral: 'తటస్థ', negative: 'ప్రతికూల',
      trending: 'ట్రెండింగ్', buzz: 'సోషల్ బజ్', keywords: 'టాప్ కీవర్డ్లు', sample: 'అభిమానుల స్వరం', fanVoice: 'అభిమానులు చెప్పేది',
      joy: 'ఆనందం', excitement: 'ఉత్సాహం', pride: 'గర్వం', concern: 'ఆందోళన', frustration: 'నిరాశ',
    },
    sos: {
      title: 'అత్యవసర SOS', subtitle: 'సహాయం ఒక ట్యాప్ దూరం',
      cancel: 'రద్దు', holdToActivate: 'SOS కోసం నొక్కి పట్టుకోండి', activated: 'SOS యాక్టివేట్', contacting: 'స్టేడియం రెస్పాన్స్‌ని సంప్రదిస్తోంది…',
      medical: 'వైద్య', security: 'భద్రత', fire: 'అగ్ని', lost: 'పోయిన బిడ్డ', shareLocation: 'నా లైవ్ లొకేషన్ షేర్',
      dispatched: 'రెస్పాండర్ పంపబడింది', keepCalm: 'ప్రశాంతంగా ఉండండి. సహాయం వస్తోంది.', nearestFirstAid: 'సమీప ప్రాథమిక చికిత్స', responder: 'రెస్పాండర్', responseTime: 'ETA',
    },
  },
  hi: {
    appName: 'स्टेडियमजीनी AI',
    tagline: 'FIFA विश्व कप 2026 · स्मार्ट स्टेडियम साथी',
    nav: {
      home: 'होम', assistant: 'AI सहायक', map: 'स्टेडियम मानचित्र', food: 'फूड कोर्ट',
      washroom: 'शौचालय', parking: 'पार्किंग', schedule: 'शेड्यूल', crowd: 'भीड़', sentiment: 'प्रशंसक भावना', more: 'अधिक',
    },
    common: {
      open: 'खुला', live: 'लाइव', away: 'दूर', full: 'भरा', available: 'उपलब्ध', busy: 'व्यस्त',
      find: 'खोजें', directions: 'रास्ता', walkTo: 'चलें', minutes: 'मिनट', meters: 'मी', now: 'अभी',
      today: 'आज', tomorrow: 'कल', close: 'बंद करें', send: 'भेजें', listening: 'सुन रहा हूँ…',
      askAnything: 'स्टेडियमजीनी से कुछ भी पूछें…', poweredBy: 'AI-संचालित · वॉइस सक्षम', rating: 'रेटिंग',
      free: 'मुफ़्त', paid: 'भुगतान', eta: 'ETA', gate: 'गेट', level: 'स्तर', call: 'कॉल', share: 'शेयर', versus: 'vs',
      capacity: 'क्षमता', distance: 'दूरी', avgWait: 'औसत प्रतीक्षा', foodCourt: 'फूड कोर्ट',
      restrooms: 'शौचालय', parkingLots: 'पार्किंग लॉट', firstAid: 'प्राथमिक चिकित्सा', info: 'जानकारी',
      shops: 'दुकानें', seats: 'सीटें', vipLounge: 'VIP लाउंज', exits: 'निकास', you: 'आप', ai: 'स्टेडियमजीनी',
      clearChat: 'चैट साफ़ करें', suggestion: 'सुझाव', online: 'ऑनलाइन', seconds: 'से',
    },
    home: {
      heroBadge: 'MetLife स्टेडियम में लाइव', heroTitle1: 'आपका स्मार्ट', heroTitle2: 'विश्व कप साथी',
      heroSubtitle: 'नेविगेशन, भोजन, पार्किंग, भीड़ अंतर्दृष्टि और AI सहायता — सब एक सुंदर ऐप में।',
      liveMatch: 'लाइव मैच', versus: 'vs', scoreboard: 'स्कोरबोर्ड', minute: 'मिनट',
      quickActions: 'त्वरित क्रियाएँ', aiCard: 'AI सहायक', aiCardDesc: 'कुछ भी पूछें, वॉइस उपयोग करें',
      navCard: 'स्टेडियम नेविगेशन', navCardDesc: 'इंटरैक्टिव मानचित्र और रास्ते',
      foodCard: 'फूड कोर्ट खोजक', foodCardDesc: 'पास भोजन खोजें',
      sosCard: 'आपातकालीन SOS', sosCardDesc: 'सहायता के लिए एक टैप',
      parkingCard: 'पार्किंग', parkingCardDesc: 'लाइव उपलब्धता',
      crowdCard: 'भीड़ घनत्व', crowdCardDesc: 'जमा क्षेत्र टालें',
      fanCard: 'प्रशंसक भावना', fanCardDesc: 'लाइव भीड़ मूड',
      scheduleCard: 'मैच शेड्यूल', scheduleCardDesc: 'फिक्स्चर और रिमाइंडर',
      yourGate: 'आपका गेट', yourSeat: 'आपकी सीट', matchInsights: 'मैच अंतर्दृष्टि',
      energy: 'भीड़ ऊर्जा', energyHigh: 'बिजली', noise: 'स्टेडियम शोर', temp: 'तापमान',
      nextMatch: 'अगला मैच', seeAll: 'सभी देखें', stadiumStatus: 'स्टेडियम स्थिति', operational: 'चालू',
    },
    assistant: {
      title: 'AI सहायक', subtitle: 'वॉइस और टेक्स्ट, स्टेडियमजीनी द्वारा',
      greeting: "नमस्ते! मैं स्टेडियमजीनी हूँ। भोजन, शौचालय, पार्किंग, गेट, मैच के बारे में पूछें या माइक टैप करें।",
      askPlaceholder: 'भोजन, पार्किंग, अपनी सीट के बारे में पूछें…',
      voiceHint: 'माइक टैप करें और बोलें',
      quickAsk: ['निकटतम फूड कोर्ट कहाँ है?', 'नज़दीकी शौचालय खोजें', 'मैंने कार कहाँ पार्क की?', 'गेट B तक कैसे जाऊँ?', 'गेट A पर भीड़ कैसी है?', 'वर्तमान स्कोर क्या है?'],
      responses: {
        food: 'निकटतम फूड कोर्ट "गोल बाइट्स" स्तर 1, कॉन्कोर्स पूर्व — आपकी सीट से 60मी। हॉट डॉग, नाचोस और ठंडे पेय उपलब्ध, ~4 मिनट प्रतीक्षा। "रास्ता" टैप करें, मैं गाइड करूँगा।',
        washroom: 'नज़दीकी शौचालय आपके बाएँ 35मी, स्तर 1। स्थिति: खुला, हल्की कतार (~2 मिनट)। साथ ही एक्सेसिबल सुविधा उपलब्ध है।',
        parking: 'आपका वाहन लॉट P3, बे 24 (उत्तर भाग) में है। वर्तमान निकास समय ~8 मिनट। तैयार होने पर आपकी कार तक रास्ता दिखाऊँगा।',
        gate: 'आपका एंट्री गेट B है। मुख्य कॉन्कोर्स पश्चिम की ओर 120मी चलें — ~2 मिनट। आपकी सीट सेक्शन 218, पंक्ति 14, सीट 9।',
        emergency: 'आपातकाल हो तो लाल SOS बटन टैप करें — आपका लोकेशन मेडिकल व सुरक्षा को जाएगा। नज़दीकी प्राथमिक चिकित्सा 50मी पीछे।',
        crowd: 'अभी सबसे घना गेट A (89%) है। आपका गेट B मध्यम (61%) है। निकास के लिए गेट C अपनाएँ — 32% और तेज़।',
        match: 'लाइव: ब्राज़ील 1 – 0 अर्जेंटीना, 67वाँ मिनट। विनिसियस Jr. ने 23वें मिनट में गोल किया। अगला मैच: इंग्लैंड vs स्पेन, कल 19:00।',
        default: 'मैं भोजन, शौचालय, पार्किंग, गेट, भीड़, मैच या आपातकाल में सहायता कर सकता हूँ। सुझाव आज़माएँ या माइक टैप करें।',
      },
    },
    map: {
      title: 'स्टेडियम मानचित्र', subtitle: 'इंटरैक्टिव नेविगेशन और लाइव रूटिंग',
      layers: { food: 'भोजन', washroom: 'शौचालय', parking: 'पार्किंग', firstAid: 'प्राथमिक चिकित्सा', shop: 'दुकानें', exit: 'निकास', seat: 'सीटें' },
      legend: 'लीजेंड', yourLocation: 'आपका स्थान', routeTo: 'रास्ता', startRoute: 'रूट शुरू करें',
      clearRoute: 'रूट साफ़ करें', aiGuiding: 'AI गाइड कर रहा है', arrived: 'आप पहुँच गए', youAreHere: 'आप यहाँ हैं',
      searchPlaceholder: 'गेट, भोजन, सीटें खोजें…', reset: 'रीसेट', zoomIn: 'ज़ूम इन', zoomOut: 'ज़ूम आउट',
    },
    food: {
      title: 'फूड कोर्ट खोजक', subtitle: 'लाइव मेन्यू, प्रतीक्षा समय और रास्ते',
      searchPlaceholder: 'भोजन, व्यंजन, डिश खोजें…', filterAll: 'सभी', filterVeg: 'शाका', filterNonVeg: 'मांसा', filterVegan: 'वीगन',
      menu: 'मेन्यू', openNow: 'अभी खुला', closesIn: 'बंद होगा', avgPrice: 'औसत मूल्य', waitTime: 'प्रतीक्षा', nearest: 'नज़दीकी', popular: 'लोकप्रिय',
    },
    washroom: {
      title: 'शौचालय खोजक', subtitle: 'लाइव कतार स्थिति और एक्सेसिबिलिटी',
      nearest: 'नज़दीकी', status: { open: 'खुला', busy: 'व्यस्त', cleaning: 'सफ़ाई' },
      queue: 'कतार', accessible: 'एक्सेसिबल', babyCare: 'बेबी केयर',
    },
    parking: {
      title: 'पार्किंग उपलब्धता', subtitle: 'लाइव लॉट स्थिति और अपनी कार खोजें',
      total: 'कुल', occupied: 'भरा', free: 'खाली', reserved: 'आरक्षित',
      entryIn: 'एंट्री', fee: 'शुल्क', covered: 'कवर्ड', ev: 'EV चार्जिंग', myVehicle: 'मेरा वाहन', directions: 'रास्ता',
    },
    schedule: {
      title: 'मैच शेड्यूल', subtitle: 'FIFA विश्व कप 2026 फिक्स्चर',
      group: 'ग्रुप', matchday: 'मैचडे', finished: 'समाप्त', upcoming: 'आगामी',
      venue: 'स्थल', kickoff: 'किक-ऑफ़', buyTickets: 'टिकट', setReminder: 'रिमाइंडर', liveNow: 'अभी लाइव',
    },
    crowd: {
      title: 'भीड़ घनत्व मॉनिटर', subtitle: 'लाइव ज़ोन जाम और पूर्वानुमान',
      zones: 'ज़ोन', concourses: 'कॉन्कोर्स', entryGates: 'एंट्री गेट', foodCourts: 'फूड कोर्ट', restrooms: 'शौचालय',
      safe: 'सुरक्षित', moderate: 'मध्यम', dense: 'घना', veryDense: 'बहुत घना', people: 'लोग', trend: 'रुझान', forecast: '30-मिनट पूर्वानुमान', low: 'कम', high: 'अधिक',
    },
    sentiment: {
      title: 'प्रशंसक भावना विश्लेषण', subtitle: 'लाइव भीड़ मूड और सोशल बज़',
      overall: 'समग्र मूड', positive: 'सकारात्मक', neutral: 'तटस्थ', negative: 'नकारात्मक',
      trending: 'ट्रेंडिंग', buzz: 'सोशल बज़', keywords: 'शीर्ष कीवर्ड', sample: 'प्रशंसक स्वर', fanVoice: 'प्रशंसक क्या कह रहे हैं',
      joy: 'आनंद', excitement: 'उत्साह', pride: 'गर्व', concern: 'चिंता', frustration: 'निराशा',
    },
    sos: {
      title: 'आपातकालीन SOS', subtitle: 'सहायता एक टैप दूर',
      cancel: 'रद्द करें', holdToActivate: 'SOS के लिए दबाकर रखें', activated: 'SOS सक्रिय', contacting: 'स्टेडियम रिस्पॉन्स से संपर्क…',
      medical: 'चिकित्सा', security: 'सुरक्षा', fire: 'अग्निशामक', lost: 'खोया बच्चा', shareLocation: 'मेरा लाइव लोकेशन शेयर करें',
      dispatched: 'रिस्पॉन्डर भेजा गया', keepCalm: 'शांत रहें। सहायता आ रही है।', nearestFirstAid: 'नज़दीकी प्राथमिक चिकित्सा', responder: 'रिस्पॉन्डर', responseTime: 'ETA',
    },
  },
};
