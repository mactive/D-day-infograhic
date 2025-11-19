import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';
import { TimelineEvent } from '../types';
import { Clock, Anchor, Plane, Shield, Crosshair } from 'lucide-react';

const Timeline: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Naval': return <Anchor className="w-4 h-4" />;
      case 'Airborne': return <Plane className="w-4 h-4" />;
      case 'Land': return <Shield className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 px-4">
      {/* Central Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-stone-700 transform -translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.8)]"></div>

      {timelineData.map((event: TimelineEvent, index) => {
        const isLeft = index % 2 === 0;
        const isHovered = hoveredId === event.id;

        return (
          <div 
            key={event.id}
            className={`relative mb-12 flex md:items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            onMouseEnter={() => setHoveredId(event.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Spacer for desktop symmetry */}
            <div className="hidden md:block md:w-5/12"></div>

            {/* Node on the line */}
            <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-stone-800 border-2 border-amber-600 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 hover:scale-125 transition-transform duration-300 cursor-pointer shadow-lg">
              <span className="text-amber-500">{getIcon(event.category)}</span>
            </div>

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-12 text-left' : 'md:pl-12 text-left'} transition-all duration-500 ease-in-out`}>
              <div 
                className={`
                  p-4 rounded bg-stone-800/90 border border-stone-600 shadow-2xl backdrop-blur-sm
                  ${isHovered ? 'border-amber-500 bg-stone-800' : ''}
                  transition-all duration-300
                `}
              >
                <span className="inline-block px-2 py-1 text-xs font-mono text-amber-500 bg-stone-900 rounded mb-2 border border-amber-900/50">
                  {event.time}
                </span>
                <h3 className="text-xl font-serif text-stone-200 font-bold mb-2">{event.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{event.description}</p>
                
                {/* Pop-out Image on Hover */}
                <div 
                  className={`
                    mt-4 overflow-hidden rounded border border-stone-500
                    transition-all duration-500 ease-in-out
                    ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <img src={event.imageUrl} alt={event.title} className="w-full h-auto sepia-[.5] contrast-125" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;