import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      link: "https://images.ctfassets.net/1aemqu6a6t65/46MJ6ER585Rwl3NraEIoGL/784c5eb5d87f576b5548b1a2255f08e7/tripadvisortimessquare_taggeryanceyiv_5912?w=1200&h=800&q=75",
    },
    {
      id: 7,
      link: "https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/1634657702001/66962544-e259-4ba2-9413-72deb9ea2fee/b654725d-78e9-4542-9572-f7bd2f72d0af/1280x720/match/image.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Gallery
      </h1>
      <div className="w-full max-w-6xl">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img
                src={photo.link}
                alt={`photo-${photo.id}`}
                className="h-[400px] w-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
