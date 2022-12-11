import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateDosen =() =>{
    const [_nidn, setNidn] = useState('');
    const [_namadosen, setNamaDosen] = useState('');
    const router = useRouter();
    const {nidn, namadosen} = router.query;

    useEffect(() =>{
        if (typeof nidn =='string') {
            setNidn(nidn);
        }
        if (typeof namadosen =='string') {
            setNamaDosen(namadosen);
        }
    },[nidn,namadosen])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios
                .put(`http://localhost:5000/dosen/${_nidn}`, {
                    nidn : _nidn,
                    namadosen : _namadosen,
                })
                .then(response => {
                    console.log(response)
                });
            alert("Update Data Sukses")
            Router.push('/admin/datadosen')
        } catch (e) {
            console.log({ message : e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
            <form onSubmit={submitHandler}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4 justify-content-center">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="nidn" 
                                    value={_nidn} 
                                    onChange={(e) => setNidn(e.target.value)} 
                                    className="form-control mb-2" />
                                    <label htmlFor="form6Example1"><strong>Nidn</strong></label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" 
                                    id="namadosen" 
                                    value={_namadosen}
                                    onChange={(e) => setNamaDosen(e.target.value)}
                                    className="form-control mb-2" />
                                    <label className="form-label" htmlFor="form6Example2"><strong>Nama</strong></label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark justify-content-center col-5">Update</button>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default UpdateDosen;