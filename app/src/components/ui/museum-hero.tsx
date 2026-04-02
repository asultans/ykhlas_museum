"use client"

import { useState, useRef, useEffect } from "react"

export const MuseumHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      })
    }
  }, [])

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

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
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
        @keyframes fade-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-fade-up-delay-1 {
          animation: fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-up-delay-2 {
          animation: fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-up-delay-3 {
          animation: fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards;
          opacity: 0;
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Kazakh ornament pattern */
        .ornament-border {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(184, 134, 11, 0.3) 20%, 
            rgba(184, 134, 11, 0.5) 50%, 
            rgba(184, 134, 11, 0.3) 80%, 
            transparent 100%
          );
        }
      `}</style>

      {/* Main Container */}
      <div
        className="relative w-full h-screen overflow-hidden"
        style={{
          backgroundColor: colors.baseBg,
          fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
        }}
      >
        {/* Background Decorative Layer */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            perspective: "1200px",
            transform: "perspective(1200px) rotateX(12deg)",
            transformOrigin: "center bottom",
          }}
        >
          {/* Outer Circle (Back) - spins clockwise slowly */}
          <div className="absolute inset-0 animate-spin-slower">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "2464px",
                height: "2464px",
                transform: `translate(-50%, -50%) scale(1.14)`,
                zIndex: 0,
              }}
            >
              <img
                src="/outer circle 3 copy.png"
                alt=""
                width="2464"
                height="2464"
                style={{ 
                  opacity: 0.18,
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
                transform: `translate(-50%, -50%) scale(1.58)`,
                zIndex: 1,
              }}
            >
              <img
                src="/middle circle 2 copy.png"
                alt=""
                width="857"
                height="857"
                style={{ 
                  opacity: 0.62,
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
                transform: `translate(-50%, -50%) scale(0.80)`,
                zIndex: 2,
              }}
            >
              <img
                src="/front circle 1 copy.png"
                alt=""
                width="857"
                height="857"
                style={{ 
                  opacity: 1.00,
                  filter: "drop-shadow(0 0 20px rgba(184, 134, 11, 0.2))",
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </div>
          </div>
        </div>

        {/* Subtle gradient overlay from bottom */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to top, 
              ${colors.baseBg} 5%, 
              rgba(255, 255, 255, 0.95) 20%, 
              rgba(255, 255, 255, 0.7) 40%, 
              rgba(255, 255, 255, 0.3) 60%,
              transparent 100%)`,
          }}
        />

        {/* Top ornament border */}
        <div className="absolute top-0 left-0 right-0 h-1 ornament-border z-30" />

        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-20 md:pb-28 gap-6 px-4">
          
          {/* Video Container */}
          <div 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden mb-4 animate-fade-up animate-float"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 40px rgba(184, 134, 11, 0.15)"
            }}
          >
            {/* Video Background */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundColor: '#ffffff' }}
            >
              <source src="/rotating_dombra.mp4" type="video/mp4" />
            </video>
            
            {/* Loading placeholder */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-amber-600/30 border-t-amber-600 rounded-full animate-spin" />
              </div>
            )}

            {/* Decorative ring around video */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse-glow"
              style={{ 
                border: "2px solid rgba(184, 134, 11, 0.2)",
              }}
            />
          </div>

          {/* Museum Name - Kazakh */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight animate-fade-up-delay-1"
            style={{ 
              color: colors.textMain,
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.05)"
            }}
          >
            <span className="block" style={{ fontFamily: '"Playfair Display", serif' }}>
              Музыкалық аспаптар
            </span>
            <span 
              className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-normal"
              style={{ color: colors.accentPrimary }}
            >
              мұражайы
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl font-medium text-center max-w-lg animate-fade-up-delay-2"
            style={{ 
              color: colors.textSecondary,
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Қазақстанның музыкалық мұрасын зерттеңіз
          </p>

          {/* English subtitle */}
          <p 
            className="text-sm md:text-base text-center max-w-lg animate-fade-up-delay-2"
            style={{ 
              color: colors.textSecondary,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              opacity: 0.7
            }}
          >
            Museum of Musical Instruments • Almaty, Kazakhstan
          </p>

          {/* CTA Button */}
          <div className="mt-6 animate-fade-up-delay-3">
            <button
              className="group relative px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              style={{ 
                backgroundColor: colors.accentPrimary,
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: "0 10px 40px -10px rgba(184, 134, 11, 0.5)"
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Коллекцияны қараңыз
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.accentPrimary} 0%, ${colors.accentSecondary} 100%)`
                }}
              />
            </button>
          </div>

          {/* Decorative ornament */}
          <div className="mt-8 flex items-center gap-4 animate-fade-up-delay-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600/30" />
            <svg className="w-6 h-6 text-amber-600/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-600/30" />
          </div>
        </div>

        {/* Bottom ornament border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 ornament-border z-30" />
      </div>
    </div>
  )
}

export default MuseumHero
