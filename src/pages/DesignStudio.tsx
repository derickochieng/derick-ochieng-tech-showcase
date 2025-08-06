import { Navigation } from "@/components/print-on-demand/Navigation";
import { DesignCanvas } from "@/components/print-on-demand/DesignCanvas";
import { DesignTools } from "@/components/print-on-demand/DesignTools";
import { ProductPreview } from "@/components/print-on-demand/ProductPreview";

const DesignStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex flex-col lg:flex-row min-h-screen pt-16">
        <DesignTools />
        <DesignCanvas />
        <ProductPreview />
      </div>
    </div>
  );
};

export default DesignStudio;