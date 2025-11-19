import React, { useState } from 'react';
import { equipmentData } from '../data/equipmentData';
import { Equipment } from '../types';
import { X, Info, Crosshair } from 'lucide-react';

const EquipmentGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {equipmentData.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative bg-stone-800 border border-stone-700 rounded cursor-pointer hover:border-amber-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,119,6,0.2)] overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[0.3] group-hover:sepia-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-3">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-wider bg-black/50 px-1 rounded">{item.type}</span>
                <h3 className="text-stone-100 font-serif font-bold text-lg mt-1 leading-tight">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div 
            className="bg-stone-900 border-2 border-stone-600 rounded-lg w-full max-w-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors z-10 bg-stone-800 p-1 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover sepia-[0.2]" 
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 bg-stone-900">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-amber-900/30 rounded text-amber-500 border border-amber-900">
                        <Crosshair size={20}/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-amber-50">{selectedItem.name}</h2>
                        <span className="text-stone-400 font-mono text-sm">{selectedItem.type}</span>
                    </div>
                </div>
                
                <p className="text-stone-300 mb-6 text-sm leading-relaxed border-l-2 border-stone-700 pl-4 italic">
                  "{selectedItem.description}"
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(selectedItem.specs).map(([key, value]) => (
                    <div key={key} className="bg-stone-800/50 p-3 rounded border border-stone-700">
                      <span className="block text-xs text-amber-600 uppercase font-mono mb-1">{key}</span>
                      <span className="block text-stone-200 font-semibold text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentGrid;