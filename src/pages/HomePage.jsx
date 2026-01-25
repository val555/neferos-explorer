// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';
import SectorButton from '../components/galaxy/SectorButton';

export default function HomePage() {
  const { galaxyName, sectors } = galaxyData;
  const ROTATION_DURATION = 300;

  return (
    // J'ajoute pt-20 (padding-top) pour compenser la navbar
    // et flex-col pour bien gérer l'espace vertical
    <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 relative">
      
      {/* 1. TITRE PRINCIPAL (Descendu un peu plus) */}
      <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 text-center z-20 flex flex-col items-center pointer-events-none">
        <h1 className="font-tektur font-normal text-4xl md:text-6xl text-white tracking-widest mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          {galaxyName}
        </h1>
        <span className="font-tektur font-normal text-sm md:text-lg text-neferos-text-secondary tracking-[0.3em] uppercase opacity-70">
          Galaxie
        </span>
      </div>

      {/* 2. Galaxie qui tourne (Un peu plus bas aussi) */}
      <div className="relative w-full max-w-150 md:max-w-200 aspect-square flex items-center justify-center mt-10 md:mt-0"> 
        
        <motion.div 
          className="relative w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: ROTATION_DURATION, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <img 
            src="/images/galaxy-spiral.svg" 
            alt="Galaxie Neferos" 
            className="absolute inset-0 w-full h-full object-contain p-4 opacity-90"
          />

          {sectors.map((sector) => (
            <SectorButton 
              key={sector.id} 
              sector={sector} 
              duration={ROTATION_DURATION}
            />
          ))}
        </motion.div>

        {/* Glow central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neferos-accent/20 rounded-full blur-[60px] pointer-events-none z-0" />

      </div>
    </div>
  );
}
