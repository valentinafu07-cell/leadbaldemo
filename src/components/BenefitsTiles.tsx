import React from "react";
import { Phone, Calendar, Users, Settings } from "lucide-react";

const BenefitsTiles = () => {
  const benefits = [
    {
      icon: Phone,
      title: "Capture every lead",
      description: "Instant pickup; no voicemail black holes.",
      gradient: "from-blue-500/10 to-primary/5"
    },
    {
      icon: Calendar,
      title: "Book more, no-show less",
      description: "Smart confirmations & rescheduling.",
      gradient: "from-emerald-500/10 to-green-500/5"
    },
    {
      icon: Users,
      title: "Revive old pipelines",
      description: "Respectful outbound follow-ups that convert.",
      gradient: "from-purple-500/10 to-violet-500/5"
    },
    {
      icon: Settings,
      title: "Done-for-you setup",
      description: "Forwarding, calendars, scripts, and QA included.",
      gradient: "from-orange-500/10 to-amber-500/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Why businesses choose <span className="text-gradient">AI employees</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Never miss opportunity. Always professional. Built for your workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br ${benefit.gradient} border border-border/50 hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="smallprint">
            Setup time and outcomes vary by integration complexity. Representative pilot results; individual outcomes vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsTiles;