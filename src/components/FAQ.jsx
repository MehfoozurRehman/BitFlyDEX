import React, { useState } from "react";
import "animate.css";

export default function FAQ() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  return (
    <>
      {isFAQOpen ? (
        <>
          <button
            onClick={() => {
              setIsFAQOpen(false);
            }}
            className="faq__section__content__card"
          >
            <div className="faq__section__content__card__header">
              <div className="faq__section__content__card__heading">
                How does staking work?
              </div>
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
                class="feather feather-chevron-up"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>
            <div className="faq__section__content__card__paragraph animate__animated  animate__fadeInDown">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              enim eius earum animi exercitationem deleniti amet, quis nam
              ratione ex aspernatur placeat? Excepturi repudiandae adipisci vel
              dolor quas accusantium, optio iusto magnam voluptatibus,
              asperiores beatae. Vitae enim eius earum animi exercitationem
              deleniti amet, quis nam ratione ex aspernatur placeat? Excepturi
              repudiandae adipisci vel dolor quas accusantium, optio iusto
              magnam voluptatibus, asperiores beatae. earum animi exercitationem
              deleniti amet, quis nam ratione ex aspernatur placeat? Excepturi
              repudiandae adipisci vel dolor quas accusantium, optio iusto
              magnam voluptatibus, asperiores beatae.
            </div>
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsFAQOpen(true);
          }}
          className="faq__section__content__card"
        >
          <div className="faq__section__content__card__header">
            <div className="faq__section__content__card__heading">
              How does staking work?
            </div>
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
          </div>
        </button>
      )}
    </>
  );
}
