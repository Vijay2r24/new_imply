import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Factory, Gem, Users, ShieldCheck, Headset, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import luxuryBanner from "@/assets/luxury_kitchen_banner.png";

const ChooseImly = () => {
    const features = [
        {
            icon: Award,
            title: "25 Years of Excellence",
            description: "A legacy built on decades of expertise, delivering perfection in every detail since 1998.",
            color: "gold"
        },
        {
            icon: Factory,
            title: "State-of-the-Art Manufacturing",
            description: "One of India's finest manufacturing facilities equipped with advanced CNC machinery.",
            color: "sage"
        },
        {
            icon: Gem,
            title: "Premium Raw Materials",
            description: "We source only the finest materials to ensure durability, aesthetics, and luxury.",
            color: "gold-light"
        },
        {
            icon: Users,
            title: "Best-in-Class Workforce",
            description: "Our skilled artisans and engineers bring world-class craftsmanship to your home.",
            color: "sage-dark"
        },
        {
            icon: ShieldCheck,
            title: "Unwavering Warranty",
            description: "We stand by our quality with comprehensive warranties that give you peace of mind.",
            color: "gold"
        },
        {
            icon: Headset,
            title: "Prompt Service Support",
            description: "Dedicated support team ensuring your experience remains seamless long after delivery.",
            color: "sage"
        }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={luxuryBanner}
                        alt="Luxury Kitchen"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{ 
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gold/10 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ 
                            y: [0, 15, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 3
                        }}
                        className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-sage/20 rounded-full blur-2xl"
                    />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-gold/20 to-sage/20 backdrop-blur-sm border border-gold/30 text-gold rounded-full text-sm font-medium tracking-wide">
                                <Sparkles className="w-4 h-4" />
                                Why Choose Imly Studio
                            </span>
                            <h1 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
                                Elevating Standards{" "}
                                <span className="bg-gradient-to-r from-gold via-gold-light to-sage bg-clip-text text-transparent">
                                    Defining Luxury
                                </span>
                            </h1>
                            <p className="max-w-3xl mx-auto mb-10 text-lg sm:text-xl text-white/90 leading-relaxed">
                                Discover the Imly Studio difference. Where artistic vision meets precision engineering to create spaces that inspire and transform your lifestyle.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <Button variant="glow" size="xl" asChild className="group">
                                    <Link to="/contact">
                                        Begin Your Journey
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button variant="glass" size="xl" asChild>
                                    <Link to="/products">
                                        Explore Collections
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                                    <span>5000+ Projects Completed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-sage rounded-full"></div>
                                    <span>25+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gold-light rounded-full"></div>
                                    <span>ISO Certified Quality</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-cream/30 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
                    >
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            What Makes Us{" "}
                            <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
                                Exceptional
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                            Six pillars of excellence that set Imly Studio apart in the modular furniture industry.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 border border-${feature.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Hover Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal-light">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-sage/10" />
                    
                    {/* Animated Elements */}
                    <motion.div
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ 
                            scale: [1.2, 1, 1.2],
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sage/30 rounded-full blur-2xl"
                    />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Ready to Experience the{" "}
                            <span className="bg-gradient-to-r from-gold via-gold-light to-sage bg-clip-text text-transparent">
                                Exceptional?
                            </span>
                        </h2>
                        <p className="mb-10 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                            Visit our studio or schedule a consultation to begin your journey towards a home that reflects your unique style and personality.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Button variant="glow" size="xl" asChild className="group">
                                <Link to="/contact">
                                    Schedule Consultation
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button variant="glass" size="xl" asChild>
                                <Link to="/products">
                                    Explore Collections
                                </Link>
                            </Button>
                        </div>

                        {/* Bottom Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                            {[
                                { number: "5000+", label: "Happy Customers" },
                                { number: "25+", label: "Years Experience" },
                                { number: "50+", label: "Cities Served" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold text-gold mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/70 text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default ChooseImly;
