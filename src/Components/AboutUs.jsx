import React from "react";
import Traditional from "../assets/Traditional.jpg";
import Ingredient from "../assets/Ingredient.jpg";

const AboutUs = () => {
  return (
    <div className="mt-[80px]">
      <div className=" px-[16px]">
        <h2 className=" title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 mt-8">
          <span className=" text-yellow-900 ">Traditional Recipes:</span>
        </h2>
        <div className=" flex gap-4 flex-row">
          <p className=" mb-8 leading-relaxed text-[20px] text-justify">
            Our website specializes in traditional lucky foods from various
            cultures worldwide, carefully curating recipes that symbolize luck,
            prosperity, and positive energy. For instance, Chinese dumplings
            shaped like gold ingots represent wealth, while Japanese soba
            noodles signify long life and good fortune. Each recipe is selected
            with cultural significance in mind, aiming to bring not just
            delicious flavors but also a sense of positivity and well-being to
            your table. By sharing stories and insights about these foods, we
            invite you to embrace culinary traditions, celebrate diversity, and
            experience the joy of bringing good fortune to your meals.
          </p>
          <img
            src={Traditional}
            alt=""
            className=" rounded-md  mt-3 md:h-[170px]  w-[80%] h-[80%] "
          />
        </div>

        <h2 className=" title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 ">
          <span className=" text-yellow-900 ">Ingredients:</span>
        </h2>
        <div className=" flex flex-row gap-4">
          <p className="mb-8 leading-relaxed text-[20px] text-justify ">
            Our ingredients are meticulously chosen to uphold authenticity and
            excellence, guaranteeing the highest quality in our dishes,
            especially those considered lucky foods in various cultures
            worldwide. We prioritize sourcing fresh and premium ingredients to
            ensure not only delightful flavors but also the essence of luck and
            prosperity in every bite. By carefully selecting each component, we
            aim to encapsulate the cultural significance and symbolic meanings
            associated with these traditional lucky foods. From vibrant
            vegetables to succulent meats, every ingredient contributes to the
            richness and authenticity of our recipes, allowing our customers to
            experience the traditions and blessings that these lucky foods
            represent. Our commitment to quality extends beyond taste; it
            reflects our dedication to providing an enriching culinary journey
            that celebrates diversity, fosters well-being, and invites good
            fortune into every meal.
          </p>
          <img src={Ingredient} alt="" className=" rounded-md md:h-[170px] mt-8 w-[80%] h-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
