import HomeJumbotron from "../components/HomeJumbotron";
import React from "react";
import HomeClient from "../components/HomeClient";
import Features from "../components/Features";
import Ecosystem from "../components/Ecosystem";
import Tokenomics from "../components/Tokenomics";

export default function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeClient />
      <Features />
      <Ecosystem />
      <Tokenomics />
    </>
  );
}
