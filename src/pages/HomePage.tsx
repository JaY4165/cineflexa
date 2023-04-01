import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

const HomePage: any = () => {
  const { data, isLoading, error } = useQuery<AxiosResponse>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) console.log("Loading...");

  if (error) console.log("An error has occurred");

  console.log(data);

  return <div className="h-screen w-screen bg-[rgb(7,7,7)]"></div>;
};

export default HomePage;
