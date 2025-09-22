// Temporary stub for remaining pages - these need to be created as full pages later

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-card/30">
      <div className="section-container text-center">
        <h1 className="section-title mb-6">{title}</h1>
        <p className="section-subtitle">Coming Soon</p>
      </div>
    </section>
    <Footer />
  </div>
);

export const HealthcareSolution = () => <ComingSoon title="Healthcare Solutions" />;
export const LegalSolution = () => <ComingSoon title="Legal Solutions" />;
export const HomeServicesSolution = () => <ComingSoon title="Home Services Solutions" />;
export const RealEstateSolution = () => <ComingSoon title="Real Estate Solutions" />;
export const EnterpriseSolution = () => <ComingSoon title="Enterprise Solutions" />;
export const Resources = () => <ComingSoon title="Resources" />;
export const Careers = () => <ComingSoon title="Careers" />;
export const Press = () => <ComingSoon title="Press" />;
export const Terms = () => <ComingSoon title="Terms of Service" />;
export const Privacy = () => <ComingSoon title="Privacy Policy" />;
export const Cookies = () => <ComingSoon title="Cookie Policy" />;
export const Accessibility = () => <ComingSoon title="Accessibility" />;
export const DPA = () => <ComingSoon title="Data Processing Agreement" />;