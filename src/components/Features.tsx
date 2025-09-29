import { Truck, Shield, Headphones, Download, Globe, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free worldwide shipping on orders over $50. Express delivery available."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your payment information is protected with bank-level security."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated customer support team."
  },
  {
    icon: Download,
    title: "Instant PDFs",
    description: "Download detailed product specifications and technical data instantly."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We ship to over 190 countries with reliable international delivery."
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options including buy now, pay later solutions."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with premium products and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 bg-gradient-card shadow-md hover:shadow-lg transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;