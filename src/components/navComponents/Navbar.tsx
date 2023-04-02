const Navbar = () => {
  return (
    <nav className="h-16 w-full fixed bg-transparent overflow-x-hidden">
      <div className="pt-3 pl-1 flex justify-between item-center h-full w-full">
        <div className="">
          <h1 className="loadMain text-white font-[Anurati] pl-3 text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl tracking-[0.3em]">
            CINEFLEXA
          </h1>
        </div>
        <div className="flex justify-around w-[25%] text-white font-extralight">
          <ul className="flex">
            <li className="px-3 text-xl">Movies</li>
            <li className="px-3 text-xl">Series</li>
            <li className="pl-3 text-xl">News</li>
          </ul>
          <div className="text-xl px-3">Sign in</div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
