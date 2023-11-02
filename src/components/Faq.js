import React from "react";

export const Faq = () => {
  return (
    <>
      <section id="faq" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>FAQs</h2>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>1.</span> What is Decentralance?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Decentralance is a freelance marketplace designed specifically for the crypto industry. It connects cryptocurrency professionals with clients seeking their expertise, allowing them to collaborate on blockchain, cryptocurrency, and decentralized finance (DeFi) projects.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>2.</span> How does Decentralance work?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Clients post projects or job listings, and freelancers browse through these listings to find work that matches their skills. Once a project is awarded, the client and freelancer collaborate through the platform to complete the task. Payment and communication are all managed within the platform.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span>3.</span> Is Decentralance only for blockchain developers?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                No, Decentralance is for a wide range of crypto-related skills, including blockchain development, cryptocurrency advising, NFT artistry, DeFi experts, and more. It's a marketplace for all kinds of crypto talents.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span>4.</span> Is Decentralance safe and secure?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Yes, we prioritize security and transparency. Our platform features secure payment processing through decentralized escrow by smart contracts, client and freelancer ratings, and dispute resolution services to ensure a safe and trustworthy environment for all users.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span>5.</span> How do I get paid on Decentralance?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Freelancers can receive payments directly through their EVM compatible web3 wallets. The payment is handled through a decentralized escrow smart contract that holds the buyer's funds and only releases it to the seller after the buyer verifies and confirms that the work is done satisfactorily. This happens without third-party intervention and makes the payment process very secure.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <span>6.</span> Is Decentralance available worldwide?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Yes, Decentralance is a global platform. Users from around the world can join, post projects, and find freelance opportunities.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <span>7.</span> Are there any fees for using Decentralance?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Decentralance charges a total fee of 10% for completed transactions. You can find detailed information in our Terms of Service.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  <span>8.</span> How do I sign up on Decentralance?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                To sign up, simply visit our website and click on the "Sign Up" or "Join Now" button. You'll need to provide some basic information, create a profile, and start exploring projects or posting your own.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  <span>9.</span> Can I communicate with clients or freelancers before starting a project?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, you can communicate with potential clients or freelancers before committing to a project. We encourage open communication to ensure that both parties are a good fit for the project.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  <span>10.</span> Is Decentralance a decentralized platform?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Decentralance operates on the principles of decentralization, emphasizing fair compensation, transparency, and trust. While the platform itself is centralized for user convenience, the payment process is decentralized and handled by smart contracts and aligns with the values of decentralization in the crypto industry.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded="false"
                  aria-controls="collapse11"
                >
                  <span>11.</span> Can I use Decentralance for both short-term and long-term projects?
                </button>
              </h2>
              <div
                id="collapse11"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, Decentralance is designed to accommodate both short-term and long-term projects. Whether you need a quick audit of your smart contract or a more extended blockchain development project, you can find the right talent here.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                  aria-expanded="false"
                  aria-controls="collapse12"
                >
                  <span>12.</span> What sets Decentralance apart from other freelance marketplaces?
                </button>
              </h2>
              <div
                id="collapse12"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Decentralance is tailored specifically for the crypto industry, ensuring that users have access to a niche network of crypto professionals and clients. Also, all payments are in major cryptocurrencies like USDT, USDC, BNB, ETH and handled through decentralized escrow by smart contracts making sure that sellers get paid and buyers get value for what they pay for. We are committed to fostering innovation and collaboration within this unique ecosystem.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse13"
                  aria-expanded="false"
                  aria-controls="collapse13"
                >
                  <span>13.</span> What should I do if I have a problem with a project or payment?
                </button>
              </h2>
              <div
                id="collapse13"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  If you encounter any issues, you can contact our support team. We have a dispute resolution process to help mediate and resolve problems to the satisfaction of all parties involved.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse14"
                  aria-expanded="false"
                  aria-controls="collapse14"
                >
                  <span>14.</span> How can I contact Decentralance support if I have questions or issues?
                </button>
              </h2>
              <div
                id="collapse14"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                You can reach out to our support team through the Contact Us section on our platform. We're here to assist you with any questions, concerns, or issues you may have.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
