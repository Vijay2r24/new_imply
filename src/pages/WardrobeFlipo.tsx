import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle, DoorOpen, Shield, Zap, FileText, Lightbulb, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import wardrobeImage from "@/assets/wardrobe.jpg";

const WardrobeFlipo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "specifications";

  const tabs = [
    { id: "specifications", label: "Specifications", icon: FileText },
    { id: "concepts", label: "Concept's", icon: Lightbulb },
    { id: "components", label: "Components", icon: Package },
  ];

  const specifications = [
    "Hydraulic flip mechanism",
    "Customizable compartments",
    "Premium quality materials",
    "Multiple color options",
    "Professional installation",
    "10-year warranty"
  ];

  const concepts = [
    "Innovative flip-open design",
    "Quick and easy access",
    "Modern space utilization",
    "Unique opening mechanism",
    "Contemporary style statement",
    "Efficient storage organization"
  ];

  const components = [
    "Hydraulic lift system",
    "Soft-close mechanism",
    "Modular storage compartments",
    "Adjustable shelves",
    "Premium door panels",
    "Interior organizers"
  ];

  const handleTabChange = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={wardrobeImage}
            alt="Flipo Wardrobe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 mb-6 bg-sage/20 backdrop-blur-sm border border-sage/30 text-sage rounded-full text-sm font-medium">
              Wardrobe Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Flipo Wardrobe
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Innovative flip-open design meets contemporary style. Our Flipo wardrobe collection offers unique functionality with modern aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glow" size="lg" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/products/wardrobe">
                  View All Wardrobes
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex justify-center gap-4 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-charcoal text-white shadow-lg scale-105"
                      : "bg-gold/10 text-foreground hover:bg-gold/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-sage/10">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Flipo Collection{" "}
              <span className="bg-gradient-to-r from-sage via-gold to-sage-light bg-clip-text text-transparent">
                {tabs.find(t => t.id === activeTab)?.label}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {activeTab === "specifications" && "Experience the innovation of flip-open wardrobe design"}
              {activeTab === "concepts" && "Explore the unique design philosophy of Flipo"}
              {activeTab === "components" && "Innovative components for modern storage"}
            </p>
          </div>

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, idx) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-sage" />
                  </div>
                  <span className="text-foreground font-medium">{spec}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Concepts Tab */}
          {activeTab === "concepts" && (
            <div className="grid md:grid-cols-2 gap-8">
              {concepts.map((concept, idx) => (
                <motion.div
                  key={concept}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-sage/10 to-gold/10 border border-sage/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-lg leading-relaxed">
                        {concept}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Components Tab */}
          {activeTab === "components" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, idx) => (
                <motion.div
                  key={component}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center">
                      <Package className="w-8 h-8 text-gold" />
                    </div>
                    <span className="text-foreground font-medium">{component}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-gold to-gold-light relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Space Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Discover the innovative Flipo wardrobe collection with our design experts
          </p>
          <Button variant="glass" size="xl" asChild>
            <Link to="/contact">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WardrobeFlipo;
