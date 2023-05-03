import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  interface mov_img {
    id: number;
    src: string;
    alt: string;
  }

  const mov_img = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "The world",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "Train",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      alt: "Laptop",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "The world",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "Train",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      alt: "Laptop",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1627745193246-1fa1c9404b21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "The world",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1631116617822-e100bd7e6e06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "Train",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      alt: "Laptop",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    Infinity: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {mov_img.map((slide) => {
          return (
            <div className="p-2" key={slide.id}>
              <img
                className="w-auto h-auto object-fill"
                src={slide.src}
                alt={slide.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
