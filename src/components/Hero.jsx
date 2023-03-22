import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      <div className="md:col-span-5 flex items-center justify-center xl:p-16">
        <div className="flex flex-col gap-8 items-center justify-center p-8">
          <div className="w-11/12 items-center justify-center">
            <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
              Web Design Impactful Digital{" "}
              <span className="text-primary p-4 border-8 border-primary relative  inline-block">
                Products
                <RiCheckboxBlankCircleFill className="text-white text-xl absolute -left-4 -top-4 bg-primary p-2 box-content rounded-full" />
                <RiCheckboxBlankCircleFill className="text-white text-xl absolute -left-4 -bottom-4 bg-primary p-2 box-content rounded-full" />
                <RiCheckboxBlankCircleFill className="text-white text-xl absolute -right-4 -bottom-4 bg-primary p-2 box-content rounded-full" />
                <RiCheckboxBlankCircleFill className="text-white text-xl absolute -right-4 -top-4 bg-primary p-2 box-content rounded-full" />
              </span>
            </h1>
            <p className="text-gray-500 text-xl leading-[2.5rem]">
              Help find solutions with intuitive and in accordance with client
              business goals. We provide a high-quality services.
            </p>
            <div className="flex flex-col md:flex-row items-center  gap-4">
              <button className=" bg-primary w-full xl:w-auto text-white py-2 px-8 rounded-xl text-xl">
                Contact Us
              </button>
              <button className="w-full xl:w-auto flex items-center py-2 px-8 rounded-xl text-xl gap-4 text-left">
                <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />
                Watch our <br /> introduction video
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-28 md:col-span-3 flex items-center justify-center relative ">
        {/* Content Image */}
        <div>
          <img
            src="hero.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-cover xl:-mt-28 "
          />
          <div className=" bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center max-w-[250px] ml-[50%] -translate-x-1/2 gap-2">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4"
                alt=""
              />
            </div>

            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[400px]  p-4 bg-white border-[10px] border-primary rounded-full -z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px]"></div>
        {/* Logos */}
        <img
          src="figma.png"
          alt=""
          className=" w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-4 border-gray-600 absolute top-[10%] right-[20%] "
        />
        <img
          src="adobe.png"
          alt=""
          className=" w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-4 border-gray-600 absolute top-[2%] left-[20%] "
        />
        <img
          src="sketch.png"
          alt=""
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[20%] bg-white"
        />
      </div>
    </section>
  );
};
