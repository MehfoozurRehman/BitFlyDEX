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

export default function GetStarted({ setIsSetting }) {
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
            <form action="" className="get__started__form">
              <AuthInput placeholder="Enter email Id" type="email" />
              <AuthInput placeholder="Password" type="password" />
              <button className="get__started__form__forgot__password">
                Forgot password?
              </button>
              <button className="get__started__form__btn">Login</button>
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
            </form>
          </>
        ) : null}
        {selected === "Create account" ? (
          <>
            <form action="" className="get__started__form">
              <AuthInput placeholder="Enter email Id" type="email" />
              <AuthInput placeholder="Password" type="password" />
              <AuthInput placeholder="Confirm Password" type="password" />

              <button className="get__started__form__btn">
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
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
}
