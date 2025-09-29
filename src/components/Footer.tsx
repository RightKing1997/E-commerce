import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">CommerceStore</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for premium products with detailed specifications, competitive pricing, and exceptional service.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">123 Commerce St, Business District</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">support@commercestore.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Products</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Categories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Deals</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Size Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">Track Order</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to get special offers, new product alerts, and exclusive deals.
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 CommerceStore. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-smooth">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-smooth">Terms of Service</a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;