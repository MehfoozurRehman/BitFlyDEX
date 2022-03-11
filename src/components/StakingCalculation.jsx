import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropDown({ selected, setSelected }) {
  return (
    <button
      onClick={() => {
        setSelected(true);
      }}
      className="stack__calculation__container__card__input__wrapper"
    >
      <div className="stack__calculation__container__card__input__wrapper__left">
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
      </div>
      <div className="stack__calculation__container__card__input__wrapper__left">
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
      </div>
    </button>
  );
}

export default function StakingCalculation() {
  const [selected, setSelected] = useState(false);
  const DropDownEntryData = [
    {
      title: "BNB",
    },

    {
      title: "BITC",
    },
    {
      title: "USD",
    },
    {
      title: "BITC",
    },
    {
      title: "USD",
    },
    {
      title: "BNB",
    },
  ];

  return (
    <div className="stack__calculation__container">
      <div className="stack__calculation__container__heading">
        Staking Calculation
      </div>
      <div className="stack__calculation__container__para">
        Change parameters and get your own staking rate
      </div>
      <div className="stack__calculation__container__card">
        <div className="stack__calculation__container__card__heading">
          Crypto Currency
        </div>
        <DropDown selected={selected} setSelected={setSelected} />
        {selected ? (
          <div className="stack__calculation__container__card__entry__wrapper">
            {DropDownEntryData.map((item, i) => (
              <button
                onClick={() => {
                  setSelected(false);
                }}
                className="stack__calculation__container__card__input__wrapper__left__entry"
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
                {item.title}
              </button>
            ))}
          </div>
        ) : null}

        <from className="stack__calculation__container__card__input__form">
          <div className="stack__calculation__container__card__input__container__row">
            <div className="stack__calculation__container__card__input__container">
              <div className="stack__calculation__container__card__input__container__heading">
                Enter Amount
              </div>
              <div className="stack__calculation__container__card__input__container__wrapper">
                <input
                  type="number"
                  placeholder="0.0"
                  className="stack__calculation__container__card__input"
                />
              </div>
            </div>
            <div className="stack__calculation__container__card__input__container">
              <div className="stack__calculation__container__card__input__container__heading">
                Daily Income
              </div>
              <div className="stack__calculation__container__card__input__container__wrapper">
                <input
                  type="number"
                  placeholder="0$"
                  className="stack__calculation__container__card__input"
                />
              </div>
            </div>
          </div>
          <div className="stack__calculation__container__card__input__container__row">
            <div className="stack__calculation__container__card__input__container">
              <div className="stack__calculation__container__card__input__container__heading">
                APY
              </div>
              <div className="stack__calculation__container__card__input__container__wrapper">
                <input
                  type="number"
                  placeholder="0%"
                  className="stack__calculation__container__card__input"
                />
              </div>
            </div>
            <div className="stack__calculation__container__card__input__container">
              <div className="stack__calculation__container__card__input__container__heading">
                Weekly Income
              </div>
              <div className="stack__calculation__container__card__input__container__wrapper">
                <input
                  type="number"
                  placeholder="0$"
                  className="stack__calculation__container__card__input"
                />
              </div>
            </div>
          </div>
        </from>
        <div className="stack__calculation__container__card__heading__bottom">
          Your Annual Income
        </div>
        <button className="stack__calculation__container__card__heading__btn">
          ~$0
          <div className="stack__calculation__container__card__heading__btn__para">
            0 POSI
          </div>
        </button>
        <div className="stack__calculation__container__card__buttom__para">
          The longer the duration of the placement of funds and the amount of
          staking, the higher your income. You can withdraw money from staking
          at any time. *Including all commissions.
        </div>
        <Link
          to="/connect-wallet"
          style={{ width: "60%", marginTop: "2.5em", padding: ".9em" }}
          className="home__jumbotron__right__buttons__button home__jumbotron__right__buttons__button__primary"
        >
          Connect Wallet
        </Link>
      </div>
    </div>
  );
}
