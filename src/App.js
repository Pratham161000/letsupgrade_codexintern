import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsTicker from "./components/NewsTicker";
import Hero from "./components/Hero";
import FeaturedPrograms from "./components/FeaturedPrograms";
import CertificatePrograms from "./components/CertificatePrograms";
import CollegeSection from "./components/CollegeSection";
import PartneredUniversities from "./components/PartneredUniversities";
import ReferAndEarn from "./components/ReferAndEarn";
import AdvisoryBoard from "./components/AdvisoryBoard";
import FutureTech from "./components/FutureTech";
import WhyStudySection from "./components/WhyStudySection";
import BrandAmbassador from "./components/BrandAmbassador";
import StudentReviews from "./components/StudentReviews";
import NewsSection from "./components/NewsSection";
import StudyAbroad from "./components/StudyAbroad";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ExplorePrograms from "./pages/ExplorePrograms";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <NewsTicker />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedPrograms />
                <CertificatePrograms />
                <CollegeSection />
                <PartneredUniversities />
                <ReferAndEarn />
                <AdvisoryBoard />
                <FutureTech />
                <WhyStudySection />
                <BrandAmbassador />
                <StudentReviews />
                <NewsSection />
                <StudyAbroad />
              </>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<ExplorePrograms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
