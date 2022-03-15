import React from "react";
import { Link } from "react-router-dom";
import StakingCalculation from "../components/StakingCalculation";
import VaultBUSD from "../components/VaultBUSD";
import Switch from "@mui/material/Switch";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Pools() {
  return (
    <>
      <div className="vaults__main__container">
        <div className="farming__main__container__card">
          <div className="vaults__main__container__card__content">
            <div className="vaults__main__container__card__content__left">
              <div className="vaults__main__container__card__content__left__heading">
                Pools
              </div>
              <div className="vaults__main__container__card__content__left__para">
                Stake Liquidity Pool (LP) tokens to earn
              </div>
              <div className="vaults__main__container__card__content__links">
                <div className="vaults__main__container__card__content__links__btns">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <g
                      id="Icon_feather-grid"
                      data-name="Icon feather-grid"
                      transform="translate(-3 -3)"
                    >
                      <path
                        id="Path_613"
                        data-name="Path 613"
                        d="M4.5,4.5H15V15H4.5Z"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_614"
                        data-name="Path 614"
                        d="M21,4.5H31.5V15H21Z"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_615"
                        data-name="Path 615"
                        d="M21,21H31.5V31.5H21Z"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                      <path
                        id="Path_616"
                        data-name="Path 616"
                        d="M4.5,21H15V31.5H4.5Z"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                      />
                    </g>
                  </svg>
                </div>
                <div className="vaults__main__container__card__content__links__btns">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="29.25"
                    viewBox="0 0 36 29.25"
                  >
                    <path
                      id="Icon_awesome-list-ul"
                      data-name="Icon awesome-list-ul"
                      d="M3.375,3.375A3.375,3.375,0,1,0,6.75,6.75,3.375,3.375,0,0,0,3.375,3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,18a3.375,3.375,0,0,0-3.375-3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,29.25a3.375,3.375,0,0,0-3.375-3.375ZM34.875,27h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25A1.125,1.125,0,0,0,12.375,31.5h22.5A1.125,1.125,0,0,0,36,30.375v-2.25A1.125,1.125,0,0,0,34.875,27Zm0-22.5h-22.5A1.125,1.125,0,0,0,11.25,5.625v2.25A1.125,1.125,0,0,0,12.375,9h22.5A1.125,1.125,0,0,0,36,7.875V5.625A1.125,1.125,0,0,0,34.875,4.5Zm0,11.25h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25a1.125,1.125,0,0,0,1.125,1.125h22.5A1.125,1.125,0,0,0,36,19.125v-2.25A1.125,1.125,0,0,0,34.875,15.75Z"
                      transform="translate(0 -3.375)"
                      fill="#fff"
                    />
                  </svg>
                </div>
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
