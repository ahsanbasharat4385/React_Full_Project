import React, { useState } from "react";

function SignIn() {
  const [user, setUser] = useState({
    full_name: "",
    Email: "",
    Mobile: "",
    Password: "",
    Confirm_Password: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const NewError = {};
    if (user.full_name === "") {
      NewError.full_name = "Required";
    }

    if (user.Email === "") {
      NewError.Email = "Required";
    }

    if (user.Mobile === "") {
      NewError.Mobile = "Required";
    } else if (isNaN(user.Mobile)) {
      NewError.Mobile = "Enter digit only";
    } else if (user.Mobile.length !== 11) {
      NewError.Mobile = "Enter Exact 11 Digits";
    }

    if (user.Password === "") {
      NewError.Password = "Required";
    }

    if (user.Password != user.Confirm_Password) {
      NewError.Confirm_Password = "Passoword Not Matched";
    }
    setError(NewError);
    if (Object.keys(NewError).length === 0) {
      setFlag(true);
    }
  };
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="text-gray-600 body-font w-[90%] sm:w-[80%] mx-auto mt-[100px]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Get Started with your Account
            </h1>
            <p className="leading-relaxed mt-4">
              Find Your Favorite Food on our platform. Just one step to order
              your food.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h1>
              {flag ? (
                <p className=" text-green-700 font-bold">{user.full_name} "you have registered Successfully"</p>
              ) : (
                ""
              )}
            </h1>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>

            <form onSubmit={HandleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="full_name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  placeholder="Enter Your Full Name"
                  value={user.full_name}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className="text-red-600">{error.full_name}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="Email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Email Address"
                  value={user.Email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 required/>
                <span className=" text-red-600">{error.Email}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="Mobile"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="Mobile"
                  name="Mobile"
                  placeholder="Enter Your Mobile"
                  onChange={handleChange}
                  value={user.Mobile}
                  autoComplete="off"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className=" text-red-500">{error.Mobile}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="Password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="Password"
                  name="Password"
                  placeholder="Enter Your Passowrd"
                  onChange={handleChange}
                  value={user.Password}
                  autoComplete="off"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className=" text-red-600">{error.Password}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="Confirm_Password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="Confirm_Password"
                  name="Confirm_Password"
                  placeholder="Confirm Your Password"
                  value={user.Confirm_Password}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className=" text-red-600">{error.Confirm_Password}</span>
              </div>

              <button className=" ml-[100px] bg-indigo-500 text-white rounded-lg py-2 px-4  transition-colors duration-300 ease-in-out hover:bg-green-700">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
