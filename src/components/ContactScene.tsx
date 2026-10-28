import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ContactObject() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.2;
    mesh.current.rotation.y = t * 0.3;
  });

  return (
    <mesh ref={mesh}>
      <dodecahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial
        color="#8B7CFF"
        metalness={0.9}
        roughness={0.15}
        emissive="#8B7CFF"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

export function ContactScene() {
  return (
    <div className="contact-scene">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <pointLight position={[-2, -1, 2]} intensity={0.5} color="#78C8FF" />
          <ContactObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
