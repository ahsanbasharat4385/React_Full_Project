import React from "react";

const Delivery = () => {
  return (
    <>
      <div className=" w-full py-10 px-4">
        <h3 className="text-yellow-300 font-bold text-2xl text-center ">
          Lucky Food Delivery App
        </h3>

        <div className="grid grid-cols-2 w-[70%] mx-auto my-10 gap-10">
          <img
            src=" https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp "
            alt="LUCKY FOOD DELIVERY APP"
            className="w-[550px]"
          />

          <div className="flex flex-col justify-center">
            <p className="font-bold text-green-600 text-[20px] md:text-[30px]">Get the App</p>
            <h2 className=" sm:text-2xl md:text-3xl lg:text-5xl py-2 font-bold">The Fatest Food Delivery In Pakistan</h2>
            <button className=" bg-black sm:w-[100px] md:w-[150px] text-white rounded-full my-6 py-[15px] sm:text-[15px] md:text-[20px] hover:bg-green-700 hover:text-black hover:font-bold hover:text-[20px] hover:rounded-full font-semibold">
              <a href="http://google.com" target="_blank">Get Started</a> 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
