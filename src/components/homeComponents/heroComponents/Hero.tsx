import { BsStarFill } from "react-icons/bs";
import "../../../css/HomePageCss/home.css";
import { Movie } from "../../../types";
import { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import bghero from "../../../assets/bghero.jpg";

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


  useEffect(() => {
    const fetchMovieImage = async () => {
      await axios
        .get(
          `${imageUrl}${bannerMovie?.backdrop_path || bannerMovie?.poster_path}`
        )
        .then((res) => {
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
        style={{ backgroundImage: `url(${bannerImage || bghero})` }}
      >
        <div className="flex flex-col justify-end h-full w-full pb-10 md:pb-10 pl-4 md:pl-7 md:pt-52 backdrop-brightness-[0.25] font-[Poppins]">
          <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-6xl pb-4 pl-1 font-[Poppins] font-bold">
            {bannerMovie?.title || ""}
          </h1>
          <div className="pl-1 md:inline-flex">
            <div className="inline-flex">
              <span>
                <BsStarFill size={30} color="gold" />
              </span>
              <span className="text-white text-3xl pl-2 font-[Poppins] font-thin">
                {bannerMovie?.vote_average || ""}
              </span>

              <span className="text-slate-300 text-2xl pl-3">|</span>
              <span className="text-white/70 text-2xl pt-1.5 pl-2 font-[Poppins] font-light">
                {bannerMovie?.vote_count || ""}
              </span>
            </div>
            <div className="inline-flex md:pl-6">
              <span className="text-white/75 pt-[0.7rem] pl-2 font-[Poppins]">
                {bannerMovie?.original_language || ""}
              </span>
              <span className="text-white/75 pt-[0.7rem] pl-6">
                <ul>
                  <li className="list-item list-disc">Action , Adventure</li>
                </ul>
              </span>
              <span className="text-white/75 pt-[0.7rem] pl-6">
                <ul>
                  <li className="list-item list-disc">
                    {bannerMovie?.release_date || ""}
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="pl-3 md:pl-2">
            <p className="paragraph text-white/80 text-md pt-5 font-mono font-light  max-w-[90%] md:max-w-[65%] lg:max-w-[70%] xl:max-w-[75%]">
              {bannerMovie?.overview || ``}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
