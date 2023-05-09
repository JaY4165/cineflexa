import { useState, useEffect } from "react";
import { Movie } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../api/tmdb_api";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";

const MovieDetailsPage: React.FC = () => {
  const { movieId } = useParams();
  const [mId, setMId] = useState<any>(null);
  const [movieDetailData, setMovieDetailData] = useState<Movie | null>();
  const [dataLoading, setDataLoading] = useState<boolean>(true);

  useEffect(() => {
    setMId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (mId) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${mId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        })
        .then((res) => {
          if (res) {
            setDataLoading(false);
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setMovieDetailData(null);
    };
  }, [mId]);

  return <></>;
};

export default MovieDetailsPage;
