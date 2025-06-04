import React, { useState } from "react";

const AllTours = () => {
    const [visible, setVisible] = useState(false);

    if (!visible) return null;

    return (
        <section className="px-6 py-10">
            <h2 className="text-2xl font-semibold mb-6">All Tours</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Contoh konten placeholder */}
                <div className="text-white/70">No tour data available.</div>
            </div>
            <button
                onClick={() => setVisible(false)}
                className="mt-6 px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600"
            >
                Back to Featured Destinations
            </button>
        </section>
    );
};

export default AllTours;
