import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const MicroForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open Cal.com overlay after form submission
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
    
    setIsSubmitting(false);
    setEmail("");
    setPhone("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-card/30 to-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-background rounded-3xl p-8 shadow-elegant border border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Prefer we schedule it for you?
            </h3>
            <p className="text-muted-foreground mb-8">
              Share your contact details and we'll reach out to book your private demo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (for confirmation)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center magnetic-hover group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Requesting..."
                ) : (
                  <>
                    Request Scheduling
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <p className="smallprint mt-6">
              By submitting, you consent to contact about a demo and acknowledge our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroForm;