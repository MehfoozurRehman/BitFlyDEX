import React from "react";
import tokenomicsPic from "../assets/tokenomicsPic.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import tokenimicsSvg1 from "../assets/tokenimicsSvgs/tokenimicsSvg1.png";
import tokenimicsSvg2 from "../assets/tokenimicsSvgs/tokenimicsSvg2.png";
import tokenimicsSvg3 from "../assets/tokenimicsSvgs/tokenimicsSvg3.png";
import tokenimicsSvg4 from "../assets/tokenimicsSvgs/tokenimicsSvg4.png";
import tokenimicsSvg5 from "../assets/tokenimicsSvgs/tokenimicsSvg5.png";
import tokenimicsSvg6 from "../assets/tokenimicsSvgs/tokenimicsSvg6.png";
import tokenimicsSvg7 from "../assets/tokenimicsSvgs/tokenimicsSvg7.png";
import tokenimicsSvg8 from "../assets/tokenimicsSvgs/tokenimicsSvg8.png";

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

function TokenomicsCard({ title, svg }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <div className="tokenomics__container__card">
      <div className="tokenomics__container__card__left">
        <div className="tokenomics__container__card__left__btn">
          <img
            src={svg}
            alt="tokenimicsSvg1"
            className="tokenomics__container__card__left__btn__img"
          />
          {title}
        </div>
      </div>
      <div className="tokenomics__container__card__center">
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
      <div className="tokenomics__container__card__right">
        <Typography id="non-linear-slider" gutterBottom>
          {valueLabelFormat(calculateValue(value))}
        </Typography>
      </div>
    </div>
  );
}
export default function Tokenomics() {
  return (
    <div className="tokenomics__container">
      <div className="tokenomics__container__heading">BFD Tokenomics</div>
      <img
        src={tokenomicsPic}
        alt="tokenomicsPic"
        className="tokenomics__container__img"
      />
      <TokenomicsCard title="COMMUNITY" svg={tokenimicsSvg1} />
      <TokenomicsCard title="TEAM & INVESTORS" svg={tokenimicsSvg2} />
      <TokenomicsCard title="FARMING & STAKING" svg={tokenimicsSvg3} />
      <TokenomicsCard title="BONDS & FD" svg={tokenimicsSvg4} />
      <TokenomicsCard title="WINNING POOLS" svg={tokenimicsSvg5} />
      <TokenomicsCard title="AIR DROPS" svg={tokenimicsSvg6} />
      <TokenomicsCard title="PROMOTION" svg={tokenimicsSvg7} />
      <TokenomicsCard title="CHARITY" svg={tokenimicsSvg8} />
    </div>
  );
}
