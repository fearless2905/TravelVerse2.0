import React from "react";
import { router } from "@inertiajs/react";

export default function SectionHero() {
    const handleClick = () => {
        router.get("/landing/travelverse-dashboard");
    };

    return (
        <section
            className="site-hero overlay"
            style={{ backgroundImage: "url(/images/hero/ijen.jpg)" }}
        >
            <div className="container">
                <div className="row site-hero-inner justify-content-center align-items-center">
                    <div className="col-md-10 text-center">
                        <h1 className="heading mb-4" data-aos="fade-up">
                            Jelajahi Banyuwangi dengan Virtual Reality
                        </h1>
                        <p
                            className="sub-heading mb-5"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Jelajahi tempat eksotis Banyuwangi kapan saja, di
                            mana saja!
                        </p>
                        <p
                            className="pt-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <button
                                onClick={handleClick}
                                className="btn uppercase btn-outline-light d-sm-inline d-block py-3"
                            >
                                Jelajahi Sekarang
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
