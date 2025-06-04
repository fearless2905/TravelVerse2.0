import { Link, Head, router } from "@inertiajs/react";
import {
    LayoutContext,
    LayoutProvider,
} from "@/Layouts/layout/context/layoutcontext.jsx";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import React, { useContext, useEffect } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const { layoutConfig } = useContext(LayoutContext);

    useEffect(() => {
        // Force reflow or reset styles on mount to fix layout issues on navigation back
        window.dispatchEvent(new Event("resize"));
    }, []);

    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Dashboard" />
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="sm:fixed sm:top-0 sm:left-0 p-6">
                            <div className="flex align-items-center">
                                {/*
                                <img
                                    src="/images/logo/logo.svg"
                                    width="100.22px"
                                    height={"35px"}
                                    alt="logo"
                                    className="mr-3"
                                />
                                */}

                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Log in
                                        </Link>

                                        <Link
                                            href={route("register")}
                                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-nogutter surface-0 text-800">
                            <div
                                className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
                                style={{ marginRight: "50%" }}
                            >
                                <section>
                                    <span className="block text-6xl font-bold mb-1">
                                        Welcome to TravelVerse
                                    </span>
                                    <div className="text-6xl text-primary font-bold mb-3">
                                        Explore the Beauty of Banyuwangi
                                    </div>
                                    <p className="mt-0 mb-4 text-700 line-height-3">
                                        Travelverse is an Interactive Virtual
                                        Tour platform that allows you to explore
                                        various tourist destinations in
                                        Banyuwangi through 360° Virtual Reality
                                        (VR) from the comfort of your home.
                                        Enjoy an immersive experience as if you
                                        were actually there!.
                                    </p>

                                    <Button
                                        label="Learn More"
                                        type="button"
                                        className="mr-3 p-button-raised"
                                        onClick={() => router.visit("/landing")}
                                    />
                                    <Button
                                        label="Explore Now"
                                        type="button"
                                        className="p-button-outlined"
                                        onClick={() =>
                                            router.visit(
                                                "/landing/travelverse-dashboard"
                                            )
                                        }
                                    />
                                </section>
                            </div>
                            <div
                                className="col-12 md:col-6 p-0 m-0 h-screen bg-cover bg-center fixed top-0 right-0"
                                style={{
                                    width: "50%",
                                    backgroundImage:
                                        "url('/images/hero/ijen.jpg')",
                                }}
                            ></div>
                        </div>
                    </div>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
