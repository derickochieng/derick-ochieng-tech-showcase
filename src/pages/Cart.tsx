import { Navigation } from "@/components/print-on-demand/Navigation";
import { CartItems } from "@/components/print-on-demand/CartItems";
import { CartSummary } from "@/components/print-on-demand/CartSummary";
import { Footer } from "@/components/print-on-demand/Footer";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;