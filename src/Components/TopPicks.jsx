import React from "react";
import { topPicks } from "../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopPicks = ({ handleAdd }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className=" font-bold text-3xl">What's on your Mind?</h2>
        <div className=" py-20">
          <Slider {...settings}>
            {topPicks.map((item) => (
              <div className=" bg-[white] rounded-md" key={item.id}>
                <div className=" flex justify-center items-center rounded-t-xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[200px] rounded-full h-[200px] object-cover hover:w-[230px] hover:h-[220px] hover:rounded-full hover:object-cover"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center gap-2 p-4">
                  <p className=" text-xl font-semibold uppercase">
                    {item.name}
                  </p>
                  <p className=" text-xl font-semibold uppercase">
                    {item.price}
                  </p>
                  <button
                    className=" bg-black w-[130px] text-white rounded-md my-6 py-[10px] text-[20px] hover:bg-green-600 hover:text-black hover:font-bold hover:text-[20px] hover:rounded-md font-semibold"
                    onClick={handleAdd}
                  >
                    Add to Card
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
