import React from "react";
import HeroSection from "../Components/Organisms/HeroSection";
import RequestLoan from "../Components/Organisms/RequestLoan/RequestLoan";
import ViewLoans from "../Components/Organisms/ViewLoans/ViewLoans";

const Home = () => {
  return (
    <>
      <HeroSection />
      <RequestLoan />
      <ViewLoans />
    </>
  );
};

export default Home;
