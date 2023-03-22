export const Works = () => {
  return (
    <div className="p-8 xl:p-20">
      <div className="pb-10">
        <h1 className="text-[40px] font-bold">
          We Create World-Class digital products
        </h1>
        <p className="text-xl text-gray-500">
          By information about design the world to the best instructors, heat
          helping By information
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.png"
            className="w-full h-56 xl:h-[600px] rounded-3xl mb-4 object-cover"
            alt=""
          />
          <p>App Design - June 20, 2022</p>
          <h3 className="text-2xl font-bold">App Redesign</h3>
          <p>
            By information about design the world to the best instructors,
            helping By information about design the world to the best
            instructors, helping
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt=""
            />
            <p>App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Redesign channel website landing page
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work3.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt=""
            />
            <p>App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              New Locator App For a New Company
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt=""
            />
            <p>App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Rental Rooms Web App Platform
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full h-56 object-cover rounded-3xl"
              alt=""
            />
            <p>App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">
              Calendar App for Big SASS Company
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
