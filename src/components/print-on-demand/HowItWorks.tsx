import { Button } from "@/components/ui/button";
import { Palette, ShoppingCart, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Palette,
      title: "Design Your Product",
      description: "Use our easy design studio to create your custom t-shirt, hoodie, or accessories. Upload your artwork or use our templates.",
      step: "01"
    },
    {
      icon: ShoppingCart,
      title: "Place Your Order",
      description: "Choose your size, color, and quantity. Pay securely with M-Pesa, Airtel Money, or card payment.",
      step: "02"
    },
    {
      icon: Truck,
      title: "Local Production",
      description: "Your order is sent to skilled local tailors in your area who will craft your product with care.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Fast Delivery",
      description: "Get your custom products delivered to your door within 3-7 days across Kenya.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From design to delivery, we make custom printing simple and support local artisans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="bg-card p-6 rounded-lg border shadow-sm h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-y-2 border-y-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/design-studio">
            <Button size="lg">
              Start Your Design Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};