import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Heart, Scale, Wrench, Home, Building, Utensils } from "lucide-react";

const Solutions = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const solutions = [
    {
      icon: Heart,
      title: "Healthcare & Dental",
      description: "Patient-safe voice AI that books, triages, and updates — with HIPAA options.",
      features: ["HIPAA compliance options", "Urgent call routing", "Appointment reminders", "Patient intake"],
      href: "/solutions/healthcare",
      color: "text-red-500"
    },
    {
      icon: Scale,
      title: "Legal & Professional Services",
      description: "Confidential intake, conflict checks, and scheduling — without missed calls.",
      features: ["Confidential intake", "Conflict screening", "Calendar integration", "Client communication"],
      href: "/solutions/legal",
      color: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Home Services",
      description: "Answer every emergency and schedule every estimate — day or night.",
      features: ["Emergency routing", "Estimate scheduling", "Service dispatch", "Follow-up automation"],
      href: "/solutions/home-services",
      color: "text-orange-500"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Speed-to-lead that wins: qualification and viewings on demand.",
      features: ["Lead qualification", "Showing scheduling", "Property inquiries", "Market updates"],
      href: "/solutions/real-estate",
      color: "text-green-600"
    },
    {
      icon: Building,
      title: "Enterprise Contact Centers",
      description: "Elastic capacity, granular controls, and observability.",
      features: ["Scalable capacity", "Advanced analytics", "Custom integrations", "SLA management"],
      href: "/solutions/enterprise",
      color: "text-purple-600"
    },
    {
      icon: Utensils,
      title: "Hospitality",
      description: "Reservations & concierge services that never sleep.",
      features: ["Reservation booking", "Concierge services", "Guest communication", "Special requests"],
      href: "/solutions/hospitality",
      color: "text-pink-500"
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
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs font-bold">⚡</span>
              <span>Industry-Specific Solutions</span>
            </div>
            
            <h1 className="section-title mb-6">
              Solutions by <span className="text-gradient">industry</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Configured workflows, trained intents, and compliance controls for your specific industry needs.
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
                Listen to a Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="group bg-background rounded-2xl p-8 border border-border hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                      <Icon className={`w-8 h-8 ${solution.color}`} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">
                Why industry-specific <span className="text-gradient">matters</span>
              </h2>
              <p className="section-subtitle">
                Generic solutions miss the nuances that matter most to your customers and compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Pre-trained for your domain</h3>
                    <p className="text-muted-foreground">
                      Industry-specific vocabulary, common scenarios, and workflows built-in from day one.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Compliance by design</h3>
                    <p className="text-muted-foreground">
                      HIPAA options, legal privilege, financial regulations — handled correctly out of the box.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Faster deployment</h3>
                    <p className="text-muted-foreground">
                      Skip months of training. Your AI employees understand your business from the start.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">3-5 days</div>
                    <div className="text-sm text-muted-foreground">Average deployment time</div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Generic AI solution</span>
                        <span className="text-sm font-medium">6-12 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Leadbal industry solution</span>
                        <span className="text-sm font-medium text-primary">3-5 days</span>
                      </div>
                    </div>
                  </div>
                </div>
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
              See your industry solution in action
            </h2>
            <p className="section-subtitle mb-8">
              Book a demo tailored to your specific industry needs and compliance requirements.
            </p>
            
            <button 
              onClick={handleBookDemo}
              className="btn-primary magnetic-hover group text-lg px-8 py-4"
            >
              Book a Private Demo
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
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

export default Solutions;