import { useQuery } from "@tanstack/react-query";
import { getAllMovies, getMoviesByName } from "../api/tmdb_api";
import "../css/MoviesPageCss/movies.css";
import { AxiosResponse } from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { Movie } from "../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movieData, setMovieData] = useState<Movie[] | []>([]);
  const [searchMovie, setSearchMovie] = useState<string | "">("");

  const allMoviesData = useQuery<AxiosResponse>({
    queryKey: ["allMovies"],
    queryFn: getAllMovies,
    onSuccess: async (data) => {
      setMovieData([...data.data.results]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const movieDataByName = useQuery<AxiosResponse>({
    queryKey: ["movieByName", searchMovie],
    queryFn: () => getMoviesByName(searchMovie),
    onSuccess: async (data) => {
      setMovieData([...data.data.results]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSearchMovie = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(e.target.value);
  };

  useEffect(() => {
    if (searchMovie === "") {
      setMovieData([...(allMoviesData.data?.data.results || [])]);
    }
  }, [searchMovie, allMoviesData]);

  return (
    <div className="h-screen w-full pl-6 pr-6 pb-10">
      <div>
        <h1 className="pt-28 pb-10 text-white/60 text-3xl font-thin font-mono text-white">
          Movies
        </h1>
        <input
          type="text"
          className="w-full py-2 rounded-2xl bg-black outline-none caret-white  px-4 text-white"
          placeholder="Search for a movie..."
          style={{ border: "0.5px solid white" }}
          onChange={handleSearchMovie}
        />
      </div>
      <div
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-
        x-6 md:gap-y-6 lg:gap-x-8 lg:gap-y-8 xl:grid-cols-4 grid-flow-row pt-10"
      >
        {movieData.map((movie) => (
          <div className="" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <LazyLoadImage
                effect="blur"
                className="w-full h-full object-fill rounded-lg outline-none"
                src={`https://image.tmdb.org/t/p/original/${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt={movie.original_title || movie.title}
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
