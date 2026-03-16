import React from "react";

import { SlidersHorizontal, ChevronDown, Check } from "lucide-react";

const Filter = () => {
  return (
    <div className="glass rounded-[2rem] p-8 sticky top-32">
      <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
        <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm shadow-indigo-500/10">
          <SlidersHorizontal size={18} strokeWidth={2.5} />
        </div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Filters</h2>
      </div>

      {/* Categories */}
      <div className="mb-10">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex justify-between items-center cursor-pointer group">
          Categories
          <ChevronDown size={14} className="group-hover:text-slate-600 transition-colors" />
        </h3>
        <div className="space-y-4">
          {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((cat, i) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-300 ${i === 0 ? 'bg-indigo-600 border-indigo-600 shadow-md shadow-indigo-500/20' : 'border-slate-200 bg-white group-hover:border-indigo-400 group-hover:shadow-sm'}`}>
                {i === 0 && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
              <span className={`text-sm font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-900 transition-colors'}`}>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-10">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex justify-between items-center cursor-pointer group">
          Price Range
          <ChevronDown size={14} className="group-hover:text-slate-600 transition-colors" />
        </h3>
        <div className="pt-2">
          <div className="h-1.5 w-full bg-slate-100 rounded-full relative mb-10">
            <div className="absolute left-[20%] right-[30%] h-full bg-linear-to-r from-indigo-500 to-violet-500 rounded-full shadow-sm shadow-indigo-500/20"></div>
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-indigo-600 rounded-full shadow-lg cursor-grab hover:scale-110 transition-transform"></div>
            <div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-2 border-indigo-600 rounded-full shadow-lg cursor-grab hover:scale-110 transition-transform"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 border border-slate-100 bg-slate-50/50 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-900 text-center shadow-inner">
              $50
            </div>
            <span className="text-slate-300 font-bold">-</span>
            <div className="flex-1 border border-slate-100 bg-slate-50/50 rounded-xl py-2.5 px-3 text-xs font-bold text-slate-900 text-center shadow-inner">
              $450
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-slate-900 text-white text-sm font-bold py-4 rounded-xl hover:bg-slate-800 focus:ring-4 focus:ring-slate-900/10 shadow-xl shadow-slate-900/10 transition-all duration-300 active:scale-[0.98]">
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
