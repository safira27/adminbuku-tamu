import AdminLayout from "./AdminLayout"
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import TamuCari from "./TamuCari";
const Data_Tamu = ({ data }) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusTamu(kode_tamu) {
        try {
            const response = await axios.delete(
                `http://localhost:5000/data_tamu/${kode_tamu}`
            );
            if (response.data.message) {
                setMessage(response.data.message);
            }
            alert(`tamu dengan KODE ${kode_tamu} telah di hapus`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin/data_tamu')
    }
    return (
        <>
            <AdminLayout>
                <h1 className="text-center">Data Tamu</h1>
                <div className="container mt-3">
                    <TamuCari/>
                    <table>
                        <thead>
                            <tr>
                                <th>kode tamu</th>
                                <th>nama</th>
                                <th>instansi</th>
                                <th>tanggal datang</th>
                                <th>keperluan</th>
                                <th>pegawai</th>


                            </tr>
                        </thead>
                        <tbody>
                            {data.map((tamu, idx) => (
                                <tr key={idx}>
                                    <td>{tamu.kode_tamu}</td>
                                    <td>{tamu.nama}</td>
                                    <td>{tamu.instansi}</td>
                                    <td>{tamu.tanggal_datang}</td>
                                    <td>{tamu.keperluan}</td>
                                    <td>{tamu.pegawai}</td>

                                    <td>
                                        <Link href={`/admin/updatedata_tamu?kode_tamu=${tamu.kode_tamu}
                                            &nama${tamu.nama}`}>
                                            <a role="button">Edit</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" value={tamu.kode_tamu}
                                            onClick={(e) => hapusTamu(e.target.value)}
                                            >Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
        </>
    )
}
export default Data_Tamu;