import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function AbstractForm() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.15;
    group.current.rotation.x = Math.sin(t * 0.25) * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.2}>
        <mesh>
          <torusKnotGeometry args={[0.9, 0.28, 128, 16]} />
          <meshStandardMaterial
            color="#9B8CFF"
            metalness={0.85}
            roughness={0.18}
            envMapIntensity={1.2}
          />
        </mesh>
      </Float>
      <mesh position={[0, 0, 0]} scale={0.55}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#78C8FF"
          transmission={0.85}
          thickness={1.5}
          roughness={0.1}
          metalness={0.1}
          ior={1.45}
          transparent
        />
      </mesh>
    </group>
  );
}

export function AboutScene() {
  return (
    <div className="about-scene">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 4, 4]} intensity={1.1} />
          <directionalLight position={[-3, 1, -2]} intensity={0.35} color="#8B7CFF" />
          <AbstractForm />
        </Suspense>
      </Canvas>
    </div>
  );
}
