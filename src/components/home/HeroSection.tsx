import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxury_kitchen_banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start pt-32 lg:pt-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury modular kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-32 lg:pb-48">
        <div className="max-w-3xl lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium tracking-wide">
              Since 1998 • World-Class Craftsmanship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight mb-6"
          >
            We Don't Just Build –{" "}
            <span className="text-gold">We Define Culture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl"
          >
            Experience world-class modular furnishing that transforms your home into a
            masterpiece of design and functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gold" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="w-full border-white/40 text-white hover:bg-white hover:text-charcoal sm:w-auto"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: "Kitchen", value: "1750+" },
              { label: "Wardrobe", value: "2300+" },
              { label: "Living", value: "1500+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;