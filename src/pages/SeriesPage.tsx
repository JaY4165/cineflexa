import { useQuery } from "@tanstack/react-query";
import { getAllTv } from "../api/tmdb_api";
// import bghero from "../assets/bghero.jpg";
import "../css/MoviesPageCss/movies.css";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Movie } from "../types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SeriesPage = () => {
  const [tvData, setTvData] = useState<Movie[] | []>([]);

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

  return (
    <div className="h-screen w-full pl-6 pr-6 pb-10">
      <h1 className="pt-28  text-white/60 text-3xl font-thin font-mono text-white">
        Movies
      </h1>
      <div
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-
        x-6 md:gap-y-6 lg:gap-x-8 lg:gap-y-8 xl:grid-cols-4 grid-flow-row pt-10"
      >
        {tvData.map((tv) => (
          <div className="" key={tv.id}>
            <LazyLoadImage
              effect="blur"
              className="w-full h-full object-fill rounded-lg outline-none"
              src={`https://image.tmdb.org/t/p/original/${
                tv.poster_path || tv.backdrop_path
              }`}
              alt={tv.original_title || tv.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;
