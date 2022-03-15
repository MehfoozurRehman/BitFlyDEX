import React from "react";

export default function SelectInput({ placeholder, style }) {
  return (
    <>
      <input
        list="ice-cream-flavors"
        id="ice-cream-choice"
        name="ice-cream-choice"
        placeholder={placeholder}
        style={style}
        className="stack__calculation__container__card__input start__trading__popup__container__content__header__input "
      />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
      </datalist>
    </>
  );
}
