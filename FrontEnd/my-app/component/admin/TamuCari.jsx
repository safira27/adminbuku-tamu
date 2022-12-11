import { useState } from "react";
import {useRouter} from "next/router"

const TamuCari = () =>{
    const [kode_tamu, setKode_tamu] = useState('')
    const router = useRouter()
    const getData_tamuByKode_tamu = (e) =>{
        e.preventDefault();
        console.log(kode_tamu)
        router.push({
            pathname : 'datatamu',
            query : {'kode_tamu': kode_tamu}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getData_tamuByKode_tamu}>
                <div className="row"> 
                <div className="col-8"></div>
                <div className="col d-flex flex-reverse">
                        <input type='text' className="form-control" value={kode_tamu} onChange={(e)=>setKode_tamu(e.target.value)} placeholder="Cari tamu by kode_tamu" />
                        <input type="submit" value="Cari"  className="btn btn-success ms-1 fs-6"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default TamuCari;
