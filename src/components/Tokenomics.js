import React from "react";
import ticker from "../assets/images/ticker.svg";
import supply from "../assets/images/supply.svg";
import taxes from "../assets/images/taxes.svg";

const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Tokenomics</h2>
            </div>
          </div>
          <div className="row g-0 mt-5 custom-background">
            <div className="col-12 col-md-4">
              <div className="card">
              <img className="mx-auto" width={100} src={ticker} alt="chart" />
              <div className="card-body">
                <h5 className="card-title">Ticker</h5>
                <p className="card-text">DELC</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
              <img className="mx-auto" width={100} src={supply} alt="supply" />
              <div className="card-body">
                <h5 className="card-title">Supply</h5>
                <p className="card-text">100,000,000</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
              <img className="mx-auto" width={100} src={taxes} alt="supply" />
              <div className="card-body">
                <h5 className="card-title">Taxes</h5>
                <p className="card-text">5% Buy & Sell</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <h2>Platform Revenue Sharing Formula</h2>
          </div>
          <div className="row g-0 mt-4 custom-background">
            <div className="col-12 col-md-4">
              <div className="card">
              <div className="card-body">
                <p className="card-text">40%</p>
                <h5 className="card-title">To DELC Stakers</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
              <div className="card-body">
                <p className="card-text">40%</p>
                <h5 className="card-title">To Team</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
              <div className="card-body">
                <p className="card-text">20%</p>
                <h5 className="card-title">For Marketing</h5>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
