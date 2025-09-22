import React from "react";
import { Heart, Scale, Wrench, Home, Utensils } from "lucide-react";

const IndustryCards = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA options, urgent routing.",
      href: "/solutions/healthcare",
      color: "text-red-500"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Confidential intake.",
      href: "/solutions/legal",
      color: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Home Services",
      description: "Estimates & dispatch.",
      href: "/solutions/home-services",
      color: "text-orange-500"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Speed-to-lead, viewings.",
      href: "/solutions/real-estate",
      color: "text-green-600"
    },
    {
      icon: Utensils,
      title: "Hospitality",
      description: "Reservations & concierge.",
      href: "/solutions/hospitality",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Built for your <span className="text-gradient">industry</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Tailored workflows, trained intents, and compliance controls for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <a
                key={index}
                href={industry.href}
                className="group block p-6 bg-background rounded-2xl border border-border hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1 text-center"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-card mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-8 h-8 ${industry.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/solutions"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Explore all solutions
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;