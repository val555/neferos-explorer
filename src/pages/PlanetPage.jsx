import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';
import PlanetScene from '../components/planet/PlanetScene';

export default function PlanetPage() {
  const { planetId } = useParams();

  // Recherche de la planète
  let foundPlanet = null;
  let parentSystem = null;

  for (const sector of galaxyData.sectors) {
    for (const system of sector.systems) {
      const p = system.planets.find(pl => pl.id === planetId);
      if (p) {
        foundPlanet = p;
        parentSystem = system;
        break;
      }
    }
    if (foundPlanet) break;
  }

  if (!foundPlanet) return <div className="text-center text-white pt-10">Planète introuvable</div>;

  return (
    // Adaptation MainLayout : cadre arrondi, hauteur calculée
    <div className="w-full h-[calc(100vh-8rem)] relative overflow-hidden font-tektur rounded-2xl border border-white/5 bg-black/20">
      
      {/* 1. SCÈNE 3D (FOND) */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
      </div>

      {/* 2. UI LAYER (INTERFACE) */}
      <div className="absolute inset-0 z-10 pointer-events-none p-4 md:p-8 flex flex-col justify-between">
        
        {/* --- HEADER (Haut Gauche & Droite) --- */}
        <div className="flex justify-between items-start pointer-events-auto w-full">
          
          {/* BOUTON RETOUR */}
          <Link 
            to={`/system/${parentSystem.id}`} 
            className="flex items-center gap-2 text-neferos-accent text-sm tracking-widest hover:text-white transition-colors group opacity-80 hover:opacity-100"
          >
            <span className="text-lg">←</span> 
            <span className="uppercase">Retour Système {parentSystem.name}</span>
          </Link>

          {/* LOGO FACTION */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/80 flex items-center justify-center relative">
               <div className="absolute inset-0 border border-white/30 rounded-full scale-110" /> 
               <span className="text-xl md:text-2xl">ᛟ</span> 
            </div>
            <span className="text-lg md:text-2xl font-bold text-white uppercase tracking-widest hidden md:block">
              Faction Saïdour
            </span>
          </motion.div>
        </div>


        {/* --- BLOC INFO PRINCIPAL --- */}
        <div className="flex-1 flex items-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative ml-4 md:ml-16 max-w-md pointer-events-auto mt-10"
          >
            
            <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-neferos-accent to-transparent opacity-50" />
            
            <div className="text-neferos-accent text-xs tracking-[0.5em] mb-2 opacity-80">
              ᚲᛟᚾᚾᛖᚲᛏᛁᛟᚾ
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider mb-1 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {foundPlanet.name}
            </h1>
            
            <h2 className="text-lg md:text-xl text-white/50 uppercase tracking-[0.2em] font-light mb-6">
              Solar System • {parentSystem.name}
            </h2>

            <p className="text-neferos-text-secondary text-sm md:text-base leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-8 bg-black/30 md:bg-transparent p-2 md:p-0 rounded md:rounded-none backdrop-blur-md md:backdrop-blur-none">
              {foundPlanet.description}
              <br/><br/>
              <span className="text-xs opacity-60">
                5th planet in the system. Has only been visited by life in this system twice, they have yet to discover the mining colony under the clouds...
              </span>
            </p>

            <div className="border border-white/20 bg-neferos-bg-surface/60 backdrop-blur-md p-4 rounded-br-2xl relative overflow-hidden group hover:border-neferos-accent/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-neferos-accent" /> 
              
              <p className="text-xs text-white/80 font-mono uppercase tracking-wide">
                <span className="text-neferos-accent font-bold mr-2">WARNING:</span>
                Avoid firing proton torpedos in the clouds to prevent lighting the atmospheric hydrogen on fire.
              </p>
              
              <div className="absolute right-2 top-2 flex flex-col gap-1">
                <div className="w-1 h-1 bg-white/50" />
                <div className="w-1 h-1 bg-white/30" />
                <div className="w-1 h-1 bg-white/10" />
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
