import React, { useState } from "react";
import "./PropertyLegalServices.css";

const PropertyLegalServices = () => {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <div className="sale-agreement-page">
    
      <section className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Due Diligence/Verification"
            className="top-search-input"
          />
        </div>
      </section>
      <section className="hero-section">
        <div className="hero-container">
          {/* LEFT SIDE */}
          <div className="left-content">
            {/* Title */}
            <h1 className="hero-title">Online Sales Agreement in Bangalore</h1>
            <p className="hero-subtitle">
              Benefits of choosing NoBroker Legal Services
            </p>

            {/* Benefit Cards */}
            <div className="feature-cards">
              {[
                {
                  icon: "🏠",
                  title: "Certified Advocates",
                  text: "Senior Advocates with experience 15yrs+",
                },
                {
                  icon: "⚖",
                  title: "Dedicated Legal Expert",
                  text: "Door step assistance for all documentations",
                },
                {
                  icon: "💰",
                  title: "Lowest Price Pre-Negotiated",
                  text: "Transparent pricing with fastest process",
                },
              ].map((item, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{item.icon}</div>
                  <div className="feature-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Refund Guaranteed */}
            <div className="refund-badge">REFUND GUARANTEED</div>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="right-panel">
            <div className="panel-box">
              {/* Sticky Header */}
              <div className="panel-header">
                <div className="ongoing-header">
                  <h4>Your Ongoing Services</h4>
                  <p>Click To See Details</p>
                </div>

                {/* Tabs */}
                <div className="tab-navigation">
                  <span
                    className={activeTab === "packages" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("packages")}
                  >
                    Packages
                  </span>
                  <span
                    className={activeTab === "services" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("services")}
                  >
                    Services
                  </span>
                </div>
              </div>

              {/* Packages Content */}
              <div className="panel-content">
                {[
                  {
                    title: "Buyer Premium Registration Suite",
                    list: [
                      "Property verification",
                      "End to end handheld support till registration",
                      "Infinite consultation with experienced advocate partner",
                    ],
                  },
                  {
                    title: "Complete Buyer Assist Package",
                    list: [
                      "Title Search Report from Experienced advocates",
                      "Property verification & scrutiny",
                      "Consultation with advocates",
                    ],
                    popular: true,
                  },
                ].map((pkg, i) => (
                  <div key={i} className="package-card">
                    <h5>{pkg.title}</h5>
                    <ul>
                      {pkg.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    {pkg.popular && (
                      <span className="popular-tag">Popular</span>
                    )}
                    <button className="select-btn">Select</button>
                  </div>
                ))}
              </div>

              {/* Sticky Bottom Button */}
              <div className="panel-footer">
                <button className="explore-btn">Explore All Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CONSULT LEGAL EXPERT SECTION ===== */}
      <section className="content-section white-bg">
        <div className="container">
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
        <div className="container">
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
        <div className="container">
          <h2 className="section-title center">We Work with Expert Lawyers</h2>
          <div className="lawyers-grid">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="lawyer-card">
                <div className="lawyer-avatar"></div>
                <p>Expert Lawyer {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PURCHASE JOURNEY SECTION ===== */}
      <section className="content-section gray-bg">
        <div className="container">
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
        <div className="container">
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
      <section className="content-section gray-bg">
        <div className="container">
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
        <div className="container">
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

          {/* Find & List Property */}
          <div className="find-list-section">
            <div className="find-list-card">
              <h4>Find Property</h4>
              <p>Select from thousands of options, without brokerage.</p>
              <button className="action-btn">Find Now</button>
            </div>

            <div className="find-list-card">
              <h4>List Your Property</h4>
              <p>For Free. Without any brokerage.</p>
              <button className="action-btn">Free Posting</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container center">
          <div className="footer-links">
            {[
              "About Us",
              "Careers",
              "Terms & Conditions",
              "Privacy Policy",
              "Testimonials",
              "Sitemap",
              "FAQs",
            ].map((link, i) => (
              <a key={i} href="#" className="footer-link">
                {link}
              </a>
            ))}
          </div>

          <div className="app-badges">
            <div className="app-badge">Google Play</div>
            <div className="app-badge">App Store</div>
          </div>

          <div className="social-links">
            {["📘", "🐦", "📷", "💼", "▶"].map((icon, i) => (
              <a key={i} href="#" className="social-link">
                {icon}
              </a>
            ))}
          </div>

          <p className="copyright">
            © 2013-25 NoBroker Technologies Solutions Pvt. Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PropertyLegalServices;