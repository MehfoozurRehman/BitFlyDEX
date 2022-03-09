import HomeJumbotron from "../components/HomeJumbotron";
import React from "react";
import HomeClient from "../components/HomeClient";
import Features from "../components/Features";
import Ecosystem from "../components/Ecosystem";

export default function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeClient />
      <Features />
      <Ecosystem />
    </>
  );
}
