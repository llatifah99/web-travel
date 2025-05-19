import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getCardPerPage = () => {
  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const CardPrice = ({ priceList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardPerPage());

  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => Math.max(prev - cardsPerPage, 0));

  const handleNext = () =>
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerPage, priceList.length - cardsPerPage)
    );

  const currentItems = priceList.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <div className="relative w-full flex justify-center items-center mt-8">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-2 z-10 bg-blue-001541 hover:bg-blue-950 text-white p-2 rounded-full disabled:opacity-50"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="grid gap-6 px-12 w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-blue-001541 text-yellow-FFB729 w-[280px] h-[340px] flex flex-col items-center px-6 py-12 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden relative"
          >
            <h1 className="text-2xl mb-2">{item.title}</h1>
            <h2 className="text-5xl mb-4 font-bold">${item.price}</h2>
            <ul className="text-md list-disc list-inside">
              {item.features.split(".").map((poin, index) => (
                <li key={index}>{poin}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex + cardsPerPage >= priceList.length}
        className="absolute right-2 z-10 bg-blue-001541 hover:bg-blue-950 text-white p-2 rounded-full disabled:opacity-50"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CardPrice;
