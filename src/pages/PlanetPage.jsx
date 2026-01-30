import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';
import PlanetScene from '../components/planet/PlanetScene';
import { H1, Body, BodySmall, Label, TechLabel } from '../components/design-system/Text';
import { variants } from '../theme';

export default function PlanetPage() {
  const { planetId } = useParams();

  // Recherche de la planète
  let foundPlanet = null;
  let parentSystem = null;
  let parentSector = null;

  for (const sector of galaxyData.sectors) {
    for (const system of sector.systems) {
      const p = system.planets.find(pl => pl.id === planetId);
      if (p) {
        foundPlanet = p;
        parentSystem = system;
        parentSector = sector;
        break;
      }
    }
    if (foundPlanet) break;
  }

  if (!foundPlanet) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-white text-2xl">Planète introuvable</h2>
      </div>
    );
  }

  const systemNameDisplay = parentSystem.name.toLowerCase().includes('système') 
    ? parentSystem.name.toUpperCase() 
    : `SYSTÈME ${parentSystem.name.toUpperCase()}`;

  return (
    <div className="w-full h-full min-h-[calc(100vh-6rem)] relative overflow-hidden font-space-grotesk bg-black">
      
      {/* 1. SCÈNE 3D (Background Layer) */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
      </div>

      {/* 2. UI LAYER */}
      <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-1 md:grid-cols-[120px_500px_1fr] h-full">
        
        {/* COLONNE 1: Espace vide (Desktop) */}
        <div className="hidden md:block" /> 

        {/* COLONNE 2: Contenu Principal */}
        <div className="flex flex-col h-full px-4 md:px-0 relative z-20 pt-24 md:pt-32 overflow-y-auto md:overflow-visible pb-32 md:pb-24 scrollbar-hide">

          <motion.div 
            variants={variants.staggerContainer}
            initial="hidden"
            animate="visible"
            // FIX: Sur mobile, on enlève 'justify-between' pour éviter que la description ne remonte trop si le contenu est court.
            // On gère l'espacement manuellement avec des marges.
            // Sur Desktop (md), on remet 'justify-between' car on a la place verticale.
            className="flex flex-col justify-start md:justify-between h-full pointer-events-none"
          >
            
            {/* --- BLOC HAUT : TITRES --- */}
            <div className="relative pointer-events-auto shrink-0">
              {/* Ligne décorative */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-purple-200 via-pink-400 to-transparent opacity-60 hidden md:block rounded-full" 
              />

              <motion.div variants={variants.slideInLeft} className="space-y-1 md:space-y-2">
                <TechLabel className="text-pink-400 opacity-90 text-[10px] md:text-sm tracking-widest bg-neutral-900/50 md:bg-transparent backdrop-blur md:backdrop-filter-none w-fit px-2 py-1 rounded md:p-0 mb-2 md:mb-0">
                  PLANÈTE GLACIALE • CLASSE IV
                </TechLabel>
                
                <H1 className="text-4xl sm:text-5xl md:text-7xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-400 drop-shadow-lg break-words hyphens-auto w-full">
                  {foundPlanet.name}
                </H1>

                <div className="flex items-center gap-3 mt-2">
                  <span className="w-8 md:w-12 h-px bg-purple-200/50"></span>
                  <span className="font-tektur font-light text-[10px] md:text-sm tracking-[0.3em] uppercase text-purple-200">
                    {systemNameDisplay}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* --- BLOC BAS : DESCRIPTION --- */}
            {/* 
               FIX MOBILE : "mt-[50vh]" (ou mt-80) force la description à descendre 
               très bas sur mobile, laissant la moitié haute de l'écran libre pour la planète.
               Sur Desktop (md:), on annule ça avec "md:mt-auto" qui suit le justify-between.
            */}
            <motion.div 
              variants={variants.slideInLeft}
              className="mt-[45vh] md:mt-auto pointer-events-auto bg-neutral-900/80 md:bg-neutral-900/60 backdrop-blur-xl p-5 md:p-6 rounded-xl border border-white/10 md:border-white/5 shadow-2xl max-w-lg"
            >
              <Body className="text-neutral-100 text-base md:text-lg leading-relaxed font-light">
                {foundPlanet.description}
              </Body>
              
              <div className="mt-4 md:mt-6 flex items-start gap-3 pt-4 border-t border-white/10">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 shrink-0 animate-pulse" />
                <BodySmall className="text-neutral-300 italic text-xs md:text-sm">
                  {foundPlanet.information}
                </BodySmall>
              </div>
            </motion.div>

          </motion.div>
        </div>
        
        {/* COLONNE 3: Vide */}
        <div /> 
        
      </div>

      {/* FOOTER STATS (Desktop Only) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="hidden md:block absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"
      >
        <div className="bg-neutral-900/90 backdrop-blur-lg border-t border-white/10 px-4 py-4 md:px-12 md:py-6">
          <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
             <StatItem label="TYPE" value={foundPlanet.type} />
             <StatItem label="DISTANCE" value={`${foundPlanet.distanceAU} AU`} />
             <StatItem label="RAYON" value={`${foundPlanet.radius} R⊕`} />
             <StatItem label="SECTEUR" value={parentSector.name} highlight />
          </div>
        </div>
      </motion.div>
      
      {/* BADGE SAISON (Desktop Only) */}
      <div className="hidden md:flex absolute top-28 right-8 z-30 pointer-events-auto items-center gap-3 bg-black/60 backdrop-blur rounded-full pl-2 pr-4 py-2 border border-white/10">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs shadow-lg shadow-purple-500/20 font-bold">
              S3
            </div>
            <span className="font-tektur text-xs tracking-widest uppercase text-neutral-300">
              Faction Saïdour
            </span>
          </motion.div>
      </div>

    </div>
  );
}

// Helper pour footer (inchangé)
function StatItem({ label, value, highlight = false }) {
  return (
    <div className="flex flex-col border-l-2 border-purple-500/30 pl-4">
      <Label className="text-neutral-500 mb-1 text-xs">{label}</Label>
      <span className={`font-tektur text-xl truncate ${highlight ? 'text-purple-300' : 'text-white'}`}>
        {value}
      </span>
   </div>
  );
}
