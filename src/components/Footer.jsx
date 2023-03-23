import {
  RiCheckboxBlankCircleFill,
  RiInstagramFill,
  RiGithubFill,
  RiTwitterFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-ternary p-8 xl:p-20 -z-20">
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-500 pb-8 gap-4 ">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold relative p-2 bg-ternary  text-white z-20"
        >
          Power<span className="text-primary text-5xl ">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>

        {/* Social Media */}

        <nav className="flex items-center gap-4">
          <a href="" className="block bg-primary text-white  p-4 rounded-full">
            <RiInstagramFill />
          </a>
          <a href="" className="block bg-primary text-white  p-4 rounded-full">
            <RiGithubFill />
          </a>
          <a href="" className="block bg-primary text-white  p-4 rounded-full">
            <RiTwitterFill />
          </a>
          <a href="" className="block bg-primary text-white  p-4 rounded-full">
            <RiFacebookBoxFill />
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Company
        </h3>
        <nav className=" mt-4 flex items-center justify-evenly flex-col md:flex-row gap-4">
          <a
            href=""
            className="text-gray-300 mt-4 hover:text-white transition-colors "
          >
            About Us
          </a>
          <a
            href=""
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Press
          </a>
          <a
            href=""
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Investors
          </a>
          <a
            href=""
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Events
          </a>
          <a
            href=""
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Terms of use
          </a>
          <a
            href=""
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="text-lg font-semibold py-2 px-6 bg-primary text-white rounded-xl "
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          power 2021 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
