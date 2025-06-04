import React from "react";

const locations = [
    { img: "/images/hero/map1.jpg", title: "Pesanggaran" },
    { img: "/images/hero/map2.jpg", title: "Licin" },
    { img: "/images/hero/map3.jpg", title: "Purwoharjo" },
    { img: "/images/hero/map4.jpg", title: "Glagah." },
    { img: "/images/hero/map5.jpg", title: "Cluring" },
    { img: "/images/hero/map6.jpg", title: "Tegaldlimo" },
];

const MapLocations = () => (
    <section className="px-6 py-10">
        <div className="glass rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Map Locations</h2>
                <button className="text-white border border-white px-4 py-1 rounded hover:bg-black hover:border-black transition">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
                {locations.map((loc, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-2xl overflow-hidden group text-white"
                    >
                        <div className="glass rounded-2xl overflow-hidden">
                            <img
                                src={loc.img}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-105 rounded-2xl"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent rounded-b-2xl">
                            <h3 className="text-md font-bold">{loc.title}</h3>
                            <p className="text-xs text-white/70"></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default MapLocations;
