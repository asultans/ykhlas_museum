"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageSequencePlayerProps {
  frameCount: number;
  framePrefix: string;
  frameSuffix?: string;
  frameDigits?: number;
  duration?: number; // duration of one loop in seconds
  className?: string;
}

export function ImageSequencePlayer({
  frameCount,
  framePrefix,
  frameSuffix = '.jpg',
  frameDigits = 4,
  duration = 2.5,
  className = '',
}: ImageSequencePlayerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<any>(null);
  
  const frameIndex = useMotionValue(0);

  // Preload all images efficiently
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frameCount) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [frameCount]);

  // Draw current frame to canvas
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const unsubscribe = frameIndex.on('change', (latest) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const index = Math.floor(latest);
      const img = imagesRef.current[index];
      
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    });

    return () => unsubscribe();
  }, [imagesLoaded, frameIndex]);

  // Handle hover animation with framer motion - ping pong effect
  useEffect(() => {
    if (!imagesLoaded) return;

    if (isHovered) {
      // Reset to start before animating
      frameIndex.set(0);
      
      // Animate forward and backward for seamless looping (ping-pong effect)
      animationRef.current = animate(frameIndex, [0, frameCount - 1], {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse", // This makes it play backward after reaching the end
      });
    } else {
      // Stop animation
      if (animationRef.current) {
        animationRef.current.stop();
      }
      // Return to first frame smoothly
      animate(frameIndex, 0, {
        duration: 0.3,
        ease: "easeOut"
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [isHovered, imagesLoaded, frameCount, duration, frameIndex]);

  const getFramePath = (frameNumber: number): string => {
    const paddedNumber = String(frameNumber).padStart(frameDigits, '0');
    return `${framePrefix}${paddedNumber}${frameSuffix}`;
  };

  const loadingProgress = (loadedCount / frameCount) * 100;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster frame - First frame as fallback/initial display */}
      <div className="absolute inset-0">
        <Image
          src={getFramePath(1)}
          alt="Poster frame"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          quality={85}
        />
      </div>

      {/* Loading state overlay */}
      <AnimatePresence>
        {!imagesLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-10"
          >
            <div className="text-white text-sm font-medium mb-3">Loading...</div>
            <div className="w-48 h-1.5 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs text-white/70 mt-2">
              {loadedCount} / {frameCount} frames
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Canvas for rendering frames */}
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className={`relative z-[1] w-full h-full object-cover transition-opacity duration-500 ${
          imagesLoaded && isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
}
