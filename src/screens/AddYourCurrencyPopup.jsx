import React, { useState } from "react";
import { X } from "react-feather";
import SelectInput from "../components/SelectInput";

export default function AddYourCurrencyPopup({ setIsAddYourCurrency }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isReConfirmed, setIsReConfirmed] = useState(false);
  return (
    <div className="start__trading__popup__container">
      <div className="transfer__nft__popup__container__content">
        <button
          onClick={() => {
            setIsAddYourCurrency(false);
          }}
          className="start__trading__popup__container__content__header__btn"
        >
          <X width={20} height={20} />
        </button>

        {isReConfirmed ? (
          <div className="transfer__nft__popup__container__content__heading">
            Currency will be added in maximum 72 hours
          </div>
        ) : (
          <>
            <div className="transfer__nft__popup__container__content__heading">
              Add Your Currency
            </div>
            <div className="transfer__nft__popup__container__content__divider"></div>
            {isConfirmed ? (
              <div
                className="transfer__nft__popup__container__content__heading"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Fees</span> <span>45%</span>
              </div>
            ) : (
              <>
                <SelectInput
                  placeholder="Choose Network"
                  style={{ marginTop: "1em" }}
                />
                <div
                  className="start__trading__popup__container__content__header__input"
                  style={{ marginTop: "1em" }}
                >
                  <input
                    type="text"
                    placeholder="Contract Address (0x)  "
                    className="stack__calculation__container__card__input"
                  />
                </div>
                <div
                  className="start__trading__popup__container__content__header__input"
                  style={{ marginTop: "1em" }}
                >
                  <input
                    type="number"
                    placeholder="Decimal"
                    className="stack__calculation__container__card__input"
                  />
                </div>
              </>
            )}
          </>
        )}

        <div className="start__trading__popup__container__content__btns__container">
          {isReConfirmed ? (
            <button
              onClick={() => {
                setIsAddYourCurrency(false);
              }}
              className="home__jumbotron__right__buttons__button start__trading__popup__container__content__btn"
              style={{ marginRight: "0em" }}
            >
              Ok
            </button>
          ) : isConfirmed ? (
            <button
              onClick={() => {
                setIsReConfirmed(true);
                setIsConfirmed(false);
              }}
              className="home__jumbotron__right__buttons__button start__trading__popup__container__content__btn"
              style={{ marginRight: "0em" }}
            >
              Reconfirm
            </button>
          ) : (
            <button
              onClick={() => {
                setIsConfirmed(true);
              }}
              className="home__jumbotron__right__buttons__button start__trading__popup__container__content__btn"
              style={{ marginRight: "0em" }}
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
