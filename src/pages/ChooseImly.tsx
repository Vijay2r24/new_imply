import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Factory, Gem, Users, ShieldCheck, Headset, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ChooseImly = () => {
    const features = [
        {
            icon: <Award className="w-8 h-8 text-gold" />,
            title: "25 Years of Excellence",
            description: "A legacy built on decades of expertise, delivering perfection in every detail since 1998."
        },
        {
            icon: <Factory className="w-8 h-8 text-gold" />,
            title: "State-of-the-Art Manufacturing",
            description: "One of India's finest manufacturing facilities equipped with advanced CNC machinery."
        },
        {
            icon: <Gem className="w-8 h-8 text-gold" />,
            title: "Premium Raw Materials",
            description: "We source only the finest materials to ensure durability, aesthetics, and luxury."
        },
        {
            icon: <Users className="w-8 h-8 text-gold" />,
            title: "Best-in-Class Workforce",
            description: "Our skilled artisans and engineers bring world-class craftsmanship to your home."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-gold" />,
            title: "Unwavering Warranty",
            description: "We stand by our quality with comprehensive warranties that give you peace of mind."
        },
        {
            icon: <Headset className="w-8 h-8 text-gold" />,
            title: "Prompt Service Support",
            description: "Dedicated support team ensuring your experience remains seamless long after delivery."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-dark opacity-95" />
                    <div className="absolute inset-0 bg-[url('/src/assets/luxury_kitchen_banner.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-[0.2em] text-gold uppercase border border-gold/30 rounded-full bg-gold/10">
                            Why Choose Us
                        </span>
                        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                            Elevating Standards <br />
                            <span className="text-transparent bg-clip-text bg-gradient-gold">
                                Defining Luxury
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto mb-10 text-lg text-white/70 md:text-xl">
                            Discover the Imly Studio difference. Where artistic vision meets precision engineering to create spaces that inspire.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 lg:py-32 bg-secondary/30">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-8 bg-white dark:bg-card rounded-2xl shadow-soft hover:shadow-gold transition-all duration-300 border border-border/50"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    {feature.icon}
                                </div>
                                <div className="w-14 h-14 mb-6 rounded-xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-serif font-bold text-foreground group-hover:text-gold transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-charcoal" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="mb-8 font-serif text-3xl font-bold text-white md:text-5xl">
                            Ready to Experience the Exceptional?
                        </h2>
                        <p className="mb-10 text-lg text-white/80 md:text-xl">
                            Visit our studio or schedule a consultation to begin your journey towards a home that reflects your unique style.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button variant="gold" size="xl" asChild>
                                <Link to="/contact">
                                    Begin Your Journey <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button variant="heroOutline" size="xl" asChild>
                                <Link to="/products">Explore Collections</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ChooseImly;
