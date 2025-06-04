import React, { useEffect } from "react";
import AOS from "aos";

import "../../../css/animate.css";
import "../../../css/animsition.min.css";
import "../../../css/aos.css";
import "../../../css/bootstrap.css";
import "../../../css/fancybox.min.css";
import "../../../css/owl.carousel.min.css";
import "../../../css/style.css";

import Header from "./Header";
import Footer from "./Footer";
import SectionHero from "./SectionHero";
import SectionWelcome from "./SectionWelcome";
import SectionExperience from "./SectionExperience";
import SectionSlider from "./SectionSlider";
import Chatbot from "../../Components/Chatbot";

import { usePage } from "@inertiajs/react";

export default function LandingPage() {
    const { url } = usePage();

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <>
            <Header key={url} />
            <main key={url}>
                <SectionHero />
                <SectionWelcome />
                <SectionExperience />
                <SectionSlider />
            </main>
            <Footer key={url} />
            <Chatbot key={url} />
        </>
    );
}
