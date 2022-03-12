import React, { useState } from "react";
import { Link } from "react-router-dom";
import nftPic from "../assets/nftPic.png";

function NFTMarketPlaceCard() {
  return (
    <Link
      to="/nft-market-place"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="nft__card__secondary"
    >
      <div className="nft__card__img__wrapper">
        <img src={nftPic} alt="nftPic" className="nft__card__img" />
      </div>
      <div className="nft__card__header">
        <div className="nft__card__header__heading"> #1099182</div>
        <div className="nft__card__row__entry__left">Unlock in 17D</div>
      </div>
      <div className="nft__card__row">
        <div className="nft__card__row__entry__left">Lastest Price</div>
        <div className="nft__card__row__entry__right">
          161.0000
          <span>≈$287.9427</span>
        </div>
      </div>
      <div className="nft__card__row">
        <div className="nft__card__row__entry__left">Par Value</div>
        <div className="nft__card__row__entry__right">141.413 POSI</div>
      </div>
      <div className="nft__card__row">
        <div className="nft__card__row__entry__left">Mining Power</div>
        <div className="nft__card__row__entry__right">168.177 POSI</div>
      </div>
    </Link>
  );
}

function BuyAndSellBtn({ selected, setSelected, title }) {
  return (
    <button
      onClick={() => {
        setSelected(title);
      }}
      className={
        selected === title
          ? "trading__main__container__buy__and__sell__card__header__entry__heading trading__main__container__buy__and__sell__card__header__entry__input__selected"
          : "trading__main__container__buy__and__sell__card__header__entry__heading"
      }
    >
      {title}
    </button>
  );
}

export default function NFTMarketPlace() {
  const [selected, setSelected] = useState("Buy");

  return (
    <div className="nft__market__place__container">
      <div className="nft__market__place__container__content">
        <div className="nft__market__place__container__content__header">
          <div className="nft__market__place__container__content__header__heading">
            NFT Marketplace
          </div>
          <div className="nft__market__place__container__content__header__btn__wrapper">
            <Link
              to="/nft"
              className="nft__market__place__container__content__header__btn__white"
            >
              CREATE NFT
            </Link>
            <Link
              to="/nft"
              className="nft__market__place__container__content__header__btn__white"
            >
              Sell NFT
            </Link>
            <Link
              to="/nft"
              className="nft__market__place__container__content__header__btn__black"
            >
              MARKETPLACE HISTORY
            </Link>
          </div>
        </div>
        <div className="nft__market__place__container__content__footer">
          <div className="nft__market__place__container__content__footer__left">
            <div className="nft__market__place__container__content__footer__left__btn__wrapper">
              <BuyAndSellBtn
                title="Buy"
                selected={selected}
                setSelected={setSelected}
              />
              <BuyAndSellBtn
                title="Sell"
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>

          <div className="nft__market__place__container__content__footer__right">
            <a
              href=""
              className="nft__market__place__container__content__footer__right__dropdown"
            >
              Lorem Ipsm
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
              <div className="nft__market__place__container__content__footer__right__dropdown__wrapper">
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
              </div>
            </a>
            <a
              href=""
              className="nft__market__place__container__content__footer__right__dropdown"
            >
              Lorem Ipsm
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
              <div className="nft__market__place__container__content__footer__right__dropdown__wrapper">
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
                <div className="nft__market__place__container__content__footer__right__dropdown__wrapper__entry">
                  Lorem Ipsm
                </div>
              </div>
            </a>
            <div
              style={{ marginTop: -6 }}
              className="footer__container__content__left__input__wrapper"
            >
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
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="footer__container__content__left__input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nft__market__place__container__cards__wrapper">
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
        <NFTMarketPlaceCard />
      </div>
    </div>
  );
}
