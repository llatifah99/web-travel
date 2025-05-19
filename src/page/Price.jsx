import CardPrice from "../components/CardPrice";
const Price = () => {
  const priceList = [
    {
      id: 1,
      title: "Flight Booking",
      price: 29,
      features:
        "Perfect for visa applications.Can be used for Schengen visas and all embassies.Return flight tickets.Flights to all countries worldwide",
    },
    {
      id: 2,
      title: "Hotel Booking",
      price: 29,
      features:
        "Perfect for visa applications.Can be used for Schengen visas and all embassies.Hotel reservations available worldwide",
    },
    {
      id: 3,
      title: "Travel Insurance",
      price: 24,
      features:
        "$50,000 coverage with a $0 deductible.Available for countries worldwide",
    },
    {
      id: 4,
      title: "Travel Itinerary",
      price: 39,
      features:
        "Accepted by all embassies for visa applications.Available for all countries.Enhances the acceptance rate of your visa",
    },
  ];

  return (
    <>
      <div
        className="bg-yellow-FFB729
        flex flex-col items-center justify-center
        min-h-screen
        bg-cover
        bg-center
        items-center
        text-left
        px-6
        md:px-16
        py-16"
      >
        <h1 className="mb-8 text-4xl font-bold text-blue-001541 text-center">
          Our Prices
        </h1>
        <CardPrice priceList={priceList} />
      </div>
    </>
  );
};

export default Price;
