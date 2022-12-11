import SideBars from "./SideBars"
const AdminLayout = ({children}) =>{
    return(
        <>
        <SideBars>
        {children}
        </SideBars>
        </>
    )
}
export default AdminLayout;