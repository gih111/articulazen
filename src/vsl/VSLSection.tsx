import React from 'react';
import { Play } from 'lucide-react';

interface VSLSectionProps {
  showOfferButton: boolean;
  onShowOffers: () => void;
}

export const VSLSection: React.FC<VSLSectionProps> = ({ showOfferButton, onShowOffers }) => {
  return (
    <section className="py-8 md:py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-orange-800 leading-tight">
          Se você sente dor ao levantar,
          <span className="text-orange-600 block md:inline"> eu gravei isso pensando em você.</span>
        </h2>
        <div className="relative bg-black rounded-lg overflow-hidden mx-auto" style={{ maxWidth: '320px', aspectRatio: '9/16' }}>
          <vturb-smartplayer 
            id="vid-6882458ee82e39bf92b7d0aa" 
            style={{
              display: 'block',
              margin: '0 auto',
              width: '100%',
              maxWidth: '320px'
            }}
          ></vturb-smartplayer>
          <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-1">
            <Play className="w-3 h-3" />
            ASSISTA AGORA
          </div>
        </div>
        
        {/* BOTÃO PARA MOSTRAR OFERTAS */}
        <div className="mt-6 md:mt-8">
          {showOfferButton && (
            <button 
              onClick={onShowOffers}
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all transform hover:scale-105 shadow-lg animate-pulse"
            >
              🔥 QUERO ACABAR COM A DOR AGORA!
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};