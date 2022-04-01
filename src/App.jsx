import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddYourCurrencyPopup from "./screens/AddYourCurrencyPopup";
import ComfirmOTP from "./screens/ComfirmOTP";
import ConnectWallet from "./screens/ConnectWallet";
import DecentralizedProtocol from "./screens/DecentralizedProtocol";
import DecentralizedTrading from "./screens/DecentralizedTrading";
import Docs from "./screens/Docs";
import ExchangeLanding from "./screens/ExchangeLanding";
import ExchangeProLanding from "./screens/ExchangeProLanding";
import Farming from "./screens/Farming";
import GetStarted from "./screens/GetStarted";
import GovernanceProposals from "./screens/GovernanceProposals";
import Home from "./screens/Home";
import InvitePopup from "./screens/InvitePopup";
import NFT from "./screens/NFT";
import NFTMarketPlace from "./screens/NFTMarketPlace";
import OTPPopup from "./screens/OTPPopup";
import PoolAndTrade from "./screens/PoolAndTrade";
import PoolLanding from "./screens/PoolLanding";
import Pools from "./screens/Pools";
import PositionBond from "./screens/PositionBond";
import BuyingCompetition from "./screens/ReferCompetition";
import ReferCompetition from "./screens/ReferCompetition";
import ReferPage from "./screens/ReferPage";
import ResetPassword from "./screens/ResetPassword";
import SettingPopup from "./screens/SettingPopup";
import StartTradingPopup from "./screens/StartTradingPopup";
import SwapLanding from "./screens/SwapLanding";
import Trading from "./screens/Trading";
import TransferNFTPopup from "./screens/TransferNFTPopup";
import UpdateReward from "./screens/UpdateReward";
import Vaults from "./screens/Vaults";
import Wallet from "./screens/Wallet";
import "./styles/export.scss";

export default function App() {
  const [isStartTrading, setIsStartTrading] = useState(false);
  const [isTransferNFT, setIsTransferNFT] = useState(false);
  const [isAddYourCurrency, setIsAddYourCurrency] = useState(true);
  const [isInvite, setIsInvite] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [isRestPassword, setIsResetPassword] = useState(false);
  const [isConfirmOTP, setIsConfirmOTP] = useState(false);
  const [isDocs, setIsDocs] = useState(false);
  return (
    <div className="app">
      {isStartTrading ? (
        <StartTradingPopup setIsStartTrading={setIsStartTrading} />
      ) : null}
      {isTransferNFT ? (
        <TransferNFTPopup setIsTransferNFT={setIsTransferNFT} />
      ) : null}
      {isAddYourCurrency ? (
        <AddYourCurrencyPopup setIsAddYourCurrency={setIsAddYourCurrency} />
      ) : null}
      {isInvite ? <InvitePopup setIsInvite={setIsInvite} /> : null}
      {isSetting ? <SettingPopup setIsSetting={setIsSetting} /> : null}
      {isOTP ? (
        <OTPPopup setIsOTP={setIsOTP} setIsResetPassword={setIsResetPassword} />
      ) : null}
      {isRestPassword ? (
        <ResetPassword setIsResetPassword={setIsResetPassword} />
      ) : null}
      {isConfirmOTP ? <ComfirmOTP setIsConfirmOTP={setIsConfirmOTP} /> : null}
      {isDocs ? null : <Header connectWallet={setIsInvite} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/governance-proposals" element={<GovernanceProposals />} />
        <Route
          path="/decentralized-trading"
          element={<DecentralizedTrading />}
        />
        <Route
          path="/swap"
          element={<ConnectWallet setIsSetting={setIsSetting} isOn="SWAP" />}
        />
        <Route
          path="/liquidity"
          element={
            <ConnectWallet setIsSetting={setIsSetting} isOn="LIQUIDITY" />
          }
        />
        <Route
          path="/trading"
          element={<Trading setIsStartTrading={setIsStartTrading} />}
        />
        <Route
          path="/pool-trade"
          element={<PoolAndTrade setIsStartTrading={setIsStartTrading} />}
        />
        <Route path="/vaults" element={<Vaults />} />
        <Route path="/farming" element={<Farming />} />
        <Route path="/pools" element={<Pools />} />
        <Route
          path="/nft"
          element={<NFT setIsTransferNFT={setIsTransferNFT} />}
        />
        <Route path="/nft-market-place" element={<NFTMarketPlace />} />
        <Route
          path="/refer"
          element={<ReferPage setIsInvite={setIsInvite} />}
        />
        <Route path="/refer-competition" element={<ReferCompetition />} />
        <Route path="/buying-competition" element={<BuyingCompetition />} />
        <Route path="/position-bond" element={<PositionBond />} />
        <Route
          path="/decentralized-protocol"
          element={<DecentralizedProtocol setIsSetting={setIsSetting} />}
        />
        <Route path="/update-reward" element={<UpdateReward />} />
        <Route
          path="/get-started"
          element={
            <GetStarted setIsConfirmOTP={setIsConfirmOTP} setIsOTP={setIsOTP} />
          }
        />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/swap-landing" element={<SwapLanding />} />
        <Route path="/pool-landing" element={<PoolLanding />} />
        <Route path="/exchange-landing" element={<ExchangeLanding />} />
        <Route path="/exchange-pro-landing" element={<ExchangeProLanding />} />
        <Route path="/docs" element={<Docs setIsDocs={setIsDocs} />} />
      </Routes>
      {isDocs ? null : <Footer />}
    </div>
  );
}
