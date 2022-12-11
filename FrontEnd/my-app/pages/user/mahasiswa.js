import "bootstrap/dist/css/bootstrap.min.css"
import UserLayout from "../../component/user/UserLayout";
import Mahasiswa from "../../component/user/Mahasiswa";
export default function mahasiswa() {
  return (
    <UserLayout>
        <Mahasiswa/>
    </UserLayout>
  )
}
