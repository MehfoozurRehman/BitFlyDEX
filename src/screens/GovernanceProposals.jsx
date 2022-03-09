import React from "react";

function GovernanceProposals() {
  return (
    <>
      <div className="governance__jumbotron">
        <div className="governance__jumbotron__wrapper">
          <h1 className="governance__jumbotron__heading">
            Governance Proposals
          </h1>
          <p className="governance__jumbotron__para">
            On-chain governance is a system for managing and implementing
            changes to cryptocurrency blockchains. In this type of governance,
            rules for instituting changes are encoded into the blockchain
            protocol. Developers propose changes through code updates and each
            node votes on whether to accept or reject the proposed change
          </p>
          <button className="governance__jumbotron__btn"> Learn More</button>
        </div>
        <div className="proposal__list">
          <div className="proposal__list__wrapper">
            <div className="proposal__list__wrapper__heading">
              Proposal List
            </div>
            <ProposalItem />
            <ProposalItem />
            <ProposalItem />
            <ProposalItem />
          </div>
        </div>
      </div>
    </>
  );
}
const ProposalItem = () => {
  return (
    <>
      <div className="proposal__list__wrapper__item">
        <div className="proposal__list__wrapper__item__left">
          <div className="proposal__list__wrapper__item__left__top">
            Update rewards for NFT Pool - 600,000 POSI for the next week
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
        <div className="proposal__list__wrapper__item__right">
          <div className="proposal__list__wrapper__item__right__1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.625"
              height="33.041"
              viewBox="0 0 33.625 33.041"
            >
              <g
                id="Icon_feather-check-circle"
                data-name="Icon feather-check-circle"
                transform="translate(-1.497 -1.473)"
              >
                <path
                  id="Path_452"
                  data-name="Path 452"
                  d="M33,16.62V18A15,15,0,1,1,24.105,4.29"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_453"
                  data-name="Path 453"
                  d="M33,6,18,21.015l-4.5-4.5"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>
          <div className="proposal__list__wrapper__item__right__2">QUEUED</div>
        </div>
      </div>
    </>
  );
};

export default GovernanceProposals;
