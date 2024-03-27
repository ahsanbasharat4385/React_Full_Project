import React, { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const Header = ({count}) => {
  const [sideNav, setSideNav] = useState(false);

  const handleChange = () => {
    setSideNav(!sideNav);
  };
  return (
    <div className="fixed z-50  top-0 left-0 w-full bg-white">
      <div className=" flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b">
        <div>
          <Link to="/">
            <p className=" cursor-pointer  hover:rounded-full hover:w-[100px] hover:text-center ">
              Lucky<span className="text-[#fa4d4d]">Food</span>
            </p>
          </Link>
        </div>
        <div>
          <ul className="sm:flex gap-4 hidden cursor-pointer ">
            {/* <Link to="/">
            <li className="hover:text-[#fa4d4d]">Home</li>
          </Link> */}

            <NavLink to="/">
              <li className="hover:text-[#fa4d4d]">Home</li>
            </NavLink>

            {/* <Link to="/aboutus">
            <li className="hover:text-[#fa4d4d]">About Us</li>
          </Link> */}
            <NavLink to="/aboutus">
              <li className="hover:text-[#fa4d4d]">About Us</li>
            </NavLink>

            {/* <Link to="/ourfood">
            <li className="hover:text-[#fa4d4d]">Our Foods</li>
          </Link> */}

            <NavLink to="/ourfood">
              <li className="hover:text-[#fa4d4d]">Our Foods</li>
            </NavLink>
            {/* <Link to="/signin">
            <li className="hover:text-[#fa4d4d]">SignUp</li>
          </Link> */}
            <NavLink to="signin">
              <li className="hover:text-[#fa4d4d]">SignUp</li>
            </NavLink>
          </ul>
        </div>
        {sideNav ? (
          <div className="bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10">
            <ImCross
              className=" absolute top-3 right-3 cursor-pointer"
              onClick={handleChange}
              // or {() => setSideNav(!sideNav)}
            />
            <ul className="flex gap-12  cursor-pointer flex-col">
              <Link to="/">
                <li className="hover:text-[#fa4d4d]" onClick={handleChange}>
                  Home
                </li>
              </Link>
              <Link to="/aboutus">
                <li className="hover:text-[#fa4d4d]" onClick={handleChange}>
                  About Us
                </li>
              </Link>
              <Link to="/ourfood">
                <li className="hover:text-[#fa4d4d]" onClick={handleChange}>
                  Our Foods
                </li>
              </Link>
              <Link to="/signin">
                <li className="hover:text-[#fa4d4d]" onClick={handleChange}>
                  SignUp
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="flex gap-5">
          <p>
            <RxHamburgerMenu
              size={30}
              className=" cursor-pointer block sm:hidden"
              onClick={handleChange}
              // or {() => setSideNav(!sideNav)}
            />
          </p>
          <div className="flex gap-2">
            <p>
              <BsCartCheckFill size={25} />
            </p>
            {count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
