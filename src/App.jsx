import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Calendar, 
  Users, 
  Newspaper, 
  ChevronRight, 
  PlayCircle, 
  Shield, 
  Clock, 
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Info,
  MapPin,
  Zap,
  Anchor,
  Target,
  Sword,
  Bird,
  ShoppingBag,
  User,
  Globe,
  Star,
  Tv,
  Ticket
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Brand Colors
  const colors = {
    navy: '#0B1F33',
    navyDark: '#061421',
    red: '#C4161C',
    silver: '#F2F4F6',
    brown: '#4A2A18',
    charcoal: '#1A1A1A'
  };

  // Team Data
  const teams = [
    { id: 1, name: 'Alabama Archers', city: 'Birmingham', icon: <Target />, color: '#C4161C', secondary: '#0B1F33', stadium: 'Protective Stadium' },
    { id: 2, name: 'Texas Titans', city: 'Austin', icon: <Sword />, color: '#4A2A18', secondary: '#F2F4F6', stadium: 'DKR Memorial' },
    { id: 3, name: 'Ohio Owls', city: 'Columbus', icon: <Zap />, color: '#0B1F33', secondary: '#F2F4F6', stadium: 'Ohio Stadium' },
    { id: 4, name: 'California Condors', city: 'Sacramento', icon: <Bird />, color: '#1A1A1A', secondary: '#C4161C', stadium: 'Hughes Stadium' },
    { id: 5, name: 'Florida Fleet', city: 'Orlando', icon: <Anchor />, color: '#005B96', secondary: '#F2F4F6', stadium: 'Camping World Stadium' },
    { id: 6, name: 'Gotham Knights', city: 'New York', icon: <Shield />, color: '#4B0082', secondary: '#Silver', stadium: 'MetLife Stadium' },
  ];

  // Countdown Logic
  useEffect(() => {
    const targetDate = new Date('April 12, 2026 00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Teams', id: 'teams' },
    { name: 'Building the MLF', id: 'insights' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Tickets', id: 'tickets' },
  ];

  const MLFLogo = ({ className = "h-12 w-12" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 120" className="h-full fill-current">
        <path d="M50 0 L95 25 L95 75 C95 95 75 115 50 120 C25 115 5 95 5 75 L5 25 Z" fill={colors.navy} stroke={colors.silver} strokeWidth="2" />
        <path d="M25 55 Q50 35 75 55 Q50 75 25 55 Z" fill={colors.brown} />
        <text x="50" y="95" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial">MLF</text>
      </svg>
    </div>
  );

  // --- SUB-COMPONENTS (PAGES) ---

  const HomePage = () => (
    <div className="animate-fadeIn">
      <header className="relative pt-24 pb-12 text-white overflow-hidden" style={{ backgroundColor: colors.charcoal }}>
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy/50 via-charcoal to-charcoal"></div>
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #ffffff15 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] mb-8 rounded-full border-2 border-red-600 text-red-500 shadow-[0_0_15px_rgba(196,22,28,0.3)]">
            Est. 2026 • The Future of the Gridiron
          </span>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-8">
            Major League <br />
            <span style={{ color: colors.red }}>Football</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12 leading-relaxed font-medium">
            Professional football returns to the heart of our cities. <br className="hidden md:block"/> No hubs. No gimmicks. Just the game you love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button onClick={() => setActiveTab('tickets')} className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_10px_30px_rgba(196,22,28,0.4)] hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95">
              Secure Your Priority Access
            </button>
            <button onClick={() => setActiveTab('insights')} className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white/10 transition-all">
              Read The Blueprint
            </button>
          </div>
        </div>

        {/* LONG BANNER COUNTDOWN */}
        <div className="w-full bg-white/5 border-y border-white/10 backdrop-blur-sm py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-red-600"></div>
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-red-500">Kickoff Countdown</h3>
              <div className="h-px w-12 bg-red-600"></div>
            </div>
            
            <div className="flex justify-center items-center gap-4 md:gap-12 w-full max-w-5xl">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center">
                    <div className="text-6xl md:text-8xl lg:text-9xl font-black tabular-nums tracking-tighter leading-none mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500">{item.label}</span>
                  </div>
                  {idx < 3 && (
                    <div className="text-3xl md:text-5xl font-light text-white/20 mb-10 hidden sm:block">:</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col justify-between group overflow-hidden relative">
             <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 text-red-600">
                <Tv size={180} />
             </div>
             <div className="relative z-10">
               <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-red-600">
                  <Tv size={32} />
               </div>
               <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Prime Time Broadcasts</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">We've partnered with major networks to bring MLF into every home. High-stakes football, broadcast locally and nationally every weekend.</p>
             </div>
             <button className="text-navy font-black uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
               Media Portal <ArrowRight size={18} />
             </button>
          </div>
          <div className="bg-navy p-12 rounded-[2rem] shadow-2xl text-white flex flex-col justify-between group overflow-hidden relative">
             <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 text-red-600">
                <Shield size={180} />
             </div>
             <div className="relative z-10">
               <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-red-500">
                  <Trophy size={32} />
               </div>
               <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Player Equity Initiative</h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">True stakeholders. Every player on an MLF roster earns league ownership points, ensuring that the athletes who build the game share in its growth.</p>
             </div>
             <button onClick={() => setActiveTab('insights')} className="text-red-500 font-black uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
               Learn More <ArrowRight size={18} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TeamsPage = () => (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-2">The Founding Franchises</span>
        <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-navy">Meet the League</h2>
        <div className="w-24 h-2 bg-red-600 mt-6 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teams.map((team) => (
          <div key={team.id} className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all hover:-translate-y-3">
            <div className="h-48 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: team.color }}>
              <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-150 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  {React.cloneElement(team.icon, { size: 180 })}
              </div>
              <div className="relative z-10 text-white flex flex-col items-center">
                <div className="p-5 bg-white/20 rounded-3xl backdrop-blur-md mb-2 shadow-xl border border-white/20">
                  {React.cloneElement(team.icon, { size: 48 })}
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <MapPin size={12} className="text-red-600" /> {team.city}
                  </span>
                  <h3 className="text-3xl font-black uppercase text-navy italic">{team.name}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium mb-6">Stadium: <span className="text-navy">{team.stadium}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const InsightsPage = () => (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                <Star size={24} />
              </div>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">The Origin Story</h3>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 leading-relaxed text-gray-700 space-y-6">
              <p className="text-lg font-medium text-navy font-bold italic">The MLF started as a response to the "transient" nature of spring football.</p>
              <p>We saw leagues like the XFL and AFL struggle because they prioritized national television hubs over local community roots. In 2024, our founders—a mix of NFL veterans and regional stadium owners—decided that the key to survival wasn't just a scoreboard, but a permanent presence.</p>
              <p>We spent 18 months securing long-term leases and building local training infrastructure before we ever announced a single team name. We didn't want to be a 'pop-up' league; we wanted to be a permanent institution.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white">
                <Shield size={24} />
              </div>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter">The MLF Difference</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-600 p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-xl font-black uppercase mb-4">vs. The XFL / UFL</h4>
                <ul className="space-y-4 font-bold text-sm">
                  <li className="flex gap-3"><CheckCircle2 size={18} /> Permanent City Hubs</li>
                  <li className="flex gap-3"><CheckCircle2 size={18} /> Direct Fan Ownership</li>
                  <li className="flex gap-3"><CheckCircle2 size={18} /> Regional Scouting Priority</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h4 className="text-xl font-black uppercase mb-4 text-navy">vs. The AFL</h4>
                <ul className="space-y-4 font-bold text-sm text-gray-600">
                  <li className="flex gap-3"><CheckCircle2 size={18} className="text-red-600" /> Outdoor Pro Stadiums</li>
                  <li className="flex gap-3"><CheckCircle2 size={18} className="text-red-600" /> Traditional 11-Man Rules</li>
                  <li className="flex gap-3"><CheckCircle2 size={18} className="text-red-600" /> Scalable Finance Model</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.silver, color: colors.charcoal }}>
      <nav className="sticky top-0 z-50 shadow-2xl" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('home')}>
              <MLFLogo className="h-14 w-14" />
              <div className="hidden md:block">
                <h1 className="text-white font-black text-xl leading-none">MAJOR LEAGUE</h1>
                <h2 className="text-white font-black text-xl leading-none opacity-80 uppercase italic">Football</h2>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-10 h-full">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`h-full px-1 text-[13px] font-black uppercase tracking-widest transition-all border-b-4 ${
                    activeTab === link.id ? 'text-white border-red-600' : 'text-gray-400 border-transparent hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'teams' && <TeamsPage />}
        {activeTab === 'insights' && <InsightsPage />}
      </main>

      <footer className="py-24 text-white border-t-8 border-red-600 mt-20" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MLFLogo className="h-14 w-14" />
            <span className="font-black text-4xl tracking-tighter uppercase italic">Major League Football</span>
          </div>
          <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px]">© 2026 Major League Football. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
