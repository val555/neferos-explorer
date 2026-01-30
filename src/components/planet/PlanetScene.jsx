import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import Planet3D from './Planet3D';

function Loader() {
  return <Html center><span className="text-white font-tektur">Chargement...</span></Html>;
}

export default function PlanetScene({ planet }) {
  // Gestion responsive de la position de la caméra
  const [cameraPosition, setCameraPosition] = useState([0, 0, 12]); // Valeur par défaut (Mobile)

  useEffect(() => {
    const handleResize = () => {
      // Si largeur > 768px (md point de rupture Tailwind), on rapproche la caméra
      if (window.innerWidth > 768) {
        setCameraPosition([0, 0, 8]); // Z=8 (Plus proche = Planète plus grosse sur Desktop)
      } else {
        setCameraPosition([0, 0, 12]); // Z=12 (Plus loin = Planète plus petite sur Mobile)
      }
    };

    // Appel initial
    handleResize();

    // Écouteur d'événement
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // On passe la position dynamique à la caméra
    // key={cameraPosition[2]} force le re-render de la caméra si la position change brutalement (optionnel mais parfois nécessaire)
    <Canvas camera={{ position: cameraPosition, fov: 45 }}>
      {/* Lumières */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      {/* Une lumière arrière pour faire un effet de contour (rim light) */}
      <pointLight position={[-5, 0, -5]} intensity={0.5} color="#4a00e0" />

      {/* Fond étoilé 3D */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* La Planète */}
      <group position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Planet3D planet={planet} />
        </Suspense>
      </group>

      {/* Contrôles */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={5} 
        maxDistance={25} 
        autoRotate={false}
      />
    </Canvas>
  );
}
