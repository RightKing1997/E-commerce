import ProductCard from "./ProductCard";

// Sample product data - will be replaced with real data from your backend
const sampleProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1234,
    badge: "Best Seller",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality."
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 856,
    badge: "New",
    description: "Advanced fitness tracking with heart rate monitoring and GPS capabilities."
  },
  {
    id: "3",
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 432,
    description: "Professional-grade camera lens with exceptional image quality and versatile focal range."
  },
  {
    id: "4",
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 2103,
    badge: "Popular",
    description: "RGB mechanical keyboard with customizable keys and tactile switches for gaming."
  },
  {
    id: "5",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 678,
    description: "Compact wireless speaker with powerful bass and waterproof design."
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 324,
    description: "Comfortable office chair with lumbar support and adjustable height settings."
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products with detailed specifications and competitive pricing.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-medium transition-smooth shadow-md hover:shadow-lg">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;