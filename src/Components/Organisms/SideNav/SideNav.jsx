import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ sidebar, onClick }) => {
  return (
    <div
      className={`h-screen font-satoshi font-medium text-2xl fixed left-0 right-0 transition-all ease-in-out duration-1000 xl:pl-48 xl:pt-14 xl:pr-32 lg:px-36 lg:pt-10 md:px-24 px-5 pt-8 z-20 bg-white ${
        sidebar ? "opacity-100 top-[0px]" : "opacity-0 -top-[1000px]"
      } `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 md:w-10 md:h-10"
        onClick={() => {
          onClick();
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <ul className="text-center">
        <NavLink
          to="/"
          className="mb-4 block"
          onClick={() => {
            onClick();
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/#loan-history"
          className="my-4 block"
          onClick={() => {
            onClick();
          }}
        >
          Loan History
        </NavLink>
        <NavLink
          to="/resume"
          className="my-4 block"
          onClick={() => {
            onClick();
          }}
        >
          Resume
        </NavLink>
        <NavLink
          to="/#request-loan"
          className="mt-4 block"
          onClick={() => {
            onClick();
          }}
        >
          Request A Loan
        </NavLink>{" "}
        <NavLink
          to="/#contact-us"
          className="mt-4 block"
          onClick={() => {
            onClick();
          }}
        >
          Contact Us
        </NavLink>{" "}
        <NavLink
          to="/#sign-in"
          className="mt-4 block"
          onClick={() => {
            onClick();
          }}
        >
          Sign In
        </NavLink>
        <NavLink
          to="/#"
          className="mt-4 block"
          onClick={() => {
            onClick();
          }}
        >
          <button className=" text-white px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all ease-in-out duration-300">
          Create Account
          </button>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
