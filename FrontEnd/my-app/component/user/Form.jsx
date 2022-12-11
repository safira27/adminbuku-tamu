import { useState } from "react";
    import axios from "axios";

const TambahData_Tamu = () => {
    const [kode_tamu, setKode_tamu] = useState('');
    const [nama, setNama] = useState('');
    const [instansi, setInstansi] = useState('');
    const [tanggal_datang, setTanggal_Datang] = useState('');
    const [keperluan, setKeperluan] = useState('');
    const [pegawai, setPegawai] = useState('');



    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/data_tamu", {
                    kode_tamu,
                    nama,
                    instansi,
                    tanggal_datang,
                    keperluan,
                    pegawai
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
        setKode_tamu('')
        setNama('')
        setInstansi('')
        setTanggal_Datang('')
        setKeperluan('')
        setPegawai('')
    }
    return (
        <div>
    <div class="top-1 left-2  z-20">
      <img class="" src="./smknlogo 4.png" alt=""/>
    </div>
            <br />
            <div className="container ">
                <div className="row">
                    
                    <form onSubmit={submitHandler}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text"  
                                    id="kode_tamu" 
                                    value={kode_tamu} 
                                    onChange={(e) => setKode_tamu(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>kode_tamu</strong></label>
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
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="instansi" 
                                    value={instansi}
                                    onChange={(e) => setInstansi(e.target.value)}
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Nama instansi</strong></label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="tanggal_datang"
                                    value={tanggal_datang}
                                    onChange={(e) => setTanggal_Datang(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>tanggal datang</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="keperluan"
                                    value={keperluan}
                                    onChange={(e) => setKeperluan(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>keperluan</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="pegawai"
                                    value={pegawai}
                                    onChange={(e) => setPegawai(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>pegawai</strong></label>
                                </div>
                            </div>
                            {/* Submit button */}
                        <button type="submit" className="btn btn-dark bg-color-black justify-content-center col-5">Tambah data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TambahData_Tamu;