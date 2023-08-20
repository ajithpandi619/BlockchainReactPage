import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function Home() {
  const buttonStyles = {
    backgroundColor: "black", // Change to the desired color
    borderColor: "white", // Change to the desired color
  };

  return (
    <div className="mt-3">
      <div>
        <div>
          <Carousel
            className=" _Carousel  "
            style={{ marginRight: "80px" }}
            interval={2000}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="" />
            </Carousel.Item>
          </Carousel>
          <style>
            {`
          .carousel-control-prev,
          .carousel-control-next {
            background-color: ${buttonStyles.backgroundColor};
            border-color: ${buttonStyles.borderColor};
            
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-top:200px
          }
        `}
          </style>
        </div>
      </div>
      <div>
        <p
          className="text-light mt-5 ms-3 me-3 text-center fw-bolder"
          style={{ fontSize: "18px" }}
        >
          Blockchain is a technology that is used to store and distribute data.
          It is used to store and distribute data. Blockchain.info was
          established by Ben Reeves in 2011.{" "}
          <p>
            He launched a website which could be used to track bitcoin
            transactions.
          </p>
          <div>
            <button className="ms-3 mt-3 border-light bg-primary text-light p-2 ">
              Learn More
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Home;
