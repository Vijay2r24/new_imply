import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-detail.jpg";
import wardrobeImage from "@/assets/wardrobe.jpg";
import livingImage from "@/assets/living-room.jpg";

const products = [
  {
    title: "Kitchen",
    description: "Modular kitchens crafted with precision, featuring premium materials and innovative storage solutions.",
    image: kitchenImage,
    link: "/products",
  },
  {
    title: "Wardrobe",
    description: "Walk-in closets and wardrobes designed to maximize space while adding elegance to your bedroom.",
    image: wardrobeImage,
    link: "/products",
  },
  {
    title: "Living",
    description: "Entertainment units and living room furniture that blend style with functionality.",
    image: livingImage,
    link: "/products",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
            Our Products
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Exceptional Architectural Design
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Crafting remarkable designs that transform spaces and make everyday life more enjoyable.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-shadow duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-foreground mb-2 sm:mb-3">
                    {product.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-accent font-medium text-xs sm:text-sm hover:gap-3 gap-2 transition-all"
                  >
                    Explore
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" className="text-sm sm:text-base" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
