/**
 * 🌍 PLANET PAGE
 * Affichage complet d'une planète avec rendu 3D et UI
 * 
 * DESIGN UPDATE (Deep Refactor):
 * - Mobile-first layout optimizations
 * - Text overlap fixes
 * - Better planet visibility
 * - Corrected data display
 */


import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';
import PlanetScene from '../components/planet/PlanetScene';
import { H1, H2, Body, BodySmall, Label, TechLabel } from '../components/design-system/Text';
import {    variants } from '../theme';


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


  // Correction du texte "Système" doublé
  // Si le nom du système contient déjà "Système", on ne l'affiche pas deux fois
  const systemNameDisplay = parentSystem.name.toLowerCase().includes('système') 
    ? parentSystem.name.toUpperCase() 
    : `SYSTÈME ${parentSystem.name.toUpperCase()}`;


  return (
    // Main container: occupe tout l'espace disponible sous la navbar
    <div className="w-full h-[calc(100vh-6rem)] relative overflow-hidden font-space-grotesk bg-neutral-900">
      
      {/* ============================================
          1. SCÈNE 3D (Background Layer)
          ============================================ */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
        {/* Gradient Overlay RENFORCÉ pour mobile */}
        {/* Sur mobile, on veut assombrir le haut et le bas pour que le texte soit lisible */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-transparent to-neutral-900/90 md:bg-gradient-to-r md:from-neutral-900/90 md:via-transparent md:to-neutral-900/20 pointer-events-none" />
      </div>


      {/* ============================================
          2. UI LAYER (Grid Layout)
          ============================================ */}
      {/* 
         Structure Grid modifiée pour mobile:
         - Mobile: Flex column simple avec padding top conséquent
         - Desktop: Grid précédente conservée
      */}
      <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] lg:grid-cols-[140px_minmax(400px,600px)_1fr] h-full">
        
        {/* COLONNE 1: Espace réservé pour le Breadcrumb (Desktop uniquement) */}
        <div className="hidden md:block" /> 


        {/* COLONNE 2: Contenu Principal */}
        {/* Modification Layout Mobile: justify-start -> min-h-full pour permettre le justify-between interne */}
        <div className="flex flex-col justify-start md:justify-center h-full px-4 md:px-0 relative z-20 pt-4 md:pt-0 overflow-y-auto md:overflow-visible pb-32 md:pb-0 scrollbar-hide">


          <motion.div 
            variants={variants.staggerContainer}
            initial="hidden"
            animate="visible"
            // Layout FLEX vertical qui sépare le haut (titre) du bas (description)
            // min-h-full permet de forcer le contenu à prendre toute la hauteur dispo (si peu de contenu)
            className="flex flex-col justify-between md:justify-center gap-4 md:gap-8 pointer-events-auto min-h-full md:min-h-0"
          >
            {/* BLOC TITRE PRINCIPAL (En haut) */}
            <div className="relative">
              {/* Ligne décorative verticale (Desktop) */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-purple-200 via-pink-400 to-transparent opacity-60 hidden md:block rounded-full" 
              />


              <motion.div variants={variants.slideInLeft} className="space-y-1 md:space-y-2">
                {/* TechLabel déplacé sous le bouton retour sur mobile */}
                <TechLabel className="text-pink-400 opacity-90 text-[10px] md:text-sm tracking-widest bg-neutral-900/50 md:bg-transparent backdrop-blur md:backdrop-filter-none w-fit px-2 py-1 rounded md:p-0 mb-2 md:mb-0">
                  PLANÈTE GLACIALE • CLASSE IV
                </TechLabel>
                
                {/* Titre ajusté pour mobile (break-words pour éviter la coupure "D...") */}
                <H1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-400 drop-shadow-lg break-words hyphens-auto w-full max-w-[90vw]">
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


            {/* BLOC DESCRIPTION (En bas grâce au justify-between) */}
            {/* Suppression du mt-[...] magique */}
            <motion.div 
              variants={variants.slideInLeft}
              className="bg-neutral-900/80 md:bg-neutral-900/40 backdrop-blur-xl p-5 md:p-6 rounded-xl border border-white/10 md:border-white/5 shadow-2xl max-w-xl md:mt-0"
            >
              <Body className="text-neutral-100 text-base md:text-lg leading-relaxed font-light">
                {foundPlanet.description}
              </Body>
              
              <div className="mt-4 md:mt-6 flex items-start gap-3 pt-4 border-t border-white/10">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 shrink-0 animate-pulse" />
                <BodySmall className="text-neutral-300 italic text-xs md:text-sm">
                  "5e planète du système. N'a été visitée que deux fois par la vie de ce système..."
                </BodySmall>
              </div>
            </motion.div>


            {/* BLOC DANGER (Caché sur mobile) */}
            <motion.div 
              variants={variants.scaleUp}
              className="mt-2 hidden md:block"
            >
               <div className="inline-flex items-center gap-3 md:gap-4 bg-red-950/80 md:bg-red-950/40 backdrop-blur border border-red-500/30 pl-3 pr-5 py-3 rounded-lg border-l-4 border-l-red-500 hover:bg-red-950/60 transition-colors max-w-full">
                  <span className="text-xl md:text-2xl shrink-0">⚠</span>
                  <div className="flex flex-col min-w-0">
                    <Label className="text-red-400 font-bold mb-0.5 text-[10px] md:text-xs">AVERTISSEMENT DE SÉCURITÉ</Label>
                    <span className="text-red-100/80 text-xs md:text-sm font-mono truncate md:whitespace-normal">
                      Atmosphère explosive : Tir interdit.
                    </span>
                  </div>
               </div>
            </motion.div>


          </motion.div>
        </div>
        
      </div>


      {/* FOOTER STATS (Mobile: Grid 2x2 compacte, Desktop: Bar horizontale) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="hidden md:block absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"
      >
        <div className="bg-neutral-900/90 backdrop-blur-lg border-t border-white/10 px-4 py-4 md:px-12 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
             <div className="flex flex-col border-l-2 border-purple-500/30 pl-3 md:border-0 md:pl-0">
                <Label className="text-neutral-500 mb-1 text-[10px] md:text-xs">TYPE</Label>
                <span className="font-tektur text-sm md:text-xl text-white truncate">{foundPlanet.type}</span>
             </div>
             <div className="flex flex-col border-l-2 border-purple-500/30 pl-3 md:border-0 md:pl-0">
                <Label className="text-neutral-500 mb-1 text-[10px] md:text-xs">DISTANCE</Label>
                <span className="font-tektur text-sm md:text-xl text-white">{foundPlanet.distanceAU} AU</span>
             </div>
             <div className="flex flex-col border-l-2 border-purple-500/30 pl-3 md:border-0 md:pl-0">
                <Label className="text-neutral-500 mb-1 text-[10px] md:text-xs">RAYON</Label>
                <span className="font-tektur text-sm md:text-xl text-white">{foundPlanet.radius} R⊕</span>
             </div>
             <div className="flex flex-col border-l-2 border-purple-500/30 pl-3 md:border-0 md:pl-0">
                <Label className="text-neutral-500 mb-1 text-[10px] md:text-xs">SECTEUR</Label>
                <span className="font-tektur text-sm md:text-xl text-purple-300 truncate">{parentSector.name}</span>
             </div>
          </div>
        </div>
      </motion.div>
      
      {/* SAISON BADGE (Top Right Absolute) - Caché sur très petits écrans si besoin, ou réduit */}
      <div className="hidden md:absolute top-4 right-4 md:top-8 md:right-8 z-30 pointer-events-auto">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 md:gap-3 bg-black/60 backdrop-blur rounded-full pl-1 pr-3 py-1 md:pl-2 md:pr-4 md:py-2 border border-white/10"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[10px] md:text-xs shadow-lg shadow-purple-500/20 font-bold">
              S3
            </div>
            <span className="font-tektur text-[10px] md:text-xs tracking-widest uppercase text-neutral-300 hidden sm:block">
              Faction Saïdour
            </span>
          </motion.div>
      </div>


    </div>
  );
}
