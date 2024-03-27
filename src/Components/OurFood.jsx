import React from "react";
import { useState } from "react";
import { mealData } from "../Data/data";

const OurFood = ({ handleAdd }) => {
  const [productItem, setProductItem] = useState(mealData);

  const handleFilter = () => {
    const filterItem = productItem.filter((item) => {
      return item.price >= 200;
    });
    setProductItem(filterItem);
  };
  return (
    <>
      <div className="mt-[75px]">
        <p
          className=" bg-gray-700 w-[130px] cursor-pointer border-r-4 text-center text-white font-semibold ml-4 mt-1 hover:bg-green-500 rounded-xl"
          onClick={handleFilter}
        >
          Filter by Price
        </p>
        <div className="w-[90%] mx-auto">
          <div>
            <h2 className="text-center text-yellow-300 text-3xl font-bold py-5">
              Our Food
            </h2>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2">
            {productItem.map((meal) => (
              <div
                className=" flex justify-center items-center flex-col"
                key={meal.id}
              >
                <div>
                  <img
                    src={meal.image}
                    alt=""
                    className="w-[250px] h-[200px] rounded-lg object-cover cursor-pointer hover:text-yellow-400 hover:w-[300px] hover:rounded-lg hover:object-cover hover:h-[220px]"
                  />
                </div>
                <div className=" flex justify-center py-2 px-4 flex-col items-center">
                  <p className=" text-xl font-semibold uppercase">
                    {meal.name}
                  </p>
                  <p className=" text-xl font-semibold uppercase">
                    ${meal.price}
                  </p>
                  <button
                    className=" bg-black w-[120px] h-[50px] text-white rounded-md my-6 py-[10px] text-[20px] hover:text-green-600 font-semibold text-center"
                    onClick={handleAdd}
                  >
                    Add to Card
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFood;
