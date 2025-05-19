const CardPrice = ({ priceList }) => {
  return (
    <>
      <div className="grid gap-6 px-12 w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {priceList.map((item) => (
          <div
            key={item.id}
            className="bg-blue-001541 text-yellow-FFB729 w-[280px] h-[340px] flex flex-col items-center px-6 py-12 rounded-xl"
          >
            <h1 className="text-2xl mb-2">{item.title}</h1>
            <h2 className="text-5xl mb-2 font-bold">${item.price}</h2>
            <ul className="text-md list-disc list-inside">
              {item.features.split(".").map((poin, index) => (
                <li key={index}>{poin}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardPrice;
