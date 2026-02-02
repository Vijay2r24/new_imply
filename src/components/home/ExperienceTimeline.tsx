import { motion } from "framer-motion";
import { Leaf, Building2, Factory, TrendingUp, Sparkles, Trophy } from "lucide-react";

const timelineData = [
    {
        year: "2000",
        title: "Startup",
        description: "Beginning of a new Era. Our journey started with a vision to redefine home interiors through precision and passion.",
        icon: Leaf,
    },
    {
        year: "2003",
        title: "Expansion",
        description: "Becoming an importer of Modular furniture, expanding our horizons and bringing global quality standards to India.",
        icon: Factory,
    },
    {
        year: "2005",
        title: "Establishment",
        description: "Setting up our first Modular Manufacturing Plant, marks a significant milestone in our commitment to quality production.",
        icon: Building2,
    },
    {
        year: "2010",
        title: "Golden Age",
        description: "State-of-the-Art Manufacturing Plant installation, showcasing our dedication to technological advancement.",
        icon: Trophy,
    },
    {
        year: "2018",
        title: "Going Big",
        description: "Larger & High Performance Plant to meet the growing demand for our world-class modular furnishing solutions.",
        icon: TrendingUp,
    },
    {
        year: "2021",
        title: "Imly Days",
        description: "Launch of our State-of-the-Art Experience Center, redefining how customers experience and design their dream homes.",
        icon: Sparkles,
    },
];

const ExperienceTimeline = () => {
    return (
        <section className="py-16 bg-cream-dark/20 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold blur-2xl" />
                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gold blur-2xl" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-3 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-medium tracking-wide mb-4">
                        Our Legacy
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                        25 Years of Precision. Passion. Possibility.
                    </h2>
                    <div className="h-1 w-16 bg-gold mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold/20 hidden md:block" />

                    <div className="space-y-8 md:space-y-16">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.year} className="relative flex flex-col md:flex-row items-center">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-white z-10 hidden md:block" />

                                    {/* Icon Block */}
                                    <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12 md:order-2'} mb-6 md:mb-0`}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            viewport={{ once: true }}
                                            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gold/10 hover:border-gold/30 transition-all duration-300 group relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <item.icon className="w-8 h-8 md:w-10 md:h-10 text-gold group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                        </motion.div>
                                    </div>

                                    {/* Content Block */}
                                    <div className={`w-full md:w-1/2 text-center ${isEven ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12 md:order-1'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="text-2xl md:text-4xl font-bold text-gold/15 font-serif mb-1 block leading-none">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm mx-auto md:mx-0">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
