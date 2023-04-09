import { Outlet, Link } from "react-router-dom";
import DesktopNav from "./ResponsiveNav/DesktopNav";
import MobileNav from "./ResponsiveNav/MobileNav";

const Navbar = () => {
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
          <DesktopNav />
          <MobileNav />
        </section>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
