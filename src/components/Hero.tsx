import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Phone } from "lucide-react";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAudioModal, setShowAudioModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };
  const handleCallDemo = () => {
    window.open("tel:+18889125883", "_self");
  };
  const handleListenDemo = () => {
    setShowAudioModal(true);
  };
  return <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-leadbal-gradient opacity-5 blur-3xl"></div>
      <div className="hidden lg:block absolute -top-[10%] -right-[5%] w-1/3 h-[60%] bg-subtle-gradient opacity-30 blur-3xl rounded-full parallax" data-speed="0.05"></div>
      
      <div className="section-container relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 pt-24 lg:pt-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="leadbal-chip mb-6 opacity-0 animate-fade-in inline-flex" style={{
            animationDelay: "0.1s"
          }}>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground mr-2 text-xs font-bold">24/7</span>
              <span>Voice AI • Enterprise Controls</span>
            </div>
            
            {/* Headline */}
            <h1 className="section-title mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              Never miss a call.<br />
              <span className="text-gradient">Never miss. Always lead.</span>
            </h1>
            
            {/* Subheadline */}
            <p style={{
            animationDelay: "0.5s"
          }} className="section-subtitle mb-8 opacity-0 animate-fade-in max-w-2xl mx-auto lg:mx-0">Leadbal answers, qualifies, and books then follows up by SMS & email. Done-for-you setup</p>

            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in" style={{
            animationDelay: "0.6s"
          }}>
              {["Increase Staff Productivity", "Save Valuable Time", "Turn Missed Calls Into Revenue"].map((chip, index) => <span key={index} className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full border border-border">
                  {chip}
                </span>)}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <button onClick={handleBookDemo} className="btn-primary magnetic-hover group">
                Book a Private Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button onClick={handleListenDemo} className="btn-secondary magnetic-hover group">
                <Play className="mr-2 w-4 h-4" />
                Listen to a Live Demo
              </button>

              <button onClick={handleCallDemo} className="text-primary hover:text-primary/80 font-medium transition-colors group flex items-center justify-center lg:justify-start">
                <Phone className="mr-2 w-4 h-4" />
                Call the live demo
              </button>
            </div>

            {/* Disclaimer */}
            <p className="smallprint text-center lg:text-left opacity-0 animate-fade-in max-w-lg mx-auto lg:mx-0" style={{
            animationDelay: "0.8s"
          }}>
              Demo audio is illustrative. Outcomes depend on configuration. Representative pilot results; individual outcomes vary.
            </p>
          </div>
          
          {/* Hero Visual */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative z-10 opacity-0 animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
              {/* AI Call Interface Mockup */}
              <div className="bg-card rounded-3xl p-6 lg:p-8 shadow-elegant-hover border border-border/50">
                <div className="space-y-5">
                  {/* Call Status */}
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                      <span className="text-sm font-medium whitespace-nowrap">Live Call</span>
                    </div>
                    <span className="text-xs text-muted-foreground">00:47</span>
                  </div>

                  {/* Caller Info */}
                  <div className="bg-background rounded-2xl p-4 space-y-3">
                    <h3 className="font-semibold text-sm lg:text-base">Sarah Johnson</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">Requesting consultation for kitchen remodel</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">Qualified Lead</span>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full whitespace-nowrap">Budget: $25k+</span>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="bg-primary/5 rounded-2xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary-foreground">AI</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs lg:text-sm leading-relaxed">
                          "I'd be happy to schedule a consultation. I have availability this Thursday at 2 PM or Friday at 10 AM. Which works better for you?"
                        </p>
                        <div className="flex items-center mt-3 space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">Booking calendar...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <button className="flex-1 bg-primary text-primary-foreground text-xs lg:text-sm py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      Book Appointment
                    </button>
                    <button className="flex-1 bg-background text-foreground text-xs lg:text-sm py-3 px-4 rounded-lg font-medium border border-border hover:bg-muted/50 transition-colors">
                      Transfer to Human
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Coverage</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">60%</div>
              <div className="text-sm text-muted-foreground">Fewer no-shows*</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">3×</div>
              <div className="text-sm text-muted-foreground">Faster lead pickup*</div>
            </div>
          </div>
          <p className="smallprint text-center mt-4">
            *Representative pilot results. Individual outcomes vary.
          </p>
        </div>
      </div>

      {/* Audio Modal */}
      {showAudioModal && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass bg-background max-w-md w-full rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Live Demo Audio</h3>
              <button onClick={() => setShowAudioModal(false)} className="text-muted-foreground hover:text-foreground text-2xl">
                ×
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Listen to how Leadbal handles real customer calls with natural conversation and instant booking.
              </p>
              <audio controls className="w-full">
                <source src="/demo-audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="smallprint">
                Demo audio is illustrative and may not reflect actual performance. Representative pilot results; individual outcomes vary.
              </p>
            </div>
          </div>
        </div>}
    </section>;
};
export default Hero;