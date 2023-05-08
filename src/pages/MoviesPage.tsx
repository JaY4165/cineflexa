import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../api/tmdb_api";
import bghero from "../assets/bghero.jpg";
import "../css/MoviesPageCss/movies.css";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Movie } from "../types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MoviesPage = () => {
  const [movieData, setMovieData] = useState<Movie[] | []>([]);

  const allMoviesData = useQuery<AxiosResponse>({
    queryKey: ["allMovies"],
    queryFn: getAllMovies,
    onSuccess: async (data) => {
      setMovieData(data.data.results);
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
        {movieData.map((movie) => (
          <div className="" key={movie.id}>
            <LazyLoadImage
              effect="blur"
              className="w-full h-full object-fill rounded-lg outline-none"
              src={`https://image.tmdb.org/t/p/original/${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.original_title || movie.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
