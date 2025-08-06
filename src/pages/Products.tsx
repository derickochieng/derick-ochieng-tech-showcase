import { Navigation } from "@/components/print-on-demand/Navigation";
import { ProductGrid } from "@/components/print-on-demand/ProductGrid";
import { ProductFilters } from "@/components/print-on-demand/ProductFilters";
import { Footer } from "@/components/print-on-demand/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;