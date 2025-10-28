


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvoidContent from "./AvoidContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Service.css";


const agreementImg = new URL("../assets/rent/agreement.png", import.meta.url).href;
const clickEarnImg = new URL("../assets/rent/ClicknEarn.svg", import.meta.url).href;
const nrisImg = new URL("../assets/rent/nris.png", import.meta.url).href;
const packerImg = new URL("../assets/rent/packer.png", import.meta.url).href;
const paintingImg = new URL("../assets/rent/painting.png", import.meta.url).href;
const payRentImg = new URL("../assets/rent/payRent.png", import.meta.url).href;


const avoidImg = new URL("../assets/buy/avoidImg.png", import.meta.url).href;
const freeImg = new URL("../assets/buy/free.png", import.meta.url).href;
const shortlistImg = new URL("../assets/buy/shortlist.png", import.meta.url).href;
const rentalImg = new URL("../assets/buy/rental.png", import.meta.url).href;

const RentService = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);


  const topFeatures = [
    { img: packerImg, text: "Packers & Movers", link: "/packers-movers" },
    { img: payRentImg, text: "Pay Rent Online", link: "/pay-rent-online" },
    { img: agreementImg, text: "Rental Agreement", link: "/rental-agreement" },
    { img: clickEarnImg, text: "Click & Earn", link: "/click-earn" },
    { img: paintingImg, text: "Home Painting", link: "/home-painting" },
    { img: nrisImg, text: "NRIs", link: "/nri-services" },
  ];


  const bottomFeatures = [
    {
      img: avoidImg,
      text: "Avoid Brokers",
      desc: "We directly connect you to verified owners to save brokerage",
    },
    {
      img: freeImg,
      text: "Free Listing",
      desc: "Easy listing process. Also using WhatsApp",
    },
    {
      img: shortlistImg,
      text: "Shortlist without Visit",
      desc: "Extensive information makes it easy",
    },
    {
      img: rentalImg,
      text: "Rental Agreement",
      desc: "Assistance in creating Rental agreement & Paper work",
    },
  ];

  const handleFeatureClick = (feature) => {
    if (feature.text === "Avoid Brokers") {
      setSelectedFeature("Avoid Brokers");
    } else if (feature.link) {
      navigate(feature.link);
    }
  };

  if (selectedFeature === "Avoid Brokers") {
    return (
      <div className="avoid-full-page">
        <div className="container py-5">
          <button
            className="btn btn-secondary mb-4"
            onClick={() => setSelectedFeature(null)}
          >
            ← Back
          </button>
          <AvoidContent />
        </div>
      </div>
    );
  }




  return (
    <div className="service-section text-center py-5">
      {/* --- Top Features --- */}
      <div className="container mb-5">
        <div className="row justify-content-center g-4 align-items-start">
          {topFeatures.map((feature, idx) => (
            <div
              className="col-6 col-md-2 text-center d-flex flex-column align-items-center"
              key={idx}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleFeatureClick(feature)}
              >
                <img
                  src={feature.img}
                  alt={feature.text}
                  className="img-fluid mb-3"
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <h6 className="fw-bold">{feature.text}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Divider --- */}
      <h3 className="heading-line text-center">
        <span className="line"></span>
        <span className="circle"></span>
        <span className="heading-text">Why Use NoBroker</span>
        <span className="circle"></span>
        <span className="line"></span>
      </h3>

      {/* --- Bottom Features --- */}
      <div className="container mt-5">
        <div className="row justify-content-center g-4">
          {bottomFeatures.map((feature, idx) => (
            <div className="col-6 col-md-3 text-center" key={idx}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleFeatureClick(feature)}
              >
                <img
                  src={feature.img}
                  alt={feature.text}
                  className="img-fluid mb-3"
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <h6 className="fw-bold">{feature.text}</h6>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Floating Help Button --- */}
      <button className="fab-btn btn btn-danger rounded-circle">
        <i className="bi bi-chat-dots"></i>
      </button>
    </div>
  );
};

export default RentService;
