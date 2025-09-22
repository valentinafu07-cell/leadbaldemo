import React from "react";
import { Shield, Lock, FileCheck } from "lucide-react";

const SecurityStrip = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC 2 controls",
      description: "Audit-ready logging and access governance.",
      disclaimer: "Not a certification statement."
    },
    {
      icon: Lock,
      title: "GDPR & CCPA",
      description: "DPA, regional storage options, deletion SLAs."
    },
    {
      icon: FileCheck,
      title: "HIPAA options",
      description: "BAA & restricted data flows for healthcare."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-background via-card/10 to-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Enterprise-grade <span className="text-gradient">security</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Built with compliance, privacy, and audit requirements from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 bg-background rounded-2xl border border-border hover:shadow-elegant-hover transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                {feature.disclaimer && (
                  <p className="smallprint text-muted-foreground/70">
                    {feature.disclaimer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/technology/security"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Trust Center
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecurityStrip;