import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-yellow-700">Rs. {product.price.toFixed(2)}</span>
          <button className="bg-yellow-600 text-white px-5 py-2 rounded-md font-medium hover:bg-yellow-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;