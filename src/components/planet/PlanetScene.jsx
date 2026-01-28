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
    <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
      {/* Lumières */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      {/* Une lumière arrière pour faire un effet de contour (rim light) */}
      <pointLight position={[-5, 0, -5]} intensity={0.5} color="#4a00e0" />

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
