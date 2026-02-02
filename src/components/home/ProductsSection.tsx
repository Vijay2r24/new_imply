import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-detail.jpg";
import wardrobeImage from "@/assets/wardrobe.jpg";
import livingImage from "@/assets/living-room.jpg";

const products = [
  {
    title: "Kitchen",
    description: "Modular kitchens crafted with precision, featuring premium materials and innovative storage solutions.",
    image: kitchenImage,
    link: "/products/kitchen",
    accent: "gold",
    stats: "1750+ Projects"
  },
  {
    title: "Wardrobe",
    description: "Walk-in closets and wardrobes designed to maximize space while adding elegance to your bedroom.",
    image: wardrobeImage,
    link: "/products/wardrobe",
    accent: "sage",
    stats: "2300+ Designs"
  },
  {
    title: "Living",
    description: "Entertainment units and living room furniture that blend style with functionality.",
    image: livingImage,
    link: "/products/living",
    accent: "gold-light",
    stats: "1500+ Spaces"
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/10 to-sage/10 border border-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            Our Products
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Exceptional Architectural{" "}
            <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
              Design
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Crafting remarkable designs that transform spaces and make everyday life more enjoyable.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 bg-white/5 backdrop-blur-sm">
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-90" />
                  
                  {/* Floating Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5">
                    <span className="text-white text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      {product.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  
                  <Link
                    to={product.link}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${product.accent}/20 to-${product.accent}/10 backdrop-blur-sm border border-${product.accent}/30 text-white rounded-full text-sm font-medium hover:gap-3 hover:bg-${product.accent}/30 transition-all duration-300 group/link`}
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${product.accent}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button variant="glow" size="xl" className="text-base group" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="minimal" size="xl" className="text-base text-muted-foreground" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
