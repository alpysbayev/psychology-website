import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 p-4 flex justify-center text-lg">
      <ul className="flex space-x-4 justify-center">
        <li className="text-white font-bold">
          <Link to="/" className="hover:underline">
            Web-App
          </Link>
        </li>

        <li className="text-white pl-5">
          <Link to="/quiz-1 " className="hover:underline">
            Psychotype Quiz
          </Link>
        </li>

        <li className="text-white pl-5">
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
