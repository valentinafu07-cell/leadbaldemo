import React, { useEffect, useRef, useState } from "react";

const WhyBusinessesChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current || !isIntersecting) return;
      
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + sectionHeight * 0.6)
        ));

        // Determine active card based on scroll progress
        if (scrollProgress < 0.33) {
          setActiveCardIndex(0);
        } else if (scrollProgress < 0.66) {
          setActiveCardIndex(1);
        } else {
          setActiveCardIndex(2);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isIntersecting]);

  const cards = [
    {
      title: "More Focus",
      content: "Leadbal gives business owners more focus — by taking calls, scheduling, and inbox management off your plate.",
      base: "bg-dark-900",
      linearGradient: "bg-gradient-to-br from-dark-navy via-slate-800 to-dark-navy",
      radialGradient: "radial-gradient(ellipse at 20% 25%, hsl(var(--leadbal-blue)) 20%, transparent 80%)",
      accentRing: "ring-1 ring-cyan-400/12 ring-inset",
      titleColor: "text-white",
      textShadow: "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
    },
    {
      title: "More Time", 
      content: "Leadbal creates more time — reclaiming hours each week so teams can concentrate on high-value work.",
      base: "bg-slate-900",
      linearGradient: "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900",
      radialGradient: "radial-gradient(ellipse at 70% 60%, #8A7CFF 15%, transparent 85%)",
      accentRing: "ring-1 ring-violet-400/10 ring-inset",
      titleColor: "text-white",
      textShadow: "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
    },
    {
      title: "More Revenue",
      content: "Leadbal drives more revenue — by capturing missed calls and reviving leads that would otherwise be lost.",
      base: "bg-slate-950",
      linearGradient: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950",
      radialGradient: "radial-gradient(ellipse at 50% 15%, #FF7A45 12%, transparent 80%)",
      accentRing: "ring-1 ring-orange-400/10 ring-inset",
      titleColor: "text-white",
      textShadow: "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
    }
  ];

  const getCardStyle = (index: number) => {
    const isActive = index === activeCardIndex;
    const isAbove = index < activeCardIndex;
    const isBelow = index > activeCardIndex;

    if (isActive) {
      return {
        transform: 'translateY(0px) scale(1)',
        opacity: 1,
        zIndex: 30
      };
    } else if (isAbove) {
      return {
        transform: 'translateY(-15px) scale(0.95)',
        opacity: 0.7,
        zIndex: 20
      };
    } else if (isBelow && index === activeCardIndex + 1) {
      return {
        transform: 'translateY(45px) scale(0.95)',
        opacity: 1,
        zIndex: 25
      };
    } else {
      return {
        transform: 'translateY(90px) scale(0.9)',
        opacity: 0.9,
        zIndex: 10
      };
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16 pt-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-8">
                Why Businesses Choose <span className="text-gradient">Leadbal</span>
              </h2>
            </div>

            {/* Cards Container */}
            <div 
              ref={cardsContainerRef}
              className="relative h-[60vh] flex items-center justify-center"
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out border border-border/20 ${card.accentRing}`}
                  style={getCardStyle(index)}
                >
                  {/* Solid Base */}
                  <div className={`absolute inset-0 ${card.base}`} />
                  
                  {/* Linear Gradient Overlay */}
                  <div className={`absolute inset-0 ${card.linearGradient} opacity-90`} />
                  
                  {/* Radial Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-70"
                    style={{
                      background: card.radialGradient
                    }}
                  />
                  
                  {/* Subtle Grain Noise */}
                  <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                      }}
                    />
                  </div>

                  {/* Animated Grid Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div 
                      className="absolute inset-0 animate-pulse" 
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        animation: 'pulse 15s cubic-bezier(0.22, 1, 0.36, 1) infinite'
                      }} 
                    />
                  </div>

                  {/* Glowing Orbs */}
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white/5 blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-white/3 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-8 md:p-16">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-silver/90 border border-white/12 backdrop-blur-sm mb-8 ring-1 ring-inset ring-white/10">
                      <span className="text-sm font-medium text-dark-900">The Vision</span>
                    </div>
                    
                    {/* Main Content */}
                    <h3 className={`text-3xl md:text-5xl font-bold mb-6 ${card.titleColor} ${card.textShadow} leading-tight hover:brightness-105 transition-all duration-300`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl ${card.textShadow}`}>
                      {card.content}
                    </p>
                  </div>

                  {/* Inner Border */}
                  <div className="absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-white/8 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-16 space-x-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeCardIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-border/30'
                  }`}
                />
              ))}
            </div>

            {/* Disclaimer */}
            <p className="smallprint text-center mt-12">
              Representative pilot results. Individual outcomes vary.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessesChoose;