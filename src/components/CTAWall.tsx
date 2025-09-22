import React from "react";
import { ArrowRight, Play, Phone } from "lucide-react";

const CTAWall = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const handleListenDemo = () => {
    // You can add audio modal logic here
    console.log("Listen to demo clicked");
  };

  const handleCallDemo = () => {
    window.open("tel:+18889125883", "_self");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-card/20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="leadbal-chip mb-6 inline-flex">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs font-bold">✓</span>
              <span>Ready to deploy</span>
            </div>
            
            <h2 className="section-title mb-6">
              See it live in your <span className="text-gradient">workflows</span>
            </h2>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              We'll connect calendars/CRMs and run a real test in days. See how Leadbal handles your actual call scenarios.
            </p>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button 
              onClick={handleBookDemo}
              className="btn-primary magnetic-hover group text-lg px-8 py-4"
            >
              Book a Private Demo
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={handleListenDemo}
              className="btn-secondary magnetic-hover group text-lg px-8 py-4"
            >
              <Play className="mr-3 w-5 h-5" />
              Listen to a Live Demo
            </button>
          </div>

          {/* Secondary CTA */}
          <div className="mb-8">
            <button 
              onClick={handleCallDemo}
              className="text-primary hover:text-primary/80 font-medium transition-colors group flex items-center justify-center"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call the live demo: +1 888 912 5883
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">3-4 days</div>
              <div className="text-sm text-muted-foreground">Average setup time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Always available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Call pickup rate</div>
            </div>
          </div>

          <p className="smallprint max-w-lg mx-auto">
            Implementation speed varies by carrier, calendar, and CRM. Representative pilot results; individual outcomes vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAWall;