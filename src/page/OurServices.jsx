import CardServices from "../components/CardServices";
const OurServices = () => {
  const items = [
    {
      id: 1,
      imageLink:
        "https://images.unsplash.com/photo-1619467416348-6a782839e95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Travel Itinerary",
    },
    {
      id: 2,
      imageLink:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Hotel Booking",
    },
    {
      id: 3,
      imageLink:
        "https://images.unsplash.com/photo-1620146596504-95527348e0ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Flight Booking",
    },
    {
      id: 4,
      imageLink: "https://www.aca.co.id/cmsprd/uploads/C_1864%201710398777.jpg",
      text: "Travel Insurance",
    },
  ];
  return (
    <>
      <div
        className="bg-gray-D0D3D9
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
          Our Services
        </h1>
        <CardServices items={items} />
      </div>
    </>
  );
};
export default OurServices;
