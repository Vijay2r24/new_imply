import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-detail.jpg";
import wardrobeImage from "@/assets/wardrobe.jpg";
import livingImage from "@/assets/living-room.jpg";

const products = [
  {
    name: "Natura",
    type: "Solid Wood",
    description: "Wood embodies luxury and timeless sophistication, enhancing any space with its natural charm. Crafted from premium Hard Oak and Teak with precision CNC routing for enduring elegance.",
    image: kitchenImage,
  },
  {
    name: "Vento",
    type: "Veneer",
    description: "Experience the perfect blend of natural beauty and modern craftsmanship. Crafted from premium hardwood veneers bonded to durable cores for lasting strength and elegance.",
    image: wardrobeImage,
  },
  {
    name: "Planio",
    type: "PU",
    description: "Sleek, stylish, and durable, PU shutters feature high-gloss or matte finishes for a seamless, modern look. Resistant to moisture and wear, they're ideal for kitchens and high-traffic areas.",
    image: livingImage,
  },
  {
    name: "Rivago",
    type: "Glass Laminate",
    description: "The Rivago collection captures the refined elegance of glass with a perfect balance of matte and glossy finishes. Designed for those who love reflective surfaces.",
    image: kitchenImage,
  },
  {
    name: "Cassino",
    type: "Super Matt",
    description: "It's silky. It's smooth. It's opaque. It's a finish that your neighbours envy. The touch of royalty in its nature will make you fall in love.",
    image: wardrobeImage,
  },
  {
    name: "Acrylic",
    type: "Acrylic",
    description: "The most versatile and durable finish is commonly used with excellent textural contrast, making it vibrant and gorgeous. Its flawless surface emulates grace.",
    image: livingImage,
  },
  {
    name: "Artex",
    type: "Lacquer",
    description: "One-stop solution for your obsession with colour play, its unique rustic and urban feel synchronised with multiple colours and texture ignites your passion for a lustrous appearance.",
    image: kitchenImage,
  },
  {
    name: "Lazzaro",
    type: "Melamine",
    description: "Admired by generations, the premium Melamine finish crafted seamlessly with in-depth texture and colour resonates with one's love for nature.",
    image: wardrobeImage,
  },
];

const Products = () => {
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isProductsInView = useInView(productsRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
              Our Products
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Elite Kitchen Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our range of world-class modular kitchen finishes, each crafted 
              with precision and designed for lasting elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-strong group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                </div>

                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    {product.type}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gold">
                      View Specifications
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">View Concepts</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Book a free design consultation with our experts and bring your dream kitchen to life.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;