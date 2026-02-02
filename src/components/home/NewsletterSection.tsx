import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle, Sparkles, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-cream/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-sage rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/10 to-sage/10 border border-gold/20 text-gold rounded-full text-sm font-medium tracking-wide mb-6">
              <Bell className="w-4 h-4" />
              Stay Updated
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get Design{" "}
              <span className="bg-gradient-to-r from-gold via-sage to-gold-light bg-clip-text text-transparent">
                Inspiration
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest design trends, exclusive offers, and expert tips for your home transformation journey.
            </p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mb-12"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 px-4 bg-white/80 backdrop-blur-sm border-gold/20 focus:border-gold/40 rounded-xl"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="glow" 
                  size="lg" 
                  className="h-12 px-6 group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Subscribe
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-800 font-medium">Successfully subscribed! Welcome to Imly family.</span>
              </motion.div>
            )}
            
            <p className="text-xs text-muted-foreground text-center mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Sparkles,
                title: "Design Trends",
                description: "Latest interior design trends and inspiration"
              },
              {
                icon: Mail,
                title: "Exclusive Offers",
                description: "Special discounts and early access to sales"
              },
              {
                icon: CheckCircle,
                title: "Expert Tips",
                description: "Professional advice from our design team"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-sage/20 border border-gold/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/10 to-sage/10 backdrop-blur-sm border border-gold/20 rounded-full">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/30 to-sage/30 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-gold">{i}</span>
                  </div>
                ))}
              </div>
              <span className="text-foreground font-medium">Join 2,500+ subscribers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;