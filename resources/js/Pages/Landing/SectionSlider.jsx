import React from "react";
import { Carousel } from "primereact/carousel";

const images = [
    { src: "/images/hero/banyuwangi1.jpg", alt: "Banyuwangi" },
    { src: "/images/hero/kerbau.jpg", alt: "Kerbau" },
    { src: "/images/hero/pantai.jpg", alt: "Pantai" },
    { src: "/images/hero/patung.jpg", alt: "Patung" },
    { src: "/images/hero/pulaumerah.jpg", alt: "Pulau Merah" },
    { src: "/images/hero/baluran.jpg", alt: "Baluran" },
];

const itemTemplate = (item) => {
    return (
        <div className="slider-item">
            <img
                src={item.src}
                alt={item.alt}
                className="img-fluid"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
        </div>
    );
};

export default function SectionSlider() {
    return (
        <section className="section slider-section">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-8">
                        <h2 className="heading" data-aos="fade-up">
                            Perjalanan Virtual yang Imersif
                        </h2>
                        <p
                            className="lead"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Jelajahi keindahan kota Banyuwangi tanpa harus
                            meninggalkan rumah. TravelVerse menghadirkan
                            pengalaman VR 360° yang realistis tentang warisan
                            budaya, keajaiban alam, dan cita rasa lokal dalam
                            satu platform interaktif. Temukan, rasakan, dan
                            terhubung dengan Banyuwangi yang belum pernah ada
                            sebelumnya.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Carousel
                            value={images}
                            itemTemplate={itemTemplate}
                            numVisible={1}
                            numScroll={1}
                            className="home-slider mb-5"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            circular
                            autoplayInterval={3000}
                            showNavigators={false}
                            showIndicators={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
