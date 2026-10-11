'use client';

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Building2, 
  Sun, 
  Moon, 
  Sunset, 
  Layers, 
  Sparkles, 
  Eye, 
  Maximize2,
  CheckCircle2,
  Compass
} from 'lucide-react';

const lightingPresets = {
  'golden-hour': {
    name: 'Golden Hour Sunset',
    icon: Sunset,
    bgGradient: 'from-amber-950/30 via-black to-black',
    ambientColor: '#FFE5B4',
    ambientIntensity: 0.9,
    sunColor: '#FFA336',
    sunIntensity: 2.8,
    sunPos: [8, 6, 6],
    windowGlow: '#FFA040',
    windowIntensity: 1.2,
  },
  'night': {
    name: 'Architectural Twilight',
    icon: Moon,
    bgGradient: 'from-blue-950/30 via-black to-black',
    ambientColor: '#202B45',
    ambientIntensity: 0.6,
    sunColor: '#7099E8',
    sunIntensity: 1.2,
    sunPos: [-6, 8, -6],
    windowGlow: '#FFDE7A',
    windowIntensity: 2.2,
  },
  'daylight': {
    name: 'High Noon Daylight',
    icon: Sun,
    bgGradient: 'from-neutral-900/40 via-black to-black',
    ambientColor: '#FFFFFF',
    ambientIntensity: 1.1,
    sunColor: '#FFFDF0',
    sunIntensity: 2.6,
    sunPos: [6, 12, 4],
    windowGlow: '#E2E8F0',
    windowIntensity: 0.5,
  },
};

const floorLevels = [
  {
    id: 'all',
    label: 'Complete Tower',
    tag: 'Full 24-Story Masterplan',
    units: '86 Luxury Residences',
    area: '240,000 Total Sq.Ft',
    features: 'Dual elevator cores, LEED Platinum certified, private heliport access',
  },
  {
    id: 'penthouse',
    label: 'Penthouse & Sky Villa (Lvl 20-24)',
    tag: 'Signature Sky Collection',
    units: '2 Triplex Penthouses',
    area: '6,200 Sq.Ft per Unit',
    features: '360° skyline panoramas, private rooftop infinity pool, 24ft double-height atrium',
  },
  {
    id: 'sky',
    label: 'Executive Sky Suites (Lvl 10-19)',
    tag: 'Upper Horizon Residences',
    units: '36 Sky Suites',
    area: '2,800 - 3,400 Sq.Ft',
    features: 'Cantilevered sunrise terraces, floor-to-ceiling smart glass, private lift lobby',
  },
  {
    id: 'podium',
    label: 'Podium Garden Residences (Lvl 1-9)',
    tag: 'Urban Oasis Collection',
    units: '48 Garden Apartments',
    area: '1,650 - 2,200 Sq.Ft',
    features: 'Landscaped private terraces, direct wellness club access, double-glazed acoustic glass',
  },
];

/**
 * Architectural Tower 3D Geometry
 */
function ArchitecturalTower({ selectedFloor, lighting }) {
  const towerRef = useRef();

  useFrame((_, delta) => {
    if (towerRef.current) {
      towerRef.current.rotation.y += delta * 0.12;
    }
  });

  const isPenthouseSelected = selectedFloor === 'penthouse' || selectedFloor === 'all';
  const isSkySelected = selectedFloor === 'sky' || selectedFloor === 'all';
  const isPodiumSelected = selectedFloor === 'podium' || selectedFloor === 'all';

  return (
    <group ref={towerRef} position={[0, -1.8, 0]}>
      {/* ---------------------------------------------------- */}
      {/* 1. Landscaped Ground Podium & Reflective Pool        */}
      {/* ---------------------------------------------------- */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[4.8, 0.3, 4.8]} />
        <meshStandardMaterial color="#0C0F17" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Decorative Gold Podium Accent Border */}
      <mesh position={[0, -0.01, 0]}>
        <boxGeometry args={[5.0, 0.05, 5.0]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Reflective Water Pool Feature */}
      <mesh position={[1.4, 0.02, 1.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.6, 1.6]} />
        <meshStandardMaterial color="#0E2A47" roughness={0.05} metalness={0.9} />
      </mesh>

      {/* ---------------------------------------------------- */}
      {/* 2. Podium Residences (Lvl 1 - 9)                      */}
      {/* ---------------------------------------------------- */}
      <group position={[0, 0.8, 0]}>
        {/* Main concrete/obsidian pillar core */}
        <mesh>
          <boxGeometry args={[2.6, 1.5, 2.6]} />
          <meshStandardMaterial
            color="#141824"
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>

        {/* Glass Facades */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.7, 1.3, 2.7]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            transmission={0.7}
            roughness={0.1}
            metalness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Luminous Interior Core */}
        <mesh>
          <boxGeometry args={[2.2, 1.2, 2.2]} />
          <meshBasicMaterial
            color={lighting.windowGlow}
            transparent
            opacity={isPodiumSelected ? lighting.windowIntensity * 0.3 : 0.08}
          />
        </mesh>

        {/* Cantilevered Terraces */}
        {[-0.4, 0.2].map((yOffset, i) => (
          <mesh key={i} position={[0, yOffset, 0]}>
            <boxGeometry args={[3.0, 0.08, 3.0]} />
            <meshStandardMaterial
              color={selectedFloor === 'podium' ? '#D4AF37' : '#1F2432'}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}

        {/* Active Highlight Beacon Ring for Podium */}
        {selectedFloor === 'podium' && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.2, 1.6, 3.2]} />
            <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.6} />
          </mesh>
        )}
      </group>

      {/* ---------------------------------------------------- */}
      {/* 3. Executive Sky Suites (Lvl 10 - 19)                 */}
      {/* ---------------------------------------------------- */}
      <group position={[0, 2.45, 0]}>
        {/* Sleeker Tower Shaft */}
        <mesh>
          <boxGeometry args={[2.2, 1.7, 2.2]} />
          <meshStandardMaterial
            color="#0E121B"
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Double-Glazed Curtain Wall */}
        <mesh>
          <boxGeometry args={[2.3, 1.6, 2.3]} />
          <meshPhysicalMaterial
            color="#C8E0FF"
            transmission={0.8}
            roughness={0.08}
            metalness={0.3}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Sky Floor Floorplates with Metallic Gold Trim */}
        {[-0.6, 0, 0.6].map((yOffset, i) => (
          <group key={i} position={[0, yOffset, 0]}>
            <mesh>
              <boxGeometry args={[2.5, 0.06, 2.5]} />
              <meshStandardMaterial
                color={selectedFloor === 'sky' ? '#D4AF37' : '#1A2030'}
                metalness={0.9}
                roughness={0.2}
              />
            </mesh>
            {/* Balcony Railings */}
            <mesh position={[0, 0.08, 0]}>
              <boxGeometry args={[2.52, 0.1, 2.52]} />
              <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.4} />
            </mesh>
          </group>
        ))}

        {/* Luminous Sky Interior Glow */}
        <mesh>
          <boxGeometry args={[1.9, 1.4, 1.9]} />
          <meshBasicMaterial
            color={lighting.windowGlow}
            transparent
            opacity={isSkySelected ? lighting.windowIntensity * 0.35 : 0.1}
          />
        </mesh>

        {/* Active Highlight Beacon Ring for Sky Suites */}
        {selectedFloor === 'sky' && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.7, 1.8, 2.7]} />
            <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.65} />
          </mesh>
        )}
      </group>

      {/* ---------------------------------------------------- */}
      {/* 4. Penthouse & Sky Villa (Lvl 20 - 24)                */}
      {/* ---------------------------------------------------- */}
      <group position={[0, 3.8, 0]}>
        {/* Exclusive Penthouse Glass Cube */}
        <mesh>
          <boxGeometry args={[1.8, 1.0, 1.8]} />
          <meshPhysicalMaterial
            color="#FFF4D0"
            transmission={0.85}
            roughness={0.05}
            metalness={0.4}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* Interior Penthouse Light Core */}
        <mesh>
          <boxGeometry args={[1.5, 0.8, 1.5]} />
          <meshBasicMaterial
            color="#FFD700"
            transparent
            opacity={isPenthouseSelected ? lighting.windowIntensity * 0.45 : 0.15}
          />
        </mesh>

        {/* Penthouse Balcony Overhang */}
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[2.1, 0.08, 2.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
        </mesh>

        {/* Sky Deck Pergola Canopy */}
        <group position={[0, 0.65, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.0, 0.05, 2.0]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
          </mesh>
          {/* Canopy Structural Stems */}
          {[-0.8, 0.8].map((x, xi) =>
            [-0.8, 0.8].map((z, zi) => (
              <mesh key={`${xi}-${zi}`} position={[x, -0.15, z]}>
                <cylinderGeometry args={[0.02, 0.02, 0.3]} />
                <meshStandardMaterial color="#D4AF37" metalness={0.9} />
              </mesh>
            ))
          )}
        </group>

        {/* Architectural Crown Spire */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.02, 0.08, 0.9, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.98} roughness={0.1} />
        </mesh>

        {/* Active Highlight Beacon Ring for Penthouse */}
        {selectedFloor === 'penthouse' && (
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[2.3, 1.5, 2.3]} />
            <meshBasicMaterial color="#FFD700" wireframe transparent opacity={0.7} />
          </mesh>
        )}
      </group>
    </group>
  );
}

export default function PearlHousing3D() {
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [selectedLighting, setSelectedLighting] = useState('golden-hour');
  const [isRotating, setIsRotating] = useState(true);

  const activeFloorData =
    floorLevels.find((f) => f.id === selectedFloor) || floorLevels[0];
  const activeLightingPreset = lightingPresets[selectedLighting];

  return (
    <div className="rounded-3xl glass-panel border border-[#D4AF37]/30 overflow-hidden shadow-2xl relative bg-black/80">
      
      {/* Header HUD */}
      <div className="p-6 md:p-8 border-b border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 bg-black/60 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Interactive 3D Architectural Model
            </span>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">WebGL 60 FPS</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Pearl Housing — Spatial Tower Explorer
          </h3>
          <p className="text-xs md:text-sm text-neutral-400">
            Rotate the isometric structure, inspect specific residential floor tiers, and simulate daylight atmospheres in real time.
          </p>
        </div>

        {/* Time of Day Lighting Presets */}
        <div className="flex items-center gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800 self-start md:self-center">
          {Object.entries(lightingPresets).map(([key, preset]) => {
            const Icon = preset.icon;
            const isCurrent = selectedLighting === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedLighting(key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
                title={preset.name}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{preset.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative w-full h-[520px] md:h-[620px] bg-gradient-to-b from-black via-[#08090E] to-black">
        {/* Subtle radial ambient atmosphere */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${activeLightingPreset.bgGradient} pointer-events-none transition-all duration-700`}
        />

        <Canvas
          camera={{ position: [5.5, 3.8, 6.2], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <ambientLight
              color={activeLightingPreset.ambientColor}
              intensity={activeLightingPreset.ambientIntensity}
            />
            <directionalLight
              position={activeLightingPreset.sunPos}
              color={activeLightingPreset.sunColor}
              intensity={activeLightingPreset.sunIntensity}
              castShadow
            />
            <pointLight position={[0, 4, 0]} color="#FFD700" intensity={1.5} />
            <pointLight position={[-4, 1, -4]} color="#5070A0" intensity={1.0} />

            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
              <ArchitecturalTower
                selectedFloor={selectedFloor}
                lighting={activeLightingPreset}
              />
            </Float>

            <OrbitControls
              enableZoom={true}
              minDistance={4.5}
              maxDistance={12}
              autoRotate={isRotating}
              autoRotateSpeed={0.8}
              maxPolarAngle={Math.PI / 2 + 0.05}
            />
          </Suspense>
        </Canvas>

        {/* Top-Right Quick Interaction Floating Card */}
        <div className="absolute top-4 right-4 z-20 max-w-xs w-full bg-black/85 backdrop-blur-xl border border-[#D4AF37]/40 rounded-2xl p-4 shadow-2xl hidden sm:block">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              Active Level Specs
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">
              {activeLightingPreset.name.split(' ')[0]} Lighting
            </span>
          </div>

          <h4 className="text-sm font-bold text-white mb-1">
            {activeFloorData.label}
          </h4>
          <p className="text-[11px] text-[#D4AF37] font-semibold mb-2">
            {activeFloorData.tag}
          </p>

          <div className="grid grid-cols-2 gap-2 text-[11px] bg-neutral-900/90 rounded-lg p-2.5 mb-2.5 border border-neutral-800">
            <div>
              <span className="text-neutral-500 block text-[9px] uppercase">Inventory</span>
              <span className="text-white font-semibold">{activeFloorData.units}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[9px] uppercase">Floor Plate</span>
              <span className="text-white font-semibold">{activeFloorData.area}</span>
            </div>
          </div>

          <p className="text-[11px] text-neutral-400 leading-relaxed">
            {activeFloorData.features}
          </p>
        </div>

        {/* Bottom Orbiting Helper Bar */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-xs text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isRotating ? 'Pause Auto-Spin' : 'Resume Auto-Spin'}</span>
          </button>
          <div className="hidden sm:inline text-[11px] text-neutral-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-800 pointer-events-none">
            🖱️ Click &amp; Drag to Orbit • Scroll to Zoom
          </div>
        </div>
      </div>

      {/* Floor Selection Interactive Bottom Strip */}
      <div className="p-6 bg-neutral-950 border-t border-neutral-850">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            Select Floor Tier to Inspect
          </span>
          <span className="text-xs text-[#D4AF37] font-semibold hidden sm:inline">
            Real-time Mesh Elevation Isolation
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {floorLevels.map((floor) => {
            const isSelected = selectedFloor === floor.id;
            return (
              <button
                key={floor.id}
                onClick={() => setSelectedFloor(floor.id)}
                className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#D4AF37]/20 blur-xl pointer-events-none" />
                )}
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-bold leading-tight ${
                      isSelected ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#D4AF37]'
                    }`}
                  >
                    {floor.label.split('(')[0]}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                </div>
                <p className="text-[10px] text-neutral-400 truncate">
                  {floor.tag}
                </p>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
