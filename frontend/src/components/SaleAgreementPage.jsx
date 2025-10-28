


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SaleAgreementPage.css";

const SaleAgreementPage = () => {
  return (
    <section className="sale-agreement">
      <div className="container g-0">
        <div className="sale-bg-section d-flex flex-column justify-content-center">
          <div className="container px-lg-5 px-md-4 px-3">
            <div className="row align-items-start g-5">
      
              <div className="col-lg-7 col-md-12 text-white">
            
                <div className="search-wrapper mb-4">
                  <input
                    type="text"
                    placeholder="Search Property Sale Deed..."
                    className="form-control form-control-lg search-input"
                  />
                </div>

              
                <h2 className="fw-bold heading mb-2">
                  Online Sales Agreement in Bangalore
                </h2>
                <p className="sub-heading mb-4">
                  Benefits of choosing NoBroker Legal Services
                </p>

                <div className="feature-list d-flex flex-column gap-3">
                  {[
                    {
                      icon: "https://assets.nobroker.in/hs-new/public/SalesAgreement/certified_icon.svg",
                      title: "Certified Advocates",
                      desc: "Senior Advocates with experience 15yrs+",
                    },
                    {
                      icon: "https://assets.nobroker.in/hs-new/public/SalesAgreement/legal_expert_icon.svg",
                      title: "Dedicated Legal Expert",
                      desc: "Door step assistance for all documentations",
                    },
                    {
                      icon: "https://assets.nobroker.in/hs-new/public/SalesAgreement/low_price_icon.svg",
                      title: "Lowest Price Pre-Negotiated",
                      desc: "Transparent pricing with fastest process",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center feature-card bg-white p-3 rounded-3 shadow-sm"
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="me-3"
                        style={{ width: "48px", height: "48px" }}
                      />
                      <div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <small>{item.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <img
                    src="https://assets.nobroker.in/hs-new/public/SalesAgreement/refundImg.svg"
                    alt="Refund Guaranteed"
                    style={{ height: "60px" }}
                  />
                </div>
              </div>

     
              <div className="col-lg-5 col-md-12">
                <div className="sticky-form bg-white p-4 rounded-4 shadow-sm">
                  <h6 className="fw-bold mb-3">Your Ongoing Services</h6>
                  <p className="text-muted small mb-4">Click To See Details</p>

                  <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                      <button className="nav-link active">Packages</button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link">Services</button>
                    </li>
                  </ul>

                  <div className="package-card border rounded-3 p-3 mb-3">
                    <h6 className="fw-bold mb-2">
                      Buyer Premium Registration Suite
                    </h6>
                    <ul className="small mb-3 text-muted">
                      <li>Property verification</li>
                      <li>End to end handheld support till registration</li>
                      <li>
                        Infinite consultation with experienced advocate partner
                      </li>
                    </ul>
                    <button className="btn btn-outline-success w-100">
                      Select
                    </button>
                  </div>

                  <div className="package-card border rounded-3 p-3 mb-3 position-relative">
                    <span className="badge bg-light text-danger position-absolute top-0 end-0 mt-2 me-2">
                      Popular
                    </span>
                    <h6 className="fw-bold mb-2">
                      Complete Buyer Assist Package
                    </h6>
                    <ul className="small mb-3 text-muted">
                      <li>Title Search Report from Experienced Advocates</li>
                      <li>Scrutiny of Property Documents</li>
                      <li>Scrutiny of Government Approvals</li>
                      <li>Drafting of Sale Agreement</li>
                      <li>Drafting of Sale Deed</li>
                      <li>Assistance at SRO</li>
                    </ul>
                    <button className="btn btn-outline-success w-100">
                      Select
                    </button>
                  </div>

                  <button className="btn btn-danger w-100 fw-semibold">
                    Explore All Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleAgreementPage;
