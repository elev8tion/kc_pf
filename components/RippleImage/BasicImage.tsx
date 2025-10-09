// @ts-nocheck
import React from 'react';
import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function BasicImage({ imageUrl = '/images/profile.png' }) {
  const { viewport } = useThree();

  // Load the profile image texture
  const profileTexture = useTexture(imageUrl);

  // Calculate image dimensions to maintain aspect ratio
  const imageWidth = viewport.width / 2.5;
  const imageHeight = imageWidth * (4/3);

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[imageWidth, imageHeight, 1, 1]} />
      <meshBasicMaterial map={profileTexture} />
    </mesh>
  );
}