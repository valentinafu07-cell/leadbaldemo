import React, { useEffect, useRef } from "react";

const BenefitsTiles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through the section
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      // Update CSS custom properties for animations
      section.style.setProperty('--scroll-progress', progress.toString());
      
      // Animate text elements based on scroll progress
      const textElements = section.querySelectorAll('.scroll-text');
      textElements.forEach((element, index) => {
        const elementProgress = Math.max(0, Math.min(1, progress * 3 - index * 0.5));
        (element as HTMLElement).style.opacity = elementProgress.toString();
        (element as HTMLElement).style.transform = `translateY(${(1 - elementProgress) * 50}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-background via-card/20 to-background flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Main Title */}
          <div className="scroll-text opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Why <span className="text-gradient">AI Employees</span>
            </h2>
          </div>

          {/* Vision 1 */}
          <div className="scroll-text opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
                The Vision
              </h3>
              <p className="text-3xl md:text-5xl font-bold leading-tight">
                We're giving AI a way to navigate
                <br />
                <span className="text-gradient">your business conversations</span>
              </p>
            </div>
          </div>

          {/* Vision 2 */}
          <div className="scroll-text opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
                The Vision
              </h3>
              <p className="text-3xl md:text-5xl font-bold leading-tight">
                We're bringing adaptive intelligence
                <br />
                <span className="text-gradient">to where customers call</span>
              </p>
            </div>
          </div>

          {/* Vision 3 */}
          <div className="scroll-text opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
                The Vision
              </h3>
              <p className="text-3xl md:text-5xl font-bold leading-tight">
                We're creating
                <span className="text-gradient"> extensions</span>,
                <br />
                not replacements
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="scroll-text opacity-0 transform translate-y-12 transition-all duration-1000">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Never miss opportunity. Always professional. Built for your workflows.
            </p>
            <p className="smallprint mt-8">
              Representative pilot results. Individual outcomes vary.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsTiles;