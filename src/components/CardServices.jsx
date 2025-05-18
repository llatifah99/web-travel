const CardServices = ({ items }) => {
  console.log("ini our services:", items);
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </>
  );
};
export default CardServices;
