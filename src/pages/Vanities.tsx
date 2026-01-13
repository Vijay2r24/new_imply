import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sparkles, Package } from "lucide-react";

const Vanities = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
              Bathroom Elegance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Bathroom{" "}
              <span className="text-accent">Vanities</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform your bathroom with our elegant vanities that combine functionality with sophisticated design.
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-accent/10 to-secondary/20 h-[400px] lg:h-[600px] flex items-center justify-center">
              <div className="text-center">
                <Droplets className="w-24 h-24 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Premium Bathroom Vanities</p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "Water Resistant",
                description: "Premium materials designed to withstand bathroom conditions"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Modern Finishes",
                description: "Elegant designs that complement your bathroom decor"
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Smart Storage",
                description: "Efficient organization solutions for bathroom essentials"
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-accent">{feature.icon}</div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Get Vanity Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Vanities;
