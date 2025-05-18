const CardServices = ({ items }) => {
  console.log("ini our services:", items);
  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    </>
  );
};
export default CardServices;
