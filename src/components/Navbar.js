import React from "react";
import { useDarkMode } from './DarkModeContext';
import logo from "../assets/images/logo.png";
import part_logo from "../assets/images/part header.png";
import { FaTelegram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

export const Navbar = () => {
  const { toggleDarkMode } = useDarkMode();
  const { isDarkMode } = useDarkMode();
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} width="300px" alt="logo" />
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tokenomics">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://docs.decentralance.org/">
                  Whitepaper
                </a>
              </li>
            </ul>
            <ul className="list-unstyled d-flex mt-2">
              <li className="me-3">
                <div className="form-check form-switch mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="darkSwitch"
                    onClick={toggleDarkMode}
                  />
                </div>
              </li>
              <li className="me-3">
                <a className="text-dark" href="https://t.me/decentralance">
                  <FaTelegram style={{ fontSize: "2rem" }} />
                </a>
              </li>
              <li>
                <a className="text-dark" href="https://twitter.com/Decentralance">
                  <FaXTwitter style={{ fontSize: "2rem" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
