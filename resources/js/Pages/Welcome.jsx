import { Link, Head, router } from "@inertiajs/react";
import {
    LayoutContext,
    LayoutProvider,
} from "@/Layouts/layout/context/layoutcontext.jsx";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import React, { useContext, useEffect } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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

                        <div className="flex surface-0 text-800 min-h-screen">
                            <div className="flex-1 p-6 text-left flex align-items-center justify-start">
                                <section>
                                    <span className="block text-6xl font-bold mb-1 text-gray-900 dark:text-gray-100 leading-tight">
                                        Selamat datang di TravelVerse
                                    </span>
                                    <div className="text-6xl text-primary font-bold mb-3 leading-tight">
                                        Jelajahi Keindahan Kota Banyuwangi
                                    </div>
                                    <p className="mt-0 mb-4 text-700 line-height-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Travelverse adalah platform Tur Virtual
                                        Interaktif yang memungkinkan Anda
                                        menjelajahi berbagai destinasi wisata di
                                        Banyuwangi melalui Realitas Virtual (VR)
                                        360° dari rumah Anda. Nikmati pengalaman
                                        yang mendalam seolah-olah Anda
                                        benar-benar berada di sana!.
                                    </p>

                                    <Button
                                        label="Pelajari lebih lanjut"
                                        type="button"
                                        className="mr-3 p-button-raised"
                                        onClick={() =>
                                            router.visit("/landing", {
                                                preserveState: false,
                                            })
                                        }
                                    />
                                    <Button
                                        label="Jelajahi Sekarang"
                                        type="button"
                                        className="p-button-outlined"
                                        onClick={() =>
                                            router.visit(
                                                "/landing/travelverse-dashboard",
                                                { preserveState: false }
                                            )
                                        }
                                    />
                                </section>
                            </div>
                            <div
                                className="flex-1 p-0 m-0 bg-cover bg-center"
                                style={{
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
