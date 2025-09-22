import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Cpu, Shield, Zap, Globe, Database, Code } from "lucide-react";

const Technology = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const techStack = [
    {
      icon: Cpu,
      title: "Advanced AI Models",
      description: "Latest LLMs fine-tuned for conversation, scheduling, and customer service."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Sub-second response times with edge computing and optimized inference."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 controls, encryption in transit and at rest, and GDPR alignment."
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.9% uptime and automatic failover."
    }
  ];

  const integrations = [
    "Google Calendar", "Outlook", "Salesforce", "HubSpot", "Zoom", "Teams", 
    "Slack", "Zapier", "Webhooks", "REST APIs", "CRMs", "EMRs"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="leadbal-chip mb-6 inline-flex">
              <Cpu className="w-4 h-4 mr-2" />
              <span>Technology</span>
            </div>
            
            <h1 className="section-title mb-6">
              Built for <span className="text-gradient">scale</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Enterprise-grade infrastructure that handles millions of conversations with sub-second response times.
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
                onClick={() => console.log("Tech demo")}
                className="btn-secondary magnetic-hover group"
              >
                <Play className="mr-2 w-4 h-4" />
                Technical Deep Dive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Cutting-edge <span className="text-gradient">architecture</span>
            </h2>
            <p className="section-subtitle">
              Built on modern AI infrastructure designed for reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              How it all <span className="text-gradient">works</span>
            </h2>
            <p className="section-subtitle">
              From call routing to conversation processing, every component is optimized for performance.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Ingestion Layer</h3>
                <p className="text-muted-foreground text-sm">
                  Receives calls, messages, and emails from multiple channels with automatic routing.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">AI Processing</h3>
                <p className="text-muted-foreground text-sm">
                  Natural language understanding, intent recognition, and response generation.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Integration Layer</h3>
                <p className="text-muted-foreground text-sm">
                  Connects to your CRM, calendar, and business systems for seamless workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Built for <span className="text-gradient">performance</span>
            </h2>
            <p className="section-subtitle">
              Enterprise-grade reliability and speed that scales with your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">&lt;300ms</div>
                <div className="text-sm text-muted-foreground">Response time</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Calls processed</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Integrates with <span className="text-gradient">everything</span>
            </h2>
            <p className="section-subtitle">
              Connect to your existing tools and workflows without disruption.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border border-border text-center hover:shadow-elegant-hover transition-all duration-300"
                >
                  <span className="text-muted-foreground font-medium">{integration}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="/technology/integrations"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all integrations
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-card/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Ready to see the technology in action?
            </h2>
            <p className="section-subtitle mb-8">
              Book a technical demo and see how our AI infrastructure can power your customer service.
            </p>
            
            <button 
              onClick={handleBookDemo}
              className="btn-primary magnetic-hover group text-lg px-8 py-4"
            >
              Book Technical Demo
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <p className="smallprint mt-8">
              SOC 2 controls, GDPR alignment, HIPAA options available.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;