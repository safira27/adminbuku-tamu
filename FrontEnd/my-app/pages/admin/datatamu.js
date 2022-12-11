import "bootstrap/dist/css/bootstrap.min.css"
import DataTamu from "../../component/admin/DataTamu"

const datatamu =({data}) =>{
    
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <DataTamu data ={data}/>
        </>
    )
}


export async function getServerSideProps({query}) {
    const kode_tamu = query.kode_tamu;
    
    let url = 'http://localhost:5000/data_tamu'
    if (typeof kode_tamu === 'string') {
        url = `http://localhost:5000/data_tamu/${kode_tamu}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datatamu;