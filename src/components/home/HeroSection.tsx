import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxury_kitchen_banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-24 sm:pt-28 md:pt-32 lg:pt-48 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury modular kitchen"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gold/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-sage/20 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-28 lg:pb-48">
        <div className="max-w-3xl lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 to-sage/20 backdrop-blur-sm border border-gold/30 text-gold rounded-full text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4" />
              Since 1998 • World-Class Craftsmanship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6"
          >
            We Don't Just Build –{" "}
            <span className="bg-gradient-to-r from-gold via-gold-light to-sage bg-clip-text text-transparent">
              We Define Culture
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed"
          >
            Experience world-class modular furnishing that transforms your home into a
            masterpiece of design and functionality. Where luxury meets innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Button variant="glow" size="xl" asChild className="w-full sm:w-auto text-sm sm:text-base group">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="glass"
              size="xl"
              className="w-full sm:w-auto text-sm sm:text-base group"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage rounded-full"></div>
              <span>5000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-light rounded-full"></div>
              <span>ISO Certified Quality</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Stats Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gold/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Kitchen Projects", value: "1750+", color: "text-gold" },
              { label: "Wardrobe Designs", value: "2300+", color: "text-sage" },
              { label: "Living Spaces", value: "1500+", color: "text-gold-dark" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className={`font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;