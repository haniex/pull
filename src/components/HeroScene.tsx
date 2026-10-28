import { useRef, Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
  MeshDistortMaterial,
} from '@react-three/drei';
import * as THREE from 'three';
import type { MutableRefObject, PointerEvent, TouchEvent } from 'react';

function OrganicSculpture({
  mouse,
  reducedMotion,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const knot = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const intro = useRef(0);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    if (intro.current < 1) {
      intro.current = Math.min(1, intro.current + delta * 0.55);
    }
    const ease = 1 - Math.pow(1 - intro.current, 3);
    group.current.scale.setScalar(0.35 + ease * 0.8);
    group.current.position.y = (1 - ease) * 0.6;

    target.current.x += (mouse.current.x * 0.38 - target.current.x) * 0.035;
    target.current.y += (mouse.current.y * 0.22 - target.current.y) * 0.035;

    if (reducedMotion) {
      group.current.rotation.y = target.current.x * 0.5;
      group.current.rotation.x = target.current.y * 0.35;
      return;
    }

    group.current.rotation.y = t * 0.07 + target.current.x;
    group.current.rotation.x = Math.sin(t * 0.12) * 0.06 + target.current.y;

    if (core.current) {
      core.current.position.y = Math.sin(t * 0.55) * 0.08;
      core.current.rotation.y = t * 0.1;
      core.current.rotation.z = Math.sin(t * 0.2) * 0.08;
    }
    if (knot.current) {
      knot.current.rotation.x = t * 0.18;
      knot.current.rotation.y = t * 0.12;
    }
    if (ringA.current) {
      ringA.current.rotation.z = -t * 0.14;
      ringA.current.rotation.x = 1.15 + Math.sin(t * 0.25) * 0.12;
    }
    if (ringB.current) {
      ringB.current.rotation.y = t * 0.09;
      ringB.current.rotation.z = 0.4 + Math.sin(t * 0.18) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core} scale={1.05}>
        <icosahedronGeometry args={[0.92, 16]} />
        <MeshDistortMaterial
          color="#c8c4ff"
          roughness={0.08}
          metalness={0.15}
          distort={0.35}
          speed={reducedMotion ? 0 : 1.6}
          envMapIntensity={1.2}
          transparent
          opacity={0.92}
        />
      </mesh>

      <mesh scale={1.12}>
        <icosahedronGeometry args={[0.92, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          thickness={1.4}
          chromaticAberration={0.18}
          anisotropy={0.3}
          distortion={0.25}
          distortionScale={0.4}
          temporalDistortion={0.1}
          iridescence={0.45}
          iridescenceIOR={1.25}
          iridescenceThicknessRange={[120, 420]}
          color="#e0dcff"
          attenuationColor="#8B7CFF"
          attenuationDistance={0.6}
          roughness={0.06}
        />
      </mesh>

      <mesh ref={knot} scale={0.95}>
        <torusKnotGeometry args={[0.95, 0.12, 180, 24, 2, 3]} />
        <meshStandardMaterial
          color="#e8eaf2"
          metalness={1}
          roughness={0.07}
          envMapIntensity={2}
        />
      </mesh>

      <mesh ref={ringA} rotation={[1.2, 0.3, 0]} scale={1.55}>
        <torusGeometry args={[1.2, 0.035, 24, 100]} />
        <meshStandardMaterial
          color="#d0d4e0"
          metalness={1}
          roughness={0.1}
          envMapIntensity={1.7}
        />
      </mesh>

      <mesh ref={ringB} rotation={[0.6, 0.8, 0.2]} scale={1.85}>
        <torusGeometry args={[1.15, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#82D5FF"
          metalness={0.95}
          roughness={0.14}
          emissive="#82D5FF"
          emissiveIntensity={0.18}
        />
      </mesh>

      <mesh rotation={[1.0, 0.5, 0.4]} scale={2.15}>
        <torusGeometry args={[1.05, 0.008, 12, 80]} />
        <meshStandardMaterial
          color="#C8CCD8"
          metalness={0.98}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.1, 0.15, 0]} scale={0.62}>
        <torusGeometry args={[0.95, 0.015, 16, 64]} />
        <meshStandardMaterial
          color="#8B7CFF"
          metalness={0.9}
          roughness={0.18}
          emissive="#8B7CFF"
          emissiveIntensity={0.22}
        />
      </mesh>

      {!reducedMotion && (
        <>
          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.7}>
            <mesh position={[1.9, 0.75, 0.35]} scale={0.18}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#8B7CFF" metalness={0.97} roughness={0.08} />
            </mesh>
          </Float>
          <Float speed={1.15} rotationIntensity={0.45} floatIntensity={0.55}>
            <mesh position={[-1.75, -0.45, 0.55]} scale={0.14}>
              <tetrahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#82D5FF" metalness={0.94} roughness={0.12} />
            </mesh>
          </Float>
          <Float speed={1.7} rotationIntensity={0.35} floatIntensity={0.8}>
            <mesh position={[0.85, -1.2, -0.45]} scale={0.12}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#f0f0f6" metalness={1} roughness={0.05} />
            </mesh>
          </Float>
          <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.5}>
            <mesh position={[-0.95, 1.15, -0.5]} scale={0.09}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#c8c4ff" metalness={0.92} roughness={0.1} />
            </mesh>
          </Float>
        </>
      )}
    </group>
  );
}

function SceneContent({
  mouse,
  reducedMotion,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.22} />
      <directionalLight position={[5, 7, 4]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-5, 1.5, -3]} intensity={0.45} color="#8B7CFF" />
      <pointLight position={[0, -2.2, 3.5]} intensity={0.7} color="#82D5FF" distance={12} />
      <spotLight position={[0, 5, 2.5]} angle={0.32} penumbra={0.75} intensity={0.55} color="#ffffff" />
      <Environment preset="city" environmentIntensity={0.65} />
      <OrganicSculpture mouse={mouse} reducedMotion={reducedMotion} />
      <ContactShadows position={[0, -1.95, 0]} opacity={0.38} scale={11} blur={2.6} far={4.5} />
    </>
  );
}

function CameraRig({
  mouse,
  reducedMotion,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  const { camera } = useThree();
  const base = useMemo(() => new THREE.Vector3(0, 0.12, 5.1), []);

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    camera.position.x = base.x + Math.sin(t * 0.1) * 0.08 + mouse.current.x * 0.15;
    camera.position.y = base.y + Math.cos(t * 0.08) * 0.05 + mouse.current.y * 0.08;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function FallbackVisual() {
  return (
    <div className="hero-fallback">
      <div className="hero-fallback__orb" />
      <div className="hero-fallback__ring" />
      <div className="hero-fallback__ring hero-fallback__ring--2" />
    </div>
  );
}

export function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const [webglOk, setWebglOk] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglOk(false);
    } catch {
      setWebglOk(false);
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.('change', onChange);
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const handlePointerMove = (e: PointerEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!e.touches[0]) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const touch = e.touches[0];
    mouse.current.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
  };

  if (!webglOk) {
    return (
      <div className="hero-scene">
        <FallbackVisual />
      </div>
    );
  }

  return (
    <div className="hero-scene" onPointerMove={handlePointerMove} onTouchMove={handleTouchMove}>
      <Canvas
        camera={{ position: [0, 0.12, 5.1], fov: 36, near: 0.1, far: 40 }}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x07080c, 0);
        }}
      >
        <Suspense fallback={null}>
          <SceneContent mouse={mouse} reducedMotion={reducedMotion} />
          <CameraRig mouse={mouse} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
