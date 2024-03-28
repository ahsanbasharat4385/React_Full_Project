import React from "react";
import PersonalImage from "../assets/Ahsan_Pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-black text-white">
      <div className="grid  grid-cols-2 md:grid-cols-3 py-5  pl-3">
        <div>
          <p className="  w-[10%] text-[20px] md:text-[25px] font-semibold mb-3 ">
            Lucky
            <span className="text-[#fa4d4d]">Food</span>
          </p>

          <p className="text-[15px] md:text-[20px]">
            © 2024 BookKeeping Pro Pvt. Ltd{" "}
          </p>
        </div>

        <div>
          <h1 className=" font-bold mb-3 text-[20px] md:text-[25px]">
            Company
          </h1>
          <div className="w-[100px]">
            <Link to="/">
              <p className="text-[15px] md:text-[20px] mb-2  hover:w-full hover:h-[14%] hover:rounded-xl hover:font-bold hover:text-center">
                Home
              </p>
            </Link>
            <Link to="/aboutus">
              <p className="text-[15px] md:text-[20px] mb-2 hover:w-full hover:h-[14%] hover:rounded-xl hover:font-bold hover:text-center">
                About Us
              </p>
            </Link>
            <Link to="/ourfood">
              <p className="text-[15px] md:text-[20px] mb-2 hover:w-full hover:h-[14%] hover:rounded-xl hover:font-bold hover:text-center">
                Our Foods
              </p>
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-bold text-[20px] md:text-[25px] mb-3">
            Contact Us
          </h1>
          <div className="flex items-center">
            <p className="text-[15px] md:text-[20px] mb-2">
              Phone Number: +923014385464{" "}
            </p>
            <img
              className="w-10 h-10 border border-solid rounded-3xl object-cover ml-2"
              src={PersonalImage}
              alt="Ahsan's Picture"
            />
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=100014622221972"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] md:text-[20px] mb-2 mr-3 hover:w-[26%] hover:h-[14%] hover:rounded-xl hover:font-bold hover:text-blue-600 inline-flex items-center hover:justify-center"
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-1" />
            Facebook
          </a>

          <a
            href="https://wa.me/+923014385464"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] md:text-[20px] mb-2 mr-3 flex items-center hover:w-[28%] hover:h-[13%] hover:text-blue-600 hover:font-bold hover:rounded-xl hover:justify-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/ahsan-basharat-04b967290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] md:text-[20px] mb-2 mr-3 flex items-center w-[21%]  hover:w-[25%] hover:h-[10%]  hover:rounded-xl hover:text-blue-600 hover:font-bold hover:justify-center"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
