import blade1 from "../../../assets/bladerunner1.jpg";
import { BsStarFill } from "react-icons/bs";
import "../../../css/HomePageCss/home.css";
import { Movie } from "../../../types";
import { useState, useLayoutEffect, useEffect } from "react";
import { getMovieImage } from "../../../api/tmdb_api";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface Props {
  heroMovie: Movie[];
}

const Hero = ({ heroMovie }: Props) => {
  const [banner, setBanner] = useState<Movie[] | []>([]);
  const [randomMovie, setRandomMovie] = useState<Number | any>(10);
  const [bannerMovie, setBannerMovie] = useState<Movie | null>(null);
  const [bannerImage, setBannerImage] = useState<String | null | undefined>(
    null
  );
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  useLayoutEffect(() => {
    setRandomMovie(Math.floor(Math.random() * 19));
    if (heroMovie) setBanner(heroMovie);
  }, [heroMovie]);

  useEffect(() => {
    setBannerMovie(banner[randomMovie]);
    return () => {
      setBannerMovie({});
    };
  }, [banner]);

  console.log(bannerMovie);

  useEffect(() => {
    const fetchMovieImage = async () => {
      await axios
        .get(
          `${imageUrl}${bannerMovie?.backdrop_path || bannerMovie?.poster_path}`
        )
        .then((res) => {
          console.log(res.config.url);
          setBannerImage(res.config.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (bannerMovie) fetchMovieImage();
  }, [bannerMovie]);

  return (
    <div className="h-screen w-screen  bg-[rgb(7,7,7)] overflow-x-hidden">
      <div
        className={`justify-center h-full object-cover
        bg-no-repeat bg-cover bg-center`}
        style={{ backgroundImage: `url(${bannerImage || blade1})` }}
      >
        <div className="flex flex-col justify-end h-full w-full pb-20 pl-4 md:pl-7 md:pt-52 backdrop-brightness-[0.25]">
          <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-6xl pb-4 pl-1 font-mono font-bold">
            {bannerMovie?.title || "Blade Runner"}
          </h1>
          <div className="pl-1 md:inline-flex">
            <div className="inline-flex">
              <span>
                <BsStarFill size={30} color="gold" />
              </span>
              <span className="text-white text-3xl pl-2 font-mono font-thin">
                {bannerMovie?.vote_average || "8.1"}
              </span>

              <span className="text-slate-300 text-2xl pl-3">|</span>
              <span className="text-white/70 text-2xl pt-1.5 pl-2 font-mono font-light">
                {bannerMovie?.vote_count || "1055"}
              </span>
            </div>
            <div className="inline-flex md:pl-6">
              <span className="text-white/75 pt-[0.7rem] pl-2">
                {bannerMovie?.original_language || "en"}
              </span>
              <span className="text-white/75 pt-[0.7rem] pl-6">
                <ul>
                  <li className="list-item list-disc">
                    Science Fiction , Drama
                  </li>
                </ul>
              </span>
              <span className="text-white/75 pt-[0.7rem] pl-6">
                <ul>
                  <li className="list-item list-disc">
                    {bannerMovie?.release_date || "2023"}
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="pl-3 md:pl-2">
            <p className="paragraph text-white text-sm pt-5 font-mono font-light max-w-[90%] md:max-w-[65%] lg:max-w-[70%] xl:max-w-[75%]">
              {bannerMovie?.overview ||
                `Thirty years after the events of the first film, a new blade
              runner, LAPD Officer K, unearths a long-buried secret that has the
              potential to plunge what's left of society into chaos. K's
              discovery leads him on a quest to find Rick Deckard, a former LAPD
              blade runner who has been missing for 30 years.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
