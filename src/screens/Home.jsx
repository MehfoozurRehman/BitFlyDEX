import HomeJumbotron from "../components/HomeJumbotron";
import React from "react";
import HomeClient from "../components/HomeClient";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeClient />
      <Features />
    </>
  );
}
