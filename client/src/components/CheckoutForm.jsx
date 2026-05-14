import React, { useState } from "react";
import Modal from "react-modal";
import { X, CreditCard, User, Mail, MapPin } from "lucide-react";

// Set the app element for accessibility
if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

const CheckoutForm = ({ isOpen, onClose }) => {
  const [value, setValue] = useState({});

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
      address: value.address,
    };
    console.log(order);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Checkout Form"
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={300}
    >
      <div className="relative bg-white rounded-[2.5rem] overflow-hidden max-w-md w-full mx-auto shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        <div className="p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <CreditCard size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Checkout
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Complete your order
              </p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={submitOrder}>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <User size={12} className="text-indigo-500" />
                Full Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                required
                name="name"
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Mail size={12} className="text-indigo-500" />
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                required
                name="email"
                placeholder="john@example.com"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} className="text-indigo-500" />
                Shipping Address
              </label>
              <textarea
                onChange={handleChange}
                required
                name="address"
                placeholder="123 Street, City, Country"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300 min-h-[100px] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-5 rounded-[1.25rem] hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-100 active:scale-[0.98] mt-4 flex items-center justify-center gap-3"
            >
              Confirm Purchase
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutForm;
