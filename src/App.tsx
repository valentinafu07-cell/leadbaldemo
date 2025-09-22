import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AIReceptionist from "./pages/products/AIReceptionist";
import AIOutbound from "./pages/products/AIOutbound";
import AIInbox from "./pages/products/AIInbox";
import AIMessaging from "./pages/products/AIMessaging";
import { HealthcareSolution, LegalSolution, HomeServicesSolution, RealEstateSolution, EnterpriseSolution, Resources, Careers, Press, Terms, Privacy, Cookies, Accessibility, DPA } from "./temp_pages_stub";
import Technology from "./pages/Technology";
import Integrations from "./pages/Integrations";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ai-receptionist" element={<AIReceptionist />} />
          <Route path="/products/ai-outbound" element={<AIOutbound />} />
          <Route path="/products/ai-inbox" element={<AIInbox />} />
          <Route path="/products/ai-messaging" element={<AIMessaging />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolution />} />
          <Route path="/solutions/legal" element={<LegalSolution />} />
          <Route path="/solutions/home-services" element={<HomeServicesSolution />} />
          <Route path="/solutions/real-estate" element={<RealEstateSolution />} />
          <Route path="/solutions/enterprise" element={<EnterpriseSolution />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/integrations" element={<Integrations />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/legal/accessibility" element={<Accessibility />} />
          <Route path="/legal/dpa" element={<DPA />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
