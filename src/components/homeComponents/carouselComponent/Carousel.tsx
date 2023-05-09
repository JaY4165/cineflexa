import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Movie } from "../../../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  carouselData: Movie[];
  isLoading: boolean;
  path: string
}

const TrendingCarousel = ({ title, carouselData, isLoading,path }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  const [watchCarousel, setWatchCarousel] = useState<Movie[] | []>([]);

  useEffect(() => {
    setWatchCarousel(carouselData);
    return () => {
      setWatchCarousel([]);
    };
  }, [carouselData]);

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
    swipeToSlide: true,
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
    <section className="pb-10">
      <h1 className="text-white/75 text-3xl pl-2 pb-5 font-thin font-mono">
        {title}
      </h1>
      <Slider {...settings}>
        {watchCarousel.map((slide) => {
          const imagePath = slide?.backdrop_path ?? slide?.poster_path ?? "";
          const imageSrc = imageUrl + imagePath;
          return (
            <div className="p-2 outline-none" key={slide.id}>
              <Link to={`/${path}/${slide.id}`}>
                <LazyLoadImage
                  effect="blur"
                  className="w-full h-full object-fill rounded-lg outline-none"
                  src={imageSrc}
                  alt={slide?.original_title}
                  loading="lazy"
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default TrendingCarousel;
