import React from "react";
import { Search, X } from "react-feather";
import { Link } from "react-router-dom";

function InvitePopupEntry({ title, svg, to }) {
  return (
    <Link
      onClick={() => {
        setIsInvite(false);
      }}
      to={to ? to : "/refer"}
      className="connect__wallet__popup__content__entry"
    >
      {svg}
      {title}
    </Link>
  );
}

export default function InvitePopup({ setIsInvite }) {
  return (
    <div className="start__trading__popup__container">
      <div className="connect__wallet__popup__content">
        <button
          onClick={() => {
            setIsInvite(false);
          }}
          className="start__trading__popup__container__content__header__btn"
        >
          <X width={16} height={16} />
        </button>
        <div
          style={{
            background: "#101010",
            marginTop: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 6,
          }}
          className="trading__main__container__buy__and__sell__card__input__wrapper"
        >
          <input
            type="text"
            placeholder="Search Wallet"
            className="trading__main__container__buy__and__sell__card__input"
          />
          <Search stroke="rgb(255, 255, 255, 0.5)" width={20} height={20} />
        </div>
        <InvitePopupEntry
          setIsInvite={setIsInvite}
          title="BitFlyWallet"
          to="/get-started"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40.752"
              height="43.294"
              viewBox="0 0 40.752 43.294"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M302.118,1293.054a10.472,10.472,0,0,1-10.527,10.393H275.4v-6.929h16.186a3.465,3.465,0,1,0,0-6.929H275.4v-6.929h10.787a3.464,3.464,0,1,0,0-6.927h-14.3a3.49,3.49,0,0,0-3.51,3.464v29.436a3.51,3.51,0,0,1-7.019,0V1279.2a10.473,10.473,0,0,1,10.529-10.393h14.3a10.473,10.473,0,0,1,10.527,10.393,10.2,10.2,0,0,1-.952,4.317A10.4,10.4,0,0,1,302.118,1293.054Z"
                transform="translate(-261.366 -1268.804)"
                fill="#fff"
              />
            </svg>
          }
        />
        <InvitePopupEntry
          setIsInvite={setIsInvite}
          title="Metamask"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.007"
              height="39.266"
              viewBox="0 0 41.007 39.266"
            >
              <g id="Group_531" data-name="Group 531" transform="translate(0)">
                <path
                  id="Path_566"
                  data-name="Path 566"
                  d="M38.162,3.333,22.121,15.222,25.1,8.216Z"
                  transform="translate(0.832 -3.333)"
                  fill="#e17726"
                />
                <path
                  id="Path_567"
                  data-name="Path 567"
                  d="M4,3.333l15.883,12L17.048,8.216Z"
                  transform="translate(-1.974 -3.333)"
                  fill="#e27625"
                />
                <path
                  id="Path_568"
                  data-name="Path 568"
                  d="M31.587,27.2l-4.264,6.531,9.13,2.52,2.6-8.909Z"
                  transform="translate(1.637 0.364)"
                  fill="#e27625"
                />
                <path
                  id="Path_569"
                  data-name="Path 569"
                  d="M2.534,27.345l2.584,8.909,9.13-2.52L10,27.2Z"
                  transform="translate(-2.202 0.364)"
                  fill="#e27625"
                />
                <path
                  id="Path_570"
                  data-name="Path 570"
                  d="M12.594,18.387l-2.552,3.836,9.051.412-.317-9.749Z"
                  transform="translate(-1.039 -1.853)"
                  fill="#e27625"
                />
                <path
                  id="Path_571"
                  data-name="Path 571"
                  d="M28.636,18.4,22.343,12.79l-.222,9.86,9.051-.412Z"
                  transform="translate(0.832 -1.868)"
                  fill="#e27625"
                />
                <path
                  id="Path_572"
                  data-name="Path 572"
                  d="M12.677,33.706l5.453-2.647-4.692-3.678Z"
                  transform="translate(-0.631 0.392)"
                  fill="#e27625"
                />
                <path
                  id="Path_573"
                  data-name="Path 573"
                  d="M22.6,31.058l5.453,2.647-.761-6.325Z"
                  transform="translate(0.906 0.392)"
                  fill="#e27625"
                />
                <path
                  id="Path_574"
                  data-name="Path 574"
                  d="M28.054,33.213,22.6,30.565l.428,3.551-.048,1.49Z"
                  transform="translate(0.906 0.885)"
                  fill="#d5bfb2"
                />
                <path
                  id="Path_575"
                  data-name="Path 575"
                  d="M12.677,33.213l5.072,2.394-.032-1.49.412-3.551Z"
                  transform="translate(-0.631 0.885)"
                  fill="#d5bfb2"
                />
                <path
                  id="Path_576"
                  data-name="Path 576"
                  d="M17.76,25.726l-4.534-1.332,3.2-1.474Z"
                  transform="translate(-0.546 -0.299)"
                  fill="#233447"
                />
                <path
                  id="Path_577"
                  data-name="Path 577"
                  d="M22.848,25.726,24.18,22.92l3.234,1.474Z"
                  transform="translate(0.944 -0.299)"
                  fill="#233447"
                />
                <path
                  id="Path_578"
                  data-name="Path 578"
                  d="M13.247,33.733l.792-6.531L9,27.345Z"
                  transform="translate(-1.2 0.364)"
                  fill="#cc6228"
                />
                <path
                  id="Path_579"
                  data-name="Path 579"
                  d="M26.636,27.2l.793,6.531,4.264-6.388Z"
                  transform="translate(1.531 0.364)"
                  fill="#cc6228"
                />
                <path
                  id="Path_580"
                  data-name="Path 580"
                  d="M31.172,20.971l-9.051.412.84,4.645,1.331-2.806L27.526,24.7Z"
                  transform="translate(0.832 -0.601)"
                  fill="#cc6228"
                />
                <path
                  id="Path_581"
                  data-name="Path 581"
                  d="M13.719,24.7l3.2-1.474,1.332,2.806.84-4.645-9.051-.412Z"
                  transform="translate(-1.039 -0.601)"
                  fill="#cc6228"
                />
                <path
                  id="Path_582"
                  data-name="Path 582"
                  d="M10.042,20.971l3.8,7.4L13.719,24.7Z"
                  transform="translate(-1.039 -0.601)"
                  fill="#e27525"
                />
                <path
                  id="Path_583"
                  data-name="Path 583"
                  d="M26.822,24.7l-.159,3.678,3.8-7.4Z"
                  transform="translate(1.535 -0.601)"
                  fill="#e27525"
                />
                <path
                  id="Path_584"
                  data-name="Path 584"
                  d="M17.992,21.328l-.84,4.645,1.062,5.485.222-7.228Z"
                  transform="translate(0.062 -0.546)"
                  fill="#e27525"
                />
                <path
                  id="Path_585"
                  data-name="Path 585"
                  d="M22.178,21.328l-.428,2.885.206,7.244,1.062-5.485Z"
                  transform="translate(0.774 -0.546)"
                  fill="#e27525"
                />
                <path
                  id="Path_586"
                  data-name="Path 586"
                  d="M22.99,25.528l-1.062,5.485.777.539L27.4,27.874l.159-3.678Z"
                  transform="translate(0.802 -0.101)"
                  fill="#f5841f"
                />
                <path
                  id="Path_587"
                  data-name="Path 587"
                  d="M13.226,24.2l.127,3.678,4.692,3.678.777-.539L17.76,25.528Z"
                  transform="translate(-0.546 -0.101)"
                  fill="#f5841f"
                />
                <path
                  id="Path_588"
                  data-name="Path 588"
                  d="M24.518,35.251l.048-1.49-.4-.349H18.1l-.38.349.032,1.49-5.072-2.394,1.775,1.458,3.6,2.489h6.166l3.6-2.489,1.775-1.458Z"
                  transform="translate(-0.631 1.24)"
                  fill="#c0ac9d"
                />
                <path
                  id="Path_589"
                  data-name="Path 589"
                  d="M23.462,30.638l-.777-.539H18.231l-.777.539-.412,3.551.38-.349h6.071l.4.349Z"
                  transform="translate(0.045 0.813)"
                  fill="#161616"
                />
                <path
                  id="Path_590"
                  data-name="Path 590"
                  d="M13.833,25.238l3.751,3.519v3.52l-3.751-7.039Z"
                  transform="translate(-0.452 0.06)"
                  fill="#ea8d3a"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_591"
                  data-name="Path 591"
                  d="M38.754,16,40.1,9.436l-2.013-6.1L22.6,14.826l5.96,5.041,8.4,2.457,1.855-2.172-.808-.586,1.3-1.173-.983-.777,1.284-.967Z"
                  transform="translate(0.906 -3.333)"
                  fill="#763e1a"
                />
                <path
                  id="Path_592"
                  data-name="Path 592"
                  d="M2.246,9.436,3.609,16l-.872.65,1.284.967-.983.777,1.3,1.173-.808.586,1.855,2.172L13.8,19.867l5.944-5.041L4.275,3.333Z"
                  transform="translate(-2.246 -3.333)"
                  fill="#763e1a"
                />
                <path
                  id="Path_593"
                  data-name="Path 593"
                  d="M21.813,25.333l.552,9.35L20.71,29.9Z"
                  transform="translate(0.613 0.075)"
                  fill="#ea8e3a"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_594"
                  data-name="Path 594"
                  d="M12.687,31.539l5.074-.111-.882,6.82-4.192-6.71Z"
                  transform="translate(-0.629 1.019)"
                  fill="#d87c30"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_595"
                  data-name="Path 595"
                  d="M36.333,20.107l-8.4-2.457,2.536,3.836-3.8,7.4,5.025-.063h7.466Z"
                  transform="translate(1.535 -1.116)"
                  fill="#f5841f"
                />
                <path
                  id="Path_596"
                  data-name="Path 596"
                  d="M13.757,17.649,5.34,20.107,2.534,28.825H10l5.009.063-3.8-7.4Z"
                  transform="translate(-2.202 -1.116)"
                  fill="#f5841f"
                />
                <path
                  id="Path_597"
                  data-name="Path 597"
                  d="M23.177,23.46l.555-9.289,2.425-6.61H15.3l2.425,6.61.555,9.289.206,2.917L18.5,33.59h4.454l.016-7.213Z"
                  transform="translate(-0.225 -2.679)"
                  fill="#f5841f"
                />
              </g>
            </svg>
          }
        />
        <InvitePopupEntry
          setIsInvite={setIsInvite}
          title="TokenPocket"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.909"
              height="42.547"
              viewBox="0 0 44.909 42.547"
            >
              <g id="Group_532" data-name="Group 532" transform="translate(0)">
                <path
                  id="Path_600"
                  data-name="Path 600"
                  d="M21.6,15.194V5.739H4.109a.558.558,0,0,0-.591.591V19.685a.558.558,0,0,0,.591.591h6.736V44.623a.558.558,0,0,0,.591.591H22.428a.558.558,0,0,0,.591-.591V15.194Z"
                  transform="translate(-3.518 -2.666)"
                  fill="#29aeff"
                />
                <path
                  id="Path_601"
                  data-name="Path 601"
                  d="M30.746,3.333H15.028a.558.558,0,0,0-.591.591V42.217a.558.558,0,0,0,.591.591H26.019a.558.558,0,0,0,.591-.591V32.526h4.254a14.6,14.6,0,0,0-.118-29.192Z"
                  transform="translate(-0.491 -3.333)"
                  fill="#2761e7"
                />
              </g>
            </svg>
          }
        />
        <InvitePopupEntry
          setIsInvite={setIsInvite}
          title="Trust Wallet"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37.598"
              height="43.358"
              viewBox="0 0 37.598 43.358"
            >
              <path
                id="Path_602"
                data-name="Path 602"
                d="M24.071,5.194l1-1.3a1.643,1.643,0,0,0-2,0Zm17.152,5.04h1.636a1.643,1.643,0,0,0-1.636-1.665ZM24.071,45.273l-.91,1.365a1.629,1.629,0,0,0,1.812,0ZM6.934,10.234V8.59A1.643,1.643,0,0,0,5.3,10.256Zm16.14-3.749C30.5,12.237,39,11.87,41.23,11.87V8.59c-2.311,0-9.713.293-16.14-4.7ZM39.595,10.2a130.361,130.361,0,0,1-1.064,16.933c-.616,3.969-1.467,6.287-2.59,7.946a13.421,13.421,0,0,1-4.666,3.991c-2.106,1.255-4.8,2.648-8.114,4.842l1.849,2.722c3.14-2.091,5.752-3.426,7.974-4.754a17.364,17.364,0,0,0,5.693-4.974c1.467-2.2,2.472-5.136,3.118-9.273a133.072,133.072,0,0,0,1.1-17.38ZM25.01,43.916c-3.294-2.2-5.979-3.566-8.07-4.835a13.158,13.158,0,0,1-4.659-4c-1.13-1.717-2.047-4-2.678-7.946A128.539,128.539,0,0,1,8.57,10.2L5.3,10.256a134.2,134.2,0,0,0,1.1,17.38c.638,4.123,1.614,7.058,3.111,9.273a17.239,17.239,0,0,0,5.678,4.974c2.2,1.328,4.835,2.663,7.974,4.754ZM6.934,11.87c2.2,0,10.711.367,18.135-5.385l-2-2.59c-6.441,4.989-13.843,4.7-16.14,4.7Z"
                transform="translate(-5.297 -3.555)"
                fill="#3688eb"
                opacity="0.9"
              />
            </svg>
          }
        />
        <InvitePopupEntry
          setIsInvite={setIsInvite}
          title="Wallet Connect"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48.961"
              height="29.803"
              viewBox="0 0 48.961 29.803"
            >
              <path
                id="Path_603"
                data-name="Path 603"
                d="M10.857,13.74a20.858,20.858,0,0,1,28.914,0l.961.934a.975.975,0,0,1,0,1.406l-3.287,3.2a.522.522,0,0,1-.723,0L35.4,17.991a14.551,14.551,0,0,0-20.171,0l-1.416,1.377a.522.522,0,0,1-.723,0L9.8,16.171a.975.975,0,0,1,0-1.406ZM46.569,20.35,49.495,23.2a.975.975,0,0,1,0,1.406L36.3,37.429a1.043,1.043,0,0,1-1.446,0h0l-9.363-9.1a.261.261,0,0,0-.361,0h0l-9.363,9.1a1.043,1.043,0,0,1-1.446,0h0L1.133,24.6a.975.975,0,0,1,0-1.406L4.058,20.35a1.043,1.043,0,0,1,1.446,0l9.363,9.1a.261.261,0,0,0,.361,0h0l9.362-9.1a1.043,1.043,0,0,1,1.446,0h0l9.363,9.1a.261.261,0,0,0,.361,0l9.363-9.1A1.043,1.043,0,0,1,46.569,20.35Z"
                transform="translate(-0.833 -7.917)"
                fill="#3389fb"
              />
            </svg>
          }
        />

        <div className="connect__wallet__popup__content__btn__wrapper">
          <button
            style={{ padding: ".8em 3em" }}
            className="nft__container__content__left__casted__nft__card__right"
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}
