import { AxiosResponse } from "axios";
import { request } from "../utils/axios_utils";

export const getPopularMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/movie/popular`,
  });
};

export const getTrendingMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/trending/movie/day`,
  });
};

export const getTopRatedMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/movie/top_rated`,
  });
};

export const getTopRatedSeries = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/tv/top_rated`,
  });
};
