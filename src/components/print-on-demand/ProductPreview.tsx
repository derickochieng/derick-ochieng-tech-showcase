import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const ProductPreview = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const basePrice = 1200;
  const totalPrice = basePrice * quantity;

  return (
    <div className="w-80 border-l bg-card p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">Product Details</h2>

      {/* Product Info */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-2">Classic Cotton T-Shirt</h3>
        <p className="text-sm text-muted-foreground mb-3">
          High-quality 100% cotton t-shirt, perfect for custom designs
        </p>
        
        <div className="space-y-3">
          {/* Size Selection */}
          <div>
            <label className="text-sm font-medium mb-2 block">Size</label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm font-medium mb-2 block">Quantity</label>
            <div className="flex items-center gap-3">
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium w-12 text-center">{quantity}</span>
              <Button 
                size="icon" 
                variant="outline"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Pricing */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-3">Price Breakdown</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Base Price (per item)</span>
            <span>KSH {basePrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Quantity</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Printing</span>
            <span>Free</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>KSH {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Delivery Info */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-3">Delivery</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Production Time</span>
            <span>2-3 days</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>2-4 days</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total Time</span>
            <span>4-7 days</span>
          </div>
        </div>
        <Badge variant="secondary" className="mt-2">
          Made locally in Kenya
        </Badge>
      </Card>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          className="w-full" 
          size="lg"
          disabled={!selectedSize}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        
        <Button variant="outline" className="w-full">
          Save Design
        </Button>
      </div>

      {/* Quality Assurance */}
      <div className="mt-6 p-3 bg-muted/50 rounded-lg">
        <h4 className="font-semibold text-sm mb-2">Quality Promise</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Premium quality materials</li>
          <li>• Vibrant, long-lasting prints</li>
          <li>• Ethically made by local artisans</li>
          <li>• 30-day satisfaction guarantee</li>
        </ul>
      </div>
    </div>
  );
};