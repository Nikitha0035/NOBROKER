import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaBars, FaBell } from "react-icons/fa";
import axios from "axios";
import logo from "../assets/nb_logo.svg";
import NavbarMenu from "./NavbarMenu";
import LoginModal from "./LoginModal";
import "./Navbar.css";
const UserDrop = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  if (!user) return null;

  return (
    <div ref={wrapRef} style={{ position: "relative", display: "inline-block", zIndex: 3000 }}>
      <div className="user-display" onClick={() => setOpen((v) => !v)}>
        <img
          src={
            user?.photo
              ? `http://localhost:5000${user.photo}` 
              : "https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"
          }
          alt="User"
          className="user-icon"
        />
        <span className="auth-link">
          {user.name || `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "User"}
        </span>
        <span style={{ fontSize: 12, color: "#555", marginLeft: 4 }}>▾</span>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 0,
            width: 240,
            background: "#fff",
            border: "1px solid #e1e1e1",
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            padding: "6px 0",
            zIndex: 3001,
          }}
        >
          <div style={ddItemStyle} onClick={() => navigate("/profile")}>
            Profile
          </div>
          <div style={ddItemStyle}>My Chats</div>
          <div style={ddItemStyle}>My Residential Plan ▾</div>
          <div style={ddItemStyle}>My Commercial Plan ▾</div>
          <div style={ddItemStyle}>My Dashboard ▾</div>
      
          <div style={ddItemStyle} onClick={() => navigate("/my-properties")}>
            My Listing ▾
          </div>
          <div style={ddItemStyle}>My Rental Agreements</div>

          <div
            style={{
              ...ddItemStyle,
              color: "#e74c3c",
              borderTop: "1px solid #eee",
              marginTop: 6,
              paddingTop: 12,
              fontWeight: 600,
            }}
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

const ddItemStyle = {
  padding: "10px 16px",
  fontSize: 14,
  color: "#333",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
};

// ---------------- MAIN NAVBAR COMPONENT ---------------- //
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [showListings, setShowListings] = useState(false);
  const [myProperties, setMyProperties] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const isPropertyFlow =
    location.pathname.includes("owner") || location.pathname.includes("property");

  const isRentalPage = location.pathname.includes("rental-agreement");
  const isInteriorsPage = location.pathname.includes("interiors");

  useEffect(() => {
    if (user) fetchMyProperties();
  }, [user]);

  const fetchMyProperties = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/properties?ownerId=${user.phone}`
      );
      setMyProperties(res.data.properties || []);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".bell-wrapper")) {
        setShowListings(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleUserUpdate = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("userUpdated", handleUserUpdate);
    return () => window.removeEventListener("userUpdated", handleUserUpdate);
  }, []);

  const refreshUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleOwnerClick = () => {
    if (!isPropertyFlow) {
      navigate("/owner");
    } else {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    localStorage.setItem("selectedCity", selectedCity);
    window.dispatchEvent(new Event("storage"));
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="nb-header">
        <div className="nb-inner">
          <div className="nb-left">
            {isInteriorsPage && (
              <span className="back-arrow" onClick={handleBackClick}>
                &lt;
              </span>
            )}

            <Link to="/" className="nb-logo">
              <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
            </Link>

            {isRentalPage && <span className="legal-services">Legal Services</span>}
            {isInteriorsPage && <span className="page-title">Home Interiors</span>}
          </div>

          <div className="nb-right">
            {isInteriorsPage ? (
              <>
                <button className="contact-btn">📞 +91 9001376403</button>
                <div className="divider"></div>
                {user && <UserDrop user={user} onLogout={handleLogout} />}
              </>
            ) : isRentalPage ? (
              <>
                <select
                  className="city-dropdown-right"
                  onChange={handleCityChange}
                  value="Change City"
                >
                  <option disabled hidden>
                    Change City
                  </option>
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Delhi</option>
                  <option>Noida</option>
                  <option>Gurgaon</option>
                  <option>Faridabad</option>
                  <option>Nagpur</option>
                </select>

                <div className="divider"></div>
                <button className="my-bookings-btn">My Bookings</button>
                <div className="divider"></div>

                {user && <UserDrop user={user} onLogout={handleLogout} />}
                <div className="divider"></div>

                <div className="menu" onClick={() => setMenuOpen(true)}>
                  <span>Menu</span>
                  <FaBars className="bars" />
                </div>
              </>
            ) : (
              <>
                <button className="pay-btn">
                  <FaCreditCard className="icon" /> Pay Rent
                </button>

                <div
                  className="bell-wrapper"
                  onClick={() => setShowListings(!showListings)}
                >
                  <FaBell className="bell-icon" />
                  {myProperties.length > 0 && (
                    <span className="bell-count">{myProperties.length}</span>
                  )}
                  {showListings && (
                    <div className="bell-dropdown">
                      <h4>My Listings</h4>
                      {myProperties.length === 0 ? (
                        <p className="no-listings">
                          You haven’t listed any properties yet.
                        </p>
                      ) : (
                        myProperties.slice(0, 3).map((p) => (
                          <div key={p._id} className="listing-item">
                            <strong>{p.propertyType}</strong> – {p.city}
                            <div className="listing-sub">
                              ₹{p.rent} | {p.locality}
                            </div>
                          </div>
                        ))
                      )}
                      <Link to="/my-properties" className="view-all-btn">
                        View All Listings →
                      </Link>
                    </div>
                  )}
                </div>

                <button
                  className={`owner-btn ${isPropertyFlow ? "owner-active" : ""}`}
                  onClick={handleOwnerClick}
                >
                  {isPropertyFlow ? "Post Your Property" : "For Property Owners"}
                </button>

                <div className="nbcash-wrapper">
                  <span className="nbcash-badge">New</span>
                  <img
                    src="https://assets.nobroker.in/nb-new/public/nbCash.svg"
                    alt="nbCash Icon"
                    className="nb-cash-icon"
                  />
                </div>

                <div className="divider"></div>

                {user ? (
                  <UserDrop user={user} onLogout={handleLogout} />
                ) : (
                  <>
                    <span className="auth-link" onClick={() => setSignupOpen(true)}>
                      Sign up
                    </span>
                    <div className="divider"></div>
                    <span className="auth-link" onClick={() => setLoginOpen(true)}>
                      Log in
                    </span>
                  </>
                )}

                <div className="divider"></div>
                <div className="menu" onClick={() => setMenuOpen(true)}>
                  <span>Menu</span>
                  <FaBars className="bars" />
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {isRentalPage && <div className="navbar-blue-strip"></div>}

      <NavbarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => {
          setLoginOpen(false);
          refreshUser();
        }}
      />
      <LoginModal
        isOpen={signupOpen}
        onClose={() => {
          setSignupOpen(false);
          refreshUser();
        }}
      />
    </>
  );
};

export default Navbar;
