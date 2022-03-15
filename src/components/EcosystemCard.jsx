import React from "react";
import ecosystemPic from "../assets/ecosystemPic.png";

export default function EcosystemCard({ isReverse }) {
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
