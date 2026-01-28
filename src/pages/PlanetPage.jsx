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
import { H1, H2, Body, Label, TechLabel } from '../components/design-system/Text';
import { spacing, colors, transitions } from '../theme';

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
        <div className="flex justify-between items-start pointer-events-auto w-full gap-4">
          
          {/* BOUTON RETOUR (Gauche) */}
          <Link 
            to={`/system/${parentSystem.id}`} 
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 text-xs md:text-sm tracking-widest uppercase transition-colors duration-200 group opacity-80 hover:opacity-100"
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
            className="flex items-center gap-2 md:gap-4"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neutral-200/80 flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 border border-neutral-200/30 rounded-full scale-110" /> 
              <span className="text-base md:text-lg">⛟</span> 
            </div>
            <span className="text-xs md:text-base font-tektur font-bold text-neutral-0 uppercase tracking-widest hidden sm:block">
              Saison Aidonner
            </span>
          </motion.div>
        </div>

        {/* --- CONTENU PRINCIPAL (Gauche-Centre) --- */}
        <div className="flex-1 flex items-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitions.transition.medium}
            className="pointer-events-auto max-w-md md:max-w-lg ml-0 md:ml-8"
          >
            
            {/* Ligne accent (gauche) */}
            <div className="absolute -left-4 md:-left-8 top-8 bottom-1/2 w-px bg-gradient-to-b from-purple-200 to-transparent opacity-50" />
            
            {/* LABEL TECHNIQUE */}
            <TechLabel className="text-pink-400 mb-3 opacity-80 block">
              ᪺ᴟᶣᴇᶣᴀᴖᴇᶣᴀᴏ
            </TechLabel>

            {/* TITRE PLANiTE (Grand, impactant) */}
            <H1 className="mb-2 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {foundPlanet.name}
            </H1>
            
            {/* SOUS-TITRE SYSTÈME */}
            <H2 color="secondary" className="mb-6 text-sm md:text-base uppercase tracking-widest font-light">
              Système {parentSystem.name} • {parentSystem.starType}
            </H2>

            {/* DESCRIPTION PLANiTE */}
            <Body className="mb-6 md:mb-8 leading-relaxed text-neutral-200 max-w-xs md:max-w-md text-sm md:text-base">
              {foundPlanet.description}
              <span className="block text-xs text-neutral-400 mt-3 opacity-70">
                5e planète du système. N'a été visitée que deux fois par la vie de ce système, ils n'ont pas encore découvert la colonie minière sous les nuages...
              </span>
            </Body>

            {/* PANEL AVERTISSEMENT */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitions.transition.medium}
              className="border border-neutral-600/50 bg-neutral-800/60 backdrop-blur-md p-4 rounded-br-2xl relative overflow-hidden group hover:border-pink-400/50 transition-colors duration-300"
            >
              {/* Accent bar (left) */}
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-400" /> 
              
              {/* Contenu warning */}
              <Label className="text-pink-400 font-bold mr-2 inline-block">ATTENTION :</Label>
              <Body 
                className="text-xs md:text-sm text-neutral-300 inline font-mono"
              >
                Évitez de tirer des torpilles à protons dans les nuages pour éviter d'enflammer l'hydrogène atmosphérique.
              </Body>
              
              {/* Indicateurs d'état (droite) */}
              <div className="absolute right-3 top-3 flex flex-col gap-1">
                <div className="w-1 h-1 bg-neutral-300/50 rounded-full" />
                <div className="w-1 h-1 bg-neutral-300/30 rounded-full" />
                <div className="w-1 h-1 bg-neutral-300/10 rounded-full" />
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* --- FOOTER (Bottom info - Responsive) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitions.transition.medium}
          className="pointer-events-auto mt-auto pt-6 border-t border-neutral-700/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {/* Type de planète */}
            <div>
              <Label color="secondary" className="opacity-70 mb-1">Type</Label>
              <Body className="text-neutral-0 text-sm font-medium">{foundPlanet.type}</Body>
            </div>
            
            {/* Distance */}
            <div>
              <Label color="secondary" className="opacity-70 mb-1">Distance</Label>
              <Body className="text-neutral-0 text-sm font-medium">{foundPlanet.distanceAU} AU</Body>
            </div>
            
            {/* Rayon */}
            <div>
              <Label color="secondary" className="opacity-70 mb-1">Rayon</Label>
              <Body className="text-neutral-0 text-sm font-medium">{foundPlanet.radius}R⊕</Body>
            </div>
            
            {/* Secteur */}
            <div>
              <Label color="secondary" className="opacity-70 mb-1">Secteur</Label>
              <Body className="text-neutral-0 text-sm font-medium">{parentSector.name}</Body>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
