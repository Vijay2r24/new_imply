import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sofa, Lamp, Coffee } from "lucide-react";
import livingImage from "@/assets/living-room.jpg";

const Living = () => {
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
              Sophisticated Living Spaces
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Modular{" "}
              <span className="text-accent">Living Room</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create stunning living spaces with our modular furniture that combines comfort, style, and functionality.
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={livingImage}
                alt="Modern Living Room"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
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
                icon: <Sofa className="w-6 h-6" />,
                title: "Comfortable Seating",
                description: "Ergonomic designs that prioritize comfort without compromising style"
              },
              {
                icon: <Lamp className="w-6 h-6" />,
                title: "Modern Aesthetics",
                description: "Contemporary designs that enhance your living space"
              },
              {
                icon: <Coffee className="w-6 h-6" />,
                title: "Functional Design",
                description: "Smart solutions for modern living requirements"
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
                Get Living Room Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Living;
