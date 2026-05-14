import React from "react";
import Modal from "react-modal";
import { X, ShoppingCart, Star, ShieldCheck, Truck } from "lucide-react";

// Set the app element for accessibility
if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

const ProductModal = ({ isOpen, onClose, product, addToCart }) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Product Details"
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={300}
    >
      <div className="relative bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full mx-auto shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Product Image Section */}
        <div className="md:w-1/2 bg-slate-50 p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-violet-500/5 opacity-50" />
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply relative z-10"
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                (48 Reviews)
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
              {product.title}
            </h2>
            <div className="text-4xl font-black text-indigo-600 mb-6">
              ${product.price}
            </div>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              {product.desc}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="text-indigo-600" size={18} />
                <span className="text-xs font-bold text-slate-700">
                  2 Year Warranty
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <Truck className="text-indigo-600" size={18} />
                <span className="text-xs font-bold text-slate-700">
                  Free Delivery
                </span>
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full bg-slate-900 text-white font-bold py-5 rounded-[1.25rem] hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 active:scale-[0.98]"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
