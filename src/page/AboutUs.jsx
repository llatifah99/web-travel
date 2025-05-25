const AboutUs = ({ id }) => {
  return (
    <div
      id={id}
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-16 py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white bg-opacity-60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="https://media.istockphoto.com/id/1338030957/id/foto/hari-yang-sibuk-di-agen-perjalanan.jpg?s=1024x1024&w=is&k=20&c=lOhfioZfo4zia-saFiADCeizxVFFn6c0oOUtxJyBwb0="
          alt="Team working"
          className="w-full h-auto rounded-xl object-cover shadow-md"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Tentang Kami
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            repellendus in molestiae dolorum! Aliquam perferendis culpa minima
            necessitatibus. Fugiat illum ratione ut dolor repellat magnam
            quaerat animi error quasi quidem.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aliquam aliquid vel nostrum nisi saepe! Aspernatur asperiores est
            doloremque beatae enim esse consectetur cum vitae deserunt
            accusantium? Labore sint eos iusto veniam hic quae, soluta facilis
            nam, quis aliquid corporis. Cum architecto omnis nesciunt ullam
            laboriosam quia nisi, aut iusto? Fugit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
