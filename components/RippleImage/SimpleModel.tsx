// @ts-nocheck
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { vertex, fragment } from './shaders';

export default function SimpleModel({ imageUrl = '/images/profile.png' }) {
  const { viewport } = useThree();
  const meshRef = useRef();

  // Load the profile image texture
  const profileTexture = useTexture(imageUrl);

  // Create uniforms
  const uniforms = useMemo(() => ({
    uTexture: { value: profileTexture },
    uDisplacement: { value: null },
    winResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  }), [profileTexture]);

  // Simple mouse tracking for ripple effect
  useFrame(({ pointer, size }) => {
    if (meshRef.current) {
      // Update resolution
      uniforms.winResolution.value.set(size.width, size.height);

      // Create simple displacement based on mouse position
      if (!uniforms.uDisplacement.value) {
        // Create a simple gradient texture for displacement
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(128, 128, 128, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        const texture = new THREE.CanvasTexture(canvas);
        uniforms.uDisplacement.value = texture;
      }
    }
  });

  // Calculate image dimensions to maintain aspect ratio
  const imageWidth = viewport.width / 2.5;
  const imageHeight = imageWidth * (4/3);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[imageWidth, imageHeight, 1, 1]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
}