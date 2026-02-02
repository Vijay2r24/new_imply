import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Eye, Heart, Camera, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageModal from "@/components/ui/image-modal";
import kitchenImage from "@/assets/kitchen-detail.jpg";
import wardrobeImage from "@/assets/wardrobe.jpg";
import livingImage from "@/assets/living-room.jpg";
import factoryImage from "@/assets/factory.jpg";

const galleryItems = [
  {
    id: 1,
    image: kitchenImage,
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    description: "Contemporary design with smart storage solutions and premium finishes",
    likes: 234,
    views: 1200
  },
  {
    id: 2,
    image: wardrobeImage,
    title: "Walk-in Wardrobe",
    category: "Wardrobe", 
    description: "Spacious and organized clothing storage with elegant design elements",
    likes: 189,
    views: 890
  },
  {
    id: 3,
    image: livingImage,
    title: "Elegant Living Room",
    category: "Living",
    description: "Sophisticated entertainment and seating area with modern aesthetics",
    likes: 156,
    views: 750
  },
  {
    id: 4,
    image: factoryImage,
    title: "Manufacturing Excellence",
    category: "Behind the Scenes",
    description: "State-of-the-art production facility with advanced machinery",
    likes: 87,
    views: 450
  }
];

const categories = ["All", "Kitchen", "Wardrobe", "Living"];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const handleQuickView = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    handleImageClick(index);
  };

  const handleLike = (itemId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // Update likes count - you can implement this with your state management
    console.log(`Liked item ${itemId}`);
  };

  return (
    <>
      <section ref={ref} className="py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/10 to-sage/10 border border-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
              <Camera className="w-4 h-4" />
              Project Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our Latest{" "}
              <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
                Creations
              </span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Explore our portfolio of stunning modular furniture installations. Click to view in full detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-gold to-gold-light text-white shadow-gold"
                    : "bg-white/60 backdrop-blur-sm border border-gold/20 text-foreground hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleImageClick(idx)}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Single Action Button */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <button 
                        onClick={(e) => handleQuickView(idx, e)}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold/30 hover:border-gold/50 hover:scale-110 transition-all duration-300 group/btn"
                        title="View Image"
                      >
                        <Eye className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-gold/80 to-gold-light/80 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-medium">{item.category}</span>
                    </div>

                    {/* Simple Click Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                        <span className="text-white text-xs font-medium">Click to View</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white/70 text-xs">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                      </div>
                      <div className="text-white/60 text-xs">
                        Click to view
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button variant="glow" size="xl" className="text-base group" asChild>
              <Link to="/products">
                View Complete Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={filteredItems}
        currentIndex={currentImageIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
};

export default GallerySection;