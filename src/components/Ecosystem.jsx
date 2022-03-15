import React from "react";
import ecosystemPic from "../assets/ecosystemPic.png";
import EcosystemCard from "./EcosystemCard";
export default function Ecosystem() {
  return (
    <div className="ecosystem__container">
      <div className="ecosystem__container__heading">LOREM IPSUM</div>
      <div className="ecosystem__container__para">
        POSI is the native BEP-20 Token to Position Exchange serving as the
        backbone of its Ecosystem
      </div>
      <EcosystemCard />
      <EcosystemCard isReverse={true} />
      <EcosystemCard />
      <EcosystemCard isReverse={true} />
    </div>
  );
}
