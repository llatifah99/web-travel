const CardServices = ({ items }) => {
  //   console.log("ini our services:", items);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[320px] h-[360px] rounded-xl flex flex-col items-center justify-start bg-yellow-FFB729 text-center
          transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <img
              src={item.imageLink}
              alt="our-services"
              className="h-full object-cover"
            />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl bg-black/50 px-16 py-2 rounded">
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardServices;
