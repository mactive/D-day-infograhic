import React, { useState } from 'react';
import Timeline from './components/Timeline';
import EquipmentGrid from './components/EquipmentGrid';
import BeachMap from './components/BeachMap';
import ChatInterface from './components/ChatInterface';
import { ViewState } from './types';
import { Clock, Map, Database, MessageSquare, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('timeline');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'timeline', label: 'Chronology', icon: <Clock size={18} /> },
    { id: 'map', label: 'Tactical Map', icon: <Map size={18} /> },
    { id: 'equipment', label: 'Armory', icon: <Database size={18} /> },
    { id: 'historian', label: 'Ask Historian', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#1c1917] text-stone-200 font-sans selection:bg-amber-900 selection:text-white">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Scanline Effect */}
      <div className="fixed inset-0 z-50 pointer-events-none scrolling-scanline opacity-10"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#292524]/95 backdrop-blur-md border-b border-amber-900/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <div className="bg-amber-700 w-10 h-10 rounded-sm flex items-center justify-center shadow-inner mr-4">
                <span className="font-serif font-bold text-2xl text-stone-900">D</span>
              </div>
              <div>
                <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-stone-100">OPERATION OVERLORD</h1>
                <p className="text-[10px] font-mono text-amber-600 tracking-[0.2em] uppercase">June 6, 1944 • Normandy Sector</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded transition-all duration-200
                    font-mono text-sm uppercase tracking-wide
                    ${view === item.id 
                      ? 'bg-amber-900/40 text-amber-500 border border-amber-800/50' 
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'}
                  `}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-stone-400 hover:text-white p-2">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-800 border-b border-stone-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center gap-3 w-full px-3 py-4 rounded-md text-base font-medium
                    ${view === item.id 
                      ? 'bg-amber-900/30 text-amber-500' 
                      : 'text-stone-400 hover:text-white hover:bg-stone-700'}
                  `}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow pb-20 pt-8">
        
        {/* Title Section */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-300 mb-2 uppercase border-b-2 border-stone-800 inline-block pb-4">
            {navItems.find(i => i.id === view)?.label}
          </h2>
          <p className="text-stone-500 font-mono text-sm mt-2 max-w-md mx-auto">
            CLASSIFIED INFORMATION // DECLASSIFIED BY ORDER OF SHAEF
          </p>
        </div>

        {/* Dynamic Views */}
        <div className="animate-fade-in">
          {view === 'timeline' && <Timeline />}
          {view === 'equipment' && <EquipmentGrid />}
          {view === 'map' && <BeachMap />}
          {view === 'historian' && (
            <div className="px-4">
              <div className="max-w-2xl mx-auto mb-6 text-center text-stone-400 text-sm">
                <p>Accessing intelligence database via secure uplink.</p>
              </div>
              <ChatInterface />
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-[#151413] py-8 mt-auto relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-stone-600 font-serif text-sm">Lest We Forget.</p>
          <p className="text-stone-700 text-xs mt-2 font-mono">D-Day Archive Project • 1944-2024</p>
        </div>
      </footer>
    </div>
  );
};

export default App;