// src/lib/axios.js

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, // ambil dari .env frontend
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true, // bisa dihapus kalau tidak pakai auth/cookie
});

export default axiosInstance;
