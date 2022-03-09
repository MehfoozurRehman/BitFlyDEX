import React from "react";
import ecosystemPic from "../assets/ecosystemPic.png";

function EcosystemCard({ isReverse }) {
  return (
    <div
      className={
        isReverse
          ? "ecosystem__container__content__card__reverse"
          : "ecosystem__container__content__card"
      }
    >
      <img
        src={ecosystemPic}
        alt="ecosystemPic"
        className="ecosystem__container__content__card__content__img"
      />
      <div className="ecosystem__container__content__card__content">
        <div className="ecosystem__container__content__card__content__heading">
          Lorem Ipsum
        </div>
        <div className="ecosystem__container__content__card__content__para">
          The sums generated from trading fees are entirely used to buy back
          POSI tokens from exchanges. Those tokens are burnt in order to reduce
          the overall POSI tokens circulation, stabilize the token price and
          create deflation.
        </div>
        <button className="btn__primary">More</button>
      </div>
    </div>
  );
}

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
