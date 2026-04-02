"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { LampHero } from "@/components/ui/lamp-hero";
import { MuseumHeroNoText } from "@/components/ui/museum-hero-no-text";
import { CircleSettings } from "@/components/ui/circle-controls";
import { MuseumVideoBento } from "@/components/ui/museum-video-bento";
import { useI18n } from "@/lib/i18n";

// Scroll-animated Card component
const ScrollCard = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-1 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-[26px] bg-gray-100 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { t } = useI18n();

  const circleSettings: CircleSettings = {
    outerCircle: {
      scale: 0.57,
      opacity: 1,
      x: 0,
      y: 0,
    },
    middleCircle: {
      scale: 0.87,
      opacity: 1,
      x: 0,
      y: 0,
    },
    frontCircle: {
      scale: 0.45,
      opacity: 1,
      x: 0,
      y: 0,
    },
    video: {
      scale: 1.16,
      opacity: 1,
      x: 0,
      y: -1,
      borderRadius: 22,
    },
  };

  // Header links now use translations from the header component itself
  // We just pass the section anchors
  const headerLinks = [
    { label: t.menu.kazakh, href: "/kazakh" },
    { label: t.menu.turkic, href: "/turkic" },
    { label: t.menu.world, href: "/world" },
  ];

  // Scroll animation setup
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Scroll-driven transforms for the tablet
  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], isMobile ? [0.7, 0.9] : [1.05, 1]);
  // Tablet starts further down and moves up closer to text as user scrolls
  const tabletTranslateY = useTransform(scrollYProgress, [0, 0.5], [100, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <>
      <div ref={containerRef} className="flex flex-col">
        <LampHero 
          showHeader={true}
          headerLinks={headerLinks}
          videoSrc="/ornament_bg_web.mp4"
        >
          {/* 5th Museum Text - Above Tablet */}
          <motion.h2 
             className="text-white text-4xl md:text-6xl font-light tracking-tight mb-4 md:mb-12 text-center max-w-5xl px-4 mt-8 md:mt-16 z-50 drop-shadow-2xl font-[family-name:var(--font-playfair)]"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
           >
             {t.hero.fifthMuseum}
           </motion.h2>

          {/* Scroll-animated Tablet */}
          <motion.div
            style={{
              y: tabletTranslateY,
              // opacity removed to prevent see-through effect
              perspective: "1000px",
            }}
            className="w-full max-w-5xl"
          >
            <ScrollCard rotate={rotate} scale={scale}>
              <MuseumHeroNoText circleSettings={circleSettings} />
            </ScrollCard>
          </motion.div>

          {/* Collection Size Text - Below Tablet */}
          <motion.h2 
             className="text-white/90 text-2xl md:text-4xl font-light tracking-wide mt-16 md:mt-24 text-center max-w-4xl px-4 pb-32 z-50 font-[family-name:var(--font-playfair)] italic"
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             {t.hero.collectionSize}
           </motion.h2>
        </LampHero>

        {/* Video Bento Section */}
        <MuseumVideoBento />
      </div>
    </>
  );
}
