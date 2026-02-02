import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import GallerySection from "@/components/home/GallerySection";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <StatsSection />
      <ProcessSection />
      <GallerySection />
      <ExperienceTimeline />
      <TeamSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
    </Layout>
  );
};

export default Index;