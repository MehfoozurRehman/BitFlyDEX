import React, { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavLink({ title, to, list }) {
  return (
    <Link to={to} className="header__link">
      <div className="header__link__heading">
        {title}
        {list ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.269"
            height="10.763"
            viewBox="0 0 16.269 10.763"
          >
            <path
              id="Icon_ionic-md-arrow-dropright"
              data-name="Icon ionic-md-arrow-dropright"
              d="M13.5,9l10.763,8.134L13.5,25.269Z"
              transform="translate(25.269 -13.5) rotate(90)"
              fill="currentColor"
            />
          </svg>
        ) : null}
      </div>
      {list ? (
        <>
          <div className="header__link__dropdown">
            {list.map((item, i) => (
              <Link to={item.to} className="header__link__dropdown__entry">
                <div className="header__link__dropdown__entry__heading">
                  {item.title}
                </div>
                <div className="header__link__dropdown__entry__info">
                  {item.info}
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </Link>
  );
}
export default function Header({ connectWallet }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1200) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);

  return (
    <div
      className="header"
      style={isNavOpen ? { backgroundColor: "black" } : null}
    >
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" className="header__logo__img" />
      </Link>
      <button
        className="header__menu"
        onClick={() => {
          isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
        }}
      >
        {isNavOpen ? (
          <X size={20} color="currentColor" />
        ) : (
          <Menu size={20} color="currentColor" />
        )}
      </button>
      {isNavOpen ? (
        <div className="header__nav">
          <NavLink title="Home" to="/" />
          <NavLink
            title="IDO"
            to="/"
            list={[
              {
                title: "BITFLY IDO",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/decentralized-protocol",
              },
              {
                title: "IDO LAUNCHPAD",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
              {
                title: "BITFLY ICO",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
              {
                title: "ICO LAUNCHPAD",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
            ]}
          />
          <NavLink
            title="Earn"
            to="/"
            list={[
              {
                title: "STAKING",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
              {
                title: "FARMING",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/farming",
              },
              {
                title: "BONDS",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/position-bond",
              },
              {
                title: "FIXED DEPOSIT",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
              {
                title: "VAULTS",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/vaults",
              },
              {
                title: "REFERRAL",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/refer-competition",
              },
              {
                title: "LOREM IPSUM",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
            ]}
          />
          <NavLink
            title="Trade"
            to="/"
            list={[
              {
                title: "SWAP",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/swap",
              },
              {
                title: "LIQUIDITY",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/liquidity",
              },
              {
                title: "POOL",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/pools",
              },
              {
                title: "EXCHANGE",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/exchange-landing",
              },
              {
                title: "EXCHANGE PRO",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/exchange-pro-landing",
              },
              {
                title: "TRADING",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/trading",
              },
              {
                title: "LOREM IPSUM",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
            ]}
          />
          <NavLink
            title="NFT's"
            to="/"
            list={[
              {
                title: "NFTs",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/nft",
              },
              {
                title: "NFT MARKETPLACE",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/nft-market-place",
              },
              {
                title: "LOREM IPSUM",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
              {
                title: "LOREM IPSUM",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
            ]}
          />
          <NavLink
            title="Win"
            to="/"
            list={[
              {
                title: "GOVERNANCE",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/governance-proposals",
              },
              {
                title: "DOCUMENTATION",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/docs",
              },
              {
                title: "WHITE PAPER",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
              {
                title: "LOREM IPSUM",
                info: "The versatile fixed-income instrument, brought to Decentralized finance and implemented",
                to: "/",
              },
            ]}
          />
          <Link
            to="/refer"
            className="header__link__button header__link__button__primary"
          >
            $2.0454
          </Link>
          <a
            onClick={() => {
              connectWallet(true);
            }}
            className="header__link__button header__link__button__secondary"
          >
            Connect Wallet
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path
                id="Icon_material-arrow-upward"
                data-name="Icon material-arrow-upward"
                d="M6,18l2.115,2.115,8.385-8.37V30h3V11.745l8.37,8.385L30,18,18,6Z"
                transform="translate(30 -6) rotate(90)"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      ) : null}
    </div>
  );
}
