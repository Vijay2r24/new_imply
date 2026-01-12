import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Naveen Singh",
    text: "Team Imly is among the few firms who would follow up for closure and ensure closure proactively even after the complete payment is done! They ensured that all my requests were dealt with in time and helped with multiple design iterations up to my satisfaction. It has turned up fab! Would recommend Imly to everyone!",
    rating: 5,
  },
  {
    name: "Alan Joy",
    text: "I would like to thank Imly for keeping your word on the commitment to quality and support. The design, the material, the execution and the support we got through their ideas, and the professional team did a fabulous job. The customer-oriented way of handling your work was simply excellent.",
    rating: 5,
  },
  {
    name: "Ayesha Siddique",
    text: "The team of Imly guided us through all the options courteously and patiently. It was an absolute pleasure to see all the kitchen setups which were compact and user-friendly yet made the most of every available space. Looking forward to collaborating with them on the execution of the project.",
    rating: 5,
  },
  {
    name: "Meenakshi Khandode",
    text: "The entire team of Imly is helping with our kitchen's renovation. They understand our needs and portray the same in the design. They have helped us with the choice of colour, specifications, and quality materials within our budget. It's been a great experience so far with team Imly.",
    rating: 5,
  },
  {
    name: "Rina Farhath",
    text: "Imly has one of the most professional modular kitchen makers in Bangalore. We had an amazing experience because of their prompt feedback, quality production and timely professional installation. I will definitely recommend them to my fellow colleagues and friends!",
    rating: 5,
  },
  {
    name: "Nancy Doshi",
    text: "Imly Design Partners were wonderful to work with in designing our Kitchen. They had a vision of our home and their recommendations were amazing. Their computer designs enabled me and my wife to visualize how the cabinet designs would look. We love the end result!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-primary-foreground/5 rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/30" />
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/90">
                "{testimonials[currentIndex].text}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-serif text-xl font-bold text-accent">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-accent"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
