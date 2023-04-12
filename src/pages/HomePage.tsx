import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb_api";
import { AxiosResponse } from "axios";
import blade2 from "../assets/bladerunner2.jpg";
import { BsStarFill } from "react-icons/bs";
import "../css/HomePageCss/home.css";

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
        <div className="flex flex-col justify-end h-full w-full pb-20 pl-4 md:pl-7 md:pt-52">
          <h1 className="text-white text-4xl pb-4 font-mono font-bold md:text-6xl">
            Blade Runner 2049
          </h1>
          <div className="pl-1 inline-flex">
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
            <span className="text-white/75 pt-[0.7rem] pl-6">2h 35m</span>
          </div>
          <div className="">
            <p className="paragraph text-white text-sm pt-5 font-mono font-light max-w-[90%] md:max-w-[65%] lg:max-w-[70%] xl:max-w-[75%]">
              Thirty years after the events of the first film, a new blade
              runner, LAPD Officer K, unearths a long-buried secret that has the
              potential to plunge what's left of society into chaos. K's
              discovery leads him on a quest to find Rick Deckard, a former LAPD
              blade runner who has been missing for 30 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
