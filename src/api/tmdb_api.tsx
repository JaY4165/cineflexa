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
    url: `3/discover/movie?with_genres=10752&include_adult=false`,
  });
};
