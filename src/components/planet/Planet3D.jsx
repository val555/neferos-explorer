import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// Sous-composant pour quand on a une texture
function TexturedPlanet({ texturePath }) {
  const meshRef = useRef();
  // useLoader est appelé ici, au top niveau de ce sous-composant
  const colorMap = useLoader(TextureLoader, texturePath);

  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={colorMap} roughness={0.8} metalness={0.1} />
    </mesh>
  );
}

// Sous-composant pour quand on n'a PAS de texture (juste couleur)
function ColoredPlanet({ color }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color={color || "#4da6ff"} roughness={0.7} metalness={0.1} />
    </mesh>
  );
}

// Composant Principal qui décide quoi afficher
export default function Planet3D({ planet }) {
  // Si on a une texture définie, on rend le composant texturé
  if (planet.texture) {
    return <TexturedPlanet texturePath={planet.texture} />;
  }

  // Sinon, on rend le composant coloré
  return <ColoredPlanet color={planet.color} />;
}
