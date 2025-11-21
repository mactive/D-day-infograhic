import React, { useState, useEffect } from 'react';
import { timelineData } from '../data/timelineData';
import { Clock, Anchor, Plane, Shield, Circle, ArrowRight } from 'lucide-react';

const Timeline: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(timelineData[0].id);

  // Setup Intersection Observer to highlight the left sidebar based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(Number(entry.target.id.replace('event-', '')));
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' } // Trigger when item is in the middle-top of screen
    );

    timelineData.forEach((event) => {
      const el = document.getElementById(`event-${event.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToEvent = (id: number) => {
    const element = document.getElementById(`event-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveId(id);
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Naval': return <Anchor className="w-3 h-3" />;
      case 'Airborne': return <Plane className="w-3 h-3" />;
      case 'Land': return <Shield className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  // Function to determine card span for "Waterfall" look
  // Pattern: 2-col, 1, 1, 1, 2-col, 1, 1... to create visual variety
  const getSpanClass = (index: number) => {
    // Make the first item, and every 5th item wide to simulate masonry/waterfall rhythm
    if (index === 0 || index % 5 === 0) {
      return "md:col-span-2";
    }
    return "md:col-span-1";
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 lg:gap-12 relative">
      
      {/* LEFT SIDEBAR: Fixed Compact Timeline */}
      <div className="hidden md:block w-48 shrink-0 relative z-20">
        <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-hide flex flex-col border-r border-stone-800/50">
          {timelineData.map((event) => (
            <button
              key={event.id}
              onClick={() => scrollToEvent(event.id)}
              className={`
                group flex items-center w-full text-left py-2 pl-2 pr-4 border-r-2 transition-all duration-300 relative
                ${activeId === event.id 
                  ? 'border-amber-500 bg-gradient-to-r from-transparent to-amber-900/10' 
                  : 'border-transparent hover:border-stone-700'}
              `}
            >
              <div className={`
                font-mono text-xs transition-colors duration-300
                ${activeId === event.id ? 'text-amber-500 font-bold' : 'text-stone-500 group-hover:text-stone-300'}
              `}>
                {event.time.split(',')[1].trim()}
              </div>
              {activeId === event.id && (
                <Circle className="w-2 h-2 fill-amber-500 text-amber-500 absolute -right-[5px] top-1/2 -translate-y-1/2" />
              )}
            </button>
          ))}
        </div>
        <div className="mt-4 text-[10px] font-mono text-stone-600 uppercase tracking-widest pl-2">
          Time Axis: GMT+2
        </div>
      </div>

      {/* RIGHT CONTENT: Waterfall / Masonry Grid */}
      <div className="flex-1 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto pb-20">
          
          {timelineData.map((event, index) => {
            const spanClass = getSpanClass(index);
            const isActive = activeId === event.id;

            return (
              <div 
                id={`event-${event.id}`}
                key={event.id}
                className={`
                  relative group rounded-lg border transition-all duration-500 flex flex-col overflow-hidden
                  bg-stone-900 hover:bg-[#23201e] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                  ${isActive ? 'border-amber-600/50 shadow-lg ring-1 ring-amber-900/30' : 'border-stone-800'}
                  ${spanClass}
                `}
              >
                {/* Image Area - Always Visible */}
                <div className="relative w-full overflow-hidden">
                  {/* Determine aspect ratio based on span */}
                  <div className={`${spanClass.includes('col-span-2') ? 'aspect-[21/9]' : 'aspect-[4/3]'} w-full relative`}>
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2] contrast-125 group-hover:sepia-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90"></div>
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="backdrop-blur-md bg-black/40 border border-white/10 text-stone-200 px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                        {getIcon(event.category)}
                        {event.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow relative">
                   {/* Date Tab */}
                   <div className="absolute -top-3 left-5 bg-amber-900 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-amber-700 z-10 font-mono">
                     {event.time}
                   </div>

                   <div className="mt-2 mb-3">
                     <h3 className={`font-serif text-xl font-bold leading-tight transition-colors ${isActive ? 'text-amber-500' : 'text-stone-200 group-hover:text-stone-100'}`}>
                       {event.title}
                     </h3>
                   </div>

                   <p className="text-sm text-stone-400 leading-relaxed mb-4 flex-grow font-sans">
                     {event.description}
                   </p>

                   <div className="pt-4 border-t border-stone-800/50 flex items-center justify-between mt-auto">
                      <span className="text-[10px] text-stone-600 font-mono uppercase">
                        Log Entry #{event.id.toString().padStart(3, '0')}
                      </span>
                      {isActive && (
                         <span className="flex items-center gap-1 text-amber-600 text-xs font-bold animate-pulse">
                           ACTIVE <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                         </span>
                      )}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;