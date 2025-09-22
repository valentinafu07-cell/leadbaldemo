import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Target, Zap } from "lucide-react";

const About = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const values = [
    {
      icon: Target,
      title: "Reliability",
      description: "AI employees that work exactly as promised, every single time."
    },
    {
      icon: Users,
      title: "Transparency",
      description: "Clear pricing, clear capabilities, clear results. No hidden complexity."
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "From single practitioner to enterprise contact center — built to grow."
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
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs font-bold">🚀</span>
              <span>About Leadbal</span>
            </div>
            
            <h1 className="section-title mb-6">
              About <span className="text-gradient">Leadbal</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Make world-class customer service available to every business, 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Make world-class customer service available to every business, 24/7. We believe every customer deserves instant, accurate help — regardless of business size or budget.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AI employees are inevitable because customers expect instant, accurate help. The winners will combine voice quality, orchestration, controls, and taste.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Never miss another opportunity</div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-semibold text-foreground">100%</div>
                        <div className="text-xs text-muted-foreground">Call pickup rate</div>
                      </div>
                      <div>
                        <div className="text-xl font-semibold text-foreground">3s</div>
                        <div className="text-xs text-muted-foreground">Average response time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our <span className="text-gradient">values</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Reliability, transparency, scalability, human-centered AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-elegant-hover transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-gradient-to-r from-card/30 to-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-3xl p-12 border border-border shadow-elegant">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4">Founder's Note</h2>
              </div>
              
              <div className="prose prose-lg mx-auto text-center">
                <blockquote className="text-xl text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-6">
                  "AI employees are inevitable because customers expect instant, accurate help. The winners will combine voice quality, orchestration, controls, and taste.
                  <br /><br />
                  We're building the infrastructure that makes world-class customer service accessible to every business — not just the Fortune 500."
                </blockquote>
                
                <div className="mt-8 text-center">
                  <div className="text-lg font-semibold text-foreground">Leadbal Team</div>
                  <div className="text-sm text-muted-foreground">Founders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">
              The <span className="text-gradient">future</span> of customer service
            </h2>
            <p className="section-subtitle mb-12">
              We standardize how businesses talk, book, and follow up — autonomously.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">Always on</div>
                <div className="text-sm text-muted-foreground">24/7 availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">Always consistent</div>
                <div className="text-sm text-muted-foreground">Brand-safe responses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">Always learning</div>
                <div className="text-sm text-muted-foreground">Continuous improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-2">Always measurable</div>
                <div className="text-sm text-muted-foreground">Complete analytics</div>
              </div>
            </div>
            
            <button 
              onClick={handleBookDemo}
              className="btn-primary magnetic-hover group text-lg px-8 py-4"
            >
              Join the Future
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;