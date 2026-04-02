"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

// Configuration
const TOTAL_FRAMES = 509;
const FRAME_PATH = '/museum-frames/frame_';

// Generate frame URL
const getFrameUrl = (index: number): string => {
    const paddedIndex = String(index).padStart(4, '0');
    return `${FRAME_PATH}${paddedIndex}.jpg`;
};

export const MuseumVideoBento = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const { t } = useI18n();
    
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [viewportScale, setViewportScale] = useState(4);
    
    // Store images in a ref
    const imagesRef = useRef<HTMLImageElement[]>([]);

    // Calculate scale needed to fill viewport (based on square aspect ratio)
    useEffect(() => {
        const calculateScale = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;
            
            const rect = wrapper.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Calculate scale needed to cover the entire viewport
            const scaleX = viewportWidth / rect.width;
            const scaleY = viewportHeight / rect.height;
            const scale = Math.max(scaleX, scaleY) * 1.1;
            
            setViewportScale(scale);
        };
        
        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, [isReady]);

    // Framer Motion scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform scroll progress to frame index
    // Frames begin immediately
    const frameIndex = useTransform(scrollYProgress, [0, 0.95], [0, TOTAL_FRAMES - 1]);
    
    // Transform for zoom effect
    const scale = useTransform(scrollYProgress, [0, 0.30], [1, viewportScale]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.12], [12, 0]);
    
    // Bento position: starts right, moves to center quickly
    const bentoX = useTransform(scrollYProgress, [0, 0.15], ['28%', '0%']);
    
    // Text animations - fade out as bento starts moving
    const textOpacity = useTransform(scrollYProgress, [0, 0.10], [1, 0]);
    const textX = useTransform(scrollYProgress, [0, 0.10], [0, -80]);
    
    // Heritage message overlay at 29.4%, fade out at 35.5%
    const heritageOpacity = useTransform(scrollYProgress, [0.29, 0.294, 0.34, 0.355], [0, 1, 1, 0]);
    const heritageY = useTransform(scrollYProgress, [0.29, 0.294, 0.34, 0.355], [10, 0, 0, -10]);
    
    // Kazakh heritage card at 40%, disappears by 50.1%
    const kazakhOpacity = useTransform(scrollYProgress, [0.40, 0.42, 0.48, 0.501], [0, 1, 1, 0]);
    const kazakhY = useTransform(scrollYProgress, [0.40, 0.42, 0.48, 0.501], [20, 0, 0, -20]);
    
    // Memorial card at 58.5%
    const memorialOpacity = useTransform(scrollYProgress, [0.56, 0.585, 0.68, 0.72], [0, 1, 1, 0]);
    const memorialY = useTransform(scrollYProgress, [0.56, 0.585, 0.68, 0.72], [20, 0, 0, -20]);
    
    // Global card at 75%
    const globalOpacity = useTransform(scrollYProgress, [0.72, 0.75, 0.85, 0.88], [0, 1, 1, 0]);
    const globalY = useTransform(scrollYProgress, [0.72, 0.75, 0.85, 0.88], [20, 0, 0, -20]);
    
    // Turkic card at 89.2% - persists till the end
    const turkicOpacity = useTransform(scrollYProgress, [0.87, 0.892, 1], [0, 1, 1]);
    const turkicY = useTransform(scrollYProgress, [0.87, 0.892], [20, 0]);

    // Listen to frame changes and draw
    useMotionValueEvent(frameIndex, "change", (latest) => {
        const frame = Math.round(latest);
        if (frame !== currentFrame && frame >= 0 && frame < TOTAL_FRAMES) {
            setCurrentFrame(frame);
            drawFrame(frame);
        }
    });

    // Draw frame to canvas (cropped to remove black sides)
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const images = imagesRef.current;
        
        if (!canvas || !ctx || !images.length) return;
        
        const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
        const img = images[clampedIndex];
        
        if (!img || !img.complete) return;
        
        // The video is 1280x720 but the actual content is square in the center
        // We'll crop to show just the center square portion
        const sourceWidth = img.width;
        const sourceHeight = img.height;
        
        // Calculate the square crop area (centered)
        const cropSize = Math.min(sourceWidth, sourceHeight);
        const cropX = (sourceWidth - cropSize) / 2;
        const cropY = (sourceHeight - cropSize) / 2;
        
        // Set canvas to square dimensions
        const canvasSize = cropSize;
        if (canvas.width !== canvasSize || canvas.height !== canvasSize) {
            canvas.width = canvasSize;
            canvas.height = canvasSize;
        }
        
        // Draw cropped image
        ctx.drawImage(
            img,
            cropX, cropY, cropSize, cropSize,  // Source rectangle (crop)
            0, 0, canvasSize, canvasSize        // Destination rectangle
        );
    };

    // Load images on mount
    useEffect(() => {
        const loadImages = async () => {
            const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
            let loaded = 0;
            
            const loadPromises = [];
            
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        loaded++;
                        setLoadingProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        resolve();
                    };
                    img.src = getFrameUrl(i);
                    images[i - 1] = img;
                });
                loadPromises.push(promise);
            }
            
            await Promise.all(loadPromises);
            imagesRef.current = images;
            
            // Draw first frame
            drawFrame(0);
            setIsReady(true);
        };

        loadImages();
    }, []);

    // Mouse glow effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    return (
        <section 
            ref={containerRef} 
            className="relative w-full bg-black"
            style={{ height: '600vh' }}
        >
            {/* Loading Overlay */}
            {!isReady && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
                    <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-white transition-all duration-150"
                            style={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                    <p className="mt-4 text-neutral-400 text-sm">
                        Loading... {loadingProgress}%
                    </p>
                </div>
            )}

            {/* Sticky container for the animation */}
            <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
                {/* Text - positioned above on mobile, left on desktop */}
                <motion.div 
                    className="absolute top-16 left-0 right-0 md:left-16 lg:left-24 md:top-1/2 md:-translate-y-1/2 text-white space-y-2 md:space-y-6 max-w-md z-10 px-4 md:px-0 py-3 md:py-0 mx-3 md:mx-0 rounded-lg md:rounded-none bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/30 md:border-0"
                    style={{ opacity: textOpacity, x: textX }}
                >
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-[family-name:var(--font-playfair)]">
                        {t.hero.zenkovBuilding.title}
                    </h2>
                    <p className="text-xs md:text-lg text-neutral-300 leading-relaxed">
                        {t.hero.zenkovBuilding.description}
                    </p>
                    <div className="text-xs md:text-base text-neutral-400 space-y-1 md:space-y-2">
                        <p>{t.hero.zenkovBuilding.address}</p>
                        <p>{t.hero.zenkovBuilding.phone}</p>
                    </div>
                </motion.div>

                {/* Video Bento - starts right, moves to center while zooming */}
                <motion.div 
                    ref={wrapperRef}
                    className="relative overflow-hidden bg-neutral-900 border-0 md:border md:border-neutral-800/50 shadow-2xl origin-center w-full h-full md:w-[min(500px,70vw)] md:h-auto"
                    style={{ 
                        aspectRatio: '1 / 1', // Square aspect ratio
                        scale,
                        borderRadius,
                        x: bentoX,
                    }}
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePos({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top
                        });
                    }}
                >
                    {/* Hover glow */}
                    <div 
                        className="absolute -inset-px opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                        style={{
                            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                            borderRadius: 'inherit'
                        }}
                    />
                    
                    {/* Canvas - square, cropped content */}
                    <canvas 
                        ref={canvasRef}
                        className="w-full h-full object-cover block"
                    />
                </motion.div>

                {/* Heritage Message Overlay - appears at 29.4% */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                    style={{ opacity: heritageOpacity }}
                >
                    <motion.div 
                        className="bg-black/60 border border-white/15 rounded-xl p-6 md:p-8 max-w-xl mx-4 shadow-2xl"
                        style={{ y: heritageY }}
                    >
                        <p className="text-white text-xl md:text-2xl font-light text-center leading-relaxed font-[family-name:var(--font-playfair)]">
                            {t.videoSection.heritageMessage}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Kazakh Heritage Card - appears at 40% */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-30"
                    style={{ opacity: kazakhOpacity, pointerEvents: kazakhOpacity.get() > 0.5 ? 'auto' : 'none' }}
                >
                    <motion.div 
                        className="bg-black/50 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 md:p-10 max-w-lg mx-4 shadow-2xl"
                        style={{ y: kazakhY }}
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-white text-3xl md:text-4xl font-light font-[family-name:var(--font-playfair)]">
                                {t.videoSection.kazakhHeritage.title}
                            </h3>
                            <p className="text-white/60 text-lg mt-2">
                                {t.videoSection.kazakhHeritage.count}
                            </p>
                        </div>
                        
                        <div className="space-y-3 text-sm md:text-base">
                            <div className="flex gap-3">
                                <span className="text-amber-400 font-medium min-w-[90px]">{t.videoSection.kazakhHeritage.stringed}:</span>
                                <span className="text-white/80">{t.videoSection.kazakhHeritage.stringedList}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-amber-400 font-medium min-w-[90px]">{t.videoSection.kazakhHeritage.percussion}:</span>
                                <span className="text-white/80">{t.videoSection.kazakhHeritage.percussionList}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-amber-400 font-medium min-w-[90px]">{t.videoSection.kazakhHeritage.wind}:</span>
                                <span className="text-white/80">{t.videoSection.kazakhHeritage.windList}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-amber-400 font-medium min-w-[90px]">{t.videoSection.kazakhHeritage.noisemakers}:</span>
                                <span className="text-white/80">{t.videoSection.kazakhHeritage.noisemakersList}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-amber-400 font-medium min-w-[90px]">{t.videoSection.kazakhHeritage.reed}:</span>
                                <span className="text-white/80">{t.videoSection.kazakhHeritage.reedList}</span>
                            </div>
                        </div>
                        
                        <Link 
                            href="/kazakh"
                            className="mt-8 block w-full text-center py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                        >
                            {t.videoSection.kazakhHeritage.explore} →
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Memorial Card - appears at 58.5% */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-30"
                    style={{ opacity: memorialOpacity, pointerEvents: memorialOpacity.get() > 0.5 ? 'auto' : 'none' }}
                >
                    <motion.div 
                        className="bg-black/60 border border-white/15 rounded-xl p-6 md:p-10 max-w-xl mx-4 shadow-2xl text-center"
                        style={{ y: memorialY }}
                    >
                        <h3 className="text-white text-2xl md:text-3xl font-light font-[family-name:var(--font-playfair)] mb-6 italic">
                            {t.videoSection.memorial.title}
                        </h3>
                        
                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                            {t.videoSection.memorial.description}
                        </p>
                        
                        <p className="text-white/60 text-sm md:text-base italic mb-8">
                            {t.videoSection.memorial.closing}
                        </p>
                        
                        <Link 
                            href="/kazakh/memorial"
                            className="inline-block py-3 px-8 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                        >
                            {t.videoSection.memorial.explore} →
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Global Card - appears at 75% */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-30"
                    style={{ opacity: globalOpacity, pointerEvents: globalOpacity.get() > 0.5 ? 'auto' : 'none' }}
                >
                    <motion.div 
                        className="bg-black/60 border border-white/15 rounded-xl p-6 md:p-10 max-w-xl mx-4 shadow-2xl text-center"
                        style={{ y: globalY }}
                    >
                        <h3 className="text-white text-2xl md:text-3xl font-light font-[family-name:var(--font-playfair)] mb-2">
                            {t.videoSection.global.title}
                        </h3>
                        <p className="text-white/50 text-lg mb-6">
                            ({t.videoSection.global.count})
                        </p>
                        
                        <div className="space-y-2 text-white/80 text-base md:text-lg italic mb-8">
                            <p>{t.videoSection.global.line1}</p>
                            <p>{t.videoSection.global.line2}</p>
                            <p className="text-white/60 pt-2">{t.videoSection.global.line3}</p>
                        </div>
                        
                        <Link 
                            href="/world"
                            className="inline-block py-3 px-8 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                        >
                            {t.videoSection.global.explore} →
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Turkic Card - appears at 89.2%, persists till end */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-30"
                    style={{ opacity: turkicOpacity, pointerEvents: turkicOpacity.get() > 0.5 ? 'auto' : 'none' }}
                >
                    <motion.div 
                        className="bg-black/60 border border-amber-400/30 rounded-xl p-6 md:p-10 max-w-2xl mx-4 shadow-2xl text-center"
                        style={{ y: turkicY }}
                    >
                        <h3 className="text-white text-3xl md:text-4xl font-light font-[family-name:var(--font-playfair)] mb-2">
                            {t.videoSection.turkic.title}
                        </h3>
                        <p className="text-amber-400/80 text-lg mb-4">
                            ({t.videoSection.turkic.count})
                        </p>
                        
                        <p className="text-white/80 text-lg md:text-xl italic mb-6 font-[family-name:var(--font-playfair)]">
                            {t.videoSection.turkic.subtitle}
                        </p>
                        
                        <div className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">
                            {t.videoSection.turkic.groups.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                        
                        <p className="text-white/60 text-sm md:text-base mb-8 italic">
                            {t.videoSection.turkic.description}
                        </p>
                        
                        <Link 
                            href="/turkic"
                            className="inline-block py-3 px-8 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                        >
                            {t.videoSection.turkic.explore} →
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
