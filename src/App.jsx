import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import "./App.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
