import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import Hero from "../components/homeComponents/heroComponents/Hero";
import { Movie } from "../types";
import Watchables from "../components/homeComponents/watchables/Watchables";

const HomePage = () => {
  const [movieData, setMovieData] = useState<Movie[] | []>([]);

  const { isLoading, error } = useQuery<AxiosResponse>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    onSuccess: async (data) => {
      setMovieData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) console.log("Loading...");
  if (error) console.log("An error has occurred");

  return (
    <>
      <Hero heroMovie={movieData} />
      <Watchables />;
    </>
  );
};

export default HomePage;
