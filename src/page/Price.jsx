const Price = () => {
  const priceList = [
    {
      id: 1,
      title: "Hotel Booking",
      price: 23,
      features:
        "Perfect for visa applications.Can be used for Schengen visas and all embassies.Return flight tickets.Flights to all countries worldwide.",
    },
    {
      id: 2,
      title: "Flight Booking",
      price: 29,
      features:
        "Perfect for visa applications.Can be used for Schengen visas and all embassies.Return flight tickets.Flights to all countries worldwide.",
    },
    {
      id: 3,
      title: "Hotel Booking",
      price: 30,
      features:
        "Perfect for visa applications.Can be used for Schengen visas and all embassies.Return flight tickets.Flights to all countries worldwide.",
    },
  ];

  const poins = priceList[0].features.split(".");
  console.log(poins);
  return (
    <>
      <div>
        {priceList.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            <ul>
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

export default Price;
