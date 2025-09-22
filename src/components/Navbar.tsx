
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: "Products", 
      href: "/products",
      dropdownItems: [
        { name: "AI Employee Suite", href: "/products" },
        { name: "AI Receptionist", href: "/products/ai-receptionist" },
        { name: "AI Outbound", href: "/products/ai-outbound" },
        { name: "AI Inbox", href: "/products/ai-inbox" },
        { name: "AI SMS & Messaging", href: "/products/ai-messaging" },
      ]
    },
    { 
      name: "Solutions", 
      href: "/solutions",
      dropdownItems: [
        { name: "Healthcare & Dental", href: "/solutions/healthcare" },
        { name: "Legal & Professional Services", href: "/solutions/legal" },
        { name: "Home Services", href: "/solutions/home-services" },
        { name: "Real Estate", href: "/solutions/real-estate" },
        { name: "Enterprise Contact Centers", href: "/solutions/enterprise" },
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { 
      name: "Technology", 
      href: "/technology",
      dropdownItems: [
        { name: "Technology Overview", href: "/technology" },
        { name: "Integrations Hub", href: "/technology/integrations" },
        { name: "Security Center", href: "/technology/security" },
        { name: "API Documentation", href: "/technology/api" },
      ]
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Investors", href: "/investors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleBookDemo = () => {
    // Open Cal.com overlay
    window.open("https://cal.com/leadbal/15min?user=leadbal&overlayCalendar=true", "_blank");
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md shadow-elegant border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container py-6">
          <div className="flex items-center justify-between">
            {/* Logo - Centered and Bigger */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <img 
                  src="/leadbal-logo.jpg" 
                  alt="Leadbal" 
                  className="h-12 lg:h-16 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdownItems && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="nav-link flex items-center text-sm font-medium"
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <ChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdownItems && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-elegant-hover p-2">
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={handleBookDemo}
                className="btn-primary magnetic-hover"
              >
                Book a Private Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="section-container py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                    {item.dropdownItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <button 
                    onClick={handleBookDemo}
                    className="btn-primary w-full justify-center"
                  >
                    Book a Private Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky CTA Bar - Mobile */}
      <div className="lg:hidden sticky-cta">
        <button 
          onClick={handleBookDemo}
          className="btn-primary w-full justify-center magnetic-hover"
        >
          Book a Private Demo
        </button>
      </div>
    </>
  );
};

export default Navbar;
