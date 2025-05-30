import { useState, useEffect } from "react";
import { Menu, X, HandHeart, Zap } from "lucide-react";
import AboutUs from "./page/AboutUs";
import WhyChooseUs from "./page/WhyChooseUs";
import HowToAccess from "./page/HowToAccess";
import OurServices from "./page/OurServices";
import Price from "./page/Price";
import Gallery from "./page/Gallery";
import Questions from "./page/Questions";
import Footer from "./page/Footer";
import Typewriter from "typewriter-effect";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-20 px-6 md:px-16 py-4">
        <nav className="flex justify-between items-center text-white font-semibold">
          <div className="text-4xl font-bold text-yellow-400">
            Go<span className="text-blue-900">Cation</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-16 text-white text-xl">
            <li>
              <a href="#hero" className="hover:text-blue-00317E">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-00317E">
                About us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-00317E">
                Services
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/"
                className="hover:text-blue-00317E"
                target="_blank"
              >
                Contact Us
              </a>
            </li>
          </ul>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-30 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-4 text-white bg-black bg-opacity-80 p-6 rounded shadow-lg z-30 relative">
            <li>
              <a href="#hero" className="block hover:text-blue-00317E">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-blue-00317E">
                About us
              </a>
            </li>
            <li>
              <a href="#services" className="block hover:text-blue-00317E">
                Services
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/"
                className="block hover:text-blue-00317E"
                target="_blank"
              >
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </header>
      {/* Hero Section */}
      <div
        id="hero"
        className="relative h-screen bg-cover bg-center flex items-center justify-start text-left px-6 md:px-16"
        style={{
          backgroundImage: "url('/beach.jpg')",
        }}
      >
        {/* Overlay putih */}
        <div className="absolute inset-0 bg-white opacity-50 z-0"></div>

        {/* Konten Hero */}
        <div className="relative z-10 max-w-xl text-blue-001541">
          <h3 className="text-xl md:text-2xl font-medium">Search your next</h3>
          <div className="text-4xl md:text-6xl font-bold uppercase">
            <Typewriter
              options={{
                strings: ["Dream Vacation"],
                autoStart: true,
                loop: true,
                delay: 300,
                deleteSpeed: 100,
                pauseFor: 1500,
              }}
            />
          </div>
          {/* <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Dream Vacation
          </h1> */}
          <p className="text-md md:text-lg mt-2 mb-6">
            Explore beautiful destination around the world
          </p>
          <button className="bg-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
            Book Now
          </button>
        </div>
      </div>
      {/* Konten tambahan */}
      <AboutUs id="about" />
      <WhyChooseUs />
      <HowToAccess />
      <OurServices id="services" />
      <Price></Price>
      <Gallery></Gallery>
      <Questions />
      <Footer></Footer>
    </>
  );
}

export default App;
