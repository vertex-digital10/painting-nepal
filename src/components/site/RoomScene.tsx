import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

type Finish = "Matte" | "Satin" | "Gloss" | "Luxury Texture";
type Lighting = "Morning" | "Afternoon" | "Evening" | "Night";

const LIGHT_PRESETS: Record<Lighting, { sky: string; key: string; intensity: number; ambient: number }> = {
  Morning:   { sky: "#fff1d6", key: "#ffd9a3", intensity: 1.0, ambient: 0.55 },
  Afternoon: { sky: "#ffffff", key: "#ffffff", intensity: 1.25, ambient: 0.7 },
  Evening:   { sky: "#ffd1a8", key: "#ff8e5e", intensity: 0.9, ambient: 0.45 },
  Night:     { sky: "#2b3550", key: "#9bb0ff", intensity: 0.55, ambient: 0.25 },
};

function finishMaterial(color: string, finish: Finish) {
  switch (finish) {
    case "Matte":
      return { color, roughness: 0.95, metalness: 0, clearcoat: 0 };
    case "Satin":
      return { color, roughness: 0.55, metalness: 0.02, clearcoat: 0.15 };
    case "Gloss":
      return { color, roughness: 0.15, metalness: 0.08, clearcoat: 0.9, clearcoatRoughness: 0.05 };
    case "Luxury Texture":
      return { color, roughness: 0.8, metalness: 0.05, clearcoat: 0.25, sheen: 0.6 };
  }
}

function Wall({
  position,
  rotation,
  size,
  color,
  finish,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  color: string;
  finish: Finish;
}) {
  const mat = finishMaterial(color, finish);
  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={size} />
      <meshPhysicalMaterial {...(mat as Record<string, unknown>)} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Furniture() {
  return (
    <group>
      {/* Sofa */}
      <mesh position={[0, -1.45, -0.6]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.7, 1.2]} />
        <meshStandardMaterial color="#2c3e57" roughness={0.85} />
      </mesh>
      <mesh position={[0, -0.95, -1.05]} castShadow>
        <boxGeometry args={[3.2, 0.6, 0.3]} />
        <meshStandardMaterial color="#2c3e57" roughness={0.85} />
      </mesh>
      {/* Pillows */}
      <mesh position={[-1, -0.95, -0.55]} castShadow>
        <boxGeometry args={[0.55, 0.45, 0.35]} />
        <meshStandardMaterial color="#e8a33d" roughness={0.9} />
      </mesh>
      <mesh position={[1, -0.95, -0.55]} castShadow>
        <boxGeometry args={[0.55, 0.45, 0.35]} />
        <meshStandardMaterial color="#c4623b" roughness={0.9} />
      </mesh>
      {/* Coffee table */}
      <mesh position={[0, -1.55, 0.6]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.08, 0.7]} />
        <meshStandardMaterial color="#5a3a26" roughness={0.4} metalness={0.05} />
      </mesh>
      {/* Floor lamp */}
      <mesh position={[-2.4, -1.05, -0.2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.8, 12]} />
        <meshStandardMaterial color="#1c1f25" />
      </mesh>
      <mesh position={[-2.4, 0.05, -0.2]} castShadow>
        <coneGeometry args={[0.35, 0.5, 16]} />
        <meshStandardMaterial color="#f4f1ea" emissive="#ffd9a3" emissiveIntensity={0.25} />
      </mesh>
      {/* Plant */}
      <mesh position={[2.3, -1.4, 0.4]} castShadow>
        <cylinderGeometry args={[0.25, 0.35, 0.4, 12]} />
        <meshStandardMaterial color="#3c4147" />
      </mesh>
      <mesh position={[2.3, -0.9, 0.4]} castShadow>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshStandardMaterial color="#3f5e48" roughness={1} />
      </mesh>
    </group>
  );
}

function ArtFrame() {
  return (
    <group position={[0, 0.6, -2.45]}>
      <mesh castShadow>
        <boxGeometry args={[1.4, 0.9, 0.04]} />
        <meshStandardMaterial color="#1c1f25" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.025]}>
        <planeGeometry args={[1.3, 0.8]} />
        <meshStandardMaterial color="#efe3cb" roughness={0.5} />
      </mesh>
    </group>
  );
}

function AutoTilt() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t * 0.15) * 0.05;
  });
  return null;
}

export function RoomScene({
  wallColor,
  ceilingColor,
  floorColor,
  finish,
  lighting,
}: {
  wallColor: string;
  ceilingColor: string;
  floorColor: string;
  finish: Finish;
  lighting: Lighting;
}) {
  const preset = LIGHT_PRESETS[lighting];
  const wallSize: [number, number] = useMemo(() => [6, 4], []);

  return (
    <Canvas shadows camera={{ position: [0, 0.5, 5.5], fov: 50 }} dpr={[1, 2]}>
      <color attach="background" args={[preset.sky]} />
      <ambientLight intensity={preset.ambient} />
      <directionalLight
        position={[3, 4, 3]}
        intensity={preset.intensity}
        color={preset.key}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-2.4, 0.05, -0.2]} intensity={lighting === "Night" ? 1.2 : 0.3} color="#ffd9a3" distance={6} />

      <Suspense fallback={null}>
        {/* Back wall */}
        <Wall position={[0, 0, -2.5]} rotation={[0, 0, 0]} size={wallSize} color={wallColor} finish={finish} />
        {/* Left wall */}
        <Wall position={[-3, 0, 0]} rotation={[0, Math.PI / 2, 0]} size={[5, 4]} color={wallColor} finish={finish} />
        {/* Right wall */}
        <Wall position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]} size={[5, 4]} color={wallColor} finish={finish} />
        {/* Ceiling */}
        <Wall position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]} size={[6, 5]} color={ceilingColor} finish="Matte" />
        {/* Floor */}
        <Wall position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} size={[6, 5]} color={floorColor} finish="Satin" />

        <ArtFrame />
        <Furniture />

        <ContactShadows position={[0, -1.99, 0]} opacity={0.4} scale={8} blur={2.4} far={3} />
        <Environment preset={lighting === "Night" ? "night" : lighting === "Evening" ? "sunset" : "city"} />
        <AutoTilt />
      </Suspense>

      <OrbitControls
        enablePan={false}
        minDistance={3.5}
        maxDistance={8}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, -0.2, 0]}
      />
    </Canvas>
  );
}
