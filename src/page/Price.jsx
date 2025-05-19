import CardPrice from "../components/CardPrice";
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
        <h1>Our Prices</h1>
        <CardPrice priceList={priceList} />
      </div>
    </>
  );
};

export default Price;
