import { ModernHeroWithGradients } from "@/components/blocks/heros/modern-hero-with-gradients";
import EnterpriseClientSlideshow from "@/components/blocks/client-showcase/enterprise-client-slideshow";
import InHouseProductsShowcase from "@/components/blocks/products/inhouse-products-showcase";
import BlockchainExpertise from "@/components/blocks/expertise/blockchain-expertise";
import AIExpertiseSection from "@/components/blocks/expertise/ai-expertise";
import { StatsWithNumberTicker } from "@/components/blocks/stats/stats-with-number-ticker";
import { TestimonialsMarqueeGrid } from "@/components/blocks/testimonials/testimonials-marquee-grid";
import { ContactFormGridWithDetails } from "@/components/blocks/contact-forms/contact-form-grid-with-details";
import { FooterWithGrid } from "@/components/blocks/footers/footer-with-grid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <ModernHeroWithGradients />
      <EnterpriseClientSlideshow />
      <InHouseProductsShowcase />
      <BlockchainExpertise />
      <AIExpertiseSection />
      <StatsWithNumberTicker />
      <TestimonialsMarqueeGrid />
      <FooterWithGrid />
    </main>
  );
}