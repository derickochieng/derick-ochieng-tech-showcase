import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const categories = [
    { id: "tshirts", name: "T-Shirts", count: 24 },
    { id: "hoodies", name: "Hoodies", count: 12 },
    { id: "bags", name: "Bags", count: 8 },
    { id: "accessories", name: "Accessories", count: 15 },
    { id: "long-sleeve", name: "Long Sleeve", count: 6 }
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Navy", hex: "#1E3A8A" },
    { name: "Red", hex: "#DC2626" },
    { name: "Grey", hex: "#6B7280" },
    { name: "Blue", hex: "#2563EB" },
    { name: "Green", hex: "#16A34A" },
    { name: "Purple", hex: "#9333EA" }
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const activeFiltersCount = selectedCategories.length + selectedColors.length + selectedSizes.length;

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([500, 5000]);
  };

  const toggleFilter = (value: string, currentArray: string[], setter: (array: string[]) => void) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter(item => item !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  return (
    <div className="w-80 space-y-6">
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Active Filters</h3>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(category => (
              <Badge key={category} variant="secondary" className="flex items-center gap-1">
                {categories.find(c => c.id === category)?.name}
                <button onClick={() => toggleFilter(category, selectedCategories, setSelectedCategories)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedColors.map(color => (
              <Badge key={color} variant="secondary" className="flex items-center gap-1">
                {color}
                <button onClick={() => toggleFilter(color, selectedColors, setSelectedColors)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedSizes.map(size => (
              <Badge key={size} variant="secondary" className="flex items-center gap-1">
                Size {size}
                <button onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </Card>
      )}

      {/* Price Range */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={5000}
            min={500}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>KSH {priceRange[0].toLocaleString()}</span>
            <span>KSH {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </Card>

      {/* Categories */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleFilter(category.id, selectedCategories, setSelectedCategories)}
              />
              <Label htmlFor={category.id} className="flex-1 cursor-pointer">
                {category.name}
              </Label>
              <span className="text-sm text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Colors */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Colors</h3>
        <div className="grid grid-cols-4 gap-2">
          {colors.map(color => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColors.includes(color.name) ? "border-primary scale-110" : "border-border"
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => toggleFilter(color.name, selectedColors, setSelectedColors)}
              title={color.name}
            />
          ))}
        </div>
      </Card>

      {/* Sizes */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Sizes</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map(size => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
            >
              {size}
            </Button>
          ))}
        </div>
      </Card>

      {/* Special Features */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Features</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="organic" />
            <Label htmlFor="organic">Organic Cotton</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="local" />
            <Label htmlFor="local">Locally Made</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="eco" />
            <Label htmlFor="eco">Eco-Friendly</Label>
          </div>
        </div>
      </Card>
    </div>
  );
};