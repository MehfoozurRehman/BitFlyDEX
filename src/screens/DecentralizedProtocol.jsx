import React, { useState } from "react";
import { Settings } from "react-feather";
import CoinPic from "../assets/CoinPic.png";
import WhyUs from "../components/WhyUs";

function NavLink({ title, selected, setSelected }) {
  return (
    <button
      onClick={() => {
        setSelected(title);
      }}
      className={
        selected === title
          ? "connect__main__container__content__header__entry__selected"
          : "connect__main__container__content__header__entry"
      }
    >
      {title}
    </button>
  );
}

function DropDownEntry({ selected, onClose, setOnClose }) {
  return (
    <button
      onClick={() => {
        setOnClose(false);
      }}
      className={
        selected
          ? "connect__main__container__content__input__bottom__right__dropdown__wrapper__entry"
          : "connect__main__container__content__input__bottom__right__dropdown__wrapper__entry__on__hover"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="51"
        viewBox="0 0 51 51"
      >
        <g id="coin-svgrepo-com" transform="translate(0.076 0.076)">
          <circle
            id="Ellipse_92"
            data-name="Ellipse 92"
            cx="25.5"
            cy="25.5"
            r="25.5"
            transform="translate(-0.076 -0.076)"
            fill="#ffd15c"
          />
          <circle
            id="Ellipse_93"
            data-name="Ellipse 93"
            cx="19.367"
            cy="19.367"
            r="19.367"
            transform="translate(6.095 6.095)"
            fill="#f8b64c"
          />
          <path
            id="Path_613"
            data-name="Path 613"
            d="M167.775,114.269a6.341,6.341,0,0,1-1.133-2.606l-4.942.531a10.124,10.124,0,0,0,2.606,5.774,8.734,8.734,0,0,0,5.313,2.436v2.476h2.747V120.3a9.117,9.117,0,0,0,5.764-2.877,8.4,8.4,0,0,0,2.075-5.774,7.554,7.554,0,0,0-1.644-5.022q-1.639-1.955-6.185-3.188v-7.4a3.84,3.84,0,0,1,2.265,3.027l4.792-.622a7.949,7.949,0,0,0-2.266-4.531,8.082,8.082,0,0,0-4.792-2.055V90h-2.747v1.875a7.849,7.849,0,0,0-5.213,2.436,7.382,7.382,0,0,0-1.955,5.213,8.052,8.052,0,0,0,1.734,5.213,10.446,10.446,0,0,0,5.443,3.208v7.919A5.128,5.128,0,0,1,167.775,114.269Zm4.6-5.523a4.767,4.767,0,0,1,2.446,1.413,3.345,3.345,0,0,1,.752,2.185,3.712,3.712,0,0,1-.892,2.466,3.813,3.813,0,0,1-2.306,1.313Zm-4.581-7.6a3.179,3.179,0,0,1-.6-1.865,3.318,3.318,0,0,1,.662-2,3.556,3.556,0,0,1,1.774-1.283v6.546A4.1,4.1,0,0,1,167.795,101.147Z"
            transform="translate(-145.491 -80.978)"
            fill="#ffd15c"
          />
        </g>
      </svg>
      BNB
      {selected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      ) : null}
    </button>
  );
}

function InputBox() {
  const [onClose, setOnClose] = useState(true);
  return (
    <div className="connect__main__container__content__input__wrapper">
      <div className="connect__main__container__content__input__top">
        <div className="connect__main__container__content__input__top__title">
          From
        </div>
        <div className="connect__main__container__content__input__top__title">
          Balance _
        </div>
      </div>
      <div className="connect__main__container__content__input__bottom">
        <input
          type="number"
          placeholder="0.0"
          className="connect__main__container__content__input"
        />
        <div className="connect__main__container__content__input__bottom__right">
          <div className="connect__main__container__content__input__bottom__right__btn">
            MAX
          </div>
          <div className="connect__main__container__content__input__bottom__right__dropdown__wrapper">
            <input
              type="radio"
              onClick={() => {
                setOnClose(true);
              }}
              className="connect__main__container__content__input__bottom__right__dropdown"
            />
            <DropDownEntry selected={true} />
            {onClose ? (
              <div className="connect__main__container__content__input__bottom__right__dropdown__wrapper__on__hover">
                <DropDownEntry onClose={onClose} setOnClose={setOnClose} />
                <DropDownEntry onClose={onClose} setOnClose={setOnClose} />
                <DropDownEntry onClose={onClose} setOnClose={setOnClose} />
                <DropDownEntry onClose={onClose} setOnClose={setOnClose} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DecentralizedProtocol({ setIsSetting }) {
  const [selected, setSelected] = useState("IDO");
  return (
    <>
      <div className="decentralized__trading__main__container">
        <div className="decentralized__trading__main__container__heading">
          The Next-Gen Decentralized Trading Protocol with its own Ecosystem.
        </div>
        <div className="decentralized__trading__main__container__para">
          Farm, Stake with high yield, Cast, Buy and Sell NFTs, Participate in
          Governance and Trade on-chain Derivatives.
        </div>

        <div className="decentralized__protocol__content__card">
          <div className="decentralized__protocol__content__card__header">
            <div className="decentralized__protocol__content__card__header__left"></div>
            <div className="decentralized__protocol__content__card__header__right">
              Currencies to be used for IDO
            </div>
          </div>
          <div className="decentralized__protocol__content__card__top">
            <div className="decentralized__protocol__content__card__top__left">
              <div className="decentralized__protocol__content__card__top__left__sub__heading">
                Total to be raised in IDO Phase 1
              </div>
              <div className="decentralized__protocol__content__card__top__left__heading">
                USD 2 MILLON
              </div>
            </div>
            <div className="decentralized__protocol__content__card__top__right">
              <div className="decentralized__protocol__content__card__top__right__card">
                <img
                  src={CoinPic}
                  alt="CoinPic"
                  className="decentralized__protocol__content__card__top__right__card__pic"
                />
                <div className="decentralized__protocol__content__card__top__left__heading">
                  BNB
                </div>
              </div>
              <div className="decentralized__protocol__content__card__top__right__card">
                <img
                  src={CoinPic}
                  alt="CoinPic"
                  className="decentralized__protocol__content__card__top__right__card__pic"
                />
                <div className="decentralized__protocol__content__card__top__left__heading">
                  BNB
                </div>
              </div>
            </div>
          </div>
          <div className="decentralized__protocol__content__divider"></div>
          <div className="decentralized__protocol__content__card__top">
            <div className="decentralized__protocol__content__card__top__left">
              <div className="decentralized__protocol__content__card__top__left__sub__heading">
                Total Coins/Tokens to be sold in IDO Phase 1
              </div>
              <div className="decentralized__protocol__content__card__top__left__heading">
                200 Million @ USD 0.01/UNIT
              </div>
            </div>
            <div className="decentralized__protocol__content__card__top__right">
              <div className="decentralized__protocol__content__card__top__right__card">
                <img
                  src={CoinPic}
                  alt="CoinPic"
                  className="decentralized__protocol__content__card__top__right__card__pic"
                />
                <div className="decentralized__protocol__content__card__top__left__heading">
                  BNB
                </div>
              </div>
              <div className="decentralized__protocol__content__card__top__right__card">
                <img
                  src={CoinPic}
                  alt="CoinPic"
                  className="decentralized__protocol__content__card__top__right__card__pic"
                />
                <div className="decentralized__protocol__content__card__top__left__heading">
                  BNB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: 0 }} className="connect__main__container">
        <div className="connect__main__container__content">
          <div className="connect__main__container__content__nav__wrapper">
            <NavLink
              title="IDO"
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <form className="connect__main__container__content__divider"></form>
          {selected === "IDO" ? (
            <>
              <div className="connect__main__container__content__header">
                <div className="connect__main__container__content__header__heading__wrapper">
                  <div className="connect__main__container__content__header__heading">
                    Exchange
                  </div>
                  <div className="connect__main__container__content__header__para">
                    Lorem Ipsum is simply dummy text of the printing
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsSetting(true);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="connect__main__container__content__header__svg"
                >
                  <Settings stroke="#ffffff" width={20} height={20} />
                </button>
              </div>
              <InputBox />
              <div className="connect__main__container__content__centered__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.342"
                  height="24.354"
                  viewBox="0 0 14.342 24.354"
                >
                  <g
                    id="Icon_ionic-ios-swap"
                    data-name="Icon ionic-ios-swap"
                    transform="translate(14.342 -14.332) rotate(90)"
                  >
                    <path
                      id="Path_454"
                      data-name="Path 454"
                      d="M16.492,14.025a1.121,1.121,0,0,1-.009-1.59L20.561,8.3H1.123a1.123,1.123,0,0,1,0-2.246H20.552L16.475,1.912a1.124,1.124,0,1,1,1.6-1.581l5.961,6.047h0a1.1,1.1,0,0,1,.233.354,1.072,1.072,0,0,1,.086.432,1.126,1.126,0,0,1-.32.786L18.073,14A1.111,1.111,0,0,1,16.492,14.025Z"
                      transform="translate(14.332 0)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
              <InputBox />
              <div className="connect__main__container__content__price__wrapper">
                <div className="connect__main__container__content__price__wrapper__left">
                  Price <span>0.0052154 BNB</span> per <span>BITFLY</span>
                </div>
                <a
                  href="#"
                  className="connect__main__container__content__price__wrapper__right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.972"
                    height="23.881"
                    viewBox="0 0 23.972 23.881"
                  >
                    <g id="loop" transform="translate(-3.999 -4.06)">
                      <path
                        id="Path_616"
                        data-name="Path 616"
                        d="M16.5,15.955a1.5,1.5,0,0,1-1.064-2.562l3.446-3.431L15.437,6.532A1.5,1.5,0,0,1,17.55,4.42l4.494,4.494a1.5,1.5,0,0,1,0,2.112L17.55,15.521A1.5,1.5,0,0,1,16.5,15.955Z"
                        transform="translate(5.477 0)"
                        fill="#fff"
                      />
                      <path
                        id="Path_617"
                        data-name="Path 617"
                        d="M5.5,14.491a1.5,1.5,0,0,1-1.5-1.5v-1.5A4.494,4.494,0,0,1,8.495,7H26.472a1.5,1.5,0,0,1,0,3H8.495a1.5,1.5,0,0,0-1.5,1.5v1.5A1.5,1.5,0,0,1,5.5,14.491ZM9.993,26.476a1.5,1.5,0,0,1-1.064-.434L4.435,21.547a1.5,1.5,0,0,1,0-2.112L8.929,14.94a1.5,1.5,0,0,1,2.112,2.112L7.611,20.483l3.431,3.431a1.5,1.5,0,0,1-1.049,2.562Z"
                        transform="translate(0 1.465)"
                        fill="#fff"
                      />
                      <path
                        id="Path_618"
                        data-name="Path 618"
                        d="M23.476,19.491H5.5a1.5,1.5,0,1,1,0-3H23.476a1.5,1.5,0,0,0,1.5-1.5V13.5a1.5,1.5,0,0,1,3,0V15A4.494,4.494,0,0,1,23.476,19.491Z"
                        transform="translate(0 3.955)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <button className="connect__main__container__content__btn">
                Connect Wallet
              </button>
              <div
                style={{ marginTop: "3em" }}
                className="connect__main__container__content__divider"
              ></div>
              <div className="connect__main__container__content__bottom">
                <div className="connect__main__container__content__bottom__content">
                  <div className="connect__main__container__content__bottom__content__left">
                    Minimum Received
                  </div>
                  <div className="connect__main__container__content__bottom__content__right">
                    187.9 BITFLY
                  </div>
                </div>
                <div className="connect__main__container__content__bottom__content">
                  <div className="connect__main__container__content__bottom__content__left">
                    Price Impact
                  </div>
                  <div className="connect__main__container__content__bottom__content__right">
                    0.10%
                  </div>
                </div>
                <div className="connect__main__container__content__bottom__content">
                  <div className="connect__main__container__content__bottom__content__left">
                    Liquidity Provider Fee
                  </div>
                  <div className="connect__main__container__content__bottom__content__right">
                    0.003996 BNB
                  </div>
                </div>
                <div className="connect__main__container__content__bottom__content">
                  <div className="connect__main__container__content__bottom__content__left">
                    RFI
                  </div>
                  <div className="connect__main__container__content__bottom__content__right">
                    1%
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <WhyUs />
    </>
  );
}
