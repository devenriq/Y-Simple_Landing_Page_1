import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] font-black text-center ">
        Let's hear What they says
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          tenetur nobis similique deleniti corporis, veniam, hic tempore
          obcaecati, libero atque ex earum? Ullam debitis, corporis harum
          excepturi illum ipsa quam.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex  md:flex-row items-center justify-center gap-8 md:gap-12">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="w-8 h-8 md:w-14 md:h-14 object-contain rounded-full "
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            className=" w-10 h-10 md:w-16 md:h-16 object-contain rounded-full "
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            className="md:w-20 w-20 h-20 object-contain rounded-full ring-4 ring-primary bg-white p-1"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full "
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            className="w-8 h-8 md:w-14 md:h-14 object-contain rounded-full "
            alt=""
          />
        </div>
        <div className="">
          <h3 className="text-center text-[24px] font-bold">Ricky Aprillia</h3>
          <h4 className="text-center text-[20px] text-gray-500">
            Founder of Varibo
          </h4>
        </div>
      </div>
    </div>
  );
};
