import React from "react";
// import {BiSolidRightArrowAlt} from 'react-icons/bi';

const Cta = () => {
  return (
    <>
      <section className="py-5" id="cta">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <h2>Join Us Today</h2>
              <p>
                Ready to take your crypto career to the next level? Whether
                you're a freelancer seeking new opportunities or a business
                looking for crypto talent, Decentralance is your go-to platform.
              </p>
            </div>
            <div className="col-12">
              <h2>Get Started!</h2>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">1</span>
                    </div>
                    <h5 className="card-title">Sign Up</h5>
                    <p className="card-text">
                      Create your free account and profile.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">2</span>
                    </div>
                    <h5 className="card-title">Post a Project</h5>
                    <p className="card-text">
                      If you're a client, tell us about your project and find
                      the perfect freelancer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">3</span>
                    </div>
                    <h5 className="card-title">Browse Freelancers</h5>
                    <p className="card-text">
                      If you're a freelancer, explore projects that align with
                      your expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="number-container">
                      <span className="number">4</span>
                    </div>
                    <h5 className="card-title">Collaborate</h5>
                    <p className="card-text">
                      Start working on exciting crypto projects or hire the
                      talent you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p>
                Join Decentralance and be a part of the future of work in the
                crypto industry. Welcome to the world of decentralized
                opportunity, innovation, and collaboration.
              </p>
              <a href="/" className="btn btn-info text-white btn-lg">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
