import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast can we launch?",
      answer: "Most businesses launch within 3-4 weeks with forwarding, calendar integration, and initial training. Setup includes voice training, calendar connections, and workflow configuration."
    },
    {
      question: "Do we need to change our phone number?",
      answer: "No. Keep your number and forward/port. We can also provision a dedicated line. Your existing business number stays exactly the same for customers."
    },
    {
      question: "Which calendars do you integrate with?",
      answer: "Google, Outlook, Apple, Calendly, Acuity and more. We sync in real-time with your existing scheduling systems and can handle multiple team calendars."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="section-subtitle">
              Get answers to common questions about implementing AI employees.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/resources"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all resources
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;