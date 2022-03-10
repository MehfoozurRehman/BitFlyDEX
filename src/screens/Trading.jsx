import React from "react";
import Graph from "../components/Graph";

export default function Trading() {
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
        <div className="trading__main__container__content__right"></div>
      </div>
    </div>
  );
}
