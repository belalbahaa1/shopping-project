import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="grow container py-8">
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ShopEase</h1>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            Your premium shopping destination for the latest trends and exclusive deals.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default App;
