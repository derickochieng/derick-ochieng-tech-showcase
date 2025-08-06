import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// Import mockup images
import tshirtBlack from "@/assets/mockups/tshirt-black.jpg";
import hoodieNavy from "@/assets/mockups/hoodie-navy.jpg";
import toteBagNatural from "@/assets/mockups/tote-bag-natural.jpg";
import capBlack from "@/assets/mockups/cap-black.jpg";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: "KSH 1,200",
      originalPrice: "KSH 1,500",
      image: tshirtBlack,
      category: "T-Shirts",
      colors: ["Black", "White", "Navy", "Red"],
      isPopular: true
    },
    {
      id: 2,
      name: "Premium Hoodie",
      price: "KSH 2,800",
      originalPrice: "KSH 3,200",
      image: hoodieNavy,
      category: "Hoodies",
      colors: ["Black", "Grey", "Navy"],
      isPopular: false
    },
    {
      id: 3,
      name: "Canvas Tote Bag",
      price: "KSH 800",
      originalPrice: "KSH 1,000",
      image: toteBagNatural,
      category: "Bags",
      colors: ["Natural", "Black", "Navy"],
      isPopular: true
    },
    {
      id: 4,
      name: "Baseball Cap",
      price: "KSH 1,000",
      originalPrice: "KSH 1,300",
      image: capBlack,
      category: "Accessories",
      colors: ["Black", "White", "Red", "Blue"],
      isPopular: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High-quality blank products ready for your custom designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative aspect-square bg-muted/30 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.isPopular && (
                  <Badge className="absolute top-3 left-3">
                    Popular
                  </Badge>
                )}

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
                      Customize
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                
                {/* Colors */}
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-sm text-muted-foreground">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div 
                        key={index}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: color.toLowerCase() === 'natural' ? '#F5F5DC' : color.toLowerCase() }}
                      ></div>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};