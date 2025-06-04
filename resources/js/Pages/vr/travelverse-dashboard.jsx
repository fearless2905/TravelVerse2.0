import React from "react";
import "../../../css/travelversedashboard.css";
import "./vr-tailwind.css";
import Header from "./Header";
// import HeroSection from "./HeroSection";
import FeaturedDestinations from "./FeaturedDestinations";
import AllTours from "./AllTours";
import MapLocations from "./MapLocations";
import Categories from "./Categories";
import Footer from "./Footer";

const TravelverseDashboard = () => {
    return (
        <div
            className="bg-cover bg-center min-h-screen text-white"
            style={{ backgroundImage: "url('/images/hero/banyuwangi1.jpg')" }}
        >
            <div className="min-h-screen bg-black bg-opacity-60 flex flex-col font-[Inter] vr-root">
                <Header />
                {/* <HeroSection /> */}
                <FeaturedDestinations />
                <AllTours />
                <MapLocations />
                <Categories />
                <Footer />
            </div>
        </div>
    );
};

export default TravelverseDashboard;
