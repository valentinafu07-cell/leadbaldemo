import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Mail, FileText, Filter, Zap, Shield, Clock } from "lucide-react";

const AIInbox = () => {
  const handleBookDemo = () => {
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  const features = [
    {
      icon: Filter,
      title: "Smart Prioritization",
      description: "AI sorts emails by urgency, intent, and business value automatically."
    },
    {
      icon: FileText,
      title: "Draft Generation",
      description: "Generates contextual replies that match your tone and policies."
    },
    {
      icon: Shield,
      title: "Approval Workflow",
      description: "Human oversight for important decisions with one-click approval."
    },
    {
      icon: Clock,
      title: "Auto-scheduling",
      description: "Books meetings, sends calendar invites, and handles rescheduling."
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
              <Mail className="w-4 h-4 mr-2" />
              <span>AI Inbox</span>
            </div>
            
            <h1 className="section-title mb-6">
              Email that <span className="text-gradient">thinks</span>
            </h1>
            
            <p className="section-subtitle mb-12 max-w-2xl mx-auto">
              AI that reads, prioritizes, and drafts replies — with human oversight for peace of mind.
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
                Watch Demo Video
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
              Inbox management <span className="text-gradient">automated</span>
            </h2>
            <p className="section-subtitle">
              Stop drowning in emails. Let AI handle the reading, sorting, and drafting.
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

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              From chaos to <span className="text-gradient">clarity</span>
            </h2>
            <p className="section-subtitle">
              AI reads every email, understands context, and takes appropriate action.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Read & Analyze</h3>
                <p className="text-muted-foreground">
                  AI reads every email, extracts intent, urgency, and required actions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Draft Response</h3>
                <p className="text-muted-foreground">
                  Generates contextual replies using your tone, policies, and knowledge base.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Approve & Send</h3>
                <p className="text-muted-foreground">
                  Review AI-generated responses and approve with one click or edit as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Time back in your day
            </h2>
            <p className="section-subtitle mb-12">
              Stop spending hours on email. Let AI handle the heavy lifting.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-3xl font-bold text-foreground mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Less time in inbox</div>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-3xl font-bold text-foreground mb-2">3min</div>
                <div className="text-sm text-muted-foreground">Average response time</div>
              </div>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Approval rate</div>
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
              Ready to reclaim your inbox?
            </h2>
            <p className="section-subtitle mb-8">
              See how AI Inbox can transform email from a time sink into a productivity tool.
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

export default AIInbox;