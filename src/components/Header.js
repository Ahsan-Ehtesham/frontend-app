import React from "react";
import header_img from "../assets/images/logo.png";
import { useDarkMode } from './DarkModeContext';

const Header = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <section id="header" className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <h1>
                Decentralized Freelance Marketplace Solution
              </h1>
              <p className="lead description">
                Welcome to <b>Decentralance</b> - The pioneering platform where crypto freelancers and projects unite. Whether you're a project owner, a blockchain developer, a crypto advisor, an influencer, a community manager, a moderator, an NFT artist, a web designer, or a DeFi expert, our platform connects you with clients looking for your specific skills!
              </p>
              <div className="d-flex">
                <a href="/">
                  <button className="btn btn-lg text-white me-2 mb-3 mb-md-0" style={{backgroundColor: "#999966"}}>
                    Marketplace
                  </button>
                </a>
                <a href="/">
                  <button className="btn btn-lg me-2 mb-3 mb-md-0" style={{border: "1px solid #999966"}}>Buy DELC</button>
                </a>
                <a href="/">
                  <button className="btn btn-lg text-white" style={{backgroundColor: "#999966"}}>
                    Stake DELC
                  </button>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={header_img}
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
