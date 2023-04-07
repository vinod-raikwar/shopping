import React from "react";
import "./Home.css";
import Banner from "../../components/Banner";
import TextComponent from "../../components/TextComponent";
import SellerCards from "../../components/SellerCards";
import Carousels from "../../components/Carousels";
import StorieCards from "../../components/StorieCards";

function Home() {
  return (
    <>
      <Banner />
      <TextComponent />
      <SellerCards />
      <Carousels />
      <StorieCards />
    </>
  );
}

export default Home;
