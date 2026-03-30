import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Alba Cinnamon Sticks",
    price: "4500.00",
    description: "The highest grade of Ceylon cinnamon with a sweet taste and pleasant aroma.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=500"
  },
  {
    id: 2,
    name: "Cinnamon Powder",
    price: "1250.00",
    description: "Premium quality finely ground cinnamon, perfect for baking and health drinks.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=500"
  },
  {
    id: 3,
    name: "Cinnamon Leaf Oil",
    price: "3200.00",
    description: "100% pure organic leaf oil for aromatherapy and medicinal purposes.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=500"
  }
];

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-amber-900 mb-10">Our Premium Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;