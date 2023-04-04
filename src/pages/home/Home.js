import React from "react";
import "./Home.css";
import Banner from "../../components/Banner";
import TextComponent from "../../components/TextComponent";
import SellerCards from "../../components/SellerCards";
import Carousels from "../../components/Carousels";
import StorieCards from "../../components/StorieCards";
import TimerBag from "../../components/TimerBag";

function Home() {
  return (
    <>
      <Banner />
      <TextComponent />
      <SellerCards />
      <TimerBag />
      <Carousels />
      <StorieCards />
    </>
  );
}

export default Home;
