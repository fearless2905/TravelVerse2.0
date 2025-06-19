import React, { useState } from "react";

const destinations = [
    {
        img: "/images/hero/pantai.jpg",
        title: "Tropical Paradise Beach",
        desc: "Kecamatan Pesanggaran, Sumberagung",
        category: "Beach",
        description:
            "A beautiful tropical beach with crystal clear waters and white sand, perfect for relaxation and water activities.",
        vrPath: "/vr/pantai/index.html", // Path untuk Beach
    },
    {
        img: "/images/hero/kerbau.jpg",
        title: "Mountain Adventure Trails",
        desc: "Banyuwangi",
        category: "Mountain",
        description:
            "Explore scenic mountain trails offering breathtaking views and exciting hiking experiences.",
        vrPath: "/vr/pantai2/index.html", // Path untuk Mountain
    },
];

const FeaturedDestinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    const openModal = (destination) => {
        setSelectedDestination(destination);
    };

    const closeModal = () => {
        setSelectedDestination(null);
    };

    return (
        <section className="px-6 py-10" id="featured-destinations-section">
            <div className="glass rounded-3xl p-8 max-w-6xl mx-auto text-white">
                <h2 className="text-2xl font-semibold mb-6">
                    Featured Destinations
                </h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {destinations.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer"
                            onClick={() => openModal(item)}
                        >
                            <div className="glass rounded-2xl overflow-hidden">
                                <img
                                    src={item.img}
                                    className="w-full h-64 object-cover transition-transform group-hover:scale-105 rounded-2xl"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent rounded-b-2xl">
                                <h3 className="text-lg font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/70">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedDestination && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="glass rounded-3xl max-w-3xl w-full p-6 relative">
                        <button
                            className="absolute top-4 right-4 text-white text-xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="relative rounded-2xl overflow-hidden mb-4">
                            <img
                                src={selectedDestination.img}
                                alt={selectedDestination.title}
                                className="w-full h-64 object-cover rounded-2xl"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent rounded-b-2xl text-white">
                                <h3 className="text-xl font-bold">
                                    {selectedDestination.title}
                                </h3>
                                <p className="text-sm">
                                    {selectedDestination.desc}
                                </p>
                                <p className="text-sm italic">
                                    {selectedDestination.category}
                                </p>
                            </div>
                        </div>
                        <p className="mb-6 text-white">
                            {selectedDestination.description}
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                className="no-underline border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                            <button
                                className="no-underline border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
                                onClick={() => alert("Booking clicked!")}
                            >
                                Booking
                            </button>
                            <button
                                className="no-underline border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
                                onClick={() =>
                                    window.open(
                                        selectedDestination.vrPath,
                                        "_blank"
                                    )
                                }
                            >
                                Start Tour
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedDestinations;
