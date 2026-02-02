import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Linkedin, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    experience: "25+ Years",
    image: "/api/placeholder/300/400",
    description: "Visionary leader with decades of experience in modular furniture industry.",
    specialties: ["Business Strategy", "Quality Management", "Customer Relations"],
    contact: {
      email: "rajesh@imly.com",
      phone: "+91 98765 43210",
      linkedin: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    experience: "15+ Years",
    image: "/api/placeholder/300/400",
    description: "Creative genius behind our award-winning modular kitchen and wardrobe designs.",
    specialties: ["Interior Design", "Space Planning", "3D Visualization"],
    contact: {
      email: "priya@imly.com",
      phone: "+91 98765 43211",
      linkedin: "#"
    }
  },
  {
    name: "Amit Patel",
    role: "Production Manager",
    experience: "20+ Years",
    image: "/api/placeholder/300/400",
    description: "Ensures every piece meets our stringent quality standards and timely delivery.",
    specialties: ["Manufacturing", "Quality Control", "Process Optimization"],
    contact: {
      email: "amit@imly.com",
      phone: "+91 98765 43212",
      linkedin: "#"
    }
  },
  {
    name: "Sneha Reddy",
    role: "Customer Success",
    experience: "12+ Years",
    image: "/api/placeholder/300/400",
    description: "Dedicated to ensuring every customer has an exceptional experience with Imly.",
    specialties: ["Customer Service", "Project Management", "After-sales Support"],
    contact: {
      email: "sneha@imly.com",
      phone: "+91 98765 43213",
      linkedin: "#"
    }
  }
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-cream/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-sage rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/10 to-sage/10 border border-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
            <Users className="w-4 h-4" />
            Our Expert Team
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Meet the{" "}
            <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
              Masterminds
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Our passionate team of experts brings decades of combined experience to create exceptional modular furniture solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/20 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gold/20 to-sage/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/30 to-sage/30 border-2 border-gold/40 flex items-center justify-center">
                      <Users className="w-12 h-12 text-gold" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Contact Icons */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold/30 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-gold/30 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-gold/80 to-gold-light/80 backdrop-blur-sm rounded-full">
                    <span className="text-white text-xs font-medium">{member.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {member.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground/70 uppercase tracking-wide">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specIdx) => (
                        <span
                          key={specIdx}
                          className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold/10 to-sage/10 backdrop-blur-sm border border-gold/20 rounded-full">
            <Award className="w-6 h-6 text-gold" />
            <span className="text-foreground font-medium text-lg">Collectively 70+ Years of Industry Experience</span>
            <Award className="w-6 h-6 text-sage" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;