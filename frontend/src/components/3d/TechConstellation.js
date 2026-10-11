'use client';

import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const techItems = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js 16', category: 'frontend' },
  { name: 'Three.js', category: '3d' },
  { name: 'React Three Fiber', category: '3d' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'database' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'GSAP & ScrollTrigger', category: 'animation' },
  { name: 'Blender 3D', category: '3d' },
  { name: 'Python AI', category: 'ai' },
];

/**
 * Procedural Sprite Badge for Tech Labels.
 * Replaces Drei's <Html> createRoot portals to eliminate React 19 concurrent root unmount conflicts.
 * Renders 100% natively in WebGL with 60 FPS performance and zero network font overhead.
 */
function NodeBadge({ name, isHighlighted }) {
  const texture = useMemo(() => {
    if (typeof document === 'undefined') return null;

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Rounded rectangle pill path
    const r = 20;
    const x = 6;
    const y = 6;
    const w = 244;
    const h = 52;

    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();

    // Dark glass fill
    ctx.fillStyle = isHighlighted
      ? 'rgba(10, 12, 20, 0.95)'
      : 'rgba(5, 6, 8, 0.7)';
    ctx.fill();

    // Metallic gold or subtle border
    ctx.lineWidth = isHighlighted ? 3 : 1;
    ctx.strokeStyle = isHighlighted
      ? '#D4AF37'
      : 'rgba(255, 255, 255, 0.12)';
    ctx.stroke();

    // Label Typography
    ctx.font = 'bold 22px Inter, system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isHighlighted ? '#FFF1BD' : '#777777';
    ctx.fillText(name, 128, 32);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [name, isHighlighted]);

  if (!texture) return null;

  return (
    <sprite position={[0, 0.36, 0]} scale={[1.15, 0.29, 1]}>
      <spriteMaterial map={texture} transparent depthWrite={false} />
    </sprite>
  );
}

function ConstellationCluster({ activeCategory }) {
  const groupRef = useRef();
  const radius = 3.2;

  const nodes = useMemo(() => {
    return techItems.map((tech, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / techItems.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return { ...tech, position: [x, y, z] };
    });
  }, [radius]);

  const linesGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(...nodes[i].position);
        const p2 = new THREE.Vector3(...nodes[j].position);
        if (p1.distanceTo(p2) < 3.2) {
          points.push(p1);
          points.push(p2);
        }
      }
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, [nodes]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#D4AF37" transparent opacity={0.2} />
      </lineSegments>

      {nodes.map((node, i) => {
        const isHighlighted =
          activeCategory === 'All' ||
          node.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          (activeCategory === 'Frontend & 3D' &&
            (node.category === 'frontend' ||
              node.category === '3d' ||
              node.category === 'animation')) ||
          (activeCategory === 'Backend & Cloud' &&
            node.category === 'backend') ||
          (activeCategory === 'Database & AI' &&
            (node.category === 'database' || node.category === 'ai'));

        return (
          <group key={i} position={node.position}>
            {/* Octahedron Node Gem */}
            <mesh>
              <octahedronGeometry args={[0.18, 0]} />
              <meshStandardMaterial
                color={isHighlighted ? '#D4AF37' : '#555555'}
                emissive={isHighlighted ? '#D4AF37' : '#222222'}
                emissiveIntensity={isHighlighted ? 1.5 : 0.2}
                metalness={0.9}
                roughness={0.2}
              />
            </mesh>

            {/* Native WebGL Procedural Label Badge */}
            <NodeBadge name={node.name} isHighlighted={isHighlighted} />
          </group>
        );
      })}
    </group>
  );
}

export default function TechConstellation({ activeCategory = 'All' }) {
  return (
    <div className="w-full h-[450px] sm:h-[550px] relative">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={2.0} color="#FFF5D6" />
          <pointLight position={[-10, -10, -5]} intensity={1.5} color="#D4AF37" />

          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <ConstellationCluster activeCategory={activeCategory} />
          </Float>

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            enablePan={false}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-gray-400/80 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 pointer-events-none">
        Drag in 3D to rotate constellation
      </div>
    </div>
  );
}
