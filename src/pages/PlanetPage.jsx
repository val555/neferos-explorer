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

  if (!foundPlanet) return <div className="pt-40 text-center text-white">Planète introuvable</div>;

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden font-tektur">
      
      {/* 1. SCÈNE 3D (FOND) */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
      </div>

      {/* 2. UI LAYER (INTERFACE) */}
      <div className="absolute inset-0 z-10 pointer-events-none p-8 md:p-12 flex flex-col justify-between">
        
        {/* --- HEADER (Haut Gauche & Droite) --- */}
        <div className="flex justify-between items-start pointer-events-auto w-full">
          
          {/* BOUTON RETOUR (Haut Gauche) */}
          <Link 
            to={`/system/${parentSystem.id}`} 
            className="flex items-center gap-2 text-neferos-accent text-sm tracking-widest hover:text-white transition-colors group opacity-80 hover:opacity-100"
          >
            <span className="text-lg">←</span> 
            <span className="uppercase">Retour Système {parentSystem.name}</span>
          </Link>

          {/* LOGO FACTION (Haut Droite) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Logo Cercle (Simulé) */}
            <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center relative">
               <div className="absolute inset-0 border border-white/30 rounded-full scale-110" /> {/* Cercle externe fin */}
               <span className="text-2xl">ᛟ</span> {/* Rune unicode temporaire */}
            </div>
            <span className="text-2xl font-bold text-white uppercase tracking-widest">
              Faction Saïdour
            </span>
          </motion.div>
        </div>


        {/* --- BLOC INFO PRINCIPAL (Milieu Gauche) --- */}
        <div className="flex-1 flex items-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative ml-16 md:ml-32 max-w-md pointer-events-auto" // Décalage pour laisser place au breadcrumb et à la planète
          >
            
            {/* Ligne Décorative Verticale à gauche du texte */}
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-neferos-accent to-transparent opacity-50" />
            
            {/* Runes / Décoration Haut */}
            <div className="text-neferos-accent text-xs tracking-[0.5em] mb-2 opacity-80">
              ᚲᛟᚾᚾᛖᚲᛏᛁᛟᚾ
            </div>

            {/* TITRE PLANÈTE */}
            <h1 className="text-6xl md:text-7xl font-bold text-white uppercase tracking-wider mb-1 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {foundPlanet.name}
            </h1>
            
            {/* SOUS-TITRE */}
            <h2 className="text-xl text-white/50 uppercase tracking-[0.2em] font-light mb-6">
              Solar System • {parentSystem.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-neferos-text-secondary text-sm md:text-base leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-8">
              {foundPlanet.description}
              <br/><br/>
              <span className="text-xs opacity-60">
                5th planet in the system. Has only been visited by life in this system twice, they have yet to discover the mining colony under the clouds...
              </span>
            </p>

            {/* BOITE D'AVERTISSEMENT (Bas) */}
            <div className="border border-white/20 bg-neferos-bg-surface/40 backdrop-blur-sm p-4 rounded-br-2xl relative overflow-hidden group hover:border-neferos-accent/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-neferos-accent" /> {/* Barre accent gauche */}
              
              <p className="text-xs text-white/80 font-mono uppercase tracking-wide">
                <span className="text-neferos-accent font-bold mr-2">WARNING:</span>
                Avoid firing proton torpedos in the clouds to prevent lighting the atmospheric hydrogen on fire.
              </p>
              
              {/* Petits carrés tech à droite */}
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
