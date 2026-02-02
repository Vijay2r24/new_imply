import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal-light">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-sage/10" />
        
        {/* Animated Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sage/30 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 to-sage/20 backdrop-blur-sm border border-gold/30 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
              <Sparkles className="w-4 h-4" />
              Ready to Transform Your Home?
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Create Your{" "}
              <span className="bg-gradient-to-r from-gold via-gold-light to-sage bg-clip-text text-transparent">
                Dream Space
              </span>
            </h2>
            
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Get a free consultation with our expert designers and discover how we can transform your home with premium modular furniture solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="glow" size="xl" className="text-base group" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="glass" size="xl" className="text-base group">
              <Phone className="w-5 h-5 mr-2" />
              Call +91 96060 32020
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Calendar,
                title: "Free Consultation",
                description: "Expert design advice at no cost"
              },
              {
                icon: MessageCircle,
                title: "24/7 Support",
                description: "Always here to help you"
              },
              {
                icon: Sparkles,
                title: "Premium Quality",
                description: "Only the finest materials used"
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>5000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage rounded-full"></div>
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-light rounded-full"></div>
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-light rounded-full"></div>
              <span>ISO Certified Quality</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;