import React from "react";
import { useDarkMode } from './DarkModeContext';
import { FaTelegram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import footer_logo from "../assets/images/footer logo.png";

export const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <footer className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <section className="py-4">
          <div className="container">
            <div className="row g-3 d-flex align-items-center" >
              <div className="col-12 col-md-3">
                <a href="/" className="mb-3 mb-md-0">
                  <img src={footer_logo} width="180px" alt="logo" />
                </a>
              </div>

              <ul className="nav col-12 col-md-6 d-flex justify-content-start justify-content-md-center list-unstyled">
                <li className="nav-item mb-2"><a href="/" className="nav-link">About</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link">Join Marketplace</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link">Uniswap</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link">Dextools</a></li>
              </ul>

              <ul className="col-12 col-md-3 d-flex justify-content-start justify-content-md-end list-unstyled">
                <li className="me-3">
                  <a href="https://t.me/decentralance" className="text-dark">
                    <FaTelegram style={{ fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Decentralance" className="text-dark">
                    <FaXTwitter style={{ fontSize: "1.5rem" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
