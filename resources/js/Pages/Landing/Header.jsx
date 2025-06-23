import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { href: "/landing", label: "Home" },
        { href: "/landing/travelverse-dashboard", label: "Booking" },
        { href: "/about", label: "About Us" },
        { href: "/landing/travelverse-dashboard", label: "Virtual Tour" },
        { href: "/login", label: "Login" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="site-header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 site-logo" data-aos="fade">
                        <Link
                            href="/"
                            className="animsition-link text-white fw-bold fs-3"
                        >
                            TravelVerse
                        </Link>
                    </div>

                    {/* Three Dots Button for Mobile */}
                    <div className="col-6 d-block d-md-none text-end">
                        <button
                            className="three-dots-menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </button>
                    </div>

                    {/* Desktop Navbar */}
                    <div className="col-md-12 d-none d-md-block">
                        <nav role="navigation" className="text-end">
                            <ul className="menu list-unstyled d-flex justify-content-end gap-4 m-0">
                                {menuItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="animsition-link text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
