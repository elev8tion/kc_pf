'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './RippleImage.module.css';

interface RippleImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  maxWidth?: string;
}

interface Ripple {
  id: string;
  x: number;
  y: number;
  size: number;
}

export default function RippleImageCSS({
  src,
  alt,
  className = '',
  aspectRatio = '3/4',
  maxWidth = 'max-w-sm md:max-w-md lg:max-w-lg'
}: RippleImageProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rippleSize = Math.max(rect.width, rect.height) * 2;
    const newRipple: Ripple = {
      id: `ripple-${Date.now()}-${Math.random()}`,
      x: x - rippleSize / 2,
      y: y - rippleSize / 2,
      size: rippleSize,
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1500);
  };

  // Enhanced hover effect with mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Create subtle distortion effect
    const xOffset = (x - 0.5) * 10;
    const yOffset = (y - 0.5) * 10;
    const scale = 1.02 + (0.5 - Math.abs(x - 0.5)) * 0.02;

    imageRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(${scale})`;
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'translate(0px, 0px) scale(1)';
    }
  };

  // Prevent right-click context menu
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // Prevent drag
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`relative overflow-hidden rounded-[24px] w-full ${maxWidth} ${className}`}
    >
      <div
        ref={containerRef}
        className={`${styles.rippleContainer} relative w-full overflow-hidden rounded-[24px]`}
        style={{ aspectRatio }}
        onClick={createRipple}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
      >
        <div
          ref={imageRef}
          className={`${styles.imageWrapper} relative w-full h-full transition-transform duration-300 ease-out`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover select-none"
            priority
            draggable={false}
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
          />
          {/* Protection overlay - transparent but blocks direct access */}
          <div
            className={`${styles.protectionOverlay} absolute inset-0 z-10`}
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
          />
        </div>

        {/* Water-like overlay effect */}
        <div className={styles.waterOverlay} />

        {/* Ripple effects */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className={styles.ripple}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}

        {/* Shimmer effect */}
        <div className={styles.shimmer} />
      </div>
    </motion.div>
  );
}