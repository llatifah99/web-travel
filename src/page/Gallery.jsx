import { Carousel } from "@material-tailwind/react";
const Gallery = () => {
  const photos = [
    {
      id: 1,
      link: "https://beachables.com/cdn/shop/articles/Tips_for_Fun_Relaxation_and_Safety.jpg?v=1689108911",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      link: "https://static.cozycozy.com/images/catalog/bg2/horizontal-bangkok.jpg",
    },
    {
      id: 5,
      link: "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fexoticca%2Fimage%2Fupload%2Fc_limit%2Cf_auto%2Cq_auto%3Aeco%2Cw_1280%2Fv1%2FCountry%2FJAPON%2Fshutterstock_247025746_Mt._Fuji_with_Chureito_Pagoda_in_autumn_Fujiyoshida_Japan_kd1yrj&w=3840&q=75",
    },
    {
      id: 6,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ723RE5cFTHhj5svi6eWzzNCHJDD0tX0VYXg&s",
    },
    {
      id: 7,
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ723RE5cFTHhj5svi6eWzzNCHJDD0tX0VYXg&s",
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
          Gallery
        </h1>
        <div className="w-full">
          <Carousel loop={true} autoplay={true}>
            {photos.map((photo) => (
              <div key={photo.id} className="mx-4">
                <img
                  src={photo.link}
                  alt={`photo-${photo.id}`}
                  className="h-[500px] w-[420px] object-cover object-center rounded-xl"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Gallery;
