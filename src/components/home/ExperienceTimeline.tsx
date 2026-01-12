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
        <section className="py-24 bg-cream-dark/20 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
                        Our Legacy
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        25 Years of Precision. Passion. Possibility.
                    </h2>
                    <div className="h-1.5 w-24 bg-gold mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/20 hidden md:block" />

                    <div className="space-y-12 md:space-y-32">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.year} className="relative flex flex-col md:flex-row items-center">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white z-10 hidden md:block" />

                                    {/* Icon Block */}
                                    <div className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-end md:pr-20' : 'md:justify-start md:pl-20 md:order-2'} mb-8 md:mb-0`}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            viewport={{ once: true }}
                                            className="w-28 h-28 md:w-40 md:h-40 rounded-[2.5rem] bg-white shadow-medium flex items-center justify-center border border-gold/5 hover:border-gold/20 transition-all duration-500 group relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <item.icon className="w-12 h-12 md:w-20 md:h-20 text-gold group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                        </motion.div>
                                    </div>

                                    {/* Content Block */}
                                    <div className={`w-full md:w-1/2 text-center ${isEven ? 'md:text-left md:pl-20' : 'md:text-right md:pr-20 md:order-1'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="text-4xl md:text-7xl font-bold text-gold/10 font-serif mb-2 block leading-none">
                                                {item.year}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-lg max-w-md mx-auto md:mx-0">
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
