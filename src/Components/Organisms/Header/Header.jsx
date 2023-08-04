import React, {useState} from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import hamburgerD from '../../../assets/hamburger-l.png'

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-5 font-medium text-gray-800">
      <div className="w-3/12">
        <Link to="/">
          <img src={logo} className="w-full lg:w-8/12" />
        </Link>
      </div>
      <nav className="w-6/12 max-lg:hidden">
        <ul className="w-8/12 mx-auto flex justify-between">
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li className="">
            <a href="#loan-history">Loan History</a>
          </li>
          <li className="">
            <a href="#request-loan">Request a Loan</a>
          </li>
          <li className="">
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="w-3/12 flex justify-center items-center max-lg:hidden">
        <a href="#" className="mr-5">
          Sign In
        </a>{" "}
        <button className=" text-white px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all ease-in-out duration-300">
          <a href="">Create Account</a>
        </button>
      </div>{" "}
      <div
        onClick={() => {
          setSidebar(true);
        }}
        className="lg:hidden cursor-pointer"
      >
        <img src={hamburgerD} alt="hamburger" className="w-8" />
      </div>
      <SideNav
        sidebar={sidebar}
        onClick={() => {
          setSidebar(false);
        }}
      />
    </header>
  );
};

export default Header;
