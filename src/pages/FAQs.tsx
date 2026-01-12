import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Imly an International Brand?",
    answer: "Imly is an Indian brand in association with international brands for the procurement of raw materials & best in class Manufacturing plant & Service team.",
  },
  {
    question: "What is the advantage of Imly Products?",
    answer: "Imly offers world-class products in 30 days with a wide range of finishes and colours backed by a strong service team.",
  },
  {
    question: "Does Imly Have its Own Manufacturing Plant?",
    answer: "Yes, we have a manufacturing plant spread across 2 acres of land with state-of-the-art infrastructure in a 60,000 sq ft area, which can deliver international quality products.",
  },
  {
    question: "Are Imly's product custom-made for site conditions?",
    answer: "Imly has standard products which can be customised to suit every home.",
  },
  {
    question: "Is Imly ideal for Indian Usage and Condition?",
    answer: "Imly products are fabricated specifically to suit Indian cooking and climatic conditions.",
  },
  {
    question: "How Different are Imly Products from International Brands?",
    answer: "Imly products are on par with international brands. Imly procures raw materials hand-picked from the best brands in Europe and the rest of the world.",
  },
  {
    question: "What is the warranty on Imly products?",
    answer: "Imly provides comprehensive warranty on all products. The specific warranty period varies based on the product category and materials used. Contact our team for detailed warranty information.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Our standard delivery time is 30 days from design finalization. Complex projects may require additional time, which will be communicated upfront during the consultation.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we provide complete installation services with our trained professionals. Our team ensures precision installation and handles all aspects of the setup.",
  },
  {
    question: "Can I visit your experience center?",
    answer: "Absolutely! We welcome you to visit our state-of-the-art experience center in Jayanagar, Bangalore. Book an appointment for a personalized tour and consultation.",
  },
];

const FAQs = () => {
  const heroRef = useRef(null);
  const faqRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-wide mb-6">
              FAQs
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our products, services, and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-card rounded-xl px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;