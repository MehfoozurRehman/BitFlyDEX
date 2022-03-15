import React from "react";

function RoadMapCard() {
  return (
    <div className="road__map__container__content__card">
      <div className="road__map__container__content__card__heading">
        Q3 2021
      </div>
      <div className="road__map__container__content__card__para">
        Decentralized Futures + Margin Protocol V1 + Buyback and Burn
        Implementation
      </div>
      <div className="road__map__container__content__card__para">
        Exchange Pro Aggregator
      </div>
      <div className="road__map__container__content__card__para">
        Android and iOS launch on Google Play/ App Store
      </div>
      <div className="road__map__container__content__card__para">
        Own Spot DEX which will support limit orders
      </div>
    </div>
  );
}

export default function RoadMap() {
  return (
    <div className="road__map__container">
      <div className="road__map__container__heading">Road Map</div>
      <div className="road__map__container__content">
        <RoadMapCard />
        <RoadMapCard />
        <RoadMapCard />
      </div>
    </div>
  );
}
