import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Layout from "@/Layouts/layout/layout";
import axios from "@/lib/axios";

const WisataPage = () => {
    const [wisataList, setWisataList] = useState([]);
    const [formData, setFormData] = useState({
        nama: "",
        lokasi: "",
        maps: "",
        gambar: "",
        detail: "",
        kategori: "",
        fasilitas: [],
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWisataList();
    }, []);

    const fetchWisataList = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/wisata");
            setWisataList(response.data.data);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch wisata data");
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "fasilitas") {
            const updatedFasilitas = checked
                ? [...formData.fasilitas, value]
                : formData.fasilitas.filter((item) => item !== value);
            setFormData({ ...formData, fasilitas: updatedFasilitas });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddWisata = async () => {
        if (!formData.nama || !formData.lokasi) return;

        try {
            setLoading(true);
            if (editId !== null) {
                const putData = {
                    nama: formData.nama,
                    lokasi: formData.lokasi,
                    maps: formData.maps,
                    gambar: formData.gambar,
                    detail: formData.detail,
                };
                const response = await axios.put(
                    `/api/wisata/${editId}`,
                    putData
                );
                setWisataList(
                    wisataList.map((item) =>
                        item.id === editId ? response.data.data : item
                    )
                );
            } else {
                const postData = {
                    nama: formData.nama,
                    lokasi: formData.lokasi,
                    maps: formData.maps,
                    gambar: formData.gambar,
                    detail: formData.detail,
                };
                const response = await axios.post("/api/wisata", postData);
                setWisataList([...wisataList, response.data.data]);
            }
            setFormData({
                nama: "",
                lokasi: "",
                maps: "",
                gambar: "",
                detail: "",
                kategori: "",
                fasilitas: [],
            });
            setEditId(null);
            setIsFormVisible(false);
            setLoading(false);
        } catch (err) {
            setError("Failed to save wisata data");
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus data ini?")) return;

        try {
            setLoading(true);
            await axios.delete(`/api/wisata/${id}`);
            setWisataList(wisataList.filter((item) => item.id !== id));
            setLoading(false);
        } catch (err) {
            setError("Failed to delete wisata data");
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

    return (
        <Layout>
            <div className="card">
                <div className="mb-4">
                    <h3>Daftar Wisata</h3>
                </div>
                <div className="flex justify-end mb-4 gap-2">
                    <InputText
                        placeholder="Cari Wisata..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button
                        label="Tambah Wisata"
                        icon="pi pi-plus"
                        onClick={() => {
                            setFormData({
                                nama: "",
                                lokasi: "",
                                maps: "",
                                gambar: "",
                                detail: "",
                                kategori: "",
                                fasilitas: [],
                            });
                            setEditId(null);
                            setIsFormVisible(true);
                        }}
                    />
                </div>

                <DataTable
                    value={wisataList.filter((item) =>
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
                    <Column field="nama" header="Nama Wisata" />
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
                    <Column header="Aksi" body={actionBodyTemplate} />
                </DataTable>
            </div>

            <Dialog
                header={editId ? "Edit Wisata" : "Tambah Wisata"}
                visible={isFormVisible}
                style={{ width: "50vw" }}
                modal
                onHide={() => setIsFormVisible(false)}
            >
                <div className="p-fluid">
                    <label>Nama Wisata</label>
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

                    <label>Kategori</label>
                    <select
                        name="kategori"
                        value={formData.kategori}
                        onChange={handleInputChange}
                    >
                        <option value="">Pilih Kategori</option>
                        <option value="pantai">Pantai</option>
                        <option value="gunung">Gunung</option>
                        <option value="hutan">Hutan</option>
                        <option value="air terjun">Air Terjun</option>
                        <option value="taman nasional">Taman Nasional</option>
                        <option value="situs budaya">Situs Budaya</option>
                        <option value="fasilitas publik">
                            Fasilitas Publik
                        </option>
                    </select>

                    <label>Fasilitas</label>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Toilet",
                            "Parkir",
                            "Restoran",
                            "Penginapan",
                            "Area Bermain",
                            "WiFi",
                        ].map((item) => (
                            <label key={item}>
                                <input
                                    type="checkbox"
                                    name="fasilitas"
                                    value={item}
                                    checked={(
                                        formData.fasilitas || []
                                    ).includes(item)}
                                    onChange={handleInputChange}
                                />{" "}
                                {item}
                            </label>
                        ))}
                    </div>

                    <Button
                        label={editId ? "Simpan Perubahan" : "Tambah Wisata"}
                        onClick={handleAddWisata}
                        className="mt-4"
                    />
                </div>
            </Dialog>

            <Dialog
                header="Gambar Wisata"
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

export default WisataPage;
