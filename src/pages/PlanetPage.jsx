/**
 * 🌍 PLANET PAGE
 * Affichage complet d'une planète avec rendu 3D et UI
 * 
 * DESIGN UPDATE (Deep Refactor):
 * - Layout robuste avec "Safe Zones" pour la navigation latérale (Breadcrumb)
 * - Typographie affinée (hierarchy, spacing)
 * - Conteneurs textuels avec protection de contraste (backdrop)
 * - Structure Grid pour un alignement précis
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
    // Main container: occupe tout l'espace disponible sous la navbar
    // Utilisation de relative pour le positionnement du background 3D
    <div className="w-full h-[calc(100vh-6rem)] relative overflow-hidden font-space-grotesk">
      
      {/* ============================================
          1. SCÈNE 3D (Background Layer)
          ============================================ */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
        {/* Gradient Overlay pour assurer la lisibilité du texte sur les bords */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-transparent to-neutral-900/20 pointer-events-none" />
      </div>

      {/* ============================================
          2. UI LAYER (Grid Layout)
          ============================================ */}
      {/* 
         Structure Grid:
         - Colonne gauche: Navigation Breadcrumb (espace réservé ~80px-100px)
         - Colonne centrale: Contenu principal
         - Colonne droite: Informations secondaires / vide
      */}
      <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_1fr] lg:grid-cols-[140px_minmax(400px,600px)_1fr] h-full">
        
        {/* COLONNE 1: Espace réservé pour le Breadcrumb (Gauche) */}
        <div className="hidden md:block" /> 

        {/* COLONNE 2: Contenu Principal */}
        <div className="flex flex-col justify-center h-full px-6 md:px-0 relative z-20">
          
          {/* HEADER RETOUR (Mobile only - Desktop handled by layout) */}
          <div className="absolute top-4 left-4 md:hidden pointer-events-auto">
             <Link 
              to={`/system/${parentSystem.id}`} 
              className="flex items-center gap-2 text-pink-400 bg-neutral-900/60 backdrop-blur px-3 py-1 rounded-full border border-pink-400/20"
            >
              <span>← Retour</span>
            </Link>
          </div>

          <motion.div 
            variants={variants.staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 md:gap-8 pointer-events-auto"
          >
            {/* BLOC TITRE PRINCIPAL */}
            <div className="relative">
              {/* Ligne décorative verticale */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-purple-200 via-pink-400 to-transparent opacity-60 hidden md:block rounded-full" 
              />

              <motion.div variants={variants.slideInLeft} className="space-y-2">
                <TechLabel className="text-pink-400 opacity-90 text-xs md:text-sm tracking-widest">
                  PLANÈTE GLACIALE • CLASSE IV
                </TechLabel>
                
                <H1 className="text-5xl md:text-6xl lg:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-400 drop-shadow-lg">
                  {foundPlanet.name}
                </H1>

                <div className="flex items-center gap-3 mt-2">
                  <span className="w-12 h-px bg-purple-200/50"></span>
                  <H2 color="secondary" className="text-sm md:text-base tracking-[0.3em] font-light text-purple-100">
                    SYSTÈME {parentSystem.name.toUpperCase()}
                  </H2>
                </div>
              </motion.div>
            </div>

            {/* BLOC DESCRIPTION */}
            <motion.div 
              variants={variants.slideInLeft}
              className="bg-neutral-900/40 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-2xl max-w-xl"
            >
              <Body className="text-neutral-100 text-lg leading-relaxed font-light">
                {foundPlanet.description}
              </Body>
              
              <div className="mt-6 flex items-start gap-3 pt-4 border-t border-white/10">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 shrink-0 animate-pulse" />
                <BodySmall className="text-neutral-300 italic">
                  "5e planète du système. N'a été visitée que deux fois par la vie de ce système, ils n'ont pas encore découvert la colonie minière sous les nuages..."
                </BodySmall>
              </div>
            </motion.div>

            {/* BLOC DANGER */}
            <motion.div 
              variants={variants.scaleUp}
              className="mt-2"
            >
               <div className="inline-flex items-center gap-4 bg-red-950/40 backdrop-blur border border-red-500/30 pl-4 pr-6 py-3 rounded-lg border-l-4 border-l-red-500 hover:bg-red-950/60 transition-colors">
                  <span className="text-2xl">⚠</span>
                  <div className="flex flex-col">
                    <Label className="text-red-400 font-bold mb-0.5">AVERTISSEMENT DE SÉCURITÉ</Label>
                    <span className="text-red-100/80 text-xs md:text-sm font-mono">
                      Atmosphère explosive : Tir de protons interdit.
                    </span>
                  </div>
               </div>
            </motion.div>

          </motion.div>
        </div>

        {/* COLONNE 3: Stats (Bottom Right) */}
        <div className="hidden lg:flex flex-col justify-end pb-12 pr-12 pointer-events-none z-20">
             {/* Stats déplacées en bas à droite pour équilibrer la compo */}
        </div>
        
      </div>

      {/* FOOTER STATS (Mobile/Tablet: Bottom Fixed, Desktop: Bottom Right overlay) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"
      >
        <div className="bg-neutral-900/80 backdrop-blur-lg border-t border-white/10 px-6 py-4 md:px-12 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
             <div className="flex flex-col">
                <Label className="text-neutral-500 mb-1">TYPE</Label>
                <span className="font-tektur text-xl text-white">{foundPlanet.type}</span>
             </div>
             <div className="flex flex-col">
                <Label className="text-neutral-500 mb-1">DISTANCE</Label>
                <span className="font-tektur text-xl text-white">{foundPlanet.distanceAU} AU</span>
             </div>
             <div className="flex flex-col">
                <Label className="text-neutral-500 mb-1">RAYON</Label>
                <span className="font-tektur text-xl text-white">{foundPlanet.radius} R⊕</span>
             </div>
             <div className="flex flex-col">
                <Label className="text-neutral-500 mb-1">SECTEUR</Label>
                <span className="font-tektur text-xl text-purple-300">{parentSector.name}</span>
             </div>
          </div>
        </div>
      </motion.div>
      
      {/* SAISON BADGE (Top Right Absolute) */}
      <div className="absolute top-8 right-8 z-30 pointer-events-auto">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 bg-black/40 backdrop-blur rounded-full pl-2 pr-4 py-2 border border-white/10 hover:border-white/30 transition-colors cursor-help"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs shadow-lg shadow-purple-500/20">
              S3
            </div>
            <span className="font-tektur text-xs tracking-widest uppercase text-neutral-300">
              Saison Aidonner
            </span>
          </motion.div>
      </div>

    </div>
  );
}
