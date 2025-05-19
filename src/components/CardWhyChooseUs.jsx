const CardWhyChooseUs = ({ reasons }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-blue-001541 rounded-xl p-6 flex flex-col items-center justify-center text-yellow-FFB729 text-center
            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden relative"
          >
            <div className="mb-4">{reason.icon}</div>
            <p className="text-sm md:text-base">{reason.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardWhyChooseUs;
