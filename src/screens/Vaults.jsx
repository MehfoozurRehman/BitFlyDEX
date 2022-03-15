import React from "react";
import { Link } from "react-router-dom";
import StakingCalculation from "../components/StakingCalculation";
import VaultBUSD from "../components/VaultBUSD";

export default function Vaults() {
  return (
    <>
      <div className="vaults__main__container">
        <div className="vaults__main__container__card">
          <div className="vaults__main__container__card__content">
            <div className="vaults__main__container__card__content__left">
              <div className="vaults__main__container__card__content__left__heading">
                Vaults
              </div>
              <div className="vaults__main__container__card__content__left__para">
                Stake Tokens to earn with Automatic Compounding. Users can stake
                one Token with other users to earn POSI. Refer your friends to
                earn 5% on their extra rewards.
              </div>
              <Link
                to="/"
                className="vaults__main__container__card__content__left__btn"
              >
                HELP
              </Link>
            </div>
            <div className="vaults__main__container__card__content__right">
              <div className="vaults__main__container__card__content__right__card">
                <div className="vaults__main__container__card__content__right__card__left">
                  <div className="vaults__main__container__card__content__right__card__left__sub__heading">
                    POSI Bounty ?
                  </div>
                  <div className="vaults__main__container__card__content__right__card__left__heading">
                    132.062
                  </div>
                  <div className="vaults__main__container__card__content__right__card__left__para">
                    ~$213.819
                  </div>
                </div>
                <div className="vaults__main__container__card__content__right__card__right">
                  <button className="vaults__main__container__card__content__right__card__right__btn">
                    Claim
                  </button>
                  <div className="vaults__main__container__card__content__right__card__left__para">
                    02:01:30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vaults__main__container__content">
          <VaultBUSD />
          <VaultBUSD />
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
      <StakingCalculation />
    </>
  );
}
