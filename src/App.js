import React from "react";
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
import "./App.css";
import "./styles/globals.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <NewsTicker />
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
    </div>
  );
}

export default App;
