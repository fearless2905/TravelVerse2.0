import React, { useState } from "react";

const hotelData = {
    1: {
        name: "Aston Banyuwangi Hotel",
        price: 750000,
        location: "Jl. Brawijaya, Banyuwangi",
        img: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20008184-fe071791e91c1197e65203e27de81376.jpeg?tr=q-80,c-at_max,w-740,h-500&_src=imagekit"
    },
    2: {
        name: "Ketapang Indah Hotel",
        price: 590000,
        location: "Jl. Gatot Subroto KM.6, Banyuwangi",
        img: "https://pix10.agoda.net/hotelImages/251573/-1/b9be27af79489fab667278c73b340131.jpg?ca=9&ce=1&s=414x232"
    },
    3: {
        name: "Illira Hotel Banyuwangi",
        price: 630000,
        location: "Jl. Yos Sudarso No.81-83, Klatak",
        img: "https://travelinkmagz.com/wp-content/uploads/2019/11/Banyuwangi-ILLIRA-Hotel_1920x1080px_1.jpg"
    },
    4: {
        name: "Luminor Hotel",
        price: 680000,
        location: "Jl. Yos Sudarso No.66, Klatak, Banyuwangi",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/87/05/81/caption.jpg?w=700&h=400&s=1"
    }
};

const CheckoutPage = ({ hotelId }) => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const hotel = hotelData[hotelId];

    if (!hotel) return <p className="text-white p-10">Hotel not found</p>;

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <div className="glass max-w-3xl mx-auto rounded-2xl p-6">
                {!paymentSuccess ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                        <img src={hotel.img} alt={hotel.name} className="rounded-xl mb-4 w-full h-64 object-cover" />
                        <h3 className="text-xl font-semibold">{hotel.name}</h3>
                        <p className="text-white/70">{hotel.location}</p>
                        <p className="text-lg mt-2">Price: <span className="text-green-400 font-bold">Rp {hotel.price.toLocaleString()}</span></p>

                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-2">Guest Info</h4>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full mb-2 p-2 rounded bg-white/10 text-white border border-white/20"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-4 p-2 rounded bg-white/10 text-white border border-white/20"
                            />
                            <button
                                onClick={() => setPaymentSuccess(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
                            >
                                Bayar Sekarang
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Pembayaran Berhasil!
                        </h2>
                        <p className="text-white/70 mb-4">Terima kasih telah memesan.</p>
                        <div className="text-left mt-6 border-t pt-4 border-white/20">
                            <h4 className="font-bold text-lg mb-2">Detail Transaksi</h4>
                            <p>Hotel: {hotel.name}</p>
                            <p>Lokasi: {hotel.location}</p>
                            <p>Harga: Rp {hotel.price.toLocaleString()}</p>
                            <p>Status: <span className="text-green-400 font-semibold">Lunas</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
