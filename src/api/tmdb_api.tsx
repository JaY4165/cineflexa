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

export const getActionMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/discover/movie?with_genres=28`,
  });
};

export const getDocumentaryMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/discover/movie?with_genres=27`,
  });
};

export const getAllMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/discover/movie?include_adult=false`,
  });
};

export const getAllTv = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/discover/tv?include_adult=false&page=3`,
  });
};

export const getMovieDetails = (movieId: any): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/movie/${movieId}`,
  });
};

export const getMoviesByName = (movieName: String): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/search/movie?query=${movieName}`,
  });
};

export const getTvByName = (tvName: String): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/search/tv?query=${tvName}`,
  });
};
