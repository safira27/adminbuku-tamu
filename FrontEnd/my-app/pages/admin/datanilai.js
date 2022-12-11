import "bootstrap/dist/css/bootstrap.min.css"
import DataNilai from "../../component/admin/DataNilai";

const datanilai =({nim,data}) =>{
    
    {Array.isArray(data)? data=data : data =[data]}
    return(
        <>
        <div>
          <DataNilai nim = {nim} data ={data}/>        
        </div>
        </>
    )
}


export async function getServerSideProps({query}) {
    const nim = query.nim;
    
    let url = 'http://localhost:5000/nilai'
    if (typeof nim === 'string') {
        url = `http://localhost:5000/nilai/${nim}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    if (typeof nim === 'string') {
        return {props : {nim,data}}
        
    }
    else{
        return {props : {data}}
    }
}

export default datanilai;