/* ============================================
   DeveloperDesk — Clean, Light Minimalist 3D Desk
   Natural daylight studio aesthetic
   ============================================ */

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";

function InteractiveItem({
  children,
  sectionId,
  label,
  position = [0, 0, 0],
  onObjectClick,
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (onObjectClick) onObjectClick(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <group
      position={position}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      {children(hovered)}
      {hovered && (
        <Html position={[0, 1.1, 0]} center distanceFactor={12} pointerEvents="none">
          <div className="bg-white/95 text-slate-800 text-xs font-sans font-medium px-3 py-1.5 rounded-lg border border-slate-200 shadow-md whitespace-nowrap backdrop-blur-xs">
            Open {label} →
          </div>
        </Html>
      )}
    </group>
  );
}

// 1. Laptop Component (Projects) — Silver MacBook style
function Laptop({ hovered }) {
  return (
    <group>
      {/* Base */}
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[1.5, 0.06, 1]} />
        <meshStandardMaterial
          color={hovered ? "#3B82F6" : "#E2E8F0"}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      {/* Trackpad */}
      <mesh position={[0, 0.075, 0.25]}>
        <boxGeometry args={[0.45, 0.01, 0.3]} />
        <meshStandardMaterial color="#CBD5E1" roughness={0.4} />
      </mesh>
      {/* Keyboard Bed */}
      <mesh position={[0, 0.075, -0.12]}>
        <boxGeometry args={[1.3, 0.01, 0.45]} />
        <meshStandardMaterial color="#334155" roughness={0.5} />
      </mesh>
      {/* Screen Lid */}
      <group position={[0, 0.07, -0.5]} rotation={[-Math.PI / 14, 0, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.5, 1, 0.04]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Screen Content */}
        <mesh position={[0, 0.5, 0.022]}>
          <planeGeometry args={[1.4, 0.9]} />
          <meshStandardMaterial
            color={hovered ? "#2563EB" : "#1E293B"}
            emissive={hovered ? "#1D4ED8" : "#0F172A"}
            emissiveIntensity={hovered ? 0.6 : 0.2}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}

// 2. Books Stack (Education)
function Books({ hovered }) {
  return (
    <group>
      {/* Bottom book */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.9, 0.1, 1.1]} />
        <meshStandardMaterial
          color={hovered ? "#2563EB" : "#3B82F6"}
          roughness={0.5}
        />
      </mesh>
      {/* Middle book */}
      <mesh position={[0.04, 0.14, 0.02]} rotation={[0, 0.08, 0]}>
        <boxGeometry args={[0.85, 0.09, 1.05]} />
        <meshStandardMaterial
          color={hovered ? "#4F46E5" : "#6366F1"}
          roughness={0.5}
        />
      </mesh>
      {/* Top book */}
      <mesh position={[-0.02, 0.22, 0.03]} rotation={[0, -0.12, 0]}>
        <boxGeometry args={[0.8, 0.07, 1]} />
        <meshStandardMaterial
          color={hovered ? "#7C3AED" : "#A855F7"}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}

// 3. Trophy (Achievements)
function Trophy({ hovered }) {
  const trophyRef = useRef();
  useFrame((_, delta) => {
    if (hovered && trophyRef.current) {
      trophyRef.current.rotation.y += delta * 2;
    }
  });

  return (
    <group ref={trophyRef}>
      <mesh position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.22, 0.26, 0.14, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.16, 16]} />
        <meshStandardMaterial color="#EAB308" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.44, 0]}>
        <cylinderGeometry args={[0.26, 0.13, 0.3, 16]} />
        <meshStandardMaterial
          color="#F59E0B"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

// 4. Terminal Monitor (Coding Profiles)
function Terminal({ hovered }) {
  return (
    <group>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.04, 16]} />
        <meshStandardMaterial color="#64748B" />
      </mesh>
      <mesh position={[0, 0.32, -0.04]}>
        <cylinderGeometry args={[0.04, 0.04, 0.55, 16]} />
        <meshStandardMaterial color="#64748B" />
      </mesh>
      <mesh position={[0, 0.58, 0]}>
        <boxGeometry args={[1.2, 0.82, 0.06]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      <mesh position={[0, 0.58, 0.035]}>
        <planeGeometry args={[1.1, 0.72]} />
        <meshStandardMaterial
          color={hovered ? "#059669" : "#10B981"}
          emissive="#059669"
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
    </group>
  );
}

// 5. Skill Geometric Shape (Skills)
function SkillHologram({ hovered }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.6;
      meshRef.current.rotation.y += delta * 0.9;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <group position={[0, 0.55, 0]}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial
            color={hovered ? "#2563EB" : "#3B82F6"}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#60A5FA" />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.22, 0.26, 0.04, 16]} />
          <meshStandardMaterial color="#CBD5E1" />
        </mesh>
      </group>
    </Float>
  );
}

// 6. Contact Badge (Contact)
function ContactCard({ hovered }) {
  return (
    <group rotation={[-Math.PI / 12, 0.15, 0]}>
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[0.65, 0.02, 0.42]} />
        <meshStandardMaterial
          color={hovered ? "#2563EB" : "#FFFFFF"}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

const DeveloperDesk = ({ onObjectClick }) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-slate-50/50">
      <Canvas
        camera={{ position: [0, 3.6, 4.6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Soft, clean daylight studio lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 8, 4]} intensity={1.8} castShadow />
        <directionalLight position={[-4, 6, -3]} intensity={0.6} color="#E0F2FE" />
        <pointLight position={[0, 4, 2]} intensity={0.8} color="#FFFFFF" />

        <group position={[0, -0.55, 0]}>
          {/* Clean Modern Light Oak / Birch Desk Surface */}
          <mesh position={[0, 0, 0]} receiveShadow>
            <boxGeometry args={[4.4, 0.1, 2.4]} />
            <meshStandardMaterial
              color="#F1F5F9"
              metalness={0.1}
              roughness={0.6}
            />
          </mesh>

          {/* Minimalist Desk Mat */}
          <mesh position={[0, 0.055, 0]}>
            <boxGeometry args={[3.6, 0.01, 1.8]} />
            <meshStandardMaterial color="#E2E8F0" roughness={0.8} />
          </mesh>

          {/* 1. Laptop -> Projects */}
          <InteractiveItem
            sectionId="projects"
            label="Projects"
            position={[-0.2, 0.06, 0.25]}
            onObjectClick={onObjectClick}
          >
            {(hovered) => <Laptop hovered={hovered} />}
          </InteractiveItem>

          {/* 2. Books -> Education */}
          <InteractiveItem
            sectionId="education"
            label="Education"
            position={[1.5, 0.06, 0.3]}
            onObjectClick={onObjectClick}
          >
            {(hovered) => <Books hovered={hovered} />}
          </InteractiveItem>

          {/* 3. Trophy -> Achievements */}
          <InteractiveItem
            sectionId="achievements"
            label="Achievements"
            position={[1.5, 0.06, -0.6]}
            onObjectClick={onObjectClick}
          >
            {(hovered) => <Trophy hovered={hovered} />}
          </InteractiveItem>

          {/* 4. Terminal Monitor -> Coding Profiles */}
          <InteractiveItem
            sectionId="coding-profiles"
            label="Coding Profiles"
            position={[-1.3, 0.06, -0.3]}
            onObjectClick={onObjectClick}
          >
            {(hovered) => <Terminal hovered={hovered} />}
          </InteractiveItem>

          {/* 5. Hologram -> Skills */}
          <InteractiveItem
            sectionId="skills"
            label="Tech Skills"
            position={[0.7, 0.06, -0.5]}
            onObjectClick={onObjectClick}
          >
            {(hovered) => <SkillHologram hovered={hovered} />}
          </InteractiveItem>

          {/* 6. Contact Card -> Contact */}
          <InteractiveItem
            sectionId="contact"
            label="Contact"
            position={[-1.3, 0.06, 0.6]}
            onObjectClick={onObjectClick}
          >
            {(hovered) => <ContactCard hovered={hovered} />}
          </InteractiveItem>
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
          maxAzimuthAngle={Math.PI / 6}
          minAzimuthAngle={-Math.PI / 6}
        />
      </Canvas>
    </div>
  );
};

export default DeveloperDesk;
