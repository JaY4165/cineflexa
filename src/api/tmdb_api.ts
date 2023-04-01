import { AxiosResponse } from "axios";
import { request } from "../utils/axios_utils";

export const getPopularMovies = (): Promise<AxiosResponse> => {
  console.log("working 2");
  return request({
    method: "get",
    url: `/movie/popular?page=1`,
  });
};
