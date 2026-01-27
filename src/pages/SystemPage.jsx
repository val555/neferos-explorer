import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';

export default function SystemPage() {
  const { systemId } = useParams();

  // On cherche le système dans tout le JSON
  let foundSystem = null;
  let parentSector = null;

  for (const sector of galaxyData.sectors) {
    const sys = sector.systems.find(s => s.id === systemId);
    if (sys) {
      foundSystem = sys;
      parentSector = sector;
      break; // Trouvé !
    }
  }

  // Sécurité
  if (!foundSystem) return <div className="text-center text-white pt-10">Système introuvable</div>;

  return (
    // Layout adapté: remplit l'espace restant
    <div className="w-full min-h-[calc(100vh-8rem)] relative flex items-center justify-center overflow-hidden">
      
      {/* HEADER: Nom du secteur et du système */}
      <div className="absolute top-4 left-4 md:left-16 z-20 pointer-events-none text-left">
        <h2 className="text-neferos-accent font-tektur text-sm tracking-[0.2em] uppercase mb-2">
          {parentSector.name}
        </h2>
        <h1 className="text-4xl md:text-6xl font-tektur font-normal text-white uppercase tracking-widest drop-shadow-lg">
          {foundSystem.name}
        </h1>
        <p className="text-white/50 text-sm mt-2 font-tektur tracking-wider">
           Type Stellaire : <span className="text-white">{foundSystem.starType}</span>
        </p>
      </div>

      {/* --- LE SYSTÈME SOLAIRE --- */}
      {/* Correction des dimensions fixes et de la classe corrompue */}
      <div className="relative w-150 h-150 md:w-200 md:h-200 flex items-center justify-center mt-20 md:mt-0 scale-75 md:scale-100">
        
        {/* L'ÉTOILE CENTRALE */}
        <div className={`absolute w-24 h-24 md:w-32 md:h-32 rounded-full shadow-[0_0_80px_currentColor] z-10 flex items-center justify-center
           ${foundSystem.starType === 'Blue Giant' ? 'bg-blue-400 text-blue-500 shadow-blue-500' : ''}
           ${foundSystem.starType === 'Red Dwarf' ? 'bg-red-500 text-red-600 shadow-red-600' : ''}
           ${!['Blue Giant', 'Red Dwarf'].includes(foundSystem.starType) ? 'bg-yellow-400 text-yellow-500 shadow-yellow-500' : ''}
        `}>
           {/* Petit halo interne */}
           <div className="absolute inset-0 bg-white/30 rounded-full blur-md" />
        </div>

        {/* LES ORBITES */}
        {foundSystem.planets.map((planet, index) => {
          // Rayon de l'orbite (distance depuis le centre)
          // Ajustement des diamètres pour tenir dans le container
          const orbitDiameter = 200 + (index * 120); 
          const duration = 20 + (index * 10); // Secondes pour un tour

          return (
            <div 
              key={planet.id}
              className="absolute rounded-full border border-white/10"
              style={{ width: `${orbitDiameter}px`, height: `${orbitDiameter}px` }}
            >
              {/* Rotation */}
              <motion.div
                className="w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
              >
                {/* LA PLANÈTE (Cliquable) */}
                <Link to={`/planet/${planet.id}`} className="group cursor-pointer">
                  {/* Positionnée tout en haut du cercle (top-0 left-1/2) */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white shadow-[0_0_20px_white] hover:scale-125 transition-transform duration-300 z-20"
                  >
                    {/* INFO PLANÈTE AU SURVOL */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-neferos-bg-dark/90 border border-neferos-accent px-3 py-1 rounded text-center min-w-25 whitespace-nowrap">
                        <span className="block text-white font-tektur text-xs font-bold uppercase">{planet.name}</span>
                        <span className="block text-neferos-text-secondary text-[10px]">{planet.type}</span>
                      </div>
                      <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-neferos-accent mx-auto" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
