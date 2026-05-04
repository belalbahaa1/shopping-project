import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Filter from "./components/Filter";
import { useState } from "react";
import data from "./data.json";

function App() {
  // 1. Keep track of filter criteria only
  const [sort, setSort] = useState("latest");
  const [size, setSize] = useState("all");

  // 2. Derive the filtered and sorted products list dynamically
  // This replaces the need for a 'products' state and manually calling 'setProducts'
  const filteredProducts = data
    .filter((product) => {
      if (size === "all") return true;
      return product.sizes.includes(size);
    })
    .sort((a, b) => {
      if (sort === "lower") return a.price - b.price;
      if (sort === "highest") return b.price - a.price;
      return a.id < b.id ? 1 : -1; // "latest" (assuming higher ID = newer)
    });

  // 3. Simple, clean handlers
  const handleFilterBySize = (e) => setSize(e.target.value);
  const handleFilterByOrder = (e) => setSort(e.target.value);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden">
      <Header />
      <main className="grow container py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4">
            <Products products={filteredProducts} />
          </div>
          <aside className="md:w-1/4">
            <Filter
              handleFilterBySize={handleFilterBySize}
              handleFilterByOrder={handleFilterByOrder}
              size={size}
              sort={sort}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
