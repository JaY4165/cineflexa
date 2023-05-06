import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Movie } from "../../../types";

interface Props {
  title: string;
  movieData: Movie[];
}

const TrendingCarousel = ({ title, movieData }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  const [trendingMovies, setTrendingMovies] = useState<Movie[] | []>([]);

  useEffect(() => {
    setTrendingMovies(movieData);
    return () => {
      setTrendingMovies([]);
    };
  }, [movieData]);

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
    <section>
      <h1 className="text-white/75 text-3xl pl-2 pb-5 font-thin font-mono">
        {title}
      </h1>
      <Slider {...settings}>
        {trendingMovies.map((slide) => {
          return (
            <div className="p-2" key={slide.id}>
              <img
                className="w-auto h-auto object-fill rounded-lg"
                src={imageUrl + (slide?.backdrop_path || slide?.poster_path)}
                alt={slide?.original_title}
                loading="lazy"
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default TrendingCarousel;
