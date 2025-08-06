import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Palette, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/print-on-demand" className="flex items-center gap-2">
              <Palette className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">KenyaPrint</span>
            </Link>
            <p className="text-muted-foreground">
              Supporting local Kenyan artisans while delivering high-quality custom printed products across the country.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/design-studio" className="block text-muted-foreground hover:text-primary transition-colors">
                Design Studio
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/print-on-demand#how-it-works" className="block text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/dashboard" className="block text-muted-foreground hover:text-primary transition-colors">
                My Account
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@kenyaprint.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on new products and special offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 KenyaPrint. All rights reserved. Supporting local artisans across Kenya.</p>
        </div>
      </div>
    </footer>
  );
};