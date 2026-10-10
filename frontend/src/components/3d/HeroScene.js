'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 1. Central Core Component
 * An interactive metallic gold polyhedral core with an outer wireframe lattice.
 * Responds to mouse pointer coordinates with damped linear interpolation (lerp).
 */
function DigitalCore() {
  const coreRef = useRef();
  const outerCageRef = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.25;
      coreRef.current.rotation.x += delta * 0.15;

      // Mouse interactive tilt (lerp for smooth damping)
      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        state.pointer.y * 0.5,
        0.05
      );
      coreRef.current.rotation.y = THREE.MathUtils.lerp(
        coreRef.current.rotation.y,
        state.pointer.x * 0.5,
        0.05
      );
    }

    if (outerCageRef.current) {
      outerCageRef.current.rotation.y -= delta * 0.15;
      outerCageRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Inner Metallic Gold Crystalline Core */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.92}
          roughness={0.18}
          wireframe={false}
        />
      </mesh>

      {/* Outer Wireframe Transformation Shell */}
      <mesh ref={outerCageRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshStandardMaterial
          color="#F3E5AB"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

/**
 * 2. Orbiting Data Nodes
 * Represents connected enterprise systems and digital pipelines.
 */
function OrbitingNodes({ count = 8, radius = 3.2 }) {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      speed: 0.3 + (i % 3) * 0.1,
      yOffset: Math.sin(i * 1.5) * 0.8,
      size: 0.08 + (i % 2) * 0.04,
    }));
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => {
        const x = Math.cos(node.angle) * radius;
        const z = Math.sin(node.angle) * radius;
        return (
          <mesh key={i} position={[x, node.yOffset, z]}>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial
              color="#FFF1BD"
              emissive="#D4AF37"
              emissiveIntensity={1.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/**
 * 3. Main Exported Canvas Component
 * Fulfills Assignment Sections 8, 9, 11, and 29.
 */
export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[440px] lg:min-h-[580px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]} // Performance optimization for mobile GPUs (Section 29)
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          {/* 3-Point Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={2.2} color="#FFF5D6" />
          <pointLight position={[-8, -8, -4]} intensity={1.5} color="#D4AF37" />
          <pointLight position={[0, 5, 2]} intensity={1.0} color="#F3E5AB" />

          {/* Zero-Gravity Floating Motion */}
          <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
            <DigitalCore />
            <OrbitingNodes />
          </Float>

          {/* Subtle Starfield Particles */}
          <Stars radius={40} depth={30} count={900} factor={3} saturation={0} fade speed={1.2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
