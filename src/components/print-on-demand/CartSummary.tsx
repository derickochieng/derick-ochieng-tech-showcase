import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Truck, Shield, CreditCard } from "lucide-react";

export const CartSummary = () => {
  // Mock cart data
  const subtotal = 6400;
  const shipping = 200;
  const tax = 0; // No tax for now
  const discount = 500; // Promo code discount
  const total = subtotal + shipping + tax - discount;

  const estimatedDelivery = "5-7 business days";

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal (3 items)</span>
            <span>KSH {subtotal.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>KSH {shipping.toLocaleString()}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount (WELCOME10)</span>
              <span>-KSH {discount.toLocaleString()}</span>
            </div>
          )}
          
          <Separator />
          
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>KSH {total.toLocaleString()}</span>
          </div>
        </div>
      </Card>

      {/* Promo Code */}
      <Card className="p-4">
        <h4 className="font-medium mb-3">Promo Code</h4>
        <div className="flex gap-2">
          <Input placeholder="Enter code" />
          <Button variant="outline">Apply</Button>
        </div>
        {discount > 0 && (
          <Badge className="mt-2">WELCOME10 applied</Badge>
        )}
      </Card>

      {/* Delivery Info */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Truck className="h-5 w-5 text-primary" />
          <div>
            <h4 className="font-medium">Delivery</h4>
            <p className="text-sm text-muted-foreground">{estimatedDelivery}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Orders are processed by local artisans in your region for faster delivery.
        </p>
      </Card>

      {/* Security & Payment */}
      <Card className="p-4">
        <h4 className="font-medium mb-3">Payment Options</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CreditCard className="h-4 w-4" />
            <span>M-Pesa, Airtel Money, Credit Card</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4" />
            <span>Secure payment processing</span>
          </div>
        </div>
      </Card>

      {/* Checkout Button */}
      <Button className="w-full" size="lg">
        Proceed to Checkout
      </Button>

      {/* Guarantees */}
      <div className="text-center space-y-2">
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <span>✓ 30-day returns</span>
          <span>✓ Quality guarantee</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Supporting local Kenyan artisans with every purchase
        </p>
      </div>
    </div>
  );
};