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
    <div className="w-full h-screen relative bg-black overflow-hidden">
      
      {/* SCÈNE 3D */}
      <div className="absolute inset-0 z-0">
        <PlanetScene planet={foundPlanet} />
      </div>

      {/* UI SUPERPOSÉE */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto mt-16 md:mt-0"
        >
          <Link to={`/system/${parentSystem.id}`} className="text-neferos-accent text-sm font-tektur hover:underline mb-2 block w-fit">
            ← RETOUR SYSTÈME {parentSystem.name}
          </Link>
          <h1 className="text-5xl md:text-8xl font-tektur font-bold text-white uppercase tracking-widest drop-shadow-lg">
            {foundPlanet.name}
          </h1>
          <span className="text-lg md:text-xl text-white/60 font-light tracking-[0.2em] uppercase border-l-2 border-neferos-accent pl-4">
            Type : {foundPlanet.type}
          </span>
        </motion.div>

        {/* Fiche Technique */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-neferos-bg-surface/30 backdrop-blur-md border border-white/10 p-6 rounded-lg max-w-md pointer-events-auto"
        >
          <h3 className="text-neferos-accent font-tektur font-bold mb-4 uppercase">Données Orbitales</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-white/80 font-mono">
            <div>
              <span className="block text-white/40 text-xs uppercase tracking-wider">Distance Étoile</span>
              <span className="text-lg text-white">{foundPlanet.distanceAU} UA</span>
            </div>
            <div>
              <span className="block text-white/40 text-xs uppercase tracking-wider">Rayon</span>
              <span className="text-lg text-white">{foundPlanet.radius} x Terre</span>
            </div>
            <div className="col-span-2 mt-2 pt-4 border-t border-white/10">
              <p className="italic text-white/90 font-sans leading-relaxed">"{foundPlanet.description}"</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
