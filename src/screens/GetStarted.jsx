import React, { useState } from "react";
import { Settings } from "react-feather";
import { Link } from "react-router-dom";
import AuthInput from "../components/AuthInput";

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

export default function GetStarted({ setIsOTP, setIsConfirmOTP }) {
  const [selected, setSelected] = useState("Login");

  return (
    <div className="connect__main__container">
      <div className="connect__wallet__jumbotron__wrapper">
        <h1 className="governance__jumbotron__heading">Lets get Started</h1>
        <div className="governance__jumbotron__para">
          On-chain governance is a system for managing and implementing changes
          to cryptocurrency blockchains. In this type of governance, rules for
          instituting changes are encoded into the blockchain protocol.
          Developers propose changes through code updates and each node votes on
          whether to accept or reject the proposed change
        </div>
        <button className="governance__jumbotron__btn"> Learn More</button>
      </div>
      <div className="connect__main__container__content">
        <div className="connect__main__container__content__nav__wrapper">
          <NavLink
            title="Login"
            selected={selected}
            setSelected={setSelected}
          />
          <NavLink
            title="Create account"
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <form className="connect__main__container__content__divider"></form>
        {selected === "Login" ? (
          <>
            <div className="get__started__form">
              <AuthInput placeholder="Enter email Id" type="email" />
              <AuthInput placeholder="Password" type="password" />
              <button
                onClick={() => {
                  // setIsResetPassword(true);
                  setIsOTP(true);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="get__started__form__forgot__password"
              >
                Forgot password?
              </button>
              <Link
                to="/wallet"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="get__started__form__btn"
              >
                Login
              </Link>
              <div className="get__started__form__already__acount">
                <div className="get__started__form__already__acount__para">
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setSelected("Create account");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="get__started__form__already__acount__btn"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {selected === "Create account" ? (
          <>
            <div className="get__started__form">
              <AuthInput placeholder="Enter email Id" type="email" />
              <AuthInput placeholder="Password" type="password" />
              <AuthInput placeholder="Confirm Password" type="password" />

              <button
                onClick={() => {
                  setIsConfirmOTP(true);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="get__started__form__btn"
              >
                Create Account
              </button>
              <div className="get__started__form__already__acount">
                <div className="get__started__form__already__acount__para">
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setSelected("Login");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="get__started__form__already__acount__btn"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
