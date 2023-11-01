import React from "react";
import career from "../assets/images/career.svg";
import decent from "../assets/images/decent.svg";
import global from "../assets/images/global.svg";
import security from "../assets/images/security.svg";

const Features = () => {
  return (
    <>
      <section className="py-5" id="features">
        <div className="text-center mb-5">
          <h2>Features</h2>
        </div>
        <div className="container">
          <div className="row g-3 mt-5">
            <div className="col-12 col-md-3">
              <div className="card">
                <img src={career} width={150} className="mx-auto" alt="..."/>
                <div className="card-body">
                  <h4 className="mt-3 fw-bold">Empowering</h4>
                  <p className="mt-1 text-break">
                    Decentralance empowers you to take control of your crypto career. Whether you're a blockchain developer, a crypto advisor, an NFT artist, or a DeFi expert, our platform connects you with clients looking for your specific skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card">
                <img src={decent} width={150} className="mx-auto" alt="..."/>
                <div className="card-body">
                  <h4 className="mt-3 fw-bold">Decentralization</h4>
                  <p className="mt-1 text-break">
                  Our platform ensures transparency and fairness through the use of decentralized escrow by smart contracts to handle payments between buyers and sellers on the platform
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card">
                <img src={global} width={150} className="mx-auto" alt="..."/>
                <div className="card-body">
                  <h4 className="mt-3 fw-bold">Opportunities</h4>
                  <p className="mt-1 text-break">
                    The crypto industry knows no borders, and neither do we. With Decentralance, you can access a global network of clients and freelancers. Find the right talent for your crypto project or take your skills to clients around the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card">
                <img src={security} width={150} className="mx-auto" alt="..."/>
                <div className="card-body">
                  <h4 className="mt-3 fw-bold">Secure</h4>
                  <p className="mt-1 text-break">
                    We prioritize security and trust. Decentralance offers a safe and transparent environment for all transactions and interactions. You can focus on what you do best, knowing that you're protected on our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
