'use client';

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

const fragranceNotes = [
  { id: 'oud', name: 'Royal Oud Gold', color: '#D4AF37', desc: 'Imperial amber & smoked agarwood' },
  { id: 'rose', name: 'Rose Damascena', color: '#D66D75', desc: 'Velvet bulgarian rose & saffron' },
  { id: 'noir', name: 'Midnight Bergamot', color: '#3A6073', desc: 'Crisp italian citrus & black musk' },
];

function BottleModel({ liquidColor }) {
  const bottleRef = useRef();

  useFrame((_, delta) => {
    if (bottleRef.current) {
      bottleRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={bottleRef} position={[0, -0.4, 0]}>
      {/* 1. Outer Glass Bottle Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 2.2, 0.9]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transmission={0.88}
          roughness={0.08}
          metalness={0.1}
          thickness={0.8}
          ior={1.52}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* 2. Inner Fragrance Liquid Core */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[1.4, 1.8, 0.72]} />
        <meshStandardMaterial
          color={liquidColor}
          emissive={liquidColor}
          emissiveIntensity={0.6}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* 3. Gold Atomizer Neck Collar */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.3, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* 4. Luxury Metallic Gold Cap */}
      <mesh position={[0, 1.75, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.7, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.96}
          roughness={0.12}
        />
      </mesh>

      {/* 5. Minimalist Wanaromah Gold Brand Plaque */}
      <mesh position={[0, 0, 0.46]}>
        <planeGeometry args={[1.1, 0.55]} />
        <meshStandardMaterial
          color="#07090E"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function PerfumeBottle3D() {
  const [selectedNote, setSelectedNote] = useState(fragranceNotes[0]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[420px] sm:h-[480px] relative rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/30 bg-gradient-to-b from-[#0F121C] to-[#050608]">
        <Canvas
          camera={{ position: [0, 0.5, 4.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFF5D6" />
            <pointLight position={[-6, -4, -4]} intensity={1.5} color="#D4AF37" />
            <pointLight position={[0, 4, 2]} intensity={1.0} color="#FFFFFF" />

            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
              <BottleModel liquidColor={selectedNote.color} />
            </Float>

            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-3 left-4 text-[11px] text-gray-400 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 pointer-events-none">
          Drag to rotate bottle in 360°
        </div>
      </div>

      <div className="w-full mt-4 p-4 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
            Interactive Customizer
          </span>
          <p className="text-xs font-bold text-white mt-0.5">
            Active Note: <span className="text-[#D4AF37]">{selectedNote.name}</span>
          </p>
          <p className="text-[11px] text-gray-400">{selectedNote.desc}</p>
        </div>

        <div className="flex gap-2">
          {fragranceNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                selectedNote.id === note.id
                  ? 'bg-white/10 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/20 scale-105'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <span
                className="w-3 h-3 rounded-full border border-white/20"
                style={{ backgroundColor: note.color }}
              />
              <span>{note.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
