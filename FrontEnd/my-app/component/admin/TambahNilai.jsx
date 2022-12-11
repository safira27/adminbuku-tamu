import { useState } from "react";
import axios from "axios";

const TambahNilai = () => {
    const [nim, setNim] = useState('');
    const [kdMk, setKdMk] = useState('');
    const [dosen, setDosen] = useState('');
    const [semester, setSemester] = useState('');
    const [nilai, setNilai] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/nilai", {
                    nim,
                    kdMk,
                    dosen,
                    semester,
                    nilai,
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
        setKdMk('')
        setDosen('')
        setSemester('')
        setNilai('')
    }
    return (
        <div>
            <h1 className="text-center">Input Nilai</h1>
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
                                    id="kdMk" 
                                    value={kdMk}
                                    onChange={(e) => setKdMk(e.target.value)}
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Kode Matakuliah</strong></label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="dosen"
                                    value={dosen}
                                    onChange={(e) => setDosen(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Nama Dosen</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="semester"
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Semester</strong></label>
                                </div>
                            </div>
                            {/* Submit button */}
                        </div>
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nilai"
                                    value={nilai}
                                    onChange={(e) => setNilai(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Nilai</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                            
                            </div>
                            {/* Submit button */}
                        <button type="submit" className="btn btn-dark justify-content-center col-5">Tambah Nilai</button>
                        </div>
                    </form>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}

export default TambahNilai;