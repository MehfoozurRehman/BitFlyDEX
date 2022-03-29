import React, { useState } from "react";
import { X } from "react-feather";
import AuthInput from "../components/AuthInput";

export default function ResetPassword({ setIsResetPassword }) {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="login__form__popup">
      <div className="login__form__popup__content">
        <div className="login__form__popup__content__header">
          <div className="get__started__form__popup__heading">
            Forgot Password
          </div>
          <button
            onClick={() => {
              setIsResetPassword(false);
            }}
            className="login__form__popup__content__header__btn"
          >
            <X width={20} height={20} />
          </button>
        </div>
        <form className="connect__main__container__content__divider"></form>
        <div className="get__started__form__popup">
          <AuthInput placeholder="Enter OTP" type="text" />
          <div
            style={{ marginTop: 12 }}
            className="get__started__form__already__acount__para"
          >
            Resend OTP{" "}
            <span
              onClick={() => {
                setSelected("Login");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="get__started__form__already__acount__btn"
            >
              1:12s
            </span>
          </div>
          <button
            onClick={() => {
              setIsShowPass(true);
            }}
            className="get__started__form__btn"
          >
            Confirm OTP
          </button>
          {isShowPass ? (
            <>
              <div
                style={{ marginTop: "1em" }}
                className="get__started__form__popup"
              >
                <AuthInput placeholder="Password" type="password" />
                <AuthInput placeholder="Confirm Password" type="password" />
              </div>
              <button
                onClick={() => {
                  setIsResetPassword(false);
                }}
                className="get__started__form__btn"
              >
                Reset Password
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
