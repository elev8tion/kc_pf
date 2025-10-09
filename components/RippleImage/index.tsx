'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Scene = dynamic(() => import('./Scene'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse bg-white/10 rounded-[24px] w-full h-full" />
    </div>
  ),
  ssr: false,
});

interface RippleImageProps {
  imageUrl?: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  maxWidth?: string;
}

export default function RippleImage({
  imageUrl = '/images/profile.png',
  className = '',
  containerClassName = '',
  aspectRatio = '3/4',
  maxWidth = 'max-w-sm md:max-w-md lg:max-w-lg'
}: RippleImageProps) {
  return (
    <motion.div
      className={`overflow-hidden rounded-[24px] w-full ${maxWidth} ${containerClassName}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      style={{ aspectRatio, position: 'relative' }}
    >
      <Scene imageUrl={imageUrl} aspectRatio={aspectRatio} />
    </motion.div>
  );
}