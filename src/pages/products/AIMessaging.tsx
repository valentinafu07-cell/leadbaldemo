import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, MessageSquare, Smartphone, Globe, Bell } from "lucide-react";

const AIMessaging = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Messaging",
      description: "SMS, WhatsApp, web chat, and more — all in one unified platform."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Appointment confirmations, follow-ups, and reminders sent automatically."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International SMS and messaging with local phone numbers."
    },
    {
      icon: Smartphone,
      title: "Two-Way Conversations",
      description: "Customers can reply and get instant, intelligent responses."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="leadbal-chip mb-6 inline-flex">
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>AI Messaging</span>
            </div>
            
            <h1 className="section-title mb-6">
              Messaging that <span className="text-gradient">connects</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              AI-powered SMS, WhatsApp, and web chat that keeps customers informed and engaged.
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
                See Demo Conversations
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
              Every channel <span className="text-gradient">covered</span>
            </h2>
            <p className="section-subtitle">
              Meet customers where they are — SMS, WhatsApp, web chat, or any messaging platform.
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

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Perfect for every <span className="text-gradient">touchpoint</span>
            </h2>
            <p className="section-subtitle">
              From confirmations to follow-ups, keep customers informed and engaged.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-3 text-foreground">Appointment Confirmations</h3>
                <p className="text-muted-foreground text-sm">
                  Automatic confirmations 24-48 hours before appointments with easy rescheduling options.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-3 text-foreground">Service Updates</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time updates on service status, arrival times, and completion notifications.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-3 text-foreground">Follow-up Surveys</h3>
                <p className="text-muted-foreground text-sm">
                  Automated feedback collection and review requests after service completion.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-3 text-foreground">Payment Reminders</h3>
                <p className="text-muted-foreground text-sm">
                  Gentle payment reminders with secure payment links and multiple payment options.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-3 text-foreground">Emergency Alerts</h3>
                <p className="text-muted-foreground text-sm">
                  Immediate notifications for urgent matters with priority routing to on-call staff.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-3 text-foreground">Promotional Campaigns</h3>
                <p className="text-muted-foreground text-sm">
                  Targeted messaging for special offers, seasonal services, and referral programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Compliant by <span className="text-gradient">design</span>
            </h2>
            <p className="section-subtitle mb-12">
              Built-in opt-out handling, consent management, and international compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-2xl font-bold text-foreground mb-2">TCPA</div>
                <div className="text-sm text-muted-foreground">Compliant messaging with consent verification</div>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-2xl font-bold text-foreground mb-2">GDPR</div>
                <div className="text-sm text-muted-foreground">European data protection standards</div>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-2xl font-bold text-foreground mb-2">Auto Opt-out</div>
                <div className="text-sm text-muted-foreground">Instant opt-out processing and suppression</div>
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
              Ready to upgrade your messaging?
            </h2>
            <p className="section-subtitle mb-8">
              See how AI messaging can keep customers informed and engaged across every channel.
            </p>
            
            <button 
              onClick={handleBookDemo}
              className="btn-primary magnetic-hover group text-lg px-8 py-4"
            >
              Book a Private Demo
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
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

export default AIMessaging;