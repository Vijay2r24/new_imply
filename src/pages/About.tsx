import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Gem, Wrench, Puzzle, Leaf } from "lucide-react";
import Layout from "@/components/layout/Layout";
import factoryImage from "@/assets/factory.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Transforming how we design and experience our homes. It's about flexibility, functionality, and forward-thinking design—furniture that adapts to your lifestyle, not the other way around.",
  },
  {
    icon: Gem,
    title: "Elegance",
    description: "Seamless union of form, function, and fluidity. It is design that doesn't shout—it whispers with refined lines, thoughtful craftsmanship, and graceful adaptability.",
  },
  {
    icon: Wrench,
    title: "Engineering",
    description: "Engineering is about creating systems that are strong yet flexible, compact yet expandable, and intuitive to use. Every hinge, joint, connector, and support is purpose-built.",
  },
  {
    icon: Puzzle,
    title: "Integration",
    description: "Creating holistic design ecosystems—where every element, from aesthetics to function to technology, works together in seamless unity.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "It's not just a trend—it's a commitment to responsible living and intelligent design. Every piece is designed to last, adapt, and minimize its impact on the planet.",
  },
];

import ExperienceTimeline from "@/components/home/ExperienceTimeline";

const About = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
              About Imly
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Beyond Your Perception
            </h1>
            <p className="text-lg text-muted-foreground">
              With over two decades of expertise in manufacturing and project execution across India,
              Imly has perfected the art of modular home furnishing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={factoryImage}
                alt="Imly manufacturing facility"
                className="rounded-2xl shadow-strong w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="font-serif text-5xl font-bold text-accent">25+</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
                <div className="h-16 w-px bg-border" />
                <p className="text-muted-foreground leading-relaxed">
                  Driven by innovation and precision, Imly operates from a state-of-the-art,
                  fully automated manufacturing facility spread over 2 acres, with a built-up
                  area of 60,000 square feet.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                We source premium raw materials from some of Europe's most renowned brands,
                ensuring superior quality and durability. Every product is crafted with care
                by our highly trained and experienced team.
              </p>

              <p className="text-foreground font-medium italic border-l-4 border-accent pl-4">
                At Imly, we don't just make furniture; we create experiences defined by
                quality, elegance, and class.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 lg:p-12 rounded-2xl shadow-soft"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize the way people live, work, and connect through intelligent,
                adaptable, and sustainable furniture solutions. We envision a world where spaces
                are no longer confined by rigid design, but empowered by flexibility—where furniture
                evolves with lifestyles, maximizes function without compromising beauty, and supports
                conscious living through modularity, efficiency, and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-2xl shadow-strong"
            >
              <h2 className="font-serif text-2xl font-bold mb-4">Mission</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                To revolutionize living and working spaces by creating modular furniture that is
                smart, sustainable, and stunning. We empower individuals and businesses to redefine
                their environments with flexible, future-ready solutions that adapt to their evolving
                needs. Our mission is to blend form and function in every design—delivering comfort,
                customization, and conscious craftsmanship for a dynamic world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Defining Our Design Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <ExperienceTimeline />
    </Layout>
  );
};

export default About;