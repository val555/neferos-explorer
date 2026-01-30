import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import galaxyData from '../data/neferos-data.json';
// FIX: Import des composants du Design System pour cohérence
import { H1, TechLabel, Label } from '../components/design-system/Text';

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
  if (!foundSystem) return <div className="text-center text-white pt-24">Système introuvable</div>;

  return (
    // Layout adapté: remplit l'espace restant
    <div className="w-full min-h-[calc(100vh-8rem)] relative flex items-center justify-center overflow-hidden">
      
      {/* HEADER: Nom du secteur et du système */}
      {/* FIX: top-24 (96px) au lieu de top-4 pour passer SOUS la navbar */}
      {/* Utilisation de w-full et px-4 pour assurer que ça ne sorte pas sur mobile */}
      <div className="absolute top-24 left-0 w-full px-4 md:px-16 z-20 pointer-events-none text-left">
        
        {/* Nom du Secteur (TechLabel rose comme PlanetPage) */}
        <TechLabel className="text-pink-400 mb-2 block">
          {parentSector.name}
        </TechLabel>

        {/* Nom du Système (H1 Design System) */}
        <H1 className="text-4xl md:text-6xl text-white drop-shadow-lg mb-2">
          {foundSystem.name}
        </H1>

        {/* Type Stellaire */}
        <div className="flex items-center gap-2">
           <Label className="text-neutral-400">Type Stellaire :</Label>
           <span className="font-tektur text-white">{foundSystem.starType}</span>
        </div>

      </div>

      {/* --- LE SYSTÈME SOLAIRE --- */}
      {/* Ajout d'un mt-16 pour décaler un peu le système vers le bas si besoin, pour ne pas qu'il soit caché par le titre sur mobile */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center mt-16 md:mt-0 scale-75 md:scale-100">
        
        {/* L'ÉTOILE CENTRALE */}
        <div className={`absolute w-16 h-16 md:w-24 md:h-24 rounded-full shadow-[0_0_80px_currentColor] z-10 flex items-center justify-center
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
          // On réduit un peu les tailles de base pour mobile
          const orbitDiameter = 140 + (index * 80); 
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
                <Link to={`/planet/${planet.id}`} className="group cursor-pointer pointer-events-auto">
                  {/* Positionnée tout en haut du cercle (top-0 left-1/2) */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full bg-white shadow-[0_0_15px_white] hover:scale-150 transition-transform duration-300 z-20"
                  >
                    {/* INFO PLANÈTE AU SURVOL */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-neferos-bg-dark/90 border border-neferos-accent px-3 py-1 rounded text-center min-w-[100px] whitespace-nowrap backdrop-blur-md">
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
