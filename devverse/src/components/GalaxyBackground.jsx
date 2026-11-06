/* ========================================================
   GalaxyBackground — Scientific Deep Space & Astronomical Field
   Realistic Starlight Distribution with Coordinate Grid
   ======================================================== */

import { useRef, useEffect } from "react";
import * as THREE from "three";

const GalaxyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check WebGL availability
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Realistic Astronomical Star Field (Subtle, sparse, dim)
    const starCount = 1100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    // Natural stellar spectrum palette: Cold Blue-White, Ice White, Pale Cyan
    const palette = [
      new THREE.Color("#F1F5F9"),
      new THREE.Color("#E2E8F0"),
      new THREE.Color("#BAE6FD"),
      new THREE.Color("#94A3B8"),
      new THREE.Color("#38BDF8"),
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Spherical distribution
      const radius = THREE.MathUtils.randFloat(40, 280);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      // Subtle variations in starlight intensity
      const brightness = Math.random() * 0.6 + 0.4;
      colors[i3] = color.r * brightness;
      colors[i3 + 1] = color.g * brightness;
      colors[i3 + 2] = color.b * brightness;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.95,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // Gentle cursor-responsive parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      if (prefersReducedMotion) return;
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.15;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Slow realistic cosmic drift
        starField.rotation.y += 0.00015;
        starField.rotation.x += 0.00008;

        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;
        camera.position.x = targetX * 8;
        camera.position.y = -targetY * 8;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-tech-grid opacity-60"
      aria-hidden="true"
    />
  );
};

export default GalaxyBackground;
