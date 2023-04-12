import { Outlet, Link } from "react-router-dom";
import DesktopNav from "./ResponsiveNav/DesktopNav";
import { useBearStore } from "../../store/NavStore";

const Navbar = () => {
  const isOpen = useBearStore((state) => state.hamBurgerOpened);

  return (
    <>
      <nav
        className={`${
          isOpen === !true ? "h-16" : "h-screen backdrop-blur-[8px]"
        } pl-5 w-full bg-transparent overflow-x-hidden overflow-y-hidden z-50 fixed top-0`}
      >
        <section className="flex justify-between item-center h-full w-full">
          <div className="pt-5">
            <Link to={`/`}>
              <h1 className="text-white font-[Anurati]  text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl tracking-[0.3em] z-50">
                CINEFLEXA
              </h1>
            </Link>
          </div>
          <DesktopNav />
        </section>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
