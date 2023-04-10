import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import blade2 from "../assets/bladerunner2.jpg";
import { BsStarFill } from "react-icons/bs";

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
      >
        <div className="flex flex-col justify-center h-full w-full md:pl-7 md:pt-52">
          <h1 className="text-white text-ellipsis text-6xl pb-4 font-mono font-bold">
            Blade Runner 2049
          </h1>
          <div className="pl-1.5 flex flex-row">
            <span>
              <BsStarFill size={30} color="gold" />
            </span>
            <span className="text-white text-3xl pl-2 font-mono font-thin">
              8.1
            </span>

            <span className="text-slate-300 text-2xl pl-3">|</span>
            <span className="text-white text-2xl pt-1.5 pl-2 font-mono font-light">
              1055
            </span>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
