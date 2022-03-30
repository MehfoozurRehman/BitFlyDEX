import React, { useEffect, useState } from "react";
import docsPic from "../assets/docsPic.jpg";

function DocsContentSection() {
  return (
    <>
      <div className="docs__content__section__heading">Lorem ipsum dolor</div>
      <div className="docs__content__section__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum
        nihil fuga quibusdam dignissimos repellat voluptatum deleniti autem.
        Eligendi vel, quibusdam, facilis culpa harum molestiae repellat
        cupiditate voluptatum ad nisi, asperiores exercitationem atque? Id
        doloremque dolores dicta velit at voluptate. Molestiae aspernatur
        numquam dolorem distinctio reprehenderit similique deleniti maxime
        doloribus, nulla nesciunt dicta ex tenetur adipisci praesentium illo
        asperiores, impedit repellendus ad laudantium aut mollitia quasi quos
        quaerat. Vero, tenetur esse ratione recusandae iste veniam. Fuga earum
        officiis explicabo eius libero veritatis, exercitationem officia
        corrupti voluptates nobis nam, odit iste consequuntur labore
        voluptatibus sequi est, quam soluta voluptas et? Quis provident dicta
        aut porro in quam, officia odit voluptatem, quisquam est quidem animi
        fugiat impedit eius omnis suscipit nihil saepe?
      </div>
      <div className="docs__content__section__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum
        nihil fuga quibusdam dignissimos repellat voluptatum deleniti autem.
        Eligendi vel, quibusdam, facilis culpa harum molestiae repellat
        cupiditate voluptatum ad nisi, asperiores exercitationem atque? Id
        doloremque dolores dicta velit at voluptate.
      </div>
      <div className="docs__content__section__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum
        nihil fuga quibusdam dignissimos repellat voluptatum deleniti autem.
        Eligendi vel, quibusdam, facilis culpa harum molestiae repellat
        cupiditate voluptatum ad nisi, asperiores exercitationem atque? Id
        doloremque dolores dicta velit at voluptate. Molestiae aspernatur
        numquam dolorem distinctio reprehenderit similique deleniti maxime
        doloribus, nulla nesciunt dicta ex tenetur adipisci praesentium illo
        asperiores, impedit repellendus ad laudantium aut mollitia quasi quos
        quaerat. Vero, tenetur esse ratione recusandae iste veniam.
      </div>
    </>
  );
}

function SideBarLink({ index }) {
  const [isOpen, setIsOpen] = useState(1);
  console.log(isOpen);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(index);
        }}
        className="docs__container__wrapper__sidebar__btn"
      >
        <div className="docs__container__wrapper__sidebar__btn__title">
          Lorem ipsum dolor sit amet
        </div>
        <div className="docs__container__wrapper__sidebar__btn__svg__animated">
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
            class="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </button>
      {isOpen === index ? (
        <>
          <button className="docs__container__wrapper__sidebar__btn__expand">
            Lorem ipsum, dolor sit amet consecte
          </button>
          <button className="docs__container__wrapper__sidebar__btn__expand">
            Lorem ipsum, dolor sit amet consecte
          </button>
          <button className="docs__container__wrapper__sidebar__btn__expand">
            Lorem ipsum, dolor sit amet consecte
          </button>
          <button className="docs__container__wrapper__sidebar__btn__expand">
            Lorem ipsum, dolor sit amet consecte
          </button>
          <button className="docs__container__wrapper__sidebar__btn__expand">
            Lorem ipsum, dolor sit amet consecte
          </button>
          <button className="docs__container__wrapper__sidebar__btn__expand">
            Lorem ipsum, dolor sit amet consecte
          </button>
        </>
      ) : (
        <>hello</>
      )}
    </>
  );
}

function SideBar() {
  const list = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
  ];
  return (
    <div className="docs__container__wrapper__sidebar">
      {list.map((item, i) => (
        <SideBarLink index={i} />
      ))}
    </div>
  );
}
function DocsContent() {
  return (
    <div className="docs__container__wrapper__content">
      <div className="docs__container__wrapper__content__heading">
        Lorem ipsum dolor
      </div>
      <div className="docs__container__wrapper__content__divider"></div>
      <div className="docs__container__wrapper__content__img__wrapper">
        <img
          src={docsPic}
          alt="docsPic"
          className="docs__container__wrapper__content__img__wrapper__img"
        />
      </div>
      <div className="docs__container__wrapper__content__divider"></div>
      <DocsContentSection />
      <DocsContentSection />
      <DocsContentSection />
      <div className="docs__container__wrapper__content__btn__wrapper">
        <button className="docs__container__wrapper__content__btn">
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
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <div className="docs__container__wrapper__content__btn__heading">
            <span> Previous</span>
            Getting Started
          </div>
        </button>
        <button className="docs__container__wrapper__content__btn">
          <div className="docs__container__wrapper__content__btn__heading">
            <span>Next</span>
            Getting Started
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
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
      <div className="docs__container__wrapper__content__footer">
        <div className="docs__container__wrapper__content__footer__entry">
          Lorem ipsum dolor sit amet,consetetur
        </div>
        <div className="docs__container__wrapper__content__footer__entry">
          Lorem ipsum dolor sit ?
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <g
                id="Group_592"
                data-name="Group 592"
                transform="translate(-1595 -2502)"
              >
                <circle
                  id="Ellipse_89"
                  data-name="Ellipse 89"
                  cx="18"
                  cy="18"
                  r="18"
                  transform="translate(1595 2502)"
                  fill="#e6e6e6"
                />
                <g
                  id="Group_587"
                  data-name="Group 587"
                  transform="translate(5.808 -1.293)"
                >
                  <path
                    id="Path_607"
                    data-name="Path 607"
                    d="M17316.777-2613s4.141,3.924,9.525,0"
                    transform="translate(-15721.584 5127.293)"
                    fill="none"
                    stroke="#010101"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_608"
                    data-name="Path 608"
                    d="M17316.777-2613s4.141,3.924,9.525,0"
                    transform="translate(-15706.517 5127.293)"
                    fill="none"
                    stroke="#010101"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_609"
                    data-name="Path 609"
                    d="M17316.777-2584.575s10.891-8.263,24.3,0"
                    transform="translate(-15721.584 5113.302)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <g
                id="Group_591"
                data-name="Group 591"
                transform="translate(-1649 -2502)"
              >
                <circle
                  id="Ellipse_90"
                  data-name="Ellipse 90"
                  cx="18"
                  cy="18"
                  r="18"
                  transform="translate(1649 2502)"
                  fill="#e6e6e6"
                />
                <g
                  id="Group_588"
                  data-name="Group 588"
                  transform="translate(1.5 -4.5)"
                >
                  <line
                    id="Line_42"
                    data-name="Line 42"
                    x2="10"
                    transform="translate(1653.5 2519.5)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_43"
                    data-name="Line 43"
                    x2="10"
                    transform="translate(1667.582 2519.5)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_44"
                    data-name="Line 44"
                    x2="24"
                    transform="translate(1653.5 2530.5)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <g
                id="Group_590"
                data-name="Group 590"
                transform="translate(-1703 -2502)"
              >
                <circle
                  id="Ellipse_91"
                  data-name="Ellipse 91"
                  cx="18"
                  cy="18"
                  r="18"
                  transform="translate(1703 2502)"
                  fill="#e6e6e6"
                />
                <g
                  id="Group_589"
                  data-name="Group 589"
                  transform="translate(-0.653 -3.244)"
                >
                  <path
                    id="Path_612"
                    data-name="Path 612"
                    d="M0,3.139s10.259-7.062,22.9,0"
                    transform="translate(1733.551 2529.286) rotate(180)"
                    fill="none"
                    stroke="#000"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_610"
                    data-name="Path 610"
                    d="M17445.943-2602.277s3.283-2.8,7.879,0"
                    transform="translate(-15735.014 5120.765)"
                    fill="none"
                    stroke="#030303"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_611"
                    data-name="Path 611"
                    d="M17445.943-2602.277s3.283-2.8,7.879,0"
                    transform="translate(-15720.271 5120.765)"
                    fill="none"
                    stroke="#030303"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Docs({ setIsDocs }) {
  useEffect(() => {
    setIsDocs(true);
  }, []);

  return (
    <div className="docs__container">
      <div className="docs__container__wrapper">
        <SideBar />
        <DocsContent />
      </div>
    </div>
  );
}
