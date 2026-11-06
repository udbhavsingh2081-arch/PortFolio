/* ========================================================
   PlanetScene — Interactive 3D Cyber Earth with Orbital Rings
   Centerpiece 3D Earth, Orbiting Moons, and Atmospheric Glow
   ======================================================== */

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Mini Orbiting Moon / Satellite Planet
function OrbitingMoon({ radius = 2.8, speed = 0.5, size = 0.16, color = "#60A5FA", inclination = 0.25 }) {
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (moonRef.current) {
      moonRef.current.position.x = radius * Math.cos(t);
      moonRef.current.position.z = radius * Math.sin(t) * Math.cos(inclination);
      moonRef.current.position.y = radius * Math.sin(t) * Math.sin(inclination);
      moonRef.current.rotation.y = t * 2;
    }
  });

  return (
    <group ref={moonRef}>
      <mesh>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
      {/* Subtle Moon Glow Trail */}
      <mesh>
        <sphereGeometry args={[size * 1.25, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

// Luminous Cyber Orbital Ring with Particles
function CyberOrbitalRing({ innerRadius, outerRadius, tiltX = 1.2, tiltZ = 0.3, color = "#38BDF8" }) {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
    }
  });

  const particleCount = 120;
  const [positions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const r = innerRadius + Math.random() * (outerRadius - innerRadius);
      pos[i * 3] = r * Math.cos(angle);
      pos[i * 3 + 1] = r * Math.sin(angle);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.08;
    }
    return [pos];
  }, [innerRadius, outerRadius]);

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      {/* Ring Mesh */}
      <mesh ref={ringRef}>
        <ringGeometry args={[innerRadius, outerRadius, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbiting Ring Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#F1F5F9"
          transparent
          opacity={0.7}
        />
      </points>
    </group>
  );
}

// Main 3D Earth Globe
function CyberEarth() {
  const earthRef = useRef();
  const atmosphereRef = useRef();
  const gridWireframeRef = useRef();

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.14;
    }
    if (gridWireframeRef.current) {
      gridWireframeRef.current.rotation.y -= delta * 0.06;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Core Earth Sphere (Deep oceanic surface with electric cyan continent highlights) */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#0A1628"
          roughness={0.4}
          metalness={0.6}
          emissive="#0B2545"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Cyber Grid Latitude/Longitude Lines over Earth */}
      <mesh ref={gridWireframeRef}>
        <sphereGeometry args={[1.52, 28, 28]} />
        <meshBasicMaterial
          color="#38BDF8"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Atmospheric Halo Layer (Cyan & Violet Rim Glow) */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.58, 48, 48]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#818CF8"
          emissiveIntensity={0.4}
          transparent
          opacity={0.16}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer Atmospheric Haze */}
      <mesh>
        <sphereGeometry args={[1.72, 32, 32]} />
        <meshBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Primary Cyber Orbital Ring (Cyan) */}
      <CyberOrbitalRing innerRadius={2.1} outerRadius={2.35} tiltX={1.1} tiltZ={0.4} color="#38BDF8" />

      {/* Secondary Orbital Ring (Subtle Purple) */}
      <CyberOrbitalRing innerRadius={2.55} outerRadius={2.7} tiltX={-0.8} tiltZ={-0.6} color="#818CF8" />

      {/* Satellite Moon 1 (Orbiting Cyan Beacon) */}
      <OrbitingMoon radius={2.2} speed={0.4} size={0.12} color="#22D3EE" inclination={0.3} />

      {/* Satellite Moon 2 (Outer Orbiting Violet Planetoid) */}
      <OrbitingMoon radius={3.1} speed={-0.25} size={0.16} color="#818CF8" inclination={-0.4} />
    </group>
  );
}

const PlanetScene = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0.8, 5.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        {/* Direct Sun Glint */}
        <directionalLight position={[5, 4, 3]} intensity={3.0} color="#FFFFFF" />
        {/* Cyber Rim Light: Electric Cyan */}
        <pointLight position={[-5, -2, -3]} intensity={2.0} color="#22D3EE" />
        {/* Cyber Fill Light: Purple Accent */}
        <pointLight position={[3, -4, 2]} intensity={1.2} color="#818CF8" />

        <CyberEarth />
      </Canvas>
    </div>
  );
};

export default PlanetScene;
