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
        vrPath: "/vr/trails/index.html", // Path untuk Mountain
    },
    {
        img: "/images/hero/patung.jpg",
        title: "Historic Cityscape",
        desc: "Banyuwangi",
        category: "City",
        description:
            "Discover the rich history and culture of the city through its iconic landmarks and architecture.",
        vrPath: "/vr/desa adat/index.html", // Path untuk Mountain
    },
    {
        img: "/images/hero/pulaumerah.jpg",
        title: "Pantai Pulau Merah",
        desc: "Banyuwangi",
        category: "Beach",
        description:
            "Famous for its red sand and stunning sunsets, this beach is a must-visit for nature lovers.",
        vrPath: "/vr/pulau merah/index.html", // Path untuk Mountain
    },
    {
        img: "/images/hero/ijen.jpg",
        title: "Kawah Ijen",
        desc: "Banyuwangi",
        category: "Volcano",
        description:
            "Witness the mesmerizing blue flames and sulfur mining activities at this active volcano.",
        vrPath: "/vr/ijen/index.html", // Path untuk Mountain
    },
    {
        img: "/images/hero/banyuwangi1.jpg",
        title: "Hutan Taman Nasional Baluran",
        desc: "Banyuwangi",
        category: "Forest",
        description:
            "Experience diverse wildlife and lush greenery in this expansive national park.",
        vrPath: "/vr/baluran/index.html", // Path untuk Mountain
    },
];

const hotels = [
    {
        name: "Aston Banyuwangi Hotel",
        location: "Jl. Brawijaya, Banyuwangi",
        img: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20008184-fe071791e91c1197e65203e27de81376.jpeg?tr=q-80,c-at_max,w-740,h-500&_src=imagekit",
        bookingLink: "/booking/hotel1",
    },
    {
        name: "Ketapang Indah Hotel",
        location: "Jl. Gatot Subroto KM.6, Banyuwangi",
        img: "https://pix10.agoda.net/hotelImages/251573/-1/b9be27af79489fab667278c73b340131.jpg?ca=9&ce=1&s=414x232",
        bookingLink: "/booking/hotel2",
    },
    {
        name: "Illira Hotel Banyuwangi",
        location: "Jl. Yos Sudarso No.81-83, Klatak",
        img: "https://travelinkmagz.com/wp-content/uploads/2019/11/Banyuwangi-ILLIRA-Hotel_1920x1080px_1.jpg",
        bookingLink: "/booking/hotel3",
    },
    {
        name: "Luminor Hotel",
        location:
            "Jl. Yos Sudarso No.66, Lingkungan Sukowidi, Klatak, Kec. Kalipuro, Kabupaten Banyuwangi, Jawa Timur",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/87/05/81/caption.jpg?w=700&h=400&s=1",
        bookingLink: "/booking/hotel3",
    },
];

const FeaturedDestinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [showHotelList, setShowHotelList] = useState(false);

    const openModal = (destination) => {
        setSelectedDestination(destination);
    };

    const closeModal = () => {
        setSelectedDestination(null);
        setShowHotelList(false);
    };

    const handleBookingClick = () => {
        setShowHotelList(true);
    };

    const redirectToBooking = (link) => {
        window.open(link, "_blank");
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

                        {!showHotelList ? (
                            <>
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
                                        className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition"
                                        onClick={handleBookingClick}
                                    >
                                        Booking
                                    </button>
                                    <button
                                        className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full transition"
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
                            </>
                        ) : (
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    Recommended Hotels Nearby
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {hotels.map((hotel, idx) => (
                                        <div
                                            key={idx}
                                            className="glass p-4 rounded-2xl hover:bg-white/10 transition cursor-pointer"
                                            onClick={() =>
                                                redirectToBooking(
                                                    hotel.bookingLink
                                                )
                                            }
                                        >
                                            <img
                                                src={hotel.img}
                                                alt={hotel.name}
                                                className="w-full h-40 object-cover rounded-xl mb-2"
                                            />
                                            <h4 className="text-lg font-semibold text-white">
                                                {hotel.name}
                                            </h4>
                                            <p className="text-sm text-white/60">
                                                {hotel.location}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button
                                        className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default FeaturedDestinations;
