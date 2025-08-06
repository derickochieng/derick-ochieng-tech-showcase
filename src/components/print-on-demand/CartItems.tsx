import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, Heart } from "lucide-react";

export const CartItems = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Custom T-Shirt",
      design: "Kenya Flag Design",
      size: "L",
      color: "Black",
      quantity: 2,
      price: 1200,
      image: "/placeholder.svg",
      customization: "Front print only"
    },
    {
      id: 2,
      name: "Premium Hoodie",
      design: "Safari Animals",
      size: "M",
      color: "Navy",
      quantity: 1,
      price: 2800,
      image: "/placeholder.svg",
      customization: "Front & back print"
    },
    {
      id: 3,
      name: "Canvas Tote Bag",
      design: "Maasai Pattern",
      size: "One Size",
      color: "Natural",
      quantity: 3,
      price: 800,
      image: "/placeholder.svg",
      customization: "Single side print"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: number) => {
    // In a real app, this would add to wishlist and remove from cart
    removeItem(id);
  };

  if (cartItems.length === 0) {
    return (
      <Card className="p-8 text-center">
        <div className="text-muted-foreground mb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <Trash2 className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
          <p>Add some products to get started!</p>
        </div>
        <Button>Continue Shopping</Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id} className="p-4">
          <div className="flex gap-4">
            {/* Product Image */}
            <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.design}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>

              {/* Product Specs */}
              <div className="flex gap-4 mb-3">
                <Badge variant="outline">Size: {item.size}</Badge>
                <Badge variant="outline">Color: {item.color}</Badge>
              </div>

              <p className="text-xs text-muted-foreground mb-3">{item.customization}</p>

              {/* Quantity and Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Qty:</span>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-medium w-8 text-center">{item.quantity}</span>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-lg">
                    KSH {(item.price * item.quantity).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    KSH {item.price.toLocaleString()} each
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-3">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => moveToWishlist(item.id)}
                  className="text-xs"
                >
                  <Heart className="h-3 w-3 mr-1" />
                  Save for later
                </Button>
                <Button size="sm" variant="ghost" className="text-xs">
                  Edit Design
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Cart Actions */}
      <div className="flex gap-4 pt-4 border-t">
        <Button variant="outline" className="flex-1">
          Continue Shopping
        </Button>
        <Button variant="ghost" onClick={() => setCartItems([])}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};