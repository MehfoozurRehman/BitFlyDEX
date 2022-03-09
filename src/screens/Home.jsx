import HomeJumbotron from "../components/HomeJumbotron";
import React from "react";
import HomeClient from "../components/HomeClient";
import Features from "../components/Features";
import Ecosystem from "../components/Ecosystem";
import Tokenomics from "../components/Tokenomics";
import WhyUs from "../components/WhyUs";
import KeepTrading from "../components/KeepTrading";

export default function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeClient />
      <Features />
      <Ecosystem />
      <Tokenomics />
      <WhyUs />
      <KeepTrading />
    </>
  );
}
