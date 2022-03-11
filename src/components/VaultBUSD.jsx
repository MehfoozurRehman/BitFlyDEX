import React from "react";
import { Link } from "react-router-dom";
import CoinPic from "../assets/CoinPic.png";

export default function VaultBUSD() {
  return (
    <div className="vaults__main__container__content__card">
      <div className="vaults__main__container__content__card__heading">
        BUSD
      </div>
      <div className="vaults__main__container__content__card__suub__card">
        <img
          src={CoinPic}
          alt="CoinPic"
          className="vaults__main__container__content__card__suub__card__img"
        />
        <div className="vaults__main__container__content__card__suub__card__content">
          <div className="vaults__main__container__content__card__suub__card__content__heading">
            COMPOUNDED
            <a
              href="
            "
              className="vaults__main__container__content__card__suub__card__content__svg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.098"
                height="29.097"
                viewBox="0 0 29.098 29.097"
              >
                <g
                  id="Group_435"
                  data-name="Group 435"
                  transform="translate(-19575 -567)"
                >
                  <path
                    id="Ellipse_86"
                    data-name="Ellipse 86"
                    d="M14.549,1.857a12.687,12.687,0,1,0,4.94,1,12.7,12.7,0,0,0-4.94-1m0-1.857A14.549,14.549,0,1,1,0,14.549,14.549,14.549,0,0,1,14.549,0Z"
                    transform="translate(19575 567)"
                    fill="#6b6b6b"
                  />
                  <text
                    id="_"
                    data-name="!"
                    transform="translate(19587.195 586.604)"
                    fill="#6b6b6b"
                    font-size="14"
                    font-family="Lato-Black, Lato"
                    font-weight="800"
                  >
                    <tspan x="0" y="0">
                      !
                    </tspan>
                  </text>
                </g>
              </svg>
              <div className="vaults__main__container__content__card__suub__card__content__svg__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                quae quasi a voluptates animi mollitia adipisci excepturi
                sapiente tempore deleniti.
              </div>
            </a>
          </div>
          <div className="vaults__main__container__content__card__suub__card__content__footer">
            <div className="vaults__main__container__content__card__suub__card__content__para">
              ~$0.000
            </div>
            <div className="vaults__main__container__content__card__suub__card__content__btn">
              AUTO
            </div>
          </div>
        </div>
      </div>
      <div className="vaults__main__container__content__card__row">
        <div className="vaults__main__container__content__card__row__entry__left">
          APY
        </div>
        <div className="vaults__main__container__content__card__row__entry__right">
          645.64%
        </div>
      </div>
      <div className="vaults__main__container__content__card__row">
        <div className="vaults__main__container__content__card__row__entry__left">
          Pending earnings
        </div>
        <div className="vaults__main__container__content__card__row__entry__right">
          ~$0.000
        </div>
      </div>
      <div className="vaults__main__container__content__card__row">
        <div className="vaults__main__container__content__card__row__entry__left">
          Auto compound in
        </div>
        <div className="vaults__main__container__content__card__row__entry__right">
          01:49:20
        </div>
      </div>
      <div className="vaults__main__container__content__card__row">
        <div className="vaults__main__container__content__card__row__entry__left">
          BUSD Staked
        </div>
        <div className="vaults__main__container__content__card__row__entry__right">
          ~$0.000
        </div>
      </div>
      <Link
        to="/connect-wallet"
        style={{ width: "100%", marginTop: "1.5em" }}
        className="home__jumbotron__right__buttons__button home__jumbotron__right__buttons__button__primary"
      >
        Connect Wallet
      </Link>
    </div>
  );
}
