import React from "react";
import { ShoppingBag, Trash2, ShoppingCart, Plus, Minus } from "lucide-react";

const Cart = ({ cartItems, removeFromCart, clearCart, updateQuantity }) => {
  return (
    <div className="mt-16 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10" />
      {/* card title */}
      <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-100">
        <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
          <ShoppingBag size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Shopping Cart
          </h2>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400 bg-slate-50/50 rounded-[2.5rem] border-2 border-dashed border-slate-100 mb-10 group transition-all duration-500 hover:border-indigo-100">
          <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
            <ShoppingBag
              size={32}
              className="text-slate-200 group-hover:text-indigo-200 transition-colors"
            />
          </div>
          <p className="font-bold text-xl text-slate-900 mb-1">
            Your cart is empty
          </p>
          <p className="text-sm font-medium text-slate-400 max-w-[200px] text-center">
            Looks like you haven't added anything yet.
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-indigo-500 animate-ping opacity-75" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              Cart Items
              <span className="bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-lg text-xs font-black">
                {cartItems.length}
              </span>
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1.5 transition-colors group px-3 py-1.5 rounded-lg hover:bg-red-50 cursor-pointer"
          >
            <Trash2 size={14} />
            Clear Cart
          </button>
        </div>
      )}

      <div className="space-y-6">
        {cartItems.map((item) => (
          /* cart item */
          <div
            key={item.id}
            className="flex items-center gap-6 p-5 rounded-3xl bg-slate-50/50 border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-500 group"
          >
            <div className="h-24 w-24 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-4 overflow-hidden shadow-sm">
              <img
                src={item.imageUrl}
                alt="product"
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* cart info */}
            <div className="flex-grow flex flex-col gap-1">
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white border border-slate-100 p-1 rounded-xl shadow-sm">
                  <button
                    onClick={() => updateQuantity(item, -1)}
                    className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={3} />
                  </button>
                  <span className="text-sm font-bold text-slate-900 min-w-[20px] text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQuantity(item, 1)}
                    className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={3} />
                  </button>
                </div>
                <span className="text-xl font-black text-slate-900">
                  ${item.price}
                </span>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item)}
              className="h-12 w-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm shadow-red-100 cursor-pointer"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
      {/* Cart Summary / Empty State Placeholder */}
      <div className="mt-10 pt-10 border-t border-slate-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-left">
              <p className="text-slate-400 font-semibold text-sm uppercase tracking-wider mb-1">
                Total Amount
              </p>
              <p className="text-4xl font-black text-slate-900">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>

          <button className="w-full md:w-auto px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-[1.25rem] hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-200 hover:-translate-y-1 flex items-center justify-center gap-3">
            <ShoppingCart size={20} />
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
