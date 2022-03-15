import React, { useState } from "react";
import { X } from "react-feather";

function SettingBtn() {
  const [selected, setSelected] = useState(false);
  return (
    <button
      onClick={() => {
        setSelected(true);
      }}
      style={{
        background: selected ? "#ffffff" : null,
        color: selected ? "#000000" : null,
      }}
      className="setting__popup__container__btn"
    >
      1.5%
    </button>
  );
}

export default function SettingPopup({ setIsSetting }) {
  return (
    <div className="start__trading__popup__container">
      <div className="transfer__nft__popup__container__content">
        <button
          onClick={() => {
            setIsSetting(false);
          }}
          className="start__trading__popup__container__content__header__btn"
        >
          <X width={20} height={20} />
        </button>
        <div className="transfer__nft__popup__container__content__heading">
          SETTINGS
        </div>
        <div className="transfer__nft__popup__container__content__divider"></div>
        <div className="setting__popup__container__heading">
          Slippage Tolerance
        </div>
        <div className="setting__popup__container__btn__wrapper">
          <SettingBtn />
          <SettingBtn />
          <SettingBtn />
          <SettingBtn />
          <SettingBtn />
          <SettingBtn />
          <SettingBtn />
        </div>
        <div className="setting__popup__container__heading">
          Transaction Deadline
        </div>
        <div className="setting__popup__container__timeline__container">
          <div className="setting__popup__container__timeline">
            <div className="setting__popup__container__timeline__left">20</div>
            <div className="setting__popup__container__timeline__right">
              Minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
