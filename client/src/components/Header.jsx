import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Shop<span className="text-indigo-600">Ease</span>
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Deals
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            Sign In
          </button>
          <button className="flex items-center justify-center rounded-full bg-indigo-100 p-2 text-indigo-600 hover:bg-indigo-200 transition-colors relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
