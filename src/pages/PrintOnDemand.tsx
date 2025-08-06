import { Navigation } from "@/components/print-on-demand/Navigation";
import { Hero } from "@/components/print-on-demand/Hero";
import { HowItWorks } from "@/components/print-on-demand/HowItWorks";
import { FeaturedProducts } from "@/components/print-on-demand/FeaturedProducts";
import { Footer } from "@/components/print-on-demand/Footer";

const PrintOnDemand = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default PrintOnDemand;