import React, { useState } from "react";
import { Settings } from "react-feather";

export default function Wallet() {
  return (
    <div className="connect__main__container">
      <div className="connect__wallet__jumbotron__wrapper">
        <h1 className="governance__jumbotron__heading">Wallet</h1>
        <div className="governance__jumbotron__para">
          On-chain governance is a system for managing and implementing changes
          to cryptocurrency blockchains. In this type of governance, rules for
          instituting changes are encoded into the blockchain protocol.
          Developers propose changes through code updates and each node votes on
          whether to accept or reject the proposed change
        </div>
        <button className="governance__jumbotron__btn">Learn More</button>
      </div>
      <div className="connect__main__container__content">
        <div className="wallent__content__heading">BitFlyWallet</div>
        <form className="connect__main__container__content__divider"></form>
      </div>
    </div>
  );
}
