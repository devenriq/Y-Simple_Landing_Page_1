import React, { useState } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCloseLine,
  RiMenu3Fill,
} from "react-icons/ri";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="py-4 px-8 flex items-center w-full  h-[10vh] justify-between z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-2 bg-white">
          Power<span className="text-primary text-2xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>

      <nav
        className={`fixed bg-white w-[80%] xl:w-full md:w-[40%] h-full ${
          showMenu ? "left-0" : "-left-full"
        }  top-0 flex-col xl:flex-row xl:static flex-1 flex justify-center items-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#" className="">
          Home
        </a>
        <a href="#" className="">
          About Us
        </a>
        <a href="#" className="">
          Services
        </a>
        <a href="#" className="">
          Products
        </a>
      </nav>
      <button
        className="text-2xl p-2 xl:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};
