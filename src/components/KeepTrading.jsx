import React from "react";
import ios from "../assets/ios.png";
import android from "../assets/android.png";
import keepTradingPic from "../assets/keepTradingPic.png";

export default function KeepTrading() {
  return (
    <div className="keep__trading__container">
      <div className="keep__trading__container__content">
        <img
          src={keepTradingPic}
          alt="keepTradingPic"
          className="keep__trading__container__content__img"
        />
        <div className="keep__trading__container__content__right">
          <div className="keep__trading__container__content__right__heading">
            Stay ahead and keep trading everywhere
          </div>
          <div className="keep__trading__container__content__right__para">
            Mobile App V1 is available. Download APK now!
          </div>
          <div className="keep__trading__container__content__right__btn__wrapper">
            <a
              href=""
              className="keep__trading__container__content__right__btn"
            >
              <img
                src={android}
                alt="android"
                className="keep__trading__container__content__right__btn__img"
              />
            </a>
            <a
              href=""
              className="keep__trading__container__content__right__btn"
            >
              <img
                src={ios}
                alt="ios"
                className="keep__trading__container__content__right__btn__img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
