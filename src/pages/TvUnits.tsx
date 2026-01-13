import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Tv, Speaker, Wifi } from "lucide-react";

const TvUnits = () => {
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
              Entertainment Centers
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
              TV{" "}
              <span className="text-accent">Units</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stylish and functional TV units that enhance your entertainment experience while complementing your decor.
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
                <Tv className="w-24 h-24 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Premium TV Units</p>
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
                icon: <Tv className="w-6 h-6" />,
                title: "Cable Management",
                description: "Smart designs that hide cables and maintain clean aesthetics"
              },
              {
                icon: <Speaker className="w-6 h-6" />,
                title: "Audio Integration",
                description: "Built-in solutions for sound systems and speakers"
              },
              {
                icon: <Wifi className="w-6 h-6" />,
                title: "Modern Features",
                description: "Integrated charging ports and smart home compatibility"
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
                Get TV Unit Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TvUnits;
