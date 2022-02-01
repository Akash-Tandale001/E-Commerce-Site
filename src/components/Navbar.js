import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-700">
              <p
                className="text-xl  text-gray-800 transition-colors duration-200 transform dark:text-white  hover:text-gray-700 dark:hover:text-gray-300"                
              >
                <i className="fas fa-angle-double-right cursor-pointer">Product Catelog</i>
              </p>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>

          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link to="/"
                className="px-2 py-1 mx-2 mt-2 text-md font-medium hover:text-gray-300 text-white transition-colors duration-200 transform rounded-md md:mt-0   "
              >
               Home
              </Link>
              
              <Link to="/mobiles"
                className="px-2 py-1 mx-2 mt-2 text-md font-medium text-white hover:text-gray-300  transition-colors duration-200 transform rounded-md md:mt-0 0 "
              >
                Mobiles
              </Link>
              <Link to="/laptops"
                className="px-2 py-1 mx-2 mt-2 text-md font-medium text-white hover:text-gray-300  transition-colors duration-200 transform rounded-md md:mt-0 0 "
              >
                Laptops
              </Link>
              <Link to="/entertainment"
                className="px-2 py-1 mx-2 mt-2 text-md font-medium text-white hover:text-gray-300  transition-colors duration-200 transform rounded-md md:mt-0 0 "
              >
                Entertainment
              </Link>
              <Link to="/about"
                className="px-2 py-1 mx-2 mt-2 text-md font-medium text-white hover:text-gray-300  transition-colors duration-200 transform rounded-md md:mt-0 0 "
              >
                About
              </Link>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <input
                type="text"
                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 hidden dark:border-gray-600 focus:border-blue-300 dark:focus:border-blue-300 focus:outline-none  focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />

              <Link to="/favourites">
                <button
                  className=" mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <i class="far fa-heart cursor-pointer"></i>
                </button>
              </Link>

              <Link to="/cart">
                <button
                  className=" mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <i class="fab fa-opencart cursor-pointer"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

