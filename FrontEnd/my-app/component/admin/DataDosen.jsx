import AdminLayout from "./AdminLayout"
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import DosenCari from "./DosenCari";
const DataDosen = ({ data }) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    async function hapusDosen(nidn) {
        try {
            const response = await axios.delete(
                `http://localhost:5000/dosen/${nidn}`
            );
            if (response.data.message) {
                setMessage(response.data.message);
            }
            alert(`Dosen dengan NIDN ${nidn} telah di hapus`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin/datadosen')
    }
    return (
        <>
            <AdminLayout>
                <h1 className="text-center">Data Dosen</h1>
                <div className="container mt-3">
                    <DosenCari/>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Nidn</th>
                                <th>Nama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((dsn, idx) => (
                                <tr key={idx}>
                                    <td>{dsn.nidn}</td>
                                    <td>{dsn.namadosen}</td>
                                    <td>
                                        <Link href={`/admin/updatedosen?nidn=${dsn.nidn}
                                            &namadosen${dsn.namadosen}`}>
                                            <a class="btn btn-outline-success" role="button">Edit</a>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" value={dsn.nidn}
                                            onClick={(e) => hapusDosen(e.target.value)}
                                            class="btn btn-danger btn-md">Hapus</button>
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
export default DataDosen;