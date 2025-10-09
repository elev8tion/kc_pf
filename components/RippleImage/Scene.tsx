import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, Preload } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import BasicImage from './BasicImage';
import useDimension from './hooks/useDimension';

interface SceneProps {
  imageUrl?: string;
  aspectRatio?: string;
}

export default function Scene({ imageUrl = '/images/profile.png', aspectRatio = '3/4' }: SceneProps) {
  const device = useDimension();

  // Calculate responsive frustum size based on viewport
  const frustumSize = useMemo(() => {
    const baseSize = Math.min(device.width, device.height);
    // Scale based on screen size: smaller on mobile, larger on desktop
    if (device.width < 640) return baseSize * 0.8; // Mobile
    if (device.width < 1024) return baseSize * 0.6; // Tablet
    return baseSize * 0.5; // Desktop
  }, [device.width, device.height]);

  // Parse aspect ratio string to number
  const aspect = useMemo(() => {
    const parts = aspectRatio.split('/');
    if (parts.length === 2) {
      return parseFloat(parts[0]) / parseFloat(parts[1]);
    }
    return 0.75; // Default to 3/4
  }, [aspectRatio]);

  return (
    <Canvas
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
      dpr={device.pixelRatio}
    >
      <OrthographicCamera
        makeDefault
        args={[
          (frustumSize * aspect) / -2,
          (frustumSize * aspect) / 2,
          frustumSize / 2,
          frustumSize / -2,
          -1000,
          1000,
        ]}
        position={[0, 0, 2]}
      />
      <Suspense fallback={null}>
        <BasicImage imageUrl={imageUrl} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}