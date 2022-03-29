import React from "react";
import { X } from "react-feather";
import AuthInput from "../components/AuthInput";

export default function OTPPopup({ setIsOTP, setIsResetPassword }) {
  return (
    <div className="login__form__popup">
      <div className="login__form__popup__content">
        <div className="login__form__popup__content__header">
          <div className="get__started__form__popup__heading">
            Forgot Password
          </div>
          <button
            onClick={() => {
              setIsOTP(false);
            }}
            className="login__form__popup__content__header__btn"
          >
            <X width={20} height={20} />
          </button>
        </div>
        <form className="connect__main__container__content__divider"></form>
        <div className="get__started__form__popup">
          <AuthInput placeholder="Enter Email Id" type="email" />
          <button
            onClick={() => {
              setIsOTP(false);
              setIsResetPassword(true);
            }}
            className="get__started__form__btn"
          >
            Send OTP{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
