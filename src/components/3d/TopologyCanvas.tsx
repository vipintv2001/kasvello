"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TopologyProps {
  activeServiceId: string;
}

function MorphingTopology({ activeServiceId }: TopologyProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  // Map service ID to geometric profiles
  const geometry = useMemo(() => {
    switch (activeServiceId) {
      case "web-dev":
        // Architectural faceted plane / grid topology
        return new THREE.PlaneGeometry(6, 6, 32, 32);
      case "performance-ads":
        // Dynamic financial / ROI wave torus
        return new THREE.TorusGeometry(2, 0.7, 30, 70);
      case "content-video":
        // Rising frequency kinetic ribbon (knot)
        return new THREE.TorusKnotGeometry(1.6, 0.4, 80, 24, 3, 4);
      case "seo":
        // Organic icosahedral sphere representing interconnected web crawlers
        return new THREE.IcosahedronGeometry(2.1, 3);
      case "social":
        // Orbiting dual ring / community sphere
        return new THREE.SphereGeometry(2, 32, 24);
      case "branding":
        // Crystalline geometric octahedron / polyhedron
        return new THREE.OctahedronGeometry(2.2, 1);
      default:
        return new THREE.IcosahedronGeometry(2, 2);
    }
  }, [activeServiceId]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.rotation.x += delta * 0.15;

    // Organic wave displacement if plane (web-dev)
    if (meshRef.current && activeServiceId === "web-dev") {
      meshRef.current.rotation.x = -Math.PI / 3;
    } else if (meshRef.current) {
      meshRef.current.rotation.x = 0;
    }
  });

  // Dynamic accent color based on service
  const serviceColor = useMemo(() => {
    switch (activeServiceId) {
      case "web-dev":
        return "#10b981"; // Emerald
      case "performance-ads":
        return "#06b6d4"; // Cyan
      case "content-video":
        return "#a855f7"; // Purple
      case "seo":
        return "#3b82f6"; // Blue
      case "social":
        return "#ec4899"; // Pink
      case "branding":
        return "#f59e0b"; // Gold
      default:
        return "#10b981";
    }
  }, [activeServiceId]);

  return (
    <group ref={groupRef}>
      {/* Wireframe Hologram Surface */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color={serviceColor}
          wireframe
          transparent
          opacity={0.32}
          emissive={serviceColor}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Point Vertices Glow */}
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.05}
          color={serviceColor}
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function TopologyCanvas({ activeServiceId }: TopologyProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 transition-opacity duration-700 overflow-hidden"
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 4.8], fov: 50 }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 4]} intensity={1.4} color="#06b6d4" />
        <directionalLight position={[-4, -3, -2]} intensity={1.2} color="#10b981" />
        <MorphingTopology activeServiceId={activeServiceId} />
      </Canvas>
    </div>
  );
}
