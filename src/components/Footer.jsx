import React from "react";
import logo from "../assets/logo.png";
import features_bg from "../assets/features_bg.png";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__container__content">
        <div className="footer__container__content__left">
          <img
            src={logo}
            alt="logo"
            className="footer__container__content__left__img"
          />
          <div className="footer__container__content__left__para">
            The Next-Gen Decentralized Exchange & Trading Platform
          </div>

          <div className="footer__container__content__left__heading">
            Stay up to date
          </div>
          <div className="footer__container__content__left__para">
            Submit your email to get the latest news
          </div>
          <div className="footer__container__content__left__input__wrapper">
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
              class="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="text"
              placeholder="Email"
              className="footer__container__content__left__input"
            />
            <button className="footer__container__content__left__btn">
              Submit
            </button>
          </div>
        </div>
        <div className="footer__container__content__col">
          <div className="footer__container__content__col__heading">
            Governance
          </div>
          <a href="#" className="footer__container__content__col__entry">
            Forum
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Voting
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Announcements
          </a>
        </div>
        <div className="footer__container__content__col">
          <div className="footer__container__content__col__heading">
            About Us
          </div>
          <a href="#" className="footer__container__content__col__entry">
            Documentation
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Postion Exchange
          </a>
          <a href="#" className="footer__container__content__col__entry">
            POSI token
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Whitepaper
          </a>
        </div>
        <div className="footer__container__content__col">
          <div className="footer__container__content__col__heading">
            Support
          </div>
          <a href="#" className="footer__container__content__col__entry">
            Help Center
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Contact Us
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Feedback
          </a>
        </div>
        <div className="footer__container__content__col">
          <div className="footer__container__content__col__heading">
            Products
          </div>
          <a href="#" className="footer__container__content__col__entry">
            Trading
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Farming
          </a>
          <a href="#" className="footer__container__content__col__entry">
            Staking
          </a>
          <a href="#" className="footer__container__content__col__entry">
            NFTs
          </a>
        </div>
      </div>
      <div className="footer__container__socials__wrapper">
        <div className="footer__container__socials">
          <a href="">
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
              class="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="">
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
              class="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="">
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
              class="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="">
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
              class="feather feather-youtube"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          <a href="">
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
              class="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <div className="footer__container__socials__wrapper__copywright">
          BITFLYDEX 2022 Copyright
        </div>
      </div>
    </div>
  );
}
