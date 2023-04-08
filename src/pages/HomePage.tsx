import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import blade2 from "../assets/bladerunner2.jpg";

const HomePage = () => {
  const { data, isLoading, error } = useQuery<AxiosResponse>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading) console.log("Loading...");

  if (error) console.log("An error has occurred");

  console.log(data);

  return (
    <div className="h-screen w-screen  bg-[rgb(7,7,7)] overflow-x-hidden">
      <div
        className={`justify-center h-full object-cover
        bg-no-repeat bg-cover bg-center brightness-75`}
        style={{ backgroundImage: `url(${blade2})` }}
      ></div>
    </div>
  );
};

export default HomePage;
