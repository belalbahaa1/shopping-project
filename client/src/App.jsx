import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Filter from "./components/Filter";
import { useState } from "react";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden">
      <Header />
      <main className="grow container py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Main Products Area */}
          <div className="md:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Premium Collection
              </h1>
              <p className="text-slate-500 mt-2 font-medium">
                Discover our handpicked products for your lifestyle.
              </p>
            </div>
            <Products products={products} />
          </div>
          {/* Sidebar Area - Now on the left */}
          <aside className="md:w-1/4">
            <Filter />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
