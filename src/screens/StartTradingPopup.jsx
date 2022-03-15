import React from "react";
import { X } from "react-feather";

export default function StartTradingPopup({ setIsStartTrading }) {
  return (
    <div className="start__trading__popup__container">
      <div className="start__trading__popup__container__content">
        <button
          onClick={() => {
            setIsStartTrading(false);
          }}
          className="start__trading__popup__container__content__header__btn"
        >
          <X width={20} height={20} />
        </button>

        <div className="start__trading__popup__container__content__heading">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy ad ada adfa
        </div>
        <div className="start__trading__popup__container__content__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit cum
          inventore quod sed autem ullam assumenda, perspiciatis sunt tenetur
          repudiandae iusto possimus veniam, sequi recusandae neque. Qui eaque
          omnis, dolore pariatur magni laborum totam. Quaerat repudiandae ut
          error maxime quos! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit cum inventore quod sed autem ullam assumenda,
          perspiciatis sunt tenetur repudiandae iusto possimus veniam, sequi
          recusandae neque. Qui eaque omnis, dolore pariatur magni laborum
          totam. Quaerat repudiandae ut error maxime quos!
        </div>
        <div className="start__trading__popup__container__content__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          placeat in odit repellendus voluptate accusantium? Quam rem odit
          repellendus provident! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Earum placeat in odit repellendus voluptate
          accusantium? Quam rem odit repellendus provident! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Earum placeat in odit
          repellendus voluptate accusantium? Quam rem odit repellendus
          provident!
        </div>
        <div class="form-group">
          <input type="checkbox" id="html" />
          <label for="html">Lorem ipsum dolor sit amet, consetetur </label>
        </div>
        <div className="start__trading__popup__container__content__btn__wrapper">
          <button
            onClick={() => {
              setIsStartTrading(false);
            }}
            className="home__jumbotron__right__buttons__button home__jumbotron__right__buttons__button__primary"
          >
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
}
