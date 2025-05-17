const CardHowToAccess = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((items) => (
        <div key={items.id}>
          <div>{items.icon}</div>
          <p>{items.text}</p>
        </div>
      ))}
    </>
  );
};

export default CardHowToAccess;
