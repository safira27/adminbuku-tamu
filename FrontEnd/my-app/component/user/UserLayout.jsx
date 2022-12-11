import Footer from "./Footer";
import Nav from "./Nav";
const UserLayout = ({children}) =>{
    return(
        <>
        <Nav/>
        {children}
        <Footer/>
        </>
    )
}
export default UserLayout;