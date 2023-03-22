export const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col gap-8 items-center justify-center mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Trusted By Greatest Companies
      </h1>
      {/* Logos */}
      <div className="flex flex-col md:flex-row flex-wrap items-center gap-20">
        <img src="google.png" className="w-40" alt="" />
        <img src="shopify.png" className="w-40" alt="" />
        <img src="amazon.png" className="w-40" alt="" />
        <img src="airbnb.png" className="w-40" alt="" />
        <img src="google.png" className="w-40" alt="" />
      </div>
    </div>
  );
};
