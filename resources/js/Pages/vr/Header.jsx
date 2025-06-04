import React from "react";

const Header = () => (
    <header className="w-full py-6 px-4 md:px-10 flex items-center justify-between">
        <div className="flex gap-4 items-center">
            <a href="index.html" className="text-2xl font-bold tracking-wide">
                TravelVerse
            </a>
        </div>
        <div className="flex gap-4 items-center">
            <a href="alltour.html" className="hover:underline text-sm">
                All Tours
            </a>
            <a href="locations.html" className="hover:underline text-sm">
                Locations
            </a>
            <a
                href="/landing/categories.html"
                className="hover:underline text-sm"
            >
                Categories
            </a>
            <button className="hover:rotate-90 transition duration-300">
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 4a6 6 0 100 12A6 6 0 0010 4z" />
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7a1 1 0 112 0v3a1 1 0 11-2 0v-3zM9 7a1 1 0 112 0 1 1 0 01-2 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </header>
);

export default Header;
