"use client";

import { useRef, useState, useEffect, CSSProperties } from "react";
import { motion } from "framer-motion";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  displacementScale?: number;
  blur?: number;
  elasticity?: number;
}

export default function LiquidGlass({
  children,
  className = "",
  onClick,
  displacementScale = 50,
  blur = 12,
  elasticity = 0.15,
}: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 100;
      const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 100;
      setMousePos({ x, y });
    };

    if (ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove);
      return () => ref.current?.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const glassStyle: CSSProperties = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: `blur(${blur}px) saturate(150%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(150%)`,
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: `
      0 8px 32px 0 rgba(0, 0, 0, 0.37),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
    `,
    transform: isHovered
      ? `translate(${mousePos.x * elasticity}px, ${mousePos.y * elasticity}px)`
      : "translate(0, 0)",
    transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[24px] ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={glassStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: onClick ? 1.02 : 1 }}
      whileTap={{ scale: onClick ? 0.98 : 1 }}
    >
      {children}
    </motion.div>
  );
}
