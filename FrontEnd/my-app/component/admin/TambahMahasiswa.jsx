import { useState } from "react";
import axios from "axios";

const TambahMahasiswa = () => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [angkatan, setAngkatan] = useState('');
    const [prodi, setProdi] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/mahasiswa", {
                    nim,
                    nama,
                    angkatan,
                    prodi,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Penambahan Data Sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setNim('')
        setNama('')
        setAngkatan('')
        setProdi('')
    }
    return (
        <div>
            <h1 className="text-center">Input Mahasiswa</h1>
            <br />
            <div className="container ">
                <div className="row">
                    <form onSubmit={submitHandler}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nim" 
                                    value={nim} 
                                    onChange={(e) => setNim(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Nim</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nama" 
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Nama</strong></label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="angkatan"
                                    value={angkatan}
                                    onChange={(e) => setAngkatan(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Angkatan</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="prodi"
                                    value={prodi}
                                    onChange={(e) => setProdi(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Program Studi</strong></label>
                                </div>
                            </div>
                            {/* Submit button */}
                        <button type="submit" className="btn btn-dark justify-content-center col-5">Tambah Mahasiswa</button>
                        </div>
                    </form>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}

export default TambahMahasiswa;