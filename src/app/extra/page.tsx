'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WomenInFOSS() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const upperTextRef = useRef(null);
  const lowerTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', 
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        }
      });

      // 1. Split Reveal
      tl.to(heroRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: 'power2.inOut',
        duration: 1
      }, 0);

      // 2. Text Separation
      tl.to(upperTextRef.current, { yPercent: -40, opacity: 0.2, ease: 'power2.inOut' }, 0);
      tl.to(lowerTextRef.current, { yPercent: 40, opacity: 0.2, ease: 'power2.inOut' }, 0);

      // 3. Content Entrance
      tl.fromTo(contentRef.current, 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, ease: 'power3.out' }, 
        0.4
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#0f0720] text-white selection:bg-purple-500/40">
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
        
        {/* Background Layer: Deep Purple Gradient & Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f0720] px-6">
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
          
          <div ref={contentRef} className="max-w-4xl text-center z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-[1px] w-8 bg-purple-500/50"></span>
                <span className="text-xs font-bold tracking-[0.4em] text-purple-400 uppercase">
                    Our Mission
                </span>
                <span className="h-[1px] w-8 bg-purple-500/50"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Empowering women through <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400">
                Open Source
              </span>
            </h2>
            
            <p className="mt-8 text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto leading-relaxed font-light italic">
              "A community of passionate volunteers dedicated to inspiring and diversifying 
              the future of Free Open Source Software."
            </p>
          </div>
        </div>

        {/* Hero Layer: Splitting Purple/White Surface */}
        <header 
          ref={heroRef} 
          className="absolute inset-0 z-20 flex items-center justify-center bg-purple-50 overflow-hidden px-4"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)' }}
        >
          <div className="relative text-center select-none w-full">
            {/* Text split into two layers for the effect */}
            <div ref={upperTextRef}>
               <h1 className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-black text-purple-950 leading-[0.8] tracking-tighter uppercase italic">
                SLIIT WOMEN<br/>IN FOSS
              </h1>
            </div>
            <div ref={lowerTextRef} className="absolute inset-0 pointer-events-none">
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[7.5vw] font-black text-purple-950 leading-[0.8] tracking-tighter uppercase italic">
                SLIIT WOMEN<br/>IN FOSS
              </h1>
            </div>
          </div>
        </header>
      </section>

      {/* Spacer Section */}
      <section className="h-[50vh] bg-[#0f0720] flex flex-col items-center justify-center border-t border-purple-900/30">
        <div className="animate-bounce">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
      </section>
    </main>
  );
}