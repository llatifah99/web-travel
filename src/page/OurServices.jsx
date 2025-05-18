import CardServices from "../components/CardServices";
const OurServices = () => {
  const items = [
    {
      id: 1,
      imageLink:
        "https://images.unsplash.com/photo-1619467416348-6a782839e95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Travel",
    },
    {
      id: 2,
      imageLink:
        "https://images.unsplash.com/photo-1619467416348-6a782839e95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Travel",
    },
  ];
  return (
    <>
      <h1>Our Services</h1>
      <CardServices items={items} />
    </>
  );
};
export default OurServices;
