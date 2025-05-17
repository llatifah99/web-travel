const CardHowToAccess = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {items.map((items) => (
          <div
            key={items.id}
            className="text-blue-001541 rounded-xl p-6 flex flex-col items-center justify-center bg-yellow-FFB729 text-center
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4">{items.icon}</div>
            <p className="text-sm md:text-base">{items.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardHowToAccess;
