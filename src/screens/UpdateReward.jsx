import React from "react";
import Slider from "@mui/material/Slider";

function VoteForCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <div className="list__of__vote__container__content__card">
      <div className="list__of__vote__container__content__card__header">
        <div className="list__of__vote__container__content__card__header__left">
          Vote For
        </div>
        <div className="list__of__vote__container__content__card__header__right">
          31,971.9155
        </div>
      </div>
      <div className="list__of__vote__container__content__card__range">
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
      <div className="list__of__vote__container__content__card__heading__row">
        <div className="list__of__vote__container__content__card__heading__row__entry">
          84 Addresses
        </div>
        <div className="list__of__vote__container__content__card__heading__row__entry">
          Hesh
        </div>
        <div className="list__of__vote__container__content__card__heading__row__entry">
          Vote
        </div>
      </div>
      <div className="list__of__vote__container__content__card__item__row">
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
      </div>
      <div className="list__of__vote__container__content__card__item__row">
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
      </div>
      <div className="list__of__vote__container__content__card__item__row">
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
      </div>
      <div className="list__of__vote__container__content__card__item__row">
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
      </div>
      <div className="list__of__vote__container__content__card__item__row">
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
        <div className="list__of__vote__container__content__card__item__row__entry">
          0xe5b...7096a1
        </div>
      </div>
    </div>
  );
}
function DetailCard() {
  return (
    <div className="list__of__vote__container__content__card">
      <div className="list__of__vote__container__content__card__heading">
        Detail
      </div>
      <div className="list__of__vote__container__content__card__para">
        The NFT APR Pool is approaching its reset time and it's time for the
        community to vote for the next NFT Pool APR. The NFT rewards pool weekly
        refill is back to its usual level. We propose the following and let the
        community decide:
      </div>
      <li className="list__of__vote__container__content__card__para">
        Adding 600k POSI as rewards to the NFT Pool for next week. This amount
        will favor NFT holders by providing an attractive APY and more
        incentives for long term investors.
      </li>
      <li className="list__of__vote__container__content__card__para">
        The quorum to pass the vote is set at 15k POSI. 100 POSI minimum are
        required to vote for this proposal (to ensure meeting the quorum)
      </li>
      <li className="list__of__vote__container__content__card__para">
        By participating and voting, you’ll receive 0.5 POSI. The final decision
        will be executed 20 hours after the voting is done.
      </li>
    </div>
  );
}
function PendingCard() {
  return (
    <div className="list__of__vote__container__content__card">
      <div className="list__of__vote__container__content__card__heading">
        Proposal History
      </div>
      <div className="list__of__vote__container__content__pending__card">
        <div className="list__of__vote__container__content__pending__card__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
          >
            <circle
              id="Ellipse_88"
              data-name="Ellipse 88"
              cx="15.5"
              cy="15.5"
              r="15.5"
              fill="#fff"
            />
          </svg>
          <div className="list__of__vote__container__content__pending__card__left__content">
            <div className="list__of__vote__container__content__pending__card__left__content__heading">
              Pending
            </div>
            <div className="list__of__vote__container__content__pending__card__left__content__para">
              18:28 PM 05/03/2022
            </div>
          </div>
        </div>
        <div className="list__of__vote__container__content__pending__card__right">
          <div className="list__of__vote__container__content__pending__card__right__btn">
            DETAIL
          </div>
        </div>
      </div>
      <div className="list__of__vote__container__content__pending__card">
        <div className="list__of__vote__container__content__pending__card__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
          >
            <circle
              id="Ellipse_88"
              data-name="Ellipse 88"
              cx="15.5"
              cy="15.5"
              r="15.5"
              fill="#fff"
            />
          </svg>
          <div className="list__of__vote__container__content__pending__card__left__content">
            <div className="list__of__vote__container__content__pending__card__left__content__heading">
              Pending
            </div>
            <div className="list__of__vote__container__content__pending__card__left__content__para">
              18:28 PM 05/03/2022
            </div>
          </div>
        </div>
        <div className="list__of__vote__container__content__pending__card__right">
          <div className="list__of__vote__container__content__pending__card__right__btn">
            DETAIL
          </div>
        </div>
      </div>
      <div className="list__of__vote__container__content__pending__card">
        <div className="list__of__vote__container__content__pending__card__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
          >
            <circle
              id="Ellipse_88"
              data-name="Ellipse 88"
              cx="15.5"
              cy="15.5"
              r="15.5"
              fill="#fff"
            />
          </svg>
          <div className="list__of__vote__container__content__pending__card__left__content">
            <div className="list__of__vote__container__content__pending__card__left__content__heading">
              Pending
            </div>
            <div className="list__of__vote__container__content__pending__card__left__content__para">
              18:28 PM 05/03/2022
            </div>
          </div>
        </div>
        <div className="list__of__vote__container__content__pending__card__right">
          <div className="list__of__vote__container__content__pending__card__right__btn">
            DETAIL
          </div>
        </div>
      </div>
      <div className="list__of__vote__container__content__pending__card">
        <div className="list__of__vote__container__content__pending__card__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
          >
            <circle
              id="Ellipse_88"
              data-name="Ellipse 88"
              cx="15.5"
              cy="15.5"
              r="15.5"
              fill="#fff"
            />
          </svg>
          <div className="list__of__vote__container__content__pending__card__left__content">
            <div className="list__of__vote__container__content__pending__card__left__content__heading">
              Pending
            </div>
            <div className="list__of__vote__container__content__pending__card__left__content__para">
              18:28 PM 05/03/2022
            </div>
          </div>
        </div>
        <div className="list__of__vote__container__content__pending__card__right">
          <div className="list__of__vote__container__content__pending__card__right__btn">
            DETAIL
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function UpdateReward() {
  return (
    <div className="update__reward__container">
      <div className="update__reward__container__card">
        <div className="vaults__main__container__card__content">
          <div className="vaults__main__container__card__content__left">
            <div className="vaults__main__container__card__content__left__heading">
              Update rewards for NFT Pool - 600,000 <br /> POSI for the next
              week
            </div>
            <div className="proposal__list__wrapper__item__left__bottom">
              <div className="proposal__list__wrapper__item__left__bottom__1">
                PASSED
              </div>
              <div className="proposal__list__wrapper__item__left__bottom__2">
                45
              </div>
              <div className="proposal__list__wrapper__item__left__bottom__3">
                00:48 AM 21/02/2022
              </div>
            </div>
          </div>
          <div className="vaults__main__container__card__content__right">
            <div className="update__reward__container__card__content__left__card">
              <svg
                id="Group_566"
                data-name="Group 566"
                xmlns="http://www.w3.org/2000/svg"
                width="44.655"
                height="47.44"
                viewBox="0 0 44.655 47.44"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M306.021,1295.376a11.475,11.475,0,0,1-11.535,11.389H276.749v-7.593h17.736a3.8,3.8,0,1,0,0-7.592H276.749v-7.593h11.82a3.8,3.8,0,1,0,0-7.591H272.9a3.824,3.824,0,0,0-3.846,3.8v32.255a3.846,3.846,0,0,1-7.691,0v-32.255A11.476,11.476,0,0,1,272.9,1268.8h15.666a11.476,11.476,0,0,1,11.535,11.389,11.181,11.181,0,0,1-1.043,4.731A11.4,11.4,0,0,1,306.021,1295.376Z"
                  transform="translate(-261.366 -1268.804)"
                  fill="#fff"
                />
              </svg>

              <div className="update__reward__container__card__content__left__card__content">
                <div className="update__reward__container__card__content__left__card__content__heading">
                  Posi Manager
                </div>
                <div className="update__reward__container__card__content__left__card__content__para">
                  0xa3772e9b69b58...d228aafde
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list__of__vote__container">
        <div className="list__of__vote__container__header">
          <div className="list__of__vote__container__header__heading">
            List of Votes{" "}
          </div>
          <div className="list__of__vote__container__header__right">
            <div className="list__of__vote__container__header__right__card">
              Total (Address)
              <span>85</span>
            </div>
            <div className="list__of__vote__container__header__right__card">
              For
              <span>85</span>
            </div>
            <div className="list__of__vote__container__header__right__card">
              Against
              <span>85</span>
            </div>
          </div>
        </div>
        <div className="list__of__vote__container__content">
          <VoteForCard />
          <VoteForCard />
        </div>
      </div>
      <div className="list__of__vote__container__content">
        <DetailCard />
        <PendingCard />
      </div>
    </div>
  );
}
