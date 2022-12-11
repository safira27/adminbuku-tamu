import AdminLayout from "../../component/admin/AdminLayout";
import UpdateMahasiswa from "../../component/admin/UpdateMahasiswa";
import "bootstrap/dist/css/bootstrap.min.css"

const updatemahasiswa = () => {
    return(
        <div>
            <AdminLayout>
                <UpdateMahasiswa/>
            </AdminLayout>
                
        </div>
    );
}
export default updatemahasiswa;