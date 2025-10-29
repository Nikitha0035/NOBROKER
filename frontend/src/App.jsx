import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";


import Navbar from "./components/Navbar";
import SaleAgreementPage from "./components/SaleAgreementPage";
import HomeLoanPage from "./components/HomeLoanPage";

import OwnerForm from "./components/OwnerForm";
import PropertyDetails from "./components/PropertyDetails";
import HomePage from "./components/HomePage";
import RentalAgreementPage from "./rental/RentalAgreementPage";
import Service from "./components/Service";
import RentService from "./components/RentService";
import ServicePage from "./components/ServicePage";
import RentPage from "./components/RentPage";
import HomeInteriorsPage from "./interiors/HomeInteriorsPage";
import AvoidContent from "./components/AvoidContent";
import CitySelectorModal from "./components/CitySelectorModal";

import NoBrokerForNRIs from "./components/NoBrokerForNRIs";
import PackerAndMover from "./components/PakerAndMover";
import HomePainting from "./components/HomePainting";
import ClickAndEarn from "./components/ClickAndEarn";
import PayRent from "./components/PayRent";
import Enquire from "./enquiry/Enquire";
import MyProperties from "./components/MyProperties";
import Profile from "./components/Profile";

// import BusinessAssist from "./components/BusinessAssist";

function AppContent() {
  const location = useLocation();

  //  City modal control
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("selectedCity") || ""
  );

  const handleOpenCityModal = () => {
    setIsCityModalOpen(true);
  };

  const handleCloseCityModal = () => {
    setIsCityModalOpen(false);
  };

  const handleCitySelect = (cityName) => {
    console.log("Selected city:", cityName);
    setSelectedCity(cityName);
    localStorage.setItem("selectedCity", cityName);
    setIsCityModalOpen(false);
  };

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* City selector modal */}
      <CitySelectorModal
        isOpen={isCityModalOpen}
        onClose={handleCloseCityModal}
        onCitySelect={handleCitySelect}
      />

      <Routes>
        {/* --- Main Pages --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/enquire" element={<Enquire />} />

        {/* --- Buy / Rent --- */}
        <Route
          path="/buy"
          element={<Service onOpenCityModal={handleOpenCityModal} />}
        />
        <Route path="/rent" element={<RentService />} />
        <Route path="/commercial" element={<RentService />} />
        <Route path="/packers-movers" element={<PackerAndMover />} />
        <Route path="/home-painting" element={<HomePainting />} />
        <Route path="/click-earn" element={<ClickAndEarn />} />
        <Route path="/pay-rent-online" element={<PayRent />} />

        {/* --- Service Related Pages --- */}
        <Route
          path="/service-page"
          element={<ServicePage onOpenCityModal={handleOpenCityModal} />}
        />
        <Route path="/rent-page" element={<RentPage />} />

        {/* --- Specialized Pages --- */}
        <Route path="/rental-agreement" element={<RentalAgreementPage />} />
        <Route path="/home-interiors" element={<HomeInteriorsPage />} />
        <Route path="/avoid-brokers" element={<AvoidContent />} />

        {/* --- Extra Service Pages --- */}
        <Route path="/sale-agreement" element={<SaleAgreementPage />} />
        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="/property-legal" element={<SaleAgreementPage />} />
        <Route path="/nri-services" element={<NoBrokerForNRIs />} />
        <Route path="/my-properties" element={<MyProperties />} />
<Route path="/profile" element={<Profile />} />

      </Routes>
      {/* <BusinessAssist /> */}


    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
