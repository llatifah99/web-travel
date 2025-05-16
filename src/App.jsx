import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon hamburger dan close

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 w-full z-10 px-6 md:px-16 py-4">
        <nav className="flex justify-between items-center text-white font-semibold">
          <div className="text-4xl font-bold text-yellow-400">
            Go<span className="text-blue-900">Cation</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-16 text-white text-xl">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-4 text-white bg-black bg-opacity-80 p-6 rounded shadow-lg">
            <li>
              <a href="#" className="block hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </header>

      {/* Hero Section */}
      <div
        id="hero"
        className="h-screen bg-cover bg-center flex items-center justify-start text-left px-6 md:px-16"
        style={{
          backgroundImage: "url('/beach.jpg')", // Ganti sesuai nama file kamu
        }}
      >
        {/* Overlay putih dengan opacity 50% */}
        <div className="absolute inset-0 bg-white opacity-50 z-0"></div>
        <div className="relative z-10 max-w-xl text-black">
          <h3 className="text-xl md:text-2xl font-medium">Search your next</h3>
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-blue-900">
            Dream Vacation
          </h1>
          <p className="text-md md:text-lg text-blue-100 mt-2 mb-6">
            Explore beautiful destination around the world
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Konten tambahan */}
      <div className="px-6 md:px-16 py-12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
    </>
  );
}

export default App;
