import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className="font-light font-sans flex items-center max-md:hidden">
      <Link
        to="/movies"
        className="pl-7 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000"
      >
        Movies
      </Link>
      <Link
        to="/shows"
        className="pl-7 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 "
      >
        Tv Shows
      </Link>
      <Link
        to="/news"
        className="pl-7 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 "
      >
        News
      </Link>
      {/* <Link
        to="/watchlist"
        className="pl-7 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000"
      >
        <BsBookmarkFill />
      </Link>
      <Link
        to="/favourite"
        className="pl-7 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 max-sm:pr-3"
      >
        <BsHeartFill />
      </Link> */}

      <Link to="/login" className="px-5 max-sm:hidden pl-7">
        <button className=" text-white/80 bg-none px-3 py-[4px] rounded-md text-xl font-light border-white/80 border-solid border-[1px] hover:bg-slate-50 hover:text-black hover:duration-500 duration-1000">
          Login
        </button>
      </Link>
    </div>
  );
};

export default DesktopNav;
