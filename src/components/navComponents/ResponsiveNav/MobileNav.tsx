import { BsHeartFill, BsBookmarkFill } from "react-icons/bs";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="font-light font-sans flex items-center md:hidden">
      <div className="pr-1">
        <Hamburger toggled={isOpen} toggle={setOpen} size={22} color="white" />
      </div>
      {isOpen && (
        <div className="flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-[8px] w-full h-full absolute top-0 left-0 z-50">
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
        </div>
      )}
    </div>
  );
};

export default MobileNav;
