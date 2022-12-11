import AdminLayout from "../../component/admin/AdminLayout";
import "bootstrap/dist/css/bootstrap.min.css"
import UpdateDosen from "../../component/admin/UpdateDosen";

const updatedosen = () => {
    return(
        <div>
            <AdminLayout>
                <UpdateDosen/>
            </AdminLayout>
        </div>
    );
}
export default updatedosen;