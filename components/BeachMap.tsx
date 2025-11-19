import React, { useState } from 'react';
import { beachData } from '../data/beachData';
import { BeachInfo } from '../types';
import { MapPin, Users, Skull, Target } from 'lucide-react';

const BeachMap: React.FC = () => {
  const [activeBeach, setActiveBeach] = useState<BeachInfo | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Map Container */}
        <div className="lg:w-2/3 bg-stone-800 p-4 rounded border border-stone-700 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-20 pointer-events-none"></div>
          <h3 className="absolute top-4 left-4 text-stone-500 font-mono text-xs tracking-widest z-10">TACTICAL MAP: NORMANDY COAST</h3>
          
          {/* Stylized SVG Map */}
          <svg viewBox="0 0 800 400" className="w-full h-auto drop-shadow-xl">
            {/* Ocean */}
            <path d="M0 0 H800 V150 Q400 180 0 150 Z" fill="#1e293b" />
            
            {/* Coastline (Simplified for concept) */}
            <path d="M0 150 Q100 180 200 160 T400 170 T600 150 T800 130 V400 H0 Z" fill="#44403c" stroke="#57534e" strokeWidth="2"/>
            
            {/* Beach Zones (Interactive) */}
            {/* Utah */}
            <path 
              d="M80 165 L140 165 L135 200 L90 210 Z" 
              className="cursor-pointer hover:brightness-125 transition-all fill-blue-900/80 stroke-blue-500"
              strokeWidth="2"
              onClick={() => setActiveBeach(beachData.find(b => b.id === 'utah') || null)}
            />
            <text x="110" y="190" fontSize="12" fill="white" textAnchor="middle" className="pointer-events-none font-mono select-none">UTAH</text>

            {/* Omaha */}
            <path 
              d="M180 160 L260 165 L255 190 L190 195 Z" 
              className="cursor-pointer hover:brightness-125 transition-all fill-red-900/80 stroke-red-500"
              strokeWidth="2"
              onClick={() => setActiveBeach(beachData.find(b => b.id === 'omaha') || null)}
            />
            <text x="220" y="185" fontSize="12" fill="white" textAnchor="middle" className="pointer-events-none font-mono select-none">OMAHA</text>

            {/* Gold */}
            <path 
              d="M310 168 L370 172 L365 195 L320 195 Z" 
              className="cursor-pointer hover:brightness-125 transition-all fill-yellow-900/80 stroke-yellow-500"
              strokeWidth="2"
              onClick={() => setActiveBeach(beachData.find(b => b.id === 'gold') || null)}
            />
            <text x="340" y="188" fontSize="12" fill="white" textAnchor="middle" className="pointer-events-none font-mono select-none">GOLD</text>

            {/* Juno */}
            <path 
              d="M390 165 L450 155 L445 185 L400 190 Z" 
              className="cursor-pointer hover:brightness-125 transition-all fill-green-900/80 stroke-green-500"
              strokeWidth="2"
              onClick={() => setActiveBeach(beachData.find(b => b.id === 'juno') || null)}
            />
            <text x="420" y="180" fontSize="12" fill="white" textAnchor="middle" className="pointer-events-none font-mono select-none">JUNO</text>

            {/* Sword */}
            <path 
              d="M490 145 L550 135 L545 165 L500 175 Z" 
              className="cursor-pointer hover:brightness-125 transition-all fill-blue-800/80 stroke-blue-400"
              strokeWidth="2"
              onClick={() => setActiveBeach(beachData.find(b => b.id === 'sword') || null)}
            />
            <text x="520" y="160" fontSize="12" fill="white" textAnchor="middle" className="pointer-events-none font-mono select-none">SWORD</text>

            {/* Decorative Grid Lines */}
            <path d="M0 50 H800 M0 100 H800 M0 200 H800 M0 300 H800" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M100 0 V400 M200 0 V400 M300 0 V400 M400 0 V400 M500 0 V400 M600 0 V400 M700 0 V400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </svg>

          <div className="absolute bottom-4 right-4 text-stone-500 text-xs font-mono">
            COORD: 49.33° N, 0.52° W
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:w-1/3">
          {activeBeach ? (
            <div className="h-full bg-stone-900 border-l-4 border-stone-700 pl-6 py-2 animate-fade-in">
              <div className={`inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4 ${activeBeach.color}`}>
                SECTOR: {activeBeach.codeName.toUpperCase()}
              </div>
              
              <h2 className="text-4xl font-serif font-bold text-stone-100 mb-6">{activeBeach.name}</h2>
              
              <div className="space-y-6">
                <div className="bg-stone-800/50 p-4 rounded border border-stone-700">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <Users size={18} />
                    <span className="font-mono text-sm font-bold">FORCES</span>
                  </div>
                  <div className="text-stone-300 text-sm space-y-1">
                    {activeBeach.divisions.map((div, i) => <div key={i}>• {div}</div>)}
                  </div>
                </div>

                <div className="bg-stone-800/50 p-4 rounded border border-stone-700">
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <Skull size={18} />
                    <span className="font-mono text-sm font-bold">CASUALTIES</span>
                  </div>
                  <p className="text-stone-200 font-bold">{activeBeach.casualties}</p>
                </div>

                <div className="bg-stone-800/50 p-4 rounded border border-stone-700">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Target size={18} />
                    <span className="font-mono text-sm font-bold">OBJECTIVES</span>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">{activeBeach.objectives}</p>
                </div>

                <p className="text-stone-400 italic text-sm leading-relaxed border-t border-stone-800 pt-4">
                  {activeBeach.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-stone-900 border border-stone-800 border-dashed rounded-lg p-8 opacity-50">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-stone-600" size={48} />
                <p className="text-stone-500 font-mono">SELECT A SECTOR ON THE MAP FOR INTELLIGENCE REPORT</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeachMap;