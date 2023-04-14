import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import Hero from "../components/homeComponents/heroComponents/Hero";

const HomePage = () => {
  const { data, isLoading, error } = useQuery<AxiosResponse>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) console.log("Loading...");

  if (error) console.log("An error has occurred");

  console.log(data);

  return <Hero data={data}/>;
};

export default HomePage;
