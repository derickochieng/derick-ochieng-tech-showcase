import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Import mockup images
import tshirtBlack from "@/assets/mockups/tshirt-black.jpg";
import tshirtWhite from "@/assets/mockups/tshirt-white.jpg";
import hoodieNavy from "@/assets/mockups/hoodie-navy.jpg";
import toteBagNatural from "@/assets/mockups/tote-bag-natural.jpg";
import capBlack from "@/assets/mockups/cap-black.jpg";
import longsleeveGrey from "@/assets/mockups/longsleeve-grey.jpg";

export const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("popular");

  const products = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      category: "T-Shirts",
      price: "KSH 1,200",
      originalPrice: "KSH 1,500",
      image: tshirtBlack,
      colors: ["Black", "White", "Navy", "Red", "Grey"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      isPopular: true,
      isBestseller: false,
      rating: 4.8
    },
    {
      id: 2,
      name: "Premium Hoodie",
      category: "Hoodies",
      price: "KSH 2,800",
      originalPrice: "KSH 3,200",
      image: hoodieNavy,
      colors: ["Black", "Grey", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      isPopular: false,
      isBestseller: true,
      rating: 4.9
    },
    {
      id: 3,
      name: "Canvas Tote Bag",
      category: "Bags",
      price: "KSH 800",
      originalPrice: "KSH 1,000",
      image: toteBagNatural,
      colors: ["Natural", "Black", "Navy"],
      sizes: ["One Size"],
      isPopular: true,
      isBestseller: false,
      rating: 4.7
    },
    {
      id: 4,
      name: "Baseball Cap",
      category: "Accessories",
      price: "KSH 1,000",
      originalPrice: "KSH 1,300",
      image: capBlack,
      colors: ["Black", "White", "Red", "Blue"],
      sizes: ["One Size"],
      isPopular: false,
      isBestseller: false,
      rating: 4.6
    },
    {
      id: 5,
      name: "Long Sleeve Tee",
      category: "T-Shirts",
      price: "KSH 1,500",
      originalPrice: "KSH 1,800",
      image: longsleeveGrey,
      colors: ["Black", "White", "Grey", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      isPopular: false,
      isBestseller: true,
      rating: 4.5
    },
    {
      id: 6,
      name: "Cotton T-Shirt (White)",
      category: "T-Shirts",
      price: "KSH 1,200",
      originalPrice: "KSH 1,500",
      image: tshirtWhite,
      colors: ["White", "Black", "Navy", "Red"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      isPopular: true,
      isBestseller: false,
      rating: 4.8
    }
  ];

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" }
  ];

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">All Products</h1>
          <p className="text-muted-foreground">{products.length} products available</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative aspect-square bg-muted/30 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isPopular && (
                  <Badge>Popular</Badge>
                )}
                {product.isBestseller && (
                  <Badge variant="secondary">Bestseller</Badge>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to="/design-studio">
                  <Button>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Customize Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-muted-foreground'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.rating})</span>
              </div>
              
              {/* Colors & Sizes */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span>{product.colors.length} colors</span>
                <span>{product.sizes.length} sizes</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                <Link to="/design-studio">
                  <Button size="sm">Customize</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  );
};