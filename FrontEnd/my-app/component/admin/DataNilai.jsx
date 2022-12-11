import AdminLayout from "./AdminLayout"
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import NilaiCari from "./NilaiCari";
const DataNilai = ({nim, data }) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    console.log(data)
    return (
        <>
            <AdminLayout>
                <h1 className="text-center">Data Nilai</h1>
                <div className="container mt-3">
                    <NilaiCari/>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Nim</th>
                                <th>Nama</th>
                                <th>Kode Matakuliah</th>
                                <th>Matakuliah</th>
                                <th>Dosen</th>
                                <th>Semester</th>
                                <th>Nilai</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((mhs, idx) => (
                                <tr key={idx}>
                                    <td>{nim}{mhs.nim}</td>
                                    <td>{mhs.nama}</td>
                                    <td>{mhs.kdMk}</td>
                                    <td>{mhs.matakuliah}</td>
                                    <td>{mhs.dosen}</td>
                                    <td>{mhs.semester}</td>
                                    <td>{mhs.nilai}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
        </>
    )
}
export default DataNilai;