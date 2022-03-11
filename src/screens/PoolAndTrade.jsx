import React, { useState } from "react";
import Graph from "../components/Graph";
import busdCardPic from "../assets/busdCardPic.png";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  const units = ["%"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 100 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 100;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return value.toFixed(1);
}

function PoolCard() {
  return (
    <div className="trading__main__container__content__right__card__main__pool">
      <div className="trading__main__container__content__right__card__main__pool__heading">
        Pooled
      </div>
      <PoolSubCard />
      <PoolSubCard />
    </div>
  );
}
function PoolSubCard() {
  return (
    <div className="trading__main__container__content__right__card__pool">
      <div className="decentralized__trading__sub__cards__wrapper__right__bottom__card__wrapper__card__left">
        <img
          src={busdCardPic}
          alt="busdCardPic"
          className="trading__main__container__content__right__card__pool__img"
        />
        <div className="decentralized__trading__sub__cards__wrapper__right__bottom__card__wrapper__card__left__content">
          <div className="trading__main__container__content__right__card__pool__heading">
            POSI-BUSD
          </div>
          <div className="trading__main__container__content__right__card__pool__sub__heading">
            11,427,182.933 BUSD
          </div>
          <div className="trading__main__container__content__right__card__pool__para">
            ~$11,430,611.088
          </div>
        </div>
      </div>
      <button className="trading__main__container__content__right__card__pool__btn">
        CHART HOLDER
      </button>
    </div>
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

function BuyAndSell() {
  const [selected, setSelected] = useState("Buy");
  return (
    <div className="trading__main__container__buy__and__sell__card">
      <div className="trading__main__container__buy__and__sell__card__header">
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
      <div className="trading__main__container__buy__and__sell__card__heading__wrapper">
        <div className="trading__main__container__buy__and__sell__card__heading__wrapper__entry">
          Amount
        </div>
        <div className="trading__main__container__buy__and__sell__card__heading__wrapper__entry">
          AVAILIBLE 0
        </div>
      </div>
      <div className="trading__main__container__buy__and__sell__card__input__wrapper">
        <input
          type="number"
          placeholder="0.0"
          className="trading__main__container__buy__and__sell__card__input"
        />
      </div>
      <div className="trading__main__container__buy__and__sell__card__heading__wrapper">
        <div className="trading__main__container__buy__and__sell__card__heading__wrapper__entry">
          Minimum Recieved
        </div>
        <div className="trading__main__container__buy__and__sell__card__heading__wrapper__entry">
          0
        </div>
      </div>
      <div className="trading__main__container__buy__and__sell__card__footer">
        <div className="trading__main__container__buy__and__sell__card__footer__entry">
          10%
        </div>
        <div className="trading__main__container__buy__and__sell__card__footer__entry">
          20%
        </div>
        <div className="trading__main__container__buy__and__sell__card__footer__entry">
          50%
        </div>
        <div className="trading__main__container__buy__and__sell__card__footer__entry">
          70%
        </div>
        <div className="trading__main__container__buy__and__sell__card__footer__entry">
          100%
        </div>
      </div>
      <button className="trading__main__container__buy__and__sell__card__btn">
        Connect Wallet
      </button>
    </div>
  );
}

function AssetsCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <div className="trading__main__container__content__assets__card">
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Rate
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          -
        </div>
      </div>
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Inverse Rate
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          -
        </div>
      </div>
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Price Impact
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          -
        </div>
      </div>
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Price Impact
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          -
        </div>
      </div>
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Gwei
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          Fast : Gwei 5
        </div>
      </div>
      <div className="trading__main__container__content__assets__card__col">
        <Slider
          value={value}
          min={0}
          step={1}
          max={100}
          scale={calculateValue}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Liquidity Provider Fee
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          -
        </div>
      </div>{" "}
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Estimate Network Fee
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          - BNB
        </div>
      </div>{" "}
      <div className="trading__main__container__content__assets__card__col">
        <div className="trading__main__container__content__assets__card__col__entry">
          Via PancakeSwap
        </div>
        <div className="trading__main__container__content__assets__card__col__entry">
          ~$0.000
        </div>
      </div>
    </div>
  );
}

function TradeCardData() {
  return (
    <div className="trading__main__container__content__btc__usd__card__row">
      <div className="trading__main__container__content__btc__usd__card__row__entry">
        Sell
      </div>
      <div className="trading__main__container__content__btc__usd__card__row__entry">
        77.460 <span>POSI</span>
      </div>
      <div className="trading__main__container__content__btc__usd__card__row__entry">
        $142.900
        <span>0.389 BNB</span>
      </div>
      <div className="trading__main__container__content__btc__usd__card__row__entry">
        1.845
        <span>Pc v2 </span>
      </div>
      <div className="trading__main__container__content__btc__usd__card__row__entry">
        07:50
        <span>AM</span>
      </div>
      <div className="trading__main__container__content__btc__usd__card__row__entry">
        0xc...518
      </div>
    </div>
  );
}

function SearchCoin() {
  return (
    <div className="trading__main__container__content__search__coin__card">
      <div className="trading__main__container__buy__and__sell__card__input__wrapper">
        <input
          type="text"
          placeholder="Search Coin"
          className="trading__main__container__buy__and__sell__card__input"
        />
      </div>
      <div className="trading__main__container__content__search__coin__card__para">
        <span>
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
            class="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
        ICE
      </div>
      <div className="trading__main__container__content__search__coin__card__para">
        <span>
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
            class="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
        LMT
      </div>
      <div className="trading__main__container__content__search__coin__card__para">
        <span>
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
            class="feather feather-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
        FRONT
      </div>
    </div>
  );
}

export default function PoolAndTrade() {
  return (
    <div className="trading__main__container">
      <div className="trading__main__container__content">
        <div className="trading__main__container__content__btc__usd__card">
          <div className="trading__main__container__content__btc__usd__card__heading">
            BTCBUSD
          </div>
          <div className="trading__main__container__content__btc__usd__card__entry__container">
            <div className="trading__main__container__content__btc__usd__card__entry__wrapper">
              <div className="trading__main__container__content__btc__usd__card__entry">
                24h change %
              </div>
              <div className="trading__main__container__content__btc__usd__card__entry">
                00%
              </div>
            </div>
            <div className="trading__main__container__content__btc__usd__card__entry__wrapper">
              <div className="trading__main__container__content__btc__usd__card__entry">
                24h high
              </div>
              <div className="trading__main__container__content__btc__usd__card__entry">
                00%
              </div>
            </div>
            <div className="trading__main__container__content__btc__usd__card__entry__wrapper">
              <div className="trading__main__container__content__btc__usd__card__entry">
                24h low
              </div>
              <div className="trading__main__container__content__btc__usd__card__entry">
                00%
              </div>
            </div>
            <div className="trading__main__container__content__btc__usd__card__entry__wrapper">
              <div className="trading__main__container__content__btc__usd__card__entry">
                24h turnover(BUSD)
              </div>
              <div className="trading__main__container__content__btc__usd__card__entry">
                00%
              </div>
            </div>
            <div className="trading__main__container__content__btc__usd__card__entry__wrapper">
              <div className="trading__main__container__content__btc__usd__card__entry">
                Funding rate/ Countdown
              </div>
              <div className="trading__main__container__content__btc__usd__card__entry">
                00%
              </div>
            </div>
            <div className="trading__main__container__content__btc__usd__card__entry__wrapper">
              <div className="trading__main__container__content__btc__usd__card__entry">
                Funding rate/ Countdown
              </div>
              <div className="trading__main__container__content__btc__usd__card__entry">
                00%
              </div>
            </div>
          </div>
          <div className="trading__main__container__content__graph">
            <Graph />
          </div>
        </div>
        <div className="trading__main__container__content__right">
          <PoolCard />
          <BuyAndSell />
        </div>
      </div>
      <div className="trading__main__container__content">
        <div className="trading__main__container__content__btc__usd__card ">
          <div className="trading__main__container__content__btc__usd__card__content__heading">
            Trade
          </div>
          <div className="trading__main__container__content__btc__usd__card__headings__row">
            <div className="trading__main__container__content__btc__usd__card__headings__row__entry">
              ACTIONS
            </div>
            <div className="trading__main__container__content__btc__usd__card__headings__row__entry">
              TOKENS
            </div>
            <div className="trading__main__container__content__btc__usd__card__headings__row__entry">
              Size
            </div>
            <div className="trading__main__container__content__btc__usd__card__headings__row__entry">
              Price
            </div>
            <div className="trading__main__container__content__btc__usd__card__headings__row__entry">
              Time
            </div>
            <div className="trading__main__container__content__btc__usd__card__headings__row__entry">
              Tx
            </div>
          </div>
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
          <TradeCardData />
        </div>
        <div className="trading__main__container__content__right">
          <AssetsCard />
          <SearchCoin />
        </div>
      </div>
    </div>
  );
}
