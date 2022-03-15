import React from "react";
import EcosystemCard from "../components/EcosystemCard";
import FAQ from "../components/FAQ";
import WhyUs from "../components/WhyUs";

function BondCardEntry() {
  return (
    <div className="position__bond__container__content__card__entry__row">
      <div className="position__bond__container__content__card__entry__row__entry">
        Position Bond 003
        <span>2023-08-20</span>
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        250.00%
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        +396.19%
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        -124$
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        250.00%
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        9.000 POSI
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        250.00%
      </div>
      <div className="position__bond__container__content__card__entry__row__entry">
        250.00%
      </div>
    </div>
  );
}

export default function PositionBond() {
  return (
    <>
      <div className="position__bond__container">
        <div className="position__bond__container__content">
          <div className="position__bond__container__content__heading">
            Position Bonds
          </div>
          <div className="position__bond__container__content__para">
            The versatile fixed-income instrument, brought to Decentralized
            finance and implemented with the Blockchain technology powered by
            Smart contracts. Issue and Exchange bonds now fully on-chain and
            easily. Enjoy high and stable returns with the Stakeable bonds.
          </div>
        </div>
        <div className="position__bond__container__content__card">
          <div className="position__bond__container__content__card__content">
            <div className="position__bond__container__content__card__heading__row">
              <div className="position__bond__container__content__card__heading__row__entry">
                Asset /Maturity date
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                Fixed Stake APR
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                YTM
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                Last price
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                Face Value
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                Supply
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                Status
              </div>
              <div className="position__bond__container__content__card__heading__row__entry">
                Action
              </div>
            </div>
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
            <BondCardEntry />
          </div>
        </div>
        <EcosystemCard isReverse={true} />
      </div>
      <WhyUs />
      <div className="faq__container">
        <div
          style={{ marginBottom: "1.5em" }}
          className="why__us__container__heading"
        >
          FAQ
        </div>
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
    </>
  );
}
