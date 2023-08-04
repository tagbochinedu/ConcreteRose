import React from "react";
import phones from '../../assets/phones.png'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#d2e7f9] to-white">
      <div className="h-screen flex flex-col items-center justify-center px-5">
        <p className="inline px-5 py-3 font-medium bg-white text-blue-950 rounded-full text-center mb-5">
          Hi, Everyone 👋
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-mont font-semibold text-blue-950 text-center mb-4">
          Use our new platform <br /> for a better experience
        </h1>
        <p className="text-md md:text-lg text-blue-950 text-center">
          You can now take new loans, view old ones<br/> and view your loan history
          from anywhere in the world
        </p>
      </div>
      <img src={phones} className="relative -top-36 w-6/12 mx-auto"/>
    </section>
  );
};

export default HeroSection;
