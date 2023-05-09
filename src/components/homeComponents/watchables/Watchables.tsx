import Carousel from "../carouselComponent/Carousel";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import {
  getActionMovies,
  getDocumentaryMovies,
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
  const [actionMovieData, setActionMovieData] = useState<Movie[] | []>([]);

  const [documentaryMovieData, setDocumentaryMovieData] = useState<
    Movie[] | []
  >([]);

  const trendingCarousel = useQuery<AxiosResponse>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    onSuccess: async (data) => {
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
      setTopRatedSeriesData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const actionMoviesCarousel = useQuery<AxiosResponse>({
    queryKey: ["actionMovies"],
    queryFn: getActionMovies,
    onSuccess: async (data) => {
      setActionMovieData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const documentaryMoviesCarousel = useQuery<AxiosResponse>({
    queryKey: ["documentaryMovies"],
    queryFn: getDocumentaryMovies,
    onSuccess: async (data) => {
      setDocumentaryMovieData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (
    trendingCarousel.isLoading ||
    topRatedMovieCarousel.isLoading ||
    topRatedSeriesCarousel.isLoading
  )
    console.log("Loading...");
  if (
    trendingCarousel.isError ||
    topRatedMovieCarousel.isError ||
    topRatedSeriesCarousel.isError
  )
    console.log("An error has occurred");

  return (
    <>
      <div className="h-auto w-screen">
        <div className="pt-14 w-full px-8 z-50 text-black ">
          <Carousel
            title={"Trending"}
            carouselData={trendingMoviesData}
            isLoading={trendingCarousel.isLoading}
            path={"movies"}
          />
          <Carousel
            title={"Top Rated Movies"}
            carouselData={topRatedMoviesData}
            isLoading={topRatedMovieCarousel.isLoading}
            path={"movies"}
          />
          <Carousel
            title={"Top Rated Series"}
            carouselData={topRatedSeriesData}
            isLoading={topRatedSeriesCarousel.isLoading}
            path={"series"}
          />

          <Carousel
            title={"Action Movies"}
            carouselData={actionMovieData}
            isLoading={actionMoviesCarousel.isLoading}
            path={"movies"}
          />
          <Carousel
            title={"Horror Movies"}
            carouselData={documentaryMovieData}
            isLoading={documentaryMoviesCarousel.isLoading}
            path={"movies"}
          />
        </div>
      </div>
    </>
  );
};

export default Watchables;
