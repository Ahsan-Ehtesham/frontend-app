import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const Roadmap = () => {
  return (
    <>
      <section id="roadmap" className="py-5">
        <div className="container">
          <div className="text-center">
            <h2>Roadmap</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline left">
                  <div className="card">
                    <div className="card-body p-4">
                      <h6>Q4 2023:</h6>
                      <ul className="mb-0 list-unstyled">
                        <li>
                          <FaCheckCircle id="icon" />
                          Release of Decentralance Website & Socials
                        </li>
                        <li>
                          <FaCheckCircle id="icon" />
                          Stealth Launch of DELC token
                        </li>
                        <li>
                          <FaCheckCircle id="icon" />
                          Post Launch Marketing & Onboarding Crypto Influencers
                        </li>
                        <li>
                          <FaCheckCircle id="icon" />
                          Release of Freelance Marketplace
                        </li>
                        <li><FaCheckCircle id="icon" />Commencement of Revenue Sharing</li>
                        <li><FaCheckCircle id="icon" />CMC/CG Listings</li>
                        <li><FaCheckCircle id="icon" />Partnerships with Industry Leaders and KOLs</li>
                        <li><FaCheckCircle id="icon" />CEX Listings</li>
                        <li><FaCheckCircle id="icon" />Design Upgrades</li>
                        <li><FaCheckCircle id="icon" />Release of Android & iOS marketplace apps</li>
                        <li><FaCheckCircle id="icon" />Running of Ads on Platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="timeline right">
                  <div className="card">
                    <div className="card-body p-4">
                      <h6>Q1 2024:</h6>
                      <ul className="mb-0 list-unstyled">
                        <li><FaCheckCircle id="icon" />More Partnerships</li>
                        <li><FaCheckCircle id="icon" />Security and UI/UX upgrades</li>
                        <li><FaCheckCircle id="icon" />More Marketing Push</li>
                        <li><FaCheckCircle id="icon" />Expand platform user base</li>
                        <li><FaCheckCircle id="icon" />Accept more cryptos for payment on the platform</li>
                        <li><FaCheckCircle id="icon" />Team expansion</li>
                        <li><FaCheckCircle id="icon" />More CEX Listings</li>
                        <li><FaCheckCircle id="icon" />Mobile apps upgrade and updates</li>
                        <li><FaCheckCircle id="icon" />Expand ads on platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="timeline left">
                  <div className="card">
                    <div className="card-body p-4">
                      <h6>Q2 2024:</h6>
                      <ul className="mb-0 list-unstyled">
                        <li><FaCheckCircle id="icon" />More CEX Listings</li>
                        <li><FaCheckCircle id="icon" />Expand platform revenue sources</li>
                        <li><FaCheckCircle id="icon" />More Marketing Push</li>
                        <li><FaCheckCircle id="icon" />Upgrade escrow smart contracts</li>
                        <li><FaCheckCircle id="icon" />Community activities</li>
                        <li><FaCheckCircle id="icon" />Further improvement on UI/UX designs</li>
                        <li><FaCheckCircle id="icon" />Increase user base</li>
                        <li><FaCheckCircle id="icon" />Increase platform revenue</li>
                        <li><FaCheckCircle id="icon" />Onboard more KOLs</li>
                      </ul>
                    </div>
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
