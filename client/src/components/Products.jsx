import React from "react";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
          <div className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-8 mb-6 overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full h-full object-contain mix-blend-multiply" 
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{product.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-slate-900">${product.price}</span>
              <button className="h-10 px-4 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
