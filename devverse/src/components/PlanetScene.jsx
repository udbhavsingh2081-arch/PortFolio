/* ========================================================
   PlanetScene — Realistic Astronomical Orbital System
   NASA / Aerospace Engineering Celestial Visualization
   ======================================================== */

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SatelliteMesh({ radius, speed, inclination, color = "#38BDF8" }) {
  const satelliteRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (satelliteRef.current) {
      satelliteRef.current.position.x = radius * Math.cos(t);
      satelliteRef.current.position.z = radius * Math.sin(t) * Math.cos(inclination);
      satelliteRef.current.position.y = radius * Math.sin(t) * Math.sin(inclination);
      satelliteRef.current.rotation.y = -t;
    }
  });

  return (
    <group ref={satelliteRef}>
      {/* Satellite Central Bus */}
      <mesh>
        <boxGeometry args={[0.09, 0.09, 0.09]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Solar Array Panels */}
      <mesh position={[0.13, 0, 0]}>
        <boxGeometry args={[0.14, 0.04, 0.005]} />
        <meshStandardMaterial color="#38BDF8" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[-0.13, 0, 0]}>
        <boxGeometry args={[0.14, 0.04, 0.005]} />
        <meshStandardMaterial color="#38BDF8" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Telemetry Transponder Light */}
      <mesh position={[0, 0.06, 0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function OrbitalRing({ radius, inclination = 0, opacity = 0.25 }) {
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(
        radius * Math.cos(theta),
        radius * Math.sin(theta) * Math.sin(inclination),
        radius * Math.sin(theta) * Math.cos(inclination)
      )
    );
  }
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial
        color="#38BDF8"
        transparent={true}
        opacity={opacity}
        linewidth={1}
      />
    </line>
  );
}

function ScientificCelestialBody() {
  const planetRef = useRef();
  const atmosphereRef = useRef();
  const cloudRef = useRef();

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.06;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.07;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Core Planetary Sphere */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#0A1220"
          roughness={0.7}
          metalness={0.3}
          emissive="#0B1C33"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Atmospheric Thin-Layer Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.54, 48, 48]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={0.25}
          wireframe={true}
          transparent={true}
          opacity={0.12}
        />
      </mesh>

      {/* Outer Atmospheric Haze */}
      <mesh>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshBasicMaterial
          color="#38BDF8"
          transparent={true}
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Mathematical Orbital Trajectories */}
      <OrbitalRing radius={2.3} inclination={Math.PI * 0.22} opacity={0.3} />
      <OrbitalRing radius={2.9} inclination={-Math.PI * 0.15} opacity={0.2} />
      <OrbitalRing radius={3.4} inclination={Math.PI * 0.08} opacity={0.15} />

      {/* Scientific Satellites */}
      <SatelliteMesh radius={2.3} speed={0.45} inclination={Math.PI * 0.22} color="#38BDF8" />
      <SatelliteMesh radius={2.9} speed={-0.32} inclination={-Math.PI * 0.15} color="#60A5FA" />
      <SatelliteMesh radius={3.4} speed={0.24} inclination={Math.PI * 0.08} color="#818CF8" />
    </group>
  );
}

const PlanetScene = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1.4, 6.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.45} />
        {/* Directional Sun Vector */}
        <directionalLight position={[6, 4, 3]} intensity={2.8} color="#FFFFFF" />
        {/* Subtle Starlight Rim Lighting */}
        <pointLight position={[-5, -3, -4]} intensity={1.2} color="#38BDF8" />
        <pointLight position={[0, -5, 2]} intensity={0.6} color="#60A5FA" />

        <ScientificCelestialBody />
      </Canvas>
    </div>
  );
};

export default PlanetScene;
