import React from "react";
import { Link } from "react-router-dom";
import StakingCalculation from "../components/StakingCalculation";
import VaultBUSD from "../components/VaultBUSD";
import Switch from "@mui/material/Switch";
import WhyUs from "../components/WhyUs";

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
      <WhyUs />
      <StakingCalculation />
    </>
  );
}
