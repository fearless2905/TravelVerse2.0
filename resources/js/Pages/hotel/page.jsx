import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Layout from "@/Layouts/layout/layout";
import axios from "@/lib/axios";

const HotelPage = () => {
    const [hotelList, setHotelList] = useState([]);
    const [formData, setFormData] = useState({
        nama: "",
        lokasi: "",
        maps: "",
        gambar: "",
        detail: "",
        harga: null,
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHotelList();
    }, []);

    const fetchHotelList = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/hotels");
            setHotelList(response.data.data);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch hotel data");
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleHargaChange = (value) => {
        setFormData({ ...formData, harga: value });
    };

    const handleAddHotel = async () => {
        if (!formData.nama || !formData.lokasi) return;

        try {
            setLoading(true);
            if (editId !== null) {
                const response = await axios.put(
                    `/api/hotels/${editId}`,
                    formData
                );
                setHotelList(
                    hotelList.map((item) =>
                        item.id === editId ? response.data.data : item
                    )
                );
            } else {
                const response = await axios.post("/api/hotels", formData);
                setHotelList([...hotelList, response.data.data]);
            }

            setFormData({
                nama: "",
                lokasi: "",
                maps: "",
                gambar: "",
                detail: "",
                harga: null,
            });
            setEditId(null);
            setIsFormVisible(false);
            setLoading(false);
        } catch (err) {
            setError("Failed to save hotel data");
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus data ini?")) return;

        try {
            setLoading(true);
            await axios.delete(`/api/hotels/${id}`);
            setHotelList(hotelList.filter((item) => item.id !== id));
            setLoading(false);
        } catch (err) {
            setError("Failed to delete hotel data");
            setLoading(false);
        }
    };

    const handleEdit = (data) => {
        setFormData(data);
        setEditId(data.id);
        setIsFormVisible(true);
    };

    const imageBodyTemplate = (rowData) => (
        <img
            src={rowData.gambar}
            alt={rowData.nama}
            style={{ width: "100px", borderRadius: "8px", cursor: "pointer" }}
            onClick={() => {
                setSelectedImage(rowData.gambar);
                setIsDialogVisible(true);
            }}
            onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
        />
    );

    const actionBodyTemplate = (rowData) => (
        <div className="flex gap-2">
            <Button
                icon="pi pi-pencil"
                className="p-button-sm"
                onClick={() => handleEdit(rowData)}
            />
            <Button
                icon="pi pi-trash"
                className="p-button-sm p-button-danger"
                onClick={() => handleDelete(rowData.id)}
            />
        </div>
    );

    const hargaBodyTemplate = (rowData) => {
        if (rowData.harga === null || rowData.harga === undefined) return "-";
        const hargaNumber = Number(rowData.harga);
        if (isNaN(hargaNumber)) return "-";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(hargaNumber);
    };

    return (
        <Layout>
            <div className="card">
                <div className="mb-4">
                    <h3>Daftar Hotel</h3>
                </div>
                <div className="flex justify-end mb-4 gap-2">
                    <InputText
                        placeholder="Cari Hotel..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button
                        label="Tambah Hotel"
                        icon="pi pi-plus"
                        onClick={() => {
                            setFormData({
                                nama: "",
                                lokasi: "",
                                maps: "",
                                gambar: "",
                                detail: "",
                                harga: "",
                            });
                            setEditId(null);
                            setIsFormVisible(true);
                        }}
                    />
                </div>

                <DataTable
                    value={hotelList.filter((item) =>
                        item.nama
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    )}
                    paginator
                    rows={5}
                    responsiveLayout="scroll"
                >
                    <Column
                        header="ID"
                        style={{ width: "5%" }}
                        body={(rowData, options) => (
                            <span>{options.rowIndex + 1}</span>
                        )}
                    />
                    <Column field="nama" header="Nama Hotel" />
                    <Column field="lokasi" header="Lokasi" />
                    <Column
                        field="maps"
                        header="Maps"
                        body={(row) => (
                            <a href={row.maps} target="_blank" rel="noreferrer">
                                Lihat Peta
                            </a>
                        )}
                    />
                    <Column header="Gambar" body={imageBodyTemplate} />
                    <Column field="detail" header="Detail" />
                    <Column
                        field="harga"
                        header="Harga"
                        body={hargaBodyTemplate}
                    />
                    <Column header="Aksi" body={actionBodyTemplate} />
                </DataTable>
            </div>

            {/* Form Dialog */}
            <Dialog
                header={editId ? "Edit Hotel" : "Tambah Hotel"}
                visible={isFormVisible}
                style={{ width: "50vw" }}
                modal
                onHide={() => setIsFormVisible(false)}
            >
                <div className="p-fluid">
                    <label>Nama Hotel</label>
                    <InputText
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                    />

                    <label>Lokasi</label>
                    <InputText
                        name="lokasi"
                        value={formData.lokasi}
                        onChange={handleInputChange}
                    />

                    <label>URL Google Maps</label>
                    <InputText
                        name="maps"
                        value={formData.maps}
                        onChange={handleInputChange}
                        maxLength={255}
                    />

                    <label>URL Gambar</label>
                    <InputText
                        name="gambar"
                        value={formData.gambar}
                        onChange={handleInputChange}
                    />

                    <label>Detail</label>
                    <InputText
                        name="detail"
                        value={formData.detail}
                        onChange={handleInputChange}
                    />

                    <label>Harga</label>
                    <InputNumber
                        name="harga"
                        value={formData.harga}
                        onValueChange={(e) => handleHargaChange(e.value)}
                        mode="currency"
                        currency="IDR"
                        locale="id-ID"
                        className="w-full"
                    />

                    <Button
                        label={editId ? "Simpan Perubahan" : "Tambah Hotel"}
                        onClick={handleAddHotel}
                        className="mt-4"
                    />
                </div>
            </Dialog>

            {/* Image Dialog */}
            <Dialog
                header="Gambar Hotel"
                visible={isDialogVisible}
                style={{ width: "50vw" }}
                modal
                onHide={() => setIsDialogVisible(false)}
            >
                <img
                    src={selectedImage}
                    alt="Preview"
                    style={{ width: "100%", borderRadius: "8px" }}
                    onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/400x300")
                    }
                />
            </Dialog>
        </Layout>
    );
};

export default HotelPage;
