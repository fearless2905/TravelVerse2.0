import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="section footer-section">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-3 mb-5">
                        <h3>Quick Link</h3>
                        <ul className="list-unstyled link">
                            <li>
                                <Link href="#">About Us</Link>
                            </li>
                            <li>
                                <Link href="#">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">Help</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h3>Support</h3>
                        <ul className="list-unstyled link">
                            <li>
                                <Link href="#">Our Location</Link>
                            </li>
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5 pr-md-5 contact-info">
                        <h3>Contact Info</h3>
                        <p>
                            <span className="d-block">Address:</span>
                            <span> IGS Indonesia Groups</span>
                        </p>
                        <p>
                            <span className="d-block">Phone:</span>{" "}
                            <span> (+62) 888 8888</span>
                        </p>
                        <p>
                            <span className="d-block">Email:</span>
                            <span> info@gmailku.com</span>
                        </p>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h3>Subscribe</h3>
                        <p>Sign up for our newsletter</p>
                        <form action="#" className="footer-newsletter">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email..."
                                />
                                <button type="submit" className="btn">
                                    <span className="fa fa-paper-plane"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row bordertop text-center pt-5">
                    <p className="col-md-12">
                        <br />
                        Designed &amp; Developed by{" "}
                        <Link href="">TravelVerse Team</Link>
                    </p>

                    <p className="col-md-12 social">
                        <Link href="#">
                            <span className="fa fa-facebook"></span>
                        </Link>
                        <Link href="#">
                            <span className="fa fa-twitter"></span>
                        </Link>
                        <Link href="#">
                            <span className="fa fa-instagram"></span>
                        </Link>
                        <Link href="#">
                            <span className="fa fa-linkedin"></span>
                        </Link>
                        <Link href="#">
                            <span className="fa fa-youtube"></span>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
