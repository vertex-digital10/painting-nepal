import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function PaintDrop({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.3;
    ref.current.rotation.y += 0.01;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} position={position} castShadow>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshPhysicalMaterial color={color} roughness={0.12} metalness={0.2} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
    </Float>
  );
}

function PaintRoller() {
  const group = useRef<THREE.Group>(null!);
  useFrame((s) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(s.clock.getElapsedTime() * 0.4) * 0.3;
    group.current.position.y = Math.sin(s.clock.getElapsedTime() * 0.8) * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <group ref={group} rotation={[0.4, 0.5, -0.3]}>
        {/* Roller body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.55, 0.55, 2, 64]} />
          <meshStandardMaterial color="#f5f3ee" roughness={0.95} />
        </mesh>
        {/* Roller axis */}
        <mesh position={[0, -1.2, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 1.2, 32]} />
          <meshStandardMaterial color="#8a8e94" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Handle */}
        <mesh position={[0, -2.05, 0]} castShadow>
          <cylinderGeometry args={[0.14, 0.18, 0.8, 32]} />
          <meshStandardMaterial color="#e98b3a" roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroCanvas() {
  const drops = useMemo(
    () => [
      { p: [-3.2, 0.5, -1] as [number, number, number], c: "#E97A5A" },
      { p: [3.2, -0.4, -0.5] as [number, number, number], c: "#3B6E8F" },
      { p: [2.5, 1.6, -2] as [number, number, number], c: "#E8A33D" },
      { p: [-2.6, -1.4, 0] as [number, number, number], c: "#2A3D66" },
    ],
    [],
  );
  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      <Suspense fallback={null}>
        <PaintRoller />
        {drops.map((d, i) => (
          <PaintDrop key={i} position={d.p} color={d.c} speed={1 + i * 0.3} />
        ))}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.35} scale={10} blur={2.4} far={4} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}
