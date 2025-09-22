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
      background: "/leadbal-background1.png",
      accent: "text-primary"
    },
    {
      title: "More Time", 
      content: "Leadbal creates more time — reclaiming hours each week so teams can concentrate on high-value work.",
      background: "/leadbal-background2.png",
      accent: "text-primary"
    },
    {
      title: "More Revenue",
      content: "Leadbal drives more revenue — by capturing missed calls and reviving leads that would otherwise be lost.",
      background: "/leadbal-background3.png",
      accent: "text-orange-500"
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
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
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out"
                  style={getCardStyle(index)}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.background})` }}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-dark-900/70" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-8 md:p-16">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
                      <span className="text-sm font-medium text-white">The Vision</span>
                    </div>
                    
                    {/* Main Content */}
                    <h3 className={`text-3xl md:text-5xl font-bold mb-6 ${card.accent} leading-tight`}>
                      {card.title}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                      {card.content}
                    </p>
                  </div>
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
                      : 'bg-white/30'
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