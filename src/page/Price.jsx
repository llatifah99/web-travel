const Price = () => {
  const priceList = [
    {
      key: 1,
      title: "Hotel Booking",
      price: 23,
      features:
        "Perfect for visa applications.Can be used for Schengen visas and all embassies.Return flight tickets.Flights to all countries worldwide.",
    },
  ];

  const poins = priceList[0].features.split(".");
  console.log(poins);
  return (
    <>
      <div>
        <div>
          <h1>{priceList[0].title}</h1>
          <h2>${priceList[0].price}</h2>
          <div>
            <ul>
              {poins.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
