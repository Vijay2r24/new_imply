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
    <section ref={ref} className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl shadow-medium"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Factory className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-foreground">60,000+</p>
                  <p className="text-sm text-muted-foreground">sq.ft Manufacturing Unit</p>
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
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
              About Imly
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Experience the World of{" "}
              <span className="text-accent">Imly</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Where global quality meets timeless design. At Imly, we handpick certified 
              raw materials from around the world to craft furniture that stands out in 
              quality, durability, and style.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every Imly piece is built with precision—using top-grade materials, premium 
              hardware, and carefully curated accessories—to deliver a flawless finish and 
              world-class craftsmanship. Supported by a skilled workforce and cutting-edge 
              infrastructure, Imly is on a mission to set new benchmarks in the furniture industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">5500+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Factory className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
