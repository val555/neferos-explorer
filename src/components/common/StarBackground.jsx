import { useState, useEffect } from 'react';

export default function StarBackground() {
  const [starLayers, setStarLayers] = useState({ small: [], medium: [] });

  useEffect(() => {
    // On utilise setTimeout pour sortir de la boucle synchrone du rendu.
    // Cela permet au navigateur d'afficher la frame "vide" d'abord,
    // puis de calculer les étoiles sans bloquer le thread principal.
    const timer = setTimeout(() => {
      const small = Array.from({ length: 150 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
        size: '1px'
      }));

      const medium = Array.from({ length: 50 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8 + 0.2,
        size: '2px'
      }));

      setStarLayers({ small, medium });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-neferos-bg-dark overflow-hidden pointer-events-none">
      {/* On ne rend rien tant que les étoiles ne sont pas calculées pour éviter un "flash" blanc si on avait des valeurs par défaut */}
      {starLayers.small.map((star, i) => (
        <div 
          key={`s-${i}`} 
          className="absolute bg-white rounded-full"
          style={{ 
            top: star.top, 
            left: star.left, 
            width: star.size, 
            height: star.size,
            opacity: star.opacity 
          }} 
        />
      ))}
      
      {starLayers.medium.map((star, i) => (
        <div 
          key={`m-${i}`} 
          className="absolute bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)]"
          style={{ 
            top: star.top, 
            left: star.left, 
            width: star.size, 
            height: star.size,
            opacity: star.opacity 
          }} 
        />
      ))}
    </div>
  );
}
