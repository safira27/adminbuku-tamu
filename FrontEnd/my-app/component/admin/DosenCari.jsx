import { useState } from "react";
import {useRouter} from "next/router"

const DosenCari = () =>{
    const [nidn, setNidn] = useState('')
    const router = useRouter()
    const getDsnByNidn = (e) =>{
        e.preventDefault();
        console.log(nidn)
        router.push({
            pathname : 'datadosen',
            query : {'nidn': nidn}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getDsnByNidn}>
                <div className="row"> 
                <div className="col-8"></div>
                <div className="col d-flex flex-reverse">
                        <input type='text' className="form-control" value={nidn} onChange={(e)=>setNidn(e.target.value)} placeholder="Cari Dosen by nidn" />
                        <input type="submit" value="Cari"  className="btn btn-success ms-1 fs-6"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default DosenCari;
