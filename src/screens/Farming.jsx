import React from "react";
import { Link } from "react-router-dom";
import StakingCalculation from "../components/StakingCalculation";
import VaultBUSD from "../components/VaultBUSD";
import Switch from "@mui/material/Switch";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Farming() {
  return (
    <>
      <div className="vaults__main__container">
        <div className="farming__main__container__card">
          <div className="vaults__main__container__card__content">
            <div className="vaults__main__container__card__content__left">
              <div className="vaults__main__container__card__content__left__heading">
                Farming
              </div>
              <div className="vaults__main__container__card__content__left__para">
                Stake Tokens to earn with Automatic Compounding. Users can stake
                one Token with other users to earn POSI. Refer your friends to
                earn 5% on their extra rewards.
              </div>
              <div className="vaults__main__container__card__content__links">
                <a
                  href="#"
                  className="vaults__main__container__card__content__links__heading"
                >
                  Staked only
                  <Switch {...label} defaultChecked />
                </a>

                <a
                  href="#"
                  className="vaults__main__container__card__content__links__heading"
                >
                  Live
                </a>

                <a
                  href="#"
                  className="vaults__main__container__card__content__links__heading"
                >
                  Finished
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="farming__main__container__content">
          <VaultBUSD style={{ marginRight: "2em" }} />
          <VaultBUSD />
        </div>
      </div>
      <div className="connect__main__container__content__centered__svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51.962"
          height="34.377"
          viewBox="0 0 51.962 34.377"
        >
          <path
            id="Icon_ionic-md-arrow-dropright"
            data-name="Icon ionic-md-arrow-dropright"
            d="M13.5,9,47.877,34.981,13.5,60.962Z"
            transform="translate(60.962 -13.5) rotate(90)"
            fill="#fff"
          />
        </svg>
      </div>
      <WhyUs />
      <StakingCalculation />
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
