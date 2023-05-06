import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getTrendingMovies } from "../../../api/tmdb_api";
import { useState } from "react";
import { Movie } from "../../../types";
const TrendingCarousel = () => {
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  const [trendingMovies, setTrendingMovies] = useState<Movie[] | []>([]);

  const { isLoading, error } = useQuery<AxiosResponse>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    onSuccess: async (data) => {
      console.log("this is trending movie data", data.data.results);
      setTrendingMovies(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) console.log("Loading...");
  if (error) console.log("An error has occurred");

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
      <div></div>
      <h1 className="text-white text-3xl">Trending</h1>
      <Slider {...settings}>
        {trendingMovies.map((slide) => {
          return (
            <div className="p-2" key={slide.id}>
              <img
                className="w-auto h-auto object-fill rounded-lg"
                src={imageUrl + (slide?.backdrop_path || slide?.poster_path)}
                alt={slide?.original_title}
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default TrendingCarousel;
