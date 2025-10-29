

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRef, useEffect } from "react";


const NoBrokerForNRIs = () => {

  const datePickerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsDatePickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const slotContainerRef = useRef(null);


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    role: "",
  });


  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");

  const [bookingId, setBookingId] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.role) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/bookings", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        role: formData.role,
      });
      if (response.data.success) {
        setBookingId(response.data.booking._id);
        setStep(2);
      } else {
        alert("Failed to create booking.");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("There was an error while submiting  booking.");
    }
  };







  // Step 2: Select a slot
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    updateSlot(selectedDate, slot);
  };

  // Step 3: Update the slot
  const updateSlot = async (selectedDate, selectedSlot) => {
    if (!selectedSlot || !selectedDate) {
      alert("Please select a valid date and slot.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/bookings/${bookingId}/slot`,
        {
          selectedDate: selectedDate.toISOString(),
          selectedSlot: selectedSlot,
        }
      );

      if (response.data.success) {
        // alert("Booking slot updated successfully.");
        setStep(3);
      } else {
        alert("Failed to update booking slot.");
      }
    } catch (error) {
      console.error("Error updating slot:", error);
      alert("There was an error updating the slot.");
    }
  };





  const handleSchedule = () => {

    if (!selectedSlot || selectedSlot.trim() === "") {
      alert("Please select a time slot.");
      return;
    }
    setStep(3);
    // setTimeout(() => {
    //   setStep(1);
    //   setSelectedSlot("");
    //   setIsDatePickerOpen(false);
    // }, 0);

  };

  const toggleReadMore = () => setExpanded(!expanded);
  const [expanded, setExpanded] = useState(false);



  return (




    <div className="position-relative">
      {/* 🔹 Hero Section */}
      <div
        className="position-relative text-white"
        style={{
          backgroundImage:
            "url('https://www.nobroker.in/blog/wp-content/uploads/2024/09/property_1_variant2-scaled.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "600px",
          width: "100%",
        }}
      >


        {/* Content container */}
        <div className="container position-relative" style={{ zIndex: 2, paddingTop: "99px" }}>
          <div className="row align-items-start" style={{ minHeight: "100vh" }}>
            <div className="col-lg-6 text-start">
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "2rem",
                  lineHeight: "1.3",
                  color: "#fff",
                  textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                }}
              >
                Are you an NRI looking to BUY, SELL, or RENT property?
              </h1>
              <p
                className="lead"
                style={{
                  fontSize: "1.25rem",
                  maxWidth: "640px",
                  color: "#f2f2f2",
                }}
              >
                Get end-to-end assistance from tax filing to legal matters & more
              </p>
            </div>



            {/* Right side form  */}
            <div className="col-lg-5">
              <div
                className="position-fixed"
                style={{ top: "100px" }}
              >
                <div
                  className="bg-white text-dark rounded-4 shadow-lg p-4"
                  style={{
                    width: "640px",
                    marginLeft: "200px",
                    borderRadius: "15px",
                  }}
                >




                  {/* ===================== STEP 1 ===================== */}
                  {step === 1 && (
                    <>
                      <h5 className="fw-bold mb-2">Got a property to be managed?</h5>
                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                        Just fill up the form & we will take care of the rest  -----------------------------------------------
                      </p>

                      <form onSubmit={handleSubmitForm}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control form-control-lg mb-3"
                          placeholder="Name"
                        />

                        <div className="mb-3 d-flex">
                          <span className="border px-3 d-flex align-items-center bg-light">+91</span>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Phone Number"
                          />
                        </div>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control form-control-lg mb-3"
                          placeholder="Email ID"
                        />

                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="form-select form-select-lg mb-3"
                        >
                          <option value="">City</option>
                          <option>Bangalore</option>
                          <option>Mumbai</option>
                          <option>Chennai</option>
                          <option>Delhi</option>
                        </select>

                        <label className="fw-semibold d-block mb-2">Are you a</label>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                          {["OWNER", "SELLER", "TENANT", "BUYER"].map((role) => (
                            <div key={role} className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="role"
                                value={role}
                                checked={formData.role === role}
                                onChange={handleChange}
                              />
                              <label className="form-check-label">{role}</label>
                            </div>
                          ))}
                        </div>

                        <button
                          type="submit"
                          className="btn w-100 fw-semibold py-2"
                          style={{
                            backgroundColor: "#2c847c",
                            color: "#fff",
                            fontSize: "1rem",
                            borderRadius: "10px",
                          }}
                        >
                          Talk to Us Today
                        </button>
                      </form>
                    </>
                  )}

                  {/* ===================== STEP 2 ===================== */}


                  {step === 2 && (
                    <>
                      <h5 className="fw-bold mb-3">Select preferred call back slot</h5>
                      <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
                        Callback time is based on your local country time zone
                      </p>

                      {/* --- Date Buttons --- */}
                      <div
                        className="d-flex justify-content-center align-items-center gap-3 mb-4"
                        style={{ textAlign: "center" }}
                      >
                        {/* TODAY */}
                        <button
                          className={`btn ${selectedDate.toDateString() === new Date().toDateString()
                            ? "btn-success text-white"
                            : "btn-outline-secondary"
                            }`}
                          onClick={() => setSelectedDate(new Date())}
                          style={{
                            borderRadius: "25px",
                            padding: "8px 24px",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Today
                        </button>

                        {/* TOMORROW */}
                        <button
                          className={`btn ${selectedDate.toDateString() ===
                            new Date(Date.now() + 86400000).toDateString()
                            ? "btn-success text-white"
                            : "btn-outline-secondary"
                            }`}
                          onClick={() => setSelectedDate(new Date(Date.now() + 86400000))}
                          style={{
                            borderRadius: "25px",
                            padding: "8px 24px",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Tomorrow
                        </button>


                        {/* SELECT DATE PICKER */}
                        <div style={{ position: "relative" }}>
                          <button
                            type="button"
                            className={`btn ${isDatePickerOpen ? "btn-success text-white" : "btn-outline-secondary"
                              }`}
                            style={{
                              borderRadius: "25px",
                              padding: "8px 20px",
                              fontWeight: 500,
                              fontSize: "0.95rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                            onClick={() => setIsDatePickerOpen((prev) => !prev)}
                          >
                            <i className="bi bi-calendar3"></i> Select Date
                          </button>

                          {isDatePickerOpen && (
                            <div
                              style={{
                                position: "absolute",
                                top: "110%",
                                right: 0,
                                zIndex: 9999,
                              }}
                            >
                              <DatePicker
                                selected={selectedDate}
                                onChange={(date) => {
                                  setSelectedDate(date);
                                  setIsDatePickerOpen(false);
                                }}
                                inline
                                calendarClassName="custom-calendar"
                                todayButton="Today"
                              />
                            </div>
                          )}
                        </div>


                      </div>

                      {/* --- Estimated Callback --- */}
                      <div
                        className="p-3 rounded text-center mb-4"
                        style={{
                          backgroundColor: "#f7f7f7",
                          borderRadius: "10px",
                        }}
                      >
                        <strong>Estimated time of callback</strong>
                        <div className="mt-1 fw-semibold">
                          {selectedDate.toLocaleDateString()} {selectedSlot ? selectedSlot : ""}

                        </div>
                      </div>

                      {/* --- SLOT LIST --- */}

                      <div className="text-center" ref={slotContainerRef}>
                        {(() => {
                          const allSlots = [
                            { label: "9:00 AM - 12:00 PM", start: 9, end: 12 },
                            { label: "12:00 PM - 3:00 PM", start: 12, end: 15 },
                            { label: "3:00 PM - 6:00 PM", start: 15, end: 18 },
                            { label: "6:00 PM - 9:00 PM", start: 18, end: 21 },
                          ];

                          const now = new Date();
                          const isToday = selectedDate.toDateString() === now.toDateString();
                          const currentHour = now.getHours();

                          //  Filter slots dynamically for today
                          const visibleSlots = allSlots.filter((slot) => {
                            if (!isToday) return true;
                            return slot.start > currentHour;
                          });


                          if (isToday && visibleSlots.length === 0) {
                            return (
                              <div className="text-muted mb-3">
                                All today's slots are over. Please choose tomorrow.
                              </div>
                            );
                          }

                          // ✅ Render available slots
                          return visibleSlots.map((slot) => (
                            <div
                              key={slot.label}
                              onClick={() => handleSlotSelect(slot.label)}
                              className={`mb-3 py-2 rounded fw-semibold ${selectedSlot === slot.label
                                ? "bg-success text-white border-0"
                                : "bg-light text-dark border"
                                }`}
                              style={{
                                borderRadius: "10px",
                                cursor: "pointer",
                                width: "100%",
                                maxWidth: "350px",
                                margin: "0 auto",
                                transition: "0.2s",
                              }}
                            >
                              {slot.label}
                            </div>
                          ));
                        })()}
                      </div>


                      {/* --- SCHEDULE BUTTON --- */}
                      <div className="text-center mt-4">
                        <button
                          className="btn fw-semibold  schedule-btn"
                          style={{
                            backgroundColor: "#2c847c",
                            color: "#fff",
                            width: "100%",
                            maxWidth: "350px",
                            borderRadius: "10px",
                            padding: "10px 0",
                          }}
                          onClick={handleSchedule}
                        >
                          Schedule Slot
                        </button>
                      </div>
                    </>
                  )}







                  {/* ===================== STEP 3 ===================== */}
                  {step === 3 && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2000,
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "12px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                          padding: "40px 30px",
                          maxWidth: "420px",
                          width: "90%",
                          textAlign: "center",
                        }}
                      >
                        {/* Check icon */}
                        <div
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            backgroundColor: "#2c847c",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2rem",
                            margin: "0 auto 20px",
                          }}
                        >
                          ✓
                        </div>

                        {/* Text */}
                        <h5 style={{ fontWeight: 700, marginBottom: "8px" }}>
                          Estimated time of call
                        </h5>
                        <p style={{ marginBottom: "4px", color: "#666" }}>
                          Expect a call from us at
                        </p>
                        <p style={{ fontWeight: 600, color: "#000", marginBottom: "20px" }}>
                          {new Date(selectedDate).toLocaleDateString()} {selectedSlot}
                        </p>

                        {/* Button */}
                        <button
                          onClick={() => setStep(1)}
                          style={{
                            border: "1px solid #525151ff",
                            borderRadius: "25px",

                            padding: "8px 20px",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                        >
                          Back to Form
                        </button>
                      </div>
                    </div>
                  )}



                </div>





              </div>
            </div>







          </div >
        </div >
      </div >



      {/* 🔹 Below content with shadow boxes */}





      < div className="container my-5" >

        <div className="col-lg-7 col-md-9 col-sm-12">
          <div className="p-4 bg-white shadow-sm rounded-4 mb-4">
            <h3 className="fw-bold mb-3">
              NRI Property Management Services in India by NoBroker
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
              Managing property in India while living abroad can be extremely challenging, especially while you try to juggle varying time zones, legal hurdles, taxation regulations, and more. With NoBroker's NRI property management services in India, it all becomes a seamless and hassle-free experience. With NRI property services, you can enjoy peace of mind knowing your investment is in safe hands, even when you are thousands of miles away.
            </p>
          </div>




          {/* 🔹 Property Management Section */}
          <div className="container my-5">
            <div className=" bg-white shadow-sm rounded-3  overflow-hidden">


              {/* Main Image */}
              <div className="text-center mb-4">
                <img
                  src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_39-6.webp"
                  alt="Property Management Banner"
                  className="img-content rounded-0"
                  style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                />
              </div>

              {/* Three Static Icons */}
              <div
                className="d-flex justify-content-center flex-wrap mb-4"
                style={{ gap: "80px" }}
              >
                {/* 1️⃣ Icon 1 */}
                <div className="text-center">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-14.webp"
                    alt="Lifetime Tenant Search"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                    Lifetime Tenant Search
                  </p>
                </div>

                {/* 2️⃣ Icon 2 */}
                <div className="text-center">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-15.webp"
                    alt="Dedicated Property Manager"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                    Dedicated Property Manager
                  </p>
                </div>

                {/* 3️⃣ Icon 3 */}
                <div className="text-center">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-16.webp"
                    alt="On-Time Rent Collection"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                    On-Time Rent Collection
                  </p>
                </div>
              </div>


              {/* Green Button */}
              <div className="text-center">
                <button
                  className="btn fw-semibold px-5 py-2"
                  style={{
                    width: "100%",
                    border: "2px solid #00a550",
                    color: "#00a550",
                    borderRadius: "8px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#00a550";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#00a550";
                  }}
                >
                  Property Management Services
                </button>
              </div>
            </div>
          </div>



          {/* 🔹 Seller Services Plans */}
          <div className="container my-5">
            <div className=" bg-white shadow-sm rounded-4  overflow-hidden">

              <div className="text-center mb-4">
                <img
                  src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_39-7.webp"
                  alt="explore seller plan"
                  className="img-content rounded-0"
                  style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                />
              </div>




              <div
                className="d-flex justify-content-center flex-wrap mb-4"
                style={{ gap: "50px" }}
              >
                {/* 1️⃣ Icon 1 */}
                <div className="text-center">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-15.webp"
                    alt="Dedicated Property Manager"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                    Dedicated Property Manager
                  </p>
                </div>

                {/* 2️⃣ Icon 2 */}
                <div className="text-center">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-17.webp"
                    alt="Legal & Tax Assistance"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                    Legal & Tax Assistance
                  </p>
                </div>

                {/* 3️⃣ Icon 3 */}
                <div className="text-center">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-18.webp"
                    alt="Guaranteed Buyers or Moneyback"
                    className="rounded-circle mb-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                    Guaranteed Buyers or Moneyback
                  </p>



                </div>
              </div>


              {/* Green Button */}
              <div className="text-center">
                <button
                  className="btn fw-semibold px-5 py-2"
                  style={{
                    width: "100%",
                    border: "2px solid #00a550",
                    color: "#00a550",
                    borderRadius: "8px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#00a550";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#00a550";
                  }}
                >

                  Explore Seller Plans
                </button>
              </div>
            </div>
          </div>




          {/* 🔹 NRI TAX FALLING*/}

          <div className="container my-5">
            <div className=" bg-white shadow-sm rounded-4">
              <div className="bg-white shadow-sm rounded-3 overflow-hidden">
                {/* Main Image */}
                <div className="text-center mb-4">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_39-8.webp"
                    alt="Explore Seller Plan"
                    className="img-content rounded-0"
                    style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>

                {/* conatiner */}



                <div className="container" style={{ maxWidth: "800px" }}>
                  <div className="d-flex flex-nowrap justify-content-start mb-2" style={{ gap: "35px", overflowX: "auto" }}>
                    {/* Box 1 */}
                    <div
                      className="shadow-sm p-2 d-flex flex-column align-items-right"
                      style={{ width: "150px", cursor: "pointer", borderRadius: "8px", transition: "0.3s" }}
                      onClick={() => alert("Rental Agreement Clicked")}
                    >
                      <img
                        src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/group_1.webp"
                        alt="Rental Agreement"
                        style={{ width: "40px", height: "40px", objectFit: "fill", marginBottom: "5px" }}
                      />
                      <p style={{ fontSize: "0.85rem", margin: 0, fontWeight: "500", textAlign: "left" }}>Rental Agreement &gt;</p>
                    </div>

                    {/* Box 2 */}
                    <div
                      className="shadow-sm p-2 d-flex flex-column align-items-right"
                      style={{ width: "150px", cursor: "pointer", borderRadius: "8px", transition: "0.3s" }}
                      onClick={() => alert("Inspection Plan Clicked")}
                    >
                      <img
                        src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/group_2.webp"
                        alt="Inspection Plan"
                        style={{ width: "40px", height: "40px", objectFit: "fill", marginBottom: "5px" }}
                      />
                      <p style={{ fontSize: "0.85rem", margin: 0, fontWeight: "500", textAlign: "left" }}>Inspection Plan &gt;</p>
                    </div>

                    {/* Box 3 */}
                    <div
                      className="shadow-sm p-2 d-flex flex-column align-items-right"
                      style={{ width: "150px", cursor: "pointer", borderRadius: "8px", transition: "0.3s" }}
                      onClick={() => alert("Legal Assistance Clicked")}
                    >
                      <img
                        src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/group_4.webp"
                        alt="Legal Assistance"
                        style={{ width: "40px", height: "40px", objectFit: "fill", marginBottom: "5px" }}
                      />
                      <p style={{ fontSize: "0.85rem", margin: 0, fontWeight: "500", textAlign: "left" }}>Legal Assistance &gt;</p>
                    </div>

                    {/* Box 4 */}
                    <div
                      className="shadow-sm p-2 d-flex flex-column align-items-right"
                      style={{ width: "150px", cursor: "pointer", borderRadius: "8px", transition: "0.3s" }}
                      onClick={() => alert("NRI Tax Filing Clicked")}
                    >
                      <img
                        src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/group_3.webp"
                        alt="NRI Tax Filing"
                        style={{ width: "40px", height: "40px", objectFit: "fill", marginBottom: "5px" }}
                      />
                      <p style={{ fontSize: "0.85rem", margin: 0, fontWeight: "500", textAlign: "left" }}>NRI Tax Filing &gt;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            {/* 🔹 Seller Services Plans */}
            <div className="container my-5">
              <div className=" bg-white shadow-sm rounded-4  overflow-hidden">

                <div className="text-center mb-4">
                  <img
                    src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_39-9.webp"
                    alt="explore Buyer plan"
                    className="img-content rounded-0"
                    style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>




                <div
                  className="d-flex justify-content-center flex-wrap mb-4"
                  style={{ gap: "50px" }}
                >
                  {/* 1️⃣ Icon 1 */}



                  <div className="text-center">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-17.webp"
                      alt="Legal & Tax Assistance"
                      className="rounded-circle mb-2"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                      Legal & Tax Assistance
                    </p>
                  </div>

                  {/* 2️⃣ Icon 2 */}
                  <div className="text-center">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-15.webp"
                      alt="Dedicated Property Manager"
                      className="rounded-circle mb-2"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                      Dedicated Property Manager
                    </p>
                  </div>



                  {/* 3️⃣ Icon 3 */}


                  <div className="text-center">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/ellipse_32554-19.webp"
                      alt="Video Call Support"
                      className="rounded-circle mb-2"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <p className="fw-semibold mb-0" style={{ fontSize: "0.95rem" }}>
                      Video Call Support
                    </p>



                  </div>
                </div>


                {/* Green Button */}
                <div className="text-center">
                  <button
                    className="btn fw-semibold px-5 py-2"
                    style={{
                      width: "100%",
                      border: "2px solid #00a550",
                      color: "#00a550",
                      borderRadius: "8px",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#00a550";
                      e.target.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#00a550";
                    }}
                  >

                    Explore Buyer Plans
                  </button>
                </div>
              </div>
            </div>


            {/* Testimonials  */}



            <div
              className="container my-4 p-4 shadow"
              style={{
                borderRadius: "15px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
      /* Hide outer horizontal scrollbar */
      .container::-webkit-scrollbar { display: none; }

      /* Smooth upward scrolling for long text */
      @keyframes verticalScroll {
        0% { transform: translateY(100%); }
        100% { transform: translateY(-100%); }
      }

     .scroll-text {
  height: 80px;        /* fixed height */
  overflow-y: auto;    /* vertical scroll */
  overflow-x: hidden;  /* hide horizontal */
  position: relative;
  padding-left: 10px;  /* leave space for the vertical bar */
  
}

/* Optional: hide scrollbar visually for cleaner look */
.scroll-text::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* Remove the animation */
.scroll-text p {
  position: relative;
  margin: 0;
  white-space: normal;
  line-height: 1.4;
}

    `}
              </style>

              <h3 className="fw-bold mb-4 text-left">Testimonials</h3>

              <div
                className="d-flex justify-content-center flex-nowrap"
                style={{ gap: "20px" }}
              >
                {/* 🧍‍♂️ Testimonial 1 */}
                <div
                  className="card shadow-sm p-2 d-flex flex-column"
                  style={{
                    width: "300px",
                    borderRadius: "15px",
                    border: "none",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/Brajesh-Kumar122.jpg"
                      alt="Brajesh Kumar"
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0">
                        BRAJESH KUMAR <span className="text-success">✔</span>
                      </h6>
                      <small className="text-muted">🇬🇧 UK</small>
                      <div className="text-warning mt-1">
                        ⭐️⭐️⭐️⭐️⭐️{" "}
                        <small className="fw-semibold text-secondary">5.0</small>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-text text-muted">
                    <p>
                      NoBroker is truly a genie in the bottle when it comes to renting your
                      apartment. Thanks to my relationship manager & field RMs who helped me
                      close the deal. From tenant sourcing to finalizing the rent agreement,
                      everything was handled perfectly and professionally.
                    </p>
                  </div>
                </div>

                {/* 🧍‍♂️ Testimonial 2 */}
                <div
                  className="card shadow-sm p-2 d-flex flex-column"
                  style={{
                    width: "300px",
                    borderRadius: "15px",
                    border: "none",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/Naveen-Sahay.jpg"
                      alt="Naveen Sahay"
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0">
                        NAVEEN SAHAY <span className="text-success">✔</span>
                      </h6>
                      <small className="text-muted">🇺🇸 USA</small>
                      <div className="text-warning mt-1">
                        ⭐️⭐️⭐️⭐️⭐️{" "}
                        <small className="fw-semibold text-secondary">5.0</small>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-text text-muted">
                    <p>
                      Really happy with the service! NoBroker rented out my property in less
                      than a month. The tenants were well screened, and they completed
                      repairs quickly while being very proactive in communication. Always
                      easy to reach and attentive to all my questions.
                    </p>
                  </div>
                </div>

                {/* 🧍‍♂️ Testimonial 3 */}
                <div
                  className="card shadow-sm p-2 d-flex flex-column"
                  style={{
                    width: "300px",
                    borderRadius: "15px",
                    border: "none",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/Waman-Rayadurg.jpg"
                      alt="Waman Rayadurg"
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0">
                        WAMAN RAYADURG <span className="text-success">✔</span>
                      </h6>
                      <small className="text-muted">🇮🇳 INDIA</small>
                      <div className="text-warning mt-1">
                        ⭐️⭐️⭐️⭐️⭐️{" "}
                        <small className="fw-semibold text-secondary">5.0</small>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-text text-muted">
                    <p>
                      The Property Management Team is prompt and efficient. I don’t have to
                      worry as they find tenants quickly, collect rent on time, and handle
                      all documentation with complete professionalism and care. Excellent
                      service overall.
                    </p>
                  </div>
                </div>
              </div>
            </div>










            {/* info section */}




            <div className="container my-5">
              <div className="bg-white shadow-sm rounded-4 overflow-hidden p-4">
                <h3 className="fw-bold mb-3">Why Choose NoBroker for NRI Property Management</h3>

                {/* Content wrapper with transition */}
                <div
                  className="content-wrapper"
                  style={{
                    maxHeight: expanded ? "3000px" : "250px", // adjust initial height
                    overflow: "hidden",
                    transition: "max-height 0.5s ease",
                  }}
                >


                  NoBroker's NRI property management services stand out for our all-encompassing assistance and transparent approach. Here’s what you can expect with NoBroker:

                  <div className="fw-semibold"> End-to-End Property Management </div>
                  Our service covers everything, so you don’t have to worry. We handle property management from start to finish, ensuring all tasks are completed efficiently. Be it tax filing, tenant verification, or legal matters, you can trust NoBroker to take care of it all. Our end-to-end NRI property management services are perfect for those who want a one-stop solution.

                  <div className="fw-semibold">Local Expertise</div>
                  Our team of experts has in-depth knowledge of the local real estate market, making us a reliable NRI property management service in India. This ensures that your property is managed by professionals who understand the dynamics of the area and can offer the best advice. We have experts who keep you updated on property trends, ensuring your property always gets the best deals, whether it's for selling or renting.

                  <div className="fw-semibold">Transparent Processes</div>
                  We believe in building trust with our clients. That’s why our NRI property services are built on transparent processes with no hidden charges. Every transaction is clearly documented, ensuring that you are always aware of what’s happening with your property.

                  <div className="fw-semibold">Key Features & Benefits of NoBroker’s NRI Property Management Services in India
                    Premium Property Listing</div>
                  List your property on India’s leading buying/renting platform with NoBroker's premium property listing service, designed to attract serious buyers and tenants. Our services for NRI ensure your property receives maximum visibility, leading to quicker deals. The listings highlight the best features of your property, ensuring it stands out in a competitive market.

                  <div className="fw-semibold"> Dedicated Relationship Manager</div>
                  When you choose NoBroker's NRI property management services, you get a dedicated relationship manager who will be your point of contact. They will handle your requests, communicate with prospective buyers or tenants, provide updates, and ensure smooth communication. This dedicated support ensures all your property concerns are addressed promptly, and you are always in the loop.

                  <div className="fw-semibold">Tenant Search & Verification</div>
                  Finding the right tenant is crucial, especially when you're miles away. Our NRI real estate services include thorough background checks and verification processes to ensure that your property is rented out to serious and reliable tenants.

                  <div className="fw-semibold">Rental Agreement</div>
                  NoBroker assists in drafting legally sound rental agreements. Our experts handle all legal documentation, ensuring compliance with Indian property laws, and saving you from the hassle of managing it remotely. Every rental agreement is crafted and customized to suit your property needs. With our NRI property management services, legal documentation is something you will never have to worry about. We also offer doorstep delivery of a physical copy of the rental agreement to the tenant, once the agreement is signed and notarised.

                  <div className="fw-semibold">On-Time Rent Collection & Transfer</div>
                  Collecting rent on time can be a challenge, especially for NRIs. NoBroker’s NRI property management services guarantee on-time rent collection and transfer directly to your bank account, so you don’t have to worry about delayed payments. Our system ensures that the rent is collected on the due date, and we follow up with tenants in case there are any delays. This service is a key part of our NRI property services and helps you manage your finances effectively.

                  <div className="fw-semibold">Legal Assistance</div>
                  Legal issues can be complex, especially for non-resident property owners. We offer legal assistance to help you navigate property laws, tenant agreements, and tax filing, ensuring all your bases are covered. Whether you need help with NRI tax filing or resolving a dispute, our team of legal experts is here to assist. We ensure that every legal requirement is handled professionally, so you can avoid complications.

                  <div className="fw-semibold">Guaranteed Buyers or Moneyback</div>
                  Selling a property remotely can be difficult, but NoBroker’s NRI property management services make it easy by connecting you with genuine, serious buyers. If you’re unable to sell your property within the agreed time, we even offer a money-back guarantee. Our NRI property services are designed to give you peace of mind, knowing that your property is in good hands.

                  <div className="fw-semibold">Video Call Support</div>
                  Stay connected and informed even when you are abroad. Our video call support allows you to interact with your dedicated manager, discuss property-related matters, and stay updated on important tasks. Whether you want to check the property’s condition or discuss the sale, our video call feature ensures you’re always in the loop, setting our NRI property management services in India apart from the rest.

                  <div className="fw-semibold">How NRI Property Management Services Work - Simple and Transparent Process</div>
                  <div className="fw-semibold">Property Registration</div>
                  Start by registering your property with NoBroker through our website. Provide necessary details like location, type, and your requirements. Our online registration is simple and quick, making it easy for NRIs to get started.
                  <div className="fw-semibold">Dedicated Manager Assignment</div>
                  As part of our NRI property management services, you will be assigned a dedicated relationship manager upon registration. They will handle all your property-related needs, guide you through every step of the process, and serve as your single point of contact for seamless communication.
                  <div className="fw-semibold">Property Listing & Marketing</div>
                  NRI services in India will list your property on our platform to find potential tenants or buyers, offering premium exposure and faster deals.
                  <div className="fw-semibold">Tenant Search/Buyer Connection</div>
                  Our team searches for the right tenants or serious buyers. We conduct background checks for tenants and arrange virtual tours for buyers. Our focus on finding reliable tenants is a key part of our NRI rental property management service.
                  <div className="fw-semibold">Rent Collection & Legal Services</div>
                  For rented properties, our NRI property management services ensure on-time rent collection and legal compliance. Our legal experts also assist with NRI tax filing and property-related legal matters. This ensures you don’t face any legal hassles, and all agreements are up to date.
                  <div className="fw-semibold">Regular Updates</div>
                  Receive regular updates on your property via email or video calls, ensuring you are always informed about its status. Our transparent NRI property services ensure that there are no surprises, and you can manage your property from anywhere in the world.
                  NoBroker’s NRI property management services in India are designed to make property management seamless and stress-free for non-resident owners. From tenant verification to legal assistance, our end-to-end services ensure your property is in safe hands. Get started today and experience hassle-free property management with NoBroker's NRI property management services that bring transparency, efficiency, and peace of mind!

                </div>

                {/* Read More / Read Less button */}
                <div className="text-center mt-2">
                  <button
                    className="btn btn-link p-0"
                    onClick={toggleReadMore}
                    style={{ textDecoration: "none" }}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>





            {/* 🔹 Frequently Asked Questions */}
            <div className="container my-5">
              <div className="card shadow-sm p-3">
                <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>
                {[
                  {
                    question: "What is NoBroker End to End Property Management Plan?",
                    answer: `NoBroker's End to End property management is a unique plan crafted
        to cater to customers looking for a reliable team to manage their
        property. The plan provides a dedicated property manager who helps
        you manage your property seamlessly and remotely without any
        hassle. The plan includes end to end services - Verified tenant
        search, Rental Agreement, On-time rent collection and transfer,
        Periodic Home Inspection, Seamless tenant move-in and move-out,
        home maintenance repair services.`
                  },
                  {
                    question: "How do I keep in touch with NoBroker while managing my property?",
                    answer: "You can stay in touch via email, phone, or video calls with your dedicated property manager."
                  },
                  {
                    question: "How do I get the monthly rent for my property?",
                    answer: "NoBroker ensures timely rent collection and transfers it directly to your bank account."
                  },
                  {
                    question: "I already have a tenant residing at my property. Can NoBroker manage my property?",
                    answer: "Yes! NoBroker can manage your property even if you already have a tenant, handling rent collection, maintenance, and legal compliance."
                  },
                  {
                    question: "What is home inspection and why is it required?",
                    answer: "Periodic home inspections help ensure your property is maintained well and prevent any major damages or disputes with tenants."
                  },
                  {
                    question: "What if the tenant found by NoBroker vacates the property?",
                    answer: "NoBroker will assist in finding a new tenant quickly and seamlessly, minimizing vacancy periods."
                  }
                ].map((faq, index) => {
                  const [open, setOpen] = React.useState(false);
                  return (
                    <div key={index}>
                      <div
                        className="d-flex justify-content-between align-items-center py-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpen(!open)}
                      >
                        <h5 className="mb-0">{faq.question}</h5>
                        <span style={{ fontSize: "1.5rem" }}>{open ? "-" : "+"}</span>
                      </div>
                      {open && (
                        <div className="p-2">
                          <p className="mb-0">{faq.answer}</p>
                        </div>
                      )}
                      {index < 5 && <hr />} {/* horizontal divider except after last item */}
                    </div>
                  );
                })}
              </div>
            </div>





            {/* 🔹 NRI Services Section */}


            <div className="container my-5">
              <div className="card shadow-sm p-3">

                {/* NRI Property Management Services */}
                <div className="col-12">
                  <h5 className="fw-bold mb-2">NRI Property Management Services</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
                    {[
                      "NRI Property Management In India",
                      "NRI Property Management in Bangalore",
                      "NRI Property Management in Chennai",
                      "NRI Property Management in Delhi",
                      "NRI Property Management in Faridabad",
                      "NRI Property Management in Ghaziabad",
                      "NRI Property Management in Gurgaon",
                      "NRI Property Management in Hyderabad",
                      "NRI Property Management in Mumbai",
                      "NRI Property Management in Noida",
                      "NRI Property Management in Pune"
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* NRI Tax Services */}
                <div className="col-12 ">
                  <h5 className="fw-bold mb-2">NRI Tax Services</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
                    {[
                      "NRI Tax Filing Services",
                      "NRI Tax Services in Mumbai",
                      "NRI Tax Services in Bangalore",
                      "NRI Tax Services in Pune",
                      "NRI Tax Services in Delhi",
                      "NRI Tax Services in Hyderabad",
                      "NRI Tax Services in Chennai",
                      "Capital Gains Tax for NRIs in India",
                      "NRI Long-Term Capital Gains Tax",
                      "NRI Short-Term Capital Gains Tax"
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* NRI Rental Agreement Services */}
                <div className="col-12 ">
                  <h5 className="fw-bold mb-2">NRI Rental Agreement Services</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
                    {[
                      "NRI Rental Agreement",
                      "NRI Rental Agreement in Bangalore",
                      "NRI Rental Agreement in Delhi",
                      "NRI Rental Agreement in Hyderabad",
                      "NRI Rental Agreement in Mumbai",
                      "Online Rent Agreement in Pune for NRIs"
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* NRI Property Services */}
                <div className="col-12 ">
                  <h5 className="fw-bold mb-2">NRI Property Services</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
                    {[
                      "NRI Property for Sale in India",
                      "NRI Property for Sale in India - US",
                      "NRI Property for Sale in India - UK",
                      "NRI Property for Sale in India - UAE",
                      "NRI Property for Rent in India",
                      "NRI Property for Rent in India - US",
                      "NRI Property for Rent in India - UK",
                      "NRI Property for Rent in India - UAE"
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Quick Links */}
                <div className="col-12">
                  <h5 className="fw-bold mb-2">Quick Links</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
                    {["About Us", "Contact Us"].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>



              </div>
            </div>



          </div>
        </div>
      </div >
    </div >

  );
};

export default NoBrokerForNRIs;
