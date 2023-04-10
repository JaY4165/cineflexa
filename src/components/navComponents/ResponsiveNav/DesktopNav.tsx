import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useBearStore } from "../../../store/NavStore";
import { BsBookmarkFill, BsHeartFill } from "react-icons/bs";

const DesktopNav = () => {
  const isOpen = useBearStore((state) => state.hamBurgerOpened);
  const changeHamBurgerOpened = useBearStore(
    (state) => state.changeHamBurgerOpened
  );
  const showSideBar = useBearStore((state) => state.sideBarOpened);
  const changeSideBarOpened = useBearStore(
    (state) => state.changeSideBarOpened
  );

  return (
    <>
      <div className="pr-1 pt-2 md:hidden z-50">
        <Hamburger
          toggled={isOpen}
          toggle={() => changeHamBurgerOpened(!isOpen)}
          size={22}
          color="white"
          onToggle={() => changeSideBarOpened(!showSideBar)}
        />
      </div>
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
        <Link
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
        </Link>

        <Link to="/login" className="px-5 max-sm:hidden pl-7">
          <button className=" text-white/80 bg-none px-3 py-[4px] rounded-md text-xl font-light border-white/80 border-solid border-[1px] hover:bg-slate-50 hover:text-black hover:duration-500 duration-1000">
            Login
          </button>
        </Link>
      </div>

      {showSideBar ? (
        <div
          className={`top-0 right-0 w-screen bg-transparent  p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-700 ${
            showSideBar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="top-0 right-0 w-screen h-screen bg-transparent p-10 pl-20 text-white fixed">
            <div className="flex flex-col items-center justify-start bg-transparent w-full h-full z-50 pt-20">
              <Link
                to="/movies"
                className=" text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 "
              >
                Movies
              </Link>
              <Link
                to="/shows"
                className=" text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 pt-5"
              >
                Tv Shows
              </Link>
              <Link
                to="/news"
                className=" text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 pt-5"
              >
                News
              </Link>
              {/* <Link
                to="/watchlist"
                className="text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 pt-5"
              >
                <BsBookmarkFill />
              </Link>
              <Link
                to="/favourite"
                className="text-white/80 text-xl hover:text-white hover:duration-300 duration-1000 pt-5"
              >
                <BsHeartFill />
              </Link> */}
              <Link to="/login" className=" md:hidden pt-5">
                <button className=" text-white/80 bg-none px-3 py-[4px] rounded-md text-xl font-light border-white/80 border-solid border-[1px] hover:bg-slate-50 hover:text-black hover:duration-500 duration-1000">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DesktopNav;
