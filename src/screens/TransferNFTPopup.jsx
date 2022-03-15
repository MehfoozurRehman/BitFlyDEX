import React from "react";
import { X } from "react-feather";
import SelectInput from "../components/SelectInput";

export default function TransferNFTPopup({ setIsTransferNFT }) {
  return (
    <div className="start__trading__popup__container">
      <div className="transfer__nft__popup__container__content">
        <button
          onClick={() => {
            setIsTransferNFT(false);
          }}
          className="start__trading__popup__container__content__header__btn"
        >
          <X width={20} height={20} />
        </button>
        <div className="transfer__nft__popup__container__content__heading">
          Transfer NFT
        </div>
        <div className="transfer__nft__popup__container__content__divider"></div>
        <div className="start__trading__popup__container__content__header__input">
          <input
            type="text"
            placeholder="Recipient Public address (0x)  "
            className="stack__calculation__container__card__input"
          />
        </div>
        <SelectInput
          placeholder="Choose your NFT card"
          style={{ marginTop: "1em" }}
        />
        <div className="start__trading__popup__container__content__btns__container">
          <button
            onClick={() => {
              setIsTransferNFT(false);
            }}
            className="home__jumbotron__right__buttons__button start__trading__popup__container__content__btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsTransferNFT(false);
            }}
            className="home__jumbotron__right__buttons__button home__jumbotron__right__buttons__button__primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
