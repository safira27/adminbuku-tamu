import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/dist/client/link";
import AdminLayout from "../../component/admin/AdminLayout"
import HomeB from "../../component/admin/HomeB";
export default function Home() {
  return (
    <>
    <AdminLayout>
        <HomeB/>
    </AdminLayout>
    </>
  )
}
