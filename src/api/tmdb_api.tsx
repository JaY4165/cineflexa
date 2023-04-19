import { AxiosResponse } from "axios";
import { request } from "../utils/axios_utils";

export const getPopularMovies = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `3/movie/popular`,
  });
};

export const getMovieImage = (): Promise<AxiosResponse> => {
  return request({
    method: "get",
    url: `t/p/original/`,
  });
};
