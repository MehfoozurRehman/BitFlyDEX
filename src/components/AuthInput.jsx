import React from "react";

export default function AuthInput({ type, placeholder, onChange }) {
  return (
    <div className="get__started__form__input__wrapper">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="get__started__form__input"
      />
    </div>
  );
}
