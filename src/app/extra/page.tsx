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
  const gridRef = useRef(null);
  const magSectionRef = useRef(null);
  const mascotImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Background Grid Animation
      gsap.to(gridRef.current, {
        y: -50,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 2. Floating Mascot Animation
      if (mascotImgRef.current) {
        gsap.to(mascotImgRef.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%', 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Split Reveal Animation
      tl.to(heroRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%, 0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: 'power2.inOut',
        duration: 1
      }, 0);

      tl.to(upperTextRef.current, { yPercent: -90, opacity: 0, ease: 'power2.inOut' }, 0);
      tl.to(lowerTextRef.current, { yPercent: 90, opacity: 0, ease: 'power2.inOut' }, 0);

      tl.fromTo(".reveal-item", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' }, 
        0.4
      );

      // 3. Magazine Reveal Animation
      const magTl = gsap.timeline({
        scrollTrigger: {
          trigger: magSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      magTl.from(".mag-reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#0f0720] text-white selection:bg-purple-500 font-sans overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f0720] px-6">
          <div className="absolute inset-0 flex flex-col justify-around opacity-[0.03] select-none pointer-events-none leading-none">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`text-[10vw] font-black whitespace-nowrap ${i % 2 === 0 ? '-ml-20' : '-mr-20 text-right'}`}>
                WIF-SLIIT-WIF-SLIIT 
              </span>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full" />
          <div ref={contentRef} className="max-w-6xl w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 reveal-item">
                <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase italic">
                  Beyond the <span className="text-purple-400">Code</span>
                </h2>
              </div>
              <div className="lg:col-span-4 reveal-item">
                <p className="text-lg text-purple-200/60 leading-relaxed border-l-2 border-purple-500 pl-6 italic">
                  "Inspiring and diversifying the future of Free Open Source Software at SLIIT."
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0720] to-transparent z-10" />
        </div>

        <header ref={heroRef} className="absolute inset-0 z-20 flex items-center justify-center bg-white overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%, 0 50%, 100% 50%, 100% 100%, 0 100%)' }}>
          <div ref={gridRef} className="absolute inset-0 opacity-[0.15] pointer-events-none select-none h-[150%]">
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#4c1d95 0.5px, transparent 0.5px), linear-gradient(to right, #4c1d95 0.5px, transparent 0.5px), linear-gradient(to bottom, #4c1d95 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px, 40px 40px, 40px 40px' }} />
          </div>
          <div className="absolute top-12 left-12 flex flex-col gap-2 z-30">
            <div className="h-1 w-12 bg-purple-600"></div>
            <div className="text-purple-900 font-bold text-[10px] tracking-[0.4em] uppercase">Development</div>
          </div>
          <div className="absolute bottom-12 right-12 text-purple-900 font-bold text-[10px] tracking-[0.4em] uppercase text-right z-30">Innovation Hub</div>
          <div className="relative text-center w-full px-4 z-10">
            <div ref={upperTextRef}>
                <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] font-[1000] text-purple-950 leading-[0.75] tracking-[-0.05em] uppercase">
                SLIIT<br/>WOMEN<br/>IN FOSS<br/>COMMUNITY
              </h1>
            </div>
            <div ref={lowerTextRef} className="absolute inset-0 pointer-events-none px-4">
              <h1 className="text-[14vw] md:text-[11vw] lg:text-[10vw] font-[1000] text-purple-950 leading-[0.75] tracking-[-0.05em] uppercase">
                SLIIT<br/>WOMEN<br/>IN FOSS<br/>COMMUNITY
              </h1>
            </div>
          </div>
        </header>
      </section>

      {/* SECTION 2: EDITORIAL */}
      <section ref={magSectionRef} className="relative bg-[#0f0720] text-white pt-32 pb-32 px-6 overflow-hidden -mt-1">
        <div className="absolute top-20 -left-10 text-[25vw] font-black text-white/[0.02] select-none leading-none tracking-tighter pointer-events-none uppercase">Identity</div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="mag-reveal relative mb-48 pt-12">
            <div className="absolute top-0 left-0 w-24 h-1 bg-purple-500 mb-8" />
            <h2 className="text-[18vw] lg:text-[14vw] font-[1000] leading-[0.75] tracking-[-0.08em] uppercase italic mix-blend-difference">
              Who <br/> <span className="text-transparent stroke-text-white">We</span> Are<span className="text-purple-500 not-italic">?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-48">
            <div className="lg:col-span-7 mag-reveal">
              <p className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter uppercase border-b-2 border-white/5 pb-12">
                A premier <span className="italic font-serif text-purple-400 lowercase">all-girls</span> society uniting the brightest minds at SLIIT.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 mag-reveal pt-4">
              <p className="text-lg leading-relaxed text-purple-100/60 font-light mb-8">
                We’re not just a society; we’re a <span className="text-white font-medium italic underline decoration-purple-500 underline-offset-4">technical movement</span>. By dismantling barriers and fostering high-level contributions, we redefine tech leadership.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-[2px] bg-purple-500"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-purple-300">FOSS // Leadership // <br/>Innovation</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mag-reveal mb-24">
            <div className="group relative bg-white/5 p-12 overflow-hidden hover:bg-purple-500/10 transition-colors duration-500 border border-white/10">
              <div className="relative z-10">
                <span className="text-xs font-mono text-purple-400 mb-4 block tracking-[0.4em]">01_MISSION</span>
                <h4 className="text-4xl font-black uppercase mb-6 tracking-tighter">Bridge the Gap</h4>
                <p className="text-purple-100/60 text-sm leading-relaxed max-w-xs">Dismantling the gender divide in open-source through mentorship and real-world contribution.</p>
              </div>
              <div className="absolute top-4 right-8 text-7xl font-black text-white/5 group-hover:text-purple-500/20 transition-colors">01</div>
            </div>
            <div className="group relative bg-purple-600 text-white p-12 overflow-hidden border border-purple-500">
              <div className="relative z-10">
                <span className="text-xs font-mono text-purple-200 mb-4 block tracking-[0.4em]">02_FOCUS</span>
                <h4 className="text-4xl font-black uppercase mb-6 tracking-tighter">Master the Stack</h4>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">From Git workflows to cloud architecture, we master the tools that define the digital frontier.</p>
              </div>
              <div className="absolute top-4 right-8 text-7xl font-black text-black/10">02</div>
            </div>
          </div>
        </div>

        {/* MARQUEE AS DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-white/5 border-y border-white/10 py-4 rotate-[-1deg] z-30 backdrop-blur-sm">
          <div className="flex animate-marquee font-bold text-xl md:text-2xl uppercase tracking-[0.2em] text-purple-400/80">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-12">
                SLIIT WOMEN IN FOSS <span className="mx-4 text-white/20">//</span> REDEFINING THE FUTURE <span className="mx-4 text-white/20">//</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MASCOT FEATURE (NIFI) */}
      <section className="relative py-24 px-6 bg-[#0f0720]">
        <div className="max-w-6xl mx-auto">
          <div className="relative group overflow-hidden bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10 rounded-3xl p-8 md:p-16">
            <div className="absolute top-0 right-0 text-[15vw] font-black text-white/[0.03] select-none leading-none pointer-events-none uppercase">Mascot</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 reveal-item">
                <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full scale-75 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    ref={mascotImgRef}
                    src="/sliitwif/images/mascot-nifi.png" 
                    alt="Nifi Mascot" 
                    className="w-full h-full object-contain relative z-20 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-6 py-3 rounded-full font-black italic tracking-tighter shadow-xl rotate-12 z-30">
                  MEET NIFI!
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-purple-400 font-mono tracking-[0.3em] text-xs uppercase">Official Mascot</span>
                  <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                    The Heart of <br/> <span className="text-transparent stroke-text-white">Our Pulse</span>
                  </h3>
                </div>
                <div className="space-y-6 text-purple-100/70 text-lg leading-relaxed max-w-lg">
                  <p>Nifi is thrilled to be a part of women tech enthusiasts as our <span className="text-white font-bold italic">cute, fluffy</span> official mascot.</p>
                  <p>She represents the warmth, curiosity, and inclusivity we bring to the open-source world. Join hands with her and the community to explore the digital frontier.</p>
                </div>
                <button className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm overflow-hidden hover:text-white transition-colors duration-300">
                  <span className="relative z-10">Join the Community</span>
                  <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SPACER */}
      <section className="h-[20vh] bg-[#0f0720] flex items-center justify-center border-t border-white/5">
         <p className="text-white/10 font-mono text-[10px] tracking-[2em] uppercase">Faculty of Computing</p>
      </section>

      <style jsx>{`
        .stroke-text-white { 
          color: transparent; 
          -webkit-text-stroke: 1.5px white; 
        }
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee { 
          display: inline-flex; 
          animation: marquee 40s linear infinite; 
        }
      `}</style>
    </main>
  );
}