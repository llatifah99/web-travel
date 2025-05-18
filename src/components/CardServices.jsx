import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // opsional: bisa pakai icon SVG lain

const CardServices = ({ items }) => {
  // save current position
  const [currentIndex, setCurrentIndex] = useState(0);
  // 3 cards will displayed
  const cardsPerPage = 3;

  //prev button, comparing indexes, take the max value
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };
  // next button, comparing indexes, take the min value
  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerPage, items.length - cardsPerPage)
    );
  };

  //   retrieves part of the array contents
  const currentItems = items.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="relative w-full flex justify-center items-center mt-8">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-0 z-10 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full disabled:opacity-50"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-12">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="w-[320px] h-[360px] rounded-xl flex flex-col items-center justify-start bg-[#001B54] text-center
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden relative"
          >
            <img
              src={item.imageLink}
              alt="our-services"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl bg-black/50 px-6 py-2 rounded">
              {item.text}
            </h2>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentIndex + cardsPerPage >= items.length}
        className="absolute right-0 z-10 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full disabled:opacity-50"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CardServices;
