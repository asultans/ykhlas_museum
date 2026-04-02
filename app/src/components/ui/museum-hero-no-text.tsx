"use client"

import { useState, useRef, useEffect } from "react"
import { CircleSettings } from "./circle-controls"

interface MuseumHeroNoTextProps {
  circleSettings?: CircleSettings
}

export const MuseumHeroNoText = ({ circleSettings }: MuseumHeroNoTextProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)

  // Detect Safari browser
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('chromium');
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/493485bf-518b-40c6-b81f-6bbc6f6d5fad',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'museum-hero-no-text.tsx:15',message:'Component mounted',data:{bgVideoExists:!!bgVideoRef.current,videoRefExists:!!videoRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      })
    }
    
    // #region agent log
    if (bgVideoRef.current) {
      fetch('http://127.0.0.1:7243/ingest/493485bf-518b-40c6-b81f-6bbc6f6d5fad',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'museum-hero-no-text.tsx:25',message:'BG video element found',data:{src:bgVideoRef.current.src,readyState:bgVideoRef.current.readyState,paused:bgVideoRef.current.paused},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B'})}).catch(()=>{});
      bgVideoRef.current.play().catch((err) => {
        fetch('http://127.0.0.1:7243/ingest/493485bf-518b-40c6-b81f-6bbc6f6d5fad',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'museum-hero-no-text.tsx:27',message:'BG video play error',data:{error:err.message},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'D'})}).catch(()=>{});
      });
    } else {
      fetch('http://127.0.0.1:7243/ingest/493485bf-518b-40c6-b81f-6bbc6f6d5fad',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'museum-hero-no-text.tsx:30',message:'BG video element NOT found',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    }
    // #endregion
  }, [])
  
  // #region agent log
  useEffect(() => {
    const rootDiv = document.querySelector('.w-full.h-full');
    const bgVideo = document.querySelector('video[src*="ornament"]') || document.querySelector('video source[src*="ornament"]')?.parentElement;
    fetch('http://127.0.0.1:7243/ingest/493485bf-518b-40c6-b81f-6bbc6f6d5fad',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'museum-hero-no-text.tsx:38',message:'DOM check',data:{rootDivExists:!!rootDiv,bgVideoExists:!!bgVideo,bgVideoDisplay:bgVideo?getComputedStyle(bgVideo as Element).display:'none',bgVideoZIndex:bgVideo?getComputedStyle(bgVideo as Element).zIndex:'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion

  // Color tokens for white theme
  const colors = {
    textMain: "#1a1a1a",
    textSecondary: "#64748b",
    accentPrimary: "#b8860b", // Golden/bronze color for cultural feel
    accentSecondary: "#8b4513", // Saddle brown
    baseBg: "#ffffff",
    cardBg: "#fafafa",
    inputShadow: "rgba(0, 0, 0, 0.08)",
  }

  // #region agent log
  useEffect(() => {
    const rootDiv = document.querySelector('.w-full.h-full');
    const bgVideo = document.querySelector('video[src*="ornament"]') || document.querySelector('video source[src*="ornament"]')?.parentElement;
    fetch('http://127.0.0.1:7243/ingest/493485bf-518b-40c6-b81f-6bbc6f6d5fad',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'museum-hero-no-text.tsx:38',message:'DOM check',data:{rootDivExists:!!rootDiv,bgVideoExists:!!bgVideo,bgVideoDisplay:bgVideo?getComputedStyle(bgVideo as Element).display:'none',bgVideoZIndex:bgVideo?getComputedStyle(bgVideo as Element).zIndex:'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, []);
  // #endregion

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
      {/* Animation Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 80s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slower {
          animation: spin-slower 100s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Y2K Digital Vintage Effects */
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes rgb-shift {
          0%, 100% { 
            text-shadow: 0.5px 0 0 rgba(255, 0, 0, 0.3), -0.5px 0 0 rgba(0, 255, 255, 0.3);
          }
          50% { 
            text-shadow: -0.5px 0 0 rgba(255, 0, 0, 0.3), 0.5px 0 0 rgba(0, 255, 255, 0.3);
          }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(184, 134, 11, 0.2), 
                        0 0 60px rgba(184, 134, 11, 0.1);
          }
          50% { 
            box-shadow: 0 0 50px rgba(184, 134, 11, 0.3), 
                        0 0 100px rgba(184, 134, 11, 0.15);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main Container */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
          zIndex: 10,
        }}
      >
        {/* Background Decorative Layer */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            perspective: "1200px",
            transform: "perspective(1200px) rotateX(12deg)",
            transformOrigin: "center bottom",
            zIndex: 5,
          }}
        >
          {/* Outer Circle (Back) - spins clockwise slowly */}
          <div className="absolute inset-0 animate-spin-slower">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "2464px",
                height: "2464px",
                transform: `translate(calc(-50% + ${circleSettings?.outerCircle.x || 0}px), calc(-50% + ${circleSettings?.outerCircle.y || 0}px)) scale(${circleSettings?.outerCircle.scale || 1.14})`,
                zIndex: 0,
              }}
            >
              <img
                src="/outer circle 3 copy.png"
                alt=""
                width="2464"
                height="2464"
                style={{ 
                  opacity: circleSettings?.outerCircle.opacity ?? 0.18,
                  filter: "drop-shadow(0 0 40px rgba(184, 134, 11, 0.1))",
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </div>
          </div>

          {/* Middle Circle - spins counter-clockwise */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "857px",
                height: "857px",
                transform: `translate(calc(-50% + ${circleSettings?.middleCircle.x || 0}px), calc(-50% + ${circleSettings?.middleCircle.y || 0}px)) scale(${circleSettings?.middleCircle.scale || 0.87})`,
                zIndex: 1,
              }}
            >
              <img
                src="/middle circle 2 copy.png"
                alt=""
                width="857"
                height="857"
                style={{ 
                  opacity: circleSettings?.middleCircle.opacity ?? 0.62,
                  filter: "drop-shadow(0 0 30px rgba(184, 134, 11, 0.15))",
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </div>
          </div>

          {/* Front Circle - spins clockwise */}
          <div className="absolute inset-0 animate-spin-slow">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "857px",
                height: "857px",
                transform: `translate(calc(-50% + ${circleSettings?.frontCircle.x || 0}px), calc(-50% + ${circleSettings?.frontCircle.y || 0}px)) scale(${circleSettings?.frontCircle.scale || 0.45})`,
                zIndex: 2,
              }}
            >
              <img
                src="/front circle 1 copy.png"
                alt=""
                width="857"
                height="857"
                style={{ 
                  opacity: circleSettings?.frontCircle.opacity ?? 1.00,
                  filter: "drop-shadow(0 0 20px rgba(184, 134, 11, 0.2))",
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </div>
          </div>
        </div>

        {/* Y2K Digital Vintage Effect Overlays */}
        
        {/* Scanline effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 1px,
              transparent 2px
            )`,
            zIndex: 6,
          }}
        />
        
        {/* Moving scanline */}
        <div
          className="absolute inset-0 pointer-events-none animate-scanline"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              rgba(255, 255, 255, 0.05) 48%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.05) 52%,
              transparent 100%
            )`,
            height: '200%',
            zIndex: 6,
          }}
        />
        
        {/* RGB Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                rgba(0, 255, 255, 0.02) 0px,
                transparent 1px,
                transparent 3px,
                rgba(0, 255, 255, 0.02) 4px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(255, 0, 255, 0.02) 0px,
                transparent 1px,
                transparent 3px,
                rgba(255, 0, 255, 0.02) 4px
              )
            `,
            mixBlendMode: 'screen',
            zIndex: 6,
          }}
        />
        
        {/* Chromatic aberration vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at center, 
                transparent 30%, 
                rgba(255, 0, 255, 0.03) 60%,
                rgba(0, 255, 255, 0.03) 80%,
                rgba(255, 0, 0, 0.02) 100%
              )
            `,
            mixBlendMode: 'overlay',
            zIndex: 6,
          }}
        />
        
        {/* Film grain noise */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.03,
            mixBlendMode: 'overlay',
            zIndex: 6,
          }}
        />

        {/* Content Container - Only Video */}
        <div className="relative w-full h-full flex flex-col items-center justify-center" style={{ zIndex: 20 }}>
          
          {/* Video Container - Hidden on Safari due to lack of transparent video support */}
          {!isSafari && (
          <div 
            className="relative animate-float"
            style={{
              transform: `translate(${circleSettings?.video.x || 0}px, ${circleSettings?.video.y || 0}px)`,
            }}
          >
            {/* Video Background */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setIsVideoLoaded(true)}
              onLoadedData={() => setIsVideoLoaded(true)}
              className="block"
              style={{ 
                width: `${160 * (circleSettings?.video.scale || 1)}px`,
                height: "auto",
                opacity: circleSettings?.video.opacity ?? 1,
                borderRadius: `${circleSettings?.video.borderRadius ?? 24}px`,
              }}
              >
              <source src="/rotating_dombra_transparent.webm" type="video/webm" />
              <source src="/rotating_dombra.mp4" type="video/mp4" />
            </video>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MuseumHeroNoText
