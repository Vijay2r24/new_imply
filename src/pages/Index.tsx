import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <ExperienceTimeline />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;