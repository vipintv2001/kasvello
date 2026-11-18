"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Interactive 3D Morphing Growth Prism Component
function GrowthPrism({ mousePos }: { mousePos: { current: [number, number] } }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireMeshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  // Geometry: TorusKnot represents compounding interwoven growth loops
  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32, 2, 3), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Organic continuous rotation
    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.x += delta * 0.12;

    // Smooth cursor tracking tilt
    const targetRotX = mousePos.current[1] * 0.4;
    const targetRotY = mousePos.current[0] * 0.5;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      groupRef.current.rotation.x + targetRotX * 0.05,
      0.1
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      groupRef.current.rotation.y + targetRotY * 0.05,
      0.1
    );

    // Subtle breathing pulse
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.035;
    groupRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Inner Iridescent Core Material */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color="#061218"
          roughness={0.15}
          metalness={0.85}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.4}
          ior={1.6}
          emissive="#064e3b"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Outer Holographic Geometric Wireframe */}
      <mesh ref={wireMeshRef} geometry={geometry} scale={[1.008, 1.008, 1.008]}>
        <meshStandardMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.35}
          emissive="#10b981"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

// Floating Interactive Data Nodes
function FloatingDataNodes({ count = 35 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color("#10b981"), // Emerald
      new THREE.Color("#06b6d4"), // Cyan
      new THREE.Color("#f59e0b"), // Amber
    ];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.4 + Math.random() * 2.2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.08;
      pointsRef.current.rotation.x -= delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Interactive Scene Orchestrator with Mouse Tracking
function Scene() {
  const { viewport } = useThree();
  const mousePos = useRef<[number, number]>([0, 0]);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = [x, y];
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 5]} intensity={1.5} color="#06b6d4" />
      <directionalLight position={[-5, -4, -4]} intensity={1.8} color="#10b981" />
      <pointLight position={[0, 0, 4]} intensity={2.2} color="#f59e0b" distance={8} />

      <GrowthPrism mousePos={mousePos} />
      <FloatingDataNodes count={viewport.width < 5 ? 20 : 40} />
    </>
  );
}

export default function KasvelloCanvas() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden"
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.8]}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
