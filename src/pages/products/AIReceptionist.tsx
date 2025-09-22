import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Phone, Bot, Calendar, Clock, Shield, Zap } from "lucide-react";

const AIReceptionist = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const features = [
    {
      icon: Phone,
      title: "Instant Pickup",
      description: "Answer every call within 3 seconds, 24/7/365. Never miss another opportunity."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Book appointments directly into your calendar with availability checking."
    },
    {
      icon: Shield,
      title: "Brand-Safe Voice",
      description: "Trained on your scripts, policies, and tone. Always on-brand responses."
    },
    {
      icon: Zap,
      title: "Instant Routing",
      description: "Qualify callers and route to the right team member automatically."
    }
  ];

  const capabilities = [
    "Answer common questions instantly",
    "Book appointments and consultations", 
    "Qualify leads and gather information",
    "Route urgent calls to on-call staff",
    "Handle appointment changes and cancellations",
    "Provide business hours and location info",
    "Collect customer feedback and testimonials",
    "Transfer to human agents when needed"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="leadbal-chip mb-6 inline-flex">
              <Phone className="w-4 h-4 mr-2" />
              <span>AI Receptionist</span>
            </div>
            
            <h1 className="section-title mb-6">
              Never miss a call <span className="text-gradient">again</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              AI receptionist that answers instantly, books appointments, and routes calls — exactly like your best human receptionist.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Book a Private Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="tel:+18889125883"
                className="btn-secondary magnetic-hover group"
              >
                <Play className="mr-2 w-4 h-4" />
                Call the Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Everything a great receptionist does
            </h2>
            <p className="section-subtitle">
              Plus the reliability and availability that only AI can provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-6">
                  Handle every <span className="text-gradient">scenario</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From simple questions to complex scheduling, your AI receptionist handles it all with the same professionalism as your best team member.
                </p>
                
                <ul className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Call pickup rate</div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-foreground">3s</div>
                        <div className="text-xs text-muted-foreground">Avg response</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-foreground">24/7</div>
                        <div className="text-xs text-muted-foreground">Always available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              How it <span className="text-gradient">works</span>
            </h2>
            <p className="section-subtitle">
              Simple setup, powerful results. Your AI receptionist is ready in days, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Setup & Training</h3>
              <p className="text-muted-foreground">
                We configure your AI receptionist with your business info, services, and scheduling preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Go Live</h3>
              <p className="text-muted-foreground">
                Forward your business line to your AI receptionist number and start capturing every call.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Monitor & Optimize</h3>
              <p className="text-muted-foreground">
                Review call transcripts, booking rates, and continuously improve performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-card/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Ready to answer every call?
            </h2>
            <p className="section-subtitle mb-8">
              See how AI receptionist integrates with your existing phone system and starts booking appointments immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Book a Private Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="tel:+18889125883"
                className="text-primary hover:text-primary/80 font-medium transition-colors group flex items-center justify-center"
              >
                <Phone className="mr-2 w-4 h-4" />
                Test the live demo: +1 888 912 5883
              </a>
            </div>
            
            <p className="smallprint mt-8">
              Representative pilot results. Individual outcomes vary.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionist;