import React from "react";

import { SlidersHorizontal, ChevronDown, Check } from "lucide-react";

const Filter = ({ handleFilterBySize, size, handleFilterByOrder, sort }) => {
  return (
    <div className="glass rounded-[2rem] p-8 sticky top-32 border border-white/20 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
        <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm shadow-indigo-500/10">
          <SlidersHorizontal size={18} strokeWidth={2.5} />
        </div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Filters
        </h2>
      </div>

      <div className="space-y-8 mb-10">
        {/* number of products */}
        <div className="flex items-center justify-between bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Inventory
          </span>
          <span className="text-sm font-bold text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-100 shadow-sm">
            4 Products
          </span>
        </div>

        {/* filter by size */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-slate-700 ml-1">
            Filter by Size
          </label>
          <div className="relative group">
            <select
              value={size}
              onChange={handleFilterBySize}
              className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3.5 pr-10 text-slate-900 font-medium focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none cursor-pointer"
            >
              <option value="all">All Sizes</option>
              <option value="xs">Extra Small (XS)</option>
              <option value="s">Small (S)</option>
              <option value="m">Medium (M)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Order */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-slate-700 ml-1">
            Sort Order
          </label>
          <div className="relative group">
            <select
              onChange={handleFilterByOrder}
              value={sort}
              className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3.5 pr-10 text-slate-900 font-medium focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none cursor-pointer"
            >
              <option value="latest">Latest Arrivals</option>
              <option value="lower">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-slate-900 text-white text-sm font-bold py-4 rounded-xl hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-500/20 shadow-xl shadow-slate-900/10 transition-all duration-300 active:scale-[0.98] group flex items-center justify-center gap-2">
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
