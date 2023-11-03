import React from "react";
import workImg from "../assets/images/howitworks.png";
import { useDarkMode } from './DarkModeContext';

const HowItWorks = () => {
    const { isDarkMode } = useDarkMode();
  return (
    <>
      <section className= {`py-5 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} id="howitworks">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
                <h2 className="text-center">How It Works</h2>
                <img src={workImg} className="img-fluid" alt="..." />
            </div>
            <div className="row g-4 mt-3">
              <div className="col-12 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">1</span>
                    </div>
                    <h5 className="card-title">Buyer sends request and confirms order</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">2</span>
                    </div>
                    <h5 className="card-title">Buyer sends funds to escrow smart contract to validate order</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">3</span>
                    </div>
                    <h5 className="card-title">Seller is notified and smart contract holds funds in escrow</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">4</span>
                    </div>
                    <h5 className="card-title">Seller processes and delivers order according to buyer's request</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">5</span>
                    </div>
                    <h5 className="card-title">Buyer accepts seller's delivery</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">6</span>
                    </div>
                    <h5 className="card-title">Smart contract releases funds to seller's wallet after buyer's confirmation</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
