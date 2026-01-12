import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layout, Box, Sparkles } from "lucide-react";

const processes = [
  {
    icon: Palette,
    title: "Interior Spaces",
    description: "We spend a significant portion of our lives at work, often up to a third. This time shapes well-being.",
  },
  {
    icon: Layout,
    title: "Design Concepts",
    description: "Design concepts influence user experience, enhancing functionality and aesthetic appeal.",
  },
  {
    icon: Box,
    title: "Space Planning",
    description: "Smart space planning boosts workplace productivity and well-being.",
  },
  {
    icon: Sparkles,
    title: "Final Execution",
    description: "Precision installation and finishing touches that bring your vision to life.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
            Our Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building a Concept – How We Make It Happen
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, idx) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Connector Line */}
              {idx < processes.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <process.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {process.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
