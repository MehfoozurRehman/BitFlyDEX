import React from "react";

function POSICard() {
  return (
    <div className="decentralized__trading__locked__value__card__sub__card">
      <div className="decentralized__trading__locked__value__card__sub__card__left">
        <div className="decentralized__trading__locked__value__card__sub__card__left__heading">
          POSI Balance
        </div>
        <div className="decentralized__trading__locked__value__card__sub__card__left__count">
          _ _
        </div>
        <div className="decentralized__trading__locked__value__card__sub__card__left__price">
          ~$0.000
        </div>
      </div>
      <div className="decentralized__trading__locked__value__card__sub__card__right">
        <a
          href=""
          className="decentralized__trading__locked__value__card__sub__card__right__svg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.504"
            height="20.504"
            viewBox="0 0 20.504 20.504"
          >
            <g
              id="Icon_feather-download"
              data-name="Icon feather-download"
              transform="translate(-3 -3)"
            >
              <path
                id="Path_151"
                data-name="Path 151"
                d="M22,22.5v3.89a1.945,1.945,0,0,1-1.945,1.945H6.445A1.945,1.945,0,0,1,4.5,26.39V22.5"
                transform="translate(0 -6.33)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
              <path
                id="Path_152"
                data-name="Path 152"
                d="M10.5,15l4.862,4.862L20.225,15"
                transform="translate(-2.11 -3.693)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
              <path
                id="Path_153"
                data-name="Path 153"
                d="M18,16.17V4.5"
                transform="translate(-4.748)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

function POSICardEntry({ title, price }) {
  return (
    <div className="decentralized__trading__main__container__footer__col">
      <div className="decentralized__trading__main__container__footer__col__entry__para">
        {title}
        <div className="decentralized__trading__main__container__footer__col__entry__para__svg__wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.381"
            height="25.381"
            viewBox="0 0 25.381 25.381"
          >
            <g
              id="Icon_ionic-md-information-circle-outline"
              data-name="Icon ionic-md-information-circle-outline"
              transform="translate(-3.375 -3.375)"
              opacity="0.38"
            >
              <path
                id="Path_149"
                data-name="Path 149"
                d="M16.065,5.937A10.124,10.124,0,1,1,8.9,8.9a10.086,10.086,0,0,1,7.163-2.965m0-2.562a12.69,12.69,0,1,0,12.69,12.69,12.688,12.688,0,0,0-12.69-12.69Z"
                fill="#fff"
              />
              <path
                id="Path_150"
                data-name="Path 150"
                d="M19.086,23.378H16.523V15.751h2.562Zm0-10.128H16.523V10.688h2.562Z"
                transform="translate(-1.739 -0.967)"
                fill="#fff"
              />
            </g>
          </svg>
          <div className="decentralized__trading__main__container__footer__col__entry__para__svg__wrapper__on__hover">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptatem possimus omnis nobis tempore.
          </div>
        </div>
      </div>
      <div className="decentralized__trading__main__container__footer__col__entry__heading">
        {price}
      </div>
    </div>
  );
}

export default function DecentralizedTrading() {
  return (
    <div className="decentralized__trading__main__container">
      <div className="decentralized__trading__main__container__heading">
        The Next-Gen Decentralized Trading Protocol with its own Ecosystem .
      </div>
      <div className="decentralized__trading__main__container__para">
        Farm, Stake with high yield, Cast, Buy and Sell NFTs, Participate in
        Governance and Trade on-chain Derivatives.
      </div>
      <div className="decentralized__trading__locked__value__card">
        <div className="decentralized__trading__locked__value__card__header">
          <div className="decentralized__trading__locked__value__card__header__left">
            <div className="decentralized__trading__locked__value__card__header__left__sub__heading">
              Total Value Locked
            </div>
            <div className="decentralized__trading__locked__value__card__header__left__heading">
              $76,709,483.41
            </div>
          </div>
          <div className="decentralized__trading__locked__value__card__header__center">
            <POSICard />
          </div>
          <div className="decentralized__trading__locked__value__card__header__right">
            <POSICard />
          </div>
        </div>
        <div className="decentralized__trading__main__container__divider"></div>
        <div className="decentralized__trading__main__container__footer">
          <POSICardEntry title="POSI Holders" price="372,072" />
          <POSICardEntry title="Circulating Supply" price="372,072,957.91" />
          <POSICardEntry title="Pending Rewards" price="$85,980.71" />
          <POSICardEntry
            title="Total RFI redistributions"
            price="$5,741,410.71"
          />
          <POSICardEntry title="Total Buyback & burn" price="Coming Soon" />
        </div>
      </div>
    </div>
  );
}
