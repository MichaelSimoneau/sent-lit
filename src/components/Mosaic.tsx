import React, { useRef, useMemo, useState } from 'react';
import { View, Platform } from 'react-native';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const COLORS = [
  '#0f172a', // slate-900
  '#1e293b', // slate-800
  '#334155', // slate-700
  '#1e3a8a', // blue-900
  '#1d4ed8', // blue-700
  '#2563eb', // blue-600
];

const TileGrid = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Calculate grid dimensions based on viewport
  // TILE_SIZE in Three.js units. Let's say viewport width is ~20 units.
  const tileSize = 0.5;
  const gap = 0.05;
  const stride = tileSize + gap;
  
  const cols = Math.ceil(viewport.width / stride) + 2;
  const rows = Math.ceil(viewport.height / stride) + 2;
  const count = cols * rows;

  // Initial random states for animation
  const animationOffsets = useMemo(() => {
    return new Float32Array(count).map(() => Math.random() * 100);
  }, [count]);

  const colorArray = useMemo(() => {
    const c = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
      color.toArray(c, i * 3);
    }
    return c;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    let i = 0;
    // Center the grid
    const startX = -(cols * stride) / 2;
    const startY = -(rows * stride) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Position
        const x = startX + c * stride;
        const y = startY + r * stride;
        
        // Animation
        const t = state.clock.elapsedTime + animationOffsets[i];
        // Breathing scale effect
        const scale = 1 + Math.sin(t * 1.5) * 0.1; // 1.0 to 1.2
        
        dummy.position.set(x, y, 0);
        dummy.scale.set(scale, scale, 1);
        dummy.updateMatrix();
        
        meshRef.current.setMatrixAt(i, dummy.matrix);
        
        // Dynamic opacity via scale/color (MeshBasicMaterial doesn't support per-instance opacity easily without custom shader)
        // We'll rely on the scale and the overlay for the effect.
        
        i++;
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[tileSize, tileSize]} />
      <meshBasicMaterial transparent opacity={0.6} vertexColors toneMapped={false} />
      <instancedBufferAttribute attach="instanceColor" args={[colorArray, 3]} />
    </instancedMesh>
  );
};

export const Mosaic = () => {
  // Web-only optimized rendering
  if (Platform.OS !== 'web') {
     return <View className="flex-1 bg-slate-900" />;
  }

  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <Canvas orthographic camera={{ position: [0, 0, 5], zoom: 50 }}>
        <TileGrid />
      </Canvas>
    </View>
  );
};
