import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ConnectWallet from "./screens/ConnectWallet";
import DecentralizedProtocol from "./screens/DecentralizedProtocol";
import DecentralizedTrading from "./screens/DecentralizedTrading";
import Farming from "./screens/Farming";
import GetStarted from "./screens/GetStarted";
import GovernanceProposals from "./screens/GovernanceProposals";
import Home from "./screens/Home";
import InvitePopup from "./screens/InvitePopup";
import NFT from "./screens/NFT";
import NFTMarketPlace from "./screens/NFTMarketPlace";
import PoolAndTrade from "./screens/PoolAndTrade";
import Pools from "./screens/Pools";
import PositionBond from "./screens/PositionBond";
import BuyingCompetition from "./screens/ReferCompetition";
import ReferCompetition from "./screens/ReferCompetition";
import ReferPage from "./screens/ReferPage";
import SettingPopup from "./screens/SettingPopup";
import StartTradingPopup from "./screens/StartTradingPopup";
import Trading from "./screens/Trading";
import TransferNFTPopup from "./screens/TransferNFTPopup";
import UpdateReward from "./screens/UpdateReward";
import Vaults from "./screens/Vaults";
import "./styles/export.scss";

export default function App() {
  const [isStartTrading, setIsStartTrading] = useState(false);
  const [isTransferNFT, setIsTransferNFT] = useState(false);
  const [isInvite, setIsInvite] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  return (
    <div className="app">
      {isStartTrading ? (
        <StartTradingPopup setIsStartTrading={setIsStartTrading} />
      ) : null}
      {isTransferNFT ? (
        <TransferNFTPopup setIsTransferNFT={setIsTransferNFT} />
      ) : null}
      {isInvite ? <InvitePopup setIsInvite={setIsInvite} /> : null}
      {isSetting ? <SettingPopup setIsSetting={setIsSetting} /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/governance-proposals" element={<GovernanceProposals />} />
        <Route
          path="/decentralized-trading"
          element={<DecentralizedTrading />}
        />
        <Route
          path="/connect-wallet"
          element={<ConnectWallet setIsSetting={setIsSetting} />}
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
          element={<GetStarted isSetting={isSetting} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
