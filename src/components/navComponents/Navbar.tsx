import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-16 w-full fixed bg-transparent overflow-x-hidden overflow-y-hidden z-50 ">
        <div className="pt-3 pl-1 flex justify-between item-center h-full w-full">
          <div className="">
            <h1 className="loadMain text-white font-[Anurati] pl-3 text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl tracking-[0.3em]">
              CINEFLEXA
            </h1>
          </div>
          <div className="flex justify-around text-white font-thin max-sm:hidden">
            <ul className="flex">
              <li className="px-3 text-xl">
                {" "}
                <Link to={`/`}> Movies</Link>
              </li>
              <li className="px-3 text-xl">
                {" "}
                <Link to={`/series`}> Series</Link>
              </li>
              <li className="pl-3 text-xl">
                {" "}
                <Link to={`/anime`}>Anime</Link>
              </li>
              <li className="pl-3 text-xl">
                {" "}
                <Link to={`/news`}>News</Link>{" "}
              </li>
            </ul>
            <div className="text-xl px-3">
              {" "}
              <Link to={`/signin`}>Sign in</Link>{" "}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
