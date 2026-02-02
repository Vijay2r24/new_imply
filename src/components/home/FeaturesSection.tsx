import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  Palette, 
  Wrench,
  Sparkles,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Comprehensive warranty coverage on all our modular furniture with dedicated after-sales support.",
    color: "gold"
  },
  {
    icon: Award,
    title: "ISO Certified Quality",
    description: "International quality standards with rigorous testing and premium materials sourcing.",
    color: "sage"
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Professional installation within 7-14 days with minimal disruption to your daily routine.",
    color: "gold-light"
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Free design consultation with our experienced interior designers and space planners.",
    color: "sage-dark"
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Personalized solutions tailored to your space, style preferences, and functional needs.",
    color: "gold"
  },
  {
    icon: Wrench,
    title: "Professional Service",
    description: "End-to-end service from design conceptualization to final installation and maintenance.",
    color: "sage"
  }
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/10 to-sage/10 border border-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Imly
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Crafting Excellence in{" "}
            <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
              Every Detail
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Experience the perfect blend of innovation, quality, and craftsmanship that sets us apart in the modular furniture industry.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 border border-${feature.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/10 to-sage/10 backdrop-blur-sm border border-gold/20 rounded-full">
            <CheckCircle className="w-5 h-5 text-gold" />
            <span className="text-foreground font-medium">Trusted by 5000+ Happy Customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;