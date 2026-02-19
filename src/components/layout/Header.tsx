import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Settings, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Group-1.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products", hasDropdown: true },
  { name: "Choose Imly", path: "/choose-imly" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

const productDropdownItems = [
  { 
    name: "Kitchen", 
    path: "/products/kitchen",
    subcategories: ["Classic", "Eco"]
  },
  { 
    name: "Wardrobe", 
    path: "/products/wardrobe",
    subcategories: ["Slido", "Flipo"]
  },
  { 
    name: "Living Room", 
    path: "/products/living",
    subcategories: []
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/choose-imly" || location.pathname.startsWith("/products/");
  const textColorClass = isHome && !isScrolled ? "text-white" : "text-foreground";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Ensure menu button is always visible on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    
    // Set initial state
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAdminModalOpen) {
        setIsAdminModalOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isAdminModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isAdminModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAdminModalOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdminModalOpen(true);
  };

  const handleAdminNavigation = (url: string) => {
    window.open(url, '_blank');
    setIsAdminModalOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-18 lg:h-24">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="imly studio"
              className={`h-10 w-auto sm:h-11 md:h-12 transition-all duration-300 ${isHome && !isScrolled ? "brightness-0 invert" : ""}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <button
                      className={`relative font-medium text-sm tracking-wide transition-colors duration-300 flex items-center gap-1 ${location.pathname.startsWith('/products')
                        ? "text-accent"
                        : `${textColorClass} hover:text-accent`
                        }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="flex">
                            {/* Left Side - Categories */}
                            <div className="w-56 bg-gradient-to-br from-gold/10 to-gold/5">
                              {productDropdownItems.map((item, idx) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onMouseEnter={() => setHoveredCategory(item.name)}
                                  className={`flex items-center justify-between px-6 py-5 transition-all duration-200 ${
                                    idx !== productDropdownItems.length - 1 ? 'border-b border-gold/10' : ''
                                  } ${
                                    hoveredCategory === item.name 
                                      ? 'bg-gold/20 text-gold' 
                                      : 'text-foreground hover:bg-gold/10'
                                  }`}
                                >
                                  <span className="font-semibold text-lg">
                                    {item.name}
                                  </span>
                                  {item.subcategories.length > 0 && (
                                    <ChevronDown className={`w-5 h-5 -rotate-90 transition-colors ${
                                      hoveredCategory === item.name ? 'text-gold' : 'text-muted-foreground'
                                    }`} />
                                  )}
                                </Link>
                              ))}
                            </div>

                            {/* Right Side - Subcategories */}
                            <div className="w-56 bg-gradient-to-br from-[#B8956A] to-[#A67C52] p-8 flex flex-col justify-center">
                              <div className="space-y-8">
                                {hoveredCategory && productDropdownItems
                                  .find(item => item.name === hoveredCategory)
                                  ?.subcategories.map((sub, idx, arr) => (
                                    <div key={sub}>
                                      <Link
                                        to={`${productDropdownItems.find(item => item.name === hoveredCategory)?.path}/${sub.toLowerCase()}`}
                                        className="block text-center group"
                                      >
                                        <span className="text-3xl font-bold text-white group-hover:text-white/80 transition-colors drop-shadow-lg">
                                          {sub}
                                        </span>
                                      </Link>
                                      {idx < arr.length - 1 && (
                                        <hr className="mt-8 border-t border-white/30" />
                                      )}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${location.pathname === link.path
                      ? "text-accent"
                      : `${textColorClass} hover:text-accent`
                      }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919606032020" className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textColorClass} hover:text-accent`}>
              <Phone className="w-4 h-4" />
              +91 96060 32020
            </a>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Always show on mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 transition-colors duration-300 flex items-center justify-center rounded-lg ${textColorClass} hover:bg-accent/10`}
              aria-label="Toggle mobile menu"
              style={{ display: 'block' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        className={`w-full text-left py-2 sm:py-3 font-medium text-base sm:text-lg flex items-center justify-between ${location.pathname.startsWith('/products')
                          ? "text-accent"
                          : "text-foreground"
                          }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isProductsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2"
                          >
                            {productDropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block py-2 text-sm hover:text-accent transition-colors ${location.pathname === item.path ? "text-accent font-medium" : "text-muted-foreground"}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsProductsDropdownOpen(false);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block py-2 sm:py-3 font-medium text-base sm:text-lg ${location.pathname === link.path
                        ? "text-accent"
                        : "text-foreground"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 sm:pt-4">
                <Button variant="gold" className="w-full text-sm sm:text-base" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Modal */}
      <AnimatePresence>
        {isAdminModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setIsAdminModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-background rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsAdminModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>

              {/* Modal Content */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-sage/20 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-10 h-10 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Admin Access
                </h2>
                <p className="text-muted-foreground">
                  Choose your admin panel to continue
                </p>
              </div>

              {/* Admin Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => handleAdminNavigation('https://admin1.imly.com')}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <UserCog className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        Admin Panel 1
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Main administration dashboard
                      </p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gold -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => handleAdminNavigation('https://admin2.imly.com')}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-sage/10 to-sage/5 border border-sage/20 hover:border-sage/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Settings className="w-6 h-6 text-sage" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        Admin Panel 2
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary management system
                      </p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-sage -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Close Button */}
              <div className="mt-6">
                <Button
                  onClick={() => setIsAdminModalOpen(false)}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <X className="w-4 h-4 mr-2" />
                  Close
                </Button>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-center text-muted-foreground">
                  Press <kbd className="px-2 py-1 bg-muted rounded text-foreground font-mono">ESC</kbd> or click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
