import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import ProductModal from "./ProductModal";

const Products = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (item) => {
    setSelectedProduct(item);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 group"
        >
          <div className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-8 mb-6 overflow-hidden relative">
            <button
              onClick={() => openModal(product)}
              className="absolute inset-0 z-10 w-full h-full cursor-pointer"
              aria-label="View Product Details"
            />
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
              {product.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-slate-900">
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="h-10 px-4 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={closeModal}
        product={selectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Products;
