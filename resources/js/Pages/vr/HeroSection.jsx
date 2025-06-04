import React from "react";

const HeroSection = () => (
    <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl glass rounded-3xl p-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Explore Banyuwangi with TravelVerse
            </h1>
            <p className="text-sm md:text-lg text-white/80 mb-6">
                Discover breathtaking destinations, unique experiences, and
                unforgettable adventures tailored just for you.
            </p>
            <div className="flex justify-center gap-4">
                <a
                    href="/landing/travelverse-dashboard.html"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all"
                >
                    Start Now
                </a>
                <a
                    href="#"
                    className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all"
                >
                    View Detail
                </a>
            </div>
        </div>
    </section>
);

export default HeroSection;
