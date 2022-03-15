import React from "react";
import { Link } from "react-router-dom";
import nftPic from "../assets/nftPic.png";

function NFTCard() {
  return (
    <Link
      to="/nft-market-place"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="nft__card__primary"
    >
      <div className="nft__card__img__wrapper">
        <img src={nftPic} alt="nftPic" className="nft__card__img" />
      </div>
      <div className="nft__card__heading">Boring Ape</div>
      <div className="nft__card__para">
        Each time you participate in the auction, you need to increase the price
        by 10%
      </div>
    </Link>
  );
}

export default function NFT({ setIsTransferNFT }) {
  return (
    <div className="nft__container">
      <div className="nft__container__content">
        <div className="nft__container__content__left">
          <div className="nft__container__content__left__charactors__card">
            <div className="nft__container__content__left__charactors__card__heading">
              All NFTs Characters
            </div>
            <div className="nft__container__content__left__charactors__card__content">
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
            </div>
          </div>
        </div>
        <div className="nft__container__content__right">
          <div className="nft__container__content__left__casted__nft__connect__wallet__card">
            <div className="nft__container__content__left__casted__nft__card__heading">
              Cast NFT
            </div>
            <div className="nft__container__content__left__casted__nft__connect__wallet__para">
              Position Exchange is building a new NFT Protocol and introducing
              Crypto NFTs as a new feature. Users can mint NFTs with unique
              characteristics and different rarities(by depositing POSI tokens)
              then stake it in the NFT Pools to generate rewards. Issue, trade
              NFTs and participate in auctions!
            </div>
            <div className="stack__calculation__container__card__input__container">
              <div className="stack__calculation__container__card__input__container__heading">
                Available balance
              </div>
              <div className="stack__calculation__container__card__input__container__wrapper">
                <input
                  type="number"
                  placeholder="0.0"
                  className="stack__calculation__container__card__input"
                />
              </div>
            </div>
            <div className="stack__calculation__container__card__input__container">
              <div className="stack__calculation__container__card__input__container__heading">
                POSIpar value
              </div>
              <div className="stack__calculation__container__card__input__container__wrapper">
                <input
                  type="number"
                  placeholder="0.0"
                  className="stack__calculation__container__card__input"
                />
              </div>
            </div>
            <Link
              style={{ marginTop: "2em" }}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/connect-wallet"
              className="home__jumbotron__right__buttons__button home__jumbotron__right__buttons__button__primary"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
        <div className="nft__container__content__left__casted__nft__card">
          <div className="nft__container__content__left__casted__nft__card__header">
            <div className="nft__container__content__left__casted__nft__card__heading">
              MY NFTs
              <div className="nft__container__content__left__casted__nft__card__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <g
                    id="Icon_feather-grid"
                    data-name="Icon feather-grid"
                    transform="translate(-3 -3)"
                  >
                    <path
                      id="Path_613"
                      data-name="Path 613"
                      d="M4.5,4.5H15V15H4.5Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_614"
                      data-name="Path 614"
                      d="M21,4.5H31.5V15H21Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_615"
                      data-name="Path 615"
                      d="M21,21H31.5V31.5H21Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_616"
                      data-name="Path 616"
                      d="M4.5,21H15V31.5H4.5Z"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </div>
              <div className="nft__container__content__left__casted__nft__card__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="29.25"
                  viewBox="0 0 36 29.25"
                >
                  <path
                    id="Icon_awesome-list-ul"
                    data-name="Icon awesome-list-ul"
                    d="M3.375,3.375A3.375,3.375,0,1,0,6.75,6.75,3.375,3.375,0,0,0,3.375,3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,18a3.375,3.375,0,0,0-3.375-3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,29.25a3.375,3.375,0,0,0-3.375-3.375ZM34.875,27h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25A1.125,1.125,0,0,0,12.375,31.5h22.5A1.125,1.125,0,0,0,36,30.375v-2.25A1.125,1.125,0,0,0,34.875,27Zm0-22.5h-22.5A1.125,1.125,0,0,0,11.25,5.625v2.25A1.125,1.125,0,0,0,12.375,9h22.5A1.125,1.125,0,0,0,36,7.875V5.625A1.125,1.125,0,0,0,34.875,4.5Zm0,11.25h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25a1.125,1.125,0,0,0,1.125,1.125h22.5A1.125,1.125,0,0,0,36,19.125v-2.25A1.125,1.125,0,0,0,34.875,15.75Z"
                    transform="translate(0 -3.375)"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
            <button
              onClick={() => {
                setIsTransferNFT(true);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="nft__container__content__left__casted__nft__card__right"
            >
              Tranfer NFT
            </button>
          </div>

          <div className="nft__container__content__left__casted__nft__card__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="147"
              height="140"
              viewBox="0 0 147 140"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_338"
                    data-name="Rectangle 338"
                    width="147"
                    height="140"
                    transform="translate(0.472 -0.105)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="no-data"
                transform="translate(-0.472 0.105)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_507"
                  data-name="Path 507"
                  d="M87.374,135.908l-46.056-8.759a13.139,13.139,0,0,1-10.455-15.33l15.16-79.2a13.169,13.169,0,0,1,15.37-10.428l46.056,8.76A13.138,13.138,0,0,1,117.9,46.278l-15.161,79.2A13.142,13.142,0,0,1,87.374,135.908Z"
                  transform="translate(5.051 3.621)"
                  fill="#50586d"
                />
                <path
                  id="Path_508"
                  data-name="Path 508"
                  d="M92.014,124.889H45.174A13.2,13.2,0,0,1,32,111.749V31.14A13.2,13.2,0,0,1,45.174,18H92.066A13.2,13.2,0,0,1,105.24,31.14V111.8A13.237,13.237,0,0,1,92.014,124.889Z"
                  transform="translate(5.277 2.969)"
                  fill="#414658"
                />
                <path
                  id="Path_509"
                  data-name="Path 509"
                  d="M88.72,70.608H45.539a2.451,2.451,0,1,1,0-4.9H88.72a2.451,2.451,0,1,1,0,4.9Z"
                  transform="translate(7.105 10.836)"
                  fill="#707787"
                />
                <path
                  id="Path_510"
                  data-name="Path 510"
                  d="M88.72,82.111H45.539a2.451,2.451,0,1,1,0-4.9H88.72a2.451,2.451,0,1,1,0,4.9Z"
                  transform="translate(7.105 12.733)"
                  fill="#707787"
                />
                <path
                  id="Path_511"
                  data-name="Path 511"
                  d="M88.72,93.614H45.539a2.451,2.451,0,1,1,0-4.9H88.72a2.451,2.451,0,0,1,2.457,2.451A2.485,2.485,0,0,1,88.72,93.614Z"
                  transform="translate(7.105 14.63)"
                  fill="#707787"
                />
                <path
                  id="Path_512"
                  data-name="Path 512"
                  d="M65.268,61.085A13.713,13.713,0,1,0,51.52,47.372,13.731,13.731,0,0,0,65.268,61.085Z"
                  transform="translate(8.496 5.551)"
                  fill="#707787"
                />
                <path
                  id="Path_513"
                  data-name="Path 513"
                  d="M124,47l1.464,2.711,2.719,1.46-2.719,1.512L124,55.34l-1.463-2.659-2.719-1.512,2.719-1.46Z"
                  transform="translate(19.76 7.751)"
                  fill="#707787"
                />
                <path
                  id="Path_514"
                  data-name="Path 514"
                  d="M83.277.448l1.2,2.19,2.2,1.2-2.2,1.2-1.2,2.19-1.2-2.19-2.2-1.2,2.2-1.2Z"
                  transform="translate(13.173 0.074)"
                  fill="none"
                  stroke="#707787"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
                <path
                  id="Path_515"
                  data-name="Path 515"
                  d="M3.921,61.768l1.411,2.555,2.509,1.356L5.332,67.086l-1.411,2.5-1.411-2.5L0,65.679l2.509-1.356Z"
                  transform="translate(0 10.187)"
                  fill="#707787"
                />
                <path
                  id="Path_516"
                  data-name="Path 516"
                  d="M81.764,21.4H49.875a2.868,2.868,0,1,1,0-5.735H81.764a2.9,2.9,0,0,1,2.875,2.868A2.863,2.863,0,0,1,81.764,21.4Z"
                  transform="translate(7.751 2.584)"
                  fill="#707787"
                />
                <path
                  id="Path_517"
                  data-name="Path 517"
                  d="M109.91,98.4a3.546,3.546,0,1,0-3.555-3.546A3.551,3.551,0,0,0,109.91,98.4Z"
                  transform="translate(17.54 15.058)"
                  fill="none"
                  stroke="#707787"
                  stroke-miterlimit="10"
                  stroke-width="1"
                  stroke-dasharray="1.01 1.01"
                />
                <path
                  id="Path_518"
                  data-name="Path 518"
                  d="M18.666,100.343a2.5,2.5,0,1,0-2.509-2.5A2.506,2.506,0,0,0,18.666,100.343Z"
                  transform="translate(2.664 15.723)"
                  fill="#707787"
                />
                <path
                  id="Path_519"
                  data-name="Path 519"
                  d="M20.153,39.976a2.868,2.868,0,1,0-2.875-2.868A2.872,2.872,0,0,0,20.153,39.976Z"
                  transform="translate(2.849 5.647)"
                  fill="none"
                  stroke="#707787"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </svg>
            <div className="trading__main__container__content__btc__usd__card__content__heading">
              No Records Found
            </div>
            <div className="trading__main__container__content__btc__usd__card__content__para">
              There is nothing here!
            </div>
          </div>
        </div>
        <div className="nft__container__content__left__casted__nft__card">
          <div className="nft__container__content__left__casted__nft__card__heading">
            Casted NFTs History
            <div className="nft__container__content__left__casted__nft__card__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <g
                  id="Icon_feather-grid"
                  data-name="Icon feather-grid"
                  transform="translate(-3 -3)"
                >
                  <path
                    id="Path_613"
                    data-name="Path 613"
                    d="M4.5,4.5H15V15H4.5Z"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_614"
                    data-name="Path 614"
                    d="M21,4.5H31.5V15H21Z"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_615"
                    data-name="Path 615"
                    d="M21,21H31.5V31.5H21Z"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_616"
                    data-name="Path 616"
                    d="M4.5,21H15V31.5H4.5Z"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>
            <div className="nft__container__content__left__casted__nft__card__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="29.25"
                viewBox="0 0 36 29.25"
              >
                <path
                  id="Icon_awesome-list-ul"
                  data-name="Icon awesome-list-ul"
                  d="M3.375,3.375A3.375,3.375,0,1,0,6.75,6.75,3.375,3.375,0,0,0,3.375,3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,18a3.375,3.375,0,0,0-3.375-3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,29.25a3.375,3.375,0,0,0-3.375-3.375ZM34.875,27h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25A1.125,1.125,0,0,0,12.375,31.5h22.5A1.125,1.125,0,0,0,36,30.375v-2.25A1.125,1.125,0,0,0,34.875,27Zm0-22.5h-22.5A1.125,1.125,0,0,0,11.25,5.625v2.25A1.125,1.125,0,0,0,12.375,9h22.5A1.125,1.125,0,0,0,36,7.875V5.625A1.125,1.125,0,0,0,34.875,4.5Zm0,11.25h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25a1.125,1.125,0,0,0,1.125,1.125h22.5A1.125,1.125,0,0,0,36,19.125v-2.25A1.125,1.125,0,0,0,34.875,15.75Z"
                  transform="translate(0 -3.375)"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div className="nft__container__content__left__casted__nft__card__content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="147"
              height="140"
              viewBox="0 0 147 140"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_338"
                    data-name="Rectangle 338"
                    width="147"
                    height="140"
                    transform="translate(0.472 -0.105)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="no-data"
                transform="translate(-0.472 0.105)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_507"
                  data-name="Path 507"
                  d="M87.374,135.908l-46.056-8.759a13.139,13.139,0,0,1-10.455-15.33l15.16-79.2a13.169,13.169,0,0,1,15.37-10.428l46.056,8.76A13.138,13.138,0,0,1,117.9,46.278l-15.161,79.2A13.142,13.142,0,0,1,87.374,135.908Z"
                  transform="translate(5.051 3.621)"
                  fill="#50586d"
                />
                <path
                  id="Path_508"
                  data-name="Path 508"
                  d="M92.014,124.889H45.174A13.2,13.2,0,0,1,32,111.749V31.14A13.2,13.2,0,0,1,45.174,18H92.066A13.2,13.2,0,0,1,105.24,31.14V111.8A13.237,13.237,0,0,1,92.014,124.889Z"
                  transform="translate(5.277 2.969)"
                  fill="#414658"
                />
                <path
                  id="Path_509"
                  data-name="Path 509"
                  d="M88.72,70.608H45.539a2.451,2.451,0,1,1,0-4.9H88.72a2.451,2.451,0,1,1,0,4.9Z"
                  transform="translate(7.105 10.836)"
                  fill="#707787"
                />
                <path
                  id="Path_510"
                  data-name="Path 510"
                  d="M88.72,82.111H45.539a2.451,2.451,0,1,1,0-4.9H88.72a2.451,2.451,0,1,1,0,4.9Z"
                  transform="translate(7.105 12.733)"
                  fill="#707787"
                />
                <path
                  id="Path_511"
                  data-name="Path 511"
                  d="M88.72,93.614H45.539a2.451,2.451,0,1,1,0-4.9H88.72a2.451,2.451,0,0,1,2.457,2.451A2.485,2.485,0,0,1,88.72,93.614Z"
                  transform="translate(7.105 14.63)"
                  fill="#707787"
                />
                <path
                  id="Path_512"
                  data-name="Path 512"
                  d="M65.268,61.085A13.713,13.713,0,1,0,51.52,47.372,13.731,13.731,0,0,0,65.268,61.085Z"
                  transform="translate(8.496 5.551)"
                  fill="#707787"
                />
                <path
                  id="Path_513"
                  data-name="Path 513"
                  d="M124,47l1.464,2.711,2.719,1.46-2.719,1.512L124,55.34l-1.463-2.659-2.719-1.512,2.719-1.46Z"
                  transform="translate(19.76 7.751)"
                  fill="#707787"
                />
                <path
                  id="Path_514"
                  data-name="Path 514"
                  d="M83.277.448l1.2,2.19,2.2,1.2-2.2,1.2-1.2,2.19-1.2-2.19-2.2-1.2,2.2-1.2Z"
                  transform="translate(13.173 0.074)"
                  fill="none"
                  stroke="#707787"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
                <path
                  id="Path_515"
                  data-name="Path 515"
                  d="M3.921,61.768l1.411,2.555,2.509,1.356L5.332,67.086l-1.411,2.5-1.411-2.5L0,65.679l2.509-1.356Z"
                  transform="translate(0 10.187)"
                  fill="#707787"
                />
                <path
                  id="Path_516"
                  data-name="Path 516"
                  d="M81.764,21.4H49.875a2.868,2.868,0,1,1,0-5.735H81.764a2.9,2.9,0,0,1,2.875,2.868A2.863,2.863,0,0,1,81.764,21.4Z"
                  transform="translate(7.751 2.584)"
                  fill="#707787"
                />
                <path
                  id="Path_517"
                  data-name="Path 517"
                  d="M109.91,98.4a3.546,3.546,0,1,0-3.555-3.546A3.551,3.551,0,0,0,109.91,98.4Z"
                  transform="translate(17.54 15.058)"
                  fill="none"
                  stroke="#707787"
                  stroke-miterlimit="10"
                  stroke-width="1"
                  stroke-dasharray="1.01 1.01"
                />
                <path
                  id="Path_518"
                  data-name="Path 518"
                  d="M18.666,100.343a2.5,2.5,0,1,0-2.509-2.5A2.506,2.506,0,0,0,18.666,100.343Z"
                  transform="translate(2.664 15.723)"
                  fill="#707787"
                />
                <path
                  id="Path_519"
                  data-name="Path 519"
                  d="M20.153,39.976a2.868,2.868,0,1,0-2.875-2.868A2.872,2.872,0,0,0,20.153,39.976Z"
                  transform="translate(2.849 5.647)"
                  fill="none"
                  stroke="#707787"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </svg>
            <div className="trading__main__container__content__btc__usd__card__content__heading">
              No Records Found
            </div>
            <div className="trading__main__container__content__btc__usd__card__content__para">
              There is nothing here!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
