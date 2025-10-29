import "bootstrap/dist/css/bootstrap.min.css";
import "./Service.css";
import { useNavigate } from "react-router-dom";

//  Import all images
const builderImg = new URL("../assets/buy/builder.png", import.meta.url).href;
const saleImg = new URL("../assets/buy/sale.png", import.meta.url).href;
const loanImg = new URL("../assets/buy/loan.png", import.meta.url).href;
const legalImg = new URL("../assets/buy/legal.png", import.meta.url).href;
const interiorImg = new URL("../assets/buy/interior.svg", import.meta.url).href;
const nriImg = new URL("../assets/buy/nri.png", import.meta.url).href;
const avoidImg = new URL("../assets/buy/avoidImg.png", import.meta.url).href;
const freeImg = new URL("../assets/buy/free.png", import.meta.url).href;
const shortlistImg = new URL("../assets/buy/shortlist.png", import.meta.url).href;
const rentalImg = new URL("../assets/buy/rental.png", import.meta.url).href;

const Service = ({ onOpenCityModal }) => {
  const navigate = useNavigate();

  //  handle navigation for top services
  const handleServiceClick = (service) => {
    if (service.text === "Builder Projects") {
      if (onOpenCityModal) {
        onOpenCityModal();
      } else {
        console.error("onOpenCityModal function is not provided");
      }
    } else if (service.text === "Sale Agreement") {
      window.open("/sale-agreement", "_blank");
    } else if (service.text === "Property Legal Services") {
      window.open("/property-legal", "_blank");
    } else if (service.text === "NoBroker For NRIs") {
      window.open("/nri-services", "_blank");



    } else {
      navigate(service.link);
    }
  };

  return (
    <div className="service-section text-center py-5">
      {/* --- Top Services --- */}
      <div className="container mb-5">
        <div className="row justify-content-center g-4 align-items-start">
          {[
            { img: builderImg, text: "Builder Projects", link: null },
            { img: saleImg, text: "Sale Agreement", link: "/sale-agreement" },
            { img: loanImg, text: "Home Loan", link: "/home-loan" },
            { img: legalImg, text: "Property Legal Services", link: "/property-legal" },
            { img: interiorImg, text: "Home Interiors", link: "/home-interiors" },
            { img: nriImg, text: "NoBroker For NRIs", link: "/nri-services" },
          ].map((service, idx) => (
            <div
              className="col-6 col-md-2 text-center d-flex flex-column align-items-center"
              key={idx}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleServiceClick(service)}
              >
                <img
                  src={service.img}
                  alt={service.text}
                  className="img-fluid mb-2"
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <p className="fw-semibold mb-0">{service.text}</p>
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
          {[
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
          ].map((feature, idx) => (
            <div className="col-6 col-md-3 text-center" key={idx}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  switch (feature.text) {
                    case "Avoid Brokers":
                      navigate("/avoid-brokers");
                      break;
                    case "Free Listing":
                      navigate("/owner");
                      break;
                    case "Shortlist without Visit":
                      navigate("/avoid-brokers?section=tenants");
                      break;
                    case "Rental Agreement":
                      navigate("/rental-agreement");
                      break;
                    default:
                      break;
                  }
                }}

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

      {/* --- Floating Chat Button --- */}
      <button className="fab-btn btn btn-danger rounded-circle">
        <i className="bi bi-chat-dots"></i>
      </button>
    </div>
  );
};

export default Service;
