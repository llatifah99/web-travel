const CardPrice = ({ priceList }) => {
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

export default CardPrice;
