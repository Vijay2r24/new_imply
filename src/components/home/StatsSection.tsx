import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Home, 
  Users, 
  MapPin, 
  Trophy,
  Star,
  Clock
} from "lucide-react";

const stats = [
  {
    icon: Home,
    number: 5000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful installations across India",
    color: "gold"
  },
  {
    icon: Users,
    number: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Decades of craftsmanship excellence",
    color: "sage"
  },
  {
    icon: MapPin,
    number: 50,
    suffix: "+",
    label: "Cities Served",
    description: "Pan-India presence and service",
    color: "gold"
  },
  {
    icon: Trophy,
    number: 15,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognition for quality and innovation",
    color: "sage"
  },
  {
    icon: Star,
    number: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Consistently high ratings and reviews",
    color: "gold"
  },
  {
    icon: Clock,
    number: 7,
    suffix: " Days",
    label: "Average Installation",
    description: "Quick and efficient service delivery",
    color: "sage"
  }
];

const CountUpAnimation = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasStarted]);

  return (
    <span ref={ref} className="font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/20 via-transparent to-sage/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sage rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-gold via-gold-light to-sage bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
            Our journey of excellence reflected in the trust and satisfaction of thousands of customers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group h-full"
            >
              <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 h-full min-h-[320px] flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${stat.color}/30 to-${stat.color}/10 border border-${stat.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                </div>

                {/* Number */}
                <div className="mb-6 flex-shrink-0">
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-${stat.color} mb-2`}>
                    <CountUpAnimation end={stat.number} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed flex-grow">
                  {stat.description}
                </p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold/20 to-sage/20 backdrop-blur-md border border-gold/30 rounded-full">
            <Trophy className="w-6 h-6 text-gold" />
            <span className="text-white font-medium text-lg">India's Most Trusted Modular Furniture Brand</span>
            <Trophy className="w-6 h-6 text-sage" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;