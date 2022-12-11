import "bootstrap/dist/css/bootstrap.min.css"
import DataDosen from "../../component/admin/DataDosen"

const datadosen =({data}) =>{
    
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <DataDosen data ={data}/>
        </>
    )
}


export async function getServerSideProps({query}) {
    const nidn = query.nidn;
    
    let url = 'http://localhost:5000/dosen'
    if (typeof nidn === 'string') {
        url = `http://localhost:5000/dosen/${nidn}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datadosen;