/**
 * 🌍 PLANET PAGE
 * Affichage complet d'une plétante avec rendu 3D et UI
 * 
 * Utilise:
 * - Design tokens (colors, spacing, typography, transitions)
 * - Composants réutilisables (Text)
 * - Responsive mobile-first
 * - Framer Motion pour animations
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';
import PlanetScene from '../components/planet/PlanetScene';
import { H1, H2, Body, BodySmall, Label, TechLabel } from '../components/design-system/Text';
import { spacing, colors, transitions, variants } from '../theme';

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
        <H2 color="tertiary">Planète introuvable</H2>
      </div>
    );
  }

  return (
    // Main container: full viewport
    <div className="w-full h-[calc(100vh-4rem)] relative overflow-hidden font-space-grotesk rounded-2xl border border-neutral-700/20 bg-black/20">
      
      {/* ============================================
          1. SCÈNE 3D (Background)
          ============================================ */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
      </div>

      {/* ============================================
          2. UI OVERLAY (Contenu interactif)
          ============================================ */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 md:p-6 lg:p-8">
        
        {/* --- HEADER (Haut de page) --- */}
        <div className="flex justify-between items-start pointer-events-auto w-full gap-4 z-20">
          
          {/* BOUTON RETOUR (Gauche) */}
          <Link 
            to={`/system/${parentSystem.id}`} 
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 text-xs md:text-sm tracking-widest uppercase transition-colors duration-200 group opacity-80 hover:opacity-100 bg-neutral-900/40 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-400/20"
          >
            <motion.span 
              className="text-lg"
              whileHover={{ x: -4 }}
              transition={transitions.transition.micro}
            >
              ←
            </motion.span>
            <span className="hidden sm:inline">Retour au système</span>
            <span className="sm:hidden">Retour</span>
          </Link>

          {/* LOGO FACTION (Droite) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitions.transition.slow}
            className="flex items-center gap-2 md:gap-4 bg-neutral-900/40 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700/30"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-neutral-200/80 flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 border border-neutral-200/30 rounded-full scale-110" /> 
              <span className="text-sm md:text-base">⛟</span> 
            </div>
            <span className="text-xs md:text-sm font-tektur font-bold text-neutral-0 uppercase tracking-widest hidden sm:block">
              Saison Aidonner
            </span>
          </motion.div>
        </div>

        {/* --- CONTENU PRINCIPAL (Gauche-Centre) --- */}
        {/* Ajout d'un conteneur avec max-width et protection overlap */}
        <div className="flex-1 flex items-center pointer-events-none z-10 my-4 md:my-0">
          <motion.div 
            variants={variants.slideInLeft}
            initial="hidden"
            animate="visible"
            className="pointer-events-auto max-w-sm md:max-w-md lg:max-w-lg ml-0 md:ml-4 lg:ml-12 relative"
          >
            
            {/* Background subtil pour améliorer la lisibilité sur la planète */}
            <div className="absolute -inset-6 bg-radial-gradient from-neutral-900/80 to-transparent opacity-80 blur-xl -z-10 rounded-full" />
            
            {/* Ligne accent (gauche) */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -left-4 md:-left-8 top-0 w-px bg-gradient-to-b from-purple-200 via-pink-400 to-transparent opacity-50 hidden md:block" 
            />
            
            {/* LABEL TECHNIQUE */}
            <TechLabel className="text-pink-400 mb-2 opacity-80 block text-[10px] md:text-xs">
              PLANÈTE GLACIALE • CLASSE IV
            </TechLabel>

            {/* TITRE PLANiTE (Grand, impactant) */}
            <H1 className="mb-1 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-4xl md:text-5xl lg:text-7xl">
              {foundPlanet.name}
            </H1>
            
            {/* SOUS-TITRE SYSTÈME */}
            <H2 color="secondary" className="mb-4 text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] font-light flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-200 rounded-full inline-block animate-pulse"></span>
              Système {parentSystem.name}
            </H2>

            {/* DESCRIPTION PLANiTE */}
            <div className="bg-neutral-900/30 backdrop-blur-sm p-4 rounded-lg border-l-2 border-purple-200/50 mb-6">
              <Body className="leading-relaxed text-neutral-100 text-sm md:text-base drop-shadow-md">
                {foundPlanet.description}
              </Body>
              <div className="mt-3 text-xs text-neutral-300/80 italic border-t border-neutral-700/50 pt-2">
                "5e planète du système. N'a été visitée que deux fois par la vie de ce système..."
              </div>
            </div>

            {/* PANEL AVERTISSEMENT (Compact) */}
            <motion.div 
              variants={variants.scaleUp}
              className="border border-red-500/30 bg-red-900/20 backdrop-blur-md p-3 md:p-4 rounded-r-xl border-l-4 border-l-red-500 relative overflow-hidden group max-w-sm"
            >
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-lg">⚠</span>
                <div>
                  <Label className="text-red-400 font-bold block mb-1 text-xs tracking-wider">DANGER ENVIRONNEMENTAL</Label>
                  <BodySmall className="text-neutral-200 leading-tight">
                    Évitez de tirer des torpilles à protons dans les nuages (Hydrogène instable).
                  </BodySmall>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* --- FOOTER (Bottom info - Responsive) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.transition.medium, delay: 0.4 }}
          className="pointer-events-auto mt-auto pt-4 border-t border-neutral-700/30 bg-neutral-900/60 backdrop-blur-md -mx-4 -mb-4 px-4 py-4 md:mx-0 md:mb-0 md:bg-transparent md:backdrop-blur-none md:border-t-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            
            {/* Type */}
            <div className="border-l border-neutral-700 pl-3 md:border-l-0 md:pl-0">
              <Label className="text-purple-200 opacity-70 mb-1 block text-[10px] uppercase">Classification</Label>
              <div className="text-neutral-0 text-sm md:text-base font-tektur font-medium">{foundPlanet.type}</div>
            </div>
            
            {/* Distance */}
            <div className="border-l border-neutral-700 pl-3 md:border-l-0 md:pl-0">
              <Label className="text-purple-200 opacity-70 mb-1 block text-[10px] uppercase">Orbital Dist.</Label>
              <div className="text-neutral-0 text-sm md:text-base font-tektur font-medium">{foundPlanet.distanceAU} AU</div>
            </div>
            
            {/* Rayon */}
            <div className="border-l border-neutral-700 pl-3 md:border-l-0 md:pl-0">
              <Label className="text-purple-200 opacity-70 mb-1 block text-[10px] uppercase">Rayon Planétaire</Label>
              <div className="text-neutral-0 text-sm md:text-base font-tektur font-medium">{foundPlanet.radius} R⊕</div>
            </div>
            
            {/* Secteur */}
            <div className="border-l border-neutral-700 pl-3 md:border-l-0 md:pl-0">
              <Label className="text-purple-200 opacity-70 mb-1 block text-[10px] uppercase">Secteur Galactique</Label>
              <div className="text-neutral-0 text-sm md:text-base font-tektur font-medium">{parentSector.name}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
