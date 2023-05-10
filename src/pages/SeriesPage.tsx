import { useQuery } from "@tanstack/react-query";
import { getAllTv, getTvByName } from "../api/tmdb_api";
// import bghero from "../assets/bghero.jpg";
import "../css/MoviesPageCss/movies.css";
import { AxiosResponse } from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { Movie } from "../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const SeriesPage = () => {
  const [tvData, setTvData] = useState<Movie[] | []>([]);
  const [serchTv, setSearchTv] = useState<string | "">("");

  const allTvData = useQuery<AxiosResponse>({
    queryKey: ["allMovies"],
    queryFn: getAllTv,
    onSuccess: async (data) => {
      setTvData(data.data.results);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const movieDataByName = useQuery<AxiosResponse>({
    queryKey: ["movieByName", serchTv],
    queryFn: () => getTvByName(serchTv),
    onSuccess: async (data) => {
      setTvData([...data.data.results]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (serchTv === "") {
      setTvData([...(allTvData.data?.data.results || [])]);
    }
  }, [serchTv, allTvData]);

  const handleSearchTv = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTv(e.target.value);
  };

  return (
    <div className="h-screen w-full pl-6 pr-6 pb-10">
      <div>
        <h1 className="pt-28 pb-10 text-white/60 text-3xl font-thin font-mono text-white">
          Tv Shows
        </h1>
        <input
          type="text"
          className="w-full py-2 rounded-2xl bg-black outline-none caret-white  px-4 text-white"
          placeholder="Search for a Tv show..."
          style={{ border: "0.5px solid white" }}
          onChange={handleSearchTv}
        />
      </div>
      <div
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-
        x-6 md:gap-y-6 lg:gap-x-8 lg:gap-y-8 xl:grid-cols-4 grid-flow-row pt-10"
      >
        {tvData.map((tv) => (
          <div className="" key={tv.id}>
            <Link to={`/series/${tv.id}`} onClick={() => console.log(tv.id)}>
              <LazyLoadImage
                effect="blur"
                className="w-full h-full object-fill rounded-lg outline-none"
                src={`https://image.tmdb.org/t/p/original/${
                  tv.poster_path || tv.backdrop_path
                }`}
                alt={tv.original_title || tv.title}
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;
