import Carousel from "../carouselComponent/Carousel";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getTrendingMovies } from "../../../api/tmdb_api";
import { useState } from "react";
import { Movie } from "../../../types";

const Watchables = () => {
  const [trendingMoviesData, setTrendingMoviesData] = useState<Movie[] | []>(
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

  if (trendingCarousel.isLoading) console.log("Loading...");
  if (trendingCarousel.isError) console.log("An error has occurred");

  return (
    <div className="h-screen w-screen">
      <div className="pt-14 w-full px-8 z-50 text-black ">
        <Carousel title={"Trending"} movieData={trendingMoviesData} />
      </div>
    </div>
  );
};

export default Watchables;
