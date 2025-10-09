'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import styles from './GyroTiltImage.module.css';

interface GyroTiltImageProps {
  src: string;
  alt: string;
  className?: string;
  maxWidth?: string;
}

interface LiquidRipple {
  id: string;
  x: number;
  y: number;
  scale: number;
  timestamp: number;
}

export default function GyroTiltImage({
  src,
  alt,
  className = '',
  maxWidth = 'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'
}: GyroTiltImageProps) {
  const [ripples, setRipples] = useState<LiquidRipple[]>([]);
  const [isGyroEnabled, setIsGyroEnabled] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isTouching, setIsTouching] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Request gyroscope permission on iOS 13+
  const requestGyroPermission = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        setHasPermission(permission === 'granted');
        setIsGyroEnabled(permission === 'granted');
      } catch (error) {
        console.error('Gyroscope permission error:', error);
        setHasPermission(false);
      }
    } else {
      // Non-iOS or older browsers - gyro available by default
      setIsGyroEnabled(true);
      setHasPermission(true);
    }
  };

  // Check if device has gyroscope support
  useEffect(() => {
    const checkGyroSupport = () => {
      // Check if running on mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobileDevice(isMobile);

      if (isMobile && window.DeviceOrientationEvent) {
        // Mobile device with orientation support
        if (hasPermission === null) {
          // Check if iOS 13+ which needs permission
          if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
            // iOS 13+ - need to request permission
            setHasPermission(false);
          } else {
            // Android or older iOS - gyro available by default
            setHasPermission(true);
            setIsGyroEnabled(true);
          }
        }
      } else {
        // Desktop or no orientation support
        setIsGyroEnabled(false);
        // Don't set hasPermission on desktop - keep it null
      }
    };
    checkGyroSupport();
  }, [hasPermission]);

  // Create liquid morph ripple effect
  const createRipple = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Request gyro permission on first touch if needed (mobile only)
    if (isMobileDevice && hasPermission === false && 'touches' in e) {
      requestGyroPermission();
    }

    // Get the actual container element (not the Tilt wrapper)
    const rect = containerRef.current.getBoundingClientRect();

    // Get click/touch position
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    // Calculate position relative to the container in pixels first
    const xPixels = clientX - rect.left;
    const yPixels = clientY - rect.top;

    // Convert to percentage for responsive positioning
    const x = (xPixels / rect.width) * 100;
    const y = (yPixels / rect.height) * 100;

    const newRipple: LiquidRipple = {
      id: `liquid-${Date.now()}-${Math.random()}`,
      x,
      y,
      scale: 1,
      timestamp: Date.now(),
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 2000);
  };

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouching(true);
    createRipple(e);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  // Prevent right-click and drag (image security)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: inView ? 1 : 0.9, scale: inView ? 1 : 0.95 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full ${maxWidth} ${className}`}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        gyroscope={isGyroEnabled}
        className="preserve-3d"
      >
        <div
          ref={containerRef}
          className={`${styles.container} relative rounded-[24px] overflow-hidden`}
          onMouseDown={createRipple}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
        >
          {/* Base Layer - Profile Image with Security */}
          <div className={`${styles.parallaxLayer} ${styles.baseLayer}`} data-depth="0">
            <div className={styles.imageWrapper}>
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover select-none pointer-events-none"
                priority
                draggable={false}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              />
              {/* Security overlay */}
              <div
                className={styles.protectionOverlay}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              />
            </div>
          </div>

          {/* Middle Layer - Liquid Morph Overlay */}
          <div className={`${styles.parallaxLayer} ${styles.liquidLayer}`} data-depth="0.3">
            <div className={styles.liquidOverlay}>
              <AnimatePresence>
                {ripples.map(ripple => (
                  <motion.div
                    key={ripple.id}
                    className={styles.liquidRipple}
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{
                      scale: [0, 1.5, 2.5, 3],
                      opacity: [0.8, 0.6, 0.3, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{
                      left: `${ripple.x}%`,
                      top: `${ripple.y}%`,
                    }}
                  />
                ))}
              </AnimatePresence>

              {/* Liquid mesh gradient overlay */}
              <div
                className={`${styles.liquidMesh} ${isTouching ? styles.touching : ''}`}
              />
            </div>
          </div>

          {/* Top Layer - Floating Elements */}
          <div className={`${styles.parallaxLayer} ${styles.floatingLayer}`} data-depth="0.6">
            <div className={styles.floatingElements}>
              {/* Floating orbs */}
              <div className={`${styles.floatingOrb} ${styles.orb1}`} />
              <div className={`${styles.floatingOrb} ${styles.orb2}`} />
              <div className={`${styles.floatingOrb} ${styles.orb3}`} />

              {/* Glow effects */}
              <div className={styles.glowEffect} />

              {/* Dynamic light reflection */}
              <div className={`${styles.lightReflection} ${inView ? styles.active : ''}`} />
            </div>
          </div>

          {/* Glass reflection overlay */}
          <div className={styles.glassOverlay} />

          {/* Permission prompt for iOS - only show on mobile devices */}
          {isMobileDevice && hasPermission === false && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.permissionButton}
              onClick={requestGyroPermission}
            >
              <span className={styles.permissionIcon}>📱</span>
              <span className={styles.permissionText}>Tap to enable 3D tilt</span>
            </motion.button>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
}