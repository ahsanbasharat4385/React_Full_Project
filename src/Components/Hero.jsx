import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const ImgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === ImgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? ImgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const SliderClear = setInterval(() => {
      handlePlus();
    }, 3000);
    return () => clearInterval(SliderClear);
  }, [slider]);

  return (
    <>
      <div className="mt-[100px]">
        <div className=" w-[90%] mx-auto h-[80vh] my-5 relative">
          {ImgData.map((items, index) => {
            return (
              <div
                key={index}
                className={`${slider === index ? "block" : "hidden"}`}
              >
                <img
                  src={items.url}
                  alt="Burger"
                  className=" w-full h-[80vh] rounded-2xl object-cover"
                />
              </div>
            );
          })}
          <div className=" w-full mx-auto h-[80vh] bg-black  opacity-50 absolute top-0 left-0 rounded-2xl"></div>
          <div className=" absolute w-full text-[17px] md:text-[30px] top-[50%]  text-center font-semibold  text-white flex justify-center">
            <p>Welcome to the Lucky and Tasty Food</p>
          </div>
          <div className=" absolute w-[98%] text-[10px] top-[95%]   text-center font-semibold text-yellow-500 flex justify-end underline">
            <p>Made by Ahsan Basharat</p>
          </div>
          <div className="flex justify-between w-full  px-5  absolute top-[50%]  text-white">
            <FaChevronLeft
              size={30}
              className=" cursor-pointer"
              onClick={handleMinus}
              // or onclick ={()=> setSlider(slider ===0 ? slider.length-1 :slider-1)}
            />
            <FaChevronRight
              size={30}
              className=" cursor-pointer"
              onClick={handlePlus}
              // or onclick={()=> setSlider(slider === slider.length-1? 0 : slider+1) }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
