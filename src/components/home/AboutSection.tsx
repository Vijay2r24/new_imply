import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import factoryImage from "@/assets/factory.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={factoryImage}
                alt="Imly manufacturing facility"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-background p-4 sm:p-6 rounded-xl shadow-medium"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">60,000+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">sq.ft Manufacturing Unit</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
              About Imly
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Experience the World of{" "}
              <span className="text-accent">Imly</span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Where global quality meets timeless design. At Imly, we handpick certified 
              raw materials from around the world to craft furniture that stands out in 
              quality, durability, and style.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Every Imly piece is built with precision—using top-grade materials, premium 
              hardware, and carefully curated accessories—to deliver a flawless finish and 
              world-class craftsmanship. Supported by a skilled workforce and cutting-edge 
              infrastructure, Imly is on a mission to set new benchmarks in the furniture industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-foreground">5500+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">25+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="lg" className="text-sm sm:text-base" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
