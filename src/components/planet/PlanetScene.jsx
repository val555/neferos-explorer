import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import Planet3D from './Planet3D';

function Loader() {
  return <Html center><span className="text-white font-tektur">Chargement...</span></Html>;
}

export default function PlanetScene({ planet }) {
  // Ajustement de la caméra : position Z augmentée (9 -> 12) pour que la planète rentre entièrement sur mobile (portrait)
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 45 }}
      // Force le fond transparent pour laisser le CSS (bg-black) gérer le fond
      // OU force le noir opaque ici. On va forcer le noir opaque pour être sûr.
      gl={{ alpha: false, antialias: true }} 
      onCreated={({ gl }) => {
        gl.setClearColor('#000000', 1); // NOIR PUR
      }}
    >
      {/* Lumières */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      {/* Modification de la lumière arrière : Moins violette, plus "Espace froid" pour éviter l'effet "dégradé violet" */}
      <pointLight position={[-5, 0, -5]} intensity={0.5} color="#8080ff" />

      {/* Fond étoilé 3D */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* La Planète (Avec gestion du chargement) */}
      <group position={[0, 1.5, 0]}>
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
