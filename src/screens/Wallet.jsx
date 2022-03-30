import React, { useState } from "react";
import { Settings } from "react-feather";

function WalletCard() {
  return (
    <div className="wallet__form__balance__content__card">
      <div className="wallet__from__balance__content__card__upper">
        <div className="wallet__form__balance__content__card__entry">
          <div className="wallet__form__balance__content__card__entry__title">
            BNB
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
                <path
                  fill="#FFF"
                  d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="wallet__form__balance__content__card__entry">
          <div className="wallet__form__balance__content__card__entry__para">
            23214sdp3u4kj23lk...4jlkj23o4kj23324{" "}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.015"
                height="26.015"
                viewBox="0 0 26.015 26.015"
              >
                <g
                  id="Icon_feather-copy"
                  data-name="Icon feather-copy"
                  transform="translate(-1.5 -1.5)"
                >
                  <path
                    id="Path_617"
                    data-name="Path 617"
                    d="M15.8,13.5H26.158a2.3,2.3,0,0,1,2.3,2.3V26.158a2.3,2.3,0,0,1-2.3,2.3H15.8a2.3,2.3,0,0,1-2.3-2.3V15.8A2.3,2.3,0,0,1,15.8,13.5Z"
                    transform="translate(-2.445 -2.445)"
                    fill="none"
                    stroke="#686868"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_618"
                    data-name="Path 618"
                    d="M6.452,17.96H5.3a2.3,2.3,0,0,1-2.3-2.3V5.3A2.3,2.3,0,0,1,5.3,3H15.658a2.3,2.3,0,0,1,2.3,2.3V6.452"
                    fill="none"
                    stroke="#686868"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="wallet__form__balance__content__card__entry">
          <div className="wallet__form__balance__content__card__entry__para">
            0
          </div>
        </div>
      </div>
      <div className="wallet__from__balance__content__card__bottom">
        <button className="wallet__from__balance__content__card__btn">
          Widthdrawal
        </button>
        <button className="wallet__from__balance__content__card__btn">
          Deposit
        </button>
      </div>
    </div>
  );
}

export default function Wallet() {
  return (
    <div className="connect__main__container">
      <div className="connect__wallet__jumbotron__wrapper">
        <h1 className="governance__jumbotron__heading">Wallet</h1>
        <div className="governance__jumbotron__para">
          On-chain governance is a system for managing and implementing changes
          to cryptocurrency blockchains. In this type of governance, rules for
          instituting changes are encoded into the blockchain protocol.
          Developers propose changes through code updates and each node votes on
          whether to accept or reject the proposed change
        </div>
        <button className="governance__jumbotron__btn">Learn More</button>
      </div>
      <div className="connect__main__container__content">
        <div className="wallent__content__heading">BitFlyWallet</div>
        <form className="connect__main__container__content__divider"></form>
        <div className="wallet__form__balance">
          <span>Wallet Balance</span>
          $245,343.43
        </div>
        <div className="wallet__form__balance__headings__row">
          <div className="wallet__form__balance__headings__row__entry">
            Name
          </div>
          <div className="wallet__form__balance__headings__row__entry">
            Address
          </div>
          <div className="wallet__form__balance__headings__row__entry">
            Balance
          </div>
        </div>
        <div className="wallet__form__balance__content">
          <WalletCard />
          <WalletCard />
          <WalletCard />
          <WalletCard />
          <WalletCard />
        </div>
      </div>
    </div>
  );
}
