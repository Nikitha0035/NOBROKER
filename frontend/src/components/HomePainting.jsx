

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAndroid, FaApple, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const leftHeroIcons = [
  { name: "Home Cleaning", icon: "https://img.icons8.com/color/48/000000/cleaning.png" },
  { name: "Packers & Movers", icon: "https://img.icons8.com/color/48/000000/moving-truck.png" },
  { name: "Painting", icon: "https://img.icons8.com/color/48/000000/paint-brush.png" },
  { name: "Sales Agreement", icon: "https://img.icons8.com/color/48/000000/document.png" },
  { name: "Rental Agreement", icon: "https://img.icons8.com/color/48/000000/contract.png" },
  { name: "Electrician, Plumber & Carpenter", icon: "https://img.icons8.com/color/48/000000/tools.png" },
  { name: "Interior and Renovation", icon: "https://img.icons8.com/color/48/000000/interior-design.png" },
  { name: "AC & Appliance Repair", icon: "https://img.icons8.com/color/48/000000/air-conditioner.png" }
];

const offers = [
  { title: "VIP MEMBERSHIP", offer: "Save upto 15% off on Home Services", button: "Buy Now" },
  { title: "Festive Sale", offer: "Flat 25% off on Home Painting", button: "Explore Now" },
  { title: "Lowest rates", offer: "Upto 60% off on Home Cleaning", button: "Book Now" },
  { title: "Same day delivery", offer: "Flat 30% off on Rental agreement", button: "Create Agreement" },
  { title: "House shifting bonanza", offer: "Upto 30% off on Packers & Movers", button: "Estimate Moving Cost" }
];

const servicesIcons = [
  { name: "Festive Painting", icon: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/painting_hs.svg", offer: "Flat 25% off", link: "#" },
  { name: "Deep Cleaning", icon: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/cleaning_hs.svg", offer: "Upto 60% off", link: "#" },
  { name: "Home Repairs", icon: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/repair_hs.png", offer: "Starting @ ₹99", link: "#" }
];

const storyServices = [
  { name: "Bathroom Cleaning", img: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/BathroomCleaning.webp" },
  { name: "Kitchen Cleaning", img: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/KitchenCleaning.webp" },
  { name: "Premium Cleaning", img: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/PremiumHouseCleaning.webp" },
  { name: "Sofa Cleaning", img: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/SofaCleaning.webp" },
  { name: "Full House Cleaning", img: "https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/FullHouseCleaning.webp" }
];

const relocationServices = [
  {
    name: "Between Cities →",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/pnm-CityTempo.png",
    offer: "Get Free Quote"
  },
  {
    name: "Within the City →",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/pnm-betwwen-city.png",
    offer: "Upto 30% off"
  },
  {
    name: "Tempo Service →",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/pnm-CityTempo.png",
    offer: "Move Anything, Anywhere within City @ ₹449"
  }
];

const customerReviews = [
  {
    name: "Manoj Dua",
    service: "Home Cleaning Service",
    rating: 4.5,
    review: "Painting and cleaning services from NoBroker was something that I recently came to know about. Prices are really cheap since there is no middleman jus... see more",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_manoj.webp"
  },
  {
    name: "Daniel Fernandes",
    service: "Home Repair",
    rating: 4.7,
    review: "These guys saved a lot of my time, I didn't have to bother about booking for the carpenter, plumber, electrician separately. They took the project and... see more",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_daniel.webp"
  },
  {
    name: "Kunal Sharma",
    service: "Painting",
    rating: 4.6,
    review: "NoBroker, I must say is much better than all those aggregators like Housejoy and Urbanclap. NoBroker scheduled a house inspection and told me everythi... see more",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_kunal.webp"
  }
];

const servicesData = {
  Bangalore: [
    "Painting Services in Bangalore",
    "Rental Painting Services in Bangalore",
    "Electrician Services in Bangalore",
    "Plumbing Services in Bangalore",
    "Carpentry Services in Bangalore",
    "Cleaning Services in Bangalore",
    "Ac Repair Services in Bangalore",
    "Appliance Services in Bangalore",
    "Salon Services in Bangalore",
    "Packers and Movers in Bangalore",
    "Interior Designers in Bangalore",
    "NRI Services in Bangalore",
    "Sofa Cleaning Services in Bangalore",
    "Kitchen Cleaning Services in Bangalore",
    "Bathroom Cleaning Services in Bangalore",
    "Tempo Service in Bangalore"
  ],
  Chennai: [
    "Painting Services in Chennai",
    "Rental Painting Services in Chennai",
    "Electrician Services in Chennai",
    "Plumbing Services in Chennai",
    "Carpentry Services in Chennai",
    "Cleaning Services in Chennai",
    "Ac Repair Services in Chennai",
    "Appliance Services in Chennai",
    "Salon Services in Chennai",
    "Packers and Movers in Chennai",
    "Interior Designers in Chennai",
    "NRI Services in Chennai",
    "Kitchen Cleaning Services in Chennai",
    "Home Cleaning Services in Chennai",
    "Bathroom Cleaning Services in Chennai",
    "Tempo Service in Chennai"
  ],
  Delhi: [
    "Painting Services in Delhi",
    "Rental Painting Services in Delhi",
    "Electrician Services in Delhi",
    "Plumbing Services in Delhi",
    "Carpentry Services in Delhi",
    "Cleaning Services in Delhi",
    "Ac Repair Services in Delhi",
    "Appliance Services in Delhi",
    "Salon Services in Delhi",
    "Packers and Movers in Delhi",
    "Interior Designers in Delhi",
    "NRI Services in Delhi",
    "Sofa Cleaning Services in Delhi",
    "Kitchen Cleaning Services in Delhi",
    "Home Cleaning Services in Delhi",
    "Bathroom Cleaning Services in Delhi",
    "Tempo Service in Delhi"
  ],
  Hyderabad: [
    "Painting Services in Hyderabad",
    "Rental Painting Services in Hyderabad",
    "Electrician Services in Hyderabad",
    "Plumbing Services in Hyderabad",
    "Carpentry Services in Hyderabad",
    "Cleaning Services in Hyderabad",
    "Ac Repair Services in Hyderabad",
    "Appliance Services in Hyderabad",
    "Salon Services in Hyderabad",
    "Packers and Movers in Hyderabad",
    "Interior Designers in Hyderabad",
    "NRI Services in Hyderabad",
    "Sofa Cleaning Services in Hyderabad",
    "Kitchen Cleaning Services in Hyderabad",
    "Home Cleaning Services in Hyderabad",
    "Bathroom Cleaning Services in Hyderabad",
    "Tempo Service in Hyderabad"
  ],
  Mumbai: [
    "Painting Services in Mumbai",
    "Rental Painting Services in Mumbai",
    "Electrician Services in Mumbai",
    "Plumbing Services in Mumbai",
    "Carpentry Services in Mumbai",
    "Cleaning Services in Mumbai",
    "Ac Repair Services in Mumbai",
    "Appliance Services in Mumbai",
    "Salon Services in Mumbai",
    "Packers and Movers in Mumbai",
    "Interior Designers in Mumbai",
    "NRI Services in Mumbai",
    "Sofa Cleaning Services in Mumbai",
    "Kitchen Cleaning Services in Mumbai",
    "Home Cleaning Services in Mumbai",
    "Tempo Service in Mumbai"
  ],
  Noida: [
    "Painting Services in Noida",
    "Rental Painting Services in Noida",
    "Electrician Services in Noida",
    "Plumbing Services in Noida",
    "Carpentry Services in Noida",
    "Cleaning Services in Noida",
    "Ac Repair Services in Noida",
    "Appliance Services in Noida",
    "Salon Services in Noida",
    "Packers and Movers in Noida",
    "Property Management in Noida",
    "Interior Designers in Noida",
    "NRI Services in Noida",
    "Home Cleaning Services in Noida",
    "Bathroom Cleaning Services in Noida",
    "Tempo Service in Noida"
  ],
  Pune: [
    "Painting Services in Pune",
    "Rental Painting Services in Pune",
    "Electrician Services in Pune",
    "Plumbing Services in Pune",
    "Carpentry Services in Pune",
    "Cleaning Services in Pune",
    "Ac Repair Services in Pune",
    "Appliance Services in Pune",
    "Salon Services in Pune",
    "Packers and Movers in Pune",
    "Interior Designers in Pune",
    "NRI Services in Pune",
    "Sofa Cleaning Services in Pune"
  ]
};


const HomePainting = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div style={{ margin: 0, padding: 0 }}>

      {/* HERO SECTION */}
      <div
        className="w-100"
        style={{
          backgroundColor: "#d0f0fd",
          padding: "20px"
        }}
      >
        {/* Search Bar at top */}
        <div className="input-group mb-4 w-50 mx-auto">
          <input type="text" className="form-control" placeholder="Search for services..." />
          <button className="btn btn-primary">Search</button>
        </div>

        {/* Left Icons + Right Video */}
        <div className="container">
          <div className="row">
            {/* Left Side Icons */}
            <div className="col-md-6 d-flex flex-wrap justify-content-start gap-3">
              {leftHeroIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex flex-column align-items-center p-2 bg-white rounded shadow-sm"
                  style={{ width: "calc(25% - 10px)" }} // 4 icons per row
                >
                  <img src={item.icon} alt={item.name} style={{ width: "50px", height: "50px" }} />
                  <small className="text-center mt-1">{item.name}</small>
                </div>
              ))}
            </div>

            {/* Right Side Video */}
            <div className="col-md-6">
              <iframe
                src="https://www.youtube.com/embed/IJCEpbIHTa8"
                title="UrbanClap | #ExpertsKiApp | Ghar ki Safai | Expert Cleaners"
                style={{ width: "100%", height: "100%", borderRadius: "10px", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>


      {/* offer for you */}

      <div className="container my-5">
        <h3 className="text-center fw-bold mb-4">Offers for You</h3>

        <div
          className="d-flex overflow-auto"
          style={{ gap: "15px", paddingBottom: "10px" }}
        >
          {offers.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-white shadow rounded flex-shrink-0"
              style={{ minWidth: "250px" }}
            >
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.offer}</p>
              <button className="btn btn-primary">{item.button}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid my-5" style={{ backgroundColor: "#e0f7fa", padding: "30px 0" }}>
        <div className="container">
          <div className="row g-3">
            {/* First Row: 2 Cards side by side */}
            {servicesIcons.slice(0, 2).map((service, idx) => (
              <div key={idx} className="col-md-6">
                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{ gap: "15px" }}>
                  {/* Icon */}
                  <img src={service.icon} alt={service.name} style={{ width: "60px", height: "60px" }} />

                  {/* Vertical Divider */}
                  <div style={{ width: "1px", backgroundColor: "#ccc", height: "60px" }}></div>

                  {/* Text */}
                  <div>
                    <h6 className="mb-1">{service.name} →</h6>
                    <small className="text-muted">{service.offer}</small>
                  </div>
                </div>
              </div>
            ))}

            {/* Second Row: 1 Card full width */}
            <div className="col-12">
              <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{ gap: "15px" }}>
                <img src={servicesIcons[2].icon} alt={servicesIcons[2].name} style={{ width: "60px", height: "60px" }} />
                <div style={{ width: "1px", backgroundColor: "#ccc", height: "60px" }}></div>
                <div>
                  <h6 className="mb-1">{servicesIcons[2].name} →</h6>
                  <small className="text-muted">{servicesIcons[2].offer}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="container my-5">
        <h4 className="fw-bold mb-3 text-center">Our Services</h4>
        <div className="row justify-content-center text-center g-4">
          {storyServices.map((service, idx) => (
            <div key={idx} className="col-auto d-flex flex-column align-items-center">
              <img
                src={service.img}
                alt={service.name}
                className="rounded-circle mb-2"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />
              <p className="mb-0">{service.name}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="container-fluid my-5" style={{ backgroundColor: "#e0f7fa", padding: "30px 0" }}>
        <div className="container">
          <h4 className="fw-bold mb-4 text-center">Relocation Simplified</h4>
          <div className="row g-3">
            {/* First Row: 2 Cards side by side */}
            {relocationServices.slice(0, 2).map((service, idx) => (
              <div key={idx} className="col-md-6">
                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{ gap: "15px" }}>
                  {/* Icon */}
                  <img src={service.img} alt={service.name} style={{ width: "60px", height: "60px", objectFit: "cover" }} />

                  {/* Vertical Divider */}
                  <div style={{ width: "1px", backgroundColor: "#ccc", height: "60px" }}></div>

                  {/* Text */}
                  <div>
                    <h6 className="mb-1">{service.name}</h6>
                    <small className="text-muted">{service.offer}</small>
                  </div>
                </div>
              </div>
            ))}

            {/* Second Row: 1 Card full width */}
            <div className="col-12">
              <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{ gap: "15px" }}>
                <img src={relocationServices[2].img} alt={relocationServices[2].name} style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                <div style={{ width: "1px", backgroundColor: "#ccc", height: "60px" }}></div>
                <div>
                  <h6 className="mb-1">{relocationServices[2].name}</h6>
                  <small className="text-muted">{relocationServices[2].offer}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid my-5" style={{ backgroundColor: "#e0f7fa", padding: "30px 0" }}>
        <div className="container">
          <h4 className="fw-bold mb-4 text-center">Customer Reviews</h4>
          <div className="row g-4">
            {customerReviews.map((review, idx) => (
              <div key={idx} className="col-md-4">
                <div className="d-flex flex-column align-items-center p-3 bg-white rounded shadow-sm h-100 text-center">
                  <img
                    src={review.img}
                    alt={review.name}
                    style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px" }}
                  />
                  <h6 className="mb-1">{review.name}</h6>
                  <small className="text-muted">{review.service}</small>
                  <div className="my-2">
                    <span className="fw-bold">{review.rating} ⭐</span>
                  </div>
                  <p className="text-muted">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="card shadow-sm p-3">
          <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>

          <div>
            {[
              {
                question: "How to book a service on NoBroker?",
                answer: "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service."
              },
              {
                question: "Who is going to fulfill the service?",
                answer: "The service will be fulfilled by verified professionals partnered with NoBroker."
              },
              {
                question: "Who is a NoBroker Partner?",
                answer: "NoBroker Partners are experienced service providers verified and onboarded by NoBroker to ensure quality service."
              },
              {
                question: "What all services are available on NoBroker?",
                answer: "NoBroker provides services like Home Cleaning, Painting, Packers & Movers, Electrical, Plumbing, Carpentry, AC & Appliance Repair, and more."
              },
              {
                question: "How are NoBroker services different from other online portals?",
                answer: "NoBroker services are reliable, verified, transparent in pricing, and managed end-to-end with minimal hassle, unlike other platforms."
              }
            ].map((faq, index) => (
              <div key={index}>
                {/* Question */}
                <div
                  className="d-flex justify-content-between align-items-center py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h5 className="mb-0">{faq.question}</h5>
                  <span style={{ fontSize: "1.5rem" }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <div className="p-2">
                    <p className="mb-0">{faq.answer}</p>
                  </div>
                )}

                {/* Divider */}
                {index < 4 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="container my-5">
        <h3 className="text-center fw-bold mb-4">Services We Offer</h3>

        {Object.keys(servicesData).map((city, idx) => (
          <div key={idx} className="mb-5">
            <h5 className="fw-bold mb-3">In {city}</h5>
            <div className="d-flex flex-wrap gap-2 bg-light p-3 rounded">
              {servicesData[city].map((service, i) => (
                <div
                  key={i}
                  className="p-2 bg-white border rounded flex-shrink-0"
                  style={{ minWidth: "200px", textAlign: "center" }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>




      {/* Footer  */}



      <div className="container my-5">
        <div className="card shadow-sm p-4 text-center text-md-start">
          <div className="row align-items-start">
            {/* LEFT - Find Property */}
            <div className="col-md-6 border-end border-2">
              <h5 className="fw-bold">Find Property</h5>
              <p className="text-muted mb-2">Select from thousands of options, without brokerage.</p>
              <button className="btn btn-primary btn-sm rounded-pill px-3">Find Now</button>
            </div>

            {/* RIGHT - List Property */}
            <div className="col-md-6 mt-4 mt-md-0 ps-md-4">
              <h5 className="fw-bold">List Your Property</h5>
              <p className="text-muted mb-2">For Free. Without any brokerage.</p>
              <button className="btn btn-outline-primary btn-sm rounded-pill px-3">Free Posting</button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <hr className="my-4" />
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
            {[
              "About Us",
              "Careers",
              "Terms & Conditions",
              "Privacy Policy",
              "Testimonials",
              "Sitemap",
              "FAQs",
            ].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-decoration-none text-dark small fw-semibold"
                style={{ transition: "0.2s" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* APP LINKS */}
          <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
            <a href="#" className="text-dark fs-5">
              <FaAndroid />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaApple />
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
            <a href="#" className="text-dark fs-5"><FaFacebook /></a>
            <a href="#" className="text-dark fs-5"><FaTwitter /></a>
            <a href="#" className="text-dark fs-5"><FaInstagram /></a>
            <a href="#" className="text-dark fs-5"><FaLinkedin /></a>
            <a href="#" className="text-dark fs-5"><FaYoutube /></a>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center text-muted small mb-0">
            © 2013–25 NoBroker Technologies Solutions Pvt. Ltd.
          </p>
        </div>
      </div>


    </div>
  );
};

export default HomePainting;
