import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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
  { name: "Kitchen", path: "/products/kitchen" },
  { name: "Wardrobe", path: "/products/wardrobe" },
  { name: "Living Room", path: "/products/living" },
  { name: "TV Units", path: "/products/tv-units" },
  { name: "Vanities", path: "/products/vanities" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/choose-imly";
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
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="imly studio"
              className={`h-10 w-auto sm:h-11 md:h-12 transition-all duration-300 ${isHome && !isScrolled ? "brightness-0 invert" : ""}`}
            />
          </Link>

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
                          className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]"
                        >
                          {productDropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-2 text-sm hover:bg-accent/10 transition-colors ${location.pathname === item.path ? "text-accent font-medium" : "text-foreground"}`}
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
    </motion.header>
  );
};

export default Header;
