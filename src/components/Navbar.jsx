import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container m-auto px-44 py-4">
      <ul className="flex justify-between ">
        <li>
          <Link
            to="/"
            className="text-xl font-semibold text-gray-800 uppercase hover:text-[#ff0336] transition-colors ease-linear"
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            to="blog"
            className="text-xl font-semibold text-gray-800 uppercase hover:text-[#ff0336] transition-colors ease-linear"
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link
            to="createBlog"
            className="text-xl font-semibold text-gray-800 uppercase hover:text-[#ff0336] transition-colors ease-linear"
          >
            Create
          </Link>
        </li>
        <li>
          <Link
            to="editBlog"
            className="text-xl font-semibold text-gray-800 uppercase hover:text-[#ff0336] transition-colors ease-linear"
          >
            Edit
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
