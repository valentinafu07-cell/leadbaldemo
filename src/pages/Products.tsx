import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Phone, Bot, MessageSquare, Calendar, Mail } from "lucide-react";

const Products = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const handleListenDemo = () => {
    console.log("Listen to demo clicked");
  };

  const products = [
    {
      icon: Bot,
      title: "AI Receptionist",
      description: "Answer every call instantly. Qualify, schedule, and route — 24/7.",
      features: ["Brand-safe voice", "Booking actions", "Transcripts", "Analytics"],
      href: "/products/ai-receptionist",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "AI Outbound",
      description: "Revive old leads and follow up automatically.",
      features: ["Consent-aware sequences", "Voice/SMS/email", "Quiet hours", "Clear outcomes"],
      href: "/products/ai-outbound",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "AI Inbox",
      description: "Email that reads, prioritizes, and replies.",
      features: ["Draft → approval → send", "Guardrails", "Thresholds", "Auto-logging"],
      href: "/products/ai-inbox",
      color: "text-purple-500"
    },
    {
      icon: MessageSquare,
      title: "AI SMS & Messaging",
      description: "Confirmations, reminders, and two-way updates.",
      features: ["SMS & WhatsApp", "Web chat", "Unified history", "Opt-out handling"],
      href: "/products/ai-messaging",
      color: "text-orange-500"
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
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs font-bold">AI</span>
              <span>Complete Employee Suite</span>
            </div>
            
            <h1 className="section-title mb-6">
              AI Employee <span className="text-gradient">Suite</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Inbound, outbound, inbox, and messaging — built to capture revenue around the clock.
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
                onClick={handleListenDemo}
                className="btn-secondary magnetic-hover group"
              >
                <Play className="mr-2 w-4 h-4" />
                Listen to a Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="group bg-background rounded-3xl p-8 border border-border hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-8 h-8 ${product.color}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href={product.href}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Built for <span className="text-gradient">enterprise</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Granular controls, audit trails, and integration flexibility for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agent Studio</h3>
              <p className="text-muted-foreground">Prompts, skills, and guardrails — curated for on-brand conversations.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Monitor</h3>
              <p className="text-muted-foreground">Transcripts, flags, escalation reasons, and coaching workflows.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-muted-foreground">Topics, CSAT signals, booking rates, and revenue attribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-card/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Ready to deploy AI employees?
            </h2>
            <p className="section-subtitle mb-8">
              See how Leadbal integrates with your existing workflows and starts capturing more revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Representative pilot results. Individual outcomes vary.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;