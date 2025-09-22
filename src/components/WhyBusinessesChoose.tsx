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
      base: "#0A0F1A", // Dark Navy base
      linearGradient: "linear-gradient(135deg, #0A0F1A 0%, #152037 45%, #0A0F1A 100%)",
      radialGradient: "radial-gradient(ellipse at 20% 25%, #0057FF 20%, transparent 80%)",
      accentRing: "ring-1 ring-[#4BE2FF]/12 ring-inset",
      titleColor: "text-white",
      textShadow: "drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]",
      badgeStyle: "bg-[#F6F7F9]/95 text-[#0A0F1A] ring-1 ring-inset ring-[#4BE2FF]/20"
    },
    {
      title: "More Time", 
      content: "Leadbal creates more time — reclaiming hours each week so teams can concentrate on high-value work.",
      base: "#0F1522", // Navy variant
      linearGradient: "linear-gradient(25deg, #0F1522 0%, #1A2440 50%, #0F1522 100%)",
      radialGradient: "radial-gradient(ellipse at 70% 60%, #8A7CFF 15%, transparent 85%)",
      accentRing: "ring-1 ring-[#8A7CFF]/10 ring-inset",
      titleColor: "text-white",
      textShadow: "drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]",
      badgeStyle: "bg-[#F6F7F9]/95 text-[#0A0F1A] ring-1 ring-inset ring-[#8A7CFF]/20"
    },
    {
      title: "More Revenue",
      content: "Leadbal drives more revenue — by capturing missed calls and reviving leads that would otherwise be lost.",
      base: "#0B111E", // Very dark blue
      linearGradient: "linear-gradient(200deg, #0B111E 0%, #12203A 50%, #0B111E 100%)",
      radialGradient: "radial-gradient(ellipse at 50% 15%, #FF7A45 12%, transparent 80%)",
      accentRing: "ring-1 ring-[#FF7A45]/10 ring-inset",
      titleColor: "text-white",
      textShadow: "drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]",
      badgeStyle: "bg-[#F6F7F9]/95 text-[#0A0F1A] ring-1 ring-inset ring-[#FF7A45]/20"
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
                  <div 
                    className="absolute inset-0"
                    style={{ backgroundColor: card.base }}
                  />
                  
                  {/* Linear Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: card.linearGradient,
                      opacity: 0.85
                    }}
                  />
                  
                  {/* Radial Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: card.radialGradient,
                      opacity: 0.7
                    }}
                  />
                  
                  {/* Subtle Grain Noise for Texture */}
                  <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '180px 180px'
                      }}
                    />
                  </div>

                  {/* Cinematic Light Streaks */}
                  <div className="absolute inset-0 opacity-8">
                    <div 
                      className="absolute inset-0" 
                      style={{
                        background: `
                          linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.03) 25%, transparent 50%),
                          linear-gradient(-45deg, transparent 0%, rgba(255,255,255,0.02) 25%, transparent 50%)
                        `,
                        animation: 'pulse 18s cubic-bezier(0.22, 1, 0.36, 1) infinite'
                      }} 
                    />
                  </div>

                  {/* Subtle Animated Glow */}
                  <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white/4 blur-3xl opacity-60" 
                       style={{ 
                         animation: `pulse 12s cubic-bezier(0.22, 1, 0.36, 1) infinite`,
                         animationDelay: `${index * 2}s`
                       }} />
                  <div className="absolute bottom-1/4 left-1/4 w-28 h-28 rounded-full bg-white/3 blur-2xl opacity-40" 
                       style={{ 
                         animation: `pulse 16s cubic-bezier(0.22, 1, 0.36, 1) infinite`,
                         animationDelay: `${index * 3}s`
                       }} />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-8 md:p-16">
                    {/* Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm mb-8 ${card.badgeStyle}`}>
                      <span className="text-sm font-medium">For business owners</span>
                    </div>
                    
                    {/* Main Content */}
                    <h3 className={`text-3xl md:text-5xl font-bold mb-6 ${card.titleColor} ${card.textShadow} leading-tight hover:brightness-110 transition-all duration-300`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl ${card.textShadow}`}>
                      {card.content}
                    </p>
                  </div>

                  {/* Enhanced Inner Border */}
                  <div className="absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-white/12 pointer-events-none" />
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