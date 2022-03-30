import React from "react";
import EcosystemCard from "../components/EcosystemCard";
import FAQ from "../components/FAQ";
import WhyUs from "../components/WhyUs";

export default function ExchangeLanding() {
  return (
    <>
      <div className="position__bond__container">
        <div className="position__bond__container__content">
          <div className="position__bond__container__content__heading">
            Exchange landing page
          </div>
          <div className="position__bond__container__content__para__landing">
            The versatile fixed-income instrument, brought to Decentralized
            finance and implemented with the Blockchain technology powered by
            Smart contracts. Issue and Exchange bonds now fully on-chain and
            easily. Enjoy high and stable returns with the Stakeable bonds.
          </div>
        </div>
        <EcosystemCard isReverse={true} />
      </div>
      <WhyUs />
    </>
  );
}
