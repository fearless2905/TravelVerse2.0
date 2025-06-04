import React from "react";

const categories = [
    {
        img: "/images/hero/pulaumerah.jpg",
        title: "Pantai",
        desc: "",
    },
    {
        img: "/images/hero/patung.jpg",
        title: "Budaya",
        desc: "",
    },
    {
        img: "/images/hero/map5.jpg",
        title: "Hutan",
        desc: "",
    },
    { img: "/images/hero/map4.jpg", title: "Air Terjun", desc: "" },
    {
        img: "/images/hero/categories5.jpg",
        title: "Fasilitas Publik",
        desc: "",
    },
    {
        img: "/images/hero/baluran.jpeg",
        title: "Taman Nasional",
        desc: "",
    },
];

const Categories = () => (
    <section className="px-6 py-10">
        <div className="glass rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Categories</h2>
                <button className="text-white border border-white px-4 py-1 rounded hover:bg-black hover:border-black transition">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-2xl overflow-hidden group text-white"
                    >
                        <div className="glass rounded-2xl overflow-hidden">
                            <img
                                src={cat.img}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-105 rounded-2xl"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black via-black/40 to-transparent rounded-b-2xl">
                            <h3 className="text-md font-bold">{cat.title}</h3>
                            <p className="text-xs text-white/70">{cat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Categories;
