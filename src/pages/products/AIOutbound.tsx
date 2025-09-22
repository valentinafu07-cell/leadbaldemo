import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Phone, Users, Target, Clock, TrendingUp, Shield } from "lucide-react";

const AIOutbound = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const features = [
    {
      icon: Target,
      title: "Lead Revival",
      description: "Automatically re-engage dormant leads with personalized, respectful outreach sequences."
    },
    {
      icon: Clock,
      title: "Smart Timing", 
      description: "Respects quiet hours, time zones, and contact preferences for maximum effectiveness."
    },
    {
      icon: Shield,
      title: "Consent-Aware",
      description: "Built-in compliance with TCPA, CAN-SPAM, and opt-out handling."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Clear metrics on response rates, bookings, and revenue attribution."
    }
  ];

  const useCases = [
    "Follow up with website inquiries",
    "Re-engage past customers",
    "Appointment confirmations and reminders",
    "Survey and feedback collection",
    "Event invitations and updates",
    "Service renewal notifications",
    "Referral request campaigns",
    "Seasonal promotions and offers"
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
              <span>AI Outbound</span>
            </div>
            
            <h1 className="section-title mb-6">
              Revive old leads <span className="text-gradient">respectfully</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              AI-powered outbound sequences that re-engage dormant leads and follow up with prospects — across voice, SMS, and email.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Book a Private Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => console.log("Listen to demo")}
                className="btn-secondary magnetic-hover group"
              >
                <Play className="mr-2 w-4 h-4" />
                Listen to Sample Calls
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Outbound that actually <span className="text-gradient">works</span>
            </h2>
            <p className="section-subtitle">
              Respectful, compliant, and effective. Your AI handles the follow-up you don't have time for.
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

      {/* Multi-Channel Approach */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-6">
                  Multi-channel <span className="text-gradient">sequences</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Smart sequences that adapt based on response patterns. Start with email, follow up with SMS, and close with a personal call.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email First</h3>
                      <p className="text-muted-foreground text-sm">Gentle, value-focused email to re-establish contact</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">SMS Follow-up</h3>
                      <p className="text-muted-foreground text-sm">Personal text message with specific value proposition</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Voice Call</h3>
                      <p className="text-muted-foreground text-sm">AI voice call to book appointment or qualify interest</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">3-7x</div>
                    <div className="text-sm text-muted-foreground">Higher response rates vs single-channel</div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-foreground">15%</div>
                        <div className="text-xs text-muted-foreground">Avg response rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-foreground">48h</div>
                        <div className="text-xs text-muted-foreground">Avg sequence time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Perfect for every <span className="text-gradient">scenario</span>
            </h2>
            <p className="section-subtitle">
              From lead nurturing to customer retention, AI outbound handles the follow-up that drives results.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center bg-background rounded-xl p-4 border border-border"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 shrink-0"></div>
                  <span className="text-muted-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Built for <span className="text-gradient">compliance</span>
            </h2>
            <p className="section-subtitle mb-12">
              TCPA compliance, consent management, and opt-out handling built into every sequence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">TCPA Compliant</h3>
                <p className="text-muted-foreground text-sm">
                  Automatic consent verification and call time restrictions.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Opt-out Handling</h3>
                <p className="text-muted-foreground text-sm">
                  Instant opt-out processing and suppression list management.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Smart Timing</h3>
                <p className="text-muted-foreground text-sm">
                  Respects quiet hours, time zones, and contact preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-card/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Start recovering lost revenue
            </h2>
            <p className="section-subtitle mb-8">
              See how AI outbound can re-engage your dormant leads and turn missed opportunities into booked appointments.
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
                Call the live demo: +1 888 912 5883
              </a>
            </div>
            
            <p className="smallprint mt-8">
              Representative pilot results. Individual outcomes vary. TCPA compliance included.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOutbound;