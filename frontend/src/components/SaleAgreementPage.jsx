


import "bootstrap/dist/css/bootstrap.min.css";
import "./SaleAgreementPage.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import GooglePlay from "../assets/GooglePay.png";
import Apple from "../assets/Apple.svg";

const SaleAgreementPage = () => {
  return (
    <section className="sale-agreement">
      <div className="container-fluid g-0">
        <div className="sale-bg-section d-flex flex-column justify-content-center">
          <div className="container px-lg-5 px-md-4 px-3 col-lg-8 col-md-9">
            <div className="row align-items-start g-5">
              {/* ===== LEFT SIDE CONTENT ===== */}
              <div className="col-lg-7 col-md-12 text-white">
                {/* 🔍 Search Bar */}
                <div className="search-wrapper mb-4">
                  <input
                    type="text"
                    placeholder="Search Property Sale Deed..."
                    className="form-control form-control-lg search-input"
                  />
                </div>

                {/* Title + Subtitle */}
                <h2 className="fw-bold heading mb-2">
                  Online Sales Agreement in Bangalore
                </h2>
                <p className="sub-heading mb-4">
                  Benefits of choosing NoBroker Legal Services
                </p>

                {/* Features */}
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

                {/* Refund Banner */}
                <div className="text-center mt-4">
                  <img
                    src="https://assets.nobroker.in/hs-new/public/SalesAgreement/refundImg.svg"
                    alt="Refund Guaranteed"
                    style={{ height: "60px" }}
                  />
                </div>
              </div>

              {/* ===== RIGHT STICKY FORM ===== */}
              <div className="col-lg-3 col-md-11">
                <div className="sticky-form bg-white p-4 rounded-4 shadow-sm" style={{ width: "30%" }}>
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

                  {/* Package 1 */}
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

                  {/* Package 2 */}
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

      <div className="col-lg-5 col-md-12 text-white" style={{ marginLeft: "16%" }}>



        {/* ===== WHY CONSULT LEGAL EXPERT SECTION ===== */}
        <section className="content-section white-bg">
          <div className="container-small">
            <div className="nb-assured">
              <div className="assured-badge">✓</div>
              <span>NB Assured</span>
            </div>

            <h2 className="section-title">Why consult a Legal Expert?</h2>
            <p className="section-desc">
              Purchasing a property is the single biggest and expensive affair a
              person makes in their lifetime. A real estate attorney can make the
              entire purchasing process easier and safe.
            </p>

            <div className="info-grid">
              {[
                {
                  title: "Documents Scrutiny",
                  desc: "Before the property deed is finalised, property advocate throughly examines all the property documents, such as the title check and sale deed.",
                  icon: "📄",
                },
                {
                  title: "Protection from Legal Conflicts",
                  desc: "A legal professional checks the property for any pending legal matters that could put a buyer in jeopardy.",
                  icon: "👤",
                },
                {
                  title: "Protection against shady sellers",
                  desc: "Legal experts verify the authenticity of sellers and ensure all documentation is legitimate to protect buyers from fraud.",
                  icon: "🛡",
                },
              ].map((item, i) => (
                <div key={i} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ===== PACKAGES SECTION ===== */}
        <section className="content-section gray-bg">
          <div className="container-small">
            <h2 className="section-title center">
              What do the packages include?
            </h2>

            <div className="package-tabs">
              {["Due Diligence", "Buyer Assist", "Registration"].map((tab, i) => (
                <button key={i} className={i === 0 ? "tab-btn active" : "tab-btn"}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="package-details">
              {[
                "✓ Verify property documents before you buy",
                "✓ Title Search Report",
                "✓ Scrutiny of Technical Documents",
                "✓ Scrutiny of Govt. Approvals",
              ].map((item, i) => (
                <div key={i} className="package-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ===== LAWYERS SECTION ===== */}
        <section className="content-section white-bg">
          <div className="container-small">
            <h2 className="section-title center">We Work with Expert Lawyers</h2>
            <div className="lawyers-grid">
              {[
                {
                  name: "Vivek Agarwal",
                  imgUrl: "https://assets.nobroker.in/hs-new/public/SalesAgreement/VIVEK_AGARWAL.webp"
                },
                {
                  name: "Archana Shukla",
                  imgUrl: "https://assets.nobroker.in/hs-new/public/SalesAgreement/Archana_Shukla.webp"
                },
                {
                  name: "S SuJatha",
                  imgUrl: "https://assets.nobroker.in/hs-new/public/SalesAgreement/S_SUJATHA.webp"
                },
                {
                  name: "H Ravi Shankar",
                  imgUrl: "https://assets.nobroker.in/hs-new/public/SalesAgreement/H_RAVI_SHANKAR.webp"
                }
              ].map((lawyer, i) => (
                <div key={i} className="lawyer-card">
                  <div className="lawyer-avatar">
                    <img src={lawyer.imgUrl} alt={lawyer.name} />
                  </div>
                  <p>{lawyer.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ===== PURCHASE JOURNEY SECTION ===== */}
        <section className="content-section gray-bg">
          <div className="container-small">
            <h2 className="section-title center">
              How We Can Help In Your Purchase Journey
            </h2>

            <div className="journey-grid">
              <div className="journey-card">
                <h3 className="journey-title active">During Purchase</h3>
                <p className="journey-desc">
                  Documents Verifications and Title Check
                </p>
                <button className="journey-btn active">
                  Due Diligence Package →
                </button>
              </div>

              <div className="journey-card">
                <h3 className="journey-title">Registration</h3>
                <p className="journey-desc">Registration of Sale Deed at SRO</p>
                <button className="journey-btn">Registration Package →</button>
              </div>

              <div className="journey-card">
                <h3 className="journey-title green">Post Registration</h3>
                <p className="journey-desc">Value Added Services</p>
                <button className="journey-btn">
                  Khata Transfer, Tax Name Change →
                </button>
              </div>
            </div>
            {/* NB Protection */}
            <div className="nb-protection">
              <div className="protection-header">
                <div className="protection-icon">🛡</div>
                <span>NB Protection</span>
              </div>
              <h3>Get end to end assistance in buying a property</h3>

              <div className="protection-items">
                <div className="protection-item">
                  <div className="check-icon">✅</div>
                  <div>
                    <h4>Sale Agreement Drafting & Execution</h4>
                    <p>Drafted by expert lawyers mentioning all clauses.</p>
                  </div>
                </div>

                <div className="protection-item">
                  <div className="check-icon">✅</div>
                  <div>
                    <h4>Sale Deed Execution & Property Registration</h4>
                    <p>Avoid the long queues and hassle.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* On Demand Services */}
            <div className="on-demand">
              <h3>On Demand Services</h3>
              <div className="service-tags">
                {[
                  "PROPERTY TITLE CHECK",
                  "GUIDANCE VALUE",
                  "MISSING DOCUMENTS ASSISTANCE",
                  "GIFT DEED",
                  "ENCROACHMENT CHECK",
                  "POWER OF ATTORNEY",
                  "KHATA TRANSFER",
                  "OCCUPANCY CERTIFICATE & ENCUMBRANCE",
                ].map((service, i) => (
                  <button key={i} className="service-tag">
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ===== TESTIMONIALS SECTION ===== */}
        <section className="content-section testimonial-bg">
          <div className="container-small">
            <div className="testimonials-grid">
              {[
                {
                  name: "Raj Sharma",
                  rating: "4.5 ⭐",
                  initial: "RS",
                  color: "#4caf50",
                  text: "I had my doubts about investing in Bangalore Real Estate due to many stories of fraud. However, NoBroker's Legal Team did their due diligence. Their...",
                },
                {
                  name: "Santosh Gupta",
                  rating: "4.7 ⭐",
                  initial: "SG",
                  color: "#8bc34a",
                  text: "I was extremely hesitant about investing in a property because the fear of being duped was a constant source of worry for me. Thanks to NoBroker I wa...",
                },
                {
                  name: "Shlok upadhyay",
                  rating: "4.6 ⭐",
                  initial: "SU",
                  color: "#00bcd4",
                  text: "NoBroker made my flat purchase easy and stress-free. My manager Meena was patient enough to attend to my calls and helped me understand all my querie...",
                },
              ].map((review, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-header">
                    <div
                      className="testimonial-avatar"
                      style={{ background: review.color }}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <p className="reviewer-name">{review.name}</p>
                      <p className="reviewer-rating">{review.rating}</p>
                    </div>
                  </div>
                  <p className="review-text">
                    {review.text}{" "}
                    <span className="see-more">see more</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="content-section white-bg">
          <div className="container-small">
            <h2 className="section-title center">Top questions asked</h2>

            <div className="faq-list">
              {[
                "What is legal assistance/ legal opinion of the property?",
                "When should I get the property documents verified?",
                "Who are these experts for consultation? Can I choose them to talk to?",
                "What's the Role of a Legal Expert?",
                "What documents are verified in the Property Verification process?",
                "Why is a property report required?",
                "How long does property verification take?",
                "How is the stamp duty on Property Registration calculated in India?",
              ].map((question, i) => (
                <div key={i} className="faq-item">
                  <span>{question}</span>
                  <span className="faq-icon">+</span>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ===== MORE SERVICES & CITIES SECTION ===== */}
        <section className="content-section white-bg">
          <div className="container-small">
            <h3 className="subsection-title">More services</h3>
            <div className="link-grid">
              {[
                "Painting Services in Bangalore",
                "Rental Painting Services in Bangalore",
                "Electrician Services in Bangalore",
                "Plumbing Services in Bangalore",
                "Carpentry Services in Bangalore",
                "Cleaning Services in Bangalore",
                "Ac Repair Services in Bangalore",
                "Appliance Services in Bangalore",
                "Salon Services in Bangalore",
                "Rental Agreement in Bangalore",
                "Tenant Verification in Bangalore",
                "Khata Transfer Services",
                "Bescom Electricity Bill Name Change Service",
                "Property Tax Name Change Services",
                "Packers and Movers in Bangalore",
              ].map((service, i) => (
                <a key={i} href="#" className="service-link">
                  {service}
                </a>
              ))}
            </div>

            <h3 className="subsection-title">Sales Agreement in other cities</h3>
            <div className="link-grid">
              {[
                "Sales Agreement in Bangalore",
                "Sales Agreement in Mumbai",
                "Sales Agreement in Chennai",
                "Sales Agreement in Pune",
                "Sales Agreement in Hyderabad",
                "Sales Agreement in Gurgaon",
                "Sales Agreement in Delhi",
                "Sales Agreement in Noida",
                "Sales Agreement in Greater Noida",
                "Sales Agreement in Ghaziabad",
                "Sales Agreement in Faridabad",
                "Sales Agreement in Ahmedabad",
                "Sales Agreement in Jaipur",
                "Sales Agreement in Lucknow",
              ].map((city, i) => (
                <a key={i} href="#" className="service-link">
                  {city}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NOBROKER SERVICES SECTION ===== */}
        <section className="content-section white-bg">
          <div className="container-small">
            <h3 className="subsection-title">NoBroker services</h3>

            <div className="services-grid">
              <div>
                <h4 className="service-category">Buy</h4>
                <div className="category-links">
                  {[
                    "Home Loan",
                    "Property Legal Services",
                    "Interiors",
                    "Sales Agreement",
                    "NoBroker For NRI's",
                    "New Builder Project",
                    "EMI Calculator",
                    "Home Loan Balance Transfer",
                    "Home Loan Eligibility Check",
                    "Apply Home Loan",
                    "Pre Approved Home Loan",
                    "Buy / Sell Property Questions",
                  ].map((item, i) => (
                    <a key={i} href="#" className="service-link">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="service-category">Rent</h4>
                <div className="category-links">
                  {[
                    "Rental Agreement",
                    "Pay Rent",
                    "Refer and Earn",
                    "Home Services",
                    "Packers and Movers",
                    "Property Management in India",
                    "Home Services Questions",
                    "Rent Services Questions",
                  ].map((item, i) => (
                    <a key={i} href="#" className="service-link">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </section>



        {/* Find & List Property */}
        <section className="content-section white-bg">


          <div className="container-small d-flex flex-column flex-md-row justify-content-center align-items-stretch px-md-5">
            {/* Left Section */}
            <div className="cta-box d-flex flex-column justify-content-center align-items-center text-center flex-fill">
              <h6 className="fw-semibold mb-1">Find Property</h6>
              <p className="text-muted small mb-2">
                Select from thousands of options, without brokerage.
              </p>
              <button className="btn btn-dark btn-sm mt-2">Find Now</button>
            </div>

            {/* Divider */}
            <div className="divider-wrapper d-none d-md-flex justify-content-center align-items-center">
              <div className="cta-divider"></div>
            </div>

            {/* Right Section */}
            <div className="cta-box d-flex flex-column justify-content-center align-items-center text-center flex-fill">
              <h6 className="fw-semibold mb-1">List Your Property</h6>
              <p className="text-muted small mb-2">
                For Free. Without any brokerage.
              </p>
              <button className="btn btn-dark btn-sm mt-2">Free Posting</button>


            </div>




          </div>
        </section>


        <section className="content-section white-bg">
          <div className="container-small">



            {/* Top Footer Links */}
            <div className="footer-top-links d-flex flex-wrap justify-content-center gap-4 mb-4">
              <span>About Us</span>
              <span>Careers</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Testimonials</span>
              <span>Sitemap</span>
              <span>FAQs</span>
            </div>

            {/* Divider Line */}
            <hr className="footer-divider" />

            {/* App Store Buttons */}
            <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="store-btn"
              />
              <img
                src={Apple}
                alt="Download on the App Store"
                className="store-btn"
              />
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
              <div className="social-circle"><FaFacebookF /></div>
              <div className="social-circle"><FaTwitter /></div>
              <div className="social-circle"><FaInstagram /></div>
              <div className="social-circle"><FaLinkedinIn /></div>
              <div className="social-circle"><FaYoutube /></div>

            </div>

            {/* Copyright */}
            <small className="text-muted  justify-content-center " style={{ marginLeft: "31%" }}>
              © 2025 NoBroker Technologies Solutions Pvt. Ltd.
            </small>




          </div>
        </section>




      </div>
    </section>




  );
};

export default SaleAgreementPage;
