import { useState } from "react";
import axios from "axios";

const TambahDosen = () => {
    const [nidn, setNidn] = useState('');
    const [namadosen, setNamaDosen] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/dosen", {
                    nidn,
                    namadosen,
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
        setNidn('')
        setNamaDosen('')
    }
    return (
        <div>
            <h1 className="text-center">Input Dosen</h1>
            <br />
            <div className="container ">
                <div className="row">
                    <form onSubmit={submitHandler}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nidn" 
                                    value={nidn} 
                                    onChange={(e) => setNidn(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Nidn</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="namadosen" 
                                    value={namadosen}
                                    onChange={(e) => setNamaDosen(e.target.value)}
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Nama</strong></label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark justify-content-center col-5">Tambah Dosen</button>
                        </div>
                    </form>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}

export default TambahDosen;