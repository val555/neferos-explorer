/* eslint-disable no-unused-vars */
import { motion, useTime, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SectorButton({ sector, duration }) {
  const time = useTime();
  const rotate = useTransform(time, [0, duration * 1000], [0, -360], { clamp: false });

  // LOGIQUE : On cible le premier système du secteur
  const targetSystemId = sector.systems.length > 0 ? sector.systems[0].id : null;
  // Lien vers la page système, ou lien mort si vide
  const linkTarget = targetSystemId ? `/system/${targetSystemId}` : '#';

  return (
    <Link to={linkTarget} className={!targetSystemId ? 'cursor-default pointer-events-none' : ''}>
      {/* CONTENEUR DE POSITIONNEMENT (Tourne avec la galaxie) */}
      <div
        className="absolute w-0 h-0 flex items-center justify-center" // Taille 0x0 pour que le centre soit parfait
        style={{
          top: `${sector.position.y}%`,
          left: `${sector.position.x}%`,
        }}
      >
        {/* CONTENEUR DE CONTRE-ROTATION (Tourne en sens inverse) */}
        <motion.div
          className={`relative flex flex-col items-center group ${targetSystemId ? 'cursor-pointer' : 'opacity-50 grayscale'}`}
          style={{ rotate }} // Applique la rotation inverse ici
        >
          
          {/* 1. LE CERCLE (Doit être parfaitement centré sur le point 0,0 du parent) */}
          <motion.div 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 bg-neferos-bg-surface/80 backdrop-blur-md shadow-[0_0_15px_currentColor] flex items-center justify-center transition-colors group-hover:bg-white/20 z-20"
            style={{ 
              borderColor: sector.color, 
              color: sector.color 
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: targetSystemId ? 1.1 : 1 }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
          </motion.div>

          {/* 2. LE TEXTE (En dessous, attaché au cercle) */}
          <span className="absolute top-full mt-3 font-tektur text-xs md:text-sm tracking-widest uppercase text-neferos-text/80 group-hover:text-white transition-colors text-center whitespace-nowrap bg-neferos-bg-dark/80 px-3 py-1 rounded backdrop-blur-sm border border-white/5 z-10">
            {sector.name}
          </span>

        </motion.div>
      </div>
    </Link>
  );
}
