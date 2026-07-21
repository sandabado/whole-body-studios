"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Edges, Stars } from "@react-three/drei";
import * as THREE from "three";

function IcosahedronMesh({ audioData }: { audioData?: Uint8Array }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow, bounded camera orbit around the origin — never drifts away
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.05) * 2;
    state.camera.position.y = Math.cos(t * 0.04) * 1;
    state.camera.position.z = 8;
    state.camera.lookAt(0, 0, 0);

    // Audio-reactive emissive
    if (matRef.current && audioData) {
      const bass = audioData.slice(0, 8).reduce((a, b) => a + b, 0) / 8 / 255;
      matRef.current.emissiveIntensity = 0.5 + bass * 1.5;
    }
  });

  return (
    <Float speed={1.1} floatIntensity={0.35}>
      <mesh ref={meshRef} position={[2.5, -1, -1]} scale={1.4}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          ref={matRef}
          color="#050505"
          emissive="#2BA8A0"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
          wireframe={false}
        />
        <Edges threshold={15} color="#2BA8A0" />
      </mesh>
    </Float>
  );
}

function ParticleField({ audioData }: { audioData?: Uint8Array }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 250;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;

    // Drift particles upward
    const posAttr = pointsRef.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    const speed = audioData ? 0.03 + (audioData[2] / 255) * 0.1 : 0.03;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 1] += speed;
      if (arr[i + 1] > 10) arr[i + 1] = -10;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#2BA8A0"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function IcosahedronBackground({
  audioData,
}: {
  audioData?: Uint8Array;
}) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ fov: 48, position: [0, 0, 8] }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <IcosahedronMesh audioData={audioData} />
        <ParticleField audioData={audioData} />
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
      {/* Dark gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void/60 pointer-events-none" />
    </div>
  );
}
