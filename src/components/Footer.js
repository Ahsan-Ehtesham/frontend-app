import React from "react";
import { FaTelegram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import logo from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <>
      <footer>
        <section className="py-4" style={{ backgroundColor: "#eee" }}>
          <div className="container">
            <div className="row g-3 d-flex align-items-center" >
              <div className="col-12 col-md-3">
                <a href="/" className="mb-3 mb-md-0">
                  <img src={logo} width="20%" alt="logo" />
                </a>
              </div>

              <ul className="nav col-12 col-md-6 d-flex justify-content-start justify-content-md-center list-unstyled">
                <li className="nav-item mb-2"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item mb-2"><a href="#features" className="nav-link">Features</a></li>
                <li className="nav-item mb-2"><a href="#tokenomics" className="nav-link">Tokenomics</a></li>
                <li className="nav-item mb-2"><a href="#roadmap" className="nav-link">Roadmap</a></li>
                <li className="nav-item mb-2"><a href="#faq" className="nav-link">FAQs</a></li>
              </ul>

              <ul className="col-12 col-md-3 d-flex justify-content-start justify-content-md-end list-unstyled">
                <li className="me-3">
                  <a href="/" className="text-dark">
                    <FaTelegram style={{ fontSize: "1.5rem" }} />
                  </a>
                </li>
                <li>
                  <a href="/" className="text-dark">
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
