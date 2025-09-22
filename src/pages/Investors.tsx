import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Target, Globe, Users, Zap, DollarSign } from "lucide-react";

const Investors = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const marketMetrics = [
    { label: "Customer Service Market", value: "$58B", description: "Global market size" },
    { label: "AI Services Growth", value: "34%", description: "Annual growth rate" },
    { label: "SMB Penetration", value: "<5%", description: "Current AI adoption" },
    { label: "TAM Opportunity", value: "$12B", description: "Addressable market" }
  ];

  const traction = [
    { label: "Revenue Growth", value: "400%", description: "Year-over-year" },
    { label: "Customer Retention", value: "98%", description: "Annual retention rate" },
    { label: "Calls Processed", value: "10M+", description: "Total conversations" },
    { label: "Enterprise Customers", value: "50+", description: "Fortune 500 clients" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="leadbal-chip mb-6 inline-flex">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>Investors</span>
            </div>
            
            <h1 className="section-title mb-6">
              The future of <span className="text-gradient">customer service</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              Leadbal is democratizing world-class customer service with AI employees that work 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Schedule Investor Meeting
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => console.log("Pitch deck")}
                className="btn-secondary magnetic-hover group"
              >
                <Users className="mr-2 w-4 h-4" />
                Download Pitch Deck
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Massive market <span className="text-gradient">opportunity</span>
            </h2>
            <p className="section-subtitle">
              The customer service industry is ripe for AI transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {marketMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 border border-border text-center hover:shadow-elegant-hover transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="font-medium text-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-6">The problem</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Missed opportunities</h3>
                    <p className="text-muted-foreground">
                      27% of calls go unanswered, representing billions in lost revenue annually.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Rising costs</h3>
                    <p className="text-muted-foreground">
                      Customer service costs increase 8-12% yearly while quality remains inconsistent.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Scalability limits</h3>
                    <p className="text-muted-foreground">
                      Traditional solutions require linear hiring and training for growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-semibold mb-6 text-foreground text-center">Cost of Poor Service</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Missed calls</span>
                    <span className="font-semibold text-foreground">$62B annually</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Customer churn</span>
                    <span className="font-semibold text-foreground">$136B annually</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Training costs</span>
                    <span className="font-semibold text-foreground">$70B annually</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Total market pain</span>
                      <span className="text-xl font-bold text-foreground">$268B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our <span className="text-gradient">solution</span>
            </h2>
            <p className="section-subtitle">
              AI employees that deliver world-class service at enterprise scale.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-foreground">Instant Scale</h3>
                <p className="text-muted-foreground text-sm">
                  Handle unlimited conversations simultaneously with consistent quality.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-foreground">90% Cost Reduction</h3>
                <p className="text-muted-foreground text-sm">
                  Dramatically lower operational costs while improving service quality.
                </p>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 text-foreground">Zero Training</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy in days, not months. No hiring, training, or turnover costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Proven <span className="text-gradient">traction</span>
            </h2>
            <p className="section-subtitle">
              Strong fundamentals with exceptional growth metrics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {traction.map((metric, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-elegant-hover transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-medium text-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-to-r from-card/30 to-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">
              The <span className="text-gradient">vision</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              "Every business deserves world-class customer service. We're building the infrastructure that makes this possible — not just for the Fortune 500, but for every business that wants to compete on service quality."
            </p>
            
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold mb-6 text-foreground">Market Leadership Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Global Reach</h4>
                  <p className="text-muted-foreground text-sm">Multi-language, multi-region deployment</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Platform Play</h4>
                  <p className="text-muted-foreground text-sm">Ecosystem of AI employees and integrations</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Network Effects</h4>
                  <p className="text-muted-foreground text-sm">Better with scale and data</p>
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
              Join the future of customer service
            </h2>
            <p className="section-subtitle mb-8">
              Partner with us to democratize world-class customer service for every business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover group"
              >
                Schedule Investor Meeting
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => console.log("Contact investors")}
                className="text-primary hover:text-primary/80 font-medium transition-colors group flex items-center justify-center"
              >
                <Users className="mr-2 w-4 h-4" />
                investors@leadbal.com
              </button>
            </div>
            
            <p className="smallprint mt-8">
              Series A round open to strategic and financial investors.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;