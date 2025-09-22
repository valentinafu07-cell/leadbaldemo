import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Users, Database, Mail, Phone, Zap, Globe, Settings } from "lucide-react";

const Integrations = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const categories = [
    {
      icon: Calendar,
      title: "Calendars & Scheduling",
      integrations: [
        { name: "Google Calendar", description: "Real-time availability and booking" },
        { name: "Outlook Calendar", description: "Enterprise calendar integration" },
        { name: "Apple Calendar", description: "iCloud calendar sync" },
        { name: "Calendly", description: "Scheduling automation" },
        { name: "Acuity Scheduling", description: "Advanced booking features" }
      ]
    },
    {
      icon: Users,
      title: "CRM & Sales",
      integrations: [
        { name: "Salesforce", description: "Lead capture and opportunity tracking" },
        { name: "HubSpot", description: "Marketing and sales automation" },
        { name: "Pipedrive", description: "Pipeline management" },
        { name: "Zoho CRM", description: "Customer relationship management" },
        { name: "Monday.com", description: "Project and customer management" }
      ]
    },
    {
      icon: Phone,
      title: "Communication",
      integrations: [
        { name: "Zoom", description: "Video meeting scheduling" },
        { name: "Microsoft Teams", description: "Enterprise communication" },
        { name: "Slack", description: "Team notifications and alerts" },
        { name: "WhatsApp Business", description: "Messaging automation" },
        { name: "Twilio", description: "SMS and voice integration" }
      ]
    },
    {
      icon: Database,
      title: "Healthcare & Professional",
      integrations: [
        { name: "Epic EMR", description: "Electronic health records" },
        { name: "Cerner", description: "Healthcare information systems" },
        { name: "Practice Fusion", description: "Medical practice management" },
        { name: "Clio", description: "Legal practice management" },
        { name: "MyCase", description: "Legal case management" }
      ]
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
              <Zap className="w-4 h-4 mr-2" />
              <span>Integrations</span>
            </div>
            
            <h1 className="section-title mb-6">
              Connects with <span className="text-gradient">everything</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Seamless integration with your existing tools and workflows. No disruption, just enhanced capability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Book Integration Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => console.log("API docs")}
                className="btn-secondary magnetic-hover group"
              >
                <Settings className="mr-2 w-4 h-4" />
                View API Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Popular <span className="text-gradient">integrations</span>
            </h2>
            <p className="section-subtitle">
              Connect Leadbal AI to your favorite tools and platforms.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.integrations.map((integration, index) => (
                      <div
                        key={index}
                        className="bg-background rounded-xl p-6 border border-border hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
                      >
                        <h4 className="font-semibold text-foreground mb-2">{integration.name}</h4>
                        <p className="text-muted-foreground text-sm">{integration.description}</p>
                        <div className="mt-4">
                          <span className="inline-flex items-center text-primary text-sm font-medium">
                            Available now
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API & Custom Integrations */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-6">
                  Custom <span className="text-gradient">integrations</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Don't see your tool listed? Our REST API and webhook system makes it easy to connect any platform.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 shrink-0"></div>
                    <span className="text-muted-foreground">RESTful API with OpenAPI documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 shrink-0"></div>
                    <span className="text-muted-foreground">Real-time webhooks for instant updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 shrink-0"></div>
                    <span className="text-muted-foreground">Zapier integration for no-code automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 shrink-0"></div>
                    <span className="text-muted-foreground">Custom development support available</span>
                  </li>
                </ul>
                
                <button 
                  onClick={() => console.log("API docs")}
                  className="btn-secondary group"
                >
                  <Settings className="mr-2 w-4 h-4" />
                  View API Documentation
                </button>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Enterprise Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Dedicated integration support for enterprise customers with custom requirements.
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xl font-semibold text-foreground">99.9%</div>
                        <div className="text-xs text-muted-foreground">API uptime</div>
                      </div>
                      <div>
                        <div className="text-xl font-semibold text-foreground">&lt;100ms</div>
                        <div className="text-xs text-muted-foreground">Response time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Secure by <span className="text-gradient">design</span>
            </h2>
            <p className="section-subtitle">
              Enterprise-grade security and compliance for all integrations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">SOC 2 Type II</h3>
                <p className="text-muted-foreground text-sm">
                  Audited security controls for data protection and privacy.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Encrypted Data</h3>
                <p className="text-muted-foreground text-sm">
                  All data encrypted in transit and at rest using AES-256.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">GDPR Compliant</h3>
                <p className="text-muted-foreground text-sm">
                  European data protection standards with data residency options.
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
              Ready to integrate?
            </h2>
            <p className="section-subtitle mb-8">
              See how Leadbal connects with your existing tools and enhances your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Book Integration Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => console.log("Contact sales")}
                className="text-primary hover:text-primary/80 font-medium transition-colors group flex items-center justify-center"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Sales for Custom Integrations
              </button>
            </div>
            
            <p className="smallprint mt-8">
              Custom integrations available for enterprise customers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;