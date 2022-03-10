import React from "react";
import featureSvg from "../assets/featureSvg.png";

function FeaturesCard() {
  return (
    <div className="feature__container__content__card">
      <img
        src={featureSvg}
        alt="featureSvg"
        className="feature__container__content__card__img"
      />
      <img
        src={featureSvg}
        alt="featureSvg"
        className="feature__container__content__card__img__hover"
      />
      <div className="feature__container__content__card__heading">INVEST</div>
      <div className="feature__container__content__card__sub__heading">
        Let your Crypto work hard for you!
      </div>
      <div className="feature__container__content__card__para">
        POSI holders can stake the tokens into the Staking Pools to receive
        rewards and transaction fees. Staking indirectly serves to support the
        system.
      </div>
      <button className="btn__primary">More</button>
    </div>
  );
}

export default function Features() {
  return (
    <div className="feature__container">
      <div className="feature__container__heading">OUR MAIN FEATURES</div>
      <div className="feature__container__content">
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </div>
    </div>
  );
}
