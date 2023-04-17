import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import Hero from "../components/homeComponents/heroComponents/Hero";
import { Movie, Page } from "../types";

const HomePage = () => {
  const { data, isLoading, error } = useQuery<AxiosResponse>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const res: Movie[] = data?.data?.results;

  if (isLoading) console.log("Loading...");

  if (error) console.log("An error has occurred");

  return <Hero data={res} />;
};

export default HomePage;
