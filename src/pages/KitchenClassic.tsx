import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, Lightbulb, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import kitchenImage from "@/assets/kitchen-detail.jpg";

const KitchenClassic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "specifications";

  const tabs = [
    { id: "specifications", label: "Specifications", icon: FileText },
    { id: "concepts", label: "Concept's", icon: Lightbulb },
    { id: "components", label: "Components", icon: Package },
  ];

  const specifications = [
    "Premium quality materials",
    "Timeless design aesthetics",
    "Durable construction",
    "Easy maintenance",
    "Customizable options",
    "Professional installation"
  ];

  const concepts = [
    "Traditional elegance with modern touches",
    "Warm color palettes and natural materials",
    "Functional layouts for efficient cooking",
    "Integrated storage solutions",
    "Classic hardware and fixtures",
    "Timeless appeal that never goes out of style"
  ];

  const components = [
    "Solid wood cabinet doors",
    "Granite or marble countertops",
    "Stainless steel appliances",
    "Classic tile backsplash",
    "Traditional cabinet hardware",
    "Under-cabinet lighting"
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
            src={kitchenImage}
            alt="Classic Kitchen"
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
            <span className="inline-block px-4 py-2 mb-6 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold rounded-full text-sm font-medium">
              Kitchen Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Classic Kitchen
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Timeless elegance meets modern functionality. Our Classic Kitchen collection features traditional designs with contemporary conveniences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glow" size="lg" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/products/kitchen">
                  View All Kitchens
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
      <section className="py-20 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Classic Collection{" "}
              <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
                {tabs.find(t => t.id === activeTab)?.label}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {activeTab === "specifications" && "Discover what makes our Classic Kitchen collection stand out"}
              {activeTab === "concepts" && "Explore the design philosophy behind our Classic Kitchen"}
              {activeTab === "components" && "Premium components that make up our Classic Kitchen"}
            </p>
          </div>

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
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
                  className="p-8 rounded-3xl bg-gradient-to-br from-gold/10 to-sage/10 border border-gold/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-gold" />
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
                    <div className="w-16 h-16 rounded-2xl bg-sage/20 flex items-center justify-center">
                      <Package className="w-8 h-8 text-sage" />
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
      <section className="py-20 md:py-24 bg-gradient-to-br from-charcoal to-charcoal-light relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our design experts today
          </p>
          <Button variant="glow" size="xl" asChild>
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

export default KitchenClassic;