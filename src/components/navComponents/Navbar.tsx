import { Outlet, Link } from "react-router-dom";
import { BsHeartFill, BsBookmarkFill } from "react-icons/bs";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="h-16 pl-5 w-full bg-transparent overflow-x-hidden overflow-y-hidden z-50 fixed top-0 backdrop-blur-[8px]">
        <section className="flex justify-between item-center h-full w-full">
          <div className="self-center">
            <Link to={`/`}>
              <h1 className="text-white font-[Anurati]  text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl tracking-[0.3em]">
                CINEFLEXA
              </h1>
            </Link>
          </div>
          <div className="font-light font-sans flex items-center">
            <Link
              to="/movies"
              className="pl-5 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 max-sm:hidden"
            >
              Movies
            </Link>
            <Link
              to="/shows"
              className="pl-5 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 max-sm:hidden"
            >
              Tv Shows
            </Link>
            <Link
              to="/newa"
              className="pl-5 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 max-sm:hidden"
            >
              News
            </Link>
            <Link
              to="/watchlist"
              className="pl-5 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000"
            >
              <BsBookmarkFill />
            </Link>
            <Link
              to="/favourite"
              className="pl-5 text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 max-sm:pr-3"
            >
              <BsHeartFill />
            </Link>
            <div className="md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={22}
                color="white"
              />
            </div>

            <Link to="/login" className="px-5 max-sm:hidden">
              <button className=" text-white/80 bg-none px-3 py-[4px] rounded-md text-xl font-light border-white/80 border-solid border-[1px] hover:bg-slate-50 hover:text-black hover:duration-500 duration-1000">
                Login
              </button>
            </Link>
          </div>
        </section>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
