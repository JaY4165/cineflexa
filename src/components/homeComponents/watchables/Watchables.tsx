import Carousel from "../carouselComponent/Carousel";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import {
  getTopRatedMovies,
  getTopRatedSeries,
  getTrendingMovies,
} from "../../../api/tmdb_api";
import { useState } from "react";
import { Movie } from "../../../types";

const Watchables = () => {
  const [trendingMoviesData, setTrendingMoviesData] = useState<Movie[] | []>(
    []
  );
  const [topRatedMoviesData, setTopRatedMoviesData] = useState<Movie[] | []>(
    []
  );
  const [topRatedSeriesData, setTopRatedSeriesData] = useState<Movie[] | []>(
    []
  );
  const trendingCarousel = useQuery<AxiosResponse>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    onSuccess: async (data) => {
      console.log("this is trending movie data", data.data.results);
      setTrendingMoviesData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const topRatedMovieCarousel = useQuery<AxiosResponse>({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
    onSuccess: async (data) => {
      console.log("this is trending movie data", data.data.results);
      setTopRatedMoviesData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const topRatedSeriesCarousel = useQuery<AxiosResponse>({
    queryKey: ["topRatedSeries"],
    queryFn: getTopRatedSeries,
    onSuccess: async (data) => {
      console.log("this is trending movie data", data.data.results);
      setTopRatedSeriesData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (trendingCarousel.isLoading || topRatedMovieCarousel.isLoading)
    console.log("Loading...");
  if (trendingCarousel.isError || topRatedMovieCarousel.isError)
    console.log("An error has occurred");

  return (
    <>
      <div className="h-screen w-screen">
        <div className="pt-14 w-full px-8 z-50 text-black ">
          <Carousel title={"Trending"} carouselData={trendingMoviesData} />
          <Carousel
            title={"Top Rated Movies"}
            carouselData={topRatedMoviesData}
          />
          <Carousel
            title={"Top Rated Series"}
            carouselData={topRatedSeriesData}
          />
        </div>
      </div>
    </>
  );
};

export default Watchables;
