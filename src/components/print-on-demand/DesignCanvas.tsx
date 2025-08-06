import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RotateCcw, Download, Save, ZoomIn, ZoomOut } from "lucide-react";

export const DesignCanvas = () => {
  const [selectedProduct, setSelectedProduct] = useState("tshirt");
  const [selectedColor, setSelectedColor] = useState("white");
  const [zoom, setZoom] = useState(100);

  const productTypes = {
    tshirt: { name: "T-Shirt", width: 300, height: 360 },
    hoodie: { name: "Hoodie", width: 300, height: 380 },
    bag: { name: "Tote Bag", width: 280, height: 320 }
  };

  const colors = [
    { name: "White", value: "white", hex: "#FFFFFF" },
    { name: "Black", value: "black", hex: "#000000" },
    { name: "Navy", value: "navy", hex: "#1E3A8A" },
    { name: "Red", value: "red", hex: "#DC2626" },
    { name: "Grey", value: "grey", hex: "#6B7280" }
  ];

  return (
    <div className="flex-1 p-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Design Canvas</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{zoom}%</span>
            <Button variant="outline" size="sm">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Product Type</h3>
          <div className="flex gap-2">
            {Object.entries(productTypes).map(([key, product]) => (
              <Button 
                key={key}
                variant={selectedProduct === key ? "default" : "outline"}
                onClick={() => setSelectedProduct(key)}
              >
                {product.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Product Color</h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                className={`w-10 h-10 rounded-full border-2 ${
                  selectedColor === color.value ? "border-primary" : "border-border"
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Canvas Area */}
        <Card className="relative bg-card border-2 border-dashed border-border p-8 min-h-[500px] flex items-center justify-center">
          {/* Product Mockup */}
          <div className="relative">
            <div 
              className="border rounded-lg shadow-lg flex items-center justify-center text-center"
              style={{ 
                width: productTypes[selectedProduct as keyof typeof productTypes].width,
                height: productTypes[selectedProduct as keyof typeof productTypes].height,
                backgroundColor: colors.find(c => c.value === selectedColor)?.hex 
              }}
            >
              {/* Design Area */}
              <div className="w-48 h-48 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center bg-white/10">
                <div className="text-center text-muted-foreground">
                  <p className="text-sm mb-2">Drop your design here</p>
                  <p className="text-xs">or click to add text/graphics</p>
                </div>
              </div>
            </div>
            
            {/* Product Label */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-sm font-medium">
                {productTypes[selectedProduct as keyof typeof productTypes].name} - {colors.find(c => c.value === selectedColor)?.name}
              </p>
            </div>
          </div>
        </Card>

        {/* Canvas Actions */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Save Design
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button>
            Add to Cart
          </Button>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Design Tips:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Use high-resolution images (300 DPI) for best print quality</li>
            <li>• Keep important text away from seams and edges</li>
            <li>• Consider contrast with the product color</li>
            <li>• Maximum design size: 11" x 15" for most products</li>
          </ul>
        </div>
      </div>
    </div>
  );
};