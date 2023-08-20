import React from "react";
import aboutImg from "../assets/aboutImg.png";

function About() {
  return (
    <div>
      <div className="intro-section container-fluid">
        <h1
          className="bx--content-block__heading text-light text-center w-100 mb-3 display-5 rounded-pill bouncing-heading fade-in2"
          style={{
            background: "linear-gradient(45deg, red, blue)",
            marginTop: "20px",
            padding: "6px",
          }}
        >
          About
        </h1>
      </div>
      <div className="container-fluid d-flex  flex-column flex-md-row abt">
        <div
          className="mb-2 mb-md-0 w-100 h-75 me-5 bg-secondary bg-opacity-25 p-3"
          style={{ border: "3px solid skyblue" }}
        >
          <h2 className="text-center text-info mb-3">About Blockchain</h2>
          <p className="text-light fw-bolder fs-6">
            As explained by Wikipedia, “Blockchain was invented by Satoshi
            Nakamoto”—the pseudonym of an unknown person or persons—“in 2008 to
            serve as the public transaction ledger of the cryptocurrency
            bitcoin… which made it the first digital currency to solve the
            double-spending problem without the need of a trusted authority or
            central server.”
            <br />
            While blockchain is still largely confined to use in recording and
            storing transactions for cryptocurrencies such as Bitcoin,
            proponents of blockchain technology are developing and testing other
            uses for blockchain, including these:
          </p>
        </div>
        <div
          className="border border-primary bg-opacity-50   bg-secondary abt1 mt-4 mt-md-0"
          style={{ width: "80%", height: "275px" }}
        >
          <img src={aboutImg} className="w-100 h-100 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
